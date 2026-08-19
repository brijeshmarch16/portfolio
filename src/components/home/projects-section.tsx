import { ArrowUpRightIcon } from "lucide-react"
import type { ProjectItem } from "@/types/home"
import { Button } from "@/components/ui/button"

export function ProjectsSection({ projects }: { projects: ProjectItem[] }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xs/4 font-medium tracking-widest text-muted-foreground uppercase">
        Projects
      </h2>

      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <article className="flex flex-col gap-4" key={project.title}>
            <h3 className="text-base/6 font-semibold text-foreground">
              {project.title}
            </h3>

            <p className="text-base/7 text-foreground/80">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <Button asChild className="text-xs/4 font-medium">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                    <ArrowUpRightIcon className="size-3" aria-hidden="true" />
                  </a>
                </Button>
              )}

              {project.githubUrl && (
                <Button
                  asChild
                  variant="outline"
                  className="text-xs/4 font-medium"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <ArrowUpRightIcon className="size-3" aria-hidden="true" />
                  </a>
                </Button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
