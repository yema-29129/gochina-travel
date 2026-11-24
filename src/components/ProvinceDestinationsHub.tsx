"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  ExternalLink,
  MapPin,
  Search,
  ShieldCheck,
  Ticket,
} from "lucide-react";
import { href, Lang, L, t2, tx } from "@/lib/i18n";

type RegionId = "all" | "north" | "east" | "southwest" | "south" | "central" | "nwne";
type ThemeId = "all" | "unesco" | "nature" | "cyberpunk" | "family" | "business";

interface AttractionItem {
  name: L;
  /** If ticketed, opens a direct Klook search URL (auto-monetized by Travelpayouts Drive!) */
  klookQuery?: string;
  /** Approx ticket price in USD for Western anchor */
  priceUsd?: string;
}

interface CitySpot {
  city: L;
  guideId?: string;
  spots: AttractionItem[];
}

interface ProvinceEntry {
  id: string;
  region: Exclude<RegionId, "all">;
  themes: Exclude<ThemeId, "all">[];
  province: L;
  tagline: L;
  hook: L;
  /** Strictly verified exact-landmark photo ONLY — omit if not visually verified */
  image?: string;
  /** Bespoke editorial Chinese watermark + gradient when no verified landmark photo is set */
  emblem?: string;
  gradient?: string;
  transit240?: boolean;
  specialNote?: L;
  bestTime: L;
  klookDestQuery: string;
  cities: CitySpot[];
}

const klookUrl = (q: string) =>
  `https://www.klook.com/search/result/?query=${encodeURIComponent(q)}`;

const PROVINCES: ProvinceEntry[] = [
  /* ===================== NORTH CHINA ===================== */
  {
    id: "beijing",
    region: "north",
    themes: ["unesco", "family"],
    province: t2("Beijing", "北京市"),
    tagline: t2("Imperial Palaces & Great Wall", "千年皇城与万里长城"),
    hook: t2("Walk 600-year-old emperor halls by morning, toast Peking duck in lantern-lit hutongs by night.", "上午登万里长城逛紫禁城，晚上钻灯笼胡同吃烤鸭。"),
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=900&q=75",
    transit240: true,
    bestTime: t2("Apr–May, Sep–Oct", "4–5 月、9–10 月"),
    klookDestQuery: "Beijing attractions tickets",
    cities: [
      {
        city: t2("Beijing", "北京"),
        guideId: "beijing",
        spots: [
          { name: t2("Forbidden City (故宫)", "故宫博物院"), klookQuery: "Forbidden City Beijing ticket", priceUsd: "$9" },
          { name: t2("Mutianyu Great Wall (慕田峪长城)", "慕田峪长城"), klookQuery: "Mutianyu Great Wall ticket shuttle", priceUsd: "$22" },
          { name: t2("Temple of Heaven (天坛)", "天坛公园"), klookQuery: "Temple of Heaven Beijing ticket", priceUsd: "$5" },
          { name: t2("Summer Palace (颐和园)", "颐和园"), klookQuery: "Summer Palace Beijing ticket", priceUsd: "$8" },
          { name: t2("Universal Beijing Resort (环球影城)", "北京环球影城"), klookQuery: "Universal Studios Beijing ticket", priceUsd: "$65" },
        ],
      },
    ],
  },
  {
    id: "shanxi",
    region: "north",
    themes: ["unesco"],
    province: t2("Shanxi", "山西省"),
    tagline: t2("Black Myth: Wukong & Ancient Grottoes", "黑神话取景地 · 千年古建"),
    hook: t2("Cliff-hanging wooden monasteries, 51,000 carved Buddhas, and China's best-preserved walled ancient town.", "悬崖千年悬空寺、五万尊云冈石窟大佛与平遥古城。"),
    emblem: "晋",
    gradient: "from-amber-950 via-stone-900 to-slate-950",
    transit240: true,
    bestTime: t2("May–Oct", "5–10 月"),
    klookDestQuery: "Datong Pingyao Shanxi tour",
    cities: [
      {
        city: t2("Datong & Pingyao", "大同 / 平遥"),
        spots: [
          { name: t2("Yungang Grottoes (云冈石窟)", "云冈石窟"), klookQuery: "Yungang Grottoes Datong tour", priceUsd: "$17" },
          { name: t2("Hanging Temple (悬空寺)", "恒山悬空寺"), klookQuery: "Hanging Temple Datong tour", priceUsd: "$18" },
          { name: t2("Pingyao Ancient City (平遥古城)", "平遥古城"), klookQuery: "Pingyao Ancient City ticket", priceUsd: "$18" },
        ],
      },
    ],
  },
  {
    id: "tianjin",
    region: "north",
    themes: ["cyberpunk"],
    province: t2("Tianjin", "天津市"),
    tagline: t2("30-Min Bullet Train Day Trip from Beijing", "京津 30 分钟欧风海河城"),
    hook: t2("European-style villas, neon Haihe river bridges, and a giant Ferris wheel built right over a river.", "五大道欧式洋楼、海河夜景与跨河摩天轮天津之眼。"),
    emblem: "津",
    gradient: "from-sky-950 via-slate-900 to-indigo-950",
    transit240: true,
    bestTime: t2("Apr–Jun, Sep–Oct", "4–6 月、9–10 月"),
    klookDestQuery: "Tianjin day tour from Beijing",
    cities: [
      {
        city: t2("Tianjin", "天津"),
        spots: [
          { name: t2("Five Great Avenues (五大道)", "五大道风貌区") },
          { name: t2("Tianjin Eye Ferris Wheel (天津之眼)", "天津之眼摩天轮"), klookQuery: "Tianjin Eye Ferris Wheel", priceUsd: "$11" },
          { name: t2("Porcelain House (瓷房子)", "瓷房子"), klookQuery: "Tianjin day tour", priceUsd: "$7" },
        ],
      },
    ],
  },

  /* ===================== EAST CHINA ===================== */
  {
    id: "shanghai",
    region: "east",
    themes: ["cyberpunk", "family", "business"],
    province: t2("Shanghai", "上海市"),
    tagline: t2("Futuristic Skyline, Art Deco & Disney", "魔都天际线 · 迪士尼 · 国际展会"),
    hook: t2("1920s jazz-age Bund architecture facing Blade Runner skyscrapers — China's easiest gateway for first-timers.", "外滩百年万国建筑隔江对望未来摩天群，老外赴华最丝滑第一站。"),
    image: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=900&q=75",
    transit240: true,
    bestTime: t2("Mar–May, Oct–Nov", "3–5 月、10–11 月"),
    klookDestQuery: "Shanghai attractions tickets",
    cities: [
      {
        city: t2("Shanghai", "上海"),
        guideId: "shanghai",
        spots: [
          { name: t2("Shanghai Disneyland (上海迪士尼)", "上海迪士尼乐园"), klookQuery: "Shanghai Disneyland ticket", priceUsd: "$65" },
          { name: t2("Shanghai Tower Observatory (上海中心 118F)", "上海中心大厦观光厅"), klookQuery: "Shanghai Tower Observatory ticket", priceUsd: "$25" },
          { name: t2("Yu Garden (豫园)", "豫园"), klookQuery: "Yu Garden Shanghai tour", priceUsd: "$6" },
          { name: t2("Huangpu River Night Cruise (黄浦江夜游)", "黄浦江夜景游船"), klookQuery: "Huangpu River cruise Shanghai", priceUsd: "$18" },
          { name: t2("The Bund & Wukang Rd (外滩与武康路)", "外滩 & 武康路") },
        ],
      },
    ],
  },
  {
    id: "zhejiang",
    region: "east",
    themes: ["nature", "unesco", "business"],
    province: t2("Zhejiang", "浙江省"),
    tagline: t2("West Lake, Water Towns & Yiwu Trade", "诗画西湖 · 乌镇水乡 · 义乌采购"),
    hook: t2("Misty willow-lined West Lake, lantern-lit canal boats in Wuzhen — plus the world's largest wholesale market in Yiwu.", "烟雨西湖泛舟、乌镇摇橹船夜景，外加全球最大义乌商贸城。"),
    image: "https://images.unsplash.com/photo-1731152603302-60bf370dd1f9?auto=format&fit=crop&w=900&q=75",
    transit240: true,
    bestTime: t2("Mar–May, Sep–Nov", "3–5 月、9–11 月"),
    klookDestQuery: "Hangzhou Wuzhen tour tickets",
    cities: [
      {
        city: t2("Hangzhou, Wuzhen & Yiwu", "杭州 / 乌镇 / 义乌"),
        spots: [
          { name: t2("West Lake Boat & Impression Show (西湖游船与印象西湖)", "西湖游船 & 最忆是杭州演出"), klookQuery: "Hangzhou West Lake tour", priceUsd: "$15" },
          { name: t2("Lingyin Temple (灵隐寺)", "灵隐寺 & 飞来峰"), klookQuery: "Lingyin Temple Hangzhou", priceUsd: "$10" },
          { name: t2("Wuzhen Water Town (乌镇西栅)", "乌镇西栅景区"), klookQuery: "Wuzhen Water Town ticket tour", priceUsd: "$21" },
          { name: t2("Yiwu International Trade City (义乌国际商贸城)", "义乌国际商贸城（商务采购）") },
        ],
      },
    ],
  },
  {
    id: "jiangsu",
    region: "east",
    themes: ["unesco"],
    province: t2("Jiangsu", "江苏省"),
    tagline: t2("Venice of the East & Ming Capitals", "苏州古典园林 · 六朝古都南京"),
    hook: t2("Only 25 minutes by bullet train from Shanghai: UNESCO scholar gardens, silk canals and Ming Dynasty tombs.", "上海高铁 25 分钟直达：东方威尼斯苏州园林与南京明孝陵。"),
    image: "https://images.unsplash.com/photo-1694918398482-a0b6778cda01?auto=format&fit=crop&w=900&q=75",
    transit240: true,
    bestTime: t2("Mar–May, Sep–Nov", "3–5 月、9–11 月"),
    klookDestQuery: "Suzhou Nanjing day tour tickets",
    cities: [
      {
        city: t2("Suzhou & Nanjing", "苏州 / 南京"),
        spots: [
          { name: t2("Humble Administrator's Garden (拙政园)", "拙政园"), klookQuery: "Humble Administrator Garden Suzhou", priceUsd: "$11" },
          { name: t2("Suzhou Museum by I.M. Pei (苏州博物馆)", "贝聿铭苏州博物馆") },
          { name: t2("Ming Xiaoling & Qinhuai River (明孝陵与秦淮河)", "南京明孝陵 & 夫子庙秦淮游船"), klookQuery: "Nanjing tour tickets", priceUsd: "$10" },
        ],
      },
    ],
  },
  {
    id: "anhui",
    region: "east",
    themes: ["nature", "unesco"],
    province: t2("Anhui", "安徽省"),
    tagline: t2("Sea of Clouds on Yellow Mountain", "水墨黄山云海 · 徽派宏村"),
    hook: t2("Granite peaks piercing seas of clouds that inspired 1,000 years of Chinese ink paintings, paired with white-walled villages.", "千年水墨画原型黄山奇松云海，配粉墙黛瓦宏村水墨倒影。"),
    image: "https://images.unsplash.com/photo-1751891312036-14ec49afbf6b?auto=format&fit=crop&w=900&q=75",
    transit240: true,
    bestTime: t2("Apr–Jun, Sep–Nov", "4–6 月、9–11 月"),
    klookDestQuery: "Mount Huangshan Yellow Mountain ticket",
    cities: [
      {
        city: t2("Huangshan", "黄山"),
        spots: [
          { name: t2("Mount Huangshan & Cableway (黄山风景区与索道)", "黄山门票 + 索道"), klookQuery: "Huangshan Mountain ticket cable car", priceUsd: "$27" },
          { name: t2("Hongcun Ancient Village (宏村古村)", "宏村景区"), klookQuery: "Hongcun Village Huangshan", priceUsd: "$14" },
        ],
      },
    ],
  },
  {
    id: "fujian",
    region: "east",
    themes: ["unesco"],
    province: t2("Fujian", "福建省"),
    tagline: t2("Round Tulou Fortresses & Car-Free Island", "世遗福建土楼 · 鼓浪屿海岛"),
    hook: t2("Giant circular earthen clan fortresses straight out of Mulan, plus Xiamen's car-free piano island.", "《花木兰》同款圆形世遗土楼群，与厦门无车钢琴小岛鼓浪屿。"),
    emblem: "闽",
    gradient: "from-teal-950 via-emerald-950 to-slate-950",
    transit240: true,
    bestTime: t2("Mar–May, Oct–Dec", "3–5 月、10–12 月"),
    klookDestQuery: "Xiamen Gulangyu Fujian Tulou tour",
    cities: [
      {
        city: t2("Xiamen & Zhangzhou", "厦门 / 漳州"),
        spots: [
          { name: t2("Fujian Tulou Day Tour (福建土楼一日游)", "南靖 / 永定土楼群"), klookQuery: "Fujian Tulou tour from Xiamen", priceUsd: "$35" },
          { name: t2("Gulangyu Island Ferry & Gardens (鼓浪屿)", "鼓浪屿船票与景点"), klookQuery: "Gulangyu Island Xiamen", priceUsd: "$12" },
        ],
      },
    ],
  },
  {
    id: "jiangxi",
    region: "east",
    themes: ["nature", "unesco"],
    province: t2("Jiangxi", "江西省"),
    tagline: t2("1,000-Year Porcelain Capital & Cliff Village", "千年瓷都景德镇 · 悬崖望仙谷"),
    hook: t2("Watch master artisans throw blue-and-white porcelain in Jingdezhen and stay at a glowing fairy-tale cliff village.", "在千年瓷都体验青花瓷手作，夜游悬崖瀑布仙侠村望仙谷。"),
    emblem: "赣",
    gradient: "from-blue-950 via-slate-900 to-cyan-950",
    transit240: true,
    bestTime: t2("Mar–May, Sep–Nov", "3–5 月、9–11 月"),
    klookDestQuery: "Jingdezhen Wangxian Valley tour",
    cities: [
      {
        city: t2("Jingdezhen & Shangrao", "景德镇 / 上饶"),
        spots: [
          { name: t2("Wangxian Valley Cliff Village (望仙谷)", "上饶望仙谷"), klookQuery: "Wangxian Valley ticket", priceUsd: "$18" },
          { name: t2("Wuyuan Huangling Village (婺源篁岭)", "婺源篁岭索道门票"), klookQuery: "Wuyuan Huangling", priceUsd: "$20" },
          { name: t2("Jingdezhen Imperial Kiln Museum (御窑博物馆)", "景德镇御窑博物馆") },
        ],
      },
    ],
  },

  /* ===================== SOUTHWEST CHINA ===================== */
  {
    id: "sichuan",
    region: "southwest",
    themes: ["family", "nature", "unesco"],
    province: t2("Sichuan", "四川省"),
    tagline: t2("Giant Pandas, Fiery Hotpot & Jiuzhaigou", "大熊猫故乡 · 川菜火锅 · 九寨沟"),
    hook: t2("See baby giant pandas munching bamboo at 8 AM, sip jasmine tea in bamboo parks, and explore turquoise alpine lakes.", "清晨看顶流大熊猫啃竹子、公园竹椅喝盖碗茶，奔赴九寨沟童话彩池。"),
    image: "https://images.unsplash.com/photo-1729862564072-a7b749321b90?auto=format&fit=crop&w=900&q=75",
    transit240: true,
    bestTime: t2("Mar–Jun, Sep–Nov", "3–6 月、9–11 月"),
    klookDestQuery: "Chengdu Panda Jiuzhaigou Leshan tickets",
    cities: [
      {
        city: t2("Chengdu & Western Sichuan", "成都 / 川西"),
        guideId: "chengdu",
        spots: [
          { name: t2("Chengdu Giant Panda Base (大熊猫基地)", "成都大熊猫基地"), klookQuery: "Chengdu Giant Panda Base ticket", priceUsd: "$8" },
          { name: t2("Leshan Giant Buddha (乐山大佛)", "乐山大佛游船/门票"), klookQuery: "Leshan Giant Buddha tour from Chengdu", priceUsd: "$12" },
          { name: t2("Sanxingdui Museum (三星堆博物馆)", "三星堆博物馆"), klookQuery: "Sanxingdui Museum ticket", priceUsd: "$10" },
          { name: t2("Jiuzhaigou Valley (九寨沟)", "九寨沟门票+观光车"), klookQuery: "Jiuzhaigou Valley ticket tour", priceUsd: "$38" },
        ],
      },
    ],
  },
  {
    id: "chongqing",
    region: "southwest",
    themes: ["cyberpunk"],
    province: t2("Chongqing", "重庆市"),
    tagline: t2("8D Cyberpunk City & Monorail Through Buildings", "8D 魔幻山城 · 轻轨穿楼"),
    hook: t2("Step out on the 22nd floor and find yourself on a street! Glowing cliffside stilt houses and sizzling hotpot.", "22 楼出门还是大马路！打卡李子坝轻轨穿楼与千与千寻洪崖洞夜景。"),
    image: "https://images.unsplash.com/photo-1646715658442-4026aabeaeac?auto=format&fit=crop&w=900&q=75",
    transit240: true,
    bestTime: t2("Mar–May, Sep–Nov", "3–5 月、9–11 月"),
    klookDestQuery: "Chongqing tour Wulong cruise tickets",
    cities: [
      {
        city: t2("Chongqing", "重庆"),
        guideId: "chongqing",
        spots: [
          { name: t2("Wulong Karst Three Natural Bridges (武隆天生三桥)", "武隆天生三桥"), klookQuery: "Wulong Karst Chongqing tour", priceUsd: "$42" },
          { name: t2("Two Rivers Night Cruise (两江夜游)", "重庆两江夜游船票"), klookQuery: "Chongqing Two Rivers Night Cruise", priceUsd: "$22" },
          { name: t2("Hongyadong & Liziba Monorail (洪崖洞与李子坝)", "洪崖洞 & 李子坝轻轨穿楼") },
        ],
      },
    ],
  },
  {
    id: "yunnan",
    region: "southwest",
    themes: ["nature", "unesco"],
    province: t2("Yunnan", "云南省"),
    tagline: t2("Snow Peaks, Ancient Towns & Tiger Leaping Gorge", "玉龙雪山 · 丽江大理 · 虎跳峡"),
    hook: t2("China's eternal-spring playground: cobblestone canal towns, 4,500m snow cable cars, and Himalayan-edge trekking.", "四季如春的彩云之南：雪山冰川索道、大理洱海骑行与虎跳峡世界级徒步。"),
    image: "https://images.unsplash.com/photo-1677922069736-288fd584c916?auto=format&fit=crop&w=900&q=75",
    transit240: true,
    bestTime: t2("Year-round (best Mar–May, Sep–Nov)", "四季皆宜"),
    klookDestQuery: "Lijiang Dali Shangri-La Yunnan tour",
    cities: [
      {
        city: t2("Lijiang, Dali & Shangri-La", "丽江 / 大理 / 香格里拉"),
        guideId: "yunnan",
        spots: [
          { name: t2("Jade Dragon Snow Mountain (玉龙雪山)", "玉龙雪山冰川索道"), klookQuery: "Jade Dragon Snow Mountain Lijiang", priceUsd: "$45" },
          { name: t2("Tiger Leaping Gorge Trek (虎跳峡)", "虎跳峡徒步"), klookQuery: "Tiger Leaping Gorge tour", priceUsd: "$30" },
          { name: t2("Songzanlin Monastery (松赞林寺)", "香格里拉松赞林寺"), klookQuery: "Shangri-La Yunnan tour", priceUsd: "$13" },
        ],
      },
    ],
  },

  /* ===================== SOUTH CHINA & GREATER BAY ===================== */
  {
    id: "guangxi",
    region: "south",
    themes: ["nature"],
    province: t2("Guangxi", "广西壮族自治区"),
    tagline: t2("20-Yuan Karst Peaks & Bamboo Rafting", "甲天下桂林山水 · 阳朔竹筏"),
    hook: t2("Drift past surreal limestone mountains printed on China's ¥20 banknote and watch sunrise over dragon-spine rice terraces.", "乘竹筏漂流 20 元人民币实景漓江山水，看龙脊梯田日出云海。"),
    image: "https://images.unsplash.com/photo-1537531383496-f4749b8032cf?auto=format&fit=crop&w=900&q=75",
    transit240: true,
    bestTime: t2("Apr–Oct", "4–10 月"),
    klookDestQuery: "Guilin Yangshuo Li River cruise",
    cities: [
      {
        city: t2("Guilin & Yangshuo", "桂林 / 阳朔"),
        guideId: "guilin",
        spots: [
          { name: t2("Li River 4-Star Cruise (漓江精华游船)", "漓江四星游船"), klookQuery: "Li River Cruise Guilin Yangshuo", priceUsd: "$55" },
          { name: t2("Yulong River Bamboo Rafting (遇龙河竹筏)", "阳朔遇龙河竹筏"), klookQuery: "Yulong River bamboo rafting Yangshuo", priceUsd: "$28" },
          { name: t2("Longji Rice Terraces (龙脊梯田)", "龙脊梯田一日游"), klookQuery: "Longji Rice Terraces tour Guilin", priceUsd: "$35" },
        ],
      },
    ],
  },
  {
    id: "guangdong",
    region: "south",
    themes: ["business", "cyberpunk"],
    province: t2("Guangdong", "广东省"),
    tagline: t2("Canton Fair, Dim Sum & Drone-Delivery Tech", "广交会 · 粤式早茶 · 深圳硬核科技"),
    hook: t2("Order lunch delivered by autonomous drones in Shenzhen, feast on Cantonese dim sum, and attend the global Canton Fair.", "在深圳体验无人机空投外卖、打卡华强北硬核科技，在广州逛广交会叹早茶。"),
    image: "https://images.unsplash.com/photo-1568904536453-763a39512530?auto=format&fit=crop&w=900&q=75",
    transit240: true,
    bestTime: t2("Oct–Mar", "10 月–次年 3 月"),
    klookDestQuery: "Guangzhou Shenzhen attractions tickets",
    cities: [
      {
        city: t2("Guangzhou & Shenzhen", "广州 / 深圳"),
        spots: [
          { name: t2("Canton Tower & Pearl River Cruise (广州塔与珠江夜游)", "广州塔 & 珠江夜游"), klookQuery: "Canton Tower Guangzhou ticket", priceUsd: "$21" },
          { name: t2("Chimelong Safari Park (长隆野生动物世界)", "广州长隆野生动物世界"), klookQuery: "Chimelong Safari Park Guangzhou", priceUsd: "$42" },
          { name: t2("Canton Fair / Huaqiangbei Tech (广交会 / 华强北)", "广交会琶洲馆 / 深圳华强北") },
        ],
      },
    ],
  },
  {
    id: "hk-macau",
    region: "south",
    themes: ["cyberpunk", "family", "business"],
    province: t2("Hong Kong & Macau", "香港 & 澳门"),
    tagline: t2("Victoria Harbour, Disney & Portuguese Heritage", "维港夜景 · 迪士尼 · 澳门大三巴"),
    hook: t2("Ride the 14-minute bullet train straight into Mainland China after dim sum, Victoria Peak views, and Macau egg tarts.", "太平山顶俯瞰维港、逛香港迪士尼与澳门大三巴，14 分钟高铁无缝直达内地。"),
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=900&q=75",
    specialNote: t2("Separate immigration from Mainland China", "与内地分属不同口岸"),
    bestTime: t2("Oct–Apr", "10 月–次年 4 月"),
    klookDestQuery: "Hong Kong Macau attractions tickets",
    cities: [
      {
        city: t2("Hong Kong & Macau", "香港 / 澳门"),
        spots: [
          { name: t2("Victoria Peak Tram & Sky Terrace (太平山顶缆车)", "太平山顶缆车套票"), klookQuery: "Hong Kong Peak Tram ticket", priceUsd: "$18" },
          { name: t2("Hong Kong Disneyland (香港迪士尼)", "香港迪士尼乐园"), klookQuery: "Hong Kong Disneyland ticket", priceUsd: "$82" },
          { name: t2("Ngong Ping 360 Cable Car (昂坪 360 缆车)", "昂坪 360 水晶缆车"), klookQuery: "Ngong Ping 360 cable car Hong Kong", priceUsd: "$32" },
        ],
      },
    ],
  },

  /* ===================== CENTRAL CHINA ===================== */
  {
    id: "hunan",
    region: "central",
    themes: ["nature"],
    province: t2("Hunan", "湖南省"),
    tagline: t2("Avatar Floating Mountains & Waterfall Town", "阿凡达悬浮山 · 凤凰古城 · 芙蓉镇"),
    hook: t2("Ride the world's tallest outdoor glass elevator up Avatar's sandstone pillars, then sleep beside a glowing waterfall town.", "乘世界最高百龙天梯直冲阿凡达仙境，夜宿挂在瀑布上的千年芙蓉镇。"),
    image: "https://images.unsplash.com/photo-1561031454-4f1331bd2a34?auto=format&fit=crop&w=900&q=75",
    transit240: true,
    bestTime: t2("Apr–Jun, Sep–Nov", "4–6 月、9–11 月"),
    klookDestQuery: "Zhangjiajie Tianmen Mountain tickets",
    cities: [
      {
        city: t2("Zhangjiajie & Fenghuang", "张家界 / 凤凰古城"),
        guideId: "zhangjiajie",
        spots: [
          { name: t2("Zhangjiajie National Forest Park (武陵源阿凡达山)", "张家界森林公园 4 日票"), klookQuery: "Zhangjiajie National Forest Park ticket", priceUsd: "$32" },
          { name: t2("Tianmen Mountain Cableway (天门山索道)", "天门山索道门票"), klookQuery: "Tianmen Mountain Zhangjiajie ticket", priceUsd: "$38" },
          { name: t2("Grand Canyon Glass Bridge (大峡谷玻璃桥)", "大峡谷玻璃桥"), klookQuery: "Zhangjiajie Glass Bridge ticket", priceUsd: "$30" },
          { name: t2("Fenghuang & Furong Ancient Towns (凤凰与芙蓉镇)", "凤凰古城 & 芙蓉镇"), klookQuery: "Fenghuang Furong Ancient Town tour", priceUsd: "$15" },
        ],
      },
    ],
  },
  {
    id: "henan",
    region: "central",
    themes: ["unesco"],
    province: t2("Henan", "河南省"),
    tagline: t2("Shaolin Kung Fu & 100,000 Cliffside Buddhas", "嵩山少林功夫 · 龙门石窟"),
    hook: t2("Watch real Shaolin monks perform martial arts at their birthplace and gaze at giant Tang Dynasty stone Buddhas.", "探访功夫发源地嵩山少林寺，仰望盛唐皇家雕刻艺术巅峰龙门石窟。"),
    emblem: "豫",
    gradient: "from-red-950 via-stone-900 to-slate-950",
    transit240: true,
    bestTime: t2("Apr–May, Sep–Oct", "4–5 月、9–10 月"),
    klookDestQuery: "Luoyang Longmen Grottoes Shaolin Temple",
    cities: [
      {
        city: t2("Luoyang & Dengfeng", "洛阳 / 登封"),
        spots: [
          { name: t2("Longmen Grottoes (龙门石窟)", "洛阳龙门石窟"), klookQuery: "Longmen Grottoes Luoyang ticket", priceUsd: "$13" },
          { name: t2("Shaolin Temple & Kung Fu Show (少林寺)", "嵩山少林寺与功夫表演"), klookQuery: "Shaolin Temple Luoyang tour", priceUsd: "$15" },
        ],
      },
    ],
  },

  /* ===================== NORTHWEST & NORTHEAST ===================== */
  {
    id: "shaanxi",
    region: "nwne",
    themes: ["unesco"],
    province: t2("Shaanxi", "陕西省"),
    tagline: t2("8,000 Terracotta Warriors & Silk Road Night Markets", "兵马俑奇迹 · 大唐不夜城"),
    hook: t2("Cycle atop China's most complete ancient city wall, stand before Emperor Qin's clay army, and feast in the Muslim Quarter.", "骑行千年古城墙、震撼直面八千秦兵马俑，在回民街和大唐不夜城梦回盛唐。"),
    image: "https://images.unsplash.com/photo-1523946963389-207478f6cb2e?auto=format&fit=crop&w=900&q=75",
    transit240: true,
    bestTime: t2("Mar–May, Sep–Nov", "3–5 月、9–11 月"),
    klookDestQuery: "Xian Terracotta Warriors tickets tour",
    cities: [
      {
        city: t2("Xi'an", "西安"),
        guideId: "xian",
        spots: [
          { name: t2("Terracotta Warriors Museum (兵马俑)", "秦始皇兵马俑门票/讲解"), klookQuery: "Terracotta Warriors Xian ticket", priceUsd: "$17" },
          { name: t2("Xi'an Ancient City Wall (西安明城墙)", "西安古城墙门票"), klookQuery: "Xian City Wall ticket", priceUsd: "$8" },
          { name: t2("Mount Huashan Plank Walk (华山长空栈道)", "华山索道一日游"), klookQuery: "Mount Huashan tour from Xian", priceUsd: "$45" },
        ],
      },
    ],
  },
  {
    id: "gansu",
    region: "nwne",
    themes: ["unesco", "nature"],
    province: t2("Gansu", "甘肃省"),
    tagline: t2("Silk Road Desert Caves & Rainbow Mountains", "敦煌莫高窟 · 张掖七彩丹霞"),
    hook: t2("Ride camels to a crescent oasis in the Gobi Desert, step inside 1,600-year-old painted Buddhist caves, and see rainbow hills.", "大漠骑骆驼看月牙泉日落、探秘千年敦煌莫高窟壁画与张掖七彩丹霞。"),
    emblem: "陇",
    gradient: "from-orange-950 via-amber-900 to-stone-950",
    bestTime: t2("May–Oct", "5–10 月"),
    klookDestQuery: "Dunhuang Mogao Caves Zhangye tour",
    cities: [
      {
        city: t2("Dunhuang & Zhangye", "敦煌 / 张掖"),
        spots: [
          { name: t2("Mogao Caves (敦煌莫高窟)", "敦煌莫高窟"), klookQuery: "Dunhuang Mogao Caves tour", priceUsd: "$33" },
          { name: t2("Crescent Lake & Singing Dunes (鸣沙山月牙泉)", "鸣沙山月牙泉"), klookQuery: "Dunhuang Crescent Lake", priceUsd: "$15" },
          { name: t2("Zhangye Rainbow Mountains (张掖七彩丹霞)", "张掖七彩丹霞"), klookQuery: "Zhangye Danxia Rainbow Mountains", priceUsd: "$13" },
        ],
      },
    ],
  },
  {
    id: "heilongjiang",
    region: "nwne",
    themes: ["nature", "family"],
    province: t2("Heilongjiang", "黑龙江省"),
    tagline: t2("World's Largest Ice & Snow Castle Kingdom", "哈尔滨冰雪大世界 · 俄式风情"),
    hook: t2("Full-size glowing ice palaces sculpted from frozen river blocks in -20°C winter magic — China's #1 winter bucket list.", "零下 20 度的巨型发光冰雪城堡王国，全球最震撼的冬季奇观！"),
    emblem: "黑",
    gradient: "from-sky-900 via-blue-950 to-slate-950",
    transit240: true,
    bestTime: t2("Dec–Feb (Ice Festival)", "12 月–次年 2 月（冰雪季）"),
    klookDestQuery: "Harbin Ice and Snow World tickets",
    cities: [
      {
        city: t2("Harbin", "哈尔滨"),
        spots: [
          { name: t2("Harbin Ice & Snow World (冰雪大世界)", "哈尔滨冰雪大世界"), klookQuery: "Harbin Ice and Snow World ticket", priceUsd: "$46" },
          { name: t2("Siberian Tiger Park & St. Sophia (东北虎林园与索菲亚教堂)", "东北虎林园 & 圣索菲亚教堂"), klookQuery: "Harbin Siberian Tiger Park", priceUsd: "$18" },
        ],
      },
    ],
  },
  {
    id: "hainan",
    region: "south",
    themes: ["nature", "family"],
    province: t2("Hainan", "海南省"),
    tagline: t2("30-Day Visa-Free Tropical Beach Escape", "59 国 30 天免签热带海岛"),
    hook: t2("China's Hawaii: palm-lined resorts in Sanya, turquoise diving islands, and duty-free luxury shopping.", "东方夏威夷：三亚椰林沙滩、蜈支洲岛潜水与免税购物天堂。"),
    emblem: "琼",
    gradient: "from-cyan-900 via-teal-950 to-slate-950",
    transit240: true,
    specialNote: t2("59-Country 30-Day Hainan Visa-Free", "59 国 30 天海南免签"),
    bestTime: t2("Nov–Apr", "11 月–次年 4 月"),
    klookDestQuery: "Sanya Hainan Wuzhizhou tickets",
    cities: [
      {
        city: t2("Sanya", "三亚"),
        spots: [
          { name: t2("Wuzhizhou Island (蜈支洲岛)", "蜈支洲岛船票与潜水"), klookQuery: "Wuzhizhou Island Sanya ticket", priceUsd: "$20" },
          { name: t2("Nanshan Guanyin Cultural Park (南山海上观音)", "南山文化旅游区"), klookQuery: "Nanshan Temple Sanya ticket", priceUsd: "$18" },
        ],
      },
    ],
  },
];

const THEME_TABS: { id: ThemeId; icon: string; label: L }[] = [
  { id: "all", icon: "🇨🇳", label: t2("All Vibes", "全部特色主题") },
  { id: "unesco", icon: "🏛️", label: t2("Imperial & UNESCO", "千年古迹与世遗") },
  { id: "nature", icon: "🏔️", label: t2("Surreal Nature", "电影级自然奇观") },
  { id: "cyberpunk", icon: "🤖", label: t2("Cyberpunk & Modern", "赛博都市与科技") },
  { id: "family", icon: "🐼", label: t2("Pandas & Theme Parks", "大熊猫与主题乐园") },
  { id: "business", icon: "💼", label: t2("Business & Trade Fairs", "广交会 / 义乌商务") },
];

const REGION_TABS: { id: RegionId; label: L }[] = [
  { id: "all", label: t2("All Regions", "全国大区") },
  { id: "north", label: t2("North", "华北") },
  { id: "east", label: t2("East", "华东") },
  { id: "southwest", label: t2("Southwest", "西南") },
  { id: "south", label: t2("South & HK", "华南 / 港澳") },
  { id: "central", label: t2("Central", "华中") },
  { id: "nwne", label: t2("NW & NE", "西北 / 东北") },
];

export function ProvinceDestinationsHub({ lang }: { lang: Lang }) {
  const [theme, setTheme] = useState<ThemeId>("all");
  const [region, setRegion] = useState<RegionId>("all");
  const [query, setQuery] = useState<string>("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROVINCES.filter((p) => {
      if (q) {
        const hay = [
          p.province.en,
          p.province.zh,
          p.tagline.en,
          p.tagline.zh,
          p.hook.en,
          p.hook.zh,
          ...p.cities.flatMap((c) => [c.city.en, c.city.zh, ...c.spots.flatMap((s) => [s.name.en, s.name.zh])]),
        ]
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      }
      const matchTheme = theme === "all" || p.themes.includes(theme);
      const matchRegion = region === "all" || p.region === region;
      return matchTheme && matchRegion;
    });
  }, [theme, region, query]);

  return (
    <section className="mt-14 border-t border-slate-200 pt-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="inline-block rounded-full bg-red-600 px-3 py-0.5 text-xs font-bold text-white">
            {tx(t2("Explore by Vibe or Province · Instant Ticket Links", "按特色主题或省份探索 · 一键直达英文购票"), lang)}
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            {tx(t2("Where You Can Go: China's Best Provinces & Bookable Sights", "探索中国最具特色的目的地与必去门票景点"), lang)}
          </h2>
          <p className="mt-1.5 max-w-2xl text-sm text-slate-600">
            {tx(
              t2(
                "Filter by travel vibe (Avatar peaks, Cyberpunk cities, Pandas, UNESCO, or Canton Fair) or region. Click any 🎟️ Tickets badge to check live English ticket prices & skip-the-line tours.",
                "按旅行风格（阿凡达仙山、赛博都市、大熊猫、千年世遗、广交会商务）或地理大区一键筛选；带 🎟️ 徽章的景点均可一键直达英文购票与免排队导览。",
              ),
              lang,
            )}
          </p>
        </div>

        <div className="relative md:w-72">
          <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={tx(t2("Search Panda, Avatar, Disneyland, 敦煌...", "搜索大熊猫、迪士尼、兵马俑、广交会..."), lang)}
            className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 focus:border-slate-900 focus:outline-none"
          />
        </div>
      </div>

      {/* Theme Vibe Filter (Emotional Discovery) */}
      {!query.trim() && (
        <div className="mt-5 space-y-2.5">
          <div className="flex flex-wrap gap-2">
            {THEME_TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTheme(t.id)}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-bold transition ${
                  theme === t.id
                    ? "border-red-600 bg-red-600 text-white shadow-xs"
                    : "border-slate-200 bg-white text-slate-800 hover:border-slate-400"
                }`}
              >
                <span>{t.icon}</span>
                <span>{tx(t.label, lang)}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <span className="mr-1 text-xs font-semibold text-slate-400">
              {tx(t2("Region:", "按大区："), lang)}
            </span>
            {REGION_TABS.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRegion(r.id)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  region === r.id
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tx(r.label, lang)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Rich Visual Province Cards with Bookable Attraction Ticket Links */}
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition hover:shadow-md"
          >
            {/* Visual Cover Header (100% verified landmark photo OR bespoke Chinese-emblem editorial cover) */}
            <div
              className={`relative h-40 overflow-hidden ${
                p.image ? "bg-slate-900" : `bg-gradient-to-br ${p.gradient || "from-slate-900 to-slate-800"}`
              }`}
            >
              {p.image ? (
                <>
                  <img
                    src={p.image}
                    alt={tx(p.province, lang)}
                    className="h-full w-full object-cover opacity-85 transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />
                </>
              ) : (
                <div className="pointer-events-none absolute -right-3 -top-5 select-none font-serif text-[130px] font-black leading-none text-white/10">
                  {p.emblem}
                </div>
              )}
              {p.transit240 && (
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-600/95 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-xs">
                  <ShieldCheck className="h-3 w-3" />
                  240h Visa-Free
                </span>
              )}
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-amber-300">
                  {tx(p.tagline, lang)}
                </div>
                <h3 className="text-xl font-extrabold leading-tight">{tx(p.province, lang)}</h3>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-4">
              <p className="text-xs leading-relaxed text-slate-600">{tx(p.hook, lang)}</p>

              {p.specialNote && (
                <div className="mt-2.5 rounded-lg bg-amber-50 px-2.5 py-1.5 text-[11px] font-semibold text-amber-900">
                  ⚠️ {tx(p.specialNote, lang)}
                </div>
              )}

              {/* Cities + Direct Ticket Links */}
              <div className="mt-3.5 flex-1 space-y-3">
                {p.cities.map((c, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 text-xs font-extrabold uppercase tracking-wide text-slate-900">
                        <MapPin className="h-3.5 w-3.5 text-red-600" />
                        <span>{tx(c.city, lang)}</span>
                      </div>
                      {c.guideId && (
                        <Link
                          href={href(lang, `/cities/${c.guideId}`)}
                          className="inline-flex items-center gap-0.5 text-xs font-bold text-red-600 hover:underline"
                        >
                          {tx(t2("Full City Guide", "深度指南"), lang)}
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      )}
                    </div>

                    <ul className="mt-2 space-y-1.5">
                      {c.spots.map((s, si) => (
                        <li
                          key={si}
                          className="flex items-center justify-between gap-2 rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs"
                        >
                          <span className="font-medium text-slate-800">{tx(s.name, lang)}</span>
                          {s.klookQuery ? (
                            <a
                              href={klookUrl(s.klookQuery)}
                              target="_blank"
                              rel="sponsored nofollow noopener noreferrer"
                              className="inline-flex shrink-0 items-center gap-1 rounded-md bg-white px-2 py-0.5 text-[11px] font-bold text-red-600 shadow-2xs ring-1 ring-red-200 transition hover:bg-red-600 hover:text-white"
                            >
                              <Ticket className="h-3 w-3" />
                              <span>{s.priceUsd ? `${s.priceUsd} ` : ""}{tx(t2("Tickets", "购票"), lang)}</span>
                            </a>
                          ) : (
                            <span className="shrink-0 rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                              {tx(t2("Free", "免费"), lang)}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Footer: Best Season + Province Tickets CTA */}
              <div className="mt-4 flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  {tx(p.bestTime, lang)}
                </span>
                <a
                  href={klookUrl(p.klookDestQuery)}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-red-600"
                >
                  {tx(t2("All Tours & Tickets", "查看全部门票/团"), lang)}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500">
          {tx(t2("No matching destination found. Try clearing filters or another keyword.", "未找到匹配的目的地，请切换筛选或换个关键词。"), lang)}
        </div>
      )}
    </section>
  );
}
