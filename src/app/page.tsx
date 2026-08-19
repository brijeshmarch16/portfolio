import { Header } from "@/components/header"
import { ExperienceSection } from "@/components/home/experience-section"
import { ProjectsSection } from "@/components/home/projects-section"
import { SiteFooter } from "@/components/home/site-footer"
import { SkillSection } from "@/components/home/skill-section"
import { StorySection } from "@/components/home/story-section"
import { portfolio } from "@/lib/data"
import { createSiteJsonLd } from "@/lib/metadata"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(createSiteJsonLd()),
          }}
        />
        <StorySection story={portfolio.profile.story} />
        <ProjectsSection projects={portfolio.projects} />
        <SkillSection groups={portfolio.skills} />
        <ExperienceSection experience={portfolio.experience} />
        <SiteFooter />
      </main>
    </>
  )
}
