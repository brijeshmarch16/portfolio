export interface Stack {
  name: string;
  key: string;
  hasThemedIcon?: boolean;
  iconPath: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}
