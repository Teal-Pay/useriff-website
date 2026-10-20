import type { Metadata } from "next";
import Script from "next/script";
import documents from "@/content/site/pages.json";
import { absoluteUrl } from "@/lib/site";

export type MarketingPage = {
  title: string;
  description: string;
  styles: string[];
  scripts: string[];
  className: string;
  body: string;
  template?: string;
  cover?: string;
};

/** Approved first-party markup, checked into source; never accepts visitor HTML. */
export const marketingPages: Record<string, MarketingPage> = documents;

export function pageMetadata(route: string): Metadata {
  const page = marketingPages[route];
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: absoluteUrl(route) },
    openGraph: {
      title: page.title,
      description: page.description,
      url: absoluteUrl(route),
      siteName: "Riff",
      type: "website",
    },
    twitter: { card: "summary", title: page.title, description: page.description },
  };
}

export function MarketingDocument({ route, body }: { route: string; body?: string }) {
  const page = marketingPages[route];
  if (!page) throw new Error(`Unknown marketing page: ${route}`);
  return (
    <>
      {page.styles.map((href) => <link key={href} rel="stylesheet" href={href} />)}
      <div className={page.className || undefined} dangerouslySetInnerHTML={{ __html: body ?? page.body }} />
      {page.scripts.map((src) => <Script key={src} src={src} strategy="afterInteractive" />)}
    </>
  );
}
