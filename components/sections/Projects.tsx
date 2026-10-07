import { projects } from "@/data/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/motion/Reveal";

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" aria-labelledby="projects-title" className="section">
      <div className="container-page">
        <SectionHeader
          id="projects"
          label="Projects"
          title="Selected"
          emphasis="work."
          intro="A mix of backend systems, cloud platforms and data tools — built for coursework, competitions and curiosity."
        />

        {featured && (
          <Reveal className="mb-16 md:mb-24">
            <ProjectCard project={featured} index={0} featured />
          </Reveal>
        )}

        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2 md:gap-y-20">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.1}>
              <ProjectCard project={project} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
