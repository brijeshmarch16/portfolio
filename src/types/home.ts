export interface SiteMetadata {
  name: string
  title: string
  description: string
  ogDescription: string
  keywords: string[]
  url: string
}

export interface Profile {
  name: string
  role: string
  company: string
  location: string
  bio: string
}

export type TechStackIcon =
  | "nextjs"
  | "react"
  | "typescript"
  | "javascript"
  | "tailwind"
  | "shadcn"
  | "tanstack-query"
  | "git"
  | "nodejs"
  | "docker"
  | "chatgpt"
  | "claude"

export interface WorkExperience {
  title: string
  company: string
  period: string
  current: boolean
}

export interface ProjectItem {
  kind: "live" | "preview"
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
}

export interface SocialLink {
  label: string
  href: string
  handle?: string
}

export interface SocialLinks {
  email: SocialLink
  github: SocialLink
  linkedin: SocialLink
  x: SocialLink & { handle: string }
}

export interface TechStackItem {
  label: string
  href: string
  icon: TechStackIcon
}

export interface Portfolio {
  site: SiteMetadata
  profile: Profile
  experience: WorkExperience[]
  projects: ProjectItem[]
  techStack: TechStackItem[]
  social: SocialLinks
}
