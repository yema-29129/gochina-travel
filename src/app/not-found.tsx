import Link from "next/link";

export default function NotFound() {
  const quickLinks = [
    { href: "/en/tools/visa-checker", label: "Visa-Free & 240h Transit Checker", sub: "50-country 30-day & 57-country transit" },
    { href: "/en/guides/china-tourist-visa-l", label: "China Tourist Visa (L) Guide", sub: "US & non-visa-free citizens COVA steps" },
    { href: "/en/tools/payment-fee-calculator", label: "Alipay & WeChat Pay Setup", sub: "Foreign cards & ¥200 3% fee rules" },
    { href: "/en/tools/rescue-cards", label: "Emergency & Rescue Cards", sub: "110/120/12367 + offline Chinese cards" },
    { href: "/en/tools/ticket-alarm", label: "Attraction Ticket Alarm", sub: "Forbidden City 7-day timezone converter" },
    { href: "/en/guides/hotels-in-china", label: "Hotels in China for Foreigners", sub: "Foreign-guest rules & 24h registration" },
  ];

  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
          <Link href="/en" className="inline-flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-lg font-bold text-white">中</span>
            <span className="text-2xl font-extrabold tracking-tight">
              Go<span className="text-red-600">China</span>
            </span>
          </Link>

          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-red-600">404 · Page Not Found</p>
          <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            We couldn&apos;t find that page
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-600">
            The link may have moved or been updated for 2026. Pick your language or jump straight to our most-used China travel tools below.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Link href="/en" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600">
              English Home
            </Link>
            <Link href="/zh" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:border-slate-900">
              中文首页
            </Link>
            <Link href="/ja" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:border-slate-900">
              日本語
            </Link>
            <Link href="/ko" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:border-slate-900">
              한국어
            </Link>
          </div>

          <div className="mt-10 grid w-full gap-3 text-left sm:grid-cols-2">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-red-300 hover:shadow-xs"
              >
                <div className="font-bold text-slate-900">{item.label}</div>
                <div className="mt-0.5 text-xs text-slate-500">{item.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </body>
    </html>
  );
}
