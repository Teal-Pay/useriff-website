# Information Architecture — Riff Web

This document captures **what the site is, what each section does, and where
it's headed.** It exists so that anyone (or any AI) editing the site has the
full strategic context, not just the file structure.

If you're making a code change, also read `.cursorrules` for hard design rules.

---

## 1. Brand & product context

**Riff** is a payments tool for creator collaborators — handles invoicing,
revenue splits, payouts, and tax docs for people who make creative work
together (podcast collectives, film crews, illustrator-writer pairs, music
collaborations, etc.).

**Audience:** indie creators and small studios, ages ~22–40. They use Notion,
Substack, Squarespace. They are visually literate. They are tired of
spreadsheets and Venmo math at the end of every project.

**Brand positioning:** rigor in service of creative chaos. The product is
mathematically precise so the work doesn't have to be. The visual language
(Swiss style with Ghost Border gradient) reflects this — strict structure
containing warm, human content, with a single chromatic signature appearing
only on signature elements.

**Voice:** hybrid.
- **Structural copy** is sober, uppercase, mathematical. ("01 — METHOD")
- **Body copy and CTAs** are warm, conversational, slightly playful.
  ("Splits without spreadsheets", "April never sneaks up on you again")

---

## 2. Visual system summary

The site uses **Swiss International Style (Editorial register)** with a
**Ghost Border** treatment of the brand spectrum gradient.

- **Base palette:** warm off-white (`#F5F6F6`) and warm dark gray (`#313131`).
  Pure black/white was rejected — too brutalist for a payments tool aimed at
  creators.
- **Brand spectrum:** `linear-gradient(135deg, #83EFC5 → #FFB7F8 → #C2D3FF)`.
  Mint → pink → soft blue.
- **Application of the spectrum:** **Ghost Border only.** The gradient
  appears as a 3px stroke around four kinds of elements per page. Never as
  a fill. Never on text.
- **Typography:** Inter, weights up to 900. Display headlines use the custom
  `text-display-sm/md/lg` scale. Outlined display type (`.swiss-text-outline`)
  is reserved for the hero — currently the first two lines of "Collab. Create.
  Get paid." are outlined paper-fill, the third is solid ink.

### Where the gradient appears (sanctioned uses)

1. **Primary CTA buttons** — the `prismatic` Button variant. Repeats once
   per major section: hero, splits, pricing (featured tier), CTA. Most
   visible appearance because CTAs repeat through the page.
2. **Hero Bauhaus square** — the upper-right square in the hero geometric
   composition. Gradient border, paper fill. The page's signature visual.
3. **Featured pricing tier** — the Sketch tier wraps in a gradient border
   instead of the standard ink border. Border IS the badge.
4. **Form input focus rings** — when Input components are added.

Anywhere else, gradient = system violation.

---

## 3. Current site IA — single-page scroll

The site is one long scroll on `app/page.tsx`. Sections appear in this exact
order. Every section is a separate component file in `components/sections/`.

| #  | Section          | File                  | ID anchor    | Purpose                                                                 |
|----|------------------|-----------------------|--------------|-------------------------------------------------------------------------|
| 0  | Nav              | `nav.tsx`             | (sticky)     | Brand mark + section anchors + Sign up / Log in                         |
| 1  | Hero             | `hero.tsx`            | `#top`       | The pitch. Outlined headline, prismatic CTA, gradient Bauhaus square.   |
| 2  | Stats            | `stats.tsx`           | —            | Proof bar — 4 numbers (creators, $ paid, countries, rating)             |
| 3  | Method           | `method.tsx`          | `#method`    | "How it works" — 3 numbered steps from handshake → payout               |
| 4  | Features         | `features.tsx`        | `#system`    | The system inventory — 6 product capabilities in a 3×2 grid             |
| 5  | Splits           | `splits.tsx`          | `#applied`   | Applied product example — auto-splits with grayscale-density data viz   |
| 6  | Testimonials     | `testimonials.tsx`    | `#evidence`  | Social proof — 3 quotes with author + role                              |
| 7  | Pricing          | `pricing.tsx`         | `#pricing`   | 3 tiers (Doodle / Sketch / Studio). Sketch has gradient border + larger type. |
| 8  | CTA              | `cta.tsx`             | —            | Closing punctuation — full-bleed dark band, prismatic primary           |
| 9  | Footer           | `footer.tsx`          | —            | Brand recap, 3 link columns (Product/Company/Resources), colophon       |

### Navigation anchors

The nav links use these IDs (each section has the matching `id` attribute):

- **Method** → `#method`
- **System** → `#system` (Features)
- **Applied** → `#applied` (Splits)
- **Evidence** → `#evidence` (Testimonials)
- **Pricing** → `#pricing`

The nav uses Swiss-style microcopy (single nouns) instead of standard SaaS
labels ("How it works", "Product", "Customers"). This is a deliberate
voice decision — keep it.

---

## 4. Section-by-section intent

### Hero
- **Job:** in 3 seconds, a visitor must understand (a) what Riff is, (b) who
  it's for, and (c) that the brand is rigorous.
- **Headline pattern:** three short imperative verbs in three lines.
  Lines 1–2 are outlined display type (paper fill, ink stroke); line 3 is
  solid ink. The fill/stroke hierarchy creates emphasis without color.
- **Right column:** a Bauhaus geometric composition (gradient-bordered square
  + black-bordered circle + horizontal line) with an embedded "Riff Sheet"
  data card showing real-looking product output. The gradient square is the
  brand's most visible chromatic moment. The data card must always show
  *real* data structure — never lorem ipsum.
- **Primary CTA:** prismatic variant ("Start riffing — free").

### Stats
- **Job:** quick credibility hit before scrolling continues.
- 4 numbers, separated by visible 3px ink rules.
- Numbers are tabular (`tabular-nums`) so they always align cleanly.
- On mobile collapses to 2×2; rules become both vertical and horizontal.

### Method (How it works)
- **Job:** show the 3-step happy path so a visitor can mentally rehearse
  using the product before signing up.
- Left rail (4/12): section header + lead.
- Right rail (8/12): 3 step cards in a single bordered grid. Borders are
  shared (cards don't each have their own — the grid IS the design).
- Hover on a step inverts the entire cell to ink.

### Features (System)
- **Job:** prove the product is comprehensive without overwhelming.
- 6 features, 3 columns × 2 rows. Each card: number prefix, lucide icon
  in a bordered square, uppercase title, body.
- Hover inverts the card to ink and rotates the corner arrow from -45° → 0°.
- Number prefixes (.01, .02, etc.) are not just decoration — they let
  Cursor/devs reference features unambiguously ("update feature 03").

### Splits (Applied)
- **Job:** show the product's signature mechanic in action — the auto-split.
  This is the strongest differentiation moment on the page.
- Asymmetric 5/7 split: copy left, data viz right.
- Bars use **grayscale density hierarchy** (`bg-swiss-ink`, `bg-swiss-ink/60`,
  `bg-swiss-ink/30`) to differentiate without color. The largest split (40%)
  gets the densest fill; equal smaller splits step down in opacity.
- The dot-matrix pattern (`swiss-dots`) lives behind the viz to give it a
  print-press feel.

### Testimonials (Evidence)
- **Job:** validate via real-sounding quotes.
- 3 quotes only — more dilutes the impact.
- Massive ink opening quote glyph anchors each cell.
- Hover lifts -2px and changes the top border (subtle motion only).

### Pricing
- **Job:** convert the visitor to a free signup.
- 3 tiers with no badges, no stickers, no scale transforms.
- Featured tier (Sketch) signals "recommended" through TWO non-color cues:
  1. **Ghost Border** — gradient border instead of ink border
  2. **Typographic hierarchy** — name and price both step up one size
- Featured CTA uses `prismatic` variant; other CTAs use `primary`.

### CTA
- **Job:** final ask. Dark band so it visually punctuates the page end.
- Prismatic primary ("Make a free account") — the gradient pops sharply on
  the dark background. Ghost button for existing users.

### Footer
- Dark background, paper text — full inversion that mirrors the nav.
- Wordmark uses the dedicated white SVG (`riff-wordmark-white.svg`).
- 3 link columns. Bottom colophon with copyright + privacy/terms/security/email.
- Hover behavior: underline on links (no color change available without red).

---

## 5. Intended future IA (not yet built)

The current single-page scroll is the launch state. As Riff grows, the IA
should evolve into a multi-page site. Approximate plan:

### Phase 2 — Multi-page expansion
| Route             | Purpose                                                                |
|-------------------|------------------------------------------------------------------------|
| `/`               | Stays as the marketing home, leaner — Hero, Stats, Features summary, CTA |
| `/method`         | Full breakdown of how Riff works, with screenshots/animations          |
| `/pricing`        | Standalone pricing page with tier comparison table + FAQ               |
| `/customers`      | Case studies, longer testimonials, logo wall                            |
| `/changelog`      | Product updates (good for SEO + signaling momentum)                    |
| `/manifesto`      | The brand essay — why Riff exists, what it believes about creator pay  |
| `/help`           | Help center landing → links into a docs subdomain or Notion            |

### Phase 3 — Logged-in product surface
The marketing site stays at the root domain. Product moves to
`app.useriff.app` (separate app). Marketing site remains for SEO and
top-of-funnel.

### Components likely needed for Phase 2
- `Input` (shadcn pattern, Swiss styling, gradient focus border) — for
  newsletter signup, contact form
- `Card` variants — for changelog entries, customer story cards
- `Tabs` — for tier comparison table
- `Accordion` — for the FAQ
- `Header` (page-specific) — replaces Hero for non-home routes

When building any of these, follow the Button pattern in
`components/ui/button.tsx` (cva + asChild + variant + size).

---

## 6. Content hierarchy rules

When adding new content anywhere on the site, follow this hierarchy of
visual weight:

1. **Hero headline** (`text-display-lg`, font-black, uppercase) — one per page.
   Optional outlined treatment via `.swiss-text-outline` for a subset of words.
2. **Section headlines** (`text-display-sm`, font-black, uppercase) — one per section
3. **Section labels** (`<SectionLabel>`, uppercase, tracking-[0.2em])
4. **Subsection titles** (`text-lg` or `text-xl`, font-black, uppercase)
5. **Body copy** (`text-base` or `text-lg`, regular weight, mixed case)
6. **Microcopy** (`text-xs`, font-bold, uppercase, tracking-widest) — labels, captions, footnotes

Numbers are always `tabular-nums`. Currencies always show two decimals
(`$5,400.00`, never `$5,400`). Percentages have no decimal unless precision
matters (`40%`, not `40.0%`).

---

## 7. Decisions worth not relitigating

These were intentional choices. Don't change them without explicit ask:

- **Single page first, multi-page later.** Easier to iterate, easier to
  measure conversion in one funnel.
- **Hybrid voice.** Pure Swiss copy ("Collaborate. Create. Receive payment.")
  was rejected — too cold for the audience.
- **No red.** Red was the original signal color; replaced by the brand
  spectrum gradient. Don't reintroduce.
- **Ghost Border, not gradient fills.** Gradient as fill was rejected as
  too loud and trendy. The discipline is the differentiation.
- **No logo wall.** Riff's audience is indie creators, not enterprise buyers.
  Logo walls signal the wrong tier.
- **No animation library.** All transitions are CSS. No framer-motion, no
  GSAP. Swiss style favors instant mechanical motion, which CSS handles fine.
- **No dark mode.** Swiss style IS the mode. The CTA and footer are already
  inverted — those are the dark moments.
- **Outlined display type only in hero.** Don't use `.swiss-text-outline`
  in section headers, body copy, or anywhere else.
