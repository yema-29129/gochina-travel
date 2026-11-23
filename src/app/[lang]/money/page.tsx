import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, t2 } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { HubPage } from "@/components/HubPage";

type P = { params: Promise<{ lang: string }> };
const title = t2("Money, Internet & Food in China", "在中国的支付、上网与餐饮");
const description = t2(
  "Set up Alipay and WeChat Pay with a foreign card, avoid fees and DCC, get online with an eSIM, order food safely with allergies, and claim tax refunds.",
  "用外国银行卡开通支付宝和微信支付，避开手续费和 DCC，用 eSIM 上网，有过敏也能安全点餐，并办理离境退税。"
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
