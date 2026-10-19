"use client"

import { useState } from "react"
import { Check, Mail } from "lucide-react"

import { GithubDark } from "@/components/ui/svgs/githubDark"
import { GithubLight } from "@/components/ui/svgs/githubLight"
import { InstagramIcon } from "@/components/ui/svgs/instagramIcon"
import { Linkedin } from "@/components/ui/svgs/linkedin"
import { X } from "@/components/ui/svgs/x"
import { XDark } from "@/components/ui/svgs/xDark"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const social = [
  { label: "Email", href: "mailto:brijeshkumaryadav2026@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/brijeshmarch16" },
  { label: "X", href: "https://x.com/brijeshmarch", handle: "@brijeshmarch" },
  { label: "GitHub", href: "https://github.com/brijeshmarch16" },
]

function Icon({ label }: { label: string }) {
  switch (label) {
    case "LinkedIn":
      return <Linkedin aria-hidden className="size-4" />
    case "X":
      return (
        <>
          <X aria-hidden className="size-4 dark:hidden" />
          <XDark aria-hidden className="hidden size-4 dark:block" />
        </>
      )
    case "Instagram":
      return <InstagramIcon aria-hidden className="size-4" />
    case "GitHub":
      return (
        <>
          <GithubLight aria-hidden className="size-4 dark:hidden" />
          <GithubDark aria-hidden className="hidden size-4 dark:block" />
        </>
      )
    default:
      return null
  }
}

export function ReachOut() {
  const [copied, setCopied] = useState(false)
  const email = social
    .find((item) => item.label === "Email")
    ?.href.replace("mailto:", "")

  async function copyEmail() {
    if (!email) return
    await navigator.clipboard.writeText(email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <nav
      aria-label="Social links"
      className="mt-7 flex flex-wrap items-center gap-2"
    >
      {social.map((item) =>
        item.label === "Email" ? (
          <Tooltip key={item.label}>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon-lg"
                onClick={copyEmail}
                aria-label={copied ? "Email copied" : "Copy email address"}
              >
                {copied ? (
                  <Check aria-hidden className="size-4" />
                ) : (
                  <Mail aria-hidden className="size-4" />
                )}
                <span className="sr-only" aria-live="polite">
                  {copied ? "Email copied" : ""}
                </span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {copied ? "Email copied" : "Click to copy email"}
            </TooltipContent>
          </Tooltip>
        ) : (
          <Tooltip key={item.label}>
            <TooltipTrigger asChild>
              <Button asChild variant="outline" size="icon-lg">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  <Icon label={item.label} />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>{item.label}</TooltipContent>
          </Tooltip>
        )
      )}
    </nav>
  )
}
