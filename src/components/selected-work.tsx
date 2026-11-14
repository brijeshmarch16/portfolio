import { ArrowUpRight } from "lucide-react"

const projects = [
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
  },
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
            <p className="mt-0.5 text-base/[1.6] text-muted-foreground">
              {project.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  )
}
