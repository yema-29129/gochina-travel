import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, t4 } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { HubPage } from "@/components/HubPage";

type P = { params: Promise<{ lang: string }> };
const title = t4(
  "Transport, Hotels & Practical Survival in China (2026)",
  "交通出行、酒店住宿与安全实用指南（2026）",
  "中国交通・ホテル・安全＆実用サバイバルガイド（2026）",
  "중국 교통·호텔 숙박·안전 실전 가이드 (2026)"
);
const description = t4(
  "High-speed trains, 12 airports, metro & DiDi, domestic flights, foreign-guest hotels, controlled medications/CBD rules, lost phone playbook, tickets, and safety.",
  "高铁、12 大机场、地铁与滴滴、国内航班与充电宝规定、外宾酒店住宿、处方药/大麻红线与丢手机急救、景点门票及旅游安全全收录。",
  "中国新幹線、12大空港、地下鉄・DiDi、国内線、外国人可ホテル、処方薬・CBD規制、スマホ紛失対策、観光チケット＆安全情報を完全網羅。",
  "고속철도, 12대 공항, 지하철·디디, 국내선, 외국인 호텔 예약, 처방약·CBD 규정, 휴대폰 분실 대처, 관광지 티켓 및 안전 가이드 총정리."
);

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata({ lang, path: "/transport", title, description });
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <HubPage
      lang={lang}
      path="/transport"
      title={title}
      subtitle={description}
      categories={["transport", "practical"]}
      tools={["china-metro-maps", "powerbank-airport", "taxi-card", "rescue-cards"]}
    />
  );
}
