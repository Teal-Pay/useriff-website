/**
 * Canonical site URL for metadata, sitemap, and JSON-LD.
 * Override with NEXT_PUBLIC_SITE_URL on preview/staging (e.g. Vercel).
 */
const DEFAULT_SITE_URL = "https://useriff.app";

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return DEFAULT_SITE_URL;
  try {
    return new URL(raw).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function getSiteUrlObject(): URL {
  return new URL(getSiteUrl());
}

/** Absolute URL for a path on this site (path must start with /). */
export function absoluteUrl(path: string): string {
  return new URL(path, getSiteUrlObject()).href;
}
