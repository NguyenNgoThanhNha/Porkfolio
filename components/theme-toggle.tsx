"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        mounted
          ? `Switch to ${isDark ? "light" : "dark"} mode`
          : "Toggle colour theme"
      }
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {/* Both icons render server-side; visibility is resolved after mount to
          avoid a hydration mismatch on the theme. */}
      {mounted ? (
        isDark ? (
          <Sun
            className="h-[18px] w-[18px] transition-transform duration-300 hover:rotate-45"
            aria-hidden
          />
        ) : (
          <Moon
            className="h-[18px] w-[18px] transition-transform duration-300 hover:-rotate-12"
            aria-hidden
          />
        )
      ) : (
        <Moon className="h-[18px] w-[18px] opacity-0" aria-hidden />
      )}
    </button>
  );
}
