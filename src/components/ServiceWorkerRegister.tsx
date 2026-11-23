"use client";

import { useEffect } from "react";

/** Registers /sw.js so show-cards and visited pages keep working offline (PWA). Production only. */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  }, []);
  return null;
}
