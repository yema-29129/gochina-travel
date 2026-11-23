"use client";

import { Maximize2 } from "lucide-react";
import { ShowCard, useShowCard } from "./ShowCard";

/** Inline Chinese phrase that opens full screen when tapped. */
export function ShowPhrase({ zh, pinyin, meaning, hint }: { zh: string; pinyin?: string; meaning: string; hint: string }) {
  const sc = useShowCard();
  return (
    <>
      <button
        type="button"
        onClick={() => sc.show({ zh, pinyin, meaning })}
        className="group my-4 flex w-full items-start justify-between gap-3 rounded-xl border-2 border-dashed border-red-200 bg-red-50/40 p-4 text-left hover:border-red-400"
      >
        <div>
          <div className="text-xl font-bold text-slate-900">{zh}</div>
          {pinyin && <div className="text-sm text-slate-500">{pinyin}</div>}
          <div className="mt-1 text-sm text-slate-700">{meaning}</div>
          <div className="mt-2 text-xs font-medium text-red-600">{hint}</div>
        </div>
        <Maximize2 className="mt-1 h-5 w-5 shrink-0 text-red-400 group-hover:text-red-600" />
      </button>
      <ShowCard content={sc.content} close={sc.close} />
    </>
  );
}
