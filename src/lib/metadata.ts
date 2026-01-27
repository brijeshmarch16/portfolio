import type { Metadata } from "next/types";
import { siteMetadata, socialLinks } from "./site-config";

export const baseUrl = siteMetadata.baseUrl;

function getBaseTitle(override: Metadata): string | undefined {
  const title = override.title;

  if (typeof title === "string") {
    return title;
  }

  if (title && typeof title === "object") {
    if ("absolute" in title && typeof title.absolute === "string") {
      return title.absolute;
    }

    if ("default" in title && typeof title.default === "string") {
      return title.default;
    }
  }

  return undefined;
}

function getOpenGraphUrl(override: Metadata): string {
  const url = override.openGraph?.url;

  if (typeof url === "string") {
    return url;
  }

  if (url instanceof URL) {
    return url.toString();
  }

  return baseUrl.toString();
}

function getOpenGraphTitle(override: Metadata, fallbackTitle: string | undefined) {
  const ogTitle = override.openGraph?.title;
  return typeof ogTitle === "string" ? ogTitle : fallbackTitle;
}

export function createMetadata(override: Metadata): Metadata {
  const title = getBaseTitle(override);
  const openGraphUrl = getOpenGraphUrl(override);
  const openGraphTitle = getOpenGraphTitle(override, title);

  return {
    ...override,
    openGraph: {
      ...override.openGraph,
      title: openGraphTitle,
      description: override.description ?? undefined,
      url: openGraphUrl,
      images: override.openGraph?.images,
      siteName: siteMetadata.name,
    },
    twitter: {
      card: "summary_large_image",
      creator: socialLinks.twitterHandle,
      title: override.twitter?.title ?? title,
      description: override.description ?? undefined,
      images: override.twitter?.images ?? override.openGraph?.images,
      ...override.twitter,
    },
    alternates: {
      ...override.alternates,
    },
  };
}

export function createCanonical(path: string): string {
  return new URL(path, baseUrl).toString();
}
