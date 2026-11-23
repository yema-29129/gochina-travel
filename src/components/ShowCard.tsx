"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export interface ShowContent {
  zh: string;
  pinyin?: string;
  /** Translation shown small under the Chinese text (in the reader's language). */
  meaning?: string;
}

/**
 * Full-screen card with large Chinese text, to show to taxi drivers, waiters, pharmacists, etc.
 * Usage: const sc = useShowCard(); sc.show({zh, pinyin, meaning}); <ShowCard {...sc} />
 */
export function ShowCard({ content, close }: { content: ShowContent | null; close: () => void }) {
  useEffect(() => {
    if (!content) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    // Keep the screen awake while showing the card (supported browsers only)
    let lock: { release: () => Promise<void> } | null = null;
    const nav = navigator as Navigator & { wakeLock?: { request: (t: "screen") => Promise<{ release: () => Promise<void> }> } };
    nav.wakeLock?.request("screen").then((l) => (lock = l)).catch(() => {});
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lock?.release().catch(() => {});
    };
  }, [content, close]);

  if (!content) return null;
  const long = content.zh.length > 40;
  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-white" onClick={close} role="dialog" aria-modal="true">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <span className="text-sm text-slate-500">请看这里 · Please read</span>
        <button type="button" onClick={close} className="rounded-full bg-slate-100 p-2" aria-label="Close">
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center overflow-y-auto px-6 py-6 text-center">
        <div className={`whitespace-pre-line font-bold leading-snug text-slate-900 ${long ? "text-3xl sm:text-5xl" : "text-5xl sm:text-7xl"}`}>
          {content.zh}
        </div>
        {content.pinyin && <div className="mt-6 text-xl text-slate-500">{content.pinyin}</div>}
        {content.meaning && <div className="mt-3 max-w-2xl text-lg text-slate-400">{content.meaning}</div>}
      </div>
    </div>
  );
}

export function useShowCard() {
  const [content, setContent] = useState<ShowContent | null>(null);
  return { content, show: setContent, close: () => setContent(null) };
}
