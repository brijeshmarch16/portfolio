import { ReachOut } from "@/components/reach-out"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Intro() {
  return (
    <section
      aria-labelledby="intro-heading"
      className="mx-auto max-w-3xl px-6 pt-20 md:pt-28"
    >
      <header className="flex items-center gap-5">
        <Avatar className="size-16 shrink-0 sm:size-20">
          <AvatarImage src="/me.png" alt="Brijeshkumar Yadav" />
          <AvatarFallback>BY</AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <h1
            id="intro-heading"
            className="text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Brijeshkumar Yadav
          </h1>
          <div className="text-sm text-muted-foreground sm:text-base">
            Full Stack Engineer
          </div>
        </div>
      </header>

      <div className="mt-5 sm:mt-10">
        <div className="space-y-2 text-base/7 text-muted-foreground sm:text-lg/8">
          <p>
            I&apos;m a Full Stack Engineer with 5+ years of experience working
            across the stack, from frontend to backend, focused on reliable
            engineering and thoughtful solutions.
          </p>
          <p>
            I use AI to accelerate implementation while taking ownership of
            technical decisions and the quality of what I build.
          </p>
        </div>

        <h2 className="mt-8 text-lg/7 font-medium tracking-tight text-foreground">
          💻 How I got here
        </h2>
        <div className="mt-2 space-y-2 text-base/7 text-muted-foreground sm:text-lg/8">
          <p>
            Back in 2020, during COVID, I started learning to code through
            YouTube tutorials.
          </p>
          <p>
            In 2021, before finishing school, I landed my first job as a
            Frontend Engineer. Over time, I moved into backend development and
            grew into a Full Stack Engineer.
          </p>
          <p>Now I&apos;m continuing to build, learn, and explore.</p>
        </div>
      </div>

      <ReachOut />
    </section>
  )
}
