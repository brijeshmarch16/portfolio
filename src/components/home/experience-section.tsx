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
            className="flex flex-col gap-1 text-sm/5"
          >
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-semibold text-foreground">{job.title}</span>
              <span className="text-xs/4 text-muted-foreground">
                {job.period}
              </span>
            </div>
            <span className="text-muted-foreground">{job.company}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
