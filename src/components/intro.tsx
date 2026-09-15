import { Mail } from "lucide-react"
import Link from "next/link"

import { GithubDark } from "@/components/ui/svgs/githubDark"
import { GithubLight } from "@/components/ui/svgs/githubLight"
import { InstagramIcon } from "@/components/ui/svgs/instagramIcon"
import { Linkedin } from "@/components/ui/svgs/linkedin"
import { portfolio } from "@/lib/data"
import type { SocialLink } from "@/types/home"

function InlineSocialIcon({ label }: { label: string }) {
  switch (label) {
    case "LinkedIn":
      return <Linkedin aria-hidden className="size-3.5" />
    case "Instagram":
      return <InstagramIcon aria-hidden className="size-3.5" />
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

function SocialLinkInline({
  label,
  text,
  social,
  external = false,
}: {
  label: string
  text: string
  social: SocialLink[]
  external?: boolean
}) {
  const href = social.find((item) => item.label === label)?.href ?? "#"

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex items-center gap-1 font-medium underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-foreground"
    >
      <InlineSocialIcon label={label} />
      <span>{text}</span>
    </a>
  )
}

export function Intro({
  about,
  social,
}: {
  about: string[]
  social: SocialLink[]
}) {
  return (
    <section className="flex flex-col gap-8">
      <header className="flex flex-col">
        <h1 className="text-2xl/8 font-semibold tracking-tight text-foreground">
          <Link
            href="/"
            aria-label={`${portfolio.profile.name} — go to homepage`}
          >
            {portfolio.profile.name}
          </Link>
        </h1>
        <p className="text-sm/5 font-medium text-muted-foreground">
          {portfolio.profile.role}
        </p>
      </header>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4 text-base/7 text-foreground/80">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <p className="text-base/7 text-foreground/80">
          You can reach me on{" "}
          <SocialLinkInline
            label="LinkedIn"
            text="LinkedIn"
            social={social}
            external
          />
          , via <SocialLinkInline label="Email" text="email" social={social} />,
          or check out my code on{" "}
          <SocialLinkInline
            label="GitHub"
            text="GitHub"
            social={social}
            external
          />
          .
        </p>
      </div>
    </section>
  )
}
