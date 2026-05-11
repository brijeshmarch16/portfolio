import { ExperienceSection } from "@/components/home/experience-section"
import { BlogSection } from "@/components/home/blog-section"
import { IntroSection } from "@/components/home/intro-section"
import { ProjectsSection } from "@/components/home/projects-section"
import { SectionDivider } from "@/components/home/section-divider"
import { SiteFooter } from "@/components/home/site-footer"
import { portfolio } from "@/lib/data"
import { getPublishedBlogSummaries } from "@/lib/blog"
import { createSiteJsonLd } from "@/lib/metadata"
import { SkillSection } from "@/components/home/skill-section"

export default function Home() {
  const blogPosts = getPublishedBlogSummaries()

  return (
    <main className="flex flex-col gap-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createSiteJsonLd()),
        }}
      />
      <IntroSection profile={portfolio.profile} />
      <SectionDivider />
      <SkillSection items={portfolio.skills} />
      <SectionDivider />
      <ProjectsSection projects={portfolio.projects} />
      <SectionDivider />
      <BlogSection posts={blogPosts} />
      <SectionDivider />
      <ExperienceSection experience={portfolio.experience} />
      <SectionDivider />
      <SiteFooter name={portfolio.profile.name} />
    </main>
  )
}
