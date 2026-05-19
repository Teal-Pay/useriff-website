/**
 * PostBody — typographic shell for rendered markdown.
 *
 * The HTML comes pre-rendered from remark-html, so this component is purely
 * about applying the Swiss editorial type scale to whatever HTML lands inside.
 *
 * Rules:
 *  - Single column, max ~640px reading width.
 *  - Inter throughout (no serif body — Riff is sans-only).
 *  - Generous line-height (1.7) on paragraphs; tighter on headings.
 *  - Headings stay uppercase + black weight to match the rest of the system.
 */
export function PostBody({ html }: { html: string }) {
  return (
    <article
      className={[
        "max-w-[640px] text-base leading-[1.7] text-swiss-ink/90",
        // Paragraphs
        "[&_p]:mt-0 [&_p]:mb-6",
        // Headings
        "[&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-black [&_h2]:uppercase [&_h2]:tracking-tight [&_h2]:text-swiss-ink",
        "[&_h3]:mt-10 [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-black [&_h3]:uppercase [&_h3]:tracking-wide [&_h3]:text-swiss-ink",
        // Lists
        "[&_ul]:mt-0 [&_ul]:mb-6 [&_ul]:pl-5 [&_ul]:list-disc",
        "[&_ol]:mt-0 [&_ol]:mb-6 [&_ol]:pl-5 [&_ol]:list-decimal",
        "[&_li]:mb-2 [&_li]:leading-[1.65]",
        // Inline
        "[&_strong]:font-bold [&_strong]:text-swiss-ink",
        "[&_em]:italic",
        "[&_a]:underline [&_a]:decoration-swiss-ink/40 [&_a]:underline-offset-4 [&_a]:transition-colors hover:[&_a]:decoration-swiss-ink",
        // Blockquote — Swiss left-rule treatment
        "[&_blockquote]:my-8 [&_blockquote]:border-l-[3px] [&_blockquote]:border-swiss-ink [&_blockquote]:pl-6 [&_blockquote]:text-lg [&_blockquote]:leading-snug [&_blockquote]:text-swiss-ink",
        // Inline images: full-width, hard edges, 3px ink frame
        "[&_img]:my-10 [&_img]:w-full [&_img]:border-[3px] [&_img]:border-swiss-ink",
        // Code (rare but possible)
        "[&_code]:bg-swiss-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[0.9em] [&_code]:font-mono",
        "[&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:border-[3px] [&_pre]:border-swiss-ink [&_pre]:bg-swiss-muted [&_pre]:p-4 [&_pre]:text-sm",
        "[&_pre_code]:bg-transparent [&_pre_code]:p-0",
      ].join(" ")}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
