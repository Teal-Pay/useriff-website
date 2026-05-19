import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { APP_URL } from "@/lib/constants";

const COLS = [
  {
    heading: "Product",
    links: [
      { href: "/#system", label: "What We Do" },
      { href: "/#applied", label: "How We Do It" },
      { href: "/#evidence", label: "Reviews" },
      { href: "/#pricing", label: "Pricing" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/pages/terms-of-service/", label: "Terms of Service" },
      { href: "/pages/privacy-policy/", label: "Privacy Policy" },
      { href: "/pages/legal/", label: "All Disclosures" },
    ],
  },
];

const SOCIALS = [
  {
    href: "https://www.linkedin.com/company/useriffapp/",
    label: "LinkedIn",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/useriff.app/",
    label: "Instagram",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@useriff.app",
    label: "TikTok",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@useriff_app",
    label: "YouTube",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    ),
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
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-swiss-paper/70">
              Let&rsquo;s Riff
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Link
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-[3px] border-swiss-paper bg-swiss-paper px-5 py-3 text-xs font-black uppercase tracking-widest text-swiss-ink transition-colors duration-150 hover:bg-transparent hover:text-swiss-paper"
              >
                Sign up / Log in
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

            {/* Socials column */}
            <div>
              <h3 className="border-b-[2px] border-swiss-paper pb-3 text-[11px] font-black uppercase tracking-[0.2em]">
                Socials
              </h3>
              <ul className="mt-5 space-y-3">
                {SOCIALS.map((social) => (
                  <li key={social.label}>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Riff on ${social.label}`}
                      className="inline-flex items-center gap-2 text-sm text-swiss-paper/70 transition-colors duration-150 hover:text-swiss-paper"
                    >
                      {social.icon}
                      {social.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
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
