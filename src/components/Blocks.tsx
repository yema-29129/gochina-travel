import Link from "next/link";
import { ArrowRight, Info, Lightbulb, AlertTriangle, OctagonAlert } from "lucide-react";
import { href, Lang, tx } from "@/lib/i18n";
import type { Block } from "@/data/types";
import { getTool } from "@/data/tools";
import { UI } from "@/data/ui";
import { IconBox } from "./IconBox";
import { ShowPhrase } from "./ShowPhrase";
import { AffiliateBox } from "./AffiliateBox";
import { AdSlot } from "./AdSlot";

const TONE = {
  info: { cls: "border-sky-200 bg-sky-50 text-sky-900", Icon: Info, ic: "text-sky-600" },
  tip: { cls: "border-emerald-200 bg-emerald-50 text-emerald-900", Icon: Lightbulb, ic: "text-emerald-600" },
  warn: { cls: "border-amber-200 bg-amber-50 text-amber-900", Icon: AlertTriangle, ic: "text-amber-600" },
  danger: { cls: "border-red-200 bg-red-50 text-red-900", Icon: OctagonAlert, ic: "text-red-600" },
};

export function Blocks({ blocks, lang }: { blocks: Block[]; lang: Lang }) {
  return (
    <>
      {blocks.map((b, i) => (
        <BlockView key={i} b={b} lang={lang} />
      ))}
    </>
  );
}

function BlockView({ b, lang }: { b: Block; lang: Lang }) {
  switch (b.type) {
    case "p":
      return <p className="my-4 leading-relaxed text-slate-700">{tx(b.text, lang)}</p>;
    case "list":
      return (
        <ul className="my-4 space-y-2">
          {b.items.map((it, i) => (
            <li key={i} className="flex gap-2 leading-relaxed text-slate-700">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>{tx(it, lang)}</span>
            </li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="my-4 space-y-3">
          {b.items.map((it, i) => (
            <li key={i} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">{i + 1}</span>
              <span className="pt-1 leading-relaxed text-slate-700">{tx(it, lang)}</span>
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="my-4 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                {b.head.map((h, i) => (
                  <th key={i} className="px-4 py-3 font-semibold">{tx(h, lang)}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {b.rows.map((row, r) => (
                <tr key={r} className="align-top">
                  {row.map((cell, c) => (
                    <td key={c} className={`whitespace-pre-line px-4 py-3 ${c === 0 ? "font-medium text-slate-900" : "text-slate-700"}`}>
                      {tx(cell, lang)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout": {
      const t = TONE[b.tone];
      return (
        <div className={`my-5 flex gap-3 rounded-xl border p-4 ${t.cls}`}>
          <t.Icon className={`mt-0.5 h-5 w-5 shrink-0 ${t.ic}`} />
          <div className="leading-relaxed">
            {b.title && <div className="mb-1 font-semibold">{tx(b.title, lang)}</div>}
            <div>{tx(b.text, lang)}</div>
          </div>
        </div>
      );
    }
    case "show":
      return <ShowPhrase zh={b.zh} pinyin={b.pinyin} meaning={tx(b.meaning, lang)} hint={UI[lang].showHint} />;
    case "tool": {
      const tool = getTool(b.tool);
      if (!tool) return null;
      return (
        <Link
          href={href(lang, `/tools/${tool.id}`)}
          className="no-print my-6 flex items-center gap-4 rounded-xl border-2 border-red-100 bg-white p-4 hover:border-red-300 hover:shadow-md"
        >
          <IconBox name={tool.icon} />
          <div className="flex-1">
            <div className="font-bold text-slate-900">{tx(tool.title, lang)}</div>
            <div className="text-sm text-slate-600">{tx(tool.desc, lang)}</div>
          </div>
          <span className="hidden items-center gap-1 text-sm font-semibold text-red-600 sm:flex">
            {UI[lang].openTool} <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      );
    }
    case "affiliate":
      return <AffiliateBox id={b.id} lang={lang} />;
    case "ad":
      return <AdSlot lang={lang} slot="inArticle" />;
    default:
      return null;
  }
}
