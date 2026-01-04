import { AboutSection } from "@/features/home/components/about-section";
import { BlogSection } from "@/features/home/components/blog-section";
import { ContactSection } from "@/features/home/components/contact-section";
import { ExperienceSection } from "@/features/home/components/experience-section";
import { HeroSection } from "@/features/home/components/hero-section";
import { ProjectsSection } from "@/features/home/components/projects-section";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl pt-20 sm:pt-24">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
