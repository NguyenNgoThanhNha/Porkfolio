import Image from "next/image";

import type { Project } from "@/data/projects";
import { ProjectLogo } from "@/components/project-logo";

/**
 * Card cover: domain photograph + project mark.
 * Client systems stay confidential — these are atmospheric covers, not
 * screenshots. Drop a file at `project.coverImage` to replace one later.
 */
export function ProjectMockup({ project }: { project: Project }) {
  return (
    <div className="relative aspect-16/9 w-full overflow-hidden rounded-t-xl border-b border-[var(--border)] bg-[var(--background-alt)]">
      <div className="mockup-zoom absolute inset-0">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt=""
            fill
            sizes="(min-width: 768px) 28rem, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-[var(--background-alt)]" />
        )}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
        <div className="flex min-w-0 items-center gap-3">
          <ProjectLogo
            id={project.id}
            title={project.title}
            className="h-11 w-11 shrink-0"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white drop-shadow">
              {project.title}
            </p>
            <p className="truncate text-[11px] text-white/75">
              {project.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
