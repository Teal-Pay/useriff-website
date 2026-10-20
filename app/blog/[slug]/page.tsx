import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketingDocument } from "@/components/marketing-document";
import { getAllPostSlugs, getPostBySlug, getNextPost } from "@/lib/posts";
import { blogPostBody } from "@/lib/blog-design";
import { absoluteUrl } from "@/lib/site";

export function generateStaticParams() { return getAllPostSlugs().map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Article not found — Riff", robots: { index: false } };
  return { title: `${post.title} — Riff`, description: post.excerpt, alternates: { canonical: absoluteUrl(`/blog/${post.slug}/`) }, openGraph: { title: post.title, description: post.excerpt, type: "article", publishedTime: post.publishedAt, authors: [post.author], url: absoluteUrl(`/blog/${post.slug}/`) }, twitter: { card: "summary", title: post.title, description: post.excerpt } };
}
export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.excerpt, datePublished: post.publishedAt, author: { "@type": "Organization", name: post.author }, mainEntityOfPage: absoluteUrl(`/blog/${post.slug}/`) };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><MarketingDocument route="/blog/2026-05-15-bulk-payouts-explained/" body={blogPostBody(post, getNextPost(post.slug))} /></>;
}
