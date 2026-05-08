import type { Portfolio } from "@/types/home"

export const portfolio = {
  site: {
    name: "brijeshkumaryadav",
    title: "Brijeshkumar Yadav - Frontend Engineer",
    description:
      "I'm a freelance frontend engineer based in India. I build fast, pixel-perfect web apps and care deeply about performance, clean code, and thoughtful user experience.",
    ogDescription: "Frontend Engineer / React / Next.js / TypeScript",
    keywords: [
      "Brijeshkumar Yadav",
      "Frontend Engineer",
      "Frontend Developer India",
      "React Developer",
      "Next.js Developer",
      "TypeScript Developer",
      "Freelance Frontend Engineer",
    ],
    url: "https://brijeshkumaryadav.com",
  },
  profile: {
    name: "Brijeshkumar Yadav",
    role: "Frontend Engineer",
    company: "Freelance",
    location: "India",
    bio: "I'm a self-taught frontend engineer with 5 years of experience, from learning during lockdown to working with companies and freelance clients. I build clean, responsive, and practical web experiences with React, Next.js, and TypeScript.",
  },
  experience: [
    {
      title: "Frontend Engineer",
      company: "Freelance",
      period: "May 2023 - Present",
      current: true,
    },
    {
      title: "Full Stack Engineer",
      company: "SolGuruz®",
      period: "Mar 2022 - Apr 2023",
      current: false,
    },
    {
      title: "Frontend Engineer",
      company: "Emperor Brains",
      period: "May 2021 - Feb 2022",
      current: false,
    },
  ],
  techStack: [
    {
      label: "Next.js",
      href: "https://nextjs.org/",
      icon: "nextjs",
    },
    {
      label: "React.js",
      href: "https://react.dev/",
      icon: "react",
    },
    {
      label: "TypeScript",
      href: "https://www.typescriptlang.org/",
      icon: "typescript",
    },
    {
      label: "JavaScript",
      href: "https://developer.mozilla.org/docs/Web/JavaScript",
      icon: "javascript",
    },
    {
      label: "Tailwind CSS",
      href: "https://tailwindcss.com/",
      icon: "tailwind",
    },
    {
      label: "shadcn/ui",
      href: "https://ui.shadcn.com/",
      icon: "shadcn",
    },
    {
      label: "TanStack Query",
      href: "https://tanstack.com/query/latest",
      icon: "tanstack-query",
    },
    {
      label: "Git",
      href: "https://git-scm.com/",
      icon: "git",
    },
    {
      label: "Node.js",
      href: "https://nodejs.org/",
      icon: "nodejs",
    },
    {
      label: "Docker",
      href: "https://www.docker.com/",
      icon: "docker",
    },
    {
      label: "ChatGPT",
      href: "https://chatgpt.com/",
      icon: "chatgpt",
    },
    {
      label: "Claude",
      href: "https://claude.ai/",
      icon: "claude",
    },
  ],
  social: {
    email: {
      label: "Email",
      href: "mailto:brijeshkumaryadav2026@gmail.com",
    },
    github: {
      label: "GitHub",
      href: "https://github.com/brijeshmarch16",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://linkedin.com/in/brijeshmarch16",
    },
    x: {
      label: "X",
      href: "https://x.com/brijeshmarch",
      handle: "@brijeshmarch",
    },
  },
  projects: [
    {
      kind: "live",
      title: "AI Interview",
      description:
        "Open-source AI voice interview platform. Paste a job description, send candidates a link, and get back a full scorecard automatically.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "better-auth",
        "ChatGPT AI",
        "Retell AI",
        "Drizzle",
        "PostgreSQL",
      ],
      githubUrl: "https://github.com/brijeshmarch16/ai-interview",
      liveUrl: "https://ai-interview.brijeshkumaryadav.com",
    },
    {
      kind: "live",
      title: "ReactUseKit",
      description:
        "React Hooks & Helpers Collection — copy, paste, or install with the shadcn CLI.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "fumadocs",
        "shadcn CLI",
      ],
      githubUrl: "https://github.com/brijeshmarch16/reactusekit",
      liveUrl: "https://reactusekit.vercel.app",
    },
    // {
    //   kind: "preview",
    //   title: "Demo Dashboard",
    //   description: "Internal analytics dashboard built for a fintech startup",
    //   techStack: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
    //   imageUrl: "/projects/demo-dashboard.svg",
    // },
  ],
} satisfies Portfolio
