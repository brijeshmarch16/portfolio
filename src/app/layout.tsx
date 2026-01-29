import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import Dock from "@/components/dock";
import { JsonLd } from "@/components/json-ld";
import { ThemeProvider } from "@/components/theme-provider";
import { createPersonSchema, createWebSiteSchema } from "@/lib/json-ld";
import { baseUrl, createCanonical, createMetadata } from "@/lib/metadata";
import { author, siteMetadata } from "@/lib/site-config";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const ogImageUrl = createCanonical("/og");
  const canonicalUrl = createCanonical("/");

  return createMetadata({
    title: {
      default: `${author.fullName} – ${author.role}`,
      template: `%s – ${author.fullName}`,
    },
    description: siteMetadata.description,
    openGraph: {
      url: baseUrl,
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  });
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${archivoBlack.variable} ${space.variable} mx-auto max-w-2xl pt-12 pb-20 antialiased`}
      >
        <JsonLd schema={[createPersonSchema(), createWebSiteSchema()]} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Dock />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
