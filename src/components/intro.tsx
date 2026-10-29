import {
  CircleCheck,
  Gauge,
  Heart,
  Layers,
  Lightbulb,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import { ContactCta } from "@/components/contact-cta"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Intro() {
  return (
    <section
      aria-labelledby="intro-heading"
      className="mx-auto max-w-3xl px-6 pt-12 sm:pt-16"
    >
      <header>
        <div className="flex items-center gap-4">
          <Avatar className="size-16">
            <AvatarImage src="/me.png" alt="Brijeshkumar Yadav" />
            <AvatarFallback>BY</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <h1
              id="intro-heading"
              className="text-[clamp(1.5rem,6vw,2rem)] leading-[1.04] font-extrabold tracking-[-0.065em] text-card-foreground"
            >
              Brijeshkumar Yadav
            </h1>
            <p className="text-base text-muted-foreground">
              Full Stack Engineer
            </p>
          </div>
        </div>

        <div className="mt-7 space-y-3 text-base/8 text-foreground sm:text-[1.04rem]/[1.85]">
          <p>
            I&apos;m a Full Stack Engineer with 5+ years of experience building
            web applications, from{" "}
            <span className="font-semibold text-portfolio-blue">
              frontend interfaces{"\u00a0"}
              <Layers
                aria-hidden="true"
                className="inline-block size-[0.82em] align-[-0.1em]"
                strokeWidth={1.8}
              />
            </span>{" "}
            to{" "}
            <span className="font-semibold text-portfolio-purple">
              backend services{"\u00a0"}
              <Server
                aria-hidden="true"
                className="inline-block size-[0.82em] align-[-0.1em]"
                strokeWidth={1.8}
              />
            </span>
            .
          </p>
          <p>
            I care about how software is built, not just whether it works. I
            prioritize{" "}
            <span className="font-semibold text-portfolio-green">
              maintainable architecture{"\u00a0"}
              <ShieldCheck
                aria-hidden="true"
                className="inline-block size-[0.82em] align-[-0.1em]"
                strokeWidth={1.8}
              />
            </span>
            ,{" "}
            <span className="font-semibold text-portfolio-pink">
              performance{"\u00a0"}
              <Gauge
                aria-hidden="true"
                className="inline-block size-[0.82em] align-[-0.1em]"
                strokeWidth={1.8}
              />
            </span>
            ,{" "}
            <span className="font-semibold text-portfolio-blue">
              reliable implementations{"\u00a0"}
              <CircleCheck
                aria-hidden="true"
                className="inline-block size-[0.82em] align-[-0.1em]"
                strokeWidth={1.8}
              />
            </span>
            , and{" "}
            <span className="font-semibold text-portfolio-amber">
              thoughtful engineering decisions{"\u00a0"}
              <Lightbulb
                aria-hidden="true"
                className="inline-block size-[0.82em] align-[-0.1em]"
                strokeWidth={1.8}
              />
            </span>
            .
          </p>
          <p>
            I use{" "}
            <span className="font-semibold text-portfolio-purple">
              agentic coding{"\u00a0"}
              <Sparkles
                aria-hidden="true"
                className="inline-block size-[0.82em] align-[-0.1em]"
                strokeWidth={1.8}
              />
            </span>{" "}
            to accelerate implementation while{" "}
            <span className="font-semibold text-portfolio-pink">
              taking ownership{"\u00a0"}
              <Heart
                aria-hidden="true"
                className="inline-block size-[0.82em] align-[-0.1em]"
                strokeWidth={1.8}
              />
            </span>{" "}
            of technical decisions, code quality, and the software I deliver.
          </p>
        </div>
        <ContactCta />
      </header>

      <section aria-labelledby="journey-heading" className="mt-16 sm:mt-18">
        <h2
          id="journey-heading"
          className="mb-5 font-mono text-xs leading-relaxed font-semibold tracking-[0.12em] text-muted-foreground uppercase"
        >
          01 / How I started my coding journey
        </h2>
        <div className="space-y-3.5 text-base/7">
          <p>
            Back in 2020, when schools closed during COVID, I started learning
            to code.
          </p>
          <p>
            I had no roadmap, no bootcamp, and no degree. I started with YouTube
            tutorials and learned by building things, making mistakes, and
            figuring things out along the way.
          </p>
          <p>
            In 2021, before finishing school, I landed my first job as a{" "}
            Frontend Engineer.
          </p>
          <p>
            Over time, I moved into backend development and grew into a Full
            Stack Engineer.
          </p>
          <p>Now, I&apos;m continuing to build, learn, and explore.</p>
        </div>
      </section>
    </section>
  )
}
