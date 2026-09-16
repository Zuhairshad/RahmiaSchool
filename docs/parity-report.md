# Visual Parity Report

Status: **infrastructure only** — this is a skeleton/living doc for the
visual-parity workflow, not a completed audit. No pixel-level comparison
has been performed yet; that is a follow-up phase (see "Findings" below).

## What this covers

We are rebuilding the Framer-exported RAHMA Model School site
(`reference-site/public/*.html`, read-only) as a Next.js 16 + React 19 +
TypeScript app at the repo root. This doc explains how to capture
side-by-side screenshots of the reference site and the new implementation
so a future pass can diff them.

## Running the reference site

The original Framer export is served as static files on port 4001:

```bash
npm run reference
```

This runs `npx --yes serve reference-site/public -l 4001`. Reference
pages are physical `.html` files (e.g. `/about.html`,
`/programs/little-explorer-program.html`); `serve` also answers on the
equivalent extension-less path and 301-redirects the `.html` URL to it,
which Playwright follows transparently.

## Running the implementation

The new Next.js app runs the usual way, on port 3000:

```bash
npm run dev
```

## Running the visual tests

```bash
npm run test:visual
```

This runs Playwright (`playwright.config.ts` at the repo root), which:

- By default **auto-starts both servers** above via Playwright's
  `webServer` array (`npm run dev` on :3000, `npm run reference` on
  :4001), reusing them if they're already running (useful since other
  agents may already have a dev server up). Set `SKIP_WEB_SERVER=1` if
  you'd rather start both manually in separate terminals first.
- Runs `tests/visual/parity.spec.ts`, which for a shared list of routes
  (currently `/`, `/about`, `/programs`, `/contact` — extend the `ROUTES`
  array as more routes land) and 8 viewport sizes (1920x1080, 1440x900,
  1280x800, 1024x768, 768x1024, 430x932, 390x844, 360x800) takes a
  full-page screenshot of the implementation, and — if reachable — the
  equivalent reference page.
- **Skips gracefully** (does not fail the suite) when an implementation
  route 404s or errors, since other agents are still building routes out
  in parallel. Reference-page screenshot failures are logged but never
  fail a test, since the implementation screenshot is the primary
  artifact.

Useful env vars (all optional):

| Var | Default | Purpose |
|---|---|---|
| `IMPL_BASE_URL` | `http://localhost:3000` | Base URL for the new app |
| `REFERENCE_BASE_URL` | `http://localhost:4001` | Base URL for the reference static export |
| `SKIP_REFERENCE` | unset | Set to `1` to only capture implementation screenshots |
| `SKIP_WEB_SERVER` | unset | Set to `1` to manage both servers yourself instead of Playwright auto-starting them |
| `PLAYWRIGHT_CHROMIUM_PATH` | `/opt/pw-browsers/chromium` | Override the Chromium executable Playwright launches |

## Where artifacts land

Screenshots are written to `parity-artifacts/` at the repo root, named
`<route-slug>__<width>x<height>__impl.png` and
`<route-slug>__<width>x<height>__reference.png`. This directory is
git-ignored (see `.gitignore`) except for a `.gitkeep` placeholder — it's
scratch output, not something to commit.

## Findings

Not yet done. This phase only wires up screenshot capture for both
sites; no pixel-diffing or manual visual comparison has been performed.
A follow-up phase should:

1. Pick a diffing approach (e.g. `pixelmatch`/`odiff` on the PNG pairs,
   or Playwright's built-in `toHaveScreenshot` baseline comparison).
2. Record concrete discrepancies per route/viewport here, with
   before/after crops where useful.
3. Expand `ROUTES` in `tests/visual/parity.spec.ts` to cover every route
   as it lands (`/admission`, `/teachers`, `/facilities`,
   `/student-life`, `/blogs` + its 7 slugs, `/programs` + its 6 slugs,
   `/pricing`).

## Notes on font loading (fonts + assets audit)

See [`reference-analysis-assets-note.md`](./reference-analysis-assets-note.md)
for the self-hosted-fonts-vs-`next/font/google` analysis and the hero
images copied into `public/assets/images/` as a head start for other
agents.
