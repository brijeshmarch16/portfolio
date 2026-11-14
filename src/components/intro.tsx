import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Intro() {
  return (
    <section aria-labelledby="intro-heading" className="w-full">
      <header>
        <div className="flex items-center gap-4">
          <Avatar className="size-16">
            <AvatarImage src="/me.png" alt="Brijeshkumar Yadav" />
            <AvatarFallback>BY</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <h1
              id="intro-heading"
              className="text-[20px]/[26px] font-bold tracking-[-0.02em]"
            >
              Brijeshkumar Yadav
            </h1>
            <p className="text-[15px]/[20px] font-medium text-muted-foreground">
              Full Stack Engineer
            </p>
          </div>
        </div>
      </header>

      <section aria-labelledby="about-heading" className="mt-10">
        <h2
          id="about-heading"
          className="mb-4 text-[15px]/[18px] font-semibold text-foreground"
        >
          About
        </h2>
        <p className="text-base/[26px] text-muted-foreground">
          I care about how software is built, not just whether it works. I
          prioritize maintainable architecture, performance, and reliable
          implementations from frontend interfaces to backend services.
        </p>
      </section>
    </section>
  )
}
