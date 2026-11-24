/**
 * Multilingual helpers (English, Chinese, Japanese, Korean).
 * Core content is stored as L = { en, zh, ja?, ko? }.
 * When ja or ko is omitted on a deep-archive string, tx() falls back cleanly to English.
 */
export const LANGS = ["en", "zh", "ja", "ko"] as const;
export type Lang = (typeof LANGS)[number];
export type L = { en: string; zh: string; ja?: string; ko?: string };

export const DEFAULT_LANG: Lang = "en";
export const LANG_LABEL: Record<Lang, string> = {
  en: "EN",
  ja: "日本語",
  ko: "한국어",
  zh: "中文",
};
export const HTML_LANG: Record<Lang, string> = {
  en: "en",
  zh: "zh-CN",
  ja: "ja",
  ko: "ko",
};
export const OG_LOCALE: Record<Lang, string> = {
  en: "en_US",
  zh: "zh_CN",
  ja: "ja_JP",
  ko: "ko_KR",
};

export function isLang(s: string | undefined | null): s is Lang {
  return !!s && (LANGS as readonly string[]).includes(s);
}

/** Pick the text for the current language, falling back to English if ja/ko is not yet provided. */
export function tx(v: L | string, lang: Lang): string {
  if (typeof v === "string") return v;
  return v[lang] ?? v.en;
}

/** Build an internal link with the language prefix. href("ja", "/visa") -> "/ja/visa" */
export function href(lang: Lang, path: string): string {
  if (path.startsWith("http")) return path;
  const [p, hash] = path.split("#");
  const clean = p === "/" || p === "" ? "" : p;
  return `/${lang}${clean}${hash ? `#${hash}` : ""}`;
}

/** Shorthand to declare a bilingual string (en + zh). */
export const t2 = (en: string, zh: string): L => ({ en, zh });

/** Shorthand to declare a 4-language string (en + zh + ja + ko). */
export const t4 = (en: string, zh: string, ja: string, ko: string): L => ({ en, zh, ja, ko });
