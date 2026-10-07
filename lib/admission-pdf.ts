import { readFile } from "node:fs/promises";
import path from "node:path";
import fontkit, { type Font } from "@pdf-lib/fontkit";
import { PDFDocument, StandardFonts, degrees, rgb, type Color, type PDFFont, type PDFImage, type PDFPage } from "pdf-lib";
import type { AdmissionFields } from "@/lib/admission";

/*
  Layout mirrors the school's printed admission form so the office can file online
  and paper applications together. Fields the website doesn't collect (father's name,
  date of birth, religion, ...) are left as empty boxes to be completed by hand, and
  the website-only answers (gender, age, phone, email, notes) get rows of their own.
*/

const PAGE_W = 595.28; // A4
const PAGE_H = 841.89;
const MARGIN = 36;
const LEFT = MARGIN;
const RIGHT = PAGE_W - MARGIN;
const CONTENT_W = RIGHT - LEFT;
const MID = LEFT + CONTENT_W * 0.55; // start of the right-hand column in two-answer rows
const PAD = 8; // inner padding of table rows
const VALUE_X = LEFT + 140; // where answers start, clear of the longest label
const VALUE_W = RIGHT - PAD - VALUE_X;
const CELL_W = 18.5;
const CELL_H = 15;
const NAME_COLS = 20;
const LABEL_SIZE = 8.5;
const MIN_SIZE = 7;
// Printed parts of the form in slate, answers in pen-blue, like the paper original.
const PRINT = rgb(0.28, 0.3, 0.36);
const INK = rgb(0.06, 0.2, 0.55);
const MUTED = rgb(0.5, 0.5, 0.5);
const DARK = rgb(0.1, 0.1, 0.1);

export type Upload = { name: string; type: string; bytes: Uint8Array };

type Fonts = { latin: PDFFont; urdu: Font | null };
type Run = { text: string; rtl: boolean };

// Arabic-script letters, marks and punctuation (Urdu included); digits are handled separately.
const URDU_CHAR = /[؀-ٟ٪-ۯۺ-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]/;
const LATIN_LETTER = /[A-Za-z]/;

function normalize(text: string) {
  return text
    .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660))
    .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
    .replace(/[–—]/g, "-")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"');
}

// Standard PDF fonts only cover Latin-1; replace anything else so drawing never throws.
function latinSafe(text: string) {
  return text.replace(/[^\x20-\x7E\xA0-\xFF]/g, "?");
}

/** Splits a line into Urdu and non-Urdu runs; spaces stick to the run before them. */
function toRuns(line: string, fonts: Fonts): Run[] {
  const runs: Run[] = [];
  for (const ch of line) {
    const urdu = fonts.urdu !== null && URDU_CHAR.test(ch);
    const last = runs[runs.length - 1];
    if (last && (last.rtl === urdu || ch === " ")) {
      last.text += ch;
    } else {
      runs.push({ text: ch, rtl: urdu });
    }
  }
  for (const run of runs) if (!run.rtl) run.text = latinSafe(run.text);
  return runs;
}

function isRtlParagraph(text: string) {
  for (const ch of text) {
    if (URDU_CHAR.test(ch)) return true;
    if (LATIN_LETTER.test(ch)) return false;
  }
  return false;
}

function runWidth(run: Run, fonts: Fonts, size: number) {
  if (run.rtl && fonts.urdu) return (fonts.urdu.layout(run.text).advanceWidth * size) / fonts.urdu.unitsPerEm;
  return fonts.latin.widthOfTextAtSize(run.text, size);
}

function measure(line: string, fonts: Fonts, size: number) {
  return toRuns(line, fonts).reduce((sum, r) => sum + runWidth(r, fonts, size), 0);
}

// fontkit paths are y-up; drawSvgPath expects SVG's y-down, so negate every y coordinate.
function flipY(svg: string) {
  let i = 0;
  return svg.replace(/[A-Za-z]|-?\d*\.?\d+(?:e[-+]?\d+)?/g, (token) => {
    if (/[A-Za-z]/.test(token)) {
      i = 0;
      return token;
    }
    return i++ % 2 === 1 ? String(-Number(token)) : token;
  });
}

/**
 * pdf-lib's own text drawing ignores OpenType mark positioning, which misplaces the
 * dots and small marks on Urdu letters. Instead, shape with fontkit (joining forms,
 * right-to-left order, mark offsets) and draw each glyph as a vector path.
 */
function drawUrduRun(page: PDFPage, font: Font, text: string, x: number, y: number, size: number, color: Color) {
  const run = font.layout(text);
  const scale = size / font.unitsPerEm;
  let pen = x;
  run.glyphs.forEach((glyph, i) => {
    const pos = run.positions[i];
    const svg = glyph.path.toSVG();
    if (svg) {
      page.drawSvgPath(flipY(svg), {
        x: pen + pos.xOffset * scale,
        y: y + pos.yOffset * scale,
        scale,
        color,
      });
    }
    pen += pos.xAdvance * scale;
  });
}

type Line = { text: string; rtl: boolean };

function wrap(text: string, fonts: Fonts, size: number, maxWidth: number): Line[] {
  const lines: Line[] = [];
  for (const paragraph of normalize(text).split("\n")) {
    const rtl = isRtlParagraph(paragraph);
    let line = "";
    for (const word of paragraph.split(/\s+/)) {
      const next = line ? `${line} ${word}` : word;
      if (measure(next, fonts, size) <= maxWidth) {
        line = next;
      } else {
        if (line) lines.push({ text: line, rtl });
        line = word;
      }
    }
    lines.push({ text: line, rtl });
  }
  return lines;
}

/** Shortens a line until it fits, marking the cut with "...". */
function clip(line: Line, fonts: Fonts, size: number, maxWidth: number, force = false): Line {
  if (!force && measure(line.text, fonts, size) <= maxWidth) return line;
  let text = line.text.trimEnd();
  while (text && measure(`${text}...`, fonts, size) > maxWidth) text = text.slice(0, -1).trimEnd();
  return { ...line, text: `${text}...` };
}

/**
 * Wraps text into at most `maxLines` lines at the largest size (down to 7pt) where it
 * fits. If it never fits, the overflow is cut and `complete` is false.
 */
function fit(text: string, fonts: Fonts, maxWidth: number, maxLines: number, size: number) {
  for (let s = size; s >= MIN_SIZE; s -= 0.5) {
    const lines = wrap(text, fonts, s, maxWidth);
    if (lines.length <= maxLines && lines.every((l) => measure(l.text, fonts, s) <= maxWidth)) {
      return { lines, size: s, complete: true };
    }
  }
  const all = wrap(text, fonts, MIN_SIZE, maxWidth);
  const lines = all.slice(0, maxLines).map((l, i) => clip(l, fonts, MIN_SIZE, maxWidth, i === maxLines - 1 && all.length > maxLines));
  return { lines, size: MIN_SIZE, complete: false };
}

/**
 * Draws a line of mixed Urdu/English text. Each Urdu run is shaped (joined letters,
 * right-to-left) by fontkit; runs are laid out left-to-right for English paragraphs
 * and right-to-left (right-aligned) for Urdu paragraphs.
 */
function drawLine(page: PDFPage, line: Line, fonts: Fonts, x: number, maxWidth: number, y: number, size: number, color: Color) {
  const runs = toRuns(line.text, fonts).map((r) => ({ ...r, text: line.rtl ? r.text.trim() : r.text }));
  const gap = fonts.latin.widthOfTextAtSize(" ", size);
  let cursor = line.rtl ? x + maxWidth : x;
  for (const run of runs) {
    if (!run.text) continue;
    const w = runWidth(run, fonts, size);
    const drawX = line.rtl ? cursor - w : cursor;
    if (run.rtl && fonts.urdu) drawUrduRun(page, fonts.urdu, run.text, drawX, y, size, color);
    else page.drawText(run.text, { x: drawX, y, size, font: fonts.latin, color });
    cursor = line.rtl ? drawX - gap : cursor + w;
  }
}

/**
 * Splits a name into block-letter box rows, keeping words whole where possible.
 * Returns null when it can't be boxed (Urdu script, or longer than the boxes).
 */
function boxRows(text: string, cols: number, rows: number): string[] | null {
  if (URDU_CHAR.test(text)) return null;
  const clean = latinSafe(normalize(text).toUpperCase()).replace(/\s+/g, " ").trim();
  if (clean.length > cols * rows) return null;
  const out = [""];
  for (const word of clean.split(" ")) {
    const last = out[out.length - 1];
    const next = last ? `${last} ${word}` : word;
    if (next.length <= cols) out[out.length - 1] = next;
    else if (word.length <= cols && out.length < rows) out.push(word);
    else return Array.from({ length: rows }, (_, i) => clean.slice(i * cols, (i + 1) * cols)); // break mid-word
  }
  return out;
}

/** Day, month and two-digit year in Pakistan time, for the registration date boxes. */
function pktDateParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Karachi",
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return [get("day"), get("month"), get("year")];
}

async function loadUrduFont(): Promise<Font | null> {
  try {
    const bytes = await readFile(path.join(process.cwd(), "lib/fonts/NotoNaskhArabic-Regular.ttf"));
    return fontkit.create(new Uint8Array(bytes));
  } catch (err) {
    console.error("Could not load Urdu font:", err);
    return null;
  }
}

async function loadLogo(doc: PDFDocument): Promise<PDFImage | null> {
  try {
    const bytes = await readFile(path.join(process.cwd(), "public/assets/images/rahmia-logo.jpeg"));
    return await doc.embedJpg(bytes);
  } catch {
    return null;
  }
}

/**
 * Builds the admission application PDF. An uploaded JPG/PNG is placed on its own
 * page; an uploaded PDF has its pages appended. Returns `mergedUpload: false` when
 * the upload could not be included (e.g. an encrypted PDF) so the caller can attach
 * it separately.
 */
export async function buildAdmissionPdf(f: AdmissionFields, upload: Upload | null, submittedAt: Date) {
  const doc = await PDFDocument.create();
  doc.setTitle(`Admission Application - ${f.childName}`);
  doc.setAuthor("RAHMA Model School");

  const regular = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fonts: Fonts = { latin: regular, urdu: await loadUrduFont() };
  const logo = await loadLogo(doc);
  const page = doc.addPage([PAGE_W, PAGE_H]);

  const label = (text: string, x: number, y: number, size = LABEL_SIZE) =>
    page.drawText(text, { x, y, size, font: bold, color: PRINT });
  const labelW = (text: string, size = LABEL_SIZE) => bold.widthOfTextAtSize(text, size);
  const box = (x: number, top: number, w: number, h: number) =>
    page.drawRectangle({ x, y: top - h, width: w, height: h, borderColor: PRINT, borderWidth: 0.8 });
  const rule = (x1: number, x2: number, y: number, thickness = 0.8) =>
    page.drawLine({ start: { x: x1, y }, end: { x: x2, y }, thickness, color: PRINT });

  /** Writes an answer in pen-blue, shrinking or wrapping to stay inside `maxWidth`. */
  const write = (text: string, x: number, y: number, maxWidth: number, maxLines = 1, size = 10.5) => {
    const fitted = fit(text, fonts, maxWidth, maxLines, size);
    const lineHeight = fitted.size * (fitted.lines.some((l) => l.rtl) ? 1.7 : 1.3);
    fitted.lines.forEach((line, i) => drawLine(page, line, fonts, x, maxWidth, y - i * lineHeight, fitted.size, INK));
    return fitted.complete;
  };

  /** A row of character boxes. `guides` are cells pre-printed with a dash (CNIC, dates). */
  const cells = (x: number, top: number, contents: string[], cellW = CELL_W, guides: number[] = []) => {
    contents.forEach((content, i) => {
      const cx = x + i * cellW;
      box(cx, top, cellW, CELL_H);
      const [text, font, color] = guides.includes(i) ? ["-", bold, PRINT] : [latinSafe(content), regular, INK];
      if (!text) return;
      const size = 11;
      const w = font.widthOfTextAtSize(text, size);
      page.drawText(text, { x: cx + (cellW - w) / 2, y: top - CELL_H + 4, size, font, color });
    });
  };

  /** Name boxes over `rows` lines; names that can't be boxed are written across the area. */
  const nameBoxes = (text: string, top: number, rows: number) => {
    const boxed = text ? boxRows(text, NAME_COLS, rows) : Array<string>(rows).fill("");
    if (!boxed) {
      box(VALUE_X, top, NAME_COLS * CELL_W, rows * CELL_H);
      write(text, VALUE_X + 5, top - 12, NAME_COLS * CELL_W - 10, rows);
      return;
    }
    for (let r = 0; r < rows; r++) {
      const row = (boxed[r] ?? "").padEnd(NAME_COLS, " ");
      cells(VALUE_X, top - r * CELL_H, [...row].map((c) => c.trim()));
    }
  };

  // ── Header: logo, title and photograph box ──
  let y = PAGE_H - MARGIN;
  const photoW = 84;
  const photoH = 100;
  box(RIGHT - photoW, y, photoW, photoH);
  {
    const text = "Photograph";
    const size = 10;
    const w = regular.widthOfTextAtSize(text, size);
    const a = (50 * Math.PI) / 180;
    const cx = RIGHT - photoW / 2;
    const cy = y - photoH / 2;
    page.drawText(text, {
      x: cx - (w / 2) * Math.cos(a) + 3.5 * Math.sin(a),
      y: cy - (w / 2) * Math.sin(a) - 3.5 * Math.cos(a),
      size,
      font: regular,
      color: PRINT,
      rotate: degrees(50),
    });
  }

  const logoH = 70;
  if (logo) page.drawImage(logo, { x: LEFT - 4, y: y - logoH - 6, width: logoH, height: logoH });
  const titleCenter = (LEFT + logoH + RIGHT - photoW) / 2;
  for (const [text, size, baseline] of [
    ["ADMISSION FORM", 19, y - 36],
    ["RAHMA MODEL SCHOOL", 21, y - 62],
  ] as const) {
    label(text, titleCenter - labelW(text, size) / 2, baseline, size);
  }
  y -= photoH + 10;

  // ── Office box: form/registration numbers, standard and registration date ──
  const officeH = 46;
  const split = LEFT + 250;
  box(LEFT, y, CONTENT_W, officeH);
  page.drawLine({ start: { x: split, y }, end: { x: split, y: y - officeH }, thickness: 0.8, color: PRINT });

  label("ADMISSION FORM NO:", LEFT + PAD, y - 18);
  box(LEFT + 122, y - 7, split - LEFT - 122 - PAD, 14);
  label("REGISTRATION NO:", LEFT + PAD, y - 37);
  box(LEFT + 122, y - 26, split - LEFT - 122 - PAD, 14);

  const stdX = split + 10 + labelW("STANDARD:") + 8;
  label("STANDARD:", split + 10, y - 18);
  box(stdX, y - 7, RIGHT - PAD - stdX, 14);
  write(f.program, stdX + 4, y - 17.5, RIGHT - PAD - stdX - 8, 1, 9);

  const dateX = split + 10 + labelW("DATE OF REGISTRATION:") + 8;
  label("DATE OF REGISTRATION:", split + 10, y - 37);
  pktDateParts(submittedAt).forEach((part, i) => cells(dateX + i * 28, y - 26, [part], 25));
  y -= officeH;

  const heading = "INFORMATION";
  label(heading, (PAGE_W - labelW(heading, 13)) / 2, y - 18, 13);
  y -= 26;

  // ── Information table ──
  const tableTop = y;
  const row = (h: number, draw: (top: number) => void) => {
    draw(y);
    y -= h;
    rule(LEFT, RIGHT, y);
  };
  const textRow = (name: string, value = "", h = 19) =>
    row(h, (top) => {
      label(name, LEFT + PAD, top - h + 6);
      if (value) write(value, VALUE_X, top - h + 6, VALUE_W);
    });
  /** Two label/answer pairs side by side. */
  const pairRow = (a: [string, string], b: [string, string], h = 19) =>
    row(h, (top) => {
      const base = top - h + 6;
      label(a[0], LEFT + PAD, base);
      if (a[1]) write(a[1], VALUE_X, base, MID - PAD - VALUE_X);
      label(b[0], MID, base);
      const bx = MID + labelW(b[0]) + 8;
      if (b[1]) write(b[1], bx, base, RIGHT - PAD - bx);
    });

  const nameH = CELL_H * 2 + 10;
  row(nameH, (top) => {
    label("NAME:", LEFT + PAD, top - nameH / 2 - 3);
    nameBoxes(f.childName, top - 5, 2);
  });
  row(nameH, (top) => {
    label("FATHER'S NAME:", LEFT + PAD, top - nameH / 2 - 3);
    nameBoxes("", top - 5, 2);
  });
  row(nameH, (top) => {
    label("GUARDIAN'S NAME:", LEFT + PAD, top - 15);
    // Yes / No ticks as on the paper form, left for the office.
    label("Yes", LEFT + PAD, top - 31, 8);
    box(LEFT + PAD + 18, top - 23, 10, 10);
    label("No", LEFT + PAD + 38, top - 31, 8);
    box(LEFT + PAD + 52, top - 23, 10, 10);
    nameBoxes(f.guardian, top - 5, 2);
  });

  const cellRowH = CELL_H + 7;
  row(cellRowH, (top) => {
    label("DATE OF BIRTH:", LEFT + PAD, top - 14);
    const dobW = 16;
    cells(VALUE_X, top - 4, Array<string>(10).fill(""), dobW, [2, 5]);
    const relX = VALUE_X + 10 * dobW + 16;
    label("RELIGION:", relX, top - 14);
    const relBoxesX = relX + labelW("RELIGION:") + 8;
    cells(relBoxesX, top - 4, Array<string>(Math.floor((RIGHT - PAD - relBoxesX) / dobW)).fill(""), dobW);
  });

  pairRow(["GENDER:", f.gender], ["AGE:", `${f.childAge} years`]);
  textRow("FATHER'S QUALIFICATION:");
  pairRow(["MOTHER'S QUALIFICATION:", ""], ["CASTE:", ""]);
  textRow("BUSINESS:");
  textRow("JOB:");
  textRow("MONTHLY INCOME:", f.monthlyIncome ? `PKR ${f.monthlyIncome}` : "-");
  textRow("SCHOOL LAST ATTENDED:", f.previousSchool || "-");

  row(cellRowH, (top) => {
    label("NATIONAL I.D CARD NO:", LEFT + PAD, top - 14);
    // Validation guarantees 13 digits; lay them out as 5-7-1 around the printed dashes.
    const digits = [...f.guardianCnic.replace(/\D/g, "")];
    const contents = [...digits.slice(0, 5), "", ...digits.slice(5, 12), "", ...digits.slice(12)];
    cells(VALUE_X, top - 4, contents, 16, [5, 13]);
  });

  const siblingH = 52;
  row(siblingH, (top) => {
    label("NAME OF REAL BROTHER / SISTER AT THIS SCHOOL:", LEFT + PAD, top - 13);
    const slotW = RIGHT - PAD - MID - 14; // the narrower right-hand column sets the width for both
    const text = f.hasSibling === "Yes" ? f.siblingDetails : "None";
    const fitted = fit(text, fonts, slotW, 4, 10.5);
    [1, 2, 3, 4].forEach((n, i) => {
      const x = i < 2 ? LEFT + PAD : MID;
      const base = top - 30 - (i % 2) * 18;
      label(`${n}.`, x, base);
      rule(x + 14, x + 14 + slotW, base - 3, 0.4);
      const line = fitted.lines[i];
      if (line) drawLine(page, line, fonts, x + 14, slotW, base, fitted.size, INK);
    });
  });

  const addressH = 46;
  row(addressH, (top) => {
    label("PERMANENT HOME ADDRESS:", LEFT + PAD, top - 14);
    write(f.address, VALUE_X, top - 14, VALUE_W, 3);
  });
  textRow("OFFICE ADDRESS:");
  pairRow(["PH# RES:", ""], ["PH# OFF:", ""]);
  pairRow(["GUARDIAN MOBILE:", f.phone], ["EMAIL:", f.email]);
  pairRow(["FATHER MOBILE:", ""], ["MOTHER MOBILE:", ""]);

  let notesComplete = true;
  row(addressH, (top) => {
    label("ADDITIONAL INFORMATION:", LEFT + PAD, top - 14);
    notesComplete = write(f.notes || "-", VALUE_X, top - 14, VALUE_W, 3);
  });

  const admittedH = 44;
  row(admittedH, (top) => {
    label("ADMITTED / NOT ADMITTED:", LEFT + PAD, top - 26);
    rule(LEFT + PAD + labelW("ADMITTED / NOT ADMITTED:") + 8, MID - PAD, top - 28, 0.4);
    const sigX = RIGHT - PAD - 160;
    rule(sigX, RIGHT - PAD, top - 26, 0.4);
    label("Principal", sigX + (160 - labelW("Principal", 9)) / 2, top - 38, 9);
  });
  box(LEFT, tableTop, CONTENT_W, tableTop - y);

  const submitted = submittedAt.toLocaleString("en-GB", {
    timeZone: "Asia/Karachi",
    dateStyle: "long",
    timeStyle: "short",
  });
  const footer = `Submitted online via the RAHMA Model School website on ${submitted} (PKT)`;
  page.drawText(footer, {
    x: (PAGE_W - regular.widthOfTextAtSize(footer, 7.5)) / 2,
    y: y - 14,
    size: 7.5,
    font: regular,
    color: MUTED,
  });

  // Notes too long for their row continue in full on a page of their own.
  if (!notesComplete) {
    const p = doc.addPage([PAGE_W, PAGE_H]);
    p.drawText("Additional Information (continued)", { x: MARGIN, y: PAGE_H - MARGIN - 14, size: 14, font: bold, color: DARK });
    const size = 10.5;
    const lines = wrap(f.notes, fonts, size, CONTENT_W);
    const lineHeight = lines.some((l) => l.rtl) ? 18 : 14;
    lines.forEach((line, i) => drawLine(p, line, fonts, MARGIN, CONTENT_W, PAGE_H - MARGIN - 44 - i * lineHeight, size, DARK));
  }

  let mergedUpload = false;
  if (upload) {
    try {
      if (upload.type === "application/pdf") {
        const src = await PDFDocument.load(upload.bytes);
        const pages = await doc.copyPages(src, src.getPageIndices());
        pages.forEach((p) => doc.addPage(p));
      } else {
        const img = upload.type === "image/png" ? await doc.embedPng(upload.bytes) : await doc.embedJpg(upload.bytes);
        const p = doc.addPage([PAGE_W, PAGE_H]);
        p.drawText("B-Form / Picture", { x: MARGIN, y: PAGE_H - MARGIN - 14, size: 14, font: bold, color: DARK });
        const maxW = PAGE_W - MARGIN * 2;
        const maxH = PAGE_H - MARGIN * 2 - 40;
        const scale = Math.min(maxW / img.width, maxH / img.height, 1);
        const w = img.width * scale;
        const h = img.height * scale;
        p.drawImage(img, { x: (PAGE_W - w) / 2, y: PAGE_H - MARGIN - 40 - h, width: w, height: h });
      }
      mergedUpload = true;
    } catch (err) {
      console.error("Could not merge upload into PDF:", err);
    }
  }

  return { bytes: await doc.save(), mergedUpload };
}
