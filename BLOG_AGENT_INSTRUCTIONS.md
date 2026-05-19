# Blog Agent Instructions — Riff Journal

You are publishing a blog post to the Riff marketing website. Riff is a creator-economy payments platform: managers, agencies, and creators use it to handle splits, invoices, W-9/W-8 compliance, and global payouts. Your audience is the operations and finance people at creator agencies.

Follow these rules exactly. If anything is ambiguous, mark the post as a draft and stop.

---

## 1. Where the files go

**Two locations** for every post:

```
/content/posts/YYYY-MM-DD-slug/
    index.md                ← the post text + frontmatter

/public/blog/YYYY-MM-DD-slug/
    cover.jpg               ← cover image (see Section 4)
    [any inline images]
```

The folder names in `/content/` and `/public/blog/` MUST match exactly. The post references its cover image as `/blog/YYYY-MM-DD-slug/cover.jpg` (absolute URL path).

**Important:** existing post folders in `/public/blog/` may contain only a `README.md` placeholder — the actual image file still needs to be added. A missing image file will not break the build, but will produce a broken image in production. Always verify the file physically exists before marking the checklist item done.

**Slug rules:**
- Lowercase, hyphens only, no special characters
- 3–6 words, derived from the headline
- Prefixed with the ISO publish date: `YYYY-MM-DD-`
- Example: `2026-05-18-tax-season-checklist`

If a slug collides, append `-2`, `-3`, etc.

---

## 2. Frontmatter — required and optional fields

Open `index.md` with this block (between two `---` lines):

```md
---
title: "Bulk payouts: how splits actually work"
excerpt: "A look under the hood at how Riff distributes a single brand payment across managers, agencies, and creators in one click."
publishedAt: "2026-05-18"
author: "The Riff Team"
coverImage: "/blog/2026-05-18-bulk-payouts/cover.jpg"
coverAlt: "A stylised diagram of one inbound payment fanning out to multiple recipients"
tags: ["Product", "Payouts"]
readingTime: "5 min read"
status: "draft"
---
```

| Field | Required | Rules |
|---|---|---|
| `title` | ✅ | Sentence case. 4–12 words. No ending punctuation. The website renders it in uppercase automatically — do NOT write it in caps. |
| `excerpt` | ✅ | One sentence, 10–25 words. Plain, specific language. No marketing fluff. |
| `publishedAt` | ✅ | ISO date `YYYY-MM-DD`. Must match the folder date. |
| `author` | ✅ | Default `"The Riff Team"`. |
| `coverImage` | ✅ | Absolute URL path: `/blog/<folder-name>/cover.jpg` (or `.webp` if using WebP — must match the actual filename). Folder name must match the post folder exactly. The cover image only renders on the individual post page, not on post cards or the homepage section. |
| `coverAlt` | ✅ | One sentence describing the image. Required for accessibility and SEO. |
| `tags` | ✅ | 1–3 tags only. Pick from the approved list below. Do not invent new tags. Tags are user-facing — they power the filter on the `/blog` archive page (`/blog?tag=TagName`). |
| `readingTime` | ☑️ optional | Estimate as `"N min read"`. Roughly 200 words per minute. Omit only if genuinely unknown. |
| `status` | ✅ | Always `"draft"` on creation. A human flips this to `"published"` after review. |

**Approved tag list** (do not invent new ones):
`Product`, `Payouts`, `Compliance`, `Operations`, `Global`, `Pricing`, `Company`, `Engineering`, `Design`

---

## 3. The body

Use plain Markdown. No HTML, no MDX, no React components.

**Structure every post like this:**

1. **Opener (2–3 sentences):** the problem, sharply named. Specific industry detail in the first sentence. No "In today's fast-paced world" openers.
2. **2–4 sections** with `##` headings. Headings are sentence case, descriptive, load-bearing — never "Conclusion" or "Introduction".
3. **Closing paragraph under a final `## The takeaway` heading.** Two to three sentences. State the lesson in operational terms — what the reader should do differently on Monday.

**Length:** 500–1,000 words. Shorter is better than padded.

**Allowed Markdown:**
- `##` for sections, `###` for sub-sections (use sub-sections sparingly)
- `**bold**` for emphasis (1–2 times per post max)
- `*italic*` for terms
- `>` for pull quotes
- Bulleted or numbered lists for 3+ parallel items only. For two items, write a sentence.
- Inline links: `[text](https://...)`
- Inline images: `![alt text](/blog/YYYY-MM-DD-slug/image-name.jpg)` — image must live in the matching `/public/blog/` folder
- Inline code: `` `code` `` and fenced code blocks (``` ``` ```) — both render with styled monospace treatment

**Not allowed:**
- Emoji
- Raw HTML (`<div>`, `<span>`, etc.)
- External image URLs (must be local files in `/public/blog/<folder>/`)
- Nested lists (flatten into prose)

---

## 4. Image rules

- **Cover image:** 1600px wide minimum, 16:9 aspect, JPG or WebP, under 500KB. Filename is `cover.jpg` or `cover.webp` — whichever you use, the `coverImage` frontmatter path must match exactly (e.g. `/blog/2026-05-18-slug/cover.webp`). The cover image only appears on the individual post page — not on post cards or the homepage blog section.
- **Inline images:** descriptive lowercase-hyphenated filenames (`split-waterfall.jpg`, not `IMG_2847.JPG`). Live in the same `/public/blog/<folder>/` directory.
- **Alt text required for every image.** Describe what's in the image — don't write "image of" or "screenshot showing".
- **Format priority:** WebP > JPG > PNG. PNG only for screenshots with text.

---

## 5. Voice — Riff specifics

Riff's voice is direct, operational, slightly dry. The reader is a senior ops person at a creator agency. They are smart, busy, and immune to hype.

**Use:**
- Concrete numbers and dollar figures
- Named industries and entity types (talent manager, MCN, Net-30, 1099-NEC, SWIFT, SEPA)
- Active voice
- Specific consequences ("you'll find errors you can't trace" > "challenges may arise")

**Avoid:**
- Hype words: "revolutionary", "game-changing", "unleash", "supercharge", "seamless" (already overused on the homepage)
- Hedging: "may", "can be considered", "in some cases"
- Rhetorical questions in the opener
- "You" and "we" used excessively
- Anything that sounds like a webinar pitch

**Closing line:** never "What do you think? Let us know!" or "Get started today!". Let the takeaway stand on its own.

---

## 6. Draft → published workflow

1. You create the post with `status: "draft"`. Drafts are filtered out by the data layer and appear nowhere on the live site, even at direct URLs.
2. A human reviews and may edit the file directly or send feedback.
3. The human (not you) changes `status: "draft"` to `status: "published"` and commits.
4. Next deploy: the post is live.

**You never set status to `"published"`. No exceptions.**

---

## 7. Pre-flight checklist (run before saving)

- [ ] Folder `/content/posts/YYYY-MM-DD-slug/` created with a valid slug
- [ ] Matching folder `/public/blog/YYYY-MM-DD-slug/` created
- [ ] Cover image file (`cover.jpg` or `cover.webp`) physically exists in that folder — not just a placeholder README
- [ ] `coverImage` frontmatter path matches the folder name AND the actual filename (including extension)
- [ ] `coverAlt` is filled in
- [ ] Frontmatter has all required fields
- [ ] `status: "draft"`
- [ ] Title is sentence case, 4–12 words
- [ ] Excerpt is one sentence, 10–25 words
- [ ] Tags are from the approved list, 1–3 only
- [ ] Body is 500–1,000 words
- [ ] Body ends with a `## The takeaway` section
- [ ] All inline images live in the matching `/public/blog/` folder and have alt text

If any item fails, fix it before saving. If you can't fix it, save as a draft with a `<!-- TODO: ... -->` comment at the top describing what's missing.

---

## 8. Reference: existing posts to read for voice

- `/content/posts/2026-05-15-bulk-payouts-explained/index.md`
- `/content/posts/2026-05-08-tax-season-checklist/index.md`
- `/content/posts/2026-04-28-cross-border-creator-payouts/index.md`

Match this register. If your draft sounds louder or softer than these, rewrite it.
