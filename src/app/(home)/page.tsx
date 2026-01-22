import { AboutSection } from "@/features/home/components/about-section";
import { BlogSection } from "@/features/home/components/blog-section";
import { ContactSection } from "@/features/home/components/contact-section";
import { ExperienceSection } from "@/features/home/components/experience-section";
import { HeroSection } from "@/features/home/components/hero-section";
import { ProjectsSection } from "@/features/home/components/projects-section";
import { StackSection } from "@/features/home/components/stack-section";
import { TestimonialsSection } from "@/features/home/components/testimonials-section";

export default async function Home() {
  return (
    <main className="mx-auto max-w-2xl pt-24 sm:pt-28">
      <HeroSection />
      <AboutSection />
      <StackSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
