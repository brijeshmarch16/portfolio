import { ArrowUpRight } from "lucide-react"

export function Elsewhere() {
  return (
    <section aria-labelledby="elsewhere-heading" className="mt-18 w-full">
      <h2
        id="elsewhere-heading"
        className="mb-5 text-base/6 font-medium text-foreground"
      >
        Elsewhere
      </h2>
      <dl className="space-y-1">
        <div className="grid grid-cols-1 gap-1 py-3 min-[481px]:grid-cols-[112px_minmax(0,1fr)] min-[481px]:gap-4">
          <dt className="text-sm/6 text-muted-foreground">X</dt>
          <dd className="m-0 text-base/[1.6] text-foreground">
            <a
              className="inline-flex items-center gap-1 underline-offset-4 hover:underline"
              href="https://x.com/brijeshmarch"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://x.com/brijeshmarch
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 shrink-0 -translate-y-0.5"
                strokeWidth={1.4}
              />
            </a>
          </dd>
        </div>
        <div className="grid grid-cols-1 gap-1 py-3 min-[481px]:grid-cols-[112px_minmax(0,1fr)] min-[481px]:gap-4">
          <dt className="text-sm/6 text-muted-foreground">LinkedIn</dt>
          <dd className="m-0 text-base/[1.6] text-foreground">
            <a
              className="inline-flex items-center gap-1 underline-offset-4 hover:underline"
              href="https://www.linkedin.com/in/brijeshmarch16"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/brijeshmarch16
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 shrink-0 -translate-y-0.5"
                strokeWidth={1.4}
              />
            </a>
          </dd>
        </div>
        <div className="grid grid-cols-1 gap-1 py-3 min-[481px]:grid-cols-[112px_minmax(0,1fr)] min-[481px]:gap-4">
          <dt className="text-sm/6 text-muted-foreground">GitHub</dt>
          <dd className="m-0 text-base/[1.6] text-foreground">
            <a
              className="inline-flex items-center gap-1 underline-offset-4 hover:underline"
              href="https://github.com/brijeshmarch16"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/brijeshmarch16
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 shrink-0 -translate-y-0.5"
                strokeWidth={1.4}
              />
            </a>
          </dd>
        </div>
        <div className="grid grid-cols-1 gap-1 py-3 min-[481px]:grid-cols-[112px_minmax(0,1fr)] min-[481px]:gap-4">
          <dt className="text-sm/6 text-muted-foreground">Email</dt>
          <dd className="m-0 text-base/[1.6] text-foreground">
            <a
              className="inline-flex max-w-full items-center gap-1 break-all underline-offset-4 hover:underline"
              href="mailto:brijeshkumaryadav2026@gmail.com"
            >
              brijeshkumaryadav2026@gmail.com
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 shrink-0 -translate-y-0.5"
                strokeWidth={1.4}
              />
            </a>
          </dd>
        </div>
      </dl>
    </section>
  )
}
