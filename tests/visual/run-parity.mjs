// Standalone parity harness (not run via the Playwright test runner — this
// needs full control over navigation order, DOM measurement extraction, and
// resilience to missing/empty reference pages, which doesn't map cleanly
// onto test() blocks). Run with: node tests/visual/run-parity.mjs
//
// Requires both servers already running:
//   npm run build && npm run start -- -p 3000   (implementation)
//   npm run reference                            (reference, :4001)
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const IMPL_BASE = process.env.IMPL_BASE_URL ?? "http://localhost:3000";
const REF_BASE = process.env.REFERENCE_BASE_URL ?? "http://localhost:4001";
const ARTIFACTS = path.join(process.cwd(), "parity-artifacts");
const CHROMIUM_PATH = "/opt/pw-browsers/chromium";

const VIEWPORTS_FULL = [
  { w: 1920, h: 1080 },
  { w: 1440, h: 900 },
  { w: 1280, h: 800 },
  { w: 1024, h: 768 },
  { w: 768, h: 1024 },
  { w: 430, h: 932 },
  { w: 390, h: 844 },
  { w: 360, h: 800 },
];
const VIEWPORTS_SAMPLE = [
  { w: 1440, h: 900 },
  { w: 768, h: 1024 },
  { w: 390, h: 844 },
];

// Routes with real, non-empty reference content -> full diffable matrix.
const REAL_TOP_LEVEL = [
  { slug: "home", impl: "/", ref: "/index.html" },
  { slug: "about", impl: "/about", ref: "/about.html" },
  { slug: "programs", impl: "/programs", ref: "/programs.html" },
  { slug: "teachers", impl: "/teachers", ref: "/teachers.html" },
  { slug: "blogs", impl: "/blogs", ref: "/blogs.html" },
  { slug: "pricing", impl: "/pricing", ref: "/pricing.html" },
  { slug: "admission", impl: "/admission", ref: "/admission.html" },
];

const REAL_DETAIL = [
  { slug: "program-little-explorer", impl: "/programs/little-explorer-program", ref: "/programs/little-explorer-program.html" },
  { slug: "program-creative-minds", impl: "/programs/creative-minds-program", ref: "/programs/creative-minds-program.html" },
  { slug: "program-happy-learners", impl: "/programs/happy-learners-program", ref: "/programs/happy-learners-program.html" },
  { slug: "program-smart-thinkers", impl: "/programs/smart-thinkers-program", ref: "/programs/smart-thinkers-program.html" },
  { slug: "blog-creative-games", impl: "/blogs/creative-games-that-make-learning-fun-for-kids", ref: "/blogs/creative-games-that-make-learning-fun-for-kids.html" },
  { slug: "blog-easy-learning", impl: "/blogs/easy-learning-activities-for-curious-young-minds", ref: "/blogs/easy-learning-activities-for-curious-young-minds.html" },
];

// No usable reference (empty Framer stub, or not a real page at all) —
// implementation-only screenshots for review, no diffing.
const IMPL_ONLY = [
  { slug: "contact", impl: "/contact" },
  { slug: "facilities", impl: "/facilities" },
  { slug: "student-life", impl: "/student-life" },
  { slug: "program-bright-starters", impl: "/programs/bright-starters-program" },
  { slug: "program-growth-initiative", impl: "/programs/growth-initiative" },
];

// Breakpoint-boundary probes for the nav's horizontal-bar <-> overlay-menu
// switch (real switch point confirmed at 1380px; also check 810px, the
// secondary real boundary, even though our nav only changes mode at 1380).
const BREAKPOINT_PROBES = [809, 810, 811, 1379, 1380, 1381];

function dims(v) {
  return `${v.w}x${v.h}`;
}

async function measure(page) {
  return page.evaluate(() => {
    function box(el) {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return {
        x: Math.round(r.x),
        y: Math.round(r.y),
        width: Math.round(r.width),
        height: Math.round(r.height),
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        fontFamily: cs.fontFamily,
        lineHeight: cs.lineHeight,
        letterSpacing: cs.letterSpacing,
        color: cs.color,
        backgroundColor: cs.backgroundColor,
        borderRadius: cs.borderRadius,
        padding: cs.padding,
        margin: cs.margin,
      };
    }
    function first(selectors) {
      for (const sel of selectors) {
        try {
          const el = document.querySelector(sel);
          if (el) return { el, sel };
        } catch {
          /* invalid selector on this DOM, skip */
        }
      }
      return { el: null, sel: null };
    }

    const h1 = first(["h1"]);
    const nav = first(["nav", '[data-framer-name="Header "]', '[data-framer-name="Header"]', "header"]);
    const footer = first(["footer", '[data-framer-name="Footer"]']);
    const cta = first(['a[href*="admission"]', 'a[href*="contact"]', 'a[href*="Admission"]', "button"]);

    return {
      pageHeight: Math.round(document.documentElement.scrollHeight),
      viewportWidth: window.innerWidth,
      h1: { selector: h1.sel, ...box(h1.el) },
      nav: { selector: nav.sel, ...box(nav.el) },
      footer: { selector: footer.sel, ...box(footer.el) },
      cta: { selector: cta.sel, ...box(cta.el) },
    };
  });
}

async function shootPair(browser, def, viewports, { measureIt }) {
  const results = [];
  for (const vp of viewports) {
    const dir = path.join(ARTIFACTS, def.slug, dims(vp));
    fs.mkdirSync(dir, { recursive: true });
    const record = { slug: def.slug, viewport: dims(vp), impl: null, reference: null };

    // Implementation
    {
      const ctx = await browser.newContext({ viewport: { width: vp.w, height: vp.h } });
      const page = await ctx.newPage();
      try {
        const resp = await page.goto(`${IMPL_BASE}${def.impl}`, { waitUntil: "load", timeout: 20000 });
        if (resp && resp.status() < 400) {
          await page.waitForTimeout(300); // let webfonts/layout settle
          await page.screenshot({ path: path.join(dir, "implementation-full.png"), fullPage: true });
          await page.screenshot({ path: path.join(dir, "implementation-fold.png"), fullPage: false });
          if (measureIt) record.impl = await measure(page);
        } else {
          console.warn(`[impl] ${def.impl} @ ${dims(vp)} -> status ${resp?.status()}`);
        }
      } catch (err) {
        console.warn(`[impl] ${def.impl} @ ${dims(vp)} failed: ${err.message}`);
      } finally {
        await ctx.close();
      }
    }

    // Reference (best-effort)
    if (def.ref) {
      const ctx = await browser.newContext({ viewport: { width: vp.w, height: vp.h } });
      const page = await ctx.newPage();
      try {
        const resp = await page.goto(`${REF_BASE}${def.ref}`, { waitUntil: "load", timeout: 20000 });
        if (resp && resp.status() < 400) {
          await page.waitForTimeout(500);
          await page.screenshot({ path: path.join(dir, "reference-full.png"), fullPage: true });
          await page.screenshot({ path: path.join(dir, "reference-fold.png"), fullPage: false });
          if (measureIt) record.reference = await measure(page);
        } else {
          console.warn(`[ref] ${def.ref} @ ${dims(vp)} -> status ${resp?.status()}`);
        }
      } catch (err) {
        console.warn(`[ref] ${def.ref} @ ${dims(vp)} failed: ${err.message}`);
      } finally {
        await ctx.close();
      }
    }

    results.push(record);
  }
  return results;
}

async function probeBreakpoints(browser) {
  const dir = path.join(ARTIFACTS, "_breakpoint-probes");
  fs.mkdirSync(dir, { recursive: true });
  for (const w of BREAKPOINT_PROBES) {
    for (const [label, base, urlPath] of [
      ["impl", IMPL_BASE, "/"],
      ["reference", REF_BASE, "/index.html"],
    ]) {
      const ctx = await browser.newContext({ viewport: { width: w, height: 300 } });
      const page = await ctx.newPage();
      try {
        const resp = await page.goto(`${base}${urlPath}`, { waitUntil: "load", timeout: 20000 });
        if (resp && resp.status() < 400) {
          await page.waitForTimeout(200);
          await page.screenshot({ path: path.join(dir, `${label}__w${w}.png`) });
        }
      } catch (err) {
        console.warn(`[probe] ${label} w=${w} failed: ${err.message}`);
      } finally {
        await ctx.close();
      }
    }
  }
}

async function main() {
  fs.mkdirSync(ARTIFACTS, { recursive: true });
  const browser = await chromium.launch({
    executablePath: fs.existsSync(CHROMIUM_PATH) ? CHROMIUM_PATH : undefined,
  });

  const allMeasurements = [];

  console.log(`Real top-level pages: full 8-viewport matrix (${REAL_TOP_LEVEL.length} routes)`);
  for (const def of REAL_TOP_LEVEL) {
    const recs = await shootPair(browser, def, VIEWPORTS_FULL, { measureIt: true });
    allMeasurements.push(...recs);
    console.log(`  done: ${def.slug}`);
  }

  console.log(`Real detail pages: sampled 3-viewport matrix (${REAL_DETAIL.length} routes)`);
  for (const def of REAL_DETAIL) {
    const recs = await shootPair(browser, def, VIEWPORTS_SAMPLE, { measureIt: true });
    allMeasurements.push(...recs);
    console.log(`  done: ${def.slug}`);
  }

  console.log(`Implementation-only pages (no usable reference): ${IMPL_ONLY.length} routes`);
  for (const def of IMPL_ONLY) {
    await shootPair(browser, def, VIEWPORTS_SAMPLE, { measureIt: false });
    console.log(`  done: ${def.slug}`);
  }

  console.log("Breakpoint-boundary probes (nav mode switch)");
  await probeBreakpoints(browser);

  await browser.close();

  fs.writeFileSync(
    path.join(ARTIFACTS, "measurements-raw.json"),
    JSON.stringify(allMeasurements, null, 2),
  );
  console.log(`\nWrote ${allMeasurements.length} measurement records to parity-artifacts/measurements-raw.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
