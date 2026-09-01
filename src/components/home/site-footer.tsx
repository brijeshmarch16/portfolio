import { ThemeToggle } from "@/components/theme-toggle"
import { portfolio } from "@/lib/data"

export function SiteFooter() {
  return (
    <footer className="flex items-center justify-between border-t border-border pt-6 text-sm/5 text-muted-foreground">
      <p>Designed and built by {portfolio.profile.name}.</p>
      <ThemeToggle />
    </footer>
  )
}
