"use client";

import { useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useFocusTrap, useIsClient, useScrollLock } from "@/lib/hooks";
import { cn } from "@/lib/utils";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  /** id of the element that names the dialog */
  labelledBy: string;
  children: React.ReactNode;
  className?: string;
  /** Extra content rendered outside the panel (e.g. lightbox arrows) */
  outside?: React.ReactNode;
}

/**
 * Accessible modal dialog: rendered in a portal, traps focus, closes on Escape
 * or backdrop click, locks page scroll and returns focus to the trigger.
 */
export default function Dialog({ open, onClose, labelledBy, children, className, outside }: DialogProps) {
  const isClient = useIsClient();
  const panelRef = useRef<HTMLDivElement>(null);

  useScrollLock(open);
  useFocusTrap(panelRef, open, onClose);

  if (!isClient) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="dialog"
          className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute inset-0 bg-[#0d0c0b]/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          {outside}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            tabIndex={-1}
            data-lenis-prevent
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative z-10 max-h-[92svh] w-full overflow-y-auto overscroll-contain rounded-t-3xl border border-line bg-surface shadow-2xl outline-none sm:rounded-3xl",
              className
            )}
          >
            <button
              type="button"
              onClick={onClose}
              className="icon-btn absolute top-3 right-3 z-20 bg-surface/80 backdrop-blur"
              aria-label="Close dialog"
            >
              <X size={18} strokeWidth={1.75} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
