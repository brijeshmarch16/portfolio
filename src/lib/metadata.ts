import type { Metadata } from "next"
import type { MetadataRoute } from "next"

const site = {
  name: "brijeshkumaryadav",
  title: "Brijeshkumar Yadav | Full Stack Engineer",
  description:
    "I'm a Full Stack Engineer who builds products end to end. I have 5+ years of experience working across the stack, from frontend to backend, with a focus on reliable engineering and thoughtful solutions.",
  url: "https://brijeshkumaryadav.com",
  profileName: "Brijeshkumar Yadav",
  role: "Full Stack Engineer",
  company: "Freelance",
  email: "mailto:brijeshkumaryadav2026@gmail.com",
  socialLinks: [
    "https://github.com/brijeshmarch16",
    "https://linkedin.com/in/brijeshmarch16",
    "https://instagram.com/brijeshmarch16",
    "https://x.com/brijeshmarch",
  ],
  xHandle: "@brijeshmarch",
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
}

function createBaseUrl(): URL {
  return process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL(site.url)
}

export const baseUrl = createBaseUrl()

type SiteJsonLd = {
  "@context": "https://schema.org"
  "@graph": [
    {
      "@type": "Person"
      "@id": string
      name: string
      url: string
      jobTitle: string
      description: string
      email: string
      sameAs: string[]
      knowsAbout: string[]
      worksFor: {
        "@type": "Organization"
        name: string
      }
    },
    {
      "@type": "WebSite"
      "@id": string
      url: string
      name: string
      description: string
      publisher: {
        "@id": string
      }
      inLanguage: string
    },
  ]
}

function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      ...override.openGraph,
      title: override.openGraph?.title ?? override.title ?? undefined,
      description: override.description ?? undefined,
      url: override.openGraph?.url ?? createCanonical("/"),
      images: override.openGraph?.images,
      siteName: site.name,
    },
    twitter: {
      ...override.twitter,
      card: "summary_large_image",
      creator: site.xHandle,
      title: override.twitter?.title ?? override.title ?? undefined,
      description: override.description ?? undefined,
      images: override.twitter?.images ?? override.openGraph?.images,
    },
    authors: [{ name: site.profileName, url: site.url }],
    creator: site.profileName,
    publisher: site.profileName,
    keywords: override.keywords ?? site.keywords,
    alternates: {
      ...override.alternates,
    },
  }
}

export function createCanonical(path: string): string {
  return new URL(path, baseUrl).toString()
}

export function createPageMetadata(override: Metadata, path: string): Metadata {
  const canonicalUrl = createCanonical(path)

  return createMetadata({
    ...override,
    openGraph: {
      ...override.openGraph,
      url: canonicalUrl,
    },
    alternates: {
      ...override.alternates,
      canonical: canonicalUrl,
    },
  })
}

export function createSiteMetadata(): Metadata {
  return createPageMetadata(
    {
      title: site.title,
      description: site.description,
    },
    "/"
  )
}

export function createSiteJsonLd(): SiteJsonLd {
  const siteUrl = createCanonical("/")
  const personId = createCanonical("/#person")
  const websiteId = createCanonical("/#website")

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.profileName,
        url: siteUrl,
        jobTitle: site.role,
        description: site.description,
        email: site.email,
        sameAs: site.socialLinks,
        knowsAbout: [],
        worksFor: {
          "@type": "Organization",
          name: site.company,
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: site.title,
        description: site.description,
        publisher: {
          "@id": personId,
        },
        inLanguage: "en",
      },
    ],
  }
}

export function createRobots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    host: baseUrl.hostname,
    sitemap: createCanonical("/sitemap.xml"),
  }
}

export function createSitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: createCanonical("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
