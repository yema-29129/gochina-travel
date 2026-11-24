import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { href, isLang, LANGS, tx } from "@/lib/i18n";
import { absUrl, buildMetadata, breadcrumbLd } from "@/lib/seo";
import { TOOLS, getTool } from "@/data/tools";
import { getGuide } from "@/data/guides";
import { UI } from "@/data/ui";
import { PageHeader } from "@/components/PageHeader";
import { IconBox } from "@/components/IconBox";
import { JsonLd } from "@/components/JsonLd";
import { AdSlot } from "@/components/AdSlot";
import { ToolRenderer } from "@/components/tools/registry";

type P = { params: Promise<{ lang: string; id: string }> };

export function generateStaticParams() {
  return LANGS.flatMap((lang) => TOOLS.map((t) => ({ lang, id: t.id })));
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang, id } = await params;
  const tool = getTool(id);
  if (!tool || !isLang(lang)) return {};
  return buildMetadata({ lang, path: `/tools/${id}`, title: tool.seoTitle, description: tool.desc });
}

export default async function ToolPage({ params }: P) {
  const { lang, id } = await params;
  if (!isLang(lang)) notFound();
  const tool = getTool(id);
  if (!tool) notFound();
  const t = UI[lang];
  const title = tx(tool.title, lang);
  const related = tool.related.map(getGuide).filter((g): g is NonNullable<typeof g> => !!g);
  const others = TOOLS.filter((x) => x.id !== tool.id).slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: title,
            description: tx(tool.desc, lang),
            url: absUrl(lang, `/tools/${id}`),
            applicationCategory: "TravelApplication",
            operatingSystem: "Any (web browser)",
            inLanguage: lang === "zh" ? "zh-CN" : "en",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          },
          breadcrumbLd(lang, [
            { name: t.home, path: "/" },
            { name: t.nav.tools, path: "/tools" },
            { name: title, path: `/tools/${id}` },
          ]),
        ]}
      />
      <PageHeader lang={lang} title={title} subtitle={tx(tool.desc, lang)} crumbs={[{ path: "/tools", label: t.nav.tools }, { label: title }]} />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <ToolRenderer id={tool.id} lang={lang} />
          </div>
          <AdSlot lang={lang} slot="inArticle" />
        </div>
        <aside className="space-y-4 lg:self-start">
          {related.length > 0 && (
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h2 className="mb-2 px-1 text-sm font-semibold uppercase text-slate-500">{t.related}</h2>
              <ul className="space-y-1">
                {related.map((g) => (
                  <li key={g.slug}>
                    <Link href={href(lang, `/guides/${g.slug}`)} className="flex items-center gap-3 rounded-lg p-2 text-sm text-slate-700 hover:bg-slate-50">
                      <IconBox name={g.icon} size="sm" />
                      {tx(g.title, lang)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h2 className="mb-2 px-1 text-sm font-semibold uppercase text-slate-500">{t.allTools}</h2>
            <ul className="space-y-1">
              {others.map((x) => (
                <li key={x.id}>
                  <Link href={href(lang, `/tools/${x.id}`)} className="flex items-center gap-3 rounded-lg p-2 text-sm text-slate-700 hover:bg-slate-50">
                    <IconBox name={x.icon} size="sm" />
                    {tx(x.title, lang)}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href={href(lang, "/tools")} className="mt-2 flex items-center gap-1 px-2 text-sm font-semibold text-red-600">
              {t.viewAll} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <AdSlot lang={lang} slot="sidebar" />
        </aside>
      </div>
    </>
  );
}
