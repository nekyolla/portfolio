"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";

/** Floating "back to top" button with a ring that tracks reading progress. */
export default function BackToTop() {
  const lenis = useLenis();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 800));

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => {
            if (lenis) lenis.scrollTo(0);
            else window.scrollTo({ top: 0 });
            document.getElementById("main")?.focus({ preventScroll: true });
          }}
          className="group fixed right-5 bottom-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-line bg-surface/80 text-fg-muted shadow-lg backdrop-blur-md transition-colors hover:text-fg md:right-8 md:bottom-8"
          aria-label="Back to top"
        >
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 48 48" aria-hidden>
            <motion.circle
              cx="24"
              cy="24"
              r="22.5"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
              style={{ pathLength: progress }}
            />
          </svg>
          <ArrowUp
            size={16}
            strokeWidth={1.75}
            className="transition-transform duration-500 group-hover:-translate-y-0.5"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
