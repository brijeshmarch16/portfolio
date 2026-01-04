import { Badge } from "@/components/ui/badge";
import { Section, SectionTitle } from "@/components/ui/section";
import { skillCategories } from "../data/home-data";

export function SkillsSection() {
  return (
    <Section id="skills" className="p-4">
      <SectionTitle>Skills & Technologies</SectionTitle>
      <div className="space-y-6">
        {skillCategories.map((category) => (
          <div key={category.name}>
            <h3 className="mb-3 font-bold font-head text-muted-foreground text-sm uppercase tracking-wide">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant={category.variant}>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
