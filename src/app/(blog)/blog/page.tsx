import type { Metadata, Route } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/ui/blog-card";
import { Text } from "@/components/ui/text";
import { createCanonical, createMetadata } from "@/lib/metadata";
import { author } from "@/lib/site-config";
import { blog } from "@/lib/source";

export async function generateMetadata(): Promise<Metadata> {
  const blogUrl = createCanonical("/blog");
  const ogImageUrl = createCanonical("/og/blog");

  return createMetadata({
    title: "Blog",
    description: "A collection of articles on development, and ideas.",
    alternates: {
      canonical: blogUrl,
    },
    openGraph: {
      title: `Blog – ${author.fullName}`,
      url: blogUrl,
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    },
  });
}

export default async function BlogPage() {
  const posts = await blog.getPages();

  return (
    <>
      <section className="px-4 text-center">
        <Text as="h1">Blog</Text>
        <Text as="muted">
          A collection of articles on development, and ideas.
        </Text>
      </section>

      <section className="grid auto-rows-fr grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-2 sm:gap-6">
        {posts.map((post) => {
          const slug = post.slugs?.[0];
          return (
            <Link
              key={slug}
              href={`/blog/${slug}` as Route<"/blog/[slug]">}
              className="block h-full"
            >
              <BlogCard
                image={post.data.image ?? ""}
                title={post.data.title}
                date={post.data.createdAt ?? ""}
                description={post.data.description ?? ""}
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
    </>
  );
}
