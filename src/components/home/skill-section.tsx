import { ClaudeAiIcon } from "@/components/ui/svgs/claudeAiIcon"
import { Docker } from "@/components/ui/svgs/docker"
import { Git } from "@/components/ui/svgs/git"
import { Javascript } from "@/components/ui/svgs/javascript"
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark"
import { Nodejs } from "@/components/ui/svgs/nodejs"
import { Openai } from "@/components/ui/svgs/openai"
import { OpenaiDark } from "@/components/ui/svgs/openaiDark"
import { ReactDark } from "@/components/ui/svgs/reactDark"
import { ReactLight } from "@/components/ui/svgs/reactLight"
import { Reactquery } from "@/components/ui/svgs/reactquery"
import { ShadcnUi } from "@/components/ui/svgs/shadcnUi"
import { ShadcnUiDark } from "@/components/ui/svgs/shadcnUiDark"
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss"
import { Typescript } from "@/components/ui/svgs/typescript"
import type { SkillIcon, SkillItem } from "@/types/home"
import { Button } from "../ui/button"

function SkillIconGraphic({ icon }: { icon: SkillIcon }) {
  switch (icon) {
    case "nextjs":
      return <NextjsIconDark aria-hidden className="size-4" />
    case "react":
      return (
        <>
          <ReactLight aria-hidden className="size-4 dark:hidden" />
          <ReactDark aria-hidden className="hidden size-4 dark:block" />
        </>
      )
    case "typescript":
      return <Typescript aria-hidden className="size-4" />
    case "javascript":
      return <Javascript aria-hidden className="size-4" />
    case "tailwind":
      return <Tailwindcss aria-hidden className="size-4" />
    case "shadcn":
      return (
        <>
          <ShadcnUi aria-hidden className="size-4 dark:hidden" />
          <ShadcnUiDark aria-hidden className="hidden size-4 dark:block" />
        </>
      )
    case "tanstack-query":
      return <Reactquery aria-hidden className="size-4" />
    case "git":
      return <Git aria-hidden className="size-4" />
    case "nodejs":
      return <Nodejs aria-hidden className="size-4" />
    case "docker":
      return <Docker aria-hidden className="size-4" />
    case "chatgpt":
      return (
        <>
          <Openai aria-hidden className="size-4 dark:hidden" />
          <OpenaiDark aria-hidden className="hidden size-4 dark:block" />
        </>
      )
    case "claude":
      return <ClaudeAiIcon aria-hidden className="size-4" />
  }
}

export function SkillSection({ items }: { items: SkillItem[] }) {
  return (
    <section className="flex flex-col gap-4">
      <p className="text-xs/4 font-medium text-muted-foreground uppercase">
        Skills
      </p>
      <ul className="flex flex-wrap gap-x-4 gap-y-3">
        {items.map(({ label, href, icon }) => (
          <li key={label}>
            <Button asChild variant="link" className="p-0 text-sm/5" size="sm">
              <a href={href} target="_blank" rel="noopener noreferrer">
                <SkillIconGraphic icon={icon} />
                <span>{label}</span>
              </a>
            </Button>
          </li>
        ))}
      </ul>
    </section>
  )
}
