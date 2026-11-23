import { ExternalLink } from "lucide-react";
import { Lang, tx } from "@/lib/i18n";
import { AFFILIATES } from "@/lib/affiliates";
import type { AffiliateId } from "@/data/types";
import { UI } from "@/data/ui";

/** Affiliate recommendation box. Links use rel="sponsored nofollow" as Google requires. */
export function AffiliateBox({ id, lang }: { id: AffiliateId; lang: Lang }) {
  const a = AFFILIATES[id];
  if (!a) return null;
  return (
    <aside className="no-print my-8 rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-5">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-amber-700">{UI[lang].sponsored}</div>
      <div className="mt-1 text-lg font-bold text-slate-900">{tx(a.title, lang)}</div>
      <p className="mt-1 text-sm text-slate-700">{tx(a.text, lang)}</p>
      <a
        href={a.url}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
      >
        {tx(a.cta, lang)} <ExternalLink className="h-4 w-4" />
      </a>
    </aside>
  );
}
