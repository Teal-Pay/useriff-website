import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const METADATA_BASE = new URL("https://useriff.app");

const SITE_TITLE = "Riff — Collaborate. Create. Get paid.";
const SITE_DESCRIPTION =
  "The system for creators who work together. Splits, invoices, and payouts handled with the precision the money deserves.";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Riff",
    url: METADATA_BASE.origin,
    logo: new URL("/riff-symbol.svg", METADATA_BASE).href,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Riff",
    url: METADATA_BASE.origin,
  },
];

/**
 * Inter — Swiss style demands a neutral grotesque sans.
 * We expose the full weight range so headlines (900) and body (400/500) have room.
 */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: METADATA_BASE,
  alternates: {
    canonical: "https://useriff.app/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://useriff.app/",
    siteName: "Riff",
    images: [{ url: "/riff-wordmark.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: [
      { url: "/Favicons/32x32/LIGHT 32x32-logo only.png", media: "(prefers-color-scheme: light)" },
      { url: "/Favicons/32x32/DARK 32x32-logo only.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {children}
      </body>
    </html>
  );
}
