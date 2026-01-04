import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section, SectionTitle } from "@/components/ui/section";
import { projects } from "../data/home-data";

export function ProjectsSection() {
  return (
    <Section id="projects" className="p-4">
      <SectionTitle>Featured Projects</SectionTitle>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="group flex flex-col overflow-hidden shadow-md transition-all hover:translate-y-1 hover:shadow-hard-lg"
          >
            <div className="h-40 overflow-hidden bg-muted sm:h-48">
              <div className="h-full w-full bg-linear-to-br from-accent to-primary transition-transform duration-300 group-hover:scale-110" />
            </div>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">
                {project.title}
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <div className="mb-4 flex flex-wrap gap-1.5 sm:gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-2 sm:flex-row sm:gap-3">
                <Button size="sm" asChild className="text-xs sm:text-sm">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon size={16} className="mr-1.5" />
                    GitHub
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="text-xs sm:text-sm"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLinkIcon size={16} className="mr-1.5" />
                    Website
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
