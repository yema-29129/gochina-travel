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
import { Railway12306Tutorial, TrainSearchWidget } from "./tools/TrainInteractiveWidgets";
import {
  BudgetVsFullServiceCards,
  CccVisualSpotter,
  CityTransportHub,
  DidiTimelineMockup,
  InlinePowerBankChecker,
  LiveTaxiCard,
  MapDeviceSwitcher,
  MetroSplitCard,
} from "./tools/CityAndFlightWidgets";
import {
  AirportBentoHub,
  ArrivalTransferCard,
  DualAirportTimeBars,
} from "./tools/AirportBentoWidgets";
import { TimaticRescueCard } from "./tools/TimaticRescueCard";

const TONE = {
  info: { cls: "border-slate-200 border-l-4 border-l-sky-500 bg-white text-slate-700", Icon: Info, ic: "text-sky-600" },
  tip: { cls: "border-slate-200 border-l-4 border-l-emerald-600 bg-white text-slate-700", Icon: Lightbulb, ic: "text-emerald-600" },
  warn: { cls: "border-slate-200 border-l-4 border-l-amber-500 bg-white text-slate-700", Icon: AlertTriangle, ic: "text-amber-600" },
  danger: { cls: "border-red-200 border-l-4 border-l-red-600 bg-red-50/40 text-red-950", Icon: OctagonAlert, ic: "text-red-600" },
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
            <li key={i} className="flex gap-2.5 leading-relaxed text-slate-700">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
              <span>{tx(it, lang)}</span>
            </li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="relative my-5 space-y-4 border-l-2 border-slate-200 pl-6">
          {b.items.map((it, i) => (
            <li key={i} className="relative leading-relaxed text-slate-700">
              <span className="absolute -left-[35px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                {i + 1}
              </span>
              <span>{tx(it, lang)}</span>
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
                  <th
                    key={i}
                    className={`px-4 py-3 font-semibold ${
                      i === 0
                        ? b.head.length === 2
                          ? "min-w-[150px] whitespace-nowrap sm:min-w-[185px]"
                          : "min-w-[130px]"
                        : ""
                    }`}
                  >
                    {tx(h, lang)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {b.rows.map((row, r) => (
                <tr key={r} className="align-top">
                  {row.map((cell, c) => (
                    <td
                      key={c}
                      className={`whitespace-pre-line px-4 py-3 ${
                        c === 0
                          ? b.head.length === 2
                            ? "min-w-[150px] font-medium text-slate-900 sm:min-w-[185px]"
                            : "min-w-[130px] font-medium text-slate-900"
                          : "text-slate-700"
                      }`}
                    >
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
        <div className={`my-5 flex gap-3 rounded-xl border p-4 shadow-xs ${t.cls}`}>
          <t.Icon className={`mt-0.5 h-5 w-5 shrink-0 ${t.ic}`} />
          <div className="text-sm leading-relaxed">
            {b.title && <div className="mb-1 font-bold text-slate-900">{tx(b.title, lang)}</div>}
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
          className="no-print my-6 flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-400 hover:shadow-sm"
        >
          <IconBox name={tool.icon} />
          <div className="flex-1">
            <div className="font-bold text-slate-900">{tx(tool.title, lang)}</div>
            <div className="text-sm text-slate-600">{tx(tool.desc, lang)}</div>
          </div>
          <span className="hidden items-center gap-1 text-sm font-semibold text-slate-900 sm:flex">
            {UI[lang].openTool} <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      );
    }
    case "widget":
      switch (b.widget) {
        case "railway12306":
          return <Railway12306Tutorial lang={lang} />;
        case "trainSearch":
          return <TrainSearchWidget lang={lang} />;
        case "cityTransportHub":
          return <CityTransportHub lang={lang} />;
        case "mapDeviceSwitcher":
          return <MapDeviceSwitcher lang={lang} />;
        case "metroSplitCard":
          return <MetroSplitCard lang={lang} />;
        case "didiTimelineMockup":
          return <DidiTimelineMockup lang={lang} />;
        case "liveTaxiCard":
          return <LiveTaxiCard lang={lang} />;
        case "cccVisualSpotter":
          return <CccVisualSpotter lang={lang} />;
        case "inlinePowerBankChecker":
          return <InlinePowerBankChecker lang={lang} />;
        case "budgetVsFullServiceCards":
          return <BudgetVsFullServiceCards lang={lang} />;
        case "airportBentoHub":
          return <AirportBentoHub lang={lang} />;
        case "arrivalTransferCard":
          return <ArrivalTransferCard lang={lang} />;
        case "dualAirportTimeBars":
          return <DualAirportTimeBars lang={lang} />;
        case "timaticRescueCard":
          return <TimaticRescueCard lang={lang} />;
        default:
          return null;
      }
    case "affiliate":
      return <AffiliateBox id={b.id} lang={lang} />;
    case "ad":
      return <AdSlot lang={lang} slot="inArticle" />;
    default:
      return null;
  }
}
