import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowRight, CheckSquare, CreditCard, ShieldCheck, TrainFront } from "lucide-react";
import { href, isLang, LANGS, t2, tx } from "@/lib/i18n";
import { absUrl, buildMetadata, faqLd } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { TOOLS } from "@/data/tools";
import { CITIES } from "@/data/cities";
import { GUIDES, getGuide } from "@/data/guides";
import type { FaqItem } from "@/data/types";
import { UI } from "@/data/ui";
import { SearchBox } from "@/components/SearchBox";
import { IconBox } from "@/components/IconBox";
import { CityCard } from "@/components/CityCard";
import { GuideCard } from "@/components/GuideCard";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";

type P = { params: Promise<{ lang: string }> };

const HERO_IMG = "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1600&q=80";

const META_TITLE = t2(
  "GoChina — Practical China Travel Guide, Visa Checker & Tools (2026)",
  "GoChina — 2026 外国人赴华实用旅行指南、免签查询与计算工具"
);
const META_DESC = t2(
  "Everything foreign travelers need for China: 30-day visa-free & 240-hour transit checker, Alipay/WeChat Pay fees, eSIMs, high-speed rail, city guides and Chinese show-cards.",
  "外国游客赴华所需的一切：30 天免签与 240 小时过境检查器、支付宝/微信手续费、eSIM、高铁、城市指南与全屏中文求助卡。"
);

const U = {
  heroBadge: t2("Updated for 2026 · 50 Visa-Free Countries & 240-Hour Transit", "2026 最新更新 · 50 国免签与 240 小时过境免签"),
  heroH1: t2("Travel China Without the Friction", "轻松游中国，扫清所有行前与落地障碍"),
  heroSub: t2(
    "Plain-English guides and interactive tools for visas, Alipay & WeChat Pay, eSIMs, bullet trains, attraction tickets and offline Chinese show-cards.",
    "面向国际游客的实用攻略与互动工具：签证与免签、支付宝与微信支付、eSIM 上网、高铁、景点抢票及离线中文展示卡。"
  ),
  toolsTitle: t2("12 Interactive China Travel Tools", "12 个中国旅行实用工具"),
  toolsSub: t2("Instant calculators and full-screen Chinese cards built for your phone.", "专为手机打造的即时计算器与全屏中文展示卡。"),
  checklistBadge: t2("Start 72 hours before you fly", "出发前 72 小时必做"),
  checklistTitle: t2("72-Hour Pre-Flight Personalized Checklist", "出发前 72 小时个性化行前清单"),
  checklistDesc: t2(
    "Pick your phone (iOS/Android), travel month and companions to generate a tailored China prep checklist — Alipay, eSIM, online arrival card, AMap and packing warnings.",
    "选择你的手机系统、出行月份和同行人，一键生成专属中国行前清单——支付宝、eSIM、网上入境卡、高德地图与避坑提醒。"
  ),
  checklistCta: t2("Build my checklist", "生成我的清单"),
  blackoutTitle: t2("Blackout Dates Warning — Avoid China's Peak Holidays", "避坑预警——避开中国三大出行高峰期"),
  blackoutDesc: t2(
    "Spring Festival (Jan/Feb), Labor Day Golden Week (May 1–5) and National Day Golden Week (Oct 1–7) bring extreme crowds, sold-out trains and 2×–3× hotel prices.",
    "春节（1–2 月）、五一假期（5 月 1–5 日）和国庆黄金周（10 月 1–7 日）期间景区极度拥挤、高铁一票难求且酒店涨价 2–3 倍。"
  ),
  blackoutCta: t2("See best months & blackout dates", "查看最佳月份与避坑日历"),
  hubsTitle: t2("Core Survival Guides", "核心生存指南"),
  citiesTitle: t2("Top 8 Destinations for First-Timers", "首次赴华 8 大热门目的地"),
  guidesTitle: t2("Essential Guides to Read First", "必读核心攻略"),
  plannerCta: t2("Need a day-by-day route? Try the Trip Planner", "需要逐日行程？试试行程规划器"),
};

const HUBS = [
  {
    path: "/visa",
    Icon: ShieldCheck,
    cls: "bg-red-50 text-red-600",
    title: t2("Visa & Entry", "签证与入境"),
    desc: t2(
      "50-country 30-day visa-free list, 240-hour transit rules (24 provinces / 65 ports), online arrival card and airport immigration.",
      "50 国 30 天免签名单、240 小时过境免签（24 省 65 口岸）、网上入境卡与机场边检攻略。"
    ),
  },
  {
    path: "/money",
    Icon: CreditCard,
    cls: "bg-blue-50 text-blue-600",
    title: t2("Money, Payments & Internet", "支付、现金与网络"),
    desc: t2(
      "Link foreign cards to Alipay & WeChat Pay, avoid the 3% fee over ¥200 and ATM DCC traps, plus eSIMs that bypass the firewall.",
      "支付宝与微信绑外卡、规避 200 元以上 3% 手续费和 ATM DCC 陷阱，以及免翻墙 eSIM 上网方案。"
    ),
  },
  {
    path: "/transport",
    Icon: TrainFront,
    cls: "bg-emerald-50 text-emerald-600",
    title: t2("Trains, Flights & Getting Around", "高铁、国内航班与市内交通"),
    desc: t2(
      "High-speed rail booking, domestic flight CCC power bank rules, 12 major airports, tap-card metros, Didi and AMap.",
      "高铁购票与人工通道、国内航班充电宝 CCC 规定、12 大机场交通、地铁拍外卡、滴滴与高德地图。"
    ),
  },
];

const FEATURED_SLUGS = [
  "visa-free-countries",
  "240-hour-transit",
  "alipay-wechat-pay",
  "internet-esim",
  "high-speed-trains",
  "attraction-tickets",
];

const HOME_FAQ: FaqItem[] = [
  {
    q: t2("Do I need a visa to visit China in 2026?", "2026 年去中国旅游需要签证吗？"),
    a: t2(
      "Passport holders from 50 countries enjoy 30-day unilateral visa-free entry. Travelers from 55 countries (including the US, UK and Canada) can use the 240-hour (10-day) visa-free transit rule when flying A → China → C (third country/region, including Hong Kong or Macau). Use our Visa-Free & 240-Hour Transit Checker to confirm your route.",
      "50 个国家的护照持有人享有 30 天单方面免签入境。包括美国、英国、加拿大在内的 55 国旅客在满足 A → 中国 → C（第三国或港澳台地区）路线时，可使用 240 小时（10 天）过境免签。请用我们的免签检查器确认你的路线。"
    ),
  },
  {
    q: t2("Can foreign tourists use Alipay and WeChat Pay without a Chinese bank account?", "外国游客没有中国银行卡能用支付宝和微信支付吗？"),
    a: t2(
      "Yes. Download Alipay and WeChat before you fly, verify with your passport, and link your foreign Visa or Mastercard. Single payments up to ¥200 have 0% platform fee; payments above ¥200 incur a 3% fee. Also carry ¥300–500 in small cash for street stalls that use personal QR codes.",
      "可以。出发前下载支付宝和微信，用护照实名认证并绑定境外 Visa/Mastercard。单笔 ¥200 及以下免收平台手续费，超过 ¥200 收 3%。同时建议随身带 ¥300–500 零钱现金，以备部分使用个人收款码的小摊。"
    ),
  },
  {
    q: t2("Will Google, WhatsApp and Instagram work in China?", "在中国能用 Google、WhatsApp 和 Instagram 吗？"),
    a: t2(
      "Not on local Chinese Wi-Fi or local SIM cards. The easiest solution is to install a Hong Kong / Singapore-routed travel eSIM before departure — roaming data bypasses the firewall automatically with no VPN app needed.",
      "连接中国本地 Wi-Fi 或使用中国本地 SIM 卡时无法访问。最省心的办法是出发前安装经香港/新加坡路由的漫游旅游 eSIM——漫游流量自带穿墙效果，无需折腾 VPN。"
    ),
  },
  {
    q: t2("Can I bring my overseas power bank on Chinese domestic flights?", "可以把海外买的充电宝带上中国国内航班吗？"),
    a: t2(
      "No, unless it has a clear China CCC certification oval logo and is ≤ 100 Wh. Overseas power banks with only CE/FCC marks are allowed on international arrivals and high-speed trains, but will be confiscated at security for China domestic flights. Buy a CCC power bank at a Xiaomi Store in China for ¥79–129.",
      "如果没有清晰的中国椭圆形 CCC 认证标志，则不能带上中国国内航班（且容量须 ≤ 100 Wh）。仅带 CE/FCC 标的海外充电宝可以坐国际航班和高铁，但在国内航班安检会被没收。建议落地后在小米之家花 ¥79–129 买一块带 CCC 标的充电宝。"
    ),
  },
  {
    q: t2("How far in advance do I need to book Forbidden City and train tickets?", "故宫和火车票需要提前多久预订？"),
    a: t2(
      "Forbidden City tickets open exactly 7 days ahead at 20:00 Beijing time (closed Mondays) and sell out in minutes. High-speed train tickets open 15 days in advance on Railway 12306 or Trip.com.",
      "故宫门票提前 7 天北京时间 20:00 准时开抢（每周一闭馆），通常几分钟售罄。高铁票提前 15 天在铁路 12306 或 Trip.com 发售。"
    ),
  },
  {
    q: t2("Is China safe for solo and first-time foreign travelers?", "外国游客独自或首次去中国安全吗？"),
    a: t2(
      "Yes — violent street crime is very rare and public transport is modern and safe even at night. The main frustrations are digital (payments, maps, booking tickets with a passport), not physical safety. Keep emergency numbers handy: 110 (Police), 120 (Ambulance), 12345 (City hotline) and 12367 (Immigration).",
      "非常安全——街头暴力犯罪极少，公共交通现代且夜间也很安全。主要挑战是数字化门槛（支付、地图、护照实名预约）而非人身安全。记好紧急电话：110（报警）、120（急救）、12345（政务热线）、12367（移民管理局热线）。"
    ),
  },
];

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata({
    lang,
    path: "/",
    title: META_TITLE,
    description: META_DESC,
    image: HERO_IMG,
  });
}

export default async function HomePage({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = UI[lang];

  const featuredGuides = FEATURED_SLUGS.map(getGuide).filter((g): g is NonNullable<typeof g> => !!g);
  const guidesToShow = featuredGuides.length >= 6 ? featuredGuides : GUIDES.slice(0, 6);

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: absUrl(lang, "/"),
    inLanguage: lang === "zh" ? "zh-CN" : "en",
  };

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  };

  return (
    <>
      <JsonLd data={[websiteLd, orgLd, faqLd(lang, HOME_FAQ)]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMG}
          alt="Great Wall of China"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/85" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-amber-300 backdrop-blur">
            {tx(U.heroBadge, lang)}
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {tx(U.heroH1, lang)}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
            {tx(U.heroSub, lang)}
          </p>
          <div className="mx-auto mt-8 max-w-2xl text-left">
            <SearchBox lang={lang} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 sm:px-6">
        {/* 12 Quick Tools Grid */}
        <section>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{tx(U.toolsTitle, lang)}</h2>
              <p className="mt-1 text-sm text-slate-600">{tx(U.toolsSub, lang)}</p>
            </div>
            <Link
              href={href(lang, "/tools")}
              className="inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:underline"
            >
              {t.allTools} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {TOOLS.map((tool) => (
              <Link
                key={tool.id}
                href={href(lang, `/tools/${tool.id}`)}
                className="group flex items-start gap-3.5 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-red-200 hover:shadow-md"
              >
                <IconBox name={tool.icon} />
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold leading-snug text-slate-900 group-hover:text-red-600">
                    {tx(tool.title, lang)}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs text-slate-600">{tx(tool.desc, lang)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 72-Hour Checklist Teaser + Blackout Dates Banner */}
        <section className="grid gap-4 lg:grid-cols-2">
          <div className="flex flex-col justify-between rounded-xl border border-emerald-200 bg-emerald-50 p-6">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                <CheckSquare className="h-3.5 w-3.5" /> {tx(U.checklistBadge, lang)}
              </span>
              <h2 className="mt-3 text-xl font-bold text-emerald-950">{tx(U.checklistTitle, lang)}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-emerald-900">{tx(U.checklistDesc, lang)}</p>
            </div>
            <div className="mt-5">
              <Link
                href={href(lang, "/tools/packing-checklist")}
                className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
              >
                {tx(U.checklistCta, lang)} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-amber-300 bg-amber-50 p-6">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
                <AlertTriangle className="h-3.5 w-3.5" /> 2026
              </span>
              <h2 className="mt-3 text-xl font-bold text-amber-950">{tx(U.blackoutTitle, lang)}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-amber-900">{tx(U.blackoutDesc, lang)}</p>
            </div>
            <div className="mt-5">
              <Link
                href={href(lang, "/guides/when-to-go")}
                className="inline-flex items-center gap-1.5 rounded-lg bg-amber-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-amber-900"
              >
                {tx(U.blackoutCta, lang)} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3 Hub Cards */}
        <section>
          <h2 className="mb-5 text-2xl font-bold text-slate-900 sm:text-3xl">{tx(U.hubsTitle, lang)}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {HUBS.map((h) => {
              const Icon = h.Icon;
              return (
                <Link
                  key={h.path}
                  href={href(lang, h.path)}
                  className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition hover:border-red-200 hover:shadow-md"
                >
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${h.cls}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-red-600">{tx(h.title, lang)}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600">{tx(h.desc, lang)}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-red-600">
                    {t.viewAll} <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* 8 Cities */}
        <section>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{tx(U.citiesTitle, lang)}</h2>
            <div className="flex items-center gap-4">
              <Link
                href={href(lang, "/planner")}
                className="text-sm font-semibold text-slate-700 hover:text-red-600"
              >
                {tx(U.plannerCta, lang)} →
              </Link>
              <Link
                href={href(lang, "/cities")}
                className="inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:underline"
              >
                {t.viewAll} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CITIES.map((c) => (
              <CityCard key={c.id} c={c} lang={lang} />
            ))}
          </div>
        </section>

        {/* 6 Featured Guides */}
        <section>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{tx(U.guidesTitle, lang)}</h2>
            <Link
              href={href(lang, "/guides")}
              className="inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:underline"
            >
              {t.allGuides} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {guidesToShow.map((g) => (
              <GuideCard key={g.slug} g={g} lang={lang} />
            ))}
          </div>
        </section>

        {/* 6 Bilingual General FAQs */}
        <section id="faq">
          <h2 className="mb-5 text-2xl font-bold text-slate-900 sm:text-3xl">{t.faq}</h2>
          <Faq items={HOME_FAQ} lang={lang} />
        </section>
      </div>
    </>
  );
}
