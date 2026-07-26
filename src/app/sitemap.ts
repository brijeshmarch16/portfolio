import type { MetadataRoute } from "next"
import { createSitemap } from "@/lib/metadata"

export const revalidate = false

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return createSitemap()
}
