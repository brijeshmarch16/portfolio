"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { ProjectImageGroup } from "@/components/selected-work-dialog"
import { SelectedWorkDialog } from "@/components/selected-work-dialog"

type Project = {
  title: string
  description: string
  siteUrl: string | null
  imageGroups?: ProjectImageGroup[]
}

const projects: Project[] = [
  {
    title: "SpotJob",
    description:
      "Neighborhood job matching and local clearance deals platform where I built the admin web interface, backend services for the admin web and mobile app, and integrated the admin web APIs.",
    siteUrl: "https://spotjob.ai/",
  },
  {
    title: "etBri",
    description:
      "Fine and diamond jewellery e-commerce platform where I built the customer storefront and admin panel.",
    siteUrl: "https://etbri.com/",
  },
  {
    title: "ByulriLife",
    description:
      "Post-paid funeral service platform with an interactive self-quote calculator where I built the entire web application, backend APIs, and API integrations.",
    siteUrl: "https://byulrilife.com/",
  },
  {
    title: "STAY-G",
    description:
      "Hospitality asset management and OTA operations platform where I built the responsive bilingual user interface.",
    siteUrl: "https://stayg.kr/",
  },
  {
    title: "BrightEdge",
    description:
      "Solar plant monitoring and generation analysis platform where I built the complete admin web application and backend integrations.",
    siteUrl: null,
    imageGroups: [
      {
        title: "Admin Web",
        screenshots: [
          {
            src: "/brightedge/dashboard.webp",
            label: "Dashboard",
            width: 2940,
            height: 1840,
          },
          {
            src: "/brightedge/reports.webp",
            label: "Reports",
            width: 2940,
            height: 1840,
          },
          {
            src: "/brightedge/statistics.webp",
            label: "Statistics",
            width: 2940,
            height: 1840,
          },
          {
            src: "/brightedge/alert-history.webp",
            label: "Alert History",
            width: 2940,
            height: 1840,
          },
          {
            src: "/brightedge/plant-detail.webp",
            label: "Plant Detail",
            width: 2940,
            height: 1840,
          },
          {
            src: "/brightedge/inquiry-management.webp",
            label: "Inquiry Management",
            width: 2940,
            height: 1840,
          },
          {
            src: "/brightedge/account-creation.webp",
            label: "Account Creation",
            width: 2940,
            height: 1840,
          },
          {
            src: "/brightedge/plant-registration.webp",
            label: "Plant Registration",
            width: 2940,
            height: 1840,
          },
        ],
      },
    ],
  },
  {
    title: "ReactUseKit",
    description: "A collection of reusable React hooks and helpers.",
    siteUrl: "https://reactusekit.vercel.app",
  },
]

export function SelectedWork() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [activeImageGroup, setActiveImageGroup] =
    useState<ProjectImageGroup | null>(null)

  return (
    <section aria-labelledby="selected-work-heading" className="mt-18 w-full">
      <h2
        id="selected-work-heading"
        className="mb-5 text-[15px]/[18px] font-semibold text-foreground"
      >
        Selected Work
      </h2>

      {projects.map((project) => {
        return (
          <article
            key={project.title}
            className="border-b border-border py-4 last:border-0"
          >
            <div className="min-w-0">
              <h3 className="flex items-center gap-1 text-[15px]/[20px] font-medium text-card-foreground">
                {project.siteUrl ? (
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
                ) : (
                  project.title
                )}
              </h3>
              <p className="mt-0.5 text-base/[26px] text-muted-foreground">
                {project.description}
              </p>

              {project.imageGroups && (
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {project.imageGroups.map((imageGroup) => {
                    const preview = imageGroup.screenshots[0]

                    return (
                      <div key={imageGroup.title} className="min-w-0">
                        <Button
                          type="button"
                          variant="ghost"
                          className="h-auto w-full overflow-hidden rounded-sm border border-border p-0 hover:bg-transparent"
                          aria-label={`View ${project.title} ${imageGroup.title} images`}
                          onClick={() => {
                            setActiveProject(project)
                            setActiveImageGroup(imageGroup)
                          }}
                        >
                          <span className="relative block aspect-video w-full overflow-hidden bg-muted">
                            <Image
                              src={preview.src}
                              alt={`${project.title} ${imageGroup.title}`}
                              fill
                              loading="eager"
                              sizes="(max-width: 640px) 50vw, 224px"
                              className="object-cover object-top transition-transform duration-200 group-hover/button:scale-[1.02]"
                            />
                            <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent px-2 pt-6 pb-1.5 text-left text-[11px] font-medium text-white">
                              {imageGroup.title}
                            </span>
                          </span>
                        </Button>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </article>
        )
      })}

      <SelectedWorkDialog
        projectTitle={activeProject?.title ?? null}
        projectDescription={activeProject?.description ?? null}
        imageGroup={activeImageGroup}
        open={activeProject !== null && activeImageGroup !== null}
        onOpenChange={(open) => {
          if (!open) {
            setActiveProject(null)
            setActiveImageGroup(null)
          }
        }}
      />
    </section>
  )
}
