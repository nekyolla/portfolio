"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface PortraitProps {
  src: string;
  alt: string;
  caption: React.ReactNode;
  /** Pinned over the bottom-left of the arch (kept clear of the face, which sits right of center) */
  overlay?: React.ReactNode;
}

/** Arch-shaped portrait with a gentle scroll parallax. */
export default function Portrait({ src, alt, caption, overlay }: PortraitProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <figure ref={ref} className="fade-in relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:mr-0 lg:max-w-[420px]" style={{ "--d": 250 } as React.CSSProperties}>
      {/* Positioning context for the overlay is the arch itself, not the figure (which includes the caption) */}
      <div className="relative">
        <div className="group relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2rem] border border-line bg-muted">
          <motion.div style={{ y, scale }} className="absolute inset-x-0 -top-[6%] h-[112%] will-change-transform">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 360px, 300px"
              quality={85}
              loading="eager"
              fetchPriority="high"
              className="object-cover object-[72%_50%] grayscale-[0.45] transition-[filter] duration-1000 group-hover:grayscale-0"
            />
          </motion.div>
        </div>
        {overlay && (
          // Mobile: hangs below the arch over the rocks; sm+: sits on the lower-left. Either way it stays clear of the face.
          <div
            className="fade-up absolute -bottom-10 -left-3 z-10 sm:bottom-12 sm:-left-10 lg:bottom-6 lg:-left-6 xl:bottom-12 xl:-left-16"
            style={{ "--d": 1100 } as React.CSSProperties}
          >
            {overlay}
          </div>
        )}
      </div>
      <figcaption className={`eyebrow flex items-center justify-between ${overlay ? "mt-14 sm:mt-4" : "mt-4"}`}>
        {caption}
      </figcaption>
    </figure>
  );
}
