export interface SiteMetadata {
  name: string;
  description: string;
  baseUrl: URL;
}

export interface Author {
  shortName: string;
  fullName: string;
  description: string;
  role: string;
  email: string;
  heroImage: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
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
  description: "Brijeshkumar Yadav – Frontend Engineer | React, Next.js & TypeScript",
  baseUrl: createBaseUrl(),
};

export const author: Author = {
  shortName: "Brijesh",
  fullName: "Brijeshkumar Yadav",
  description:
    "Frontend Engineer. I love building things and helping people. Very active on Twitter and LinkedIn.",
  role: "Frontend Engineer",
  email: "brijeshkumaryadav@gmail.com",
  heroImage: "/images/hero/profile.jpg",
};

export const socialLinks: SocialLinks = {
  github: "https://github.com/brijeshmarch16",
  linkedin: "https://linkedin.com/in/brijeshmarch16",
  twitter: "https://x.com/brijeshmarch",
  twitterHandle: "@brijeshmarch",
};
