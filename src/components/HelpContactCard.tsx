"use client";

import { useState } from "react";
import { MessageCircle, Check, Copy, ExternalLink } from "lucide-react";
import { Lang, t2, t4, tx } from "@/lib/i18n";
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
      ? t4(
          "Stuck on Alipay / WeChat Setup or Card Verification?",
          "支付宝 / 微信绑卡或现场付款遇到卡壳？",
          "アリペイ・WeChatPayの登録や決済でお困りですか？",
          "알리페이·위챗페이 카드 등록이나 결제가 막히셨나요?"
        )
      : t4(
          "GoChina Trip Rescue Desk (09:00–22:00 GMT+8)",
          "GoChina 赴华旅行协助台（北京时间 09:00–22:00）",
          "GoChina 中国旅行サポートデスク（中国時間 09:00–22:00）",
          "GoChina 중국 여행 헬프 데스크 (중국시간 09:00–22:00)"
        );

  const desc =
    context === "payment"
      ? t4(
          "Free quick help for urgent payment snags — send us the error screenshot on WhatsApp (works with roaming eSIM) or WeChat (works on any hotel Wi-Fi).",
          "免费解答紧急支付与绑卡报错问题——直接把报错截图发到 WhatsApp（漫游 eSIM 可用）或微信（酒店 Wi-Fi 100% 可用）。",
          "エラー画面のスクショをWhatsAppまたはWeChatでお送りください。決済・登録トラブルを無料でお手伝いします。",
          "결제 오류 스크린샷을 WhatsApp 또는 WeChat으로 보내주시면 무료로 빠르게 해결을 도와드립니다."
        )
      : t4(
          "Free quick help for urgent payment or transport snags in China, or reach out for tailored itinerary assistance. Replies in English & Chinese.",
          "免费解答在华紧急支付/交通卡壳问题，或获取定制行程协助。支持中英文回复。",
          "中国滞在中の決済・移動トラブルの無料相談やカスタム旅程のご相談はWhatsApp・WeChatへどうぞ。",
          "중국 여행 중 긴급 결제·교통 문제 무료 상담 및 맞춤 일정 문의는 WhatsApp 또는 WeChat으로 연락하세요."
        );

  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText(SITE.wechat);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="no-print rounded-2xl border border-slate-200 border-l-4 border-l-emerald-600 bg-white p-5 shadow-xs sm:p-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800">
            <MessageCircle className="h-3.5 w-3.5" />
            {tx(t2("GoChina Trip Rescue Desk", "GoChina 旅行协助台"), lang)}
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
