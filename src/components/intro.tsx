import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Intro() {
  return (
    <section aria-labelledby="intro-heading" className="w-full">
      <header>
        <div className="flex items-center gap-4">
          <Avatar className="size-24">
            <AvatarImage src="/me.png" alt="Brijeshkumar Yadav" />
            <AvatarFallback>BY</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <h1 id="intro-heading" className="text-xl/[1.3] font-normal">
              Brijeshkumar Yadav
            </h1>
            <p className="text-sm text-muted-foreground">Full Stack Engineer</p>
          </div>
        </div>
      </header>

      <section aria-labelledby="about-heading" className="mt-10">
        <h2
          id="about-heading"
          className="mb-4 text-sm/5 font-normal text-foreground"
        >
          About
        </h2>
        <p className="text-sm/[1.8] text-muted-foreground">
          I care about how software is built, not just whether it works. I
          prioritize maintainable architecture, performance, and reliable
          implementations from frontend interfaces to backend services.
        </p>
      </section>
    </section>
  )
}
