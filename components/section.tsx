import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  /** Alternate background for visual rhythm between sections. */
  tone?: "base" | "alt";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  tone = "base",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "scroll-mt-24 border-t border-[var(--border)] py-20 sm:py-28",
        tone === "alt" && "bg-[var(--background-alt)]",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
            <span
              aria-hidden
              className="h-px w-6 bg-[var(--accent)]"
            />
            {eyebrow}
          </p>
          <h2
            id={`${id}-heading`}
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
              {description}
            </p>
          ) : null}
        </Reveal>

        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
