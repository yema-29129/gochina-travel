import type { Guide } from "@/data/types";
import { t2, t4 } from "@/lib/i18n";

const guide: Guide = {
  slug: "airports",
  category: "transport",
  icon: "plane",
  title: t4(
    "Where to Land in China: Top 12 International Airports & Layover Trap Guide",
    "去中国飞哪个机场？中国 12 大入境国际机场进城交通与跨场转机陷阱",
    "中国旅行どの空港に着くべき？主要12国際空港アクセス＆乗継ガイド（2026）",
    "중국 어느 공항으로 입국할까? 12대 국제공항 시내 이동 & 환승 가이드 (2026)"
  ),
  seoTitle: t4(
    "Where to Land in China (2026): Top 12 International Airports, Downtown Transfers & Layover Traps",
    "去中国飞哪个机场最好（2026）：12 大国际机场进城交通、外卡拍闸与双机场转机时间",
    "中国12大国際空港ガイド（2026）：上海浦東・北京・成都の市内アクセスと乗継時間",
    "중국 12대 국제공항 가이드 (2026): 상하이·베이징·청두 시내 이동 및 환승 시간"
  ),
  summary: t4(
    "Deciding where to land in China? Compare China's 12 main arrival airports (Shanghai PVG, Beijing PEK/PKX, Guangzhou CAN, Chengdu TFU, Hong Kong HKG): exact CNY/USD downtown transit, 24/7 foreigner desks & dual-airport layover minimums.",
    "去中国旅游飞哪个机场最方便？全面对比上海浦东 PVG、北京 PEK/PKX、广州 CAN、成都 TFU、香港 HKG 等 12 大入境机场：进城交通票价、24 小时外籍服务台与同城双机场最短转机时间。",
    "初めての中国旅行でどの空港を選ぶべきか徹底比較。上海浦東(PVG)・北京(PEK/PKX)・広州(CAN)・成都(TFU)・香港(HKG)の市内移動料金と24時間案内カウンターを網羅。",
    "중국 여행 입국 공항 선택 가이드: 상하이 푸동(PVG)·베이징(PEK/PKX)·광저우(CAN)·청두(TFU)·홍콩(HKG) 시내 교통비, 외국인 서비스 데스크, 공항 간 최소 환승 시간 총정리."
  ),
  updated: "2026-11-26",
  readMin: 7,
  keyPoints: [
    t2(
      "Tap Foreign Visa/Mastercard at Airport Trains: Shanghai Maglev (¥40 / ~$5.50), Beijing Capital Express (¥25 / ~$3.50) & Daxing Express (¥35 / ~$4.90) accept contactless cards directly at the gate.",
      "机场快轨支持直接拍外卡：上海磁悬浮（¥40 / 约 $5.50）、北京首都机场线（¥25 / 约 $3.50）和大兴机场线（¥35 / 约 $4.90）闸机均可直接拍境外 Visa/Mastercard。"
    ),
    t2(
      "24/7 Foreigner Service Desks: PVG (T1/T2), PEK (T2/T3) and CAN (T2) have One-Stop Visitor Desks right opposite international arrivals to help set up Alipay, SIMs & transit cards.",
      "24 小时外籍一站式服务台：上海浦东（T1/T2）、北京首都（T2/T3）和广州白云（T2）国际到达出口正对面设专属服务台，免费协助绑支付宝、办电话卡和交通卡。"
    ),
    t2(
      "Dual-Airport Layover Traps: Shanghai PVG↔SHA (60 km / 37 mi) needs ≥4.5–5h, Chengdu TFU↔CTU (70 km / 43 mi) needs ≥5–5.5h, and Beijing PKX↔PEK (85 km / 53 mi) needs ≥6h.",
      "警惕同城双机场转机大坑：上海 PVG↔SHA（60 km / 37 英里）至少留 4.5–5 小时，成都 TFU↔CTU（70 km / 43 英里）至少留 5–5.5 小时，北京 PKX↔PEK（85 km / 53 英里）至少留 6 小时。"
    ),
    t2(
      "Hong Kong (HKG) Money-Saving Shortcut: Fly into HKG → take the 30-min airside ferry to Shenzhen Shekou or the 14-min West Kowloon bullet train to Futian — both support 30-day visa-free & 240h transit!",
      "飞香港（HKG）省钱捷径：从香港机场免入境坐 30 分钟快船直达深圳蛇口，或从西九龙坐 14 分钟高铁到深圳福田——两大口岸均支持 30 天免签与 240 小时过境免签！"
    ),
  ],
  sections: [
    {
      id: "top-12-airports",
      heading: t2("Select your arrival airport (all 12 major gateways)", "选择您的入境机场（全部 12 大国际枢纽）"),
      blocks: [
        {
          type: "p",
          text: t2(
            "Follow official Airport Express, Metro, or Taxi/DiDi signs right after customs — never go with anyone soliciting rides inside the arrival hall. Pick your arrival city or search by 3-letter IATA code below:",
            "出海关后务必认准官方机场快轨、地铁或正规出租车/滴滴标识，切勿跟到达厅内主动拉客的人走。在下方点选您的入境城市或输入三字代码查看专属进城卡片："
          ),
        },
        { type: "widget", widget: "airportBentoHub" },
        { type: "widget", widget: "arrivalTransferCard" },
        { type: "ad" },
      ],
    },
    {
      id: "dual-airport-transfer-times",
      heading: t2("The “dual-airport” layover trap: visual time breakdown", "同城双机场转机陷阱：分段耗时可视化"),
      blocks: [
        {
          type: "p",
          text: t2(
            "Self-transferring between two airports in Shanghai, Chengdu, or Beijing is the #1 reason foreign travelers miss connecting flights. Always factor in immigration + baggage claim + cross-city transit + manual foreign passport check-in cutoff (45 min before departure):",
            "在上海、成都或北京跨机场转机是外国游客误机的头号原因。以下时间条已包含入境边检、取行李、跨城交通与外籍人工柜台截载（起飞前 45 分钟）："
          ),
        },
        { type: "widget", widget: "dualAirportTimeBars" },
      ],
    },
  ],
  faq: [
    {
      q: t2("Can I tap my foreign Visa or Mastercard on airport trains in China?", "中国机场快轨能直接拍境外 Visa/Mastercard 卡吗？"),
      a: t2(
        "Yes — Shanghai's Maglev, Beijing Capital Airport Express (PEK), Daxing Airport Express (PKX) and Chengdu Airport Express all accept contactless foreign Visa/Mastercard directly at the turnstiles.",
        "可以——上海磁悬浮、北京首都机场线（PEK）、大兴机场线（PKX）和成都机场快线均支持直接在闸机拍境外 Visa/Mastercard 实体卡进站。"
      ),
    },
    {
      q: t2("How long do I need to transfer between Shanghai Pudong (PVG) and Hongqiao (SHA)?", "上海浦东（PVG）和虹桥（SHA）之间转机要留多久？"),
      a: t2(
        "Leave at least 4.5–5 hours (they are 60 km / 37 miles apart). Under 3.5 hours is a red-zone missed flight risk once you include immigration, baggage, the 40-min Airport Link Line, and counter check-in cutoffs.",
        "至少留 4.5–5 小时（两场相距 60 km / 37 英里）。算上入境边检、取行李、40 分钟市域机场线和人工柜台截载，低于 3.5 小时极易误机。"
      ),
    },
    {
      q: t2("Which Chengdu airport do international flights arrive at?", "成都国际航班降落在哪个机场？"),
      a: t2(
        "All international and HK/Macau/Taiwan flights arrive at Chengdu Tianfu (TFU), 60 km (37 miles) from downtown. Shuangliu (CTU) serves domestic routes only.",
        "所有国际及港澳台航班全部降落在距市区 60 km（37 英里）的成都天府机场（TFU）；双流机场（CTU）仅执飞国内航线。"
      ),
    },
    {
      q: t2("Should I book a pre-arranged airport pickup if I land after 11:00 PM?", "深夜 11 点后落地建议提前订接机吗？"),
      a: t2(
        "Yes — especially at far-out airports like Beijing Daxing (PKX), Shanghai Pudong (PVG), and Chengdu Tianfu (TFU), where metros close around 22:30–23:00 and late-night taxi queues can be long.",
        "非常建议，尤其是大兴（PKX）、浦东（PVG）、天府（TFU）这类远郊机场，22:30–23:00 地铁停运且夜间出租车排队较长。"
      ),
    },
  ],
  related: ["domestic-flights", "metro-didi-maps", "240-hour-transit", "arrival-immigration", "high-speed-trains"],
};

export default guide;
