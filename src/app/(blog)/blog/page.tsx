import type { Route } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/ui/blog-card";
import { H3, Muted } from "@/components/ui/typography";
import { BlogPageShell } from "@/features/blog/components/blog-page-shell";
import { blog } from "@/lib/source";

export default async function BlogPage() {
  const posts = await blog.getPages();

  return (
    <BlogPageShell>
      <section className="px-4 text-center">
        <H3 className="text-balance text-3xl sm:text-4xl">Blog</H3>
        <Muted className="mx-auto max-w-2xl text-balance">
          A collection of articles on development, and ideas.
        </Muted>
      </section>

      <section className="grid grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-2 sm:gap-6">
        {posts
          .filter((post) => post.data.status === "published")
          .map((post) => {
            const slug = post.slugs?.[0];
            return (
              <Link
                key={slug}
                href={`/blog/${slug}` as Route<"/blog/[slug]">}
                className="block"
              >
                <BlogCard
                  image={post.data.coverImage ?? ""}
                  title={post.data.title}
                  description={post.data.description ?? ""}
                  date={post.data.publishedAt ?? ""}
                />
              </Link>
            );
          })}
        {posts.length === 0 ? (
          <div className="col-span-full text-center text-muted-foreground text-sm">
            No posts published yet. Stay tuned!
          </div>
        ) : null}
      </section>
    </BlogPageShell>
  );
}
