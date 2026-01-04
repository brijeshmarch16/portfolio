import { Section, SectionTitle } from "@/components/ui/section";
import { aboutMe } from "../data/home-data";

export function AboutSection() {
  return (
    <Section id="about" className="p-4">
      <SectionTitle>About Me</SectionTitle>
      <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
        {aboutMe.paragraphs[0]}
      </p>
    </Section>
  );
}
