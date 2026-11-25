import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowRight, CheckSquare, CreditCard, ShieldCheck, TrainFront } from "lucide-react";
import { href, isLang, LANGS, t2, t4, tx } from "@/lib/i18n";
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

const META_TITLE = t4(
  "GoChinaDesk — China Travel Guide 2026: 240h Visa-Free, Alipay, eSIM & Trains",
  "GoChinaDesk — 2026 外国人来华旅游指南：免签查询、支付宝绑卡、eSIM 与高铁工具",
  "GoChinaDesk — 2026年 中国旅行完全ガイド｜30日ビザ免除・アリペイ・eSIM・新幹線",
  "GoChinaDesk — 2026 중국 여행 완벽 가이드｜30일 무비자·알리페이·eSIM·고속철도"
);
const META_DESC = t4(
  "Plan China without friction: 240-hour visa-free & 30-day checker, Alipay/WeChat Pay foreign card setup, roaming eSIM calculator, 12306 bullet trains, 49-city HD metro maps & instant tax refund tools.",
  "外国人赴华一站式实操指南：30 天免签与 240 小时过境自查、支付宝微信绑外卡、漫游 eSIM 流量计算、12306 高铁、全国 49 城双语地铁图与 200 元即买即退计算器。",
  "初めての中国旅行も安心。日本人30日間ビザ免除チェック、アリペイ・WeChatPay設定、中国eSIM容量計算、新幹線12306予約、全国49都市地下鉄路線図、200元即時免税ガイドまで完全網羅。",
  "한국인 중국 자유여행 올인원: 30일 무비자·240시간 경유 확인, 알리페이·위챗페이 해외카드 등록, 중국 eSIM 계산기, 12306 고속철도, 전국 49개 도시 지하철 노선도, 200위안 즉시 택스리펀까지."
);

const U = {
  heroBadge: t4(
    "Updated for 2026 · 50 Visa-Free Countries & 240-Hour Transit",
    "2026 最新更新 · 50 国免签与 240 小时过境免签",
    "2026年最新 · 日本含む50カ国30日ビザ免除＆240時間トランジット対応",
    "2026 최신 · 한국 포함 50개국 30일 무비자 & 240시간 경유 대응"
  ),
  heroH1: t4(
    "Travel China Without the Friction",
    "轻松游中国，扫清所有行前与落地障碍",
    "中国旅行の「不安」をすべて解消する実用ガイド",
    "막힘없는 중국 자유여행을 위한 실전 가이드"
  ),
  heroSub: t4(
    "Plain-English guides and interactive tools for visas, Alipay & WeChat Pay, roaming eSIMs, bullet trains, 49-city metro maps, tickets and offline Chinese show-cards.",
    "面向国际游客的实用攻略与互动工具：签证免签、支付宝与微信支付、漫游 eSIM、高铁、全国地铁图、景点购票及离线中文展示卡。",
    "ビザ免除確認、アリペイ・ウィーチャットペイ設定、eSIM容量計算、新幹線予約、全国地下鉄マップ、チケット手配までこれ1つで完結。",
    "무비자 확인, 알리페이·위챗페이 결제, 로밍 eSIM 계산기, 고속철도, 전국 지하철 노선도, 관광지 티켓 및 오프라인 중국어 카드까지 한 번에."
  ),
  toolsTitle: t4("13 Interactive China Travel Tools", "13 个中国旅行实用工具", "中国旅行に役立つ13の無料ツール", "중국 여행 필수 13가지 무료 도구"),
  toolsSub: t4(
    "Instant calculators, 49-city metro maps and full-screen Chinese cards built for your phone.",
    "专为手机打造的即时计算器、全国地铁图与全屏中文展示卡。",
    "スマホですぐ使える計算ツール・地下鉄路線図・現地提示用中国語カード。",
    "스마트폰에 최적화된 계산기, 전국 지하철 노선도 및 전체화면 중국어 카드."
  ),
  checklistBadge: t4("Start 72 hours before you fly", "出发前 72 小时必做", "出発72時間前チェック", "출국 72시간 전 필수 준비"),
  checklistTitle: t4("72-Hour Pre-Flight Personalized Checklist", "出发前 72 小时个性化行前清单", "出発72時間前パーソナル持ち物＆設定リスト", "출국 72시간 전 맞춤형 체크리스트"),
  checklistDesc: t4(
    "Pick your phone (iOS/Android), travel month and companions to generate a tailored China prep checklist — Alipay, eSIM, online arrival card, AMap and packing warnings.",
    "选择你的手机系统、出行月份和同行人，一键生成专属中国行前清单——支付宝、eSIM、网上入境卡、高德地图与避坑提醒。",
    "スマホ機種・渡航月・同行者を選ぶだけで、アリペイ、eSIM、オンライン入国カード、高徳地図などの準備リストを自動生成。",
    "스마트폰 기종, 여행 월, 동행자를 선택하면 알리페이, eSIM, 온라인 입국카드, 고덕지도 등 맞춤 준비 체크리스트를 만들어 드립니다."
  ),
  checklistCta: t4("Build my checklist", "生成我的清单", "リストを作成", "체크리스트 만들기"),
  blackoutTitle: t4("Blackout Dates Warning — Avoid China's Peak Holidays", "避坑预警——避开中国三大出行高峰期", "混雑注意：中国の大型連休を避けよう", "혼잡 주의 — 중국 3대 연휴 피하기"),
  blackoutDesc: t4(
    "Spring Festival (Jan/Feb), Labor Day Golden Week (May 1–5) and National Day Golden Week (Oct 1–7) bring extreme crowds, sold-out trains and 2×–3× hotel prices.",
    "春节（1–2 月）、五一假期（5 月 1–5 日）和国庆黄金周（10 月 1–7 日）期间景区极度拥挤、高铁一票难求且酒店涨价 2–3 倍。",
    "春節（1〜2月）、労働節（5/1〜5）、国慶節（10/1〜7）は観光地が大混雑し、新幹線チケット完売・ホテル価格が2〜3倍になります。",
    "춘절(1~2월), 노동절(5/1~5), 국경절(10/1~7) 연휴에는 기차표 매진과 호텔 가격 2~3배 급등이 발생합니다."
  ),
  blackoutCta: t4("See best months & blackout dates", "查看最佳月份与避坑日历", "ベストシーズン＆混雑カレンダーを見る", "추천 시즌 및 연휴 달력 보기"),
  hubsTitle: t4("Core Survival Guides", "核心生存指南", "中国旅行の3大必須ガイド", "중국 여행 3대 핵심 가이드"),
  citiesTitle: t4("Top 8 Destinations for First-Timers", "首次赴华 8 大热门目的地", "初めての中国旅行・人気8都市ガイド", "중국 첫 여행 인기 8대 도시 가이드"),
  guidesTitle: t4("Essential Guides to Read First", "必读核心攻略", "まず読むべき重要ガイド", "필독 핵심 가이드"),
  plannerCta: t4("Need a day-by-day route? Try the Trip Planner", "需要逐日行程？试试行程规划器", "日程別のルート作成は旅程プランナーへ", "일차별 루트가 필요하신가요? 일정 플래너 쓰기"),
};

const HUBS = [
  {
    path: "/visa",
    Icon: ShieldCheck,
    cls: "bg-red-50 text-red-600",
    title: t4("Visa & Entry", "签证与入境", "ビザ免除・入国手続き", "비자·입국 절차"),
    desc: t4(
      "50-country 30-day visa-free list, 240-hour transit rules (24 provinces / 65 ports), online arrival card and airport immigration.",
      "50 国 30 天免签名单、240 小时过境免签（24 省 65 口岸）、网上入境卡与机场边检攻略。",
      "日本含む50カ国の30日ビザ免除、240時間トランジット免除（24省65港）、オンライン入国カード解説。",
      "한국 포함 50개국 30일 무비자, 240시간 경유 무비자(24개 성·65개 항구), 온라인 입국카드 안내."
    ),
  },
  {
    path: "/money",
    Icon: CreditCard,
    cls: "bg-blue-50 text-blue-600",
    title: t4("Money, Payments & Internet", "支付、现金与网络", "決済・アリペイ・eSIM通信", "결제·알리페이·로밍 eSIM"),
    desc: t4(
      "Link foreign cards to Alipay, WeChat Pay, TenPayGo & UnionPay, avoid 3% fees over ¥200, plus Singapore-routed roaming eSIMs.",
      "支付宝/微信/TenPayGo/银联绑卡图解、规避 200 元以上 3% 手续费和 ATM 陷阱，以及新加坡路由漫游 eSIM。",
      "アリペイ・ウィーチャットペイへのクレカ登録、200元超の3%手数料回避、国際ローミングeSIM完全ガイド。",
      "알리페이·위챗페이 해외카드 등록, 200위안 초과 3% 수수료 절약, 싱가포르 라우팅 로밍 eSIM 가이드."
    ),
  },
  {
    path: "/transport",
    Icon: TrainFront,
    cls: "bg-emerald-50 text-emerald-600",
    title: t4("Trains, Flights & Getting Around", "高铁、国内航班与市内交通", "新幹線・国内線・地下鉄＆DiDi", "고속철도·국내선·지하철·디디"),
    desc: t4(
      "High-speed rail booking, domestic flight CCC power bank rules, 12 major airports, tap-card metros, DiDi and AMap.",
      "高铁购票与 12306 教程、国内航班充电宝 CCC 规定、12 大机场交通、地铁拍外卡、滴滴与高德地图。",
      "中国新幹線（12306・Trip.com）、国内線CCCバッテリー規定、12大空港アクセス、クレカタッチ地下鉄＆DiDi。",
      "중국 고속철도 12306 예매, 국내선 보조배터리 CCC 규정, 12대 국제공항 교통, 해외카드 태그 지하철 & 디디."
    ),
  },
];

const FEATURED_SLUGS = [
  "visa-free-countries",
  "240-hour-transit",
  "alipay-wechat-pay",
  "internet-esim",
  "high-speed-trains",
  "hotels-in-china",
  "attraction-tickets",
  "shopping-tax-refund",
  "airports",
];

const HOME_FAQ: FaqItem[] = [
  {
    q: t2("Do I need a visa to visit China in 2026?", "2026 年去中国旅游需要签证吗？"),
    a: t2(
      "Passport holders from 50 countries enjoy 30-day unilateral visa-free entry. Travelers from 57 countries (including the US, UK and Canada) can use the 240-hour (10-day) visa-free transit rule when flying A → China → C (third country/region, including Hong Kong or Macau). Use our Visa-Free & 240-Hour Transit Checker to confirm your route.",
      "50 个国家的护照持有人享有 30 天单方面免签入境。包括美国、英国、加拿大在内的 57 国旅客在满足 A → 中国 → C（第三国或港澳台地区）路线时，可使用 240 小时（10 天）过境免签。请用我们的免签检查器确认你的路线。"
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
      "Not on local Chinese Wi-Fi or local SIM cards. The easiest solution is to install a Singapore-routed international roaming eSIM before departure — international data roaming gives seamless access to Google, WhatsApp, Instagram, TikTok & ChatGPT with zero configuration.",
      "连接中国本地 Wi-Fi 或使用中国本地 SIM 卡时无法直连。最省心的办法是出发前安装新加坡路由的国际漫游 eSIM——合规国际数据漫游零配置即可无缝使用 Google、WhatsApp、Instagram、TikTok 与 ChatGPT。"
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
          <div className="mx-auto mt-5 flex flex-wrap items-center justify-center gap-2.5">
            <Link
              href={href(lang, "/tools/packing-checklist")}
              className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-white hover:text-slate-900 sm:text-sm"
            >
              {tx(t4("Planning my trip →", "行前准备清单 →", "旅行準備チェック →", "여행 전 준비 →"), lang)}
            </Link>
            <Link
              href={href(lang, "/guides/arrival-immigration")}
              className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-white hover:text-slate-900 sm:text-sm"
            >
              {tx(t4("I've just landed →", "刚落地·通关进城 →", "到着直後ガイド →", "막 도착했어요 →"), lang)}
            </Link>
            <Link
              href={href(lang, "/tools/rescue-cards")}
              className="rounded-full bg-red-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-red-500 sm:text-sm"
            >
              {tx(t4("I need help now", "现场遇到麻烦·紧急求助", "今すぐ助けが必要", "긴급 도움이 필요해요"), lang)}
            </Link>
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
