/**
 * Dev (`next dev`) and production (`next build`) must not share the same
 * dist folder — otherwise a build while dev is running (or right after)
 * leaves the dev server serving HTML that 404s on layout.css and chunks.
 * `.next-dev` is gitignored; `.next` is used only for production builds.
 */
const distDir = process.env.NODE_ENV === "production" ? ".next" : ".next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir,
  reactStrictMode: true,

  // Strip all console.* calls from production bundles.
  compiler: {
    removeConsole: true,
  },

  // Security headers applied to every route.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
