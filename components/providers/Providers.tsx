"use client";

import { MotionConfig } from "framer-motion";
import { ReactLenis } from "lenis/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    // reducedMotion="user": Framer skips transform/layout animations when the OS asks for less motion.
    // Lenis does the same for smooth scrolling (respectReducedMotion defaults to true).
    <MotionConfig reducedMotion="user">
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          wheelMultiplier: 1,
          anchors: { offset: -16 },
          stopInertiaOnNavigate: true,
        }}
      >
        {children}
      </ReactLenis>
    </MotionConfig>
  );
}
