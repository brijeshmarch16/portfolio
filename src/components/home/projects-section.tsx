"use client"

import type { ProjectItem } from "@/types/home"
import { ArrowUpRightIcon, ImageIcon } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"
import { ProjectPreviewDialog } from "./project-preview-dialog"

type ProjectPreviewItem = ProjectItem & {
  imageUrl: string
}

export function ProjectsSection({ projects }: { projects: ProjectItem[] }) {
  const [selectedProject, setSelectedProject] =
    useState<ProjectPreviewItem | null>(null)
  return (
    <>
      <section className="flex flex-col gap-4">
        <p className="text-xs/4 font-medium text-muted-foreground uppercase">
          Projects
        </p>
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <article className="flex flex-col gap-3" key={project.title}>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm/5 font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm/6 text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {project.liveUrl && (
                  <Button
                    asChild
                    variant="ghost"
                    className="text-xs/4 font-medium"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                      <ArrowUpRightIcon className="size-3" aria-hidden="true" />
                    </a>
                  </Button>
                )}

                {project.githubUrl && (
                  <Button
                    asChild
                    variant="ghost"
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

                {project.imageUrl && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs/4 font-medium"
                    onClick={() => {
                      if (!project.imageUrl) {
                        return
                      }

                      setSelectedProject({
                        ...project,
                        imageUrl: project.imageUrl,
                      })
                    }}
                  >
                    <ImageIcon className="size-3" aria-hidden="true" />
                    Preview
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectPreviewDialog
          project={selectedProject}
          open={!!selectedProject}
          onOpenChange={(open) => {
            if (!open) {
              setSelectedProject(null)
            }
          }}
        />
      )}
    </>
  )
}
