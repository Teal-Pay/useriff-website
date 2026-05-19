import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { SectionLabel } from "@/components/primitives/section-label";
import { Button } from "@/components/ui/button";
import { APP_URL, DEMO_URL } from "@/lib/constants";

/**
 * Hero — the page's opening statement.
 *
 * Definitive layouts:
 *   - Small  (< md)  : single column. SectionLabel → headline → blurb → dashboard → buttons.
 *   - Medium (md..)  : 2-col 2fr/3fr. Left = headline + blurb + buttons. Right = dashboard.
 *   - Large  (lg..)  : same 2-col, larger headline, wider gutters.
 *
 * ALIGNMENT RULE (md+):
 *   The dashboard image's top edge MUST align with the headline's top edge.
 *   This is enforced structurally by the grid, not by hand-tuned margins:
 *     - Row 1, col 1 : SectionLabel
 *     - Row 2, col 1 : headline + blurb + (md+) buttons
 *     - Row 2, col 2 : dashboard image (items-start)
 *   Both row-2 cells share the same row-top, so the headline's H1 top edge
 *   and the image frame's top edge are co-located by construction. Any future
 *   restructure must preserve this — do not introduce top margins on either
 *   the H1 or the image wrapper.
 *
 * Headline is FIVE stacked words. Only the first (WHERE) and last (ALIGN.)
 * use the Ghost Border outlined treatment — bookending the solid middle
 * (BRANDS, / AGENCIES, / CREATORS). Rendered as one SVG so the stroke
 * paint-order trick avoids the adjacent-glyph stroke intersection bug
 * that -webkit-text-stroke exhibits at display sizes.
 *
 * Gradient appears in TWO places only:
 *   1. The dashboard frame border (swiss-spectrum on hover)
 *   2. The primary CTA button border (prismatic variant)
 */
const HEADLINE_LINES: { text: string; outline: boolean }[] = [
  { text: "WHERE", outline: true },
  { text: "BRANDS,", outline: false },
  { text: "AGENCIES,", outline: false },
  { text: "CREATORS", outline: false },
  { text: "ALIGN.", outline: true },
];

export function Hero() {
  return (
    <section id="top" className="relative border-b-[3px] border-swiss-ink swiss-layer">
      <Container className="py-14 md:py-20 lg:py-28">
        {/*
          Grid (md+):
            Row 1 | SectionLabel        |  (empty)
            Row 2 | headline+blurb+CTAs |  dashboard image
          The image's top edge aligns with the headline's top edge because
          both sit in row 2 with items-start. Do not add top margin to either.
        */}
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-[2fr_3fr] md:gap-x-8 md:gap-y-8 lg:gap-x-12 xl:gap-x-16">

          {/* Row 1 col 1 — SectionLabel ---------------------------------- */}
          <div className="md:col-start-1 md:row-start-1">
            <SectionLabel number="00">Welcome to Riff</SectionLabel>
          </div>

          {/* Row 2 col 1 — headline + blurb + CTAs ------------------------ */}
          <div className="md:col-start-1 md:row-start-2">
            {/*
              Headline — five display lines, each on its own row.
              Lines 1 & 5 are OUTLINED via paint-order:stroke fill so adjacent
              glyph strokes never intersect. Middle three are solid swiss-ink.
              NO top margin on this H1 — the grid row gap above provides the
              spacing from SectionLabel, and the H1's top edge is the anchor
              the image's top edge aligns against.
            */}
            <h1
              aria-label="Where brands, agencies, creators align."
              className="font-black uppercase"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 5.25rem)",
                lineHeight: 0.9,
              }}
            >
              <svg
                aria-hidden="true"
                width="100%"
                height="5em"
                overflow="visible"
                className="block"
              >
                {HEADLINE_LINES.map((line, i) => {
                  const y = `${0.9 + i * 0.99}em`;
                  const isOutline = line.outline;
                  return (
                    <text
                      key={line.text}
                      x="0"
                      y={y}
                      fontSize="1em"
                      fontWeight="900"
                      fontFamily="var(--font-inter), Inter, Helvetica, sans-serif"
                      letterSpacing="-0.04em"
                      fill={isOutline ? "var(--swiss-paper)" : "var(--swiss-ink)"}
                      stroke={isOutline ? "var(--swiss-ink)" : "none"}
                      strokeWidth={isOutline ? 3 : 0}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      style={isOutline ? { paintOrder: "stroke fill" } : undefined}
                    >
                      {line.text}
                    </text>
                  );
                })}
              </svg>
            </h1>

            <p className="mt-8 text-sm leading-relaxed md:mt-10 md:text-base xl:text-lg 2xl:text-xl">
              {
                "Meet Riff: the ultimate operations platform for agencies, managers, and brands. We automate everything from revenue splits and global payouts to instant tax compliance, so you can focus on building talent, without the awkward follow-up emails."
              }
            </p>

            {/* CTAs — visible md+ only; hug the blurb inside the text column. */}
            <div className="mt-8 hidden flex-wrap items-center gap-3 md:flex">
              <Button asChild variant="prismatic" size="lg">
                <Link href={APP_URL} target="_blank" rel="noopener noreferrer">
                  Start riffing
                  <span aria-hidden="true">→</span>
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                  Book a demo
                </Link>
              </Button>
            </div>
          </div>

          {/* Row 2 col 2 — dashboard image ------------------------------- */}
          {/* items-start anchors the image to the row top, which is also
              the headline's top — fulfilling the alignment rule above. */}
          <div className="md:col-start-2 md:row-start-2 flex items-start overflow-visible">
            <div className="hero-image-frame [&:not(:hover)]:!bg-transparent">
              <Image
                src="/videos/Dashboard.webp"
                alt="Riff dashboard"
                width={1920}
                height={1378}
                sizes="(min-width: 768px) 60vw, 100vw"
                className="block h-auto w-full"
                priority
              />
            </div>
          </div>

          {/* Mobile-only CTAs — appear after the image in DOM order to
              preserve the small-screen rhythm: label → headline → blurb →
              image → buttons. */}
          <div className="flex flex-wrap items-center gap-3 md:hidden">
            <Button asChild variant="prismatic" size="lg">
              <Link href={APP_URL} target="_blank" rel="noopener noreferrer">
                Start riffing
                <span aria-hidden="true">→</span>
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                Book a demo
              </Link>
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}
