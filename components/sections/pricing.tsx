import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { SectionLabel } from "@/components/primitives/section-label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Tier = {
  name: string;
  blurb: string;
  price: string;
  unit: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
  enterprise?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Solopreneur",
    blurb: "For emerging talent managers and solo operators scaling their first core roster.",
    price: "$39",
    unit: "/ mo + 1% of invoice",
    features: [
      "Capable of managing up to 5 Creators",
      "Unlimited Automated Invoice Generation",
      "Smart Email Reminders to Late-Paying Brands",
      "Hands-Free W-9 / W-8 Digital Collection",
      "Standard Email Support",
    ],
    cta: "Chat with us",
    href: "mailto:info@useriff.app",
  },
  {
    name: "Professional",
    blurb: "For fast-growing influencer agencies and established management firms handling multiple campaigns.",
    price: "$99",
    unit: "/ mo + 1% of invoice",
    features: [
      "Everything in Solopreneur, plus:",
      "Capable of managing up to 25 Creators",
      "Fully Branded & White-Labeled Invoices (Look like an enterprise)",
      "Accelerated Same-Day / Instant Creator Payouts",
      "Drag-and-Drop Contract Ingestion (Drop it in, Riff reads the terms)",
      "Priority Slack & Email Support",
    ],
    cta: "Chat with us",
    href: "mailto:info@useriff.app",
    featured: true,
  },
  {
    name: "Enterprise",
    blurb: "For high-volume talent networks and full-service agencies requiring custom financial infrastructure.",
    price: "CUSTOM",
    unit: "PRICING",
    features: [
      "Everything in Professional, plus:",
      "Unlimited Creators & Brand Portfolios",
      "Fully Automated End-to-End Payout Workflows",
      "Secure In-App Communication Matrix (Brands + Agencies + Creators)",
      "Automated FTC Compliance & Disclosure Tracking",
      "Dedicated Account Manager & 24/7 Priority Support",
    ],
    cta: "Chat with us",
    href: "mailto:info@useriff.app",
    enterprise: true,
  },
];

/**
 * Pricing — three tiers with the Pro tier as featured.
 *
 * Featured tier signals "recommended" through TWO non-color cues:
 *   1. Ghost Border — a 3px gradient border (the brand spectrum) replaces
 *      the standard ink border. The border IS the badge.
 *   2. Typographic hierarchy — the featured tier's name and price both
 *      step up one size in the type scale.
 *
 * No "MOST LOVED" stickers. No scale transforms. The visual hierarchy
 * reads instantly without ornament.
 *
 * Featured CTA uses the prismatic button variant; other CTAs are primary.
 */
export function Pricing() {
  return (
    <section
      id="pricing"
      className="border-b-[3px] border-swiss-ink bg-swiss-paper swiss-layer"
    >
      <Container className="py-20 md:py-28 lg:py-32">
        <div className="border-b-[3px] border-swiss-ink pb-12">
          <SectionLabel number="04">Pricing</SectionLabel>
          <h2 className="mt-6 font-black uppercase text-display-sm">
            PICK YOUR TIER.<br />SCALE YOUR ROSTER.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-12 xl:grid-cols-3 xl:gap-8">
          {TIERS.map((tier) => (
            <article
              key={tier.name}
              className={cn(
                "flex flex-col bg-swiss-paper p-8 md:p-10 lg:p-12",
                "border-[3px]",
                tier.featured
                  ? "swiss-spectrum-border"
                  : "border-swiss-ink",
              )}
            >
              {/*
               * Badge slot — fixed height present in ALL three cards.
               * Featured fills it with the "Most Popular" label;
               * the other two leave it empty. This keeps every element
               * below (title, price border, feature list) locked to the
               * same Y position across all three columns.
               */}
              <div className="h-5 mb-3">
                {tier.featured && (
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-swiss-ink/60">
                    🔥 Most Popular
                  </p>
                )}
              </div>

              {/* ── Name + blurb ── min-h matches natural 2-line content so a future
                  1-line blurb won't break price alignment. NOTE: does NOT protect
                  against a future 3+ line blurb — keep copy to ≤2 lines at xl. */}
              <div className="min-h-[5.5rem]">
                <h3 className="font-black uppercase tracking-wide text-2xl md:text-3xl">
                  {tier.name}
                </h3>
                <p className="mt-3 text-sm text-swiss-ink/70">
                  {tier.blurb}
                </p>
              </div>

              {/* ── Price ── SUBHEADER→PRICE spacing matches PRICE→LIST (both mt-8) */}
              <div className="mt-8 flex items-center gap-2 border-y-[3px] border-swiss-ink py-6 min-h-[6.75rem] md:min-h-[7.5rem]">
                <span
                  className={cn(
                    "font-black",
                    tier.enterprise
                      ? "text-3xl xl:text-4xl uppercase tracking-tight whitespace-nowrap"
                      : "tabular-nums text-6xl md:text-7xl",
                  )}
                >
                  {tier.price}
                </span>
                <span
                  className={cn(
                    "font-black uppercase",
                    tier.enterprise
                      ? "text-3xl xl:text-4xl tracking-tight whitespace-nowrap"
                      : "text-xs tracking-widest text-swiss-ink/70",
                  )}
                >
                  {tier.unit}
                </span>
              </div>

              {/* ── Features ── PRICE TO LIST SPACING = mt-8 for all */}
              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-swiss-ink"
                      strokeWidth={3}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={tier.featured ? "prismatic" : "primary"}
                size="lg"
                className="mt-8"
              >
                <Link href={tier.href} target="_blank" rel="noopener noreferrer">
                  {tier.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
