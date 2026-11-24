import type { L } from "@/lib/i18n";
import type { AffiliateId } from "@/data/types";

/**
 * Affiliate links. Replace the "url" values with your own tracking links after you are approved:
 * - Trip.com Affiliate: https://www.trip.com/partners/
 * - Airalo / Holafly / Nomad eSIM partner programs
 * - Wise Partners: https://wise.com/partnerships/
 * - SafetyWing / World Nomads affiliate programs
 * Links are rendered with rel="sponsored nofollow noopener" (required by Google).
 */
export const AFFILIATES: Record<AffiliateId, { url: string; title: L; text: L; cta: L }> = {
  tripTrains: {
    url: "https://www.trip.com/trains/china/",
    title: { en: "Book China high-speed train tickets in English", zh: "用英文预订中国高铁票" },
    text: { en: "Trip.com accepts foreign cards, shows English station names and queues tickets for you when they go on sale.", zh: "Trip.com 支持外国银行卡，显示英文站名，并会在开售时为你自动排队抢票。" },
    cta: { en: "Search trains on Trip.com", zh: "在 Trip.com 搜索火车票" },
  },
  tripHotels: {
    url: "https://www.trip.com/hotels/",
    title: { en: "Foreigner-friendly hotels", zh: "接待外国人的酒店" },
    text: { en: "Filter for hotels that accept foreign guests. Booking confirmations include the hotel's Chinese address for taxis.", zh: "筛选可接待外国客人的酒店。预订确认单包含酒店中文地址，方便打车。" },
    cta: { en: "Find hotels", zh: "查找酒店" },
  },
  tripTours: {
    url: "https://www.trip.com/things-to-do/",
    title: { en: "Skip the ticket rush: guided tours with guaranteed entry", zh: "不用抢票：含保底门票的导览团" },
    text: { en: "Tours for the Forbidden City, Terracotta Army and more include tickets — no 8 PM ticket race.", zh: "故宫、兵马俑等景点的导览团已包含门票——无需晚上 8 点抢票。" },
    cta: { en: "See tours with tickets", zh: "查看含门票的导览团" },
  },
  tripFlights: {
    url: "https://www.trip.com/flights/",
    title: { en: "Need an onward ticket?", zh: "需要一张离境票？" },
    text: { en: "For 240-hour transit you need a confirmed ticket to a third country or region, e.g. Hong Kong, Seoul or Tokyo.", zh: "240 小时过境免签需要一张前往第三国或地区（如香港、首尔、东京）的确认机票或车票。" },
    cta: { en: "Search onward flights & trains", zh: "搜索离境机票和火车票" },
  },
  airportTransfer: {
    url: "https://www.trip.com/airport-transfers/",
    title: { en: "Late arrival? Book an airport pickup", zh: "深夜抵达？预订接机" },
    text: { en: "English-speaking drivers wait with a name sign — no metro, no taxi queue after midnight.", zh: "会说英语的司机举牌等候——午夜后不用坐地铁、不用排队等出租车。" },
    cta: { en: "Book airport pickup", zh: "预订接机" },
  },
  esim: {
    url: "https://www.airalo.com/china-esim",
    title: { en: "China eSIM — Google, WhatsApp & Instagram work without a VPN", zh: "中国 eSIM——无需 VPN 即可使用 Google、WhatsApp 和 Instagram" },
    text: { en: "Roaming eSIMs route through Hong Kong or Singapore. Install at home, switch on when you land.", zh: "漫游 eSIM 通过香港或新加坡路由。在家安装，落地即开。" },
    cta: { en: "Get a China eSIM", zh: "获取中国 eSIM" },
  },
  wise: {
    url: "https://wise.com/invite/ilpc/fangl288",
    title: { en: "Avoid your bank's 3% foreign transaction fee", zh: "避免银行 3% 的境外交易手续费" },
    text: { en: "A zero-FX-fee card such as Wise or Revolut, linked to Alipay, saves 3% on every payment.", zh: "将 Wise 或 Revolut 等零货币转换费的卡绑定支付宝，每笔付款可省 3%。" },
    cta: { en: "Get a Wise card", zh: "申请 Wise 卡" },
  },
  insurance: {
    url: "https://safetywing.com/",
    title: { en: "Travel medical insurance", zh: "旅行医疗保险" },
    text: { en: "International clinics in China can cost hundreds of dollars per visit. Make sure you are covered.", zh: "中国的国际诊所每次就诊可能花费数百美元。请确保你有保险。" },
    cta: { en: "Compare travel insurance", zh: "比较旅行保险" },
  },
  survivalPack: {
    url: "#",
    title: { en: "China Offline Survival Pack (PDF)", zh: "中国离线生存手册（PDF）" },
    text: { en: "Step-by-step screenshots for Alipay, 12306 and maps, plus printable wallet show-cards.", zh: "支付宝、12306 和地图的分步截图，以及可打印的钱包闪卡。" },
    cta: { en: "Get the pack", zh: "获取手册" },
  },
};
