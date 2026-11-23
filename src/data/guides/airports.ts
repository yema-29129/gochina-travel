import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "airports",
  category: "transport",
  icon: "plane",
  title: t2("China's 12 Major International Airports: Transfers, Counters & Traps", "中国 12 大入境国际机场攻略：进城交通、服务台与跨场转机陷阱"),
  seoTitle: t2(
    "China Top 12 International Airports Guide (2026): Downtown Transfers & Dual-Airport Rules",
    "中国 12 大国际机场进城交通与同城双机场转机时间全表（2026）"
  ),
  summary: t2(
    "Transfer guide for China's 12 major arrival airports (PVG, PEK, PKX, TFU, CAN, SZX & more), with tap-to-pay trains, service desks and dual-airport minimums.",
    "中国 12 大核心入境机场（PVG、PEK、PKX、TFU、CAN、SZX 等）进城交通、外卡拍闸、一站式服务台及同城双机场最短转机时间全表。"
  ),
  updated: "2026-11-24",
  readMin: 9,
  keyPoints: [
    t2(
      "Tap a physical foreign Visa/Mastercard directly at the gates of Shanghai's Maglev, Beijing Capital Airport Express (PEK) and Daxing Airport Express (PKX).",
      "上海磁悬浮、北京首都机场线（PEK）和大兴机场线（PKX）闸机均支持直接拍境外 Visa/Mastercard 实体卡进站。"
    ),
    t2(
      "PVG (T1/T2), PEK (T2/T3) and CAN (T2) have One-Stop International Visitor Service Desks right outside arrivals to help set up Alipay, SIM cards and transit cards.",
      "上海浦东（T1/T2）、北京首都（T2/T3）和广州白云（T2）国际到达出口均设外籍人员一站式服务台，免费协助绑支付宝、办电话卡和交通卡。"
    ),
    t2(
      "Watch dual-airport city traps: Shanghai PVG↔SHA needs ≥4.5–5h (<3.5h is red-zone missed flight), Chengdu TFU↔CTU needs ≥5–5.5h, and Beijing PKX↔PEK needs ≥6h.",
      "警惕同城双机场大坑：上海 PVG↔SHA 至少留 4.5–5 小时（低于 3.5 小时极易误机），成都 TFU↔CTU 至少留 5–5.5 小时，北京 PKX↔PEK 至少留 6 小时。"
    ),
    t2(
      "Flying into Hong Kong (HKG) can save money: take the 30-min direct ferry to Shenzhen Shekou or the 14-min West Kowloon bullet train—both support 30-day visa-free and 240h transit.",
      "飞香港（HKG）常更省钱：从香港机场免入境坐 30 分钟快船到深圳蛇口，或从西九龙坐 14 分钟高铁到福田，两大口岸均支持 30 天免签与 240 小时过境免签。"
    ),
  ],
  sections: [
    {
      id: "top-12-airports",
      heading: t2("China's 12 major international arrival airports", "中国前 12 大入境国际机场速查全表"),
      blocks: [
        t2b(
          "Your first hour after clearing customs is when travelers most often get lost or approached by unlicensed drivers. Always follow official Airport Express, Metro or Taxi/DiDi signs—never go with anyone soliciting rides inside the arrivals hall.",
          "刚走出海关门的第一小时是最容易迷路和被黑车盯上的时刻。务必认准官方机场快轨、地铁或正规出租车/滴滴标识，绝对不要跟到达厅里主动拉客的人走。"
        ),
        {
          type: "table",
          head: [
            t2("City & Airport (IATA)", "城市与机场（代码）"),
            t2("Distance & Time", "距市中心距离与耗时"),
            t2("Best Transfer Options & Prices", "最优进城交通方式（含价格与外卡细节）"),
            t2("Service Desks & Key Traps", "救命服务台与避坑要点"),
          ],
          rows: [
            [
              t2("1. Shanghai Pudong (PVG)", "1. 上海浦东国际机场（PVG）"),
              t2("~45 km (45–60 min)", "约 45 km（45–60 分钟）"),
              t2(
                "① Airport Link Line (市域机场联络线): 40 min direct to Hongqiao hub. ② Maglev (300 km/h, 8 min to Longyang Rd) + Metro Line 2 to The Bund / People's Square (20% off with same-day flight ticket = ¥40; gates accept contactless foreign Visa/Mastercard!). ③ DiDi/taxi to The Bund: ¥160–200 daytime, ~¥220 at night (+30%).",
                "① 市域机场联络线：仅 40 分钟直达上海虹桥枢纽。② 磁悬浮（300 km/h，8 分钟到龙阳路）换地铁 2 号线进外滩/人民广场（凭当天机票打八折仅 40 元，闸机直接支持拍境外 Visa/Mastercard！）。③ 滴滴/出租车到外滩白天约 160–200 元，夜间加收 30% 约 220 元。"
              ),
              t2(
                "24h One-Stop International Service Center directly opposite T1 & T2 international arrival exits (free help with Alipay, China Unicom/Mobile SIMs, small change, transit cards). Trap: check whether your domestic connection is from PVG or SHA—they are 60 km apart (use the Airport Link Line, not the 90-min metro).",
                "T1 和 T2 国际到达出口正对面设 24 小时外籍人员一站式综合服务中心（免费帮绑支付宝、办联通/移动电话卡、换零钱、领交通卡）。大坑：务必核对下一程国内航班在 PVG 还是 SHA，两机场相距 60 km，换乘请坐市域机场线（不要坐 90 分钟的地铁）。"
              ),
            ],
            [
              t2("2. Shanghai Hongqiao (SHA)", "2. 上海虹桥国际机场（SHA）"),
              t2("13 km (25 min)", "仅 13 km（25 分钟）"),
              t2(
                "Metro Line 2 or Line 10 direct to Jing'an Temple, Xintiandi and East Nanjing Rd; taxi to downtown only ¥45–70. Mainly serves Japan/Korea (Haneda/Gimpo) and HK/Macau/Taiwan flights.",
                "地铁 2 号线 / 10 号线直达静安寺、新天地、南京东路；打车进市中心仅 45–70 元。主要执飞日韩（羽田/金浦）及港澳台航线。"
              ),
              t2(
                "Trap: T1 (international & Spring Airlines) and T2 (main domestic airlines & Hongqiao Railway Station) sit on opposite sides of the runway. Going to the wrong terminal by taxi takes a 20-min detour; Metro Line 10 is 1 stop and fastest.",
                "大坑：T1（国际及春秋航空）与 T2（主流国内航司及虹桥高铁站）隔着整条跑道，打车走错绕一圈要 20 分钟，坐地铁 10 号线坐一站最快。"
              ),
            ],
            [
              t2("3. Beijing Capital (PEK)", "3. 北京首都国际机场（PEK）"),
              t2("~28 km (35–50 min)", "约 28 km（35–50 分钟）"),
              t2(
                "Capital Airport Express: ¥25 (gates accept contactless foreign Visa/Mastercard!), 20 min direct to Sanyuanqiao / Dongzhimen for transfers to Sanlitun & Wangfujing. Taxi inside 2nd Ring Rd: ¥100–130.",
                "首都机场线：票价 25 元（闸机直接支持拍境外 Visa/Mastercard 实体卡！），20 分钟直达三元桥/东直门换地铁去三里屯、王府井。打车进二环约 100–130 元。"
              ),
              t2(
                "T3 and T2 international arrival exits both have 'Beijing Service' international visitor counters for SIM cards, foreign-card ATM help and BEIJING PASS transit cards.",
                "T3 和 T2 国际到达厅出口均设有“北京服务（Beijing Service）”国际旅客柜台，一站式搞定电话卡、外卡取现指引与北京一卡通（BEIJING PASS）。"
              ),
            ],
            [
              t2("4. Beijing Daxing (PKX)", "4. 北京大兴国际机场（PKX）"),
              t2("~50 km (45–65 min)", "约 50 km（45–65 分钟）"),
              t2(
                "① Daxing Airport Express metro: 19 min to Caoqiao (¥35, tap foreign card supported), transfer to Line 19 or Line 10. ② Beijing–Xiong'an high-speed train from beneath the terminal: 28 min direct to Beijing West Station. ③ Taxi to Wangfujing / Forbidden City: ¥160–220.",
                "① 大兴机场线地铁：19 分钟到草桥站（35 元，支持拍外卡），换乘 19 号线或 10 号线进城。② 京雄城际高铁：航站楼地下直坐高铁 28 分钟到北京西站。③ 打车去王府井/故宫周边较远，约 160–220 元。"
              ),
              t2(
                "Starfish-shaped mega-airport with ultra-modern facilities. If landing after 23:00 when the metro stops, pre-book a private airport transfer (~US$30) to skip long late-night taxi queues.",
                "海星造型网红超级机场，设施极新。若深夜 23:00 后落地地铁停运，建议提前预订举牌接机（约 30 美元），免去夜间排长队等出租车之苦。"
              ),
            ],
            [
              t2("5. Guangzhou Baiyun (CAN)", "5. 广州白云国际机场（CAN）"),
              t2("~32 km (45 min)", "约 32 km（45 分钟）"),
              t2(
                "Metro Line 3 (North Extension) direct to Tiyu Xilu / Zhujiang New Town (only ¥7–8); taxi to Tianhe / Zhujiang New Town: ¥110–140.",
                "地铁 3 号线北延段直达体育西路/珠江新城（仅 7–8 元）；打车到天河珠江新城约 110–140 元。"
              ),
              t2(
                "T2 international arrival exit has an Inbound Payment & Telecom Service Desk. Note: Metro Line 3 is notoriously packed during morning/evening rush hours—if you have two large suitcases, book a 6-seat DiDi via Alipay instead.",
                "T2 国际到达出口设有“入境支付及通信服务台”。注意早晚高峰地铁 3 号线客流极大，推两件大行李箱强烈建议直接用支付宝叫滴滴六座专车。"
              ),
            ],
            [
              t2("6. Shenzhen Bao'an (SZX)", "6. 深圳宝安国际机场（SZX）"),
              t2("~32 km (35 min)", "约 32 km（35 分钟）"),
              t2(
                "Metro Line 11 (has spacious Business Class carriages!): 30 min direct to Nanshan and Futian CBD. Airport Ferry Terminal also runs direct boats to Hong Kong Airport (HKG), Macau and Zhuhai.",
                "地铁 11 号线（设宽敞商务车厢！）：30 分钟直达南山、福田中心区；机场码头可直接坐船去香港机场、澳门、珠海。"
              ),
              t2(
                "Money-saving Hong Kong trick: if direct Mainland flights are pricey, fly into Hong Kong (HKG) → take the 30-min ferry airside (without entering HK) directly to Shenzhen Shekou Cruise Home Port, OR enter HK and ride the 14-min West Kowloon bullet train to Shenzhen Futian. Both ports support 30-day visa-free and 240h transit!",
                "省钱神操作：如果直飞内地机票贵，可飞香港国际机场（HKG）→ 不入境香港直接坐 30 分钟快船到深圳蛇口邮轮母港，或入境香港后去西九龙站坐 14 分钟高铁到深圳福田站。这两个口岸全都支持 30 天免签和 240 小时过境免签！"
              ),
            ],
            [
              t2("7. Chengdu Tianfu (TFU)", "7. 成都天府国际机场（TFU）"),
              t2("60 km! (50–70 min)", "远达 60 km！（50–70 分钟）"),
              t2(
                "① Metro Line 18 Express (直快车): watch the platform screen for Express trains (fewer stops), 35–40 min to South Railway Station then Line 1 to Chunxi Rd. ② Underground high-speed train from Tianfu Airport Station: 26 min direct to Chengdu East Station. ③ Taxi to Chunxi Rd: ¥150–200 (incl. tolls).",
                "① 地铁 18 号线直快列车：看准站台屏幕选“直快车”，35–40 分钟直达火车南站换 1 号线去春熙路。② 天府机场站高铁：航站楼地下直坐高铁 26 分钟直达成都东站。③ 打车去春熙路约 150–200 元（含高速费）。"
              ),
              t2(
                "Chengdu's #1 trap: ALL international and HK/Macau/Taiwan flights land at faraway Tianfu (TFU), while the older downtown airport Shuangliu (CTU) serves select domestic trunk routes. They are nearly 70 km apart—always check the 3-letter IATA code when connecting!",
                "成都双机场头号大坑：所有国际及港澳台航班全部降落在超远的天府机场（TFU），市区边上的老机场双流（CTU）仅飞国内精品干线。两机场相距近 70 km，转机千万看清三字代码！"
              ),
            ],
            [
              t2("8. Chongqing Jiangbei (CKG)", "8. 重庆江北国际机场（CKG）"),
              t2("~23 km (35–45 min)", "约 23 km（35–45 分钟）"),
              t2(
                "CRT Line 10 (Express) transferring to Line 6 or Line 1 to Jiefangbei & Hongyadong; taxi into Yuzhong Peninsula is only ¥55–80.",
                "轨道交通 10 号线（快速车）转 6 号线/1 号线进解放碑、洪崖洞；打车进渝中半岛仅 55–80 元，非常友好。"
              ),
              t2(
                "Trap: T2 and T3A/T3B terminals are not connected by walkway—double-check whether you are at T3 or T2 when pinning your DiDi pickup.",
                "注意：T2 与 T3A/T3B 航站楼之间不相连，叫滴滴定位时务必选准自己在 T3 还是 T2。"
              ),
            ],
            [
              t2("9. Xi'an Xianyang (XIY)", "9. 西安咸阳国际机场（XIY）"),
              t2("~38 km (50 min)", "约 38 km（50 分钟）"),
              t2(
                "Metro Line 14 transferring to Line 2 or Line 4 direct to Bell Tower, Giant Wild Goose Pagoda & Datang Everbright City; taxi inside the City Wall: ¥100–130.",
                "地铁 14 号线换乘 2 号线/4 号线直达钟楼、大雁塔、大唐不夜城；打车进城墙内约 100–130 元。"
              ),
              t2(
                "New Terminal 5 dramatically upgrades international arrivals (there is even a real antiquities museum built inside the terminal!). Allow extra time for rush-hour traffic if staying inside the City Wall or near South Gate.",
                "T5 航站楼启用后国际航班体验大幅升级（航站楼里甚至建了一座真文物博物馆！）。住在城墙内或南门附近需留意早晚高峰堵车。"
              ),
            ],
            [
              t2("10. Hangzhou Xiaoshan (HGH)", "10. 杭州萧山国际机场（HGH）"),
              t2("~28 km (40 min)", "约 28 km（40 分钟）"),
              t2(
                "Metro Line 1 or Line 19 (Airport Express) direct to West Lake (Longxiangqiao Station), Hangzhou East and Hangzhou West railway stations.",
                "地铁 1 号线或 19 号线（机场快线）极速直达西湖边（龙翔桥站）以及杭州东站、杭州西站。"
              ),
              t2(
                "Direct airport shuttle buses also run to Wuzhen Water Town (~80 min), making HGH a convenient first stop for Jiangnan water towns.",
                "还有机场大巴直达乌镇水乡（约 80 分钟），非常适合作为江南行程第一站。"
              ),
            ],
            [
              t2("11. Kunming Changshui (KMG)", "11. 昆明长水国际机场（KMG）"),
              t2("~26 km (35 min)", "约 26 km（35 分钟）"),
              t2(
                "Metro Line 6 → Line 3 into downtown; or taxi to Kunming / Kunming South railway station for bullet trains to Dali (2h) and Lijiang (3.5h).",
                "地铁 6 号线转 3 号线进市区；或打车去昆明站/昆明南站直接坐高铁 2 小时到大理、3.5 小时到丽江。"
              ),
              t2(
                "Cheapest Southwest China gateway from Southeast Asia (Bangkok, Kuala Lumpur, Singapore, Vientiane). Kunming sits at ~1,890 m elevation—take it easy and avoid heavy sprinting on day one.",
                "东南亚（曼谷、吉隆坡、新加坡、万象）飞进中国西南最便宜的大门。昆明海拔约 1,890 m，落地第一天别剧烈奔跑。"
              ),
            ],
            [
              t2("12. Zhangjiajie (DYG) / Guilin (KWL)", "12. 张家界荷花（DYG）/ 桂林两江（KWL）"),
              t2("6–28 km", "距市区 6–28 km"),
              t2(
                "Zhangjiajie Hehua (DYG) is just 15 min (~¥20) by taxi to Tianmen Mountain lower cableway station, or 45 min (~¥90–110) to Wulingyuan National Forest Park. Guilin (KWL) has direct buses to Yangshuo (~90 min).",
                "张家界荷花机场打车到天门山索道下站只要 15 分钟（约 20 元），去武陵源国家森林公园约 45 分钟（约 90–110 元）。桂林机场去阳朔大巴约 90 分钟。"
              ),
              t2(
                "Frequent direct flights from South Korea and Southeast Asia—Western travelers connecting via Seoul or Hong Kong directly into DYG or KWL often save hours over domestic transfers.",
                "韩国、东南亚有大量直飞张家界和桂林的航班，欧美游客经首尔或香港转机直飞往往比国内中转更省时间。"
              ),
            ],
          ],
        },
        { type: "affiliate", id: "airportTransfer" },
        { type: "ad" },
      ],
    },
    {
      id: "dual-airport-transfer-times",
      heading: t2("Dual-airport cities: minimum safe transfer times", "同城双机场转机：最小安全间隔时间铁律"),
      blocks: [
        t2b(
          "Booking a self-transfer or split itinerary across two airports in Shanghai, Chengdu or Beijing is one of the top reasons foreigners miss domestic flights. Calculate your buffer as: Immigration & Baggage + Cross-City Transit + Counter Check-in Cutoff (45 min for foreign passports) + 45 min safety buffer.",
          "在上海、成都或北京跨机场转机，是外国游客误机的头号原因。最小安全间隔必须涵盖：入境边检取行李 + 跨城交通 + 人工柜台截载（外籍护照提前 45 分钟）+ 45 分钟缓冲。"
        ),
        {
          type: "table",
          head: [
            t2("Cross-Airport Pair", "同城跨场组合"),
            t2("Distance & Best Transit", "两场距离与最快交通"),
            t2("Minimum Safe Layover", "建议最少预留时间"),
            t2("Danger Zone", "高危误机红线"),
          ],
          rows: [
            [
              "Shanghai PVG ↔ SHA",
              t2(
                "~60 km; Airport Link Line (40 min ride + 15 min walk/wait) + 60–90 min immigration/baggage + 45 min Hongqiao counter cutoff.",
                "约 60 km；市域机场联络线（40 分钟车程 + 15 分钟候车步行）+ 入境取行李 60–90 分钟 + 虹桥人工柜台提前 45 分钟截载。"
              ),
              t2("At least 4.5–5 hours", "至少预留 4.5–5 小时以上"),
              t2("Under 3.5 hours = very high risk of missing your flight", "低于 3.5 小时 = 极高概率误机"),
            ],
            [
              "Chengdu TFU ↔ CTU",
              t2(
                "~70 km; Metro Line 18 → Line 19 Express (50–65 min) + immigration/baggage + check-in.",
                "近 70 km；地铁 18 号线换 19 号线直快车（50–65 分钟）+ 入境取行李 + 值机。"
              ),
              t2("At least 5–5.5 hours", "至少预留 5–5.5 小时以上"),
              t2("Under 4 hours = unsafe", "低于 4 小时 = 极不安全"),
            ],
            [
              "Beijing PKX ↔ PEK",
              t2(
                "~85 km north-south across the entire Beijing metro area.",
                "南北纵跨整个北京市区近 85 km。"
              ),
              t2("At least 6 hours", "至少预留 6 小时以上"),
              t2("Under 5 hours = high risk, especially in rush hour", "低于 5 小时 = 极高风险，早晚高峰更甚"),
            ],
          ],
        },
        { type: "tool", tool: "powerbank-airport" },
      ],
    },
  ],
  faq: [
    {
      q: t2("Can I tap my foreign Visa or Mastercard on airport trains in China?", "中国机场快轨能直接拍境外 Visa/Mastercard 卡吗？"),
      a: t2(
        "Yes—Shanghai's Maglev, Beijing's Capital Airport Express (PEK) and Daxing Airport Express (PKX) all accept contactless foreign Visa/Mastercard directly at the turnstiles.",
        "可以——上海磁悬浮、北京首都机场线（PEK）和大兴机场线（PKX）闸机都支持直接拍境外 Visa/Mastercard 实体卡进站。"
      ),
    },
    {
      q: t2("How long do I need to transfer between Shanghai Pudong (PVG) and Hongqiao (SHA)?", "上海浦东（PVG）和虹桥（SHA）之间转机要留多久？"),
      a: t2(
        "Leave at least 4.5–5 hours. Under 3.5 hours is a red-zone missed flight risk once you factor in immigration, baggage claim, the 40-minute Airport Link Line and counter check-in cutoffs.",
        "至少留 4.5–5 小时。算上入境边检、取行李、40 分钟市域机场线和人工柜台截载，低于 3.5 小时误机风险极高。"
      ),
    },
    {
      q: t2("Which Chengdu airport do international flights arrive at?", "成都国际航班降落在哪个机场？"),
      a: t2(
        "All international and HK/Macau/Taiwan flights arrive at Chengdu Tianfu (TFU), 60 km from downtown. Shuangliu (CTU) handles domestic routes only.",
        "所有国际及港澳台航班全部降落在距市区 60 km 的成都天府机场（TFU）；双流机场（CTU）仅执飞国内航线。"
      ),
    },
    {
      q: t2("Should I book a pre-arranged airport pickup if I land after midnight?", "半夜落地建议提前订接机吗？"),
      a: t2(
        "Yes, especially at far-out airports like Beijing Daxing (PKX), Shanghai Pudong (PVG) and Chengdu Tianfu (TFU), where metros close around 23:00 and late-night taxi queues can be long.",
        "非常建议，尤其是大兴（PKX）、浦东（PVG）、天府（TFU）这类远郊机场，23:00 左右地铁停运且夜间出租车排队较长。"
      ),
    },
  ],
  related: ["domestic-flights", "metro-didi-maps", "240-hour-transit", "arrival-immigration", "high-speed-trains"],
};

function t2b(en: string, zh: string) {
  return { type: "p", text: t2(en, zh) } as const;
}

export default guide;
