import { Intro } from "@/components/intro"
import { SelectedWork } from "@/components/selected-work"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"
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
        <Footer />
      </main>
    </>
  )
}
