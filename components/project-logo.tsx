import type { ReactNode, SVGProps } from "react";

import { cn } from "@/lib/utils";

type LogoProps = SVGProps<SVGSVGElement>;

const marks: Record<string, (props: LogoProps) => ReactNode> = {
  "vasg-sales-portal": VasgMark,
  "mps-icrm": MpsMark,
  "cabin-crew": CabinCrewMark,
  "npp-hr": NppMark,
  "vacs-catering": VacsMark,
  "solace-spa": SolaceMark,
  "helpdesk-ticketing": HelpdeskMark,
};

const tiles: Record<string, string> = {
  "vasg-sales-portal": "from-[#0b3a4a] to-[#155e75] text-[#67e8f9]",
  "mps-icrm": "from-[#1e3a5f] to-[#37628c] text-[#bfdbfe]",
  "cabin-crew": "from-[#0f172a] to-[#1e3a5f] text-[#f8fafc]",
  "npp-hr": "from-[#134e4a] to-[#0f766e] text-[#99f6e4]",
  "vacs-catering": "from-[#1e293b] to-[#334155] text-[#fdba74]",
  "solace-spa": "from-[#115e59] to-[#0d9488] text-[#ccfbf1]",
  "helpdesk-ticketing": "from-[#172554] to-[#1d4ed8] text-[#bae6fd]",
};

export function ProjectLogo({
  id,
  title,
  className,
  markClassName,
}: {
  id: string;
  title: string;
  className?: string;
  markClassName?: string;
}) {
  const Mark = marks[id] ?? FallbackMark;
  const tile = tiles[id] ?? "from-[var(--navy)] to-[var(--steel)] text-[var(--accent)]";

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-xl bg-gradient-to-br shadow-sm ring-1 ring-white/15",
        tile,
        className,
      )}
      title={title}
    >
      <Mark className={cn("h-[58%] w-[58%]", markClassName)} />
    </span>
  );
}

function VasgMark(props: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        d="M16 3.5 28 10.2v11.6L16 28.5 4 21.8V10.2L16 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M11 20.5 16 9.5l5 11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13.2 16.8h5.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function MpsMark(props: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx="11" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="21" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="21" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M13.6 13.8 14.6 18.4M18.4 13.8 17.4 18.4M14.2 12h3.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CabinCrewMark(props: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 17.5h22L16 7.5 5 17.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M16 7.5v13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10 24.5h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M12.5 21.5h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function NppMark(props: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect x="6" y="6" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="18" y="6" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="12" y="18" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M10 14v2.5A1.5 1.5 0 0 0 11.5 18H12M22 14v2.5A1.5 1.5 0 0 1 20.5 18H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function VacsMark(props: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 20.5c2.2-1.4 4.8-2.2 8-2.2h4c3.2 0 5.8.8 8 2.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect x="8" y="13" width="16" height="6.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M16 6.5c2.6 2.2 4 4.4 4 6.5h-8c0-2.1 1.4-4.3 4-6.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M11 24.5h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function SolaceMark(props: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        d="M16 26c5.2-3.4 8-7.2 8-11.2C24 9.4 20.4 6 16 6S8 9.4 8 14.8C8 18.8 10.8 22.6 16 26Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M16 10.5c1.8 1.6 2.8 3.2 2.8 4.8A2.8 2.8 0 1 1 16 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HelpdeskMark(props: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 10.5A2.5 2.5 0 0 1 7.5 8h17A2.5 2.5 0 0 1 27 10.5v2.3a3.2 3.2 0 0 0 0 6.4v2.3a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 5 21.5v-2.3a3.2 3.2 0 0 0 0-6.4v-2.3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M20.5 8v16" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 2" />
      <path
        d="m10.5 16 2 2 4-4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FallbackMark(props: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect x="6" y="6" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 16h10M16 11v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
