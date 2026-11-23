import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { href, Lang, L, tx } from "@/lib/i18n";
import type { GuideCategory, ToolId } from "@/data/types";
import { GUIDES } from "@/data/guides";
import { getTool } from "@/data/tools";
import { UI } from "@/data/ui";
import { breadcrumbLd } from "@/lib/seo";
import { PageHeader } from "./PageHeader";
import { GuideCard } from "./GuideCard";
import { IconBox } from "./IconBox";
import { JsonLd } from "./JsonLd";

/** Category hub page (Visa & Entry / Money & Internet / Transport / All guides). */
export function HubPage({
  lang,
  path,
  title,
  subtitle,
  categories,
  tools,
  children,
}: {
  lang: Lang;
  path: string;
  title: L;
  subtitle: L;
  categories: GuideCategory[];
  tools: ToolId[];
  children?: React.ReactNode;
}) {
  const t = UI[lang];
  return (
    <>
      <JsonLd data={breadcrumbLd(lang, [{ name: t.home, path: "/" }, { name: tx(title, lang), path }])} />
      <PageHeader lang={lang} title={tx(title, lang)} subtitle={tx(subtitle, lang)} crumbs={[{ label: tx(title, lang) }]} />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        {tools.length > 0 && (
          <div className="mb-10 grid gap-4 md:grid-cols-2">
            {tools.map((id) => {
              const tool = getTool(id)!;
              return (
                <Link key={id} href={href(lang, `/tools/${id}`)} className="flex items-center gap-4 rounded-xl border-2 border-red-100 bg-white p-5 hover:border-red-300 hover:shadow-md">
                  <IconBox name={tool.icon} size="lg" />
                  <div className="flex-1">
                    <div className="font-bold text-slate-900">{tx(tool.title, lang)}</div>
                    <div className="text-sm text-slate-600">{tx(tool.desc, lang)}</div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-red-500" />
                </Link>
              );
            })}
          </div>
        )}
        {children}
        {categories.map((c) => {
          const list = GUIDES.filter((g) => g.category === c);
          if (!list.length) return null;
          return (
            <section key={c} className="mb-10">
              {categories.length > 1 && <h2 className="mb-4 text-2xl font-bold text-slate-900">{t.categories[c]}</h2>}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {list.map((g) => (
                  <GuideCard key={g.slug} g={g} lang={lang} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
