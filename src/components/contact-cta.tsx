"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const email = "brijeshkumaryadav2026@gmail.com"

export function ContactCta() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mt-6 text-sm/7 text-foreground sm:text-base/8">
      <p>
        Open to full-time roles and freelance projects. Let&apos;s{" "}
        <a
          href={`mailto:${email}`}
          className="font-semibold text-card-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-card-foreground"
        >
          talk
        </a>
        .{" "}
        <span className="inline-flex max-w-full items-center gap-1 rounded-full border border-border bg-secondary px-2 py-0.5 align-middle text-sm/6 text-card-foreground">
          <a className="min-w-0 break-all font-medium" href={`mailto:${email}`}>
            {email}
          </a>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon-xs"
                className="shrink-0 rounded-full"
                onClick={copyEmail}
                aria-label={copied ? "Email copied" : "Copy email address"}
              >
                {copied ? (
                  <Check aria-hidden="true" />
                ) : (
                  <Copy aria-hidden="true" />
                )}
                <span className="sr-only" aria-live="polite">
                  {copied ? "Email copied" : ""}
                </span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {copied ? "Email copied" : "Copy email address"}
            </TooltipContent>
          </Tooltip>
        </span>
      </p>
    </div>
  )
}
