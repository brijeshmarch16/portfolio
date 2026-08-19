import type { Portfolio } from "@/types/home"

export const portfolio = {
  site: {
    name: "brijeshkumaryadav",
    title: "Brijeshkumar Yadav - Full Stack Developer",
    description:
      "I'm Brijeshkumar Yadav, a full stack developer based in India. I started with frontend development and gradually moved into the full stack, building products end to end with Next.js, React, TypeScript, Node.js, and PostgreSQL.",
    ogDescription: "Full Stack Developer",
    keywords: [
      "Brijeshkumar Yadav",
      "Full Stack Developer",
      "Full Stack Developer India",
      "React Developer",
      "Next.js Developer",
      "TypeScript Developer",
      "Node.js Developer",
      "Freelance Full Stack Developer",
    ],
    url: "https://brijeshkumaryadav.com",
  },
  profile: {
    name: "Brijeshkumar Yadav",
    role: "Senior Full Stack Engineer",
    company: "Freelance",
    intro:
      "I'm Brijeshkumar, a developer who started with frontend development and gradually moved into the full stack. I enjoy turning ideas and problems into simple, reliable digital products.",
    story: [
      "I'm a full-stack engineer who builds products from idea to reality.",
      "I started coding in 2020 while I was still in 12th class, learning on my own and building things from scratch. In 2021, I got my first developer job before finishing school. After gaining experience working with companies, I moved into freelancing. Today, I work directly with clients and build products from frontend to backend.",
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
        { label: "Next.js", href: "https://nextjs.org/" },
        { label: "React", href: "https://react.dev/" },
        { label: "TypeScript", href: "https://www.typescriptlang.org/" },
        {
          label: "JavaScript",
          href: "https://developer.mozilla.org/docs/Web/JavaScript",
        },
        { label: "Tailwind CSS", href: "https://tailwindcss.com/" },
        { label: "shadcn/ui", href: "https://ui.shadcn.com/" },
        { label: "TanStack Query", href: "https://tanstack.com/query/latest" },
      ],
    },
    {
      label: "Backend",
      items: [
        { label: "Node.js", href: "https://nodejs.org/" },
        { label: "Express.js", href: "https://expressjs.com/" },
        { label: "NestJS", href: "https://nestjs.com/" },
        {
          label: "REST APIs",
          href: "https://developer.mozilla.org/docs/Glossary/REST",
        },
        { label: "Better Auth", href: "https://www.better-auth.com/" },
      ],
    },
    {
      label: "Data & Infrastructure",
      items: [
        { label: "PostgreSQL", href: "https://www.postgresql.org/" },
        { label: "Drizzle ORM", href: "https://orm.drizzle.team/" },
        { label: "Docker", href: "https://www.docker.com/" },
      ],
    },
    {
      label: "AI & Tools",
      items: [
        { label: "OpenAI", href: "https://platform.openai.com/" },
        { label: "Claude", href: "https://www.anthropic.com/api" },
        { label: "Retell AI", href: "https://www.retellai.com/" },
        { label: "Claude Code", href: "https://claude.com/claude-code" },
      ],
    },
  ],
  projects: [
    {
      title: "ReactUseKit",
      description:
        "A collection of reusable React hooks and helpers for the small pieces you end up rewriting in every project. You can copy and paste them, or install them with the shadcn CLI so they land in your codebase as code you own rather than another dependency.",
      githubUrl: "https://github.com/brijeshmarch16/reactusekit",
      liveUrl: "https://reactusekit.vercel.app",
    },
    {
      title: "AI Interview",
      description:
        "An open source platform for running AI voice interviews. You create an interview from a job description, send the candidate a link, and the AI conducts the conversation — then you review the transcript, scorecard, and analytics. I built it after trying FoloUp, hitting setup and dependency problems, and wanting a version I could self-host and fully control.",
      githubUrl: "https://github.com/brijeshmarch16/ai-interview",
    },
  ],
  experience: [
    {
      title: "Senior Full Stack Engineer",
      company: "Freelance",
      period: "May 2023 - Present",
      description:
        "Working directly with clients on production web applications: frontend architecture in React and Next.js, APIs and data handling on the backend, TypeScript across both, and performance work. Usually involved from problem definition through to release.",
      current: true,
    },
    {
      title: "Full Stack Engineer",
      company: "SolGuruz®",
      period: "Mar 2022 - Apr 2023",
      description:
        "Worked across frontend and backend on client products — building interfaces, writing APIs, and handling data and authentication. This is where I stopped treating the backend as someone else's job.",
      current: false,
    },
    {
      title: "Frontend Engineer",
      company: "Emperor Brains",
      period: "May 2021 - Feb 2022",
      description:
        "My first developer role. Shipped interfaces for real users and learned how production code, code review, and working in a team actually operate.",
      current: false,
    },
  ],
} satisfies Portfolio
