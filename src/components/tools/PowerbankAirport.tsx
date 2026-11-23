"use client";

import { useState } from "react";
import { AlertTriangle, BatteryCharging, CheckCircle2, Plane, ShieldX, Clock } from "lucide-react";
import { Lang, L, t2, tx } from "@/lib/i18n";
import { AffiliateBox } from "@/components/AffiliateBox";

type TransportType = "intl_only" | "domestic" | "hsr_only";
type CccStatus = "yes" | "no" | "unreadable";
type AirportPairId = "shanghai" | "chengdu" | "beijing";

interface AirportPair {
  id: AirportPairId;
  label: L;
  codes: string;
  distance: L;
  immigMin: number;
  baggageMin: number;
  crossCityMin: number;
  crossCityNote: L;
  cutoffMin: number;
  bufferMin: number;
  minSafeHours: number;
  dangerBelowHours: number;
  recommendedText: L;
}

const AIRPORT_PAIRS: AirportPair[] = [
  {
    id: "shanghai",
    label: t2("Shanghai: Pudong (PVG) ↔ Hongqiao (SHA)", "上海：浦东（PVG）↔ 虹桥（SHA）"),
    codes: "PVG ↔ SHA",
    distance: t2("~55 km across Shanghai", "横跨上海约 55 公里"),
    immigMin: 45,
    baggageMin: 30,
    crossCityMin: 55,
    crossCityNote: t2(
      "Airport Link Line express train (~40 min ride + 15 min wait/walk)",
      "市域机场联络线快铁（约 40 分钟车程 + 15 分钟候车步行）"
    ),
    cutoffMin: 45,
    bufferMin: 45,
    minSafeHours: 4.5,
    dangerBelowHours: 3.5,
    recommendedText: t2("At least 4.5–5 hours recommended (below 3.5 hours = very high risk of missing your flight).", "建议至少预留 4.5–5 小时以上（低于 3.5 小时极高概率误机）。"),
  },
  {
    id: "chengdu",
    label: t2("Chengdu: Tianfu (TFU) ↔ Shuangliu (CTU)", "成都：天府（TFU）↔ 双流（CTU）"),
    codes: "TFU ↔ CTU",
    distance: t2("~70 km between airports", "两机场相距近 70 公里"),
    immigMin: 45,
    baggageMin: 30,
    crossCityMin: 65,
    crossCityNote: t2(
      "Metro Line 18 → Line 19 direct express (~50–65 min + walking/waiting)",
      "地铁 18 号线换 19 号线直快车（约 50–65 分钟 + 换乘候车）"
    ),
    cutoffMin: 45,
    bufferMin: 45,
    minSafeHours: 5.0,
    dangerBelowHours: 4.0,
    recommendedText: t2("At least 5–5.5 hours recommended (below 4 hours = high risk of missing your flight).", "建议至少预留 5–5.5 小时以上（低于 4 小时高概率误机）。"),
  },
  {
    id: "beijing",
    label: t2("Beijing: Daxing (PKX) ↔ Capital (PEK)", "北京：大兴（PKX）↔ 首都（PEK）"),
    codes: "PKX ↔ PEK",
    distance: t2("~85 km north–south across Beijing", "南北纵跨整个北京市近 85 公里"),
    immigMin: 50,
    baggageMin: 35,
    crossCityMin: 110,
    crossCityNote: t2(
      "Daxing Express + city metro transfer + Capital Airport Express, or taxi (~90–120 min)",
      "大兴机场线 + 市区地铁换乘 + 首都机场线，或打车（约 90–120 分钟）"
    ),
    cutoffMin: 45,
    bufferMin: 45,
    minSafeHours: 6.0,
    dangerBelowHours: 4.5,
    recommendedText: t2("At least 6 hours recommended (below 4.5 hours = very high risk of missing your flight).", "建议至少预留 6 小时以上（低于 4.5 小时极高概率误机）。"),
  },
];

const U = {
  partA: t2("Part A: Will My Power Bank Be Confiscated? (3-Step CCC Checker)", "子工具 A：我的充电宝在中国会被没收吗？（3 步 CCC 自检）"),
  step1: t2("Step 1 — What transport will you take in China?", "第 1 步——你在中国要坐哪种交通工具？"),
  tIntl: t2("International Flight ONLY (e.g. NYC → Shanghai → Tokyo)", "仅国际/港澳台航班（例如纽约 → 上海 → 东京，不含国内段）"),
  tDom: t2("Includes China Domestic Flights (e.g. Shanghai → Xi'an / Chengdu)", "包含中国境内国内航班（例如上海 → 西安 / 成都）"),
  tHsr: t2("High-Speed Bullet Trains & Subways ONLY", "只坐高铁和地铁（不坐国内飞机）"),
  step2: t2("Step 2 — Does your power bank have a clear oval CCC logo?", "第 2 步——充电宝外壳是否清晰印有椭圆形 CCC 标志？"),
  cccYes: t2("Yes — clear oval CCC logo printed", "有——清晰印有椭圆形 CCC 标志"),
  cccNo: t2("No — bought overseas (only CE / FCC / UL)", "没有——海外购买（只有 CE / FCC / UL 标志）"),
  cccBad: t2("Scratched off / Unreadable", "字迹磨损 / 看不清参数"),
  compareLeft: t2("Overseas marks (NOT accepted on China domestic flights)", "海外常见标志（中国国内航班不认可）"),
  compareRight: t2("China Compulsory Certification (Required for domestic flights)", "中国强制性产品认证（国内航班必备）"),
  step3: t2("Step 3 — Power bank capacity (mAh & cell voltage)", "第 3 步——充电宝容量参数（mAh 与电芯电压）"),
  mahLabel: t2("Capacity (mAh)", "容量（mAh）"),
  voltLabel: t2("Nominal Cell Voltage (V)", "标称电芯电压（V）"),
  voltHint: t2(
    "Default is 3.7V (internal battery cell voltage). Do NOT use the 5V USB output voltage!",
    "默认 3.7V（内部电芯电压）。注意不要误看成 USB 输出口电压 5V！"
  ),
  energyLabel: t2("Calculated Rated Energy", "计算额定能量"),
  partB: t2("Part B: Same-City Airport Transfer Time Calculator", "子工具 B：同城双机场转机最小安全时间计算器"),
  partBIntro: t2(
    "Shanghai, Chengdu and Beijing each have two major airports far apart. Check if your layover is safe before booking.",
    "上海、成都和北京各有两个相距很远的大型机场。订票前先算清你的转机时间够不够。"
  ),
  pairLabel: t2("Select airport transfer pair", "选择跨场转机机场组合"),
  layoverLabel: t2("Your scheduled layover time (hours)", "你预留的转机总时间（小时）"),
  breakdownTitle: t2("Minimum Safe Time Breakdown (T_min)", "最短安全时间拆解（T_min）"),
  immig: t2("Immigration & border control", "入境边检"),
  baggage: t2("Baggage claim", "提取行李"),
  cross: t2("Cross-city airport transfer", "跨机场交通与候车步行"),
  cutoff: t2("Next flight check-in cutoff", "下程人工柜台截载"),
  buffer: t2("Safety buffer", "防延误缓冲时间"),
  totalMin: t2("Calculated minimum (T_min)", "计算最短耗时（T_min）"),
  hoursUnit: t2("hours", "小时"),
  minsUnit: t2("min", "分钟"),
};

export default function PowerbankAirport({ lang }: { lang: Lang }) {
  const T = (l: L) => tx(l, lang);

  // Sub-tool A state
  const [transport, setTransport] = useState<TransportType>("domestic");
  const [ccc, setCcc] = useState<CccStatus>("no");
  const [mah, setMah] = useState<string>("20000");
  const [volt, setVolt] = useState<string>("3.7");

  // Sub-tool B state
  const [pairId, setPairId] = useState<AirportPairId>("shanghai");
  const [layover, setLayover] = useState<number>(4);

  const mahNum = Math.max(0, Number(mah) || 0);
  const voltNum = Math.max(0, Number(volt) || 0);
  const wh = (mahNum * voltNum) / 1000;

  // Evaluate power bank verdict
  type Verdict = { tone: "red" | "amber" | "green"; title: L; body: L; tip?: L };
  let verdict: Verdict;

  if (ccc === "unreadable") {
    verdict = {
      tone: "red",
      title: t2("CONFISCATED — Unreadable Capacity / Markings", "100% 没收——参数磨损模糊不清"),
      body: t2(
        "Whether on a domestic or international flight, any power bank with scratched-off or unreadable capacity markings is 100% confiscated at Chinese airport security. High-speed trains also require clear markings.",
        "无论国内还是国际航班，参数模糊不清或字迹磨损的充电宝在中国机场安检 100% 当场没收！高铁同样要求标志清晰。"
      ),
    };
  } else if (wh > 160) {
    verdict = {
      tone: "red",
      title: t2(`PROHIBITED (${wh.toFixed(1)} Wh > 160 Wh)`, `严禁携带登机（${wh.toFixed(1)} Wh > 160 Wh）`),
      body: t2(
        "Power banks over 160 Wh are strictly banned on all flights (carry-on and checked) and on Chinese high-speed trains (limit 100 Wh).",
        "超过 160 Wh 的充电宝严禁携带登机（随身和托运均不可），也不能带上中国高铁（上限 100 Wh）。"
      ),
    };
  } else if (wh > 100) {
    if (transport === "hsr_only") {
      verdict = {
        tone: "red",
        title: t2(`NOT ALLOWED ON HIGH-SPEED TRAINS (${wh.toFixed(1)} Wh > 100 Wh)`, `不可带上高铁（${wh.toFixed(1)} Wh > 100 Wh）`),
        body: t2(
          "Chinese high-speed trains limit a single power bank to 100 Wh (≈27,000 mAh at 3.7V). A power bank over 100 Wh will be stopped at station security.",
          "中国高铁规定单块充电宝不得超过 100 Wh（3.7V 下约 27,000 mAh）。超过 100 Wh 无法通过火车站安检。"
        ),
      };
    } else {
      verdict = {
        tone: "amber",
        title: t2(`REQUIRES AIRLINE APPROVAL (${wh.toFixed(1)} Wh: 100–160 Wh)`, `需航空公司书面批准（${wh.toFixed(1)} Wh：100–160 Wh）`),
        body: t2(
          "Power banks between 100 Wh and 160 Wh require written approval from the airline check-in counter (max 2 units) — very inconvenient and not recommended. Also note: domestic flights still require a clear CCC logo, and high-speed trains ban >100 Wh.",
          "100 Wh 至 160 Wh 的充电宝需要航空公司柜台书面批准（限带 2 块），极度麻烦，不建议携带！另请注意：国内航班仍要求清晰 CCC 标志，且高铁禁止超过 100 Wh。"
        ),
      };
    }
  } else if (transport === "domestic" && ccc === "no") {
    verdict = {
      tone: "red",
      title: t2("CONFISCATION ALERT — No CCC Logo on Domestic Flight!", "没收预警——无 CCC 标志严禁带上国内航班！"),
      body: t2(
        "Under mandatory CAAC rules, power banks without China's CCC certification mark are strictly banned on China domestic flights. Even though your overseas power bank is under 100 Wh and flies into China's international arrival hall without issue, it WILL be intercepted at security when you transfer to a domestic flight (e.g. Shanghai → Xi'an or Chengdu).",
        "根据中国民航局强制新规，乘坐中国境内国内航班严禁携带无 CCC 认证标志的充电宝！您在海外购买的充电宝虽然容量合格、也能飞进中国国际到达厅，但在转乘上海飞西安/成都等国内航班安检时将被强制拦截不可带上飞机！"
      ),
      tip: t2(
        "Money-saving fix: Leave your expensive overseas power bank at home. On Day 1 in China, walk into any Xiaomi Store (小米之家) and buy a brand-new fast-charging power bank with a clear CCC logo for ¥79–¥129 (about $12–$18).",
        "省钱解法：把海外充电宝留在家里，落地中国第一天在任意小米之家（Xiaomi Store）花 ¥79–¥129（约 $12–$18）买一块全新带 CCC 标志的快充充电宝！"
      ),
    };
  } else if (transport === "hsr_only") {
    verdict = {
      tone: "green",
      title: t2(`ALLOWED ON HIGH-SPEED TRAINS (${wh.toFixed(1)} Wh ≤ 100 Wh)`, `可带上高铁与地铁（${wh.toFixed(1)} Wh ≤ 100 Wh）`),
      body: t2(
        "Your power bank is within the 100 Wh limit and has clear markings. High-speed train security does not currently enforce the CCC logo rule on overseas power banks.",
        "你的充电宝不超过 100 Wh 且标志清晰。高铁安检目前不卡欧美版无 CCC 标问题，可以放心携带。"
      ),
    };
  } else if (transport === "intl_only") {
    verdict = {
      tone: "green",
      title: t2(`ALLOWED IN CARRY-ON (${wh.toFixed(1)} Wh ≤ 100 Wh)`, `可随身带上国际航班（${wh.toFixed(1)} Wh ≤ 100 Wh）`),
      body: t2(
        "Allowed in your carry-on bag (NEVER in checked luggage). Just remember: if you later add any China domestic flight leg, a power bank without a CCC logo will be stopped.",
        "可放入随身行李携带登机（严禁托运）。请记住：如果你后续临时增加任何中国境内国内航班，无 CCC 标志的充电宝会被拦截。"
      ),
    };
  } else {
    verdict = {
      tone: "green",
      title: t2(`ALLOWED ON DOMESTIC FLIGHTS (${wh.toFixed(1)} Wh + CCC)`, `可带上国内航班（${wh.toFixed(1)} Wh + CCC 标志）`),
      body: t2(
        "Your power bank is ≤ 100 Wh and has a clear CCC logo. Keep it in your carry-on bag only (never in checked luggage).",
        "你的充电宝不超过 100 Wh 且有清晰的 CCC 标志。请务必随身携带登机（严禁放入托运行李）。"
      ),
    };
  }

  // Sub-tool B calculation
  const pair = AIRPORT_PAIRS.find((p) => p.id === pairId) ?? AIRPORT_PAIRS[0];
  const totalMin = pair.immigMin + pair.baggageMin + pair.crossCityMin + pair.cutoffMin + pair.bufferMin;
  const totalHours = totalMin / 60;

  let transferTone: "red" | "amber" | "green" = "green";
  let transferHeadline: L;
  if (layover < pair.dangerBelowHours) {
    transferTone = "red";
    transferHeadline = t2(
      `DANGER (${layover} h) — Very high chance of missing your flight!`,
      `极高风险（${layover} 小时）——极大概率误机！`
    );
  } else if (layover < pair.minSafeHours) {
    transferTone = "amber";
    transferHeadline = t2(
      `TIGHT (${layover} h) — Any flight delay or long immigration queue could make you miss it.`,
      `偏紧（${layover} 小时）——一旦航班晚点或边检排长队就可能误机。`
    );
  } else {
    transferTone = "green";
    transferHeadline = t2(
      `SAFE (${layover} h) — Enough time for immigration, cross-city transfer and check-in.`,
      `安全（${layover} 小时）——足够完成入境、跨机场交通和下程值机。`
    );
  }

  const toneStyle = {
    red: "border-red-300 bg-red-50 text-red-900",
    amber: "border-amber-300 bg-amber-50 text-amber-900",
    green: "border-emerald-300 bg-emerald-50 text-emerald-900",
  };

  const radioBtn = (active: boolean) =>
    `rounded-lg border px-3.5 py-2.5 text-left text-sm transition ${
      active ? "border-red-500 bg-red-50 font-semibold text-red-800" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
    }`;

  return (
    <div className="space-y-10">
      {/* Sub-tool A: Power Bank CCC Checker */}
      <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <BatteryCharging className="h-5 w-5 text-red-600" /> {T(U.partA)}
        </h2>

        {/* Step 1 */}
        <div className="mt-5">
          <label className="mb-2 block text-sm font-bold text-slate-800">{T(U.step1)}</label>
          <div className="grid gap-2 sm:grid-cols-3">
            {(
              [
                ["intl_only", U.tIntl],
                ["domestic", U.tDom],
                ["hsr_only", U.tHsr],
              ] as const
            ).map(([val, lbl]) => (
              <button key={val} type="button" onClick={() => setTransport(val)} className={radioBtn(transport === val)}>
                {T(lbl)}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 + Visual Comparison */}
        <div className="mt-6">
          <label className="mb-2 block text-sm font-bold text-slate-800">{T(U.step2)}</label>

          {/* Simple SVG/CSS Comparison of CE/FCC vs Oval CCC */}
          <div className="mb-3 grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2">
            <div className="flex flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-3 text-center">
              <div className="flex items-center gap-4 text-slate-700">
                <span className="font-sans text-2xl font-extrabold tracking-widest">CE</span>
                <span className="rounded border-2 border-slate-700 px-1.5 py-0.5 text-lg font-black">FC</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-700 text-sm font-black">UL</span>
              </div>
              <span className="mt-2 text-xs text-slate-500">{T(U.compareLeft)}</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-emerald-400 bg-emerald-50/40 p-3 text-center">
              <svg viewBox="0 0 120 64" className="h-11 w-24" aria-label="CCC certification mark">
                <ellipse cx="60" cy="32" rx="52" ry="26" fill="none" stroke="#0f172a" strokeWidth="4" />
                <text x="60" y="41" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="28" fill="#0f172a" letterSpacing="2">
                  CCC
                </text>
              </svg>
              <span className="mt-1 text-xs font-medium text-emerald-800">{T(U.compareRight)}</span>
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-3">
            {(
              [
                ["yes", U.cccYes],
                ["no", U.cccNo],
                ["unreadable", U.cccBad],
              ] as const
            ).map(([val, lbl]) => (
              <button key={val} type="button" onClick={() => setCcc(val)} className={radioBtn(ccc === val)}>
                {T(lbl)}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3 */}
        <div className="mt-6">
          <label className="mb-2 block text-sm font-bold text-slate-800">{T(U.step3)}</label>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <span className="mb-1 block text-xs font-medium text-slate-600">{T(U.mahLabel)}</span>
              <input
                type="number"
                min={0}
                step={1000}
                value={mah}
                onChange={(e) => setMah(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-900 focus:border-red-500 focus:outline-none"
              />
            </div>
            <div>
              <span className="mb-1 block text-xs font-medium text-slate-600">{T(U.voltLabel)}</span>
              <input
                type="number"
                min={0}
                step={0.1}
                value={volt}
                onChange={(e) => setVolt(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-900 focus:border-red-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col justify-center rounded-lg bg-slate-100 px-4 py-2">
              <span className="text-xs text-slate-500">{T(U.energyLabel)}</span>
              <span className="text-xl font-extrabold text-slate-900">{wh.toFixed(1)} Wh</span>
              <span className="text-[11px] text-slate-500">
                ({mahNum} × {voltNum}V) ÷ 1000
              </span>
            </div>
          </div>
          <p className="mt-2 text-xs text-slate-500">{T(U.voltHint)}</p>
        </div>

        {/* Verdict */}
        <div className={`mt-6 rounded-xl border-2 p-4 sm:p-5 ${toneStyle[verdict.tone]}`}>
          <div className="flex items-start gap-3">
            {verdict.tone === "red" && <ShieldX className="mt-0.5 h-6 w-6 shrink-0 text-red-600" />}
            {verdict.tone === "amber" && <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />}
            {verdict.tone === "green" && <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600" />}
            <div>
              <div className="text-base font-extrabold sm:text-lg">{T(verdict.title)}</div>
              <p className="mt-1.5 text-sm leading-relaxed">{T(verdict.body)}</p>
              {verdict.tip && (
                <div className="mt-3 rounded-lg bg-white/80 p-3 text-sm font-semibold text-slate-900">
                  👉 {T(verdict.tip)}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sub-tool B: Same-City Airport Transfer Calculator */}
      <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <Plane className="h-5 w-5 text-red-600" /> {T(U.partB)}
        </h2>
        <p className="mt-1 text-sm text-slate-600">{T(U.partBIntro)}</p>

        <div className="mt-5">
          <label className="mb-2 block text-sm font-bold text-slate-800">{T(U.pairLabel)}</label>
          <div className="grid gap-2 sm:grid-cols-3">
            {AIRPORT_PAIRS.map((p) => (
              <button key={p.id} type="button" onClick={() => setPairId(p.id)} className={radioBtn(pairId === p.id)}>
                <div className="font-bold">{p.codes}</div>
                <div className="mt-0.5 text-xs opacity-80">{T(p.label)}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between">
            <label className="text-sm font-bold text-slate-800">{T(U.layoverLabel)}</label>
            <span className="rounded-lg bg-slate-900 px-3 py-1 text-sm font-bold text-white">
              {layover} {T(U.hoursUnit)}
            </span>
          </div>
          <input
            type="range"
            min={1.5}
            max={9}
            step={0.5}
            value={layover}
            onChange={(e) => setLayover(Number(e.target.value))}
            className="mt-3 w-full accent-red-600"
          />
          <div className="mt-1 flex justify-between text-xs text-slate-400">
            <span>1.5 h</span>
            <span>3.5 h</span>
            <span>5.0 h</span>
            <span>7.0 h</span>
            <span>9.0 h</span>
          </div>
        </div>

        {/* Verdict */}
        <div className={`mt-5 rounded-xl border-2 p-4 ${toneStyle[transferTone]}`}>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <div className="font-extrabold">{T(transferHeadline)}</div>
              <p className="mt-1 text-sm">{T(pair.recommendedText)}</p>
              <p className="mt-1 text-xs opacity-85">
                {T(pair.distance)} · {T(pair.crossCityNote)}
              </p>
            </div>
          </div>
        </div>

        {/* T_min Breakdown */}
        <div className="mt-5 rounded-xl bg-slate-50 p-4">
          <div className="mb-3 text-sm font-bold text-slate-800">{T(U.breakdownTitle)}</div>
          <dl className="space-y-2 text-sm">
            {[
              [U.immig, `${pair.immigMin} ${T(U.minsUnit)}`],
              [U.baggage, `${pair.baggageMin} ${T(U.minsUnit)}`],
              [U.cross, `${pair.crossCityMin} ${T(U.minsUnit)}`],
              [U.cutoff, `${pair.cutoffMin} ${T(U.minsUnit)}`],
              [U.buffer, `${pair.bufferMin} ${T(U.minsUnit)}`],
            ].map(([label, val]) => (
              <div key={(label as L).en} className="flex justify-between border-b border-slate-200/70 pb-1.5 text-slate-700">
                <dt>{T(label as L)}</dt>
                <dd className="font-semibold text-slate-900">{val as string}</dd>
              </div>
            ))}
            <div className="flex justify-between pt-1 text-base font-bold text-slate-900">
              <dt>{T(U.totalMin)}</dt>
              <dd>
                {totalMin} {T(U.minsUnit)} ({totalHours.toFixed(1)} {T(U.hoursUnit)})
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <AffiliateBox id="airportTransfer" lang={lang} />
    </div>
  );
}
