import { marketingPages } from "@/components/marketing-document";
import type { Post, PostWithBody } from "@/lib/posts";

const fallbackRoute = "/blog/2026-05-15-bulk-payouts-explained/";
export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}
function date(value: string) {
  return new Date(`${value}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}
function cover(post: Post) {
  const existing = marketingPages[`/blog/${post.slug}/`];
  if (existing?.cover) return existing.cover;
  return `<img src="${escapeHtml(post.coverImage)}" alt="${escapeHtml(post.coverAlt)}" style="width:100%;height:auto;display:block" />`;
}
function slots(template: string, values: Record<string, string>) {
  return template.replace(/\{\{([A-Z]+)\}\}/g, (match, key) => values[key] ?? match);
}
export function blogIndexBody(posts: Post[]) {
  const cards = posts.map((post, i) => `<a class="${i === 0 ? "journal-feature" : "post-card"}" href="/blog/${encodeURIComponent(post.slug)}/">${cover(post)}<div class="${i === 0 ? "journal-feature-copy" : "post-card-copy"}"><div class="post-meta"><span>${escapeHtml(post.tags[0] || "Riff")}</span><time datetime="${escapeHtml(post.publishedAt)}">${escapeHtml(date(post.publishedAt))}</time></div><h2>${escapeHtml(post.title)}</h2><p>${escapeHtml(post.excerpt)}</p><span class="page-link">Read the article</span></div></a>`);
  const content = cards.length ? `${cards[0]}<div class="post-grid">${cards.slice(1).join("")}</div>` : "<p>No articles yet.</p>";
  return slots(marketingPages["/blog/"].template!, { POSTS: content });
}
export function blogPostBody(post: PostWithBody, next: Post | null) {
  let i = 0;
  const headings: { id: string; label: string }[] = [];
  const prose = post.bodyHtml.replace(/<h2>([\s\S]*?)<\/h2>/g, (_, label: string) => {
    const id = `section-${i++}`;
    headings.push({ id, label });
    return `<h2 id="${id}">${label}</h2>`;
  });
  const nextLink = next && next.slug !== post.slug ? `<a class="post-next" href="/blog/${encodeURIComponent(next.slug)}/"><span>Keep reading</span><strong>${escapeHtml(next.title)}</strong></a>` : "";
  const template = (marketingPages[`/blog/${post.slug}/`] || marketingPages[fallbackRoute]).template!;
  return slots(template, {
    TITLE: escapeHtml(post.title), EXCERPT: escapeHtml(post.excerpt), DATE: escapeHtml(date(post.publishedAt)), AUTHOR: `By ${escapeHtml(post.author)}`,
    TAG: escapeHtml(post.tags[0] || "Riff"), COVER: cover(post),
    TOC: `<strong>In this article</strong>${headings.map(({ id, label }) => `<a href="#${id}">${label}</a>`).join("")}`,
    PROSE: prose + nextLink,
  });
}
