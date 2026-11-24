"use client";

import { useState } from "react";
import { CheckCircle2, Clock, CreditCard, ExternalLink, MapPin, Plane, Search, Sparkles } from "lucide-react";
import { Lang, L, t2, tx } from "@/lib/i18n";
import { AFFILIATES } from "@/lib/affiliates";

interface AirportItem {
  id: string;
  code: string;
  tab: L;
  name: L;
  badge: L;
  distance: L;
  time: L;
  tapCard: boolean;
  serviceDesk: L;
  options: { title: L; time: L; price: L; note: L }[];
  trap?: L;
}

const AIRPORTS: AirportItem[] = [
  {
    id: "pvg",
    code: "PVG",
    tab: t2("Shanghai (PVG)", "上海浦东 PVG"),
    name: t2("Shanghai Pudong Int'l Airport (PVG)", "上海浦东国际机场（PVG）"),
    badge: t2("Primary Int'l Hub", "主力国际枢纽"),
    distance: t2("45 km (28 mi) to Bund", "距外滩 45 km (28 英里)"),
    time: t2("45–60 min", "45–60 分钟"),
    tapCard: true,
    serviceDesk: t2(
      "24/7 One-Stop Foreigner Service Center right opposite T1 & T2 International Arrival exits — free help linking Alipay, China Unicom/Mobile SIMs & transit cards.",
      "T1/T2 国际到达出口正对面设 24 小时外籍人员一站式服务中心（免费帮绑支付宝、办电话卡、换零钱、领交通卡）。",
    ),
    options: [
      {
        title: t2("⚡ Maglev + Metro Line 2", "⚡ 磁悬浮 + 地铁 2 号线"),
        time: t2("~45 min total", "全程约 45 分钟"),
        price: t2("¥40 (~$5.50) w/ flight ticket", "凭机票 ¥40 (约 $5.50)"),
        note: t2("Tap Visa/MC directly at gate!", "闸机直接支持拍 Visa/MC！"),
      },
      {
        title: t2("🚆 Airport Link Line", "🚆 市域机场联络线"),
        time: t2("40 min flat", "40 分钟直达"),
        price: t2("¥26 (~$3.60)", "¥26 (约 $3.60)"),
        note: t2("Best when transferring to Hongqiao (SHA)", "跨场去虹桥枢纽首选"),
      },
      {
        title: t2("🚕 Official Taxi / DiDi", "🚕 正规出租车 / 滴滴"),
        time: t2("50–65 min", "50–65 分钟"),
        price: t2("¥160–200 ($22–$28) · Night ~$32", "白天 ¥160–200 ($22–$28)"),
        note: t2("Use Alipay DiDi or official taxi stand", "建议用支付宝滴滴或官方排队区"),
      },
    ],
    trap: t2(
      "Dual-Airport Trap: PVG and Hongqiao (SHA) are 60 km (37 mi) apart. Always use the 40-min Airport Link Line instead of the 90-min subway.",
      "双机场大坑：浦东 (PVG) 与虹桥 (SHA) 相距 60 km (37 英里)，换乘请坐 40 分钟市域机场线，别坐 90 分钟的普通地铁。",
    ),
  },
  {
    id: "sha",
    code: "SHA",
    tab: t2("Shanghai (SHA)", "上海虹桥 SHA"),
    name: t2("Shanghai Hongqiao Int'l Airport (SHA)", "上海虹桥国际机场（SHA）"),
    badge: t2("Downtown & Regional", "市区近郊 / 日韩港澳"),
    distance: t2("13 km (8 mi) to Jing'an", "距静安寺 13 km (8 英里)"),
    time: t2("25 min", "25 分钟"),
    tapCard: false,
    serviceDesk: t2(
      "Mainly serves Tokyo Haneda, Seoul Gimpo, HK/Macau/Taiwan and domestic flights; connects directly to Hongqiao High-Speed Railway Station at T2.",
      "主要执飞日韩（羽田/金浦）、港澳台及国内干线；T2 航站楼地下直连虹桥高铁站。",
    ),
    options: [
      {
        title: t2("🚇 Metro Line 2 / Line 10", "🚇 地铁 2 号线 / 10 号线"),
        time: t2("20–30 min", "20–30 分钟"),
        price: t2("¥4–5 (~$0.60)", "¥4–5 (约 $0.60)"),
        note: t2("Direct to Jing'an, Xintiandi & Nanjing Rd", "直达静安寺、新天地、南京东路"),
      },
      {
        title: t2("🚕 Official Taxi / DiDi", "🚕 出租车 / 滴滴"),
        time: t2("25–35 min", "25–35 分钟"),
        price: t2("¥45–70 (~$6–$10)", "¥45–70 (约 $6–$10)"),
        note: t2("Super affordable into central Shanghai", "进市区非常便宜"),
      },
      {
        title: t2("🚄 Hongqiao HSR Station", "🚄 虹桥高铁站"),
        time: t2("5 min walk from T2", "T2 步行 5 分钟"),
        price: t2("Trains to Suzhou/Hangzhou", "直达苏州/杭州高铁"),
        note: t2("T1 & T2 are across the runway (1 stop on Line 10)", "T1 与 T2 隔跑道，地铁 10 号线 1 站直达"),
      },
    ],
  },
  {
    id: "pek",
    code: "PEK",
    tab: t2("Beijing (PEK)", "北京首都 PEK"),
    name: t2("Beijing Capital Int'l Airport (PEK)", "北京首都国际机场（PEK）"),
    badge: t2("Main Beijing Hub", "北京老牌主力枢纽"),
    distance: t2("28 km (17 mi) to Downtown", "距市中心 28 km (17 英里)"),
    time: t2("35–50 min", "35–50 分钟"),
    tapCard: true,
    serviceDesk: t2(
      "T3 & T2 International Arrival exits feature “Beijing Service” desks for SIM cards, foreign-card ATM help & BEIJING PASS transit cards.",
      "T3/T2 国际到达出口设「北京服务 Beijing Service」柜台，一站式办电话卡、外卡取现指引与 BEIJING PASS。",
    ),
    options: [
      {
        title: t2("🚆 Capital Airport Express", "🚆 首都机场快轨"),
        time: t2("20 min to Dongzhimen", "20 分钟直达东直门"),
        price: t2("¥25 (~$3.50)", "¥25 (约 $3.50)"),
        note: t2("Tap foreign Visa/MC directly at gate!", "闸机直接支持拍境外 Visa/MC！"),
      },
      {
        title: t2("🚕 Official Taxi / DiDi", "🚕 出租车 / 滴滴"),
        time: t2("40–60 min", "40–60 分钟"),
        price: t2("¥100–130 (~$14–$18)", "¥100–130 (约 $14–$18)"),
        note: t2("Inside 2nd Ring Rd (Forbidden City / Sanlitun)", "进二环/王府井/三里屯价格"),
      },
      {
        title: t2("🚐 Airport Pickup", "🚐 预约英文接机"),
        time: t2("45 min door-to-door", "45 分钟门到门"),
        price: t2("~$28–$38 USD", "约 $28–$38 美元"),
        note: t2("Best after 22:30 or with big luggage", "晚 10:30 后落地或大行李首选"),
      },
    ],
  },
  {
    id: "pkx",
    code: "PKX",
    tab: t2("Beijing (PKX)", "北京大兴 PKX"),
    name: t2("Beijing Daxing Int'l Airport (PKX)", "北京大兴国际机场（PKX）"),
    badge: t2("Modern Mega-Hub", "海星超级新机场"),
    distance: t2("50 km (31 mi) South", "距市中心 50 km (31 英里)"),
    time: t2("45–65 min", "45–65 分钟"),
    tapCard: true,
    serviceDesk: t2(
      "Ultra-modern starfish terminal with Beijing Service visitor counter right outside international arrivals. Metro stops ~23:00.",
      "海星造型超级航站楼，国际到达口设北京服务柜台；注意机场线地铁约 23:00 停运。",
    ),
    options: [
      {
        title: t2("🚆 Daxing Airport Express", "🚆 大兴机场线地铁"),
        time: t2("19 min to Caoqiao", "19 分钟到草桥"),
        price: t2("¥35 (~$4.90)", "¥35 (约 $4.90)"),
        note: t2("Tap foreign Visa/MC! Transfer to Line 19", "支持拍外卡！换乘 19 号线进城"),
      },
      {
        title: t2("🚄 Beijing–Xiong'an HSR", "🚄 京雄城际高铁"),
        time: t2("28 min to Beijing West", "28 分钟到北京西站"),
        price: t2("¥30 (~$4.20)", "¥30 (约 $4.20)"),
        note: t2("Direct beneath the terminal", "航站楼地下直坐高铁"),
      },
      {
        title: t2("🚕 Taxi / Pre-Booked Pickup", "🚕 打车 / 预约接机"),
        time: t2("55–75 min", "55–75 分钟"),
        price: t2("¥160–220 (~$22–$31)", "¥160–220 (约 $22–$31)"),
        note: t2("Pre-book pickup if landing after 23:00", "23:00 后落地强烈建议预订接机"),
      },
    ],
  },
  {
    id: "tfu",
    code: "TFU",
    tab: t2("Chengdu (TFU)", "成都天府 TFU"),
    name: t2("Chengdu Tianfu Int'l Airport (TFU)", "成都天府国际机场（TFU）"),
    badge: t2("All Int'l Flights", "成都全部国际航班"),
    distance: t2("60 km (37 mi) Southeast", "远达 60 km (37 英里)"),
    time: t2("50–70 min", "50–70 分钟"),
    tapCard: true,
    serviceDesk: t2(
      "ALL international & HK/Macau/Taiwan flights land at faraway TFU — NOT downtown Shuangliu (CTU). Foreigner payment/SIM desk at T1 arrivals.",
      "成都所有国际及港澳台航班均降落在远郊天府机场 (TFU)，而非市区双流机场 (CTU)！T1 国际到达口设外籍服务台。",
    ),
    options: [
      {
        title: t2("🚆 Metro Line 18 Express", "🚆 地铁 18 号线直快车"),
        time: t2("35–40 min to South Stn", "35–40 分钟到火车南站"),
        price: t2("¥10 (~$1.40)", "¥10 (约 $1.40)"),
        note: t2("Watch screen for Express (直快车) trains!", "看准站台屏幕选“直快车”！"),
      },
      {
        title: t2("🚄 Underground HSR Train", "🚄 航站楼地下高铁"),
        time: t2("26 min to Chengdu East", "26 分钟到成都东站"),
        price: t2("¥24 (~$3.30)", "¥24 (约 $3.30)"),
        note: t2("Fastest rail link to city east", "直达成都东站高铁枢纽"),
      },
      {
        title: t2("🚕 Taxi / DiDi to Chunxi Rd", "🚕 打车/滴滴到春熙路"),
        time: t2("60–75 min", "60–75 分钟"),
        price: t2("¥150–200 (~$21–$28)", "¥150–200 (约 $21–$28)"),
        note: t2("Includes highway tolls", "含高速过路费"),
      },
    ],
  },
  {
    id: "can",
    code: "CAN",
    tab: t2("Guangzhou (CAN)", "广州白云 CAN"),
    name: t2("Guangzhou Baiyun Int'l Airport (CAN)", "广州白云国际机场（CAN）"),
    badge: t2("South China Hub", "华南国际大枢纽"),
    distance: t2("32 km (20 mi) North", "距市区 32 km (20 英里)"),
    time: t2("45 min", "45 分钟"),
    tapCard: false,
    serviceDesk: t2(
      "T2 International Arrival exit has a dedicated Inbound Payment & Telecom Service Desk for Alipay & SIM setup.",
      "T2 国际到达出口设「入境支付及通信服务台」，协助绑支付宝与办卡。",
    ),
    options: [
      {
        title: t2("🚇 Metro Line 3 North", "🚇 地铁 3 号线北延段"),
        time: t2("45 min to Zhujiang New Town", "45 分钟到珠江新城"),
        price: t2("¥7–8 (~$1.00)", "¥7–8 (约 $1.00)"),
        note: t2("Packed at rush hour — avoid w/ 2 big bags", "早晚高峰极挤，大行李慎坐"),
      },
      {
        title: t2("🚕 6-Seat DiDi / Taxi", "🚕 滴滴六座车 / 出租车"),
        time: t2("45–60 min", "45–60 分钟"),
        price: t2("¥110–140 (~$15–$20)", "¥110–140 (约 $15–$20)"),
        note: t2("Best option with suitcases during rush hour", "带大箱子高峰期强烈推荐"),
      },
      {
        title: t2("🚐 Airport Pickup", "🚐 预订接机"),
        time: t2("45 min door-to-door", "45 分钟门到门"),
        price: t2("~$26–$35 USD", "约 $26–$35 美元"),
        note: t2("Fixed price w/ flight tracking", "一口价含航班追踪"),
      },
    ],
  },
  {
    id: "szx",
    code: "SZX",
    tab: t2("Shenzhen / HKG", "深圳 SZX / 香港"),
    name: t2("Shenzhen Bao'an (SZX) & Hong Kong (HKG) Trick", "深圳宝安（SZX）与香港（HKG）省钱中转"),
    badge: t2("Greater Bay Gateway", "大湾区门户"),
    distance: t2("32 km (20 mi) to Futian", "距福田 32 km (20 英里)"),
    time: t2("30–35 min", "30–35 分钟"),
    tapCard: false,
    serviceDesk: t2(
      "Pro Money-Saving Trick: Fly into Hong Kong (HKG) → take the 30-min airside ferry directly to Shenzhen Shekou (no HK entry needed) OR ride the 14-min West Kowloon bullet train to Futian. Both ports support 30-day visa-free & 240h transit!",
      "省钱神操作：飞香港机场 (HKG) → 免入境香港直接坐 30 分钟快船到深圳蛇口，或从西九龙坐 14 分钟高铁到福田——两大口岸均支持 30 天免签与 240 小时过境免签！",
    ),
    options: [
      {
        title: t2("🚇 Metro Line 11 (Business Car)", "🚇 地铁 11 号线（含商务车厢）"),
        time: t2("30 min to Nanshan/Futian", "30 分钟到南山/福田"),
        price: t2("¥7–21 (~$1–$3)", "¥7–21 (约 $1–$3)"),
        note: t2("Spacious Business Class seats available!", "宽敞商务车厢，行李超友好"),
      },
      {
        title: t2("⛴️ HKG Airside Ferry", "⛴️ 香港机场海天快船"),
        time: t2("30 min to Shekou Port", "30 分钟直达蛇口邮轮母港"),
        price: t2("~HK$260 (~$33 USD)", "约 HK$260 (约 $33 美元)"),
        note: t2("Baggage transferred directly from HKG!", "免提行李、免入境香港"),
      },
      {
        title: t2("🚄 West Kowloon → Futian", "🚄 西九龙 → 深圳福田高铁"),
        time: t2("14 min flat", "仅 14 分钟"),
        price: t2("¥70 (~$10 USD)", "¥70 (约 $10 美元)"),
        note: t2("One-stop co-located immigration", "一地两检通关超快"),
      },
    ],
  },
  {
    id: "xiy",
    code: "XIY",
    tab: t2("Xi'an (XIY)", "西安咸阳 XIY"),
    name: t2("Xi'an Xianyang Int'l Airport (XIY)", "西安咸阳国际机场（XIY）"),
    badge: t2("Terracotta Gateway", "兵马俑门户"),
    distance: t2("38 km (24 mi) to City Wall", "距城墙 38 km (24 英里)"),
    time: t2("50 min", "50 分钟"),
    tapCard: false,
    serviceDesk: t2(
      "Brand-new Terminal 5 upgrades international arrivals and even features a real antiquities museum built inside the terminal!",
      "全新 T5 航站楼国际体验大幅升级，楼内甚至建了一座真文物博物馆！",
    ),
    options: [
      {
        title: t2("🚇 Metro Line 14 → Line 2/4", "🚇 地铁 14 号线转 2/4 号线"),
        time: t2("50–60 min to Bell Tower", "50–60 分钟到钟楼/大雁塔"),
        price: t2("¥8 (~$1.10)", "¥8 (约 $1.10)"),
        note: t2("Avoids City Wall rush-hour traffic", "避开城墙周边高峰堵车"),
      },
      {
        title: t2("🚕 Taxi / DiDi", "🚕 出租车 / 滴滴"),
        time: t2("50–70 min", "50–70 分钟"),
        price: t2("¥100–130 (~$14–$18)", "¥100–130 (约 $14–$18)"),
        note: t2("Allow extra time near South Gate at rush hour", "南门附近早晚高峰易堵"),
      },
      {
        title: t2("🚐 Airport Pickup", "🚐 预订接机"),
        time: t2("50 min door-to-door", "50 分钟门到门"),
        price: t2("~$25–$35 USD", "约 $25–$35 美元"),
        note: t2("Great for late arrivals", "晚班机省心首选"),
      },
    ],
  },
  {
    id: "ckg",
    code: "CKG",
    tab: t2("Chongqing (CKG)", "重庆江北 CKG"),
    name: t2("Chongqing Jiangbei Int'l Airport (CKG)", "重庆江北国际机场（CKG）"),
    badge: t2("Cyberpunk City Hub", "8D 魔幻山城"),
    distance: t2("23 km (14 mi) to Jiefangbei", "距解放碑 23 km (14 英里)"),
    time: t2("35–45 min", "35–45 分钟"),
    tapCard: false,
    serviceDesk: t2(
      "Terminal Note: T2 and T3A/T3B are not connected by walkway — double-check your terminal before pinning a DiDi pickup.",
      "航站楼提醒：T2 与 T3A/T3B 步行不相连，叫滴滴定位时务必核对自己在 T3 还是 T2。",
    ),
    options: [
      {
        title: t2("🚆 CRT Line 10 Express", "🚆 轨道交通 10 号线快车"),
        time: t2("35–45 min to Jiefangbei", "35–45 分钟进解放碑/洪崖洞"),
        price: t2("¥6 (~$0.85)", "¥6 (约 $0.85)"),
        note: t2("Transfer to Line 6 or Line 1", "换乘 6 号线或 1 号线"),
      },
      {
        title: t2("🚕 Taxi / DiDi", "🚕 出租车 / 滴滴"),
        time: t2("30–45 min", "30–45 分钟"),
        price: t2("¥55–80 (~$8–$11)", "¥55–80 (约 $8–$11)"),
        note: t2("Very budget-friendly into Yuzhong", "进渝中半岛性价比极高"),
      },
      {
        title: t2("🚐 Airport Pickup", "🚐 预订接机"),
        time: t2("35 min door-to-door", "35 分钟门到门"),
        price: t2("~$22–$30 USD", "约 $22–$30 美元"),
        note: t2("Easy drop-off on Chongqing's hilly roads", "重庆坡路多，门到门最轻松"),
      },
    ],
  },
  {
    id: "hgh",
    code: "HGH",
    tab: t2("Hangzhou (HGH)", "杭州萧山 HGH"),
    name: t2("Hangzhou Xiaoshan Int'l Airport (HGH)", "杭州萧山国际机场（HGH）"),
    badge: t2("West Lake & Water Towns", "西湖与江南水乡"),
    distance: t2("28 km (17 mi) to West Lake", "距西湖 28 km (17 英里)"),
    time: t2("40 min", "40 分钟"),
    tapCard: false,
    serviceDesk: t2(
      "Direct airport coaches also run to Wuzhen Water Town (~80 min), making HGH a smart first stop for Jiangnan water towns.",
      "航站楼有机场大巴直达乌镇水乡（约 80 分钟），非常适合作为江南行程第一站。",
    ),
    options: [
      {
        title: t2("🚇 Metro Line 1 / 19 Express", "🚇 地铁 1 号线 / 19 号线快线"),
        time: t2("40 min to West Lake", "40 分钟到西湖龙翔桥"),
        price: t2("¥8 (~$1.10)", "¥8 (约 $1.10)"),
        note: t2("Direct to Hangzhou East & West HSR", "直达杭州东站与西站"),
      },
      {
        title: t2("🚌 Wuzhen Direct Coach", "🚌 乌镇直达机场大巴"),
        time: t2("~80 min", "约 80 分钟"),
        price: t2("¥48 (~$6.70)", "¥48 (约 $6.70)"),
        note: t2("No city transfer needed", "免进城直达水乡"),
      },
      {
        title: t2("🚕 Taxi / DiDi", "🚕 出租车 / 滴滴"),
        time: t2("40–55 min", "40–55 分钟"),
        price: t2("¥90–120 (~$12–$17)", "¥90–120 (约 $12–$17)"),
        note: t2("Direct to West Lake hotels", "直达西湖边酒店"),
      },
    ],
  },
  {
    id: "kmg",
    code: "KMG",
    tab: t2("Kunming (KMG)", "昆明长水 KMG"),
    name: t2("Kunming Changshui Int'l Airport (KMG)", "昆明长水国际机场（KMG）"),
    badge: t2("Yunnan & SE Asia Hub", "云南与东南亚门户"),
    distance: t2("26 km (16 mi) Northeast", "距市区 26 km (16 英里)"),
    time: t2("35 min", "35 分钟"),
    tapCard: false,
    serviceDesk: t2(
      "Cheapest Southwest China gateway from Bangkok, KL & Singapore. Elevation is 1,890 m (6,200 ft) — take it easy on day one.",
      "东南亚飞中国西南最便宜的大门。昆明海拔 1,890 米（6,200 英尺），第一天避免剧烈奔跑。",
    ),
    options: [
      {
        title: t2("🚇 Metro Line 6 → Line 3", "🚇 地铁 6 号线转 3 号线"),
        time: t2("35–45 min", "35–45 分钟"),
        price: t2("¥6 (~$0.85)", "¥6 (约 $0.85)"),
        note: t2("Clean link to downtown", "直达市中心"),
      },
      {
        title: t2("🚕 Taxi to Kunming HSR", "🚕 打车去昆明高铁站"),
        time: t2("35–45 min", "35–45 分钟"),
        price: t2("¥80–110 (~$11–$15)", "¥80–110 (约 $11–$15)"),
        note: t2("Connect to Dali (2h) & Lijiang (3.5h)", "无缝接驳大理 2h / 丽江 3.5h 高铁"),
      },
      {
        title: t2("🚐 Airport Pickup", "🚐 预订接机"),
        time: t2("35 min", "35 分钟"),
        price: t2("~$20–$28 USD", "约 $20–$28 美元"),
        note: t2("Ideal for families heading straight to HSR", "家庭直奔高铁站省心选"),
      },
    ],
  },
  {
    id: "dyg-kwl",
    code: "DYG / KWL",
    tab: t2("Zhangjiajie / Guilin", "张家界 DYG / 桂林 KWL"),
    name: t2("Zhangjiajie (DYG) & Guilin (KWL) Scenic Airports", "张家界荷花（DYG）/ 桂林两江（KWL）景区机场"),
    badge: t2("Direct Scenic Gateways", "直飞网红山水景区"),
    distance: t2("6–28 km (4–17 mi)", "距市区 6–28 km (4–17 英里)"),
    time: t2("15–45 min", "15–45 分钟"),
    tapCard: false,
    serviceDesk: t2(
      "Frequent direct flights from Seoul & SE Asia — connecting via Seoul/HK straight into DYG or KWL often saves hours over domestic transfers.",
      "首尔及东南亚直飞航班极多，欧美游客经首尔或香港直飞张家界/桂林往往比国内中转省数小时。",
    ),
    options: [
      {
        title: t2("🚕 DYG → Tianmen Mountain", "🚕 张家界机场 → 天门山索道"),
        time: t2("15 min", "仅 15 分钟"),
        price: t2("¥20 (~$2.80)", "¥20 (约 $2.80)"),
        note: t2("45 min (~¥95 / $13) to Wulingyuan Avatar park", "去武陵源阿凡达景区约 45 分钟 (¥95 / $13)"),
      },
      {
        title: t2("🚌 KWL → Yangshuo Bus", "🚌 桂林机场 → 阳朔直达大巴"),
        time: t2("~90 min", "约 90 分钟"),
        price: t2("¥50 (~$7.00)", "¥50 (约 $7.00)"),
        note: t2("Skip downtown Guilin if heading to Yangshuo", "直奔阳朔无需进桂林市区"),
      },
      {
        title: t2("🚐 Private Scenic Transfer", "🚐 景区专车接机"),
        time: t2("Door-to-hotel", "直达景区民宿门口"),
        price: t2("~$22–$38 USD", "约 $22–$38 美元"),
        note: t2("Best for Wulingyuan or Yangshuo hotels", "武陵源/阳朔民宿门到门首选"),
      },
    ],
  },
];

/* =========================================================================
 * 1. INTERACTIVE 12-AIRPORT BENTO HUB (Replaces 2,500px Excel Wall Table!)
 * ========================================================================= */
export function AirportBentoHub({ lang }: { lang: Lang }) {
  const [activeId, setActiveId] = useState<string>("pvg");
  const [query, setQuery] = useState<string>("");
  const [showAll, setShowAll] = useState<boolean>(false);

  const filtered = AIRPORTS.filter((a) => {
    if (!query.trim()) return true;
    const q = query.trim().toLowerCase();
    return (
      a.code.toLowerCase().includes(q) ||
      a.name.en.toLowerCase().includes(q) ||
      a.name.zh.toLowerCase().includes(q) ||
      a.tab.en.toLowerCase().includes(q) ||
      a.tab.zh.toLowerCase().includes(q)
    );
  });

  const visibleAirports = showAll || query.trim() ? filtered : AIRPORTS.filter((a) => a.id === activeId);

  return (
    <div className="my-5 space-y-4">
      {/* Search + Quick Tabs */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={tx(t2("Quick search: type PVG, PEK, PKX, TFU, Shanghai, Xi'an...", "快速搜索：输入 PVG、PEK、TFU、上海、成都、西安..."), lang)}
              className="w-full rounded-lg border border-slate-300 py-2 pl-9 pr-3 text-sm text-slate-900 focus:border-slate-900 focus:outline-none"
            />
          </div>
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="shrink-0 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100"
          >
            {showAll
              ? tx(t2("Switch to Single-City Tab View", "切回单机场聚焦视图"), lang)
              : tx(t2("Expand All 12 Airports", "展开查看全部 12 座机场"), lang)}
          </button>
        </div>

        {!query.trim() && !showAll && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {AIRPORTS.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setActiveId(a.id)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                  activeId === a.id
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {tx(a.tab, lang)}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Bento Dashboard Cards */}
      <div className="space-y-4">
        {visibleAirports.map((a) => (
          <div key={a.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
            <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-100 pb-3.5">
              <div>
                <div className="flex items-center gap-2">
                  <Plane className="h-4 w-4 text-slate-700" />
                  <h3 className="text-lg font-extrabold text-slate-900">{tx(a.name, lang)}</h3>
                </div>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 font-medium text-slate-700">
                    <MapPin className="h-3.5 w-3.5 text-slate-500" />
                    {tx(a.distance, lang)}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 font-medium text-slate-700">
                    <Clock className="h-3.5 w-3.5 text-slate-500" />
                    {tx(a.time, lang)}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-semibold ${
                      a.tapCard ? "bg-emerald-50 text-emerald-800" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <CreditCard className="h-3.5 w-3.5" />
                    {a.tapCard
                      ? tx(t2("Tap Foreign Visa/MC: YES", "外卡拍闸：支持"), lang)
                      : tx(t2("Use Alipay Transport QR", "用支付宝乘车码"), lang)}
                  </span>
                </div>
              </div>
              <span className="rounded-md bg-slate-900 px-2.5 py-1 text-xs font-bold text-white">{a.code}</span>
            </div>

            {/* 24/7 Foreigner Service Desk Highlight */}
            <div className="mt-4 rounded-xl border border-emerald-200 border-l-4 border-l-emerald-600 bg-emerald-50/40 p-3.5 text-xs leading-relaxed text-slate-700">
              <strong className="text-emerald-900">
                🌟 {tx(t2("First Stop After Baggage Claim:", "落地提行李后第一站 / 避坑要点："), lang)}
              </strong>{" "}
              {tx(a.serviceDesk, lang)}
            </div>

            {/* 3 Ways to Downtown */}
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {a.options.map((opt, idx) => (
                <div key={idx} className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5">
                  <div className="text-xs font-bold text-slate-900">{tx(opt.title, lang)}</div>
                  <div className="mt-1 text-sm font-extrabold text-slate-900">{tx(opt.price, lang)}</div>
                  <div className="mt-0.5 text-xs font-medium text-slate-600">⏱️ {tx(opt.time, lang)}</div>
                  <div className="mt-1.5 border-t border-slate-200/70 pt-1.5 text-[11px] text-slate-600">
                    {tx(opt.note, lang)}
                  </div>
                </div>
              ))}
            </div>

            {a.trap && (
              <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50/60 px-3.5 py-2 text-xs font-medium text-amber-950">
                ⚠️ {tx(a.trap, lang)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================================
 * 2. HIGH-TRUST ARRIVAL TRANSFER CONVERSION CARD
 * ========================================================================= */
export function ArrivalTransferCard({ lang }: { lang: Lang }) {
  return (
    <div id="arrival-pickup" className="my-6 rounded-2xl border border-slate-200 border-l-4 border-l-amber-500 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-amber-800">
          <Sparkles className="h-4 w-4 text-amber-600" />
          {tx(t2("Late Arrival (After 11:00 PM) or Heavy Luggage?", "深夜 23:00 后落地 或 携带大件行李？"), lang)}
        </div>
        <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-900">
          {tx(t2("Fixed Price from ~$28–$42 USD", "一口价约 $28–$42 美元起"), lang)}
        </span>
      </div>

      <h3 className="mt-2 text-lg font-bold text-slate-900">
        {tx(t2("Pre-Book an English-Speaking Airport Pickup", "提前预订英文举牌接机（免夜间排队与语言障碍）"), lang)}
      </h3>
      <p className="mt-1 text-sm text-slate-600">
        {tx(
          t2(
            "Chinese airport metros usually close around 22:30–23:00, and midnight taxi queues can exceed 45 minutes with zero English spoken.",
            "中国机场地铁大多在 22:30–23:00 停运，午夜出租车排队常超 45 分钟且沟通困难。",
          ),
          lang,
        )}
      </p>

      <div className="mt-3.5 grid gap-2 text-xs font-medium text-slate-700 sm:grid-cols-2">
        {[
          t2("Driver waits at Arrivals with Name Sign", "司机在到达出口举牌等候"),
          t2("Free Flight-Delay Waiting Included", "航班延误免费等待"),
          t2("Highway Tolls & Parking All-Inclusive", "高速费与停车费全包无隐藏加价"),
          t2("Free 24-Hour Cancellation", "出发前 24 小时免费取消"),
        ].map((perk, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
            <span>{tx(perk, lang)}</span>
          </div>
        ))}
      </div>

      <a
        href={AFFILIATES.airportTransfer.url}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600"
      >
        {tx(t2("Check Fixed Airport Pickup Prices on Trip.com", "去 Trip.com 查看机场接机一口价"), lang)}
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
}

/* =========================================================================
 * 3. DUAL-AIRPORT LAYOVER TRAP: Visual Time-Bar Breakdown
 * ========================================================================= */
export function DualAirportTimeBars({ lang }: { lang: Lang }) {
  const pairs = [
    {
      title: t2("1. SHANGHAI: Pudong (PVG) ↔ Hongqiao (SHA)", "1. 上海：浦东 (PVG) ↔ 虹桥 (SHA)"),
      dist: t2("60 km (37 miles) apart", "相距 60 km (37 英里)"),
      safe: t2("4.5 – 5.0 HOURS", "4.5 – 5.0 小时"),
      danger: t2("Under 3.5h = Missed Flight!", "低于 3.5 小时 = 极易误机！"),
      bars: [
        { w: "w-[36%]", cls: "bg-amber-500", label: t2("75m Immig & Bags", "75m 边检行李") },
        { w: "w-[28%]", cls: "bg-sky-600", label: t2("55m Link Train", "55m 机场联络线") },
        { w: "w-[36%]", cls: "bg-slate-800", label: t2("60m Manual Check-in + Buffer", "60m 人工值机 + 缓冲") },
      ],
    },
    {
      title: t2("2. CHENGDU: Tianfu (TFU) ↔ Shuangliu (CTU)", "2. 成都：天府 (TFU) ↔ 双流 (CTU)"),
      dist: t2("70 km (43 miles) apart · All Int'l flights land TFU!", "相距 70 km (43 英里) · 所有国际航班均落 TFU！"),
      safe: t2("5.0 – 5.5 HOURS", "5.0 – 5.5 小时"),
      danger: t2("Under 4.0h = Unsafe!", "低于 4.0 小时 = 极不安全！"),
      bars: [
        { w: "w-[33%]", cls: "bg-amber-500", label: t2("75m Immig & Bags", "75m 边检行李") },
        { w: "w-[34%]", cls: "bg-sky-600", label: t2("65m Line 18→19 Express", "65m 18转19号线直快") },
        { w: "w-[33%]", cls: "bg-slate-800", label: t2("70m Check-in + Buffer", "70m 值机 + 缓冲") },
      ],
    },
    {
      title: t2("3. BEIJING: Daxing (PKX) ↔ Capital (PEK)", "3. 北京：大兴 (PKX) ↔ 首都 (PEK)"),
      dist: t2("85 km (53 miles) across the entire city!", "南北纵跨全城 85 km (53 英里)！"),
      safe: t2("6.0+ HOURS", "6.0 小时以上"),
      danger: t2("Under 5.0h = Red Zone!", "低于 5.0 小时 = 高危误机！"),
      bars: [
        { w: "w-[30%]", cls: "bg-amber-500", label: t2("75m Immig & Bags", "75m 边检行李") },
        { w: "w-[40%]", cls: "bg-sky-600", label: t2("90–110m Cross-City Rail/Car", "90–110m 跨城交通") },
        { w: "w-[30%]", cls: "bg-slate-800", label: t2("75m Check-in + Buffer", "75m 值机 + 缓冲") },
      ],
    },
  ];

  return (
    <div className="my-5 space-y-4">
      {pairs.map((p, idx) => (
        <div key={idx} className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="text-sm font-extrabold text-slate-900">{tx(p.title, lang)}</div>
              <div className="text-xs text-slate-500">{tx(p.dist, lang)}</div>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-md bg-slate-900 px-2.5 py-1 font-bold text-white">
                {tx(t2("Safe Buffer:", "建议预留："), lang)} {tx(p.safe, lang)}
              </span>
              <span className="rounded-md bg-red-50 px-2 py-1 font-bold text-red-700">{tx(p.danger, lang)}</span>
            </div>
          </div>

          {/* Segmented Visual Bar */}
          <div className="mt-3 flex h-8 w-full overflow-hidden rounded-lg text-[10px] font-bold text-white sm:text-[11px]">
            {p.bars.map((b, i) => (
              <div key={i} className={`${b.w} ${b.cls} flex items-center justify-center truncate px-2`}>
                {tx(b.label, lang)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
