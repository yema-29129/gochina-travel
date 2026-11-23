import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mail, MessageSquareWarning, Handshake } from "lucide-react";
import { isLang, t2, tx } from "@/lib/i18n";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";

type P = { params: Promise<{ lang: string }> };
const title = t2("Contact Us", "联系我们");
const description = t2(
  "Report an outdated visa or ticket rule, suggest a new city guide, or reach out for partnerships.",
  "反馈过时的签证或门票规则、建议新增城市指南，或联系商务合作。"
);

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata({ lang, path: "/contact", title, description });
}

export default async function ContactPage({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const cards = [
    {
      Icon: MessageSquareWarning,
      h: t2("Report a policy update or error", "反馈政策变更或内容错误"),
      p: t2(
        "China's entry rules, airport links, and attraction ticket schedules change frequently. If you noticed a recent change on the ground, please email us with the page URL and details so we can verify and update it quickly.",
        "中国的入境政策、机场交通和景点放票规则经常调整。如果你在实地旅行中发现了最新变化，请发邮件附上页面链接和详情，我们会尽快核实更新。"
      ),
    },
    {
      Icon: Mail,
      h: t2("General questions & feedback", "一般咨询与建议"),
      p: t2(
        "Note: We are an independent travel information site—not a Chinese embassy, visa agency, or airline. For official immigration rulings, please call China's National Immigration Administration 24/7 hotline at +86-12367.",
        "注意：我们是独立的旅行信息网站，并非中国使领馆、签证代办机构或航空公司。如需官方出入境裁定，请拨打国家移民管理局 24 小时热线 +86-12367。"
      ),
    },
    {
      Icon: Handshake,
      h: t2("Advertising & partnerships", "广告与商务合作"),
      p: t2(
        "For travel brand partnerships, eSIM testing, or media inquiries, send an email to our editorial desk. We typically respond within 2 business days.",
        "如需旅行品牌合作、eSIM 实测或媒体垂询，请发送邮件至我们的编辑部邮箱，我们通常会在 2 个工作日内回复。"
      ),
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbLd(lang, [{ name: lang === "zh" ? "首页" : "Home", path: "/" }, { name: tx(title, lang), path: "/contact" }])} />
      <PageHeader lang={lang} title={tx(title, lang)} subtitle={tx(description, lang)} crumbs={[{ label: tx(title, lang) }]} />
      <div className="mx-auto max-w-3xl space-y-6 px-4 py-10 sm:px-6">
        <div className="rounded-2xl border-2 border-red-100 bg-white p-6">
          <div className="text-sm font-semibold uppercase text-red-600">{tx(t2("Email", "电子邮箱"), lang)}</div>
          <a href={`mailto:${SITE.email}`} className="mt-1 inline-block text-2xl font-bold text-slate-900 hover:text-red-600">
            {SITE.email}
          </a>
          <p className="mt-2 text-sm text-slate-600">
            {tx(t2("We read every message and reply in English or Chinese.", "我们阅读每一封来信，支持英文或中文回复。"), lang)}
          </p>
        </div>

        <div className="grid gap-4">
          {cards.map((c, i) => (
            <div key={i} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
              <c.Icon className="mt-0.5 h-6 w-6 shrink-0 text-red-600" />
              <div>
                <h2 className="font-bold text-slate-900">{tx(c.h, lang)}</h2>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{tx(c.p, lang)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
