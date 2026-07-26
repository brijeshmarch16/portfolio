import type { Metadata } from "next"
import type { MetadataRoute } from "next"
import { portfolio } from "./data"

function createBaseUrl(): URL {
  return process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL(portfolio.site.url)
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

function social(label: string) {
  const found = portfolio.profile.social.find((s) => s.label === label)
  if (!found) throw new Error(`Missing social link: ${label}`)
  return found
}

function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      ...override.openGraph,
      title: override.openGraph?.title,
      description: override.description ?? undefined,
      url: override.openGraph?.url ?? createCanonical("/"),
      images: override.openGraph?.images,
      siteName: portfolio.site.name,
    },
    twitter: {
      ...override.twitter,
      card: "summary_large_image",
      creator: social("X").handle,
      title: override.twitter?.title ?? override.title ?? undefined,
      description: override.description ?? undefined,
      images: override.twitter?.images ?? override.openGraph?.images,
    },
    authors: [{ name: portfolio.profile.name, url: portfolio.site.url }],
    creator: portfolio.profile.name,
    publisher: portfolio.profile.name,
    keywords: override.keywords ?? portfolio.site.keywords,
    alternates: {
      ...override.alternates,
    },
  }
}

export function createCanonical(path: string): string {
  return new URL(path, baseUrl).toString()
}

function createOgImageUrl(title: string, description: string): string {
  return createCanonical(
    `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`
  )
}

export function createSiteMetadata(): Metadata {
  const canonicalUrl = createCanonical("/")
  const ogImageUrl = createOgImageUrl(
    portfolio.site.title,
    portfolio.site.description
  )

  return createMetadata({
    title: {
      default: portfolio.site.title,
      template: "%s - " + portfolio.profile.name,
    },
    description: portfolio.site.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: portfolio.site.title,
        },
      ],
    },
  })
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
        name: portfolio.profile.name,
        url: siteUrl,
        jobTitle: portfolio.profile.role,
        description: portfolio.profile.bio,
        email: social("Email").href,
        sameAs: [
          social("GitHub").href,
          social("LinkedIn").href,
          social("X").href,
        ],
        knowsAbout: portfolio.skills.map(({ label }) => label),
        worksFor: {
          "@type": "Organization",
          name: portfolio.profile.company,
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: portfolio.site.title,
        description: portfolio.site.description,
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
