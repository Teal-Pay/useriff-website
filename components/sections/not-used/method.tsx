import { Container } from "@/components/primitives/container";
import { SectionLabel } from "@/components/primitives/section-label";

const STEPS = [
  {
    n: "01",
    title: "Build the deal",
    body:
      "Add collaborators, pick a template, and set split percentages. Roles, rates, and terms are saved for every future project.",
  },
  {
    n: "02",
    title: "Send the riff",
    body:
      "One link to the client. Card, ACH, or wallet — they pay how they want. No follow-up required.",
  },
  {
    n: "03",
    title: "Funds clear automatically",
    body:
      "Splits land in every collaborator's account. Taxes are tagged. Receipts are mailed. April never sneaks up on you again.",
  },
];

/**
 * Method — the "how it works" section, but earnestly Swiss.
 *
 * Three columns separated by visible black rules. Each step is anchored by
 * a giant number — the step itself is the visual hierarchy, not the title.
 *
 * Hover inverts the cell to red. This is the bold Swiss interaction:
 * full color flip, no fades, instant 150ms transition.
 */
export function Method() {
  return (
    <section
      id="method"
      className="border-b-[3px] border-swiss-ink bg-swiss-paper swiss-layer"
    >
      <Container className="py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Section header — left rail (4 cols on lg) */}
          <div className="lg:col-span-4">
            <SectionLabel number="01">Method</SectionLabel>
            <h2 className="mt-6 font-black uppercase text-display-sm">
              Three steps. Zero portals.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-swiss-ink/80">
              From agreement to deposit in days. Riff automates every financial step
              so you stay focused on the work.
            </p>
          </div>

          {/* Steps — right rail (8 cols on lg) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 border-[3px] border-swiss-ink md:grid-cols-3">
              {STEPS.map((step, i) => (
                <article
                  key={step.n}
                  className={[
                    "group relative flex flex-col gap-6 bg-swiss-paper p-8 md:p-10",
                    "transition-colors duration-150 ease-linear hover:bg-swiss-ink",
                    i > 0 ? "border-t-[3px] border-swiss-ink md:border-l-[3px] md:border-t-0" : "",
                  ].join(" ")}
                >
                  <div className="text-6xl font-black tabular-nums text-swiss-ink transition-colors duration-150 group-hover:text-swiss-paper md:text-7xl">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-wide transition-colors duration-150 group-hover:text-swiss-paper">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-swiss-ink/80 transition-colors duration-150 group-hover:text-swiss-paper">
                      {step.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
