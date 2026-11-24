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
  const sameCat = GUIDES.filter((g) => g.category === guide.category);

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
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <h2 className="mb-3 font-bold text-emerald-900">{t.keyPoints}</h2>
            <ul className="space-y-2">
              {guide.keyPoints.map((k, i) => (
                <li key={i} className="flex gap-2 text-emerald-900">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  {tx(k, lang)}
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

        <aside className="space-y-4 lg:sticky lg:top-32 lg:self-start">
          <nav className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="mb-2 px-2 text-sm font-semibold uppercase text-slate-500">{t.onThisPage}</h3>
            <ul className="space-y-0.5 text-sm">
              {guide.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="block rounded-md px-2 py-1.5 text-slate-700 hover:bg-slate-50 hover:text-red-600">{tx(s.heading, lang)}</a>
                </li>
              ))}
              {guide.faq?.length ? (
                <li><a href="#faq" className="block rounded-md px-2 py-1.5 text-slate-700 hover:bg-slate-50 hover:text-red-600">{t.faq}</a></li>
              ) : null}
            </ul>
          </nav>
          <nav className="hidden rounded-xl border border-slate-200 bg-white p-4 lg:block">
            <h3 className="mb-2 px-2 text-sm font-semibold uppercase text-slate-500">{t.categories[guide.category]}</h3>
            <ul className="space-y-0.5 text-sm">
              {sameCat.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={href(lang, `/guides/${g.slug}`)}
                    className={`block rounded-md px-2 py-1.5 ${g.slug === guide.slug ? "bg-red-50 font-semibold text-red-700" : "text-slate-700 hover:bg-slate-50"}`}
                  >
                    {tx(g.title, lang)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <AdSlot lang={lang} slot="sidebar" />
        </aside>
      </div>
    </>
  );
}
