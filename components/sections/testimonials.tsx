import { Container } from "@/components/primitives/container";
import { SectionLabel } from "@/components/primitives/section-label";

const QUOTES = [
  {
    quote:
      "In one click, we just paid out 62 creators, 4 agencies, and 12 talent managers. That back and forth of invoices, due dates, W9s are eliminated from our comms.",
    name: "DYLAN HUEY",
    role: "CEO - REACH MANAGEMENT",
    initials: "DH",
  },
  {
    quote: "We drop in our contract and everything is handled from invoice to payout.",
    name: "WILLIAM LEE",
    role: "CEO - STARLINE MANAGEMENT",
    initials: "WL",
  },
];

/**
 * Testimonials — two columns of evidence.
 *
 * Massive red quote glyph anchors each cell. Quote in regular weight,
 * author in uppercase bold. Hover lifts the cell -2px and changes the
 * top border to red — subtle, mechanical, instant.
 */
export function Testimonials() {
  return (
    <section
      id="evidence"
      className="border-b-[3px] border-swiss-ink bg-swiss-paper swiss-layer"
    >
      <Container className="py-20 md:py-28 lg:py-32">
        <div className="border-b-[3px] border-swiss-ink pb-12">
          <SectionLabel number="03">Reviews</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-black uppercase text-display-sm">
            Testimonials from Riffers.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {QUOTES.map((q, i) => (
            <article
              key={q.name}
              className={[
                "group relative flex flex-col justify-between gap-10 border-swiss-ink bg-swiss-paper p-8 md:p-10",
                "transition-transform duration-200 ease-out hover:-translate-y-0.5",
                // Border weave
                "border-b-[3px]",
                i > 0 ? "md:border-l-[3px]" : "",
                "md:border-b-0",
              ].join(" ")}
            >
              <div>
                <div
                  aria-hidden="true"
                  className="font-black leading-none text-swiss-ink text-7xl md:text-8xl"
                >
                  &ldquo;
                </div>
                <p className="mt-4 text-base leading-relaxed md:text-lg">
                  {q.quote}
                </p>
              </div>

              <div className="flex items-center gap-4 border-t-[3px] border-swiss-ink pt-5 transition-colors duration-150 group-hover:border-swiss-ink">
                <span
                  aria-hidden="true"
                  className="grid h-12 w-12 place-items-center border-[3px] border-swiss-ink bg-swiss-ink text-xs font-black tracking-wider text-swiss-paper"
                >
                  {q.initials}
                </span>
                <div>
                  <div className="text-sm font-black uppercase tracking-wide">
                    {q.name}
                  </div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-swiss-ink/60">
                    {q.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
