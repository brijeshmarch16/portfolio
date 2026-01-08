import { GithubIcon, LinkedinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { personalInfo } from "../data/home-data";

export function HeroSection() {
  return (
    <Section className="relative flex overflow-hidden">
      <div className="relative z-10 flex w-full gap-6 sm:gap-8">
        <div className="flex flex-col">
          <Text as="h1" className="mb-2 sm:mb-3">
            Hi, I'm{" "}
            <span className="-rotate-3 inline-block bg-primary px-2 text-accent-foreground">
              {personalInfo.shortName}
            </span>{" "}
            <span className="animate-wave">👋</span>
          </Text>

          <Text as="muted" className="mb-4">
            {personalInfo.title}
          </Text>

          <div className="inline-flex gap-3">
            <Button asChild size="icon" title="GitHub">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={20} />
              </a>
            </Button>
            <Button asChild size="icon" title="LinkedIn">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon size={20} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
