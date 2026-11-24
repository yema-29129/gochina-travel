"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Globe,
  ShieldAlert,
  Smartphone,
  Sparkles,
  Wifi,
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

export default function EsimCalculator({ lang }: { lang: Lang }) {
  const [days, setDays] = useState<number>(10);
  const [includeHkMacau, setIncludeHkMacau] = useState<boolean>(false);
  const [phoneStatus, setPhoneStatus] = useState<PhoneStatus>("unlocked_esim");
  const [showCheckGuide, setShowCheckGuide] = useState<boolean>(false);
  const [socialVideo, setSocialVideo] = useState<boolean>(false);
  const [remoteWork, setRemoteWork] = useState<boolean>(false);
  const [needsPlus86, setNeedsPlus86] = useState<boolean>(false);
  const [showPreFlightGuide, setShowPreFlightGuide] = useState<boolean>(true);

  const calc = useMemo(() => {
    const base = 0.6;
    const extra = (socialVideo ? 1.2 : 0) + (remoteWork ? 2.5 : 0);
    const dailyRaw = base + extra;
    const rawEst = days * dailyRaw * 1.2;

    let tierGb = 10;
    let isUnlimited = false;
    let priceRange = "$11–$18";
    let tripPrice = "$9.50";
    let airaloPrice = "$18–$21";

    if (rawEst <= 3) {
      tierGb = 3;
      priceRange = "$5–$8";
      tripPrice = "$4.50";
      airaloPrice = "$8.50";
    } else if (rawEst <= 5) {
      tierGb = 5;
      priceRange = "$7–$12";
      tripPrice = "$6.50";
      airaloPrice = "$11.50";
    } else if (rawEst <= 10) {
      tierGb = 10;
      priceRange = "$11–$18";
      tripPrice = "$9.50";
      airaloPrice = "$18–$21";
    } else if (rawEst <= 20) {
      tierGb = 20;
      priceRange = "$19–$32";
      tripPrice = "$16.50";
      airaloPrice = "$28–$32";
    } else {
      tierGb = 30;
      isUnlimited = true;
      priceRange = "$28–$48";
      tripPrice = "$24–$35";
      airaloPrice = "$39–$45";
    }

    return { base, extra, dailyRaw, rawEst, tierGb, isUnlimited, priceRange, tripPrice, airaloPrice };
  }, [days, socialVideo, remoteWork]);

  const regionTag = includeHkMacau
    ? t2("Mainland + HK / Macau / Taiwan Regional", "中国大陆 + 港澳台区域通用")
    : t2("Mainland China", "中国大陆");

  const tierShort = calc.isUnlimited
    ? t2("Unlimited Daily / 30 GB+", "不限流量日包 / 30 GB+")
    : t2(`${calc.tierGb} GB Pack`, `${calc.tierGb} GB 套餐`);

  // 4 phone types × 2 +86 needs = 8 crystal-clear, contradiction-free recommendation states
  const rec = useMemo(() => {
    const regionEn = includeHkMacau ? "Greater China (Mainland + HK/Macau)" : "Mainland China";
    const regionZh = includeHkMacau ? "大中华区（中国大陆 + 港澳台）" : "中国大陆";
    const packEn = calc.isUnlimited ? "Unlimited Daily / 30 GB+" : `${calc.tierGb} GB Fixed Pack`;
    const packZh = calc.isUnlimited ? "不限流量日包 / 30 GB+" : `${calc.tierGb} GB 定量包`;

    if (phoneStatus === "unlocked_esim" && !needsPlus86) {
      return {
        tone: "emerald" as const,
        icon: "check" as const,
        title: t2(
          `Recommended (85% of Visitors): ${regionEn} Roaming eSIM (${packEn})`,
          `最佳推荐（85% 游客首选）：${regionZh}国际漫游 eSIM（${packZh}）`,
        ),
        body: t2(
          `Pre-install a ${regionEn} international roaming eSIM before flying. It gives you seamless access to Google, WhatsApp, Maps & Instagram via international data roaming with zero configuration needed — and avoids hotel Wi-Fi app restrictions.`,
          `出发前在家装好 ${regionZh}国际漫游 eSIM，落地即连 5G。通过合规国际数据漫游即可无缝使用 Google、WhatsApp、地图与 Instagram，零配置、不用折腾，回酒店也能避开公共 Wi-Fi 限制。`,
        ),
      };
    }

    if (phoneStatus === "unlocked_esim" && needsPlus86) {
      return {
        tone: "emerald" as const,
        icon: "phone" as const,
        title: t2(
          `Recommended: Dual-SIM Power Combo (Airport +86 Physical SIM + ${regionEn} Roaming eSIM)`,
          `推荐方案：双卡组合（机场办 +86 实体卡 + ${regionZh}漫游 eSIM）`,
        ),
        body: t2(
          `Pick up a ~¥100 China Unicom physical SIM at the airport for a local +86 number (SMS verification, Meituan delivery, local calls) AND pair it with a 5–${calc.tierGb} GB ${regionEn} roaming eSIM for seamless international app access.`,
          `落地机场办一张约 100 元的中国联通实体卡（拿 +86 号码收短信、美团点外卖、打国内电话），同时配一张 5–${calc.tierGb} GB 的 ${regionZh}漫游 eSIM 专门用于无缝访问海外 App，两全其美。`,
        ),
      };
    }

    if (phoneStatus === "us_iphone_esim_only" && !needsPlus86) {
      return {
        tone: "red" as const,
        icon: "shield" as const,
        title: t2(
          `US iPhone 14–17 (No SIM Tray): Pre-Install ${regionEn} Roaming eSIM (${packEn})`,
          `美版无卡槽 iPhone 14–17：登机前必须预装 ${regionZh}漫游 eSIM（${packZh}）`,
        ),
        body: t2(
          `US iPhone 14 and newer models have NO physical SIM tray, and Chinese carriers do not issue local tourist eSIMs at airports. Install a ${regionEn} international roaming eSIM before boarding for seamless access to Google, WhatsApp, Maps & Instagram.`,
          `美版 iPhone 14 及以后机型没有实体卡槽，且中国机场柜台目前不对短期外籍游客开放本地旅游 eSIM。请务必在登机前安装好 ${regionZh}国际漫游 eSIM，落地即享 5G 与海外 App 无缝访问。`,
        ),
      };
    }

    if (phoneStatus === "us_iphone_esim_only" && needsPlus86) {
      return {
        tone: "red" as const,
        icon: "shield" as const,
        title: t2(
          "Hardware Limit Alert (No SIM Tray + Want +86 Number): 2 Working Solutions",
          "硬件限制预警（美版无卡槽 + 需要 +86 号码）：2 套可行替代方案",
        ),
        body: t2(
          `A US eSIM-only iPhone cannot take a physical +86 SIM, and Chinese carriers do not issue tourist local eSIMs. Use your ${regionEn} roaming eSIM on your iPhone for data, AND get +86 SMS via either: (1) a virtual Chinese SMS number inside WeChat (e.g. eSender / 易博通) for verification codes, or (2) bring an old unlocked spare phone to hold an airport +86 physical SIM.`,
          `美版无卡槽 iPhone 无法插国内实体卡，机场也不给外籍游客办本地旅游 eSIM。建议主手机装 ${regionZh}漫游 eSIM 上网，同时二选一解决 +86 号码：① 在微信内开通虚拟中国短信服务（如 eSender 易博通）专收验证码；② 带一台旧的无锁备用机到机场插 +86 实体卡。`,
        ),
      };
    }

    if (phoneStatus === "physical_only" && !needsPlus86) {
      return {
        tone: "slate" as const,
        icon: "wifi" as const,
        title: t2(
          `Recommended (Physical SIM Only): Pre-Ordered ${regionEn} Roaming Physical SIM or Pocket Wi-Fi`,
          `推荐方案（仅支持实体卡）：行前网购${regionZh}漫游实体卡 或 机场随身漫游 Wi-Fi`,
        ),
        body: t2(
          `Your phone cannot install an eSIM. Order a Greater China / HK-Singapore roaming physical SIM card before departure (plug-and-play seamless access to Google, WhatsApp & Maps, zero setup), or rent a roaming Pocket Wi-Fi at the airport.`,
          `您的手机不支持 eSIM。建议出发前网购一张大中华区/港澳新加坡漫游实体电话卡（插卡即用、国际漫游通道无缝访问 Google 和 WhatsApp），或在机场租用随身漫游 Wi-Fi 蛋。`,
        ),
      };
    }

    if (phoneStatus === "physical_only" && needsPlus86) {
      return {
        tone: "slate" as const,
        icon: "wifi" as const,
        title: t2(
          "Recommended (Physical SIM + +86): Airport +86 Physical SIM + Roaming Pocket Wi-Fi (or Dual Physical SIM)",
          "推荐方案：机场落地办 +86 实体卡 + 随身漫游 Wi-Fi（或双实体卡手机配港澳漫游副卡）",
        ),
        body: t2(
          "Since your phone does not support eSIM, buy a ¥100 China Unicom physical SIM at the airport for your +86 number and local calls/SMS, then pair it with a roaming Pocket Wi-Fi for seamless international apps. If your phone has TWO physical SIM slots, put an airport +86 SIM in Slot 1 and a pre-ordered HK/Greater China roaming physical SIM in Slot 2.",
          "因您的手机不支持 eSIM，建议落地在机场办一张 100 元中国联通实体卡（拿 +86 号码与国内通话短信），同时租一台随身漫游 Wi-Fi 蛋用于无缝访问海外 App。若您的手机支持双实体 SIM 卡槽，可卡槽 1 插机场 +86 卡、卡槽 2 插行前买好的港澳大中华漫游实体卡。",
        ),
      };
    }

    if (phoneStatus === "carrier_locked" && !needsPlus86) {
      return {
        tone: "amber" as const,
        icon: "alert" as const,
        title: t2(
          "Carrier-Locked Phone: Rent Roaming Pocket Wi-Fi or Use Home Carrier Roaming",
          "合约锁卡手机：只能租随身漫游 Wi-Fi 蛋 或 开通母国国际漫游包",
        ),
        body: t2(
          "A carrier-locked phone CANNOT accept any third-party travel eSIM or Chinese physical SIM. Ask your carrier to unlock it before flying — otherwise, rent a roaming Pocket Wi-Fi at the airport (supports up to 5 devices) or activate your home carrier's international daily roaming pass.",
          "有运营商合约锁的手机既装不了第三方旅游 eSIM，也插不了任何他国实体 SIM 卡！请行前联系母国运营商申请解锁；若无法解锁，唯一稳妥方案是在机场租随身漫游 Wi-Fi 蛋，或直接开通母国运营商的国际漫游日包。",
        ),
      };
    }

    // carrier_locked && needsPlus86
    return {
      tone: "amber" as const,
      icon: "alert" as const,
      title: t2(
        "Carrier-Locked + Want +86 Number: Pocket Wi-Fi + Virtual +86 SMS (or Unlock / Spare Phone)",
        "合约锁卡 + 需要 +86 号码：随身漫游 Wi-Fi + 微信虚拟 +86 短信服务（或带无锁备用机）",
      ),
      body: t2(
        "Because your phone is carrier-locked, it will reject both travel eSIMs and Chinese +86 physical SIM cards. Best workaround if you cannot unlock before flying: rent a roaming Pocket Wi-Fi for internet, and either use a WeChat virtual +86 SMS service (eSender / 易博通) or carry an unlocked spare phone for an airport +86 SIM.",
        "合约锁卡机无法插入中国 +86 实体卡也无法装第三方 eSIM。如果出发前无法解锁，建议：租随身漫游 Wi-Fi 蛋解决上网，同时通过微信虚拟 +86 短信服务（如 eSender 易博通）收验证码，或带一台旧的无锁备用机到机场插 +86 卡。",
      ),
    };
  }, [phoneStatus, needsPlus86, includeHkMacau, calc.tierGb, calc.isUnlimited]);

  const toneClasses = {
    emerald: "border-emerald-300 bg-emerald-50 text-emerald-950",
    red: "border-red-300 bg-red-50 text-red-950",
    slate: "border-slate-300 bg-slate-50 text-slate-900",
    amber: "border-amber-300 bg-amber-50 text-amber-950",
  }[rec.tone];

  const showEsimCards = phoneStatus === "unlocked_esim" || phoneStatus === "us_iphone_esim_only";

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

          {/* Quick-select day pills */}
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

          {/* HK / Macau / Taiwan regional toggle */}
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
                    "Important: Mainland-only China eSIMs lose signal in Hong Kong & Macau. Check this to switch to a Greater China regional pack.",
                    "重要提醒：仅限中国大陆的套餐在香港和澳门会断网。勾选此项将自动推荐大中华区通用漫游包。",
                  ),
                  lang,
                )}
              </p>
            </div>
          </label>
        </div>

        {/* 2. Phone eSIM status */}
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
              {tx(t2("Check Carrier Lock", "查看运营商锁检查方法"), lang)}
              {showCheckGuide ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            </button>
          </div>

          <p className="mt-1 text-xs font-medium text-slate-600">
            {tx(
              t2(
                "Unsure? Dial *#06# on your phone — if an EID number appears on screen, your phone supports eSIM.",
                "不确定？打开手机拨号盘输入 *#06#，如果屏幕出现 EID 编号，说明支持 eSIM。",
              ),
              lang,
            )}
          </p>

          {showCheckGuide && (
            <div className="mt-2.5 rounded-lg border border-slate-200 bg-slate-50 p-3.5 text-xs leading-relaxed text-slate-700">
              <p className="font-semibold text-slate-900">
                {tx(t2("How to Check Carrier Lock (5 Seconds):", "5 秒检查运营商合约锁："), lang)}
              </p>
              <ul className="mt-1 list-disc space-y-1 pl-4">
                <li>
                  {tx(
                    t2(
                      "iPhone: Settings → General → About → Carrier Lock. It must say “No SIM restrictions”.",
                      "iPhone：设置 → 通用 → 关于本机 → 运营商锁，必须显示“无 SIM 卡限制（No SIM restrictions）”。",
                    ),
                    lang,
                  )}
                </li>
                <li>
                  {tx(
                    t2(
                      "Android: Settings → Connections → Mobile Networks → Network Operators (or ask your carrier if you are still paying off the phone on contract).",
                      "Android：设置 → 连接 → 移动网络，或直接确认手机是否仍在海外运营商合约分期锁卡期内。",
                    ),
                    lang,
                  )}
                </li>
              </ul>
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
                  sub: t2("Older phones or Mainland China iPhone models", "较旧机型或中国大陆国行版 iPhone"),
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
                onClick={() => setPhoneStatus(opt.id)}
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

        {/* 4. +86 toggle — Neutral wording + Clear comparison */}
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
                t2("Alipay, WeChat Pay, DiDi rides, Metro QR codes, Trip.com trains & attraction tickets.", "支付宝 / 微信支付、滴滴打车、地铁乘车码、Trip.com 订高铁与门票。"),
                lang,
              )}
            </div>
            <div>
              <span className="font-semibold text-amber-700">
                ⚠️ {tx(t2("Needs +86:", "需要 +86 才能用："), lang)}
              </span>{" "}
              {tx(
                t2("Ordering Meituan delivery yourself, airport/hotel public Wi-Fi SMS login, Amap login & calling local shops.", "自己注册美团点外卖、连机场/酒店公共 Wi-Fi 收验证码、高德地图登录及本地商家电话沟通。"),
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

      {/* Data Estimate Summary — Realistic Market Tiers + Price Guide */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="text-xs font-medium text-slate-500">
            {tx(t2("Daily Usage Rate", "每日预估消耗"), lang)}
          </div>
          <div className="mt-1 text-2xl font-bold text-slate-900">
            {calc.dailyRaw.toFixed(1)} GB/{tx(t2("day", "天"), lang)}
          </div>
          <div className="mt-1 text-xs text-slate-500">
            {tx(
              t2(
                `0.6 + ${calc.extra.toFixed(1)} GB · Hotel Wi-Fi doesn't reach Google/WhatsApp, so evening browsing uses mobile data too.`,
                `0.6 + ${calc.extra.toFixed(1)} GB · 酒店 Wi-Fi 无法直连海外 App，晚上回酒店刷消息同样会消耗手机流量。`,
              ),
              lang,
            )}
          </div>
        </div>

        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <div className="text-xs font-medium text-red-700">
            {tx(
              t2(`Est. ${calc.rawEst.toFixed(1)} GB → Buy Real Market Tier`, `预估消耗 ${calc.rawEst.toFixed(1)} GB → 建议直接买市面档位`),
              lang,
            )}
          </div>
          <div className="mt-1 text-2xl font-bold text-red-700">{tx(tierShort, lang)}</div>
          <div className="mt-1 text-xs font-medium text-red-800">
            {tx(t2(`Typical price: ~${calc.priceRange} USD`, `市场参考价：约 ${calc.priceRange} 美元`), lang)}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="text-xs font-medium text-slate-500">
            {tx(t2("Plan Type & Fair-Use Tip", "套餐类型与省流提醒"), lang)}
          </div>
          <div className="mt-1 text-lg font-bold text-slate-900">
            {calc.isUnlimited
              ? tx(t2("Unlimited Daily (Check FUP)", "不限流量日包（注意限速）"), lang)
              : tx(t2("Fixed Data Pack (Best Value)", "定量流量包（不限速更划算）"), lang)}
          </div>
          <div className="mt-1 text-xs text-slate-500">
            {tx(
              t2(
                "Note: Daily 'Unlimited' plans often throttle after 1–2 GB/day & may limit hotspot. Turn off iCloud / Google Photos cellular backup before flying.",
                "提示：“每日无限包”普遍在满 1–2 GB/天后限速且可能限制开热点；出发前请关闭 iCloud / Google Photos 蜂窝自动备份。",
              ),
              lang,
            )}
          </div>
        </div>
      </div>

      {/* TikTok & ChatGPT Routing Alert (triggers when Social/Video or Remote Work is checked) */}
      {(socialVideo || remoteWork) && (
        <div className="rounded-xl border border-violet-300 bg-violet-50 p-4 text-sm text-violet-950">
          <div className="flex items-start gap-2.5">
            <Globe className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />
            <div>
              <div className="font-bold text-violet-900">
                {tx(
                  t2(
                    "⚠️ Pro Tip for TikTok & ChatGPT Users: Choose Singapore Routing",
                    "⚠️ 避坑提醒：使用 TikTok 或 ChatGPT 请认准【新加坡路由（Singapore Routing）】",
                  ),
                  lang,
                )}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-violet-900">
                {tx(
                  t2(
                    "Hong Kong-routed eSIMs work great for Google, WhatsApp & Instagram, but TikTok and ChatGPT block Hong Kong IP addresses! Choose a Singapore-routed plan instead. Also, if your phone has a +86 Chinese SIM active in the other slot, temporarily toggle the +86 line OFF when opening TikTok.",
                    "走香港路由（HK IP）的漫游套餐能正常用 Google、WhatsApp 和 Instagram，但会被 TikTok 和 ChatGPT 屏蔽地区！请务必认准新加坡路由套餐；双卡手机打开 TikTok 时，请暂时关闭卡槽内的 +86 实体卡线路。",
                  ),
                  lang,
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Dynamic 8-Combination Recommendation Banner */}
      <div className={`rounded-xl border p-5 ${toneClasses}`}>
        <div className="flex items-start gap-3">
          {rec.icon === "shield" && <ShieldAlert className="mt-0.5 h-6 w-6 shrink-0 text-red-600" />}
          {rec.icon === "alert" && <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />}
          {rec.icon === "phone" && <Smartphone className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600" />}
          {rec.icon === "wifi" && <Wifi className="mt-0.5 h-6 w-6 shrink-0 text-slate-700" />}
          {rec.icon === "check" && <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600" />}
          <div className="text-sm">
            <div className="text-base font-bold">{tx(rec.title, lang)}</div>
            <p className="mt-1.5 leading-relaxed">{tx(rec.body, lang)}</p>
          </div>
        </div>
      </div>

      {/* Dynamic Conversion Cards — Strictly Matched to Phone Hardware */}
      <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50/80 to-white p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-amber-600" />
            <h3 className="text-base font-bold text-slate-900">
              {showEsimCards
                ? tx(
                    t2(
                      `Matched ${tx(regionTag, "en")} eSIM Options (${days} Days · ${tx(tierShort, "en")})`,
                      `为您匹配的${tx(regionTag, "zh")} eSIM 方案（${days} 天 · ${tx(tierShort, "zh")}）`,
                    ),
                    lang,
                  )
                : phoneStatus === "physical_only"
                  ? tx(t2("Matched Options for Physical-SIM-Only Phones", "为仅支持实体卡手机匹配的推荐方案"), lang)
                  : tx(t2("Matched Options for Carrier-Locked Phones", "为合约锁卡手机匹配的唯一可行方案"), lang)}
            </h3>
          </div>
          <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-semibold text-amber-900">
            {tx(t2("Zero Configuration · International Roaming", "合规国际漫游 · 零配置"), lang)}
          </span>
        </div>

        {showEsimCards ? (
          <div className="grid gap-4 md:grid-cols-2">
            {/* Plan A: Best Value — Trip.com 5G eSIM */}
            <div className="flex flex-col justify-between rounded-xl border border-red-200 bg-white p-4 shadow-sm">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded bg-red-100 px-2 py-0.5 text-[11px] font-bold text-red-700">
                    {tx(t2("Plan A · Best Value", "方案 A · 高性价比首选"), lang)}
                  </span>
                  <span className="text-sm font-extrabold text-slate-900">~{calc.tripPrice} USD</span>
                </div>
                <div className="mt-2 text-base font-bold text-slate-900">
                  {tx(
                    t2(
                      `Trip.com ${includeHkMacau ? "Greater China" : "China"} 5G Roaming eSIM`,
                      `Trip.com 官方${includeHkMacau ? "大中华区" : "中国"} 5G 漫游 eSIM`,
                    ),
                    lang,
                  )}
                </div>
                <p className="mt-1 text-xs text-slate-600">
                  {tx(
                    t2(
                      `Matched tier: ${days} days · ${calc.isUnlimited ? "1–2 GB/day Unlimited" : `${calc.tierGb} GB total`}`,
                      `匹配档位：${days} 天 · ${calc.isUnlimited ? "每日 1–2 GB 不限流" : `总量 ${calc.tierGb} GB`}`,
                    ),
                    lang,
                  )}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {[
                    t2("Singapore Routing (TikTok & ChatGPT OK)", "新加坡路由（支持 TikTok/ChatGPT）"),
                    t2("China Mobile 5G", "中国移动 5G 信号稳"),
                    t2("Hotspot Ready", "支持开热点"),
                  ].map((tag, i) => (
                    <span key={i} className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                      {tx(tag, lang)}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="https://www.trip.com/things-to-do/list?keyword=China+eSIM"
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
              >
                {tx(t2("Check Price on Trip.com", "去 Trip.com 查看价格"), lang)}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Plan B: Easiest 1-Tap App — Airalo */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded bg-slate-900 px-2 py-0.5 text-[11px] font-bold text-white">
                    {tx(t2("Plan B · Easiest 1-Tap App", "方案 B · 纯小白 App 一键安装"), lang)}
                  </span>
                  <span className="text-sm font-extrabold text-slate-900">~{calc.airaloPrice} USD</span>
                </div>
                <div className="mt-2 text-base font-bold text-slate-900">
                  {tx(
                    t2(
                      `Airalo ${includeHkMacau ? "Asialink Regional" : "Chinacom"} eSIM`,
                      `Airalo ${includeHkMacau ? "亚洲多国区域" : "中国"} eSIM`,
                    ),
                    lang,
                  )}
                </div>
                <p className="mt-1 text-xs text-slate-600">
                  {tx(
                    t2(
                      `Matched tier: ${calc.tierGb} GB · Valid 30 days`,
                      `匹配档位：${calc.tierGb} GB · 30 天有效`,
                    ),
                    lang,
                  )}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {[
                    t2("1-Tap In-App Install (No QR)", "App 内一键免扫码安装"),
                    t2("Live Usage Alerts", "流量余量实时弹窗"),
                    t2("24/7 English Support", "24h 英文客服"),
                  ].map((tag, i) => (
                    <span key={i} className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                      {tx(tag, lang)}
                    </span>
                  ))}
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
                  {tx(t2("China Physical Tourist SIM or Roaming Pocket Wi-Fi", "中国机场自取实体旅游卡 / 随身漫游 Wi-Fi 蛋"), lang)}
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {tx(
                    t2(
                      "Pre-book online and pick up at Beijing, Shanghai or Guangzhou arrival halls. Roaming Pocket Wi-Fi connects up to 5 devices with seamless international app access.",
                      "行前网订，落地北京/上海/广州机场到达厅直接领取。随身漫游 Wi-Fi 蛋支持最多 5 台设备同时连接，国际漫游通道无缝用海外 App。",
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
                  {tx(t2("Option B · Pre-Order Before Flying", "方案 B · 出发前邮寄到家"), lang)}
                </span>
                <div className="mt-2 text-base font-bold text-slate-900">
                  {tx(t2("Greater China Roaming Physical SIM (or 5ber eSIM Adapter)", "香港大中华漫游实体卡（或 5ber 实体转 eSIM 写卡器）"), lang)}
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {tx(
                    t2(
                      "Order a Hong Kong/Greater China roaming physical SIM card on Amazon before your flight (plug-and-play international roaming), or use a 5ber physical adapter card to add eSIM capability to an Android phone.",
                      "出发前在 Amazon 等平台邮购一张香港大中华漫游实体卡（插卡即用国际漫游），或使用 5ber 实体写卡器让安卓实体卡手机支持 eSIM。",
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
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {tx(
                    t2(
                      "Your locked phone connects via regular Wi-Fi — no SIM swap needed. Pick up & drop off at the airport; gives seamless international app access for your whole group.",
                      "锁卡手机直接连它的 Wi-Fi 即可，完全不受运营商锁限制。机场到达厅取还，全家多台设备共享国际漫游高速网络。",
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
                  {tx(t2("Alternative · Zero Extra Device", "备选方案 · 不多带设备"), lang)}
                </span>
                <div className="mt-2 text-base font-bold text-slate-900">
                  {tx(t2("Home Carrier International Roaming Pass", "开通母国运营商国际漫游日包"), lang)}
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {tx(
                    t2(
                      "AT&T International Day Pass ($12/day), Verizon TravelPass ($12/day), or T-Mobile Go5G/Magenta (often includes free 5 GB roaming in China). Routes via your home country automatically.",
                      "例如 AT&T / Verizon 国际漫游日包（约 $12/天）或 T-Mobile 部分套餐自带免费 5 GB 中国漫游流量，数据自动经母国路由，无需换卡。",
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

      {/* 1-Minute Pre-Flight Dual-SIM & Bank 3DS SMS Safety Checklist */}
      <div className="rounded-xl border border-slate-200 bg-white">
        <button
          type="button"
          onClick={() => setShowPreFlightGuide((v) => !v)}
          className="flex w-full items-center justify-between px-5 py-4 text-left"
        >
          <div>
            <div className="text-sm font-bold text-slate-900">
              {tx(
                t2(
                  "✈️ 1-Minute Pre-Flight Phone Setup Checklist (Keep Bank 3DS SMS Working!)",
                  "✈️ 起飞前 1 分钟手机保命设置清单（千万别收不到银行卡验证码！）",
                ),
                lang,
              )}
            </div>
            <div className="mt-0.5 text-xs text-slate-500">
              {tx(
                t2(
                  "Most travelers accidentally turn off their home SIM and then fail Alipay/card 3DS verification at checkout.",
                  "很多游客装完 eSIM 后把原手机卡关掉，结果在收银台刷卡收不到母国银行 3DS 短信验证码！",
                ),
                lang,
              )}
            </div>
          </div>
          {showPreFlightGuide ? (
            <ChevronUp className="h-5 w-5 shrink-0 text-slate-500" />
          ) : (
            <ChevronDown className="h-5 w-5 shrink-0 text-slate-500" />
          )}
        </button>

        {showPreFlightGuide && (
          <div className="border-t border-slate-100 px-5 py-4">
            <ol className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700">
                  1
                </span>
                <div>
                  <div className="font-semibold text-slate-900">
                    {tx(t2("Install at Home, Turn on Data Roaming After Landing", "在家连 Wi-Fi 提前装好，落地滑行时再开数据漫游"), lang)}
                  </div>
                  <p className="mt-0.5 text-xs text-slate-600">
                    {tx(
                      t2(
                        "Scan the QR code / install your eSIM on home Wi-Fi before leaving, then keep it OFF until your plane touches down in China so your validity days don't start early.",
                        "出发前在家用 Wi-Fi 装好 eSIM，但先保持关闭，等飞机落地中国滑行时再开启该卡并打开“数据漫游”，避免提前激活开始算天数。",
                      ),
                      lang,
                    )}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700">
                  2
                </span>
                <div>
                  <div className="font-semibold text-slate-900">
                    {tx(t2("Keep Home SIM ON — Turn Home Data Roaming OFF", "保留母国原卡【开启】，但务必关闭原卡的【数据漫游】"), lang)}
                  </div>
                  <p className="mt-0.5 text-xs text-slate-600">
                    {tx(
                      t2(
                        "Receiving SMS abroad is free on virtually all carriers. Keeping your home SIM turned ON (with Data Roaming OFF) ensures you receive Visa/Mastercard 3DS verification codes for Alipay & train bookings with $0 roaming fees.",
                        "境外接收短信几乎全部免费。保持母国卡开启但关闭其“数据漫游”，既不会产生天价漫游费，又能确保刷卡/支付宝触发银行 3DS 验证时顺利收到短信。",
                      ),
                      lang,
                    )}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700">
                  3
                </span>
                <div>
                  <div className="font-semibold text-slate-900">
                    {tx(t2("Switch Cellular Data to Your China eSIM", "将【蜂窝数据】主卡设为刚买的 China eSIM"), lang)}
                  </div>
                  <p className="mt-0.5 text-xs text-slate-600">
                    {tx(
                      t2(
                        "Set Cellular Data → China eSIM and turn OFF “Allow Cellular Data Switching”. Remember: data-only eSIMs do not include a regular phone number for voice calls.",
                        "在系统设置中将蜂窝数据指定为 China eSIM，并关闭“允许切换蜂窝数据”。注意：纯流量 eSIM 不带本地电话号码，无法拨打普通语音电话。",
                      ),
                      lang,
                    )}
                  </p>
                </div>
              </li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
