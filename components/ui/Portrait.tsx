"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface PortraitProps {
  src: string;
  alt: string;
  caption: React.ReactNode;
}

/** Arch-shaped portrait with a gentle scroll parallax. */
export default function Portrait({ src, alt, caption }: PortraitProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <figure ref={ref} className="fade-in relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:mr-0 lg:max-w-[420px]" style={{ "--d": 250 } as React.CSSProperties}>
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
      <figcaption className="eyebrow mt-4 flex items-center justify-between">{caption}</figcaption>
    </figure>
  );
}
