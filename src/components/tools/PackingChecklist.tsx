"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Printer, RotateCcw, Sparkles } from "lucide-react";
import { Lang, L, t2, tx } from "@/lib/i18n";

type PhoneOS = "ios" | "android";
type Region = "north" | "south" | "both";
type TagId = "female" | "kids" | "mobility" | "us110v";

interface CheckItem {
  id: string;
  badge?: L;
  title: L;
  detail: L;
  dynamic?: boolean;
  tone?: "default" | "warn" | "info";
}

const MONTHS: { num: number; en: string; zh: string }[] = [
  { num: 1, en: "Jan", zh: "1 月" },
  { num: 2, en: "Feb", zh: "2 月" },
  { num: 3, en: "Mar", zh: "3 月" },
  { num: 4, en: "Apr", zh: "4 月" },
  { num: 5, en: "May", zh: "5 月" },
  { num: 6, en: "Jun", zh: "6 月" },
  { num: 7, en: "Jul", zh: "7 月" },
  { num: 8, en: "Aug", zh: "8 月" },
  { num: 9, en: "Sep", zh: "9 月" },
  { num: 10, en: "Oct", zh: "10 月" },
  { num: 11, en: "Nov", zh: "11 月" },
  { num: 12, en: "Dec", zh: "12 月" },
];

const BASE_ITEMS: CheckItem[] = [
  {
    id: "base_pay",
    title: t2("Set up Alipay & WeChat Pay and link foreign cards", "绑定支付宝与微信支付（提前完成外卡认证）"),
    detail: t2(
      "Verify your passport inside Alipay & WeChat Pay at home while you can still receive SMS OTP codes from your bank.",
      "在出发前家里能正常收银行短信验证码时，完成支付宝和微信的护照实名与外卡绑定。",
    ),
  },
  {
    id: "base_esim",
    title: t2("Install China roaming eSIM before boarding", "登机前在家安装好中国漫游 eSIM"),
    detail: t2(
      "HK/Singapore-routed roaming eSIMs let Google, WhatsApp & Instagram work immediately on landing with no VPN required.",
      "香港/新加坡路由的漫游 eSIM 落地即开，免装 VPN 直接使用 Google、WhatsApp 和 Instagram。",
    ),
  },
  {
    id: "base_arrival_card",
    title: t2("Fill out Online Arrival Card & save hotel / onward ticket PDFs", "填写网上入境卡，保存酒店与离境机票/车票确认单"),
    detail: t2(
      "Keep offline screenshots of your hotel's Chinese name/address and your confirmed onward ticket for immigration.",
      "离线保存酒店中文名与地址截图，以及确认的离境机票或高铁票，方便入境边检与打车。",
    ),
  },
  {
    id: "base_cash",
    title: t2("Carry ~¥300 RMB in small cash", "准备约 ¥300 人民币小额零钱现金"),
    detail: t2(
      "Useful backup for street vendors using personal QR codes (which reject foreign cards) or small rural shops.",
      "用于偶遇只收个人收款码（外卡扫不了）的路边摊或小店应急备用。",
    ),
  },
  {
    id: "base_tissues",
    title: t2("Pack pocket tissues & wet wipes", "随身携带抽纸/手帕纸与湿巾"),
    detail: t2(
      "Many public restrooms in parks, older restaurants, and train stations do not provide toilet paper.",
      "不少公园、老餐馆和公共卫生间不提供厕纸，随身带一包抽纸非常实用。",
    ),
  },
];

const STORAGE_KEY = "gochina_packing_checklist_v1";

interface SavedState {
  os: PhoneOS;
  month: number;
  region: Region;
  tags: TagId[];
  checked: Record<string, boolean>;
}

export default function PackingChecklist({ lang }: { lang: Lang }) {
  const [os, setOs] = useState<PhoneOS>("ios");
  const [month, setMonth] = useState<number>(10);
  const [region, setRegion] = useState<Region>("both");
  const [tags, setTags] = useState<TagId[]>([]);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<SavedState>;
        if (parsed.os === "ios" || parsed.os === "android") setOs(parsed.os);
        if (typeof parsed.month === "number" && parsed.month >= 1 && parsed.month <= 12) setMonth(parsed.month);
        if (parsed.region === "north" || parsed.region === "south" || parsed.region === "both") setRegion(parsed.region);
        if (Array.isArray(parsed.tags)) setTags(parsed.tags);
        if (parsed.checked && typeof parsed.checked === "object") setChecked(parsed.checked);
      }
    } catch {
      // Ignore storage read errors
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      const payload: SavedState = { os, month, region, tags, checked };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Ignore storage write errors
    }
  }, [os, month, region, tags, checked, hydrated]);

  const toggleTag = (t: TagId) => {
    setTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
  };

  const toggleItem = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const items: CheckItem[] = useMemo(() => {
    const dyn: CheckItem[] = [];

    if (os === "android") {
      dyn.push({
        id: "dyn_android",
        dynamic: true,
        tone: "info",
        badge: t2("Android Must-Have", "安卓专属必装"),
        title: t2("Install AMap Global (English) + Alipay & WeChat BEFORE landing", "出发前装好 AMap Global（高德地图英文版）+ 支付宝与微信"),
        detail: t2(
          "Android phones do not have Apple Maps. Install AMap Global and update Alipay/WeChat before flying — once in China without roaming, you cannot connect to the Google Play Store!",
          "安卓手机没有 Apple Maps，出发前必须装好 AMap Global（高德地图英文版），并把支付宝和微信下载更新好（进入中国后若未开漫游将连不上 Google Play 商店！）。",
        ),
      });
    }

    if (tags.includes("us110v")) {
      dyn.push({
        id: "dyn_us110v",
        dynamic: true,
        tone: "warn",
        badge: t2("⚡ Burnout Warning", "⚡ 烧毁预警"),
        title: t2("Leave 110V single-voltage US/Japan hair tools at home!", "不要带美国/日本 110V 单电压卷发棒、直发夹或吹风机！"),
        detail: t2(
          "China uses 220V outlets. Plugging a 110V-only curling iron, straightener, or US hair dryer into a Chinese wall socket will cause it to smoke and burn out instantly.",
          "中国电压为 220V。把美国/日本买的 110V 单电压卷发棒、直发夹或美版吹风机插上中国 220V 插座会瞬间冒烟烧毁！",
        ),
      });
    }

    if (tags.includes("female")) {
      dyn.push({
        id: "dyn_female",
        dynamic: true,
        tone: "info",
        badge: t2("Female Essentials", "女性必带物资"),
        title: t2("Pack applicator tampons & Western stick deodorant", "托运行李带足导管式卫生棉条与欧美固体止汗膏"),
        detail: t2(
          "Chinese convenience stores and supermarkets rarely carry applicator tampons or Western-style solid stick deodorant. Pack enough for your entire trip.",
          "中国便利店和超市几乎买不到导管式卫生棉条（Tampons）以及欧美固体止汗香体膏（Stick Deodorant），请务必在托运行李中带足全程用量！",
        ),
      });
    }

    if (tags.includes("kids")) {
      dyn.push({
        id: "dyn_kids",
        dynamic: true,
        tone: "info",
        badge: t2("Family & Kids (< 14)", "亲子高铁与婴儿车提醒"),
        title: t2("Register free kids (< 6) in 12306 & pick stroller-friendly sights", "12306 申报免票儿童 + 选缆车/平路景点"),
        detail: t2(
          "1) For free children under 6 on high-speed rail, after buying the adult ticket you MUST tap 'Add Free Child Passenger' in 12306 and enter the child's passport. 2) The Forbidden City has many steps (use East/West moat flat paths); choose Mutianyu Great Wall (enclosed cable car) over steep Jiankou/Simatai.",
          "① 未满 6 岁免票儿童坐高铁，买完大人票后必须在 12306 订单里点「添加免费乘车儿童申报」录入孩子护照；② 故宫台阶极多但有东/西筒子河平路路线，长城推荐选有全封闭缆车的慕田峪而非陡峭的箭扣/司马台！",
        ),
      });
    }

    if (tags.includes("mobility")) {
      dyn.push({
        id: "dyn_mobility",
        dynamic: true,
        tone: "info",
        badge: t2("Mobility / Elderly", "膝盖友好提示"),
        title: t2("Use Didi spacious cars & look for Accessible / Third Restrooms", "打车用滴滴宽敞专车 + 认准无障碍/第三卫生间"),
        detail: t2(
          "Older city districts often have pedestrian overpasses and underpasses with stairs — book spacious Didi cars for door-to-door hops. Look for the wheelchair sign ('Accessible / Third Restroom' 无障碍/第三卫生间) to guarantee a Western sit-down toilet and grab bars.",
          "中国老城区过街多天桥和地下通道，打车用滴滴选宽敞专车更省力；上公共厕所请认准带轮椅标志的「无障碍/第三卫生间」，确保有西式坐便马桶和扶手。",
        ),
      });
    }

    if ((month === 12 || month === 1 || month === 2) && (region === "south" || region === "both")) {
      dyn.push({
        id: "dyn_winter_south",
        dynamic: true,
        tone: "warn",
        badge: t2("❄️ Damp Cold Alert", "❄️ 南方湿冷预警"),
        title: t2("Pack thermal base layers — South China has NO central heating", "带保暖内衣与厚袜子（南方室内无集中暖气！）"),
        detail: t2(
          "In Dec–Feb, Shanghai, Hangzhou, Chengdu & Guilin do NOT have central indoor heating! Pack thermal base layers and thick socks, and confirm your hotel has heating air-conditioning.",
          "12 月至 2 月期间，上海、杭州、成都、桂林冬季室内没有集中暖气！请带保暖内衣（Thermal Base Layers）和厚袜子，订酒店时确认房间配有制热空调。",
        ),
      });
    }

    if (month === 7 || month === 8) {
      dyn.push({
        id: "dyn_summer",
        dynamic: true,
        tone: "warn",
        badge: t2("☀️ Extreme Heat Alert", "☀️ 防暑装备提醒"),
        title: t2("Pack handheld fan, UV umbrella & lotion sunscreen (no >150ml spray!)", "带手持小风扇、晴雨伞与防晒霜乳液（喷雾超 150ml 禁上高铁！）"),
        detail: t2(
          "Yangtze River cities and Xi'an reach 38°C–40°C in July–August. Bring a mini fan and UV/rain umbrella. Note: aerosol sunscreen sprays over 150 ml are confiscated at high-speed train and subway security — pack cream/lotion instead.",
          "7–8 月长江流域与西安高达 38°C~40°C，随身带小手持风扇和晴雨两用防晒伞。注意：防晒喷雾超过 150 ml 上不了高铁和地铁安检，请带防晒霜乳液！",
        ),
      });
    }

    return [...dyn, ...BASE_ITEMS];
  }, [os, month, region, tags]);

  const completedCount = items.filter((item) => checked[item.id]).length;
  const pct = items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Profile Selectors */}
      <div className="no-print rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-lg font-bold text-slate-900">
          {tx(t2("Personalize Your 72-Hour Pre-Flight Checklist", "定制您的行前 72 小时专属准备清单"), lang)}
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          {tx(
            t2(
              "Select your phone, travel month, region, and traveler tags to dynamically inject critical alerts.",
              "选择手机系统、旅行月份、目的地南北区域与同行人群标签，系统将动态插入专属救命提醒。",
            ),
            lang,
          )}
        </p>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {/* OS */}
          <div>
            <label className="block text-sm font-semibold text-slate-800">
              {tx(t2("Phone System", "手机系统"), lang)}
            </label>
            <div className="mt-1.5 grid grid-cols-2 gap-2">
              {(
                [
                  { id: "ios", label: "iOS (iPhone)" },
                  { id: "android", label: "Android" },
                ] as const
              ).map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => setOs(o.id)}
                  className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                    os === o.id
                      ? "border-red-600 bg-red-600 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          {/* Month */}
          <div>
            <label className="block text-sm font-semibold text-slate-800">
              {tx(t2("Travel Month", "旅行月份"), lang)}
            </label>
            <select
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-red-500 focus:outline-none"
            >
              {MONTHS.map((m) => (
                <option key={m.num} value={m.num}>
                  {lang === "zh" ? `${m.zh} (${m.en})` : `${m.en} (${m.num})`}
                </option>
              ))}
            </select>
          </div>

          {/* Region */}
          <div>
            <label className="block text-sm font-semibold text-slate-800">
              {tx(t2("Destination Region", "主要游览区域"), lang)}
            </label>
            <div className="mt-1.5 grid grid-cols-3 gap-1.5">
              {(
                [
                  { id: "north", label: t2("North", "北方") },
                  { id: "south", label: t2("South", "南方") },
                  { id: "both", label: t2("Both", "南北都有") },
                ] as const
              ).map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRegion(r.id)}
                  className={`rounded-lg border px-2 py-2 text-xs font-semibold transition ${
                    region === r.id
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {tx(r.label, lang)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-5 border-t border-slate-100 pt-4">
          <label className="block text-sm font-semibold text-slate-800">
            {tx(t2("Traveler & Gear Tags (Select all that apply)", "同行人群与随身电器标签（可多选）"), lang)}
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {(
              [
                { id: "female", label: t2("Female Traveler", "女性游客") },
                { id: "kids", label: t2("With Kids (< 14 yrs)", "带娃亲子（< 14 岁）") },
                { id: "mobility", label: t2("Mobility / Elderly", "长辈 / 膝盖不便") },
                { id: "us110v", label: t2("US 110V Hair Tools", "携带美版/日版 110V 卷发棒/吹风机") },
              ] as const
            ).map((tag) => {
              const active = tags.includes(tag.id);
              return (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => toggleTag(tag.id)}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition sm:text-sm ${
                    active
                      ? "border-red-600 bg-red-50 text-red-700"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {active ? "✓ " : "+ "}
                  {tx(tag.label, lang)}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Progress Bar + Actions */}
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-base font-bold text-slate-900">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              {tx(t2("Your Packing Progress", "行前准备进度"), lang)}: {completedCount} / {items.length} ({pct}%)
            </div>
            <p className="mt-0.5 text-xs text-slate-500">
              {tx(t2("Progress is saved automatically in this browser.", "勾选进度已自动保存在本浏览器中。"), lang)}
            </p>
          </div>
          <div className="no-print flex items-center gap-2">
            <button
              type="button"
              onClick={() => setChecked({})}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              {tx(t2("Reset Checks", "重置勾选"), lang)}
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white hover:bg-slate-700"
            >
              <Printer className="h-3.5 w-3.5" />
              {tx(t2("Print Checklist", "打印清单"), lang)}
            </button>
          </div>
        </div>

        <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-emerald-600 transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Checklist Items */}
      <div className="space-y-2.5">
        {items.map((item) => {
          const isDone = Boolean(checked[item.id]);
          const cardClass = isDone
            ? "border-slate-200 bg-slate-50 opacity-75"
            : item.tone === "warn"
              ? "border-amber-300 bg-amber-50/70"
              : item.tone === "info"
                ? "border-red-200 bg-red-50/40"
                : "border-slate-200 bg-white";

          return (
            <label
              key={item.id}
              className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${cardClass}`}
            >
              <input
                type="checkbox"
                checked={isDone}
                onChange={() => toggleItem(item.id)}
                className="mt-1 h-4 w-4 shrink-0 accent-red-600"
              />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  {item.dynamic && item.badge && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-red-600 px-2 py-0.5 text-[11px] font-bold text-white">
                      <Sparkles className="h-3 w-3" />
                      {tx(item.badge, lang)}
                    </span>
                  )}
                  <span
                    className={`text-sm font-bold ${isDone ? "text-slate-500 line-through" : "text-slate-900"}`}
                  >
                    {tx(item.title, lang)}
                  </span>
                </div>
                <p className={`mt-1 text-xs leading-relaxed ${isDone ? "text-slate-400" : "text-slate-600"}`}>
                  {tx(item.detail, lang)}
                </p>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
