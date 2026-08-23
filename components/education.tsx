import { Award, GraduationCap } from "lucide-react";

import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { achievements, education } from "@/data/experience";

export function Education() {
  return (
    <Section
      id="education"
      tone="alt"
      eyebrow="Education & achievement"
      title="Where the foundations came from"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <article className="card-interactive h-full rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <span className="icon-pop inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent-strong)]">
              <GraduationCap className="h-[18px] w-[18px]" aria-hidden />
            </span>
            <h3 className="mt-4 text-lg font-semibold tracking-tight">
              {education.school}
            </h3>
            <p className="mt-1 text-sm text-[var(--accent)]">
              {education.degree}
            </p>
            <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-[var(--border)] pt-5 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wider text-[var(--subtle)]">
                  Period
                </dt>
                <dd className="mt-1 font-mono">{education.period}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-[var(--subtle)]">
                  GPA
                </dt>
                <dd className="mt-1 font-mono">{education.gpa}</dd>
              </div>
            </dl>
          </article>
        </Reveal>

        <Reveal delay={80}>
          <article className="card-interactive h-full rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <span className="icon-pop inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent-strong)]">
              <Award className="h-[18px] w-[18px]" aria-hidden />
            </span>
            <h3 className="mt-4 text-lg font-semibold tracking-tight">
              Achievements
            </h3>
            <ul className="mt-5 space-y-4">
              {achievements.map((item) => (
                <li
                  key={item.title}
                  className="border-l-2 border-[var(--accent)] pl-4"
                >
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {item.context}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
