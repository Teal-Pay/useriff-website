import {
  ArrowUpRight,
  GitBranch,
  ShieldCheck,
  Globe2,
  Receipt,
  BellRing,
  Layers,
} from "lucide-react";
import { SectionLabel } from "@/components/primitives/section-label";

const FEATURES = [
  {
    n: "01",
    icon: GitBranch,
    title: "BULK PAYOUTS & PERFORMANCE SPLITS",
    body: <><em>One-Click Payouts</em> Tag every contributor and set their percentage once. The moment a payment clears, whether a deal is a flat fee, performance-based, or includes usage rights, Riff distributes the exact cuts to your managers, agencies, and creators instantly.</>,
  },
  {
    n: "02",
    icon: ShieldCheck,
    title: "TAX COMPLIANCE AT SCALE",
    body: <><em>Hands-Free Invoices, W9 &amp; W8 Collection</em> Stop chasing 60 different creators for invoices and tax forms. Riff bakes this stuff in and you sleep easy knowing your agency is 100% ready for tax season.</>,
  },
  {
    n: "03",
    icon: Globe2,
    title: "GLOBAL CREATOR PAYOUTS",
    body: <><em>Ditch the International Wire Fees</em> Scale your roster across globally without using multiple payment processors, so international campaigns settle just as fast and cleanly as domestic ones.</>,
  },
  {
    n: "04",
    icon: Receipt,
    title: "FRICTIONLESS BRAND INVOICING",
    body: <><em>Get Paid Faster by Brands</em> Stop letting Net-30 turn into Net-90. Send brands a single, professional billing link with automate reminders, with your custom payment terms.</>,
  },
  {
    n: "05",
    icon: BellRing,
    title: "SMART ACCOUNTS RECEIVABLE",
    body: <><em>Automated Invoicing Reminders</em> No one likes sending that awkward &ldquo;just checking in on this invoice&rdquo; email to a major brand. Riff handles the follow-up with a perfectly timed, professional reminder cadence that protects your client relationship while ensuring your agency gets paid on time.</>,
  },
];

/**
 * Features — pinned sidebar layout.
 *
 * Full-viewport two-column grid (no horizontal padding on the grid wrapper).
 * Both columns are equal 1fr so the dividing border lands at the exact
 * viewport midpoint.
 *
 * Left column: the outer div is a plain grid cell — it stretches to match
 * the right column's height via grid's default align-items:stretch. The
 * swiss-grid-pattern fills this full-height cell. The sticky billboard
 * lives in an inner div so it can pin at top-24 while the outer cell
 * maintains its full height (and thus the border-r spans the entire section).
 *
 * Right column: six feature rows stacked vertically, each separated by a
 * 3px border. Hover inverts the card to ink. Two-layer DOM keeps the icon
 * above the spectrum gradient fill by paint order alone — no z-index needed.
 *
 * Mobile (<lg): both columns stack vertically; sticky is inactive.
 */
export function Features() {
  return (
    <section
      id="system"
      className="border-b-[3px] border-swiss-ink bg-swiss-muted swiss-layer"
    >
      {/*
        Grid wrapper: full viewport width, no horizontal padding.
        Padding is applied inside each column so content has its own gutter.
        grid-cols-2 → equal 1fr columns → dividing border at 50% viewport.
      */}
      <div className="lg:grid lg:grid-cols-2">

        {/* ── LEFT — full-height cell containing a sticky billboard ──────── */}
        {/*
          The outer div is the grid cell. CSS grid stretches it to match the
          taller right column, so swiss-grid-pattern fills the entire left half
          and border-r-[3px] runs the full section height.

          On mobile: border-b separates this cell from the feature stack below.
          On lg+:    border-b is suppressed; border-r takes over as the divider.
        */}
        <div
          className={[
            "swiss-grid-pattern",
            "border-b-[3px] border-swiss-ink",
            "lg:border-b-0 lg:border-r-[3px]",
          ].join(" ")}
        >
          <div
            className={[
              "px-6 md:px-10 lg:px-16",
              "py-20 md:py-28 lg:py-32",
              "lg:sticky lg:top-0",
            ].join(" ")}
          >
            <SectionLabel number="01">What We Do</SectionLabel>

            <h2 className="mt-6 font-black uppercase" style={{ fontSize: "clamp(1.5rem, 4vw, 5rem)", lineHeight: 1.05 }}>
              <span className="block">STOP MANAGING</span>
              <span className="block">CAMPAIGNS OUT OF</span>
              <span className="block">A SPREADSHEET.</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-swiss-ink/80 md:text-lg">
              Tracking creator deliverables, chasing Net-60 brand invoices, and manually splitting payouts is a recipe for operational chaos. Riff automates the back office, protects your talent relationships, and keeps your agency entirely audit-proof.
            </p>
          </div>
        </div>

        {/* ── RIGHT — scrolling feature stack ────────────────────────────── */}
        <div className="bg-swiss-paper">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.n}
                className={[
                  "group relative flex flex-col gap-5",
                  "px-8 py-10 md:px-12 md:py-12 lg:px-16",
                  "border-swiss-ink",
                  "transition-colors duration-150 ease-linear",
                  "hover:bg-swiss-ink",
                  /* Row separator — omit on last card; section border-b closes the stack */
                  i < FEATURES.length - 1 ? "border-b-[3px]" : "",
                ].join(" ")}
              >
                {/* Row header: numeric index + diagonal arrow */}
                <div className="flex items-start justify-between">
                  <span
                    className={[
                      "font-black text-2xl leading-none tabular-nums",
                      "text-swiss-ink transition-colors duration-150",
                      "group-hover:text-swiss-paper",
                    ].join(" ")}
                  >
                    .{feature.n}
                  </span>
                  <ArrowUpRight
                    className={[
                      "h-5 w-5 -rotate-45",
                      "transition-transform duration-200 ease-out",
                      "group-hover:rotate-0 group-hover:text-swiss-paper",
                    ].join(" ")}
                    strokeWidth={2.5}
                  />
                </div>

                {/*
                  Two-layer icon square.
                  Layer 1 (background div): renders below by DOM order.
                    On group-hover it fills with the brand spectrum gradient.
                  Layer 2 (Icon): renders on top by DOM/paint order alone.
                    No z-index needed — later siblings paint over earlier ones
                    within the same stacking context.
                */}
                <div className="relative h-14 w-14">
                  <div
                    className={[
                      "absolute inset-0",
                      "border-[3px] border-swiss-ink",
                      "bg-swiss-paper",
                      "group-hover:[background:var(--swiss-spectrum)]",
                    ].join(" ")}
                  />
                  <Icon
                    className="absolute inset-0 m-auto h-6 w-6 text-swiss-ink"
                    strokeWidth={2.25}
                  />
                </div>

                {/* Text block */}
                <div>
                  <h3
                    className={[
                      "text-lg font-black uppercase tracking-wide",
                      "text-swiss-ink transition-colors duration-150",
                      "group-hover:text-swiss-paper",
                    ].join(" ")}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={[
                      "mt-3 max-w-lg text-sm leading-relaxed",
                      "text-swiss-ink/80 transition-colors duration-150",
                      "group-hover:text-swiss-paper",
                    ].join(" ")}
                  >
                    {feature.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
