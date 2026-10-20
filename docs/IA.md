# Riff site architecture

## Homepage

Hero → agency and brand logo rows → tool consolidation → unified inbox → email-to-campaign → deal pipeline → payments → Reach and Starline quotes → charcoal demo CTA → footer.

The message is customer-led: manage creator deals from inbox to 1099, bring scattered work together, see the next action, and automate financial follow-through. Product demonstrations show work moving forward rather than recreating every detail of the application.

## Public pages

- `/`: approved homepage.
- `/how-it-works/`: supporting product explanation; primary nav goes directly to `/#overview`.
- `/payments/`: payment workflow details.
- `/customers/`: consistent Reach and Starline customer components.
- `/pricing/`: current Solopreneur, Pro, and Enterprise plans.
- `/faq/`: approved FAQ content, including 1099 support.
- `/blog/` and `/blog/[slug]/`: approved editorial design, Markdown authoring.
- `/pages/legal/` and nine legal disclosure pages: approved design, preserved legal wording.

Primary CTA: Book a demo → https://calendly.com/noreply-useriff/30min. Sign-in and sign-up go to lets.useriff.app. Four approved social links appear in the footers. No podcast page or homepage feature is included.

Page metadata and sitemap use the production origin from lib/site.ts. Private-preview noindex tags and historical version routes are excluded from production.
