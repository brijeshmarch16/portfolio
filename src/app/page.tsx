import { Intro } from "@/components/intro"
import { SelectedWork } from "@/components/selected-work"
import { Experience } from "@/components/experience"
import { SiteFooter } from "@/components/site-footer"
import { createSiteJsonLd } from "@/lib/metadata"

export default function Home() {
  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createSiteJsonLd()),
        }}
      />
      <Intro />
      <SelectedWork />
      <Experience />
      <SiteFooter />
    </main>
  )
}
