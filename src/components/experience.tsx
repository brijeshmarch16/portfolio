const experience = [
  {
    company: "Freelance",
    role: "Full Stack Engineer",
    period: "May 2023 — Present",
  },
  {
    company: "SolGuruz®",
    role: "Full Stack Engineer",
    period: "Mar 2022 — Apr 2023",
  },
  {
    company: "Emperor Brains",
    role: "Frontend Engineer",
    period: "May 2021 — Feb 2022",
  },
]

export function Experience() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="flex flex-col gap-4"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h2 id="experience-heading" className="text-base font-medium">
          Experience
        </h2>
        <p className="text-sm text-muted-foreground">5+ years</p>
      </div>

      <div>
        {experience.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="flex flex-col gap-1 py-2 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
          >
            <div>
              <h3 className="text-lg/relaxed font-medium">{item.company}</h3>
              <p className="text-base/relaxed text-muted-foreground">
                {item.role}
              </p>
            </div>
            <p className="text-sm text-muted-foreground sm:shrink-0">
              {item.period}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
