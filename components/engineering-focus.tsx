import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { TechBadge } from "@/components/tech-badge";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { focusAreas } from "@/data/engineering";
import { projects } from "@/data/projects";

const showcase = projects.find((project) => project.id === "vasg-sales-portal");

export function EngineeringFocus() {
  return (
    <Section
      id="engineering"
      eyebrow="Architecture & engineering focus"
      title="How I think about backend systems"
      description="Enterprise software lives or dies on data integrity, traceable workflows and integrations that fail loudly. These are the areas I keep coming back to."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {focusAreas.map((area, index) => {
          const Icon = area.icon;
          return (
            <Reveal key={area.title} delay={index * 60} className="h-full">
              <article className="card-interactive flex h-full flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <span className="icon-pop inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                  <Icon className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <h3 className="mt-4 text-base font-semibold">{area.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                  {area.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <li key={tag}>
                      <TechBadge label={tag} variant="outline" />
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>

      {showcase ? (
        <Reveal delay={80}>
          <div className="mt-12 grid gap-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 lg:grid-cols-[1fr_1.1fr] lg:p-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                Reference architecture
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                {showcase.title} — {showcase.subtitle}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                {showcase.architecture.description}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                The diagram is schematic and intentionally generic: it shows the
                shape of the system — client, application modules, data and
                external systems — without exposing anything specific to the
                client.
              </p>
            </div>
            <ArchitectureDiagram layers={showcase.architecture.layers} />
          </div>
        </Reveal>
      ) : null}
    </Section>
  );
}
