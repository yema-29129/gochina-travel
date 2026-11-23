import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "attraction-tickets",
  category: "practical",
  icon: "ticket",
  title: t2("China Attraction Tickets: Release Times, Closed Days & Booking Rules", "中国热门景点抢票攻略：放票时间表、闭馆日与避坑指南"),
  seoTitle: t2(
    "How to Book Forbidden City, Tiananmen & China Attraction Tickets for Foreigners (2026)",
    "外国游客如何预约故宫、天安门及中国十大热门景点门票（2026 放票时间表）"
  ),
  summary: t2(
    "Exact ticket release times, closed days and foreigner booking rules for China's top sights: Forbidden City, Tiananmen, Terracotta Army, Panda Base & more.",
    "中国热门景点精确放票时间、闭馆日与外籍护照预约细则：故宫、天安门、兵马俑、大熊猫基地、陕历博、张家界及苏州园林。"
  ),
  updated: "2026-11-24",
  readMin: 8,
  keyPoints: [
    t2(
      "Major Beijing museums (Forbidden City, National Museum, Chairman Mao Memorial Hall) and Suzhou/Shaanxi History Museums sell out in seconds — set a Beijing-time alarm.",
      "故宫、国博、毛主席纪念堂、陕历博和苏州博物馆等顶流景点均在整点秒空——必须按北京时间定好闹钟。"
    ),
    t2(
      "Most museums close on Mondays (except public holidays), but Shanghai Museum East and Shaanxi History Museum Qin-Han Branch close on TUESDAYS.",
      "大多数博物馆每周一闭馆（法定节假日除外），但上海博物馆东馆和陕历博秦汉馆是每周二闭馆！"
    ),
    t2(
      "Tiananmen Square requires a free reservation at least 1 day in advance — even if you only want to walk on the square or take a photo.",
      "天安门广场必须至少提前 1 天预约免费时段票——哪怕只去广场走一圈或拍城楼正面，没预约连安检口都进不去。"
    ),
    t2(
      "Visit Chengdu Giant Panda Base on the 07:30–12:00 morning slot (enter before 08:00): once temperatures pass 26°C after 10:30, pandas retreat indoors to sleep.",
      "成都大熊猫基地务必买 07:30–12:00 上午场（08:00 前进园）：10:30 后气温超 26°C，大熊猫会全回室内吹空调睡觉。"
    ),
    t2(
      "Carry your physical passport to every reserved site — your passport IS your ticket at the gate.",
      "前往所有预约景点都必须随身带护照原件——刷护照本身就是你的入场门票。"
    ),
  ],
  sections: [
    {
      id: "master-release-table",
      heading: t2("Master ticket release schedule & closed-day calendar", "顶流景点放票周期、整点与闭馆日全景速查表"),
      blocks: [
        {
          type: "p",
          text: t2(
            "All release times below are in Beijing Standard Time (UTC+8). Remember to convert to your home time zone (accounting for Daylight Saving Time) and log in 5 minutes early with all passport numbers typed out.",
            "下表所有放票时间均为北京时间（UTC+8）。请务必换算成你当地时区（注意夏令时），并提前 5 分钟登录填好同行人护照号准备抢票。"
          ),
        },
        {
          type: "table",
          head: [
            t2("City", "城市"),
            t2("Attraction", "景点名称"),
            t2("Release window (Beijing Time)", "放票周期与整点（北京时间）"),
            t2("Closed day", "常规闭馆日"),
            t2("Key rules & foreigner tips", "核心避坑细节与外宾通道"),
          ],
          rows: [
            [
              t2("Beijing", "北京"),
              t2("Forbidden City (故宫博物院)", "故宫博物院（Forbidden City）"),
              t2("7 days ahead at 20:00", "提前 7 天 20:00"),
              t2("Monday (except holidays)", "每周一（法定假日除外）"),
              t2(
                "Zero walk-up tickets (¥60 peak / ¥40 off-peak). Book on the official multilingual website with passport or join a licensed English tour with guaranteed entry. Must enter via South Gate — Meridian Gate (午门); cars cannot drop off at Meridian Gate (book Tiananmen area or walk around from Donghuamen).",
                "现场绝无余票（旺季 60 元 / 淡季 40 元）。在故宫多语种官网凭护照抢票，或订含票英文半日团。必须从南门午门进，且不能开车直达午门（须先约天安门地区或从东华门绕行步行至午门）。"
              ),
            ],
            [
              t2("Beijing", "北京"),
              t2("Tiananmen Square & Flag Raising (天安门广场)", "天安门广场 & 升旗"),
              t2("1–7 days ahead (00:00 / rolling; MUST book ≥1 day ahead)", "提前 1–7 天（00:00 滚动，必须至少提前 1 天约妥）"),
              t2("Open daily", "全年开放"),
              t2(
                "Free, but no same-day walk-ins. Even if you only want to stand on the square or photograph the rostrum, you cannot pass security without a prior reservation.",
                "免费但不接受现场临时进场。哪怕不进任何馆、只想去广场看纪念碑或拍城楼正面，没提前预约连安检口都进不去。"
              ),
            ],
            [
              t2("Beijing", "北京"),
              t2("National Museum of China (中国国家博物馆)", "中国国家博物馆"),
              t2("7 days ahead at 17:00", "提前 7 天 17:00"),
              t2("Monday", "每周一"),
              t2(
                "Free, but even harder to snag than the Forbidden City — sells out in seconds. Use the official English international visitor web/email booking channel right on the dot.",
                "免费但比故宫还难抢，准点秒空。务必准时通过官方英文国际游客网页邮箱通道卡秒预约。"
              ),
            ],
            [
              t2("Beijing", "北京"),
              t2("Chairman Mao Memorial Hall (毛主席纪念堂)", "毛主席纪念堂"),
              t2("6 days ahead at 12:30", "提前 6 天 12:30"),
              t2("Monday (mornings only)", "每周一（仅上午开放）"),
              t2(
                "Strict bag rule: NO backpacks, cameras or water bottles allowed inside. You must store all bags at the official storage facility on the east side of Tiananmen Square first.",
                "严禁携带任何背包、相机和水杯入内，必须先去天安门广场东侧指定存包处寄存。"
              ),
            ],
            [
              t2("Beijing", "北京"),
              t2("Mutianyu vs. Badaling Great Wall (慕田峪 / 八达岭长城)", "慕田峪长城 / 八达岭长城"),
              t2("1–10 days ahead (good availability)", "提前 1–10 天随时有余票"),
              t2("Open daily", "全年开放"),
              t2(
                "Strongly choose Mutianyu over Badaling: far less crowded, foreigner-friendly, enclosed cable car up and a thrilling toboggan slide down.",
                "强烈推荐选慕田峪而非八达岭：游客少、商业化适度、可坐全封闭缆车上山再坐刺激的旱地雪橇滑道溜下山。"
              ),
            ],
            [
              t2("Shanghai", "上海"),
              t2("Shanghai Museum East (上海博物馆东馆)", "上海博物馆东馆"),
              t2("Walk-in with passport (special exhibitions: 7 days ahead at 12:00)", "常规展免预约持护照入馆（特展提前 7 天 12:00）"),
              t2("Tuesday (People's Square branch closes Monday!)", "每周二（注意：人民广场馆是周一闭馆！）"),
              t2(
                "Free, world-class bronze and ceramics collections, very foreigner-friendly with a dedicated overseas passport verification lane.",
                "免费，青铜器与陶瓷馆藏世界顶级，对外国护照极度友好，凭护照走境外观众通道核验即可。"
              ),
            ],
            [
              t2("Xi'an", "西安"),
              t2("Terracotta Army (秦始皇兵马俑博物馆)", "秦始皇兵马俑博物馆"),
              t2("1–7 days ahead (book 3+ days ahead in peak season)", "提前 1–7 天（旺季务必提前 3 天以上锁票）"),
              t2("Open daily", "全年开放"),
              t2(
                "¥120 ticket includes the shuttle to Lishan Garden (Emperor Qin's tomb); passport real-name entry. Scam warning: ignore roadside touts in Lintong pitching fake wax/replica terracotta museums — only enter the official museum gate.",
                "门票 120 元含丽山园摆渡车，刷护照入场。防坑警告：切勿在临潼路边听野导游忽悠去假的人造兵马俑蜡像馆，认准官方博物院正门。"
              ),
            ],
            [
              t2("Xi'an", "西安"),
              t2("Shaanxi History Museum (陕西历史博物馆)", "陕西历史博物馆本馆"),
              t2("5 days ahead at 17:00", "提前 5 天 17:00"),
              t2("Monday (Qin-Han branch closes Tuesday)", "每周一（秦汉馆周二闭馆）"),
              t2(
                "Hardest free museum ticket in China. If you miss out on the main branch, take a taxi to the new Shaanxi History Museum Qin-Han Branch — huge, impressive and much easier for foreign passports.",
                "全中国最难抢的博物馆之一。若本馆抢不到免费票，直接打车去新建的陕历博秦汉馆，空间宏大且对外国护照友好得多。"
              ),
            ],
            [
              t2("Chengdu", "成都"),
              t2("Chengdu Giant Panda Base (成都大熊猫繁育研究基地)", "成都大熊猫繁育研究基地"),
              t2("7 days ahead (book early morning slot)", "提前 7 天（抢 07:30 早场）"),
              t2("Open daily", "全年开放"),
              t2(
                "Strict rule: buy the morning slot (07:30–12:00) and enter before 08:00, heading straight to Moon/Star Nursery (月亮产房/星星产房) to see Hua Hua. After 10:30 when temperatures pass 26°C, pandas go indoors into AC and sleep facing away.",
                "必须买上午场（07:30–12:00）并争取 08:00 前进园，直奔月亮产房/星星产房看花花。超过 10:30 气温超 26°C 后，大熊猫会全回室内吹空调背对游客呼呼大睡。"
              ),
            ],
            [
              t2("Zhangjiajie", "张家界"),
              t2("Zhangjiajie National Forest Park & Tianmen Mountain (武陵源 & 天门山)", "张家界国家森林公园（武陵源）& 天门山"),
              t2("3–7 days ahead (timed cable car slots)", "提前 3–7 天分时段选索道线路"),
              t2("Open daily", "全年开放"),
              t2(
                "Tianmen Mountain splits into Line A (main cable car up, express cable car down), Line B (express up, main cable car down) and Line C. Peak-season cable car slots sell out 3+ days early — lock them in advance.",
                "天门山分 A 线（大索道上、快线索道下）、B 线（快线索道上、大索道下）和 C 线。旺季索道时段票提前 3 天即售罄，务必提前锁票。"
              ),
            ],
            [
              t2("Suzhou", "苏州"),
              t2("Suzhou Museum Main (苏州博物馆本馆)", "苏州博物馆本馆"),
              t2("7 days ahead at 08:00", "提前 7 天 08:00"),
              t2("Monday", "每周一"),
              t2(
                "I.M. Pei's iconic free museum sells out fast. If full, visit the spacious Suzhou Museum West Branch (walk-in friendly).",
                "贝聿铭设计的免费本馆极难抢。没抢到可改去免预约的苏州博物馆西馆。"
              ),
            ],
            [
              t2("Suzhou", "苏州"),
              t2("Humble Administrator's Garden (拙政园)", "拙政园"),
              t2("7 days ahead (00:00 / timed entry)", "提前 7 天（00:00 / 全天分时段）"),
              t2("Open daily", "全年开放"),
              t2(
                "Book the earliest 07:30 entry slot to photograph the classical pavilions and lotus ponds before tour groups arrive.",
                "务必选最早的 07:30 第一波时段入园，趁大部队旅行团到达前人最少、最好拍照。"
              ),
            ],
          ],
        },
        { type: "tool", tool: "ticket-alarm" },
      ],
    },
    {
      id: "beijing-tips",
      heading: t2("Beijing booking traps that catch almost everyone", "北京抢票最容易踩的 3 个大坑"),
      blocks: [
        {
          type: "list",
          items: [
            t2(
              "Forbidden City entrance routing: All visitors enter from the South Gate (Meridian Gate / 午门) and exit at the North Gate (Gate of Divine Prowess). Taxis cannot drop you at Meridian Gate — either combine it with a Tiananmen Square reservation or walk around the moat from Donghuamen (东华门).",
              "故宫单向进出路线：所有游客必须从南门午门进入、北门神武门离开。出租车无法开到午门，须先预约天安门区域通行，或打车到东华门沿护城河步行绕至午门。"
            ),
            t2(
              "Chairman Mao Memorial Hall bag storage: Security will turn you away even with a small daypack or camera. Drop your belongings at the official east-side storage depot before lining up.",
              "毛主席纪念堂存包铁律：哪怕背一个小双肩包或带相机都会被安检拦下。请务必先去广场东侧存包处寄放再去排队。"
            ),
            t2(
              "Golden Week reality check: During National Day (Oct 1–7) and Labor Day (May 1–5), DIY ticket success rates drop below 5%. Book a guaranteed-ticket English guided tour early.",
              "黄金周现实提醒：在国庆（10 月 1–7 日）和五一（5 月 1–5 日）期间，散客自抢成功率低于 5%，强烈建议提前预订含保底门票的英文导览团。"
            ),
          ],
        },
        { type: "ad" },
      ],
    },
    {
      id: "backup-options",
      heading: t2("What to do if official tickets sell out", "官网秒空抢不到票怎么办？"),
      blocks: [
        {
          type: "p",
          text: t2(
            "Don't panic if you miss the 20:00 Beijing Time drop or don't want to wake up at 5 AM in your home time zone. You have two clean backups:",
            "如果错过北京时间整点放票，或者不想在欧美半夜爬起来定闹钟抢票，你有两个稳妥的备选方案："
          ),
        },
        {
          type: "list",
          items: [
            t2(
              "Book a licensed English small-group or private tour with guaranteed tickets via Trip.com — travel agencies hold separate allocations and handle the passport registration for you.",
              "通过 Trip.com 预订含保底门票的正规英语小团或私家导览——旅行社有独立配额，且会代你完成护照实名录票。"
            ),
            t2(
              "Use the official sister branches: Shaanxi History Museum Qin-Han Branch instead of the main branch in Xi'an, and Suzhou Museum West instead of the main I.M. Pei branch in Suzhou.",
              "善用官方分馆平替：西安抢不到陕历博本馆就去秦汉馆，苏州抢不到苏博本馆就去免预约的西馆。"
            ),
          ],
        },
        { type: "affiliate", id: "tripTours" },
      ],
    },
  ],
  faq: [
    {
      q: t2("Can I buy Forbidden City tickets at the gate as a foreigner?", "外国游客能在故宫门口现场买票吗？"),
      a: t2(
        "No. The Forbidden City has zero walk-up ticket sales. You must book 7 days ahead at 20:00 Beijing Time via the official multilingual website with your passport, or book a tour that includes guaranteed entry.",
        "不能。故宫现场绝对不售票。你必须提前 7 天在北京时间 20:00 通过故宫官方多语种网站凭护照抢票，或预订含门票的正规导览团。"
      ),
    },
    {
      q: t2("If I have a Forbidden City ticket, do I still need a Tiananmen Square reservation?", "我已经抢到故宫门票，还需要单独预约天安门广场吗？"),
      a: t2(
        "If you want to walk onto Tiananmen Square itself (for the monument or flag raising), yes — book it at least 1 day ahead. If you only want to reach the Forbidden City's Meridian Gate without visiting the square, you can walk around from Donghuamen (东华门).",
        "如果你想走上天安门广场看纪念碑或升旗，必须至少提前 1 天单独预约天安门广场。如果只去故宫午门不上广场，可以直接从东华门绕行步行至午门。"
      ),
    },
    {
      q: t2("Which days are Chinese museums closed?", "中国博物馆一般周几闭馆？"),
      a: t2(
        "Most major museums (Forbidden City, National Museum, Chairman Mao Memorial Hall, Shaanxi History Museum Main, Suzhou Museum Main, Shanghai Museum People's Square) close on Mondays (except public holidays). Notable Tuesday closures: Shanghai Museum East and Shaanxi History Museum Qin-Han Branch.",
        "绝大多数主流博物馆（故宫、国博、毛主席纪念堂、陕历博本馆、苏博本馆、上博人民广场馆）每周一闭馆（法定节假日除外）。特别注意周二闭馆的两个馆：上海博物馆东馆和陕历博秦汉馆。"
      ),
    },
    {
      q: t2("Why do people warn about fake Terracotta Army museums in Xi'an?", "为什么大家都在警告西安兵马俑附近的“假馆”？"),
      a: t2(
        "Unofficial guides and drivers near Lintong sometimes steer tourists to private wax or replica exhibitions before reaching the real museum. Always go directly to the official Emperor Qinshihuang's Mausoleum Site Museum main gate (¥120 ticket).",
        "临潼路边的野导游和黑车司机常把不知情的游客拉去私人办的“人造兵马俑蜡像馆”。请务必认准官方的秦始皇帝陵博物院正门（门票 120 元）。"
      ),
    },
  ],
  related: ["when-to-go", "high-speed-trains", "arrival-immigration", "safety-health"],
};

export default guide;
