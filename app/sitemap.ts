import type { MetadataRoute } from "next";
import documents from "@/content/site/pages.json";
import { getAllPosts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...Object.keys(documents).filter((route) => !/^\/blog\/.+/.test(route)).map((route) => ({ url: absoluteUrl(route), changeFrequency: route === "/blog/" ? "weekly" as const : "monthly" as const, priority: route === "/" ? 1 : 0.7 })),
    ...getAllPosts().map((post) => ({ url: absoluteUrl(`/blog/${post.slug}/`), lastModified: new Date(post.publishedAt), changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
