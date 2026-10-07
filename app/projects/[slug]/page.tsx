import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/motion/Reveal";
import { hasValue, padIndex } from "@/lib/utils";

type Params = { params: Promise<{ slug: string }> };

const delay = (ms: number) => ({ "--d": ms }) as React.CSSProperties;

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.shortDesc,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/projects/${project.slug}`,
      title: project.title,
      description: project.shortDesc,
    },
    twitter: { card: "summary_large_image", title: project.title, description: project.shortDesc },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const [lead, ...paragraphs] = project.fullDesc.split("\n\n");

  const meta = [
    { label: "Period", value: project.period },
    ...(project.role ? [{ label: "Role", value: project.role }] : []),
    ...(project.teamSize
      ? [{ label: "Team", value: project.teamSize === 1 ? "Solo project" : `${project.teamSize} people` }]
      : []),
  ];

  return (
    <article className="pt-28 md:pt-36">
      <div className="container-page">
        <Link
          href="/#projects"
          className="fade-up group inline-flex min-h-11 items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
          style={delay(0)}
        >
          <ArrowLeft size={16} aria-hidden className="transition-transform duration-500 group-hover:-translate-x-1" />
          All projects
        </Link>

        <header className="mt-10 grid gap-8 md:mt-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="eyebrow fade-up flex items-center gap-3" style={delay(80)}>
              <span className="text-accent">{padIndex(index)}</span>
              <span aria-hidden className="h-px w-6 bg-line-strong" />
              Project {index + 1} of {projects.length}
            </p>
            <h1 className="display mt-6 text-[2.75rem] sm:text-6xl lg:text-7xl">
              <span className="mask">
                <span className="rise" style={delay(150)}>
                  {project.title}
                </span>
              </span>
            </h1>
            <p
              className="fade-up mt-6 max-w-2xl font-serif text-xl leading-snug text-fg-muted md:text-2xl"
              style={delay(350)}
            >
              {project.shortDesc}
            </p>
          </div>

          <div className="fade-up flex flex-wrap items-end gap-3 lg:col-span-4 lg:justify-end" style={delay(450)}>
            {hasValue(project.liveUrl) && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Live site
                <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
            {hasValue(project.githubUrl) && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <FaGithub size={16} aria-hidden />
                Source code
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
          </div>
        </header>

        <dl className="fade-up mt-12 grid grid-cols-2 border-t border-line md:grid-cols-4" style={delay(550)}>
          {meta.map((m) => (
            <div key={m.label} className="border-b border-line py-4 pr-4">
              <dt className="eyebrow">{m.label}</dt>
              <dd className="mt-1 text-[15px]">{m.value}</dd>
            </div>
          ))}
          <div className="col-span-2 border-b border-line py-4 md:col-span-4 lg:col-span-1 lg:col-start-4 lg:row-start-1">
            <dt className="eyebrow">Stack</dt>
            <dd className="mt-1 text-[15px] text-fg-muted">{project.techStack.join(", ")}</dd>
          </div>
        </dl>

        <div
          className="fade-up relative mt-12 aspect-[16/10] overflow-hidden rounded-3xl border border-line bg-muted md:mt-16"
          style={delay(650)}
        >
          <Image
            src={project.thumbnail}
            alt={`Screenshot of ${project.title}`}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1200px) 1104px, 100vw"
            quality={85}
            className="object-cover object-top"
          />
        </div>

        <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <h2 className="eyebrow md:sticky md:top-28">Overview</h2>
          </Reveal>
          <div className="md:col-span-9">
            <Reveal>
              <p className="font-serif text-2xl leading-[1.4] md:text-[1.85rem]">{lead}</p>
            </Reveal>
            <div className="mt-8 space-y-6 text-[17px] leading-relaxed text-fg-muted">
              {paragraphs.map((p, i) => (
                <Reveal key={i}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-12">
            <Reveal className="md:col-span-3">
              <h2 className="eyebrow md:sticky md:top-28">Key highlights</h2>
            </Reveal>
            <ol className="border-t border-line md:col-span-9">
              {project.highlights.map((h, i) => (
                <Reveal as="li" key={i} delay={i * 0.04} className="flex gap-6 border-b border-line py-5">
                  <span className="pt-0.5 font-mono text-xs text-accent">{padIndex(i)}</span>
                  <span className="text-[17px] leading-relaxed">{h}</span>
                </Reveal>
              ))}
            </ol>
          </div>
        )}
      </div>

      {projects.length > 1 && (
        <nav aria-label="More projects" className="mt-28 border-t border-line md:mt-36">
          <div className="container-page grid md:grid-cols-2">
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex flex-col gap-3 border-b border-line py-10 md:border-r md:border-b-0 md:py-14 md:pr-10"
            >
              <span className="eyebrow inline-flex items-center gap-2">
                <ArrowLeft size={14} aria-hidden className="transition-transform duration-500 group-hover:-translate-x-1" />
                Previous
              </span>
              <span className="font-serif text-3xl tracking-tight transition-colors duration-300 group-hover:text-accent md:text-4xl">
                {prev.title}
              </span>
            </Link>
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col gap-3 py-10 md:items-end md:py-14 md:pl-10 md:text-right"
            >
              <span className="eyebrow inline-flex items-center gap-2">
                Next
                <ArrowRight size={14} aria-hidden className="transition-transform duration-500 group-hover:translate-x-1" />
              </span>
              <span className="font-serif text-3xl tracking-tight transition-colors duration-300 group-hover:text-accent md:text-4xl">
                {next.title}
              </span>
            </Link>
          </div>
        </nav>
      )}
    </article>
  );
}
