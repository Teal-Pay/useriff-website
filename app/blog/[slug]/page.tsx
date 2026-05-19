import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/primitives/container";
import { PostBody } from "@/components/blog/post-body";
import {
  formatPostDate,
  getAllPostSlugs,
  getNextPost,
  getPostBySlug,
} from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

/**
 * /blog/[slug] — individual blog post.
 *
 * Server-rendered. Markdown body is parsed in lib/posts.ts and arrives as
 * sanitised HTML; PostBody applies the Swiss type scale to it.
 *
 * Generates static params for every published post at build time so each
 * post is served as a static file (fast + SEO-friendly).
 */

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Not found — Riff" };

  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    title: `${post.title} — Riff Journal`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: post.coverImage ? [{ url: post.coverImage, alt: post.coverAlt }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const next = getNextPost(post.slug);

  // JSON-LD structured data for SEO. Important for editorial content.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: post.author },
    image: post.coverImage ? absoluteUrl(post.coverImage) : undefined,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  return (
    <>
      <Nav />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ── Meta strip ─────────────────────────────────────────────────── */}
        <section className="border-b-[3px] border-swiss-ink bg-swiss-paper swiss-layer">
          <Container className="py-4 md:py-5">
            <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-swiss-ink/75">
              <span>
                {formatPostDate(post.publishedAt)}
                {post.readingTime ? ` · ${post.readingTime}` : ""} · By {post.author}
              </span>
              <span>
                <Link
                  href="/blog"
                  className="hover:underline hover:underline-offset-[6px] hover:decoration-2"
                >
                  Journal
                </Link>
                {post.tags[0] ? ` / ${post.tags[0]}` : ""}
              </span>
            </div>
          </Container>
        </section>

        {/* ── Headline block ─────────────────────────────────────────────── */}
        <section className="border-b-[3px] border-swiss-ink bg-swiss-paper swiss-dots swiss-layer">
          <Container className="py-16 md:py-24 lg:py-28">
            <h1
              className="max-w-4xl font-black uppercase"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              {post.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-swiss-ink/80 md:text-xl">
              {post.excerpt}
            </p>
          </Container>
        </section>

        {/* ── Cover image ────────────────────────────────────────────────── */}
        {post.coverImage && (
          <section className="border-b-[3px] border-swiss-ink bg-swiss-paper swiss-layer">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.coverAlt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </section>
        )}

        {/* ── Body ───────────────────────────────────────────────────────── */}
        <section className="border-b-[3px] border-swiss-ink bg-swiss-paper swiss-layer">
          <Container className="py-16 md:py-24 lg:py-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Sticky meta rail */}
              <aside className="lg:col-span-3">
                <div className="lg:sticky lg:top-24">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-swiss-ink/75">
                    Tagged
                  </div>
                  <ul className="mt-3 space-y-1">
                    {post.tags.map((t) => (
                      <li key={t}>
                        <Link
                          href={`/blog?tag=${encodeURIComponent(t)}`}
                          className="text-sm font-bold uppercase tracking-wide text-swiss-ink hover:underline hover:underline-offset-[6px] hover:decoration-2"
                        >
                          {t}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              {/* Main column */}
              <div className="lg:col-span-9">
                <PostBody html={post.bodyHtml} />
              </div>
            </div>
          </Container>
        </section>

        {/* ── Next post ──────────────────────────────────────────────────── */}
        {next && (
          <section className="border-b-[3px] border-swiss-ink bg-swiss-muted swiss-layer">
            <Container className="py-10 md:py-12">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-swiss-ink/70">
                    Next in Journal
                  </div>
                  <Link
                    href={`/blog/${next.slug}`}
                    className="mt-2 block max-w-2xl text-xl font-black uppercase leading-tight tracking-tight text-swiss-ink hover:underline hover:underline-offset-[8px] hover:decoration-[3px] md:text-2xl"
                  >
                    {next.title} →
                  </Link>
                </div>
                <Link
                  href="/blog"
                  className={[
                    "inline-flex shrink-0 items-center gap-2 border-[3px] border-swiss-ink bg-swiss-paper",
                    "px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-swiss-ink",
                    "transition-colors duration-150 ease-linear",
                    "hover:bg-swiss-ink hover:text-swiss-paper",
                  ].join(" ")}
                >
                  View archive
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Container>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
