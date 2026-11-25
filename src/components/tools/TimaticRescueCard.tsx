"use client";

import { useState } from "react";
import { CheckCircle2, Maximize2, PhoneCall, PlaneTakeoff, Printer, ShieldCheck, X } from "lucide-react";
import { Lang, t4, tx } from "@/lib/i18n";

type Mode = "twov240" | "unilateral30";

export function TimaticRescueCard({ lang }: { lang: Lang }) {
  const [mode, setMode] = useState<Mode>("twov240");
  const [fullscreen, setFullscreen] = useState(false);

  const cardBody = (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-red-600">
            OFFICIAL TIMATIC CHECK-IN REFERENCE · 2026
          </div>
          <h4 className="mt-0.5 text-lg font-extrabold text-slate-900">
            {mode === "twov240"
              ? "China 240-Hour Visa-Free Transit (TWOV)"
              : "China 30-Day Unilateral Visa-Free Entry (50 Countries)"}
          </h4>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
          <ShieldCheck className="h-3.5 w-3.5" />
          NIA Policy Active 2026
        </span>
      </div>

      <div className="rounded-xl bg-slate-900 p-4 text-sm text-white">
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-300">
          Show this note to your airline check-in agent:
        </div>
        {mode === "twov240" ? (
          <p className="mt-1.5 leading-relaxed">
            “Hello! I am traveling under China&apos;s official <strong>240-Hour (10-Day) Visa-Free Transit (TWOV)</strong> policy
            (expanded to 65 ports across 24 provinces with cross-province travel). Please check <strong>TIMATIC → China → Transit Without Visa (240 Hours)</strong>.
            My immediate inbound region (A) and onward region (C) are different (Hong Kong, Macau &amp; Taiwan count as separate regions),
            and I hold a confirmed onward ticket departing within 240 hours starting at 00:00 the day after arrival.”
          </p>
        ) : (
          <p className="mt-1.5 leading-relaxed">
            “Hello! My passport is on China&apos;s official <strong>30-Day Unilateral Visa-Free</strong> list (50 countries,
            including Japan, South Korea, Australia, New Zealand, EU/Schengen, plus UK &amp; Canada effective Feb 17, 2026).
            Please check <strong>TIMATIC → China → Visa Exemptions (30 Days)</strong>. Tourism, business, family visit and transit up to 30 days require no visa.”
          </p>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-700">
          <div className="mb-1.5 font-bold text-slate-900">
            {tx(
              t4(
                "3 Printed Docs to Hand the Agent",
                "递给值机地勤的 3 份纸质材料",
                "チェックイン係員に見せる3点セット",
                "체크인 직원에게 보여줄 3가지 서류"
              ),
              lang
            )}
          </div>
          <ul className="space-y-1.5">
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
              <span>
                {mode === "twov240"
                  ? "Passport valid 3+ months (6+ months recommended) with 2+ blank pages"
                  : "Ordinary passport valid beyond exit date (6+ months recommended)"}
              </span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
              <span>
                {mode === "twov240"
                  ? "Printed English confirmed onward ticket to 3rd country/region (HK/Macau/Taiwan OK) — no standby"
                  : "Printed return/onward flight itinerary within 30 days"}
              </span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
              <span>Printed English hotel booking confirmation(s)</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-3.5 text-xs text-amber-950">
          <div className="mb-1.5 flex items-center gap-1.5 font-bold">
            <PhoneCall className="h-3.5 w-3.5 text-amber-700" />
            {tx(
              t4(
                "Official 24/7 Verification Hotline",
                "中国移民局 24 小时官方英文核验热线",
                "中国国家移民管理局 24時間英語ホットライン",
                "중국 이민관리국 24시간 영어 공식 핫라인"
              ),
              lang
            )}
          </div>
          <p className="leading-relaxed">
            If the check-in supervisor still hesitates, ask them to call China&apos;s National Immigration Administration (NIA) 24/7 English desk:
          </p>
          <div className="mt-2 font-mono text-base font-extrabold text-slate-900">+86-12367</div>
          <div className="mt-0.5 text-[11px] text-amber-900/80">
            en.nia.gov.cn · Free 24/7 English / Japanese / Korean / Russian support
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="my-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-600">
              <PlaneTakeoff className="h-4 w-4" />
            </span>
            <div>
              <div className="text-sm font-bold text-slate-900">
                {tx(
                  t4(
                    "Airline Check-In TIMATIC Rescue Card",
                    "航司值机柜台 TIMATIC 救命卡（防地勤误拒登机）",
                    "空港チェックイン用 TIMATIC 提示カード（搭乗拒否対策）",
                    "공항 체크인 TIMATIC 안내 카드 (탑승 거부 방지)"
                  ),
                  lang
                )}
              </div>
              <div className="text-xs text-slate-500">
                {tx(
                  t4(
                    "Save or show fullscreen if check-in staff don't know China's 2026 rules.",
                    "遇到海外小机场地勤不熟悉中国免签新政时，一键全屏递给对方看。",
                    "海外空港の係員が中国の最新免除ルールを知らない時に画面をそのまま提示。",
                    "해외 공항 직원이 중국 최신 무비자 규정을 모를 때 전체화면으로 보여주세요."
                  ),
                  lang
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-0.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setMode("twov240")}
                className={`rounded-md px-2.5 py-1 transition ${
                  mode === "twov240" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                240h Transit
              </button>
              <button
                type="button"
                onClick={() => setMode("unilateral30")}
                className={`rounded-md px-2.5 py-1 transition ${
                  mode === "unilateral30" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                30-Day Visa-Free
              </button>
            </div>
            <button
              type="button"
              onClick={() => setFullscreen(true)}
              className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-red-600"
            >
              <Maximize2 className="h-3.5 w-3.5" />
              {tx(t4("Fullscreen", "全屏展示", "全画面表示", "전체화면"), lang)}
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="no-print inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <Printer className="h-3.5 w-3.5" />
              {tx(t4("Print", "打印", "印刷", "인쇄"), lang)}
            </button>
          </div>
        </div>

        {cardBody}
      </div>

      {fullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-xs">
          <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setFullscreen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="pr-8">{cardBody}</div>
          </div>
        </div>
      )}
    </>
  );
}
