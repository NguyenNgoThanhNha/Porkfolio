import Image from "next/image";
import { GraduationCap } from "lucide-react";

import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";
import { softSkills } from "@/data/skills";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="Backend engineering for systems that run a business"
      description="Close to two years building ERP, CRM and B2B platforms where correctness matters more than novelty."
    >
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal variant="scale">
          <Portrait />
        </Reveal>

        <div>
          <Reveal delay={80}>
            <div className="space-y-5 text-base leading-relaxed text-[var(--muted)]">
              {site.summary.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]">
              How I work
            </h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {softSkills.map((skill) => (
                <li
                  key={skill.title}
                  className="card-interactive rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
                >
                  <p className="text-sm font-medium">{skill.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">
                    {skill.description}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/** Portrait — /public/portrait.jpg. Swap the file to change the photo. */
function Portrait() {
  return (
    <figure className="group/portrait relative mx-auto w-full max-w-xs">
      {/* The offset accent frame is anchored to the photo box only — putting it
          on the <figure> makes it wrap the caption too. */}
      <div className="relative">
        <div
          aria-hidden
          className="absolute -bottom-3 -left-3 h-full w-full rounded-2xl border border-[var(--accent)]/40 transition-transform duration-500 group-hover/portrait:translate-x-0.5 group-hover/portrait:translate-y-0.5"
        />
        <div className="portrait-frame relative aspect-4/5 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background-alt)]">
          <Image
            src="/portrait.jpg"
            alt={`${site.name}, ${site.headline}, at his FPT University graduation`}
            fill
            priority={false}
            sizes="(min-width: 1024px) 20rem, (min-width: 640px) 20rem, 80vw"
            className="portrait-img object-cover object-top"
          />
        </div>
      </div>

      <figcaption className="mt-7 flex items-center justify-center gap-2 text-xs text-[var(--subtle)]">
        <GraduationCap className="h-4 w-4 text-[var(--accent)]" aria-hidden />
        FPT University — Software Engineering, 2025
      </figcaption>
    </figure>
  );
}
