import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <div className="flex flex-col gap-2">
        <p className="text-xs/4 font-medium text-muted-foreground uppercase">
          404
        </p>
        <h1 className="text-base/6 font-semibold text-foreground">
          This page is not here
        </h1>
        <p className="max-w-md text-sm/6 text-muted-foreground">
          It may have moved, or the link may be incorrect.
        </p>
      </div>

      <Button asChild variant="link" className="h-auto p-0 text-sm/5">
        <Link href="/">Back to home</Link>
      </Button>
    </main>
  )
}
