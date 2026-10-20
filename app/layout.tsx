import type { Metadata } from "next";
import { getSiteUrlObject } from "@/lib/site";
import "./globals.css";

const site = getSiteUrlObject();
export const metadata: Metadata = {
  metadataBase: site,
  title: "Riff — Run every creator deal from inbox to 1099",
  description: "The operating system for talent managers. Manage your creators' brand emails, deal progress, and payments in one place.",
  robots: { index: true, follow: true },
  icons: { icon: "/assets/riff-symbol.svg" },
};
const schemas = [
  { "@context": "https://schema.org", "@type": "Organization", name: "Riff", url: site.origin, logo: new URL("/assets/riff-logo.svg", site).href, sameAs: ["https://www.linkedin.com/company/useriffapp/", "https://www.instagram.com/useriff.app/", "https://www.tiktok.com/@useriff.app", "https://www.youtube.com/@useriff_app"] },
  { "@context": "https://schema.org", "@type": "WebSite", name: "Riff", url: site.origin },
];
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><head>
    <link rel="preload" href="/assets/46e73f4c01-4b73ec13-fkscreamer.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    <link rel="preload" href="/assets/5afbb97555-geist-variable-latin-1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
  </head><body>{schemas.map((schema, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />)}{children}</body></html>;
}
