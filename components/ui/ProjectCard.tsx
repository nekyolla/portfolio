"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card overflow-hidden group"
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-neutral-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
            (e.target as HTMLImageElement).parentElement!.innerHTML +=
              '<span class="text-4xl opacity-30 grayscale absolute inset-0 flex items-center justify-center">🖥️</span>';
          }}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors"
          >
            View Details
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-semibold text-white group-hover:text-neutral-300 transition-colors line-clamp-1 mb-2">
          {project.title}
        </h3>

        <p className="text-neutral-500 text-sm mb-4 line-clamp-2">
          {project.shortDesc}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] rounded-md bg-neutral-800/50 text-neutral-500 border border-neutral-800"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-0.5 text-[11px] rounded-md bg-neutral-800/50 text-neutral-600">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
