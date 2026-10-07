"use client";

import { motion } from "framer-motion";
import { educations } from "@/data/education";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Education" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-neutral-800" />

          <div className="space-y-8">
            {educations.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-10"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 w-[15px] h-[15px] rounded-full border-2 border-neutral-600 bg-black z-10" />

                {/* Card */}
                <div className="card card-hover p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">
                        {edu.institution}
                      </h3>
                      <p className="text-sm text-neutral-400 mt-1">
                        {edu.degree} — {edu.major}
                      </p>
                    </div>
                    <span className="badge text-xs whitespace-nowrap mt-1">
                      {edu.period}
                    </span>
                  </div>

                  {/* Description */}
                  {edu.description && (
                    <p className="text-sm text-neutral-500 mt-4">
                      {edu.description}
                    </p>
                  )}

                  {/* GPA inline */}
                  {edu.gpa && (
                    <p className="text-sm text-neutral-400 mt-3">
                      GPA: {edu.gpa}
                      {edu.highlights && edu.highlights.length > 0 && ". "}
                      {edu.highlights?.join(" & ")}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
