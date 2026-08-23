import { Building2, CalendarDays, Check, Users } from "lucide-react";

import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { TechBadge } from "@/components/tech-badge";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Systems I have helped build"
      description="Enterprise engagements in steel distribution, aviation, CRM and human resources. Dates are shown where they are stated on my CV; client work is described at a high level only."
    >
      <ol className="relative space-y-8 border-l border-[var(--border)] pl-6 sm:pl-8">
        {experience.map((entry, index) => (
          <Reveal key={entry.id} delay={index * 60} as="li" className="relative">
            {/* Timeline node */}
            <span
              aria-hidden
              className="pulse-node absolute -left-[calc(1.5rem+5px)] top-6 h-2.5 w-2.5 rounded-full bg-[var(--accent)] ring-4 ring-[var(--background)] sm:-left-[calc(2rem+5px)]"
            />

            <article className="card-interactive rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--subtle)]">
                {entry.period ? (
                  <span className="inline-flex items-center gap-1.5 font-mono">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                    {entry.period}
                  </span>
                ) : null}
                {entry.organisation ? (
                  <span className="inline-flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5" aria-hidden />
                    {entry.organisation}
                  </span>
                ) : null}
                {entry.teamSize ? (
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" aria-hidden />
                    {entry.teamSize}
                  </span>
                ) : null}
              </div>

              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {entry.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                {entry.role}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {entry.description}
              </p>

              <ul className="mt-4 space-y-2">
                {entry.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex gap-2.5 text-sm leading-relaxed text-[var(--muted)]"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]"
                      aria-hidden
                    />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {entry.stack.map((tech) => (
                  <TechBadge key={tech} label={tech} variant="outline" />
                ))}
              </div>

              {entry.projectId ? (
                <a
                  href="#projects"
                  className="mt-5 inline-block text-sm font-medium text-[var(--accent)] transition-all hover:translate-x-0.5 hover:underline"
                >
                  See project details →
                </a>
              ) : null}
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
