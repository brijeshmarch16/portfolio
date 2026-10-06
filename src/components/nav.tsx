"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { Route } from "next"
import type { LucideIcon } from "lucide-react"
import { House, UserRound } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

type Destination = {
  href: Route
  label: string
  Icon: LucideIcon
}

const destinations: Destination[] = [
  { href: "/", label: "Home", Icon: House },
  { href: "/about", label: "About me", Icon: UserRound },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Main navigation"
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full bg-muted p-1 shadow-md"
    >
      <div className="relative flex rounded-full p-1">
        <span
          aria-hidden="true"
          className={`absolute inset-y-1 left-1 w-10 rounded-full bg-white shadow-sm transition-transform duration-200 ${
            pathname === "/about" ? "translate-x-full" : "translate-x-0"
          }`}
        />
        {destinations.map(({ href, label, Icon }) => {
          const isCurrent = pathname === href

          return (
            <Button
              key={href}
              asChild
              variant="link"
              size="icon-lg"
              className={`relative z-10 h-9 w-10 rounded-full ${
                isCurrent ? "text-black" : "text-muted-foreground"
              }`}
            >
              <Link
                href={href}
                aria-label={label}
                aria-current={isCurrent ? "page" : undefined}
              >
                <Icon aria-hidden="true" className="size-4" />
              </Link>
            </Button>
          )
        })}
      </div>
      <span aria-hidden="true" className="mx-1 h-5 w-px bg-border" />
      <ThemeToggle />
    </nav>
  )
}
