import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/types";
import { hasValue, padIndex } from "@/lib/utils";

/** One project as an editorial row (period on the left, details on the right). The whole row links to the detail page. */
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const titleId = `project-${project.slug}-title`;

  return (
    <article aria-labelledby={titleId} className="group relative grid gap-4 py-8 md:grid-cols-12 md:gap-6 md:py-10">
      <div className="md:col-span-3 md:pt-2">
        <p className="eyebrow flex items-center gap-3">
          <span className="text-accent">{padIndex(index)}</span>
          <span aria-hidden className="h-px w-5 bg-line-strong" />
          {project.period}
        </p>
        {project.role && <p className="mt-2 text-sm text-fg-subtle">{project.role}</p>}
      </div>

      <div className="md:col-span-9">
        <h3 id={titleId} className="flex items-start justify-between gap-6 font-serif text-2xl leading-tight tracking-tight text-fg md:text-[2rem]">
          {/* Stretched link: the whole row opens the project page */}
          <Link
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 after:z-0 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-accent"
          >
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-700 ease-[var(--ease-out-expo)] group-hover:bg-[length:100%_1px]">
              {project.title}
            </span>
          </Link>
          <ArrowUpRight
            size={22}
            strokeWidth={1.5}
            aria-hidden
            className="mt-1 shrink-0 text-fg-subtle transition-[color,transform] duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          />
        </h3>

        <p className="mt-3 max-w-2xl leading-relaxed text-fg-muted">{project.shortDesc}</p>

        {project.impact && (
          <p className="mt-4 font-mono text-xs tracking-wide text-accent">
            <span className="sr-only">Impact: </span>
            {project.impact}
          </p>
        )}

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.techStack.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>

        {(hasValue(project.githubUrl) || hasValue(project.liveUrl)) && (
          // z-10 keeps these links clickable above the stretched row link
          <div className="relative z-10 mt-3 flex gap-5 text-sm">
            {hasValue(project.githubUrl) && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 text-fg-muted transition-colors hover:text-fg"
              >
                <FaGithub size={15} aria-hidden />
                Source
                <span className="sr-only">code for {project.title} (opens in a new tab)</span>
              </a>
            )}
            {hasValue(project.liveUrl) && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1 text-fg-muted transition-colors hover:text-fg"
              >
                Live site
                <ArrowUpRight size={14} aria-hidden />
                <span className="sr-only">for {project.title} (opens in a new tab)</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
