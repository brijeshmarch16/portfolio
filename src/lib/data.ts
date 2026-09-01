import type { Portfolio } from "@/types/home"

export const portfolio = {
  site: {
    name: "brijeshkumaryadav",
    title: "Brijeshkumar Yadav - Full Stack Engineer",
    description:
      "Brijeshkumar Yadav is a Full Stack Engineer with 5+ years of experience building end-to-end web applications using React, Next.js, Node.js, NestJS, PostgreSQL and modern web technologies.",
    ogDescription: "Full Stack Engineer",
    keywords: [
      "Brijeshkumar Yadav",
      "Full Stack Engineer",
      "Full Stack Developer",
      "Full Stack Engineer India",
      "React Developer",
      "Next.js Developer",
      "TypeScript Developer",
      "Node.js Developer",
      "Freelance Full Stack Engineer",
    ],
    url: "https://brijeshkumaryadav.com",
  },
  profile: {
    name: "Brijeshkumar Yadav",
    role: "Full Stack Engineer",
    company: "Freelance",
    story: [
      "I’m a Full Stack Engineer with 5+ years of experience building products end-to-end across frontend, backend, and infrastructure.",
      "I started coding in 2020 while I was still in 12th class, learning on my own and building things from scratch. In 2021, I got my first developer job before finishing school, starting as a frontend engineer. Over time, I moved into backend development and became a full-stack engineer, working on production applications across the stack.",
      "Currently, I work as a freelancer, building products from idea to production with AI-assisted development.",
    ],
    social: [
      {
        label: "Email",
        href: "mailto:brijeshkumaryadav2026@gmail.com",
      },
      {
        label: "GitHub",
        href: "https://github.com/brijeshmarch16",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/brijeshmarch16",
      },
      {
        label: "X",
        href: "https://x.com/brijeshmarch",
        handle: "@brijeshmarch",
      },
    ],
  },
  skills: [
    {
      label: "Frontend",
      items: [
        { label: "NextJS", href: "https://nextjs.org/" },
        { label: "ReactJS", href: "https://react.dev/" },
        { label: "TypeScript", href: "https://www.typescriptlang.org/" },
        { label: "Tailwind CSS", href: "https://tailwindcss.com/" },
        { label: "shadcn/ui", href: "https://ui.shadcn.com/" },
      ],
    },
    {
      label: "Backend",
      items: [
        { label: "NodeJS", href: "https://nodejs.org/" },
        { label: "NestJS", href: "https://nestjs.com/" },
        {
          label: "SQL",
          href: "https://developer.mozilla.org/docs/Glossary/SQL",
        },
      ],
    },
    {
      label: "Data & Infrastructure",
      items: [
        { label: "PostgreSQL", href: "https://www.postgresql.org/" },
        { label: "Docker", href: "https://www.docker.com/" },
        { label: "Vercel", href: "https://vercel.com/" },
      ],
    },
    {
      label: "Tools",
      items: [
        { label: "Codex", href: "https://openai.com/codex" },
        { label: "Claude Code", href: "https://claude.com/claude-code" },
        { label: "Git", href: "https://git-scm.com/" },
        { label: "GitHub", href: "https://github.com/" },
      ],
    },
  ],
  projects: [
    {
      title: "ReactUseKit",
      description:
        "Open source collection of reusable React hooks and helpers for common frontend development tasks.",
      highlights: [
        "Built reusable React hooks and utilities to simplify common application patterns.",
        "Added support for using components directly in projects or installing them through the shadcn CLI.",
        "Built and maintained the project as an open source developer tool.",
      ],
      tech: ["React", "TypeScript", "shadcn CLI"],
      githubUrl: "https://github.com/brijeshmarch16/reactusekit",
      liveUrl: "https://reactusekit.vercel.app",
    },
  ],
  posts: [
    {
      title: "5 years as an engineer",
      description:
        "The journey from learning on my own during lockdown in 12th class to my first job, gaining confidence, and moving into freelancing.",
      href: "https://www.linkedin.com/posts/brijeshmarch16_5-years-as-an-engineer-today-i-started-activity-7465005685823676418-KOi2",
      date: "May 26, 2026",
    },
    {
      title: "This made my day",
      description:
        "A small moment of appreciation from my freelance work that meant a lot.",
      href: "https://www.linkedin.com/posts/brijeshmarch16_this-made-my-day-activity-7464511950786494464-rnpA",
      date: "May 25, 2026",
    },
    {
      title: "My first freelance gift",
      description:
        "An unexpected Diwali gift from a client, Snazzerra Apps, and a reminder that good work builds real relationships.",
      href: "https://www.linkedin.com/posts/brijeshmarch16_received-my-first-freelance-gift-from-snazzerra-share-7126881036826738688-QfWf",
      date: "Nov 5, 2023",
    },
  ],
  experience: [
    {
      title: "Full Stack Engineer",
      company: "Freelance",
      period: "May 2023 - Present",
      description: "",
      current: true,
    },
    {
      title: "Full Stack Engineer",
      company: "SolGuruz®",
      period: "Mar 2022 - Apr 2023",
      description: "",
      current: false,
    },
    {
      title: "Frontend Engineer",
      company: "Emperor Brains",
      period: "May 2021 - Feb 2022",
      description: "",
      current: false,
    },
  ],
} satisfies Portfolio
