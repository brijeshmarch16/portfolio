import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section, SectionTitle } from "@/components/ui/section";
import { projects } from "../data/home-data";

export function ProjectsSection() {
  return (
    <Section>
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="group flex flex-col overflow-hidden transition-all duration-200 hover:translate-y-1"
          >
            <div className="relative h-40 overflow-hidden bg-muted sm:h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <Card.Header>
              <Card.Title>{project.title}</Card.Title>
              <Card.Description>{project.description}</Card.Description>
            </Card.Header>

            <Card.Content className="flex flex-1 flex-col">
              <div className="mb-4 flex flex-wrap gap-1.5 sm:gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="solid" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-2 sm:flex-row sm:gap-3">
                <Button size="sm" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon size={16} className="mr-1.5" />
                    GitHub
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
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
            </Card.Content>
          </Card>
        ))}
      </div>
    </Section>
  );
}
