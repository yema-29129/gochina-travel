import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { href, isLang, t2, tx } from "@/lib/i18n";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { LAST_UPDATED, SITE } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";

type P = { params: Promise<{ lang: string }> };
const title = t2("About GoChina", "关于 GoChina");
const description = t2(
  "Who runs GoChina, how we research and update our China travel guides, and our editorial independence policy.",
  "GoChina 由谁运营、我们如何调研和更新中国旅行指南，以及我们的编辑独立性原则。"
);

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata({ lang, path: "/about", title, description });
}

export default async function AboutPage({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const sections = [
    {
      h: t2("Our mission", "我们的使命"),
      p: t2(
        `${SITE.name} is an independent, practical field guide built specifically for international travelers visiting mainland China. Traveling in China is remarkably safe and convenient once you understand the local digital ecosystem—from 240-hour visa-free transit rules and linking foreign cards to Alipay, to navigating high-speed rail stations and avoiding domestic flight power-bank confiscations. Our goal is to replace vague travel blogs with accurate, actionable tools and step-by-step guides.`,
        `${SITE.name} 是一份专为访问中国大陆的国际旅行者打造的独立、实用出行指南。只要了解当地的数字生态——从 240 小时过境免签规则和外卡绑定支付宝，到高铁站乘车和避开国内航班充电宝被没收——在中国旅行其实非常安全且便捷。我们的目标是用准确、可落地的工具和分步指南取代泛泛而谈的游记。`
      ),
    },
    {
      h: t2("How we verify information", "我们如何核实信息"),
      p: t2(
        "Visa policies, transit port lists, tax refund rules, and aviation regulations are cross-checked against official notices from the National Immigration Administration (NIA), Civil Aviation Administration of China (CAAC), China Railway 12306, and municipal airport authorities. Every guide displays its last-updated date, and our bilingual English/Chinese pages stay 1:1 synchronized so both international travelers and Chinese-speaking reviewers can verify every detail.",
        "签证政策、过境口岸名单、离境退税规则和民航规定均对照国家移民管理局（NIA）、中国民航局（CAAC）、中国铁路 12306 及各地机场官方公告交叉核对。每篇指南均标注最后更新日期，且英文与中文页面保持 1:1 同步，方便国际游客与中文审校者核查每一处细节。"
      ),
    },
    {
      h: t2("Editorial independence & how this site is funded", "编辑独立性与网站运营方式"),
      p: t2(
        `All guides, calculators, and offline Chinese show-cards on ${SITE.name} are 100% free to use. To keep the site running without paywalls, we display clearly labeled advertisements (such as Google AdSense) and use affiliate links for travel services we genuinely recommend (such as Trip.com, travel eSIMs, and Wise). Commercial partnerships never influence our safety warnings, fee calculations, or visa rule checks.`,
        `${SITE.name} 上的所有指南、计算器和离线中文展示卡均 100% 免费使用。为了在无付费墙的前提下维持网站运营，我们会展示清晰标注的广告（如 Google AdSense），并在我们真心推荐的旅行服务（如 Trip.com、旅游 eSIM 和 Wise）中使用联盟推广链接。商业合作绝不影响我们的安全提示、费用计算或免签规则校验。`
      ),
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbLd(lang, [{ name: lang === "zh" ? "首页" : "Home", path: "/" }, { name: tx(title, lang), path: "/about" }])} />
      <PageHeader lang={lang} title={tx(title, lang)} subtitle={tx(description, lang)} crumbs={[{ label: tx(title, lang) }]} />
      <div className="mx-auto max-w-3xl space-y-8 px-4 py-10 sm:px-6">
        {sections.map((s, i) => (
          <section key={i} className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">{tx(s.h, lang)}</h2>
            <p className="mt-3 leading-relaxed text-slate-700">{tx(s.p, lang)}</p>
          </section>
        ))}
        <div className="rounded-xl border border-slate-200 bg-slate-100 p-5 text-sm text-slate-600">
          {tx(t2(`Last updated: ${LAST_UPDATED}. Have a correction or question? `, `最后更新：${LAST_UPDATED}。有纠错或建议？`), lang)}
          <Link href={href(lang, "/contact")} className="font-semibold text-red-600 hover:underline">
            {tx(t2("Contact us →", "联系我们 →"), lang)}
          </Link>
        </div>
      </div>
    </>
  );
}
