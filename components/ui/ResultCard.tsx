import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { HeroSnippet } from "@/types";
import { projects } from "@/data/projects";

/** Small terminal-style card with a snippet from a real project, linking to that project. */
export default function ResultCard({ snippet }: { snippet: HeroSnippet }) {
  const project = projects.find((p) => p.slug === snippet.projectSlug);
  if (!project) return null;

  return (
    // Opaque surface: over the photo, any translucency drops the small text below 4.5:1.
    // The focus ring lives on the card (with a bg-colored halo) so it stays visible over the photo.
    <div className="group relative w-[236px] overflow-hidden rounded-xl border border-line bg-surface font-mono text-[11px] leading-relaxed shadow-xl transition-[transform,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:shadow-2xl has-[a:focus-visible]:shadow-[0_0_0_6px_var(--bg)] has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-accent sm:w-[260px]">
      <p className="flex items-center justify-between gap-3 border-b border-line px-3.5 py-2 text-fg-subtle">
        <span className="flex items-center gap-2">
          <span aria-hidden className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
            <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          {snippet.source}
        </span>
        {snippet.illustrative && <span className="tracking-wide uppercase">Illustrative</span>}
      </p>

      <p className="px-3.5 pt-3 text-fg">
        <span className="text-accent">{snippet.request.method}</span> {snippet.request.path}
      </p>

      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 px-3.5 pt-2 pb-3">
        {snippet.rows.map((row) => (
          <div key={row.key} className="contents">
            <dt className="text-fg-subtle">{row.key}</dt>
            <dd className={row.highlight ? "inline-flex items-center gap-1 text-accent" : "text-fg"}>
              {row.value}
              {row.highlight && <Check size={12} strokeWidth={2} aria-hidden />}
            </dd>
          </div>
        ))}
      </dl>

      <p className="flex items-center justify-between border-t border-line px-3.5 py-2 text-fg-muted transition-colors group-hover:text-fg">
        {/* Stretched link: the whole card is clickable, but the link's name stays short */}
        <Link
          href={`/projects/${project.slug}`}
          className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none"
        >
          View project<span className="sr-only">: {project.title}</span>
        </Link>
        <ArrowUpRight
          size={13}
          aria-hidden
          className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </p>
    </div>
  );
}
