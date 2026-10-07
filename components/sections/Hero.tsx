"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
            >
              {profile.name.split(" ").slice(0, 2).join(" ")}
              <br />
              <span className="text-neutral-500">
                {profile.name.split(" ").slice(2).join(" ")}
              </span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-16 h-px bg-neutral-600 mb-6 origin-left"
            />

            {/* Roles */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-neutral-400 text-sm tracking-wide mb-8"
            >
              Backend Engineer &nbsp;|&nbsp; Machine Learning &nbsp;|&nbsp; Data Scientist
            </motion.p>

            {/* Bio card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="card p-6 mb-8 max-w-lg"
            >
              <p className="text-neutral-400 text-sm leading-relaxed text-justify">
                &ldquo;{profile.bio}&rdquo;
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-8"
            >
              <a
                href={profile.cvFile}
                download
                className="px-6 py-3 rounded-full bg-white text-black font-medium text-sm flex items-center gap-2 hover:bg-neutral-200 transition-colors duration-300"
              >
                Download CV
                <Download size={16} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="px-6 py-3 rounded-full border border-neutral-700 text-neutral-300 font-medium text-sm hover:border-neutral-500 hover:text-white transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-3"
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-600 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-600 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-600 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-neutral-800">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  const fallback = document.createElement("div");
                  fallback.className = "w-full h-full bg-neutral-900 flex items-center justify-center";
                  fallback.innerHTML = '<span class="text-7xl grayscale opacity-60">👨‍💻</span>';
                  (e.target as HTMLImageElement).parentElement!.appendChild(fallback);
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
