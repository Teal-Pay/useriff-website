import { Plus } from "lucide-react";
import { Container } from "@/components/primitives/container";

type FaqItem = {
  q: string;
  a: string;
};

/**
 * Placeholder copy — replace with real Q&A when ready.
 */
const FAQ_ITEMS: FaqItem[] = [
  {
    q: "How does Riff handle revenue splits between creators, managers, and agencies?",
    a: "Tag every contributor once with their role and percentage. The moment a brand payment clears, Riff distributes funds to each party automatically — no spreadsheets, no manual reconciliation.",
  },
  {
    q: "What payment methods do brands have when paying an invoice?",
    a: "Brands can pay via ACH, credit card, or stablecoin. Each method has its own settlement window, and the choice is shown to the brand on the invoice link.",
  },
  {
    q: "Does Riff handle W-9 / 1099 collection and tax compliance?",
    a: "Yes. W-9 and W-8 forms are collected at onboarding, and 1099-NEC documents are generated automatically once payee thresholds are reached. Regulatory risk stays off your plate.",
  },
  {
    q: "Can Riff send international payouts?",
    a: "Yes. Riff supports payouts to 73 countries with local rails, real-time FX, and multi-currency balances — cross-border collabs settle as cleanly as domestic ones.",
  },
];

/**
 * FAQ — inquiries-style accordion.
 *
 * Inspired by the "Inquiries" layout from designprompts.dev/swiss-minimalist:
 * a left header column with kicker + display heading, a right column of
 * numbered Q&A items separated by thick ink rules. Native <details>/<summary>
 * gives accessible expand/collapse without client-side JS.
 *
 * Per system rules: zero rounded corners, 3px ink rules, uppercase tracked
 * kicker, prismatic gradient never appears on type.
 */
export function FAQ() {
  return (
    <section
      id="faq"
      className="border-b-[3px] border-swiss-ink bg-swiss-paper swiss-layer"
    >
      <Container className="py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ── LEFT — sticky header ─────────────────────────────────────── */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">
                <span className="text-swiss-ink">FAQ</span>
                <span
                  className="h-px w-6 bg-swiss-ink"
                  aria-hidden="true"
                />
                <span>Inquiries</span>
              </div>

              <h2 className="mt-6 font-black uppercase text-display-sm">
                Questions,<br />Answered.
              </h2>

              <p className="mt-6 max-w-md text-base leading-relaxed text-swiss-ink/80 md:text-lg">
                The short version of the things we get asked most. Need
                something more specific? Reach out and we&apos;ll get back
                to you the same day.
              </p>
            </div>
          </div>

          {/* ── RIGHT — accordion list ───────────────────────────────────── */}
          <ul className="border-t-[3px] border-swiss-ink lg:col-span-7">
            {FAQ_ITEMS.map((item, i) => {
              const n = String(i + 1).padStart(2, "0");
              return (
                <li
                  key={item.q}
                  className="border-b-[3px] border-swiss-ink"
                >
                  <details className="group">
                    <summary
                      className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 transition-colors duration-150 ease-linear hover:bg-swiss-muted md:py-8 [&::-webkit-details-marker]:hidden"
                    >
                      <div className="flex items-start gap-6 md:gap-8">
                        <span
                          aria-hidden="true"
                          className="font-black tabular-nums text-swiss-ink/60 text-sm leading-tight md:text-base"
                        >
                          .{n}
                        </span>
                        <h3 className="text-base font-black uppercase tracking-wide text-swiss-ink md:text-lg">
                          {item.q}
                        </h3>
                      </div>
                      <Plus
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-swiss-ink transition-transform duration-200 ease-out group-open:rotate-45"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                    </summary>
                    <div className="pb-8 pl-[calc(0.875rem+1.5rem)] pr-12 md:pl-[calc(1rem+2rem)]">
                      <p className="text-sm leading-relaxed text-swiss-ink/80 md:text-base">
                        {item.a}
                      </p>
                    </div>
                  </details>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
