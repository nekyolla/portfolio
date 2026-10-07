import { educations } from "@/data/education";
import SectionHeader from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="section">
      <div className="container-page">
        <SectionHeader id="education" label="Education" title="Academic" emphasis="foundation." />

        <ol className="border-t border-line">
          {educations.map((edu, index) => {
            const [score, scale] = edu.gpa?.split("/") ?? [];
            return (
              <Reveal as="li" key={edu.id} delay={index * 0.08} className="border-b border-line">
                <article className="grid gap-4 py-8 md:grid-cols-12 md:gap-6 md:py-10">
                  <p className="eyebrow md:col-span-3 md:pt-2">{edu.period}</p>

                  <div className="md:col-span-6">
                    <h3 className="font-serif text-2xl tracking-tight md:text-3xl">{edu.institution}</h3>
                    <p className="mt-2 text-fg-muted">
                      {edu.degree} — {edu.major}
                    </p>
                    {edu.description && (
                      <p className="mt-4 max-w-md text-sm leading-relaxed text-fg-subtle">{edu.description}</p>
                    )}
                    {edu.highlights && edu.highlights.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {edu.highlights.map((h) => (
                          <li key={h} className="tag">
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {score && (
                    <p className="md:col-span-3 md:text-right">
                      <span className="eyebrow block md:mb-1">{scale === "100" ? "Final score" : "GPA"}</span>
                      <span className="font-serif text-4xl tracking-tight md:text-5xl">{score}</span>
                      {scale && <span className="ml-1 font-mono text-xs text-fg-subtle">/ {scale}</span>}
                    </p>
                  )}
                </article>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
