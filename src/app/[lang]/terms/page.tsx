import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, t2, tx } from "@/lib/i18n";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { LAST_UPDATED, SITE } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";

type P = { params: Promise<{ lang: string }> };
const title = t2("Terms of Use", "使用条款");
const description = t2(
  "Terms governing your use of GoChina travel guides, interactive tools, and downloadable show-cards.",
  "使用 GoChina 旅行指南、交互式工具和可下载展示卡的相关条款。"
);

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata({ lang, path: "/terms", title, description });
}

export default async function TermsPage({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const sections = [
    {
      h: t2("1. Informational use only", "1. 仅供参考"),
      p: t2(
        `By accessing ${SITE.name}, you agree that all guides, visa checkers, fee calculators, allergy cards, and pharmacy reference tables are provided for general informational purposes only. They do not constitute legal, immigration, financial, or medical advice.`,
        `访问 ${SITE.name} 即表示你同意：本网站的所有指南、免签检查器、费用计算器、过敏卡和药店对照表仅作一般信息参考，不构成法律、出入境、金融或医疗建议。`
      ),
    },
    {
      h: t2("2. Your responsibility to verify", "2. 用户的核实责任"),
      p: t2(
        "Entry regulations, airline boarding rules, train schedules, attraction opening hours, exchange rates, and medical dosages can change without notice. You are solely responsible for verifying visa eligibility with official Chinese diplomatic missions, the National Immigration Administration (nia.gov.cn), and your airline before departure, and for confirming ingredients and medications with restaurant staff or licensed pharmacists.",
        "入境规定、航司登机规则、列车时刻、景点开放时间、汇率和用药剂量均可能随时变动。你有责任在出发前向中国驻外使领馆、国家移民管理局（nia.gov.cn）及航空公司核实签证资格，并在就餐或购药时向餐厅人员或执业药师当面确认配料与用药安全。"
      ),
    },
    {
      h: t2("3. Intellectual property", "3. 知识产权"),
      p: t2(
        `Original text, translations, tables, and interactive tools on ${SITE.name} are protected by copyright. You may print or save personal copies (such as allergy cards, taxi cards, and itineraries) for your own trip, but you may not bulk-scrape or republish our content without written permission.`,
        `${SITE.name} 上的原创文字、翻译、表格和交互工具受版权保护。你可以为个人旅行打印或保存副本（如过敏卡、打车卡和行程单），但未经书面许可不得批量抓取或转载本站内容。`
      ),
    },
    {
      h: t2("4. Limitation of liability", "4. 责任限制"),
      p: t2(
        `To the fullest extent permitted by law, ${SITE.name} and its contributors shall not be liable for any denied boarding, missed flights, financial fees, allergic reactions, or other losses arising from the use of this website. Last updated: ${LAST_UPDATED}.`,
        `在法律允许的最大范围内，${SITE.name} 及其贡献者不对因使用本网站而产生的拒载、误机、资金费用、过敏反应或其他损失承担责任。最后更新日期：${LAST_UPDATED}。`
      ),
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbLd(lang, [{ name: lang === "zh" ? "首页" : "Home", path: "/" }, { name: tx(title, lang), path: "/terms" }])} />
      <PageHeader lang={lang} title={tx(title, lang)} subtitle={tx(description, lang)} crumbs={[{ label: tx(title, lang) }]} />
      <div className="mx-auto max-w-3xl space-y-6 px-4 py-10 sm:px-6">
        {sections.map((s, i) => (
          <section key={i} className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">{tx(s.h, lang)}</h2>
            <p className="mt-2 leading-relaxed text-slate-700">{tx(s.p, lang)}</p>
          </section>
        ))}
      </div>
    </>
  );
}
