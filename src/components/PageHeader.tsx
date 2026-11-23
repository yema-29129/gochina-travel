import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { href, Lang } from "@/lib/i18n";
import { UI } from "@/data/ui";

export function PageHeader({
  lang,
  title,
  subtitle,
  crumbs,
  children,
}: {
  lang: Lang;
  title: string;
  subtitle?: string;
  crumbs?: { path?: string; label: string }[];
  children?: React.ReactNode;
}) {
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-3 flex flex-wrap items-center gap-1 text-sm text-slate-500">
            <Link href={href(lang, "/")} className="hover:text-red-600">{UI[lang].home}</Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5" />
                {c.path ? (
                  <Link href={href(lang, c.path)} className="hover:text-red-600">{c.label}</Link>
                ) : (
                  <span className="text-slate-700">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-2 max-w-3xl text-lg text-slate-600">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}
