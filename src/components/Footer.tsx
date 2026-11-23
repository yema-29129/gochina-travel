import Link from "next/link";
import { Phone } from "lucide-react";
import { href, Lang, tx } from "@/lib/i18n";
import { UI } from "@/data/ui";
import { GUIDES } from "@/data/guides";
import { TOOLS } from "@/data/tools";
import { SITE } from "@/lib/site";

export function Footer({ lang }: { lang: Lang }) {
  const t = UI[lang];
  const nums = [
    { n: "110", l: t.police },
    { n: "120", l: t.ambulance },
    { n: "119", l: t.fire },
    { n: "12367", l: t.immigration },
  ];
  const cols: { title: string; cat: (typeof GUIDES)[number]["category"][] }[] = [
    { title: t.nav.visa, cat: ["visa"] },
    { title: t.nav.money, cat: ["money", "food"] },
    { title: t.nav.transport, cat: ["transport", "practical"] },
  ];

  return (
    <footer className="no-print mt-16 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mb-10 rounded-xl bg-slate-800 p-5">
          <div className="mb-3 flex items-center gap-2 font-semibold text-white">
            <Phone className="h-4 w-4 text-red-400" />
            {t.emergency}
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {nums.map((x) => (
              <a key={x.n} href={`tel:${x.n}`} className="rounded-lg bg-slate-900 px-4 py-3 hover:bg-slate-700">
                <div className="text-2xl font-bold text-white">{x.n}</div>
                <div className="text-sm text-slate-400">{x.l}</div>
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="text-xl font-extrabold text-white">
              Go<span className="text-red-500">China</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{t.footerAbout}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="mb-3 font-semibold text-white">{c.title}</div>
              <ul className="space-y-2 text-sm">
                {GUIDES.filter((g) => c.cat.includes(g.category)).map((g) => (
                  <li key={g.slug}>
                    <Link href={href(lang, `/guides/${g.slug}`)} className="hover:text-white">{tx(g.title, lang)}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <div className="mb-3 font-semibold text-white">{t.nav.tools}</div>
            <ul className="space-y-2 text-sm">
              {TOOLS.map((tool) => (
                <li key={tool.id}>
                  <Link href={href(lang, `/tools/${tool.id}`)} className="hover:text-white">{tx(tool.title, lang)}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-800 pt-6 text-sm">
          {(["about", "contact", "privacy", "terms", "disclaimer"] as const).map((k) => (
            <Link key={k} href={href(lang, `/${k}`)} className="hover:text-white">{t.footerLinks[k]}</Link>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-slate-500">
          © 2026 {SITE.name}. {t.disclaimerShort}
        </p>
      </div>
    </footer>
  );
}
