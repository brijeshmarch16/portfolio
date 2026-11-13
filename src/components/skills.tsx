const skills = [
  {
    category: "Languages",
    items: "TypeScript, JavaScript",
  },
  {
    category: "Frontend",
    items: "React, Next.js, Tailwind CSS, shadcn/ui",
  },
  {
    category: "Backend & Database",
    items: "Node.js, Express.js, NestJS, MongoDB, PostgreSQL, Redis",
  },
  {
    category: "AI & Tools",
    items: "LLM Integration, Codex, Claude Code",
  },
  {
    category: "Infrastructure & Development",
    items: "Docker, Vercel, Git, GitHub",
  },
]

export function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="mt-18 w-full">
      <h2
        id="skills-heading"
        className="mb-5 text-sm/5 font-normal text-foreground"
      >
        Skills
      </h2>

      <dl className="space-y-1">
        {skills.map((skill) => (
          <div
            key={skill.category}
            className="grid grid-cols-1 gap-1 rounded-lg py-3 min-[481px]:grid-cols-[112px_minmax(0,1fr)] min-[481px]:gap-4"
          >
            <dt className="text-sm text-muted-foreground">{skill.category}</dt>
            <dd className="m-0 text-sm/[1.8] wrap-break-word text-card-foreground">
              {skill.items}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
