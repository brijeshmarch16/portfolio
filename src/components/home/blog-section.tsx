import type { Route } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { Section, SectionTitle } from "@/components/ui/section";
import { blog } from "@/lib/source";

export async function BlogSection() {
  const posts = await blog.getPages();
  const displayedPosts = posts.slice(0, 4);
  const hasMorePosts = posts.length > 4;

  return (
    <Section>
      <SectionTitle>Latest Articles</SectionTitle>
      <div className="flex gap-4 sm:grid-cols-2 sm:gap-6">
        {displayedPosts.map((post) => {
          const slug = post.slugs?.[0];
          return (
            <Link key={slug} href={`/blog/${slug}` as Route<"/blog/[slug]">}>
              <BlogCard title={post.data.title} description={post.data.description ?? ""} />
            </Link>
          );
        })}
      </div>
      {hasMorePosts && (
        <div className="mt-6 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      )}
    </Section>
  );
}
