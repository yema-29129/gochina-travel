import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";
import { href, isLang, LANGS, tx } from "@/lib/i18n";
import { buildMetadata, articleLd, breadcrumbLd, faqLd } from "@/lib/seo";
import { GUIDES, getGuide } from "@/data/guides";
import { UI } from "@/data/ui";
import { PageHeader } from "@/components/PageHeader";
import { Blocks } from "@/components/Blocks";
import { Faq } from "@/components/Faq";
import { IconBox } from "@/components/IconBox";
import { JsonLd } from "@/components/JsonLd";
import { AdSlot } from "@/components/AdSlot";
import { HelpContactCard } from "@/components/HelpContactCard";

type P = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return LANGS.flatMap((lang) => GUIDES.map((g) => ({ lang, slug: g.slug })));
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang, slug } = await params;
  const g = getGuide(slug);
  if (!g || !isLang(lang)) return {};
  return buildMetadata({ lang, path: `/guides/${slug}`, title: g.seoTitle ?? g.title, description: g.summary, type: "article" });
}

const HUB: Record<string, string> = { visa: "/visa", money: "/money", food: "/money", transport: "/transport", practical: "/guides" };

export default async function GuidePage({ params }: P) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();
  const guide = getGuide(slug);
  if (!guide) notFound();
  const t = UI[lang];
  const title = tx(guide.title, lang);
  const related = (guide.related ?? []).map(getGuide).filter((g): g is NonNullable<typeof g> => !!g);

  // One contextual mini action card for the right rail (replaces the cluttered category list)
  const railAction =
    slug === "airports"
      ? {
          badge: { en: "Late Arrival?", zh: "深夜落地？" },
          title: { en: "Pre-Book English Airport Pickup", zh: "预订英文举牌接机" },
          desc: { en: "Fixed price from ~$28 USD · Free flight-delay wait.", zh: "一口价约 $28 美元起 · 航班延误免费等。" },
          cta: { en: "Check Pickup Prices", zh: "查看接机一口价" },
          href: "#arrival-pickup",
          external: false,
        }
      : slug === "domestic-flights"
        ? {
            badge: { en: "3-Second Check", zh: "3 秒自检" },
            title: { en: "Will Security Confiscate Your Power Bank?", zh: "你的充电宝会被没收吗？" },
            desc: { en: "Calculate Wh & check the CCC domestic flight rule instantly.", zh: "立刻换算 Wh 并核对国内航班 CCC 规定。" },
            cta: { en: "Run Instant Check", zh: "立即自检" },
            href: "#power-bank-ccc",
            external: false,
          }
        : slug === "metro-didi-maps"
          ? {
              badge: { en: "In the Taxi?", zh: "正在打车？" },
              title: { en: "Live Taxi Address Show-Card", zh: "实时出租车全屏地址卡" },
              desc: { en: "Type your hotel address & show it full-screen to the driver.", zh: "输入酒店中文地址，一键全屏给司机看。" },
              cta: { en: "Jump to Taxi Card", zh: "打开地址卡" },
              href: "#taxis",
              external: false,
            }
          : {
              badge: { en: "Interactive Tool", zh: "实用工具" },
              title: { en: "China eSIM & Data Calculator", zh: "中国上网与 eSIM 流量计算器" },
              desc: { en: "Match the exact GB tier for your phone & trip length.", zh: "按机型与天数精准匹配流量档位。" },
              cta: { en: "Open Calculator", zh: "打开计算器" },
              href: href(lang, "/tools/esim-calculator"),
              external: false,
            };

  return (
    <>
      <JsonLd
        data={[
          articleLd(lang, { title, description: tx(guide.summary, lang), path: `/guides/${slug}`, updated: guide.updated }),
          breadcrumbLd(lang, [
            { name: t.home, path: "/" },
            { name: t.categories[guide.category], path: HUB[guide.category] },
            { name: title, path: `/guides/${slug}` },
          ]),
          ...(guide.faq?.length ? [faqLd(lang, guide.faq)] : []),
        ]}
      />
      <PageHeader
        lang={lang}
        title={title}
        subtitle={tx(guide.summary, lang)}
        crumbs={[{ path: HUB[guide.category], label: t.categories[guide.category] }, { label: title }]}
      >
        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{guide.readMin} {t.minRead}</span>
          <span>{t.updated} {guide.updated}</span>
        </div>
      </PageHeader>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_300px]">
        <article className="min-w-0">
          <div className="rounded-xl border border-slate-200 border-l-4 border-l-emerald-600 bg-white p-5 shadow-xs">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-emerald-800">{t.keyPoints}</h2>
            <ul className="space-y-2.5 text-sm">
              {guide.keyPoints.map((k, i) => (
                <li key={i} className="flex gap-2.5 leading-relaxed text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{tx(k, lang)}</span>
                </li>
              ))}
            </ul>
          </div>

          {guide.sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-32">
              <h2 className="mb-2 mt-10 text-2xl font-bold text-slate-900">{tx(s.heading, lang)}</h2>
              <Blocks blocks={s.blocks} lang={lang} />
            </section>
          ))}

          {guide.faq && guide.faq.length > 0 && (
            <section id="faq" className="scroll-mt-32">
              <h2 className="mb-4 mt-12 text-2xl font-bold text-slate-900">{t.faq}</h2>
              <Faq items={guide.faq} lang={lang} />
            </section>
          )}

          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="mb-4 text-xl font-bold text-slate-900">{t.related}</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {related.map((g) => (
                  <Link key={g.slug} href={href(lang, `/guides/${g.slug}`)} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 hover:border-red-200 hover:shadow-sm">
                    <IconBox name={g.icon} size="sm" />
                    <span className="font-medium text-slate-900">{tx(g.title, lang)}</span>
                    <ArrowRight className="ml-auto h-4 w-4 text-slate-400" />
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-10">
            <HelpContactCard lang={lang} context="general" />
          </div>
        </article>

        <aside className="space-y-4 lg:self-start">
          <nav className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="mb-2 px-2 text-xs font-bold uppercase tracking-wider text-slate-500">{t.onThisPage}</h3>
            <ul className="space-y-0.5 text-sm">
              {guide.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="block rounded-md px-2 py-1.5 text-slate-700 transition hover:bg-slate-50 hover:text-slate-950">
                    {tx(s.heading, lang)}
                  </a>
                </li>
              ))}
              {guide.faq?.length ? (
                <li>
                  <a href="#faq" className="block rounded-md px-2 py-1.5 text-slate-700 transition hover:bg-slate-50 hover:text-slate-950">
                    {t.faq}
                  </a>
                </li>
              ) : null}
            </ul>
          </nav>

          {/* Single contextual mini action card */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
            <span className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700">
              {tx(railAction.badge, lang)}
            </span>
            <h3 className="mt-2 text-sm font-bold text-slate-900">{tx(railAction.title, lang)}</h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">{tx(railAction.desc, lang)}</p>
            <a
              href={railAction.href}
              className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-600"
            >
              {tx(railAction.cta, lang)}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <AdSlot lang={lang} slot="sidebar" />
        </aside>
      </div>
    </>
  );
}
