import { ThemeToggle } from "@/components/theme-toggle"

export function SiteFooter() {
  return (
    <footer className="mt-16 flex w-full items-center justify-between pt-4 pb-10 text-base/[26px] text-muted-foreground">
      <span className="text-sm/6">© 2026 Brijeshkumar Yadav. All rights reserved.</span>
      <ThemeToggle />
    </footer>
  )
}
