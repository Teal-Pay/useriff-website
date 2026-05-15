import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { APP_URL } from "@/lib/constants";

const COLS = [
  {
    heading: "Product",
    links: [
      { href: "#system", label: "Features" },
      { href: "#applied", label: "In Practice" },
      { href: "#pricing", label: "Pricing" },
      { href: "#evidence", label: "Reviews" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/pages/agency-authorization-and-payment-disclosure/", label: "Agency Authorization" },
      { href: "/pages/aup/", label: "Acceptable Use Policy" },
      { href: "/pages/electronic-communications-policy/", label: "Electronic Communications" },
      { href: "/pages/fees-and-limits-disclosure/", label: "Fees & Limits" },
      { href: "/pages/glba-privacy-notice/", label: "GLBA Privacy Notice" },
      { href: "/pages/invoice-and-payment-terms/", label: "Invoice & Payment Terms" },
      { href: "/pages/payment-rails-and-network-service-terms/", label: "Payment Rails & Network" },
      { href: "/pages/privacy-policy/", label: "Privacy Policy" },
      { href: "/pages/terms-of-service/", label: "Terms of Service" },
    ],
  },
];

/**
 * Footer — full inversion: black ground, white type. Closes the page with
 * the same structural rigor as the nav opens it.
 *
 * 12-col grid: brand + tagline take 4, three link columns take 8.
 * Bottom row reads like a colophon — fine print, monospaced rhythm.
 */
export function Footer() {
  return (
    <footer className="bg-swiss-ink text-swiss-paper swiss-layer">
      <Container className="py-20 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="#top" aria-label="Riff" className="inline-block">
              <Image
                src="/riff-horiz-logo-white.svg"
                alt=""
                width={170}
                height={64}
                className="h-10 w-auto"
              />
            </Link>
            <div className="mt-4">
              <Link
                href="https://www.linkedin.com/company/useriffapp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Riff on LinkedIn"
                className="inline-flex text-swiss-paper/70 transition-colors duration-150 hover:text-swiss-paper"
              >
                {/* Lucide linkedin icon paths — lucide-react v1.14 does not export Linkedin. */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-swiss-paper/70">
              The system for creators who&rsquo;d rather collab than chase invoices.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Link
                href={APP_URL}
                className="border-[3px] border-swiss-paper bg-swiss-paper px-5 py-3 text-xs font-black uppercase tracking-widest text-swiss-ink transition-colors duration-150 hover:bg-transparent hover:text-swiss-paper"
              >
                Sign up
              </Link>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:gap-12">
            {COLS.map((col) => (
              <div key={col.heading}>
                <h3 className="border-b-[2px] border-swiss-paper pb-3 text-[11px] font-black uppercase tracking-[0.2em]">
                  {col.heading}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        {...(col.heading === "Legal"
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-sm transition-colors duration-150 hover:underline hover:underline-offset-4"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Colophon */}
        <div className="mt-20 grid grid-cols-1 gap-4 border-t-[3px] border-swiss-paper pt-8 text-[11px] font-bold uppercase tracking-[0.18em] sm:grid-cols-2 sm:items-center">
          <span className="text-swiss-paper/70">
            © {new Date().getFullYear()} Teal Pay Global Inc. · All rights reserved
          </span>
          <span className="flex flex-wrap gap-x-6 gap-y-2 text-swiss-paper/70 sm:justify-end">
            <Link href="mailto:info@useriff.app" className="hover:underline hover:underline-offset-4">
              info@useriff.app
            </Link>
          </span>
        </div>
      </Container>
    </footer>
  );
}
