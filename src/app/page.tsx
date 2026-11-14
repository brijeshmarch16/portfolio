import { Intro } from "@/components/intro"
import { Skills } from "@/components/skills"
import { Testimonials } from "@/components/testimonials"
import { SelectedWork } from "@/components/selected-work"
import { Experience } from "@/components/experience"
import { Elsewhere } from "@/components/elsewhere"
import { SiteFooter } from "@/components/site-footer"
import { createSiteJsonLd } from "@/lib/metadata"

export default function Home() {
  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createSiteJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
      <Intro />
      <SelectedWork />
      <Experience />
      <Skills />
      <Testimonials />
      <Elsewhere />
      <SiteFooter />
    </main>
  )
}
