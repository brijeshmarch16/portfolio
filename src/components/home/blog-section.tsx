import type { Route } from "next"
import Link from "next/link"
import type { BlogPostSummary } from "@/types/blog"

export function BlogSection({ posts }: { posts: BlogPostSummary[] }) {
  if (posts.length === 0) {
    return null
  }

  return (
    <section className="flex flex-col gap-4">
      <p className="text-xs/4 font-medium text-muted-foreground uppercase">
        Writing
      </p>

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link
              href={post.href as Route}
              className="group inline-flex w-full min-w-0 flex-col items-start gap-1 text-sm/5 outline-none transition-colors duration-150 hover:text-foreground focus-visible:text-foreground focus-visible:ring-1 focus-visible:ring-ring/50 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
            >
              <span className="min-w-0 text-foreground underline-offset-4 group-hover:underline">
                {post.title}
              </span>
              <time
                dateTime={post.publishedAt}
                className="shrink-0 text-xs/4 text-muted-foreground transition-colors duration-150 group-hover:text-foreground sm:text-right"
              >
                {post.formattedPublishedAt}
              </time>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
