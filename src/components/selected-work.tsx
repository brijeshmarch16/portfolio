import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "ReactUseKit",
    description: "A collection of reusable React hooks and helpers.",
    siteUrl: "https://reactusekit.vercel.app",
  },
]

export function SelectedWork() {
  return (
    <section aria-labelledby="selected-work-heading" className="mt-18 w-full">
      <h2
        id="selected-work-heading"
        className="mb-5 text-base/6 font-medium text-foreground"
      >
        Selected Work
      </h2>

      {projects.map((project) => (
        <article
          key={project.title}
          className="border-b border-border py-4 last:border-0"
        >
          <div className="min-w-0">
            <h3 className="flex items-center gap-1 text-base/[1.6] font-medium text-card-foreground">
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {project.title}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 shrink-0 -translate-y-0.5"
                  strokeWidth={1.4}
                />
              </a>
            </h3>
            <p className="mt-0.5 text-base/[1.6] text-muted-foreground">
              {project.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  )
}
