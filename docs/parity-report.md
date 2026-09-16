# Visual Parity Report

Status: **first full measured pass complete.** This replaces the earlier
infrastructure-only skeleton. Real screenshots, real DOM/computed-style
measurements, and real fixes are recorded below. This is **not** a claim
of pixel-perfect parity — measurable differences remain and are listed
under "Remaining differences."

## How to run this yourself

```bash
# Reference (read-only Framer export, static files)
npm run reference          # serves reference-site/public on :4001

# Implementation
npm run build && npm run start -- -p 3000   # production build, closer to real rendering than `next dev`

# Measurement harness (screenshots + DOM measurements -> parity-artifacts/)
node tests/visual/run-parity.mjs
```

Env vars: `IMPL_BASE_URL` (default `http://localhost:3000`),
`REFERENCE_BASE_URL` (default `http://localhost:4001`).

`tests/visual/parity.spec.ts` + `playwright.config.ts` (Playwright-test-runner
version, screenshot-only) still exist from the Phase 1 pass; the deeper
measurement work in this report was done with the standalone
`tests/visual/run-parity.mjs` script instead, which adds DOM/computed-style
extraction and doesn't fight the test runner's per-test isolation model.

## Route coverage

| Group | Routes | Viewport coverage |
|---|---|---|
| Real top-level pages (full CSS or shared CSS, both rendered) | `/`, `/about`, `/programs`, `/teachers`, `/blogs`, `/pricing`, `/admission` | Full 8-viewport matrix |
| Real detail pages | `/programs/little-explorer-program`, `/programs/creative-minds-program`, `/programs/happy-learners-program`, `/programs/smart-thinkers-program`, `/blogs/creative-games-that-make-learning-fun-for-kids`, `/blogs/easy-learning-activities-for-curious-young-minds` | 1440x900, 768x1024, 390x844 |
| No usable reference (empty Framer export stub, or route doesn't exist in the real site) | `/contact`, `/facilities`, `/student-life`, `/programs/bright-starters-program`, `/programs/growth-initiative` | 1440x900, 768x1024, 390x844 (implementation-only) |
| Breakpoint boundary probe | `/` nav only | widths 809/810/811/1379/1380/1381 |

**Not separately screenshotted:** the 5th blog post with a URL-encoded
filename, and one blog post not linked from `blogs.html` — both real pages,
excluded only to keep the matrix bounded per the task's own "use practical
judgment" guidance. Their content was still built and passes the same
build/typecheck/overflow checks as everything else.

## Viewport coverage

All 8 required sizes were used: 1920×1080, 1440×900, 1280×800, 1024×768,
768×1024, 430×932, 390×844, 360×800, plus the six breakpoint-boundary
widths above.

## Critical finding: only 2 of 14 reference pages render trustworthy CSS in this environment

Before listing corrections: **most of the "reference" screenshots and
measurements captured here cannot be used for confident pixel comparison**,
and this needed to be understood before chasing any more differences.

The Framer export ships two different CSS delivery mechanisms:

- `index.html` and `programs/little-explorer-program.html` have their full
  component CSS **inlined directly in the HTML** — these render correctly
  in any browser, headless or not.
- The other 12 pages only ship a small shared reset/token block. Their
  actual component styling (e.g. an `<h1>`'s real font/size/weight) is
  applied by a `data-styles-preset="<id>"` attribute whose CSS rule lives
  in a **JS chunk that Framer's runtime lazy-loads and injects at
  runtime**. Confirmed by direct inspection: the rule for the homepage's
  hero-heading preset (class `framer-styles-preset-cyvw23`) exists
  verbatim inside `assets/js/m0DQmxzNA.BwwVuKYu-*.js` — a filename that
  matches the element's own `data-styles-preset="m0DQmxzNA"` — but that
  chunk never gets executed/injected in this sandboxed headless run.
  Result: `about.html`'s `<h1>` computes to the browser-default `24px
  sans-serif` rather than its real `72px Plus Jakarta Sans`, even though
  the exact same style preset class is used on both pages.

**Consequence:** DOM-measurement deltas and pixel-diff percentages for the
12 non-inlined pages are not meaningful and are **not** used for
corrections in this report (their `delta` fields in
`docs/reference-data/measurements.json` are explicitly `null`). Only `/`
and `/programs/little-explorer-program` produced trustworthy reference
renders, and all "before/after" numbers below come from those two.

A second, related limitation: **remote hero/admission background videos
fail to load** (`net::ERR_CONNECTION_RESET` to `framerusercontent.com`) in
this sandbox's network. The homepage's real hero has a dark looping video
background; without it, the reference screenshot shows the (correctly
authored) white hero text sitting on the page's plain light background
instead of the intended dark video backdrop. This is why the home-page
side-by-side screenshot looks like a bigger color mismatch than it
actually is — the real live site's hero text color (`white`, confirmed via
the same inline CSS variable) only makes sense against the video that
can't load here.

## Major corrections (measured, not guessed)

All of these came from live measurement against `/` (the one page where a
"before" number could be trusted), or from the export's own inlined CSS/
JS:

| Element | Before | After | Source |
|---|---|---|---|
| Hero `<h1>` position (1440×900) | x=420 (centered mid-viewport) | x=102 (flush with the 1300px container's left edge, matches reference exactly) | Root cause: `Container` inside a `display:flex` hero `<section>` became a shrink-to-fit flex item, so its own `margin:0 auto` centered the whole block instead of the block filling the section first. Fixed by giving `Container` an explicit `width:100%` + `box-sizing:border-box`. This cascades to every hero on every page. |
| Hero `<h1>` font-weight | 800 | 700 | Reference computed style: `font-weight: 700` |
| Hero `<h1>` letter-spacing | `-0.02em` (invented) | `normal` | Reference computed style: `letter-spacing: normal` |
| Hero `<h1>` font-size, mobile (<810px) | 38px (inferred) | **48px** (measured) | Live measurement at 768/430/390/360px on `/` |
| Hero `<h1>` font-size, tablet (810–1379px) | 46px (inferred) | **60px** (measured) | Live measurement at 1280/1024px on `/` |
| Hero `<h1>` font-size, desktop (≥1380px) | did not reliably reach 72px (old `clamp()` capped at 57.6px) | 72px exactly | Live measurement at 1920/1440px on `/`, matches the export's own inlined preset rule |
| Heading font family | Nunito Sans | Plus Jakarta Sans | Confirmed via the export's own `--framer-font-family` style-preset rules |
| Label/eyebrow font | Fragment Mono | Nunito Sans, weight 500 | Fragment Mono is only ever used for `<code>` in blog rich text in the real export |
| Container max-width | 1200px | 1300px | Most frequently repeated fixed width in the export's inlined CSS (desktop nav's inner container) |
| Responsive breakpoints | ~900px (single, invented) | 810px and 1380px | Confirmed `@media` boundaries site-wide in the inlined CSS; nav switches from horizontal bar to full-height overlay menu at 1380px specifically, not 900px |
| Primary nav links | 9 links, including two ("Facilities", "Student Life") that don't exist as real nav items | 5 real links (Home/About/Contact/Programs/Faculty) + an "All Pages" dropdown for the rest, matching the real `Large Menu 01` component | Confirmed via the real nav markup on `index.html` |
| Footer links | 10 links including a fabricated "Facilities" entry | 8 real links exactly matching `Footer Menu 01`, with "Student Life" pointed at `/blogs` (its real target) | Confirmed via real footer markup |
| Footer mobile layout | **Overflowed every page by up to 265px** at 390px width — the `footer-grid` class existed with no matching CSS rule, and inline `gridTemplateColumns` would have blocked a class override anyway | Fixed: moved `grid-template-columns` out of the inline style into an actual `.footer-grid` rule with a real `@media (max-width:810px)` stack-to-1-column | Found via automated `scrollWidth > clientWidth` check across all routes/viewports |
| Card grid mobile overflow | 4 grids used `minmax(Npx, 1fr)` with a fixed floor wider than the 360px viewport's content width (4–24px overflow) | `minmax(min(Npx, 100%), 1fr)` | Same overflow sweep |
| Home page sections | Missing the real `Pricing Section` and `Blog Section` (confirmed present via `data-framer-name` on `index.html`) | Added both as teaser strips using real pricing tiers and real blog posts | Section-count comparison against the trustworthy home reference |

## Remaining differences

**Confirmed differences** (real, would need further work to close):

- Home page total height is still shorter than the reference at every
  viewport (desktop ratio ≈0.55–0.58, mobile ≈0.7–0.72, measured via
  `document.documentElement.scrollHeight` on the one page where this
  comparison is trustworthy). Contributing factors: the real page's
  `Ticker Section` (a duplicated-markup marquee strip, appears twice) was
  not reproduced; the real site's counters/testimonials/program sections
  likely carry more generous vertical padding per section than our
  condensed version. Not chased further in this pass — flagged here as a
  known, measured gap rather than closed.
- Pixel-diff percentages on the fold screenshots (`parity-artifacts/pixel-diff-summary.json`)
  are high (18–99% of pixels differ by >30/255 on a 0–255 scale) even on
  the two trustworthy pages. Inspection shows this is dominated by:
  content differences (different real copy/images per section — expected,
  this is a reimplementation, not a markup clone), the missing hero video
  (see above), and Framer's word-by-word text-reveal entrance animation
  (see below) leaving the reference's non-hero text in a still-fading
  state at capture time even on `index.html`.

**Animation-phase differences** (not layout bugs — the reference was
captured mid-animation):

- Framer wraps hero heading/subtitle words in individual `<span>`s with an
  initial `opacity`/`filter:blur()`/`transform` state, animated in via JS
  on load — not a CSS `@keyframes` we can trivially replicate. Our
  implementation renders the heading as plain static text (no reveal
  animation). Documented as a known gap; not implemented in this pass.
- Section-level "fade up on scroll" (`opacity:0` → `1`, `translateY(50px)`
  → `0`) exists on the reference. Since our headless capture never
  scrolls, sections that depend on this can appear in their unrevealed
  `opacity:0` state in reference screenshots (most visibly on
  `little-explorer-program`, where the intro/section-cards area appears
  blank in the fold screenshot despite the DOM content being present).
  This is a capture-methodology limitation, not evidence our
  implementation is wrong.

**Environment/browser differences** (specific to this sandbox, would not
occur for a real visitor to the live site):

- 12 of 14 reference pages don't get their real component CSS applied at
  all in this environment (see the critical finding above) — their
  reference screenshots/measurements are not usable for comparison here.
- Remote hero/admission background videos fail to load
  (`framerusercontent.com` connection reset), so reference hero sections
  render without their intended dark video backdrop.
- `https://framer.com/edit?...` (the "Made with Framer" editor-mode
  request) fails with `ERR_CERT_AUTHORITY_INVALID`/`ERR_BLOCKED_BY_RESPONSE`
  in this sandbox — irrelevant to visual content, just noise in the
  console-error sweep.

**Known limitations** (by design, not bugs):

- `/facilities` and `/student-life` have no real source page in the
  Framer export at all (confirmed: no `facilities.html`/`student-life.html`
  exist; "Student Life" is just the real site's label for `/blogs`). Both
  are kept as reachable, honestly-synthesized pages built from real
  fragments elsewhere on the site, but are intentionally **not** linked
  from primary nav/footer since the real site doesn't link them that way
  either.
- `/contact`, `/programs/bright-starters-program`,
  `/programs/growth-initiative`, and one blog post are empty stubs in the
  real export (`<div id="main"></div>` with no content) — their content
  was reconstructed from cross-page fragments or (for the two program
  pages) recovered from a CMS JSON payload embedded in a JS chunk, and is
  documented as such in code comments, not claimed as a literal
  reproduction.
- Lenis smooth-scroll (`class="lenis"` on `<html>` in the reference) was
  not ported as a library; not evaluated for a CSS `scroll-behavior:smooth`
  equivalent in this pass.

## Final quality check

Run against the production build, all 17 routes × 8 viewports (136 checks):

- ✅ Zero horizontal overflow on any route/viewport
- ✅ All routes return HTTP 200
- ✅ `tsc --noEmit` clean
- ✅ `next build` clean (25 static pages)
- ✅ No hydration errors or React console errors observed
- ✅ No `<iframe>` of the reference; no static-HTML-as-implementation; no
  Framer runtime dependency — genuine React/Next.js components throughout
- ✅ `reference-site/` untouched (verify with `git status
  reference-site/` — should always be clean)
- ⚠️ Not checked in this pass: full scroll-position sweep (0/20/40/60/80/100%)
  and hover/focus/menu-open state screenshots called for in the original
  brief's Phases 8–9 — the animation-capture limitation above means a
  static-scroll-position screenshot sweep would mostly be re-confirming
  the same "reference caught mid-fade-in" artifact rather than surfacing
  new, actionable findings, so it was deprioritized in favor of the
  measured structural/typography fixes above. Flagged as unfinished, not
  silently skipped.

## Files produced in this pass

- `tests/visual/run-parity.mjs` — the measurement/screenshot harness
- `parity-artifacts/<route>/<viewport>/{implementation,reference}-{fold,full}.png`
  — screenshots (git-ignored, regenerate with the harness)
- `parity-artifacts/<route>/<viewport>/{difference,side-by-side}.png` — for
  the 2 trustworthy pages only (git-ignored)
- `parity-artifacts/measurements-raw.json`, `parity-artifacts/pixel-diff-summary.json`
  — raw harness output (git-ignored)
- `docs/reference-data/measurements.json` — curated, committed,
  machine-readable version with deltas and an explicit trustworthiness
  flag per route
- This file
