import { ThemeToggle } from "@/components/theme-toggle"

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-16 flex w-full max-w-3xl items-center justify-between px-6 pt-4 pb-10 text-[0.84rem] text-muted-foreground">
      <span>© 2026 Brijeshkumar Yadav</span>
      <ThemeToggle />
    </footer>
  )
}
