import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import CopyButton from "@/components/ui/CopyButton";
import { Reveal, RevealWords } from "@/components/motion/Reveal";
import { sectionNumber } from "@/lib/sections";

const socials = [
  { href: profile.github, label: "GitHub" },
  { href: profile.linkedin, label: "LinkedIn" },
  { href: profile.instagram, label: "Instagram" },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section relative overflow-hidden">
      {/* soft accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="container-page relative">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="text-accent">{sectionNumber("contact")}</span>
            <span aria-hidden className="h-px w-6 bg-line-strong" />
            Contact
          </p>
        </Reveal>

        <h2 id="contact-title" className="display mt-8 max-w-5xl text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl">
          <RevealWords text="Let's build something" emphasis="meaningful." />
        </h2>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-fg-muted">
            Have a project, an opportunity, or just want to talk about data, machine learning and backend
            engineering? The fastest way to reach me is by email.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center gap-2 border-y border-line py-6">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex min-w-0 items-center gap-3 font-serif text-2xl tracking-tight break-all text-fg sm:text-3xl md:text-4xl"
            >
              <span className="link-underline">{profile.email}</span>
              <ArrowUpRight
                aria-hidden
                className="h-7 w-7 shrink-0 text-accent transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                strokeWidth={1.5}
              />
            </a>
            <CopyButton value={profile.email} label="Copy email address" />
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-fg-muted transition-colors hover:text-fg"
                  >
                    <span className="link-underline">{s.label}</span>
                    <ArrowUpRight
                      size={14}
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={profile.cvFile}
              download={`${profile.name.replace(/\s+/g, "-")}-CV.pdf`}
              className="btn btn-primary"
            >
              Download CV
              <ArrowDownToLine size={16} strokeWidth={1.75} aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
