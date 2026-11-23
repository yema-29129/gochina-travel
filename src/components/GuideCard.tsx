import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { href, Lang, tx } from "@/lib/i18n";
import type { Guide } from "@/data/types";
import { UI } from "@/data/ui";
import { IconBox } from "./IconBox";

export function GuideCard({ g, lang }: { g: Guide; lang: Lang }) {
  const t = UI[lang];
  return (
    <Link href={href(lang, `/guides/${g.slug}`)} className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 hover:border-red-200 hover:shadow-md">
      <div className="flex items-start gap-4">
        <IconBox name={g.icon} />
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-slate-900 group-hover:text-red-600">{tx(g.title, lang)}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-slate-600">{tx(g.summary, lang)}</p>
        </div>
      </div>
      <div className="mt-auto flex items-center justify-between pt-4 text-sm">
        <span className="flex items-center gap-1 text-slate-400"><Clock className="h-4 w-4" />{g.readMin} {t.minRead}</span>
        <span className="flex items-center gap-1 font-semibold text-red-600">{t.readGuide} <ArrowRight className="h-4 w-4" /></span>
      </div>
    </Link>
  );
}
