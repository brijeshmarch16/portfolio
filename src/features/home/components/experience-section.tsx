import { BriefcaseIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Section, SectionTitle } from "@/components/ui/section";
import { workExperience } from "../data/home-data";

export function ExperienceSection() {
  return (
    <Section>
      <SectionTitle>Work Experience</SectionTitle>
      <div className="space-y-3 sm:space-y-4">
        {workExperience.map((job) => (
          <Card
            key={job.company}
            className="transition-all duration-200 hover:-translate-y-1"
          >
            <Card.Header>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border-2 border-border bg-primary">
                    <BriefcaseIcon
                      size={20}
                      className="text-accent-foreground"
                    />
                  </div>
                  <div>
                    <Card.Title className="mb-0">{job.title}</Card.Title>
                    <Card.Description>{job.company}</Card.Description>
                  </div>
                </div>
                <Card.Description>{job.period}</Card.Description>
              </div>
            </Card.Header>
          </Card>
        ))}
      </div>
    </Section>
  );
}
