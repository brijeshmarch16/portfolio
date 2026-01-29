import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { personalInfo } from "@/lib/home-data";

export function HeroSection() {
  return (
    <Section className="relative flex overflow-hidden">
      <div className="relative z-10 flex w-full gap-6 sm:gap-8">
        <div className="flex flex-col">
          <Text as="h1" className="mb-2 sm:mb-3">
            Hi, I'm{" "}
            <span className="inline-block -rotate-3 bg-primary px-2 text-accent-foreground">
              {personalInfo.shortName}
            </span>{" "}
            <span className="animate-wave pl-2">👋</span>
          </Text>

          <Text as="large">{personalInfo.description}</Text>
        </div>
      </div>
    </Section>
  );
}
