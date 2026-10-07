"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import type { GalleryItem } from "@/types";
import Dialog from "@/components/ui/Dialog";

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const current = index !== null ? items[index] : null;

  const prev = () => setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
  const next = () => setIndex((i) => (i === null ? i : (i + 1) % items.length));

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
      if (e.key === "ArrowRight") setIndex((i) => (i === null ? i : (i + 1) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, items.length]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        {items.map((item, i) => (
          <li key={item.id} className={i % 5 === 0 ? "col-span-2 row-span-2" : undefined}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-haspopup="dialog"
              className="group relative block aspect-square w-full overflow-hidden rounded-2xl border border-line bg-muted text-left"
            >
              <Image
                src={item.image}
                alt={item.alt ?? item.caption}
                fill
                sizes={i % 5 === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 50vw"}
                className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                {item.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog
        open={open}
        onClose={() => setIndex(null)}
        labelledBy="gallery-dialog-caption"
        className="sm:max-w-5xl"
        outside={
          items.length > 1 && (
            <div className="pointer-events-none absolute inset-x-3 bottom-4 z-20 flex justify-between sm:inset-x-6 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2">
              <button type="button" onClick={prev} className="icon-btn pointer-events-auto bg-surface text-fg shadow-lg" aria-label="Previous photo">
                <ChevronLeft size={20} />
              </button>
              <button type="button" onClick={next} className="icon-btn pointer-events-auto bg-surface text-fg shadow-lg" aria-label="Next photo">
                <ChevronRight size={20} />
              </button>
            </div>
          )
        }
      >
        {current && index !== null && (
          <figure>
            <div className="relative h-[60svh] w-full bg-[#0d0c0b] sm:h-[70svh]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.image}
                    alt={current.alt ?? current.caption}
                    fill
                    sizes="(min-width: 1024px) 1024px, 100vw"
                    quality={85}
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <figcaption className="flex flex-wrap items-center justify-between gap-3 p-5 md:p-6">
              <span id="gallery-dialog-caption" className="font-serif text-xl tracking-tight">
                {current.caption}
              </span>
              <span className="flex flex-wrap items-center gap-4 text-xs text-fg-subtle">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={13} aria-hidden />
                  {current.date}
                </span>
                {current.location && (
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} aria-hidden />
                    {current.location}
                  </span>
                )}
                {items.length > 1 && (
                  <span className="font-mono" aria-live="polite">
                    {index + 1} / {items.length}
                  </span>
                )}
              </span>
            </figcaption>
          </figure>
        )}
      </Dialog>
    </>
  );
}
