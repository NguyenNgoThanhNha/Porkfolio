"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Lock } from "lucide-react";

import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { TechBadge } from "@/components/tech-badge";
import { ProjectMockup } from "@/components/project-mockup";
import { ProjectModal } from "@/components/project-modal";
import { ProjectLogo } from "@/components/project-logo";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.categories.includes(filter)),
    [filter],
  );

  return (
    <Section
      id="projects"
      tone="alt"
      eyebrow="Featured projects"
      title="Enterprise platforms, end to end"
      description="Most of these are client systems, so the covers are domain imagery rather than real screenshots, and the write-up stays at architecture level. Open a card for the problem, the solution and how it is put together."
    >
      <Reveal>
        <div
          role="group"
          aria-label="Filter projects by category"
          className="flex flex-wrap gap-2"
        >
          {projectCategories.map((category) => {
            const isActive = filter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-lg border px-3.5 py-2 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent-strong)] shadow-sm shadow-[var(--accent)]/15"
                    : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:text-[var(--foreground)]",
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
      </Reveal>

      <p aria-live="polite" className="mt-4 text-sm text-[var(--subtle)]">
        Showing {visible.length} of {projects.length} projects
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {visible.map((project, index) => (
          <Reveal key={project.id} delay={index * 60} className="h-full">
            <article
              className="card-interactive group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]"
              onClick={() => setSelected(project)}
            >
              <ProjectMockup project={project} />

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-start gap-3">
                    <ProjectLogo
                      id={project.id}
                      title={project.title}
                      className="mt-0.5 h-10 w-10 shrink-0"
                    />
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--muted)]">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  {project.confidential ? (
                    <span
                      title="Client system — public description kept high level"
                      className="inline-flex shrink-0 items-center gap-1 rounded-md bg-[var(--background-alt)] px-2 py-1 text-[11px] text-[var(--subtle)] ring-1 ring-[var(--border)]"
                    >
                      <Lock className="h-3 w-3" aria-hidden />
                      Confidential
                    </span>
                  ) : null}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  {project.summary}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.highlights.map((tech) => (
                    <li key={tech}>
                      <TechBadge label={tech} />
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-4">
                  <span className="font-mono text-xs text-[var(--subtle)]">
                    {project.period ?? project.role.split(" & ")[0]}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)]"
                  >
                    View details
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                    <span className="sr-only"> about {project.title}</span>
                  </button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {selected ? (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      ) : null}
    </Section>
  );
}
