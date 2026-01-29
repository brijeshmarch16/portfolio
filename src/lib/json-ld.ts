import { author, siteMetadata, socialLinks } from "./site-config";

function createAbsoluteUrl(path: string): string {
  return new URL(path, siteMetadata.baseUrl).toString();
}

export interface PersonSchema {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  jobTitle?: string;
  email?: string;
  url?: string;
  sameAs?: Array<string>;
  image?: string;
  description?: string;
}

export interface WebSiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description?: string;
  author?: {
    "@type": "Person";
    name: string;
  };
}

export interface BlogPostingSchema {
  "@context": "https://schema.org";
  "@type": "BlogPosting";
  headline: string;
  description?: string;
  datePublished?: string;
  dateModified?: string;
  author: {
    "@type": "Person";
    name: string;
    url?: string;
  };
  publisher?: {
    "@type": "Organization";
    name: string;
  };
  url?: string;
  image?: string;
}

export function createPersonSchema(override?: Partial<PersonSchema>): PersonSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.fullName,
    description: author.description,
    email: author.email,
    url: siteMetadata.baseUrl.toString(),
    sameAs: [socialLinks.github, socialLinks.linkedin].filter(Boolean) as Array<string>,
    image: createAbsoluteUrl(author.heroImage),
    ...override,
  };
}

export function createWebSiteSchema(override?: Partial<WebSiteSchema>): WebSiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteMetadata.name,
    url: siteMetadata.baseUrl.toString(),
    description: siteMetadata.description,
    author: {
      "@type": "Person",
      name: author.fullName,
    },
    ...override,
  };
}

export function createBlogPostingSchema(
  headline: string,
  description?: string,
  datePublished?: string,
  dateModified?: string,
  url?: string,
  image?: string,
  override?: Partial<BlogPostingSchema>,
): BlogPostingSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: author.fullName,
      url: siteMetadata.baseUrl.toString(),
    },
    publisher: {
      "@type": "Organization",
      name: siteMetadata.name,
    },
    url,
    image,
    ...override,
  };
}
