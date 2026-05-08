import type { WorkExperience } from "@/types/home"

export function ExperienceSection({
  experience,
}: {
  experience: WorkExperience[]
}) {
  return (
    <section className="flex scroll-mt-8 flex-col gap-4">
      <p className="text-xs/4 font-medium text-muted-foreground uppercase">
        Experience
      </p>
      <ul className="flex flex-col gap-4">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.period}`}
            className="grid gap-1 text-sm/5 sm:grid-cols-[1fr_auto] sm:gap-6"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-semibold text-foreground">{job.title}</span>
              <span className="text-muted-foreground" aria-hidden>
                /
              </span>
              <span className="text-muted-foreground">{job.company}</span>
            </div>
            <span className="text-xs/4 text-muted-foreground sm:text-right">
              {job.period}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
