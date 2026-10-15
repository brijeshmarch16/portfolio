import { Intro } from "@/components/intro"
import { SelectedWork } from "@/components/selected-work"
import { Experience } from "@/components/experience"
import { createSiteJsonLd } from "@/lib/metadata"

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(createSiteJsonLd()),
          }}
        />
        <Intro />
        <SelectedWork />
        <Experience />
        <footer className="mx-auto w-fit max-w-full pt-6 text-center">
          <p className="text-lg/relaxed text-foreground italic">
            &quot;You have control over your actions, not their results.&quot;
          </p>
          <p className="mt-2 text-right text-sm text-muted-foreground">
            — Bhagavad Gita
          </p>
        </footer>
      </main>
    </>
  )
}
