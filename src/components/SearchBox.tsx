import { Lang, tx } from "@/lib/i18n";
import { GUIDES } from "@/data/guides";
import { TOOLS } from "@/data/tools";
import { CITIES } from "@/data/cities";
import { SearchBoxClient, SearchItem } from "./SearchBoxClient";

/** Server wrapper: builds a small search index so the full guide content is not shipped to the browser. */
export function SearchBox({ lang }: { lang: Lang }) {
  const index: SearchItem[] = [
    ...TOOLS.map((x) => ({
      title: tx(x.title, lang),
      path: `/tools/${x.id}`,
      type: "tool" as const,
      hay: `${x.title.en} ${x.title.zh} ${x.desc.en} ${x.desc.zh} ${x.id}`,
    })),
    ...CITIES.map((c) => ({
      title: `${tx(c.name, lang)} ${c.zh}`,
      path: `/cities/${c.id}`,
      type: "city" as const,
      hay: `${c.name.en} ${c.name.zh} ${c.zh} ${c.province.en} ${c.province.zh} ${c.id}`,
    })),
    ...GUIDES.map((g) => ({
      title: tx(g.title, lang),
      path: `/guides/${g.slug}`,
      type: "guide" as const,
      hay: `${g.title.en} ${g.title.zh} ${g.summary.en} ${g.summary.zh} ${g.keyPoints.map((k) => k.en + " " + k.zh).join(" ")} ${g.slug}`,
    })),
  ];
  return <SearchBoxClient lang={lang} index={index} />;
}
