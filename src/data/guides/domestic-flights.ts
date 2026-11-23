import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "domestic-flights",
  category: "transport",
  icon: "plane",
  title: t2("China Domestic Flights: Power Bank CCC Rule & Budget Airline Traps", "中国国内航班：充电宝 CCC 规定与廉航陷阱"),
  seoTitle: t2(
    "China Domestic Flight Power Bank 3C (CCC) Rule for Foreigners & Baggage Traps (2026)",
    "中国国内航班充电宝 3C（CCC）认证规定与行李陷阱（2026 外国人版）"
  ),
  summary: t2(
    "Power banks without a CCC mark are banned on China domestic flights since June 2025. Check your Wh limit, avoid 0 kg budget fares and check in 2 hours early.",
    "自 2025 年 6 月起，无 CCC 标志的充电宝禁止带上中国国内航班。核对你的 Wh 限额，避开 0 kg 行李的廉航票价，并提前 2 小时值机。"
  ),
  updated: "2026-11-24",
  readMin: 7,
  keyPoints: [
    t2("Since 28 June 2025, power banks without a clear Chinese CCC mark are banned on China domestic flights.", "自 2025 年 6 月 28 日起，没有清晰中国 CCC 标志的充电宝禁止带上中国国内航班。"),
    t2("Overseas Anker/Belkin/Ugreen models with only CE/FCC/UL marks get confiscated on domestic legs. Buy a ¥79–129 CCC power bank at a Xiaomi Store.", "只有 CE/FCC/UL 标志的海外版 Anker/Belkin/Ugreen 充电宝在国内航段会被没收。在小米之家花 79–129 元买一块带 CCC 标志的充电宝。"),
    t2("Wh = mAh × 3.7 V ÷ 1000. Up to 100 Wh is fine; 100–160 Wh needs airline approval; over 160 Wh is banned.", "Wh = mAh × 3.7 V ÷ 1000。100 Wh 以内可以带；100–160 Wh 需航空公司批准；超过 160 Wh 禁止携带。"),
    t2("Cheapest fares on Spring, 9 Air, China United, West Air and Lucky Air include 0 kg checked bags and a tiny 20×30×40 cm cabin bag.", "春秋、九元、中国联合、西部、祥鹏航空的最低价票免费托运额为 0 kg，随身行李仅限 20×30×40 cm。"),
    t2("Foreign passports usually must check in at the counter 2 hours before departure.", "外国护照通常必须提前 2 小时到人工柜台值机。"),
    t2("Prefer Air China (CA), China Eastern (MU), China Southern (CZ) or Hainan Airlines (HU): 20 kg checked bag and a hot meal included.", "优先选国航（CA）、东航（MU）、南航（CZ）或海航（HU）：含 20 kg 免费托运和机上热餐。"),
  ],
  sections: [
    {
      id: "power-bank-ccc",
      heading: t2("Trap 1: the power bank CCC rule", "大坑一：充电宝 CCC 认证规定"),
      blocks: [
        {
          type: "callout",
          tone: "danger",
          title: t2("The rule", "规定内容"),
          text: t2(
            "Since 28 June 2025, the Civil Aviation Administration of China (CAAC) bans power banks on domestic flights if they have no CCC mark (China Compulsory Certification), an unclear CCC mark, or belong to a recalled batch. From March 2026, newly made power banks also carry a CCC traceability QR code.",
            "自 2025 年 6 月 28 日起，中国民航局禁止旅客携带没有 CCC 标志（中国强制性产品认证）、CCC 标志不清晰或属于召回批次的充电宝乘坐国内航班。自 2026 年 3 月起，新出厂的充电宝还增加了 CCC 追溯二维码。"
          ),
        },
        t2b(
          "Why almost every foreign traveler is caught: power banks bought on Amazon US, Best Buy UK or in Australia (even top brands like the overseas versions of Anker, Belkin and Ugreen) carry the US FCC/UL or EU CE mark, but not China's oval CCC mark. Nobody stops you on your international flight into Shanghai Pudong. But a few days later, at security for a domestic leg such as Shanghai → Xi'an or Chengdu → Zhangjiajie, the officer searches the case for the letters CCC, cannot find them, and will not let it on the plane. You can only abandon it in the bin or pay to ship it.",
          "为什么外国游客几乎全部中招：在美国亚马逊、英国百思买或澳洲本地买的充电宝（哪怕是 Anker、Belkin、Ugreen 海外版这样的顶级大牌），外壳上印的是美国 FCC/UL 或欧盟 CE 认证标，没有中国特有的椭圆形 CCC 标。你坐国际航班飞进上海浦东时没人拦。可几天后在上海→西安、成都→张家界等国内航段过安检时，安检员找遍机身看不到 CCC 三个字母，就不允许带上飞机。你只能自弃扔进框里，或花钱寄快递。"
        ),
        {
          type: "table",
          head: [t2("Your trip", "你的行程"), t2("Power bank without CCC (≤100 Wh, clear label)", "无 CCC 充电宝（≤100 Wh，标识清晰）")],
          rows: [
            [t2("International flights only (e.g. New York → Shanghai → Tokyo)", "只坐国际/港澳台航班（如纽约→上海→东京）"), t2("Allowed", "可以携带")],
            [t2("Includes China domestic flights (e.g. Shanghai → Xi'an / Chengdu)", "包含中国国内航班（如上海→西安/成都）"), t2("Confiscated at domestic security", "国内航段安检时会被没收")],
            [t2("High-speed trains and metro only", "只坐高铁和地铁"), t2("Allowed: trains only require a clear label and ≤100 Wh per power bank; no CCC check for now", "可以携带：高铁只要求单块标识清晰且不超过 100 Wh；目前不查 CCC")],
            [t2("Label scratched off / unreadable", "标识磨损/看不清"), t2("Confiscated on ANY flight, domestic or international", "无论国内国际航班都会当场没收")],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: t2("Easy fix", "省心解法"),
          text: t2(
            "Leave your expensive overseas power bank at home. On your first day in China, if you have a domestic flight, buy a new CCC-marked Xiaomi fast-charging power bank at any Xiaomi Store (小米之家) or JD convenience store for ¥79–129 (about US$12–18). It will pass every domestic flight.",
            "把昂贵的海外充电宝留在家里。落地中国第一天，如果要坐国内航班，就在任意小米之家或京东便利店花 79–129 元（约 12–18 美元）买一块全新带 CCC 标志的小米快充充电宝，国内航班随便飞。"
          ),
        },
      ],
    },
    {
      id: "watt-hours",
      heading: t2("How to calculate watt-hours (Wh)", "如何计算额定能量（Wh）"),
      blocks: [
        t2b(
          "Formula: Wh = mAh × V ÷ 1000. Use the battery cell voltage, normally 3.7 V, not the 5 V USB output voltage (a common mistake). Example: 20,000 mAh × 3.7 V ÷ 1000 = 74 Wh.",
          "公式：Wh = mAh × V ÷ 1000。使用电芯电压（通常为 3.7 V），而不是 USB 输出口的 5 V（常见错误）。例：20,000 mAh × 3.7 V ÷ 1000 = 74 Wh。"
        ),
        {
          type: "table",
          head: [t2("Capacity", "容量"), t2("Rule", "规定")],
          rows: [
            [t2("Up to 100 Wh", "不超过 100 Wh"), t2("Allowed in cabin (with CCC for domestic flights)", "可随身携带（国内航班须有 CCC）")],
            [t2("100–160 Wh", "100–160 Wh"), t2("Needs written airline approval at the counter, max 2 units. Very troublesome; not recommended.", "需航空公司柜台书面批准，限带 2 块。极其麻烦，不建议携带。")],
            [t2("Over 160 Wh", "超过 160 Wh"), t2("Banned", "禁止携带")],
          ],
        },
        t2b(
          "Power banks are never allowed in checked baggage; always carry them in the cabin.",
          "充电宝一律不得托运，必须随身携带。"
        ),
        { type: "tool", tool: "powerbank-airport" },
        { type: "ad" },
      ],
    },
    {
      id: "budget-airlines",
      heading: t2("Trap 2: budget airline baggage and check-in", "大坑二：廉航行李额与值机限制"),
      blocks: [
        t2b(
          "Comparison sites show incredibly cheap fares on Spring Airlines (9C), 9 Air, China United Airlines, West Air and Lucky Air. Many travelers simply buy the lowest fare.",
          "比价网站上春秋航空（9C）、九元航空、中国联合航空、西部航空和祥鹏航空的票价便宜得难以置信。很多游客直接买了最低价舱位。"
        ),
        {
          type: "list",
          items: [
            t2("The cheapest fares on these airlines include 0 kg free checked baggage.", "这几家航司最低特价票的免费托运行李额为 0 kg。"),
            t2("The cabin bag limit is a tiny 20 × 30 × 40 cm, too small for a standard 20-inch carry-on.", "随身行李限制在极小的 20 × 30 × 40 cm，装不下标准 20 寸登机箱。"),
            t2("Buying 20 kg of baggage at the check-in counter can cost more than the ticket itself.", "在值机柜台现场补买 20 kg 行李额可能比机票本身还贵。"),
            t2("Foreign passports usually cannot complete mobile self check-in for domestic flights. Go to the staffed counter at least 2 hours before departure to have your passport and entry stamp checked and get a paper boarding pass.", "外国护照通常无法在手机上完成国内航班自助值机。至少提前 2 小时到人工柜台核验护照和入境章，领取纸质登机牌。"),
          ],
        },
        {
          type: "callout",
          tone: "tip",
          text: t2(
            "Prefer the big four: Air China (CA), China Eastern (MU), China Southern (CZ) and Hainan Airlines (HU). Their economy fares include a 20 kg free checked bag and a hot meal on board.",
            "优先选四大航：国航（CA）、东航（MU）、南航（CZ）和海航（HU）。它们的经济舱含 20 kg 免费托运行李额和机上热餐。"
          ),
        },
      ],
    },
  ],
  faq: [
    {
      q: t2("Can I bring my power bank on a domestic flight in China?", "在中国坐国内航班能带充电宝吗？"),
      a: t2("Only if it has a clear Chinese CCC mark, is not from a recalled batch and is 100 Wh or less (100–160 Wh needs airline approval). Overseas models with only CE/FCC/UL marks are confiscated.", "只有带清晰中国 CCC 标志、不属于召回批次且不超过 100 Wh 的才能带（100–160 Wh 需航空公司批准）。只有 CE/FCC/UL 标志的海外版会被没收。"),
    },
    {
      q: t2("Does the CCC rule apply to international flights?", "CCC 规定适用于国际航班吗？"),
      a: t2("The CCC check targets domestic flights. On international flights a clearly labeled power bank of 100 Wh or less is fine, but an unreadable label is confiscated on any flight.", "CCC 检查针对的是国内航班。国际航班上标识清晰、不超过 100 Wh 的充电宝可以携带，但标识看不清的在任何航班都会被没收。"),
    },
    {
      q: t2("Can I take a non-CCC power bank on a high-speed train?", "无 CCC 充电宝能带上高铁吗？"),
      a: t2("Yes. Trains currently only require a clear label and 100 Wh or less per power bank.", "能。高铁目前只要求单块标识清晰且不超过 100 Wh。"),
    },
    {
      q: t2("Where can I buy a CCC power bank in China?", "在中国哪里能买到 CCC 充电宝？"),
      a: t2("Any Xiaomi Store (小米之家) or JD convenience store, for about ¥79–129 (US$12–18).", "任意小米之家或京东便利店，约 79–129 元（12–18 美元）。"),
    },
    {
      q: t2("Can foreigners check in online for Chinese domestic flights?", "外国人能在网上办理中国国内航班值机吗？"),
      a: t2("Usually not. Plan to check in at the counter with your passport at least 2 hours before departure.", "通常不能。请计划至少提前 2 小时持护照到柜台值机。"),
    },
  ],
  related: ["airports", "high-speed-trains", "safety-health", "essential-apps", "metro-didi-maps"],
};

function t2b(en: string, zh: string) {
  return { type: "p", text: t2(en, zh) } as const;
}

export default guide;
