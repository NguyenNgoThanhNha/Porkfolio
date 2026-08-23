import { Mail, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { navigation, site } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background-alt)]">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold tracking-tight">{site.name}</p>
            <p className="mt-1 text-sm text-[var(--muted)]">{site.headline}</p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--subtle)]">
              <MapPin className="h-4 w-4" aria-hidden />
              {site.location}
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
                className="icon-btn inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]"
            >
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Send an email"
                className="icon-btn inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]"
            >
              <Mail className="h-[18px] w-[18px]" aria-hidden />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-xs text-[var(--subtle)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-mono">Built with Next.js, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
