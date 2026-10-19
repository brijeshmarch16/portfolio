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
      className="mx-auto max-w-4xl px-6 pt-24"
    >
      <h2
        id="experience-heading"
        className="mb-6 font-mono text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase"
      >
        Experience
      </h2>

      <div>
        {experience.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="flex flex-col gap-1 border-b border-border py-4 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
          >
            <div>
              <h3 className="text-lg/6 font-semibold tracking-tight">
                {item.company}
              </h3>
              <p className="mt-0.5 text-sm/6 text-muted-foreground">
                {item.role}
              </p>
            </div>
            <p className="font-mono text-xs text-muted-foreground sm:shrink-0">
              {item.period}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
