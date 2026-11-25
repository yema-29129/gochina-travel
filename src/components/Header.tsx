"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Globe, Menu, X, Megaphone, ChevronRight } from "lucide-react";
import { LANGS, LANG_LABEL, Lang, href } from "@/lib/i18n";
import { UI } from "@/data/ui";

export function Header({ lang }: { lang: Lang }) {
  const t = UI[lang];
  const pathname = usePathname() || `/${lang}`;
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/visa", label: t.nav.visa },
    { path: "/money", label: t.nav.money },
    { path: "/transport", label: t.nav.transport },
    { path: "/cities", label: t.nav.cities },
    { path: "/tools", label: t.nav.tools },
    { path: "/planner", label: t.nav.planner },
  ];

  const rest = pathname.replace(/^\/(en|zh|ja|ko)(?=\/|$)/, "");
  const switchTo = (l: Lang) => `/${l}${rest}`;
  const isActive = (p: string) => rest === p || rest.startsWith(p + "/");

  return (
    <header className="no-print sticky top-0 z-40">
      <div className="bg-red-600 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-sm">
          <Megaphone className="h-4 w-4 shrink-0" />
          <span className="truncate">{t.alert}</span>
          <Link href={href(lang, "/tools/visa-checker")} className="inline-flex shrink-0 items-center font-semibold underline underline-offset-2">
            {t.alertCta}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link href={href(lang, "/")} className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-lg font-bold text-white">中</span>
            <span className="text-xl font-extrabold tracking-tight">
              Go<span className="text-red-600">China</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {links.map((l) => (
              <Link
                key={l.path}
                href={href(lang, l.path)}
                className={`whitespace-nowrap rounded-lg px-3 py-2 text-[15px] font-medium transition-colors ${
                  isActive(l.path) ? "bg-red-50 text-red-700" : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <div className="flex shrink-0 items-center rounded-lg border border-slate-200 p-0.5">
              <Globe className="ml-1.5 mr-0.5 hidden h-4 w-4 text-slate-500 sm:block" />
              {LANGS.map((l) => (
                <Link
                  key={l}
                  href={switchTo(l)}
                  hrefLang={l === "zh" ? "zh-CN" : l}
                  className={`whitespace-nowrap rounded-md px-1.5 py-1 text-[11px] font-semibold sm:px-2 sm:text-sm ${l === lang ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"}`}
                >
                  {LANG_LABEL[l]}
                </Link>
              ))}
            </div>
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setOpen(!open)}
              className="shrink-0 rounded-lg border border-slate-200 p-2 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
            <div className="mb-2 grid grid-cols-2 gap-2 border-b border-slate-100 pb-3">
              <Link
                href={href(lang, "/guides/arrival-immigration")}
                onClick={() => setOpen(false)}
                className="rounded-lg bg-slate-900 px-3 py-2 text-center text-xs font-semibold text-white"
              >
                {lang === "zh" ? "已落地·通关指引" : lang === "ja" ? "到着直後ガイド" : lang === "ko" ? "도착 직후 가이드" : "Just Landed"}
              </Link>
              <Link
                href={href(lang, "/tools/rescue-cards")}
                onClick={() => setOpen(false)}
                className="rounded-lg bg-red-600 px-3 py-2 text-center text-xs font-semibold text-white"
              >
                {lang === "zh" ? "紧急求助卡" : lang === "ja" ? "緊急ヘルプカード" : lang === "ko" ? "긴급 도움 카드" : "Need Help Now"}
              </Link>
            </div>
            {links.map((l) => (
              <Link
                key={l.path}
                href={href(lang, l.path)}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2.5 font-medium ${isActive(l.path) ? "bg-red-50 text-red-700" : "text-slate-700"}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
