"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, children, className = "" }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`relative z-10 max-h-[90vh] overflow-y-auto card p-6 ${className}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors z-20"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface LightboxProps {
  images: { src: string; caption?: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({ images, currentIndex, isOpen, onClose, onPrev, onNext }: LightboxProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") onPrev();
    if (e.key === "ArrowRight") onNext();
    if (e.key === "Escape") onClose();
  }, [onPrev, onNext, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || images.length === 0) return null;
  const current = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors z-20"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-4 p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors z-20"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-4 p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors z-20"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-[90vw] max-h-[85vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current.src}
            alt={current.caption || "Gallery image"}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
          {current.caption && (
            <p className="text-center text-neutral-400 mt-4 text-sm">{current.caption}</p>
          )}
          {images.length > 1 && (
            <p className="text-center text-neutral-600 text-xs mt-2">
              {currentIndex + 1} / {images.length}
            </p>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
