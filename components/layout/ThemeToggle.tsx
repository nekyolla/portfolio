"use client";

import { useEffect, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY, type Theme } from "@/components/providers/theme";
import { cn } from "@/lib/utils";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

const getTheme = (): Theme =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

function readStoredTheme(): string | null {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

function applyTheme(next: Theme, origin?: { x: number; y: number }) {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!document.startViewTransition || reduceMotion || !origin) {
    root.dataset.theme = next;
    return;
  }

  // Circular reveal from the toggle button
  const radius = Math.hypot(
    Math.max(origin.x, window.innerWidth - origin.x),
    Math.max(origin.y, window.innerHeight - origin.y)
  );
  const transition = document.startViewTransition(() => {
    root.dataset.theme = next;
  });
  transition.ready
    .then(() => {
      root.animate(
        {
          clipPath: [
            `circle(0px at ${origin.x}px ${origin.y}px)`,
            `circle(${radius}px at ${origin.x}px ${origin.y}px)`,
          ],
        },
        {
          duration: 700,
          easing: "cubic-bezier(0.76, 0, 0.24, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    })
    .catch(() => {});
}

export default function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore<Theme | null>(subscribe, getTheme, () => null);

  // Follow OS changes as long as the visitor hasn't picked a theme explicitly
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      const stored = readStoredTheme();
      if (stored !== "light" && stored !== "dark") {
        document.documentElement.dataset.theme = e.matches ? "dark" : "light";
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const isDark = theme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={(e) => {
        const next: Theme = isDark ? "light" : "dark";
        const rect = e.currentTarget.getBoundingClientRect();
        try {
          localStorage.setItem(THEME_STORAGE_KEY, next);
        } catch {
          /* storage unavailable (private mode) — theme still applies for this visit */
        }
        applyTheme(next, { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      }}
      className={cn("icon-btn relative overflow-hidden", className)}
      aria-label={label}
      title={label}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme && (
          <motion.span
            key={theme}
            initial={{ y: -14, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 14, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex"
          >
            {isDark ? <Moon size={18} strokeWidth={1.75} /> : <Sun size={18} strokeWidth={1.75} />}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
