"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { Lang } from "@/lib/i18n";
import type { ToolId } from "@/data/types";

type P = { lang: Lang };
const loading = () => <div className="h-64 animate-pulse rounded-xl bg-slate-100" />;

/** Maps tool IDs to their client components (code-split per tool). Every tool component takes { lang }. */
export const TOOL_COMPONENTS: Record<ToolId, ComponentType<P>> = {
  "visa-checker": dynamic<P>(() => import("./VisaChecker"), { loading }),
  "payment-fee-calculator": dynamic<P>(() => import("./PaymentFeeCalculator"), { loading }),
  "ticket-alarm": dynamic<P>(() => import("./TicketAlarm"), { loading }),
  "esim-calculator": dynamic<P>(() => import("./EsimCalculator"), { loading }),
  "china-metro-maps": dynamic<P>(() => import("./ChinaMetroMaps"), { loading }),
  "packing-checklist": dynamic<P>(() => import("./PackingChecklist"), { loading }),
  "allergy-card": dynamic<P>(() => import("./AllergyCard"), { loading }),
  "rescue-cards": dynamic<P>(() => import("./RescueCards"), { loading }),
  "powerbank-airport": dynamic<P>(() => import("./PowerbankAirport"), { loading }),
  "tax-refund-calculator": dynamic<P>(() => import("./TaxRefundCalculator"), { loading }),
  "currency-converter": dynamic<P>(() => import("./CurrencyConverter"), { loading }),
  "taxi-card": dynamic<P>(() => import("./TaxiCard"), { loading }),
  phrasebook: dynamic<P>(() => import("./Phrasebook"), { loading }),
};

export function ToolRenderer({ id, lang }: { id: ToolId; lang: Lang }) {
  const C = TOOL_COMPONENTS[id];
  return <C lang={lang} />;
}
