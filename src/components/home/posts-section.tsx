import { ArrowUpRightIcon } from "lucide-react"
import type { PostItem } from "@/types/home"

export function PostsSection({ posts }: { posts: PostItem[] }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xs/4 font-medium tracking-widest text-muted-foreground uppercase">
        Posts
      </h2>

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <article key={post.href} className="flex flex-col gap-1.5">
            <h3 className="text-base/6 font-semibold text-foreground">
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline-offset-4 hover:underline"
              >
                {post.title}
                <ArrowUpRightIcon className="size-3.5" aria-hidden="true" />
              </a>
            </h3>

            <p className="text-base/7 text-foreground/80">{post.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
