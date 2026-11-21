import { projects } from "@/data/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/motion/Reveal";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section">
      <div className="container-page">
        <SectionHeader
          id="projects"
          label="Projects"
          title="Selected"
          emphasis="work."
          intro="A mix of machine learning, backend systems, cloud platforms and data tools — built for coursework, community service and curiosity."
        />

        {/* Order follows data/projects.ts: most relevant first */}
        <ol className="border-t border-line">
          {projects.map((project, i) => (
            <Reveal as="li" key={project.id} delay={Math.min(i, 3) * 0.05} className="border-b border-line">
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
