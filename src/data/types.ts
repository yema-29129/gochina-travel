import type { L } from "@/lib/i18n";

/* ---------------- Content blocks (used by guides, visa pages, city pages) ---------------- */

export type AffiliateId =
  | "tripTrains"
  | "tripHotels"
  | "tripTours"
  | "tripFlights"
  | "airportTransfer"
  | "esim"
  | "wise"
  | "insurance"
  | "survivalPack";

export type ToolId =
  | "visa-checker"
  | "payment-fee-calculator"
  | "ticket-alarm"
  | "esim-calculator"
  | "packing-checklist"
  | "allergy-card"
  | "rescue-cards"
  | "powerbank-airport"
  | "tax-refund-calculator"
  | "currency-converter"
  | "taxi-card"
  | "phrasebook";

export type Block =
  | { type: "p"; text: L }
  | { type: "steps"; items: L[] }
  | { type: "list"; items: L[] }
  /** Table. Cells can be bilingual (L) or language-neutral strings (numbers, codes like "PVG"). */
  | { type: "table"; head: L[]; rows: (L | string)[][] }
  | { type: "callout"; tone: "info" | "tip" | "warn" | "danger"; title?: L; text: L }
  /** Chinese text the traveler can show to locals (rendered as a tappable full-screen card). */
  | { type: "show"; zh: string; pinyin?: string; meaning: L }
  /** Link card to an interactive tool. */
  | { type: "tool"; tool: ToolId }
  /** Affiliate recommendation box (configured in src/lib/affiliates.ts). */
  | { type: "affiliate"; id: AffiliateId }
  /** AdSense in-article ad slot. */
  | { type: "ad" };

export interface Section {
  id: string; // anchor id, lowercase-with-dashes
  heading: L;
  blocks: Block[];
}

export interface FaqItem {
  q: L;
  a: L;
}

export type GuideCategory = "visa" | "money" | "transport" | "food" | "practical";

export interface Guide {
  slug: string;
  category: GuideCategory;
  icon: "visa" | "pay" | "wifi" | "train" | "plane" | "apps" | "shield" | "food" | "bag" | "calendar" | "ticket" | "car" | "map";
  title: L;
  /** <title> tag for SEO (optional, defaults to title). Target a real Google search query. */
  seoTitle?: L;
  summary: L; // also used as meta description (aim for 140-160 chars in English)
  updated: string; // YYYY-MM-DD
  readMin: number;
  keyPoints: L[];
  sections: Section[];
  faq?: FaqItem[];
  related?: string[]; // other guide slugs
}

/* ---------------- Cities ---------------- */

export interface Attraction {
  name: L;
  zh: string; // Chinese name to show locals
  ticket: L;
  booking: L; // how/when to book (release time, closed days)
  time: L;
  tip: L;
}

export interface Dish {
  name: L;
  zh: string;
  pinyin: string;
  price: string;
  note: L;
}

export interface Neighborhood {
  name: L;
  zh: string;
  goodFor: L;
}

export interface City {
  id: string;
  name: L;
  zh: string;
  province: L;
  image: string;
  summary: L;
  seoTitle: L;
  bestTime: L;
  days: L;
  budget: L;
  difficulty: 1 | 2 | 3;
  tapCardOnMetro: boolean; // can foreigners tap Visa/Mastercard at metro gates
  airports: { code: string; name: L; distance: L; transfer: L; trap: L }[];
  neighborhoods: Neighborhood[];
  attractions: Attraction[];
  food: Dish[];
  gettingAround: L[];
  transit240: L; // 240-hour transit rule for this province
  nearby: L;
  faq: FaqItem[];
}
