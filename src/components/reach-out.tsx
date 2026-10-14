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
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { SocialLink } from "@/lib/social"

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

export function ReachOut({ social }: { social: SocialLink[] }) {
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
    <div className="flex flex-wrap items-center gap-1">
      <p className="text-lg">Reach out to me via</p>
      <TooltipProvider>
        <div className="flex items-center gap-1">
          {email && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="rounded-full text-muted-foreground hover:text-foreground"
                  onClick={copyEmail}
                  aria-label={copied ? "Email copied" : "Copy email address"}
                >
                  {copied ? (
                    <Check aria-hidden className="size-4" />
                  ) : (
                    <Mail aria-hidden className="size-4" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>Click to copy email</TooltipContent>
            </Tooltip>
          )}
          {social
            .filter((item) => item.label !== "Email")
            .map((item) => (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="rounded-full text-muted-foreground hover:text-foreground"
                  >
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
            ))}
        </div>
      </TooltipProvider>
    </div>
  )
}
