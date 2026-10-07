"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Download, X, Award } from "lucide-react";
import { certificates } from "@/data/certificates";
import { Certificate } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Certifications" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => setSelectedCert(cert)}
              className="card card-hover p-6 cursor-pointer text-center"
            >
              {/* Icon */}
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                <Award size={20} className="text-neutral-400" />
              </div>

              {/* Title */}
              <h3 className="text-sm font-medium text-white mb-2 line-clamp-2">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-xs text-neutral-500 mb-3">{cert.issuer}</p>

              {/* Year badge */}
              <span className="badge text-xs">{cert.date}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LinkedIn-style Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 max-w-2xl w-full max-h-[90vh] overflow-y-auto card p-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors z-20"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* PDF Preview area */}
              <div className="w-full h-72 bg-neutral-900 border-b border-neutral-800 flex items-center justify-center">
                {selectedCert.pdfFile ? (
                  <iframe
                    src={selectedCert.pdfFile}
                    className="w-full h-full"
                    title={`${selectedCert.title} certificate preview`}
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3 text-neutral-500">
                    <Award size={48} strokeWidth={1} />
                    <p className="text-sm">Certificate Preview</p>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {selectedCert.title}
                </h3>
                <p className="text-sm text-neutral-400 mb-1">{selectedCert.issuer}</p>
                <p className="text-xs text-neutral-500 mb-1">{selectedCert.date}</p>
                {selectedCert.credentialId && (
                  <p className="text-xs text-neutral-600 mb-6">
                    Credential ID: {selectedCert.credentialId}
                  </p>
                )}

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  {selectedCert.credentialUrl && (
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white transition-all text-sm"
                    >
                      <ExternalLink size={14} />
                      Verify Credential
                    </a>
                  )}
                  {selectedCert.pdfFile && (
                    <a
                      href={selectedCert.pdfFile}
                      download
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors"
                    >
                      <Download size={14} />
                      Download PDF
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
