import { Download, Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon } from "@/components/icons";

import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phoneHref}`,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: site.githubHandle,
    href: site.github,
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: site.location,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Open to backend and .NET engineering work"
      description="The fastest way to reach me is email. Happy to talk about ERP, CRM and integration-heavy systems."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {channels.map((channel) => {
              const Icon = channel.icon;
              const content = (
                <>
                  <span className="icon-pop inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                    <Icon className="h-[18px] w-[18px]" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-[var(--subtle)]">
                      {channel.label}
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-medium">
                      {channel.value}
                    </span>
                  </span>
                </>
              );

              return (
                <li key={channel.label}>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      {...(channel.external
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      className="card-interactive flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="card-interactive flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                      {content}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <div className="card-interactive flex h-full flex-col justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                Prefer the short version?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                My CV covers the same projects in one page — stack, role and the
                parts of each system I owned.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.cvPath}
                download={site.cvFileName}
                className="btn-primary inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-[var(--accent)]/15 transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] dark:text-[#04121a]"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download CV
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-strong)] px-5 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Send an email
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
