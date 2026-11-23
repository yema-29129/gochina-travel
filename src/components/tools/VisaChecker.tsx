"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, Clock, MapPin, Plane, Search, ShieldAlert, X, XCircle } from "lucide-react";
import { Lang, t2, tx } from "@/lib/i18n";
import {
  ALL_SPOTS,
  ALLOWED_SPOTS,
  BLACKLIST_SPOTS,
  COUNTRIES,
  GD_SPECIAL_EXITS,
  OTHER_PORT,
  PORTS,
  PROVINCES,
  REGIONS,
  RULE_180_90,
  TRANSIT_EXAMPLE,
  TRANSIT_NOTES,
  UNILATERAL_NOTES,
  findPort,
  findProvince,
  findRegion,
  tiersOf,
} from "@/data/visa";
import { AffiliateBox } from "@/components/AffiliateBox";

type Validity = "gt6" | "3to6" | "lt3";

function parseChinaDateTime(dateStr: string, timeStr: string): Date | null {
  if (!dateStr) return null;
  const [y, m, d] = dateStr.split("-").map(Number);
  const [hh, mm] = (timeStr || "00:00").split(":").map(Number);
  if (!y || !m || !d || Number.isNaN(hh) || Number.isNaN(mm)) return null;
  return new Date(Date.UTC(y, m - 1, d, hh, mm, 0));
}

function addUtcDays(dateStr: string, days: number): { y: number; m: number; d: number } | null {
  if (!dateStr) return null;
  const [y, m, d] = dateStr.split("-").map(Number);
  if (!y || !m || !d) return null;
  const dt = new Date(Date.UTC(y, m - 1, d + days, 0, 0, 0));
  return { y: dt.getUTCFullYear(), m: dt.getUTCMonth() + 1, d: dt.getUTCDate() };
}

function fmtDate(parts: { y: number; m: number; d: number }, lang: Lang): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return lang === "zh"
    ? `${parts.y} 年 ${parts.m} 月 ${parts.d} 日`
    : `${parts.y}-${pad(parts.m)}-${pad(parts.d)}`;
}

export default function VisaChecker({ lang }: { lang: Lang }) {
  const [passport, setPassport] = useState("US");
  const [passportQuery, setPassportQuery] = useState("");
  const [validity, setValidity] = useState<Validity>("gt6");
  const [regionA, setRegionA] = useState("US");
  const [entryPort, setEntryPort] = useState("PVG");
  const [arrDate, setArrDate] = useState("2026-10-15");
  const [arrTime, setArrTime] = useState("14:30");
  const [selectedSpots, setSelectedSpots] = useState<string[]>(["shanghai", "beijing"]);
  const [spotQuery, setSpotQuery] = useState("");
  const [exitPort, setExitPort] = useState("PEK");
  const [regionC, setRegionC] = useState("HK");
  const [depDate, setDepDate] = useState("2026-10-25");
  const [depTime, setDepTime] = useState("22:15");

  const filteredCountries = useMemo(() => {
    const q = passportQuery.trim().toLowerCase();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter(
      (c) => c.en.toLowerCase().includes(q) || c.zh.includes(q) || c.code.toLowerCase().includes(q),
    );
  }, [passportQuery]);

  const filteredAllowedSpots = useMemo(() => {
    const q = spotQuery.trim().toLowerCase();
    if (!q) return ALLOWED_SPOTS;
    return ALLOWED_SPOTS.filter(
      (s) => s.name.en.toLowerCase().includes(q) || s.name.zh.includes(q) || s.area.en.toLowerCase().includes(q),
    );
  }, [spotQuery]);

  const filteredBlacklistSpots = useMemo(() => {
    const q = spotQuery.trim().toLowerCase();
    if (!q) return BLACKLIST_SPOTS;
    return BLACKLIST_SPOTS.filter(
      (s) => s.name.en.toLowerCase().includes(q) || s.name.zh.includes(q) || s.area.en.toLowerCase().includes(q),
    );
  }, [spotQuery]);

  const toggleSpot = (id: string) => {
    setSelectedSpots((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const result = useMemo(() => {
    const tiers = tiersOf(passport);
    const hasUnilateral = tiers.includes("unilateral");
    const hasMutual = tiers.includes("mutual");
    const has30Day = hasUnilateral || hasMutual;
    const hasTransit = tiers.includes("transit");

    const arrDt = parseChinaDateTime(arrDate, arrTime);
    const depDt = parseChinaDateTime(depDate, depTime);

    // Calendar day difference (counted from 00:00 the day after arrival)
    const arrDayUtc = arrDate ? Date.UTC(...(arrDate.split("-").map((v, i) => (i === 1 ? Number(v) - 1 : Number(v))) as [number, number, number])) : 0;
    const depDayUtc = depDate ? Date.UTC(...(depDate.split("-").map((v, i) => (i === 1 ? Number(v) - 1 : Number(v))) as [number, number, number])) : 0;
    const stayDays = arrDate && depDate ? Math.round((depDayUtc - arrDayUtc) / 86_400_000) : 0;

    // 240h exact clock
    const [arrH, arrM] = (arrTime || "00:00").split(":").map(Number);
    const arrHourFloat = (Number.isNaN(arrH) ? 0 : arrH) + (Number.isNaN(arrM) ? 0 : arrM) / 60;
    const actualMaxHours = 24 - arrHourFloat + 240;
    const startParts = addUtcDays(arrDate, 1);
    const deadlineParts = addUtcDays(arrDate, 10);
    const deadlineDt = deadlineParts
      ? new Date(Date.UTC(deadlineParts.y, deadlineParts.m - 1, deadlineParts.d, 23, 59, 59))
      : null;

    const overstayHours =
      depDt && deadlineDt && depDt.getTime() > deadlineDt.getTime()
        ? (depDt.getTime() - deadlineDt.getTime()) / 3_600_000
        : 0;
    const remainingHours =
      depDt && deadlineDt && depDt.getTime() <= deadlineDt.getTime()
        ? (deadlineDt.getTime() - depDt.getTime()) / 3_600_000
        : 0;
    const depBeforeArr = Boolean(arrDt && depDt && depDt.getTime() <= arrDt.getTime());

    // Channel selection
    type Channel = "stopped_validity" | "visa_free_30" | "transit_240" | "visa_required";
    let channel: Channel = "visa_required";
    if (validity === "lt3") {
      channel = "stopped_validity";
    } else if (has30Day && stayDays <= 30 && !depBeforeArr) {
      channel = "visa_free_30";
    } else if (hasTransit && !depBeforeArr) {
      channel = "transit_240";
    } else {
      channel = "visa_required";
    }

    // Check 1: Validity
    const check1Pass = validity !== "lt3";

    // Check 2: Channel eligibility
    const check2Pass = channel === "visa_free_30" || channel === "transit_240";

    // Check 3: Direction A != C (required only for 240h transit)
    const isRoundTrip = regionA === regionC;
    const check3Pass = channel === "visa_free_30" ? true : !isRoundTrip;

    // Check 4: Time limit
    const check4Pass =
      !depBeforeArr &&
      (channel === "visa_free_30" ? stayDays <= 30 : channel === "transit_240" ? overstayHours === 0 : false);

    // Check 5: Ports & restricted spots
    const entryIn65 = PORTS.some((p) => p.id === entryPort);
    const exitIn65 = PORTS.some((p) => p.id === exitPort);
    const exitInGdSpecial = GD_SPECIAL_EXITS.some((p) => p.id === exitPort);
    const entryOk = channel === "visa_free_30" ? true : entryIn65;
    const exitOk = channel === "visa_free_30" ? true : exitIn65 || exitInGdSpecial;

    const chosenSpots = ALL_SPOTS.filter((s) => selectedSpots.includes(s.id));
    const alwaysForbiddenHits = chosenSpots.filter((s) => s.alwaysForbidden);
    const transitBlacklistHits = chosenSpots.filter(
      (s) => !s.alwaysForbidden && BLACKLIST_SPOTS.some((b) => b.id === s.id),
    );
    const activeSpotViolations =
      channel === "visa_free_30" ? alwaysForbiddenHits : [...alwaysForbiddenHits, ...transitBlacklistHits];

    const check5Pass = entryOk && exitOk && activeSpotViolations.length === 0;

    const overallPass = check1Pass && check2Pass && check3Pass && check4Pass && check5Pass;

    return {
      tiers,
      hasUnilateral,
      hasMutual,
      has30Day,
      hasTransit,
      channel,
      stayDays,
      actualMaxHours,
      startParts,
      deadlineParts,
      overstayHours,
      remainingHours,
      depBeforeArr,
      isRoundTrip,
      entryIn65,
      exitIn65,
      exitInGdSpecial,
      entryOk,
      exitOk,
      alwaysForbiddenHits,
      transitBlacklistHits,
      activeSpotViolations,
      check1Pass,
      check2Pass,
      check3Pass,
      check4Pass,
      check5Pass,
      overallPass,
      hasRule18090: RULE_180_90.includes(passport),
      unilateralNote: UNILATERAL_NOTES[passport],
      transitNote: TRANSIT_NOTES[passport],
    };
  }, [passport, validity, regionA, entryPort, arrDate, arrTime, selectedSpots, exitPort, regionC, depDate, depTime]);

  const passportObj = COUNTRIES.find((c) => c.code === passport);
  const regionAObj = findRegion(regionA);
  const regionCObj = findRegion(regionC);
  const entryPortObj = findPort(entryPort);
  const exitPortObj = findPort(exitPort);

  return (
    <div className="space-y-6">
      {/* Input Form */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-lg font-bold text-slate-900">
          {tx(t2("Enter Your Trip Details (9 Inputs)", "填写您的行程信息（9 项输入）"), lang)}
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          {tx(
            t2(
              "All calculations run locally in your browser. Checks 30-day visa-free, mutual exemption, and 240-hour transit rules.",
              "所有校验均在您的浏览器本地即时完成，自动匹配 30 天单方面免签、双边互免与 240 小时过境免签政策。",
            ),
            lang,
          )}
        </p>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {/* Input 1: Passport Country */}
          <div>
            <label className="block text-sm font-semibold text-slate-800">
              1. {tx(t2("Your Passport Country", "护照国籍"), lang)}
            </label>
            <div className="relative mt-1.5">
              <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={passportQuery}
                onChange={(e) => setPassportQuery(e.target.value)}
                placeholder={tx(t2("Search country (e.g. United States, UK, Japan)...", "搜索国家（如美国、英国、日本）..."), lang)}
                className="w-full rounded-t-lg border border-b-0 border-slate-300 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-900 focus:border-red-500 focus:bg-white focus:outline-none"
              />
            </div>
            <select
              value={passport}
              onChange={(e) => setPassport(e.target.value)}
              className="w-full rounded-b-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-red-500 focus:outline-none"
            >
              {filteredCountries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {lang === "zh" ? `${c.zh} (${c.en})` : `${c.en} (${c.code})`}
                </option>
              ))}
            </select>
          </div>

          {/* Input 2: Passport Validity */}
          <div>
            <label className="block text-sm font-semibold text-slate-800">
              2. {tx(t2("Passport Validity Remaining", "护照剩余有效期"), lang)}
            </label>
            <div className="mt-1.5 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {(
                [
                  { id: "gt6", label: t2("More than 6 months", "6 个月以上") },
                  { id: "3to6", label: t2("3 to 6 months", "3 至 6 个月") },
                  { id: "lt3", label: t2("Less than 3 months", "不足 3 个月") },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setValidity(opt.id)}
                  className={`rounded-lg border px-3 py-2.5 text-xs font-semibold transition sm:text-sm ${
                    validity === opt.id
                      ? opt.id === "lt3"
                        ? "border-red-600 bg-red-50 text-red-700"
                        : "border-red-600 bg-red-600 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {tx(opt.label, lang)}
                </button>
              ))}
            </div>
          </div>

          {/* Input 3: Region A */}
          <div>
            <label className="block text-sm font-semibold text-slate-800">
              3. {tx(t2("Immediate Origin BEFORE Mainland China (Region A)", "飞进中国大陆前紧邻的起飞地（区域 A）"), lang)}
            </label>
            <p className="mt-0.5 text-xs text-slate-500">
              {tx(
                t2(
                  "Look at your LAST flight leg! e.g., NYC → Tokyo transit → Shanghai means you must select Japan. HK, Macau & Taiwan count separately.",
                  "看最后一段航程！例如 纽约 → 东京转机 → 上海，此处必须选日本。中国香港、中国澳门、中国台湾均算独立地区。",
                ),
                lang,
              )}
            </p>
            <select
              value={regionA}
              onChange={(e) => setRegionA(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-red-500 focus:outline-none"
            >
              {REGIONS.map((r) => (
                <option key={r.code} value={r.code}>
                  {r.flag} {lang === "zh" ? `${r.zh} (${r.en})` : r.en}
                </option>
              ))}
            </select>
          </div>

          {/* Input 8: Region C */}
          <div>
            <label className="block text-sm font-semibold text-slate-800">
              8. {tx(t2("Immediate Destination AFTER Mainland China (Region C)", "离开中国大陆后紧邻的落脚地（区域 C）"), lang)}
            </label>
            <p className="mt-0.5 text-xs text-slate-500">
              {tx(
                t2(
                  "Must be DIFFERENT from Region A for 240-hour transit (Hong Kong, Macau, Taiwan, Seoul or Tokyo all count).",
                  "240 小时过境免签要求区域 C 必须与区域 A 不同（香港、澳门、台湾、首尔或东京均算第三方地区）。",
                ),
                lang,
              )}
            </p>
            <select
              value={regionC}
              onChange={(e) => setRegionC(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-red-500 focus:outline-none"
            >
              {REGIONS.map((r) => (
                <option key={r.code} value={r.code}>
                  {r.flag} {lang === "zh" ? `${r.zh} (${r.en})` : r.en}
                </option>
              ))}
            </select>
          </div>

          {/* Input 4: Entry Port */}
          <div>
            <label className="block text-sm font-semibold text-slate-800">
              4. {tx(t2("Mainland China Entry Port", "中国大陆入境口岸"), lang)}
            </label>
            <select
              value={entryPort}
              onChange={(e) => setEntryPort(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-red-500 focus:outline-none"
            >
              <optgroup label={tx(t2("65 Official 240-Hour Transit Ports", "官方 65 个 240 小时过境免签口岸"), lang)}>
                {PORTS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {lang === "zh" ? p.zh : p.en}
                  </option>
                ))}
              </optgroup>
              <optgroup label={tx(t2("Other Ports", "其他口岸"), lang)}>
                <option value={OTHER_PORT.id}>{lang === "zh" ? OTHER_PORT.zh : OTHER_PORT.en}</option>
              </optgroup>
            </select>
          </div>

          {/* Input 7: Exit Port */}
          <div>
            <label className="block text-sm font-semibold text-slate-800">
              7. {tx(t2("Mainland China Exit Port", "中国大陆出境口岸"), lang)}
            </label>
            <select
              value={exitPort}
              onChange={(e) => setExitPort(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-red-500 focus:outline-none"
            >
              <optgroup label={tx(t2("65 Official 240-Hour Transit Ports", "官方 65 个 240 小时过境免签口岸"), lang)}>
                {PORTS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {lang === "zh" ? p.zh : p.en}
                  </option>
                ))}
              </optgroup>
              <optgroup label={tx(t2("Guangdong Exit-Only Bonus Ports (to HK / Macau)", "广东全省出境特例口岸（赴港澳）"), lang)}>
                {GD_SPECIAL_EXITS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {lang === "zh" ? p.zh : p.en}
                  </option>
                ))}
              </optgroup>
              <optgroup label={tx(t2("Other Ports", "其他口岸"), lang)}>
                <option value={OTHER_PORT.id}>{lang === "zh" ? OTHER_PORT.zh : OTHER_PORT.en}</option>
              </optgroup>
            </select>
          </div>

          {/* Input 5: Arrival Date & Time */}
          <div>
            <label className="block text-sm font-semibold text-slate-800">
              5. {tx(t2("Arrival Date & Time (Local China Time)", "航班落地日期与时间（北京时间）"), lang)}
            </label>
            <div className="mt-1.5 grid grid-cols-2 gap-2">
              <input
                type="date"
                value={arrDate}
                onChange={(e) => setArrDate(e.target.value)}
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-red-500 focus:outline-none"
              />
              <input
                type="time"
                value={arrTime}
                onChange={(e) => setArrTime(e.target.value)}
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-red-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Input 9: Planned Departure Date & Time */}
          <div>
            <label className="block text-sm font-semibold text-slate-800">
              9. {tx(t2("Planned Departure Date & Time (Local China Time)", "计划离境日期与时间（北京时间）"), lang)}
            </label>
            <div className="mt-1.5 grid grid-cols-2 gap-2">
              <input
                type="date"
                value={depDate}
                onChange={(e) => setDepDate(e.target.value)}
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-red-500 focus:outline-none"
              />
              <input
                type="time"
                value={depTime}
                onChange={(e) => setDepTime(e.target.value)}
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-red-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Input 6: Multi-select Cities / Spots */}
        <div className="mt-5 border-t border-slate-100 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label className="text-sm font-semibold text-slate-800">
              6. {tx(t2("Cities / Spots You Plan to Visit (Multi-select)", "计划游览的城市或景点（可多选）"), lang)}
            </label>
            {selectedSpots.length > 0 && (
              <button
                type="button"
                onClick={() => setSelectedSpots([])}
                className="text-xs font-medium text-slate-500 hover:text-red-600"
              >
                {tx(t2("Clear all", "清空已选"), lang)}
              </button>
            )}
          </div>

          {/* Selected tags */}
          {selectedSpots.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {selectedSpots.map((id) => {
                const spot = ALL_SPOTS.find((s) => s.id === id);
                if (!spot) return null;
                const isRisk = BLACKLIST_SPOTS.some((b) => b.id === id);
                return (
                  <span
                    key={id}
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                      isRisk ? "bg-red-100 text-red-800" : "bg-slate-900 text-white"
                    }`}
                  >
                    {tx(spot.name, lang)}
                    <button type="button" onClick={() => toggleSpot(id)} aria-label="Remove">
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </span>
                );
              })}
            </div>
          )}

          {/* Filter */}
          <div className="relative mt-2.5">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={spotQuery}
              onChange={(e) => setSpotQuery(e.target.value)}
              placeholder={tx(t2("Filter cities or spots (e.g. Jiuzhaigou, Pingyao, Tibet, Chengdu)...", "筛选城市或景点（如九寨沟、平遥、西藏、成都）..."), lang)}
              className="w-full rounded-lg border border-slate-300 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-900 focus:border-red-500 focus:bg-white focus:outline-none"
            />
          </div>

          <div className="mt-3 space-y-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {tx(t2("Popular Cities Inside 240-Hour Allowed Areas", "240 小时过境免签允许区域内的热门城市"), lang)}
              </div>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {filteredAllowedSpots.map((s) => {
                  const active = selectedSpots.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggleSpot(s.id)}
                      className={`rounded-lg border px-2.5 py-1 text-xs font-medium transition ${
                        active
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      {tx(s.name, lang)}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-red-600">
                {tx(t2("High-Risk / Restricted Spots (Check Before You Go!)", "高危越界 / 需特别许可景点（出行前务必核对！）"), lang)}
              </div>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {filteredBlacklistSpots.map((s) => {
                  const active = selectedSpots.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggleSpot(s.id)}
                      className={`rounded-lg border px-2.5 py-1 text-xs font-medium transition ${
                        active
                          ? "border-red-600 bg-red-600 text-white"
                          : "border-red-200 bg-red-50 text-red-800 hover:border-red-300"
                      }`}
                    >
                      {tx(s.name, lang)}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overall Verdict Banner */}
      <div
        className={`rounded-xl border p-5 ${
          result.overallPass
            ? "border-emerald-300 bg-emerald-50 text-emerald-950"
            : "border-red-300 bg-red-50 text-red-950"
        }`}
      >
        <div className="flex items-start gap-3">
          {result.overallPass ? (
            <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600" />
          ) : (
            <XCircle className="mt-0.5 h-6 w-6 shrink-0 text-red-600" />
          )}
          <div className="flex-1">
            <div className="text-lg font-bold">
              {result.overallPass
                ? result.channel === "visa_free_30"
                  ? tx(t2("✅ Eligible: 30-Day Visa-Free Entry", "✅ 校验通过：适用 30 天免签入境"), lang)
                  : tx(t2("✅ Eligible: 240-Hour (10-Day) Visa-Free Transit", "✅ 校验通过：适用 240 小时（10 天）过境免签"), lang)
                : tx(t2("❌ Route Blocked — Action Required Before Boarding", "❌ 行程未通过校验 — 登机前必须调整或办签"), lang)}
            </div>
            <p className="mt-1 text-sm opacity-90">
              {passportObj ? `${passportObj.flag} ${lang === "zh" ? passportObj.zh : passportObj.en}` : passport} ·{" "}
              {regionAObj ? (lang === "zh" ? regionAObj.zh : regionAObj.en) : regionA} →{" "}
              {tx(t2("Mainland China", "中国大陆"), lang)} →{" "}
              {regionCObj ? (lang === "zh" ? regionCObj.zh : regionCObj.en) : regionC}
            </p>
            {result.unilateralNote && (
              <p className="mt-1.5 text-xs font-medium text-emerald-800">{tx(result.unilateralNote, lang)}</p>
            )}
            {result.transitNote && (
              <p className="mt-1.5 text-xs font-medium text-slate-700">{tx(result.transitNote, lang)}</p>
            )}
          </div>
        </div>
      </div>

      {/* 5-Gate Validation Breakdown */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-slate-900">
          {tx(t2("5-Gate Validation Results", "5 道关卡逐项校验结果"), lang)}
        </h3>

        {/* Gate 1: Passport Validity */}
        <div
          className={`rounded-xl border p-4 ${
            result.check1Pass ? "border-emerald-200 bg-white" : "border-red-300 bg-red-50"
          }`}
        >
          <div className="flex items-start gap-2.5">
            <span className="text-base leading-6">{result.check1Pass ? "✅" : "❌"}</span>
            <div className="flex-1 text-sm">
              <div className="font-bold text-slate-900">
                {tx(t2("Gate 1: Passport Validity Check", "第一关：护照有效期校验"), lang)}
              </div>
              {validity === "lt3" ? (
                <p className="mt-1 font-medium text-red-700">
                  {tx(
                    t2(
                      "STOP: Regardless of visa-free policy, a passport with less than 3 months of validity remaining will be denied entry. Renew your passport first!",
                      "红色终止警告：无论何种免签政策，护照有效期不足 3 个月均会被拒绝入境，请先换发新护照！",
                    ),
                    lang,
                  )}
                </p>
              ) : validity === "3to6" ? (
                <p className="mt-1 text-amber-800">
                  {tx(
                    t2(
                      "Meets the 3-month minimum for visa-free transit, but many airlines enforce a 6-month passport validity rule. Confirm with your airline before flying.",
                      "满足过境免签最低 3 个月要求，但部分航空公司值机柜台会按 6 个月有效期查验，出发前请与航司确认。",
                    ),
                    lang,
                  )}
                </p>
              ) : (
                <p className="mt-1 text-slate-600">
                  {tx(t2("More than 6 months remaining — meets all entry requirements.", "剩余有效期超过 6 个月，符合所有入境要求。"), lang)}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Gate 2: Visa-Free Channel Match */}
        <div
          className={`rounded-xl border p-4 ${
            result.check2Pass ? "border-emerald-200 bg-white" : "border-red-300 bg-red-50"
          }`}
        >
          <div className="flex items-start gap-2.5">
            <span className="text-base leading-6">{result.check2Pass ? "✅" : "❌"}</span>
            <div className="flex-1 text-sm">
              <div className="font-bold text-slate-900">
                {tx(t2("Gate 2: Best Visa-Free Channel Match", "第二关：最优免签通道自动匹配"), lang)}
              </div>
              {result.channel === "visa_free_30" && (
                <div className="mt-1 space-y-1.5 text-slate-700">
                  <p>
                    {result.hasUnilateral
                      ? tx(
                          t2(
                            `Matched: 30-day unilateral visa-free list (50 countries). Planned stay: ${result.stayDays} day(s) (max 30 days, counted from 00:00 the day after arrival). Direct round-trips (A = C) are legal, and you can travel nationwide (except Tibet, which always needs a permit).`,
                            `命中：30 天单方面免签名单（50 国）。计划停留 ${result.stayDays} 天（自入境次日零时起算，最长 30 天）。直飞往返（A = C）合法，无 65 口岸与省内部分市限制（除西藏等需许可地区外全国畅行）。`,
                          ),
                          lang,
                        )
                      : tx(
                          t2(
                            `Matched: Bilateral mutual visa-exemption list (29 countries). Planned stay: ${result.stayDays} day(s) (max 30 days per entry). Direct round-trips (A = C) are legal, and you can travel nationwide (except Tibet).`,
                            `命中：双边互免签证名单（29 国）。计划停留 ${result.stayDays} 天（单次最长 30 天）。直飞往返（A = C）合法，全国畅行（西藏除外）。`,
                          ),
                          lang,
                        )}
                  </p>
                  {result.hasRule18090 && (
                    <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-2.5 text-xs text-amber-900">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                      <span>
                        {tx(
                          t2(
                            "180/90 Rule Reminder: Mutual-exemption stays for your passport are capped at 90 cumulative days in any 180-day period (max 30 days per entry).",
                            "180/90 天提醒：您的互免协议规定每 180 天内累计停留不得超过 90 天（单次不超过 30 天）。",
                          ),
                          lang,
                        )}
                      </span>
                    </div>
                  )}
                </div>
              )}
              {result.channel === "transit_240" && (
                <p className="mt-1 text-slate-700">
                  {tx(
                    t2(
                      "Matched: 240-hour (10-day) visa-free transit list (57 countries). You must pass Gates 3, 4, and 5 below.",
                      "命中：240 小时（10 天）过境免签名单（57 国）。您必须同时通过下方第三、四、五关严格校验。",
                    ),
                    lang,
                  )}
                </p>
              )}
              {result.channel === "visa_required" && (
                <p className="mt-1 font-medium text-red-700">
                  {result.has30Day && result.stayDays > 30
                    ? tx(
                        t2(
                          `Your planned stay (${result.stayDays} days) exceeds the 30-day visa-free limit. You must apply in advance for an L tourist visa at a Chinese Visa Application Service Center (CVASC).`,
                          `您的计划停留天数（${result.stayDays} 天）超过了 30 天免签上限。您必须提前在中国签证申请服务中心（CVASC）办理 L 字旅游签证。`,
                        ),
                        lang,
                      )
                    : tx(
                        t2(
                          "Your passport or itinerary does not qualify for visa-free entry. You must apply in advance for an L tourist visa at a Chinese Visa Application Service Center (CVASC).",
                          "您的护照或行程未命中免签通道，必须提前在中国签证申请服务中心（CVASC）办理 L 字旅游签证。",
                        ),
                        lang,
                      )}
                </p>
              )}
              {result.channel === "stopped_validity" && (
                <p className="mt-1 text-red-700">
                  {tx(t2("Blocked at Gate 1 due to passport validity under 3 months.", "因护照有效期不足 3 个月已在第一关被拦截。"), lang)}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Gate 3: 240h Direction A != C */}
        <div
          className={`rounded-xl border p-4 ${
            result.check3Pass ? "border-emerald-200 bg-white" : "border-red-300 bg-red-50"
          }`}
        >
          <div className="flex items-start gap-2.5">
            <span className="text-base leading-6">{result.check3Pass ? "✅" : "❌"}</span>
            <div className="flex-1 text-sm">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <Plane className="h-4 w-4 text-slate-500" />
                {tx(t2("Gate 3: Transit Direction Rule (Region A ≠ Region C)", "第三关：240 小时过境方向铁律（区域 A ≠ 区域 C）"), lang)}
              </div>
              {result.channel === "visa_free_30" ? (
                <p className="mt-1 text-slate-600">
                  {tx(
                    t2(
                      "Not restricted under 30-day visa-free entry — direct round-trips (A = C) are completely legal.",
                      "30 天免签通道不受此限，直飞往返（A = C）完全合法。",
                    ),
                    lang,
                  )}
                </p>
              ) : result.isRoundTrip ? (
                <p className="mt-1 font-medium text-red-700">
                  {tx(
                    t2(
                      `FATAL ERROR — Invalid round-trip! Immigration only checks the immediate legs before and after Mainland China. Your route (${regionAObj?.en ?? regionA} → Mainland China → ${regionCObj?.en ?? regionC}) is a round-trip (A = C) and airlines will 100% deny boarding! Change your return leg to transit via Hong Kong, Macau, Seoul, or Taipei.`,
                      `致命错误 — 违规往返行程！边检只看紧邻中国大陆的前后航段。您的路线（${regionAObj?.zh ?? regionA} → 中国大陆 → ${regionCObj?.zh ?? regionC}）构成折返（A = C），航司将 100% 拒绝发放登机牌！建议将回程改为经停中国香港、中国澳门、首尔或台北。`,
                    ),
                    lang,
                  )}
                </p>
              ) : (
                <p className="mt-1 text-slate-700">
                  {tx(
                    t2(
                      `Passed: ${regionAObj?.en ?? regionA} → Mainland China → ${regionCObj?.en ?? regionC} (valid third-country/region transit).`,
                      `方向校验通过：${regionAObj?.zh ?? regionA} → 中国大陆 → ${regionCObj?.zh ?? regionC}（合规第三方过境路线）。`,
                    ),
                    lang,
                  )}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Gate 4: Exact 240h Deadline & Duration */}
        <div
          className={`rounded-xl border p-4 ${
            result.check4Pass ? "border-emerald-200 bg-white" : "border-red-300 bg-red-50"
          }`}
        >
          <div className="flex items-start gap-2.5">
            <span className="text-base leading-6">{result.check4Pass ? "✅" : "❌"}</span>
            <div className="flex-1 text-sm">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <Clock className="h-4 w-4 text-slate-500" />
                {tx(t2("Gate 4: Exact Stay Deadline & Clock Calculation", "第四关：精确停留截止钟点计算"), lang)}
              </div>

              {result.depBeforeArr ? (
                <p className="mt-1 font-medium text-red-700">
                  {tx(t2("Planned departure time must be after arrival time.", "计划离境时间必须晚于航班落地时间。"), lang)}
                </p>
              ) : result.channel === "visa_free_30" ? (
                <p className="mt-1 text-slate-700">
                  {tx(
                    t2(
                      `Planned stay: ${result.stayDays} day(s) (counted from 00:00 the day after arrival). Within the 30-day limit.`,
                      `计划停留 ${result.stayDays} 天（自入境次日 00:00 起算），在 30 天允许上限内。`,
                    ),
                    lang,
                  )}
                </p>
              ) : (
                <div className="mt-1.5 space-y-2">
                  {result.startParts && result.deadlineParts && (
                    <div className="grid gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 sm:grid-cols-3">
                      <div>
                        <div className="text-xs text-slate-500">
                          {tx(t2("240h Clock Starts", "240 小时起算零点"), lang)}
                        </div>
                        <div className="font-bold text-slate-900">{fmtDate(result.startParts, lang)} 00:00</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">
                          {tx(t2("Hard Exit Deadline", "最晚过边检出境截止"), lang)}
                        </div>
                        <div className="font-bold text-red-600">{fmtDate(result.deadlineParts, lang)} 23:59:59</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">
                          {tx(t2("Actual Max Hours in China", "实际最长在华总小时数"), lang)}
                        </div>
                        <div className="font-bold text-slate-900">
                          {result.actualMaxHours.toFixed(1)} {tx(t2("hours", "小时"), lang)}
                        </div>
                      </div>
                    </div>
                  )}
                  {result.overstayHours > 0 ? (
                    <p className="font-medium text-red-700">
                      {tx(
                        t2(
                          `OVERSTAY ALERT: Your planned departure exceeds the legal 240-hour deadline by ${result.overstayHours.toFixed(1)} hours! Move your flight earlier or apply for an L visa.`,
                          `超时警报：您的计划离境时刻超出 240 小时法定截止时间 ${result.overstayHours.toFixed(1)} 小时！请提前离境航班或改办 L 签。`,
                        ),
                        lang,
                      )}
                    </p>
                  ) : (
                    <p className="text-emerald-800">
                      {tx(
                        t2(
                          `Within limit! You have ${result.remainingHours.toFixed(1)} hours of buffer before the 23:59:59 deadline.`,
                          `在允许时限内！距离 23:59:59 截止时刻还有 ${result.remainingHours.toFixed(1)} 小时余量。`,
                        ),
                        lang,
                      )}
                    </p>
                  )}
                  <p className="text-xs text-slate-500">{tx(TRANSIT_EXAMPLE, lang)}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Gate 5: Ports & Restricted Spots */}
        <div
          className={`rounded-xl border p-4 ${
            result.check5Pass ? "border-emerald-200 bg-white" : "border-red-300 bg-red-50"
          }`}
        >
          <div className="flex items-start gap-2.5">
            <span className="text-base leading-6">{result.check5Pass ? "✅" : "❌"}</span>
            <div className="flex-1 text-sm">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <MapPin className="h-4 w-4 text-slate-500" />
                {tx(t2("Gate 5: Entry/Exit Ports & Allowed Areas Check", "第五关：出入境口岸与省内禁区黑名单校验"), lang)}
              </div>

              <div className="mt-1.5 space-y-2">
                {/* Port checks */}
                {result.channel !== "visa_free_30" && (
                  <div className="space-y-1">
                    <div className={result.entryOk ? "text-slate-700" : "font-medium text-red-700"}>
                      {result.entryOk ? "✅" : "❌"}{" "}
                      {tx(t2("Entry Port:", "入境口岸："), lang)}{" "}
                      {entryPortObj ? (lang === "zh" ? entryPortObj.zh : entryPortObj.en) : entryPort}
                      {!result.entryOk &&
                        ` — ${tx(
                          t2(
                            "Not in the 65 official 240-hour transit ports!",
                            "不在官方 65 个 240 小时过境免签口岸名单内！",
                          ),
                          lang,
                        )}`}
                    </div>
                    <div className={result.exitOk ? "text-slate-700" : "font-medium text-red-700"}>
                      {result.exitOk ? "✅" : "❌"}{" "}
                      {tx(t2("Exit Port:", "出境口岸："), lang)}{" "}
                      {exitPortObj ? (lang === "zh" ? exitPortObj.zh : exitPortObj.en) : exitPort}
                      {!result.exitOk &&
                        ` — ${tx(
                          t2(
                            "Not in the 65 official ports or Guangdong exit-only bonus ports!",
                            "不在官方 65 个口岸或广东全省赴港澳出境特例名单内！",
                          ),
                          lang,
                        )}`}
                    </div>
                    {result.exitInGdSpecial && (
                      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-2.5 text-xs text-emerald-900">
                        {tx(findProvince("guangdong")!.allowed, lang)}
                      </div>
                    )}
                  </div>
                )}

                {/* Spot violations */}
                {result.activeSpotViolations.length > 0 ? (
                  <div className="space-y-2 pt-1">
                    {result.activeSpotViolations.map((s) => (
                      <div key={s.id} className="rounded-lg border border-red-200 bg-white p-3">
                        <div className="flex items-center gap-1.5 font-bold text-red-700">
                          <ShieldAlert className="h-4 w-4 shrink-0" />
                          {tx(s.name, lang)} ({tx(s.area, lang)})
                        </div>
                        {s.warning && <p className="mt-1 text-xs text-red-800">{tx(s.warning, lang)}</p>}
                        {s.alt && <p className="mt-1 text-xs text-slate-600">{tx(s.alt, lang)}</p>}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-600">
                    {tx(
                      t2(
                        "All selected destinations are permitted under your matched entry channel.",
                        "您勾选的所有目的地均在当前免签通道的允许范围内。",
                      ),
                      lang,
                    )}
                  </p>
                )}

                {/* Info note if Xinjiang is selected on 30-day */}
                {result.channel === "visa_free_30" && selectedSpots.includes("xinjiang") && (
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-2.5 text-xs text-amber-900">
                    {tx(BLACKLIST_SPOTS.find((s) => s.id === "xinjiang")!.alt!, lang)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Restricted Provinces Quick Reference */}
      <details className="rounded-xl border border-slate-200 bg-white p-4">
        <summary className="cursor-pointer text-sm font-bold text-slate-900">
          {tx(
            t2(
              "Reference: The 6 Partially Restricted Provinces under 240-Hour Transit (Sichuan, Yunnan, Guangxi, Shanxi, Jiangxi, Heilongjiang)",
              "附表：240 小时过境免签 6 个「仅限部分城市」省份对照（四川、云南、广西、山西、江西、黑龙江）",
            ),
            lang,
          )}
        </summary>
        <div className="mt-3 space-y-2.5 text-xs">
          {PROVINCES.filter((p) => p.restricted).map((p) => (
            <div key={p.id} className="rounded-lg border border-slate-100 bg-slate-50 p-3">
              <div className="font-bold text-slate-900">{tx(p.name, lang)}</div>
              <p className="mt-1 text-emerald-800">✅ {tx(p.allowed, lang)}</p>
              {p.forbidden && <p className="mt-1 text-red-700">❌ {tx(p.forbidden, lang)}</p>}
            </div>
          ))}
        </div>
      </details>

      <AffiliateBox id="tripFlights" lang={lang} />
    </div>
  );
}
