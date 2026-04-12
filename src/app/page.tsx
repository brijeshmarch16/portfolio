import { ArrowUpRightIcon } from "lucide-react";
import { ProjectItem } from "@/components/project-item";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { aboutMe, projects, skills, socialMedia, workExperience } from "@/lib/data";
import { parseBold } from "@/lib/utils";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl space-y-10 px-4 py-20">
      {/* Name + role */}
      <header className="space-y-1">
        <h1 className="font-bold text-base leading-tight">{aboutMe.name}</h1>
        <p className="text-muted-foreground text-sm">{aboutMe.role}</p>
      </header>

      {/* Bio */}
      <section className="space-y-3">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {parseBold(aboutMe.bio).map((part) =>
            part.bold ? (
              <span key={part.text} className="font-medium text-foreground">
                {part.text}
              </span>
            ) : (
              part.text
            ),
          )}
        </p>
      </section>

      {/* Skills */}
      <section>
        <p className="mb-4 font-medium text-muted-foreground text-xs uppercase tracking-widest">
          Skills
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map(({ name, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border bg-muted px-2 py-0.5 text-foreground text-xs transition-colors hover:bg-accent"
            >
              {name}
            </a>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <p className="mb-4 font-medium text-muted-foreground text-xs uppercase tracking-widest">
          Projects
        </p>
        <ul className="list-disc space-y-4 pl-5">
          {projects.map((project) => (
            <ProjectItem key={project.title} project={project} />
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section>
        <p className="mb-4 font-medium text-muted-foreground text-xs uppercase tracking-widest">
          Experience
        </p>
        <ul className="space-y-4">
          {workExperience.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="flex items-start justify-between gap-4"
            >
              <div className="space-y-0.5">
                <p className="font-medium text-sm">{job.title}</p>
                <p className="text-muted-foreground text-sm">{job.company}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-muted-foreground text-xs">{job.period}</p>
                {job.current && (
                  <span className="font-medium text-foreground text-xs">Current</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Connect */}
      <section>
        <p className="mb-4 font-medium text-muted-foreground text-xs uppercase tracking-widest">
          Connect
        </p>
        <p className="mb-4 text-muted-foreground text-sm">
          Feel free to reach me at{" "}
          <a
            href={`mailto:${aboutMe.email}`}
            className="font-medium text-foreground underline underline-offset-2 transition-colors hover:text-muted-foreground"
          >
            {aboutMe.email}
          </a>
        </p>
        <div className="flex flex-wrap gap-2">
          {socialMedia.map(({ label, href }) => (
            <Button key={label} size="sm" variant="outline" asChild>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
                <ArrowUpRightIcon size={12} />
              </a>
            </Button>
          ))}
        </div>
      </section>

      {/* Footer — theme toggle */}
      <footer className="flex items-center justify-between border-border border-t pt-4">
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} {aboutMe.name}. All rights reserved.
        </p>
        <ThemeToggle />
      </footer>
    </main>
  );
}
