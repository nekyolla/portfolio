"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Counts up to `to` the first time it scrolls into view.
 * The server renders the final value (no-JS, crawlers). On the client, numbers that start
 * off-screen reset to 0 and count up once any part of them is visible; numbers already on
 * screen when JS takes over (reload, hash link) keep the final value instead of flashing.
 * With reduced motion the final value simply stays. Screen readers always get the final
 * value from the sr-only copy instead of a changing number.
 */
export default function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const startedOnScreen = useRef<boolean | null>(null);
  const final = `${to}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (startedOnScreen.current === null) {
      const rect = el.getBoundingClientRect();
      startedOnScreen.current = rect.top < window.innerHeight && rect.bottom > 0;
    }
    if (reduce || startedOnScreen.current) {
      el.textContent = final;
      return;
    }
    if (!inView) {
      el.textContent = `0${suffix}`;
      return;
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, to, suffix, final]);

  return (
    <>
      <span className="sr-only">{final}</span>
      <span ref={ref} aria-hidden className="tabular-nums">
        {final}
      </span>
    </>
  );
}
