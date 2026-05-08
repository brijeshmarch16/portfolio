import { ImageResponse } from "next/og"
import { portfolio } from "@/lib/data"

const theme = {
  background: "#ffffff",
  foreground: "#171717",
  mutedForeground: "#737373",
}

const siteHostname = new URL(portfolio.site.url).hostname

export function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get("title") ?? portfolio.profile.name
  const description =
    searchParams.get("description") ?? portfolio.site.ogDescription

  return new ImageResponse(
    <div
      tw="flex h-full w-full flex-col items-center justify-center p-28"
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        fontFamily: "monospace",
      }}
    >
      <div tw="flex h-full w-full flex-col justify-between">
        <div tw="flex flex-col">
          <h1 tw="m-0 flex max-w-4xl text-left text-6xl font-semibold tracking-tighter leading-none">
            {title}
          </h1>
          <p
            tw="mt-8 flex max-w-4xl text-left text-3xl leading-snug"
            style={{ color: theme.mutedForeground }}
          >
            {description}
          </p>
        </div>

        <div tw="flex w-full items-center justify-between">
          <p tw="m-0 text-2xl font-semibold tracking-tight">{siteHostname}</p>
        </div>
      </div>
    </div>,
    {
      height: 630,
      width: 1200,
    }
  )
}
