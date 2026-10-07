"use client";

import { motion } from "framer-motion";
import { organizations } from "@/data/organizations";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Organization() {
  return (
    <section id="organization" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Organizations" />

        <div className="grid md:grid-cols-2 gap-6">
          {organizations.map((org, index) => (
            <motion.div
              key={org.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card card-hover p-6"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-base font-semibold text-white">{org.name}</h3>
                  <p className="text-sm text-neutral-400 mt-0.5">{org.role}</p>
                </div>
                <span className="badge text-xs whitespace-nowrap">{org.period}</span>
              </div>

              <p className="text-sm text-neutral-500 mb-4">{org.description}</p>

              {org.achievements && org.achievements.length > 0 && (
                <ul className="space-y-1.5">
                  {org.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                      <span className="text-neutral-600 mt-1 text-xs">▹</span>
                      {a}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
