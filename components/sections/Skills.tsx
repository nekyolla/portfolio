"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Skills" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="card card-hover p-4 flex items-center gap-3"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-7 h-7 object-contain"
                loading="lazy"
              />
              <span className="text-sm text-neutral-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
