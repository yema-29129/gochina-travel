import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, t2 } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { HubPage } from "@/components/HubPage";

type P = { params: Promise<{ lang: string }> };
const title = t2("All China Travel Guides", "全部中国旅行指南");
const description = t2(
  "Every practical guide in one place: visa and entry, money and internet, transport, food and shopping, tickets, seasons and safety.",
  "所有实用指南集中在一处：签证与入境、支付与网络、交通、餐饮与购物、门票、季节与安全。"
);

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata({ lang, path: "/guides", title, description });
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <HubPage
      lang={lang}
      path="/guides"
      title={title}
      subtitle={description}
      categories={["visa", "money", "transport", "food", "practical"]}
      tools={[]}
    />
  );
}
