import { SocialLinks } from "@/components/social-links"
import { ThemeToggle } from "@/components/theme-toggle"
import { portfolio } from "@/lib/data"

export function SiteFooter() {
  return (
    <footer className="flex flex-col items-center gap-4 text-center text-xs/4 text-muted-foreground">
      <p>Designed and built by {portfolio.profile.name}.</p>
      <div className="flex items-center gap-3">
        <SocialLinks social={portfolio.profile.social} />
        <span className="h-5 w-px bg-border" aria-hidden />
        <ThemeToggle />
      </div>
    </footer>
  )
}
