/**
 * Site-wide settings. Configure these with environment variables (see .env.example).
 */
export const SITE = {
  name: "GoChina",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://china.tmhzz.com").replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@tmhzz.com",
  /** Google Search Console HTML-tag verification code (content="..."). */
  gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
  /** Bing Webmaster verification code (optional). */
  bingVerification: process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
  /** Google Analytics 4 measurement ID, e.g. G-XXXXXXXXXX */
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  /** Google AdSense publisher ID, e.g. ca-pub-1234567890123456 */
  adsenseClient: process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "",
  /** AdSense ad unit slot IDs (optional; Auto ads work without them). */
  adSlots: {
    inArticle: process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE || "",
    sidebar: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR || "",
    footer: process.env.NEXT_PUBLIC_ADSENSE_SLOT_FOOTER || "",
  },
};

export const LAST_UPDATED = "2026-11-24";
