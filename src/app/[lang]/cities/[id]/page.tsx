import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Calendar,
  Clock,
  Compass,
  CreditCard,
  MapPin,
  Plane,
  ShieldCheck,
  Ticket,
  TrainFront,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";
import { href, isLang, LANGS, t2, tx } from "@/lib/i18n";
import { absUrl, buildMetadata, breadcrumbLd, faqLd } from "@/lib/seo";
import { CITIES, getCity } from "@/data/cities";
import { UI } from "@/data/ui";
import { FoodList } from "@/components/FoodList";
import { AffiliateBox } from "@/components/AffiliateBox";
import { AdSlot } from "@/components/AdSlot";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";

type P = { params: Promise<{ lang: string; id: string }> };

const U = {
  bestTime: t2("Best time", "最佳季节"),
  days: t2("Suggested stay", "建议天数"),
  budget: t2("Daily budget", "日均预算"),
  difficulty: t2("First-timer ease", "新手友好度"),
  easy: t2("Easy (1/3)", "简单（1/3）"),
  moderate: t2("Moderate (2/3)", "适中（2/3）"),
  challenging: t2("More local (3/3)", "偏深度（3/3）"),
  metroTap: t2("Foreign card on metro", "地铁拍外卡"),
  yes: t2("Yes (supported)", "支持"),
  no: t2("Use Alipay QR", "用支付宝乘车码"),
  transitTitle: t2("240-Hour Visa-Free Transit Boundary", "240 小时过境免签活动范围"),
  checkRoute: t2("Check your 240-hour route", "检查你的 240 小时过境路线"),
  airportsTitle: t2("Airports & Getting into the City", "机场与进城交通"),
  colAirport: t2("Airport", "机场"),
  colDist: t2("Distance", "距离"),
  colTransfer: t2("How to get to the city", "进城交通方式"),
  colTrap: t2("Watch out / Tip", "避坑与贴士"),
  stayTitle: t2("Where to Stay (Best Neighborhoods)", "住在哪里（推荐区域）"),
  attrTitle: t2("Top Attractions & Ticket Booking", "必去景点与抢票规则"),
  alarmCta: t2("Open Ticket Release Alarm", "打开景点放票闹钟"),
  colSight: t2("Attraction", "景点"),
  colTicket: t2("Ticket", "票价"),
  colBooking: t2("Booking rule", "预约规则"),
  colTime: t2("Time", "游玩时长"),
  colTip: t2("Practical tip", "实用贴士"),
  foodTitle: t2("Must-Try Local Food", "必吃当地美食"),
  aroundTitle: t2("Getting Around", "市内交通与出行"),
  nearbyTitle: t2("Easy Nearby Trips", "周边顺游目的地"),
};

export function generateStaticParams() {
  return LANGS.flatMap((lang) => CITIES.map((c) => ({ lang, id: c.id })));
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang, id } = await params;
  const city = getCity(id);
  if (!city || !isLang(lang)) return {};
  return buildMetadata({
    lang,
    path: `/cities/${city.id}`,
    title: city.seoTitle,
    description: city.summary,
    image: city.image,
    type: "article",
  });
}

export default async function CityDetailPage({ params }: P) {
  const { lang, id } = await params;
  if (!isLang(lang)) notFound();
  const city = getCity(id);
  if (!city) notFound();

  const t = UI[lang];
  const cityName = tx(city.name, lang);
  const diffLabel = city.difficulty === 1 ? U.easy : city.difficulty === 2 ? U.moderate : U.challenging;

  const destinationLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: `${cityName} (${city.zh})`,
    description: tx(city.summary, lang),
    image: city.image,
    url: absUrl(lang, `/cities/${city.id}`),
    touristType: "International tourists",
  };

  return (
    <>
      <JsonLd
        data={[
          destinationLd,
          breadcrumbLd(lang, [
            { name: t.home, path: "/" },
            { name: t.nav.cities, path: "/cities" },
            { name: cityName, path: `/cities/${city.id}` },
          ]),
          ...(city.faq.length ? [faqLd(lang, city.faq)] : []),
        ]}
      />

      {/* Hero */}
      <div className="relative overflow-hidden bg-slate-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={city.image}
          alt={`${cityName} (${city.zh})`}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/30" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-slate-300">
            <Link href={href(lang, "/")} className="hover:text-white">
              {t.home}
            </Link>
            <span>/</span>
            <Link href={href(lang, "/cities")} className="hover:text-white">
              {t.nav.cities}
            </Link>
            <span>/</span>
            <span className="text-white">{cityName}</span>
          </nav>
          <div className="text-sm font-medium text-amber-300">{tx(city.province, lang)}</div>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {cityName}{" "}
            {lang === "en" && <span className="font-normal text-white/80">{city.zh}</span>}
          </h1>
          <p className="mt-3 max-w-3xl text-base text-slate-200 sm:text-lg">{tx(city.summary, lang)}</p>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-5 sm:grid-cols-5 sm:px-6">
          <div className="flex items-start gap-2.5">
            <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
            <div>
              <div className="text-xs text-slate-500">{tx(U.bestTime, lang)}</div>
              <div className="text-sm font-bold text-slate-900">{tx(city.bestTime, lang)}</div>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
            <div>
              <div className="text-xs text-slate-500">{tx(U.days, lang)}</div>
              <div className="text-sm font-bold text-slate-900">{tx(city.days, lang)}</div>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
            <div>
              <div className="text-xs text-slate-500">{tx(U.budget, lang)}</div>
              <div className="text-sm font-bold text-slate-900">{tx(city.budget, lang)}</div>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Compass className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
            <div>
              <div className="text-xs text-slate-500">{tx(U.difficulty, lang)}</div>
              <div className="text-sm font-bold text-slate-900">{tx(diffLabel, lang)}</div>
            </div>
          </div>
          <div className="col-span-2 flex items-start gap-2.5 sm:col-span-1">
            <CreditCard className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
            <div>
              <div className="text-xs text-slate-500">{tx(U.metroTap, lang)}</div>
              <div className={`text-sm font-bold ${city.tapCardOnMetro ? "text-emerald-700" : "text-slate-900"}`}>
                {tx(city.tapCardOnMetro ? U.yes : U.no, lang)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-10 sm:px-6">
        {/* 240-Hour Transit Callout */}
        <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
              <div>
                <h2 className="font-bold text-emerald-950">{tx(U.transitTitle, lang)}</h2>
                <p className="mt-1 text-sm leading-relaxed text-emerald-900">{tx(city.transit240, lang)}</p>
              </div>
            </div>
            <Link
              href={href(lang, "/tools/visa-checker")}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-emerald-700 px-3.5 py-2 text-xs font-semibold text-white hover:bg-emerald-800"
            >
              {tx(U.checkRoute, lang)} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* Airports Table */}
        <section>
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900">
            <Plane className="h-6 w-6 text-red-600" /> {tx(U.airportsTitle, lang)}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">{tx(U.colAirport, lang)}</th>
                  <th className="px-4 py-3 font-semibold">{tx(U.colDist, lang)}</th>
                  <th className="px-4 py-3 font-semibold">{tx(U.colTransfer, lang)}</th>
                  <th className="px-4 py-3 font-semibold">{tx(U.colTrap, lang)}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {city.airports.map((a) => (
                  <tr key={a.code} className="align-top">
                    <td className="px-4 py-3.5">
                      <span className="inline-block rounded bg-slate-900 px-2 py-0.5 font-mono text-xs font-bold text-white">
                        {a.code}
                      </span>
                      <div className="mt-1 font-semibold text-slate-900">{tx(a.name, lang)}</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3.5 text-slate-700">{tx(a.distance, lang)}</td>
                    <td className="px-4 py-3.5 text-slate-700">{tx(a.transfer, lang)}</td>
                    <td className="px-4 py-3.5 text-amber-900">{tx(a.trap, lang)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Neighborhoods */}
        <section>
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900">
            <MapPin className="h-6 w-6 text-red-600" /> {tx(U.stayTitle, lang)}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {city.neighborhoods.map((n) => (
              <div key={n.zh} className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-bold text-slate-900">{tx(n.name, lang)}</h3>
                  <span className="text-sm font-medium text-slate-400">{n.zh}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{tx(n.goodFor, lang)}</p>
              </div>
            ))}
          </div>
          <AffiliateBox id="tripHotels" lang={lang} />
        </section>

        {/* Attractions Table */}
        <section>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
              <Ticket className="h-6 w-6 text-red-600" /> {tx(U.attrTitle, lang)}
            </h2>
            <Link
              href={href(lang, "/tools/ticket-alarm")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3.5 py-2 text-sm font-semibold text-red-700 hover:bg-red-100"
            >
              <Ticket className="h-4 w-4" /> {tx(U.alarmCta, lang)} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">{tx(U.colSight, lang)}</th>
                  <th className="px-4 py-3 font-semibold">{tx(U.colTicket, lang)}</th>
                  <th className="px-4 py-3 font-semibold">{tx(U.colBooking, lang)}</th>
                  <th className="px-4 py-3 font-semibold">{tx(U.colTime, lang)}</th>
                  <th className="px-4 py-3 font-semibold">{tx(U.colTip, lang)}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {city.attractions.map((at) => (
                  <tr key={at.zh} className="align-top">
                    <td className="px-4 py-3.5">
                      <div className="font-bold text-slate-900">{tx(at.name, lang)}</div>
                      <div className="text-xs text-slate-500">{at.zh}</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3.5 font-medium text-slate-800">{tx(at.ticket, lang)}</td>
                    <td className="px-4 py-3.5 text-slate-700">{tx(at.booking, lang)}</td>
                    <td className="whitespace-nowrap px-4 py-3.5 text-slate-700">{tx(at.time, lang)}</td>
                    <td className="px-4 py-3.5 text-slate-600">{tx(at.tip, lang)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <AffiliateBox id="tripTours" lang={lang} />
        </section>

        <AdSlot lang={lang} slot="inArticle" />

        {/* Food List */}
        <section>
          <h2 className="mb-3 flex items-center gap-2 text-2xl font-bold text-slate-900">
            <UtensilsCrossed className="h-6 w-6 text-red-600" /> {tx(U.foodTitle, lang)}
          </h2>
          <FoodList dishes={city.food} lang={lang} />
        </section>

        {/* Getting Around & Nearby */}
        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5 lg:col-span-2">
            <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-slate-900">
              <TrainFront className="h-5 w-5 text-red-600" /> {tx(U.aroundTitle, lang)}
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
              {city.gettingAround.map((item, idx) => (
                <li key={idx}>{tx(item, lang)}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="mb-2 text-lg font-bold text-slate-900">{tx(U.nearbyTitle, lang)}</h2>
            <p className="text-sm leading-relaxed text-slate-700">{tx(city.nearby, lang)}</p>
          </div>
        </section>

        {/* FAQ */}
        {city.faq.length > 0 && (
          <section id="faq">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">{t.faq}</h2>
            <Faq items={city.faq} lang={lang} />
          </section>
        )}
      </div>
    </>
  );
}
