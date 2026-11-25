import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, t4 } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { HubPage } from "@/components/HubPage";

type P = { params: Promise<{ lang: string }> };
const title = t4(
  "Alipay, WeChat Pay, eSIM & Food in China (2026)",
  "中国支付宝/微信支付、eSIM 上网与餐饮退税指南（2026）",
  "中国アリペイ・WeChatPay・eSIM・グルメ＆免税ガイド（2026）",
  "중국 알리페이·위챗페이·eSIM·맛집 및 택스리펀 가이드 (2026)"
);
const description = t4(
  "Set up Alipay and WeChat Pay with a foreign Visa/Mastercard, avoid ¥200 3% fees and ATM DCC traps, get a roaming eSIM, order food safely, and claim 9% instant tax refunds.",
  "外国人绑定支付宝/微信外卡、规避 200 元 3% 手续费和 ATM 汇率陷阱、选购漫游 eSIM、中文过敏点餐及 200 元即买即退离境退税全攻略。",
  "アリペイ・WeChatPayへの海外クレカ登録、200元3%手数料とATM両替罠の回避、中国eSIM選び、日本語対応の200元即時免税まで完全網羅。",
  "알리페이·위챗페이 해외카드 등록, 200위안 3% 수수료 절약, 중국 로밍 eSIM, 음식 알레르기 카드 및 200위안 즉시 택스리펀 완벽 정리."
);

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata({ lang, path: "/money", title, description });
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <HubPage
      lang={lang}
      path="/money"
      title={title}
      subtitle={description}
      categories={["money", "food"]}
      tools={["payment-fee-calculator", "esim-calculator", "allergy-card", "tax-refund-calculator"]}
    />
  );
}
