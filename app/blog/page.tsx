import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/primitives/container";
import { SectionLabel } from "@/components/primitives/section-label";
import { PostCard } from "@/components/blog/post-card";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

/**
 * /blog — the archive page.
 *
 * Mirrors the homepage system: Nav → hero strip → content grid → Footer.
 * The tag filter is implemented through URL search params so the page stays
 * a Server Component (no client JS, shareable links). The active tag pill
 * inverts to ink to read as "selected".
 */

export const metadata: Metadata = {
  title: "Journal — Riff",
  description:
    "Field notes, frameworks, and operating principles from the team building Riff.",
  alternates: { canonical: absoluteUrl("/blog") },
};

export default function BlogArchivePage({
  searchParams,
}: {
  searchParams?: { tag?: string };
}) {
  const activeTag = searchParams?.tag ?? null;
  const tags = getAllTags();

  const allPosts = getAllPosts();
  const posts = activeTag
    ? allPosts.filter((p) => p.tags.includes(activeTag))
    : allPosts;

  return (
    <>
      <Nav />
      <main>
        {/* ── Hero strip ─────────────────────────────────────────────────── */}
        <section className="border-b-[3px] border-swiss-ink bg-swiss-paper swiss-dots swiss-layer">
          <Container className="py-20 md:py-28 lg:py-32">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div className="lg:col-span-7">
                <SectionLabel number="00">Archive</SectionLabel>
                <h1
                  className="mt-6 font-black uppercase"
                  style={{
                    fontSize: "clamp(3rem, 9vw, 7rem)",
                    lineHeight: 0.92,
                    letterSpacing: "-0.035em",
                  }}
                >
                  The Journal
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-swiss-ink/80 md:text-lg">
                  Field notes, frameworks, and operating principles from the
                  team building the back-office of the creator economy.
                </p>
              </div>

              {/* Tag filter pills */}
              <div className="lg:col-span-5 lg:flex lg:justify-end">
                <div className="flex flex-wrap gap-2">
                  <TagPill
                    href="/blog"
                    label="All"
                    active={activeTag === null}
                  />
                  {tags.map((t) => (
                    <TagPill
                      key={t}
                      href={`/blog?tag=${encodeURIComponent(t)}`}
                      label={t}
                      active={activeTag === t}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ── Post grid ──────────────────────────────────────────────────── */}
        <section className="border-b-[3px] border-swiss-ink bg-swiss-paper swiss-layer">
          {posts.length === 0 ? (
            <Container className="py-20 md:py-28">
              <p className="text-sm uppercase tracking-[0.2em] text-swiss-ink/70">
                No posts {activeTag ? `tagged "${activeTag}"` : "yet"}.
              </p>
            </Container>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => {
                // Right border on every card except the last in each row.
                // Bottom border on every row except the last.
                // We don't know row count without measuring, so we always set
                // bottom borders; the section's bottom border closes the stack.
                const isLastCol1 = (i + 1) % 1 === 0;
                const isLastCol2 = (i + 1) % 2 === 0;
                const isLastCol3 = (i + 1) % 3 === 0;

                return (
                  <div
                    key={post.slug}
                    className={[
                      "border-b-[3px] border-swiss-ink",
                      // Right rule: hidden on last column at each breakpoint
                      !isLastCol1 ? "border-r-0" : "",
                      !isLastCol2 ? "md:border-r-[3px]" : "md:border-r-0",
                      !isLastCol3 ? "lg:border-r-[3px]" : "lg:border-r-0",
                    ].join(" ")}
                  >
                    <PostCard post={post} showExcerpt />
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* ── Back to home strip ─────────────────────────────────────────── */}
        <section className="border-b-[3px] border-swiss-ink bg-swiss-muted swiss-layer">
          <Container className="py-10">
            <Link
              href="/"
              className="text-xs font-bold uppercase tracking-[0.2em] text-swiss-ink hover:underline hover:underline-offset-[6px] hover:decoration-2"
            >
              ← Back to home
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

/**
 * Tag filter pill — link, not button, so the URL drives state.
 * Active state inverts to ink (same hover behavior, but persistent).
 */
function TagPill({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center border-[3px] border-swiss-ink",
        "px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em]",
        "transition-colors duration-150 ease-linear",
        active
          ? "bg-swiss-ink text-swiss-paper"
          : "bg-swiss-paper text-swiss-ink hover:bg-swiss-ink hover:text-swiss-paper",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}
