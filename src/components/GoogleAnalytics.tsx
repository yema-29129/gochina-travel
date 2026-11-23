"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { SITE } from "@/lib/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Google Analytics 4 (only loads when NEXT_PUBLIC_GA_ID is set). Tracks client-side page changes. */
export function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!SITE.gaId || !window.gtag) return;
    window.gtag("config", SITE.gaId, { page_path: pathname });
  }, [pathname]);

  if (!SITE.gaId) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${SITE.gaId}');`}
      </Script>
    </>
  );
}
