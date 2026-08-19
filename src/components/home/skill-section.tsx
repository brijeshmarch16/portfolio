import type { SkillGroup } from "@/types/home"

export function SkillSection({ groups }: { groups: SkillGroup[] }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xs/4 font-medium tracking-widest text-muted-foreground uppercase">
        Skills
      </h2>

      <dl className="flex flex-col gap-6">
        {groups.map((group) => (
          <div key={group.label} className="flex flex-col gap-2.5">
            <dt className="text-base/6 font-medium text-foreground">
              {group.label}
            </dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-muted/60 px-2.5 py-1 text-sm/5 text-foreground/80 transition-colors duration-150 hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
