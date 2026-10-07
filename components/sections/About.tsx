import { profile } from "@/data/profile";
import { educations } from "@/data/education";
import SectionHeader from "@/components/ui/SectionHeader";
import CopyButton from "@/components/ui/CopyButton";
import { Reveal } from "@/components/motion/Reveal";

export default function About() {
  const [lead, ...rest] = profile.aboutMe.split("\n\n");
  const gpa = educations[0]?.gpa;

  const details = [
    { label: "Location", value: profile.location },
    { label: "University", value: profile.university },
    { label: "Program", value: profile.program },
    ...(gpa ? [{ label: "GPA", value: gpa }] : []),
    { label: "Interests", value: profile.interests },
  ];

  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="container-page">
        <SectionHeader id="about" label="About" title="Curious by nature," emphasis="building with purpose." />

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-9 md:col-start-4">
            <Reveal>
              <p className="font-serif text-2xl leading-[1.4] text-fg md:text-[2.1rem] md:leading-[1.35]">
                {lead}
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 text-base leading-relaxed text-fg-muted md:grid-cols-2 md:gap-10">
              {rest.map((paragraph, i) => (
                <Reveal key={i} delay={0.1 * (i + 1)}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <dl className="mt-14 grid border-t border-line sm:grid-cols-2">
                {details.map((d) => (
                  <div
                    key={d.label}
                    className="flex flex-col gap-1 border-b border-line py-4 sm:pr-6 sm:odd:border-r sm:even:pl-6"
                  >
                    <dt className="eyebrow">{d.label}</dt>
                    <dd className="text-[15px] text-fg">{d.value}</dd>
                  </div>
                ))}
                <div className="flex flex-col gap-1 border-b border-line py-4 sm:pr-6 sm:odd:border-r sm:even:pl-6">
                  <dt className="eyebrow">Email</dt>
                  <dd className="-my-2 flex min-w-0 items-center gap-1 text-[15px]">
                    <a href={`mailto:${profile.email}`} className="link-underline truncate text-fg">
                      {profile.email}
                    </a>
                    <CopyButton value={profile.email} label="Copy email address" className="h-9 w-9 shrink-0" />
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
