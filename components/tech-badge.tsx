import { cn } from "@/lib/utils";

type TechBadgeProps = {
  label: string;
  variant?: "default" | "accent" | "outline";
  className?: string;
};

export function TechBadge({
  label,
  variant = "default",
  className,
}: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 font-mono text-xs tracking-tight transition-all duration-300 hover:-translate-y-px",
        variant === "default" &&
          "bg-[var(--steel-soft)] text-[var(--steel)] ring-1 ring-inset ring-[var(--border)]",
        variant === "accent" &&
          "bg-[var(--accent-soft)] text-[var(--accent-strong)] ring-1 ring-inset ring-[var(--accent)]/30",
        variant === "outline" &&
          "text-[var(--muted)] ring-1 ring-inset ring-[var(--border-strong)]",
        className,
      )}
    >
      {label}
    </span>
  );
}
