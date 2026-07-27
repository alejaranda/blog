"use client";

import type { PropsWithChildren } from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export const THEMES = [
  "light",
  "dark",
  "dracula",
  "forest",
  "sepia",
] as const;

export function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      themes={[...THEMES]}
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
