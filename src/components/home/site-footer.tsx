import { ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/social-links"
import { ThemeToggle } from "@/components/theme-toggle"
import { portfolio } from "@/lib/data"

export function SiteFooter() {
  const email = portfolio.profile.social.find((item) => item.label === "Email")

  return (
    <footer className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-base/6 font-semibold tracking-tight text-foreground">
          Have something in mind?
        </h2>

        <p className="text-base/7 text-foreground/80">
          Whether you have a product idea, need help building an application, or
          just want to talk through a project, I&apos;d like to hear from you.
        </p>

        {email && (
          <div className="flex">
            <Button asChild className="text-xs/4 font-medium">
              <a href={email.href}>
                Let&apos;s work together
                <ArrowRightIcon className="size-3" aria-hidden="true" />
              </a>
            </Button>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-4 border-t border-border pt-6 text-center text-sm/5 text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
        <p>Designed and built by {portfolio.profile.name}.</p>
        <div className="flex items-center gap-3">
          <SocialLinks
            social={portfolio.profile.social.filter(
              (item) => item.label !== "Email"
            )}
          />
          <span className="h-5 w-px bg-border" aria-hidden />
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
}
