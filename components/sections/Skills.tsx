import { skills } from "@/data/skills";
import type { Skill, SkillCategory } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillIcon from "@/components/ui/SkillIcon";
import { Reveal } from "@/components/motion/Reveal";

const CATEGORY_ORDER: SkillCategory[] = [
  "Languages",
  "Frameworks & Libraries",
  "Databases & BaaS",
  "Tools & Platforms",
];

export default function Skills() {
  const groups = CATEGORY_ORDER.map((category) => ({
    category,
    items: skills.filter((s) => s.category === category),
  })).filter((g) => g.items.length > 0);

  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <div className="container-page">
        <SectionHeader id="skills" label="Skills" title="Tools of" emphasis="the craft." />

        <div className="border-t border-line">
          {groups.map((group, gi) => (
            <Reveal
              key={group.category}
              delay={gi * 0.06}
              className="grid gap-5 border-b border-line py-8 md:grid-cols-12 md:gap-6 md:py-10"
            >
              <h3 className="eyebrow flex items-center gap-3 md:col-span-3 md:pt-3">
                {group.category}
                <span className="text-accent">{String(group.items.length).padStart(2, "0")}</span>
              </h3>
              <ul className="flex flex-wrap gap-2 md:col-span-9 md:gap-2.5">
                {group.items.map((skill) => (
                  <SkillChip key={skill.name} skill={skill} />
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillChip({ skill }: { skill: Skill }) {
  return (
    <li
      className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pr-4 pl-1.5 transition-[border-color,transform,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-0.5 hover:border-line-strong hover:shadow-sm"
      style={{ "--brand": skill.color ?? "var(--fg)" } as React.CSSProperties}
    >
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-muted text-fg-muted transition-[color,transform] duration-500 group-hover:-rotate-12 group-hover:text-[var(--brand)]">
        <SkillIcon icon={skill.icon} className="h-4 w-4" />
      </span>
      <span className="text-[15px] text-fg">{skill.name}</span>
    </li>
  );
}
