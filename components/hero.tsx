import { ArrowRight, Download, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/icons";

import { site } from "@/data/site";
import { TechBadge } from "@/components/tech-badge";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
      aria-labelledby="hero-heading"
    >
      {/* Decorative background: CSS grid + slowly drifting colour washes. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2">
          <div className="orb h-[26rem] w-[46rem] rounded-full bg-[var(--accent)]/14 blur-[110px]" />
        </div>
        <div className="absolute -bottom-32 right-0">
          <div className="orb-delayed h-[22rem] w-[30rem] rounded-full bg-[var(--steel)]/14 blur-[110px]" />
        </div>
        <div className="absolute top-1/3 -left-16">
          <div className="orb h-[16rem] w-[16rem] rounded-full bg-[var(--accent)]/8 blur-[90px]" />
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-3 py-1.5 text-xs text-[var(--muted)] shadow-sm backdrop-blur">
              <span
                aria-hidden
                className="pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
              />
              <MapPin className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden />
              {site.location}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="hero-heading"
              className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              {site.name}
            </h1>
            <span
              aria-hidden
              className="accent-rule mt-5 block"
            />
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-4 text-xl font-medium text-gradient sm:text-2xl">
              {site.role}
              <span className="mx-2 text-[var(--border-strong)]">/</span>
              {site.roleSecondary}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {site.tagline}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="btn-primary group inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-[var(--accent)]/20 transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] hover:shadow-xl dark:text-[#04121a]"
              >
                View My Projects
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </a>
              <a
                href={site.cvPath}
                download={site.cvFileName}
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download CV
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--subtle)]">
                Core stack
              </p>
              <div className="stagger-in mt-3 flex flex-wrap gap-2">
                {site.heroBadges.map((badge) => (
                  <TechBadge key={badge} label={badge} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} variant="scale" className="lg:justify-self-end">
          <HeroPanel />
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Abstract "system" panel used instead of a photograph.
 * Replace with a real portrait by dropping an image into /public and swapping
 * this component for a next/image — the layout box is already the right shape.
 */
function HeroPanel() {
  const lines = [
    { text: "services.AddMediatR(cfg =>", tone: "code" },
    { text: "    cfg.RegisterServicesFromAssembly(app));", tone: "code" },
    { text: "", tone: "code" },
    { text: "// contract pricing — one writer at a time", tone: "comment" },
    { text: "await _uow.BeginTransactionAsync();", tone: "code" },
    { text: "var price = await _repo.GetForUpdateAsync(id);", tone: "code" },
    { text: "", tone: "code" },
    { text: "await _sap.SyncPricingConditionAsync(price);", tone: "code" },
    { text: "await _scheduler.ScheduleJob(syncJob, trigger);", tone: "code" },
  ];

  return (
    <div className="panel-float w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-black/5 ring-1 ring-[var(--accent)]/10 dark:shadow-black/40">
      <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
        <span className="ml-2 font-mono text-xs text-[var(--subtle)]">
          SalesContractHandler.cs
        </span>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
          C#
        </span>
      </div>

      <pre className="overflow-x-auto px-4 py-5 font-mono text-[12.5px] leading-6">
        <code>
          {lines.map((line, index) => (
            <span key={index} className="block whitespace-pre">
              <span className="mr-4 inline-block w-4 select-none text-right text-[var(--subtle)]/60">
                {index + 1}
              </span>
              <HeroCodeLine text={line.text} tone={line.tone} />
              {index === lines.length - 1 ? (
                <span
                  aria-hidden
                  className="caret ml-0.5 inline-block h-3.5 w-[7px] translate-y-0.5 bg-[var(--accent)] align-middle"
                />
              ) : null}
            </span>
          ))}
        </code>
      </pre>

      <dl className="grid grid-cols-2 gap-px border-t border-[var(--border)] bg-[var(--border)]">
        {site.facts.map((fact) => (
          <div
            key={fact.label}
            className="bg-[var(--surface)] px-4 py-3 transition-colors hover:bg-[var(--accent-soft)]/40"
          >
            <dt className="text-[11px] uppercase tracking-wider text-[var(--subtle)]">
              {fact.label}
            </dt>
            <dd className="mt-0.5 text-sm font-medium">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function HeroCodeLine({ text, tone }: { text: string; tone: string }) {
  if (!text) {
    return <span> </span>;
  }

  if (tone === "comment") {
    return <span className="italic text-[var(--subtle)]">{text}</span>;
  }

  const parts = text.split(/(\b(?:await|var)\b|\.\w+)/g);

  return (
    <span>
      {parts.map((part, index) => {
        if (part === "await" || part === "var") {
          return (
            <span key={index} className="text-[var(--accent)]">
              {part}
            </span>
          );
        }
        if (part.startsWith(".")) {
          return (
            <span key={index} className="text-[var(--accent-strong)]">
              {part}
            </span>
          );
        }
        return (
          <span key={index} className="text-[var(--steel)]">
            {part}
          </span>
        );
      })}
    </span>
  );
}
