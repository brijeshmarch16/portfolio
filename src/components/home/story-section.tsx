import { Mail } from "lucide-react"

import { GithubDark } from "@/components/ui/svgs/githubDark"
import { GithubLight } from "@/components/ui/svgs/githubLight"
import { Linkedin } from "@/components/ui/svgs/linkedin"
import type { SocialLink } from "@/types/home"

function InlineSocialIcon({ label }: { label: string }) {
  switch (label) {
    case "LinkedIn":
      return <Linkedin aria-hidden className="size-3.5" />
    case "Email":
      return <Mail aria-hidden className="size-3.5" />
    case "GitHub":
      return (
        <>
          <GithubLight aria-hidden className="size-3.5 dark:hidden" />
          <GithubDark aria-hidden className="hidden size-3.5 dark:block" />
        </>
      )
    default:
      return null
  }
}

export function StorySection({
  story,
  social,
}: {
  story: string[]
  social: SocialLink[]
}) {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-xs/4 font-medium tracking-widest text-muted-foreground uppercase">
        About me
      </h2>
      <div className="flex flex-col gap-4 text-base/7 text-foreground/80">
        {story.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-base/7 text-foreground/80">
          You can reach me on{" "}
          <a
            href={social.find((item) => item.label === "LinkedIn")?.href ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-foreground"
          >
            <InlineSocialIcon label="LinkedIn" />
            <span>LinkedIn</span>
          </a>
          , via{" "}
          <a
            href={social.find((item) => item.label === "Email")?.href ?? "#"}
            className="inline-flex items-center gap-1 font-medium underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-foreground"
          >
            <InlineSocialIcon label="Email" />
            <span>email</span>
          </a>
          , or check out my code on{" "}
          <a
            href={social.find((item) => item.label === "GitHub")?.href ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-foreground"
          >
            <InlineSocialIcon label="GitHub" />
            <span>GitHub</span>
          </a>
          .
        </p>
      </div>
    </section>
  )
}
