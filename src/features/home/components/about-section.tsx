import { Section, SectionTitle } from "@/components/ui/section";
import { Text } from "@/components/ui/typography";
import { aboutMe } from "../data/home-data";

export function AboutSection() {
  return (
    <Section id="about" className="p-4">
      <SectionTitle>About Me</SectionTitle>
      <Text className="text-muted-foreground">{aboutMe.paragraphs[0]}</Text>
    </Section>
  );
}
