const skills = [
  {
    category: "Language",
    items: "JavaScript, TypeScript",
  },
  {
    category: "Frontend",
    items: "React, Next.js, Tailwind CSS, shadcn/ui",
  },
  { category: "Backend", items: "Node.js, Express.js, NestJS, REST APIs" },
  { category: "Database", items: "PostgreSQL, MongoDB" },
  {
    category: "Workflow & AI",
    items: "Claude, ChatGPT, Git, GitHub, Docker, Vercel",
  },
]

export function Skills() {
  return (
    <section
      aria-labelledby="skills-heading"
      className="mx-auto mt-18 w-full max-w-3xl px-6"
    >
      <h2
        id="skills-heading"
        className="mb-5 font-mono text-xs leading-relaxed font-semibold tracking-[0.12em] text-muted-foreground uppercase"
      >
        02 / Skill
      </h2>

      <dl className="space-y-1">
        {skills.map((skill) => (
          <div
            key={skill.category}
            className="grid grid-cols-1 gap-1 rounded-lg py-3 min-[481px]:grid-cols-[112px_minmax(0,1fr)] min-[481px]:gap-4"
          >
            <dt className="text-sm text-muted-foreground">{skill.category}</dt>
            <dd className="m-0 text-[0.94rem] leading-relaxed wrap-break-word text-card-foreground">
              {skill.items}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
