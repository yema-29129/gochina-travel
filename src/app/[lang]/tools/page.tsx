import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { href, isLang, t2, tx } from "@/lib/i18n";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { TOOLS } from "@/data/tools";
import { UI } from "@/data/ui";
import { PageHeader } from "@/components/PageHeader";
import { IconBox } from "@/components/IconBox";
import { JsonLd } from "@/components/JsonLd";

type P = { params: Promise<{ lang: string }> };
const title = t2("Free China Travel Tools & Calculators", "免费中国旅行工具与计算器");
const description = t2(
  "Visa-free route checker, Alipay fee calculator, ticket release alarm, eSIM data calculator, allergy cards, pharmacy cards, power bank checker and more.",
  "免签路线检查器、支付宝手续费计算器、放票闹钟、eSIM 流量计算器、过敏卡、药店卡、充电宝自检等更多工具。"
);

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata({ lang, path: "/tools", title, description });
}

export default async function ToolsPage({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = UI[lang];
  return (
    <>
      <JsonLd data={breadcrumbLd(lang, [{ name: t.home, path: "/" }, { name: tx(title, lang), path: "/tools" }])} />
      <PageHeader lang={lang} title={tx(title, lang)} subtitle={tx(description, lang)} crumbs={[{ label: t.nav.tools }]} />
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
        {TOOLS.map((tool) => (
          <Link key={tool.id} href={href(lang, `/tools/${tool.id}`)} className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 hover:border-red-200 hover:shadow-md">
            <IconBox name={tool.icon} size="lg" />
            <h2 className="mt-4 font-bold text-slate-900 group-hover:text-red-600">{tx(tool.title, lang)}</h2>
            <p className="mt-1 flex-1 text-sm text-slate-600">{tx(tool.desc, lang)}</p>
            <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-red-600">{t.openTool} <ArrowRight className="h-4 w-4" /></span>
          </Link>
        ))}
      </div>
    </>
  );
}
