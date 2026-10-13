export const metadata = {
  title: "About Brijeshkumar Yadav - Full Stack Engineer in India",
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-10">
      <section className="flex flex-col gap-6">
        <header>
          <h1 className="text-xl font-bold">Hi, I&apos;m Brijeshkumar</h1>
        </header>

        <div className="flex flex-col gap-4 text-lg/relaxed">
          <p>
            A full stack engineer based in India. I build products where every
            detail matters.
          </p>
          <p>
            In 2020, when schools closed during COVID, I started learning to
            code through YouTube.
          </p>
          <p>
            I didn&apos;t have a roadmap, a bootcamp, or a clear plan for my
            future. I just kept learning, building things, making mistakes, and
            improving little by little.
          </p>
          <p>
            In 2021, before finishing school, I got my first job as a{" "}
            <strong className="font-semibold">Frontend Engineer</strong>.
          </p>
          <p>
            What started as a way to spend my time became the beginning of my
            career.
          </p>
          <p className="font-semibold text-foreground">
            Now, I&apos;m still learning, building, and exploring.
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
