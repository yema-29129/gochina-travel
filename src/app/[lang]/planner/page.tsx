import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, LANGS, t2, tx } from "@/lib/i18n";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { UI } from "@/data/ui";
import { PageHeader } from "@/components/PageHeader";
import { PlannerClient } from "@/components/PlannerClient";
import { JsonLd } from "@/components/JsonLd";

type P = { params: Promise<{ lang: string }> };

const title = t2("China Trip Planner (5, 8, 12 & 14-Day Itineraries)", "中国行程规划器（5 / 8 / 12 / 14 天路线）");
const description = t2(
  "Pick your trip length and travel style (Classics, Food, Nature, or Modern) to get a realistic high-speed rail China itinerary you can copy or print.",
  "选择行程天数和旅行偏好（经典历史、美食烟火、自然山水、现代赛博），生成可直接复制或打印的中国高铁行程单。"
);

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata({ lang, path: "/planner", title, description });
}

export default async function PlannerPage({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = UI[lang];

  return (
    <>
      <JsonLd data={breadcrumbLd(lang, [{ name: t.home, path: "/" }, { name: t.nav.planner, path: "/planner" }])} />
      <PageHeader lang={lang} title={tx(title, lang)} subtitle={tx(description, lang)} crumbs={[{ label: t.nav.planner }]} />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <PlannerClient lang={lang} />
      </div>
    </>
  );
}
