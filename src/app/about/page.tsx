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
            I was born in{" "}
            <strong className="font-semibold">Uttar Pradesh</strong> and moved
            to <strong className="font-semibold">Gujarat</strong>, where I
            started my schooling.
          </p>
          <p>
            During the <strong className="font-semibold">COVID pandemic</strong>
            , schools shut down and I suddenly had a lot of time at home. I
            didn&apos;t have a clear plan for what to do next, but I wanted to
            learn something. That&apos;s when I discovered{" "}
            <strong className="font-semibold">coding through YouTube</strong>.
          </p>
          <p>
            I started learning from home, following tutorials, writing code, and
            slowly building things on my own. There was no degree, bootcamp, or
            structured roadmap — just YouTube, curiosity, and a lot of time
            spent figuring things out.
          </p>
          <p>
            In 2021, before finishing school, I landed my first job as a{" "}
            <strong className="font-semibold">Frontend Engineer</strong>.
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
