const experience = [
  {
    company: "Freelance",
    role: "Full Stack Engineer",
    period: "May 2023 to present",
  },
  {
    company: "SolGuruz®",
    role: "Full Stack Engineer",
    period: "Mar 2022 to Apr 2023",
  },
  {
    company: "Emperor Brains",
    role: "Frontend Engineer",
    period: "May 2021 to Feb 2022",
  },
]

export function Experience() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="mx-auto mt-18 w-full max-w-3xl px-6"
    >
      <h2
        id="experience-heading"
        className="mb-5 font-mono text-xs leading-relaxed font-semibold tracking-[0.12em] text-muted-foreground uppercase"
      >
        05 / Experience
      </h2>

      <div>
        {experience.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="flex flex-col gap-1 border-b border-border py-4 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
          >
            <div>
              <h3 className="text-lg/6 font-semibold tracking-tight text-card-foreground">
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
