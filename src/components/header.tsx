import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { portfolio } from "@/lib/data"

export function Header() {
  return (
    <header className="flex items-center justify-between gap-4">
      <Link href="/" aria-label="Go to homepage">
        <div className="flex flex-col">
          <span className="text-base/6 font-semibold text-foreground">
            {portfolio.profile.name}
          </span>
          <span className="text-xs/5 font-medium text-muted-foreground">
            {portfolio.profile.role}
          </span>
        </div>
      </Link>
      <ThemeToggle />
    </header>
  )
}
