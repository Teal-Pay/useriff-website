import Link from "next/link";
import { SectionLabel } from "@/components/primitives/section-label";
import { PostCard } from "@/components/blog/post-card";
import { getLatestPosts } from "@/lib/posts";

/** Spectrum sized to the Read label width so pink → blue → mint all show on hover. */
const JOURNAL_READ_HOVER =
  "w-fit group-hover:bg-[linear-gradient(90deg,#FFB7F8_0%,#C2D3FF_50%,#83EFC5_100%)] group-hover:bg-[length:100%_100%]";

/**
 * Blog — homepage "Journal" section.
 *
 * Slots between FAQ (05) and CTA (07) as section 06.
 * Mirrors the Features section's grid construction: a billboard cell on the
 * left, content cells on the right, separated by 3px ink rules that meet at
 * exact viewport quarters. On mobile, everything stacks.
 *
 * Pulls the three most recent published posts via getLatestPosts(). If fewer
 * than three exist, the row gracefully shows however many are available.
 */
export function Blog() {
  const posts = getLatestPosts(3);

  // Nothing to show? Render nothing — better than an awkward empty row.
  if (posts.length === 0) return null;

  return (
    <section
      id="blog"
      className="border-b-[3px] border-swiss-ink bg-swiss-paper swiss-layer"
      aria-label="Recent posts"
    >
      <div className="lg:grid lg:grid-cols-12">
        {/* ── LEFT — billboard ─────────────────────────────────────────── */}
        <div
          className={[
            "swiss-dots",
            "border-b-[3px] border-swiss-ink",
            "lg:border-b-0 lg:border-r-[3px]",
            "lg:col-span-3",
          ].join(" ")}
        >
          <div
            className={[
              "flex h-full flex-col justify-between gap-8",
              "px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12",
            ].join(" ")}
          >
            <div>
              <SectionLabel number="06">Blog</SectionLabel>
              <h2 className="mt-6 font-black uppercase text-[clamp(2rem,3.5vw,3.25rem)] leading-[0.95] tracking-[-0.03em]">
                Recent posts
              </h2>
            </div>

            <Link
              href="/blog"
              className={[
                "inline-flex w-fit items-center justify-center gap-2",
                "border-[3px] border-swiss-ink bg-swiss-paper",
                "px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-swiss-ink",
                "transition-colors duration-150 ease-linear",
                "hover:bg-swiss-ink hover:text-swiss-paper",
              ].join(" ")}
            >
              View archive
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* ── RIGHT — 3 latest post cards ──────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:col-span-9">
          {posts.map((post, i) => (
            <div
              key={post.slug}
              className={[
                // Inner column separators — only between cards, not after the last
                i < posts.length - 1
                  ? "border-b-[3px] md:border-b-0 md:border-r-[3px] border-swiss-ink"
                  : "",
              ].join(" ")}
            >
              <PostCard
                post={post}
                variant="journal"
                readClassName={JOURNAL_READ_HOVER}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
