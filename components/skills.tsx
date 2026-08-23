import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { TechBadge } from "@/components/tech-badge";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      tone="alt"
      eyebrow="Technical skills"
      title="The stack I build with"
      description="Grouped the way I actually use them: language, backend framework, data, integration and delivery."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <Reveal
              key={group.id}
              delay={index * 70}
              className="h-full"
              as="article"
            >
              <div className="card-interactive flex h-full flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <div className="flex items-center gap-3">
                  <span className="icon-pop inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                    <Icon className="h-[18px] w-[18px]" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold">{group.title}</h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {group.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <TechBadge label={item} />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
