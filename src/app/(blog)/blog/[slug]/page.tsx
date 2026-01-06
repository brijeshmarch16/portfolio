import { notFound } from "next/navigation";
import MDX from "@/components/MDX";
import { H3, Muted } from "@/components/ui/typography";
import { BlogPageShell } from "@/features/blog/components/blog-page-shell";
import { blog } from "@/lib/source";

interface BlogPostPageParams {
  slug: string;
}

export function generateStaticParams(): Array<BlogPostPageParams> {
  const posts = blog
    .getPages()
    .filter((post) => post.data.status === "published");

  return posts.map((post) => ({
    slug: post.path,
  }));
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = blog.getPage([slug]);

  if (!post) {
    notFound();
  }

  return (
    <BlogPageShell>
      <header className="space-y-3 px-4">
        <H3>{post.data.title}</H3>
        {post.data.description ? <Muted>{post.data.description}</Muted> : null}
      </header>

      <article className="prose dark:prose-invert max-w-none px-4">
        <MDX body={post.data.body} type="blog" />
      </article>
    </BlogPageShell>
  );
}
