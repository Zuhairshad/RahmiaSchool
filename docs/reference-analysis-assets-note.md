# Reference Assets Note: Fonts & Hero Images

## Fonts: next/font/google vs. self-hosting the Framer export's files

`app/layout.tsx` loads both families via `next/font/google`
(`Nunito_Sans`, `Fragment_Mono`). This was verified working end-to-end:

- Ran `npm run dev` and requested `/`; the generated CSS chunk contains
  `@font-face` rules for both `Nunito Sans` and `Fragment Mono` (plus
  Next's automatic metric-matched `*-Fallback` faces), each with a
  `src: url("/_next/static/media/<hash>.woff2")`.
- Confirmed those `/_next/static/media/*.woff2` files are actually
  served (200 OK) from `.next/`, i.e. Next fetched and is genuinely
  self-hosting them locally — this is not a runtime dependency on
  Google's CDN.

So **`next/font/google` is working correctly for both families and needs
no change.**

Recommendation: **keep `next/font/google`, do not switch to hand-rolled
`@font-face` + the reference's raw `.woff2` files.** Reasoning:

1. **Fragment Mono isn't actually self-hosted in the reference itself.**
   Inspecting `reference-site/public/index.html`'s inline `<style>`
   block, the three `Fragment Mono` `@font-face` rules all point at
   `https://fonts.gstatic.com/s/fragmentmono/...` — none of the 22 files
   in `reference-site/public/assets/fonts/` are Fragment Mono. Framer
   only locally re-hosted a `latin` subset of **Nunito Sans**, **Inter**,
   and **Plus Jakarta Sans** (Inter/Plus Jakarta Sans aren't used by the
   new design tokens). So "self-hosting the reference's exact files"
   isn't even an option for Fragment Mono — there's nothing to copy.
2. For Nunito Sans, `next/font/google` already produces the same
   outcome the reference's local-hosting achieved by hand (a
   locally-served `.woff2`, `font-display: swap`, no runtime Google
   CDN request) plus it adds automatic fallback-font metric overrides
   (the `*-Fallback` faces), which the reference doesn't have.
3. Hand-hosting would mean picking specific static files out of the 22
   in `reference-site/public/assets/fonts/` (mostly a single `latin`
   weight/style per family) and manually building `@font-face` rules —
   strictly less correct than what `next/font/google` already
   generated (which pulled the correct weights actually used: 400/500/700
   for Nunito Sans body/heading tokens).

Net: no action needed in `app/layout.tsx`.

## Hero/banner images copied into `public/assets/images/`

Per scope, only a small, clearly-identifiable set was copied — most of
`reference-site/public/assets/images/` (171 files) is already being
pulled in piecemeal by other agents building individual pages (spot
check: `public/assets/images/` already had ~32 files from other agents'
work before this pass, including several program/card photos).

Copied here (4 files, filling gaps not already covered):

| File | Source page | Why |
|---|---|---|
| `YnzL6DSOhiMqCKDM919QcZfvj98-d631f531.avif` | `index.html` (home) | One of the two overlapping portrait photos in the homepage hero collage (~17% into `<body>`, right after `<header>`) |
| `C5awbluBJPV4EhKVcTbPsA5i4-f26ae8c5.avif` | `about.html` | Largest raster image on the About page; used only there, i.e. its hero/banner photo |
| `alrahma.png` | site-wide | Full-size school logo (2172x724) used in header/footer branding across the reference |
| `alrahma-light.png` | site-wide | Light/reversed variant of the same logo (1024x341), for dark backgrounds/footer |

Note: several of the reference's image filenames exist twice with
identical byte content under a `.png` name and a `-<hash>.avif` name
(e.g. `aI0iSavrLj9V1VMLhS8mhxTzbQ.png` and
`aI0iSavrLj9V1VMLhS8mhxTzbQ-a252befb.avif` are byte-identical AVIF data
despite the `.png` extension) — an artifact of the Framer export's
srcset naming. Only the real `-<hash>.avif` file was copied in each
case; the `.png`-named duplicate is redundant.

The homepage's second hero photo (`Q9Rn6EJi0zag5SQxsDKWNT8uZIg`) and
several other program/blog/teacher hero candidates identified during
this spot-check (`aI0iSavrLj9V1VMLhS8mhxTzbQ`, `tlf294BDd7tqoILZoNrXYzHpB34`,
`nR7WcOdZTQDy43uWhtOnRMT0iA`, `bM5XLgck0nuZBUl800FPnYZLqM`,
`RZCdMZ74QbQb2vTuYt62jYMNfYY`, `yZKDsRUleMx3BoVzta3YgXn9l5A`) were
**not** copied because they were already present in `public/assets/images/`
from other agents' work by the time this check ran.
