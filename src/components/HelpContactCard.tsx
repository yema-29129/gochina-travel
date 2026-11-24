"use client";

import { useState } from "react";
import { MessageCircle, Check, Copy, ExternalLink } from "lucide-react";
import { Lang, t2, tx } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export function HelpContactCard({
  lang,
  context = "payment",
}: {
  lang: Lang;
  context?: "payment" | "general";
}) {
  const [copied, setCopied] = useState(false);

  const waText = encodeURIComponent(
    lang === "zh"
      ? "你好，我在 GoChina 网站看到了中国旅行指南，想咨询一下关于中国支付/出行的问题："
      : "Hi! I found your China travel guide on GoChina (china.tmhzz.com) and have a quick question about traveling/paying in China:"
  );

  const title =
    context === "payment"
      ? t2("Payment card declined or stuck setting up Alipay / WeChat?", "支付宝 / 微信绑卡或现场付款遇到问题？")
      : t2("Need real-time help with your China trip?", "赴华旅行需要实时人工协助？");

  const desc =
    context === "payment"
      ? t2(
          "Send us a screenshot of the error on WhatsApp (works with a travel eSIM) or WeChat (works on any Chinese hotel Wi-Fi). We reply in English & Chinese.",
          "直接把报错截图发到我们的 WhatsApp（漫游 eSIM 可用）或微信（中国酒店 Wi-Fi 100% 可用），支持中英文解答。"
        )
      : t2(
          "Reach us directly on WhatsApp or WeChat for quick help with visas, payments, train bookings, or local tips.",
          "直接通过 WhatsApp 或微信联系我们，快速咨询免签、支付、高铁订票或本地避坑问题。"
        );

  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText(SITE.wechat);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="no-print rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50/60 p-5 sm:p-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800">
            <MessageCircle className="h-3.5 w-3.5" />
            {tx(t2("Live Human Support", "本地人工协助"), lang)}
          </div>
          <h3 className="mt-2 text-lg font-bold text-slate-900">{tx(title, lang)}</h3>
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-600">{tx(desc, lang)}</p>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:w-56">
          <a
            href={`${SITE.whatsappUrl}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white shadow-xs transition hover:bg-[#1fb857]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp: {SITE.whatsapp}
            <ExternalLink className="h-3.5 w-3.5 opacity-80" />
          </a>

          <button
            type="button"
            onClick={copyWechat}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-emerald-50"
          >
            {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4 text-emerald-700" />}
            <span>
              WeChat: <strong>{SITE.wechat}</strong>
              {copied ? (lang === "zh" ? " (已复制)" : " (Copied)") : ""}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
