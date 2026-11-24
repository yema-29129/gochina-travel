"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Bike,
  Car,
  CheckCircle2,
  ExternalLink,
  Maximize2,
  ShieldAlert,
  Smartphone,
  TrainFront,
  X,
  Zap,
} from "lucide-react";
import { Lang, t2, tx } from "@/lib/i18n";

/* =========================================================================
 * 1. CITY TRANSPORT: 4-Column At-a-Glance Cheat Sheet
 * ========================================================================= */
export function CityTransportHub({ lang }: { lang: Lang }) {
  const cards = [
    {
      Icon: TrainFront,
      title: t2("Metro / Subway", "城市地铁"),
      price: t2("$0.30 – $1.40 (¥2–10)", "¥2–10 (约 $0.30–$1.40)"),
      stars: "★★★★★",
      enLabel: t2("English signs & audio", "全英文站名与报站"),
      best: t2("Best for rush hour & airports", "高峰期与跨区首选"),
    },
    {
      Icon: Car,
      title: t2("DiDi (Inside Alipay)", "支付宝内叫滴滴"),
      price: t2("$2.50 – $8.00 (¥18–58)", "¥18–58 (约 $2.50–$8.00)"),
      stars: "★★★★★",
      enLabel: t2("100% English + auto-translate", "全英文 + 自动翻译对话"),
      best: t2("Best door-to-door w/ bags", "带行李门到门首选"),
    },
    {
      Icon: Car,
      title: t2("Street Taxi", "路边出租车"),
      price: t2("Metered ~$2.50+ (¥14+)", "打表起步 ¥14+ (约 $2+)"),
      stars: "★☆☆☆☆",
      enLabel: t2("Mandarin only — show card", "司机多不讲英文，须看卡"),
      best: t2("Backup only (accepts cash)", "备用方案（仍收现金）"),
    },
    {
      Icon: Bike,
      title: t2("Shared Bike", "共享单车"),
      price: t2("~$0.25 / 30 min (¥1.5)", "¥1.5 / 30 分钟 (约 $0.25)"),
      stars: "★★★★☆",
      enLabel: t2("Scan via Alipay (HelloBike)", "支付宝直接扫码（哈啰）"),
      best: t2("Best for 1–3 km short hops", "1–3 公里短途接驳神器"),
    },
  ];

  return (
    <div className="my-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((c, idx) => (
        <div key={idx} className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
          <div className="flex items-center gap-2 text-slate-900">
            <c.Icon className="h-4 w-4 text-slate-700" />
            <span className="text-sm font-bold">{tx(c.title, lang)}</span>
          </div>
          <div className="mt-2 text-sm font-extrabold text-slate-900">{tx(c.price, lang)}</div>
          <div className="mt-1.5 text-xs font-semibold text-amber-500">{c.stars}</div>
          <div className="mt-0.5 text-xs text-slate-600">{tx(c.enLabel, lang)}</div>
          <div className="mt-2.5 border-t border-slate-100 pt-2 text-[11px] font-medium text-slate-500">
            {tx(c.best, lang)}
          </div>
        </div>
      ))}
    </div>
  );
}

/* =========================================================================
 * 2. MAPS: iPhone vs Android Device Switcher Tabs
 * ========================================================================= */
export function MapDeviceSwitcher({ lang }: { lang: Lang }) {
  const [os, setOs] = useState<"ios" | "android">("ios");

  return (
    <div className="my-5 rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setOs("ios")}
          className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-bold transition ${
            os === "ios"
              ? "border-slate-900 bg-slate-900 text-white"
              : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
          }`}
        >
          🍎 {tx(t2("I use an iPhone (iOS)", "我用 iPhone（苹果手机）"), lang)}
        </button>
        <button
          type="button"
          onClick={() => setOs("android")}
          className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-bold transition ${
            os === "android"
              ? "border-slate-900 bg-slate-900 text-white"
              : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
          }`}
        >
          🤖 {tx(t2("I use Android (or want local reviews)", "我用安卓手机（或想看本地评价）"), lang)}
        </button>
      </div>

      {os === "ios" ? (
        <div className="mt-4 rounded-xl border border-emerald-200 border-l-4 border-l-emerald-600 bg-emerald-50/40 p-4 text-sm text-slate-700">
          <div className="font-bold text-slate-900">
            ✅ {tx(t2("Zero setup needed! Just use Apple Maps.", "零配置！直接用系统自带的 Apple Maps（苹果地图）。"), lang)}
          </div>
          <p className="mt-1.5 leading-relaxed">
            {tx(
              t2(
                "The moment your iPhone lands in Mainland China, Apple Maps automatically switches to accurate AutoNavi (AMap) data — with 100% English street names, exact subway exit letters (e.g. Exit B2), live bus arrivals, and zero GPS offset.",
                "你的 iPhone 一落地中国大陆，自带的苹果地图就会自动切换为高德（AMap）精准底层数据——全英文路名、精确到地铁几号出口（如 B2 口）、实时公交到站，完全零偏移。",
              ),
              lang,
            )}
          </p>
        </div>
      ) : (
        <div className="mt-4 grid gap-4 md:grid-cols-[1fr_230px] md:items-center">
          <div>
            <ol className="relative space-y-3 border-l-2 border-slate-200 pl-5 text-sm text-slate-700">
              {[
                t2("Install AMap Global (高德地图) from Google Play BEFORE flying to China.", "出发前在 Google Play 提前装好 AMap Global（高德地图国际版）。"),
                t2("Open Settings → Language → select English (100% English UI & voice).", "打开设置 → 语言 → 切换为 English（全英文界面与语音播报）。"),
                t2("Download offline maps for Beijing, Shanghai, Xi'an, etc. on hotel Wi-Fi.", "在 Wi-Fi 下提前下载北京、上海、西安等目标城市的离线地图。"),
                t2("Pro tip: paste the Chinese name from Trip.com for 100% pinpoint accuracy.", "进阶技巧：直接从 Trip.com 复制景点/酒店中文名粘贴搜索，最精准。"),
              ].map((step, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[29px] top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span>{tx(step, lang)}</span>
                </li>
              ))}
            </ol>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.autonavi.minimap"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-red-600"
              >
                {tx(t2("Download AMap on Google Play", "去 Google Play 下载高德地图"), lang)}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://apps.apple.com/app/id461703208"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                {tx(t2("App Store (iOS)", "App Store (iOS 版)"), lang)}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-900 p-3.5 text-xs text-white">
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span>AMap Global</span>
              <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-emerald-300">English ON</span>
            </div>
            <div className="mt-2.5 rounded-lg bg-slate-800 px-2.5 py-2 text-[11px] text-slate-200">
              🔍 The Bund / 外滩
            </div>
            <div className="mt-2 space-y-1.5 text-[11px]">
              <div className="rounded bg-blue-600/30 px-2 py-1 text-blue-200">🚇 Line 2 → East Nanjing Rd</div>
              <div className="rounded bg-slate-800 px-2 py-1 text-slate-300">🚪 Take Exit 2 · Walk 8 min (600 m / 0.37 mi)</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
 * 3. METRO: Two Ways to Ride (Side-by-Side Split Card)
 * ========================================================================= */
export function MetroSplitCard({ lang }: { lang: Lang }) {
  return (
    <div className="my-5 space-y-3">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
          <span className="rounded bg-slate-900 px-2 py-0.5 text-[11px] font-bold text-white">
            {tx(t2("OPTION A · Easiest (Tap & Go)", "方式 A · 最省事（直接拍卡）"), lang)}
          </span>
          <h3 className="mt-2 text-base font-bold text-slate-900">
            {tx(t2("Tap Contactless Visa / Mastercard / Amex / JCB", "直接拍境外 Visa / Mastercard / Amex / JCB"), lang)}
          </h3>
          <p className="mt-1.5 text-xs font-semibold text-slate-800">
            {tx(t2("Complete list of Chinese cities supporting direct foreign-card metro tap (2026):", "2026 年中国支持地铁闸机直接拍境外外卡的城市全清单："), lang)}
          </p>
          <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-slate-700">
            <li>
              <strong className="text-emerald-700">✅ {tx(t2("Beijing:", "北京："), lang)}</strong>{" "}
              {tx(t2("Full network (all subway lines + Capital & Daxing Airport Express)", "全路网所有地铁线 + 首都/大兴机场线（Visa/MC/JCB/Amex）"), lang)}
            </li>
            <li>
              <strong className="text-emerald-700">✅ {tx(t2("Shanghai:", "上海："), lang)}</strong>{" "}
              {tx(t2("Full network (all metro lines + Maglev ¥40 / ~$5.50 w/ flight ticket)", "全路网所有地铁线 + 磁悬浮（凭机票 ¥40 / 约 $5.50）"), lang)}
            </li>
            <li>
              <strong className="text-emerald-700">✅ {tx(t2("Guangzhou:", "广州："), lang)}</strong>{" "}
              {tx(t2("Full network (all metro lines, Visa/MC/Amex/JCB)", "全路网所有地铁线（支持 Visa/MC/Amex/JCB）"), lang)}
            </li>
            <li>
              <strong className="text-emerald-700">✅ {tx(t2("Shenzhen:", "深圳："), lang)}</strong>{" "}
              {tx(t2("Full network (all metro lines, Visa/MC/Amex/JCB)", "全路网所有地铁线（支持 Visa/MC/Amex/JCB）"), lang)}
            </li>
            <li>
              <strong className="text-emerald-700">✅ {tx(t2("Hong Kong (MTR):", "香港（港铁 MTR）："), lang)}</strong>{" "}
              {tx(t2("Full network at light-blue contactless gates (Visa/MC/Amex)", "全路网浅蓝色感应闸机（支持 Visa/MC/Amex）"), lang)}
            </li>
            <li className="text-slate-500">
              <strong>⚠️ {tx(t2("Other cities (Xi'an, Chengdu, Chongqing, Hangzhou, etc.):", "其他城市（西安、成都、重庆、杭州、苏州、昆明等）："), lang)}</strong>{" "}
              {tx(t2("Not yet network-wide at turnstiles → use Option B (Alipay Transport QR)!", "尚未全线普及拍外卡 → 直接用右侧方式 B（支付宝乘车码）100% 通用！"), lang)}
            </li>
          </ul>
          <p className="mt-2 rounded-md bg-slate-50 px-2.5 py-1.5 text-[11px] text-slate-600">
            {tx(
              t2("Rule: Always tap IN and tap OUT with the exact same physical card or Apple/Google Pay device.", "注意：进出站必须使用同一张实体卡或同一台手机 Apple Pay 拍闸，不可混用。"),
              lang,
            )}
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
          <span className="rounded bg-blue-600 px-2 py-0.5 text-[11px] font-bold text-white">
            {tx(t2("OPTION B · Works Everywhere", "方式 B · 全国通用"), lang)}
          </span>
          <h3 className="mt-2 text-base font-bold text-slate-900">
            {tx(t2("Alipay Transport QR Code", "支付宝「出行 / Transport」乘车码"), lang)}
          </h3>
          <ol className="mt-1.5 space-y-1 text-xs leading-relaxed text-slate-600">
            <li>1. {tx(t2("Open Alipay → tap [Transport] on the top bar.", "打开支付宝首页 → 点击顶部 [Transport / 出行]。"), lang)}</li>
            <li>2. {tx(t2("Select your city & tap [Get Now] (takes 10 seconds).", "选择当前城市 → 10 秒免费领通地铁乘车码。"), lang)}</li>
            <li>3. {tx(t2("Scan QR entering & exiting — typical ride is ¥2–10 (~$0.30–$1.40).", "进出站各扫一次自动扣费，单程一般 ¥2–10（约 $0.30–$1.40）。"), lang)}</li>
          </ol>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 border-l-4 border-l-sky-500 bg-white px-4 py-3 text-xs leading-relaxed text-slate-700">
        <strong className="text-slate-900">
          💡 {tx(t2("Mandatory Metro Bag Check (All Bags Must Go Through X-Ray):", "地铁必过安检提醒（所有随身行李均须过机）："), lang)}
        </strong>{" "}
        {tx(
          t2(
            "Before entering ANY Chinese subway station, you MUST place ALL bags — suitcases, backpacks, tote bags, handbags, and even small purses — onto the X-ray conveyor belt for a 10-second scan. Carrying water, tea, or coffee? Security will ask you to take a sip (or put the bottle on a liquid scanner). Aerosol sunscreen sprays over 150 ml (5 fl oz) and pocket knives are not allowed.",
            "进入中国任何地铁站前，都必须将您随身携带的所有行李——包括拉杆箱、双肩包、手提袋甚至小挎包——全部放到 X 光安检机传送带上接受约 10 秒钟的扫描检查。如携带水、茶或咖啡，安检员会请您当场喝一口（或将瓶子放进液体检测仪）；超过 150 ml（5 盎司）的防晒喷雾及刀具不可携带。",
          ),
          lang,
        )}
      </div>
    </div>
  );
}

/* =========================================================================
 * 4. DIDI IN ALIPAY: Compact Timeline + Right Visual UI Callout
 * ========================================================================= */
export function DidiTimelineMockup({ lang }: { lang: Lang }) {
  return (
    <div className="my-5 grid gap-5 rounded-xl border border-slate-200 bg-white p-5 md:grid-cols-[1fr_240px] md:items-center">
      <div>
        <ol className="relative space-y-3.5 border-l-2 border-slate-200 pl-5 text-sm text-slate-700">
          {[
            t2("Download Alipay & link your Visa/Mastercard before flying, then tap [DiDi Travel] right on the home screen (no separate app or +86 number needed).", "先下载支付宝并绑定外卡，打开支付宝首页 → 直接点 [DiDi Travel / 滴滴出行]（无需下载独立 App，也无需 +86 手机号）。"),
            t2("Type your destination in English (or paste the Chinese hotel address for 100% accuracy).", "用英文输入目的地（粘贴酒店中文地址定位最精准）。"),
            t2("Pick Express (~$3–$7 / ¥20–50) or Premier 6-Seater if you have 2+ large suitcases.", "选 Express 快车（市区约 $3–$7 / ¥20–50）；若带 2 件以上大行李箱请选 6 座车。"),
            t2("Match the license plate, give the last 4 digits of your phone number, and pay automatically via Alipay.", "核对车牌上车，报手机号后 4 位（司机发中文消息会自动翻译成英文），下车支付宝自动扣款。"),
          ].map((step, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[29px] top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[11px] font-bold text-white">
                {i + 1}
              </span>
              <span className="leading-relaxed">{tx(step, lang)}</span>
            </li>
          ))}
        </ol>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <a
            href="https://apps.apple.com/app/id333206289"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#1677FF] px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-[#0958D9]"
          >
            {tx(t2("Download Alipay (iOS)", "App Store 下载支付宝"), lang)}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.eg.android.AlipayGphone"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
          >
            {tx(t2("Download Alipay (Google Play)", "Google Play 下载支付宝"), lang)}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a
            href={`/${lang}/tools/payment-fee-calculator`}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            {tx(t2("Alipay Card Setup Tutorial →", "查看支付宝绑卡图解 →"), lang)}
          </a>
        </div>
      </div>

      <div className="rounded-2xl border-4 border-slate-900 bg-slate-50 p-3 text-xs shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <span className="font-bold text-slate-900">Alipay · DiDi</span>
          <span className="rounded bg-orange-100 px-1.5 py-0.5 text-[10px] font-bold text-orange-700">English UI</span>
        </div>
        <div className="mt-2.5 space-y-2">
          <div className="rounded-lg bg-white p-2 shadow-xs">
            <div className="text-[10px] text-slate-400">Pickup → Drop-off</div>
            <div className="font-semibold text-slate-900">📍 The Bund · ¥28 (~$3.90)</div>
          </div>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-2 text-[11px] text-blue-950">
            <div className="font-bold">💬 Auto-Translated Chat</div>
            <div className="mt-0.5 text-slate-600">“我在正门等你” → “I am waiting at the main entrance”</div>
          </div>
          <div className="rounded-lg bg-slate-900 py-1.5 text-center text-[11px] font-bold text-white">
            Confirm DiDi Express
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
 * 5. LIVE INTERACTIVE TAXI ADDRESS CARD (No dead "______" blanks!)
 * ========================================================================= */
export function LiveTaxiCard({ lang }: { lang: Lang }) {
  const [address, setAddress] = useState("上海外滩华尔道夫酒店（中山东一路 2 号）");
  const [fullscreen, setFullscreen] = useState(false);

  const presets = [
    { label: t2("Waldorf Bund (Shanghai)", "上海外滩华尔道夫"), val: "上海外滩华尔道夫酒店（中山东一路 2 号）" },
    { label: t2("Wangfujing (Beijing)", "北京王府井"), val: "北京王府井大街" },
    { label: t2("Chunxi Rd (Chengdu)", "成都春熙路"), val: "成都春熙路 IFS 国际金融中心" },
  ];

  return (
    <>
      <div className="my-5 rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm font-bold text-slate-900">
            🗣️ {tx(t2("Live Taxi Driver Show-Card (Type Your Address)", "实时出租车地址卡（输入酒店中文地址一键全屏）"), lang)}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {presets.map((p, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setAddress(p.val)}
                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 hover:bg-slate-100"
              >
                {tx(p.label, lang)}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder={tx(t2("Paste your hotel's Chinese name & address here...", "粘贴您的酒店中文名或地址..."), lang)}
            className="flex-1 rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-slate-900 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setFullscreen(true)}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            <Maximize2 className="h-4 w-4" />
            {tx(t2("Fullscreen for Driver", "全屏给司机看"), lang)}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setFullscreen(true)}
          className="mt-3 block w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-slate-400"
        >
          <div className="text-xs font-medium text-slate-500">
            {tx(t2("Tap card to enlarge full-screen:", "点击卡片全屏放大展示："), lang)}
          </div>
          <div className="mt-1.5 text-lg font-bold text-slate-900 sm:text-xl">
            师傅您好！请打表送我去这个地址：
          </div>
          <div className="mt-1 text-xl font-extrabold text-red-700 sm:text-2xl">
            {address || "（请输入目的地中文地址）"}
          </div>
        </button>
      </div>

      {fullscreen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 p-6 text-center text-white"
          onClick={() => setFullscreen(false)}
        >
          <button
            type="button"
            onClick={() => setFullscreen(false)}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="max-w-2xl space-y-6">
            <div className="text-2xl font-bold text-slate-300 sm:text-4xl">
              师傅您好！请打表送我去：
            </div>
            <div className="text-4xl font-extrabold leading-tight text-amber-300 sm:text-6xl">
              {address || "请打表计价，谢谢！"}
            </div>
            <div className="text-base text-slate-400">
              {tx(t2("Tap anywhere to close", "点击任意位置关闭"), lang)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* =========================================================================
 * 6. DOMESTIC FLIGHTS: SVG Visual CCC vs CE/FCC/UL Spotter Card
 * ========================================================================= */
export function CccVisualSpotter({ lang }: { lang: Lang }) {
  return (
    <div className="my-5 grid gap-4 md:grid-cols-2">
      {/* Allowed CCC */}
      <div className="rounded-xl border border-emerald-200 border-l-4 border-l-emerald-600 bg-white p-5 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-emerald-700">
          <CheckCircle2 className="h-4 w-4" />
          {tx(t2("ALLOWED on China Domestic Flights", "中国国内航班 · 准予放行"), lang)}
        </div>
        <div className="my-4 flex items-center justify-center rounded-lg bg-slate-50 py-5">
          <svg width="160" height="84" viewBox="0 0 160 84" aria-label="China CCC Certification Oval Mark">
            <ellipse cx="80" cy="42" rx="68" ry="34" fill="none" stroke="#0f172a" strokeWidth="5" />
            <text
              x="80"
              y="54"
              textAnchor="middle"
              fontFamily="Inter, Arial, sans-serif"
              fontWeight="900"
              fontSize="38"
              letterSpacing="3"
              fill="#0f172a"
            >
              CCC
            </text>
          </svg>
        </div>
        <p className="text-xs leading-relaxed text-slate-600">
          {tx(
            t2(
              "Must show a crisp, unscratched Chinese oval CCC mark printed on the casing AND rated capacity ≤ 100 Wh (~27,000 mAh). Buy a CCC Xiaomi bank in China for ¥79–¥129 (~$11–$18 USD).",
              "外壳必须印有清晰未磨损的椭圆形中国 CCC 标志，且额定能量 ≤ 100 Wh（约 27,000 mAh）。落地小米之家买一块带 CCC 的充电宝仅 ¥79–¥129（约 $11–$18 美元）。",
            ),
            lang,
          )}
        </p>
      </div>

      {/* Confiscated CE / FCC / UL */}
      <div className="rounded-xl border border-red-200 border-l-4 border-l-red-600 bg-white p-5 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-red-700">
          <ShieldAlert className="h-4 w-4" />
          {tx(t2("CONFISCATED at Domestic Security", "国内航段安检 · 直接没收"), lang)}
        </div>
        <div className="my-4 flex items-center justify-center gap-4 rounded-lg bg-red-50/50 py-5">
          <svg width="210" height="84" viewBox="0 0 210 84" aria-label="Overseas CE FC UL marks">
            <rect x="6" y="16" width="58" height="52" rx="10" fill="#fff" stroke="#dc2626" strokeWidth="2.5" />
            <text x="35" y="51" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontWeight="800" fontSize="24" fill="#991b1b">
              CE
            </text>
            <rect x="76" y="16" width="58" height="52" rx="10" fill="#fff" stroke="#dc2626" strokeWidth="2.5" />
            <text x="105" y="51" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontWeight="800" fontSize="24" fill="#991b1b">
              FC
            </text>
            <rect x="146" y="16" width="58" height="52" rx="10" fill="#fff" stroke="#dc2626" strokeWidth="2.5" />
            <text x="175" y="51" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontWeight="800" fontSize="24" fill="#991b1b">
              UL
            </text>
          </svg>
        </div>
        <p className="text-xs leading-relaxed text-slate-600">
          {tx(
            t2(
              "Anker, Belkin & Ugreen power banks bought on Amazon US/UK/AU only carry CE, FCC or UL marks. Fine on international arrivals & High-Speed Trains, STRICTLY BANNED on China domestic flights!",
              "在美国/英国/澳洲亚马逊购买的 Anker、Belkin、Ugreen 充电宝通常只有 CE、FCC 或 UL 标。国际入境航班和高铁可以带，但中国国内航班安检严格没收！",
            ),
            lang,
          )}
        </p>
      </div>
    </div>
  );
}

/* =========================================================================
 * 7. DOMESTIC FLIGHTS: Embedded Inline Power Bank Checker
 * ========================================================================= */
export function InlinePowerBankChecker({ lang }: { lang: Lang }) {
  const [mode, setMode] = useState<"domestic" | "intl" | "train">("domestic");
  const [ccc, setCcc] = useState<"yes" | "no" | "faded">("no");
  const [mah, setMah] = useState<number>(20000);

  const wh = Number(((mah * 3.7) / 1000).toFixed(1));

  let status: "pass" | "warn" | "ban" = "pass";
  let msg = t2(
    `Allowed in carry-on (${wh} Wh ≤ 100 Wh). Never put power banks in checked luggage.`,
    `准予随身登机（${wh} Wh ≤ 100 Wh）。切记不可托运！`,
  );

  if (ccc === "faded") {
    status = "ban";
    msg = t2(
      "CONFISCATED EVERYWHERE! Power banks with scratched or unreadable labels are rejected on ALL flights (domestic & international).",
      "所有航班当场没收！容量或认证标识磨损看不清的充电宝，国内国际航班一律禁止携带。",
    );
  } else if (wh > 160) {
    status = "ban";
    msg = t2(
      `BANNED (${wh} Wh > 160 Wh max aviation limit). Leave this power bank at home.`,
      `禁止携带（${wh} Wh 超过民航 160 Wh 绝对上限），请留在家里。`,
    );
  } else if (mode === "domestic" && ccc === "no") {
    status = "ban";
    msg = t2(
      `WILL BE CONFISCATED AT DOMESTIC SECURITY! Even though ${wh} Wh is under 100 Wh, domestic legs strictly reject non-CCC batteries. Ride High-Speed Rail instead, or buy a CCC Xiaomi bank in China for ~$14 USD (¥99).`,
      `国内航段安检会被没收！尽管 ${wh} Wh 未超 100 Wh，但国内航班严查 CCC 标。建议改坐高铁，或落地小米之家花 ¥99（约 $14 美元）买一块带 CCC 的充电宝。`,
    );
  } else if (wh > 100) {
    status = "warn";
    msg = t2(
      `REQUIRES AIRLINE APPROVAL (${wh} Wh is between 100–160 Wh). Must get written permission at the check-in counter (max 2 units).`,
      `需航司书面批准（${wh} Wh 介于 100–160 Wh），必须到值机柜台申请审批（限带 2 块），不建议携带。`,
    );
  }

  return (
    <div className="my-5 rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
      <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
        <Zap className="h-4 w-4 text-amber-500" />
        {tx(t2("Instant Power Bank Check: Will Security Confiscate Yours?", "充电宝 3 秒自检：安检会没收我的充电宝吗？"), lang)}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div>
          <label className="block text-xs font-semibold text-slate-600">
            1. {tx(t2("Travel Mode", "出行方式"), lang)}
          </label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value as "domestic" | "intl" | "train")}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-900"
          >
            <option value="domestic">{tx(t2("Domestic Flight (e.g. PVG → XIY)", "中国国内航班（如上海 → 西安）"), lang)}</option>
            <option value="intl">{tx(t2("Int'l Flight Only (e.g. NYC → PVG)", "仅坐国际航班（如纽约 → 上海）"), lang)}</option>
            <option value="train">{tx(t2("High-Speed Rail & Metro", "仅坐高铁与地铁"), lang)}</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600">
            2. {tx(t2("Has Oval “CCC” Mark?", "外壳有椭圆 CCC 标吗？"), lang)}
          </label>
          <select
            value={ccc}
            onChange={(e) => setCcc(e.target.value as "yes" | "no" | "faded")}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-900"
          >
            <option value="no">{tx(t2("No (bought overseas: CE/FCC/UL)", "没有（海外买，只有 CE/FCC/UL）"), lang)}</option>
            <option value="yes">{tx(t2("Yes (clear Chinese CCC mark)", "有清晰的椭圆 CCC 标"), lang)}</option>
            <option value="faded">{tx(t2("Faded / Scratched off", "字迹磨损看不清"), lang)}</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600">
            3. {tx(t2("Capacity (mAh)", "容量（mAh）"), lang)} → <span className="text-slate-900">{wh} Wh</span>
          </label>
          <input
            type="number"
            min={1000}
            max={60000}
            step={1000}
            value={mah}
            onChange={(e) => setMah(Math.max(0, Number(e.target.value)))}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-900"
          />
        </div>
      </div>

      <div
        className={`mt-4 rounded-lg border border-l-4 p-3.5 text-xs font-semibold leading-relaxed ${
          status === "ban"
            ? "border-red-200 border-l-red-600 bg-red-50/60 text-red-900"
            : status === "warn"
              ? "border-amber-200 border-l-amber-500 bg-amber-50/60 text-amber-900"
              : "border-emerald-200 border-l-emerald-600 bg-emerald-50/60 text-emerald-900"
        }`}
      >
        {status === "ban" ? "🚨 " : status === "warn" ? "⚠️ " : "✅ "}
        {tx(msg, lang)}
      </div>
    </div>
  );
}

/* =========================================================================
 * 8. DOMESTIC FLIGHTS: Budget Airline vs Full-Service Big Four Cards
 * ========================================================================= */
export function BudgetVsFullServiceCards({ lang }: { lang: Lang }) {
  return (
    <div className="my-5 grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-amber-200 border-l-4 border-l-amber-500 bg-white p-5 shadow-xs">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-amber-800">
          <AlertTriangle className="h-4 w-4" />
          {tx(t2("Avoid Surprise Gate Fees", "警惕值机柜台天价行李费"), lang)}
        </div>
        <h3 className="mt-1.5 text-base font-bold text-slate-900">
          {tx(t2("Budget Carriers: Spring (9C), 9 Air, China United, West Air", "低成本廉航：春秋 (9C)、九元、中联航、西部、祥鹏"), lang)}
        </h3>
        <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-700">
          <li>
            • <strong>{tx(t2("Checked Bag:", "免费托运："), lang)}</strong> 0 kg (0 lbs)
          </li>
          <li>
            • <strong>{tx(t2("Cabin Bag Limit:", "手提行李上限："), lang)}</strong>{" "}
            {tx(
              t2(
                '20 × 30 × 40 cm (7.8" × 11.8" × 15.7" — small laptop backpack ONLY! Standard 20–22" US/EU carry-on rollers WILL BE REJECTED at the gate!)',
                '20 × 30 × 40 cm（7.8" × 11.8" × 15.7" 英寸——仅够一个小双肩包！标准 20–22 寸登机拉杆箱一律拒登机并现场高价补托运！）',
              ),
              lang,
            )}
          </li>
          <li>
            • {tx(t2("Counter baggage add-on often costs more than the ticket itself.", "柜台现场补买 20 kg (44 lbs) 行李额往往比机票本身还贵。"), lang)}
          </li>
        </ul>
      </div>

      <div className="rounded-xl border border-emerald-200 border-l-4 border-l-emerald-600 bg-white p-5 shadow-xs">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-emerald-700">
          <CheckCircle2 className="h-4 w-4" />
          {tx(t2("Safest Choice for Foreigners", "外国游客最稳妥选择"), lang)}
        </div>
        <h3 className="mt-1.5 text-base font-bold text-slate-900">
          {tx(t2("“Big Four” Full-Service: Air China (CA), China Eastern (MU), China Southern (CZ), Hainan (HU)", "国内四大全服务航司：国航 (CA)、东航 (MU)、南航 (CZ)、海航 (HU)"), lang)}
        </h3>
        <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-700">
          <li>
            • <strong>{tx(t2("Free Checked Bag:", "免费托运："), lang)}</strong> 20 kg (44 lbs) {tx(t2("included in standard economy", "标准经济舱自带"), lang)}
          </li>
          <li>
            • <strong>{tx(t2("Carry-On Roller:", "登机箱："), lang)}</strong>{" "}
            {tx(t2('Standard 20–22" cabin roller bag allowed free', "标准 20–22 寸登机拉杆箱免费带上飞机"), lang)}
          </li>
          <li>
            • {tx(t2("Complimentary hot meal & smoother manual passport check-in.", "免费机上热餐，人工护照柜台服务更成熟。"), lang)}
          </li>
        </ul>
      </div>
    </div>
  );
}
