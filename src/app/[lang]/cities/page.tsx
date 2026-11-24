import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Compass,
  DollarSign,
  Globe,
  Landmark,
  Languages,
  MapPin,
  Phone,
  Plug,
  Sparkles,
  TrainFront,
  Users,
  Utensils,
} from "lucide-react";
import { notFound } from "next/navigation";
import { href, isLang, LANGS, t2, tx } from "@/lib/i18n";
import { buildMetadata, breadcrumbLd, faqLd } from "@/lib/seo";
import { CITIES } from "@/data/cities";
import { UI } from "@/data/ui";
import { CityCard } from "@/components/CityCard";
import { ProvinceDestinationsHub } from "@/components/ProvinceDestinationsHub";
import { Faq } from "@/components/Faq";
import { HelpContactCard } from "@/components/HelpContactCard";
import { JsonLd } from "@/components/JsonLd";
import { AFFILIATES } from "@/lib/affiliates";

type P = { params: Promise<{ lang: string }> };

const title = t2("China Destinations, Classic Routes & 27-Province Guide", "中国旅游目的地、经典路线与全国 27 省市全攻略");
const description = t2(
  "Plan your China trip like a pro: compare classic 7–14 day rail routes, explore 8 deep-dive city guides, browse 27 provinces & top attractions, and check China at a glance.",
  "一站式规划中国之旅：对比 7–14 天经典高铁路线、8 大核心城市深度指南、全国 27 省市热门景点大全与赴华速览常识。"
);

const FEATURED_TRIPS = [
  {
    badge: t2("Best for First-Timers", "首次来华必选"),
    days: t2("10 Days", "10 天"),
    title: t2("Classic China Golden Triangle", "中国经典黄金三角"),
    route: t2("Beijing → Xi'an → Shanghai", "北京 → 西安 → 上海"),
    budget: t2("~$1,100–$1,600 USD", "约 $1,100–$1,600 美元"),
    image: "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=900&q=80",
    summary: t2(
      "Great Wall, Forbidden City, Terracotta Warriors & The Bund — connected effortlessly by 350 km/h (217 mph) bullet trains.",
      "长城、故宫、兵马俑与上海外滩一网打尽，全程 350 km/h 复兴号高铁无缝串联。"
    ),
  },
  {
    badge: t2("Nature & Cyberpunk", "自然奇观 + 赛博山城"),
    days: t2("12 Days", "12 天"),
    title: t2("Pandas, Avatar Mountains & Karst", "大熊猫、阿凡达仙山与桂林山水"),
    route: t2("Chengdu → Chongqing → Zhangjiajie → Guilin", "成都 → 重庆 → 张家界 → 桂林"),
    budget: t2("~$1,200–$1,800 USD", "约 $1,200–$1,800 美元"),
    image: "https://images.unsplash.com/photo-1537531383496-f4749b8032cf?auto=format&fit=crop&w=900&q=80",
    summary: t2(
      "Giant Pandas, Chongqing's 8D monorail skyline, Zhangjiajie's floating peaks and bamboo rafting in Yangshuo.",
      "看大熊猫、打卡重庆轻轨穿楼与洪崖洞、探秘张家界阿凡达山与阳朔遇龙河竹筏。"
    ),
  },
  {
    badge: t2("No Visa Needed", "免签 / 240h 过境友好"),
    days: t2("7 Days", "7 天"),
    title: t2("240-Hour Visa-Free Express", "240 小时过境免签精华线"),
    route: t2("Shanghai → Suzhou → Hangzhou → Beijing", "上海 → 苏州 → 杭州 → 北京"),
    budget: t2("~$850–$1,300 USD", "约 $850–$1,300 美元"),
    image: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=900&q=80",
    summary: t2(
      "Designed for 240-hour visa-free transit travelers: tap Visa/Mastercard on subways, gardens, West Lake & Great Wall.",
      "专为 240 小时过境免签打造：地铁直接拍外卡，串游上海外滩、苏州园林、杭州西湖与北京长城。"
    ),
  },
  {
    badge: t2("Culture & Snow Peaks", "古道文化与高原雪山"),
    days: t2("14 Days", "14 天"),
    title: t2("Ancient Capitals & Yunnan Loop", "古都兵马俑与彩云之南大环线"),
    route: t2("Xi'an → Chengdu → Lijiang → Dali → Shangri-La", "西安 → 成都 → 丽江 → 大理 → 香格里拉"),
    budget: t2("~$1,500–$2,200 USD", "约 $1,500–$2,200 美元"),
    image: "https://images.unsplash.com/photo-1677922069736-288fd584c916?auto=format&fit=crop&w=900&q=80",
    summary: t2(
      "Combine Silk Road heritage in Xi'an with Sichuan tea culture, Tiger Leaping Gorge and Tibetan monasteries in Shangri-La.",
      "串联丝路古都西安、巴适成都茶馆、丽江虎跳峡雪山与香格里拉藏传寺庙。"
    ),
  },
];

const HIGHLIGHTS = [
  {
    Icon: Landmark,
    title: t2("5,000 Years of Living History", "五千年鲜活历史"),
    desc: t2(
      "Walk the 600-year-old Ming City Wall in Xi'an, stand before 8,000 Terracotta Warriors, and explore imperial palaces & cliffside monasteries.",
      "骑行 600 年历史的西安明城墙，直面八千兵马俑，探访紫禁城与千年悬空寺。"
    ),
  },
  {
    Icon: TrainFront,
    title: t2("350 km/h (217 mph) Bullet Trains", "全球最快 350 km/h 高铁网"),
    desc: t2(
      "Zip 1,318 km (819 miles) from Beijing to Shanghai in 4.5 hours — cleaner, faster and more punctual than flying, with passport e-gates.",
      "北京到上海 1,318 公里仅需 4.5 小时，比坐飞机更准点舒适，直接刷护照进站。"
    ),
  },
  {
    Icon: Utensils,
    title: t2("8 Regional Cuisines Under $5", "八大菜系，5 美元吃撑"),
    desc: t2(
      "From hand-pulled Xi'an biangbiang noodles ($2.50) to Cantonese dim sum and fiery Sichuan hotpot — every province tastes like a different country.",
      "从西安 18 元油泼面、广式早茶到麻辣川渝火锅，每个省份都像换了一个美食国度。"
    ),
  },
  {
    Icon: Compass,
    title: t2("Otherworldly Landscapes", "电影级自然奇观"),
    desc: t2(
      "Karst peaks in Guilin, Avatar sandstone pillars in Zhangjiajie, rainbow Danxia hills in Gansu, and turquoise alpine lakes in Jiuzhaigou.",
      "桂林喀斯特峰林、张家界阿凡达悬浮山、张掖七彩丹霞与九寨沟翠海瀑布。"
    ),
  },
];

const AT_A_GLANCE = [
  { Icon: Landmark, label: t2("CAPITAL CITY", "首都"), value: t2("Beijing (北京)", "北京 (Beijing)") },
  { Icon: Users, label: t2("POPULATION", "人口"), value: t2("1.41 Billion", "约 14.1 亿") },
  { Icon: DollarSign, label: t2("CURRENCY", "货币"), value: t2("Yuan (CNY / ¥) · ~$1 = ¥7.2", "人民币 (CNY / ¥) · $1≈¥7.2") },
  { Icon: Languages, label: t2("LANGUAGE", "语言"), value: t2("Mandarin Chinese", "普通话（各省有方言）") },
  { Icon: Clock, label: t2("TIME ZONE", "时区"), value: t2("CST (UTC+8, nationwide)", "北京时间 UTC+8（全国统一）") },
  { Icon: Phone, label: t2("CALLING CODE", "国际区号"), value: "+86" },
  { Icon: Plug, label: t2("ELECTRICITY", "电压与插座"), value: t2("220V / 50Hz · Type A, C & I", "220V / 50Hz · 国标两孔/三孔") },
  { Icon: Globe, label: t2("VISA ACCESS", "免签政策"), value: t2("30-Day Visa-Free & 240h Transit", "30 天免签 + 240 小时过境免签") },
];

const DEST_FAQS = [
  {
    q: t2("How many days do I need for a first trip to China?", "第一次去中国旅游建议玩几天？"),
    a: t2(
      "10 to 14 days is the sweet spot for first-timers: enough for 3–4 major cities (such as Beijing, Xi'an, Chengdu and Shanghai) connected by high-speed trains without rushing. If you only have 7–10 days, stick to 2–3 hubs.",
      "首次赴华最推荐 10–14 天，可以轻松串联 3–4 座核心城市（如北京、西安、成都、上海）而不赶路；若只有 7–10 天，建议精选 2–3 座高铁直达城市。"
    ),
  },
  {
    q: t2("What is the best time of year to visit China?", "一年中什么时候去中国旅游最好？"),
    a: t2(
      "Spring (April–May) and Autumn (September–November) offer the mildest weather nationwide. Avoid Chinese public holidays — especially Spring Festival (Jan/Feb), May Day (May 1–5) and National Day Golden Week (Oct 1–7) — when trains and sights sell out.",
      "春季（4–5 月）和秋季（9–11 月）全国气候最宜人。务必避开中国法定长假——春节、五一（5 月 1–5 日）和国庆黄金周（10 月 1–7 日），期间高铁和景区一票难求。"
    ),
  },
  {
    q: t2("Can I visit multiple provinces on the 240-hour visa-free transit?", "240 小时过境免签可以跨省游玩吗？"),
    a: t2(
      "Yes! Since December 2024, China's 240-hour (10-day) visa-free transit allows cross-province travel across 24 eligible provinces and 65 ports — as long as your route is Country A → China → Country/Region C (e.g. USA → Beijing → Shanghai → Tokyo or Hong Kong).",
      "可以！240 小时（10 天）过境免签支持在 24 个开放省份、65 个口岸之间跨省游玩，只需满足 A 国 → 中国 → 第三国/地区 C（如美国 → 北京 → 上海 → 东京或香港）即可。"
    ),
  },
  {
    q: t2("Which Chinese cities are easiest for non-Mandarin speakers?", "不会说中文，去中国哪些城市最轻松？"),
    a: t2(
      "Shanghai, Beijing, Hong Kong, Guangzhou, Shenzhen, Chengdu and Xi'an are the easiest: full English subway signage, contactless foreign Visa/Mastercard metro tapping (in BJ/SH/GZ/SZ/HK), and 100% English DiDi & Alipay support.",
      "上海、北京、香港、广州、深圳、成都和西安对外国游客最友好：地铁全英文标识，北上广深港支持直接拍境外外卡进站，且支付宝和滴滴全程英文。"
    ),
  },
];

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata({ lang, path: "/cities", title, description });
}

export default async function CitiesPage({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = UI[lang];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd(lang, [
            { name: t.home, path: "/" },
            { name: t.nav.cities, path: "/cities" },
          ]),
          faqLd(lang, DEST_FAQS),
        ]}
      />

      {/* 1. INTREPID-STYLE FULL-BLEED EDITORIAL HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <img
          src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1800&q=80"
          alt="Great Wall of China"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            {tx(t2("2026 China Travel Hub · 27 Provinces & 8 Deep City Guides", "2026 中国旅游目的地大全 · 27 省市景点与 8 大深度城市指南"), lang)}
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {tx(t2("China Destinations & Classic Trip Routes", "探索中国：热门目的地与经典路线"), lang)}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            {tx(
              t2(
                "From 5,000-year-old imperial capitals and 350 km/h bullet trains to neon cyberpunk skylines and Avatar peaks — find where to go, how long to stay, and the exact Chinese names for every must-see sight.",
                "从五千年皇城古都与 350 km/h 高铁网络，到赛博朋克魔幻山城与阿凡达奇峰——一站搞定去哪玩、玩几天、怎么串联与所有必去景点的中英文双语清单。"
              ),
              lang
            )}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#featured-trips"
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-red-700"
            >
              {tx(t2("Explore Classic Routes", "查看经典行程路线"), lang)}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#where-to-go"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-xs transition hover:bg-white/20"
            >
              <MapPin className="h-4 w-4" />
              {tx(t2("Browse All 27 Provinces", "按省份查全国热门景点"), lang)}
            </a>
          </div>
        </div>
      </section>

      {/* QUICK SECTION ANCHOR BAR */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-4 py-3.5 text-sm font-semibold text-slate-600 sm:px-6">
          {[
            { id: "#featured-trips", label: t2("Featured Routes", "经典路线") },
            { id: "#top-cities", label: t2("Top 8 City Guides", "8 大城市深度指南") },
            { id: "#highlights", label: t2("China Highlights", "中国亮点") },
            { id: "#at-a-glance", label: t2("China at a Glance", "中国速览") },
            { id: "#where-to-go", label: t2("Where You Can Go (27 Provinces)", "全国 27 省市景点大全") },
            { id: "#faq", label: t2("Travel FAQs", "常见问题") },
          ].map((item) => (
            <a key={item.id} href={item.id} className="shrink-0 transition hover:text-red-600">
              {tx(item.label, lang)}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {/* 2. FEATURED TRIPS FOR CHINA (Intrepid-style 4-column route cards) */}
        <section id="featured-trips" className="scroll-mt-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                {tx(t2("Featured trips for China", "赴华精选经典路线"), lang)}
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                {tx(
                  t2("Proven high-speed rail itineraries with realistic budgets in USD.", "经实测最顺路的高铁串联行程，附真实美元预算参考。"),
                  lang
                )}
              </p>
            </div>
            <Link
              href={href(lang, "/planner")}
              className="inline-flex items-center gap-1 text-sm font-bold text-red-600 hover:underline"
            >
              {tx(t2("Build a custom itinerary", "自定义你的专属行程"), lang)}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_TRIPS.map((trip, i) => (
              <div key={i} className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition hover:shadow-md">
                <div className="relative h-44 overflow-hidden bg-slate-200">
                  <img src={trip.image} alt={tx(trip.title, lang)} className="h-full w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-slate-900/85 px-2.5 py-0.5 text-[11px] font-bold text-white">
                    {tx(trip.badge, lang)}
                  </span>
                  <span className="absolute bottom-3 right-3 rounded-md bg-white/95 px-2 py-0.5 text-xs font-extrabold text-slate-900">
                    {tx(trip.days, lang)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-base font-extrabold text-slate-900">{tx(trip.title, lang)}</h3>
                  <div className="mt-1 text-xs font-semibold text-red-600">{tx(trip.route, lang)}</div>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600">{tx(trip.summary, lang)}</p>
                  <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
                    <span className="font-bold text-slate-900">{tx(trip.budget, lang)}</span>
                    <a
                      href={AFFILIATES.tripHotels.url}
                      target="_blank"
                      rel="sponsored nofollow noopener noreferrer"
                      className="font-semibold text-slate-700 hover:text-red-600"
                    >
                      {tx(t2("Check Hotels ↗", "查沿线酒店 ↗"), lang)}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. TOP 8 DEEP-DIVE CITY GUIDES */}
        <section id="top-cities" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            {tx(t2("Deep-dive guides for China's top 8 cities", "首次赴华 8 大热门城市深度指南"), lang)}
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            {tx(
              t2(
                "Airports, ticket release times, 240-hour transit rules, must-eat dishes & metro tips for each city.",
                "包含每座城市的机场交通、热门景点放票时间、240 小时过境范围、必吃美食与地铁攻略。"
              ),
              lang
            )}
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CITIES.map((c) => (
              <CityCard key={c.id} c={c} lang={lang} />
            ))}
          </div>
        </section>

        {/* 4. CHINA HIGHLIGHTS (Intrepid-style editorial pillars) */}
        <section id="highlights" className="mt-16 scroll-mt-24 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            {tx(t2("China highlights", "为什么一定要来中国？"), lang)}
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <h.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3.5 text-base font-bold text-slate-900">{tx(h.title, lang)}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{tx(h.desc, lang)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CHINA AT A GLANCE (Direct Intrepid "Japan at a glance" facts grid) */}
        <section id="at-a-glance" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            {tx(t2("China at a glance", "中国旅行速览（At a Glance）"), lang)}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AT_A_GLANCE.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  <item.Icon className="h-4 w-4 text-slate-700" />
                  <span>{tx(item.label, lang)}</span>
                </div>
                <div className="mt-2 text-sm font-extrabold text-slate-900">{tx(item.value, lang)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. WHERE YOU CAN GO — COMPLETE 27-PROVINCE DIRECTORY */}
        <div id="where-to-go" className="scroll-mt-24">
          <ProvinceDestinationsHub lang={lang} />
        </div>

        {/* 7. CHINA TRAVEL FAQs */}
        <section id="faq" className="mt-16 scroll-mt-24">
          <h2 className="mb-4 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            {tx(t2("China travel FAQs", "中国目的地常见问题"), lang)}
          </h2>
          <Faq items={DEST_FAQS} lang={lang} />
        </section>

        <div className="mt-12">
          <HelpContactCard lang={lang} context="general" />
        </div>
      </div>
    </>
  );
}
