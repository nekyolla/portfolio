import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/types";
import { cn, hasValue, padIndex } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export default function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const titleId = `project-${project.slug}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className={cn("group relative flex flex-col gap-6", featured && "lg:grid lg:grid-cols-12 lg:items-center lg:gap-12")}
    >
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-muted",
          featured && "lg:col-span-7"
        )}
      >
        <Image
          src={project.thumbnail}
          alt=""
          fill
          sizes={featured ? "(min-width: 1024px) 660px, 100vw" : "(min-width: 768px) 540px, 100vw"}
          className="object-cover object-top transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        <span className="pointer-events-none absolute right-4 bottom-4 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-surface text-fg opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} strokeWidth={1.75} aria-hidden />
        </span>
      </div>

      <div className={cn("flex flex-1 flex-col", featured && "lg:col-span-5")}>
        <p className="eyebrow flex items-center gap-3">
          <span className="text-accent">{padIndex(index)}</span>
          <span aria-hidden className="h-px w-5 bg-line-strong" />
          {project.period}
          {project.role && <span className="hidden sm:inline">· {project.role}</span>}
        </p>

        <h3
          id={titleId}
          className={cn(
            "mt-4 font-serif tracking-tight text-fg",
            featured ? "text-3xl md:text-4xl lg:text-5xl" : "text-2xl md:text-3xl"
          )}
        >
          {/* Stretched link: the whole card opens the project page */}
          <Link
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 after:z-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-accent"
          >
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-700 ease-[var(--ease-out-expo)] group-hover:bg-[length:100%_1px]">
              {project.title}
            </span>
          </Link>
        </h3>

        <p className={cn("mt-3 leading-relaxed text-fg-muted", featured ? "text-base md:text-lg" : "line-clamp-3 text-[15px]")}>
          {project.shortDesc}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
            {project.techStack.slice(0, featured ? 7 : 4).map((tech) => (
              <li key={tech} className="tag">
                {tech}
              </li>
            ))}
            {project.techStack.length > (featured ? 7 : 4) && (
              <li className="tag">+{project.techStack.length - (featured ? 7 : 4)}</li>
            )}
          </ul>
        </div>

        {(hasValue(project.githubUrl) || hasValue(project.liveUrl)) && (
          // z-10 keeps these links clickable above the stretched card link
          <div className="relative z-10 mt-6 flex gap-5 text-sm">
            {hasValue(project.githubUrl) && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-fg-muted transition-colors hover:text-fg"
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
                className="inline-flex items-center gap-1 text-fg-muted transition-colors hover:text-fg"
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
