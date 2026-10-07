import { RevealWords, Reveal } from "@/components/motion/Reveal";
import { sectionNumber } from "@/lib/sections";

interface SectionHeaderProps {
  /** Section id — used for the number and the heading id */
  id: string;
  label: string;
  title: string;
  /** Italic, accent-colored ending of the title */
  emphasis?: string;
  intro?: string;
}

export default function SectionHeader({ id, label, title, emphasis, intro }: SectionHeaderProps) {
  return (
    <header className="mb-14 grid gap-6 md:mb-20 md:grid-cols-12">
      <Reveal className="md:col-span-3">
        <p className="eyebrow flex items-center gap-3 md:pt-4">
          <span className="text-accent">{sectionNumber(id)}</span>
          <span aria-hidden className="h-px w-6 bg-line-strong" />
          {label}
        </p>
      </Reveal>
      <div className="md:col-span-9">
        <h2 id={`${id}-title`} className="display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl">
          <RevealWords text={title} emphasis={emphasis} />
        </h2>
        {intro && (
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">{intro}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
