# Riff marketing website

Production: https://www.useriff.app/ · Repository: Teal-Pay/useriff-website · Hosting: Vercel, production branch `main`.

The approved Riff redesign runs in the existing Next.js 14 App Router deployment. It uses local FK Screamer and Geist fonts, the Riff purple/blue/mint gradients, and the approved product demonstrations.

## Run and verify

```sh
npm ci
npm run dev
npm run build
npm run start
```

## Content and implementation

- `content/site/pages.json`: approved first-party page markup, metadata, ordered stylesheets, and scripts. Keys are canonical routes with trailing slashes. Supporting pages and legal documents use this source; the source is never visitor-provided HTML.
- `components/marketing-document.tsx`: renders approved pages and initializes their animation scripts after hydration. Normal anchors intentionally perform full navigation so each page starts with a fresh animation lifecycle.
- `app/`: thin Next route wrappers, metadata, sitemap, robots, and blog rendering.
- `public/*.css`, `public/*.js`, `public/assets/`: approved styles, interactions, and locally hosted assets. Preserve stylesheet order.
- `content/posts/YYYY-MM-DD-slug/index.md`: editable blog frontmatter and Markdown. Only published articles appear. Existing posts use approved abstract covers; future articles use their frontmatter cover image.
- `lib/blog-design.ts`: applies the approved editorial template to Markdown articles and generates the blog archive. Draft filtering remains in `lib/posts.ts`.
- `lib/constants.ts`: app and demo URL defaults. Public CTA markup uses the approved Calendly link directly.
- `lib/site.ts`: production canonical origin; `NEXT_PUBLIC_SITE_URL` may override it for another environment.

The old Swiss-style React components remain in source for historical reference but are not used by active routes. Do not restore their styling into the approved design.

## Publishing

A successful push to `main` triggers the connected Vercel production deployment. Verify the build and review all public routes before pushing. Preserve the existing security headers in `next.config.mjs` and legal wording. The approved production site is indexable; private preview source robots tags are deliberately not copied into Next metadata. Historical v1/v2 preview copies are not production routes.

Current demo link: https://calendly.com/noreply-useriff/30min
