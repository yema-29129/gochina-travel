import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, t2 } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { HubPage } from "@/components/HubPage";

type P = { params: Promise<{ lang: string }> };
const title = t2("China Visa & Entry Guide (2026)", "中国签证与入境指南（2026）");
const description = t2(
  "Visa-free lists for 50+ countries, 240-hour transit rules and all 65 ports, online arrival card, special visa-free zones and what happens at immigration.",
  "50 多个国家的免签名单、240 小时过境免签规则及全部 65 个口岸、网上入境卡、特殊免签区域，以及入境时的流程。"
);

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata({ lang, path: "/visa", title, description });
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <HubPage lang={lang} path="/visa" title={title} subtitle={description} categories={["visa"]} tools={["visa-checker"]} />;
}
