import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";
import { href, isLang, LANGS, t4, tx } from "@/lib/i18n";
import { buildMetadata, articleLd, breadcrumbLd, faqLd } from "@/lib/seo";
import { GUIDES, getGuide } from "@/data/guides";
import { UI } from "@/data/ui";
import { PageHeader } from "@/components/PageHeader";
import { Blocks } from "@/components/Blocks";
import { Faq } from "@/components/Faq";
import { IconBox } from "@/components/IconBox";
import { JsonLd } from "@/components/JsonLd";
import { AdSlot } from "@/components/AdSlot";
import { HelpContactCard } from "@/components/HelpContactCard";

type P = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return LANGS.flatMap((lang) => GUIDES.map((g) => ({ lang, slug: g.slug })));
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang, slug } = await params;
  const g = getGuide(slug);
  if (!g || !isLang(lang)) return {};
  return buildMetadata({ lang, path: `/guides/${slug}`, title: g.seoTitle ?? g.title, description: g.summary, type: "article" });
}

const HUB: Record<string, string> = { visa: "/visa", money: "/money", food: "/money", transport: "/transport", practical: "/guides" };

export default async function GuidePage({ params }: P) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();
  const guide = getGuide(slug);
  if (!guide) notFound();
  const t = UI[lang];
  const title = tx(guide.title, lang);
  const related = (guide.related ?? []).map(getGuide).filter((g): g is NonNullable<typeof g> => !!g);

  // One contextual mini action card for the right rail (replaces the cluttered category list)
  const railAction =
    slug === "airports"
      ? {
          badge: { en: "Late Arrival?", zh: "深夜落地？" },
          title: { en: "Pre-Book English Airport Pickup", zh: "预订英文举牌接机" },
          desc: { en: "Fixed price from ~$28 USD · Free flight-delay wait.", zh: "一口价约 $28 美元起 · 航班延误免费等。" },
          cta: { en: "Check Pickup Prices", zh: "查看接机一口价" },
          href: "#arrival-pickup",
          external: false,
        }
      : slug === "domestic-flights"
        ? {
            badge: { en: "3-Second Check", zh: "3 秒自检" },
            title: { en: "Will Security Confiscate Your Power Bank?", zh: "你的充电宝会被没收吗？" },
            desc: { en: "Calculate Wh & check the CCC domestic flight rule instantly.", zh: "立刻换算 Wh 并核对国内航班 CCC 规定。" },
            cta: { en: "Run Instant Check", zh: "立即自检" },
            href: "#power-bank-ccc",
            external: false,
          }
        : slug === "metro-didi-maps"
          ? {
              badge: { en: "In the Taxi?", zh: "正在打车？" },
              title: { en: "Live Taxi Address Show-Card", zh: "实时出租车全屏地址卡" },
              desc: { en: "Type your hotel address & show it full-screen to the driver.", zh: "输入酒店中文地址，一键全屏给司机看。" },
              cta: { en: "Jump to Taxi Card", zh: "打开地址卡" },
              href: "#taxis",
              external: false,
            }
          : slug === "240-hour-transit" || slug === "visa-free-countries"
            ? {
                badge: t4("10-Second Check", "10 秒自查", "10秒ビザ判定", "10초 무비자 확인"),
                title: t4("Verify Your Passport & 240h Route", "立刻测算你的护照与 240h 路线", "パスポート＆240時間ルートを即判定", "여권 및 240시간 경유 노선 즉시 확인"),
                desc: t4(
                  "Check 30-day visa-free, A→China→C legality, exact exit deadline & restricted spots.",
                  "一键核对 30 天免签、A→中国→C 路线合规性、精确离境截止时间与禁去景点。",
                  "30日免除・A→中国→Cルート・正確な出国期限・立入制限エリアを一発チェック。",
                  "30일 무비자, A→중국→C 규정, 정확한 출국 마감 시각과 금지 구역을 바로 확인."
                ),
                cta: t4("Open Visa & Transit Checker", "打开签证与过境检测器", "ビザチェッカーを開く", "무비자 확인기 열기"),
                href: href(lang, "/tools/visa-checker"),
                external: false,
              }
            : slug === "shopping-tax-refund"
            ? {
                badge: t4("Instant Calculator", "实时算账", "免税計算ツール", "환급 계산기"),
                title: t4("Calculate Your 9% Net Tax Refund", "秒算你能拿回多少退税款", "手取り約9%の免税額を今すぐ計算", "내 9% 실수령 택스리펀 바로 계산"),
                desc: t4(
                  "Enter your RMB purchase amount to see exact 11% gross, 2% agency fee & net payout.",
                  "输入购物人民币金额，立刻算出毛退税、代理费与实际到手退税额。",
                  "購入額（元）を入力するだけで、11%還付額・手数料・手取り金額を一瞬で計算。",
                  "구매 금액(위안)만 입력하면 11% 환급액, 수수료, 실수령액을 바로 확인합니다."
                ),
                cta: t4("Open Tax Refund Calculator", "打开退税计算器", "免税計算ツールを開く", "택스리펀 계산기 열기"),
                href: href(lang, "/tools/tax-refund-calculator"),
                external: false,
              }
            : slug === "when-to-go"
              ? {
                  badge: t4("Trip Builder", "行程规划", "旅程プランナー", "일정 플래너"),
                  title: t4("Build Your 7–14 Day China Route", "一键生成 7–14 天中国高铁路线", "7〜14日間の中国モデルコース作成", "7~14일 중국 고속철도 일정 만들기"),
                  desc: t4(
                    "Pick your trip length & interests to get a realistic bullet-train itinerary.",
                    "按出行天数与偏好，自动生成不走回头路的中国高铁经典行程。",
                    "日数とテーマを選ぶだけで、新幹線で巡る無理のない中国モデルコースを作成。",
                    "여행 일수와 취향만 고르면 최적의 중국 고속철도 추천 일정을 만들어 드립니다."
                  ),
                  cta: t4("Open Trip Planner", "打开行程规划器", "旅程プランナーを開く", "일정 플래너 열기"),
                  href: href(lang, "/planner"),
                  external: false,
                }
              : slug === "shared-bikes"
                ? {
                    badge: t4("City Transit", "城市交通", "都市交通マップ", "도시 교통"),
                    title: t4("All 49 China City Metro Maps (HD)", "全国 49 城中英双语高清地铁图", "中国全49都市 英語・中国語 地下鉄路線図", "중국 49개 도시 고화질 지하철 노선도"),
                    desc: t4(
                      "Zoomable English & Chinese subway maps + Visa/Mastercard tap-to-ride cities.",
                      "支持放大与全屏查看的中英文地铁图，附支持拍境外外卡进站城市清单。",
                      "拡大表示できる英語・中国語路線図と、Visaタッチ決済対応都市一覧。",
                      "확대 가능한 영문·중문 지하철 노선도와 해외카드 태그 가능 도시 목록."
                    ),
                    cta: t4("Open 49-City Metro Maps", "查看全国地铁图", "地下鉄路線図を見る", "지하철 노선도 보기"),
                    href: href(lang, "/tools/china-metro-maps"),
                    external: false,
                  }
                : {
                    badge: t4("Interactive Tool", "实用工具", "便利ツール", "필수 도구"),
                    title: t4("China eSIM & Data Calculator", "中国上网与 eSIM 流量计算器", "中国eSIM容量計算＆オフラインカード", "중국 eSIM 용량 계산기"),
                    desc: t4(
                      "Match the exact GB tier for your phone & trip length.",
                      "按机型与天数精准匹配流量档位。",
                      "機種と滞在日数から最適なGBプランと設定手順を一発判定。",
                      "기종과 여행 일수에 맞는 정확한 eSIM 데이터 용량을 추천합니다."
                    ),
                    cta: t4("Open Calculator", "打开计算器", "計算ツールを開く", "계산기 열기"),
                    href: href(lang, "/tools/esim-calculator"),
                    external: false,
                  };

  return (
    <>
      <JsonLd
        data={[
          articleLd(lang, { title, description: tx(guide.summary, lang), path: `/guides/${slug}`, updated: guide.updated }),
          breadcrumbLd(lang, [
            { name: t.home, path: "/" },
            { name: t.categories[guide.category], path: HUB[guide.category] },
            { name: title, path: `/guides/${slug}` },
          ]),
          ...(guide.faq?.length ? [faqLd(lang, guide.faq)] : []),
        ]}
      />
      <PageHeader
        lang={lang}
        title={title}
        subtitle={tx(guide.summary, lang)}
        crumbs={[{ path: HUB[guide.category], label: t.categories[guide.category] }, { label: title }]}
      >
        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{guide.readMin} {t.minRead}</span>
          <span>{t.updated} {guide.updated}</span>
        </div>
      </PageHeader>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_300px]">
        <article className="min-w-0">
          <div className="rounded-xl border border-slate-200 border-l-4 border-l-emerald-600 bg-white p-5 shadow-xs">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-emerald-800">{t.keyPoints}</h2>
            <ul className="space-y-2.5 text-sm">
              {guide.keyPoints.map((k, i) => (
                <li key={i} className="flex gap-2.5 leading-relaxed text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{tx(k, lang)}</span>
                </li>
              ))}
            </ul>
          </div>

          {guide.sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-32">
              <h2 className="mb-2 mt-10 text-2xl font-bold text-slate-900">{tx(s.heading, lang)}</h2>
              <Blocks blocks={s.blocks} lang={lang} />
            </section>
          ))}

          {guide.faq && guide.faq.length > 0 && (
            <section id="faq" className="scroll-mt-32">
              <h2 className="mb-4 mt-12 text-2xl font-bold text-slate-900">{t.faq}</h2>
              <Faq items={guide.faq} lang={lang} />
            </section>
          )}

          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="mb-4 text-xl font-bold text-slate-900">{t.related}</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {related.map((g) => (
                  <Link key={g.slug} href={href(lang, `/guides/${g.slug}`)} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 hover:border-red-200 hover:shadow-sm">
                    <IconBox name={g.icon} size="sm" />
                    <span className="font-medium text-slate-900">{tx(g.title, lang)}</span>
                    <ArrowRight className="ml-auto h-4 w-4 text-slate-400" />
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-10">
            <HelpContactCard lang={lang} context="general" />
          </div>
        </article>

        <aside className="space-y-4 lg:self-start">
          <nav className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="mb-2 px-2 text-xs font-bold uppercase tracking-wider text-slate-500">{t.onThisPage}</h3>
            <ul className="space-y-0.5 text-sm">
              {guide.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="block rounded-md px-2 py-1.5 text-slate-700 transition hover:bg-slate-50 hover:text-slate-950">
                    {tx(s.heading, lang)}
                  </a>
                </li>
              ))}
              {guide.faq?.length ? (
                <li>
                  <a href="#faq" className="block rounded-md px-2 py-1.5 text-slate-700 transition hover:bg-slate-50 hover:text-slate-950">
                    {t.faq}
                  </a>
                </li>
              ) : null}
            </ul>
          </nav>

          {/* Single contextual mini action card */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
            <span className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700">
              {tx(railAction.badge, lang)}
            </span>
            <h3 className="mt-2 text-sm font-bold text-slate-900">{tx(railAction.title, lang)}</h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">{tx(railAction.desc, lang)}</p>
            <a
              href={railAction.href}
              className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-600"
            >
              {tx(railAction.cta, lang)}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <AdSlot lang={lang} slot="sidebar" />
        </aside>
      </div>
    </>
  );
}
