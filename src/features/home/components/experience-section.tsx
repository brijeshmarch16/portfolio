import { BriefcaseIcon } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section, SectionTitle } from "@/components/ui/section";
import { workExperience } from "../data/home-data";

export function ExperienceSection() {
  return (
    <Section id="experience" className="p-4">
      <SectionTitle>Work Experience</SectionTitle>
      <div className="space-y-3 sm:space-y-4">
        {workExperience.map((job) => (
          <Card key={job.company} className="shadow-md hover:translate-y-1">
            <CardHeader>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border-2 border-border bg-accent">
                    <BriefcaseIcon size={20} className="text-accent-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg sm:text-xl">
                      {job.title}
                    </CardTitle>
                    <CardDescription>{job.company}</CardDescription>
                  </div>
                </div>
                <span className="whitespace-nowrap text-muted-foreground text-xs sm:text-sm">
                  {job.period}
                </span>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}
