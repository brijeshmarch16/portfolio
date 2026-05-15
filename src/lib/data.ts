import type { Portfolio } from "@/types/home"

export const portfolio = {
  site: {
    name: "brijeshkumaryadav",
    title: "Brijeshkumar Yadav - Frontend Engineer",
    description:
      "I'm Brijeshkumar Yadav, a self-taught frontend engineer based in India with 5 years of experience. I specialize in building modern web applications using Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui.",
    ogDescription: "Frontend Engineer",
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
    bio: "I'm Brijeshkumar Yadav, a self-taught frontend engineer based in India with 5 years of experience. I specialize in building modern web applications using Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui.",
    journey:
      "My journey began during COVID, when I started learning on my own. With consistent practice, hard work, and real projects, I landed my first developer role in 2021, even before completing 12th grade.",
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
  },
  skills: [
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
} satisfies Portfolio
