import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import MDXComponents from "@/components/mdx-component";
import { Text } from "@/components/ui/text";
import { createBlogPostingSchema } from "@/lib/json-ld";
import { createCanonical, createMetadata } from "@/lib/metadata";
import { author } from "@/lib/site-config";
import { blog } from "@/lib/source";

export async function generateStaticParams() {
  const posts = await blog.getPages();

  return posts.map((post) => ({
    slug: post.slugs?.[0] ?? "",
  }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;

  const page = await blog.getPage([slug] as string[]);

  if (!page) notFound();

  const ogImageUrl = createCanonical(
    `/og/blog/${[...page.slugs, "image.png"].join("/")}`,
  );

  return createMetadata({
    title: page.data.title,
    description: page.data.description ?? "",
    openGraph: {
      title: `${page.data.title} – ${author.fullName}`,
      url: createCanonical(page.url),
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: createCanonical(page.url),
    },
  });
}
export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = blog.getPage([slug]);

  if (!post) {
    notFound();
  }

  const postUrl = createCanonical(post.url);
  const ogImageUrl = createCanonical(
    `/og/blog/${[...post.slugs, "image.png"].join("/")}`,
  );

  const blogPostingSchema = createBlogPostingSchema(
    post.data.title,
    post.data.description ?? undefined,
    post.data.createdAt
      ? new Date(post.data.createdAt).toISOString()
      : undefined,
    post.data.updatedAt
      ? new Date(post.data.updatedAt).toISOString()
      : post.data.createdAt
        ? new Date(post.data.createdAt).toISOString()
        : undefined,
    postUrl,
    ogImageUrl,
  );

  return (
    <>
      <JsonLd schema={blogPostingSchema} />

      <header className="space-y-2 border-b px-4 pb-4">
        <Text as="h1">{post.data.title}</Text>
        {post.data.image ? (
          <Image
            src={post.data.image}
            alt={post.data.title}
            width={1000}
            height={1000}
          />
        ) : null}
        {post.data.description ? (
          <Text as="muted">{post.data.description}</Text>
        ) : null}
      </header>

      <article className="mt-4 px-4 sm:mt-8">
        <MDXComponents body={post.data.body} type="blog" />
      </article>
    </>
  );
}
