import type { MetadataRoute } from "next";
import { LEGAL_ROUTES } from "@/lib/legal-routes";
import { getAllPosts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

/**
 * Sitemap — homepage, blog, legal disclosures, and every published post.
 * Picks each post's lastModified from its publishedAt date so search engines
 * can detect new entries without re-crawling the whole site.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const now = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...LEGAL_ROUTES.map((path) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...posts.map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: new Date(p.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
