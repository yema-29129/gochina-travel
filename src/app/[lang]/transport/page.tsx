import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, t2 } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { HubPage } from "@/components/HubPage";

type P = { params: Promise<{ lang: string }> };
const title = t2("Getting Around China", "在中国出行");
const description = t2(
  "High-speed trains, the 12 main airports, metro and DiDi, domestic flights and the power bank rule, shared bikes and how foreigners can legally drive.",
  "高铁、12 个主要机场、地铁和滴滴、国内航班与充电宝规定、共享单车，以及外国人如何合法自驾。"
);

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata({ lang, path: "/transport", title, description });
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <HubPage
      lang={lang}
      path="/transport"
      title={title}
      subtitle={description}
      categories={["transport"]}
      tools={["powerbank-airport", "taxi-card"]}
    />
  );
}
