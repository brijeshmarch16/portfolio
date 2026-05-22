import { Mail } from "lucide-react"
import type { Profile } from "@/types/home"
import { Button } from "../ui/button"
import { GithubDark } from "../ui/svgs/githubDark"
import { GithubLight } from "../ui/svgs/githubLight"
import { Linkedin } from "../ui/svgs/linkedin"
import { X } from "../ui/svgs/x"
import { XDark } from "../ui/svgs/xDark"

function SocialIcon({ label }: { label: string }) {
  switch (label) {
    case "GitHub":
      return (
        <>
          <GithubLight aria-hidden className="size-4 dark:hidden" />
          <GithubDark aria-hidden className="hidden size-4 dark:block" />
        </>
      )
    case "X":
      return (
        <>
          <X aria-hidden className="size-4 dark:hidden" />
          <XDark aria-hidden className="hidden size-4 dark:block" />
        </>
      )
    case "LinkedIn":
      return <Linkedin aria-hidden className="size-4" />
    case "Email":
      return <Mail aria-hidden className="size-4" />
    default:
      return null
  }
}

export function IntroSection({ profile }: { profile: Profile }) {
  const { social } = profile

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 text-muted-foreground">
        <p className="text-justify text-sm/6 font-medium">{profile.bio}</p>
        <p className="text-justify text-sm/6 font-medium">{profile.journey}</p>
      </div>

      <div className="flex gap-2">
        {social.map((item) => (
          <Button key={item.label} asChild variant="outline" size="icon">
            <a
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={item.label}
            >
              <SocialIcon label={item.label} />
            </a>
          </Button>
        ))}
      </div>
    </section>
  )
}
