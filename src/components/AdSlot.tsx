"use client";

import { useEffect, useRef } from "react";
import { SITE } from "@/lib/site";
import { Lang } from "@/lib/i18n";
import { UI } from "@/data/ui";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * Google AdSense ad unit.
 * - Needs NEXT_PUBLIC_ADSENSE_CLIENT (ca-pub-...) and a slot ID.
 * - Without a slot ID, nothing is rendered (Auto ads, enabled in AdSense, will still place ads).
 * - In development a grey placeholder is shown so you can see where ads go.
 */
export function AdSlot({ lang, slot = "inArticle" }: { lang: Lang; slot?: keyof typeof SITE.adSlots }) {
  const ref = useRef<HTMLModElement>(null);
  const slotId = SITE.adSlots[slot];
  const enabled = !!SITE.adsenseClient && !!slotId;

  useEffect(() => {
    if (!enabled || !ref.current || ref.current.dataset.loaded) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      ref.current.dataset.loaded = "1";
    } catch {}
  }, [enabled]);

  if (!enabled) {
    if (process.env.NODE_ENV !== "production") {
      return (
        <div className="no-print my-8 flex h-24 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 text-xs text-slate-400">
          {UI[lang].adLabel} · AdSense ({slot})
        </div>
      );
    }
    return null;
  }

  return (
    <div className="no-print my-8">
      <div className="mb-1 text-center text-[11px] uppercase tracking-wide text-slate-400">{UI[lang].adLabel}</div>
      <ins
        ref={ref}
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={SITE.adsenseClient}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
