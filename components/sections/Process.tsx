import SectionHeader from "@/components/ui/SectionHeader";
import CountUp from "@/components/ui/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/data/projects";

const steps = [
  {
    title: "Frame the problem",
    body: "Start from who uses it and which decision it supports. In SKP: students report, advisors verify.",
  },
  {
    title: "Model the data",
    body: "Pick storage by shape: PostgreSQL for roles and permissions, MongoDB for fields that change per category.",
  },
  {
    title: "Build and secure",
    body: "REST API with JWT and RBAC middleware, plus OWASP Top 10 mitigations on the Bengkel backend.",
  },
  {
    title: "Document and ship",
    body: "Swagger docs and serverless deploys, so teammates and other groups can plug in (CloudTrack's shared API contract).",
  },
];

// Every number here comes from data/projects.ts (SKP and Bengkel Brainrot highlights) — keep them in sync.
const stats = [
  { value: 20, suffix: "+", label: "Documented API endpoints" },
  { value: 66, label: "Workshop locations mapped" },
  { value: 6, label: "Achievement types, one flexible schema" },
  { value: projects.length, label: "Projects shipped" },
];

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section">
      <div className="container-page">
        <SectionHeader id="process" label="Process" title="How I" emphasis="work." />

        {/* gap-px over a line-colored background draws the hairlines between cells */}
        <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {steps.map((s, i) => (
            // The cell keeps its background while the content reveals, so no line-colored block flashes
            <li key={s.title} className="bg-bg">
              <Reveal delay={i * 0.08} className="h-full p-8">
                <span className="eyebrow block text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-2xl tracking-tight">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-fg-muted">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
          {stats.map((s) => (
            // justify-between pins the numbers to one baseline even when labels wrap differently
            <div key={s.label} className="flex flex-col justify-between gap-3 border-t border-line pt-5">
              <dt className="eyebrow">{s.label}</dt>
              <dd className="display text-5xl md:text-6xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
