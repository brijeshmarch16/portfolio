import { Section, SectionTitle } from "@/components/ui/section";
import { Text } from "@/components/ui/typography";
import { aboutMe } from "../data/home-data";

export function AboutSection() {
  return (
    <Section id="about" className="p-4">
      <SectionTitle>About Me</SectionTitle>
      <div className="space-y-4">
        {aboutMe.map((paragraph, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: index is used as key
          <Text key={index} className="text-muted-foreground">
            {paragraph}
          </Text>
        ))}
      </div>
    </Section>
  );
}
