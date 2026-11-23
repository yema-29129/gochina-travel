import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, t2, tx } from "@/lib/i18n";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { LAST_UPDATED, SITE } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";

type P = { params: Promise<{ lang: string }> };
const title = t2("Disclaimer & Affiliate Disclosure", "免责声明与联盟披露");
const description = t2(
  "Important travel, medical, and visa disclaimers, plus full disclosure of our affiliate links and Google AdSense advertising.",
  "重要的旅行、医疗和签证免责声明，以及我们的联盟推广链接和 Google AdSense 广告完整披露。"
);

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata({ lang, path: "/disclaimer", title, description });
}

export default async function DisclaimerPage({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const sections = [
    {
      h: t2("1. No government affiliation", "1. 非官方声明"),
      p: t2(
        `${SITE.name} is an independent travel resource and is not affiliated with, endorsed by, or connected to the Chinese government, the National Immigration Administration (NIA), China Railway, or any embassy or consulate.`,
        `${SITE.name} 是独立的旅行资讯网站，与中国政府、国家移民管理局（NIA）、中国铁路或任何使领馆无任何隶属、背书或关联关系。`
      ),
    },
    {
      h: t2("2. Affiliate link disclosure", "2. 联盟推广链接披露"),
      p: t2(
        "Some outbound links on this website—such as links to Trip.com, eSIM providers (Airalo, Holafly, Nomad), Wise, and travel insurance providers—are affiliate links marked with rel=\"sponsored nofollow\". If you click these links and make a booking or purchase, we may earn a small commission at zero extra cost to you. This income funds our research, hosting, and free tools.",
        "本网站上的部分外部链接（如 Trip.com、eSIM 服务商 Airalo/Holafly/Nomad、Wise 及旅行保险服务商链接）为联盟推广链接，并按规范标注 rel=\"sponsored nofollow\"。如果你通过这些链接预订或购买，我们可能会在不增加你任何费用的前提下获得少量佣金，用于支持内容调研、服务器托管和免费工具维护。"
      ),
    },
    {
      h: t2("3. Advertising disclosure (Google AdSense)", "3. 广告披露（Google AdSense）"),
      p: t2(
        "We display third-party advertisements served by Google AdSense. Ads are automatically selected and clearly separated from our editorial content. The presence of an ad does not constitute an endorsement by GoChina.",
        "本站展示由 Google AdSense 提供的第三方广告。广告由系统自动匹配并与正文内容清晰区分，广告的出现不代表 GoChina 对其产品或服务的背书。"
      ),
    },
    {
      h: t2("4. Health, allergy & financial accuracy", "4. 健康、过敏与费用准确性提示"),
      p: t2(
        `Our Chinese allergy cards and pharmacy symptom tables are designed to assist communication, not to replace medical judgment. Severe allergy sufferers should always carry prescribed emergency medication (such as an epinephrine auto-injector) and verify kitchen cross-contamination directly. Exchange rates and bank fees in our calculators are estimates—always check your card issuer's exact terms. Last updated: ${LAST_UPDATED}.`,
        `本站的中文过敏卡和药店症状对照表旨在辅助沟通，不能替代专业医疗判断。严重过敏人士应随身携带处方急救药物（如肾上腺素自动注射笔）并当面确认厨房交叉污染风险。计算器中的汇率和银行费率为估算值，请以发卡行实际条款为准。最后更新日期：${LAST_UPDATED}。`
      ),
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbLd(lang, [{ name: lang === "zh" ? "首页" : "Home", path: "/" }, { name: tx(title, lang), path: "/disclaimer" }])} />
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
