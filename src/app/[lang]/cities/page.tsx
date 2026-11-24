import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, LANGS, t2, tx } from "@/lib/i18n";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { CITIES } from "@/data/cities";
import { UI } from "@/data/ui";
import { PageHeader } from "@/components/PageHeader";
import { CityCard } from "@/components/CityCard";
import { ProvinceDestinationsHub } from "@/components/ProvinceDestinationsHub";
import { JsonLd } from "@/components/JsonLd";

type P = { params: Promise<{ lang: string }> };

const title = t2("Top China Destinations for First-Timers", "首次赴华热门目的地城市指南");
const description = t2(
  "Practical city guides for Beijing, Shanghai, Xi'an, Chengdu, Chongqing, Guilin, Zhangjiajie and Yunnan — airports, ticket release times, 240-hour transit rules, food and metro tips.",
  "北京、上海、西安、成都、重庆、桂林、张家界与云南实用城市指南——机场交通、门票放票时间、240 小时过境免签范围、美食与地铁攻略。"
);

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata({ lang, path: "/cities", title, description });
}

export default async function CitiesPage({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = UI[lang];

  return (
    <>
      <JsonLd data={breadcrumbLd(lang, [{ name: t.home, path: "/" }, { name: t.nav.cities, path: "/cities" }])} />
      <PageHeader lang={lang} title={tx(title, lang)} subtitle={tx(description, lang)} crumbs={[{ label: t.nav.cities }]} />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((c) => (
            <CityCard key={c.id} c={c} lang={lang} />
          ))}
        </div>
        <ProvinceDestinationsHub lang={lang} />
      </div>
    </>
  );
}
