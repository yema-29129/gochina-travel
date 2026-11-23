import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "high-speed-trains",
  category: "transport",
  icon: "train",
  title: t2("China High-Speed Trains: Booking, Seat Classes, Refunds & Kids", "中国高铁全攻略：订票、席别、退改签与儿童票"),
  seoTitle: t2(
    "China High Speed Train Classes Explained & 12306 vs Trip.com Booking Guide (2026)",
    "中国高铁席别详解与 12306 vs Trip.com 订票指南（2026）"
  ),
  summary: t2(
    "Book China bullet trains with your passport: 12306 vs Trip.com, Second vs First vs Business Class, luggage limits, refund fees, child tickets and station tips.",
    "用护照订中国高铁：12306 与 Trip.com 对比、二等座/一等座/商务座区别、行李限制、退票手续费、儿童票与车站实用提示。"
  ),
  updated: "2026-11-24",
  readMin: 11,
  keyPoints: [
    t2(
      "Tickets go on sale 15 days ahead. Book on the 12306 English app or Trip.com, with your name exactly as in your passport.",
      "车票提前 15 天开售。用 12306 英文版 App 或 Trip.com 订票，姓名必须与护照完全一致。"
    ),
    t2(
      "Business Class is the HIGHEST class on Chinese trains (like airline First Class). Second Class is the best value.",
      "商务座是中国高铁的最高等级（相当于飞机头等舱）。二等座性价比最高。"
    ),
    t2(
      "Never buy a \"No Seat\" ticket for a long trip: it costs the same as Second Class but you stand.",
      "长途千万别买“无座”票：价格与二等座相同，但你要一路站着。"
    ),
    t2(
      "Arrive 40–45 minutes early. Gates open about 15 minutes and close 5 minutes before departure. Foreign passports use the manual lane or passport e-gates.",
      "提前 40–45 分钟到站。检票口约在发车前 15 分钟开放、前 5 分钟关闭。外国护照走人工通道或护照自助闸机。"
    ),
    t2(
      "Refunds are free 8+ days before departure; one free change per ticket.",
      "距发车 8 天以上退票免手续费；每张票可免费改签 1 次。"
    ),
    t2(
      "Children under 6 ride free, but you must add the free child declaration in 12306 after buying the adult ticket.",
      "未满 6 岁儿童免票，但买完大人票后必须在 12306 里添加“免费乘车儿童申报”。"
    ),
  ],
  sections: [
    {
      id: "booking",
      heading: t2("How to book: 12306 vs Trip.com", "怎么订票：12306 还是 Trip.com"),
      blocks: [
        t2b("p",
          "China's high-speed rail network is the fastest and most comfortable way to travel between cities. Every ticket is real-name: it is linked to your passport number, and your passport is your ticket at the gate.",
          "中国高铁网络是城市间出行最快、最舒适的方式。每张车票都是实名制：车票与你的护照号码绑定，进站时护照就是你的车票。"
        ),
        {
          type: "table",
          head: [t2("", ""), t2("Railway 12306 (English app)", "铁路 12306（英文版 App）"), t2("Trip.com", "Trip.com（携程国际版）")],
          rows: [
            [t2("Price", "价格"), t2("Official price, no booking fee", "官方原价，无订票服务费"), t2("Official price plus a small service fee", "官方价格加少量服务费")],
            [t2("Payment", "支付"), t2("Alipay, WeChat Pay or foreign cards (can be unreliable)", "支付宝、微信支付或外卡（有时不稳定）"), t2("Foreign Visa/Mastercard work smoothly, no 3% QR-code fee", "境外 Visa/Mastercard 支付顺畅，无 3% 扫码手续费")],
            [t2("Account setup", "注册"), t2("Register with passport; identity check can take time", "用护照注册；身份核验可能需要等待"), t2("Easy sign-up with email", "用邮箱即可轻松注册")],
            [t2("Changes & child declaration", "改签与儿童申报"), t2("Full control: changes, refunds, free child declaration", "完全自主：改签、退票、免费儿童申报"), t2("Changes and refunds via Trip.com support", "改签退票需通过 Trip.com 客服")],
            [t2("Best for", "适合"), t2("Travelers comfortable with Chinese-style apps", "能适应中国式 App 的游客"), t2("First-time visitors who want English support", "想要英文客服的首次来华游客")],
          ],
        },
        {
          type: "list",
          items: [
            t2("Tickets are released 15 days before departure. Popular trains sell out fast, so book as soon as you know your dates.", "车票在发车前 15 天放票。热门车次很快售罄，确定日期后尽早订票。"),
            t2("Enter your name EXACTLY as printed in your passport (same spelling and order). A mismatch means the gate will not let you in.", "姓名必须与护照上印的完全一致（拼写和顺序相同）。不一致会导致无法进站。"),
            t2("Train types: G = high-speed (up to 350 km/h, fastest); D = bullet train (slightly slower); C = intercity; K, T and Z = older normal trains, slower and cheaper, some with overnight sleepers.", "车次类型：G = 高速动车（最高 350 km/h，最快）；D = 动车（略慢）；C = 城际列车；K、T、Z = 普通列车，更慢更便宜，部分有夜间卧铺。"),
          ],
        },
        { type: "affiliate", id: "tripTrains" },
      ],
    },
    {
      id: "at-the-station",
      heading: t2("At the station: names, security and gates", "在车站：站名、安检与检票口"),
      blocks: [
        {
          type: "steps",
          items: [
            t2("Check the exact station name. Big cities have several: Beijing South, Beijing West, Beijing (main) and Beijing Chaoyang are different stations far apart. Shanghai and Shanghai Hongqiao are also different.", "确认准确的站名。大城市有多个车站：北京南站、北京西站、北京站和北京朝阳站是相距很远的不同车站。上海站和上海虹桥站也不是同一个。"),
            t2("Arrive 40–45 minutes before departure. Big stations are huge and queues for ID check and security can be long.", "发车前 40–45 分钟到站。大车站非常大，验证和安检排队可能很长。"),
            t2("At the entrance, show your passport for the ID check (foreigners use the manual lane), then pass airport-style security for you and your bags.", "在进站口出示护照验证（外国人走人工通道），然后像机场一样对人和行李进行安检。"),
            t2("Find your train number on the departure boards to see your gate number (检票口).", "在发车屏幕上找到你的车次，查看检票口编号。"),
            t2("Gates open about 15 minutes before departure and close 5 minutes before. After that you cannot board.", "检票口约在发车前 15 分钟开放，发车前 5 分钟关闭。之后无法上车。"),
            t2("At the gate, use the passport e-gate if it accepts your passport; otherwise go to the staffed manual lane (人工通道) and hand over your passport.", "在检票口，如果护照自助闸机能识别你的护照就直接刷；否则去有工作人员的人工通道递交护照。"),
            t2("On the platform, stand at the marker showing your carriage number (车厢). Your seat number is in your booking.", "在站台上，站在标有你车厢号的位置。座位号在你的订单里。"),
          ],
        },
        t2b("p",
          "Lost? Show this card to any station staff member (replace G123 with your train number):",
          "迷路了？把这张卡片给任何车站工作人员看（把 G123 换成你的车次）："
        ),
        {
          type: "show",
          zh: "工作人员您好！我持外国护照已买好电子客票，请问我的车次【G123】在几号检票口？人工通道在哪里？",
          meaning: t2(
            "Hello! I have a foreign passport and have already bought an e-ticket. Which gate is my train [G123] at? Where is the manual lane?",
            "工作人员您好！我持外国护照已买好电子客票，请问我的车次【G123】在几号检票口？人工通道在哪里？"
          ),
        },
      ],
    },
    {
      id: "seat-classes",
      heading: t2("Seat classes explained: Second vs First vs Business", "席别详解：二等座、一等座、商务座"),
      blocks: [
        t2b("p",
          "The biggest confusion: Chinese trains have Second Class, First Class, Premium First Class and Business Class. They do not mean the same as on airlines.",
          "最大的困惑：中国高铁有二等座、一等座、优选一等座和商务座。它们和飞机舱位的含义不一样。"
        ),
        {
          type: "table",
          head: [t2("Class", "席别"), t2("Seat layout", "座位排布"), t2("Price (Second Class = 1.0)", "价格系数（二等座 = 1.0）"), t2("Real experience & advice", "真实体验与选购建议")],
          rows: [
            [
              t2("Second Class (二等座)", "二等座（Second Class）"),
              t2("3 + 2 (A/B/C + aisle + D/F)", "3 + 2（A/B/C + 过道 + D/F）"),
              t2("1.0× (e.g. Beijing–Shanghai, 4.5 h: about ¥553–662)", "1.0×（如京沪 4.5 小时约 553–662 元）"),
              t2("Best value! Twice the legroom of a budget-airline economy seat. 220 V power sockets and USB ports under or between seats; free 100 °C hot-water machine and large luggage racks at the carriage ends. For trips under 3 hours, just buy Second Class.", "性价比之王！腿部空间是欧美廉航经济舱的两倍。座位下方或两座之间有 220 V 电源插座和 USB 口；车厢连接处有免费 100 °C 开水机和大件行李架。3 小时以内的短途直接买二等座。"),
            ],
            [
              t2("First Class (一等座)", "一等座（First Class）"),
              t2("2 + 2 (A/C + aisle + D/F)", "2 + 2（A/C + 过道 + D/F）"),
              t2("About 1.6×", "约 1.6×"),
              t2("Wider, softer seats with footrest and small pillow; the carriage is much quieter with fewer running kids. Good for 3–6 hour trips: about US$20+ more for double the comfort.", "座椅更宽更软，带脚踏板和小靠枕；车厢人少，安静得多，少有孩子跑动喧哗。适合 3–6 小时中长途：多花二十几美元，舒适度翻倍。"),
            ],
            [
              t2("Business Class (商务座)", "商务座（Business Class）"),
              t2("1 + 1 or 1 + 2 private herringbone pods", "1 + 1 或 1 + 2 独立鱼骨式座舱"),
              t2("About 3.2–3.5×", "约 3.2–3.5×"),
              t2("This is the HIGHEST class (two levels above First Class, like airline First Class). VIP lounge with no queuing, seats recline 180° into a bed, free freshly cooked hot meal, unlimited drinks and snack box, eye mask and slippers.", "这是最高等级（比一等座高两级，相当于飞机头等舱）。专属 VIP 休息室免排队，座椅 180° 放平成床，免费现做热餐、无限畅饮饮料和零食礼盒、眼罩和拖鞋。"),
            ],
            [
              t2("No Seat (无座 / Standing)", "无座（No Seat / 站票）"),
              t2("No fixed seat", "无固定座位"),
              t2("Same as Second Class", "与二等座原价相同"),
              t2("Warning: when seats sell out, popular trains release No Seat tickets at exactly the Second Class price, but you stand the whole way with your bags (or buy a coffee in the dining car to sit). Never buy No Seat by mistake for a long trip!", "警告：座位卖光后，热门车次会放出无座票，价格与二等座一分不差，但你要拎着行李站一路（或去餐车买杯咖啡蹭座）。长途千万别误买无座！"),
            ],
          ],
        },
        {
          type: "callout",
          tone: "info",
          text: t2(
            "Premium First Class (优选一等座) on some trains is a First Class seat with extra service, priced between First and Business Class.",
            "部分车次的优选一等座是带额外服务的一等座，价格介于一等座和商务座之间。"
          ),
        },
      ],
    },
    {
      id: "luggage",
      heading: t2("Luggage rules", "行李规定"),
      blocks: [
        {
          type: "list",
          items: [
            t2("Each adult may carry 20 kg free, with length + width + height up to 130 cm (on bullet trains).", "每名成人免费携带 20 kg，长宽高之和不超过 130 cm（动车组列车）。"),
            t2("In practice, normal 24–28 inch suitcases are fine: security does not weigh or measure bags.", "实际上普通 24–28 寸行李箱都没问题：安检不称重也不量尺寸。"),
            t2("Put big suitcases in the Large Luggage Rack at each end of the carriage. Never lift a heavy 28-inch case onto the overhead rack: it can fall and hurt someone.", "大行李箱放在每节车厢首尾的大件行李存放处。千万不要把很重的 28 寸箱子举到头顶行李架上，以免掉下砸伤人。"),
          ],
        },
        { type: "ad" },
      ],
    },
    {
      id: "refunds-changes",
      heading: t2("Changes and refund fees", "改签与退票手续费"),
      blocks: [
        t2b("p",
          "Free change: each ticket can be changed once for free, before departure or later on the same day (as long as a later train that day still has seats). You pay or get back the fare difference; changes after departure may carry a fee under current railway rules.",
          "免费改签：每张票可在开车前或开车后当日内免费改签 1 次（只要当天后面的车次还有余票）。差价多退少补；开车后改签可能按当期铁路规程收取手续费。"
        ),
        {
          type: "table",
          head: [t2("When you refund", "退票时间"), t2("Refund fee", "退票手续费")],
          rows: [
            [t2("8 days (192 hours) or more before departure", "距发车 ≥ 8 天（192 小时）"), t2("Free (0%)", "免费（0%）")],
            [t2("48 hours to 8 days before", "距发车 48 小时至 8 天"), "5%"],
            [t2("24 to 48 hours before", "距发车 24 至 48 小时"), "10%"],
            [t2("Less than 24 hours before", "距发车不足 24 小时"), "20%"],
            [t2("After the train has left", "列车发车后"), t2("No refund; you can only change to a later train the same day", "不可退票；只能改签当日后续列车")],
          ],
        },
      ],
    },
    {
      id: "children",
      heading: t2("Traveling with children", "带孩子坐高铁"),
      blocks: [
        t2b("p",
          "China Railway now prices children by their real age (real-name system), not only by height.",
          "中国铁路现在按孩子的实际年龄（实名制）定票价，而不再单纯按身高。"
        ),
        {
          type: "table",
          head: [t2("Age", "年龄"), t2("Ticket", "车票")],
          rows: [
            [t2("Under 6", "未满 6 周岁"), t2("Free when riding with an adult (1 free child per adult). After buying the adult ticket you MUST add the free child declaration (添加免费乘车儿童申报) in the 12306 order and link the child's passport number, or the gate will not let the child in.", "随成人乘车免票（每名成人限带 1 名免费儿童）。买完大人票后必须在 12306 订单里点击“添加免费乘车儿童申报”并绑定孩子护照号，否则孩子进不了闸机。")],
            [t2("6 to under 14", "6 周岁至未满 14 周岁"), t2("Child ticket (about half price, with own seat)", "儿童优惠票（约半价，有独立座位）")],
            [t2("14 and over", "满 14 周岁"), t2("Full-price adult ticket", "全价成人票")],
          ],
        },
      ],
    },
    {
      id: "popular-routes",
      heading: t2("Popular routes: times and prices", "热门线路：时间与票价"),
      blocks: [
        {
          type: "table",
          head: [t2("Route", "线路"), t2("Fastest time", "最快用时"), t2("Second Class (approx.)", "二等座（约）")],
          rows: [
            [t2("Beijing – Shanghai", "北京 – 上海"), t2("about 4.5 h", "约 4.5 小时"), "¥553–662"],
            [t2("Beijing – Xi'an", "北京 – 西安"), t2("about 4.5 h", "约 4.5 小时"), "¥515"],
            [t2("Shanghai – Hangzhou", "上海 – 杭州"), t2("about 45–60 min", "约 45–60 分钟"), "¥73"],
            [t2("Shanghai – Suzhou", "上海 – 苏州"), t2("about 25–30 min", "约 25–30 分钟"), "¥40"],
            [t2("Guangzhou – Shenzhen", "广州 – 深圳"), t2("about 30 min", "约 30 分钟"), "¥75"],
            [t2("Shenzhen Futian – Hong Kong West Kowloon", "深圳福田 – 香港西九龙"), t2("about 14 min", "约 14 分钟"), "¥70"],
            [t2("Chengdu – Chongqing", "成都 – 重庆"), t2("about 1 h", "约 1 小时"), "¥96–154"],
            [t2("Xi'an – Chengdu", "西安 – 成都"), t2("about 3–3.5 h", "约 3–3.5 小时"), "¥263"],
            [t2("Kunming – Dali", "昆明 – 大理"), t2("about 2 h", "约 2 小时"), "¥145"],
            [t2("Kunming – Lijiang", "昆明 – 丽江"), t2("about 3.5 h", "约 3.5 小时"), "¥200"],
            [t2("Guilin – Yangshuo", "桂林 – 阳朔"), t2("about 25 min", "约 25 分钟"), "¥25"],
          ],
        },
        {
          type: "callout",
          tone: "info",
          text: t2("Prices are approximate and vary by train and season. Check the live price when booking.", "票价为近似值，因车次和季节而异。订票时请以实时价格为准。"),
        },
      ],
    },
    {
      id: "holidays",
      heading: t2("Holiday sell-outs", "节假日一票难求"),
      blocks: [
        {
          type: "callout",
          tone: "warn",
          title: t2("Avoid Chinese public holidays", "避开中国法定节假日"),
          text: t2(
            "During Spring Festival (Chinese New Year), the May Day holiday (May 1–5) and National Day Golden Week (October 1–7), hundreds of millions travel and trains sell out within minutes of release. Book exactly 15 days ahead, or travel on other dates.",
            "春节、五一假期（5 月 1–5 日）和国庆黄金周（10 月 1–7 日）期间，数亿人出行，车票放票几分钟内就会售罄。务必在提前 15 天放票时立刻抢票，或改在其他日期出行。"
          ),
        },
      ],
    },
  ],
  faq: [
    {
      q: t2("Is Business Class better than First Class on Chinese trains?", "中国高铁商务座比一等座好吗？"),
      a: t2("Yes. Business Class is the highest class, two levels above First Class, with lie-flat seats, a VIP lounge and free meals. It costs about 3.2–3.5 times the Second Class fare.", "是的。商务座是最高等级，比一等座高两级，有可放平的座椅、VIP 休息室和免费餐食。价格约为二等座的 3.2–3.5 倍。"),
    },
    {
      q: t2("Can foreigners book China trains online?", "外国人能在网上订中国火车票吗？"),
      a: t2("Yes. Use the Railway 12306 English app or Trip.com with your passport. Enter your name exactly as in your passport. Tickets open 15 days ahead.", "能。用护照在铁路 12306 英文版 App 或 Trip.com 订票。姓名需与护照完全一致。车票提前 15 天开售。"),
    },
    {
      q: t2("Do I need to print a ticket?", "需要打印车票吗？"),
      a: t2("No. Tickets are electronic and linked to your passport. Show your passport at the ID check and at the gate (manual lane or passport e-gate).", "不需要。车票是电子票，与护照绑定。在验证处和检票口出示护照即可（人工通道或护照自助闸机）。"),
    },
    {
      q: t2("How early should I arrive at the station?", "应该提前多久到车站？"),
      a: t2("40–45 minutes before departure. Gates open about 15 minutes before and close 5 minutes before departure.", "发车前 40–45 分钟。检票口约在发车前 15 分钟开放，发车前 5 分钟关闭。"),
    },
    {
      q: t2("What does a refund cost?", "退票要多少手续费？"),
      a: t2("Free 8+ days before departure, 5% from 48 hours to 8 days, 10% from 24 to 48 hours, 20% under 24 hours. No refund after departure, only a same-day change.", "距发车 8 天以上免费，48 小时至 8 天扣 5%，24 至 48 小时扣 10%，不足 24 小时扣 20%。发车后不可退票，只能改签当日车次。"),
    },
    {
      q: t2("Do babies and toddlers need a train ticket?", "婴幼儿需要买火车票吗？"),
      a: t2("Children under 6 ride free with an adult, but you must add the free child declaration in your 12306 order with the child's passport number.", "未满 6 岁儿童随成人免票，但必须在 12306 订单中添加免费乘车儿童申报并填入孩子护照号。"),
    },
  ],
  related: ["airports", "metro-didi-maps", "domestic-flights", "240-hour-transit", "when-to-go", "essential-apps"],
};

function t2b(type: "p", en: string, zh: string) {
  return { type, text: t2(en, zh) } as const;
}

export default guide;
