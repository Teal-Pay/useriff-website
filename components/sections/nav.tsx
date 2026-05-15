"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { APP_URL, DEMO_URL } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#system", label: "Features" },
  { href: "#applied", label: "In Practice" },
  { href: "#evidence", label: "Reviews" },
  { href: "#pricing", label: "Pricing" },
];

const MOBILE_NAV_LINK_CLASS =
  "text-xs font-bold uppercase tracking-[0.2em] transition-all duration-150 hover:underline hover:underline-offset-[6px] hover:decoration-2";

/**
 * Nav — sticky top bar with thick bottom rule.
 * Links get a 2px underline on hover. No color change (the system has no
 * second color); the line under the text is the entire interaction.
 *
 * No glass blur, no rounded pill — just an ink rule and ruthless alignment.
 */
export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-swiss-ink bg-swiss-paper">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6 md:h-20">
          <Link href="#top" className="flex items-center gap-3" aria-label="Riff — home">
            <Image
              src="/riff-horiz-logo.svg"
              alt=""
              width={170}
              height={64}
              className="h-7 w-auto lg:hidden"
              priority
            />
            <Image
              src="/riff-symbol.svg"
              alt=""
              width={31}
              height={36}
              className="hidden h-8 w-auto md:h-9 lg:block"
              priority
            />
            <Image
              src="/riff-wordmark.svg"
              alt="Riff"
              width={59}
              height={28}
              className="hidden h-6 w-auto md:h-7 lg:block"
              priority
            />
          </Link>

          <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-bold uppercase tracking-[0.2em] transition-all duration-150 hover:underline hover:underline-offset-[6px] hover:decoration-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <Button asChild variant="ghost" size="sm" className="hidden lg:inline-flex">
              <Link href={DEMO_URL}>Request Demo</Link>
            </Button>
            <Button asChild variant="primary" size="sm">
              <Link href={APP_URL}>
                Sign up
                <span aria-hidden="true">→</span>
              </Link>
            </Button>
            <button
              type="button"
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center border-[3px] border-swiss-ink bg-swiss-paper text-swiss-ink transition-colors duration-150 ease-linear hover:bg-swiss-ink hover:text-swiss-paper lg:hidden",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-swiss-focus focus-visible:ring-offset-2"
              )}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-panel"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <X className="h-5 w-5" strokeWidth={2.5} aria-hidden /> : <Menu className="h-5 w-5" strokeWidth={2.5} aria-hidden />}
            </button>
          </div>
        </div>

        <div
          id="mobile-nav-panel"
          className={cn(
            "overflow-hidden transition-[max-height] duration-150 ease-linear lg:hidden",
            mobileOpen ? "max-h-[28rem] border-t-[3px] border-swiss-ink" : "max-h-0 border-t-0"
          )}
        >
          <nav aria-label="Mobile primary" className="flex flex-col gap-5 py-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={MOBILE_NAV_LINK_CLASS}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="ghost" size="sm" className="justify-start">
              <Link href={DEMO_URL} onClick={() => setMobileOpen(false)}>
                Request Demo
              </Link>
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
}
