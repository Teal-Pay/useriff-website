import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Post } from "@/lib/posts";
import { formatPostDate } from "@/lib/posts";

/**
 * PostCard — reusable card surface for a single blog post.
 *
 * Used on:
 *  - Homepage "Journal" section (3 latest posts)
 *  - Archive page grid
 *
 * Visual rules (match Riff Swiss system):
 *  - White paper surface, 3px ink right/bottom borders applied by the
 *    PARENT grid (so the grid lines are continuous and meet at corners
 *    cleanly). The card itself is just padding + content.
 *  - Hover inverts the card to ink — same pattern as Features rows.
 *  - All caps + heavy weight on headline, tabular monospace on the date.
 *  - "Read →" is ink by default; journal variant uses spectrum gradient on hover.
 */
export function PostCard({
  post,
  showExcerpt = false,
  variant = "default",
  readClassName = "",
  className = "",
}: {
  post: Post;
  showExcerpt?: boolean;
  /** Homepage journal row — tighter padding and section-specific type scale. */
  variant?: "default" | "journal";
  /** Optional classes for the "Read →" label (homepage journal row). */
  readClassName?: string;
  className?: string;
}) {
  const isJournal = variant === "journal";
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={[
        "group relative flex h-full flex-col justify-between",
        "bg-swiss-paper",
        isJournal ? "px-6 py-6 md:px-8 md:py-8" : "px-6 py-8 md:px-8 md:py-10",
        "transition-colors duration-150 ease-linear",
        "hover:bg-swiss-ink",
        className,
      ].join(" ")}
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <span
            className={[
              isJournal
                ? "font-mono text-xs uppercase tracking-[0.15em]"
                : "font-mono text-[11px] uppercase tracking-[0.15em]",
              "text-swiss-ink/70 transition-colors duration-150",
              "group-hover:text-swiss-paper/70",
            ].join(" ")}
          >
            {formatPostDate(post.publishedAt)}
            {post.tags[0] ? ` · ${post.tags[0]}` : ""}
          </span>
          <ArrowUpRight
            className={[
              "h-4 w-4 -rotate-45 flex-shrink-0",
              "text-swiss-ink transition-all duration-200 ease-out",
              "group-hover:rotate-0 group-hover:text-swiss-paper",
            ].join(" ")}
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </div>

        <h3
          className={[
            isJournal ? "mt-6 text-[1.875rem]" : "mt-10 text-base md:text-lg",
            "font-black uppercase leading-[1.15] tracking-wide",
            "text-swiss-ink transition-colors duration-150",
            "group-hover:text-swiss-paper",
          ].join(" ")}
        >
          {post.title}
        </h3>

        {showExcerpt && (
          <p
            className={[
              "mt-3 text-sm leading-relaxed",
              "text-swiss-ink/75 transition-colors duration-150",
              "group-hover:text-swiss-paper/80",
            ].join(" ")}
          >
            {post.excerpt}
          </p>
        )}
      </div>

      <span
        className={[
          isJournal ? "mt-6 text-[0.875rem]" : "mt-10 text-[11px]",
          "inline-flex items-center gap-2 font-bold uppercase tracking-[0.2em]",
          "text-swiss-ink",
          isJournal
            ? [
                "transition-[color,background] duration-150 ease-linear",
                "group-hover:bg-clip-text group-hover:text-transparent",
                readClassName,
              ].join(" ")
            : "transition-colors duration-150 group-hover:text-swiss-paper",
        ].join(" ")}
      >
        Read
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
