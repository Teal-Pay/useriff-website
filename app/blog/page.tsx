import { MarketingDocument, pageMetadata } from "@/components/marketing-document";
import { getAllPosts } from "@/lib/posts";
import { blogIndexBody } from "@/lib/blog-design";

export const metadata = pageMetadata("/blog/");
export default function BlogPage({ searchParams }: { searchParams?: { tag?: string } }) {
  const posts = getAllPosts().filter((post) => !searchParams?.tag || post.tags.includes(searchParams.tag));
  return <MarketingDocument route="/blog/" body={blogIndexBody(posts)} />;
}
