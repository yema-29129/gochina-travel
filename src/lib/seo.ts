import type { Metadata } from "next";
import { LANGS, Lang, L, OG_LOCALE, tx } from "./i18n";
import { SITE } from "./site";

/** Absolute URL for a language + path. path must start with "/" ("/" = home). */
export function absUrl(lang: Lang, path: string) {
  return `${SITE.url}/${lang}${path === "/" ? "" : path}`;
}

/**
 * Build page metadata with canonical URL, hreflang alternates (en / zh / x-default)
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
  const { lang, path, title, description, image, type = "website", noindex } = opts;
  const languages: Record<string, string> = {};
  for (const l of LANGS) languages[l === "zh" ? "zh-CN" : l] = absUrl(l, path);
  languages["x-default"] = absUrl("en", path);
  const t = tx(title, lang);
  const d = tx(description, lang);
  return {
    title: t,
    description: d,
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
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
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
    inLanguage: lang === "zh" ? "zh-CN" : "en",
    dateModified: opts.updated,
    datePublished: opts.updated,
    mainEntityOfPage: absUrl(lang, opts.path),
    image: opts.image ? [opts.image] : undefined,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };
}
