import Link from "next/link"
import { portfolio } from "@/lib/data"

export function Header() {
  return (
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
  )
}
