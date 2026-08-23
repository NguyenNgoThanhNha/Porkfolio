"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Building2,
  CalendarDays,
  Check,
  Lock,
  Users,
  X,
} from "lucide-react";

import type { Project } from "@/data/projects";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { TechBadge } from "@/components/tech-badge";
import { ProjectLogo } from "@/components/project-logo";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      // Keep tab focus inside the dialog.
      if (event.key !== "Tab" || !dialogRef.current) return;
      const nodes = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((node) => node.offsetParent !== null);
      if (nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [handleKeyDown]);

  return (
    <div
      className="backdrop-in fixed inset-0 z-100 flex items-end justify-center overflow-hidden bg-black/55 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="modal-in relative flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl sm:max-h-[calc(100dvh-3rem)] sm:rounded-2xl"
      >
        {/* Header stays put and the body scrolls on its own — a sticky header
            inside a padded scroll container leaves a strip where content shows
            through above it. */}
        <header className="flex shrink-0 items-start justify-between gap-4 border-b border-[var(--border)] bg-[var(--surface)] px-6 py-5">
          <div className="flex min-w-0 items-start gap-3">
            <ProjectLogo
              id={project.id}
              title={project.title}
              className="mt-0.5 h-11 w-11 shrink-0"
            />
            <div className="min-w-0">
              <h2
                id="project-modal-title"
                className="text-xl font-semibold tracking-tight"
              >
                {project.title}
              </h2>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {project.subtitle}
              </p>
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </header>

        <div className="flex-1 space-y-8 overflow-y-auto overscroll-contain px-6 py-6">
          {project.coverImage ? (
            <div className="relative aspect-16/9 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background-alt)]">
              <Image
                src={project.coverImage}
                alt=""
                fill
                sizes="(min-width: 640px) 42rem, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent"
              />
            </div>
          ) : null}

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--subtle)]">
            {project.period ? (
              <span className="inline-flex items-center gap-1.5 font-mono">
                <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                {project.period}
              </span>
            ) : null}
            {project.company ? (
              <span className="inline-flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5" aria-hidden />
                {project.company}
              </span>
            ) : null}
            {project.teamSize ? (
              <span className="inline-flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5" aria-hidden />
                {project.teamSize}
              </span>
            ) : null}
            {project.confidential ? (
              <span className="inline-flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5" aria-hidden />
                Client system — described at a high level
              </span>
            ) : null}
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              Role
            </p>
            <p className="mt-2 text-sm font-medium">{project.role}</p>
          </div>

          <Block title="Problem">
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              {project.problem}
            </p>
          </Block>

          <Block title="Solution">
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              {project.solution}
            </p>
          </Block>

          <Block title="Responsibilities">
            <ul className="space-y-2">
              {project.responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm leading-relaxed text-[var(--muted)]"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Technologies">
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <TechBadge label={tech} />
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Architecture">
            <p className="mb-4 text-sm leading-relaxed text-[var(--muted)]">
              {project.architecture.description}
            </p>
            <ArchitectureDiagram layers={project.architecture.layers} />
          </Block>
        </div>
      </div>
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}
