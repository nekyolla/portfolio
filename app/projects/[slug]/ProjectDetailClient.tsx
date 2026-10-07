"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Users, Calendar, Code2, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Project } from "@/types";

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero image (thumbnail) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full h-64 md:h-80 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-8 overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
              (e.target as HTMLImageElement).parentElement!.innerHTML =
                '<span class="text-6xl opacity-20 grayscale">🖥️</span>';
            }}
          />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {project.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {project.period}
            </span>
            {project.role && (
              <span className="flex items-center gap-1.5">
                <Code2 size={14} />
                {project.role}
              </span>
            )}
            {project.teamSize && (
              <span className="flex items-center gap-1.5">
                <Users size={14} />
                Team of {project.teamSize}
              </span>
            )}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-neutral-900 text-neutral-400 border border-neutral-800"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 mb-10">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white transition-all text-sm"
              >
                <FaGithub size={16} />
                View Source
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-xl font-semibold text-white mb-4">About this Project</h2>
          <div className="text-neutral-400 leading-relaxed space-y-4">
            {project.fullDesc.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-10"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Key Highlights</h2>
            <ul className="space-y-3">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-400">
                  <CheckCircle2 size={18} className="text-neutral-500 flex-shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
}
