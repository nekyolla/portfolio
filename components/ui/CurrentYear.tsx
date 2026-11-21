"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/**
 * The page is statically built, so a year computed on the server freezes at build time.
 * The HTML keeps `buildYear` (no-JS, crawlers); the browser swaps in the visitor's current year.
 */
export default function CurrentYear({ buildYear }: { buildYear: number }) {
  return useSyncExternalStore(
    noopSubscribe,
    () => new Date().getFullYear(),
    () => buildYear
  );
}
