export interface SiteMetadata {
  name: string
  title: string
  description: string
  ogDescription: string
  keywords: string[]
  url: string
}

export interface SocialLink {
  label: string
  href: string
  handle?: string
}

export interface Profile {
  name: string
  role: string
  company: string
  about: string[]
  social: SocialLink[]
}

export interface ProjectItem {
  image: string
  title: string
  description: string
  liveUrl?: string
}

export interface Portfolio {
  site: SiteMetadata
  profile: Profile
  projects: ProjectItem[]
}
