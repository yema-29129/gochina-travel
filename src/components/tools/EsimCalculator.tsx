"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Download,
  ExternalLink,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Lang, t2, tx } from "@/lib/i18n";
import { AFFILIATES } from "@/lib/affiliates";

type PhoneStatus = "unlocked_esim" | "us_iphone_esim_only" | "physical_only" | "carrier_locked";

const QUICK_DAYS = [
  { d: 5, en: "5 days (Short)", zh: "5 天短途" },
  { d: 10, en: "10 days (240h transit)", zh: "10 天 (240h 过境)" },
  { d: 14, en: "14 days (Classic)", zh: "14 天经典" },
  { d: 30, en: "30 days (Visa-free)", zh: "30 天免签" },
];

const PHONE_MODELS: { id: string; status: PhoneStatus; openLockTip?: boolean; en: string; zh: string }[] = [
  {
    id: "us-iphone",
    status: "us_iphone_esim_only",
    en: "iPhone 14 / 15 / 16 / 17 (Bought in USA)",
    zh: "iPhone 14 / 15 / 16 / 17（美国购买，无卡槽）",
  },
  {
    id: "intl-iphone",
    status: "unlocked_esim",
    en: "iPhone XS – 17 (EU / UK / AU / CA / SG / JP)",
    zh: "iPhone XS ~ 17（欧/英/澳/加/新/日购买）",
  },
  {
    id: "android-flagship",
    status: "unlocked_esim",
    en: "Samsung S20–S25 / Google Pixel 5–9 (Unlocked)",
    zh: "三星 S20–S25 / Google Pixel 5–9（无锁）",
  },
  {
    id: "cn-old-iphone",
    status: "physical_only",
    en: "Mainland China / HK Dual-SIM iPhone or iPhone X / 8 & older",
    zh: "中国大陆/港澳双实体卡 iPhone 或老款 iPhone X/8 及更早",
  },
  {
    id: "us-carrier-locked",
    status: "carrier_locked",
    openLockTip: true,
    en: "US Carrier Contract Phone (AT&T / Verizon / T-Mobile still paying off)",
    zh: "美国分期合约机（AT&T / Verizon / T-Mobile 未还清）",
  },
];

export default function EsimCalculator({ lang }: { lang: Lang }) {
  const [days, setDays] = useState<number>(10);
  const [includeHkMacau, setIncludeHkMacau] = useState<boolean>(false);
  const [phoneStatus, setPhoneStatus] = useState<PhoneStatus>("unlocked_esim");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [showCheckGuide, setShowCheckGuide] = useState<boolean>(false);
  const [socialVideo, setSocialVideo] = useState<boolean>(false);
  const [remoteWork, setRemoteWork] = useState<boolean>(false);
  const [needsPlus86, setNeedsPlus86] = useState<boolean>(false);
  const [downloaded, setDownloaded] = useState<boolean>(false);

  const calc = useMemo(() => {
    const base = 0.6;
    const extra = (socialVideo ? 1.2 : 0) + (remoteWork ? 2.5 : 0);
    const dailyRaw = base + extra;
    const rawEst = days * dailyRaw * 1.2;
    const isHeavy = remoteWork || dailyRaw > 2.0;

    // Strict, mutually exclusive real-world fixed total data tiers (NEVER recommend 30GB when 51GB needed!)
    let tierGb = 10;
    let priceRange = "$9–$15";
    let tripPrice = "$8.50";
    let airaloPrice = "$18";

    if (rawEst <= 3) {
      tierGb = 3;
      priceRange = "$5–$8";
      tripPrice = "$4.50";
      airaloPrice = "$8.50";
    } else if (rawEst <= 5) {
      tierGb = 5;
      priceRange = "$7–$11";
      tripPrice = "$6.50";
      airaloPrice = "$11.50";
    } else if (rawEst <= 10) {
      tierGb = 10;
      priceRange = "$9–$15";
      tripPrice = "$8.50";
      airaloPrice = "$18.00";
    } else if (rawEst <= 20) {
      tierGb = 20;
      priceRange = "$12–$20";
      tripPrice = "$11.50";
      airaloPrice = "$28.00";
    } else if (rawEst <= 50) {
      tierGb = 50;
      priceRange = "$13–$18";
      tripPrice = "$14.50";
      airaloPrice = "$28–$36";
    } else {
      tierGb = 100;
      priceRange = "$20–$30";
      tripPrice = "$22.00";
      airaloPrice = "$28+ (top-up)";
    }

    const homeCarrierLow = days * 10;
    const homeCarrierHigh = days * 12;

    return {
      base,
      extra,
      dailyRaw,
      rawEst,
      isHeavy,
      tierGb,
      priceRange,
      tripPrice,
      airaloPrice,
      homeCarrierLow,
      homeCarrierHigh,
    };
  }, [days, socialVideo, remoteWork]);

  const showEsimCards = phoneStatus === "unlocked_esim" || phoneStatus === "us_iphone_esim_only";
  const regionLabelEn = includeHkMacau ? "Greater China (Mainland + HK/Macau)" : "Mainland China";
  const regionLabelZh = includeHkMacau ? "大中华区（中国大陆 + 港澳台）" : "中国大陆";

  // Concise 1-line diagnosis verdict (4 phone types × 2 +86 × heavy/light — zero contradictions!)
  const verdict = useMemo(() => {
    if (phoneStatus === "carrier_locked") {
      return needsPlus86
        ? t2(
            "Carrier-locked phone rejects all SIMs/eSIMs → Rent Airport Roaming Pocket Wi-Fi + use WeChat virtual +86 SMS (eSender) or an unlocked spare phone.",
            "合约锁卡机无法插任何卡/装 eSIM → 唯一方案：机场租随身漫游 Wi-Fi 蛋 + 微信虚拟 +86 短信（eSender）或带无锁备用机。",
          )
        : t2(
            "Carrier-locked phone rejects all SIMs/eSIMs → Rent an Airport Roaming Pocket Wi-Fi (or activate your home carrier daily pass).",
            "合约锁卡机无法插任何卡/装 eSIM → 只能机场租随身漫游 Wi-Fi 蛋，或直接开通母国运营商国际漫游日包。",
          );
    }

    if (phoneStatus === "physical_only") {
      return needsPlus86
        ? t2(
            "Physical SIM only + need +86 → Buy airport +86 physical SIM + rent Roaming Pocket Wi-Fi (or put a HK roaming SIM in Slot 2 if dual-SIM).",
            "仅实体卡 + 需 +86 → 机场落地办 +86 实体卡 + 随身漫游 Wi-Fi（若手机支持双实体卡槽，副卡插港澳大中华漫游实体卡）。",
          )
        : t2(
            `Physical SIM only → Pre-order a ${regionLabelEn} roaming physical SIM (plug & play) or rent an Airport Roaming Pocket Wi-Fi.`,
            `仅支持实体卡 → 出发前网购${regionLabelZh}漫游实体卡（插卡即用），或在机场租随身漫游 Wi-Fi 蛋。`,
          );
    }

    if (phoneStatus === "us_iphone_esim_only" && needsPlus86) {
      return t2(
        `No SIM tray + need +86 → Pre-install a ${calc.tierGb} GB Fixed Total ${regionLabelEn} eSIM for data, AND get +86 SMS via WeChat virtual number (eSender) or an unlocked spare phone.`,
        `美版无卡槽 + 需 +86 → 登机前预装 ${calc.tierGb} GB 固定总量${regionLabelZh} eSIM 上网，另用微信虚拟号（eSender 易博通）或无锁备用机收 +86 短信。`,
      );
    }

    const dualNoteEn = needsPlus86
      ? " + pick up a ¥100 China Unicom +86 physical SIM at the airport"
      : "";
    const dualNoteZh = needsPlus86 ? " + 机场另办 100 元中国联通 +86 实体卡" : "";

    if (calc.isHeavy) {
      return t2(
        `Must buy [${calc.tierGb} GB Fixed Total Data Pack]${dualNoteEn} — ❌ DO NOT buy 1–2 GB/day throttled "Unlimited" plans (Zoom & hotspot will drop!).`,
        `必须买【${calc.tierGb} GB 固定总量包】${dualNoteZh}（❌ 严禁买每日满 1–2 GB 就限速的伪无限包，会导致 Zoom 和热点掉线！）`,
      );
    }

    return t2(
      `Buy a [${calc.tierGb} GB Fixed Total Data ${regionLabelEn} eSIM]${dualNoteEn} — full 5G speed, no daily throttle.`,
      `推荐买【${calc.tierGb} GB 固定总量${regionLabelZh} eSIM】${dualNoteZh}——全程高速 5G 不限速，性价比最高。`,
    );
  }, [phoneStatus, needsPlus86, calc.tierGb, calc.isHeavy, regionLabelEn, regionLabelZh]);

  const handleModelPick = (id: string) => {
    setSelectedModel(id);
    const found = PHONE_MODELS.find((m) => m.id === id);
    if (found) {
      setPhoneStatus(found.status);
      if (found.openLockTip) setShowCheckGuide(true);
    }
  };

  // Generate crisp 1080×1920 Offline Cabin Rescue Wallpaper PNG via HTML5 Canvas
  const downloadOfflineCard = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Background
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, 1080, 1920);

    // Top red accent bar
    ctx.fillStyle = "#dc2626";
    ctx.fillRect(0, 0, 1080, 18);

    // Header badge
    ctx.fillStyle = "#ef4444";
    ctx.font = "bold 34px -apple-system, BlinkMacSystemFont, Inter, sans-serif";
    ctx.fillText("GOCHINA  ·  OFFLINE CABIN RESCUE CARD", 72, 118);

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 62px -apple-system, BlinkMacSystemFont, Inter, sans-serif";
    ctx.fillText("China eSIM Landing", 72, 206);
    ctx.fillText("Activation Checklist", 72, 280);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "500 30px -apple-system, BlinkMacSystemFont, Inter, sans-serif";
    ctx.fillText("Save to Photos — works 100% offline on the plane", 72, 342);

    const drawBox = (
      y: number,
      h: number,
      bg: string,
      border: string,
      badge: string,
      badgeBg: string,
      title: string,
      lines: string[],
    ) => {
      ctx.fillStyle = bg;
      ctx.strokeStyle = border;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(64, y, 952, h, 28);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = badgeBg;
      ctx.beginPath();
      ctx.roundRect(96, y + 34, 150, 48, 12);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 26px -apple-system, BlinkMacSystemFont, Inter, sans-serif";
      ctx.fillText(badge, 118, y + 67);

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 38px -apple-system, BlinkMacSystemFont, Inter, sans-serif";
      ctx.fillText(title, 96, y + 136);

      ctx.fillStyle = "#cbd5e1";
      ctx.font = "500 30px -apple-system, BlinkMacSystemFont, Inter, sans-serif";
      lines.forEach((line, idx) => {
        ctx.fillText(line, 96, y + 194 + idx * 46);
      });
    };

    drawBox(
      400,
      290,
      "#1e293b",
      "#334155",
      "STEP 1",
      "#475569",
      "Install at Home (Keep OFF on Flight)",
      [
        "• Scan QR / install on home Wi-Fi before takeoff.",
        "• Keep the China eSIM turned OFF until you land",
        "  so your validity days do not start early.",
      ],
    );

    drawBox(
      725,
      335,
      "#1e293b",
      "#f59e0b",
      "STEP 2",
      "#d97706",
      "HOME SIM: Line ON  |  Data Roaming OFF",
      [
        "• Keep your Home SIM turned ON so you still",
        "  receive FREE Visa/Mastercard 3DS bank texts.",
        "• Set Home SIM Data Roaming = OFF (0 fees!).",
        "• Turn OFF 'Allow Cellular Data Switching'.",
      ],
    );

    drawBox(
      1095,
      345,
      "#064e3b",
      "#10b981",
      "STEP 3",
      "#059669",
      "CHINA eSIM: Cellular Data + Roaming ON!",
      [
        "• Set Cellular Data primary line = China eSIM.",
        "• Open China eSIM settings and turn ON",
        "  Data Roaming = ON (CRITICAL! Without this,",
        "  a roaming eSIM will NEVER get signal!).",
      ],
    );

    drawBox(
      1475,
      270,
      "#312e81",
      "#6366f1",
      "NO SIGNAL?",
      "#4f46e5",
      "60-Second Airport Fix",
      [
        "1. Toggle Airplane Mode ON for 10s, then OFF.",
        "2. Wait 60s, or go to Network Selection →",
        "   turn OFF Automatic → pick China Mobile 5G.",
      ],
    );

    ctx.fillStyle = "#64748b";
    ctx.font = "500 26px -apple-system, BlinkMacSystemFont, Inter, sans-serif";
    ctx.fillText("gochinadesk.com  ·  Emergency in China: 110 Police · 120 Ambulance · 12367 English", 72, 1835);

    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "GoChina-eSIM-Offline-Cabin-Card.png";
    a.click();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-lg font-bold text-slate-900">
          {tx(t2("Estimate Your China Data & Connectivity Setup", "估算您的在华流量需求与最佳上网方案"), lang)}
        </h2>

        {/* 1. Days slider + Quick pills + HK/Macau toggle */}
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-slate-800">
              1. {tx(t2("Trip Length in China", "在华停留天数"), lang)}
            </label>
            <span className="rounded-lg bg-red-50 px-2.5 py-1 text-sm font-bold text-red-700">
              {days} {tx(t2("days", "天"), lang)}
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={30}
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="mt-2 w-full accent-red-600"
          />
          <div className="mt-1 flex justify-between text-xs text-slate-400">
            <span>1 {tx(t2("day", "天"), lang)}</span>
            <span>10 {tx(t2("days", "天"), lang)}</span>
            <span>20 {tx(t2("days", "天"), lang)}</span>
            <span>30 {tx(t2("days", "天"), lang)}</span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {QUICK_DAYS.map((q) => (
              <button
                key={q.d}
                type="button"
                onClick={() => setDays(q.d)}
                className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                  days === q.d
                    ? "border-red-600 bg-red-600 text-white"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {lang === "zh" ? q.zh : q.en}
              </button>
            ))}
          </div>

          <label className="mt-3 flex cursor-pointer items-start gap-2.5 rounded-lg border border-blue-200 bg-blue-50/60 px-3.5 py-2.5 text-xs sm:text-sm">
            <input
              type="checkbox"
              checked={includeHkMacau}
              onChange={(e) => setIncludeHkMacau(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-blue-600"
            />
            <div>
              <span className="font-semibold text-blue-950">
                {tx(
                  t2(
                    "Also visiting Hong Kong, Macau, or Taiwan on this trip?",
                    "行程顺道去香港 / 澳门 / 台湾？（自动为您切换区域通用漫游包）",
                  ),
                  lang,
                )}
              </span>
              <p className="mt-0.5 text-xs text-blue-800">
                {tx(
                  t2(
                    "Mainland-only China eSIMs lose signal in HK & Macau. Check this to switch to a Greater China regional pack.",
                    "重要提醒：仅限中国大陆的套餐在香港和澳门会断网。勾选此项将自动推荐大中华区通用漫游包。",
                  ),
                  lang,
                )}
              </p>
            </div>
          </label>
        </div>

        {/* 2. Phone eSIM status + 3-second model quick-picker */}
        <div className="mt-6 border-t border-slate-100 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label className="text-sm font-semibold text-slate-800">
              2. {tx(t2("Your Phone's eSIM & Lock Status", "您的手机是否无锁且支持 eSIM？"), lang)}
            </label>
            <button
              type="button"
              onClick={() => setShowCheckGuide((v) => !v)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-700"
            >
              {tx(t2("Check Carrier Lock", "检查运营商锁方法"), lang)}
              {showCheckGuide ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            </button>
          </div>

          {/* 3-Second Popular Phone Model Quick-Picker (great for desktop planners) */}
          <div className="mt-2.5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <select
                value={selectedModel}
                onChange={(e) => handleModelPick(e.target.value)}
                aria-label="Quick pick phone model"
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-800 focus:border-red-500 focus:bg-white focus:outline-none sm:text-sm"
              >
                <option value="">
                  {tx(t2("🔍 Don't want to check? Pick your phone model to auto-detect ▾", "🔍 懒得查？选您的手机型号自动判断 ▾"), lang)}
                </option>
                {PHONE_MODELS.map((m) => (
                  <option key={m.id} value={m.id}>
                    {lang === "zh" ? m.zh : m.en}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="mt-1.5 text-xs text-slate-500">
            {tx(
              t2(
                "Or dial *#06# on your phone — if an EID number appears, your phone supports eSIM.",
                "或直接拨打 *#06# — 屏幕出现 EID 编号即支持 eSIM。",
              ),
              lang,
            )}
          </p>

          {showCheckGuide && (
            <div className="mt-2.5 rounded-lg border border-amber-200 bg-amber-50/80 p-3.5 text-xs leading-relaxed text-amber-950">
              <p className="font-bold">
                {tx(t2("US Installment / Contract Phone Check (5 Seconds):", "美国分期合约机（AT&T / Verizon / T-Mobile）5 秒自检："), lang)}
              </p>
              <p className="mt-1">
                {tx(
                  t2(
                    "Open Settings → General → About → Carrier Lock. Only “No SIM restrictions” means truly unlocked!",
                    "打开 设置 → 通用 → 关于本机 → 运营商锁（Carrier Lock），必须显示“无 SIM 卡限制（No SIM restrictions）”才算真无锁！",
                  ),
                  lang,
                )}
              </p>
            </div>
          )}

          <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
            {(
              [
                {
                  id: "unlocked_esim",
                  title: t2("Unlocked & eSIM Ready", "无锁且支持 eSIM（含卡槽）"),
                  sub: t2("Most EU / UK / AU / CA phones & Android flagships", "绝大多数欧亚澳版 iPhone 及安卓旗舰"),
                },
                {
                  id: "us_iphone_esim_only",
                  title: t2("US iPhone 14+ (No SIM Tray)", "美版 iPhone 14 及以后（无实体卡槽）"),
                  sub: t2("eSIM-only hardware bought in the United States", "美国购买的纯 eSIM 机型，机身无物理卡槽"),
                },
                {
                  id: "physical_only",
                  title: t2("Physical SIM Slot Only (Unlocked)", "仅支持实体 SIM 卡（无锁）"),
                  sub: t2("Older phones or Mainland China / HK iPhone models", "较旧机型或中国大陆/港澳双卡版 iPhone"),
                },
                {
                  id: "carrier_locked",
                  title: t2("Carrier Locked", "有运营商锁（合约机）"),
                  sub: t2("Still locked to AT&T, Verizon, T-Mobile, etc.", "仍锁定在海外运营商合约期内"),
                },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setPhoneStatus(opt.id);
                  setSelectedModel("");
                }}
                className={`rounded-lg border p-3 text-left transition ${
                  phoneStatus === opt.id
                    ? "border-red-600 bg-red-50 text-red-950"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div className="text-sm font-bold">{tx(opt.title, lang)}</div>
                <div className="mt-0.5 text-xs text-slate-500">{tx(opt.sub, lang)}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 3. Daily usage levels */}
        <div className="mt-6 border-t border-slate-100 pt-5">
          <label className="block text-sm font-semibold text-slate-800">
            3. {tx(t2("Daily Internet Habits (Stackable)", "日常上网习惯（可叠加）"), lang)}
          </label>
          <div className="mt-2.5 space-y-2">
            <div className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50/70 px-3.5 py-2.5 text-sm">
              <div className="font-semibold text-slate-900">
                {tx(t2("Base: Maps + Alipay + WhatsApp Text + Guides (Always included)", "基础必选：地图导航 + 支付宝 + 聊天文字 + 查攻略"), lang)}
              </div>
              <span className="shrink-0 font-bold text-emerald-800">0.6 GB/{tx(t2("day", "天"), lang)}</span>
            </div>

            <label className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm hover:bg-slate-50">
              <span className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  checked={socialVideo}
                  onChange={(e) => setSocialVideo(e.target.checked)}
                  className="h-4 w-4 accent-red-600"
                />
                <span className="font-medium text-slate-800">
                  {tx(
                    t2("Social & Short Video (Instagram Stories / TikTok / 20 min video call daily)", "社交晒图与短视频（每天发 Instagram Story / 刷 TikTok / 视频通话 20 分钟）"),
                    lang,
                  )}
                </span>
              </span>
              <span className="shrink-0 font-bold text-slate-700">+1.2 GB/{tx(t2("day", "天"), lang)}</span>
            </label>

            <label className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm hover:bg-slate-50">
              <span className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  checked={remoteWork}
                  onChange={(e) => setRemoteWork(e.target.checked)}
                  className="h-4 w-4 accent-red-600"
                />
                <span className="font-medium text-slate-800">
                  {tx(
                    t2("Remote Work / Heavy (Laptop hotspot, Zoom, ChatGPT, large uploads)", "远程办公重度档（电脑开热点、Zoom 会议、ChatGPT、传大文件）"),
                    lang,
                  )}
                </span>
              </span>
              <span className="shrink-0 font-bold text-slate-700">+2.5 GB/{tx(t2("day", "天"), lang)}</span>
            </label>
          </div>
        </div>

        {/* 4. +86 toggle */}
        <div className="mt-6 border-t border-slate-100 pt-5">
          <label className="block text-sm font-semibold text-slate-800">
            4. {tx(t2("Do you need to receive Chinese local SMS or make domestic calls (+86 number)?", "是否需要接发中国本地短信 / 拨打国内电话（+86 号码）？"), lang)}
          </label>
          <div className="mt-2 space-y-1 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs leading-relaxed text-slate-700">
            <div>
              <span className="font-semibold text-emerald-700">
                ✅ {tx(t2("Works WITHOUT +86:", "无需 +86 即可正常用："), lang)}
              </span>{" "}
              {tx(
                t2("Alipay, WeChat Pay, DiDi rides, Metro QR, Trip.com trains & tickets.", "支付宝 / 微信支付、滴滴打车、地铁乘车码、Trip.com 订高铁与门票。"),
                lang,
              )}
            </div>
            <div>
              <span className="font-semibold text-amber-700">
                ⚠️ {tx(t2("Needs +86:", "需要 +86 才能用："), lang)}
              </span>{" "}
              {tx(
                t2("Ordering Meituan delivery yourself, public Wi-Fi SMS login, Amap login & local calls.", "自己注册美团点外卖、连公共 Wi-Fi 收验证码、高德登录及本地商家通话。"),
                lang,
              )}
            </div>
          </div>
          <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setNeedsPlus86(false)}
              className={`rounded-lg border px-3.5 py-2.5 text-left text-sm font-semibold transition ${
                !needsPlus86 ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {tx(t2("No — data-only is enough for me", "不需要，纯流量上网就够用了"), lang)}
            </button>
            <button
              type="button"
              onClick={() => setNeedsPlus86(true)}
              className={`rounded-lg border px-3.5 py-2.5 text-left text-sm font-semibold transition ${
                needsPlus86 ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {tx(t2("Yes — I want a +86 Chinese number", "需要，我想要一个 +86 中国手机号"), lang)}
            </button>
          </div>
        </div>
      </div>

      {/* STEP 1 OF RESULT FLOW: Single Crisp Diagnosis Prescription Card */}
      <div
        className={`rounded-2xl border-2 p-5 shadow-sm ${
          phoneStatus === "carrier_locked"
            ? "border-amber-400 bg-amber-50/70"
            : calc.isHeavy || (phoneStatus === "us_iphone_esim_only" && needsPlus86)
              ? "border-red-300 bg-red-50/60"
              : "border-slate-900 bg-slate-900 text-white"
        }`}
      >
        {(() => {
          const isDark =
            phoneStatus !== "carrier_locked" &&
            !calc.isHeavy &&
            !(phoneStatus === "us_iphone_esim_only" && needsPlus86);
          return (
            <div className="space-y-2.5 text-sm">
              <div className={`flex flex-wrap items-center justify-between gap-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                <span className="font-semibold">
                  📊{" "}
                  {tx(
                    t2(
                      `Your ${days}-day total need: ~${Math.round(calc.rawEst)} GB (${calc.dailyRaw.toFixed(1)} GB/day · incl. hotel night usage & 20% buffer)`,
                      `您的 ${days} 天总需求：约 ${Math.round(calc.rawEst)} GB（日均 ${calc.dailyRaw.toFixed(1)} GB · 含酒店夜间用量与 20% 冗余）`,
                    ),
                    lang,
                  )}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                    isDark ? "bg-emerald-500/20 text-emerald-300" : "bg-red-100 text-red-800"
                  }`}
                >
                  {tx(t2(`Buy ${calc.tierGb} GB Fixed Pack`, `建议买 ${calc.tierGb} GB 固定总量包`), lang)}
                </span>
              </div>

              <div className={`text-base font-bold leading-snug ${isDark ? "text-white" : "text-slate-950"}`}>
                💡 {tx(verdict, lang)}
              </div>

              <div
                className={`flex flex-wrap items-center gap-x-3 gap-y-1 border-t pt-2.5 text-xs font-semibold ${
                  isDark ? "border-slate-700 text-emerald-300" : "border-slate-300/70 text-emerald-800"
                }`}
              >
                <span>
                  💰{" "}
                  {tx(
                    t2(
                      `Est. cost: ~${calc.priceRange} USD — Save ~85% vs US/UK/AU home carrier roaming ($${calc.homeCarrierLow}–$${calc.homeCarrierHigh} for ${days} days)`,
                      `预计花费：约 ${calc.priceRange} 美元 — 比开通美/英/澳本国运营商漫游（${days} 天约 $${calc.homeCarrierLow}–$${calc.homeCarrierHigh}）立省 ~85%！`,
                    ),
                    lang,
                  )}
                </span>
              </div>
            </div>
          );
        })()}
      </div>

      {/* STEP 2 OF RESULT FLOW: 2 High-Trust Matched Action Cards */}
      <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50/60 to-white p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-amber-600" />
            <h3 className="text-base font-bold text-slate-900">
              {showEsimCards
                ? tx(
                    t2(
                      `Best Matched ${regionLabelEn} eSIMs (${days} Days · ${calc.tierGb} GB)`,
                      `为您精准匹配的${regionLabelZh} eSIM（${days} 天 · ${calc.tierGb} GB）`,
                    ),
                    lang,
                  )
                : phoneStatus === "physical_only"
                  ? tx(t2("Matched Options for Physical-SIM-Only Phones", "为仅支持实体卡手机匹配的推荐方案"), lang)
                  : tx(t2("Only Working Options for Carrier-Locked Phones", "为合约锁卡手机匹配的唯一可行方案"), lang)}
            </h3>
          </div>
          <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-semibold text-amber-900">
            {tx(t2("International Roaming · Zero Setup", "合规国际漫游 · 零配置"), lang)}
          </span>
        </div>

        {showEsimCards ? (
          <div className="grid gap-4 md:grid-cols-2">
            {/* Card A: Trip.com Best Match */}
            <div className="flex flex-col justify-between rounded-xl border-2 border-red-200 bg-white p-4 shadow-sm">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded bg-red-600 px-2 py-0.5 text-[11px] font-bold text-white">
                    {calc.isHeavy
                      ? tx(t2("🏆 Best Match · Heavy Work No-Throttle", "🏆 最佳匹配 · 重度办公不断流"), lang)
                      : tx(t2("🏆 Best Value · #1 Pick", "🏆 最佳匹配 · 高性价比首选"), lang)}
                  </span>
                  <span className="text-sm font-extrabold text-slate-900">
                    ~{calc.tripPrice} USD ({calc.tierGb}GB)
                  </span>
                </div>

                <div className="mt-2.5 text-base font-bold text-slate-900">
                  {tx(
                    t2(
                      `Trip.com ${includeHkMacau ? "Greater China" : "China"} 5G Roaming eSIM`,
                      `Trip.com 官方${includeHkMacau ? "大中华区" : "中国"} 5G 漫游 eSIM`,
                    ),
                    lang,
                  )}
                </div>

                {/* App Availability Bar */}
                <div className="mt-2.5 flex flex-wrap gap-1.5 text-[11px] font-medium">
                  <span className="rounded bg-emerald-50 px-2 py-0.5 text-emerald-800">✅ Google / WhatsApp / IG</span>
                  <span className="rounded bg-emerald-50 px-2 py-0.5 text-emerald-800">
                    ✅ {tx(t2("TikTok & ChatGPT (Singapore IP)", "TikTok & ChatGPT (新加坡路由)"), lang)}
                  </span>
                  <span className="rounded bg-emerald-50 px-2 py-0.5 text-emerald-800">
                    ✅ {tx(t2("Hotspot", "个人热点"), lang)}
                  </span>
                  <span className="rounded bg-slate-100 px-2 py-0.5 text-slate-600">
                    ❌ {tx(t2("No +86 number", "无 +86 号码"), lang)}
                  </span>
                </div>

                {/* Exact Option to Select Cheat Strip */}
                <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-xs leading-relaxed text-slate-700">
                  <span className="font-bold text-slate-900">
                    📌 {tx(t2("Exact option to select on Trip.com:", "点进 Trip.com 后怎么选不踩坑："), lang)}
                  </span>{" "}
                  {tx(
                    t2(
                      `Pick [${days <= 10 ? "10 Days" : days <= 15 ? "15 Days" : "30 Days"}] + select [Total ${calc.tierGb}GB] Fixed Data (do NOT pick the default 1GB/day or 2GB/day daily-reset tab!). QR code arrives by email.`,
                      `天数选 [${days <= 10 ? "10 天" : days <= 15 ? "15 天" : "30 天"}]；流量请认准点选 [Total ${calc.tierGb}GB] 固定总量（不要选默认 1GB/day 或 2GB/day 每日重置款！）。下单后二维码发邮箱。`,
                    ),
                    lang,
                  )}
                </div>
              </div>

              <a
                href="https://www.trip.com/things-to-do/list?keyword=China+eSIM"
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
              >
                {tx(t2(`View Exact ${calc.tierGb}GB Plan on Trip.com`, `去 Trip.com 查看精确 ${calc.tierGb}GB 套餐`), lang)}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Card B: Airalo Easy 1-Tap App (honest about 20GB cap if >20GB) */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded bg-slate-900 px-2 py-0.5 text-[11px] font-bold text-white">
                    {tx(t2("✨ Alternative · 1-Tap App Install", "✨ 备选方案 · App 免扫码一键装"), lang)}
                  </span>
                  <span className="text-sm font-extrabold text-slate-900">~{calc.airaloPrice} USD</span>
                </div>

                <div className="mt-2.5 text-base font-bold text-slate-900">
                  {tx(
                    t2(
                      `Airalo ${includeHkMacau ? "Asialink Regional" : "Chinacom"} eSIM`,
                      `Airalo ${includeHkMacau ? "亚洲多国区域" : "中国"} eSIM`,
                    ),
                    lang,
                  )}
                </div>

                {/* App Availability Bar */}
                <div className="mt-2.5 flex flex-wrap gap-1.5 text-[11px] font-medium">
                  <span className="rounded bg-emerald-50 px-2 py-0.5 text-emerald-800">✅ Google / WhatsApp / IG</span>
                  <span className="rounded bg-emerald-50 px-2 py-0.5 text-emerald-800">
                    ✅ {tx(t2("1-Tap Install & Live Meter", "App 一键装卡 + 实时查余量"), lang)}
                  </span>
                  <span className="rounded bg-amber-50 px-2 py-0.5 text-amber-800">
                    ⚠️ {tx(t2("Check SG IP for TikTok/ChatGPT", "用 TikTok 需核对新加坡路由"), lang)}
                  </span>
                  {calc.tierGb > 20 && (
                    <span className="rounded bg-amber-50 px-2 py-0.5 text-amber-900">
                      ⚠️ {tx(t2("20 GB max/pack (1-tap in-app top-up)", "单包 20 GB 封顶（支持 App 内一键续充）"), lang)}
                    </span>
                  )}
                </div>

                {/* Exact Option to Select Cheat Strip */}
                <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-xs leading-relaxed text-slate-700">
                  <span className="font-bold text-slate-900">
                    📌 {tx(t2("Exact option to select on Airalo:", "点进 Airalo 后怎么选："), lang)}
                  </span>{" "}
                  {calc.tierGb > 20
                    ? tx(
                        t2(
                          "Select the [20 GB / 30 Days] Fixed Total pack (largest single pack on Airalo). For heavy remote work, top up with 1 tap inside the Airalo app when usage hits 80%.",
                          "选择 [20 GB / 30 Days] 固定总量包（Airalo 单包最高 20 GB 封顶）。重度办公用到 80% 时在 App 内一键续充即可。",
                        ),
                        lang,
                      )
                    : tx(
                        t2(
                          `Select the [${calc.tierGb} GB / 30 Days] Fixed Total pack — installs directly inside the Airalo app with zero QR code scanning.`,
                          `直接选 [${calc.tierGb} GB / 30 Days] 固定总量包——App 内一键自动装卡，无需扫码，24 小时英文客服。`,
                        ),
                        lang,
                      )}
                </div>
              </div>

              <a
                href={includeHkMacau ? "https://www.airalo.com/asia-esim" : AFFILIATES.esim.url}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                {tx(t2("View Airalo Plans", "查看 Airalo 套餐详情"), lang)}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        ) : phoneStatus === "physical_only" ? (
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div>
                <span className="rounded bg-blue-100 px-2 py-0.5 text-[11px] font-bold text-blue-800">
                  {tx(t2("Option A · Airport Pickup", "方案 A · 机场柜台自取"), lang)}
                </span>
                <div className="mt-2 text-base font-bold text-slate-900">
                  {tx(t2("China Physical SIM or Roaming Pocket Wi-Fi", "中国机场自取实体旅游卡 / 随身漫游 Wi-Fi 蛋"), lang)}
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  {tx(
                    t2(
                      "Pre-book online and pick up at Beijing, Shanghai or Guangzhou arrival halls. Roaming Pocket Wi-Fi connects up to 5 devices seamlessly.",
                      "行前网订，落地北京/上海/广州机场到达厅直接领取。随身漫游 Wi-Fi 蛋支持最多 5 台设备，国际漫游通道无缝用海外 App。",
                    ),
                    lang,
                  )}
                </p>
              </div>
              <a
                href="https://www.trip.com/things-to-do/list?keyword=China+WiFi+SIM+card"
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
              >
                {tx(t2("Browse Physical SIM & Wi-Fi on Trip.com", "去 Trip.com 查看实体卡与随身 Wi-Fi"), lang)}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div>
                <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-800">
                  {tx(t2("Option B · Pre-Order / Klook", "方案 B · 行前预订 / 邮寄"), lang)}
                </span>
                <div className="mt-2 text-base font-bold text-slate-900">
                  {tx(t2("Greater China Roaming Physical SIM (or 5ber Adapter)", "香港大中华漫游实体卡（或 5ber 写卡器）"), lang)}
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  {tx(
                    t2(
                      "Plug-and-play HK/Greater China roaming physical SIM with seamless international app access, or a 5ber physical adapter for Android.",
                      "插卡即用的香港大中华漫游实体卡（国际漫游直连海外 App），或用 5ber 写卡器让安卓实体卡手机支持 eSIM。",
                    ),
                    lang,
                  )}
                </p>
              </div>
              <a
                href="https://www.klook.com/search/result/?query=China%20SIM%20card%20WiFi"
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                {tx(t2("Compare SIM & Pocket Wi-Fi on Klook", "去 Klook 对比实体卡与 Wi-Fi 蛋"), lang)}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col justify-between rounded-xl border border-amber-300 bg-white p-4 shadow-sm">
              <div>
                <span className="rounded bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-900">
                  {tx(t2("Works on Locked Phones · #1 Pick", "锁卡机唯一推荐 · 方案 A"), lang)}
                </span>
                <div className="mt-2 text-base font-bold text-slate-900">
                  {tx(t2("Airport Roaming Pocket Wi-Fi Rental", "机场租赁随身漫游 Wi-Fi 蛋（Pocket Wi-Fi）"), lang)}
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  {tx(
                    t2(
                      "Your locked phone connects via regular Wi-Fi — no SIM swap needed. Seamless international app access for up to 5 devices.",
                      "锁卡手机直接连 Wi-Fi 即可，完全不受运营商锁限制。机场到达厅取还，全家多台设备共享国际漫游高速网络。",
                    ),
                    lang,
                  )}
                </p>
              </div>
              <a
                href="https://www.klook.com/search/result/?query=China%20Pocket%20WiFi"
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
              >
                {tx(t2("Book Roaming Pocket Wi-Fi on Klook", "去 Klook 预订随身漫游 Wi-Fi"), lang)}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div>
                <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-800">
                  {tx(t2("Alternative · No Extra Device", "备选方案 · 不多带设备"), lang)}
                </span>
                <div className="mt-2 text-base font-bold text-slate-900">
                  {tx(t2("Home Carrier International Roaming Pass", "开通母国运营商国际漫游日包"), lang)}
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  {tx(
                    t2(
                      "AT&T Day Pass ($12/day), Verizon TravelPass ($12/day), or T-Mobile Go5G/Magenta (often includes 5 GB free China roaming).",
                      "例如 AT&T / Verizon 国际漫游日包（约 $12/天）或 T-Mobile 部分套餐自带免费 5 GB 中国漫游流量，无需换卡。",
                    ),
                    lang,
                  )}
                </p>
              </div>
              <div className="mt-4 rounded-lg bg-slate-100 px-3 py-2 text-center text-xs font-semibold text-slate-700">
                {tx(t2("Activate in your home carrier app before takeoff", "起飞前在您的母国运营商 App 中开通即可"), lang)}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* STEP 3 OF RESULT FLOW: Offline Cabin Activation 3-Step Card + 1-Click PNG Wallpaper Download */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3.5">
          <div>
            <h3 className="text-sm font-bold text-slate-900 sm:text-base">
              ✈️ {tx(t2("Cabin Offline Activation: 3-Step Rule", "机舱离线激活 3 步保命口诀"), lang)}
            </h3>
            <p className="mt-0.5 text-xs text-slate-500">
              {tx(
                t2(
                  "80% of landing disconnects happen because travelers accidentally turn Data Roaming OFF on the China eSIM!",
                  "80% 落地连不上网，都是因为把新买的 China eSIM 自己的【数据漫游】关掉了！",
                ),
                lang,
              )}
            </p>
          </div>
          <button
            type="button"
            onClick={downloadOfflineCard}
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-red-600"
          >
            <Download className="h-3.5 w-3.5" />
            {downloaded
              ? tx(t2("Saved to Downloads!", "已保存急救图到相册/下载！"), lang)
              : tx(t2("Save Offline Cabin Card (PNG)", "一键保存《机舱离线急救图》"), lang)}
          </button>
        </div>

        <ol className="mt-3.5 space-y-2.5 text-sm text-slate-700">
          <li className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
              1
            </span>
            <span>
              <strong className="text-slate-900">
                {tx(t2("Install at Home (Keep OFF on Flight):", "在家连 Wi-Fi 提前装卡："), lang)}
              </strong>{" "}
              {tx(
                t2("Install before leaving, keep the eSIM OFF until landing so validity days don't start early.", "起飞前装好，落地前先别开，防止提前开始算天数。"),
                lang,
              )}
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-800">
              2
            </span>
            <span>
              <strong className="text-slate-900">
                {tx(t2("[Home SIM] Line ON · Data Roaming = ❌ OFF:", "【母国原卡】保持开启收银行短信 · 数据漫游 = ❌ 关闭 (OFF)："), lang)}
              </strong>{" "}
              {tx(
                t2("Receive Visa/Mastercard 3DS verification texts for free with $0 roaming charges.", "境外免费收银行 3DS 验证码，且绝不产生天价漫游费；同时关闭“允许切换蜂窝数据”。"),
                lang,
              )}
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-800">
              3
            </span>
            <span>
              <strong className="text-emerald-800">
                {tx(
                  t2("[China eSIM] Cellular Data Primary · Data Roaming = ✅ MUST BE ON!:", "【China eSIM】设为蜂窝数据主卡 · 数据漫游 = ✅ 必须开启 (ON)！："),
                  lang,
                )}
              </strong>{" "}
              {tx(
                t2("Open your China eSIM line settings and switch Data Roaming ON — a roaming eSIM cannot connect to Chinese towers without it.", "必须进入这张新卡的设置把【数据漫游】设为开启，否则国际漫游 eSIM 绝对连不上中国基站！"),
                lang,
              )}
            </span>
          </li>
        </ol>

        <div className="mt-3.5 flex items-start gap-2 rounded-lg bg-slate-50 px-3.5 py-2.5 text-xs text-slate-700">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <div>
            <strong className="text-slate-900">
              🔧 {tx(t2("No signal after landing?", "落地没信号？"), lang)}
            </strong>{" "}
            {tx(
              t2(
                "Toggle Airplane Mode ON for 10 seconds then OFF and wait 60s — or go to Network Selection → turn OFF Automatic → manually pick China Mobile 5G.",
                "开关一次飞行模式等 10 秒再关闭，静等 60 秒；或在“网络选择”里关闭自动，手动选择 China Mobile 5G（中国移动）。",
              ),
              lang,
            )}
          </div>
        </div>

        <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-slate-400">
          <Smartphone className="h-3.5 w-3.5" />
          <span>
            {tx(
              t2(
                "Tip: Turn off iCloud / Google Photos cellular backup before flying so background photo sync doesn't burn your data.",
                "省流提醒：出发前请关闭 iCloud / Google Photos 的蜂窝移动网络自动备份。",
              ),
              lang,
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
