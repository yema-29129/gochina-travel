"use client";

import { useEffect, useState } from "react";
import { ArrowLeftRight, RotateCcw } from "lucide-react";
import { Lang, L, t2, tx } from "@/lib/i18n";

interface Currency {
  code: string;
  symbol: string;
  name: L;
  /** Default CNY per 1 unit of this currency (e.g. 1 USD = 7.25 CNY) */
  cnyPerUnit: number;
}

const CURRENCIES: Currency[] = [
  { code: "USD", symbol: "$", name: t2("US Dollar", "美元"), cnyPerUnit: 7.25 },
  { code: "EUR", symbol: "€", name: t2("Euro", "欧元"), cnyPerUnit: 7.85 },
  { code: "GBP", symbol: "£", name: t2("British Pound", "英镑"), cnyPerUnit: 9.2 },
  { code: "JPY", symbol: "¥", name: t2("Japanese Yen", "日元"), cnyPerUnit: 0.048 },
  { code: "KRW", symbol: "₩", name: t2("South Korean Won", "韩元"), cnyPerUnit: 0.0052 },
  { code: "AUD", symbol: "A$", name: t2("Australian Dollar", "澳元"), cnyPerUnit: 4.75 },
  { code: "CAD", symbol: "C$", name: t2("Canadian Dollar", "加元"), cnyPerUnit: 5.25 },
  { code: "SGD", symbol: "S$", name: t2("Singapore Dollar", "新加坡元"), cnyPerUnit: 5.4 },
  { code: "HKD", symbol: "HK$", name: t2("Hong Kong Dollar", "港币"), cnyPerUnit: 0.93 },
];

const QUICK_CNY = [20, 50, 100, 200];
const STORE_KEY = "gochina-currency-rates";

const U = {
  fromCny: t2("Chinese Yuan (CNY ¥)", "人民币（CNY ¥）"),
  currency: t2("Foreign Currency", "外币"),
  amount: t2("Amount", "金额"),
  swap: t2("Swap direction", "切换方向"),
  quick: t2("Quick CNY amounts:", "快捷人民币金额："),
  rateLabel: t2("Exchange rate (editable to match your bank)", "汇率（可修改以匹配你的银行）"),
  reset: t2("Reset default", "恢复默认"),
  feeTip: t2(
    "Tip: Single Alipay / WeChat Pay transactions of ¥200 or less have 0% platform fee for foreign cards. Above ¥200, a 3% platform fee applies — ask the merchant if you can split large bills.",
    "提示：外卡通过支付宝/微信支付单笔不超过 ¥200 免收平台手续费；超过 ¥200 收取 3% 平台手续费——大额账单可询问商家能否拆单。"
  ),
  dccTip: t2(
    "Always choose to be charged in CNY (Chinese Yuan) at ATMs and card terminals — decline Dynamic Currency Conversion (DCC) to avoid a 5%–10% hidden markup.",
    "在 ATM 和 POS 机刷卡时务必选择以人民币（CNY）结算——拒绝动态货币转换（DCC），避免 5%–10% 的隐性汇损。"
  ),
  refTitle: t2("Quick Reference Table", "常用金额速查表"),
};

export default function CurrencyConverter({ lang }: { lang: Lang }) {
  const T = (l: L) => tx(l, lang);
  const [code, setCode] = useState("USD");
  const [cnyToForeign, setCnyToForeign] = useState(true);
  const [amount, setAmount] = useState("200");
  const [customRates, setCustomRates] = useState<Record<string, number>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") setCustomRates(parsed);
      }
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(customRates));
    } catch {}
  }, [customRates, loaded]);

  const cur = CURRENCIES.find((c) => c.code === code) ?? CURRENCIES[0];
  const rate = customRates[code] ?? cur.cnyPerUnit; // CNY per 1 foreign unit
  const num = Math.max(0, Number(amount) || 0);

  const result = cnyToForeign ? (rate > 0 ? num / rate : 0) : num * rate;
  const formatForeign = (val: number) =>
    cur.code === "JPY" || cur.code === "KRW" ? Math.round(val).toLocaleString() : val.toFixed(2);

  const updateRate = (v: string) => {
    const parsed = Number(v);
    if (!Number.isNaN(parsed) && parsed >= 0) {
      setCustomRates((prev) => ({ ...prev, [code]: parsed }));
    }
  };

  const resetRate = () => {
    setCustomRates((prev) => {
      const next = { ...prev };
      delete next[code];
      return next;
    });
  };

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        {/* Currency selector */}
        <div className="mb-4 flex flex-wrap gap-2">
          {CURRENCIES.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => setCode(c.code)}
              className={`rounded-lg border px-3 py-1.5 text-sm font-semibold transition ${
                c.code === code
                  ? "border-red-500 bg-red-50 text-red-700"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
              }`}
            >
              {c.code}
            </button>
          ))}
        </div>

        {/* Converter box */}
        <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
              {cnyToForeign ? T(U.fromCny) : `${T(cur.name)} (${cur.code})`}
            </label>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-xl font-bold text-slate-400">{cnyToForeign ? "¥" : cur.symbol}</span>
              <input
                type="number"
                min={0}
                step="any"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                aria-label={T(U.amount)}
                className="w-full bg-transparent text-2xl font-extrabold text-slate-900 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setCnyToForeign((v) => !v)}
            aria-label={T(U.swap)}
            className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-red-300 hover:text-red-600"
          >
            <ArrowLeftRight className="h-5 w-5" />
          </button>

          <div className="rounded-xl border border-red-200 bg-red-50/50 p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-red-700">
              {cnyToForeign ? `${T(cur.name)} (${cur.code})` : T(U.fromCny)}
            </div>
            <div className="mt-2 text-2xl font-extrabold text-slate-900">
              {cnyToForeign ? `${cur.symbol}${formatForeign(result)}` : `¥${result.toFixed(2)}`}
            </div>
          </div>
        </div>

        {/* Quick ¥20/50/100/200 pills */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-slate-500">{T(U.quick)}</span>
          {QUICK_CNY.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => {
                setCnyToForeign(true);
                setAmount(String(q));
              }}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-700 hover:border-red-300 hover:bg-red-50 hover:text-red-700"
            >
              ¥{q}
            </button>
          ))}
        </div>

        {/* Editable rate */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 text-sm">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-600">{T(U.rateLabel)}:</span>
            <span className="font-semibold text-slate-900">1 {cur.code} =</span>
            <input
              type="number"
              min={0}
              step="0.001"
              value={rate}
              onChange={(e) => updateRate(e.target.value)}
              className="w-24 rounded-md border border-slate-300 px-2 py-1 text-sm font-bold text-slate-900 focus:border-red-500 focus:outline-none"
            />
            <span className="font-semibold text-slate-900">CNY</span>
          </div>
          {customRates[code] !== undefined && (
            <button
              type="button"
              onClick={resetRate}
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-red-600"
            >
              <RotateCcw className="h-3.5 w-3.5" /> {T(U.reset)}
            </button>
          )}
        </div>
      </section>

      {/* Reference Table */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="mb-3 text-sm font-bold text-slate-900">{T(U.refTitle)}</h3>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[10, 20, 50, 100, 200, 500, 1000, 2000].map((v) => (
            <div key={v} className="rounded-lg bg-slate-50 px-3 py-2 text-sm">
              <div className="font-bold text-slate-900">¥{v}</div>
              <div className="text-xs text-slate-600">
                ≈ {cur.symbol}
                {formatForeign(rate > 0 ? v / rate : 0)} {cur.code}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <div className="space-y-2 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
        <p>{T(U.feeTip)}</p>
        <p>{T(U.dccTip)}</p>
      </div>
    </div>
  );
}
