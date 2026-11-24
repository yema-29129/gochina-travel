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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
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
            __html: `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?b14ac79b32413ac32dce50ed69eef8b8";
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
  script.src = 'https://emrldtp.cc/NjA2MTI4.js?t=606128';
  document.head.appendChild(script);
})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <Header lang={lang} />
        <main className="min-h-[60vh]">{children}</main>
        <Footer lang={lang} />
        <GoogleAnalytics />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
