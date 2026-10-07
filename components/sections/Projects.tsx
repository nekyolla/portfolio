"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
