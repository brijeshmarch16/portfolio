import { ReachOut } from "@/components/reach-out"

export function Elsewhere() {
  return (
    <section
      aria-labelledby="elsewhere-heading"
      className="mx-auto mt-18 w-full max-w-3xl px-6"
    >
      <h2
        id="elsewhere-heading"
        className="mb-5 font-mono text-xs leading-relaxed font-semibold tracking-[0.12em] text-muted-foreground uppercase"
      >
        06 / Elsewhere
      </h2>
      <ReachOut />
    </section>
  )
}
