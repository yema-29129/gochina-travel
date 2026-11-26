import type { Metadata } from "next";
import { LANGS, Lang, L, OG_LOCALE, tx } from "./i18n";
import { SITE } from "./site";
import { getKeywordsForPath } from "./keywords";

/** Absolute URL for a language + path. path must start with "/" ("/" = home). */
export function absUrl(lang: Lang, path: string) {
  return `${SITE.url}/${lang}${path === "/" ? "" : path}`;
}

/**
 * Determine whether a (lang, path) page should be indexed by search engines.
 * - English (`en`) and Chinese (`zh`) are 100% translated across all pages.
 * - Japanese (`ja`) and Korean (`ko`) currently localize the homepage, hub pages,
 *   interactive tools, and planner; deep guide/city/legal pages still fall back to
 *   English body copy (`t2`), so we mark those `noindex, follow` to prevent Google
 *   from classifying them as duplicate English pages ("Crawled - currently not indexed").
 */
export function isPathIndexableForLang(lang: Lang, path: string): boolean {
  if (lang === "en" || lang === "zh") return true;
  if (
    path.startsWith("/guides/") ||
    path === "/cities" ||
    path.startsWith("/cities/") ||
    path === "/about" ||
    path === "/contact" ||
    path === "/privacy" ||
    path === "/terms" ||
    path === "/disclaimer"
  ) {
    return false;
  }
  return true;
}

/**
 * Build page metadata with canonical URL, hreflang alternates
 * and Open Graph / Twitter tags. Use in every page's generateMetadata().
 */
export function buildMetadata(opts: {
  lang: Lang;
  path: string;
  title: L;
  description: L;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
}): Metadata {
  const { lang, path, title, description, image, type = "website" } = opts;
  const shouldNoindex = opts.noindex ?? !isPathIndexableForLang(lang, path);
  const languages: Record<string, string> = {};
  for (const l of LANGS) {
    if (isPathIndexableForLang(l, path)) {
      languages[l === "zh" ? "zh-CN" : l] = absUrl(l, path);
    }
  }
  languages["x-default"] = absUrl("en", path);
  const t = tx(title, lang);
  const d = tx(description, lang);
  return {
    title: t,
    description: d,
    keywords: getKeywordsForPath(path, lang),
    alternates: { canonical: absUrl(lang, path), languages },
    openGraph: {
      type,
      url: absUrl(lang, path),
      title: t,
      description: d,
      siteName: SITE.name,
      locale: OG_LOCALE[lang],
      images: image ? [{ url: image }] : undefined,
    },
    twitter: { card: image ? "summary_large_image" : "summary", title: t, description: d, images: image ? [image] : undefined },
    robots: shouldNoindex ? { index: false, follow: true } : { index: true, follow: true },
  };
}

/** JSON-LD helpers */
export function breadcrumbLd(lang: Lang, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absUrl(lang, it.path),
    })),
  };
}

export function faqLd(lang: Lang, faq: { q: L; a: L }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: tx(f.q, lang),
      acceptedAnswer: { "@type": "Answer", text: tx(f.a, lang) },
    })),
  };
}

export function articleLd(lang: Lang, opts: { title: string; description: string; path: string; updated: string; image?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    keywords: getKeywordsForPath(opts.path, lang).join(", "),
    inLanguage: lang === "zh" ? "zh-CN" : lang,
    dateModified: opts.updated,
    datePublished: opts.updated,
    mainEntityOfPage: absUrl(lang, opts.path),
    image: opts.image ? [opts.image] : undefined,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };
}
