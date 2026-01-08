import { ImageResponse } from "next/og";
import { author } from "@/lib/site-config";

export interface OgImageProps {
  title: string;
  description?: string;
}

export function generateOgImage({ title, description }: OgImageProps) {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #ffdb33 0%, #ffcc00 100%)",
        padding: "80px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#000",
            lineHeight: "1.1",
            margin: 0,
          }}
        >
          {title}
        </h1>
        {description && (
          <p
            style={{
              fontSize: "28px",
              color: "#000",
              opacity: 0.8,
              margin: 0,
              lineHeight: "1.4",
              maxWidth: "900px",
            }}
          >
            {description}
          </p>
        )}
      </div>
      <div
        style={{
          fontSize: "24px",
          fontWeight: 600,
          color: "#000",
          opacity: 0.7,
        }}
      >
        {author.fullName}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
