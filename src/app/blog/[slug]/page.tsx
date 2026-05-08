import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Script from "next/script"
import { MdxContent } from "@/components/blog/mdx-content"
import { SectionDivider } from "@/components/home/section-divider"
import { SiteFooter } from "@/components/home/site-footer"
import { getPublishedBlogPost, getPublishedBlogStaticParams } from "@/lib/blog"
import { portfolio } from "@/lib/data"
import { createBlogPostJsonLd, createBlogPostMetadata } from "@/lib/metadata"

type BlogDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return getPublishedBlogStaticParams()
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPublishedBlogPost(slug)

  if (!post) {
    return {}
  }

  return createBlogPostMetadata(post)
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const post = getPublishedBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="flex flex-col gap-6">
      <Script
        id={`blog-post-json-ld-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createBlogPostJsonLd(post)),
        }}
      />

      <section className="flex flex-col">
        <h1 className="font-heading text-base/6 font-semibold text-balance text-foreground">
          {post.title}
        </h1>

        <article className="mdx-content">
          <MdxContent source={post.content} />
        </article>
      </section>

      <SectionDivider />
      <SiteFooter name={portfolio.profile.name} />
    </main>
  )
}
