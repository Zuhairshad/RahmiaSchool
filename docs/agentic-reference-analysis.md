# RAHMA School — Framer Reference Engineering Specification

Generated from Playwright measurements of the live Framer site (Kidora template).
Source URL: https://original-daffodil-776348.framer.app/
Measurement date: 2026-09-17

---

## 1. Global Design System

### Background Colors

| Hex / RGB | Role |
|---|---|
| `rgb(252, 250, 237)` / `#fcfaed` | **Primary cream background** — page root, most sections |
| `rgb(0, 0, 0)` / `#000000` | **Dark background** — Footer (Desktop 01), hero overlay elements |
| `rgba(0, 0, 0, 0.3)` | Header nav background (semi-transparent black glass) |
| `rgba(0, 0, 0, 0.1)` | Hero section linear overlay (darkens the hero image) |
| `rgba(34, 34, 34, 0.8)` | Additional dark overlay variant |
| `rgb(255, 255, 255)` / `#ffffff` | **White sections** — Benefit, Feature, Blog sections; card backgrounds |
| `rgb(9, 216, 154)` / `#09d89a` | **Accent green** — program age badges |
| `rgb(82, 0, 128)` / `#520080` | **Accent purple** — CTA buttons (Secondary), pricing tabs |
| `rgb(252, 181, 32)` / `#fcb520` | **Gold / amber** — icon backgrounds in buttons |
| `rgb(215, 253, 207)` / `#d7fdcf` | Light green — program card 1, pricing card 2, Ticker Section bg |
| `rgb(235, 225, 253)` / `#ebe1fd` | Light lavender — program card 2 |
| `rgb(254, 238, 205)` / `#feeecd` | Light peach — program card 3, pricing card 1 |
| `rgb(213, 213, 213)` / `#d5d5d5` | Divider lines (stats separators) |
| `rgb(87, 87, 87)` / `#575757` | Secondary text / body copy color |

### Text Colors

| Value | Usage |
|---|---|
| `rgb(0, 0, 0)` | Primary black text — all headings on light backgrounds |
| `rgb(255, 255, 255)` | White text — hero h1, nav links, buttons, dark-bg sections |
| `rgb(87, 87, 87)` | Body copy paragraphs, subheadings, descriptions |
| `rgb(9, 216, 154)` | Accent green — used in specific label text |
| `rgb(0, 0, 238)` | Browser default link blue (appears in some small <a> elements) |

### Gradients

None found. The hero "gradient" effect is achieved with a `rgba(0,0,0,0.1)` solid overlay `DIV` (`Linear` element) absolutely positioned over the background image, not a CSS gradient.

### Framer Design Token Reference

From `css-analysis.json` custom properties:

```
--token-f08abcfd (cream bg):     #fcfaed
--token-dd4b7ded (purple):       #520080
--token-f36e6d71 (gold):         #fcb520
--token-69206787 (green):        #09d89a
--token-b67153af (light green):  #d7fdcf
--token-da36b686 (light purple): #ebe1fd
--token-b0de641d (light peach):  #feeecd
--token-8c0c01e9 (gray text):    #575757
--token-7b89df11 (divider):      #d5d5d5
--token-faa35dbf (yellow):       #f4da58
--token-353a59cb (dark purple):  #3d2f6b
```

### Border-Radius Values

| Value | Usage |
|---|---|
| `50px` | All primary and secondary buttons (pill shape) |
| `20px` | About cards, Testimonial cards, Pricing cards, Blog cards |
| `20px 0px 0px 20px` | Left-rounded variant (e.g. tab panel left edge) |
| `20px 20px 0px 0px` | Top-rounded variant (e.g. image within card) |
| `0px` | All section containers, nav, layout wrappers |

### Box Shadows

None found in measurements. No `box-shadow` values were applied to any measured element. Cards are differentiated by background color, not shadows.

### Transitions

All measured elements report `transition: all`. No custom transition durations were captured in the computed style measurements. The Framer motion system uses its own JS-based animation engine (see Section 6).

---

## 2. Typography System

### Font Families

Two fonts are used across the entire site:

- **Plus Jakarta Sans** (Google Fonts) — all headings (H1–H4) and display text
- **Nunito Sans** (Google Fonts) — all body, UI, nav, button, and label text

### Full Type Scale (largest to smallest)

| Role | Tag | Font Family | Size | Weight | Line Height | Letter Spacing | Color |
|---|---|---|---|---|---|---|---|
| Hero H1 | `h1` | Plus Jakarta Sans | 72px | 700 | 79.2px (1.1) | normal | `rgb(255,255,255)` |
| Section H2 | `h2` | Plus Jakarta Sans | 56px | 700 | 64.4px (1.15) | normal | `rgb(0,0,0)` or `rgb(255,255,255)` |
| Pull Quote / Subhead | `h3` | Plus Jakarta Sans | 44px | 600 | 52.8px (1.2) | normal | `rgb(0,0,0)` |
| Card Title / Stat Label | `h4` | Plus Jakarta Sans | 36px | 600 | 46.8px (1.3) | normal | `rgb(0,0,0)` |
| Nav links | `p` | Nunito Sans | 16px | 600 | 24px (1.5) | normal | `rgb(255,255,255)` |
| Button text | `p` | Nunito Sans | 16px | 600 | 24px (1.5) | normal | `rgb(0,0,0)` or `rgb(255,255,255)` |
| Section label / eyebrow | `p` | Nunito Sans | 16px | 500 | 24px (1.5) | normal | `rgb(0,0,0)` (uppercase) |
| Body copy | `p` | Nunito Sans | 16px | 400 | 24px (1.5) | normal | `rgb(87,87,87)` or `rgb(255,255,255)` |
| Age badge / tag | `p` | Nunito Sans | 16px | 500 | 24px (1.5) | normal | `rgb(0,0,0)` (uppercase) |
| Small UI / metadata | `a`, `button`, `p` | (browser default / Nunito) | 12px | 400 | normal | normal | varies |

### Typography Notes

- H2 is white (`rgb(255,255,255)`) on the Presentation Section (dark image background), black on all others.
- Section eyebrow labels (e.g. "ABOUT US", "WHY CHOOSE US", "OUR PROGRAMS") are `p` tags, `font-weight: 500`, `text-transform: uppercase`, 16px/24px.
- There is no 14px, 18px, 20px, 24px, or 32px size found in the measured type — the scale jumps: 12 → 16 → 36 → 44 → 56 → 72.
- The H1 at 768px renders in a 728×53px container (implying the font renders at approximately 36px — height 53px / 1.1 line-height ratio suggests ~48px, though Framer may be using a condensed variant at mobile not captured in the type scale JSON).
- The H1 at 390px renders in a 350×106px container (two lines at 53px line height each = approximately 48px font).

---

## 3. Spacing System

### Section Vertical Padding

| Section | Desktop (1440px) | Tablet (768px) | Mobile (390px) |
|---|---|---|---|
| Hero | `400px top / 120px bottom` | `180px top / 80px bottom` | `180px top / 80px bottom` |
| Ticker | `20px top / 20px bottom` | `20px top / 20px bottom` | `20px top / 20px bottom` |
| About | `120px top / 120px bottom` | `80px top / 80px bottom` | `80px top / 80px bottom` |
| Benefit | `120px top / 120px bottom` | `80px top / 80px bottom` | `80px top / 80px bottom` |
| Presentation | `500px top / 120px bottom` | `200px top / 80px bottom` | `200px top / 80px bottom` |
| Program | `120px top / 120px bottom` | `80px top / 80px bottom` | `80px top / 80px bottom` |
| Feature | `120px top / 120px bottom` | `80px top / 80px bottom` | `80px top / 80px bottom` |
| Testimonial | `120px top / 60px bottom` | `80px top / 40px bottom` | `80px top / 40px bottom` |
| Pricing | `60px top / 120px bottom` | `40px top / 80px bottom` | `40px top / 80px bottom` |
| Blog | `120px top / 60px bottom` | `80px top / 40px bottom` | `80px top / 40px bottom` |
| CTA | `60px top / 60px bottom` | `40px top / 40px bottom` | `40px top / 40px bottom` |
| Footer | `60px top / 30px bottom` | not measured | not measured |

### Horizontal Padding

- Desktop (1440px): `30px` left/right on all sections
- Tablet (768px): `20px` left/right on all sections
- Mobile (390px): `20px` left/right on all sections

### Container Max-Widths

- Primary content container: `max-width: 1300px` (centered within 1440px viewport)
  - Left offset from section edge: `70px` (= (1440 - 1300) / 2)
- Nav inner container: `1300px` wide, `height: 79px`
- Footer container: `1300px` wide

### Grid Gaps

| Context | Gap Value |
|---|---|
| All section outer wrappers | `10px` (flex gap) |
| Nav links (between menu items) | `30px` |
| Nav (logo to links to button) | `64px` (via Menu Wrapper) |
| Button (text to icon) | `20px` |
| About Section counter wrapper | grid layout (not gap-based at desktop) |
| Testimonial card wrapper | flex row |

### Card Padding Values

| Card Type | Padding |
|---|---|
| Desktop About Card | `40px` (all sides) |
| Desktop Testimonial Card | `0px 40px 0px 0px` (right only) |
| Desktop Pricing Card 02 (small) | `40px` (all sides) |
| Desktop Pricing Card 01 (large) | `10px` (all sides) |
| Desktop Blog Card | `0px` (outer), content wrapper varies |
| Phone About Card (768/390) | `20px` (all sides) |
| Phone Testimonial Card | `20px` (all sides) |
| Phone Pricing Card | `20px` (all sides) |
| Phone Blog Card | `0px` outer |
| Feature Card | `30px` (all sides) |
| Program Card content wrapper | `30px` (all sides) |
| Program Card outer | `10px` |

---

## 4. Breakpoints

### Breakpoint Widths Found

From CSS media queries (`css-analysis.json`):

| Breakpoint | Rule |
|---|---|
| `≤ 430px` | `only screen and (width<=430px)` — mobile |
| `≤ 800px` | `only screen and (width<=800px)` — tablet/small |
| `≥ 1100px` | `only screen and (width>=1100px)` — desktop |
| `≤ 809px` | `(max-width:809.98px)` — Framer's internal phone breakpoint |
| `810px – 1379px` | `(min-width:810px) and (max-width:1379.98px)` — Framer tablet |
| `≤ 1379px` | `(max-width:1379px) and (min-width:0)` — below max desktop |
| `≤ 800px height` | `only screen and (height<=800px)` |

Framer's design breakpoints used in this project:

| Label | Viewport Width | Framer Component Variant |
|---|---|---|
| Desktop | 1440px | `Large Menu 01`, `Desktop Testimonial Card`, `Desktop About Card`, `Desktop Blog Card`, `Desktop Pricing Card`, `Desktop Program Card`, `Desktop Feature Card` |
| Tablet | 768px | `Phone Closed` (hamburger nav), `Phone About Card`, `Phone Testimonial Card`, `Phone Pricing Card`, `Phone Blog Card` |
| Mobile | 390px | Same component variants as 768px (phone variants), narrower widths |

### Changes at Each Breakpoint

#### Header / Nav

| Property | 1440px | 768px | 390px |
|---|---|---|---|
| Component | `Large Menu 01` (full nav) | `Phone Closed` (hamburger) | `Phone Closed` (hamburger) |
| Width | 1440×79 | 768×80 | 390×80 |
| Padding | `0px` | `20px` | `20px` |
| Menu links visible | Yes (row) | No (hamburger only) | No (hamburger only) |
| Contact button | Yes (163×53px) | No | No |
| Hamburger icon | No | Yes (40×40px) | Yes (40×40px) |
| Logo size | 143×41px | 116×33px | 116×33px |
| Backdrop filter | `blur(10px)` | not measured | not measured |

#### Hero Section

| Property | 1440px | 768px | 390px |
|---|---|---|---|
| Section size | 1440×900 | 768×459 | 390×536 |
| Padding | `400px top, 30px H, 120px bottom` | `180px top, 20px H, 80px bottom` | `180px top, 20px H, 80px bottom` |
| Container | 1300×323 | 728×199 | 350×276 |
| Title container | 600×158 | 728×53 | 350×106 |
| Subtitle container | 600×48 | 728×48 | 350×72 |
| Decorative icon | 341×341 (visible) | 109×109 (smaller) | 110×110 |
| Layout direction | row (icon beside content) | column | column |

#### About Section

| Property | 1440px | 768px | 390px |
|---|---|---|---|
| Section height | 1068 | 1712 | 1647 |
| Card component | `Desktop About Card` 252×234 | `Phone About Card` 728×215 | `Phone About Card` 350×263 |
| Card layout | flex column | flex column | flex column |
| Counter wrapper | flex row (horizontal) | CSS grid (2-column) | CSS grid |
| Layout | 2 cards side by side | stacked | stacked |

#### Grid-to-Stack Transitions

| Section | Desktop | Mobile |
|---|---|---|
| About cards | 2 per row, 252px each | Single column, full-width |
| Benefit section | 2-column (image + content, 580+660) | stacked (image on top, content below) |
| Program cards | 2 per row (650px each) | Single column, full-width |
| Feature cards | 2-column tab layout (490+620) | Stacked vertically |
| Testimonial cards | Slider showing 774px card | Phone card 350px each |
| Blog cards | 3 per row (420px each) | Single column, 728/350px |
| Pricing cards | 2 side by side (252 + 860) | Single column |
| Footer columns | 4+ column layout | Stacked |

---

## 5. Homepage — Section by Section

### Section: Header (Nav)

- **Height:** 79px desktop, 80px mobile
- **Background:** `rgba(0, 0, 0, 0.3)` with `backdrop-filter: blur(10px)` — glass effect over hero
- **Position:** `absolute` (overlays hero), `z-index: 9`
- **Padding:** `0px` outer; nav inner: `13px 0px`
- **Layout:** `flex column` (outer), `flex row space-between` (inner nav)
- **Key children:**
  - Logo: `143×41px`, SVG, `object-fit: contain`
  - Menu links wrapper: `324×26px`, `flex row`, gap `30px` (between links), outer gap `64px`
  - Each nav link: `flex column`, padded `0px 0px 2px` (2px bottom for underline indicator)
  - Nav link underline "Line": `1px height div` — animated underline on hover
  - CTA button "Primary Button 01": `163×53px`, `border-radius: 50px`, white bg
- **Typography:** nav links — Nunito Sans 16px/600, white; button label — Nunito Sans 16px/600, black
- **Animation:** Nav appears over hero. Underline `Line` element animates opacity/width on hover (Framer variant).

---

### Section: Hero Section

- **Height:** 900px at 1440px
- **Background:** No explicit background color (transparent) — relies on full-bleed background image below all content. A `DIV` named `Linear` (1440×900, `rgba(0,0,0,0.1)`) creates the dark overlay.
- **Padding:** `400px top / 120px bottom / 30px horizontal`
- **Layout:** `flex row`, `align-items: flex-end`, `justify-content: center`
- **Key children:**
  - `Container` (1300×323): `flex row`, `align-items: center`, `justify-content: center`, `max-width: 1300px`
  - `Icon` decorative (341×341): absolutely positioned, rotated slightly via matrix transform
  - `Content` (1300×323): `flex column`
  - `Title & Button Wrapper` (600×323): `flex column`, gap `40px`
  - `Title Wrapper` (600×230): `flex column`, gap `24px`
  - `Title` H1 (600×158): "Building bright young minds" — Plus Jakarta Sans 72px/700, white
  - `Sub Title` (600×48): "A nurturing space where children learn, play, and grow..." — Nunito Sans 16px/400, white
  - Decorative SVG `Ellipse` (240×97): positioned `transform: matrix(1,0,0,1,0,-48)` — decorative underline swoop
  - `Primary Buttom 01` (165×53): white bg, `border-radius: 50px`, `padding: 9px 11px 9px 20px`, gap `20px`
    - Label: "Enroll now" — Nunito Sans 16px/600, black
    - Icon circle: 35×35 gold (`rgb(252,181,32)`) and purple (`rgb(82,0,128)`) — two icon circles
  - `Linear` overlay: 1440×900, `position: absolute`, `rgba(0,0,0,0.1)`, `z-index: not specified`
- **Background Image:** Full-bleed image container below section (separate `DIV` at `top:0` with `z-index:0`)
- **Animation:** Elements appear on load with Framer motion (not captured in animations.json — data empty)

---

### Section: Ticker Section (x2)

- **Height:** 80.5px desktop, 69.7px tablet/mobile
- **Background:** `rgb(215, 253, 207)` — light mint green
- **Padding:** `20px top / 20px bottom / 0px horizontal`
- **Layout:** `flex row`, `align-items: center`, `justify-content: center`
- **Key children:**
  - `Container` (1300×40): holds marquee ticker
  - `Ticker` (1300×40): `flex row`, contains repeating text + icon pairs
  - Each ticker item: `Title` (310×40) + `Icon` (40×40) — repeated
- **Typography:** not measured in typography.json (ticker items use small display text)
- **Note:** Appears twice on homepage — after Hero and after Presentation Section. Same component.

---

### Section: About Section

- **Height:** 1068px desktop, 1712px tablet, 1647px mobile
- **Background:** `rgba(0,0,0,0)` — inherits parent cream `rgb(252,250,237)`
- **Padding:** `120px 30px` desktop; `80px 20px` tablet/mobile
- **Layout:** `flex row`, `align-items: flex-start`, container `flex column`
- **Key children:**
  - `Title & Counter Wrapper` (1300×358): `flex column`
    - `Title & Sub Title` (1300×211): `flex row` desktop, `flex column` mobile
      - Eyebrow label "ABOUT US" (uppercase, 16px/500)
      - H3 "A warm space for growing minds…" — 44px/600, black, 650px wide
      - `Icon Wrapper` (120×45): three SVG icons 45×45 each
    - `Counter Wrapper` (1300×87): `flex row` (4 stats) desktop → `grid` (2×2) mobile
      - 4 stat blocks: `flex column`, separated by `1×86` divider lines
      - Each stat: H3 number (44px/600) + p description (16px/400)
  - Card grid (below counter, 1300×470):
    - 2× `Desktop About Card` (252×234) — `border-radius: 20px`, `padding: 40px`
    - Card 1 bg: `rgb(215,253,207)` (light green)
    - Card 2 bg: `rgb(235,225,253)` (light lavender)
    - Each card: `flex column`, H4 title (36px/600) + p description (16px/400)
- **Buttons:** Contact button in this section: 168×53, purple (`rgb(82,0,128)`), `border-radius: 50px`

---

### Section: Benefit Section

- **Height:** 1570px desktop, 1485px tablet, 1487px mobile
- **Background:** `rgb(255, 255, 255)` (white)
- **Padding:** `120px 30px` all breakpoints (reduced to `80px 20px` on mobile)
- **Layout:** `flex row`, centered container 1300px, has background SVG `Vector` (2464×1693, decorative)
- **Key children:**
  - `Image & Content Wrapper` (1300×800): `flex row`, gap between image and content
    - `Image Wrapper` (580×800): contains benefit image
    - `Content Wrapper` (660×652): `flex column`
      - `Title & Card Wrapper` (580×448): `flex column`
        - `Title & Sub Title` (580×245): eyebrow "WHY CHOOSE US" + H2 "What makes us the right choice" + p subtitle
        - `Line & Card Wrapper` (580×143): `flex column`
          - 3 benefit items with icon + label + description
  - Below: About Cards section (2× `Desktop About Card` with different content variant)
- **Images:** Background SVG `Vector` (decorative), main benefit image served via Framer CDN (PNG, 419×389 natural, rendered 525×488, `object-fit: cover`)

---

### Section: Presentation Section

- **Height:** 793px desktop, 358px tablet, 401px mobile
- **Background:** `rgba(0,0,0,0)` — but has full-bleed background image, overlaid with `DIV` named `Linear` (`rgba(0,0,0,0.3)`)
- **Padding:** `500px top / 120px bottom / 30px horizontal` (content anchored at bottom of tall section)
- **Layout:** `flex row`, content container `1300×173`
- **Key children:**
  - `Title Wrapper` (515×173): `flex column`
    - Eyebrow "PRESENTATION" (uppercase, 16px/500, white)
    - H2 "Discover our learning space" — 56px/700, **white** (on dark background)
    - Decorative `Ellipse` SVG underline
  - `Linear` overlay: 1440×793, `rgba(0,0,0,0.3)`
- **Image:** Full-bleed background (video/image of classroom), 1440px wide
- **Note:** This is effectively a "video banner" or "image hero" mid-page section with text overlay.

---

### Section: Program Section

- **Height:** 2205px desktop, 3215px tablet, 2556px mobile
- **Background:** `rgba(0,0,0,0)` (cream)
- **Padding:** `120px 30px` desktop; `80px 20px` mobile
- **Layout:** `flex row`, container `1300×1965` `flex column`
- **Key children:**
  - `Title & Button Wrapper` (1300×173): `flex row`, space-between
    - `Title Wrapper` (440×173): eyebrow "OUR PROGRAMS" + H2 "Programs for growing minds" + ellipse SVG
    - `Button` (224×53): "View all programs", `border-radius: 50px`, purple bg
  - `Card Wrapper` (1300×1712): `flex row` (2 columns desktop, stacked mobile)
    - **4 program cards**, displayed as 2×2 grid:
      - Card 1 bg: `rgb(215,253,207)` (light green), `border-radius: 20px`, `padding: 10px outer / 30px content`
      - Card 2 bg: `rgb(235,225,253)` (light lavender)
      - Card 3 bg: `rgb(254,238,205)` (light peach)
      - Card 4: not measured separately (implied by 4-card grid)
    - Each card layout: `Content & Image Wrapper` → `Content Wrapper` → title, description, age badge, view button + image
    - Age badges: 80×(varies), green/purple/gold/white bg, uppercase text
    - View button: `flex row`, inline link style (no border-radius pill)

---

### Section: Feature Section

- **Height:** 1040px desktop, 1814px tablet, 1732px mobile
- **Background:** `rgb(255, 255, 255)` (white), with decorative background `Vector` SVG
- **Padding:** `120px 30px` desktop; `80px 20px` mobile
- **Layout:** `flex row`, container `1300×800` `flex row`
- **Key children:**
  - `Content Wrapper` (490×800): left column
    - Eyebrow "FEATURES" + H2 "Little moments that shine" + subtitle p + CTA button
    - Button: 165×53 (or 132×42 at breakpoint), purple, `border-radius: 50px`
  - `Image Wrapper` (51×180): thin vertical strip (image tabs/slider indicator)
  - `Card Wrapper` (620×799): right column, `flex row`
    - `Card Wrapper 01` (300×799): `padding: 0px 0px 100px` — offset top card column
    - `Card Wrapper 02` (300×799): `padding: 100px 0px 0px` — offset bottom card column
    - Each `Desktop Feature Card` (~75×55 or 55×106): `border-radius: 20px`, cream bg (`rgb(252,250,237)`), `padding: 30px`
      - Contains: small icon + title + short description
- **Images:** Large feature images (420×654 natural, rendered 525×818, `object-fit: cover`) cycling through tabs

---

### Section: Testimonial Section

- **Height:** 883px desktop, 803px tablet, 847px mobile
- **Background:** `rgba(0,0,0,0)` (cream)
- **Padding:** `120px top / 60px bottom / 30px horizontal` desktop; `80px top / 40px bottom / 20px horizontal` mobile
- **Layout:** `flex row`, container `1300×703` `flex column`
- **Key children:**
  - `Title Wrapper` (440×173): eyebrow "FEATURES" + H2 "Stories from happy parents"
  - `Card Wrapper` (1300×450): `flex row`
    - 3× `Desktop Testimonial Card` (774×450 each): `border-radius: 20px`, white bg, `padding: 0px 40px 0px 0px`
      - Each: `Image Wrapper` (342×450) + `Content Wrapper` (342×370)
        - `Icon & Paragraph` (342×207): star rating icons + testimonial text
        - `Author Name & Date` (340×24)
    - Mobile: 3× `Phone Testimonial Card` (350×565, `padding: 20px`)
  - Carousel/slider: cards overflow and scroll horizontally (implied by 3× 774px cards in 1300px container)
- **Images:** 342×450 image areas (portrait photos), `object-fit: cover`

---

### Section: Pricing Section

- **Height:** 1107px desktop, 1335px tablet, 1427px mobile
- **Background:** `rgba(0,0,0,0)` (cream)
- **Padding:** `60px top / 120px bottom / 30px horizontal` desktop; `40px top / 80px bottom / 20px horizontal` mobile
- **Layout:** `flex row`, container `1300×927` `flex column`
- **Key children:**
  - `Title Wrapper` (440×173): eyebrow "OUR PROGRAMS" + H2 "Programs for growing minds"
  - Tab switcher: `Pricing Tab Button 01` (85×40, white bg) + `Pricing Tab Button 02` (100×40, purple bg), `padding: 8px 20px`
  - `Desktop Pricing Tab Monthly 01` (1300×674): contains cards
    - `Desktop Pricing Card 02` (252×405): `border-radius: 20px`, `rgb(215,253,207)` (green), `padding: 40px`
      - H3 price "$100.00" (44px/600), bullet list items (5×`Pricing List 01`)
    - `Desktop Pricing Card 01` (860×674): `border-radius: 20px`, `rgb(254,238,205)` (peach), `padding: 10px`
      - H3 price "$500.00" (44px/600), 5× bullet list rows (340px wide each, 24px tall)
  - Mobile: `Phone Pricing Tab Monthly` stacked layout, cards at full width

---

### Section: Blog Section

- **Height:** 1013px desktop, 2152px tablet, 1522px mobile
- **Background:** `rgb(255, 255, 255)` (white), with decorative `Vector` SVG background
- **Padding:** `120px top / 60px bottom / 30px horizontal` desktop; `80px top / 40px bottom / 20px horizontal` mobile
- **Layout:** `flex row`, container `1300×833` `flex column`
- **Key children:**
  - `Title Wrapper` (600×173): eyebrow "INSIGHTS" + H2 "Insights for early learning and growth"
  - `Card Wrapper` (1300×580): `flex row`, 3 cards side by side
    - 3× `Desktop Blog Card` (420×580): `border-radius: 20px`, white bg, `padding: 0px`
      - `Image Wrapper` (420×397): image area, `border-radius: 20px 20px 0px 0px`
      - `Content Wrapper` (420×183): `padding` inside
        - `Author Name & Date` (340×24): inline row
        - Blog title heading
        - Excerpt text
  - Mobile: `Phone Blog Card` (728×625 at 768px, 350×386 at 390px)
- **Images:** Blog card images: 420×654 natural, rendered 525×818 (upscaled by Framer), `object-fit: cover`

---

### Section: CTA Section

- **Height:** 644px desktop, 439px tablet, 550px mobile
- **Background:** `rgb(255, 255, 255)` (white)
- **Padding:** `60px 30px` desktop; `40px 20px` mobile
- **Layout:** `flex row`, container `650×(variable)` `flex column`
- **Key children:**
  - `Title & Button Wrapper` (250×variable): `flex column`
    - H2 "Join our learning community today" (56px/700)
    - Sub title paragraph
    - `Secondary Buttom 01` (83×variable): purple bg, `border-radius: 50px`
  - `Small Image 01` (32×variable): decorative image
  - The full CTA card is surrounded by a large decorative image (1300×500, `object-fit: cover`)

---

### Section: Footer (Desktop 01)

- **Height:** 540px desktop
- **Background:** `rgb(0, 0, 0)` (black) — the only full black section
- **Padding:** `60px top / 30px bottom / 30px horizontal`
- **Layout:** `flex row`, container `1300×450` `flex column`
- **Key children:**
  - `Content Wrapper` (1300×320): `flex row`
    - `Logo & Form Wrapper` (382×320):
      - Logo: 171×47 SVG (white version), `object-fit: contain`
      - Short description: 382×72, white text
      - `Submit 01` button (158×53): white bg, `border-radius: 50px`, purple icon circle
    - Navigation columns (4 columns, flex row, menu links)
  - Social Icons: 4× `Footer Icon 01` (45×45 each)
  - `Footer Menu 01` links: 11 items (various widths, 26px height, `padding: 0px 0px 2px`)
  - Bottom bar (below divider): copyright text, 1300×130
- **Colors:** All text white on black background, logo white SVG version

---

## 6. Animation Inventory

### animations.json

The `animations.json` file is empty (`[]`). No animation data was captured by the Playwright measurement script.

### CSS Keyframe Animations (from css-analysis.json)

These are Framer's internal UI animations (not page content animations):

| Name | Keyframes | Purpose |
|---|---|---|
| `blink` | `49%`: border visible → `50%`/`99%`: transparent | Text cursor blink |
| `ProseMirror-cursor-blink` | `to: visibility:hidden` | Editor cursor |
| `scale-in-s1vo07bb` | `0%`: opacity 0, scale 0.97 → `100%`: opacity 1, scale 1 | Dropdown/modal open |
| `tooltip-enter-s1wvirx` | `0%`: opacity 0, translateY + scale 0.96 → `100%`: opacity 1, scale 1 | Tooltip appear |
| `tooltip-exit-s1jngqm9` | `0%`: opacity 1 → `100%`: opacity 0 | Tooltip disappear |
| `spin-b12vj57b` | `to: rotate(360deg)` | Loading spinner |
| `enter-m1vb3zu0` | `0%`: opacity 0, translateY(16px) scale(0.9) → `100%`: opacity 1, no transform | Section element entrance |
| `fadeIn-fim46by` / `fadeIn-f1rxqld5` / `fadeIn-t49i6vy` | `0%`: opacity 0 → `100%`: opacity 1 | General fade in |

### Observed Framer Motion Patterns

Although `animations.json` is empty, the following are inferred from the Framer template structure:

1. **Appear animations on scroll** — Framer uses `data-framer-appear-id` attributes. Elements fade up (`translateY(16px) → 0`, `opacity: 0 → 1`) as they enter the viewport. The `enter-m1vb3zu0` keyframe confirms this pattern.

2. **Nav link hover underline** — Each nav link has a `Line` child element (1px height div). On hover, a Framer variant changes its `scaleX` or `width` from 0 to full width. This is a Framer variant-based state, not a CSS animation.

3. **Button hover states** — Primary button (white bg) likely scales or changes opacity on hover. Secondary button (purple) likely lightens. These are Framer variants not captured in CSS keyframes.

4. **Presentation Section parallax** — The `500px top` padding on the Presentation Section (vs 120px on others) creates a large gap for a parallax scroll effect. The content appears to be pinned while the background image scrolls.

5. **Testimonial / Blog card slider** — Cards overflow their container width horizontally, implying a drag/scroll carousel (Framer Motion `useDragControls` or built-in carousel component).

### Hover States (inferred from structure)

| Element | Before | After (hover) |
|---|---|---|
| Nav link | Text white, no underline | Underline `Line` element visible (1px at bottom, full width) |
| Primary button (white) | White bg, black text | Likely scale(1.02) or opacity change via Framer variant |
| Secondary button (purple) | `rgb(82,0,128)` bg | Likely `rgb(60,0,95)` or lighter via Framer variant |
| Blog card | White bg, no lift | Likely slight scale or shadow via Framer variant |
| Footer menu link | White text, no underline | Underline appears (same pattern as nav) |

---

## 7. Per-Page Layout Summary

All pages share the same header, CTA section, and footer. Internal page names show as "Kidora" (template name).

### Page: About

- **Total Height:** 7079px
- **Background Color Sequence:** cream → black (banner) → purple → white → cream → black (footer)
- **Sections:** Header, Banner Section (523px, `padding: 200px 30px 120px`), Image Section (586px), Ticker, Story Section (1040px, `120px 30px`), Teacher Section (1045px), Value Section (1040px), FAQ Section (1265px), CTA Section (644px), Footer (540px)
- **Section Count:** 10 named sections (331 total elements)
- **Unique Headings:**
  - H1: "A nurturing space for young minds" (72px/700)
  - H3: "The story of how our school began and our mission to support early learning" (44px/600)
  - H2: "Teachers who inspire young minds" (56px/700)
  - H2: "Values that shape learning" (56px/700)
  - H2: "Common questions from parents" (56px/700) — FAQ accordion
- **Unique Components:** Image Section (full-bleed image), Story Section (text + image), Teacher grid cards, Value cards, FAQ accordion

### Page: Programs

- **Total Height:** 3425px
- **Background Color Sequence:** cream → purple (banner) → white → cream → black (footer)
- **Sections:** Banner Section (522px), Header (overlay), Program Section (1719px, `120px 30px 60px`), CTA Section (644px), Footer (540px)
- **Section Count:** 4 major content sections (188 total elements)
- **Unique Headings:**
  - H1: "Programs designed for growing minds" (72px/700)
- **Unique Components:** Full program catalog grid (more cards than homepage), no Ticker or Feature sections

### Page: Contact

- **Total Height:** 4848px
- **Background Color Sequence:** cream → purple (header) → white → cream → black (footer)
- **Sections:** Header, Hero Section (522px, `200px 30px 120px`), Contact Section (993px, `120px 30px 60px`), Maps Section (884px, `60px 30px 120px`), FAQ Section (1265px), CTA Section (644px), Footer (540px)
- **Section Count:** 6 major sections (196 total elements)
- **Unique Headings:**
  - H1: "Get in touch with us today" (72px/700)
  - H3: "Reach out to our team today" (44px/600)
  - H2: "Common questions from parents" (56px/700)
- **Unique Components:** Contact form section, embedded map section (`Maps Section`) — unique to this page

### Page: Teachers

- **Total Height:** 3031px
- **Background Color Sequence:** cream → purple/black (banner) → white → cream → black (footer)
- **Sections:** Banner Section (522px), Header, Teacher Section (1325px, `120px 30px 60px`), CTA Section (644px), Footer (540px)
- **Section Count:** 4 major sections (191 total elements)
- **Unique Headings:**
  - H1: "Meet Dedicated educators today make" (72px/700)
- **Unique Components:** Expanded teacher profile grid cards

### Page: Admission

- **Total Height:** 4389px
- **Background Color Sequence:** cream → purple (banner) → white → cream → black (footer)
- **Sections:** Banner Section (522px), Header, Step Section (626px, `120px 30px 60px`), Application Section (1205px, `60px 30px 120px`), Preview Section (793px, `500px 30px 120px`), CTA Section (704px), Footer (540px)
- **Section Count:** 5 major sections (200 total elements)
- **Unique Headings:**
  - H1: "Start your learning journey" (72px/700)
  - H3: "Simple Admission Form Apply" (44px/600)
  - H2: "watch our learning culture & values" (56px/700)
- **Unique Components:** Step Section (numbered admission steps), Application form section (form inputs), Preview Section (same as homepage Presentation — video/image banner with heavy top padding)

### Page: Blogs

- **Total Height:** 3077px
- **Background Color Sequence:** cream → purple (banner) → white → cream → black (footer)
- **Sections:** Banner Section (522px), Header, Blog Section (1370px, `120px 30px 60px`), CTA Section (644px), Footer (540px)
- **Section Count:** 4 major sections (220 total elements)
- **Unique Headings:**
  - H1: "Explore latest stories and insights" (72px/700)
- **Unique Components:** Full blog listing grid (more cards than homepage)

### Page: Pricing

- **Total Height:** 2486px
- **Background Color Sequence:** cream → purple/dark (header) → cream → black (footer)
- **Sections:** Header, Pricing Section (1302px, `200px 30px 60px`), CTA Section (644px), Footer (540px)
- **Section Count:** 3 major sections (208 total elements)
- **Unique Headings:**
  - H1: "Choose the right plan today" (72px/700)
  - H3: "$100.00" (44px/600) — pricing display
  - H3: "$500.00" (44px/600) — pricing display
- **Unique Components:** Full pricing page with plan comparison (same component as homepage Pricing Section but with top padding = `200px` making it a header-overlay style)

### Banner Section (shared across inner pages)

All inner pages except About, Contact, and Pricing use a shared `Banner Section` component:
- **Height:** 522px (523px on About)
- **Padding:** `200px top / 30px horizontal / 120px bottom`
- **Background:** Full-bleed image + purple overlay (not solid, based on `rgb(82,0,128)` in page color arrays)
- Contains `Vector` SVG (549px tall, decorative), `Container` (1300×202), `Content` and `Title Wrapper`

---

## 8. Responsive Behavior

### Homepage at 1440px vs 768px vs 390px

#### Navigation

| 1440px | 768px | 390px |
|---|---|---|
| Full horizontal nav, all links visible | Hamburger menu only (Phone Closed) | Hamburger menu only |
| Logo 143×41 | Logo 116×33 | Logo 116×33 |
| Container 1300×79, padding 13px 0px | Container 728×40, padding 0px | Container 350×40 |
| "Contact us" button visible | No button | No button |

#### Hero Section

| 1440px | 768px | 390px |
|---|---|---|
| 1440×900 | 768×459 | 390×536 |
| Padding: 400px/120px/30px | Padding: 180px/80px/20px | Padding: 180px/80px/20px |
| H1 container: 600×158 | H1 container: 728×53 | H1 container: 350×106 |
| Sub title: 600×48 | Sub title: 728×48 | Sub title: 350×72 |
| Decorative icon: 341×341 | Icon: 109×109 | Icon: 110×110 |

#### About Section

| 1440px | 768px | 390px |
|---|---|---|
| 1440×1068 | 768×1712 | 390×1647 |
| Padding: 120px/30px | Padding: 80px/20px | Padding: 80px/20px |
| Counter wrapper: flex row | Counter wrapper: CSS grid (2×2) | CSS grid (2×2) |
| Cards: Desktop About Card 252×234 | Cards: Phone About Card 728×215 | Cards: Phone About Card 350×263 |

#### Benefit Section

| 1440px | 768px | 390px |
|---|---|---|
| 1440×1570 | 768×1485 | 390×1487 |
| 2-column: 580px image + 660px content | Stacked column | Stacked column |
| Padding: 120px/30px | Padding: 80px/20px | Padding: 80px/20px |

#### Program Section

| 1440px | 768px | 390px |
|---|---|---|
| 1440×2205 | 768×3215 | 390×2556 |
| 2-column card grid (650px each) | Single column (728px) | Single column (350px) |

#### Feature Section

| 1440px | 768px | 390px |
|---|---|---|
| 1440×1040 | 768×1814 | 390×1732 |
| 2-column layout (490 + 620) | Stacked | Stacked |

#### Testimonial Section

| 1440px | 768px | 390px |
|---|---|---|
| Desktop Testimonial Card 774×450 | Phone Testimonial Card 350×565 | Phone Testimonial Card 350×565 |
| Padding 0px 40px 0px 0px | Padding 20px | Padding 20px |

#### Pricing Section

| 1440px | 768px | 390px |
|---|---|---|
| 1440×1107 | 768×1335 | 390×1427 |
| Desktop cards: 252 + 860px side by side | Phone Pricing stacked | Phone Pricing stacked |

#### Blog Section

| 1440px | 768px | 390px |
|---|---|---|
| 1440×1013 | 768×2152 | 390×1522 |
| 3 cards per row (420px each) | 1 card per row (728px) | 1 card per row (350px) |
| Blog card 420×580 | Phone Blog Card 728×625 | Phone Blog Card 350×386 |

---

## 9. Screenshot Index

All screenshots are located in `/docs/screenshots/`. Total: ~150 files.

### Full-Page Screenshots (by page)

| Page | Dimensions | File |
|---|---|---|
| Home | 1440×900 | `home-1440x900.png` |
| Home | 1920×1080 | `home-1920x1080.png` |
| Home | 1280×800 | `home-1280x800.png` |
| Home | 1024×768 | `home-1024x768.png` |
| Home | 768×1024 | `home-768x1024.png` |
| Home | 430×932 | `home-430x932.png` |
| Home | 390×844 | `home-390x844.png` |
| About | (same 7 sizes) | `about-[size].png` |
| Programs | (same 7 sizes) | `programs-[size].png` |
| Contact | (same 7 sizes) | `contact-[size].png` |
| Teachers | (same 7 sizes) | `teachers-[size].png` |
| Admission | (same 7 sizes) | `admission-[size].png` |
| Blogs | (same 7 sizes) | `blogs-[size].png` |
| Pricing | (same 7 sizes) | `pricing-[size].png` |

### Viewport-Only Screenshots (above-the-fold)

Prefixed `viewport-[page]-[size].png`, same 7 sizes per page. E.g.:
- `viewport-home-1440x900.png`
- `viewport-about-390x844.png`

Special: `home-1440x900-viewport.png` and `about-1440x900-viewport.png` etc. (alternate naming)

### Scroll-Snapshot Screenshots (Homepage)

Desktop scroll at 900px increments:

| File | Scroll Position |
|---|---|
| `home-scroll-0.png` | Top (0px) |
| `home-scroll-900.png` | 900px |
| `home-scroll-1800.png` | 1800px |
| `home-scroll-2700.png` | 2700px |
| `home-scroll-3600.png` | 3600px |
| `home-scroll-4500.png` | 4500px |
| `home-scroll-5400.png` | 5400px |
| `home-scroll-6300.png` | 6300px |
| `home-scroll-7200.png` | 7200px |
| `home-scroll-8100.png` | 8100px |
| `home-scroll-9000.png` | 9000px |
| `home-scroll-9900.png` | 9900px |
| `home-scroll-10800.png` | 10800px |
| `home-scroll-11700.png` | 11700px |

Mobile scroll at 844px increments (18 files): `home-mobile-scroll-0.png` through `home-mobile-scroll-13504.png`

---

## 10. React Implementation Notes

### 10.1 Replicating the Navigation

**Glass nav effect:**
```css
.nav {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  z-index: 9;
  height: 79px;
}
.nav-inner {
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 13px 0;
}
```

**Nav link underline animation (CSS approach):**
```css
.nav-link {
  display: flex;
  flex-direction: column;
  padding-bottom: 2px;
  gap: 0;
}
.nav-link-text { /* p tag */
  font-family: 'Nunito Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #ffffff;
}
.nav-link-underline {
  height: 1px;
  background: white;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}
.nav-link:hover .nav-link-underline {
  transform: scaleX(1);
}
```

**Responsive nav** — show hamburger icon at `max-width: 809px`:
```css
@media (max-width: 809px) {
  .nav-desktop { display: none; }
  .nav-hamburger { display: flex; }
}
```

### 10.2 Replicating the Hero Section

**Hero layout:**
```css
.hero {
  position: relative;
  height: 900px; /* 536px mobile */
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  padding: 400px 30px 120px; /* 180px 20px 80px mobile */
  overflow: hidden;
}
.hero-bg-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1;
}
.hero-content {
  position: relative;
  z-index: 5;
  max-width: 1300px;
  width: 100%;
}
```

**Button with icon circles:**
```css
.btn-primary {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 9px 11px 9px 20px;
  border-radius: 50px;
  background: #ffffff;
  border: none;
  cursor: pointer;
}
.btn-icon-circle {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-icon-gold { background: rgb(252, 181, 32); }
.btn-icon-purple { background: rgb(82, 0, 128); }
```

### 10.3 Replicating the Section Eyebrow Label

```css
.eyebrow {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: normal;
  color: #000000;
}
/* White variant for dark sections */
.eyebrow-white { color: #ffffff; }
```

### 10.4 Replicating Scroll-Triggered Entrance Animations

The `enter-m1vb3zu0` keyframe from Framer's CSS:
```css
@keyframes enter {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
```

**React/IntersectionObserver approach:**
```tsx
import { useEffect, useRef, useState } from 'react';

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(16px) scale(0.9)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      {children}
    </div>
  );
}
```

**Framer Motion approach (closer to original):**
```tsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function AnimatedSection({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
```

### 10.5 Replicating the Ticker Section

```css
.ticker-section {
  background: rgb(215, 253, 207);
  padding: 20px 0;
  overflow: hidden;
  display: flex;
  flex-direction: row;
}
.ticker-track {
  display: flex;
  flex-direction: row;
  gap: 0;
  animation: ticker-scroll 20s linear infinite;
  white-space: nowrap;
}
@keyframes ticker-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
/* Duplicate content in HTML for seamless loop */
```

**React implementation:**
```tsx
import { motion } from 'framer-motion';

function Ticker({ items }) {
  return (
    <div style={{ overflow: 'hidden', background: '#d7fdcf', padding: '20px 0' }}>
      <motion.div
        style={{ display: 'flex', width: 'max-content' }}
        animate={{ x: [0, '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '0 24px' }}>
            <span>{item.text}</span>
            <img src={item.icon} width={40} height={40} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
```

### 10.6 Replicating the Testimonial Carousel

The Framer carousel shows one large card (774px) at a time within a 1300px container, with visible overflow. Implementation:

```tsx
import { motion, useMotionValue, useTransform } from 'framer-motion';

// CSS approach with scroll-snap
.testimonial-track {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 20px;
  scrollbar-width: none;
}
.testimonial-card {
  flex: 0 0 774px; /* 350px mobile */
  scroll-snap-align: start;
  border-radius: 20px;
  background: white;
  padding: 0 40px 0 0;
}
```

### 10.7 Replicating the Program Cards Color System

The 4 program cards cycle through:
1. `rgb(215, 253, 207)` — light green (age 1–2)
2. `rgb(235, 225, 253)` — light lavender (age 2–3)
3. `rgb(254, 238, 205)` — light peach (age 3–4)
4. Fourth card color — not measured (likely repeats or uses a fourth color)

```tsx
const PROGRAM_COLORS = [
  'rgb(215, 253, 207)',  // green
  'rgb(235, 225, 253)',  // lavender
  'rgb(254, 238, 205)',  // peach
];
const AGE_BADGE_COLORS = [
  'rgb(9, 216, 154)',    // green (1–2 yrs)
  'rgb(82, 0, 128)',     // purple (2–3 yrs)
  'rgb(252, 181, 32)',   // gold (3–4 yrs)
];
```

### 10.8 Replicating the Presentation Section (Parallax Banner)

The `500px top` padding is Framer's way of creating a parallax "sticky" scroll effect. In React:

```css
.presentation-section {
  position: relative;
  height: 793px;
  padding: 500px 30px 120px;
  display: flex;
  align-items: flex-end;
}
.presentation-bg {
  position: absolute;
  inset: 0;
  background-attachment: fixed; /* CSS parallax */
  background-size: cover;
  background-position: center;
}
.presentation-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
}
```

For true Framer-quality parallax, use Framer Motion `useScroll` + `useTransform`:
```tsx
import { useScroll, useTransform, motion } from 'framer-motion';

function PresentationSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  return (
    <section style={{ position: 'relative', height: '793px', overflow: 'hidden' }}>
      <motion.div
        style={{ y, position: 'absolute', inset: '-30% 0', backgroundImage: 'url(...)' }}
      />
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* content */}
      </div>
    </section>
  );
}
```

### 10.9 Replicating the Feature Section Tab Layout

The Feature Section uses a two-column layout with staggered card offsets:
- Left column (`Card Wrapper 01`): `padding: 0 0 100px` — pushed up
- Right column (`Card Wrapper 02`): `padding: 100px 0 0` — pushed down

This creates an alternating "brick wall" visual:
```css
.feature-cards {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 620px;
}
.feature-card-col-left {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 100px;
  flex: 1;
}
.feature-card-col-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 100px;
  flex: 1;
}
.feature-card {
  border-radius: 20px;
  background: rgb(252, 250, 237);
  padding: 30px;
}
```

### 10.10 Non-Obvious CSS Tricks Used by Framer

1. **Absolute positioned header over hero:** The header has `position: absolute` (not `fixed`), so it only overlays the hero, not the whole page. A sticky/fixed header would require JavaScript scroll detection.

2. **Decorative SVG ellipses as underlines:** Section headings have a hand-drawn SVG curve positioned absolutely below the last line of text, using `transform: matrix(1,0,0,1,0,-48)` to nudge it vertically. This is not a CSS underline — it's an SVG element.

3. **Button icon dual-layer circles:** The "Enroll now" button contains two overlapping circular `DIV` elements (35×35) with different background colors (gold and purple), creating a layered circle effect. The inner icon is a 20×20 SVG on top.

4. **Full-width sections with max-width containers:** Every section is `width: 1440px` (or 100%) with `overflow: hidden`, while the inner container has `max-width: 1300px` centered via `margin: 0 auto` (or via Framer's centering). This gives full-bleed backgrounds with contained content.

5. **Vector SVG background decorations:** Sections like Benefit, Feature, and Blog have a `Vector` SVG element sized `2464×1693` (larger than the viewport), positioned absolutely with `z-index: 0`. This is a decorative background pattern.

6. **The `transition: all` anti-pattern:** Every element has `transition: all` from Framer's defaults. In production React, replace this with specific transitions (`transition: opacity 0.3s ease, transform 0.3s ease`) to avoid unintended animation of layout properties.

7. **Stagger via padding offsets:** The alternating card layout in Feature Section uses padding (`100px` top/bottom) on flex column containers rather than CSS Grid with `grid-row` placement. This avoids JavaScript and keeps it pure CSS.

8. **Program card height = 0:** Several program card elements show `height: 0` in measurements — these cards are off-screen (in a tab/filtered view) and have been collapsed by Framer's variant system. The actual rendered height comes from their content when the tab is active.
