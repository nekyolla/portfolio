import type { Project } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Stand-in for a project screenshot: the first part of the impact line ("98.57% accuracy")
 * set large in the serif, the rest underneath, on the muted surface with a soft accent glow.
 * Fills its (relatively positioned) parent.
 */
export default function ProjectCover({ project, large = false }: { project: Project; large?: boolean }) {
  const [headline, ...rest] = (project.impact ?? project.title).split(" · ");

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-muted">
      <div className="absolute -right-1/4 -bottom-1/2 h-full w-3/4 rounded-full bg-accent/15 blur-3xl" />
      <div className={cn("relative flex h-full flex-col justify-between", large ? "p-6 sm:p-8 md:p-12" : "p-6 md:p-8")}>
        <span className="eyebrow">{project.techStack.slice(0, 3).join(" · ")}</span>
        <span>
          <span
            className={cn(
              "block font-serif leading-[1.02] tracking-tight text-fg",
              large ? "text-4xl sm:text-5xl md:text-6xl" : "text-3xl md:text-4xl"
            )}
          >
            {headline}
          </span>
          {rest.length > 0 && (
            <span className="mt-3 block font-mono text-xs tracking-wide text-accent md:text-sm">
              {rest.join(" · ")}
            </span>
          )}
        </span>
      </div>
    </div>
  );
}
