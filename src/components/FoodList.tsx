"use client";

import { Maximize2 } from "lucide-react";
import { Lang, t2, tx } from "@/lib/i18n";
import type { Dish } from "@/data/types";
import { ShowCard, useShowCard } from "@/components/ShowCard";

const U = {
  tapHint: t2("Tap any dish to show the Chinese name full screen to the waiter.", "点击任意菜品，可全屏向服务员展示中文菜名。"),
  show: t2("Show", "展示"),
};

export function FoodList({ dishes, lang }: { dishes: Dish[]; lang: Lang }) {
  const sc = useShowCard();

  return (
    <div>
      <p className="mb-3 text-sm text-slate-500">{tx(U.tapHint, lang)}</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {dishes.map((d) => (
          <button
            key={d.zh}
            type="button"
            onClick={() =>
              sc.show({
                zh: `您好，我想点：\n${d.zh}`,
                pinyin: d.pinyin,
                meaning: `${tx(d.name, lang)} (${d.price})`,
              })
            }
            className="group flex flex-col rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-red-300 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="font-bold text-slate-900 group-hover:text-red-600">{tx(d.name, lang)}</div>
                <div className="mt-0.5 text-lg font-bold text-slate-800">{d.zh}</div>
                <div className="text-xs italic text-slate-500">{d.pinyin}</div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">{d.price}</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-600">
                  <Maximize2 className="h-3 w-3" /> {tx(U.show, lang)}
                </span>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-600">{tx(d.note, lang)}</p>
          </button>
        ))}
      </div>
      <ShowCard content={sc.content} close={sc.close} />
    </div>
  );
}
