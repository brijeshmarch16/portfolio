import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { personalInfo } from "../data/home-data";

export function HeroSection() {
  return (
    <Section id="hero" className="flex p-4 py-6 sm:py-8">
      <div className="flex w-full justify-between gap-6 sm:gap-8">
        <div>
          <h1 className="mb-2 font-bold font-heading text-3xl leading-tight sm:mb-3 sm:text-5xl">
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              {personalInfo.shortName}
            </span>{" "}
            👋
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
            {personalInfo.title}
          </p>
          <div className="inline-flex gap-3 py-4">
            <Button
              asChild
              size="sm"
              className="border-2 border-black p-2 transition-all hover:bg-primary hover:shadow-md"
              title="GitHub"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="border-2 border-black p-2 transition-all hover:bg-primary hover:shadow-md"
              title="LinkedIn"
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </Button>
          </div>
        </div>
        <div className="flex shrink-0">
          <div className="hover:-translate-y-1 h-32 w-32 overflow-hidden rounded-xl border-3 border-black bg-muted shadow-md transition-transform hover:shadow-lg">
            <div className="h-full w-full bg-linear-to-br from-primary to-accent" />
          </div>
        </div>
      </div>
    </Section>
  );
}
