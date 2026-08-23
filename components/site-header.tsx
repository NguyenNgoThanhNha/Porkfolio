"use client";

import { useEffect, useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

import { navigation, site } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const ids = navigation.map((item) => item.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "header-scrolled border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="group inline-flex items-center gap-2.5 font-semibold tracking-tight"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[var(--navy)] text-[var(--accent)] ring-1 ring-[var(--border-strong)] transition-shadow duration-300 group-hover:shadow-[0_0_18px_color-mix(in_oklab,var(--accent)_45%,transparent)] dark:bg-[var(--surface-raised)]">
            <Terminal className="h-4 w-4" aria-hidden />
          </span>
          <span className="hidden sm:inline">
            Nha
            <span className="text-[var(--accent)]">.dev</span>
          </span>
          <span className="sr-only">{site.name} — home</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition-all duration-300",
                  isActive
                    ? "bg-[var(--accent-soft)] text-[var(--accent-strong)]"
                    : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.cvPath}
            download={site.cvFileName}
            className="hidden rounded-lg border border-[var(--border-strong)] px-3.5 py-2 text-sm font-medium text-[var(--foreground)] transition-all hover:-translate-y-px hover:border-[var(--accent)] hover:text-[var(--accent)] sm:inline-flex"
          >
            Download CV
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="sheet-in border-t border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md lg:hidden"
        >
          <nav
            aria-label="Mobile"
            className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8"
          >
            {navigation.map((item) => {
              const id = item.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "rounded-lg px-2 py-3 text-base transition-colors",
                    isActive
                      ? "bg-[var(--accent-soft)] text-[var(--accent-strong)]"
                      : "text-[var(--muted)] hover:text-[var(--accent)]",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={site.cvPath}
              download={site.cvFileName}
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 rounded-lg bg-[var(--accent)] px-4 py-3 text-center text-sm font-medium text-white dark:text-[#04121a]"
            >
              Download CV
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
