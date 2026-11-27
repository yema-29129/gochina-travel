import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const aiAndSearchAgents = [
    "Googlebot",
    "Google-Extended",
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Applebot",
    "Applebot-Extended",
    "Bingbot",
    "DuckDuckBot",
    "Slurp",
    "Yandex",
    "Yeti",
    "SeznamBot",
    "Baiduspider",
    "Sogou web spider",
    "Bytespider",
    "YouBot",
    "CCBot",
    "*",
  ];

  return {
    rules: aiAndSearchAgents.map((userAgent) => ({
      userAgent,
      allow: "/",
      disallow: ["/api/"],
    })),
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
