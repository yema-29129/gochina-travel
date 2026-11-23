import { t2 } from "@/lib/i18n";
import type { City } from "@/data/types";

/**
 * First-timer city guides. Sources: chapter 2 (12 entry airports), chapter 6 (ticket release table),
 * chapter 1 (240-hour transit province boundaries) and city wireframe 3.
 * zh must stay a 1:1 translation of en.
 */
export const CITIES: City[] = [
  /* ------------------------------------------------------------------ BEIJING */
  {
    id: "beijing",
    name: t2("Beijing", "北京"),
    zh: "北京",
    province: t2("Capital · Beijing Municipality", "首都 · 北京市"),
    image: "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=1400&q=80",
    summary: t2(
      "China's capital: the Forbidden City, the Great Wall, hutong alleys and Peking duck. Tickets open 7 days ahead and you need your passport everywhere.",
      "中国的首都：故宫、长城、胡同和北京烤鸭。门票提前 7 天开放预约，而且到哪儿都需要护照。"
    ),
    seoTitle: t2(
      "Beijing First-Timer Survival Guide (2026): Tickets, Airports & Metro",
      "北京首访生存指南（2026）：门票、机场与地铁"
    ),
    bestTime: t2("Apr–May, Sep–Oct", "4–5 月、9–10 月"),
    days: t2("3–4 days", "3–4 天"),
    budget: t2("¥500–900 / day", "每天 ¥500–900"),
    difficulty: 2,
    tapCardOnMetro: true,
    airports: [
      {
        code: "PEK",
        name: t2("Beijing Capital International Airport", "北京首都国际机场"),
        distance: t2("About 28 km (35–50 min)", "约 28 公里（35–50 分钟）"),
        transfer: t2(
          "Capital Airport Express: ¥25, and the gates accept a foreign Visa/Mastercard tapped directly. 20 minutes to Sanyuanqiao / Dongzhimen, then change to the metro for Sanlitun or Wangfujing. Taxi to inside the 2nd Ring Road about ¥100–130.",
          "首都机场线：票价 ¥25，闸机支持直接拍境外 Visa/Mastercard 实体卡。20 分钟直达三元桥/东直门，再换乘地铁去三里屯或王府井。打车进二环约 ¥100–130。"
        ),
        trap: t2(
          "Help desk: the T3 and T2 international arrivals exits both have a “Beijing Service” counter for international travelers — SIM cards, cash withdrawal with foreign cards and the Beijing transport card (BEIJING PASS) in one place.",
          "求助柜台：T3 和 T2 国际到达出口均设有“北京服务（Beijing Service）”国际旅客柜台，一站式办理电话卡、外卡取现和北京一卡通（BEIJING PASS）。"
        ),
      },
      {
        code: "PKX",
        name: t2("Beijing Daxing International Airport", "北京大兴国际机场"),
        distance: t2("About 50 km (45–65 min)", "约 50 公里（45–65 分钟）"),
        transfer: t2(
          "① Daxing Airport Express metro: 19 minutes to Caoqiao (¥35, foreign cards can be tapped), then change to Line 19 / Line 10. ② Beijing–Xiong'an intercity high-speed train: from under the airport to Beijing West Station in only 28 minutes. ③ Taxi to Wangfujing / the Forbidden City area is far, about ¥160–220.",
          "① 大兴机场线地铁：19 分钟到草桥站（票价 ¥35，支持拍外卡），再换乘 19 号线/10 号线进城。② 京雄城际高铁：从机场地下直接坐高铁到北京西站仅 28 分钟。③ 打车去王府井/故宫周边较远，约 ¥160–220。"
        ),
        trap: t2(
          "The new “starfish” airport with brand-new facilities. If you land after 23:00 the metro has stopped — book a Trip.com meet-and-greet pickup in advance (about USD 30) instead of queuing for a taxi at night.",
          "海星造型的新机场，设施极新。如果 23:00 后落地，地铁已停运——请提前预订 Trip.com 举牌接机（约 30 美元），免去夜间排长队等出租车。"
        ),
      },
    ],
    neighborhoods: [
      {
        name: t2("Wangfujing / Dongcheng", "王府井 / 东城"),
        zh: "王府井",
        goodFor: t2(
          "First-timers: walk to the Forbidden City and Tiananmen, big international hotels, Metro Line 1.",
          "首次来访者：步行可达故宫和天安门，大型国际酒店多，地铁 1 号线。"
        ),
      },
      {
        name: t2("Qianmen / Dashilan", "前门 / 大栅栏"),
        zh: "前门",
        goodFor: t2(
          "Hutong atmosphere and courtyard hotels, south of Tiananmen Square, good value.",
          "胡同氛围和四合院酒店，位于天安门广场以南，性价比高。"
        ),
      },
      {
        name: t2("Sanlitun / Chaoyang", "三里屯 / 朝阳"),
        zh: "三里屯",
        goodFor: t2(
          "Nightlife, Western food and embassies; easy from Capital Airport via Dongzhimen / Sanyuanqiao.",
          "夜生活、西餐和使馆区；从首都机场经东直门/三元桥过来很方便。"
        ),
      },
    ],
    attractions: [
      {
        name: t2("Forbidden City (Palace Museum)", "故宫博物院"),
        zh: "故宫博物院",
        ticket: t2("¥60 (peak season) / ¥40 (off season)", "¥60（旺季）/ ¥40（淡季）"),
        booking: t2(
          "Opens 7 days ahead at 20:00 Beijing time. Closed every Monday (except public holidays). No tickets at the gate.",
          "提前 7 天北京时间晚上 20:00 准时开抢。每周一闭馆（法定节假日除外）。现场绝对无票。"
        ),
        time: t2("3–4 h", "3–4 小时"),
        tip: t2(
          "Book with your passport number on the official multilingual website. Sold out? Buy a licensed English half-day tour that includes the ticket. You must enter from the south through the Meridian Gate (午门); cars cannot drive to it — book the Tiananmen area first or walk round via Donghuamen.",
          "可在故宫官方多语种网站凭护照号实名抢票。抢不到？买包含故宫门票的正规英语半日团。必须从南门午门进入；不能开车直接到午门——须先预约天安门地区或从东华门绕行步行前往。"
        ),
      },
      {
        name: t2("Tiananmen Square & flag-raising", "天安门广场与升旗"),
        zh: "天安门广场",
        ticket: t2("Free (time-slot booking)", "免费（预约时段票）"),
        booking: t2(
          "Book 1–7 days ahead — you must book at least 1 day before. Open all year.",
          "可提前 1–7 天预约——必须至少提前 1 天预约。全年开放。"
        ),
        time: t2("1 h", "1 小时"),
        tip: t2(
          "Even if you only want to walk onto the square to see the Monument to the People's Heroes or photograph the Tiananmen Gate, you need a free time-slot booking — without it you cannot pass the security check.",
          "哪怕你只想走到广场上看一眼人民英雄纪念碑或拍天安门城楼正面，也必须提前预约免费时段票——否则连安检口都进不去。"
        ),
      },
      {
        name: t2("National Museum of China", "中国国家博物馆"),
        zh: "中国国家博物馆",
        ticket: t2("Free", "免费"),
        booking: t2("Opens 7 days ahead at 17:00. Closed every Monday.", "提前 7 天下午 17:00 放票。每周一闭馆。"),
        time: t2("2–3 h", "2–3 小时"),
        tip: t2(
          "Free but harder to get than the Forbidden City. There is an English booking page / email channel for international visitors — book the second tickets open.",
          "免费但比故宫还难抢。设有面向国际游客的英文预约网页/邮箱通道——务必准点抢票。"
        ),
      },
      {
        name: t2("Mutianyu Great Wall (or Badaling)", "慕田峪长城（或八达岭）"),
        zh: "慕田峪长城",
        ticket: t2("¥40 + cable car ¥100–140", "¥40 + 缆车 ¥100–140"),
        booking: t2("Tickets available 1–10 days ahead, usually not sold out. Open all year.", "提前 1–10 天随时有余票。全年开放。"),
        time: t2("Half day", "半天"),
        tip: t2(
          "Choose Mutianyu over Badaling: more foreign visitors, less commercial, take the cable car up and the toboggan slide down. Go early.",
          "推荐去慕田峪而非八达岭：外国游客比例高、商业化适度，可坐缆车上山再坐旱地雪橇滑道下来。尽早出发。"
        ),
      },
      {
        name: t2("Temple of Heaven", "天坛公园"),
        zh: "天坛公园",
        ticket: t2("¥34 combo", "联票 ¥34"),
        booking: t2("Real-name ticket with passport; buy online or at the gate on the day.", "凭护照实名购票；可当天网上或现场购买。"),
        time: t2("2 h", "2 小时"),
        tip: t2("Arrive before 8 AM to see locals doing tai chi.", "早上 8 点前到，可以看到当地人打太极。"),
      },
      {
        name: t2("Summer Palace", "颐和园"),
        zh: "颐和园",
        ticket: t2("¥60 combo", "联票 ¥60"),
        booking: t2("Real-name ticket with passport; buy online or at the gate on the day.", "凭护照实名购票；可当天网上或现场购买。"),
        time: t2("3 h", "3 小时"),
        tip: t2("Take a boat across Kunming Lake.", "坐船横渡昆明湖。"),
      },
      {
        name: t2("Hutongs (Gulou / Nanluoguxiang)", "胡同（鼓楼 / 南锣鼓巷）"),
        zh: "南锣鼓巷 · 鼓楼",
        ticket: t2("Free", "免费"),
        booking: t2("No booking needed.", "无需预约。"),
        time: t2("2 h", "2 小时"),
        tip: t2(
          "Ride a shared bike (scan with Alipay) through the side alleys. Street snacks like candied haws are often paid by personal QR code, which foreign cards cannot pay — carry small cash.",
          "用支付宝扫共享单车穿行小巷。糖葫芦等街头小吃常用个人收款码收款，外卡无法支付——请带零钱。"
        ),
      },
    ],
    food: [
      { name: t2("Peking Roast Duck", "北京烤鸭"), zh: "北京烤鸭", pinyin: "Běijīng kǎoyā", price: "¥150–300", note: t2("Wrapped in pancakes with scallion and sweet bean sauce. A big bill: bills over ¥200 paid with a foreign card in Alipay carry a 3% fee — use a zero-fee card or split the bill.", "用薄饼卷葱丝和甜面酱。账单金额大：用绑定外卡的支付宝付款超过 ¥200 会收 3% 手续费——请用零手续费卡或分开付款。") },
      { name: t2("Zhajiang Noodles", "老北京炸酱面"), zh: "老北京炸酱面", pinyin: "Lǎo Běijīng zhájiàngmiàn", price: "¥25–40", note: t2("Noodles with savory fermented soybean paste and fresh vegetables.", "拌有咸香黄豆酱和新鲜菜码的面条。") },
      { name: t2("Copper-Pot Lamb Hotpot", "铜锅涮肉"), zh: "铜锅涮肉", pinyin: "Tóngguō shuànròu", price: "¥100–150", note: t2("Clear broth, paper-thin lamb, sesame dipping sauce.", "清汤锅底、薄切羊肉、芝麻酱蘸料。") },
    ],
    gettingAround: [
      t2("Metro covers almost every sight. You can tap a foreign Visa/Mastercard at airport-line gates, or use the Beijing metro QR code in Alipay → Transport.", "地铁几乎覆盖所有景点。机场线闸机可以直接拍境外 Visa/Mastercard，也可以在支付宝 → 出行里使用北京地铁乘车码。"),
      t2("Didi (inside Alipay) works in English. Avoid taxis 7:30–9:30 AM and 5–7:30 PM.", "滴滴（支付宝内）有英文界面。早 7:30–9:30 和晚 5:00–7:30 尽量避免打车。"),
      t2("Carry your passport every day: it is checked at Tiananmen, the Forbidden City, all museums, hotels and train stations.", "每天随身带护照：天安门、故宫、所有博物馆、酒店和火车站都会查验。"),
      t2("Shared bikes cost about ¥1.5 per ride and are the best way to explore the hutongs.", "共享单车每次约 ¥1.5，是逛胡同的最佳方式。"),
      t2("Teenagers whose phones cannot link a card can use a physical Beijing transport card (T-Union), topped up at convenience stores.", "手机无法绑卡的青少年可以使用实体北京一卡通（交通联合卡），在便利店充值。"),
      t2("Foreign visitors can get a temporary Chinese driving license at the service points at Daxing and Capital airports.", "外国游客可在大兴和首都机场的服务点办理中国临时驾驶证。"),
    ],
    transit240: t2(
      "Beijing: the whole of Beijing Municipality. Entry/exit ports: Beijing Capital (PEK) and Beijing Daxing (PKX). You may combine it with any other allowed area during the 240 hours, e.g. take the train to Datong (Shanxi) or Xi'an.",
      "北京：北京市全域。适用出入境口岸：北京首都国际机场（PEK）和北京大兴国际机场（PKX）。240 小时内可以与其他任何允许区域自由组合，例如坐火车去大同（山西）或西安。"
    ),
    nearby: t2("Tianjin (30 min by train), Chengde (1 h), Datong (2 h), Xi'an (4.5 h)", "天津（火车 30 分钟）、承德（1 小时）、大同（2 小时）、西安（4.5 小时）"),
    faq: [
      { q: t2("When do Forbidden City tickets go on sale?", "故宫门票什么时候开售？"), a: t2("7 days before your visit at 20:00 Beijing time, on the official website with your passport number. It is closed on Mondays (except public holidays) and no tickets are sold at the gate.", "参观日前 7 天北京时间 20:00，在官方网站凭护照号购买。每周一闭馆（法定节假日除外），现场不售票。") },
      { q: t2("Do I need to book to walk onto Tiananmen Square?", "走上天安门广场需要预约吗？"), a: t2("Yes. Even just to see the square you need a free time-slot booking made at least 1 day (up to 7 days) ahead, otherwise you cannot pass security.", "需要。哪怕只是看一眼广场，也必须至少提前 1 天（最多 7 天）预约免费时段票，否则过不了安检。") },
      { q: t2("Which airport is better, PEK or PKX?", "首都机场（PEK）和大兴机场（PKX）哪个更好？"), a: t2("PEK is closer (about 28 km, ¥25 Airport Express to Dongzhimen in 20 min). PKX is about 50 km away but has a 19-minute express metro (¥35) and a 28-minute train to Beijing West. After 23:00 the metro stops at PKX, so book a pickup.", "PEK 更近（约 28 公里，机场线 ¥25，20 分钟到东直门）。PKX 约 50 公里，但有 19 分钟的机场快线（¥35）和 28 分钟到北京西站的高铁。23:00 后大兴地铁停运，请预订接机。") },
      { q: t2("Mutianyu or Badaling?", "去慕田峪还是八达岭？"), a: t2("Mutianyu: fewer crowds, less commercial, a cable car up and a toboggan down. Tickets are available 1–10 days ahead.", "慕田峪：人更少、商业化适度，可以坐缆车上山、坐滑道下山。提前 1–10 天都有票。") },
      { q: t2("Can I tap my foreign credit card on the Beijing metro?", "北京地铁能拍外国信用卡吗？"), a: t2("Yes on the Capital Airport Express and Daxing Airport Express gates. Elsewhere, the Alipay metro QR code is the easiest option.", "首都机场线和大兴机场线的闸机可以。其他线路使用支付宝地铁乘车码最方便。") },
    ],
  },

  /* ------------------------------------------------------------------ SHANGHAI */
  {
    id: "shanghai",
    name: t2("Shanghai", "上海"),
    zh: "上海",
    province: t2("Shanghai Municipality", "上海市"),
    image: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=1400&q=80",
    summary: t2(
      "China's most international city: the Bund skyline, French Concession streets and great food. Two airports, tap-card metro and easy day trips to Suzhou and Hangzhou.",
      "中国最国际化的城市：外滩天际线、法租界街道和美食。两座机场、可拍卡的地铁，以及去苏州和杭州的轻松一日游。"
    ),
    seoTitle: t2(
      "Shanghai First-Timer Survival Guide (2026): PVG vs SHA, Metro & Museums",
      "上海首访生存指南（2026）：浦东与虹桥机场、地铁与博物馆"
    ),
    bestTime: t2("Mar–May, Oct–Nov", "3–5 月、10–11 月"),
    days: t2("3 days", "3 天"),
    budget: t2("¥600–1,000 / day", "每天 ¥600–1,000"),
    difficulty: 1,
    tapCardOnMetro: true,
    airports: [
      {
        code: "PVG",
        name: t2("Shanghai Pudong International Airport", "上海浦东国际机场"),
        distance: t2("About 45 km (45–60 min)", "约 45 公里（45–60 分钟）"),
        transfer: t2(
          "① Airport Link Line: only 40 minutes direct to the Hongqiao hub. ② Maglev + Metro Line 2: 300 km/h, 8 minutes to Longyang Road, then the metro to the Bund / People's Square (¥40 with a same-day air ticket, 20% off; the gates accept a foreign Visa/Mastercard tapped directly). ③ Didi/taxi to the Bund: about ¥160–200 by day, about ¥220 at night (+30%).",
          "① 市域机场联络线：仅 40 分钟直达上海虹桥枢纽。② 磁悬浮 + 地铁 2 号线：时速 300 公里，8 分钟到龙阳路，再换地铁去外滩/人民广场（凭当天机票八折仅 ¥40；闸机直接支持拍境外 Visa/Mastercard 卡）。③ 滴滴/出租车到外滩：白天约 ¥160–200，夜间加收 30% 约 ¥220。"
        ),
        trap: t2(
          "Help desk: the Foreigners' One-Stop Service Center faces the T1 and T2 international arrivals exits — staffed 24 hours, free help linking Alipay, China Unicom/China Mobile SIM cards, small change and transport cards. Connection trap: check whether your next domestic flight leaves from PVG (Pudong) or SHA (Hongqiao) — they are 60 km apart. The metro used to take 90 minutes; take the new Airport Link Line.",
          "求助柜台：外籍人员一站式综合服务中心就在 T1 和 T2 国际到达出口正对面——24 小时有人免费帮忙绑支付宝、办中国联通/移动电话卡、换零钱、领交通卡。转机大坑：看清下一程国内航班是从 PVG（浦东）还是 SHA（虹桥）出发——两机场相距 60 公里。以前坐地铁要 90 分钟，现在务必坐新建的市域机场线。"
        ),
      },
      {
        code: "SHA",
        name: t2("Shanghai Hongqiao International Airport", "上海虹桥国际机场"),
        distance: t2("Only 13 km (25 min)", "仅 13 公里（25 分钟）"),
        transfer: t2(
          "Metro Line 2 / Line 10 direct to Jing'an Temple, Xintiandi and East Nanjing Road; taxi to the center only ¥45–70. Mainly flights to Japan/Korea (Haneda/Gimpo) and Hong Kong, Macau and Taiwan.",
          "地铁 2 号线/10 号线直达静安寺、新天地、南京东路；打车进市中心仅 ¥45–70。主要飞日韩（羽田/金浦）及港澳台航线。"
        ),
        trap: t2(
          "The terminals are far apart: T1 (international and Spring Airlines) and T2 (major domestic airlines and Hongqiao railway station) are on opposite sides of the runway. Going to the wrong one by taxi costs a 20-minute detour — one stop on Metro Line 10 is fastest.",
          "航站楼相隔甚远：T1（国际及春秋航空）与 T2（国内主流航司及虹桥高铁站）之间隔着整条跑道。打车走错航站楼绕一圈要 20 分钟——坐地铁 10 号线一站最快。"
        ),
      },
    ],
    neighborhoods: [
      { name: t2("The Bund / People's Square", "外滩 / 人民广场"), zh: "外滩", goodFor: t2("First-timers: skyline views, East Nanjing Road, Metro Lines 1/2/10.", "首次来访者：天际线景观、南京东路，地铁 1/2/10 号线。") },
      { name: t2("Former French Concession / Jing'an", "原法租界 / 静安"), zh: "静安", goodFor: t2("Tree-lined streets, cafés, boutique hotels, Wukang Road and Anfu Road.", "梧桐街道、咖啡馆、精品酒店、武康路和安福路。") },
      { name: t2("Lujiazui (Pudong)", "陆家嘴（浦东）"), zh: "陆家嘴", goodFor: t2("High-rise hotels with Bund views, closer to PVG and Disneyland.", "可看外滩景观的高层酒店，离浦东机场和迪士尼更近。") },
    ],
    attractions: [
      {
        name: t2("Shanghai Museum East", "上海博物馆东馆"),
        zh: "上海博物馆东馆",
        ticket: t2("Free", "免费"),
        booking: t2(
          "Opens 7 days ahead at 12:00 (walk-in entry with a passport is now widely allowed, except special exhibitions). The Pudong East branch closes on Tuesdays; the People's Square branch closes on Mondays.",
          "提前 7 天中午 12:00 放票（近期已大幅放开免预约、现场凭护照入馆，特展除外）。浦东东馆周二闭馆；人民广场馆周一闭馆。"
        ),
        time: t2("2–3 h", "2–3 小时"),
        tip: t2("World-class bronze and ceramics collections. Very friendly to foreign passports — use the overseas visitors' lane to verify your passport.", "青铜器与陶瓷馆藏世界顶级。对外国护照非常友好——可走境外观众通道核验护照。"),
      },
      { name: t2("The Bund", "外滩"), zh: "外滩", ticket: t2("Free", "免费"), booking: t2("No booking needed.", "无需预约。"), time: t2("1–2 h", "1–2 小时"), tip: t2("Best after 6:30 PM when the skyline lights up (lights off around 10 PM).", "晚上 6:30 后天际线亮灯时最佳（约 10 点熄灯）。") },
      { name: t2("Yu Garden", "豫园"), zh: "豫园", ticket: t2("¥40", "¥40"), booking: t2("Buy at the gate or online on the day.", "当天现场或网上购票。"), time: t2("1.5 h", "1.5 小时"), tip: t2("Go at opening (9 AM) to avoid crowds.", "开门时（上午 9 点）去，避开人群。") },
      { name: t2("Former French Concession", "原法租界"), zh: "武康路 · 安福路", ticket: t2("Free", "免费"), booking: t2("No booking needed.", "无需预约。"), time: t2("Half day", "半天"), tip: t2("Walk or ride a shared bike along Wukang Road → Anfu Road for cafés and shops.", "步行或骑共享单车沿武康路 → 安福路逛咖啡馆和小店。") },
      { name: t2("Shanghai Tower Observatory", "上海中心大厦观光厅"), zh: "上海中心大厦", ticket: t2("¥180", "¥180"), booking: t2("Buy online or at the gate on the day.", "当天网上或现场购票。"), time: t2("1 h", "1 小时"), tip: t2("Go at sunset for day and night views.", "日落时去，日景夜景都能看到。") },
      { name: t2("Zhujiajiao Water Town", "朱家角古镇"), zh: "朱家角古镇", ticket: t2("Free (boat ¥80)", "免费（游船 ¥80）"), booking: t2("No booking needed.", "无需预约。"), time: t2("Half day", "半天"), tip: t2("Metro Line 17, about 1 h from downtown.", "地铁 17 号线，距市中心约 1 小时。") },
    ],
    food: [
      { name: t2("Soup Dumplings", "小笼包"), zh: "小笼包", pinyin: "Xiǎolóngbāo", price: "¥20–50", note: t2("Bite a small hole and sip the soup first. Served with ginger and black vinegar.", "先咬一个小口喝汤。配姜丝和香醋。") },
      { name: t2("Pan-fried Buns", "生煎包"), zh: "生煎包", pinyin: "Shēngjiānbāo", price: "¥15–25", note: t2("Crispy bottom, juicy pork filling — the soup is very hot.", "底部酥脆，猪肉馅多汁——汤汁很烫。") },
      { name: t2("Scallion Oil Noodles", "葱油拌面"), zh: "葱油拌面", pinyin: "Cōngyóu bànmiàn", price: "¥15–25", note: t2("A simple local classic.", "简单的本地经典。") },
    ],
    gettingAround: [
      t2("The metro is the fastest way around. You can tap a foreign Visa/Mastercard at the gates, or use the Shanghai Metro code in Alipay → Transport.", "地铁是最快的出行方式。闸机可以直接拍境外 Visa/Mastercard，也可以使用支付宝 → 出行里的上海地铁乘车码。"),
      t2("Suzhou (25 min) and Hangzhou (45 min) are easy day trips by high-speed train from Hongqiao.", "从虹桥坐高铁去苏州（25 分钟）和杭州（45 分钟）一日游很方便。"),
      t2("Taxis are plentiful and cheap; the starting fare is ¥16.", "出租车多且便宜，起步价 ¥16。"),
      t2("Sherpa's is an English-language food delivery app that accepts foreign cards in Shanghai.", "Sherpa's（食派士）是一款全英文外卖 App，在上海可用外卡付款。"),
      t2("Changing hotels? SF Intra-city or Shansong deliver your luggage between hotels in 2–4 hours (e.g. to a Disneyland hotel).", "要换酒店？顺丰同城或闪送可在 2–4 小时内把行李送到新酒店（例如送到迪士尼旁的酒店）。"),
      t2("You can get a temporary Chinese driving license at the vehicle office window next to the foreigner service station in Pudong T1/T2.", "可在浦东机场 T1/T2 境外人员服务站旁的车管窗口办理中国临时驾驶证。"),
    ],
    transit240: t2(
      "Shanghai: the whole of Shanghai Municipality. Entry/exit ports: Pudong (PVG), Hongqiao (SHA) and the Shanghai seaport (Wusongkou International Cruise Terminal / International Passenger Terminal). Neighboring Jiangsu (Suzhou, Nanjing) and Zhejiang (Hangzhou, Wuzhen) also allow the whole province.",
      "上海：上海市全域。适用出入境口岸：浦东（PVG）、虹桥（SHA）和上海海港口岸（吴淞口国际邮轮港/国客中心）。相邻的江苏（苏州、南京）和浙江（杭州、乌镇）也是全省可活动。"
    ),
    nearby: t2("Suzhou (25 min), Hangzhou (45 min), Nanjing (1 h)", "苏州（25 分钟）、杭州（45 分钟）、南京（1 小时）"),
    faq: [
      { q: t2("How do I get from Pudong airport to the city?", "怎么从浦东机场进城？"), a: t2("Maglev to Longyang Road (8 min, ¥40 with a same-day air ticket, tap your foreign card) then Metro Line 2; or a taxi for about ¥160–200 (about ¥220 at night).", "坐磁悬浮到龙阳路（8 分钟，凭当天机票 ¥40，可拍外卡），再换乘地铁 2 号线；或打车约 ¥160–200（夜间约 ¥220）。") },
      { q: t2("How do I get between PVG and SHA?", "浦东和虹桥机场之间怎么走？"), a: t2("Take the Airport Link Line: about 40 minutes. The airports are 60 km apart, so always check the three-letter code on your connecting ticket.", "坐市域机场联络线：约 40 分钟。两机场相距 60 公里，务必核对联程机票上的三字代码。") },
      { q: t2("Can I pay the Shanghai metro with my Visa card?", "上海地铁能用 Visa 卡付款吗？"), a: t2("Yes, you can tap a foreign Visa/Mastercard at the gates, including the Maglev. The Alipay metro code also works.", "可以，闸机（包括磁悬浮）支持直接拍境外 Visa/Mastercard。支付宝地铁乘车码也可以用。") },
      { q: t2("Which day is the Shanghai Museum closed?", "上海博物馆哪天闭馆？"), a: t2("The Pudong East branch is closed on Tuesdays and the People's Square branch on Mondays. Entry is free; most visitors can now walk in with a passport (special exhibitions excepted).", "浦东东馆周二闭馆，人民广场馆周一闭馆。免费入场；现在大多数观众可凭护照直接入馆（特展除外）。") },
    ],
  },

  /* ------------------------------------------------------------------ XI'AN */
  {
    id: "xian",
    name: t2("Xi'an", "西安"),
    zh: "西安",
    province: t2("Shaanxi", "陕西"),
    image: "https://images.unsplash.com/photo-1523946963389-207478f6cb2e?auto=format&fit=crop&w=1400&q=80",
    summary: t2(
      "Ancient capital and start of the Silk Road: the Terracotta Army, a complete city wall you can cycle, and amazing noodles. Book the history museum 5 days ahead.",
      "古都和丝绸之路起点：兵马俑、可以骑行的完整城墙和美味的面食。历史博物馆需提前 5 天预约。"
    ),
    seoTitle: t2(
      "Xi'an First-Timer Survival Guide (2026): Terracotta Army Tickets, Airport & Metro",
      "西安首访生存指南（2026）：兵马俑门票、机场与地铁"
    ),
    bestTime: t2("Mar–May, Sep–Nov", "3–5 月、9–11 月"),
    days: t2("2–3 days", "2–3 天"),
    budget: t2("¥400–700 / day", "每天 ¥400–700"),
    difficulty: 2,
    tapCardOnMetro: false,
    airports: [
      {
        code: "XIY",
        name: t2("Xi'an Xianyang International Airport", "西安咸阳国际机场"),
        distance: t2("About 38 km (50 min)", "约 38 公里（50 分钟）"),
        transfer: t2(
          "Metro Line 14, then change to Line 2 / Line 4 for the Bell Tower, Big Wild Goose Pagoda and Datang Everbright City. Taxi to inside the city wall about ¥100–130.",
          "地铁 14 号线换乘 2 号线/4 号线，直达钟楼、大雁塔、大唐不夜城。打车进城墙内约 ¥100–130。"
        ),
        trap: t2(
          "The new T5 terminal greatly improves international arrivals (it even has a real museum of artifacts inside). If you stay inside the city wall or near the South Gate, expect traffic jams at rush hour.",
          "T5 航站楼启用后国际航班体验大幅升级（航站楼里甚至有一座真正的文物博物馆）。住西安城墙内或南门附近需留意早晚高峰堵车。"
        ),
      },
    ],
    neighborhoods: [
      { name: t2("Bell Tower / inside the City Wall", "钟楼 / 城墙内"), zh: "钟楼", goodFor: t2("First-timers: walk to the Muslim Quarter and City Wall, Metro Line 2.", "首次来访者：步行可达回民街和城墙，地铁 2 号线。") },
      { name: t2("South Gate (Yongningmen)", "南门（永宁门）"), zh: "南门", goodFor: t2("Bike rental on the wall, Shuyuanmen calligraphy street, quieter evenings.", "城墙上租自行车、书院门书法街，夜晚更安静。") },
      { name: t2("Big Wild Goose Pagoda / Qujiang", "大雁塔 / 曲江"), zh: "大雁塔", goodFor: t2("Newer hotels, Datang Everbright City night walk, Shaanxi History Museum nearby.", "较新的酒店、大唐不夜城夜游，靠近陕西历史博物馆。") },
    ],
    attractions: [
      {
        name: t2("Terracotta Army (Emperor Qinshihuang's Mausoleum Site Museum)", "秦始皇兵马俑博物馆"),
        zh: "秦始皇兵马俑博物馆",
        ticket: t2("¥120 (includes the Lishan Garden shuttle)", "¥120（已含丽山园摆渡车）"),
        booking: t2("Book 1–7 days ahead (in peak season at least 3 days ahead). Open all year.", "提前 1–7 天预订（旺季务必提前 3 天以上）。全年开放。"),
        time: t2("3–4 h", "3–4 小时"),
        tip: t2(
          "Bus 306 from Xi'an Railway Station. Ignore unofficial guides on the Lintong roadside who take you to fake “replica Terracotta Warrior” wax museums — go only to the official museum main gate. Hire an official guide at the entrance (~¥150).",
          "从西安火车站坐 306 路公交。别听临潼路边野导游忽悠去假的“人造兵马俑蜡像馆”——认准官方博物院正门。可在入口请官方讲解员（约 ¥150）。"
        ),
      },
      {
        name: t2("Shaanxi History Museum", "陕西历史博物馆"),
        zh: "陕西历史博物馆",
        ticket: t2("Free", "免费"),
        booking: t2("Opens 5 days ahead at 17:00. Main museum closed Mondays; the Qin & Han branch closed Tuesdays.", "提前 5 天 17:00 放票。本馆每周一闭馆；秦汉馆每周二闭馆。"),
        time: t2("2–3 h", "2–3 小时"),
        tip: t2(
          "The main museum is the hardest museum ticket in China. If you miss it, take a taxi to the new Shaanxi History Museum Qin & Han branch — huge and much friendlier to foreign passports.",
          "本馆是中国最难抢的博物馆。抢不到本馆免费票的话，直接打车去新建的陕历博秦汉馆——空间巨大，对外国护照友好得多。"
        ),
      },
      { name: t2("City Wall bike ride", "城墙骑行"), zh: "西安城墙", ticket: t2("¥54 + bike ¥45", "¥54 + 自行车 ¥45"), booking: t2("Buy at the gate or online on the day.", "当天现场或网上购票。"), time: t2("2 h", "2 小时"), tip: t2("Start around 4:30 PM to ride into the sunset. 13.7 km loop.", "下午 4:30 左右出发，骑进日落。一圈 13.7 公里。") },
      { name: t2("Muslim Quarter", "回民街"), zh: "回民街", ticket: t2("Free", "免费"), booking: t2("No booking needed.", "无需预约。"), time: t2("2 h", "2 小时"), tip: t2("Sajinqiao (洒金桥) nearby is more local and cheaper.", "附近的洒金桥更地道、更便宜。") },
      { name: t2("Big Wild Goose Pagoda", "大雁塔"), zh: "大雁塔", ticket: t2("¥40 (climb)", "¥40（登塔）"), booking: t2("Buy at the gate on the day.", "当天现场购票。"), time: t2("1.5 h", "1.5 小时"), tip: t2("Fountain show in the north square in the evening, then walk Datang Everbright City.", "晚上北广场有音乐喷泉，之后可逛大唐不夜城。") },
    ],
    food: [
      { name: t2("Biangbiang / Chili-oil Noodles", "油泼面"), zh: "油泼面", pinyin: "Yóupō miàn", price: "¥15–25", note: t2("Wide hand-pulled noodles with sizzling chili oil and garlic.", "宽手擀面浇上滚烫的辣椒油和蒜。") },
      { name: t2("Roujiamo (Chinese burger)", "肉夹馍"), zh: "肉夹馍", pinyin: "Ròujiāmó", price: "¥10–20", note: t2("Flatbread filled with braised pork or beef.", "夹着卤猪肉或牛肉的饼。") },
      { name: t2("Liangpi cold noodles", "凉皮"), zh: "凉皮", pinyin: "Liángpí", price: "¥10–15", note: t2("Refreshing, a bit spicy.", "清爽，微辣。") },
    ],
    gettingAround: [
      t2("Metro Line 2 crosses the old city north–south. Pay with the Alipay metro QR code.", "地铁 2 号线南北穿过老城。用支付宝地铁乘车码付款。"),
      t2("High-speed trains leave from Xi'an North Station (not Xi'an Station) — check your ticket.", "高铁从西安北站（不是西安站）出发——请核对车票。"),
      t2("Didi is cheap; most rides inside the wall cost ¥10–20.", "滴滴很便宜；城墙内大多数行程 ¥10–20。"),
      t2("In July–August Xi'an often reaches 37–41°C — plan outdoor sights for early morning.", "7–8 月西安气温常达 37–41°C——户外景点请安排在清晨。"),
    ],
    transit240: t2(
      "Shaanxi: the whole province (including the Terracotta Army, Mount Hua and Yan'an). Entry/exit port: Xi'an Xianyang (XIY).",
      "陕西：全省（含兵马俑、华山、延安）。适用出入境口岸：西安咸阳国际机场（XIY）。"
    ),
    nearby: t2("Mount Hua (30 min by train), Chengdu (3.5 h), Beijing (4.5 h)", "华山（火车 30 分钟）、成都（3.5 小时）、北京（4.5 小时）"),
    faq: [
      { q: t2("How far ahead should I book the Terracotta Army?", "兵马俑需要提前多久订票？"), a: t2("Tickets can be booked 1–7 days ahead; in peak season book at least 3 days ahead. The ¥120 ticket includes the Lishan Garden shuttle.", "可提前 1–7 天预订；旺季至少提前 3 天。¥120 门票已包含丽山园摆渡车。") },
      { q: t2("I couldn't get Shaanxi History Museum tickets. What now?", "抢不到陕西历史博物馆的票怎么办？"), a: t2("Tickets open 5 days ahead at 17:00 and go fast. Go to the new Qin & Han branch instead (closed Tuesdays) — it is large and easier for foreign passports.", "门票提前 5 天 17:00 放票，很快抢光。改去新建的秦汉馆（周二闭馆）——空间大，外国护照更容易入馆。") },
      { q: t2("How do I avoid the fake Terracotta museums?", "怎么避开假兵马俑馆？"), a: t2("Ignore roadside guides in Lintong and go only to the official museum main gate.", "别理会临潼路边的野导游，只认准官方博物院正门。") },
      { q: t2("Can I visit Mount Hua on 240-hour transit?", "240 小时过境免签可以去华山吗？"), a: t2("Yes. The whole of Shaanxi province is allowed, including Mount Hua and Yan'an.", "可以。陕西全省均可活动，包括华山和延安。") },
    ],
  },

  /* ------------------------------------------------------------------ CHENGDU */
  {
    id: "chengdu",
    name: t2("Chengdu", "成都"),
    zh: "成都",
    province: t2("Sichuan", "四川"),
    image: "https://images.unsplash.com/photo-1729862564072-a7b749321b90?auto=format&fit=crop&w=1400&q=80",
    summary: t2(
      "Giant pandas, teahouses and spicy Sichuan food. Watch the two-airport trap (TFU vs CTU) and the 240-hour rule: only 11 Sichuan cities — no Jiuzhaigou.",
      "大熊猫、茶馆和麻辣川菜。注意双机场陷阱（天府 TFU 与双流 CTU）和 240 小时规则：四川仅限 11 个市——不能去九寨沟。"
    ),
    seoTitle: t2(
      "Chengdu First-Timer Survival Guide (2026): TFU vs CTU Airport, Pandas & 240h Rules",
      "成都首访生存指南（2026）：天府与双流机场、大熊猫与 240 小时规则"
    ),
    bestTime: t2("Mar–Jun, Sep–Nov", "3–6 月、9–11 月"),
    days: t2("3 days", "3 天"),
    budget: t2("¥400–700 / day", "每天 ¥400–700"),
    difficulty: 2,
    tapCardOnMetro: false,
    airports: [
      {
        code: "TFU",
        name: t2("Chengdu Tianfu International Airport", "成都天府国际机场"),
        distance: t2("Far: about 60 km (50–70 min)", "很远：约 60 公里（50–70 分钟）"),
        transfer: t2(
          "① Metro Line 18 Express: check the platform screen and take the “Express” (直快) train, which skips stops — 35–40 minutes to the South Railway Station, then Line 1 to Chunxi Road. ② High-speed train from under the terminal: 26 minutes to Chengdu East Station. ③ Taxi to Chunxi Road about ¥150–200 (including highway tolls).",
          "① 地铁 18 号线直快列车：看准站台屏幕选“直快车”，中间不站站停——35–40 分钟直达火车南站，换 1 号线去春熙路。② 天府机场站高铁：航站楼地下直接坐高铁 26 分钟到成都东站。③ 打车去春熙路约 ¥150–200（含高速过路费）。"
        ),
        trap: t2(
          "The biggest Chengdu trap: all international and Hong Kong/Macau/Taiwan flights land at the distant Tianfu Airport (TFU), while the old Shuangliu Airport (CTU) next to the city only serves domestic routes. The two airports are almost 70 km apart — check the three-letter code when connecting.",
          "成都双机场头号大坑：所有国际/港澳台航班全部降落在很远的天府机场（TFU），而市区边上的老双流机场（CTU）只飞国内航线。两机场相距近 70 公里——转机千万看清三字代码。"
        ),
      },
      {
        code: "CTU",
        name: t2("Chengdu Shuangliu International Airport", "成都双流国际机场"),
        distance: t2("About 25 min from downtown", "距市中心约 25 分钟"),
        transfer: t2("Metro Line 10 (about 30 min) into the city.", "地铁 10 号线（约 30 分钟）进城。"),
        trap: t2("Domestic flights only. If you arrive from abroad you land at TFU, not here — allow about 70 km and plenty of time to change airports.", "只飞国内航线。从国外入境会降落在天府机场而不是这里——换机场请预留约 70 公里的路程和充足时间。"),
      },
    ],
    neighborhoods: [
      { name: t2("Chunxi Road / Taikoo Li", "春熙路 / 太古里"), zh: "春熙路", goodFor: t2("First-timers: shopping, food streets, Metro Lines 2/3, instant tax refund in Taikoo Li.", "首次来访者：购物、美食街，地铁 2/3 号线，太古里可即买即退。") },
      { name: t2("Kuanzhai Alley / People's Park", "宽窄巷子 / 人民公园"), zh: "宽窄巷子", goodFor: t2("Teahouses and old-style lanes, walkable, quieter at night.", "茶馆和老式街巷，适合步行，夜晚更安静。") },
      { name: t2("Wenshu Monastery", "文殊院"), zh: "文殊院", goodFor: t2("Local atmosphere, vegetarian food, closer to the Panda Base.", "本地氛围、素食，离熊猫基地更近。") },
    ],
    attractions: [
      {
        name: t2("Chengdu Research Base of Giant Panda Breeding", "成都大熊猫繁育研究基地"),
        zh: "成都大熊猫繁育研究基地",
        ticket: t2("¥55", "¥55"),
        booking: t2("Book up to 7 days ahead (plenty of tickets, but morning sessions get tight in peak season). Open all year.", "可提前 7 天预订（余票充足，但旺季早场紧俏）。全年开放。"),
        time: t2("3 h", "3 小时"),
        tip: t2(
          "Buy the morning session (07:30–12:00) and enter before 08:00 — head straight to the Moon / Star nursery houses. After 10:30, once it is above 26°C, the pandas go indoors to the air conditioning and sleep with their backs to visitors.",
          "必须买上午场（07:30–12:00），并在 08:00 前进园——直奔月亮产房/星星产房。上午 10:30 以后气温超过 26°C，大熊猫会全部回室内吹空调，背对游客睡觉。"
        ),
      },
      { name: t2("People's Park Heming Teahouse", "人民公园鹤鸣茶社"), zh: "人民公园鹤鸣茶社", ticket: t2("Tea ¥20–40", "茶 ¥20–40"), booking: t2("No booking needed.", "无需预约。"), time: t2("1–2 h", "1–2 小时"), tip: t2("Try ear cleaning — a local tradition.", "试试掏耳朵——当地传统。") },
      { name: t2("Kuanzhai Alley", "宽窄巷子"), zh: "宽窄巷子", ticket: t2("Free", "免费"), booking: t2("No booking needed.", "无需预约。"), time: t2("1.5 h", "1.5 小时"), tip: t2("Touristy but pretty; visit in the evening.", "游客多但很漂亮；傍晚去。") },
      { name: t2("Leshan Giant Buddha", "乐山大佛"), zh: "乐山大佛", ticket: t2("¥80", "¥80"), booking: t2("Book online a day or more ahead in peak season.", "旺季提前一天或以上网上预订。"), time: t2("Full day", "一整天"), tip: t2("About 1 h by train. Go early to avoid long queues on the stairs. Leshan is inside the 240-hour area.", "坐火车约 1 小时。早去以避开台阶上的长队。乐山在 240 小时允许区域内。") },
    ],
    food: [
      { name: t2("Split hotpot (mild)", "鸳鸯火锅（微辣）"), zh: "鸳鸯火锅（微辣）", pinyin: "Yuānyāng huǒguō (wēi là)", price: "¥100–150", note: t2("Order the split pot: half spicy, half mild.", "点鸳鸯锅：一半辣，一半不辣。") },
      { name: t2("Mapo Tofu", "麻婆豆腐"), zh: "麻婆豆腐", pinyin: "Mápó dòufu", price: "¥20–40", note: t2("Spicy and numbing.", "麻辣。") },
      { name: t2("Dan Dan Noodles", "担担面"), zh: "担担面", pinyin: "Dàndàn miàn", price: "¥12–20", note: t2("Small bowl, sesame and chili.", "小碗，芝麻和辣椒。") },
    ],
    gettingAround: [
      t2("Metro reaches the Panda Base area (Line 3, Panda Avenue station + short taxi). Pay with the Alipay metro QR code.", "地铁可到熊猫基地附近（3 号线熊猫大道站 + 短途打车）。用支付宝地铁乘车码付款。"),
      t2("Chongqing is only about 1 h by bullet train — a great add-on.", "坐高铁去重庆只要约 1 小时——非常适合顺路加游。"),
      t2("Say “bú là” (not spicy) or “wēi là” (mild) when ordering.", "点菜时说“不辣”或“微辣”。"),
      t2("Instant tax refund is available in Taikoo Li malls.", "太古里商场可办理即买即退。"),
    ],
    transit240: t2(
      "Sichuan: only 11 cities — Chengdu, Leshan (Giant Buddha / Mount Emei), Ya'an, Meishan, Deyang (Sanxingdui), Zigong, Luzhou, Suining, Neijiang, Yibin and Ziyang. Forbidden: Jiuzhaigou / Huanglong (Aba Prefecture), Daocheng Yading / Kangding (Garzê Prefecture), Xichang (Liangshan Prefecture) and Mianyang. Entry/exit ports: Tianfu (TFU) and Shuangliu (CTU).",
      "四川：仅限 11 个市——成都、乐山（乐山大佛/峨眉山）、雅安、眉山、德阳（三星堆）、自贡、泸州、遂宁、内江、宜宾、资阳。严禁前往：九寨沟/黄龙（属阿坝州）、稻城亚丁/康定（属甘孜州）、西昌（属凉山州）和绵阳。适用出入境口岸：天府（TFU）和双流（CTU）。"
    ),
    nearby: t2("Chongqing (1 h), Leshan (1 h), Jiuzhaigou (flight — not allowed on 240-hour transit)", "重庆（1 小时）、乐山（1 小时）、九寨沟（需坐飞机——240 小时过境免签不可前往）"),
    faq: [
      { q: t2("Will my international flight land at TFU or CTU?", "我的国际航班降落在天府还是双流？"), a: t2("All international and Hong Kong/Macau/Taiwan flights use Tianfu (TFU), about 60 km from downtown. Shuangliu (CTU) is domestic only, and the two are almost 70 km apart.", "所有国际和港澳台航班都使用天府机场（TFU），距市中心约 60 公里。双流机场（CTU）只飞国内，两地相距近 70 公里。") },
      { q: t2("What is the best time to see pandas?", "什么时候看大熊猫最好？"), a: t2("Buy the morning session (07:30–12:00) and enter before 08:00. After 10:30, when it gets above 26°C, the pandas go indoors and sleep.", "买上午场（07:30–12:00），08:00 前入园。10:30 以后气温超过 26°C，大熊猫会回室内睡觉。") },
      { q: t2("Can I visit Jiuzhaigou on 240-hour visa-free transit?", "240 小时过境免签可以去九寨沟吗？"), a: t2("No. Jiuzhaigou is in Aba Prefecture, outside the 11 allowed Sichuan cities. You need a regular tourist (L) visa — or swap it for Zhangjiajie, since all of Hunan is allowed.", "不可以。九寨沟属阿坝州，不在四川允许的 11 个市之内。你需要普通旅游（L）签证——或者换成张家界，因为湖南全省都可以去。") },
      { q: t2("What is the fastest way from TFU to the city?", "从天府机场进城最快的方式是什么？"), a: t2("Metro Line 18 Express train (35–40 min to the South Railway Station) or the high-speed train from the airport to Chengdu East (26 min).", "地铁 18 号线直快列车（35–40 分钟到火车南站），或从机场坐高铁到成都东站（26 分钟）。") },
    ],
  },

  /* ------------------------------------------------------------------ CHONGQING */
  {
    id: "chongqing",
    name: t2("Chongqing", "重庆"),
    zh: "重庆",
    province: t2("Chongqing Municipality", "重庆市"),
    image: "https://images.unsplash.com/photo-1600716051809-e997e11a5d52?auto=format&fit=crop&w=1400&q=80",
    summary: t2(
      "The “8D” mountain city: a monorail through a building, neon cliffside Hongyadong, river cableway and fiery hotpot. Cheap airport taxi; the whole city is allowed on 240h transit.",
      "“8D”山城：穿楼而过的轻轨、霓虹悬崖上的洪崖洞、长江索道和火辣的火锅。机场打车便宜；240 小时过境免签全市可去。"
    ),
    seoTitle: t2(
      "Chongqing First-Timer Survival Guide (2026): Airport, Hotpot & Getting Around the Mountain City",
      "重庆首访生存指南（2026）：机场、火锅与山城出行"
    ),
    bestTime: t2("Mar–May, Oct–Nov", "3–5 月、10–11 月"),
    days: t2("2–3 days", "2–3 天"),
    budget: t2("¥400–700 / day", "每天 ¥400–700"),
    difficulty: 2,
    tapCardOnMetro: false,
    airports: [
      {
        code: "CKG",
        name: t2("Chongqing Jiangbei International Airport", "重庆江北国际机场"),
        distance: t2("About 23 km (35–45 min)", "约 23 公里（35–45 分钟）"),
        transfer: t2(
          "Rail Line 10 (express train), then change to Line 6 / Line 1 for Jiefangbei and Hongyadong. A taxi to the Yuzhong peninsula is only ¥55–80 — very friendly.",
          "轨道交通 10 号线（快速车）转 6 号线/1 号线进解放碑、洪崖洞。打车进渝中半岛仅 ¥55–80，非常友好。"
        ),
        trap: t2(
          "T2 and T3A/T3B are not connected. When you set your Didi pickup point, choose the correct terminal (T3 or T2).",
          "T2 与 T3A/T3B 航站楼之间不相连。打滴滴定位上车点时必须选准自己在 T3 还是 T2。"
        ),
      },
    ],
    neighborhoods: [
      { name: t2("Jiefangbei", "解放碑"), zh: "解放碑", goodFor: t2("First-timers: walk to Hongyadong and the Yangtze cableway, lots of hotpot.", "首次来访者：步行可达洪崖洞和长江索道，火锅店众多。") },
      { name: t2("Chaotianmen / Raffles City", "朝天门 / 来福士"), zh: "朝天门", goodFor: t2("River-view hotels at the meeting of the Yangtze and Jialing rivers.", "位于长江和嘉陵江交汇处的江景酒店。") },
      { name: t2("Guanyinqiao (Jiangbei)", "观音桥（江北）"), zh: "观音桥", goodFor: t2("Shopping district, newer hotels, closer to the airport.", "商圈、较新的酒店，离机场更近。") },
    ],
    attractions: [
      { name: t2("Hongyadong", "洪崖洞"), zh: "洪崖洞", ticket: t2("Free", "免费"), booking: t2("No booking needed.", "无需预约。"), time: t2("1–2 h", "1–2 小时"), tip: t2("Stilt-house complex on the cliff, lit up after dark. View it from the Qiansimen Bridge.", "建在悬崖上的吊脚楼群，天黑后亮灯。从千厮门大桥上看最好。") },
      { name: t2("Liziba monorail station", "李子坝轻轨站"), zh: "李子坝轻轨站", ticket: t2("Free viewing deck (metro fare if you ride)", "观景台免费（乘车付地铁票）"), booking: t2("No booking needed.", "无需预约。"), time: t2("30 min", "30 分钟"), tip: t2("Line 2 trains pass straight through a residential building. Watch from the viewing platform below.", "2 号线列车直接穿过一栋居民楼。在下方观景台观看。") },
      { name: t2("Yangtze River Cableway", "长江索道"), zh: "长江索道", ticket: t2("About ¥20 one way / ¥30 return", "单程约 ¥20 / 往返约 ¥30"), booking: t2("Buy at the station; queues can exceed 1 h on holidays.", "在站点购票；节假日排队可能超过 1 小时。"), time: t2("1 h", "1 小时"), tip: t2("Go early morning or late evening to cut the queue.", "清晨或晚上去可以少排队。") },
      { name: t2("Raffles City skybridge & Chaotianmen", "来福士空中连廊与朝天门"), zh: "来福士", ticket: t2("Observation deck charged separately", "观景台另行收费"), booking: t2("Buy on the day.", "当天购票。"), time: t2("1–2 h", "1–2 小时"), tip: t2("Where the Yangtze and Jialing rivers meet.", "长江与嘉陵江在此交汇。") },
      { name: t2("Eling Park & Testbed 2 art district", "鹅岭公园与鹅岭二厂"), zh: "鹅岭二厂", ticket: t2("Free", "免费"), booking: t2("No booking needed.", "无需预约。"), time: t2("2 h", "2 小时"), tip: t2("Old factory turned creative park with hillside coffee shops.", "旧厂房改造的文创园区，有山坡咖啡馆。") },
    ],
    food: [
      { name: t2("Chongqing hotpot (mild)", "重庆火锅（微辣）"), zh: "重庆火锅（微辣）", pinyin: "Chóngqìng huǒguō (wēi là)", price: "¥80–150", note: t2("Beef-tallow broth, very spicy. Ask for a split pot or “wēi là”.", "牛油锅底，非常辣。可以要鸳鸯锅或“微辣”。") },
      { name: t2("Chongqing small noodles", "重庆小面"), zh: "重庆小面", pinyin: "Chóngqìng xiǎomiàn", price: "¥8–15", note: t2("The local breakfast: chili oil and Sichuan pepper.", "当地早餐：红油和花椒。") },
      { name: t2("Grilled fish", "烤鱼"), zh: "烤鱼", pinyin: "Kǎoyú", price: "¥100–160", note: t2("Whole fish grilled then stewed in spicy sauce.", "整条鱼先烤后在麻辣汤汁中炖煮。") },
    ],
    gettingAround: [
      t2("Maps are tricky: buildings have entrances on several “ground” floors. Use the metro (Alipay QR code) and Didi rather than walking long distances.", "地图很难看懂：一栋楼会有好几层“地面”入口。尽量坐地铁（支付宝乘车码）和滴滴，不要长距离步行。"),
      t2("Chengdu is about 1 h 15 min away by high-speed train.", "坐高铁去成都约 1 小时 15 分钟。"),
      t2("Summer (Jul–Aug) is often 37–41°C — go in spring or autumn.", "夏季（7–8 月）常达 37–41°C——建议春秋季去。"),
      t2("Instant tax refund is available in major malls.", "主要商场可办理即买即退。"),
    ],
    transit240: t2(
      "Chongqing: the whole of Chongqing Municipality. Entry/exit port: Chongqing Jiangbei (CKG). You can combine it with Chengdu (only 11 Sichuan cities allowed).",
      "重庆：重庆市全域。适用出入境口岸：重庆江北国际机场（CKG）。可以与成都组合游（四川只允许 11 个市）。"
    ),
    nearby: t2("Chengdu (1 h 15 min), Wulong Karst (2.5 h by road), Dazu Rock Carvings (1.5 h)", "成都（1 小时 15 分钟）、武隆喀斯特（驾车 2.5 小时）、大足石刻（1.5 小时）"),
    faq: [
      { q: t2("How much is a taxi from CKG to downtown?", "从江北机场打车到市区多少钱？"), a: t2("About ¥55–80 to the Yuzhong peninsula (Jiefangbei / Hongyadong), 35–45 minutes.", "到渝中半岛（解放碑/洪崖洞）约 ¥55–80，35–45 分钟。") },
      { q: t2("Is Chongqing hotpot too spicy?", "重庆火锅会不会太辣？"), a: t2("It can be. Order a split pot (鸳鸯锅) or ask for “wēi là” (mild).", "有可能。点鸳鸯锅或要求“微辣”。") },
      { q: t2("Can I go to Chongqing on 240-hour transit?", "240 小时过境免签可以去重庆吗？"), a: t2("Yes, the whole municipality is allowed, and you can enter or leave via CKG.", "可以，重庆市全域均可活动，可经江北机场出入境。") },
      { q: t2("What is the airport trap at CKG?", "江北机场有什么坑？"), a: t2("T2 and T3 are not connected — choose the right terminal when booking Didi.", "T2 与 T3 不相连——叫滴滴时要选对航站楼。") },
    ],
  },

  /* ------------------------------------------------------------------ GUILIN */
  {
    id: "guilin",
    name: t2("Guilin & Yangshuo", "桂林 · 阳朔"),
    zh: "桂林 · 阳朔",
    province: t2("Guangxi", "广西"),
    image: "https://images.unsplash.com/photo-1537531383496-f4749b8032cf?auto=format&fit=crop&w=1400&q=80",
    summary: t2(
      "China's most famous landscapes: karst peaks, the Li River cruise, bamboo rafts and rice terraces. Carry cash — raft operators often only take personal QR codes.",
      "中国最著名的山水：喀斯特峰林、漓江游船、竹筏和梯田。请带现金——竹筏经营者往往只收个人收款码。"
    ),
    seoTitle: t2(
      "Guilin & Yangshuo First-Timer Guide (2026): Li River, Bamboo Rafts & Airport Transfer",
      "桂林阳朔首访指南（2026）：漓江、竹筏与机场交通"
    ),
    bestTime: t2("Apr–Oct", "4–10 月"),
    days: t2("3–4 days", "3–4 天"),
    budget: t2("¥350–600 / day", "每天 ¥350–600"),
    difficulty: 2,
    tapCardOnMetro: false,
    airports: [
      {
        code: "KWL",
        name: t2("Guilin Liangjiang International Airport", "桂林两江国际机场"),
        distance: t2("About 28 km", "约 28 公里"),
        transfer: t2("Shuttle bus to Guilin city (40 min, ¥20). Bus to Yangshuo about 90 minutes.", "机场大巴到桂林市区（40 分钟，¥20）。去阳朔的大巴约 90 分钟。"),
        trap: t2(
          "Many direct flights from Korea and Southeast Asia. For travelers from Europe or America, connecting via Seoul or Hong Kong straight to Guilin often saves time compared with a domestic connection.",
          "韩国、东南亚有大量直飞桂林的航班。欧美游客从首尔或香港转机直飞桂林，往往比国内中转更省时间。"
        ),
      },
    ],
    neighborhoods: [
      { name: t2("Yangshuo West Street area", "阳朔西街一带"), zh: "阳朔西街", goodFor: t2("Bars, cafés, easy transport; noisy at night.", "酒吧、咖啡馆，交通方便；夜间较吵。") },
      { name: t2("Yulong River countryside", "遇龙河乡村"), zh: "遇龙河", goodFor: t2("Quiet riverside guesthouses among karst peaks, best for cycling and rafts.", "峰林间安静的河边民宿，最适合骑行和竹筏。") },
      { name: t2("Guilin city center (Two Rivers & Four Lakes)", "桂林市中心（两江四湖）"), zh: "两江四湖", goodFor: t2("Close to the Li River cruise pier transfer and the train stations.", "靠近漓江游船码头接驳和火车站。") },
    ],
    attractions: [
      { name: t2("Li River cruise", "漓江游船"), zh: "漓江游船", ticket: t2("¥215–450", "¥215–450"), booking: t2("Book at least a day ahead on Trip.com.", "至少提前一天在 Trip.com 预订。"), time: t2("4–5 h", "4–5 小时"), tip: t2("Guilin → Yangshuo, downstream.", "桂林 → 阳朔，顺流而下。") },
      { name: t2("Yulong River bamboo raft", "遇龙河竹筏"), zh: "遇龙河竹筏", ticket: t2("¥200 / raft", "¥200 / 筏"), booking: t2("Book the day before or at the pier.", "前一天预订或在码头购买。"), time: t2("1.5 h", "1.5 小时"), tip: t2("Quieter than the Li River; go in the morning. Raft operators often show a personal WeChat QR code, which foreign-card Alipay/WeChat cannot pay — carry ¥300–500 cash.", "比漓江安静；上午去。竹筏经营者常出示个人微信收款码，绑定外卡的支付宝/微信无法支付——请带 ¥300–500 现金。") },
      { name: t2("Longji Rice Terraces", "龙脊梯田"), zh: "龙脊梯田", ticket: t2("¥80", "¥80"), booking: t2("Buy at the gate.", "现场购票。"), time: t2("Full day", "一整天"), tip: t2("Best in May–June (water-filled) and Sep–Oct (golden).", "5–6 月（灌水期）和 9–10 月（金黄期）最佳。") },
      { name: t2("Xianggong Hill sunrise", "相公山日出"), zh: "相公山", ticket: t2("¥40", "¥40"), booking: t2("Buy at the gate.", "现场购票。"), time: t2("2 h", "2 小时"), tip: t2("The classic Li River viewpoint at sunrise.", "经典的漓江日出观景点。") },
      { name: t2("Ten-Mile Gallery cycling", "十里画廊骑行"), zh: "十里画廊", ticket: t2("Free (bike rental extra)", "免费（另付租车费）"), booking: t2("No booking needed.", "无需预约。"), time: t2("Half day", "半天"), tip: t2("Flat road through karst scenery — rent a shared bike or e-bike.", "穿行峰林景观的平坦道路——可租共享单车或电动车。") },
    ],
    food: [
      { name: t2("Guilin rice noodles", "桂林米粉"), zh: "桂林米粉", pinyin: "Guìlín mǐfěn", price: "¥8–15", note: t2("The local breakfast.", "当地早餐。") },
      { name: t2("Beer fish", "啤酒鱼"), zh: "啤酒鱼", pinyin: "Píjiǔ yú", price: "¥80–150", note: t2("Yangshuo specialty.", "阳朔特色菜。") },
    ],
    gettingAround: [
      t2("Rent an e-bike in Yangshuo (~¥50/day) to explore villages.", "在阳朔租电动车（约 ¥50/天）探访乡村。"),
      t2("Guilin North / West stations have bullet trains to Guangzhou (2.5 h) and Hong Kong (3 h).", "桂林北站/西站有高铁去广州（2.5 小时）和香港（3 小时）。"),
      t2("Carry small cash for rafts, snacks and drivers who use personal QR codes.", "为竹筏、小吃和使用个人收款码的司机准备零钱。"),
    ],
    transit240: t2(
      "Guangxi: only 12 cities — Guilin (including Yangshuo), Nanning, Beihai, Liuzhou, Wuzhou, Fangchenggang, Qinzhou, Guigang, Yulin, Hezhou, Hechi and Laibin. Forbidden: Chongzuo (the Detian cross-border waterfall is in Daxin County, Chongzuo) and Baise. Entry/exit ports: Nanning (NNG), Guilin (KWL), Beihai (BHY) and Beihai seaport.",
      "广西：仅限 12 个市——桂林（含阳朔）、南宁、北海、柳州、梧州、防城港、钦州、贵港、玉林、贺州、河池、来宾。严禁前往：崇左市（德天跨国瀑布在崇左大新县）和百色市。适用出入境口岸：南宁（NNG）、桂林（KWL）、北海（BHY）和北海海港口岸。"
    ),
    nearby: t2("Guangzhou (2.5 h), Hong Kong (3 h), Longsheng (2 h)", "广州（2.5 小时）、香港（3 小时）、龙胜（2 小时）"),
    faq: [
      { q: t2("Can I pay the bamboo raft with Alipay?", "竹筏可以用支付宝付款吗？"), a: t2("Often not: operators usually show a personal QR code, and Alipay/WeChat linked to a foreign card can only pay registered merchant codes. Carry ¥300–500 in cash.", "往往不行：经营者通常出示个人收款码，而绑定外卡的支付宝/微信只能向注册商户收款码付款。请带 ¥300–500 现金。") },
      { q: t2("Is Yangshuo allowed on 240-hour transit?", "240 小时过境免签可以去阳朔吗？"), a: t2("Yes. Guilin (including Yangshuo) is one of the 12 allowed Guangxi cities. Detian Waterfall (Chongzuo) and Baise are not allowed.", "可以。桂林（含阳朔）是广西允许的 12 个市之一。德天瀑布（崇左）和百色不可前往。") },
      { q: t2("How do I get from Guilin airport to Yangshuo?", "怎么从桂林机场去阳朔？"), a: t2("A direct bus takes about 90 minutes. The shuttle bus to Guilin city takes 40 minutes (¥20).", "直达大巴约 90 分钟。到桂林市区的机场大巴 40 分钟（¥20）。") },
      { q: t2("Is there visa-free entry to Guilin from Hong Kong?", "从香港可以免签入境桂林吗？"), a: t2("Yes, for groups: citizens of countries with diplomatic ties to China joining a registered Hong Kong or Macau travel agency tour (2 people or more) can enter Guilin visa-free for 144 hours (6 days).", "可以，限团队：与中国建交国家的公民参加香港或澳门合法注册旅行社组团（2 人起），可免签进入桂林停留 144 小时（6 天）。") },
    ],
  },

  /* ------------------------------------------------------------------ ZHANGJIAJIE */
  {
    id: "zhangjiajie",
    name: t2("Zhangjiajie", "张家界"),
    zh: "张家界",
    province: t2("Hunan", "湖南"),
    image: "https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?auto=format&fit=crop&w=1400&q=80",
    summary: t2(
      "The “Avatar” sandstone pillars of Wulingyuan and Tianmen Mountain's cliff cableway. Cable-car time slots sell out 3 days ahead; the whole of Hunan is allowed on 240h transit.",
      "武陵源的“阿凡达”砂岩峰林和天门山的悬崖索道。索道时段票提前 3 天售罄；240 小时过境免签湖南全省可去。"
    ),
    seoTitle: t2(
      "Zhangjiajie First-Timer Guide (2026): Tianmen Mountain Cable Car Lines, Tickets & Airport",
      "张家界首访指南（2026）：天门山索道线路、门票与机场"
    ),
    bestTime: t2("Apr–Jun, Sep–Nov", "4–6 月、9–11 月"),
    days: t2("3 days", "3 天"),
    budget: t2("¥450–800 / day", "每天 ¥450–800"),
    difficulty: 3,
    tapCardOnMetro: false,
    airports: [
      {
        code: "DYG",
        name: t2("Zhangjiajie Hehua International Airport", "张家界荷花国际机场"),
        distance: t2("About 6 km from the city", "距市区约 6 公里"),
        transfer: t2(
          "Taxi to the Tianmen Mountain cableway lower station only 15 minutes (about ¥20). Taxi to Wulingyuan (Zhangjiajie National Forest Park) about 45 minutes (about ¥90–110).",
          "打车到天门山索道下站只要 15 分钟（约 ¥20）。打车去武陵源（张家界国家森林公园）约 45 分钟（约 ¥90–110）。"
        ),
        trap: t2(
          "Many direct flights from Korea and Southeast Asia. Travelers from Europe or America often save time by connecting via Seoul or Hong Kong directly to Zhangjiajie instead of connecting domestically.",
          "韩国、东南亚有大量直飞张家界的航班。欧美游客从首尔或香港转机直飞张家界，往往比国内中转更省时间。"
        ),
      },
    ],
    neighborhoods: [
      { name: t2("Wulingyuan", "武陵源"), zh: "武陵源", goodFor: t2("Next to the National Forest Park gates — best for 2+ days of hiking.", "紧邻国家森林公园入口——最适合 2 天以上的徒步。") },
      { name: t2("Zhangjiajie city center", "张家界市区"), zh: "张家界市区", goodFor: t2("Walk to the Tianmen Mountain cableway station; close to the airport and train station.", "步行可达天门山索道站；靠近机场和火车站。") },
    ],
    attractions: [
      {
        name: t2("Tianmen Mountain", "天门山"),
        zh: "天门山",
        ticket: t2("About ¥258–278 including cableway (varies by line)", "约 ¥258–278，含索道（因线路而异）"),
        booking: t2(
          "Book 3–7 days ahead and choose a cableway line and time slot (A/B/C lines). In peak season time slots sell out 3 days ahead. Open all year.",
          "提前 3–7 天预订，选择索道线路和时段（A/B/C 线）。旺季索道时段票提前 3 天就会售罄。全年开放。"
        ),
        time: t2("Full day", "一整天"),
        tip: t2(
          "Line A: cableway up, express cableway down. Line B: express cableway up, big cableway down. Lock in your ticket early.",
          "A 线：索道上、快线索道下。B 线：快线索道上、大索道下。一定要提前锁票。"
        ),
      },
      {
        name: t2("Zhangjiajie National Forest Park (Wulingyuan)", "张家界国家森林公园（武陵源）"),
        zh: "张家界国家森林公园",
        ticket: t2("About ¥225 (multi-day pass) + Bailong Elevator / cableways extra", "约 ¥225（多日通票）+ 百龙天梯/索道另付"),
        booking: t2("Book 3–7 days ahead and choose cableway time slots. Open all year.", "提前 3–7 天预订并选择索道时段。全年开放。"),
        time: t2("1–2 days", "1–2 天"),
        tip: t2("Yuanjiajie and Tianzi Mountain are the “Avatar” pillars. Start at opening to beat tour groups.", "袁家界和天子山就是“阿凡达”峰林。开门即进园以避开旅行团。"),
      },
      { name: t2("Fenghuang Ancient Town", "凤凰古城"), zh: "凤凰古城", ticket: t2("Free to enter town", "进古城免费"), booking: t2("No booking needed.", "无需预约。"), time: t2("1 day", "1 天"), tip: t2("About 1 h by bullet train. Stilt houses on the Tuojiang River at twilight. Inside the 240-hour area (all of Hunan).", "坐高铁约 1 小时。黄昏时沱江边的吊脚楼。在 240 小时允许区域内（湖南全省）。") },
    ],
    food: [
      { name: t2("Tujia smoked pork", "土家腊肉"), zh: "土家腊肉", pinyin: "Tǔjiā làròu", price: "¥40–80", note: t2("Smoked cured pork, often stir-fried with chili.", "烟熏腊肉，常与辣椒同炒。") },
      { name: t2("Three-pot stew", "三下锅"), zh: "三下锅", pinyin: "Sān xià guō", price: "¥60–120", note: t2("Local dry pot of mixed meats — spicy.", "当地干锅，多种肉类混炖——辣。") },
      { name: t2("Hunan rice noodles", "湖南米粉"), zh: "米粉", pinyin: "Mǐfěn", price: "¥10–15", note: t2("Cheap breakfast; ask for “bú là” if you don't want chili.", "便宜的早餐；不吃辣请说“不辣”。") },
    ],
    gettingAround: [
      t2("There is no metro. Use Didi or taxis between the city, Tianmen Mountain and Wulingyuan.", "这里没有地铁。市区、天门山和武陵源之间请用滴滴或出租车。"),
      t2("Don't haul a big suitcase up the mountain: have your hotel call SF Express to ship it to your next city's hotel (a 20 kg case costs ¥50–90 by land).", "别拖着大箱子上山：让酒店叫顺丰速运把箱子寄到下一座城市的酒店（20 公斤大箱子陆运 ¥50–90）。"),
      t2("Expect many stairs and long walks — good shoes and rain gear.", "台阶多、步行距离长——请穿好鞋并带雨具。"),
    ],
    transit240: t2(
      "Hunan: the whole province (including Changsha, Zhangjiajie and Fenghuang Ancient Town). Entry/exit ports: Changsha Huanghua (CSX) and Zhangjiajie Hehua (DYG).",
      "湖南：全省（含长沙、张家界、凤凰古城）。适用出入境口岸：长沙黄花国际机场（CSX）和张家界荷花国际机场（DYG）。"
    ),
    nearby: t2("Fenghuang (1 h by train), Changsha (3.5 h), Chongqing (flight)", "凤凰（火车 1 小时）、长沙（3.5 小时）、重庆（坐飞机）"),
    faq: [
      { q: t2("Which Tianmen Mountain line should I choose?", "天门山应该选哪条线？"), a: t2("Line A goes up by cableway and down by express cableway; Line B goes up by express cableway and down by the big cableway. Book 3–7 days ahead — peak slots sell out 3 days before.", "A 线索道上、快线索道下；B 线快线索道上、大索道下。提前 3–7 天预订——旺季时段提前 3 天售罄。") },
      { q: t2("How far is the airport from Tianmen Mountain?", "机场离天门山多远？"), a: t2("About 15 minutes by taxi (about ¥20). Wulingyuan is about 45 minutes (¥90–110).", "打车约 15 分钟（约 ¥20）。到武陵源约 45 分钟（¥90–110）。") },
      { q: t2("Can I visit Zhangjiajie on 240-hour transit?", "240 小时过境免签可以去张家界吗？"), a: t2("Yes. All of Hunan is allowed, and you can even enter or exit at Zhangjiajie airport (DYG).", "可以。湖南全省均可活动，甚至可以从张家界机场（DYG）出入境。") },
      { q: t2("How many days do I need?", "需要几天？"), a: t2("Three days: one for Tianmen Mountain and two for Wulingyuan; add a day for Fenghuang.", "三天：天门山一天，武陵源两天；凤凰再加一天。") },
    ],
  },

  /* ------------------------------------------------------------------ YUNNAN */
  {
    id: "yunnan",
    name: t2("Lijiang & Dali", "丽江 · 大理"),
    zh: "丽江 · 大理",
    province: t2("Yunnan", "云南"),
    image: "https://images.unsplash.com/photo-1677922069736-288fd584c916?auto=format&fit=crop&w=1400&q=80",
    summary: t2(
      "Old towns, snow mountains, Erhai Lake and minority cultures, with mild weather all year. On 240-hour transit Shangri-La is off-limits — only 9 Yunnan areas are allowed.",
      "古城、雪山、洱海和少数民族文化，全年气候温和。240 小时过境免签不能去香格里拉——云南只允许 9 个市州。"
    ),
    seoTitle: t2(
      "Lijiang & Dali First-Timer Guide (2026): Kunming Airport, Trains & 240h Transit Limits",
      "丽江大理首访指南（2026）：昆明机场、火车与 240 小时过境限制"
    ),
    bestTime: t2("Mar–May, Sep–Nov", "3–5 月、9–11 月"),
    days: t2("4–5 days", "4–5 天"),
    budget: t2("¥350–650 / day", "每天 ¥350–650"),
    difficulty: 2,
    tapCardOnMetro: false,
    airports: [
      {
        code: "KMG",
        name: t2("Kunming Changshui International Airport", "昆明长水国际机场"),
        distance: t2("About 26 km (35 min)", "约 26 公里（35 分钟）"),
        transfer: t2(
          "Metro Line 6, then Line 3 into the city; or taxi to Kunming Station / Kunming South and take the high-speed train: 2 h to Dali, 3.5 h to Lijiang.",
          "地铁 6 号线转 3 号线进市区；或者打车去昆明站/昆明南站直接坐高铁：2 小时到大理，3.5 小时到丽江。"
        ),
        trap: t2(
          "The cheapest gateway into southwest China from Southeast Asia (Bangkok, Kuala Lumpur, Singapore, Vientiane). Kunming is about 1,890 m above sea level — take it easy and don't run around on the first day.",
          "东南亚（曼谷、吉隆坡、新加坡、万象）飞进中国西南最便宜的大门。昆明海拔约 1,890 米——第一天别剧烈奔跑。"
        ),
      },
      {
        code: "LJG",
        name: t2("Lijiang Sanyi International Airport", "丽江三义国际机场"),
        distance: t2("About 30 km (40 min)", "约 30 公里（40 分钟）"),
        transfer: t2("Airport bus or taxi to Lijiang Old Town.", "机场大巴或出租车到丽江古城。"),
        trap: t2("A 240-hour transit entry/exit port. Lijiang is at about 2,400 m — nights are cold.", "240 小时过境免签适用出入境口岸。丽江海拔约 2,400 米——夜间寒冷。"),
      },
      {
        code: "Mohan",
        name: t2("Mohan railway port (China–Laos Railway)", "磨憨铁路口岸（中老铁路）"),
        distance: t2("Border with Laos", "中老边境"),
        transfer: t2("Cross-border China–Laos Railway trains enter and leave China here.", "中老铁路跨境列车在此入出境。"),
        trap: t2("A 240-hour transit entry/exit port — you can arrive by train from Laos.", "240 小时过境免签适用出入境口岸——可以从老挝坐火车入境。"),
      },
    ],
    neighborhoods: [
      { name: t2("Dali Old Town", "大理古城"), zh: "大理古城", goodFor: t2("Cafés, guesthouses, bike rental for Erhai Lake.", "咖啡馆、民宿，可租车环洱海。") },
      { name: t2("Xizhou (Dali)", "喜洲（大理）"), zh: "喜洲", goodFor: t2("Bai courtyards among rice fields, quieter than the old town.", "稻田间的白族院落，比古城安静。") },
      { name: t2("Lijiang Old Town / Baisha Village", "丽江古城 / 白沙古镇"), zh: "白沙古镇", goodFor: t2("Baisha is calm and faces Jade Dragon Snow Mountain; the old town is lively.", "白沙宁静，正对玉龙雪山；古城热闹。") },
    ],
    attractions: [
      { name: t2("Lijiang Old Town", "丽江古城"), zh: "丽江古城", ticket: t2("¥50 maintenance fee", "¥50 古城维护费"), booking: t2("No booking needed.", "无需预约。"), time: t2("Half day", "半天"), tip: t2("Early morning is quiet and beautiful.", "清晨安静又美丽。") },
      { name: t2("Jade Dragon Snow Mountain", "玉龙雪山"), zh: "玉龙雪山", ticket: t2("¥100 + cable car ¥120+", "¥100 + 索道 ¥120 起"), booking: t2("Book the cable car several days ahead.", "索道需提前几天预订。"), time: t2("Full day", "一整天"), tip: t2("Altitude 4,500 m at the top — go slowly.", "山顶海拔 4,500 米——慢慢走。") },
      { name: t2("Erhai Lake cycling", "洱海生态廊道骑行"), zh: "洱海生态廊道", ticket: t2("Free", "免费"), booking: t2("No booking needed.", "无需预约。"), time: t2("Half day", "半天"), tip: t2("Rent e-bikes in Dali Old Town or Xizhou.", "在大理古城或喜洲租电动车。") },
      { name: t2("Tiger Leaping Gorge", "虎跳峡"), zh: "虎跳峡", ticket: t2("¥45", "¥45"), booking: t2("Buy at the gate.", "现场购票。"), time: t2("1–2 days", "1–2 天"), tip: t2("The 2-day High Trail is one of China's best hikes. It lies in Lijiang (allowed), but the far side and Shangri-La are in Diqing (not allowed on 240-hour transit).", "两天的高路徒步是中国最好的徒步路线之一。虎跳峡在丽江境内（允许），但对岸及香格里拉属迪庆州（240 小时过境免签不可前往）。") },
    ],
    food: [
      { name: t2("Crossing-the-Bridge Noodles", "过桥米线"), zh: "过桥米线", pinyin: "Guòqiáo mǐxiàn", price: "¥25–50", note: t2("Hot broth — add the ingredients yourself.", "热汤——自己把配料放进去。") },
      { name: t2("Wild mushroom hotpot", "菌子火锅"), zh: "菌子火锅", pinyin: "Jùnzi huǒguō", price: "¥100–200", note: t2("Season: Jun–Sep. Cook fully!", "季节：6–9 月。一定要煮熟！") },
      { name: t2("Xizhou Baba", "喜洲粑粑"), zh: "喜洲粑粑", pinyin: "Xǐzhōu bāba", price: "¥5–10", note: t2("Crispy flatbread, sweet or savory.", "酥脆的饼，有甜有咸。") },
    ],
    gettingAround: [
      t2("Bullet trains connect Kunming, Dali and Lijiang (Kunming → Dali 2 h, Kunming → Lijiang 3.5 h).", "高铁连接昆明、大理和丽江（昆明 → 大理 2 小时，昆明 → 丽江 3.5 小时）。"),
      t2("Bring a warm jacket — nights are cold above 2,000 m.", "带件保暖外套——海拔 2,000 米以上夜间寒冷。"),
      t2("Didi works in Dali and Lijiang; hire a driver for Tiger Leaping Gorge.", "大理和丽江可以用滴滴；去虎跳峡请包车。"),
    ],
    transit240: t2(
      "Yunnan: only 9 cities/prefectures — Kunming, Dali, Lijiang, Xishuangbanna, Yuxi, Chuxiong, Honghe, Wenshan and Pu'er. Forbidden: Shangri-La / Meili Snow Mountain (Diqing Tibetan Autonomous Prefecture), Tengchong (Baoshan) and Ruili (Dehong). Entry/exit ports: Kunming Changshui (KMG), Lijiang Sanyi (LJG) and the Mohan railway port (China–Laos Railway).",
      "云南：仅限 9 个市州——昆明、大理、丽江、西双版纳、玉溪、楚雄、红河、文山、普洱。严禁前往：香格里拉/梅里雪山（属迪庆藏族自治州）、腾冲（属保山市）、瑞丽（属德宏州）。适用出入境口岸：昆明长水国际机场（KMG）、丽江三义国际机场（LJG）和磨憨铁路口岸（中老铁路）。"
    ),
    nearby: t2("Shangri-La (1.5 h by train — not allowed on 240-hour transit), Kunming (2–3.5 h), Xishuangbanna (train)", "香格里拉（火车 1.5 小时——240 小时过境免签不可前往）、昆明（2–3.5 小时）、西双版纳（火车）"),
    faq: [
      { q: t2("Can I go to Shangri-La on 240-hour transit?", "240 小时过境免签可以去香格里拉吗？"), a: t2("No. Shangri-La is in Diqing Prefecture, outside the 9 allowed Yunnan areas. Tengchong and Ruili are also not allowed. You need a 30-day visa-free entry or a tourist visa.", "不可以。香格里拉属迪庆州，不在云南允许的 9 个市州之内。腾冲和瑞丽也不允许。你需要 30 天免签入境或旅游签证。") },
      { q: t2("How do I get from Kunming to Dali and Lijiang?", "怎么从昆明去大理和丽江？"), a: t2("Take a taxi from the airport to Kunming Station or Kunming South, then the high-speed train: about 2 h to Dali and 3.5 h to Lijiang.", "从机场打车去昆明站或昆明南站，再坐高铁：到大理约 2 小时，到丽江约 3.5 小时。") },
      { q: t2("Will I get altitude sickness?", "会有高原反应吗？"), a: t2("Kunming is about 1,890 m, Lijiang higher and Jade Dragon Snow Mountain 4,500 m. Take the first day easy and don't run.", "昆明海拔约 1,890 米，丽江更高，玉龙雪山 4,500 米。第一天放轻松，别奔跑。") },
      { q: t2("Can I enter Yunnan by train from Laos?", "可以从老挝坐火车进入云南吗？"), a: t2("Yes. The Mohan railway port on the China–Laos Railway is a 240-hour transit entry/exit port.", "可以。中老铁路的磨憨铁路口岸是 240 小时过境免签适用出入境口岸。") },
    ],
  },
];

export function getCity(id: string) {
  return CITIES.find((c) => c.id === id);
}
