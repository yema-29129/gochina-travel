"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, ChevronDown, ChevronUp, ShieldAlert, Smartphone, Wifi } from "lucide-react";
import { Lang, t2, tx } from "@/lib/i18n";
import { AffiliateBox } from "@/components/AffiliateBox";

type PhoneStatus = "unlocked_esim" | "us_iphone_esim_only" | "physical_only" | "carrier_locked";

export default function EsimCalculator({ lang }: { lang: Lang }) {
  const [days, setDays] = useState<number>(10);
  const [phoneStatus, setPhoneStatus] = useState<PhoneStatus>("unlocked_esim");
  const [showCheckGuide, setShowCheckGuide] = useState<boolean>(false);
  const [socialVideo, setSocialVideo] = useState<boolean>(false);
  const [remoteWork, setRemoteWork] = useState<boolean>(false);
  const [needsPlus86, setNeedsPlus86] = useState<boolean>(false);

  const calc = useMemo(() => {
    const base = 0.6;
    const extra = (socialVideo ? 1.2 : 0) + (remoteWork ? 2.5 : 0);
    const dailyRaw = base + extra;
    const totalGb = Math.ceil(days * dailyRaw * 1.2);
    return { base, extra, dailyRaw, totalGb };
  }, [days, socialVideo, remoteWork]);

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-lg font-bold text-slate-900">
          {tx(t2("Estimate Your China Data & Connectivity Setup", "估算您的在华流量需求与最佳上网方案"), lang)}
        </h2>

        {/* 1. Days slider */}
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
              {tx(t2("How to check in 5 seconds", "5 秒自测方法"), lang)}
              {showCheckGuide ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            </button>
          </div>

          {showCheckGuide && (
            <div className="mt-2.5 rounded-lg border border-slate-200 bg-slate-50 p-3.5 text-xs leading-relaxed text-slate-700">
              <p className="font-semibold text-slate-900">
                {tx(t2("5-Second Phone Check:", "5 秒快速检查："), lang)}
              </p>
              <ol className="mt-1 list-decimal space-y-1 pl-4">
                <li>
                  {tx(
                    t2(
                      "Open your Phone dialer and dial *#06#. If an EID barcode/number appears on screen, your phone supports eSIM.",
                      "打开手机拨号盘输入 *#06#。如果屏幕出现 EID 条码/编号，说明您的手机支持 eSIM。",
                    ),
                    lang,
                  )}
                </li>
                <li>
                  {tx(
                    t2(
                      "Check Carrier Lock (iPhone: Settings → General → About → Carrier Lock). It must say 'No SIM restrictions'.",
                      "检查网络锁（iPhone：设置 → 通用 → 关于本机 → 运营商锁），必须显示“无 SIM 卡限制（No SIM restrictions）”。",
                    ),
                    lang,
                  )}
                </li>
              </ol>
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
            3. {tx(t2("Daily Internet Habits", "日常上网习惯（可叠加）"), lang)}
          </label>
          <div className="mt-2.5 space-y-2">
            <div className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50/70 px-3.5 py-2.5 text-sm">
              <div>
                <div className="font-semibold text-slate-900">
                  {tx(t2("Base: Maps + Alipay + WhatsApp Text + Guides (Always included)", "基础必选：地图导航 + 支付宝 + 聊天文字 + 查攻略"), lang)}
                </div>
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
                    t2("Remote Work / Heavy (Laptop hotspot, Zoom meetings, large uploads)", "远程办公重度档（热点给电脑开 Zoom 会议 / 传大文件）"),
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
            4. {tx(t2("Do you insist on having a +86 Chinese phone number (e.g. for Meituan delivery)?", "是否执着于拥有 +86 中国手机号（例如自己注册美团点外卖到房间）？"), lang)}
          </label>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setNeedsPlus86(false)}
              className={`rounded-lg border px-3.5 py-2.5 text-left text-sm font-semibold transition ${
                !needsPlus86 ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {tx(t2("No, restaurants & hotel help are fine", "不需要，堂食或请酒店前台帮忙即可"), lang)}
            </button>
            <button
              type="button"
              onClick={() => setNeedsPlus86(true)}
              className={`rounded-lg border px-3.5 py-2.5 text-left text-sm font-semibold transition ${
                needsPlus86 ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {tx(t2("Yes, I want a +86 Chinese number", "需要，我想要一个 +86 中国手机号"), lang)}
            </button>
          </div>
        </div>
      </div>

      {/* Data Estimate Summary */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="text-xs font-medium text-slate-500">
            {tx(t2("Daily Usage Rate", "每日预估消耗"), lang)}
          </div>
          <div className="mt-1 text-2xl font-bold text-slate-900">
            {calc.dailyRaw.toFixed(1)} GB/{tx(t2("day", "天"), lang)}
          </div>
          <div className="mt-1 text-xs text-slate-500">
            0.6 + {calc.extra.toFixed(1)} GB
          </div>
        </div>

        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <div className="text-xs font-medium text-red-700">
            {tx(t2("Recommended Data Pack (+20% Buffer)", "建议购买总流量包（含 20% 冗余）"), lang)}
          </div>
          <div className="mt-1 text-2xl font-bold text-red-700">{calc.totalGb} GB</div>
          <div className="mt-1 text-xs text-red-800">
            ⌈ {days} × {calc.dailyRaw.toFixed(1)} × 1.2 ⌉
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="text-xs font-medium text-slate-500">
            {tx(t2("Suggested Plan Tier", "建议套餐档位"), lang)}
          </div>
          <div className="mt-1 text-xl font-bold text-slate-900">
            {calc.totalGb <= 20
              ? tx(t2("Fixed Data Pack", "定量流量包（更省钱）"), lang)
              : tx(t2("Unlimited Daily eSIM", "不限流量日包（Unlimited）"), lang)}
          </div>
          <div className="mt-1 text-xs text-slate-500">
            {calc.totalGb <= 20
              ? tx(t2("≤ 20 GB total — fixed GB plans cost less", "总需 ≤ 20 GB，定量包性价比更高"), lang)
              : tx(t2("> 20 GB total — unlimited daily avoids top-ups", "总需 > 20 GB，不限流量日包更省心"), lang)}
          </div>
        </div>
      </div>

      {/* 4 Recommendation Branches */}
      {phoneStatus === "us_iphone_esim_only" ? (
        <div className="rounded-xl border border-red-300 bg-red-50 p-5 text-red-950">
          <div className="flex items-start gap-3">
            <ShieldAlert className="mt-0.5 h-6 w-6 shrink-0 text-red-600" />
            <div className="text-sm">
              <div className="text-base font-bold text-red-800">
                {tx(
                  t2(
                    "🚨 Mandatory Alert for US iPhone 14 / 15 / 16 / 17 Users",
                    "🚨 美版 iPhone 14 / 15 / 16 / 17 强制标红提醒",
                  ),
                  lang,
                )}
              </div>
              <p className="mt-1">
                {tx(
                  t2(
                    "Your US iPhone has NO physical SIM card slot — you CANNOT buy a China Unicom or China Mobile physical SIM card at the airport (and Chinese carriers do not issue tourist local eSIMs to short-term foreign visitors). Your ONLY option is to install an international roaming eSIM BEFORE boarding!",
                    "您的美版 iPhone 机身根本没有实体 SIM 卡插槽，绝对无法在机场购买中国联通/移动实体电话卡（中国运营商目前不对短期外国游客开放旅游版本地 eSIM）！您唯一的选择是在登机前提前购买并安装国际漫游 eSIM！",
                  ),
                  lang,
                )}
              </p>
              <p className="mt-2 font-semibold text-red-900">
                {tx(
                  t2(
                    `Recommended size: ${calc.totalGb} GB (${calc.totalGb <= 20 ? "Fixed GB eSIM" : "Unlimited Data eSIM"}) routed via Hong Kong / Singapore — Google, WhatsApp & Instagram work automatically with no VPN needed.`,
                    `建议购买规格：${calc.totalGb} GB（${calc.totalGb <= 20 ? "定量套餐包" : "不限流量日包"}）香港/新加坡路由漫游 eSIM，免装 VPN 自动访问 Google、WhatsApp 与 Instagram。`,
                  ),
                  lang,
                )}
              </p>
            </div>
          </div>
        </div>
      ) : phoneStatus === "carrier_locked" ? (
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-5 text-amber-950">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
            <div className="text-sm">
              <div className="text-base font-bold">
                {tx(t2("Carrier-Locked Phone: Action Required Before Flying", "合约锁卡手机：出发前必须先处理"), lang)}
              </div>
              <p className="mt-1">
                {tx(
                  t2(
                    "A carrier-locked phone can NEITHER install a third-party travel eSIM NOR accept a Chinese physical SIM card! Contact your carrier to unlock it before departure — otherwise, rent a portable roaming Wi-Fi hotspot at the airport or activate your home carrier's international daily roaming pass.",
                    "有运营商锁的手机既装不了第三方旅游 eSIM，也插不了中国本地电话卡！请出发前联系运营商解锁，或者在机场租一台随身漫游 Wi-Fi 蛋，或开通本国运营商的国际漫游日包。",
                  ),
                  lang,
                )}
              </p>
            </div>
          </div>
        </div>
      ) : needsPlus86 ? (
        <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-5 text-emerald-950">
          <div className="flex items-start gap-3">
            <Smartphone className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600" />
            <div className="text-sm">
              <div className="text-base font-bold">
                {tx(
                  t2(
                    "Best Setup: Power Dual-SIM Combo (+86 Local SIM + Roaming eSIM)",
                    "推荐方案：王炸双卡组合（+86 本地实体卡 + 漫游 eSIM）",
                  ),
                  lang,
                )}
              </div>
              <p className="mt-1">
                {phoneStatus === "unlocked_esim"
                  ? tx(
                      t2(
                        "Buy a ¥100 China Unicom physical SIM at the airport (gives you a +86 number for Meituan/apps + huge local data) AND add a small 5 GB HK/Singapore roaming eSIM strictly for Google, WhatsApp & Instagram — zero VPN disconnect headaches!",
                        "在机场办一张 100 元中国联通实体卡（拿 +86 号码 + 海量国内流量），再配一张 5 GB 小容量香港/新加坡漫游 eSIM 专门用于免翻墙发消息和查 Google，彻底告别 VPN 断连焦虑！",
                      ),
                      lang,
                    )
                  : tx(
                      t2(
                        "Since your phone only has a physical SIM slot, buy a ¥100 China Unicom physical SIM at the airport for a +86 number and fast local data, and install a China-tested VPN app BEFORE landing (or carry a roaming pocket Wi-Fi).",
                        "您的手机仅支持实体 SIM 卡，建议在机场办一张 100 元中国联通实体卡获取 +86 号码和高速国内流量，并在落地前提前安装好可用的 VPN 应用（或随身携带漫游 Wi-Fi 蛋）。",
                      ),
                      lang,
                    )}
              </p>
            </div>
          </div>
        </div>
      ) : phoneStatus === "physical_only" ? (
        <div className="rounded-xl border border-slate-300 bg-slate-50 p-5 text-slate-900">
          <div className="flex items-start gap-3">
            <Wifi className="mt-0.5 h-6 w-6 shrink-0 text-slate-700" />
            <div className="text-sm">
              <div className="text-base font-bold">
                {tx(
                  t2(
                    `Physical SIM Only: Rent Roaming Wi-Fi or Local SIM + Pre-Installed VPN (${calc.totalGb} GB)`,
                    `仅实体卡槽方案：机场漫游 Wi-Fi 蛋或联通实体卡 + 行前装好 VPN（预估 ${calc.totalGb} GB）`,
                  ),
                  lang,
                )}
              </div>
              <p className="mt-1 text-slate-700">
                {tx(
                  t2(
                    "Your phone cannot install an eSIM. Order a Hong Kong roaming physical SIM before your trip (bypasses the firewall automatically), rent a roaming pocket Wi-Fi, or buy a China Unicom SIM at the airport paired with a VPN installed before arrival.",
                    "您的手机不支持 eSIM。建议出发前网购一张香港漫游实体电话卡（自动免翻墙），或租用漫游随身 Wi-Fi，或在机场买中国联通实体卡并提前在境外装好 VPN。",
                  ),
                  lang,
                )}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-5 text-emerald-950">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600" />
            <div className="text-sm">
              <div className="text-base font-bold">
                {tx(
                  t2(
                    `Best Setup (85% of Visitors): Plan A — HK/Singapore Roaming eSIM (${calc.totalGb} GB)`,
                    `最佳推荐（85% 游客首选）：方案 A — 香港/新加坡路由漫游 eSIM（约 ${calc.totalGb} GB）`,
                  ),
                  lang,
                )}
              </div>
              <p className="mt-1">
                {calc.totalGb <= 20
                  ? tx(
                      t2(
                        `Your estimated need is ${calc.totalGb} GB (≤ 20 GB). Buy a fixed-data Hong Kong/Singapore roaming eSIM (e.g. 10–20 GB) — it is cheaper than daily unlimited plans and automatically bypasses the firewall for Google, WhatsApp, Instagram & Gmail with no VPN required.`,
                        `您的预估总需求为 ${calc.totalGb} GB（≤ 20 GB）。推荐购买香港/新加坡路由的定量流量漫游 eSIM（更便宜），免装 VPN 自动畅用 Google、WhatsApp、Instagram 与 Gmail。`,
                      ),
                      lang,
                    )
                  : tx(
                      t2(
                        `Your estimated need is ${calc.totalGb} GB (> 20 GB). Choose an Unlimited Data daily roaming eSIM routed via Hong Kong/Singapore so you never run out during hotspot or video use — no VPN required.`,
                        `您的预估总需求为 ${calc.totalGb} GB（> 20 GB）。推荐购买香港/新加坡路由的不限流量日包（Unlimited Data eSIM），免装 VPN 且刷视频/开热点不焦虑。`,
                      ),
                      lang,
                    )}
              </p>
            </div>
          </div>
        </div>
      )}

      <AffiliateBox id="esim" lang={lang} />
    </div>
  );
}
