import { L, t2 } from "@/lib/i18n";

export type Duration = 5 | 8 | 12 | 14;
export type TravelStyle = "classics" | "food" | "nature" | "modern";

export interface ItineraryDay {
  day: number;
  city: L;
  cityId?: string;
  title: L;
  activities: L;
  transport: L;
  tip: L;
}

export interface ItineraryPlan {
  duration: Duration;
  style: TravelStyle;
  title: L;
  route: L;
  summary: L;
  budget: L;
  transitNote: L;
  days: ItineraryDay[];
}

export const DURATIONS: { value: Duration; label: L }[] = [
  { value: 5, label: t2("5 Days (Short Trip)", "5 天（短途精华）") },
  { value: 8, label: t2("8 Days (240h Transit Sweet Spot)", "8 天（240 小时过境黄金期）") },
  { value: 12, label: t2("12 Days (Deep First Trip)", "12 天（首次深度游）") },
  { value: 14, label: t2("14 Days (Grand Tour)", "14 天（全景大环线）") },
];

export const STYLES: { id: TravelStyle; label: L; desc: L }[] = [
  {
    id: "classics",
    label: t2("Classics & History", "经典历史线"),
    desc: t2("Great Wall, Forbidden City, Terracotta Army & Shanghai", "长城、故宫、兵马俑与上海外滩"),
  },
  {
    id: "food",
    label: t2("Food & Nightlife", "美食烟火线"),
    desc: t2("Chengdu hotpot, Chongqing street food, Xi'an Muslim Quarter & Shanghai", "成都火锅、重庆江湖菜、西安回民街与上海本帮菜"),
  },
  {
    id: "nature",
    label: t2("Nature & Mountains", "自然山水线"),
    desc: t2("Zhangjiajie Avatar peaks, Guilin Li River & Yunnan highlands", "张家界阿凡达奇峰、桂林漓江与云南高原"),
  },
  {
    id: "modern",
    label: t2("Cyberpunk & Modern", "现代赛博线"),
    desc: t2("Shanghai skyline, Chongqing 8D city, high-speed rail & Beijing", "上海天际线、重庆 8D 魔幻城市、高铁与北京"),
  },
];

/* Reusable day blocks for clean, realistic route assembly */
const D = {
  bjArrive: {
    city: t2("Beijing", "北京"),
    cityId: "beijing",
    title: t2("Arrive in Beijing & Hutong Evening", "抵达北京与胡同初体验"),
    activities: t2(
      "Settle in near Wangfujing or Qianmen. Walk Nanluoguxiang / Drum Tower hutongs and enjoy Peking Roast Duck.",
      "入住王府井或前门附近。逛南锣鼓巷/鼓楼胡同，晚餐吃北京烤鸭。"
    ),
    transport: t2("Airport Express (¥25 PEK / ¥35 PKX, tap foreign card)", "机场线地铁（PEK ¥25 / PKX ¥35，可拍外卡）"),
    tip: t2("Buy a CCC power bank at a Xiaomi Store (¥79–129) if you have domestic flights later.", "如果后续有国内航班，先在小米之家买一块带 CCC 标志的充电宝（¥79–129）。"),
  },
  bjImperial: {
    city: t2("Beijing", "北京"),
    cityId: "beijing",
    title: t2("Tiananmen Square, Forbidden City & Jingshan Park", "天安门广场、故宫与景山公园"),
    activities: t2(
      "Morning entry to Tiananmen Square, then enter the Forbidden City via Meridian Gate (3–4 h). Climb Jingshan Park for sunset views over the palace roofs.",
      "上午过安检参观天安门广场，从午门进入故宫（3–4 小时），傍晚登景山公园俯瞰故宫全景。"
    ),
    transport: t2("Metro Line 1 + walking", "地铁 1 号线 + 步行"),
    tip: t2("Book Forbidden City 7 days ahead at 20:00 Beijing time (closed Mondays). Bring your passport!", "故宫提前 7 天 20:00 抢票（周一闭馆），务必带护照！"),
  },
  bjWall: {
    city: t2("Beijing", "北京"),
    cityId: "beijing",
    title: t2("Mutianyu Great Wall & Temple of Heaven", "慕田峪长城与天坛公园"),
    activities: t2(
      "Early morning trip to Mutianyu Great Wall (cable car up, toboggan slide down). Late afternoon visit to Temple of Heaven.",
      "早起出发慕田峪长城（缆车上山、旱地雪橇滑道下山）。下午返回市区游览天坛公园。"
    ),
    transport: t2("Direct shuttle bus or Didi / private driver (1.5 h each way)", "直通大巴或滴滴/包车（单程约 1.5 小时）"),
    tip: t2("Mutianyu is far less crowded than Badaling and easier to navigate.", "慕田峪比八达岭人少得多，体验更舒适。"),
  },
  bjSummer: {
    city: t2("Beijing", "北京"),
    cityId: "beijing",
    title: t2("Summer Palace & 798 Art District", "颐和园与 798 艺术区"),
    activities: t2(
      "Boat ride across Kunming Lake at the Summer Palace, followed by modern galleries and cafés in 798 Art District or Sanlitun.",
      "游览颐和园并乘船横渡昆明湖，下午逛 798 艺术区或三里屯咖啡馆与画廊。"
    ),
    transport: t2("Metro Line 4 + Didi", "地铁 4 号线 + 滴滴"),
    tip: t2("Use Alipay → Transport for the Beijing metro QR code.", "在支付宝“出行”里开通北京地铁乘车码。"),
  },
  xaArrive: {
    city: t2("Xi'an", "西安"),
    cityId: "xian",
    title: t2("High-Speed Rail to Xi'an & Muslim Quarter", "高铁赴西安与回民街夜市"),
    activities: t2(
      "Ride the 4.5-hour bullet train from Beijing West to Xi'an North. Evening walk around the Bell Tower and Muslim Quarter street snacks.",
      "从北京西站乘 4.5 小时高铁至西安北站。傍晚逛钟楼与回民街品尝肉夹馍、羊肉泡馍。"
    ),
    transport: t2("High-speed train (Beijing West → Xi'an North, ~4.5 h)", "高铁（北京西 → 西安北，约 4.5 小时）"),
    tip: t2("Use the manual passport lane at train stations; arrive 45 min early.", "高铁站请走外国护照人工通道，提前 45 分钟到站。"),
  },
  xaWarriors: {
    city: t2("Xi'an", "西安"),
    cityId: "xian",
    title: t2("Terracotta Army & Ancient City Wall", "兵马俑与西安古城墙骑行"),
    activities: t2(
      "Morning visit to the Terracotta Warriors (Pits 1–3). Late afternoon cycle atop the Ming-dynasty City Wall and see the Giant Wild Goose Pagoda night show.",
      "上午参观兵马俑 1–3 号坑，傍晚在明代古城墙骑行，夜游大唐不夜城与大雁塔。"
    ),
    transport: t2("Metro Line 9 + bus/Didi to Lintong (~1 h)", "地铁 9 号线转公交/滴滴至临潼（约 1 小时）"),
    tip: t2("Carry small RMB cash for street snacks in the Muslim Quarter (personal QR codes).", "回民街部分小摊用个人收款码，备些零钱现金。"),
  },
  cdArrive: {
    city: t2("Chengdu", "成都"),
    cityId: "chengdu",
    title: t2("Train to Chengdu, Tea House & Sichuan Hotpot", "高铁赴成都、人民公园喝茶与火锅"),
    activities: t2(
      "High-speed train from Xi'an (3.5 h). Relax with jasmine tea at People's Park (Heming Teahouse), then enjoy mild/split-pot Sichuan hotpot.",
      "从西安乘 3.5 小时高铁至成都。下午在人民公园鹤鸣茶社喝盖碗茶，晚上吃鸳鸯锅四川火锅。"
    ),
    transport: t2("High-speed train (Xi'an North → Chengdu East, ~3.5 h)", "高铁（西安北 → 成都东，约 3.5 小时）"),
    tip: t2("Order a split pot (鸳鸯锅) if you want both spicy broth and mild tomato/mushroom broth.", "不太能吃辣就点“鸳鸯锅”，一半麻辣一半番茄/菌汤。"),
  },
  cdPanda: {
    city: t2("Chengdu", "成都"),
    cityId: "chengdu",
    title: t2("Giant Panda Base & Kuanzhai Alleys", "大熊猫基地与宽窄巷子"),
    activities: t2(
      "Arrive at the Chengdu Research Base of Giant Panda Breeding at 7:30 AM when pandas are active. Afternoon in Kuanzhai Alleys and Jinli Street.",
      "早上 7:30 抵达大熊猫繁育研究基地看最活跃的熊猫，下午逛宽窄巷子和锦里古街。"
    ),
    transport: t2("Metro Line 3 + shuttle / Didi", "地铁 3 号线转摆渡车或滴滴"),
    tip: t2("Book timed Panda Base tickets online in advance; go early before the afternoon nap.", "大熊猫基地需提前预约时段票，趁早去避免下午熊猫午睡。"),
  },
  cdFood: {
    city: t2("Chengdu", "成都"),
    cityId: "chengdu",
    title: t2("Leshan Giant Buddha or Chengdu Food Walk", "乐山大佛一日游或成都美食扫街"),
    activities: t2(
      "Option A: 50-min train to Leshan Giant Buddha + Leshan sweet-skin duck. Option B: Wenshu Monastery, Taikoo Li and a guided night food tour.",
      "方案 A：50 分钟高铁去乐山看大佛吃甜皮鸭；方案 B：文殊院、太古里加夜间美食扫街。"
    ),
    transport: t2("High-speed train (50 min) or Metro", "高铁（50 分钟）或市内地铁"),
    tip: t2("Show the Allergy / Spice Card if you need zero chili or no peanut oil.", "不吃辣或花生过敏请出示过敏/免辣卡。"),
  },
  cqArrive: {
    city: t2("Chongqing", "重庆"),
    cityId: "chongqing",
    title: t2("Train to Chongqing, Liziba Monorail & Hongyadong", "高铁赴重庆、李子坝轻轨与洪崖洞"),
    activities: t2(
      "1.5-hour bullet train from Chengdu. Watch Metro Line 2 pass through the residential building at Liziba, ride the Yangtze cableway, and see Hongyadong lit up at night.",
      "从成都乘 1.5 小时高铁至重庆。打卡李子坝轻轨穿楼、长江索道，夜晚欣赏洪崖洞赛博夜景。"
    ),
    transport: t2("High-speed train (Chengdu East → Chongqing West/North, ~1.5 h)", "高铁（成都东 → 重庆西/北，约 1.5 小时）"),
    tip: t2("Use AMap (高德地图) — Google Maps gets confused by Chongqing's multi-level hills.", "重庆是 8D 立体山城，务必使用高德地图（AMap）导航。"),
  },
  cqExplore: {
    city: t2("Chongqing", "重庆"),
    cityId: "chongqing",
    title: t2("Ciqikou Old Town, Kuixinglou & Raffles City", "磁器口、魁星楼与来福士夜景"),
    activities: t2(
      "Explore Ciqikou alleys and Chongqing Xiaomian noodles, stand on Kuixinglou's 22nd-floor ground-level plaza, and view the river confluence at Raffles City.",
      "逛磁器口古镇吃重庆小面，体验魁星楼“1 楼即 22 楼”的魔幻广场，傍晚去来福士看两江交汇。"
    ),
    transport: t2("Chongqing Rail Transit + Didi", "重庆轨道交通 + 滴滴"),
    tip: t2("Wear comfortable walking shoes — expect plenty of stairs and steep slopes.", "务必穿舒适的运动鞋，全程台阶和坡道极多。"),
  },
  shArrive: {
    city: t2("Shanghai", "上海"),
    cityId: "shanghai",
    title: t2("Arrive in Shanghai & The Bund Night Skyline", "抵达上海与外滩夜景"),
    activities: t2(
      "Stroll Nanjing Road to the Bund at dusk as Pudong's skyscrapers light up across the Huangpu River.",
      "傍晚沿南京路步行至外滩，欣赏黄浦江对岸陆家嘴摩天大楼亮灯。"
    ),
    transport: t2("Metro Line 2 / Maglev (tap foreign Visa/Mastercard on metro!)", "地铁 2 号线 / 磁悬浮（上海地铁支持拍外卡！）"),
    tip: t2("Shanghai is the easiest entry/exit hub with tap-to-ride metro and English signs everywhere.", "上海地铁支持拍外卡且英文标识完善，是最省心的出入境门户。"),
  },
  shClassic: {
    city: t2("Shanghai", "上海"),
    cityId: "shanghai",
    title: t2("Yu Garden, French Concession & Lujiazui", "豫园、法租界与陆家嘴云端"),
    activities: t2(
      "Morning at Yu Garden and Xiaolongbao soup dumplings. Afternoon café walk in the Former French Concession (Wukang Rd / Anfu Rd). Sunset from Shanghai Tower.",
      "上午逛豫园吃南翔小笼包，下午漫步原法租界（武康路/安福路），日落登上海中心大厦。"
    ),
    transport: t2("Metro + walking", "地铁 + 步行"),
    tip: t2("Buy instant tax-refund souvenirs (≥ ¥200 in one store) at major Nanjing Rd / Huaihai Rd malls.", "在南京路/淮海路大商场单店满 ¥200 可办离境退税（即买即退）。"),
  },
  shWaterTown: {
    city: t2("Shanghai / Suzhou", "上海 / 苏州"),
    cityId: "shanghai",
    title: t2("Day Trip to Suzhou Gardens or Zhujiajiao Water Town", "苏州园林或朱家角水乡一日游"),
    activities: t2(
      "Take a 25-minute bullet train to Suzhou for the Humble Administrator's Garden and Pingjiang Road canals, or Metro Line 17 to Zhujiajiao.",
      "乘 25 分钟高铁去苏州逛拙政园和平江路，或乘地铁 17 号线去朱家角古镇。"
    ),
    transport: t2("High-speed train (Shanghai → Suzhou, 25 min)", "高铁（上海 → 苏州，25 分钟）"),
    tip: t2("Book Suzhou's Humble Administrator's Garden 1–3 days ahead.", "苏州拙政园建议提前 1–3 天预约。"),
  },
  zjjArrive: {
    city: t2("Zhangjiajie", "张家界"),
    cityId: "zhangjiajie",
    title: t2("Arrive in Zhangjiajie & Tianmen Mountain", "抵达张家界与天门山"),
    activities: t2(
      "Ride the 7.5 km Tianmen Mountain cable car up to the Glass Skywalk and the 999 steps to Heaven's Gate.",
      "乘 7.5 公里天门山索道上山，走玻璃栈道并打卡 999 级天门洞台阶。"
    ),
    transport: t2("Domestic flight or high-speed train to Zhangjiajie West", "国内航班或高铁至张家界西站"),
    tip: t2("Book Tianmen Mountain Route A/B timed tickets 3–5 days ahead; remember CCC power bank for flights.", "天门山 A/B 线需提前 3–5 天预约；坐国内航班注意充电宝需带 CCC 标志。"),
  },
  zjjPark: {
    city: t2("Zhangjiajie", "张家界"),
    cityId: "zhangjiajie",
    title: t2("Avatar Mountains (Zhangjiajie National Forest Park)", "阿凡达奇峰（张家界国家森林公园）"),
    activities: t2(
      "Enter at Wulingyuan East Gate: Bailong Elevator, Yuanjiajie (Hallelujah Mountain), Tianzi Mountain and Golden Whip Stream.",
      "从武陵源东门入园：百龙天梯、袁家界（哈利路亚山）、天子山与金鞭溪。"
    ),
    transport: t2("Free park eco-buses inside the scenic area", "景区内免费环保大巴接驳"),
    tip: t2("Stay in Wulingyuan town (not downtown) for 10-minute access to the park gate.", "建议住在武陵源镇而非市区，步行即可到标志门入园。"),
  },
  glArrive: {
    city: t2("Guilin & Yangshuo", "桂林与阳朔"),
    cityId: "guilin",
    title: t2("Li River Cruise from Guilin to Yangshuo", "漓江游船从桂林至阳朔"),
    activities: t2(
      "Morning 4-hour Li River boat cruise past the ¥20 banknote karst peaks, arriving in Yangshuo. Evening stroll on West Street.",
      "上午乘 4 小时漓江游船穿过 20 元人民币背景喀斯特群峰抵达阳朔，晚上逛西街。"
    ),
    transport: t2("High-speed train to Guilin + Li River cruise (4 h)", "高铁至桂林 + 漓江游船（4 小时）"),
    tip: t2("Book 4-star cruise tickets in advance; luggage can be transferred to your Yangshuo hotel.", "提前预订四星游船，行李可托运直达阳朔酒店。"),
  },
  glCycle: {
    city: t2("Yangshuo", "阳朔"),
    cityId: "guilin",
    title: t2("Yulong River Cycling & Bamboo Rafting", "遇龙河骑行与竹筏漂流"),
    activities: t2(
      "Rent an e-bike or bicycle along the Yulong River rice paddies, take a calm bamboo raft ride, and hike Xianggong Hill for sunset.",
      "沿遇龙河稻田骑行电动车或单车，体验人工竹筏漂流，傍晚登相公山看日落。"
    ),
    transport: t2("E-bike / bicycle rental + Didi", "租电动车/单车 + 滴滴"),
    tip: t2("Bring motion-sickness tablets if taking winding mountain transfers.", "走盘山公路建议提前备晕车药。"),
  },
  ynDali: {
    city: t2("Dali (Yunnan)", "大理（云南）"),
    cityId: "yunnan",
    title: t2("Fly/Train to Kunming → Dali Erhai Lake", "飞/高铁至昆明转大理洱海"),
    activities: t2(
      "2-hour bullet train from Kunming to Dali. Cycle along Erhai Lake ecological corridor and explore Dali Ancient Town.",
      "从昆明乘 2 小时高铁至大理，沿洱海生态廊道骑行并逛大理古城。"
    ),
    transport: t2("High-speed train (Kunming → Dali, 2 h)", "高铁（昆明 → 大理，2 小时）"),
    tip: t2("Dali is ~2,000 m altitude — drink water, wear sunscreen and pack a warm jacket for evenings.", "大理海拔约 2,000 米，注意防晒补水，夜间备保暖外套。"),
  },
  ynLijiang: {
    city: t2("Lijiang (Yunnan)", "丽江（云南）"),
    cityId: "yunnan",
    title: t2("Lijiang Old Town & Jade Dragon Snow Mountain", "丽江古城与玉龙雪山"),
    activities: t2(
      "2-hour train from Dali to Lijiang. Visit Jade Dragon Snow Mountain / Blue Moon Valley, then wander Shuhe & Lijiang Old Towns.",
      "从大理乘 2 小时火车至丽江，游览玉龙雪山与蓝月谷，傍晚逛束河与丽江古城。"
    ),
    transport: t2("Train (Dali → Lijiang, 2 h) + park shuttle", "火车（大理 → 丽江，2 小时）+ 景区大巴"),
    tip: t2("240h transit covers Kunming, Dali & Lijiang — do NOT enter Shangri-La (Diqing) on 240h transit.", "240 小时过境覆盖昆明/大理/丽江，但严禁前往香格里拉（迪庆州）。"),
  },
  depart: {
    city: t2("Departure Hub", "离境城市"),
    title: t2("Souvenirs, Tax Refund & Departure", "伴手礼采购、退税核销与返程"),
    activities: t2(
      "Last-minute tea or souvenir shopping. Arrive at the international airport 3 hours early to clear Customs tax-refund verification before checking luggage.",
      "最后采购茶叶或伴手礼。提前 3 小时抵达国际机场，托运行李前先去海关退税柜台完成核销。"
    ),
    transport: t2("Airport Express or pre-booked airport pickup", "机场快线或提前预订送机"),
    tip: t2("Keep tax-refund items unused in carry-on/accessible luggage for Customs inspection.", "离境退税商品须保持未拆封使用，以便海关查验。"),
  },
};

function makeDays(list: Omit<ItineraryDay, "day">[]): ItineraryDay[] {
  return list.map((item, idx) => ({ ...item, day: idx + 1 }));
}

export const ITINERARIES: ItineraryPlan[] = [
  /* ============================== CLASSICS ============================== */
  {
    duration: 5,
    style: "classics",
    title: t2("5-Day Beijing & Shanghai Express", "5 天京沪双城精华线"),
    route: t2("Beijing (3d) → Shanghai (2d)", "北京（3 天）→ 上海（2 天）"),
    summary: t2(
      "The fastest way to see imperial China and modern China on one trip, linked by a 4.5-hour bullet train.",
      "用最短时间一次看遍古都与魔都，中间由 4.5 小时京沪高铁无缝衔接。"
    ),
    budget: t2("¥3,200–5,200 (excl. international flights)", "¥3,200–5,200（不含国际机票）"),
    transitNote: t2("Fits easily inside 240-hour visa-free transit (enter PEK/PKX, exit PVG/SHA to a 3rd country/region).", "完美适配 240 小时过境免签（从北京入境、上海出境飞往第三国/地区）。"),
    days: makeDays([D.bjArrive, D.bjImperial, D.bjWall, D.shArrive, D.shClassic]),
  },
  {
    duration: 8,
    style: "classics",
    title: t2("8-Day Golden Triangle (Beijing · Xi'an · Shanghai)", "8 天中国黄金三角（北京 · 西安 · 上海）"),
    route: t2("Beijing (3d) → Xi'an (2d) → Shanghai (3d)", "北京（3 天）→ 西安（2 天）→ 上海（3 天）"),
    summary: t2(
      "China's #1 first-timer route: Great Wall, Forbidden City, Terracotta Army, and the Bund — all by high-speed rail.",
      "首次赴华最经典的黄金三角路线：长城、故宫、兵马俑与上海外滩，全程高铁串联。"
    ),
    budget: t2("¥4,800–7,800 (excl. international flights)", "¥4,800–7,800（不含国际机票）"),
    transitNote: t2("Ideal for 240-hour (10-day) visa-free transit! Beijing, Xi'an and Shanghai are all allowed.", "240 小时（10 天）过境免签的绝配！北京、西安、上海均在允许范围内。"),
    days: makeDays([D.bjArrive, D.bjImperial, D.bjWall, D.xaArrive, D.xaWarriors, D.shArrive, D.shClassic, D.depart]),
  },
  {
    duration: 12,
    style: "classics",
    title: t2("12-Day Classic China + Pandas & Water Town", "12 天经典中国 + 熊猫与江南水乡"),
    route: t2("Beijing (4d) → Xi'an (2d) → Chengdu (2d) → Shanghai & Suzhou (4d)", "北京（4 天）→ 西安（2 天）→ 成都（2 天）→ 上海与苏州（4 天）"),
    summary: t2(
      "Adds Chengdu's Giant Pandas and a Suzhou garden day trip to the Golden Triangle for a balanced, unhurried pace.",
      "在黄金三角基础上加入成都大熊猫和苏州园林一日游，节奏从容不赶路。"
    ),
    budget: t2("¥7,200–11,500 (excl. international flights)", "¥7,200–11,500（不含国际机票）"),
    transitNote: t2("Requires 30-day visa-free entry (50 countries) or a tourist L visa (exceeds 240 hours).", "超过 240 小时，需使用 30 天免签（50 国）或办理中国旅游签证。"),
    days: makeDays([D.bjArrive, D.bjImperial, D.bjWall, D.bjSummer, D.xaArrive, D.xaWarriors, D.cdArrive, D.cdPanda, D.shArrive, D.shClassic, D.shWaterTown, D.depart]),
  },
  {
    duration: 14,
    style: "classics",
    title: t2("14-Day Grand China Classics", "14 天中国全景经典大环线"),
    route: t2("Beijing (4d) → Xi'an (2d) → Chengdu (2d) → Guilin/Yangshuo (2d) → Shanghai (4d)", "北京（4 天）→ 西安（2 天）→ 成都（2 天）→ 桂林阳朔（2 天）→ 上海（4 天）"),
    summary: t2(
      "Imperial capitals, Terracotta Warriors, Giant Pandas, karst river scenery, and Shanghai's skyline in two unforgettable weeks.",
      "两周一次打卡皇城古迹、兵马俑、大熊猫、桂林山水与上海都市。"
    ),
    budget: t2("¥8,500–13,500 (excl. international flights)", "¥8,500–13,500（不含国际机票）"),
    transitNote: t2("Requires 30-day visa-free entry or a tourist L visa.", "需使用 30 天免签或办理中国旅游签证。"),
    days: makeDays([D.bjArrive, D.bjImperial, D.bjWall, D.bjSummer, D.xaArrive, D.xaWarriors, D.cdArrive, D.cdPanda, D.glArrive, D.glCycle, D.shArrive, D.shClassic, D.shWaterTown, D.depart]),
  },

  /* ============================== FOOD ============================== */
  {
    duration: 5,
    style: "food",
    title: t2("5-Day Sichuan & Chongqing Spice Trail", "5 天川渝麻辣美食寻味线"),
    route: t2("Chengdu (3d) → Chongqing (2d)", "成都（3 天）→ 重庆（2 天）"),
    summary: t2(
      "Two UNESCO-level food capitals 90 minutes apart by bullet train: hotpot, mapo tofu, street noodles and tea houses.",
      "相距仅 90 分钟高铁的两大美食之都：火锅、麻婆豆腐、重庆小面与老茶馆。"
    ),
    budget: t2("¥2,400–4,000 (excl. international flights)", "¥2,400–4,000（不含国际机票）"),
    transitNote: t2("Fits 240-hour visa-free transit (enter Chengdu TFU/CTU, exit Chongqing CKG).", "适配 240 小时过境免签（成都入境、重庆出境）。"),
    days: makeDays([D.cdArrive, D.cdPanda, D.cdFood, D.cqArrive, D.cqExplore]),
  },
  {
    duration: 8,
    style: "food",
    title: t2("8-Day China Street Food & Hotpot Route", "8 天中国夜市与火锅美食线"),
    route: t2("Xi'an (2d) → Chengdu (3d) → Chongqing (2d) → Departure (1d)", "西安（2 天）→ 成都（3 天）→ 重庆（2 天）→ 返程（1 天）"),
    summary: t2(
      "From Xi'an's Silk Road lamb skewers and hand-pulled biangbiang noodles to Chengdu tea houses and Chongqing night markets.",
      "从西安丝路烤串和 Biangbiang 面，一路吃到成都茶馆和重庆江湖菜。"
    ),
    budget: t2("¥3,800–6,200 (excl. international flights)", "¥3,800–6,200（不含国际机票）"),
    transitNote: t2("Fits 240-hour visa-free transit across Xi'an, Chengdu and Chongqing.", "240 小时过境免签可畅游西安、成都与重庆。"),
    days: makeDays([D.xaArrive, D.xaWarriors, D.cdArrive, D.cdPanda, D.cdFood, D.cqArrive, D.cqExplore, D.depart]),
  },
  {
    duration: 12,
    style: "food",
    title: t2("12-Day Ultimate China Foodie Loop", "12 天中国终极美食环线"),
    route: t2("Beijing (2d) → Xi'an (2d) → Chengdu (3d) → Chongqing (2d) → Shanghai (3d)", "北京（2 天）→ 西安（2 天）→ 成都（3 天）→ 重庆（2 天）→ 上海（3 天）"),
    summary: t2(
      "Peking duck, Xi'an noodles, Sichuan hotpot, Chongqing street food, and Shanghai xiaolongbao — China's five greatest culinary regions.",
      "北京烤鸭、西安面食、成都川菜、重庆火锅与上海小笼包——一次尝遍中国五大美食高地。"
    ),
    budget: t2("¥6,500–10,500 (excl. international flights)", "¥6,500–10,500（不含国际机票）"),
    transitNote: t2("Requires 30-day visa-free entry or a tourist L visa.", "需使用 30 天免签或办理中国旅游签证。"),
    days: makeDays([D.bjArrive, D.bjImperial, D.xaArrive, D.xaWarriors, D.cdArrive, D.cdPanda, D.cdFood, D.cqArrive, D.cqExplore, D.shArrive, D.shClassic, D.depart]),
  },
  {
    duration: 14,
    style: "food",
    title: t2("14-Day Culinary & Culture Feast", "14 天舌尖与文化深度盛宴"),
    route: t2("Beijing (3d) → Xi'an (2d) → Chengdu (3d) → Chongqing (2d) → Shanghai & Suzhou (4d)", "北京（3 天）→ 西安（2 天）→ 成都（3 天）→ 重庆（2 天）→ 上海与苏州（4 天）"),
    summary: t2(
      "Two full weeks pairing China's best regional cuisines with iconic landmarks, night markets and tea culture.",
      "两周时间将各地招牌美食与标志性古迹、夜市和茶文化完美结合。"
    ),
    budget: t2("¥7,800–12,500 (excl. international flights)", "¥7,800–12,500（不含国际机票）"),
    transitNote: t2("Requires 30-day visa-free entry or a tourist L visa.", "需使用 30 天免签或办理中国旅游签证。"),
    days: makeDays([D.bjArrive, D.bjImperial, D.bjWall, D.xaArrive, D.xaWarriors, D.cdArrive, D.cdPanda, D.cdFood, D.cqArrive, D.cqExplore, D.shArrive, D.shClassic, D.shWaterTown, D.depart]),
  },

  /* ============================== NATURE ============================== */
  {
    duration: 5,
    style: "nature",
    title: t2("5-Day Avatar Peaks & Karst Rivers", "5 天阿凡达奇峰与漓江山水线"),
    route: t2("Zhangjiajie (2d) → Guilin & Yangshuo (3d)", "张家界（2 天）→ 桂林与阳朔（3 天）"),
    summary: t2(
      "China's two most surreal landscapes linked by bullet train: sandstone spires in Zhangjiajie and karst peaks on the Li River.",
      "高铁串联中国最震撼的两大自然奇观：张家界石英砂岩峰林与桂林漓江喀斯特山水。"
    ),
    budget: t2("¥2,800–4,600 (excl. international flights)", "¥2,800–4,600（不含国际机票）"),
    transitNote: t2("Fits 240-hour visa-free transit (enter Zhangjiajie DYG / Changsha CSX, exit Guilin KWL).", "适配 240 小时过境免签（张家界/长沙入境，桂林出境）。"),
    days: makeDays([D.zjjArrive, D.zjjPark, D.glArrive, D.glCycle, D.depart]),
  },
  {
    duration: 8,
    style: "nature",
    title: t2("8-Day Mountains, Rivers & Pandas", "8 天山水奇峰与大熊猫线"),
    route: t2("Chengdu (2d) → Chongqing (1d) → Zhangjiajie (2d) → Guilin/Yangshuo (3d)", "成都（2 天）→ 重庆（1 天）→ 张家界（2 天）→ 桂林阳朔（3 天）"),
    summary: t2(
      "Combine Chengdu's pandas with Zhangjiajie's floating peaks and Yangshuo's cycling paths.",
      "将成都大熊猫、张家界奇峰与阳朔遇龙河骑行融为一体。"
    ),
    budget: t2("¥4,600–7,400 (excl. international flights)", "¥4,600–7,400（不含国际机票）"),
    transitNote: t2("Fits 240-hour visa-free transit across Sichuan, Chongqing, Hunan and Guangxi.", "240 小时过境免签可畅游四川、重庆、湖南与广西。"),
    days: makeDays([D.cdArrive, D.cdPanda, D.cqArrive, D.zjjArrive, D.zjjPark, D.glArrive, D.glCycle, D.depart]),
  },
  {
    duration: 12,
    style: "nature",
    title: t2("12-Day Southwest China Landscapes & Yunnan", "12 天西南山水与云南高原线"),
    route: t2("Chengdu (2d) → Yunnan Dali & Lijiang (3d) → Guilin/Yangshuo (2d) → Zhangjiajie (2d) → Shanghai (3d)", "成都（2 天）→ 云南大理丽江（3 天）→ 桂林阳朔（2 天）→ 张家界（2 天）→ 上海（3 天）"),
    summary: t2(
      "Snow mountains in Yunnan, karst rivers in Yangshuo, and Avatar spires in Zhangjiajie, finishing in Shanghai.",
      "云南雪山、阳朔漓江、张家界峰林，最后从上海轻松返程。"
    ),
    budget: t2("¥7,200–11,800 (excl. international flights)", "¥7,200–11,800（不含国际机票）"),
    transitNote: t2("Requires 30-day visa-free entry or a tourist L visa. Watch Yunnan's 9-city boundary if using transit.", "需使用 30 天免签或旅游签证。若用过境免签请留意云南 9 市州边界。"),
    days: makeDays([D.cdArrive, D.cdPanda, D.ynDali, D.ynLijiang, D.glArrive, D.glCycle, D.zjjArrive, D.zjjPark, D.cqArrive, D.shArrive, D.shClassic, D.depart]),
  },
  {
    duration: 14,
    style: "nature",
    title: t2("14-Day Epic Nature & Heritage Tour", "14 天史诗自然与古迹全景线"),
    route: t2("Beijing (2d) → Zhangjiajie (2d) → Guilin/Yangshuo (2d) → Yunnan (3d) → Chengdu (2d) → Shanghai (3d)", "北京（2 天）→ 张家界（2 天）→ 桂林阳朔（2 天）→ 云南（3 天）→ 成都（2 天）→ 上海（3 天）"),
    summary: t2(
      "Great Wall, Zhangjiajie, Li River, Dali & Lijiang highlands, Pandas and Shanghai — maximum scenic variety.",
      "长城、张家界、漓江、大理丽江高原、大熊猫与上海，囊括中国最多元的地貌与风光。"
    ),
    budget: t2("¥8,800–14,000 (excl. international flights)", "¥8,800–14,000（不含国际机票）"),
    transitNote: t2("Requires 30-day visa-free entry or a tourist L visa.", "需使用 30 天免签或办理中国旅游签证。"),
    days: makeDays([D.bjArrive, D.bjWall, D.zjjArrive, D.zjjPark, D.glArrive, D.glCycle, D.ynDali, D.ynLijiang, D.cdArrive, D.cdPanda, D.cqArrive, D.shArrive, D.shClassic, D.depart]),
  },

  /* ============================== MODERN ============================== */
  {
    duration: 5,
    style: "modern",
    title: t2("5-Day Shanghai & Chongqing Cyberpunk Express", "5 天上海与重庆赛博都市线"),
    route: t2("Shanghai (3d) → Chongqing (2d)", "上海（3 天）→ 重庆（2 天）"),
    summary: t2(
      "Two of the most futuristic skylines on Earth: Pudong's supertall towers and Chongqing's 8D mountain rail network.",
      "地球上最具未来感的两大天际线：浦东摩天群与重庆 8D 魔幻立体轨交。"
    ),
    budget: t2("¥3,000–4,800 (excl. international flights)", "¥3,000–4,800（不含国际机票）"),
    transitNote: t2("Fits 240-hour visa-free transit (enter Shanghai PVG/SHA, exit Chongqing CKG).", "适配 240 小时过境免签（上海入境、重庆出境）。"),
    days: makeDays([D.shArrive, D.shClassic, D.shWaterTown, D.cqArrive, D.cqExplore]),
  },
  {
    duration: 8,
    style: "modern",
    title: t2("8-Day Modern China High-Speed Rail Loop", "8 天现代中国高铁都市线"),
    route: t2("Shanghai (3d) → Chongqing (2d) → Chengdu (2d) → Departure (1d)", "上海（3 天）→ 重庆（2 天）→ 成都（2 天）→ 返程（1 天）"),
    summary: t2(
      "Experience 350 km/h bullet trains, cashless QR payments, drone-style skylines, and Chengdu's trendy Taikoo Li.",
      "深度体验时速 350 公里高铁、无现金扫码支付、赛博夜景与成都太古里潮流街区。"
    ),
    budget: t2("¥4,600–7,400 (excl. international flights)", "¥4,600–7,400（不含国际机票）"),
    transitNote: t2("Fits 240-hour visa-free transit across Shanghai, Chongqing and Chengdu.", "240 小时过境免签可畅游上海、重庆与成都。"),
    days: makeDays([D.shArrive, D.shClassic, D.shWaterTown, D.cqArrive, D.cqExplore, D.cdArrive, D.cdPanda, D.depart]),
  },
  {
    duration: 12,
    style: "modern",
    title: t2("12-Day Mega-Cities & Tech China", "12 天超级都市与科技中国线"),
    route: t2("Beijing (3d) → Chongqing (2d) → Chengdu (2d) → Zhangjiajie (2d) → Shanghai (3d)", "北京（3 天）→ 重庆（2 天）→ 成都（2 天）→ 张家界（2 天）→ 上海（3 天）"),
    summary: t2(
      "Contrast Beijing's 798 Art District and Great Wall with Chongqing's 8D architecture, Bailong cliff elevator and Shanghai's skyline.",
      "把北京 798 与长城、重庆 8D 建筑、百龙崖壁天梯和上海天际线一次串联。"
    ),
    budget: t2("¥7,000–11,200 (excl. international flights)", "¥7,000–11,200（不含国际机票）"),
    transitNote: t2("Requires 30-day visa-free entry or a tourist L visa.", "需使用 30 天免签或办理中国旅游签证。"),
    days: makeDays([D.bjArrive, D.bjImperial, D.bjSummer, D.cqArrive, D.cqExplore, D.cdArrive, D.cdPanda, D.zjjArrive, D.zjjPark, D.shArrive, D.shClassic, D.depart]),
  },
  {
    duration: 14,
    style: "modern",
    title: t2("14-Day Complete Modern & Ancient Contrast", "14 天古今碰撞超级大环线"),
    route: t2("Beijing (3d) → Xi'an (2d) → Chengdu (2d) → Chongqing (2d) → Zhangjiajie (2d) → Shanghai (3d)", "北京（3 天）→ 西安（2 天）→ 成都（2 天）→ 重庆（2 天）→ 张家界（2 天）→ 上海（3 天）"),
    summary: t2(
      "The full spectrum of China: 3,000 years of dynasties alongside the world's largest high-speed rail network and cyberpunk megacities.",
      "全方位体验中国：三千年古都遗址与全球最大高铁网、赛博超级都市同框。"
    ),
    budget: t2("¥8,500–13,500 (excl. international flights)", "¥8,500–13,500（不含国际机票）"),
    transitNote: t2("Requires 30-day visa-free entry or a tourist L visa.", "需使用 30 天免签或办理中国旅游签证。"),
    days: makeDays([D.bjArrive, D.bjImperial, D.bjWall, D.xaArrive, D.xaWarriors, D.cdArrive, D.cdPanda, D.cqArrive, D.cqExplore, D.zjjArrive, D.zjjPark, D.shArrive, D.shClassic, D.depart]),
  },
];

export function getItinerary(duration: Duration, style: TravelStyle): ItineraryPlan {
  return ITINERARIES.find((p) => p.duration === duration && p.style === style) ?? ITINERARIES[1];
}
