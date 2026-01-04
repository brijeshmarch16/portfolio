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
          <Card key={job.company} className="hover:-translate-y-1 shadow-md">
            <CardHeader>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <CardTitle className="text-lg sm:text-xl">
                    {job.title}
                  </CardTitle>
                  <CardDescription>{job.company}</CardDescription>
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
