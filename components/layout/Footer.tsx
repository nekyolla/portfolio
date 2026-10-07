"use client";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800/50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              {profile.nickname}<span className="text-neutral-500">.</span>
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
              {profile.title} & Aspiring ML Engineer dedicated to building
              impactful software through innovation and continuous learning.
            </p>
          </div>

          {/* Connect */}
          <div className="md:text-right">
            <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-5">
              Connect
            </h4>
            <div className="flex flex-col gap-3 md:items-end">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                <FaGithub size={16} />
                GitHub
                <span className="text-neutral-600">↗</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                <FaLinkedinIn size={16} />
                LinkedIn
                <span className="text-neutral-600">↗</span>
              </a>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                <FaInstagram size={16} />
                Instagram
                <span className="text-neutral-600">↗</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                <Mail size={16} />
                Email
                <span className="text-neutral-600">✉</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-6 border-t border-neutral-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-neutral-600">
            Crafted with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
