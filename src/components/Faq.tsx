"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Lang, tx } from "@/lib/i18n";
import type { FaqItem } from "@/data/types";

export function Faq({ items, lang }: { items: FaqItem[]; lang: Lang }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
      {items.map((item, i) => (
        <div key={i}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-slate-900 hover:bg-slate-50"
            aria-expanded={open === i}
          >
            {tx(item.q, lang)}
            <ChevronDown className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          {/* Answer is always in the DOM (hidden when closed) so Google can read it */}
          <div className={`px-5 pb-5 leading-relaxed text-slate-600 ${open === i ? "" : "hidden"}`}>{tx(item.a, lang)}</div>
        </div>
      ))}
    </div>
  );
}
