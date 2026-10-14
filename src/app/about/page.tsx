import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/metadata"

export const metadata: Metadata = createPageMetadata(
  {
    title: "About Brijeshkumar Yadav | Full Stack Engineer",
    description:
      "Hi, I'm Brijeshkumar. I'm a Full Stack Engineer who builds products end to end. Back in 2020, when schools closed during COVID, I started learning to code. In 2021, before finishing school, I landed my first job as a Frontend Engineer.",
  },
  "/about"
)

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-10">
      <section className="flex flex-col gap-6">
        <header>
          <h1 className="text-xl font-bold">Hi, I&apos;m Brijeshkumar</h1>
        </header>

        <div className="flex flex-col gap-4 text-lg/relaxed">
          <p>
            I&apos;m a Full Stack Engineer who builds products end to end.
          </p>
          <p>
            Back in 2020, when schools closed during COVID, I started learning to
            code.
          </p>
          <p>
            I had no roadmap, no bootcamp, and no degree. I started with YouTube
            tutorials and learned by building things, making mistakes, and
            figuring things out along the way.
          </p>
          <p>What began as curiosity slowly became something bigger.</p>
          <p>
            In 2021, before finishing school, I landed my first job as a{" "}
            <strong className="font-semibold">Frontend Engineer</strong>.
          </p>
          <p>
            Over time, I moved into backend development and grew into a{" "}
            <strong className="font-semibold">Full Stack Engineer</strong>.
          </p>
          <p className="font-semibold text-foreground">
            Now, I&apos;m continuing to build, learn, and explore.
          </p>
        </div>
      </section>
      <footer className="mx-auto w-fit max-w-full pt-6 text-center">
        <p className="text-lg/relaxed text-foreground italic">
          &quot;Lift yourself through your own effort; never let yourself fall.&quot;
        </p>
        <p className="mt-2 text-right text-sm text-muted-foreground">
          — Bhagavad Gita
        </p>
      </footer>
    </main>
  )
}
