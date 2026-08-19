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
  intro: string
  story: string[]
  social: SocialLink[]
}

export interface WorkExperience {
  title: string
  company: string
  period: string
  description: string
  current: boolean
}

export interface ProjectItem {
  title: string
  description: string
  githubUrl?: string
  liveUrl?: string
}

export interface PostItem {
  title: string
  description: string
  href: string
  date: string
}

export interface SocialLink {
  label: string
  href: string
  handle?: string
}

export interface SkillTech {
  label: string
  href: string
}

export interface SkillGroup {
  label: string
  items: SkillTech[]
}

export interface Portfolio {
  site: SiteMetadata
  profile: Profile
  skills: SkillGroup[]
  projects: ProjectItem[]
  experience: WorkExperience[]
  posts: PostItem[]
}
