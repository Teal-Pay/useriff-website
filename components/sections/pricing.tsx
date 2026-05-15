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
    blurb: "For solo talent managers managing <5 creators.",
    price: "$39",
    unit: "/ mo + 1% of invoice",
    features: [
      "<$1M in Brand Deals / yr",
      "Invoice Generation",
      "Auto-email reminders to Brands",
      "Auto W9/W8 collection",
      "Email support",
    ],
    cta: "Chat with us",
    href: "mailto:info@useriff.app",
  },
  {
    name: "Professional",
    blurb: "For solo talent managers managing up to 25 creators.",
    price: "$99",
    unit: "/ mo + 1% of invoice",
    features: [
      "Everything in Solopreneur, PLUS",
      "Branded Invoices",
      "Same-day / Instant Payouts",
      "Drag & drop your contracts",
      "Priority support",
    ],
    cta: "Chat with us",
    href: "mailto:info@useriff.app",
    featured: true,
  },
  {
    name: "Enterprise",
    blurb: "For solo talent managers managing >25 creators.",
    price: "CUSTOM",
    unit: "PRICING",
    features: [
      "Everything in Professional, PLUS",
      "Automated payouts",
      "In-app messaging between Brands / Agencies / Creators",
      "FTC compliance checks",
      "Dedicated customer support",
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
            PICK A TIER.<br />SWAP ANY TIME.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-12 xl:grid-cols-3 xl:gap-8">
          {TIERS.map((tier) => (
            <article
              key={tier.name}
              className={cn(
                "flex flex-col gap-8 bg-swiss-paper p-8 md:p-10 lg:p-12",
                "border-[3px]",
                tier.featured
                  ? "swiss-spectrum-border"
                  : "border-swiss-ink",
              )}
            >
              <div>
                <h3
                  className={cn(
                    "font-black uppercase tracking-wide",
                    "text-2xl md:text-3xl",
                  )}
                >
                  {tier.name}
                </h3>
                <p className="mt-3 text-sm text-swiss-ink/70">
                  {tier.blurb}
                </p>
              </div>

              <div className="flex items-center gap-2 border-y-[3px] border-swiss-ink py-6 min-h-[6.75rem] md:min-h-[7.5rem]">
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

              <ul className="flex flex-1 flex-col gap-3">
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
              >
                <Link href={tier.href}>
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
