import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, t4 } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { HubPage } from "@/components/HubPage";

type P = { params: Promise<{ lang: string }> };
const title = t4(
  "China Visa & Entry Guide (2026): 30-Day Visa-Free & 240h Transit",
  "中国签证与入境指南（2026）：30 天免签、240 小时过境与隐藏避坑",
  "中国ビザ免除・入国完全ガイド（2026）：日本人30日免除・240時間トランジット・空港対策",
  "중국 비자·입국 완벽 가이드 (2026): 한국인 30일 무비자·240시간 경유·체크인 주의사항"
);
const description = t4(
  "50-country 30-day visa-free list, 240-hour transit rules & all 65 ports, Airline Check-In TIMATIC Rescue Card, Hong Kong rail traps, old 10-year visa rules, and 24-hour police registration.",
  "50 国 30 天免签名单、240 小时过境 65 口岸全表、航司值机 TIMATIC 救命卡、香港西九龙能出不能进大坑、旧护照 10 年签证与 24 小时住宿登记指南。",
  "日本人30日間ビザ免除条件、240時間トランジット全65口岸、空港チェックイン拒否対策TIMATICカード、香港高速鉄道の注意点、オンライン入国カードまで完全網羅。",
  "한국인 30일 무비자 조건, 240시간 경유 65개 입국항, 공항 체크인 거부 대비 TIMATIC 카드, 홍콩 고속철 주의사항, 온라인 입국카드까지 한 번에 정리."
);

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata({ lang, path: "/visa", title, description });
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <HubPage lang={lang} path="/visa" title={title} subtitle={description} categories={["visa"]} tools={["visa-checker"]} />;
}
