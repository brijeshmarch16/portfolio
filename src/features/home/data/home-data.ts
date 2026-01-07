import type { Stack } from "../types";
import { author, socialLinks } from "@/lib/site-config";

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

export const projects = [
  {
    title: "Project One",
    description: "A modern web application for managing tasks",
    image: "/images/projects/project-one.jpg",
    techStack: ["Next.js", "TypeScript", "Prisma"],
    githubUrl: "https://github.com/yourusername/project-one",
    liveUrl: "https://project-one.demo.com",
    metrics: { users: "10K+", performance: "95" },
  },
  {
    title: "Project Two",
    description: "An AI-powered content generator",
    image: "/images/projects/project-two.jpg",
    techStack: ["React", "Python", "OpenAI"],
    githubUrl: "https://github.com/yourusername/project-two",
    liveUrl: "https://project-two.demo.com",
    metrics: { stars: "500+", performance: "98" },
  },
];

export const contactInfo = {
  title: "Let's work together",
  description:
    "I'm always open to discussing new projects, creative ideas, or opportunities.",
  message:
    "Feel free to reach out if you want to collaborate on a project, need help with something, or just want to connect. I'll do my best to respond promptly!",
};

export const blogPosts = [
  {
    id: "blog-one",
    title: "Getting Started with Next.js 15",
    description: "Learn the basics of Next.js and build your first project",
    image: "/images/blog/blog-one.jpg",
    date: "2024-01-15",
  },
  {
    id: "blog-two",
    title: "React Performance Optimization Tips",
    description: "Best practices for optimizing your React applications",
    image: "/images/blog/blog-two.jpg",
    date: "2024-01-10",
  },
  {
    id: "blog-three",
    title: "Building Scalable Web Applications",
    description:
      "Strategies for creating applications that grow with your users",
    image: "/images/blog/blog-three.jpg",
    date: "2024-01-05",
  },
  {
    id: "blog-four",
    title: "Building Scalable Web Applications",
    description:
      "Strategies for creating applications that grow with your users",
    image: "/images/blog/blog-three.jpg",
    date: "2024-01-05",
  },
  {
    id: "blog-five",
    title: "Building Scalable Web Applications",
    description:
      "Strategies for creating applications that grow with your users",
    image: "/images/blog/blog-three.jpg",
    date: "2024-01-05",
  },
];
