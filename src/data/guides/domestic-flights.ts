import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "domestic-flights",
  category: "transport",
  icon: "plane",
  title: t2('Flying Domestic in China (2026): The "CCC" Power Bank Ban & Budget Traps', "中国国内航班：充电宝 CCC 规定与廉航陷阱"),
  seoTitle: t2(
    "China Domestic Flight Power Bank 3C (CCC) Rule & Budget Airline Baggage Traps (2026)",
    "中国国内航班充电宝 3C（CCC）认证规定与廉航行李陷阱（2026 外国人版）"
  ),
  summary: t2(
    "Your Anker power bank from Amazon US can fly INTO China, but domestic security WILL confiscate it without a Chinese CCC oval mark. Check your battery & avoid 0 kg budget fares.",
    "在美国/海外买的 Anker 充电宝能飞进中国，但国内航段没有椭圆 CCC 标会被直接没收！3 秒自检充电宝并避开 0 kg 免费托运的廉航陷阱。"
  ),
  updated: "2026-11-24",
  readMin: 6,
  keyPoints: [
    t2(
      "Domestic CCC Ban (Since June 2025): Power banks without a crisp Chinese oval CCC mark are confiscated at China domestic flight security — even if ≤ 100 Wh.",
      "国内航段严查 CCC 标（2025 年 6 月起）：没有清晰中国椭圆形 CCC 标志的充电宝一律禁止带上中国国内航班，即使容量 ≤ 100 Wh 也会被没收。"
    ),
    t2(
      "Easy $14 Fix: Leave expensive overseas Anker/Belkin (CE/FCC/UL only) banks at home, or buy a CCC Xiaomi fast-charging bank in China for ¥79–¥129 (~$11–$18 USD).",
      "14 美元省心解法：别带只有 CE/FCC/UL 标的昂贵海外充电宝飞国内段；落地任意小米之家花 ¥79–¥129（约 $11–$18 美元）买一块带 CCC 标的小米充电宝即可。"
    ),
    t2(
      'Budget Airline Trap: Cheapest fares on Spring (9C), 9 Air & West Air include 0 kg (0 lbs) checked bags and a tiny 20×30×40 cm (7.8"×11.8"×15.7") carry-on limit — standard 22" rollers WILL be charged at the gate!',
      '廉航行李大坑：春秋 (9C)、九元、西部等最低价票免费托运为 0 kg (0 磅)，手提仅限 20×30×40 cm（7.8"×11.8"×15.7" 英寸，仅小双肩包大小），标准 20–22 寸登机箱必被现场高价罚托运！'
    ),
    t2(
      "Prefer the Big Four: Air China (CA), China Eastern (MU), China Southern (CZ) & Hainan (HU) include 20 kg (44 lbs) checked bags and a hot meal. Arrive 2 hours early for manual foreign passport check-in.",
      "优先选四大航：国航 (CA)、东航 (MU)、南航 (CZ)、海航 (HU) 含 20 kg (44 磅) 免费托运与热餐。外籍护照需提前 2 小时到人工柜台值机。"
    ),
  ],
  sections: [
    {
      id: "power-bank-ccc",
      heading: t2("Trap 1: the “CCC” power bank ban (visual check)", "大坑一：充电宝 CCC 认证标志一眼识别与自检"),
      blocks: [
        { type: "widget", widget: "cccVisualSpotter" },
        { type: "widget", widget: "inlinePowerBankChecker" },
        {
          type: "table",
          head: [t2("Your Route", "你的行程"), t2("Non-CCC Power Bank (≤100 Wh, Clear Print)", "无 CCC 充电宝（≤100 Wh，字迹清晰）")],
          rows: [
            [t2("Int'l Arrival / Departure (e.g. NYC → PVG → NRT)", "国际/港澳台航班（如纽约 → 上海 → 东京）"), t2("✅ Allowed (≤100 Wh)", "✅ 准予携带（≤100 Wh）")],
            [t2("High-Speed Rail & City Metro", "高铁与城市地铁"), t2("✅ Allowed (≤100 Wh, no CCC check)", "✅ 准予携带（≤100 Wh，目前不查 CCC）")],
            [t2("China Domestic Flights (e.g. PVG → XIY / CTU)", "中国国内航班（如上海 → 西安 / 成都）"), t2("❌ STRICTLY BANNED without oval CCC", "❌ 严格没收（必须有清晰椭圆 CCC 标）")],
            [t2("Scratched / Unreadable Capacity Print", "标识磨损 / 看不清容量"), t2("❌ Confiscated on EVERY flight", "❌ 国内国际所有航班一律当场没收")],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: t2("Formula & Buy-Local Fix", "容量公式与落地购买建议"),
          text: t2(
            "Formula: Wh = mAh × 3.7 V ÷ 1000 (example: 20,000 mAh = 74 Wh). Never put power banks in checked bags. Need a compliant one? Walk into any Xiaomi Store (小米之家) or JD convenience store and buy a CCC fast-charging power bank for ¥79–¥129 (~$11–$18 USD).",
            "计算公式：Wh = mAh × 3.7 V ÷ 1000（例：20,000 mAh = 74 Wh），一律禁止托运。如需在国内飞，落地任意小米之家或京东便利店花 ¥79–¥129（约 $11–$18 美元）即可买到全新带 CCC 标的快充充电宝。"
          ),
        },
        { type: "ad" },
      ],
    },
    {
      id: "budget-airlines",
      heading: t2("Trap 2: budget airline baggage & foreign passport check-in", "大坑二：廉航行李尺寸对比与外籍护照值机"),
      blocks: [
        { type: "widget", widget: "budgetVsFullServiceCards" },
        {
          type: "callout",
          tone: "warn",
          title: t2("Foreign Passport Rule: Arrive 2 Hours Early", "外籍护照值机提醒：务必提前 2 小时到机场"),
          text: t2(
            "Mobile online check-in and self-service kiosks rarely work for foreign passports on Chinese domestic flights. Head straight to the staffed airline counter at least 2 hours before departure to verify your passport & entry stamp and pick up a paper boarding pass.",
            "外籍护照在中国国内航班通常无法用手机或自助机值机。请至少提前 2 小时前往航司人工柜台核验护照与入境章，领取纸质登机牌。"
          ),
        },
      ],
    },
  ],
  faq: [
    {
      q: t2("Can I bring my Amazon Anker power bank on a domestic flight in China?", "在美国亚马逊买的 Anker 充电宝能坐中国国内航班吗？"),
      a: t2(
        "No, unless it has a clear Chinese oval CCC mark printed on it (most overseas models only have CE/FCC/UL). It is fine on international arrivals and high-speed trains, but confiscated on domestic flights.",
        "除非外壳印有清晰的中国椭圆形 CCC 标志（绝大多数海外版只有 CE/FCC/UL）。国际航班和高铁可以带，但国内航班安检会被没收。"
      ),
    },
    {
      q: t2("Where can I buy a CCC power bank in China and how much is it?", "在中国哪里买 CCC 充电宝？多少钱？"),
      a: t2(
        "Any Xiaomi Store (小米之家) in major malls or JD convenience stores, for ¥79–¥129 (~$11–$18 USD).",
        "各大商场里的小米之家或京东便利店均有售，价格约 ¥79–¥129（约 $11–$18 美元）。"
      ),
    },
    {
      q: t2("Can foreigners check in online for Chinese domestic flights?", "外国人能在网上办理中国国内航班值机吗？"),
      a: t2(
        "Usually not. Plan to arrive 2 hours early and check in at the staffed counter with your passport.",
        "通常不行。请计划至少提前 2 小时到人工柜台持护照办理值机。"
      ),
    },
  ],
  related: ["airports", "high-speed-trains", "safety-health", "essential-apps", "metro-didi-maps"],
};

export default guide;
