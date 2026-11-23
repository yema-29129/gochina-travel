"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Search, MapPin, BookOpen, Wrench } from "lucide-react";
import { href, Lang } from "@/lib/i18n";
import { UI } from "@/data/ui";

type Item = { title: string; path: string; type: "city" | "guide" | "tool"; hay: string };

const ICON = { city: MapPin, guide: BookOpen, tool: Wrench };

export type SearchItem = Item;

export function SearchBoxClient({ lang, index }: { lang: Lang; index: Item[] }) {
  const t = UI[lang];
  const router = useRouter();
  const [q, setQ] = useState("");
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    const words = s.split(/\s+/);
    return index.filter((i) => words.every((w) => i.hay.toLowerCase().includes(w))).slice(0, 8);
  }, [q, index]);

  const popular = [
    { label: lang === "zh" ? "免签" : "Visa-free", path: "/tools/visa-checker" },
    { label: lang === "zh" ? "支付宝" : "Alipay", path: "/guides/alipay-wechat-pay" },
    { label: "eSIM", path: "/guides/internet-esim" },
    { label: lang === "zh" ? "高铁" : "Trains", path: "/guides/high-speed-trains" },
    { label: lang === "zh" ? "故宫门票" : "Forbidden City tickets", path: "/tools/ticket-alarm" },
  ];

  return (
    <div className="relative w-full max-w-2xl">
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          if (results[0]) router.push(href(lang, results[0].path));
        }}
        className="flex items-center rounded-xl bg-white p-1.5 shadow-xl ring-1 ring-black/5"
      >
        <Search className="ml-3 h-5 w-5 shrink-0 text-slate-400" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder={t.searchPh}
          aria-label={t.search}
          className="min-w-0 flex-1 bg-transparent px-3 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
        />
        <button type="submit" className="rounded-lg bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700">
          <Search className="h-5 w-5 sm:hidden" />
          <span className="hidden sm:inline">{t.search}</span>
        </button>
      </form>

      {focused && q && (
        <div className="absolute left-0 right-0 z-30 mt-2 overflow-hidden rounded-xl bg-white text-left shadow-xl ring-1 ring-black/5">
          {results.length === 0 ? (
            <div className="px-4 py-3 text-sm text-slate-500">{t.noResults}</div>
          ) : (
            results.map((r) => {
              const Icon = ICON[r.type];
              return (
                <Link key={r.path} href={href(lang, r.path)} className="flex items-center gap-3 px-4 py-3 text-slate-800 hover:bg-slate-50">
                  <Icon className="h-4 w-4 shrink-0 text-slate-400" />
                  <span className="font-medium">{r.title}</span>
                </Link>
              );
            })
          )}
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
        <span className="text-white/80">{t.popular}</span>
        {popular.map((p) => (
          <Link key={p.path} href={href(lang, p.path)} className="rounded-full bg-white/15 px-3 py-1 text-white backdrop-blur hover:bg-white/25">
            {p.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
