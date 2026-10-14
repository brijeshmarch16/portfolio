import { ReachOut } from "@/components/reach-out"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const summary = [
  "I'm a Full Stack Engineer who builds products end to end.",
  "I have 5+ years of experience working across the stack, from frontend to backend, with a focus on reliable engineering and thoughtful solutions.",
  "I use AI to explore solutions and accelerate implementation while taking ownership of technical decisions and the quality of what ships.",
]

const highlightedPhrases = [
  "Full Stack Engineer",
  "end to end",
  "5+ years of experience",
  "frontend to backend",
  "reliable engineering and thoughtful solutions.",
  "use AI",
  "technical decisions",
  "quality of what ships.",
]

const social = [
  { label: "Email", href: "mailto:brijeshkumaryadav2026@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/brijeshmarch16" },
  { label: "X", href: "https://x.com/brijeshmarch", handle: "@brijeshmarch" },
  { label: "GitHub", href: "https://github.com/brijeshmarch16" },
]

function AboutParagraph({ text }: { text: string }) {
  const pattern = new RegExp(`(${highlightedPhrases.join("|")})`, "gi")

  return text.split(pattern).map((part, index) => {
    const isHighlighted = highlightedPhrases.some(
      (phrase) => phrase.toLowerCase() === part.toLowerCase()
    )

    return isHighlighted ? (
      <strong
        className="font-semibold text-foreground"
        key={`${part}-${index}`}
      >
        {part}
      </strong>
    ) : (
      part
    )
  })
}

export function Intro() {
  return (
    <section className="flex flex-col gap-4">
      <header className="flex items-center gap-3">
        <Avatar className="size-14">
          <AvatarImage src="/me.png" alt="Brijeshkumar Yadav" />
          <AvatarFallback>BY</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Brijeshkumar Yadav</h1>
          <p className="text-base text-muted-foreground">Full Stack Engineer</p>
        </div>
      </header>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          {summary.map((paragraph) => (
            <p className="text-lg/relaxed" key={paragraph}>
              <AboutParagraph text={paragraph} />
            </p>
          ))}
        </div>

        <ReachOut social={social} />
      </div>
    </section>
  )
}
