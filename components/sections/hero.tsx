import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { SectionLabel } from "@/components/primitives/section-label";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/constants";

/**
 * Hero — the page's opening statement.
 *
 * Asymmetric 7/5 grid:
 *   - Left: massive headline. First two lines are OUTLINED type
 *           (Ghost Border applied to typography), third line is solid ink.
 *           The fill/stroke distinction creates hierarchy without color.
 *   - Right: a Bauhaus geometric composition with a gradient-bordered
 *           square as the signature visual moment. The data card inside
 *           is the product.
 *
 * Gradient appears in TWO places only:
 *   1. The Bauhaus square border (Ghost Border)
 *   2. The primary CTA button border (prismatic variant)
 */
export function Hero() {
  return (
    <section id="top" className="relative border-b-[3px] border-swiss-ink swiss-layer">
      <Container className="py-16 md:py-24 lg:py-32">
        {/*
          Three independent grid items so mobile stacks as:
            1. Headline + blurb  (DOM order 1)
            2. Video             (DOM order 2)
            3. Buttons           (DOM order 3)

          On lg the video uses row-span-2 to fill the full right column,
          while the text block and buttons sit in rows 1 and 2 on the left.
        */}
        <div className="grid grid-cols-1 gap-y-10 xl:grid-cols-12 xl:gap-x-12 xl:gap-y-8">

          {/* 1 — Headline + blurb ----------------------------------------- */}
          <div className="xl:col-start-1 xl:col-span-5 xl:row-start-1">
            <SectionLabel number="00">Welcome to Riff</SectionLabel>

            {/*
              Headline — three display lines.
              Lines 1–2 ("COLLAB. / CREATE.") are SVG outlined type.

              Why SVG instead of CSS -webkit-text-stroke + color:transparent:
              CSS renders each glyph stroke as an independent open path, so
              adjacent letters' strokes visually intersect (visible on A, R, L).
              The SVG approach sets fill="swiss-paper" + paint-order:stroke fill,
              making each glyph's opaque fill cover any stroke that bleeds from
              a neighbouring glyph — producing a single, unified outline.

              No viewBox — SVG user units map 1:1 to CSS px, so font-size
              inherits directly from the shared clamp() on the <h1>. y positions
              are em-based to track the shared line-height (0.9). letterSpacing
              is expressed in em (−0.02em ≡ −2 user units at the prior fontSize
              100) so it scales with the inherited font-size rather than being
              a fixed pixel offset.
            */}
            <h1
              aria-label="Collab. Create. Get paid."
              className="mt-8 font-black uppercase text-display-md"
              style={{ lineHeight: 0.9 }}
            >
              <svg
                aria-hidden="true"
                width="100%"
                height="1.8em"
                overflow="visible"
                className="block"
              >
                <text
                  x="0"
                  y="0.9em"
                  fontWeight="900"
                  fontFamily="var(--font-inter), Inter, Helvetica, sans-serif"
                  letterSpacing="-0.02em"
                  fill="var(--swiss-paper)"
                  stroke="var(--swiss-ink)"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  style={{ paintOrder: "stroke fill" }}
                >
                  COLLAB.
                </text>
                <text
                  x="0"
                  y="1.8em"
                  fontWeight="900"
                  fontFamily="var(--font-inter), Inter, Helvetica, sans-serif"
                  letterSpacing="-0.02em"
                  fill="var(--swiss-paper)"
                  stroke="var(--swiss-ink)"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  style={{ paintOrder: "stroke fill" }}
                >
                  CREATE.
                </text>
              </svg>
              <span className="whitespace-nowrap">Get paid.</span>
            </h1>

            <p className="mt-10 text-sm leading-relaxed md:text-base">
              {
                "Riff is the home for brands, influencer agencies and creators. We house and automate all the boring stuff from contracts to taxes, and everything in the middle from split payments to tracking usage and performance metrics in one place. Whether you're managing a roster or running solo, Riff makes sure every collaborator knows who gets paid, how much, and when."
              }
            </p>
          </div>

          {/* 2 — Product demo video ---------------------------------------- */}
          <div className="xl:col-start-6 xl:col-span-7 xl:row-start-1 xl:row-span-2 flex items-start xl:pt-[3rem]">
            <div className="relative w-full border-[3px] border-swiss-ink">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto block"
              >
                <source src="/videos/hero-demo.webm" type="video/webm" />
                <source src="/videos/hero-demo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* 3 — CTA buttons ----------------------------------------------- */}
          <div className="xl:col-start-1 xl:col-span-5 xl:row-start-2 flex flex-wrap items-center gap-3">
            <Button asChild variant="prismatic" size="lg">
              <Link href={APP_URL}>
                Start riffing
                <span aria-hidden="true">→</span>
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#system">Explore features</Link>
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}
