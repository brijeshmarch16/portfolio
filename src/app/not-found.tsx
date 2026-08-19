import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <p className="text-xs/4 font-medium tracking-widest text-muted-foreground uppercase">
        404
      </p>
      <h1 className="text-base/6 font-semibold text-foreground">
        This page is not here
      </h1>
      <Link
        href="/"
        className="text-sm/5 text-muted-foreground underline-offset-4 transition-colors duration-150 hover:text-foreground hover:underline focus-visible:text-foreground focus-visible:underline"
      >
        Back to home
      </Link>
    </main>
  )
}
