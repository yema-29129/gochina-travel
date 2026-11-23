import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "when-to-go",
  category: "practical",
  icon: "calendar",
  title: t2("Best Time to Visit China & Blackout Holidays to Avoid", "中国最佳旅行季节与四大“避雷节假日”日历"),
  seoTitle: t2(
    "Best Time to Visit China (2026): 4 Blackout Holiday Periods & Sweet-Spot Months",
    "什么时候去中国旅游最好（2026）：四大客流黑名单假期与最佳出行月份"
  ),
  summary: t2(
    "Avoid China's 4 crowd blackout periods (National Day, Labor Day, CNY, Summer), hit the spring and autumn sweet spots, and pack smart for winter and summer.",
    "避开中国四大客流高峰期（国庆、五一、春节春运、暑假高温），锁定春秋黄金旅行窗口，附南方冬季无暖气与夏季防晒喷雾禁带提醒。"
  ),
  updated: "2026-11-24",
  readMin: 6,
  keyPoints: [
    t2(
      "Absolute red-light blackout dates: National Day Golden Week (Oct 1–7) and Labor Day (May 1–5) — hotels triple in price and top tickets vanish.",
      "绝对红灯禁区：国庆黄金周（10 月 1–7 日）和五一劳动节（5 月 1–5 日）——酒店房价暴涨 3 倍，热门景点和车票一秒抢空。"
    ),
    t2(
      "Summer Vacation (Jul 10–Aug 25) combines massive school tour crowds with brutal 37–41°C heat in Shanghai, Xi'an, Chongqing, Wuhan and Nanjing.",
      "中小学暑假（7 月 10 日–8 月 25 日）叠加全国亲子研学客流与 37–41°C 高温暴击（上海、西安、重庆、武汉、南京尤为闷热）。"
    ),
    t2(
      "Best sweet-spot windows: Apr 1–25, May 10–mid Jun, early–mid Sep, and Oct 12–mid Nov — crisp weather, ginkgo/autumn leaves and ~50% lower hotel rates.",
      "全年最完美窗口：4 月 1–25 日、5 月 10 日–6 月中旬、9 月上中旬、10 月 12 日–11 月中旬——秋高气爽、银杏红叶绝美，机酒便宜约一半。"
    ),
    t2(
      "South China (Shanghai, Hangzhou, Chengdu, Guilin) has NO indoor central heating in winter — pack thermal base layers and thick socks.",
      "南方城市（上海、杭州、成都、桂林）冬季室内没有集中暖气——务必带保暖内衣和厚袜子，并确认酒店配有制热空调。"
    ),
    t2(
      "Aerosol sunscreen sprays over 150 ml are banned on Chinese high-speed trains and subways — pack sunscreen lotion or cream instead.",
      "容量超过 150 ml 的气雾防晒喷雾严禁带上中国高铁和地铁——夏季请改带防晒霜或乳液。"
    ),
  ],
  sections: [
    {
      id: "blackout-periods",
      heading: t2("The 4 blackout periods to avoid", "千万避开的四大客流地狱时间段"),
      blocks: [
        {
          type: "p",
          text: t2(
            "Western travelers planning annual leave rarely know China's shifted statutory holidays. Landing during one of these four periods means shoulder-to-shoulder crowds at the Great Wall, hotel prices up to 3× normal, and high-speed trains selling out in seconds.",
            "欧美游客请年假时往往不了解中国的法定调休长假。一旦撞进下面四个时间段，长城上人挤人走不动道、酒店房价暴涨 3 倍、高铁票一秒抢空，旅行体验会大打折扣。"
          ),
        },
        {
          type: "table",
          head: [
            t2("Blackout period", "避雷时段"),
            t2("Dates", "具体日期"),
            t2("Crowd level", "客流恐怖指数"),
            t2("What actually happens", "真实体验与避坑说明"),
          ],
          rows: [
            [
              t2("National Day Golden Week", "国庆黄金周"),
              t2("Oct 1–7 (spillover Sep 29–Oct 8)", "10 月 1–7 日（前后辐射 9 月 29 日–10 月 8 日）"),
              "★★★★★",
              t2(
                "Absolute red-light blackout. Hundreds of millions travel nationwide; every major attraction hits capacity limits and hotels cost 3× normal.",
                "绝对红灯禁区。全国数亿人次集中出游，所有热门景区全部约满限流，酒店暴涨至 3 倍。"
              ),
            ],
            [
              t2("Labor Day Holiday", "五一劳动节假期"),
              t2("May 1–5", "5 月 1–5 日"),
              "★★★★★",
              t2(
                "Absolute red-light blackout. Peak spring weather triggers an extreme surge in domestic short trips across all cities and scenic parks.",
                "绝对红灯禁区。春暖花开叠加调休，全国短途游井喷至极限，各大城市与景区极度拥挤。"
              ),
            ],
            [
              t2("Chinese New Year / Chunyun", "农历春节与春运高峰"),
              t2("Late Jan – mid/late Feb (floating lunar dates, ~7 days before Eve to Day 7)", "1 月下旬–2 月中下旬（按农历浮动，约除夕前 7 天至正月初七）"),
              "★★★★☆",
              t2(
                "World's largest human migration: train tickets are nearly impossible to buy and many small family-run noodle shops close from Eve to Day 2. Silver lining: Tier-1 cities (Shanghai, Shenzhen, Beijing) feel surprisingly quiet Days 1–3 with festive temple fairs — workable for cold-tolerant travelers who book everything early.",
                "地表最大规模人口迁徙：火车票极难买，除夕至初二很多地道家庭小馆歇业。好处是一线大城市（上海、深圳、北京）初一到初三反而清净且庙会年味浓，适合不怕冷且提前订好票的资深玩家。"
              ),
            ],
            [
              t2("Summer School Vacation", "中国中小学暑假"),
              t2("Jul 10 – Aug 25", "7 月 10 日–8 月 25 日"),
              "★★★★☆",
              t2(
                "Double hit of crowds and heat: nationwide family and school study groups pack the Forbidden City, National Museum, Tsinghua/Peking University, Shaanxi History Museum and Disney, while Wuhan, Chongqing, Nanjing, Shanghai and Xi'an routinely hit 37–41°C.",
                "客流与高温双重暴击：全国亲子研学团挤爆故宫、国博、清华北大、陕历博和迪士尼；同时武汉、重庆、南京、上海、西安气温常年飙至 37–41°C，闷热难耐。"
              ),
            ],
          ],
        },
        { type: "ad" },
      ],
    },
    {
      id: "sweet-spots",
      heading: t2("Sweet-spot months: when China is at its best", "全年最完美的黄金旅行月份（Sweet Spots）"),
      blocks: [
        {
          type: "p",
          text: t2(
            "Schedule your trip into these four shoulder windows for mild temperatures, clear skies, roughly half-price flights and hotels compared to peak weeks, and far shorter attraction lines:",
            "把行程安排在以下四个错峰窗口，不仅气温宜人、天高气爽，机票和酒店也比旺季便宜约一半，景区排队大幅减少："
          ),
        },
        {
          type: "table",
          head: [t2("Window", "推荐窗口"), t2("Season", "季节"), t2("Why it's ideal", "推荐理由")],
          rows: [
            [
              t2("Apr 1 – Apr 25", "4 月 1 日–4 月 25 日"),
              t2("Spring", "春季"),
              t2("Warming weather, cherry and peach blossoms across Jiangnan and Beijing, before the May 1 surge.", "气温回暖，江南与北京繁花盛开，完美避开五一客流。"),
            ],
            [
              t2("May 10 – mid Jun", "5 月 10 日–6 月中旬"),
              t2("Late spring", "晚春初夏"),
              t2("Post-Labor Day lull, lush green mountains in Guilin and Zhangjiajie before summer heat and school break.", "五一后客流回落，桂林与张家界山清水秀，且尚未进入酷暑与暑假。"),
            ],
            [
              t2("Early – mid Sep", "9 月上中旬"),
              t2("Early autumn", "初秋"),
              t2("Schools are back in session, summer humidity fades, and prices drop sharply ahead of Oct 1.", "学生开学、暑热渐退，国庆前机酒价格明显回落。"),
            ],
            [
              t2("Oct 12 – mid Nov", "10 月 12 日–11 月中旬"),
              t2("Peak autumn", "深秋黄金期"),
              t2("Arguably the single best month in China: crisp air, golden ginkgo trees and red maple foliage in Beijing, Xi'an and Suzhou.", "堪称中国全年最美时段：秋高气爽，北京、西安、苏州满城金黄银杏与红叶。"),
            ],
          ],
        },
      ],
    },
    {
      id: "seasonal-warnings",
      heading: t2("Two seasonal packing traps foreigners never expect", "两个老外最意想不到的季节打包坑"),
      blocks: [
        {
          type: "callout",
          tone: "warn",
          title: t2("Winter in South China (Dec–Feb): NO indoor central heating", "南方冬季（12–2 月）预警：室内没有集中暖气"),
          text: t2(
            "Northern cities like Beijing, Xi'an and Harbin have strong central heating indoors. South of the Yangtze River — including Shanghai, Hangzhou, Chengdu and Guilin — buildings generally have NO central heating! Damp 3–8°C winter air can feel colder indoors than outside. Pack thermal base layers and thick socks, and confirm your hotel has heating air-conditioning.",
            "北京、西安、哈尔滨等北方城市室内有充足的集中供暖，但长江以南——包括上海、杭州、成都、桂林——冬季室内普遍没有集中暖气！3–8°C 的湿冷空气往往屋里比屋外还冷。请务必带保暖内衣和厚袜子，订酒店时确认房间配有制热空调。"
          ),
        },
        {
          type: "callout",
          tone: "danger",
          title: t2("Summer travel: sunscreen spray >150 ml is banned on trains & metro", "夏季出行警告：超 150 ml 防晒喷雾上不了高铁和地铁"),
          text: t2(
            "When visiting in July–August (37–41°C), pack a mini handheld fan and a compact UV/rain umbrella — locals use umbrellas for sun protection everywhere. However, pressurized aerosol sunscreen sprays over 150 ml are confiscated at Chinese high-speed rail and metro security checks. Bring squeeze-tube sunscreen lotion or cream instead.",
            "7–8 月（37–41°C）出行建议随身带手持小风扇和晴雨两用防晒伞。但请注意：超过 150 ml 的气雾防晒喷雾无法通过中国高铁和地铁安检，会被当场拦截！请改带挤压管装防晒霜或乳液。"
          ),
        },
      ],
    },
  ],
  faq: [
    {
      q: t2("What is the single best month to visit China for a first-timer?", "第一次去中国旅游，最推荐哪个月份？"),
      a: t2(
        "Mid-October to mid-November (Oct 12–Nov 15) and April (Apr 1–25) are the top choices: comfortable walking temperatures across Beijing, Xi'an, Shanghai and Chengdu, low rainfall, and none of the Golden Week crowds.",
        "10 月中旬至 11 月中旬（10 月 12 日–11 月 15 日）和 4 月（4 月 1–25 日）是首选：北京、西安、上海、成都气温都非常适合徒步逛景点，降雨少，且完美避开黄金周人潮。"
      ),
    },
    {
      q: t2("Is it a bad idea to visit China during Chinese New Year?", "春节期间去中国旅游到底好不好？"),
      a: t2(
        "Inter-city train tickets are very hard to buy and small neighborhood restaurants close for 2–3 days around New Year's Eve. However, if you book transport months ahead and stay in major cities like Beijing or Shanghai, Days 1–3 offer quiet streets, lantern displays and lively temple fairs.",
        "跨城火车票极难抢，且除夕至初二不少街头小馆关门歇业。但如果你提前订好交通且主要在北京、上海等大城市游玩，初一到初三街道反而清净，还能体验浓厚的庙会与花灯年味。"
      ),
    },
    {
      q: t2("Why can't I bring my aerosol sunscreen spray on Chinese trains?", "为什么中国高铁不让带大瓶防晒喷雾？"),
      a: t2(
        "Chinese rail and subway security restrict pressurized flammable/aerosol canisters (including spray sunscreen, hairspray and deodorant sprays) to 150 ml maximum per container. Non-aerosol lotions and creams are completely fine.",
        "中国铁路和地铁安检对自喷压力容器（包括防晒喷雾、定型喷雾和止汗喷雾）实行单瓶不超过 150 ml 的限制。非气雾的防晒霜、防晒乳液则完全不受影响。"
      ),
    },
    {
      q: t2("What should I pack if I visit Shanghai or Chengdu in January?", "1 月去上海或成都需要带什么衣服？"),
      a: t2(
        "Bring thermal base layers, a warm windproof coat, and thick indoor socks. Because South China lacks central heating, lobbies, restaurants and metro stations can feel damp and chilly.",
        "请带好保暖内衣、防风厚外套和厚袜子。由于南方没有集中暖气，酒店大堂、餐厅和地铁站内会感觉阴冷潮湿。"
      ),
    },
  ],
  related: ["attraction-tickets", "high-speed-trains", "safety-health", "domestic-flights"],
};

export default guide;
