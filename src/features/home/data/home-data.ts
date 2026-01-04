export const personalInfo = {
  shortName: "Brijesh",
  fullName: "Brijeshkumar Yadav",
  title: "Frontend Engineer | React, Next.js & TypeScript",
  description:
    "I build elegant digital experiences with modern web technologies. Passionate about clean code, user experience, and bringing ideas to life.",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  heroImage: "/images/hero/profile.jpg",
};

export const aboutMe = {
  paragraphs: [
    "I'm a software engineer with a passion for building products that make a difference. My journey in tech started with curiosity and evolved into a career focused on creating intuitive, performant web applications.",
    "Over the years, I've worked with various technologies and frameworks, always eager to learn and adapt. I believe in writing clean, maintainable code and creating experiences that users love.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.",
  ],
};

export const skillCategories = [
  {
    name: "Frontend",
    variant: "default" as const,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
  {
    name: "Backend",
    variant: "secondary" as const,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    name: "Tools & Others",
    variant: "outline" as const,
    skills: ["Git", "Docker", "Vercel", "Figma", "Jest", "CI/CD"],
  },
];

export const workExperience = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company Inc.",
    period: "2023 - Present",
    current: true,
    description: [
      "Led development of new features reaching 100K+ users",
      "Improved application performance by 40% through optimization",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    title: "Software Engineer",
    company: "Startup Co.",
    period: "2021 - 2023",
    current: false,
    description: [
      "Built responsive web applications using React and TypeScript",
      "Collaborated with design team to implement pixel-perfect UIs",
      "Contributed to architecture decisions and tech stack choices",
    ],
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
