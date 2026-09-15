import type { Portfolio } from "@/types/home"

export const portfolio = {
  site: {
    name: "brijeshkumaryadav",
    title: "Brijeshkumar Yadav - Full Stack Engineer",
    description:
      "Brijeshkumar Yadav is a Full Stack Engineer who builds modern web applications across frontend, backend, and AI-powered features, with a focus on clean code, thoughtful technical decisions, and reliable products.",
    ogDescription: "Full Stack Engineer",
    keywords: [
      "Brijeshkumar Yadav",
      "Full Stack Developer",
      "Full Stack Engineer",
      "AI-Powered Applications",
      "Web Application Development",
      "JavaScript Developer",
      "React Developer",
      "Next.js Developer",
      "Node.js Developer",
    ],
    url: "https://brijeshkumaryadav.com",
  },
  profile: {
    name: "Brijeshkumar Yadav",
    role: "Full Stack Engineer",
    company: "Freelance",
    about: [
      "I’m a Full Stack Engineer who builds modern web applications across frontend, backend, and AI-powered features.",
      "I care about writing clean code, making thoughtful technical decisions, and building products that are reliable, practical, and easy to use.",
      "I started coding in 2020 while I was still in 12th class, learning on my own and building things from scratch. In 2021, before finishing school, I got my first job as a frontend engineer. Later, I moved into backend development and became a full stack engineer.",
    ],
    social: [
      {
        label: "Email",
        href: "mailto:brijeshkumaryadav2026@gmail.com",
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
      {
        label: "Instagram",
        href: "https://instagram.com/brijeshmarch16",
      },
      {
        label: "GitHub",
        href: "https://github.com/brijeshmarch16",
      },
    ],
  },
  projects: [
    {
      title: "ReactUseKit",
      description: "A collection of reusable React hooks and helpers",
      image: "/reactusekit.png",
      liveUrl: "https://reactusekit.vercel.app",
    },
  ],
} satisfies Portfolio
