"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import { THEMES } from "@/shared/providers/theme-provider";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      {THEMES.map((t) => (
        <option key={t} value={t}>
          {t}
        </option>
      ))}
    </select>
  );
}
