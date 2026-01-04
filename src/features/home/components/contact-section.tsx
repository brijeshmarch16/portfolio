import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section, SectionTitle } from "@/components/ui/section";
import { contactInfo, personalInfo } from "../data/home-data";

export function ContactSection() {
  return (
    <Section id="contact" className="p-4 pb-8 sm:pb-12">
      <SectionTitle>Get in Touch</SectionTitle>
      <Card className="hover:-translate-y-1 max-w-2xl shadow-md">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">
            {contactInfo.title}
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            {contactInfo.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm leading-relaxed sm:mb-6 sm:text-base">
            {contactInfo.message}
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
            <Button asChild className="flex-1">
              <a href={`mailto:${personalInfo.email}`}>
                <Mail size={20} className="mr-2" />
                Send Email
              </a>
            </Button>
            <Button variant="secondary" asChild className="flex-1">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="secondary" asChild className="flex-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} className="mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
