import { experiences } from "@/data/experience";
import SectionHeader from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";

export default function Experience() {
  if (experiences.length === 0) return null;

  return (
    <section id="experience" aria-labelledby="experience-title" className="section">
      <div className="container-page">
        <SectionHeader id="experience" label="Experience" title="Work" emphasis="experience." />

        <ol className="border-t border-line">
          {experiences.map((exp, index) => (
            <Reveal as="li" key={exp.id} delay={index * 0.08} className="border-b border-line">
              <article className="grid gap-4 py-8 md:grid-cols-12 md:gap-6 md:py-10">
                <div className="md:col-span-3 md:pt-2">
                  <p className="eyebrow">{exp.period}</p>
                  <p className="mt-2 text-sm text-fg-subtle">{exp.location}</p>
                  {exp.type && <p className="tag mt-3">{exp.type}</p>}
                </div>

                <div className="md:col-span-9">
                  <h3 className="font-serif text-2xl leading-tight tracking-tight md:text-[2rem]">{exp.role}</h3>
                  <p className="mt-2 text-sm font-medium text-accent">{exp.company}</p>
                  {exp.unit && <p className="mt-1 text-sm text-fg-muted">{exp.unit}</p>}

                  <ul className="mt-6 space-y-3">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-fg-muted">
                        <span className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" aria-hidden />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.techStack && exp.techStack.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Tech stack">
                      {exp.techStack.map((t) => (
                        <li key={t} className="tag">
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
