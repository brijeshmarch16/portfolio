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

            {project.highlights && project.highlights.length > 0 && (
              <ul className="flex list-disc flex-col gap-2 pl-5 text-base/7 text-foreground/80">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {project.tech && project.tech.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 text-sm text-foreground/75">
                <span className="font-medium text-foreground/90">Tech:</span>
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-muted/60 px-2.5 py-1 text-sm/5 text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <Button asChild size="xs" className="text-xs/4 font-medium">
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
                  size="xs"
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
