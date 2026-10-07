"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const tags = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
  section: motion.section,
  header: motion.header,
  p: motion.p,
  span: motion.span,
} as const;

interface RevealProps {
  children: React.ReactNode;
  as?: keyof typeof tags;
  delay?: number;
  className?: string;
  id?: string;
}

/** Fades + un-blurs its children the first time they scroll into view. */
export function Reveal({ children, as = "div", delay = 0, className, id }: RevealProps) {
  const Component = tags[as];
  return (
    <Component
      id={id}
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </Component>
  );
}

interface RevealWordsProps {
  text: string;
  /** Rendered in italic serif after `text` */
  emphasis?: string;
  className?: string;
  delay?: number;
}

/** Masked, word-by-word slide-up for headings, triggered on scroll. */
export function RevealWords({ text, emphasis, className, delay = 0 }: RevealWordsProps) {
  const words = [
    ...text.split(" ").filter(Boolean).map((w) => ({ w, em: false })),
    ...(emphasis ?? "").split(" ").filter(Boolean).map((w) => ({ w, em: true })),
  ];

  return (
    <motion.span
      className={cn("block", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
    >
      {words.map(({ w, em }, i) => (
        <span key={i}>
          <span className="mask">
            <motion.span
              className={cn("inline-block", em && "italic text-accent")}
              variants={{
                hidden: { y: "110%" },
                visible: { y: "0%", transition: { duration: 1, ease: EASE } },
              }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </motion.span>
  );
}
