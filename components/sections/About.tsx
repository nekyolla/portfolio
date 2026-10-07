"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { educations } from "@/data/education";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About Me" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-neutral-400 leading-relaxed space-y-4 text-justify">
              {profile.aboutMe.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Personal Details card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="card p-6">
              <h3 className="text-base font-semibold text-white mb-6">Personal Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-neutral-800/50">
                  <span className="text-sm text-neutral-500">Location</span>
                  <span className="text-sm text-white">{profile.location}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-800/50">
                  <span className="text-sm text-neutral-500">University</span>
                  <span className="text-sm text-white">{profile.university}</span>
                </div>
                {educations[0]?.gpa && (
                  <div className="flex justify-between items-center py-2 border-b border-neutral-800/50">
                    <span className="text-sm text-neutral-500">GPA</span>
                    <span className="text-sm text-white">{educations[0].gpa}</span>
                  </div>
                )}
                <div className="flex justify-between items-center py-2 border-b border-neutral-800/50">
                  <span className="text-sm text-neutral-500">Interests</span>
                  <span className="text-sm text-white">Data Science, Machine Learning & AI</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-neutral-500">Email</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm text-white hover:text-neutral-300 transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
