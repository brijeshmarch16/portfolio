import type { Metadata } from "next/types";
import { siteMetadata, socialLinks } from "./site-config";

export const baseUrl = siteMetadata.baseUrl;

export function createMetadata(override: Metadata): Metadata {
  const title =
    typeof override.title === "string"
      ? override.title
      : typeof override.title === "object" &&
          override.title !== null &&
          "absolute" in override.title
        ? override.title.absolute
        : typeof override.title === "object" &&
            override.title !== null &&
            "template" in override.title
          ? override.title.template
          : undefined;

  const openGraphUrlValue = override.openGraph?.url;
  const openGraphUrl =
    typeof openGraphUrlValue === "string"
      ? openGraphUrlValue
      : openGraphUrlValue instanceof URL
        ? openGraphUrlValue.toString()
        : baseUrl.toString();

  return {
    ...override,
    openGraph: {
      title: override.openGraph?.title ?? title,
      description: override.description ?? undefined,
      url: openGraphUrl,
      images: override.openGraph?.images,
      siteName: siteMetadata.name,
      ...override.openGraph,
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
