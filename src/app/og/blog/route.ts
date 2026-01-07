import { generateOgImage } from "@/components/og-image";
import { siteMetadata } from "@/lib/site-config";

export const revalidate = false;

/**
 * Generates the Open Graph image for the blog index page.
 * Uses a generic blog description aligned with the site metadata.
 */
export async function GET() {
  return generateOgImage({
    title: "Blog",
    description: "A collection of articles on development, and ideas.",
    site: siteMetadata.name,
  });
}
