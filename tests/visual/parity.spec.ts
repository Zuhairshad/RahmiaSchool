import { test, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

/**
 * Visual parity screenshot harness.
 *
 * This phase only captures screenshots of the new Next.js implementation
 * (and, when reachable, the equivalent reference-site static page) into
 * parity-artifacts/. It intentionally does NOT do pixel diffing yet —
 * that comparison is a follow-up phase (see docs/parity-report.md).
 *
 * Routes are still being built out by other agents in parallel, so any
 * route that 404s or fails to load is skipped rather than failing the
 * whole suite.
 */

const IMPL_BASE_URL = (process.env.IMPL_BASE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const REFERENCE_BASE_URL = (process.env.REFERENCE_BASE_URL ?? "http://localhost:4001").replace(/\/$/, "");
const SKIP_REFERENCE = process.env.SKIP_REFERENCE === "1";

const ARTIFACTS_DIR = path.join(process.cwd(), "parity-artifacts");
fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });

interface RouteDef {
  /** Route on the new Next.js app, e.g. "/about" */
  path: string;
  /**
   * Equivalent physical file on the reference Framer export, served as a
   * static file (e.g. reference-site/public/about.html -> "/about.html").
   */
  referencePath: string;
  /** Used in screenshot filenames. */
  slug: string;
}

// Start with a small shared list; extend as more routes land. Keep slugs
// filesystem-safe (no leading slash, "/" -> "-").
const ROUTES: RouteDef[] = [
  { path: "/", referencePath: "/index.html", slug: "home" },
  { path: "/about", referencePath: "/about.html", slug: "about" },
  { path: "/programs", referencePath: "/programs.html", slug: "programs" },
  { path: "/contact", referencePath: "/contact.html", slug: "contact" },
];

const VIEWPORTS: { width: number; height: number }[] = [
  { width: 1920, height: 1080 },
  { width: 1440, height: 900 },
  { width: 1280, height: 800 },
  { width: 1024, height: 768 },
  { width: 768, height: 1024 },
  { width: 430, height: 932 },
  { width: 390, height: 844 },
  { width: 360, height: 800 },
];

/**
 * Navigates to `url` and, if it responds successfully, takes a full-page
 * screenshot to `outFile`. Returns whether the screenshot was captured.
 * Never throws — navigation errors and non-2xx/3xx responses are treated
 * as "not ready yet" and reported via console.warn instead of failing.
 */
async function screenshotIfReachable(
  page: Page,
  url: string,
  outFile: string,
  label: string,
): Promise<boolean> {
  let response;
  try {
    response = await page.goto(url, { waitUntil: "load", timeout: 20_000 });
  } catch (err) {
    console.warn(
      `[parity] ${label}: navigation to ${url} failed (${(err as Error).message}). Skipping.`,
    );
    return false;
  }

  if (!response || response.status() >= 400) {
    console.warn(
      `[parity] ${label}: ${url} responded with status ${response?.status()}. Skipping screenshot (route likely not built yet).`,
    );
    return false;
  }

  await page.screenshot({ path: outFile, fullPage: true });
  return true;
}

for (const route of ROUTES) {
  for (const viewport of VIEWPORTS) {
    const dims = `${viewport.width}x${viewport.height}`;

    test(`${route.slug} @ ${dims}`, async ({ page }) => {
      await page.setViewportSize(viewport);

      const implOk = await screenshotIfReachable(
        page,
        `${IMPL_BASE_URL}${route.path}`,
        path.join(ARTIFACTS_DIR, `${route.slug}__${dims}__impl.png`),
        `impl:${route.path}`,
      );

      test.skip(
        !implOk,
        `Implementation route "${route.path}" is not reachable yet (404, error, or dev server not running). ` +
          `Expected while other agents are still building routes — re-run once it exists.`,
      );

      if (SKIP_REFERENCE) return;

      // Reference screenshots are best-effort: a hiccup fetching the
      // reference page should never fail the implementation screenshot
      // we already captured above.
      await screenshotIfReachable(
        page,
        `${REFERENCE_BASE_URL}${route.referencePath}`,
        path.join(ARTIFACTS_DIR, `${route.slug}__${dims}__reference.png`),
        `reference:${route.referencePath}`,
      );
    });
  }
}
