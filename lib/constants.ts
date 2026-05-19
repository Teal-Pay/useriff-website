/** Production app URL — where users sign up / log in. */
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL?.trim() || "https://lets.useriff.app";

/** Calendly booking link for demo requests. */
export const DEMO_URL =
  process.env.NEXT_PUBLIC_DEMO_URL?.trim() ||
  "https://calendly.com/useriff-info/30min";
