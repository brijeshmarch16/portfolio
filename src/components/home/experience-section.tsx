import type { WorkExperience } from "@/types/home"

export function ExperienceSection({
  experience,
}: {
  experience: WorkExperience[]
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xs/4 font-medium tracking-widest text-muted-foreground uppercase">
        Experience
      </h2>
      <ul className="flex flex-col gap-8">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.period}`}
            className="flex flex-col gap-1.5 text-sm/5"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-base/6 font-semibold text-foreground">
                  {job.title}
                </h3>
                <span className="text-muted-foreground">{job.company}</span>
              </div>
              <span className="shrink-0 text-xs/4 text-muted-foreground">
                {job.period}
              </span>
            </div>
            <p className="mt-1 text-base/7 text-foreground/80">
              {job.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
