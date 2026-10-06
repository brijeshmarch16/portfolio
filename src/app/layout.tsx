import type { Metadata } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { createSiteMetadata } from "@/lib/metadata"
import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Nav } from "@/components/nav"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export async function generateMetadata(): Promise<Metadata> {
  return createSiteMetadata()
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans antialiased", "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Nav />
            <div className="mx-auto flex max-w-2xl flex-col gap-12 px-4 pt-12 pb-24 md:py-24">
              {children}
            </div>
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
