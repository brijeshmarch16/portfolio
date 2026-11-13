import { ThemeToggle } from "@/components/theme-toggle"

export function SiteFooter() {
  return (
    <footer className="mt-16 flex w-full items-center justify-between pt-4 pb-10 text-[0.84rem] text-muted-foreground">
      <span>© 2026 Brijeshkumar Yadav</span>
      <ThemeToggle />
    </footer>
  )
}
