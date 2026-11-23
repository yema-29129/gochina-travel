/**
 * Bilingual helpers.
 * Every piece of visible content is stored as L = { en, zh }.
 * The Chinese text must be a faithful 1:1 translation of the English text
 * (same facts, same order, nothing added or removed) so the site owner can review it.
 */
export const LANGS = ["en", "zh"] as const;
export type Lang = (typeof LANGS)[number];
export type L = { en: string; zh: string };

export const DEFAULT_LANG: Lang = "en";
export const LANG_LABEL: Record<Lang, string> = { en: "English", zh: "中文" };
export const HTML_LANG: Record<Lang, string> = { en: "en", zh: "zh-CN" };
export const OG_LOCALE: Record<Lang, string> = { en: "en_US", zh: "zh_CN" };

export function isLang(s: string | undefined | null): s is Lang {
  return !!s && (LANGS as readonly string[]).includes(s);
}

/** Pick the text for the current language. Plain strings are returned as-is (numbers, codes, Chinese-only text). */
export function tx(v: L | string, lang: Lang): string {
  return typeof v === "string" ? v : v[lang];
}

/** Build an internal link with the language prefix. href("zh", "/visa") -> "/zh/visa" */
export function href(lang: Lang, path: string): string {
  if (path.startsWith("http")) return path;
  const [p, hash] = path.split("#");
  const clean = p === "/" || p === "" ? "" : p;
  return `/${lang}${clean}${hash ? `#${hash}` : ""}`;
}

/** Shorthand to declare a bilingual string. */
export const t2 = (en: string, zh: string): L => ({ en, zh });
