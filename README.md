# Riff — Web (v2)

Marketing site rebuild in the **Swiss International Style**.
Stack: **Next.js 14** (App Router) · **Tailwind CSS** · **shadcn/ui** patterns · **TypeScript**.

## For editors (you or Cursor) — read these first

- **`.cursorrules`** — Hard design rules. Cursor reads this automatically on
  every prompt. Anyone editing the site must follow these.
- **`docs/IA.md`** — Information architecture: what each section does, the
  intended growth into multi-page, content hierarchy, voice rules, decisions
  not to relitigate.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Architecture

```
app/
  layout.tsx      Inter font + global metadata
  page.tsx        Composes the home page from sections
  globals.css     Swiss tokens + texture utilities
components/
  ui/             shadcn-style primitives (Button) — overridden for Swiss
  primitives/     Layout primitives (Container, SectionLabel, Rule)
  sections/       Page sections (Nav, Hero, Stats, Method, Features, Splits,
                  Testimonials, Pricing, CTA, Footer) — one file each
lib/
  utils.ts        cn() helper for merging Tailwind classes
public/           Logos
```

### Design tokens

Swiss palette + scales live in two places that mirror each other:

- **`app/globals.css`** — CSS custom properties (`--swiss-paper`, `--swiss-ink`,
  `--swiss-muted`, `--swiss-accent`, `--swiss-border`).
- **`tailwind.config.ts`** — exposes the same colors as Tailwind utilities
  (`bg-swiss-ink`, `text-swiss-accent`, etc.) plus the display-size font scale
  (`text-display-sm/md/lg`).

Edit one, mirror the other. This is the single source of truth.

### Texture utilities

Defined as Tailwind utilities in `globals.css`. Use them on muted/paper
surfaces — never on black or red:

- `.swiss-grid-pattern` — 24×24 grid lines
- `.swiss-dots` — 16×16 dot matrix
- `.swiss-diagonal` — 45° stripes
- `.swiss-noise` — local fractal noise overlay

### The Button component

`components/ui/button.tsx` follows the shadcn pattern (`cva` + `asChild`),
so adding more shadcn primitives later (Input, Card, Dialog) will Just Work.

Variants: `primary` (solid black, hover→red), `secondary` (white w/ black
border, hover→inverted), `accent` (solid red), `ghost` (transparent).

### Adding a new section

1. Create `components/sections/your-section.tsx`.
2. Wrap content in `<Container>`.
3. Anchor with `<SectionLabel number="07">Your Label</SectionLabel>` and a
   massive uppercase H2 (`text-display-sm`).
4. Add it to `app/page.tsx`.

Every section ends with `border-b-[3px] border-swiss-ink` to keep the
horizontal grid visible across the page.

## Notes

- **No rounded corners anywhere.** That's load-bearing — it's the whole point.
- **Color inversion on hover**, not opacity fades. Swiss interactions are bold
  and instant (`duration-150 ease-linear`).
- **Borders are never thinner than 2px.** Usually 3px. This is the price of
  visible structure.
