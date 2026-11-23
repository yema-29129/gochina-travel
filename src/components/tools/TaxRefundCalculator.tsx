"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, Info, Receipt } from "lucide-react";
import { Lang, t2, tx } from "@/lib/i18n";

type TaxTier = "standard_11" | "reduced_8";

interface Currency {
  code: string;
  symbol: string;
  defaultRate: number;
}

const CURRENCIES: Currency[] = [
  { code: "USD", symbol: "$", defaultRate: 7.2 },
  { code: "EUR", symbol: "€", defaultRate: 7.8 },
  { code: "GBP", symbol: "£", defaultRate: 9.15 },
  { code: "AUD", symbol: "A$", defaultRate: 4.75 },
  { code: "CAD", symbol: "C$", defaultRate: 5.25 },
];

const PRESETS = [
  { amount: 180, label: t2("¥180 Below Min", "¥180 未满起退额") },
  { amount: 500, label: t2("¥500 Clothing", "¥500 服装鞋包") },
  { amount: 1500, label: t2("¥1,500 Silk / Gifts", "¥1,500 丝绸/礼品") },
  { amount: 3999, label: t2("¥3,999 DJI Pocket 3", "¥3,999 大疆 Pocket 3") },
  { amount: 12000, label: t2("¥12,000 Luxury / Watch", "¥12,000 腕表/奢侈品") },
];

export default function TaxRefundCalculator({ lang }: { lang: Lang }) {
  const [amount, setAmount] = useState<number>(3999);
  const [tier, setTier] = useState<TaxTier>("standard_11");
  const [currencyCode, setCurrencyCode] = useState<string>("USD");
  const [rate, setRate] = useState<number>(7.2);

  const currency = CURRENCIES.find((c) => c.code === currencyCode) ?? CURRENCIES[0];

  const handleCurrencyChange = (code: string) => {
    setCurrencyCode(code);
    const next = CURRENCIES.find((c) => c.code === code);
    if (next) setRate(next.defaultRate);
  };

  const calc = useMemo(() => {
    const M = Math.max(0, Number.isFinite(amount) ? amount : 0);
    const E = rate > 0 ? rate : 7.2;
    const rRefund = tier === "standard_11" ? 0.11 : 0.08;
    const rAgency = 0.02;
    const belowMin = M < 200;
    const remainingToMin = belowMin ? Number((200 - M).toFixed(2)) : 0;
    const rGross = belowMin ? 0 : M * rRefund;
    const fAgency = belowMin ? 0 : M * rAgency;
    const rNet = belowMin ? 0 : rGross - fAgency;
    const rNetHome = rNet / E;
    const netRatePct = (rRefund - rAgency) * 100;

    return { M, E, rRefund, belowMin, remainingToMin, rGross, fAgency, rNet, rNetHome, netRatePct };
  }, [amount, tier, rate]);

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-lg font-bold text-slate-900">
          {tx(t2("Same-Day Shopping Amount at One Tax-Free Store", "同一天在同一家退税商店的含税消费金额"), lang)}
        </h2>

        {/* Quick presets */}
        <div className="mt-3 flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.amount}
              type="button"
              onClick={() => setAmount(p.amount)}
              className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                amount === p.amount
                  ? "border-red-600 bg-red-600 text-white"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {tx(p.label, lang)}
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-slate-800">
              {tx(t2("Total Receipt Amount in CNY (¥)", "含税消费总金额（人民币 ¥）"), lang)}
            </label>
            <input
              type="number"
              min={0}
              step="1"
              value={amount}
              onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
              className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base font-bold text-slate-900 focus:border-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800">
              {tx(t2("Display Home Currency & Rate", "外币折算参考汇率"), lang)}
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
                min={0.01}
                step="0.01"
                value={rate}
                onChange={(e) => setRate(Math.max(0.01, Number(e.target.value)))}
                aria-label="Exchange rate"
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900 focus:border-red-500 focus:outline-none"
              />
            </div>
            <p className="mt-1 text-xs text-slate-500">
              1 {currency.code} = ¥{rate} CNY
            </p>
          </div>
        </div>

        {/* Category / Rate Tier */}
        <div className="mt-5 border-t border-slate-100 pt-5">
          <label className="block text-sm font-semibold text-slate-800">
            {tx(t2("Item Category & Tax Refund Rate", "商品类别与退税率档位"), lang)}
          </label>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setTier("standard_11")}
              className={`rounded-lg border p-3.5 text-left transition ${
                tier === "standard_11"
                  ? "border-red-600 bg-red-50 text-red-950"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              <div className="text-sm font-bold">
                {tx(t2("11% Refund Rate (~9% Net Take-Home)", "11% 退税档（实拿约 9%）"), lang)}
              </div>
              <div className="mt-0.5 text-xs text-slate-500">
                {tx(
                  t2(
                    "Most goods: electronics, DJI drones, clothing, shoes, bags, cosmetics, watches, jewelry, silk & porcelain.",
                    "绝大多数商品：电子数码、大疆无人机、服装鞋包、美妆、手表首饰、丝绸瓷器。",
                  ),
                  lang,
                )}
              </div>
            </button>

            <button
              type="button"
              onClick={() => setTier("reduced_8")}
              className={`rounded-lg border p-3.5 text-left transition ${
                tier === "reduced_8"
                  ? "border-red-600 bg-red-50 text-red-950"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              <div className="text-sm font-bold">
                {tx(t2("8% Refund Rate (~6% Net Take-Home)", "8% 退税档（实拿约 6%）"), lang)}
              </div>
              <div className="mt-0.5 text-xs text-slate-500">
                {tx(
                  t2(
                    "9%-VAT items: certain processed agricultural foods, books & publications.",
                    "适用 9% 增值税率的特定商品：部分农产品加工食品、书报等。",
                  ),
                  lang,
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Below ¥200 Prompt OR Calculation Results */}
      {calc.belowMin ? (
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-5 text-amber-950">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
            <div className="text-sm">
              <div className="text-base font-bold">
                {tx(
                  t2(
                    `Only ¥${calc.remainingToMin.toFixed(2)} more to unlock the ¥200 minimum tax refund!`,
                    `还差 ¥${calc.remainingToMin.toFixed(2)} 即可达到 ¥200 人民币最低起退门槛！`,
                  ),
                  lang,
                )}
              </div>
              <p className="mt-1">
                {tx(
                  t2(
                    "China's 2026 tax-refund minimum is ¥200 spent at the same store on the same day. Add a pair of socks or a small souvenir to unlock the refund on your entire receipt!",
                    "2026 年离境退税起退点为同一退税商店同日满 200 元人民币。顺手再凑一双袜子或一盒纪念品，就能退整张小票的税！",
                  ),
                  lang,
                )}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="text-xs font-medium text-slate-500">
                {tx(t2(`Gross VAT Refund (${(calc.rRefund * 100).toFixed(0)}%)`, `应退增值税额（毛退税 ${(calc.rRefund * 100).toFixed(0)}%）`), lang)}
              </div>
              <div className="mt-1 text-2xl font-bold text-slate-900">¥{calc.rGross.toFixed(2)}</div>
              <div className="mt-1 text-xs text-slate-500">
                ¥{calc.M.toFixed(2)} × {(calc.rRefund * 100).toFixed(0)}%
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="text-xs font-medium text-slate-500">
                {tx(t2("Est. Agency Handling Fee (~2%)", "退税代理机构手续费（约 2%）"), lang)}
              </div>
              <div className="mt-1 text-2xl font-bold text-slate-700">-¥{calc.fAgency.toFixed(2)}</div>
              <div className="mt-1 text-xs text-slate-500">
                {tx(t2("Exact rate posted at departure port", "具体以各口岸代理机构公示为准"), lang)}
              </div>
            </div>

            <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4">
              <div className="text-xs font-semibold text-emerald-800">
                {tx(t2(`Net Cash / Alipay Refund (~${calc.netRatePct.toFixed(0)}%)`, `最终实拿净退税额（约 ${calc.netRatePct.toFixed(0)}%）`), lang)}
              </div>
              <div className="mt-1 text-2xl font-bold text-emerald-800">¥{calc.rNet.toFixed(2)}</div>
              <div className="mt-1 text-sm font-semibold text-emerald-700">
                ≈ {currency.symbol}
                {calc.rNetHome.toFixed(2)} {currency.code}
              </div>
            </div>
          </div>

          {/* Customs Inspection Notice: <= 10,000 vs > 10,000 */}
          {calc.M <= 10000 ? (
            <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-5 text-emerald-950">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600" />
                <div className="text-sm">
                  <div className="text-base font-bold">
                    {tx(
                      t2(
                        "✅ Eligible for 2026 Paperless E-Refund & Fast Customs Check (≤ ¥10,000)",
                        "✅ 适用 2026 年电子无纸化及智能抽检便利政策（≤ ¥10,000）",
                      ),
                      lang,
                    )}
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      {tx(
                        t2(
                          "You must depart Mainland China within 90 days of the purchase date, and items must remain unused and sealed.",
                          "离境日须在购买日后 90 天内，且所购退税商品须保持未启用、未消费状态。",
                        ),
                        lang,
                      )}
                    </li>
                    <li>
                      {tx(
                        t2(
                          "If you used in-store 'Instant Tax Refund' (即买即退) and already received cash/Alipay, you MUST still complete customs verification at the airport BEFORE checking in your luggage — otherwise your credit card pre-authorization deposit will be charged back!",
                          "若在商场办理了「即买即退」提前领了钱，去机场值机托运行李前，仍须先去海关退税柜台/终端完成出境核销，否则信用卡预授权担保金会被扣回！",
                        ),
                        lang,
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-amber-300 bg-amber-50 p-5 text-amber-950">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
                <div className="text-sm">
                  <div className="text-base font-bold">
                    {tx(
                      t2(
                        "High-Value Purchase Notice (> ¥10,000): Allow Extra Time at Airport Customs",
                        "大额退税提醒（> ¥10,000）：请为机场海关人工查验预留充足时间",
                      ),
                      lang,
                    )}
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      {tx(
                        t2(
                          "Purchases over ¥10,000 require standard in-person customs inspection of the unused goods, receipts, and tax-refund form BEFORE checking in your bags.",
                          "单笔超过 10,000 元人民币的购物需在机场托运行李前接受海关人工实物查验（核对未拆封商品、发票及退税申请单）。",
                        ),
                        lang,
                      )}
                    </li>
                    <li>
                      {tx(
                        t2(
                          "Departure must be within 90 days of purchase. High-value refunds over the cash cap are disbursed via Alipay or bank transfer.",
                          "离境日须在购买日后 90 天内；超出单日现金退税上限的部分将通过支付宝或银行转账发放。",
                        ),
                        lang,
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Quick Reminder Card */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 text-xs leading-relaxed text-slate-600">
        <div className="flex items-center gap-1.5 text-sm font-bold text-slate-900">
          <Receipt className="h-4 w-4 text-red-600" />
          {tx(t2("Always Bring Your Physical Passport When Shopping", "购物退税务必携带护照原件"), lang)}
        </div>
        <p className="mt-1">
          {tx(
            t2(
              "Look for the blue 'TAX FREE' logo at major malls, Apple/DJI flagship stores, and department stores. Show your physical passport at checkout and ask for the Tax Refund Application Form (离境退税申请单).",
              "认准大型商场、苹果/大疆官方旗舰店及百货公司的蓝色「TAX FREE」标识。结账时出示护照原件，请店员开具《离境退税申请单》与增值税发票。",
            ),
            lang,
          )}
        </p>
      </div>
    </div>
  );
}
