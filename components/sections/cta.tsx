import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { Button } from "@/components/ui/button";
import { APP_URL, DEMO_URL } from "@/lib/constants";

/**
 * CTA — full-bleed dark band, the closing punctuation.
 *
 * Massive headline left, two CTAs right. Diagonal-stripe pattern overlay
 * adds directional energy without breaking flatness.
 *
 * Primary action uses the prismatic (gradient-bordered) button — the
 * gradient pops sharply against the dark background, which is where it
 * has the strongest contrast.
 */
export function CTA() {
  return (
    <section
      className="relative border-b-[3px] border-swiss-ink bg-swiss-ink text-swiss-paper swiss-layer"
      aria-label="Sign up or request a demo"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
        }}
        aria-hidden="true"
      />

      <Container className="relative py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-12 xl:items-end xl:gap-16">
          <div className="xl:col-span-8">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-swiss-paper/70">
              05 — Let&apos;s Riff
            </div>
            <h2 className="mt-6 font-black uppercase text-display-md" style={{ fontSize: "clamp(2rem, 10vw, 7rem)" }}>
              Make your deals
              <br />
              on better
              <br />
              infrastructure.
            </h2>
          </div>

          <div className="flex flex-col items-start gap-6 xl:col-span-4 xl:items-end">
            <Button
              asChild
              variant="prismatic"
              size="lg"
              className="w-full xl:w-auto"
            >
              <Link href={APP_URL}>
                Try Riff now
                <span aria-hidden="true">→</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="w-full xl:w-auto"
            >
              <Link href={DEMO_URL}>Request a demo</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
