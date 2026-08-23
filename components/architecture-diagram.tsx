import { ChevronDown } from "lucide-react";

import type { ArchitectureLayer } from "@/data/projects";
import { cn } from "@/lib/utils";

const nodeStyles: Record<ArchitectureLayer["nodes"][number]["kind"], string> = {
  client: "border-[var(--steel)]/45 bg-[var(--steel-soft)] text-[var(--steel)]",
  service:
    "border-[var(--accent)]/40 bg-[var(--accent-soft)] text-[var(--accent-strong)]",
  data: "border-[var(--border-strong)] bg-[var(--surface)] text-[var(--foreground)]",
  external:
    "border-dashed border-[var(--border-strong)] bg-transparent text-[var(--muted)]",
};

const legend: { kind: keyof typeof nodeStyles; label: string }[] = [
  { kind: "client", label: "Client" },
  { kind: "service", label: "Application module" },
  { kind: "data", label: "Data store" },
  { kind: "external", label: "External system" },
];

/**
 * Deliberately simple, schematic view of a project — layers of boxes, top to
 * bottom. It is illustrative, not a reproduction of any client's real topology.
 */
export function ArchitectureDiagram({
  layers,
  className,
}: {
  layers: ArchitectureLayer[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[var(--border)] bg-[var(--background-alt)] p-5",
        className,
      )}
    >
      <div role="img" aria-label={buildAriaLabel(layers)}>
        {layers.map((layer, layerIndex) => (
          <div key={layer.title}>
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--subtle)]">
              {layer.title}
            </p>
            <div className="flex flex-wrap gap-2">
              {layer.nodes.map((node) => (
                <span
                  key={node.label}
                  className={cn(
                    "rounded-lg border px-3 py-2 text-xs font-medium transition-transform duration-300 hover:-translate-y-0.5",
                    nodeStyles[node.kind],
                  )}
                >
                  {node.label}
                </span>
              ))}
            </div>

            {layerIndex < layers.length - 1 ? (
              <div className="my-3 flex items-center gap-2 text-[var(--border-strong)]">
                <ChevronDown className="h-4 w-4" aria-hidden />
                <span className="h-px flex-1 bg-[var(--border)]" aria-hidden />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-[var(--border)] pt-4">
        {legend.map((item) => (
          <li
            key={item.kind}
            className="inline-flex items-center gap-2 text-[11px] text-[var(--subtle)]"
          >
            <span
              aria-hidden
              className={cn(
                "h-2.5 w-2.5 rounded-full border",
                nodeStyles[item.kind],
              )}
            />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

function buildAriaLabel(layers: ArchitectureLayer[]) {
  return layers
    .map(
      (layer) =>
        `${layer.title}: ${layer.nodes.map((node) => node.label).join(", ")}`,
    )
    .join(". ");
}
