"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, CreditCard, Maximize2, ShieldAlert } from "lucide-react";
import { Lang, t2, tx } from "@/lib/i18n";
import { AffiliateBox } from "@/components/AffiliateBox";
import { ShowCard, useShowCard } from "@/components/ShowCard";
import { HelpContactCard } from "@/components/HelpContactCard";
import PaymentSetupTutorial from "./PaymentSetupTutorial";

interface Currency {
  code: string;
  symbol: string;
  defaultRate: number; // CNY per 1 unit of home currency
  en: string;
  zh: string;
}

const CURRENCIES: Currency[] = [
  { code: "USD", symbol: "$", defaultRate: 7.2, en: "US Dollar (USD)", zh: "美元 (USD)" },
  { code: "EUR", symbol: "€", defaultRate: 7.8, en: "Euro (EUR)", zh: "欧元 (EUR)" },
  { code: "GBP", symbol: "£", defaultRate: 9.15, en: "British Pound (GBP)", zh: "英镑 (GBP)" },
  { code: "AUD", symbol: "A$", defaultRate: 4.75, en: "Australian Dollar (AUD)", zh: "澳元 (AUD)" },
  { code: "CAD", symbol: "C$", defaultRate: 5.25, en: "Canadian Dollar (CAD)", zh: "加元 (CAD)" },
  { code: "JPY", symbol: "¥", defaultRate: 0.048, en: "Japanese Yen (JPY)", zh: "日元 (JPY)" },
  { code: "KRW", symbol: "₩", defaultRate: 0.0052, en: "South Korean Won (KRW)", zh: "韩元 (KRW)" },
];

const PRESETS = [
  { amount: 18, label: t2("¥18 Metro / Bike", "¥18 地铁/单车") },
  { amount: 145, label: t2("¥145 Dim Sum", "¥145 早茶") },
  { amount: 200, label: t2("¥200 Exact Limit", "¥200 刚好免手续费") },
  { amount: 205, label: t2("¥205 Hotpot (Trap!)", "¥205 火锅（触发坑！）") },
  { amount: 553, label: t2("¥553 Bullet Train", "¥553 高铁票") },
  { amount: 1500, label: t2("¥1,500 Hotel", "¥1,500 酒店房费") },
];

type FtfMode = "zero" | "standard" | "custom";

function computeSplit(p: number): number[] {
  const k = Math.ceil(p / 200);
  if (k <= 1) return [Number(p.toFixed(2))];
  if (k === 2) {
    const p1 = p <= 395 ? 195 : 198;
    const p2 = Number((p - p1).toFixed(2));
    return [p1, p2];
  }
  // k === 3 (400 < p <= 600)
  const p1 = p <= 585 ? 195 : 198;
  const p2 = p <= 585 ? 193 : 197;
  const p3 = Number((p - p1 - p2).toFixed(2));
  return [p1, p2, p3];
}

export default function PaymentFeeCalculator({ lang }: { lang: Lang }) {
  const [cny, setCny] = useState<number>(260);
  const [currencyCode, setCurrencyCode] = useState<string>("USD");
  const [rate, setRate] = useState<number>(7.2);
  const [ftfMode, setFtfMode] = useState<FtfMode>("standard");
  const [customFtf, setCustomFtf] = useState<number>(2.5);
  const showCard = useShowCard();

  const currency = CURRENCIES.find((c) => c.code === currencyCode) ?? CURRENCIES[0];

  const handleCurrencyChange = (code: string) => {
    setCurrencyCode(code);
    const next = CURRENCIES.find((c) => c.code === code);
    if (next) setRate(next.defaultRate);
  };

  const bankFtfPercent = ftfMode === "zero" ? 0 : ftfMode === "standard" ? 3.0 : customFtf;
  const rBank = bankFtfPercent / 100;

  const calc = useMemo(() => {
    const P = Math.max(0, Number.isFinite(cny) ? cny : 0);
    const E = rate > 0 ? rate : 7.2;
    const rApp = P > 200 ? 0.03 : 0;
    const tApp = P * (1 + rApp);
    const tFinal = tApp * (1 + rBank);
    const tHome = tFinal / E;
    const fWaste = tFinal - P;
    const wastePct = P > 0 ? (fWaste / P) * 100 : 0;
    const appFeeCny = P * rApp;
    const bankFeeCny = tFinal - tApp;
    const dccExtraCny = P * 0.07;
    const splitParts = P > 200 && P <= 600 ? computeSplit(P) : [];
    const k = P > 200 ? Math.ceil(P / 200) : 1;

    return { P, E, rApp, tApp, tFinal, tHome, fWaste, wastePct, appFeeCny, bankFeeCny, dccExtraCny, splitParts, k };
  }, [cny, rate, rBank]);

  const homeEquivalentInput = calc.E > 0 ? Number((calc.P / calc.E).toFixed(2)) : 0;

  const openSplitCard = () => {
    const amountsZh = calc.splitParts.map((x) => `${x}元`).join(" + ");
    showCard.show({
      zh: `您好！外国银行卡单笔超过 200 元会被收 3% 手续费，请问可以帮我拆成 ${calc.k} 笔扫码付款吗？（例如：${amountsZh}）非常感谢！`,
      pinyin: `Nín hǎo! Wàiguó yínhángkǎ dānbǐ chāoguò 200 yuán huì bèi shōu 3% shǒuxùfèi, qǐngwèn kěyǐ bāng wǒ chāi chéng ${calc.k} bǐ sǎomǎ fùkuǎn ma? Fēicháng gǎnxiè!`,
      meaning: tx(
        t2(
          `Hello! Foreign cards are charged a 3% fee for single payments over ¥200. Could you please split this into ${calc.k} QR scans (${calc.splitParts.map((x) => `¥${x}`).join(" + ")})? Thank you very much!`,
          `您好！外国银行卡单笔超过 200 元会被收 3% 手续费，请问可以帮我拆成 ${calc.k} 笔扫码付款吗？（${amountsZh}）非常感谢！`,
        ),
        lang,
      ),
    });
  };

  return (
    <div className="space-y-6">
      <ShowCard content={showCard.content} close={showCard.close} />

      {/* Part 1 & 2: Visual Download/Binding Tutorial (Alipay, WeChat Pay, TenPayGo, UnionPay Nihao China) + 3 QR Scenarios */}
      <PaymentSetupTutorial lang={lang} />

      {/* Part 3: Inputs */}
      <div id="fee-calculator" className="scroll-mt-28 border-t border-slate-200 pt-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          <CreditCard className="h-3.5 w-3.5" />
          {tx(t2("PART 3 · ¥200 FEE & DCC CALCULATOR", "第三部分 · 200 元手续费、银行货转费与 DCC 计算器"), lang)}
        </span>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-lg font-bold text-slate-900">
          {tx(t2("Bill Amount & Card Settings", "账单金额与银行卡费率设置"), lang)}
        </h2>

        {/* Quick presets */}
        <div className="mt-3 flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.amount}
              type="button"
              onClick={() => setCny(p.amount)}
              className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                cny === p.amount
                  ? "border-red-600 bg-red-600 text-white"
                  : p.amount === 205
                    ? "border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {tx(p.label, lang)}
            </button>
          ))}
        </div>

        {/* Bidirectional currency inputs */}
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-sm font-semibold text-slate-800">
              {tx(t2("Bill Amount in CNY (¥)", "人民币账单金额 (¥)"), lang)}
            </label>
            <input
              type="number"
              min={0}
              step="1"
              value={cny}
              onChange={(e) => setCny(Math.max(0, Number(e.target.value)))}
              className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base font-bold text-slate-900 focus:border-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800">
              {tx(t2(`Equivalent in ${currency.code} (${currency.symbol})`, `折合外币 ${currency.code} (${currency.symbol})`), lang)}
            </label>
            <input
              type="number"
              min={0}
              step="0.01"
              value={homeEquivalentInput}
              onChange={(e) => {
                const v = Math.max(0, Number(e.target.value));
                setCny(Number((v * rate).toFixed(2)));
              }}
              className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base font-bold text-slate-900 focus:border-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800">
              {tx(t2("Home Currency & Rate", "本国货币与汇率"), lang)}
            </label>
            <div className="mt-1.5 flex gap-2">
              <select
                value={currencyCode}
                onChange={(e) => handleCurrencyChange(e.target.value)}
                className="w-28 rounded-lg border border-slate-300 bg-white px-2.5 py-2.5 text-sm font-semibold text-slate-900 focus:border-red-500 focus:outline-none"
              >
                {CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code} {c.symbol}
                  </option>
                ))}
              </select>
              <input
                type="number"
                min={0.0001}
                step="0.01"
                value={rate}
                onChange={(e) => setRate(Math.max(0.0001, Number(e.target.value)))}
                aria-label="Exchange rate"
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900 focus:border-red-500 focus:outline-none"
              />
            </div>
            <p className="mt-1 text-xs text-slate-500">
              1 {currency.code} = ¥{rate} CNY ({tx(t2("editable", "可手动微调"), lang)})
            </p>
          </div>
        </div>

        {/* Bank FTF Selector */}
        <div className="mt-5 border-t border-slate-100 pt-5">
          <label className="block text-sm font-semibold text-slate-800">
            {tx(t2("Your Card's Foreign Transaction Fee (FTF)", "您的银行卡境外货转费率（FTF）"), lang)}
          </label>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            <button
              type="button"
              onClick={() => setFtfMode("zero")}
              className={`rounded-lg border p-3 text-left text-sm transition ${
                ftfMode === "zero"
                  ? "border-emerald-600 bg-emerald-50 text-emerald-950"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              <div className="font-bold">0% {tx(t2("Bank Fee", "银行费率"), lang)}</div>
              <div className="text-xs text-slate-500">
                {tx(t2("Zero-FX Card / Wise / Revolut", "免货转旅行卡 / Wise / Revolut"), lang)}
              </div>
            </button>
            <button
              type="button"
              onClick={() => setFtfMode("standard")}
              className={`rounded-lg border p-3 text-left text-sm transition ${
                ftfMode === "standard"
                  ? "border-red-600 bg-red-50 text-red-950"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              <div className="font-bold">3.0% {tx(t2("Bank Fee", "银行费率"), lang)}</div>
              <div className="text-xs text-slate-500">
                {tx(t2("Standard US / UK / EU Bank Card", "普通欧美银行卡默认费率"), lang)}
              </div>
            </button>
            <button
              type="button"
              onClick={() => setFtfMode("custom")}
              className={`rounded-lg border p-3 text-left text-sm transition ${
                ftfMode === "custom"
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              <div className="font-bold">{tx(t2("Custom FTF (%)", "自定义费率 (%)"), lang)}</div>
              <div className={`text-xs ${ftfMode === "custom" ? "text-slate-300" : "text-slate-500"}`}>
                {tx(t2("Slider 0% – 5%", "滑块调节 0% ~ 5%"), lang)}
              </div>
            </button>
          </div>

          {ftfMode === "custom" && (
            <div className="mt-3 flex items-center gap-3 rounded-lg bg-slate-50 p-3">
              <input
                type="range"
                min={0}
                max={5}
                step={0.1}
                value={customFtf}
                onChange={(e) => setCustomFtf(Number(e.target.value))}
                className="flex-1 accent-red-600"
              />
              <span className="w-16 text-right text-sm font-bold text-slate-900">{customFtf.toFixed(1)}%</span>
            </div>
          )}
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="text-xs font-medium text-slate-500">
            {tx(t2("Alipay / WeChat Charge", "支付宝/微信入账总额"), lang)}
          </div>
          <div className="mt-1 text-2xl font-bold text-slate-900">¥{calc.tApp.toFixed(2)}</div>
          <div className="mt-1 text-xs text-slate-500">
            {calc.rApp > 0
              ? tx(t2(`Includes 3% fee (+¥${calc.appFeeCny.toFixed(2)})`, `含 3% 国际卡费 (+¥${calc.appFeeCny.toFixed(2)})`), lang)
              : tx(t2("0% platform fee (≤ ¥200)", "0% 平台手续费（≤ ¥200）"), lang)}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="text-xs font-medium text-slate-500">
            {tx(t2("Final Card Charge (CNY)", "发卡行最终扣款（人民币等值）"), lang)}
          </div>
          <div className="mt-1 text-2xl font-bold text-slate-900">¥{calc.tFinal.toFixed(2)}</div>
          <div className="mt-1 text-xs text-slate-500">
            {tx(
              t2(
                `Bank FTF ${bankFtfPercent.toFixed(1)}% (+¥${calc.bankFeeCny.toFixed(2)})`,
                `银行货转费 ${bankFtfPercent.toFixed(1)}% (+¥${calc.bankFeeCny.toFixed(2)})`,
              ),
              lang,
            )}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="text-xs font-medium text-slate-500">
            {tx(t2(`Final Statement (${currency.code})`, `最终外币账单 (${currency.code})`), lang)}
          </div>
          <div className="mt-1 text-2xl font-bold text-slate-900">
            {currency.symbol}
            {calc.tHome.toFixed(2)}
          </div>
          <div className="mt-1 text-xs text-slate-500">
            @ 1 {currency.code} = ¥{calc.E}
          </div>
        </div>

        <div
          className={`rounded-xl border p-4 ${
            calc.fWaste > 0 ? "border-red-200 bg-red-50" : "border-emerald-200 bg-emerald-50"
          }`}
        >
          <div className="text-xs font-medium text-slate-600">
            {tx(t2("Total Extra Fees Wasted", "总共多花的冤枉钱（总损耗）"), lang)}
          </div>
          <div className={`mt-1 text-2xl font-bold ${calc.fWaste > 0 ? "text-red-700" : "text-emerald-700"}`}>
            ¥{calc.fWaste.toFixed(2)}
          </div>
          <div className={`mt-1 text-xs font-semibold ${calc.fWaste > 0 ? "text-red-700" : "text-emerald-700"}`}>
            {calc.wastePct.toFixed(2)}% {tx(t2("combined loss", "综合损耗率"), lang)}
          </div>
        </div>
      </div>

      {/* Smart Action Engine */}
      {calc.P <= 200 ? (
        <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-5 text-emerald-950">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600" />
            <div className="text-sm">
              <div className="text-base font-bold">
                {tx(t2("Smart Action: 0% App Fee — Scan Freely!", "最优策略：平台手续费 0% — 直接放心扫！"), lang)}
              </div>
              <p className="mt-1">
                {tx(
                  t2(
                    "Single transactions up to ¥200 have zero Alipay / WeChat Pay international card fees. Pay normally by QR code.",
                    "单笔 200 元人民币以内支付宝与微信均免收 3% 国际卡手续费，直接扫码支付即可。",
                  ),
                  lang,
                )}
              </p>
              {rBank > 0 && (
                <p className="mt-1.5 font-medium text-emerald-900">
                  {tx(
                    t2(
                      `Tip: Your bank still charges ${bankFtfPercent.toFixed(1)}% FTF (¥${(calc.P * rBank).toFixed(2)}). Switching to a 0% FX card like Wise saves ¥${(calc.P * rBank).toFixed(2)} on this bill.`,
                      `提示：您的发卡行仍会收取 ${bankFtfPercent.toFixed(1)}% 货转费（¥${(calc.P * rBank).toFixed(2)}）。换成 Wise 等免货转卡，这笔还能再省 ¥${(calc.P * rBank).toFixed(2)}。`,
                    ),
                    lang,
                  )}
                </p>
              )}
            </div>
          </div>
        </div>
      ) : calc.P <= 600 ? (
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-5 text-amber-950">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
            <div className="flex-1 text-sm">
              <div className="text-base font-bold">
                {tx(
                  t2(
                    `Smart Action: Politely Split into ${calc.k} Scans (Save ¥${calc.appFeeCny.toFixed(2)})`,
                    `最优策略：礼貌请收银员拆成 ${calc.k} 笔 ≤200 元扫码（立省 ¥${calc.appFeeCny.toFixed(2)}）`,
                  ),
                  lang,
                )}
              </div>
              <p className="mt-1">
                {tx(
                  t2(
                    `Because ¥${calc.P.toFixed(2)} exceeds ¥200, Alipay/WeChat charges 3% on the ENTIRE bill (not just the amount over ¥200). Ask the cashier to split it into ${calc.k} non-round amounts under ¥200 (avoiding exact ¥200 repeats lowers fraud-flag risk):`,
                    `因为 ¥${calc.P.toFixed(2)} 超过 200 元，支付宝/微信会按整笔金额收 3%（不是只按超出部分收）。礼貌请收银员拆成 ${calc.k} 笔非整 200 元的金额（避免连续死板的整 200 元可降低风控概率）：`,
                  ),
                  lang,
                )}
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {calc.splitParts.map((part, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg border border-amber-300 bg-white px-3 py-1 text-sm font-bold text-slate-900"
                  >
                    #{idx + 1}: ¥{part.toFixed(2)}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={openSplitCard}
                className="mt-3 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
              >
                <Maximize2 className="h-4 w-4" />
                {tx(t2("Show Full-Screen Chinese Split-Bill Card to Cashier", "一键弹出给收银员看的中文拆单请求卡"), lang)}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-red-300 bg-red-50 p-5 text-red-950">
          <div className="flex items-start gap-3">
            <ShieldAlert className="mt-0.5 h-6 w-6 shrink-0 text-red-600" />
            <div className="text-sm">
              <div className="text-base font-bold text-red-800">
                {tx(
                  t2(
                    "🚨 Anti-Fraud Warning: Do NOT Split into 4+ Consecutive Scans!",
                    "🚨 反风控红色警告：千万不要在收银台连续拆成 ≥4 笔小额连扫！",
                  ),
                  lang,
                )}
              </div>
              <p className="mt-1">
                {tx(
                  t2(
                    "Making 4+ rapid ~¥200 scans at the same merchant has a 90% chance of triggering Alipay or your home bank's anti-fraud card lock!",
                    "短时间内在同一商户连续多笔接近 200 元的交易，有 90% 的概率触发支付宝及海外银行盗刷风控锁卡！",
                  ),
                  lang,
                )}
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  {tx(
                    t2(
                      "For hotels & high-speed trains: book online on Trip.com with your foreign card (no 3% QR scan fee).",
                      "酒店房费与长途高铁票：直接在线上 Trip.com 用外卡支付（无 3% 扫码手续费）。",
                    ),
                    lang,
                  )}
                </li>
                <li>
                  {tx(
                    t2(
                      "For malls, electronics (e.g. DJI) & 5-star hotel desks: tap or insert your physical Visa/Mastercard on the POS terminal, and ALWAYS choose CNY on the screen (reject DCC home-currency conversion!).",
                      "大商场买数码产品或五星酒店前台：直接插/刷实体 Visa/Mastercard 卡走 POS 机，并在屏幕弹窗时务必选择人民币 CNY 结算（坚决拒绝 DCC 本币转换！）。",
                    ),
                    lang,
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* DCC Warning Box */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
        <div className="flex items-center gap-2 font-bold text-slate-900">
          <CreditCard className="h-4 w-4 text-red-600" />
          {tx(t2("Beware the DCC Exchange Rate Trap (~7% Extra Markup)", "警惕 POS 机与 ATM 的 DCC 汇率刺客（多扣约 7%）"), lang)}
        </div>
        <p className="mt-1 text-xs leading-relaxed text-slate-600">
          {tx(
            t2(
              `If an ATM or hotel POS machine asks "Pay in ${currency.code} or CNY?", ALWAYS pick CNY (Decline Conversion). Choosing ${currency.code} lets the terminal add ~7% markup (an extra ~¥${calc.dccExtraCny.toFixed(2)} on this bill).`,
              `如果在 ATM 取现或酒店 POS 机刷卡时屏幕问“按 ${currency.code} 还是 CNY 结算？”，永远选人民币 CNY（拒绝转换）。选 ${currency.code} 会被终端加收约 7% 汇率差（按本笔金额约多花 ¥${calc.dccExtraCny.toFixed(2)}）。`,
            ),
            lang,
          )}
        </p>
      </div>

      <AffiliateBox id="wise" lang={lang} />

      <HelpContactCard lang={lang} context="payment" />
    </div>
  );
}
