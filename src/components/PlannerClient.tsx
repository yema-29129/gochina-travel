"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Copy, Printer, ShieldCheck, TrainFront, Wallet } from "lucide-react";
import { href, Lang, L, t2, tx } from "@/lib/i18n";
import { DURATIONS, Duration, getItinerary, STYLES, TravelStyle } from "@/data/itineraries";
import { UI } from "@/data/ui";

const U = {
  step1: t2("1. Trip length", "1. 行程天数"),
  step2: t2("2. Travel style", "2. 旅行偏好"),
  dayLabel: t2("Day", "第"),
  daySuffix: t2("", " 天"),
  transport: t2("Transport:", "交通："),
  tip: t2("Tip:", "贴士："),
  budgetLabel: t2("Estimated budget (per person)", "预估预算（人均）"),
  visaLabel: t2("Visa / 240h transit fit", "签证 / 240 小时过境适配"),
  cityGuide: t2("City guide", "城市指南"),
  checkVisa: t2("Verify visa eligibility", "验证免签资格"),
  ticketAlarm: t2("Set ticket release alarms", "设置放票闹钟"),
};

export function PlannerClient({ lang }: { lang: Lang }) {
  const T = (l: L) => tx(l, lang);
  const t = UI[lang];
  const [duration, setDuration] = useState<Duration>(8);
  const [style, setStyle] = useState<TravelStyle>("classics");
  const [copied, setCopied] = useState(false);

  const plan = getItinerary(duration, style);

  const buildPlainText = () => {
    const header = `${T(plan.title)}\n${T(plan.route)}\n${T(U.budgetLabel)}: ${T(plan.budget)}\n${T(U.visaLabel)}: ${T(plan.transitNote)}\n`;
    const body = plan.days
      .map(
        (d) =>
          `\n${lang === "zh" ? `第 ${d.day} 天` : `Day ${d.day}`} — ${T(d.city)}: ${T(d.title)}\n` +
          `• ${T(d.activities)}\n` +
          `• ${T(U.transport)} ${T(d.transport)}\n` +
          `• ${T(U.tip)} ${T(d.tip)}`
      )
      .join("\n");
    return `${header}${body}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildPlainText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="space-y-8">
      {/* Controls */}
      <section className="no-print rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <div>
          <h2 className="mb-2.5 text-sm font-bold text-slate-800">{T(U.step1)}</h2>
          <div className="grid gap-2 sm:grid-cols-4">
            {DURATIONS.map((d) => (
              <button
                key={d.value}
                type="button"
                onClick={() => setDuration(d.value)}
                className={`rounded-lg border px-3.5 py-2.5 text-left text-sm font-semibold transition ${
                  duration === d.value
                    ? "border-red-500 bg-red-50 text-red-700"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                }`}
              >
                {T(d.label)}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h2 className="mb-2.5 text-sm font-bold text-slate-800">{T(U.step2)}</h2>
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {STYLES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setStyle(s.id)}
                className={`rounded-lg border p-3.5 text-left transition ${
                  style === s.id
                    ? "border-red-500 bg-red-50 text-red-900"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                }`}
              >
                <div className="font-bold">{T(s.label)}</div>
                <div className="mt-1 text-xs opacity-80">{T(s.desc)}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Summary Header */}
      <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-red-600">{T(plan.route)}</div>
            <h2 className="mt-1 text-2xl font-extrabold text-slate-900">{T(plan.title)}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">{T(plan.summary)}</p>
          </div>
          <div className="no-print flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
              {copied ? t.copied : t.copy}
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-sm font-semibold text-white hover:bg-slate-700"
            >
              <Printer className="h-4 w-4" /> {t.print}
            </button>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="flex items-start gap-2.5 rounded-lg bg-slate-50 p-3.5 text-sm">
            <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
            <div>
              <div className="text-xs font-semibold text-slate-500">{T(U.budgetLabel)}</div>
              <div className="font-bold text-slate-900">{T(plan.budget)}</div>
            </div>
          </div>
          <div className="flex items-start gap-2.5 rounded-lg bg-emerald-50 p-3.5 text-sm">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
            <div>
              <div className="text-xs font-semibold text-emerald-800">{T(U.visaLabel)}</div>
              <div className="font-medium text-emerald-950">{T(plan.transitNote)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Day-by-day Schedule */}
      <section className="space-y-4">
        {plan.days.map((d) => (
          <div key={d.day} className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 items-center justify-center rounded-lg bg-red-600 px-3 text-sm font-bold text-white">
                  {lang === "zh" ? `${T(U.dayLabel)} ${d.day}${T(U.daySuffix)}` : `${T(U.dayLabel)} ${d.day}`}
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{T(d.city)}</div>
                  <h3 className="text-lg font-bold text-slate-900">{T(d.title)}</h3>
                </div>
              </div>
              {d.cityId && (
                <Link
                  href={href(lang, `/cities/${d.cityId}`)}
                  className="no-print inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:underline"
                >
                  {T(U.cityGuide)} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-slate-700">{T(d.activities)}</p>

            <div className="mt-3 grid gap-2 border-t border-slate-100 pt-3 text-xs text-slate-600 sm:grid-cols-2">
              <div className="flex items-start gap-1.5">
                <TrainFront className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />
                <span>
                  <strong className="text-slate-800">{T(U.transport)}</strong> {T(d.transport)}
                </span>
              </div>
              <div>
                <strong className="text-amber-800">{T(U.tip)}</strong> {T(d.tip)}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Next-step tool links */}
      <div className="no-print flex flex-wrap gap-3">
        <Link
          href={href(lang, "/tools/visa-checker")}
          className="inline-flex items-center gap-1.5 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
        >
          {T(U.checkVisa)} <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href={href(lang, "/tools/ticket-alarm")}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
        >
          {T(U.ticketAlarm)} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
