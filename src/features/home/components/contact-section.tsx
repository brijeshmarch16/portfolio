import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section, SectionTitle } from "@/components/ui/section";
import { contactInfo, personalInfo } from "../data/home-data";

export function ContactSection() {
  return (
    <Section>
      <SectionTitle>Get in Touch</SectionTitle>
      <Card>
        <Card.Header>
          <Card.Title>{contactInfo.title}</Card.Title>
          <Card.Description>{contactInfo.description}</Card.Description>
        </Card.Header>
        <Card.Content>
          <Card.Description className="mb-4 leading-relaxed sm:mb-6">
            {contactInfo.message}
          </Card.Description>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
            <Button asChild className="flex-1">
              <a href={`mailto:${personalInfo.email}`}>
                <MailIcon size={20} className="mr-2" />
                Send Email
              </a>
            </Button>
            <Button variant="secondary" asChild className="flex-1">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon size={20} className="mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="secondary" asChild className="flex-1">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon size={20} className="mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Section>
  );
}
