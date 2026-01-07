export interface SiteMetadata {
  name: string;
  description: string;
  baseUrl: URL;
}

export interface Author {
  shortName: string;
  fullName: string;
  title: string;
  role: string;
  email: string;
  heroImage: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitterHandle: string;
}

/**
 * Returns the base URL for the site.
 *
 * In development this points to http://localhost:3000 so that generated
 * metadata, JSON-LD, sitemap and robots all use the local origin. In
 * production this should always be set to the canonical public domain.
 */
function createBaseUrl(): URL {
  return process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL("https://brijeshmarch16.vercel.app");
}

export const siteMetadata: SiteMetadata = {
  name: "Portfolio",
  description:
    "Brijeshkumar Yadav – Frontend Engineer | React, Next.js & TypeScript",
  baseUrl: createBaseUrl(),
};

export const author: Author = {
  shortName: "Brijesh",
  fullName: "Brijeshkumar Yadav",
  title: "Frontend Engineer – React, Next.js & TypeScript",
  role: "Frontend Engineer",
  email: "brijeshkumaryadav@gmail.com",
  heroImage: "/images/hero/profile.jpg",
};

export const socialLinks: SocialLinks = {
  github: "https://github.com/brijeshmarch16",
  linkedin: "https://linkedin.com/in/brijeshmarch16",
  twitterHandle: "@brijeshmarch16",
};
