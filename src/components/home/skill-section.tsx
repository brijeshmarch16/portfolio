import { Fragment } from "react"
import type { SkillGroup } from "@/types/home"

export function SkillSection({ groups }: { groups: SkillGroup[] }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xs/4 font-medium tracking-widest text-muted-foreground uppercase">
        Skills
      </h2>

      <dl className="flex flex-col gap-6">
        {groups.map((group) => (
          <div key={group.label} className="flex flex-col gap-1.5">
            <dt className="text-base/6 font-medium text-foreground">
              {group.label}
            </dt>
            <dd className="text-base/6 text-foreground/80">
              {group.items.map((item, index) => (
                <Fragment key={item.label}>
                  {index > 0 && <span aria-hidden="true"> · </span>}
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 transition-colors duration-150 hover:text-foreground hover:underline focus-visible:text-foreground focus-visible:underline"
                  >
                    {item.label}
                  </a>
                </Fragment>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
