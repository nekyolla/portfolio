"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Award, ArrowUpRight, Download, FileText } from "lucide-react";
import type { Certificate } from "@/types";
import Dialog from "@/components/ui/Dialog";
import CopyButton from "@/components/ui/CopyButton";
import { cn, hasValue } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CertificateGallery({ certificates }: { certificates: Certificate[] }) {
  const [filter, setFilter] = useState<string>("All");
  const [selected, setSelected] = useState<Certificate | null>(null);

  const issuers = useMemo(() => {
    const counts = new Map<string, number>();
    for (const c of certificates) counts.set(c.issuer, (counts.get(c.issuer) ?? 0) + 1);
    return [["All", certificates.length] as const, ...Array.from(counts.entries())];
  }, [certificates]);

  const visible = filter === "All" ? certificates : certificates.filter((c) => c.issuer === filter);

  return (
    <>
      {issuers.length > 2 && (
        <div role="group" aria-label="Filter certificates by issuer" className="mb-10 flex flex-wrap gap-2">
          {issuers.map(([issuer, count]) => {
            const active = filter === issuer;
            return (
              <button
                key={issuer}
                type="button"
                onClick={() => setFilter(issuer)}
                aria-pressed={active}
                className={cn(
                  "relative inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-sm transition-colors duration-300",
                  active ? "border-fg text-bg" : "border-line text-fg-muted hover:border-line-strong hover:text-fg"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="cert-filter"
                    className="absolute inset-0 -z-0 rounded-full bg-fg"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className="relative">{issuer}</span>
                <span className={cn("relative font-mono text-[11px]", active ? "text-bg/70" : "text-fg-subtle")}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      <motion.ul layout className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((cert) => (
            <motion.li
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <button
                type="button"
                onClick={() => setSelected(cert)}
                aria-haspopup="dialog"
                className="group block w-full rounded-2xl text-left"
              >
                <span className="relative block aspect-[1.414] overflow-hidden rounded-2xl border border-line bg-muted">
                  {cert.previewImage ? (
                    <Image
                      src={cert.previewImage}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.035]"
                    />
                  ) : (
                    <span className="absolute inset-0 grid place-items-center text-fg-subtle">
                      <Award size={40} strokeWidth={1} aria-hidden />
                    </span>
                  )}
                  <span className="absolute inset-0 rounded-2xl ring-1 ring-black/5 ring-inset" aria-hidden />
                </span>
                <span className="mt-4 block">
                  <span className="eyebrow block">
                    {cert.issuer} · {cert.date}
                  </span>
                  <span className="mt-2 block font-serif text-xl leading-snug tracking-tight text-fg transition-colors duration-300 group-hover:text-accent">
                    {cert.title}
                  </span>
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <Dialog
        open={selected !== null}
        onClose={() => setSelected(null)}
        labelledBy="certificate-dialog-title"
        className="sm:max-w-3xl"
      >
        {selected && (
          <div>
            <div className="relative aspect-[1.414] w-full overflow-hidden border-b border-line bg-muted">
              {selected.previewImage ? (
                <Image
                  src={selected.previewImage}
                  alt={`Certificate: ${selected.title}, issued by ${selected.issuer}`}
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  quality={85}
                  className="object-contain"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center text-fg-subtle">
                  <Award size={56} strokeWidth={1} aria-hidden />
                </div>
              )}
            </div>

            <div className="p-6 md:p-8">
              <p className="eyebrow">
                {selected.issuer} · {selected.date}
              </p>
              <h3 id="certificate-dialog-title" className="mt-3 font-serif text-2xl tracking-tight md:text-3xl">
                {selected.title}
              </h3>

              {hasValue(selected.credentialId) && (
                <p className="mt-4 flex items-center gap-1 font-mono text-xs text-fg-subtle">
                  Credential ID: <span className="text-fg-muted">{selected.credentialId}</span>
                  <CopyButton value={selected.credentialId} label="Copy credential ID" className="h-8 w-8" />
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                {hasValue(selected.credentialUrl) && (
                  <a href={selected.credentialUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Verify credential
                    <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
                {hasValue(selected.pdfFile) && (
                  <>
                    <a href={selected.pdfFile} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                      <FileText size={16} strokeWidth={1.75} aria-hidden />
                      Open PDF
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                    <a href={selected.pdfFile} download className="btn btn-ghost">
                      <Download size={16} strokeWidth={1.75} aria-hidden />
                      Download
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </>
  );
}
