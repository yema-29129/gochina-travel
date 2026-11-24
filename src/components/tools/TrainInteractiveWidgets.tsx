"use client";

import { useState } from "react";
import {
  Download,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  TrainFront,
  ArrowLeftRight,
  Calendar,
  Search,
  Globe,
  UserCheck,
  CreditCard,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Lang, L, tx } from "@/lib/i18n";
import { AFFILIATES } from "@/lib/affiliates";

interface Step12306 {
  title: L;
  desc: L;
  callout: L;
}

const STEPS_12306: Step12306[] = [
  {
    title: { en: "Step 1: Download 'Railway 12306' & Switch to English", zh: "第 1 步：下载官方「铁路 12306」并切换英文界面" },
    desc: {
      en: "Install the official Railway 12306 app from the App Store or Google Play (developer: China Railway). Open it, tap 'My' (bottom right) → Settings icon (top right) → Language → English.",
      zh: "从 App Store 或 Google Play 下载中国铁路官方「铁路 12306」App。打开后点右下角「我的」→ 右上角齿轮设置 → 语言设置 → 切换为 English。",
    },
    callout: { en: "Official app has zero booking fee — switch to English first", zh: "官方 App 零手续费，第一步先切换为英文界面" },
  },
  {
    title: { en: "Step 2: Register with Passport & Email (No +86 Phone Needed)", zh: "第 2 步：用护照 + 邮箱注册（无需中国 +86 手机号）" },
    desc: {
      en: "Tap 'Register' → select 'Foreign Passport' as ID Type → enter your surname + given name EXACTLY as printed on your passport MRZ (ALL CAPS, no punctuation) and verify via your email address.",
      zh: "点「Register（注册）」→ 证件类型选「Foreign Passport（外国护照）」→ 姓名严格按护照机读区全大写拼写填写，并用电子邮箱接收验证码（支持免中国手机号邮箱注册）。",
    },
    callout: { en: "Name order must match your passport exactly: SURNAME GIVENNAME", zh: "姓名拼写必须与护照完全一致，否则进站刷不过闸机" },
  },
  {
    title: { en: "Step 3: Upload Passport Photo for Online Verification", zh: "第 3 步：上传护照照片完成在线核验" },
    desc: {
      en: "Go to My → Identity Verification → upload a clear photo of your passport bio page (and a selfie holding your passport if requested). Approval usually takes 10 minutes to 24 hours.",
      zh: "进入 My → Identity Verification 上传清晰的护照资料页照片（若提示则补充手持护照自拍）。审核通常在 10 分钟至 24 小时内通过。",
    },
    callout: { en: "Complete verification at least 2 days before tickets go on sale", zh: "建议至少在抢票前 2 天完成护照核验" },
  },
  {
    title: { en: "Step 4: Search, Pick Seat Class & Pay with Foreign Card / Alipay", zh: "第 4 步：查车次、选席别并用外卡 / 支付宝付款" },
    desc: {
      en: "Enter departure & arrival cities, pick your train and seat class (2nd / 1st / Business), and pay via Alipay, WeChat Pay, or international Visa/Mastercard. Your passport IS your e-ticket!",
      zh: "输入出发和到达城市，选好车次和席别（二等/一等/商务座），用支付宝、微信或国际信用卡付款。无需取纸质票，护照就是电子车票！",
    },
    callout: { en: "Tip: If 12306 verification fails or sells out, use Trip.com as instant backup", zh: "如果 12306 核验慢或无票，可直接在 Trip.com 英文订票/候补" },
  },
];

function Screen12306({ stepIdx, lang }: { stepIdx: number; lang: Lang }) {
  if (stepIdx === 0) {
    return (
      <div className="flex h-full flex-col bg-slate-50">
        <div className="bg-[#1C7CD6] px-4 py-3.5 text-white">
          <div className="text-[10px] opacity-80">Railway 12306 · Settings</div>
          <div className="mt-0.5 text-sm font-bold">{lang === "zh" ? "语言设置 / Language" : "Language Settings"}</div>
        </div>
        <div className="space-y-2.5 p-4">
          <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-500">
            <span>简体中文</span>
          </div>
          <div className="flex items-center justify-between rounded-lg border-2 border-[#1C7CD6] bg-blue-50/50 px-3 py-2.5 text-xs font-bold text-[#1C7CD6]">
            <span className="flex items-center gap-2">
              <Globe className="h-4 w-4" /> English
            </span>
            <CheckCircle2 className="h-4 w-4" />
          </div>
          <div className="mt-4 rounded-lg bg-[#1C7CD6] py-2.5 text-center text-xs font-semibold text-white">
            {lang === "zh" ? "确认切换英文" : "Save · Switch to English"}
          </div>
        </div>
      </div>
    );
  }
  if (stepIdx === 1) {
    return (
      <div className="flex h-full flex-col bg-white p-4">
        <div className="text-sm font-bold text-slate-900">Railway 12306 · Register</div>
        <div className="mt-3 space-y-2.5">
          <div className="rounded-lg border-2 border-[#1C7CD6] bg-blue-50/40 px-3 py-2">
            <div className="text-[10px] text-slate-400">ID Type</div>
            <div className="text-xs font-bold text-slate-900">Foreign Passport (护照)</div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
            <div className="text-[10px] text-slate-400">Full Name (Exact Passport Spelling)</div>
            <div className="font-mono text-xs font-semibold text-slate-800">SMITH JOHN</div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
            <div className="text-[10px] text-slate-400">Passport Number</div>
            <div className="font-mono text-xs font-semibold text-slate-800">E12345678</div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
            <div className="text-[10px] text-slate-400">Email Verification</div>
            <div className="text-xs text-slate-700">john.smith@gmail.com</div>
          </div>
        </div>
      </div>
    );
  }
  if (stepIdx === 2) {
    return (
      <div className="flex h-full flex-col bg-white p-4">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
          <UserCheck className="h-4 w-4 text-[#1C7CD6]" />
          {lang === "zh" ? "外国护照在线核验" : "Online Passport Verification"}
        </div>
        <div className="mt-4 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#1C7CD6] bg-blue-50/40 p-5 text-center">
          <div className="flex h-12 w-16 flex-col items-center justify-center rounded-md border border-blue-300 bg-white">
            <Globe className="h-5 w-5 text-[#1C7CD6]" />
            <span className="mt-0.5 text-[7px] font-bold text-slate-500">PASSPORT</span>
          </div>
          <div className="mt-3 text-xs font-bold text-slate-800">
            {lang === "zh" ? "上传护照首页照片" : "Upload Passport Bio Page"}
          </div>
          <div className="mt-1 text-[10px] text-slate-500">
            {lang === "zh" ? "无反光 · 四角完整清晰" : "Clear, flat, no glare"}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between rounded-lg bg-emerald-50 px-3 py-2 text-[11px] font-semibold text-emerald-700">
          <span>Status</span>
          <span>Verified ✓ (已通过)</span>
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col bg-slate-50">
      <div className="bg-[#1C7CD6] px-4 py-3 text-white">
        <div className="flex items-center justify-between text-xs font-bold">
          <span>Beijing South → Shanghai</span>
          <span>G1</span>
        </div>
        <div className="mt-0.5 text-[10px] opacity-85">07:00 → 11:29 · 4h 29m</div>
      </div>
      <div className="space-y-2.5 p-3.5">
        <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
          <div className="rounded-lg border-2 border-[#1C7CD6] bg-blue-50 py-2 font-bold text-[#1C7CD6]">
            2nd Class<br />¥662
          </div>
          <div className="rounded-lg border border-slate-200 bg-white py-2 text-slate-600">
            1st Class<br />¥1,060
          </div>
          <div className="rounded-lg border border-slate-200 bg-white py-2 text-slate-600">
            Business<br />¥2,318
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-2.5 text-[11px] text-slate-700">
          <div className="flex items-center gap-1.5 font-semibold text-slate-900">
            <CreditCard className="h-3.5 w-3.5 text-[#1C7CD6]" />
            {lang === "zh" ? "支付方式" : "Payment Options"}
          </div>
          <div className="mt-1 text-[10px] text-slate-500">Alipay · WeChat Pay · Visa / Mastercard</div>
        </div>
        <div className="rounded-lg bg-[#1C7CD6] py-2 text-center text-xs font-semibold text-white">
          {lang === "zh" ? "立即支付 · 刷护照进站" : "Pay Now · Passport E-Ticket"}
        </div>
      </div>
    </div>
  );
}

/** Interactive 12306 App Download & Registration Tutorial */
export function Railway12306Tutorial({ lang }: { lang: Lang }) {
  const [stepIdx, setStepIdx] = useState(0);
  const step = STEPS_12306[stepIdx];

  return (
    <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-4 md:flex-row md:items-center">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
            <TrainFront className="h-3.5 w-3.5" />
            {tx({ en: "Official App · Zero Booking Fee", zh: "中国铁路官方 App · 零手续费" }, lang)}
          </span>
          <h3 className="mt-1.5 text-xl font-bold text-slate-900">
            {tx({ en: "Railway 12306 App: Download & Passport Registration Tutorial", zh: "铁路 12306 App 下载与外国护照注册图解教程" }, lang)}
          </h3>
          <p className="mt-1 text-xs text-slate-500">
            {tx({ en: "Official developer: China Academy of Railway Sciences (中国铁道科学研究院)", zh: "核对官方开发者：中国铁道科学研究院（切勿下载第三方抢票软件）" }, lang)}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <a
            href="https://apps.apple.com/app/railway-12306/id564818797"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white hover:bg-slate-700"
          >
            <Download className="h-3.5 w-3.5" />
            App Store (iOS)
            <ExternalLink className="h-3 w-3 opacity-70" />
          </a>
          <a
            href="https://play.google.com/store/search?q=Railway+12306&c=apps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-100"
          >
            <Download className="h-3.5 w-3.5" />
            Google Play (Android)
            <ExternalLink className="h-3 w-3 opacity-70" />
          </a>
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-12">
        <div className="space-y-2 lg:col-span-7">
          {STEPS_12306.map((s, idx) => {
            const active = idx === stepIdx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setStepIdx(idx)}
                className={`w-full rounded-xl border p-4 text-left transition-all ${
                  active
                    ? "border-blue-500 bg-white shadow-sm ring-1 ring-blue-100"
                    : "border-slate-200 bg-white/70 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      active ? "bg-[#1C7CD6] text-white" : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="font-bold text-slate-900">{tx(s.title, lang)}</span>
                </div>
                <p className="mt-2 pl-10 text-sm leading-relaxed text-slate-600">{tx(s.desc, lang)}</p>
              </button>
            );
          })}
        </div>

        {/* Tall Realistic Smartphone Frame */}
        <div className="flex flex-col items-center justify-center lg:col-span-5">
          <div className="flex w-full max-w-[276px] flex-col overflow-hidden rounded-[2.25rem] border-[7px] border-slate-900 bg-white shadow-xl">
            <div className="flex items-center justify-between bg-slate-900 px-5 py-2 text-[10px] font-medium text-white">
              <span>9:41</span>
              <span className="h-3.5 w-16 rounded-full bg-slate-800" />
              <span>5G</span>
            </div>
            <div className="flex min-h-[380px] flex-1 flex-col bg-white [&>*]:flex-1">
              <Screen12306 stepIdx={stepIdx} lang={lang} />
            </div>
            <div className="border-t border-slate-800 bg-slate-900 px-4 pb-3 pt-3 text-[11px] leading-relaxed text-slate-100">
              <div>
                <span className="font-bold text-amber-300">TIP: </span>
                {tx(step.callout, lang)}
              </div>
              <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-white/30" />
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <button
              type="button"
              disabled={stepIdx === 0}
              onClick={() => setStepIdx((i) => Math.max(0, i - 1))}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              {tx({ en: "Prev", zh: "上一步" }, lang)}
            </button>
            <span className="text-xs font-medium text-slate-500">
              {stepIdx + 1} / {STEPS_12306.length}
            </span>
            <button
              type="button"
              disabled={stepIdx === STEPS_12306.length - 1}
              onClick={() => setStepIdx((i) => Math.min(STEPS_12306.length - 1, i + 1))}
              className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-700 disabled:opacity-40"
            >
              {tx({ en: "Next", zh: "下一步" }, lang)}
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const RAIL_CITIES = [
  { id: "Beijing", en: "Beijing", zh: "北京" },
  { id: "Shanghai", en: "Shanghai", zh: "上海" },
  { id: "Xi'an", en: "Xi'an", zh: "西安" },
  { id: "Chengdu", en: "Chengdu", zh: "成都" },
  { id: "Chongqing", en: "Chongqing", zh: "重庆" },
  { id: "Hangzhou", en: "Hangzhou", zh: "杭州" },
  { id: "Suzhou", en: "Suzhou", zh: "苏州" },
  { id: "Guangzhou", en: "Guangzhou", zh: "广州" },
  { id: "Shenzhen", en: "Shenzhen", zh: "深圳" },
  { id: "Hong Kong", en: "Hong Kong West Kowloon", zh: "香港西九龙" },
  { id: "Guilin", en: "Guilin", zh: "桂林" },
  { id: "Yangshuo", en: "Yangshuo", zh: "阳朔" },
  { id: "Kunming", en: "Kunming", zh: "昆明" },
  { id: "Dali", en: "Dali", zh: "大理" },
  { id: "Lijiang", en: "Lijiang", zh: "丽江" },
  { id: "Zhangjiajie", en: "Zhangjiajie", zh: "张家界" },
];

/** Interactive Live China Train Search Launcher (Trip.com + Official 12306) */
export function TrainSearchWidget({ lang }: { lang: Lang }) {
  const today = new Date();
  const defaultDate = new Date(today.getTime() + 7 * 86400000).toISOString().slice(0, 10);

  const [from, setFrom] = useState("Beijing");
  const [to, setTo] = useState("Shanghai");
  const [date, setDate] = useState(defaultDate);

  const daysAhead = Math.ceil((new Date(date).getTime() - new Date(today.toISOString().slice(0, 10)).getTime()) / 86400000);
  const beyond15Days = daysAhead > 15;

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  // Build Trip.com live search URL preserving affiliate query params if configured in AFFILIATES.tripTrains.url
  const buildTripUrl = () => {
    const base = new URL(AFFILIATES.tripTrains.url);
    base.searchParams.set("departure", from);
    base.searchParams.set("arrival", to);
    base.searchParams.set("departDate", date);
    return base.toString();
  };

  return (
    <div className="no-print my-6 rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50/80 to-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <TrainFront className="h-4 w-4" />
          </span>
          <div>
            <h3 className="text-base font-bold text-slate-900">
              {tx({ en: "Live China Train Ticket Search", zh: "中国高铁实时余票与票价查询" }, lang)}
            </h3>
            <p className="text-xs text-slate-500">
              {tx({ en: "Pick your route & date to check real-time schedules on Trip.com (English) or official 12306.", zh: "选择起终点与日期，一键直达 Trip.com（英文免抢候补）或 12306 英文官网查实时车次与余票。" }, lang)}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-12">
        <div className="sm:col-span-4">
          <label className="mb-1 block text-xs font-semibold text-slate-600">
            {tx({ en: "From", zh: "出发城市" }, lang)}
          </label>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-900"
          >
            {RAIL_CITIES.map((c) => (
              <option key={c.id} value={c.id}>
                {lang === "zh" ? `${c.zh} (${c.en})` : `${c.en} (${c.zh})`}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end justify-center sm:col-span-1">
          <button
            type="button"
            onClick={swap}
            aria-label="Swap cities"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 hover:border-emerald-500 hover:text-emerald-700"
          >
            <ArrowLeftRight className="h-4 w-4" />
          </button>
        </div>

        <div className="sm:col-span-4">
          <label className="mb-1 block text-xs font-semibold text-slate-600">
            {tx({ en: "To", zh: "到达城市" }, lang)}
          </label>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-900"
          >
            {RAIL_CITIES.map((c) => (
              <option key={c.id} value={c.id}>
                {lang === "zh" ? `${c.zh} (${c.en})` : `${c.en} (${c.zh})`}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-3">
          <label className="mb-1 flex items-center gap-1 text-xs font-semibold text-slate-600">
            <Calendar className="h-3.5 w-3.5" />
            {tx({ en: "Date", zh: "出发日期" }, lang)}
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-900"
          />
        </div>
      </div>

      {beyond15Days && (
        <div className="mt-3 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            {tx(
              {
                en: `Your date is ${daysAhead} days away. Official 12306 releases tickets 15 days before departure — Trip.com lets you pre-book now and auto-grabs tickets the second they open.`,
                zh: `你选的日期距今 ${daysAhead} 天。12306 官方仅提前 15 天放票；现在可在 Trip.com 提前预约排队，放票瞬间自动抢票。`,
              },
              lang
            )}
          </span>
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={buildTripUrl()}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-xs transition hover:bg-emerald-700"
        >
          <Search className="h-4 w-4" />
          {tx({ en: `Search ${from} → ${to} on Trip.com`, zh: `在 Trip.com 查询实时车票（英文支持外卡）` }, lang)}
          <ExternalLink className="h-3.5 w-3.5 opacity-80" />
        </a>
        <a
          href="https://www.12306.cn/en/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
        >
          {tx({ en: "Official 12306 (EN)", zh: "12306 官方英文网" }, lang)}
          <ExternalLink className="h-3.5 w-3.5 opacity-70" />
        </a>
      </div>
    </div>
  );
}
