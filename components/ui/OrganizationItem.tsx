"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Organization } from "@/types";
import { cn, splitPlacement } from "@/lib/utils";

export default function OrganizationItem({ org }: { org: Organization }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const achievements = org.achievements ?? [];

  return (
    <article className="grid gap-4 py-8 md:grid-cols-12 md:gap-6 md:py-10">
      <p className="eyebrow md:col-span-3 md:pt-2">{org.period}</p>

      <div className="md:col-span-9">
        <h3 className="font-serif text-2xl leading-tight tracking-tight md:text-[2rem]">{org.name}</h3>
        <p className="mt-2 text-sm font-medium text-accent">{org.role}</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-fg-muted">{org.description}</p>

        {achievements.length > 0 && (
          <>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              className="group mt-6 inline-flex min-h-11 items-center gap-3 text-sm text-fg"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full border border-line-strong transition-colors duration-300 group-hover:border-fg">
                <Plus
                  size={14}
                  strokeWidth={1.75}
                  aria-hidden
                  className={cn("transition-transform duration-500 ease-[var(--ease-out-expo)]", open && "rotate-45")}
                />
              </span>
              {open ? "Hide" : "Show"} {achievements.length} highlight{achievements.length > 1 ? "s" : ""}
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={panelId}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="mt-6 grid gap-x-10 gap-y-3 md:grid-cols-2">
                    {achievements.map((a, i) => {
                      const { placement, title } = splitPlacement(a);
                      return (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.05 + i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                          className="flex items-start gap-3 text-[15px] leading-relaxed text-fg-muted"
                        >
                          {placement ? (
                            <span aria-hidden className="mt-0.5 shrink-0 rounded-full bg-muted px-2 py-0.5 font-mono text-[11px] text-fg">
                              {placement.replace(/\s*Place$/i, "")}
                            </span>
                          ) : (
                            <span className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" aria-hidden />
                          )}
                          <span>
                            {placement && <span className="sr-only">{placement}: </span>}
                            {title}
                          </span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </article>
  );
}
