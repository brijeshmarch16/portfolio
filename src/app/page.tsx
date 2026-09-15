import { Intro } from "@/components/intro"
import { Projects } from "@/components/projects"
import { Elsewhere } from "@/components/elsewhere"
import { Footer } from "@/components/footer"
import { createSiteJsonLd } from "@/lib/metadata"
import { portfolio } from "@/lib/data"

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
        <Intro
          about={portfolio.profile.about}
          social={portfolio.profile.social}
        />
        <Projects projects={portfolio.projects} />
        <Elsewhere social={portfolio.profile.social} />
        <Footer />
      </main>
    </>
  )
}
