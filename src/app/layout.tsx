import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { Navbar } from "@/features/global/components/navbar";
import { ThemeProvider } from "@/features/global/components/theme-provider";
import { navItems } from "@/features/global/config/navigation";
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
  });
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${archivoBlack.variable} ${space.variable} antialiased`}
      >
        <JsonLd schema={[createPersonSchema(), createWebSiteSchema()]} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar items={navItems} />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
