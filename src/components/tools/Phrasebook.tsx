"use client";

import { useMemo, useState } from "react";
import { Maximize2, Search } from "lucide-react";
import { Lang, L, t2, tx } from "@/lib/i18n";
import { PHRASES, PHRASE_CATEGORIES, PhraseCategory } from "@/data/phrases";
import { ShowCard, useShowCard } from "@/components/ShowCard";

const U = {
  searchPh: t2("Search phrases (e.g. spicy, taxi, Wi-Fi, passport)…", "搜索短语（例如：不辣、打表、Wi-Fi、护照）…"),
  tapHint: t2("Tap any card to show it full screen to a local.", "点击任意卡片即可全屏展示给当地人看。"),
  empty: t2("No matching phrases.", "没有找到匹配的短语。"),
  count: t2("phrases", "条常用语"),
};

export default function Phrasebook({ lang }: { lang: Lang }) {
  const T = (l: L) => tx(l, lang);
  const sc = useShowCard();
  const [cat, setCat] = useState<"all" | PhraseCategory>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PHRASES.filter((p) => {
      if (cat !== "all" && p.category !== cat) return false;
      if (!q) return true;
      return (
        p.meaning.en.toLowerCase().includes(q) ||
        p.meaning.zh.toLowerCase().includes(q) ||
        p.zh.toLowerCase().includes(q) ||
        p.pinyin.toLowerCase().includes(q)
      );
    });
  }, [cat, query]);

  return (
    <div className="space-y-5">
      {/* Search + Category chips */}
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={T(U.searchPh)}
            className="w-full rounded-lg border border-slate-300 py-2 pl-9 pr-3 text-sm text-slate-900 focus:border-red-500 focus:outline-none"
          />
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {PHRASE_CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCat(c.id)}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
                cat === c.id
                  ? "border-red-500 bg-red-600 text-white"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300"
              }`}
            >
              {T(c.label)}
            </button>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
          <span>{T(U.tapHint)}</span>
          <span>
            {filtered.length} {T(U.count)}
          </span>
        </div>
      </div>

      {/* Phrase grid */}
      {filtered.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-slate-200 p-8 text-center text-sm text-slate-500">
          {T(U.empty)}
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {filtered.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => sc.show({ zh: p.zh, pinyin: p.pinyin, meaning: T(p.meaning) })}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-red-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="text-sm font-semibold text-slate-700 group-hover:text-red-600">{T(p.meaning)}</div>
                <Maximize2 className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-red-600" />
              </div>
              <div className="mt-2 text-lg font-bold leading-snug text-slate-900">{p.zh}</div>
              <div className="mt-1 text-xs italic text-slate-500">{p.pinyin}</div>
            </button>
          ))}
        </div>
      )}

      <ShowCard content={sc.content} close={sc.close} />
    </div>
  );
}
