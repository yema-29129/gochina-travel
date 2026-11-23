import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, t2, tx } from "@/lib/i18n";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { LAST_UPDATED, SITE } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";

type P = { params: Promise<{ lang: string }> };
const title = t2("Privacy Policy", "隐私政策");
const description = t2(
  "How GoChina handles browser storage, cookies, Google Analytics, Google AdSense advertising, and your GDPR/CCPA privacy rights.",
  "GoChina 如何处理浏览器本地存储、Cookie、Google Analytics、Google AdSense 广告，以及你的 GDPR/CCPA 隐私权利。"
);

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata({ lang, path: "/privacy", title, description });
}

export default async function PrivacyPage({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const sections = [
    {
      h: t2("1. Information we do NOT collect", "1. 我们不收集的信息"),
      p: t2(
        `${SITE.name} does not require user registration, accounts, or logins. All interactive calculators (Visa-Free Checker, Payment Fee Calculator, Ticket Alarm, Allergy Card Builder, Taxi Address Card, and Packing Checklist) run 100% locally inside your web browser. We never upload, store, or transmit your passport details, travel dates, hotel addresses, or health/allergy selections to any server.`,
        `${SITE.name} 不需要用户注册、创建账号或登录。所有交互式计算器（免签检查器、支付手续费计算器、放票闹钟、过敏卡生成器、打车地址卡和行前清单）均 100% 在你的浏览器本地运行。我们绝不会将你的护照信息、出行日期、酒店地址或健康/过敏选项上传、存储或传输到任何服务器。`
      ),
    },
    {
      h: t2("2. Local browser storage (localStorage & offline cache)", "2. 浏览器本地存储（localStorage 与离线缓存）"),
      p: t2(
        "To save your checklist progress, hotel taxi address card, and dietary allergy selections across visits—and to allow offline viewing when you have no mobile signal—our website stores your inputs in your browser's localStorage and service worker cache. You can clear this data at any time through your browser settings.",
        "为了在多次访问间保存你的行前清单进度、打车酒店地址卡和饮食过敏选项，并支持在无信号时离线查看，本网站会将你的输入保存在浏览器的 localStorage 和 Service Worker 缓存中。你可以随时在浏览器设置中清除这些数据。"
      ),
    },
    {
      h: t2("3. Google Analytics 4", "3. Google Analytics 4（谷歌分析）"),
      p: t2(
        "We may use Google Analytics 4 (GA4) to understand aggregate traffic patterns (such as which guides are most helpful and which countries visitors arrive from). Google Analytics uses cookies or similar identifiers to measure site usage. You can opt out of Google Analytics across all websites by installing the Google Analytics Opt-out Browser Add-on.",
        "我们可能使用 Google Analytics 4（GA4）来了解汇总的流量情况（例如哪些指南最有帮助、访客来自哪些国家）。Google Analytics 使用 Cookie 或类似标识符来衡量网站使用情况。你可以通过安装 Google Analytics 停用浏览器插件在所有网站上退出统计。"
      ),
    },
    {
      h: t2("4. Google AdSense & third-party advertising cookies", "4. Google AdSense 与第三方广告 Cookie"),
      p: t2(
        "We use Google AdSense to display advertisements. Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the Internet. You may opt out of personalized advertising by visiting Google Ads Settings (https://adssettings.google.com) or www.aboutads.info.",
        "我们使用 Google AdSense 展示广告。包括 Google 在内的第三方供应商会使用 Cookie，根据用户此前对本网站或其他网站的访问记录来投放广告。Google 使用广告 Cookie 使其及其合作伙伴能够根据你对本网站和/或互联网上其他网站的访问情况向你展示广告。你可以访问 Google 广告设置（https://adssettings.google.com）或 www.aboutads.info 选择退出个性化广告。"
      ),
    },
    {
      h: t2("5. Consent Mode for EEA, UK & Switzerland visitors (GDPR)", "5. 面向欧洲经济区、英国和瑞士访客的同意模式（GDPR）"),
      p: t2(
        "For visitors located in the European Economic Area (EEA), the United Kingdom, and Switzerland, our site implements Google Consent Mode v2: advertising and analytics storage default to denied until you grant consent via our Google-certified Consent Management Platform (CMP) banner. You may change or withdraw your consent at any time.",
        "对于位于欧洲经济区（EEA）、英国和瑞士的访客，本网站采用 Google Consent Mode v2：在通过经 Google 认证的同意管理平台（CMP）横幅获得你的同意之前，广告和分析存储默认处于拒绝状态。你可以随时更改或撤回你的同意。"
      ),
    },
    {
      h: t2("6. External & affiliate links", "6. 外部链接与联盟推广链接"),
      p: t2(
        "Our pages link to external websites (such as official government portals, Trip.com, eSIM providers, and financial apps). Once you leave our site, those websites' own privacy policies apply. Affiliate links may set a referral cookie on the partner's domain so they know you came from our guide.",
        "我们的页面会链接至外部网站（如官方政务平台、Trip.com、eSIM 服务商和金融应用）。一旦离开本网站，即适用对应网站的隐私政策。联盟推广链接可能会在合作方域名下设置引荐 Cookie，以便对方识别你来自本指南。"
      ),
    },
    {
      h: t2("7. Contact regarding privacy", "7. 隐私相关联系"),
      p: t2(
        `If you have any questions about this Privacy Policy or wish to exercise your privacy rights under GDPR or CCPA, please contact us at ${SITE.email}. Last updated: ${LAST_UPDATED}.`,
        `如果你对本隐私政策有任何疑问，或希望行使 GDPR / CCPA 下的隐私权利，请通过 ${SITE.email} 联系我们。最后更新日期：${LAST_UPDATED}。`
      ),
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbLd(lang, [{ name: lang === "zh" ? "首页" : "Home", path: "/" }, { name: tx(title, lang), path: "/privacy" }])} />
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
