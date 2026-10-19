"use client"

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes"

export function ThemeProvider({
  attribute = "class",
  defaultTheme = "light",
  enableSystem = false,
  forcedTheme = "light",
  storageKey = "theme-v2",
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      forcedTheme={forcedTheme}
      storageKey={storageKey}
      {...props}
    />
  )
}

export { useTheme } from "next-themes"
