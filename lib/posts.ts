import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

/**
 * Posts data layer.
 *
 * The blog system reads markdown files from /content/posts/<folder>/index.md.
 * Each post folder is named `YYYY-MM-DD-slug` so the slug is derived from the
 * folder name. Cover images live under /public/blog/<folder>/cover.jpg so they
 * can be referenced as absolute URLs from markdown without any webpack-side
 * import gymnastics.
 *
 * Drafts (status: "draft" in frontmatter) are filtered out everywhere except
 * if the consumer explicitly opts in.
 */

export type PostStatus = "draft" | "published";

export type PostFrontmatter = {
  title: string;
  excerpt: string;
  publishedAt: string; // ISO date, YYYY-MM-DD
  author: string;
  coverImage: string; // absolute URL path, e.g. /blog/<slug>/cover.jpg
  coverAlt: string;
  tags: string[];
  readingTime?: string;
  status: PostStatus;
};

export type Post = PostFrontmatter & {
  slug: string; // folder name, e.g. 2026-05-15-bulk-payouts-explained
};

export type PostWithBody = Post & {
  /** Rendered HTML body. Already sanitised by remark-html's default pipeline. */
  bodyHtml: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

/**
 * Read every post folder, parse the frontmatter, drop drafts, sort newest first.
 * Cached implicitly by Next.js's build-time data fetching — this is called at
 * request/build time, not on every render.
 */
export function getAllPosts(opts: { includeDrafts?: boolean } = {}): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const folders = fs.readdirSync(POSTS_DIR, { withFileTypes: true });

  const posts: Post[] = folders
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const slug = entry.name;
      const filePath = path.join(POSTS_DIR, slug, "index.md");
      if (!fs.existsSync(filePath)) return null;
      const raw = fs.readFileSync(filePath, "utf8");
      const { data } = matter(raw);
      return { slug, ...(data as PostFrontmatter) };
    })
    .filter((p): p is Post => p !== null)
    .filter((p) => (opts.includeDrafts ? true : p.status === "published"))
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return posts;
}

/**
 * Get the most recent N posts. Defaults to 3 for the homepage section.
 */
export function getLatestPosts(n = 3): Post[] {
  return getAllPosts().slice(0, n);
}

/**
 * Get a single post by slug, with rendered HTML body. Returns null if the slug
 * is missing or the post is in draft status (so direct URL access doesn't leak
 * unpublished drafts).
 */
export async function getPostBySlug(slug: string): Promise<PostWithBody | null> {
  const filePath = path.join(POSTS_DIR, slug, "index.md");
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as PostFrontmatter;

  if (frontmatter.status !== "published") return null;

  const processed = await remark().use(html).process(content);
  const bodyHtml = processed.toString();

  return { slug, ...frontmatter, bodyHtml };
}

/**
 * Slug list for generateStaticParams() — static export of every published post.
 */
export function getAllPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

/**
 * Unique, sorted tag list across all published posts. Used by the archive's
 * tag filter pills.
 */
export function getAllTags(): string[] {
  const set = new Set<string>();
  for (const post of getAllPosts()) {
    for (const tag of post.tags) set.add(tag);
  }
  return Array.from(set).sort();
}

/**
 * Find the next published post after the given slug (chronologically older).
 * Used by the "next in journal" footer on individual posts.
 */
export function getNextPost(slug: string): Post | null {
  const all = getAllPosts();
  const idx = all.findIndex((p) => p.slug === slug);
  if (idx === -1) return null;
  return all[idx + 1] ?? all[0] ?? null;
}

/**
 * Pretty-print an ISO date as YYYY—MM—DD (em-dash) — the project's editorial
 * date format. Keeps display consistent across cards and post headers.
 */
export function formatPostDate(isoDate: string): string {
  // Replace ASCII hyphens with em-dashes; tolerate any unexpected input.
  return isoDate.replace(/-/g, "—");
}
