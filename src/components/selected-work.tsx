import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "ReactUseKit",
    description: "A collection of reusable React hooks and helpers",
    liveUrl: "https://reactusekit.vercel.app",
  },
]

export function SelectedWork() {
  return (
    <section
      aria-labelledby="selected-work-heading"
      className="mx-auto mt-18 w-full max-w-3xl px-6"
    >
      <h2
        id="selected-work-heading"
        className="mb-5 font-mono text-xs leading-relaxed font-semibold tracking-[0.12em] text-muted-foreground uppercase"
      >
        04 / Selected work
      </h2>

      {projects.map((project) => (
        <a
          key={project.title}
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-4 border-b border-border py-4 no-underline last:border-0 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <div className="min-w-0">
            <h3 className="text-lg/6 font-semibold tracking-tight text-card-foreground">
              {project.title}
            </h3>
            <p className="mt-0.5 text-sm/6 text-muted-foreground">
              {project.description}
            </p>
          </div>
          <ArrowUpRight
            aria-hidden="true"
            className="size-5 shrink-0 text-muted-foreground"
          />
        </a>
      ))}
    </section>
  )
}
