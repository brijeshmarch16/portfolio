import { ArrowUpRight } from "lucide-react"

type ExperienceItem = {
  role: string
  employer?: string
  employerUrl?: string
  location: string
  period: string
}

const experience: ExperienceItem[] = [
  {
    role: "Freelance Full Stack Engineer",
    location: "Remote",
    period: "May 2023 – Present",
  },
  {
    role: "Full Stack Engineer",
    employer: "SolGuruz",
    employerUrl: "https://solguruz.com/",
    location: "Remote",
    period: "March 2022 – April 2023",
  },
  {
    role: "Frontend Engineer",
    employer: "Emperor Brains",
    employerUrl: "https://www.emperorbrains.com/",
    location: "Remote",
    period: "May 2021 – February 2022",
  },
]

export function Experience() {
  return (
    <section aria-labelledby="experience-heading" className="mt-12 w-full">
      <h2
        id="experience-heading"
        className="mb-5 text-[15px]/[18px] font-semibold text-foreground"
      >
        Work Experience
      </h2>

      <div>
        {experience.map((item) => (
          <article
            key={`${item.role}-${item.period}`}
            className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] sm:gap-8 sm:py-5"
          >
            <p className="text-sm/[18px] font-medium text-muted-foreground sm:pt-0.5">
              {item.period}
            </p>
            <div>
              <h3 className="font-sans text-[15px]/[20px] font-medium">
                {item.employerUrl && item.employer ? (
                  <a
                    href={item.employerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  >
                    {item.role} at {item.employer}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-3.5 shrink-0 -translate-y-0.5"
                      strokeWidth={1.4}
                    />
                  </a>
                ) : (
                  item.role
                )}
              </h3>
              <p className="mt-0.5 text-[15px]/[20px] text-muted-foreground">
                {item.location}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
