"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 relative z-10"
      >
        {/* 404 */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <pre className="text-neutral-500 text-xs sm:text-sm font-mono leading-tight inline-block text-left">
{`
  _  _    ___  _  _
 | || |  / _ \\| || |
 | || |_| | | | || |_
 |__   _| | | |__   _|
    | | | |_| |  | |
    |_|  \\___/   |_|
`}
          </pre>
        </motion.div>

        <div className="card p-8 max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-4 text-neutral-600 font-mono text-sm">
            <Terminal size={14} />
            <span>error.log</span>
          </div>

          <div className="font-mono text-sm text-left mb-6 space-y-1">
            <p className="text-red-400/70">$ Error: Page not found</p>
            <p className="text-neutral-600">$ Status: 404</p>
            <p className="text-neutral-600">$ Message: The page you&apos;re looking for</p>
            <p className="text-neutral-600">  doesn&apos;t exist or has been moved.</p>
            <p className="text-neutral-400 mt-2">$ Suggestion: Go back home_</p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors"
          >
            <Home size={16} />
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
