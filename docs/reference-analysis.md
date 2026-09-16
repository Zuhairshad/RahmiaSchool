# Reference Site Analysis — RAHMA Model School (Framer export)

Source of truth: `reference-site/public/*.html` (real Framer-rendered output, `generator: Framer 835d061`). The `reference-site/app/*.tsx` files are a rough hand-drafted approximation and are only used here as a content cross-check, never as the authority for pixel values.

## 0. Critical caveat: not every page is actually rendered in the export

Before anything else: this export is **incomplete**. Every HTML file has a `<div id="main">` root. On most pages that div is filled with the full server-rendered markup, but on four files it is completely empty (`<div id="main"></div>`, followed only by Framer's own runtime/analytics script and, in `contact.html`'s case, the "Create a free website with Framer" promo string). No content, no `data-framer-name`, nothing — the actual page body only exists inside the Framer client-side JS runtime (the 682 chunk files), which is out of scope to execute/reverse-engineer per the task brief.

Empty (unrenderable via static analysis) files:
- `reference-site/public/contact.html` — the entire **Contact page**. This is the only one of the 10 top-level routes with zero recoverable design/content.
- `reference-site/public/programs/bright-starters-program.html`
- `reference-site/public/programs/growth-initiative.html`
- `reference-site/public/blogs/the-importance-of-play-in-early-learningfun-ways-to-encourage-creativity-in-young-children.html`

Implication: the Contact page's layout/copy cannot be verified against any ground truth in this repo; it will have to be designed from scratch (informed by the footer/nav treatment that *is* visible everywhere else) rather than reconstructed. The two empty program pages and one empty blog post likewise have no real source — their copy must come from the draft `.tsx` files (unverified) or be written fresh.

A second, related caveat about CSS completeness (see §2 header) — **only `index.html` and `programs/little-explorer-program.html` ship their full component CSS inline**; the other 13 HTML files only ship the small shared reset/font/token block. Structural facts (sections present, card counts, order) are still fully verifiable everywhere via `data-framer-name` attributes baked into the markup, but exact spacing/grid/hover CSS for those 13 files is not independently verifiable from static HTML alone — it was extrapolated from the two fully-inlined files, which appear to share one global Framer design system with the rest of the site.

## 1. Route list

| Path | Source file | Real page? | Purpose |
|---|---|---|---|
| `/` | `index.html` | Yes, fully rendered | Home — brand introduction, programs teaser, stats, testimonials, blog teaser, CTA |
| `/about` | `about.html` | Yes, fully rendered | School story/history timeline, values, staff teaser, FAQ |
| `/contact` | `contact.html` | **No — empty export** | Intended as a contact-form/info page; no real content recoverable |
| `/programs` | `programs.html` | Yes, fully rendered | Academic programs overview/listing (links to 6 program detail pages) |
| `/programs/:slug` | `programs/*.html` (6 files) | 4 of 6 rendered, 2 empty | Individual program detail pages |
| `/admission` | `admission.html` | Yes, fully rendered | Admissions process (steps), application info/preview, CTA |
| `/teachers` | `teachers.html` | Yes, fully rendered | Faculty/teacher directory (team cards) |
| `/pricing` | `pricing.html` | Yes, fully rendered | Fee structure / price plan listing |
| `/blogs` | `blogs.html` | Yes, fully rendered | Blog / "Student Life" post listing (see naming note below) |
| `/blogs/:slug` | `blogs/*.html` (7 files) | 6 of 7 rendered, 1 empty | Individual blog posts |

**Correction to the brief's assumed 10 top-level routes:** the real Framer export does **not** contain a separate `/facilities` page or a separate `/student-life` page as distinct designs:
- No `facilities.html` file exists anywhere in `reference-site/public/`. The only occurrence of the word "facilities" on the whole site is a plain-text mention inside a sentence on `about.html` ("...secure facilities, supervised activities..."), not a page or nav item.
- No `student-life.html` file exists either. The footer's "Student Life" link (`data-framer-name="Footer Menu 01"`) actually points to `href="./blogs.html"`. Confirmed further by every blog-post file's own `<title>` tag reading `Student Life Activity | RAHMA Model School` (a generic CMS-collection title) and by `blogs.html`'s own `<title>` reading `Student Life & Activities | RAHMA Model School Rawat`. In other words, **"Student Life" is simply the nav/footer label the Framer site's owner chose for the Blogs collection**, not an independent page.

The draft `.tsx` app (`reference-site/app/facilities/page.tsx`, `reference-site/app/student-life/page.tsx`) invented standalone pages for these labels with plausible-sounding but unverified content (facility list: Library, Science Lab, Computer Lab, Sports Ground, Smart Classrooms; activities list: Speech & Debate, Sports, Science Exhibitions, Art, Trips, Co-Curricular). Treat that content as speculative, not grounded in the Framer source, if kept at all — the real site folds "Student Life" into `/blogs`.

The real, footer-confirmed nav map (from `index.html`'s `Footer Menu 01` links, all of which resolve consistently across the whole site):

```
Home -> index.html            About -> about.html
Academic Programs -> programs.html      Contact -> contact.html
Student Life -> blogs.html    Faculty -> teachers.html
Fee Structure -> pricing.html Admissions -> admission.html
```

Top nav (`Large Menu 01` component, visible on `index.html`) shows only: Home, About, Contact, Programs, **Faculty** (labelled "Faculty", not "Teachers", in the nav) — a shorter set than the footer's full list, plus an "All Pages"-style dropdown affordance.

## 2. Page-by-page section breakdown

Section names below are the real `data-framer-name` values found in each file's markup (deduplicated, in document order), so they reflect the actual Framer component tree, not guesses. Card/item counts are also from real `data-framer-name` repetitions (e.g. `Desktop Feature Card` × 4 literally appears 4 times).

### Home (`index.html`) — fully rendered, fully-inlined CSS (canonical source for design tokens)
Header ("Large Menu 01") → then, in order:
1. **Hero Section** — full-bleed section with an H1 (`Building bright young minds…`, Plus Jakarta Sans, 72px desktop), a Sub Title paragraph (Nunito Sans, 16px), CTA button(s), and **two background videos** (`<video>` elements, remote `framerusercontent.com/.../*.mp4`, `loop`, `muted`, `playsinline`, one `autoplay`) — likely a hero background loop plus a secondary lazy-loaded video.
2. **Ticker Section** (appears twice in the markup — a duplicated/looping marquee strip, standard technique for a seamless infinite scroll of logos or trust badges/keywords).
3. **About Section** — "Desktop About Card" × 2 (two feature/intro cards).
4. **Benefit Section** — "Desktop Benefit Card" × 3.
5. **Presentation Section** — appears to hold the stats/counters band: "Counter" × 4 and "Counter & Title" × 4 wrappers (e.g. years of experience, students, staff, programs — exact labels not confirmed by scraping the numbers themselves, but 4 distinct counters exist).
6. **Program Section** — "Desktop Program Card" × 3 (homepage teaser shows 3 of the 6 total programs, each presumably deep-linking to `/programs/:slug`).
7. **Feature Section** — "Desktop Feature Card" × 4 (a 4-item "why choose us"-style grid, each with Icon + Title + Short Description).
8. **Testimonial Section** — "Desktop Testimonial Card" × 3, each with Author Name, Designation/Date.
9. **Pricing Section** — "Pricing List 01" × 10 (a single plan's feature-list rows, or a compact price-plan teaser reusing the pricing page's list component).
10. **Blog Section** — "Desktop Blog Card" × 3 (teaser of 3 blog posts, each with Title, Author Name & Date).
11. **CTA Section** — closing call-to-action band before the footer.
12. Footer — brand blurb + email subscribe form, social icons, two-column nav link grid (10 links), bottom bar copyright, decorative snowflake SVG (per the draft; not independently re-verified pixel-for-pixel here but structurally consistent with the footer link list found in the real HTML).

### About (`about.html`) — fully rendered, CSS **not** fully inlined (structure verified via markup, spacing/CSS extrapolated)
1. **Banner Section** — page hero/title banner.
2. **Image Section** — a large image/photo block.
3. **Ticker Section** — same marquee pattern as home.
4. **Story Section** — "Story List 01" × 4 with a "Year" field × 4 each: a **4-entry history/milestones timeline**.
5. **Teacher Section** — "Desktop Team Card" × 4 (a smaller faculty teaser than the full `/teachers` page's 6 cards), each with Author Name, Designation, and "Team Social Icon 01" × 4 (social links per card).
6. **Value Section** — "Desktop Value Card Close" × 3 (3 core-values cards, collapsible/expandable given the "Close" suffix, likely an accordion-style interaction).
7. **FAQ Section** — "Desktop FAQ Card Close" × 4, each with a Question/Answer wrapper — an accordion FAQ with 4 entries.
8. **CTA Section**.
9. Footer.

### Contact (`contact.html`) — **NOT rendered; no content recoverable.** Only the `<title>`/meta description (shared, generic site description) exist. Anything beyond nav/footer must be designed without a source reference.

### Programs listing (`programs.html`) — fully rendered, CSS not fully inlined
1. **Banner Section** — page hero.
2. **Program Section** — "Desktop Program Card" × 4 visible cards in this file's markup (of 6 total program slugs; the remaining 2 may render via pagination/CMS binding not captured statically, or the listing shows a subset).
3. **CTA Section**.
4. Footer.

### Program detail — `programs/little-explorer-program.html` (fully rendered AND fully-inlined CSS — a second canonical CSS source alongside the homepage)
Confirms the same design tokens (radii 100/20/15/10/6/5px, same color tokens, same Nunito Sans + Plus Jakarta Sans font pairing) hold on an inner template, not just the homepage. Detailed section-by-section breakdown wasn't separately itemized here beyond confirming shared design-system values (time-boxed); treat its section names/data-framer-name tree the same way as other pages if deeper detail is needed later.

Other program detail pages (`creative-minds-program.html`, `happy-learners-program.html`, `smart-thinkers-program.html`) render fine but, like most pages, don't ship full inline CSS. `bright-starters-program.html` and `growth-initiative.html` are empty (see §0).

### Admission (`admission.html`) — fully rendered, CSS not fully inlined
1. **Banner Section** — page hero, includes **one background video** (`<video>`, remote `.mp4`, `loop`, `muted`, `playsinline`, no autoplay/preload=none).
2. **Step Section** — "Desktop Step Card" × 3 (3-step admission process, each Step has an Icon & Title wrapper + paragraph).
3. **Application Section** — includes "Submit 01" × 2 and a "Card Wrapper" — appears to be an actual admission/enquiry form (2 submit-style buttons suggests either two form states or two CTAs).
4. **Preview Section** — a document/content preview block (e.g. prospectus or admission-form preview image), with its own Sub Title.
5. **CTA Section**.
6. Footer.

### Faculty/Teachers (`teachers.html`) — fully rendered, CSS not fully inlined
1. **Banner Section** — page hero.
2. **Teacher Section** — "Desktop Team Card" × 6 (larger, full directory vs. About's 4-card teaser), each with Author Name, Designation, Team Social Icon(s).
3. **CTA Section**.
4. Footer.

### Pricing (`pricing.html`) — fully rendered, CSS not fully inlined
1. **Pricing Section** — "Pricing List 01" × 10 (10 feature-list rows, likely for a single fee/price plan card, or split across multiple plan cards not distinguishable purely by name count).
2. **CTA Section**.
3. Footer.
(No distinct Banner Section name was found here — the page may open directly into the Pricing Section, or the banner uses a differently-named component not caught by the "*Section*" name filter used to build this list.)

### Blogs listing (`blogs.html`) — fully rendered, CSS not fully inlined
1. **Banner Section** — page hero (note: page `<title>` reads "Student Life & Activities", reflecting the Framer collection's internal name — see §1 naming note).
2. **Blog Section** — "Desktop Blog Card" × 6 (only 6 of the 7 blog post files are linked from this listing; `simple-crafts-that-inspire-imagination-and-learning.html` exists as a file but isn't linked from `blogs.html` itself — it may be reachable only via "related posts" links on other blog posts, or simply orphaned in this export).
3. **CTA Section**.
4. Footer.

## 3. Design system

### Colors — confirmed via `body{--token-...}` custom properties, byte-identical across **every** HTML file (verified on all 8 top-level pages including the empty `contact.html`, whose `<head>` still carries the token block)

| Token role | Hex | Notes |
|---|---|---|
| Tint green | `#d7fdcf` | light bg tint |
| Tint purple | `#ebe1fd` | light bg tint |
| Tint cream | `#feeecd` | light bg tint (note: draft calls this `#feeecd`, confirmed exact) |
| Background cream | `#fcfaed` | page background alt |
| Brand purple | `#3d2f6b` | |
| Black | `#000000` | |
| White | `#ffffff` | (token also repeated for a second white slot and again for a third — 3 separate white tokens exist, all `#fff`) |
| Body text gray | `#575757` | repeated across 3 separate token slots — the primary body copy color |
| Brand teal | `#09d89a` | primary accent |
| Purple deep | `#520080` | |
| Gold | `#fcb520` | |
| Gold light | `#f4da58` | |
| Light gray | `#d5d5d5` | |
| Dark bg | `#141414` | |
| Border gray | `#373737` | |
| Gray | `#bababa` | |
| Gray (darker) | `#9d9d9d` | |
| Black 10% | `#0000001a` | subtle overlay/border |
| White 10% | `#ffffff1a` | subtle overlay/border |
| Red/error | `#ff2244` | error/validation state |
| Red 15% | `#ff224426` | error background tint |
| Black 30% | `#0000004d` | modal/overlay scrim |

Note on the brief's `near-black #0a0a0a/#0d0d0d`: **these two specific hex values were NOT found anywhere in the real Framer CSS token set or the two fully-inlined stylesheets.** They appear only in the hand-drafted `reference-site/app/components/Navbar.tsx` and `Footer.tsx` (`#0D0D0D` nav background, `#0A0A0A` footer background) — i.e. they are the previous drafting pass's own invented values, not confirmed against the real site. The closest real, token-confirmed dark value is `#141414` (dark bg token). Treat `#0a0a0a`/`#0d0d0d` as unverified/plausible-but-unconfirmed until a page with those exact literal hexes turns up in real inlined CSS.

### Fonts

Real `@font-face` declarations (found in `index.html`, self-hosted copies also present in `reference-site/public/assets/fonts/`, 22 files = 11 fonts × 2 file variants each):

| Family | Weights loaded | Style | Source |
|---|---|---|---|
| **Nunito Sans** | 400, 500, 600, 700 | normal + italic | local `/assets/fonts/` + Google Fonts (gstatic) subsets |
| **Plus Jakarta Sans** | 600, 700, 800 | normal + italic | local `/assets/fonts/` + `framerusercontent.com` |
| Inter | 100–900 (all) | normal + italic | `framerusercontent.com` + local |
| Inter Variable | 400 | normal + italic | `framerusercontent.com` |
| Inter Display | 100–900 (all) | normal + italic | `framerusercontent.com` |
| Fragment Mono | 400 only | normal only | Google Fonts (gstatic) |

**Usage mapping, verified via the real CSS "style preset" rules** (`.framer-styles-preset-XXXX{--framer-font-family:...}`), not guessed:
- **Headings** (H1 and large section titles): **Plus Jakarta Sans**. Confirmed on the hero `<h1>` itself (`class="framer-styles-preset-cyvw23"` → `--framer-font-family:"Plus Jakarta Sans"`, `--framer-font-size:72px` at desktop). Other Plus Jakarta Sans presets found at 46px, 38px, 36px, 26px, 22px — a full heading scale (H1→H5-ish + card titles), all Plus Jakarta Sans.
- **Body copy** (paragraphs, sub-titles): **Nunito Sans**, confirmed at 16px in multiple presets (weight 600 in one preset used for e.g. footer link text, weight 500 in another, plain/regular in the hero subtitle).
- **Labels/eyebrows**: **could not confirm Fragment Mono is used for this anywhere.** Despite being loaded, `Fragment Mono` appears in the whole codebase **only** as `--framer-code-font-family` for `<code>` elements inside rich-text blog content (i.e., it's Framer's default monospace fallback for inline code snippets in blog posts, not a deliberate design choice for eyebrow/label text). The one CSS rule found with `text-transform:uppercase` on the homepage instead uses **Nunito Sans**, weight 500. **Correction to the brief's assumption**: small uppercase eyebrow/label text should be built with Nunito Sans (uppercase, tracked-out, small size, medium weight), not Fragment Mono. Inter/Inter Display appear to be Framer's own default/placeholder typography stack (very heavy usage count in the raw CSS, but that count includes internal `-Placeholder` fallback-font entries used before the real webfont loads) rather than a deliberately chosen visible font — no style preset resolves its primary `--framer-font-family` to Inter on the homepage; treat Inter as noise/fallback, not a real content font.
- Buttons: not independently isolated from headings/body in this pass; visually likely to follow the body font at semibold weight (600) given the `ymv9yg` Nunito-Sans-600 preset exists and is applied to interactive text like footer nav links.

### Border-radius
Confirmed real values (from the 2 fully-inlined CSS files — `index.html` and `little-explorer-program.html`, cross-checked, same set both places): **100px** (pill — buttons, tags), **20px** (large cards), **15px**, **10px**, **6px**, **5px** (small elements, icon chips, etc.). No other distinct radius values were found.

### Container / content width
The brief's assumed 1200px is **not what the real CSS uses**. The most frequent large fixed-width found in the real inlined CSS is **1300px** (used repeatedly, e.g. the desktop nav bar's inner container `width:1300px`). Two secondary breakpoint-driven container widths also appear: **768px** (tablet variant) and **390px** (mobile variant) — these look like literal viewport-frame widths Framer bakes in per breakpoint variant rather than a fluid max-width, consistent with Framer's per-breakpoint "frozen width" authoring model. Recommend using **1300px** as the desktop container max-width for parity work, not 1200px.

### Shadows
Box-shadow usage is sparse. One real multi-layer shadow found (used on presumably a card or dropdown surface):
```
box-shadow: 0 .602187px .421531px -1px #0000004a, 0 2.28853px 1.60197px -2px #00000047, 0 10px 7px -3px #0003;
```
This is a classic layered/soft shadow (three shadow layers stacking to fake a soft blur falloff). Beyond this and Framer's generic `var(--framer-input-box-shadow)` (form input focus states, value not resolved in static HTML), no other distinct shadow values were found.

### Spacing
No single generalized spacing scale could be extracted with confidence (Framer authors per-component `gap`/`padding` values rather than a token scale). Spot values observed inline include gaps/paddings in the 8px–64px range on nav/footer-like elements in the draft; the real CSS wasn't exhaustively mined for a canonical spacing scale within this pass's time budget — treat spacing as "match visually per section" rather than a fixed 4/8pt-style system, since no evidence of one was found.

## 4. Responsive behavior — real breakpoints

Grep across every page's inlined `@media` rules gives exactly two real breakpoint boundaries, consistently used site-wide (confirmed in both `and (min-width:...)` and shorthand forms):

| Breakpoint | Notes |
|---|---|
| **810px** | Below this = mobile. The nav's mobile variant (`framer-v-u0kyk7`/`framer-v-rx56cz` in the real CSS) switches to a **390px-wide, full-height, vertical, scrollable menu** (`height:100vh`, `flex-direction:column`, links stacked, padding 20px) — i.e. a full-screen slide-in/overlay mobile menu, not a simple dropdown. |
| **1380px** | Between 810–1379px = tablet variant (nav variant `framer-v-1b9bd2c`/`framer-v-yt38cp`, width 768px, same full-height vertical menu pattern as mobile but at a wider frozen width). At **≥1380px** the nav renders as the full horizontal desktop bar (`width:1300px`, `flex-flow:row`, logo left / links center / contact button right). |

**Correction to the brief's example**: the previously-drafted Navbar.tsx's claimed 900px breakpoint is **not what the real CSS uses** — the real, verified boundaries are **810px and 1380px** (giving effectively 3 tiers: mobile <810, tablet 810–1379, desktop ≥1380). Recommend implementing with `900px` replaced by these two real values.

`@media (prefers-color-scheme: dark)` also exists on every page but its body is empty (`{ @supports(...) {} }`) — i.e., Framer scaffolds a dark-mode media query but no dark-mode styles are actually defined anywhere in this export. There is no real dark mode to reproduce.

## 5. Motion / interactions

- `<html class="lenis">` is present on at least `index.html` (and presumably all pages, as a global Framer smooth-scroll behavior) — confirms Lenis smooth-scroll is used on the real site. Per task guidance, reproduce the *feel* (e.g. `scroll-behavior: smooth` in CSS, or a small smooth-scroll polyfill) rather than adding the Lenis dependency itself, unless a fuller port later decides otherwise.
- Inline animation attributes on hero text spans: `opacity`, `filter: blur(0px)`, `transform: none`, `will-change: transform` on individual word-spans in the H1/subtitle — this is Framer's per-word "fade/blur/slide-in on scroll or load" text reveal animation applied word-by-word (each word wrapped in its own `<span style="...">`). Confirms a **staggered word-reveal entrance animation** on the hero headline/subtitle.
- Section-level entrance animation: several sections' `Content` wrapper divs carry `style="will-change: transform; opacity: 0; transform: translateY(50px);"` as their *initial* (pre-animation) inline state (seen on Admission's Preview Section, for example) — i.e., a **fade-up-on-scroll** pattern (opacity 0 → 1, translateY 50px → 0) applied at the section/content-block level, on top of the word-level hero animation.
- Transitions found in real CSS: `transition: color .15s` (link/text color hover), plus Framer's `var(--framer-input-focused-transition)` on form inputs (value itself not resolved statically).
- No `@keyframes` were found anywhere in the real inlined CSS — all motion is either (a) Framer's JS-driven scroll/load animation system (setting inline `opacity`/`transform`/`filter` per element, animated via JS rather than CSS keyframes) or (b) simple CSS `transition` on hover/focus. There is no CSS-only marquee/ticker keyframe either — the "Ticker Section" being duplicated in the markup (appears twice) strongly suggests the marquee/ticker scroll is also JS-driven (translate loop), not a pure CSS `@keyframes` animation.
- FAQ cards (`Desktop FAQ Card Close`) and Value cards (`Desktop Value Card Close`) are named with a "Close" suffix, implying they have an "Open" counterpart state — i.e., **accordion-style expand/collapse** interactions for FAQ and possibly the Values section.
- Mobile menu open/close: inferred from the CSS variant classes (`framer-v-yt38cp`/`framer-v-rx56cz` = "menu open" variants where the menu wrapper animates to `height:100%`/`100vh`) — a full-screen overlay slide/expand, not confirmed with an explicit open/close class name pair, but the variant-swap mechanism (Framer's standard "component variants" responsive/interactive system) is consistent with a JS-toggled state class rather than a pure `:checked`/`:hover` CSS trick.
- Hover states on cards/buttons/links: only one concrete hover-adjacent rule was recoverable from static CSS (`transition:color .15s`, presumably paired with a `:hover{color:...}` rule elsewhere in the same ruleset that wasn't isolated in this pass). Assume standard subtle color/opacity hover shifts consistent with the rest of the palette (e.g., link color brightening to white/teal on hover) rather than large transform-based hover effects, given no hover `transform` rules were found.

## 6. Assets inventory

- **Images**: 171 files in `reference-site/public/assets/images/`, all content-hashed filenames (e.g. `eYqEkn3oLMCde67JmlG0G99MPZk-d9cfb4cf.svg`), not self-describing. Per-page local `<img src="./assets/images/...">` reference counts (unique paths per file, not total DOM occurrences):

  | Page | Unique local images referenced |
  |---|---|
  | `index.html` | 32 |
  | `about.html` | 27 |
  | `teachers.html` | 21 |
  | `admission.html` | 20 |
  | `blogs.html` | 20 |
  | `programs.html` | 15 |
  | `pricing.html` | 15 |
  | `contact.html` | 0 (empty page) |
  | `programs/little-explorer-program.html` | 19 |
  | `programs/creative-minds-program.html`, `happy-learners-program.html`, `smart-thinkers-program.html` | 15 each |
  | `programs/bright-starters-program.html`, `growth-initiative.html` | 0 (empty pages) |
  | blog posts (6 non-empty) | 18–19 each |
  | `blogs/the-importance-of-play-...html` | 0 (empty page) |

  These counts overlap heavily (shared logo/icon/pattern assets reused across pages), so they don't sum to a unique-171 breakdown by page — no attempt was made to map all 171 files to specific pages/sections individually, since filenames are hashed and not descriptive; that would require visually opening each image.

- **Videos**: 3 total, **all hosted remotely** on `framerusercontent.com` (not present in the local `assets/` folder at all — they cannot be mirrored from this repo alone):
  - `index.html`: 2 videos — one `autoplay loop muted playsinline preload="auto"` (hero background), one `loop muted playsinline preload="none"` (lazy, likely a secondary content video further down the page).
  - `admission.html`: 1 video — `loop playsinline preload="none"` on the Banner Section (no `muted` attribute captured on this one specifically, worth confirming before reuse if audio matters).
  - No `<video>` or `.mp4`/`.webm` references found on any other page.

- **Fonts**: 22 local files in `reference-site/public/assets/fonts/` = 11 distinct font files × 2 variants each (a hashed and non-hashed copy of each, standard Framer export pattern). Corresponds to the self-hosted subset of Nunito Sans, Plus Jakarta Sans, and Inter weights listed in §3; Fragment Mono is loaded purely from Google Fonts (gstatic), not self-hosted.

- **`assets/css/`**: 2 files, per the task brief confirmed to be Framer's own editor-toolbar CSS, not page design CSS — not analyzed further, correctly out of scope.

- **`assets/data/`**: not inspected in this pass (task brief flags it as "a few JSON files"; `reference-site/public/asset-map.json` — 457 entries — was checked and is simply a remote-URL → local-hashed-filename lookup table Framer's export tooling uses internally, not a content/design source).

## 7. What could NOT be determined (explicitly, per instructions — no invented numbers)

- Exact spacing/gap scale (px values for section padding, card gaps, grid gutters) beyond the border-radius and container-width figures above — no evidence of a clean token scale was found within this pass's scope; would require deeper mining of `index.html`'s/`little-explorer-program.html`'s 200KB+ CSS blocks or opening the JS runtime chunks for the other pages.
- Exact hover-state color/opacity values for cards, buttons, and nav links (only the `.15s` color transition timing was confirmed, not the actual before/after colors).
- Any content or layout for `/contact`, `programs/bright-starters-program`, `programs/growth-initiative`, and the one empty blog post — these are simply absent from the static export (see §0).
- Whether the homepage's 4 "Counter" stat values (Presentation Section) show numbers like "500+ students" etc. — the counters exist (4 of them) but their literal number/label content wasn't extracted in this pass.
- Precise mapping of most of the 171 hashed image filenames to their visual content/section (would require opening/viewing each image).
- The exact remaining CSS (grid columns, per-section responsive rules) for the 13 HTML files that don't ship full inline CSS — the two breakpoints (810px/1380px) and general design tokens are treated as site-wide/canonical since Framer shares one global design system across pages of the same project, but this is an inference from the 2 fully-inlined files, not a per-page verification for all 13.

## 8. Files produced

- `docs/reference-analysis.md` (this file)
- `docs/measurements.json` — structured design tokens for downstream implementation
