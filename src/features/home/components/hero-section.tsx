import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { H1, Text } from "@/components/ui/typography";
import { personalInfo } from "../data/home-data";

export function HeroSection() {
  return (
    <Section
      id="hero"
      className="relative flex overflow-hidden p-4 py-6 sm:py-8"
    >
      {/* Animated dot pattern background */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div
          className="h-full w-full animate-pulse"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0, 0, 0, 0.15) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative z-10 flex w-full justify-between gap-6 sm:gap-8">
        <div className="flex flex-col">
          <H1 className="mb-2 sm:mb-3">
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              {personalInfo.shortName}
            </span>{" "}
            👋
          </H1>
          <Text className="mb-4 text-muted-foreground text-sm sm:text-base">
            {personalInfo.title}
          </Text>

          <div className="inline-flex gap-3">
            <Button
              asChild
              size="sm"
              className="group border-2 border-black p-2 transition-all hover:bg-primary hover:shadow-hard-lg"
              title="GitHub"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github
                  size={20}
                  className="transition-transform group-hover:scale-110"
                />
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="group border-2 border-black p-2 transition-all hover:bg-primary hover:shadow-hard-lg"
              title="LinkedIn"
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  size={20}
                  className="transition-transform group-hover:scale-110"
                />
              </a>
            </Button>
          </div>
        </div>
        <div className="flex shrink-0">
          <div className="group h-32 w-32 overflow-hidden rounded-xl border-3 border-black bg-muted shadow-md transition-transform hover:translate-y-1">
            <div className="h-full w-full bg-linear-to-br from-primary to-accent" />
          </div>
        </div>
      </div>
    </Section>
  );
}
