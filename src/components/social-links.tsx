import { Mail } from "lucide-react"
import type { SocialLink } from "@/types/home"
import { Button } from "@/components/ui/button"
import { GithubDark } from "@/components/ui/svgs/githubDark"
import { GithubLight } from "@/components/ui/svgs/githubLight"
import { Linkedin } from "@/components/ui/svgs/linkedin"
import { X } from "@/components/ui/svgs/x"
import { XDark } from "@/components/ui/svgs/xDark"

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

export function SocialLinks({ social }: { social: SocialLink[] }) {
  return (
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
  )
}
