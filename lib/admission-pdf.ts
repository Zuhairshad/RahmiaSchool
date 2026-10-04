import { readFile } from "node:fs/promises";
import path from "node:path";
import fontkit, { type Font } from "@pdf-lib/fontkit";
import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFImage, type PDFPage } from "pdf-lib";
import type { AdmissionFields } from "@/lib/admission";

const PAGE_W = 595.28; // A4
const PAGE_H = 841.89;
const MARGIN = 48;
const LABEL_W = 170;
const TEAL = rgb(0.18, 0.75, 0.6);
const DARK = rgb(0.1, 0.1, 0.1);
const MUTED = rgb(0.45, 0.45, 0.45);
const LINE = rgb(0.88, 0.88, 0.88);

export type Upload = { name: string; type: string; bytes: Uint8Array };

type Fonts = { latin: PDFFont; urdu: Font | null };
type Run = { text: string; rtl: boolean };

// Arabic-script letters, marks and punctuation (Urdu included); digits are handled separately.
const URDU_CHAR = /[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
const LATIN_LETTER = /[A-Za-z]/;

function normalize(text: string) {
  return text
    .replace(/[\u0660-\u0669]/g, (d) => String(d.charCodeAt(0) - 0x0660))
    .replace(/[\u06F0-\u06F9]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"');
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
function drawUrduRun(page: PDFPage, font: Font, text: string, x: number, y: number, size: number) {
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
        color: DARK,
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

/**
 * Draws a line of mixed Urdu/English text. Each Urdu run is shaped (joined letters,
 * right-to-left) by fontkit; runs are laid out left-to-right for English paragraphs
 * and right-to-left (right-aligned) for Urdu paragraphs.
 */
function drawLine(page: PDFPage, line: Line, fonts: Fonts, x: number, maxWidth: number, y: number, size: number) {
  const runs = toRuns(line.text, fonts).map((r) => ({ ...r, text: line.rtl ? r.text.trim() : r.text }));
  const gap = fonts.latin.widthOfTextAtSize(" ", size);
  let cursor = line.rtl ? x + maxWidth : x;
  for (const run of runs) {
    if (!run.text) continue;
    const w = runWidth(run, fonts, size);
    const drawX = line.rtl ? cursor - w : cursor;
    if (run.rtl && fonts.urdu) drawUrduRun(page, fonts.urdu, run.text, drawX, y, size);
    else page.drawText(run.text, { x: drawX, y, size, font: fonts.latin, color: DARK });
    cursor = line.rtl ? drawX - gap : cursor + w;
  }
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

  let page: PDFPage = doc.addPage([PAGE_W, PAGE_H]);
  let y = PAGE_H - MARGIN;

  const newPageIfNeeded = (needed: number) => {
    if (y - needed < MARGIN) {
      page = doc.addPage([PAGE_W, PAGE_H]);
      y = PAGE_H - MARGIN;
    }
  };

  // Header
  let textX = MARGIN;
  if (logo) {
    const h = 54;
    const w = (logo.width / logo.height) * h;
    page.drawImage(logo, { x: MARGIN, y: y - h, width: w, height: h });
    textX = MARGIN + w + 14;
  }
  page.drawText("RAHMA Model School", { x: textX, y: y - 22, size: 18, font: bold, color: DARK });
  page.drawText("Admission Application", { x: textX, y: y - 42, size: 12, font: regular, color: MUTED });
  y -= 70;

  const submitted = submittedAt.toLocaleString("en-GB", {
    timeZone: "Asia/Karachi",
    dateStyle: "long",
    timeStyle: "short",
  });
  page.drawText(`Submitted: ${submitted} (PKT)`, { x: MARGIN, y, size: 9, font: regular, color: MUTED });
  y -= 10;
  page.drawRectangle({ x: MARGIN, y, width: PAGE_W - MARGIN * 2, height: 2, color: TEAL });
  y -= 28;

  const section = (title: string) => {
    newPageIfNeeded(50);
    page.drawText(title.toUpperCase(), { x: MARGIN, y, size: 10, font: bold, color: TEAL });
    y -= 18;
  };

  const row = (label: string, value: string) => {
    const size = 10.5;
    const valueWidth = PAGE_W - MARGIN * 2 - LABEL_W;
    const lines = wrap(value || "-", fonts, size, valueWidth);
    const lineHeight = lines.some((l) => l.rtl) ? 18 : 14;
    const height = lines.length * lineHeight + 10;
    newPageIfNeeded(height);
    page.drawText(label, { x: MARGIN, y, size, font: bold, color: DARK });
    lines.forEach((line, i) => drawLine(page, line, fonts, MARGIN + LABEL_W, valueWidth, y - i * lineHeight, size));
    y -= height - 4;
    page.drawLine({
      start: { x: MARGIN, y: y + 6 },
      end: { x: PAGE_W - MARGIN, y: y + 6 },
      thickness: 0.5,
      color: LINE,
    });
    y -= 8;
  };

  section("Student Details");
  row("Child's Name", f.childName);
  row("Gender", f.gender);
  row("Age", `${f.childAge} years`);
  row("Program of Interest", f.program);
  row("Previous School / Class", f.previousSchool);
  y -= 12;

  section("Parent / Guardian Details");
  row("Name", f.guardian);
  row("CNIC", f.guardianCnic);
  row("Phone", f.phone);
  row("Email", f.email);
  row("Residential Address", f.address);
  row("Monthly Income", f.monthlyIncome ? `PKR ${f.monthlyIncome}` : "");
  y -= 12;

  section("Siblings");
  row("Sibling Already Enrolled", f.hasSibling);
  if (f.hasSibling === "Yes") row("Sibling Name / Class", f.siblingDetails);
  y -= 12;

  section("Additional Information");
  row("Notes", f.notes);
  row("B-Form / Picture", upload ? `Attached (${upload.name})` : "Not provided");

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
