"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { useLenis } from "lenis/react";
import { profile } from "@/data/profile";
import { sections } from "@/lib/sections";
import { useFocusTrap, useScrollLock } from "@/lib/hooks";
import { cn, padIndex } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

const EASE = [0.16, 1, 0.3, 1] as const;

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // A thin band across the middle of the viewport decides which section is "current"
      { rootMargin: "-45% 0px -54% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [enabled]);

  return enabled ? active : null;
}

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const lenis = useLenis();
  const active = useActiveSection(isHome);

  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pendingTarget = useRef<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 16);
    // Hide while reading downwards, reveal as soon as the visitor scrolls up
    if (y > 320 && y > prev + 6) setHidden(true);
    else if (y < prev - 6 || y <= 320) setHidden(false);
  });

  const closeMenu = () => setMenuOpen(false);
  useScrollLock(menuOpen);
  useFocusTrap(menuRef, menuOpen, closeMenu);

  const hrefFor = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  const scrollToPending = () => {
    const id = pendingTarget.current;
    pendingTarget.current = null;
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { force: true });
    else el.scrollIntoView();
    history.replaceState(null, "", `#${id}`);
  };

  const NavAnchor = isHome ? "a" : Link;

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden && !menuOpen ? "-110%" : "0%" }}
        transition={{ duration: 0.6, ease: EASE }}
        onFocusCapture={() => setHidden(false)}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled
            ? "border-b border-line/70 bg-bg/75 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent"
        )}
      >
        <div className="container-page flex h-16 items-center justify-between gap-6 md:h-[4.5rem]">
          {isHome ? (
            <a href="#home" className="font-serif text-xl tracking-tight text-fg">
              {profile.nickname}
              <span className="text-accent">.</span>
            </a>
          ) : (
            <Link href="/" className="font-serif text-xl tracking-tight text-fg">
              {profile.nickname}
              <span className="text-accent">.</span>
            </Link>
          )}

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {sections.map((s) => {
                const isActive = active === s.id;
                return (
                  <li key={s.id}>
                    <NavAnchor
                      href={hrefFor(s.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative block px-3 py-2 text-[13px] tracking-wide transition-colors duration-300",
                        isActive ? "text-fg" : "text-fg-subtle hover:text-fg"
                      )}
                    >
                      {s.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute inset-x-3 -bottom-px h-px bg-fg"
                          transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                        />
                      )}
                    </NavAnchor>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <a
              href={profile.cvFile}
              download={`${profile.name.replace(/\s+/g, "-")}-CV.pdf`}
              className="btn btn-ghost ml-2 hidden min-h-0 py-2 text-[13px] sm:inline-flex"
            >
              Résumé
              <ArrowDownToLine size={14} strokeWidth={1.75} aria-hidden />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="ml-1 inline-flex h-11 items-center gap-2 rounded-full px-3 text-[13px] text-fg lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className="flex w-5 flex-col gap-[5px]" aria-hidden>
                <span className="h-px w-full bg-current" />
                <span className="h-px w-3/4 bg-current" />
              </span>
              Menu
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence onExitComplete={scrollToPending}>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] flex flex-col bg-bg lg:hidden"
            data-lenis-prevent
          >
            <div className="container-page flex h-16 shrink-0 items-center justify-between">
              <span className="font-serif text-xl tracking-tight">
                {profile.nickname}
                <span className="text-accent">.</span>
              </span>
              <div className="flex items-center gap-1">
                <ThemeToggle />
                <button
                  type="button"
                  onClick={closeMenu}
                  className="inline-flex h-11 items-center gap-2 rounded-full px-3 text-[13px]"
                >
                  <span className="relative block h-3 w-4" aria-hidden>
                    <span className="absolute top-1/2 h-px w-full rotate-45 bg-current" />
                    <span className="absolute top-1/2 h-px w-full -rotate-45 bg-current" />
                  </span>
                  Close
                </button>
              </div>
            </div>

            <nav aria-label="Mobile" className="container-page flex-1 overflow-y-auto py-8">
              <ul className="flex flex-col">
                {sections.map((s, i) => (
                  <motion.li
                    key={s.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.6, delay: 0.25 + i * 0.05, ease: EASE }}
                    className="border-b border-line"
                  >
                    <NavAnchor
                      href={hrefFor(s.id)}
                      onClick={(e: React.MouseEvent) => {
                        if (isHome) {
                          e.preventDefault();
                          pendingTarget.current = s.id;
                        }
                        closeMenu();
                      }}
                      aria-current={active === s.id ? "true" : undefined}
                      className="group flex items-baseline gap-4 py-4"
                    >
                      <span className="eyebrow w-6">{padIndex(i)}</span>
                      <span
                        className={cn(
                          "font-serif text-4xl tracking-tight transition-colors duration-300 sm:text-5xl",
                          active === s.id ? "text-accent" : "text-fg group-hover:text-accent"
                        )}
                      >
                        {s.label}
                      </span>
                    </NavAnchor>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6 } }}
              exit={{ opacity: 0 }}
              className="container-page flex shrink-0 flex-wrap items-center justify-between gap-4 border-t border-line py-6 text-sm"
            >
              <a href={`mailto:${profile.email}`} className="link-underline text-fg-muted">
                {profile.email}
              </a>
              <div className="flex gap-5 text-fg-muted">
                {[
                  { href: profile.github, label: "GitHub" },
                  { href: profile.linkedin, label: "LinkedIn" },
                  { href: profile.instagram, label: "Instagram" },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-fg"
                  >
                    {l.label}
                    <ArrowUpRight size={14} aria-hidden />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
