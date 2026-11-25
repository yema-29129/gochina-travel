import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import "../globals.css";
import { HTML_LANG, LANGS, isLang } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#dc2626",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const verification: Metadata["verification"] = {
    yandex: "e0f2285214d03852",
  };
  if (SITE.gscVerification) verification.google = SITE.gscVerification;
  if (SITE.bingVerification) verification.other = { "msvalidate.01": SITE.bingVerification };
  return {
    metadataBase: new URL(SITE.url),
    title: { default: SITE.name, template: `%s | ${SITE.name}` },
    applicationName: SITE.name,
    manifest: "/manifest.webmanifest",
    verification,
    other: SITE.adsenseClient ? { "google-adsense-account": SITE.adsenseClient } : undefined,
    icons: { icon: "/icon.svg", apple: "/icon.svg" },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html lang={HTML_LANG[lang]}>
      <head>
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="GoChina LLM Index" />
        <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="GoChina Full AI Knowledge Base" />
        {/* System font stack avoids render-blocking Google Fonts requests inside Mainland China. */}
        {/* Google Consent Mode v2 defaults. Ads/analytics storage is denied in the EEA, UK and Switzerland
            until the visitor consents through Google's certified CMP (AdSense > Privacy & messaging). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500,region:['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IS','IE','IT','LV','LI','LT','LU','MT','NL','NO','PL','PT','RO','SK','SI','ES','SE','GB','CH']});
gtag('consent','default',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});`,
          }}
        />
        {SITE.adsenseClient && (
          <Script
            id="adsense"
            async
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${SITE.adsenseClient}`}
          />
        )}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var h=location.hostname;if(h==="china.tmhzz.com"||h==="www.gochinadesk.com"){location.replace("https://gochinadesk.com"+location.pathname+location.search+location.hash);}})();`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?4becdacfbf2b7f4e6076134124f11006";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();`,
          }}
        />
        <script
          data-noptimize="1"
          data-cfasync="false"
          data-wpfc-render="false"
          data-no-defer="1"
          data-cmp-ab="2"
          dangerouslySetInnerHTML={{
            __html: `(function () {
  var script = document.createElement("script");
  script.async = 1;
  script.setAttribute("data-cmp-ab","2");
  script.src = 'https://emrldtp.cc/NjA2Mjk0.js?t=606294';
  document.head.appendChild(script);
})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {lang === "zh" && (
          <div className="no-print border-b border-slate-200 bg-slate-900 px-4 py-1.5 text-center text-xs text-slate-200">
            <span>Visiting China? Switch language: </span>
            <a href="/en" className="font-semibold text-white underline decoration-red-400 underline-offset-2 hover:text-red-300">English</a>
            <span className="mx-1.5 text-slate-500">·</span>
            <a href="/ja" className="font-semibold text-white underline decoration-red-400 underline-offset-2 hover:text-red-300">日本語</a>
            <span className="mx-1.5 text-slate-500">·</span>
            <a href="/ko" className="font-semibold text-white underline decoration-red-400 underline-offset-2 hover:text-red-300">한국어</a>
          </div>
        )}
        <Header lang={lang} />
        <main className="min-h-[60vh]">{children}</main>
        <Footer lang={lang} />
        <GoogleAnalytics />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
