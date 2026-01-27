import { notFound } from "next/navigation";
import { generateOgImage } from "@/components/og-image";
import { blog } from "@/lib/source";

export const revalidate = false;

/**
 * Generates an Open Graph image for an individual blog post.
 * The route expects the last slug segment to be the image filename.
 */
export async function GET(_req: Request, { params }: RouteContext<"/og/blog/[...slug]">) {
  const { slug } = await params;
  const page = blog.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return generateOgImage({
    title: page.data.title,
    description: page.data.description ?? undefined,
  });
}

export function generateStaticParams() {
  return blog.getPages().map((page) => ({
    slug: [...page.slugs, "image.png"],
  }));
}
