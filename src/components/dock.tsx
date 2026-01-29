"use client";

import { GithubIcon, HomeIcon, LinkedinIcon, MoonIcon, NewspaperIcon, SunIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { socialLinks } from "@/lib/site-config";

export default function Dock() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isHomeActive = pathname === "/";
  const isBlogActive = pathname === "/blog" || pathname?.startsWith("/blog");
  const isDark = theme === "dark";

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border bg-background px-6 py-3 shadow-sm">
      {/* Home */}
      <Link
        href="/"
        className={`group relative flex h-8 w-8 items-center justify-center rounded-md transition-all hover:scale-110 active:scale-95 ${
          isHomeActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
        }`}
        aria-label="Home"
      >
        <HomeIcon className="h-4 w-4" />
        <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-foreground px-2 py-1 font-medium text-background text-xs opacity-0 transition-opacity group-hover:opacity-100">
          Home
        </span>
      </Link>

      {/* Blog */}
      <Link
        href="/blog"
        className={`group relative flex h-8 w-8 items-center justify-center rounded-md transition-all hover:scale-110 active:scale-95 ${
          isBlogActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
        }`}
        aria-label="Blog"
      >
        <NewspaperIcon className="h-4 w-4" />
        <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-foreground px-2 py-1 font-medium text-background text-xs opacity-0 transition-opacity group-hover:opacity-100">
          Blog
        </span>
      </Link>

      <div className="mx-1 h-5 w-px bg-border/50" />

      {/* GitHub */}
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-8 w-8 items-center justify-center rounded-md text-foreground transition-all hover:scale-110 hover:bg-muted active:scale-95"
        aria-label="GitHub"
      >
        <GithubIcon className="h-4 w-4" />
        <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-foreground px-2 py-1 font-medium text-background text-xs opacity-0 transition-opacity group-hover:opacity-100">
          GitHub
        </span>
      </a>

      {/* LinkedIn */}
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-8 w-8 items-center justify-center rounded-md text-foreground transition-all hover:scale-110 hover:bg-muted active:scale-95"
        aria-label="LinkedIn"
      >
        <LinkedinIcon className="h-4 w-4" />
        <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-foreground px-2 py-1 font-medium text-background text-xs opacity-0 transition-opacity group-hover:opacity-100">
          LinkedIn
        </span>
      </a>

      {/* X (Twitter) */}
      <a
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-8 w-8 items-center justify-center rounded-md text-foreground transition-all hover:scale-110 hover:bg-muted active:scale-95"
        aria-label="X (Twitter)"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-foreground px-2 py-1 font-medium text-background text-xs opacity-0 transition-opacity group-hover:opacity-100">
          X (Twitter)
        </span>
      </a>

      <div className="mx-1 h-5 w-px bg-border/50" />

      {/* Theme Toggle */}
      <button
        type="button"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="group relative flex h-8 w-8 items-center justify-center rounded-md text-foreground transition-all hover:scale-110 hover:bg-muted active:scale-95"
        aria-label="Toggle theme"
      >
        {mounted ? (
          isDark ? (
            <SunIcon className="h-4 w-4" />
          ) : (
            <MoonIcon className="h-4 w-4" />
          )
        ) : (
          <SunIcon className="h-4 w-4" />
        )}
        <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-foreground px-2 py-1 font-medium text-background text-xs opacity-0 transition-opacity group-hover:opacity-100">
          {mounted && isDark ? "Light" : "Dark"}
        </span>
      </button>
    </nav>
  );
}
