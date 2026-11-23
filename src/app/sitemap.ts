import type { MetadataRoute } from "next";
import { LANGS } from "@/lib/i18n";
import { SITE, LAST_UPDATED } from "@/lib/site";
import { GUIDES } from "@/data/guides";
import { TOOLS } from "@/data/tools";
import { CITIES } from "@/data/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1.0, freq: "weekly" },
    { path: "/visa", priority: 0.9, freq: "weekly" },
    { path: "/money", priority: 0.9, freq: "weekly" },
    { path: "/transport", priority: 0.9, freq: "weekly" },
    { path: "/guides", priority: 0.85, freq: "weekly" },
    { path: "/cities", priority: 0.85, freq: "weekly" },
    { path: "/tools", priority: 0.9, freq: "weekly" },
    { path: "/planner", priority: 0.8, freq: "monthly" },
    { path: "/about", priority: 0.4, freq: "yearly" },
    { path: "/contact", priority: 0.4, freq: "yearly" },
    { path: "/privacy", priority: 0.3, freq: "yearly" },
    { path: "/terms", priority: 0.3, freq: "yearly" },
    { path: "/disclaimer", priority: 0.3, freq: "yearly" },
  ];

  const dynamicPaths = [
    ...GUIDES.map((g) => ({ path: `/guides/${g.slug}`, priority: 0.85, freq: "monthly" as const })),
    ...TOOLS.map((t) => ({ path: `/tools/${t.id}`, priority: 0.9, freq: "monthly" as const })),
    ...CITIES.map((c) => ({ path: `/cities/${c.id}`, priority: 0.85, freq: "monthly" as const })),
  ];

  const allPaths = [...staticPaths, ...dynamicPaths];
  const entries: MetadataRoute.Sitemap = [];

  for (const item of allPaths) {
    const languages: Record<string, string> = {};
    for (const l of LANGS) {
      languages[l === "zh" ? "zh-CN" : l] = `${SITE.url}/${l}${item.path}`;
    }
    languages["x-default"] = `${SITE.url}/en${item.path}`;

    for (const lang of LANGS) {
      entries.push({
        url: `${SITE.url}/${lang}${item.path}`,
        lastModified: LAST_UPDATED,
        changeFrequency: item.freq,
        priority: item.priority,
        alternates: { languages },
      });
    }
  }

  return entries;
}
