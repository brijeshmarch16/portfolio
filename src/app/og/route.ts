import { generateOgImage } from "@/components/og-image";
import { author, siteMetadata } from "@/lib/site-config";

export const revalidate = false;

/**
 * Generates the default Open Graph image for the portfolio home page.
 * Uses the author's full name and title to emphasize personal branding.
 */
export async function GET() {
  return generateOgImage({
    title: author.fullName,
    description: author.title,
    site: siteMetadata.name,
  });
}
