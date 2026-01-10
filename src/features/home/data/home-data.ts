import { author, socialLinks } from "@/lib/site-config";
import type { Project, Stack } from "../types";

export const personalInfo = {
  shortName: author.shortName,
  fullName: author.fullName,
  title: author.title,
  role: author.role,
  email: author.email,
  github: socialLinks.github,
  linkedin: socialLinks.linkedin,
  heroImage: author.heroImage,
};

export const aboutMe = [
  "I'm Brijeshkumar Yadav, a frontend engineer based in India. I specialize in building modern web applications using Next.js, React, and TypeScript.",
  "My journey in web development started in 2020 when I began learning HTML, CSS, and JavaScript. Through consistent practice and building projects, I landed my first developer role in 2021, even before completing my 12th grade.",
  "Today, I work with technologies like Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui to create efficient and user-friendly applications. I'm currently available for freelance projects and always open to new opportunities.",
];

export const stack: Array<Omit<Stack, "iconPath">> = [
  { name: "JavaScript", key: "javascript" },
  { name: "TypeScript", key: "typescript" },
  { name: "Node.js", key: "nodejs" },
  { name: "React.js", key: "react" },
  { name: "React Router", key: "react-router", hasThemedIcon: true },
  { name: "Next.js", key: "nextjs", hasThemedIcon: true },
  { name: "Tailwind CSS", key: "tailwindcss" },
  { name: "shadcn/ui", key: "shadcn-ui", hasThemedIcon: true },
  { name: "Zustand", key: "zustand" },
  { name: "Redux Toolkit", key: "redux" },
  { name: "TanStack Query", key: "tanstack-query", hasThemedIcon: true },
  { name: "HTML5", key: "html5" },
  { name: "CSS3", key: "css3" },
  { name: "Git", key: "git" },
  { name: "Vercel", key: "vercel", hasThemedIcon: true },
  { name: "Docker", key: "docker" },
];

export const workExperience = [
  {
    title: "Frontend Engineer",
    company: "Self Employed",
    period: "May 2023 - Present",
    current: true,
    description: [],
  },
  {
    title: "Full Stack Engineer",
    company: "SolGuruz®",
    period: "Mar 2022 - Apr 2023",
    current: false,
    description: [],
  },
  {
    title: "Frontend Engineer",
    company: "Emperor Brains",
    period: "May 2021 - Feb 2022",
    current: false,
    description: [],
  },
];

export const projects: Project[] = [
  {
    title: "My Portfolio",
    description: "A minimal, pixel-perfect dev portfolio and blog.",
    image: "/projects/portfolio.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    githubUrl: "https://github.com/brijeshmarch16/portfolio",
    liveUrl: "https://brijeshmarch16.vercel.app",
  },
];

export const contactInfo = {
  title: "Let's work together",
  description:
    "I'm always open to discussing new projects, creative ideas, or opportunities.",
  message:
    "Feel free to reach out if you want to collaborate on a project, need help with something, or just want to connect. I'll do my best to respond promptly!",
};
