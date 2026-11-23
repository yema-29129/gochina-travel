import Link from "next/link";
import { ArrowRight, Calendar, CreditCard } from "lucide-react";
import { href, Lang, t2, tx } from "@/lib/i18n";
import type { City } from "@/data/types";

const U = {
  tapMetro: t2("Tap card on metro", "地铁可拍外卡"),
  explore: t2("City guide", "查看城市指南"),
};

export function CityCard({ c, lang }: { c: City; lang: Lang }) {
  return (
    <Link
      href={href(lang, `/cities/${c.id}`)}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-red-200 hover:shadow-md"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={c.image}
          alt={`${tx(c.name, lang)} (${c.zh})`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 text-white">
          <div>
            <div className="text-xs font-medium text-white/80">{tx(c.province, lang)}</div>
            <h3 className="text-xl font-bold leading-tight">
              {tx(c.name, lang)}{" "}
              {lang === "en" && <span className="text-base font-normal text-white/85">{c.zh}</span>}
            </h3>
          </div>
          {c.tapCardOnMetro && (
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-500/90 px-2.5 py-0.5 text-[11px] font-semibold text-white">
              <CreditCard className="h-3 w-3" /> {tx(U.tapMetro, lang)}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="line-clamp-2 text-sm text-slate-600">{tx(c.summary, lang)}</p>
        <div className="mt-auto flex items-center justify-between pt-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" /> {tx(c.days, lang)} · {tx(c.bestTime, lang)}
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold text-red-600">
            {tx(U.explore, lang)} <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
