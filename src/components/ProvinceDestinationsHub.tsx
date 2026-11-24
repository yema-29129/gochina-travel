"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Search, ShieldCheck } from "lucide-react";
import { href, Lang, L, t2, tx } from "@/lib/i18n";

type RegionId = "all" | "north" | "east" | "southwest" | "south" | "central" | "nwne";

interface CitySpot {
  city: L;
  guideId?: string; // links to /[lang]/cities/[guideId] if available
  spots: L[];
}

interface ProvinceEntry {
  id: string;
  region: Exclude<RegionId, "all">;
  province: L;
  tag: L;
  transit240?: boolean;
  specialNote?: L;
  bestTime: L;
  cities: CitySpot[];
}

const PROVINCES: ProvinceEntry[] = [
  /* ===================== NORTH CHINA ===================== */
  {
    id: "beijing",
    region: "north",
    province: t2("Beijing Municipality", "北京市"),
    tag: t2("Imperial Capital", "千年古都"),
    transit240: true,
    bestTime: t2("Apr–May, Sep–Oct", "4–5 月、9–10 月"),
    cities: [
      {
        city: t2("Beijing", "北京"),
        guideId: "beijing",
        spots: [
          t2("Forbidden City (故宫)", "故宫博物院 (Forbidden City)"),
          t2("Mutianyu / Badaling Great Wall (慕田峪/八达岭长城)", "慕田峪 / 八达岭长城 (Great Wall)"),
          t2("Temple of Heaven (天坛)", "天坛公园 (Temple of Heaven)"),
          t2("Summer Palace (颐和园)", "颐和园 (Summer Palace)"),
          t2("Lama Temple & Hutongs (雍和宫与胡同)", "雍和宫 & 什刹海胡同"),
          t2("Universal Beijing Resort (北京环球影城)", "北京环球影城"),
        ],
      },
    ],
  },
  {
    id: "tianjin",
    region: "north",
    province: t2("Tianjin Municipality", "天津市"),
    tag: t2("30 min from Beijing", "京津城际 30 分钟"),
    transit240: true,
    bestTime: t2("Apr–Jun, Sep–Oct", "4–6 月、9–10 月"),
    cities: [
      {
        city: t2("Tianjin", "天津"),
        spots: [
          t2("Five Great Avenues (五大道)", "五大道历史风貌区"),
          t2("Italian Style Town (意式风情区)", "意式风情区"),
          t2("Tianjin Eye & Haihe River (天津之眼与海河)", "天津之眼 & 海河夜景"),
          t2("Porcelain House (瓷房子)", "瓷房子"),
        ],
      },
    ],
  },
  {
    id: "shanxi",
    region: "north",
    province: t2("Shanxi Province", "山西省"),
    tag: t2("Ancient Architecture & Black Myth", "古建大省 / 黑神话取景地"),
    transit240: true,
    bestTime: t2("May–Oct", "5–10 月"),
    cities: [
      {
        city: t2("Datong", "大同"),
        spots: [
          t2("Yungang Grottoes (云冈石窟)", "云冈石窟 (世界遗产)"),
          t2("Hanging Temple (悬空寺)", "恒山悬空寺"),
          t2("Datong Ancient City Wall (大同古城墙)", "大同古城墙"),
        ],
      },
      {
        city: t2("Pingyao", "平遥"),
        spots: [
          t2("Pingyao Ancient City (平遥古城)", "平遥古城 (世界遗产)"),
          t2("Rishengchang Exchange Shop (日昇昌票号)", "日昇昌票号"),
        ],
      },
    ],
  },
  {
    id: "inner-mongolia",
    region: "north",
    province: t2("Inner Mongolia", "内蒙古自治区"),
    tag: t2("Grasslands & Deserts", "草原与沙漠"),
    bestTime: t2("Jun–Sep", "6–9 月"),
    cities: [
      {
        city: t2("Hulunbuir & Hohhot", "呼伦贝尔 / 呼和浩特"),
        spots: [
          t2("Hulunbuir Grasslands (呼伦贝尔大草原)", "呼伦贝尔大草原"),
          t2("Whistling Dune Bay (响沙湾)", "鄂尔多斯响沙湾沙漠"),
          t2("Dazhao Temple (大召无量寺)", "呼和浩特大召寺"),
        ],
      },
    ],
  },

  /* ===================== EAST CHINA ===================== */
  {
    id: "shanghai",
    region: "east",
    province: t2("Shanghai Municipality", "上海市"),
    tag: t2("Modern Skyline & Art Deco", "魔都天际线"),
    transit240: true,
    bestTime: t2("Mar–May, Oct–Nov", "3–5 月、10–11 月"),
    cities: [
      {
        city: t2("Shanghai", "上海"),
        guideId: "shanghai",
        spots: [
          t2("The Bund & Lujiazui Skyline (外滩与陆家嘴)", "外滩 & 陆家嘴三件套"),
          t2("Yu Garden & Old City (豫园)", "豫园 & 城隍庙"),
          t2("Former French Concession & Wukang Rd (武康路法租界)", "武康路 & 安福路"),
          t2("Shanghai Disneyland (上海迪士尼)", "上海迪士尼乐园"),
          t2("Zhujiajiao Water Town (朱家角古镇)", "朱家角水乡古镇"),
        ],
      },
    ],
  },
  {
    id: "zhejiang",
    region: "east",
    province: t2("Zhejiang Province", "浙江省"),
    tag: t2("West Lake & Water Towns", "西湖与江南水乡"),
    transit240: true,
    bestTime: t2("Mar–May, Sep–Nov", "3–5 月、9–11 月"),
    cities: [
      {
        city: t2("Hangzhou", "杭州"),
        spots: [
          t2("West Lake (西湖)", "西湖十景 (West Lake)"),
          t2("Lingyin Temple (灵隐寺)", "灵隐寺 & 飞来峰"),
          t2("Longjing Tea Village (龙井村)", "龙井茶园"),
        ],
      },
      {
        city: t2("Wuzhen / Xitang", "乌镇 / 西塘"),
        spots: [
          t2("Wuzhen West Scenic Zone (乌镇西栅)", "乌镇西栅夜景"),
          t2("Xitang Ancient Water Town (西塘古镇)", "西塘古镇"),
        ],
      },
    ],
  },
  {
    id: "jiangsu",
    region: "east",
    province: t2("Jiangsu Province", "江苏省"),
    tag: t2("Classical Gardens & Ming History", "园林与六朝古都"),
    transit240: true,
    bestTime: t2("Mar–May, Sep–Nov", "3–5 月、9–11 月"),
    cities: [
      {
        city: t2("Suzhou", "苏州"),
        spots: [
          t2("Humble Administrator's Garden (拙政园)", "拙政园 (世界遗产)"),
          t2("Suzhou Museum by I.M. Pei (苏州博物馆)", "贝聿铭苏州博物馆"),
          t2("Pingjiang Road & Tiger Hill (平江路与虎丘)", "平江路 & 虎丘塔"),
        ],
      },
      {
        city: t2("Nanjing", "南京"),
        spots: [
          t2("Ming Xiaoling & Sun Yat-sen Mausoleum (明孝陵与中山陵)", "明孝陵 & 中山陵"),
          t2("Confucius Temple & Qinhuai River (夫子庙秦淮河)", "夫子庙秦淮河"),
          t2("Nanjing City Wall & Museum (明城墙与南京博物院)", "明城墙 & 南京博物院"),
        ],
      },
    ],
  },
  {
    id: "anhui",
    region: "east",
    province: t2("Anhui Province", "安徽省"),
    tag: t2("Ink-Painting Peaks & Hui Villages", "水墨黄山与徽派古村"),
    transit240: true,
    bestTime: t2("Apr–Jun, Sep–Nov", "4–6 月、9–11 月"),
    cities: [
      {
        city: t2("Huangshan", "黄山"),
        spots: [
          t2("Mount Huangshan / Yellow Mountain (黄山风景区)", "黄山奇松云海 (世界遗产)"),
          t2("Hongcun & Xidi Ancient Villages (宏村与西递)", "宏村 & 西递徽派古村"),
        ],
      },
    ],
  },
  {
    id: "fujian",
    region: "east",
    province: t2("Fujian Province", "福建省"),
    tag: t2("Tulou Earth Buildings & Island Vibes", "世遗土楼与海岛文艺"),
    transit240: true,
    bestTime: t2("Mar–May, Oct–Dec", "3–5 月、10–12 月"),
    cities: [
      {
        city: t2("Xiamen & Zhangzhou", "厦门 / 漳州"),
        spots: [
          t2("Gulangyu Island (鼓浪屿)", "鼓浪屿 (世界遗产)"),
          t2("Fujian Tulou Earthen Buildings (福建土楼)", "南靖 / 永定福建土楼"),
          t2("Nanputuo Temple & Shapowei (南普陀寺与沙坡尾)", "南普陀寺 & 沙坡尾"),
        ],
      },
      {
        city: t2("Quanzhou", "泉州"),
        spots: [
          t2("Kaiyuan Temple & West Street (开元寺与西街)", "开元寺 & 西街（海上丝路起点）"),
        ],
      },
    ],
  },
  {
    id: "shandong",
    region: "east",
    province: t2("Shandong Province", "山东省"),
    tag: t2("Coastal Beer City & Sacred Mount Tai", "海滨啤酒城与泰山"),
    transit240: true,
    bestTime: t2("May–Oct", "5–10 月"),
    cities: [
      {
        city: t2("Qingdao", "青岛"),
        spots: [
          t2("Tsingtao Beer Museum (青岛啤酒博物馆)", "青岛啤酒博物馆"),
          t2("Badaguan Historic Villas & Zhanqiao Pier (八大关与栈桥)", "八大关 & 栈桥"),
          t2("Mount Laoshan (崂山)", "崂山海上名山"),
        ],
      },
      {
        city: t2("Tai'an & Qufu", "泰安 / 曲阜"),
        spots: [
          t2("Mount Tai (泰山)", "泰山日出 (五岳之首)"),
          t2("Temple & Cemetery of Confucius (曲阜三孔)", "曲阜三孔"),
        ],
      },
    ],
  },
  {
    id: "jiangxi",
    region: "east",
    province: t2("Jiangxi Province", "江西省"),
    tag: t2("Porcelain Capital & Cliffside Town", "千年瓷都与望仙谷"),
    transit240: true,
    bestTime: t2("Mar–May, Sep–Nov", "3–5 月、9–11 月"),
    cities: [
      {
        city: t2("Jingdezhen & Shangrao", "景德镇 / 上饶"),
        spots: [
          t2("Jingdezhen Imperial Kiln Museum & Taoxichuan (景德镇御窑博物馆与陶溪川)", "景德镇御窑博物馆 & 陶溪川"),
          t2("Wangxian Valley Cliff Village (望仙谷)", "上饶望仙谷悬崖仙侠村"),
          t2("Wuyuan Huangling Ancient Village (婺源篁岭)", "婺源篁岭晒秋"),
        ],
      },
    ],
  },

  /* ===================== SOUTHWEST CHINA ===================== */
  {
    id: "sichuan",
    region: "southwest",
    province: t2("Sichuan Province", "四川省"),
    tag: t2("Giant Pandas & Alpine Lakes", "大熊猫与川西秘境"),
    transit240: true,
    bestTime: t2("Mar–Jun, Sep–Nov", "3–6 月、9–11 月"),
    cities: [
      {
        city: t2("Chengdu", "成都"),
        guideId: "chengdu",
        spots: [
          t2("Chengdu Research Base of Giant Panda Breeding (成都大熊猫繁育研究基地)", "成都大熊猫基地"),
          t2("People's Park Tea Houses & Kuanzhai Alley (人民公园茶馆与宽窄巷子)", "人民公园鹤鸣茶社 & 宽窄巷子"),
          t2("Sanxingdui Museum (三星堆博物馆)", "广汉三星堆博物馆"),
          t2("Leshan Giant Buddha & Mount Emei (乐山大佛与峨眉山)", "乐山大佛 & 峨眉山"),
        ],
      },
      {
        city: t2("Aba / Western Sichuan", "阿坝 / 川西"),
        spots: [
          t2("Jiuzhaigou Valley (九寨沟)", "九寨沟 (世界自然遗产)"),
          t2("Huanglong Travertine Pools (黄龙)", "黄龙五彩池"),
          t2("Mount Siguniang (四姑娘山)", "四姑娘山"),
        ],
      },
    ],
  },
  {
    id: "chongqing",
    region: "southwest",
    province: t2("Chongqing Municipality", "重庆市"),
    tag: t2("8D Cyberpunk Mountain City", "8D 赛博朋克魔幻山城"),
    transit240: true,
    bestTime: t2("Mar–May, Sep–Nov", "3–5 月、9–11 月"),
    cities: [
      {
        city: t2("Chongqing", "重庆"),
        guideId: "chongqing",
        spots: [
          t2("Hongyadong Cliffside Complex (洪崖洞)", "洪崖洞千与千寻夜景"),
          t2("Liziba Monorail Through Building (李子坝轻轨穿楼)", "李子坝轻轨穿楼"),
          t2("Yangtze River Cableway & Kuixinglou (长江索道与魁星楼)", "长江索道 & 魁星楼 22 楼广场"),
          t2("Wulong Karst Natural Bridges (武隆天生三桥)", "武隆天生三桥"),
        ],
      },
    ],
  },
  {
    id: "yunnan",
    region: "southwest",
    province: t2("Yunnan Province", "云南省"),
    tag: t2("Snow Peaks, Ancient Towns & Ethnic Culture", "雪山古城与彩云之南"),
    transit240: true,
    bestTime: t2("Year-round (best Mar–May, Sep–Nov)", "四季皆宜（3–5 月、9–11 月最佳）"),
    cities: [
      {
        city: t2("Lijiang & Dali", "丽江 / 大理"),
        guideId: "yunnan",
        spots: [
          t2("Lijiang Old Town & Jade Dragon Snow Mountain (丽江古城与玉龙雪山)", "丽江古城 & 玉龙雪山蓝月谷"),
          t2("Tiger Leaping Gorge (虎跳峡)", "虎跳峡徒步"),
          t2("Dali Ancient City & Erhai Lake (大理古城与洱海)", "大理古城 & 洱海骑行"),
        ],
      },
      {
        city: t2("Shangri-La & Kunming", "香格里拉 / 昆明"),
        spots: [
          t2("Songzanlin Monastery & Dukezong (松赞林寺与独克宗古城)", "香格里拉松赞林寺 & 独克宗"),
          t2("Stone Forest (昆明石林)", "昆明石林"),
        ],
      },
    ],
  },
  {
    id: "guizhou",
    region: "southwest",
    province: t2("Guizhou Province", "贵州省"),
    tag: t2("Karst Waterfalls & Miao Villages", "瀑布群与千户苗寨"),
    transit240: true,
    bestTime: t2("Apr–Oct", "4–10 月"),
    cities: [
      {
        city: t2("Guiyang, Kaili & Libo", "贵阳 / 凯里 / 荔波"),
        spots: [
          t2("Huangguoshu Waterfall (黄果树瀑布)", "黄果树大瀑布"),
          t2("Xijiang Thousand Households Miao Village (西江千户苗寨)", "西江千户苗寨"),
          t2("Libo Xiaoqikong Emerald Lakes (荔波小七孔)", "荔波小七孔"),
        ],
      },
    ],
  },
  {
    id: "tibet",
    region: "southwest",
    province: t2("Tibet (Xizang)", "西藏自治区"),
    tag: t2("Roof of the World", "世界屋脊"),
    specialNote: t2("Requires Tibet Travel Permit (via licensed agency)", "外籍游客需通过正规旅行社办理入藏函"),
    bestTime: t2("May–Oct", "5–10 月"),
    cities: [
      {
        city: t2("Lhasa & Shigatse", "拉萨 / 日喀则"),
        spots: [
          t2("Potala Palace & Jokhang Temple (布达拉宫与大昭寺)", "布达拉宫 & 大昭寺八廓街"),
          t2("Yamdrok Lake & Namtso Lake (羊卓雍措与纳木措)", "羊卓雍措 & 纳木措"),
          t2("Mount Everest Base Camp (珠峰大本营)", "珠穆朗玛峰大本营"),
        ],
      },
    ],
  },

  /* ===================== SOUTH CHINA & GREATER BAY ===================== */
  {
    id: "guangxi",
    region: "south",
    province: t2("Guangxi Zhuang AR", "广西壮族自治区"),
    tag: t2("Iconic Karst Rivers & Terraces", "甲天下桂林山水"),
    transit240: true,
    bestTime: t2("Apr–Oct", "4–10 月"),
    cities: [
      {
        city: t2("Guilin & Yangshuo", "桂林 / 阳朔"),
        guideId: "guilin",
        spots: [
          t2("Li River Cruise & 20-Yuan Viewpoint (漓江游船与 20 元背景)", "漓江精华游船 & 兴坪 20 元人民币打卡点"),
          t2("Yangshuo Yulong River Bamboo Rafting (阳朔遇龙河竹筏)", "阳朔遇龙河竹筏漂流 & 十里画廊"),
          t2("Longji Rice Terraces (龙脊梯田)", "龙脊梯田"),
        ],
      },
    ],
  },
  {
    id: "guangdong",
    region: "south",
    province: t2("Guangdong Province", "广东省"),
    tag: t2("Cantonese Food & Tech Future", "粤菜美食与未来科技"),
    transit240: true,
    bestTime: t2("Oct–Mar", "10 月–次年 3 月"),
    cities: [
      {
        city: t2("Guangzhou", "广州"),
        spots: [
          t2("Canton Tower & Pearl River Night Cruise (广州塔与珠江夜游)", "广州塔（小蛮腰）& 珠江夜游"),
          t2("Shamian Island & Chen Clan Ancestral Hall (沙面岛与陈家祠)", "沙面岛 & 陈家祠"),
          t2("Cantonese Morning Dim Sum (老字号广式早茶)", "地道广式早茶"),
        ],
      },
      {
        city: t2("Shenzhen", "深圳"),
        spots: [
          t2("Huaqiangbei Electronics Market & Drone Delivery Parks (华强北与无人机外卖公园)", "华强北电子市场 & 人才公园无人机外卖"),
          t2("OCT Loft & Window of the World (华侨城创意园与世界之窗)", "华侨城创意园 & 世界之窗"),
        ],
      },
    ],
  },
  {
    id: "hainan",
    region: "south",
    province: t2("Hainan Province", "海南省"),
    tag: t2("Tropical Beaches", "热带海岛度假"),
    transit240: true,
    specialNote: t2("59-Country 30-Day Hainan Visa-Free", "59 国 30 天海南免签"),
    bestTime: t2("Nov–Apr", "11 月–次年 4 月"),
    cities: [
      {
        city: t2("Sanya & Haikou", "三亚 / 海口"),
        spots: [
          t2("Yalong Bay, Haitang Bay & Wuzhizhou Island (亚龙湾、海棠湾与蜈支洲岛)", "亚龙湾 / 海棠湾 / 蜈支洲岛"),
          t2("Nanshan Guanyin Statue (南山海上观音)", "南山海上观音"),
        ],
      },
    ],
  },
  {
    id: "hk-macau",
    region: "south",
    province: t2("Hong Kong & Macau SAR", "香港 & 澳门特别行政区"),
    tag: t2("East-Meets-West Gateways", "中西合璧门户"),
    specialNote: t2("Separate immigration from Mainland China", "与内地分属不同出入境口岸"),
    bestTime: t2("Oct–Apr", "10 月–次年 4 月"),
    cities: [
      {
        city: t2("Hong Kong & Macau", "香港 / 澳门"),
        spots: [
          t2("Victoria Peak, Star Ferry & Big Buddha (太平山顶、天星小轮与天坛大佛)", "香港太平山顶 / 维多利亚港 / 昂坪大佛"),
          t2("Ruins of St. Paul's & Cotai Strip (大三巴牌坊与路氹城)", "澳门大三巴牌坊 & 威尼斯人"),
        ],
      },
    ],
  },

  /* ===================== CENTRAL CHINA ===================== */
  {
    id: "hunan",
    region: "central",
    province: t2("Hunan Province", "湖南省"),
    tag: t2("Avatar Mountains & Ancient Towns", "阿凡达仙山与湘西古镇"),
    transit240: true,
    bestTime: t2("Apr–Jun, Sep–Nov", "4–6 月、9–11 月"),
    cities: [
      {
        city: t2("Zhangjiajie", "张家界"),
        guideId: "zhangjiajie",
        spots: [
          t2("Zhangjiajie National Forest Park — Avatar Hallelujah Mtns (武陵源阿凡达山)", "张家界国家森林公园（阿凡达悬浮山）"),
          t2("Tianmen Mountain Cableway & Heaven's Gate (天门山索道与天门洞)", "天门山索道 & 999 级天梯"),
          t2("Zhangjiajie Grand Canyon Glass Bridge (大峡谷玻璃桥)", "大峡谷玻璃桥"),
        ],
      },
      {
        city: t2("Fenghuang & Furong", "凤凰古城 / 芙蓉镇"),
        spots: [
          t2("Fenghuang Ancient Town (凤凰古城)", "凤凰古城沱江吊脚楼"),
          t2("Furong Ancient Waterfall Town (芙蓉镇瀑布古镇)", "挂在瀑布上的千年芙蓉镇"),
        ],
      },
    ],
  },
  {
    id: "henan",
    region: "central",
    province: t2("Henan Province", "河南省"),
    tag: t2("Kung Fu & Tang Dynasty Grottoes", "少林功夫与盛唐石窟"),
    transit240: true,
    bestTime: t2("Apr–May, Sep–Oct", "4–5 月、9–10 月"),
    cities: [
      {
        city: t2("Luoyang & Dengfeng", "洛阳 / 登封"),
        spots: [
          t2("Longmen Grottoes (龙门石窟)", "洛阳龙门石窟 (世界遗产)"),
          t2("Shaolin Temple & Kung Fu Show (嵩山少林寺)", "嵩山少林寺"),
          t2("White Horse Temple & Luoyi Ancient City (白马寺与洛邑古城)", "白马寺 & 洛邑古城"),
        ],
      },
    ],
  },
  {
    id: "hubei",
    region: "central",
    province: t2("Hubei Province", "湖北省"),
    tag: t2("Yangtze River & Taoist Peaks", "江城武汉与武当仙山"),
    transit240: true,
    bestTime: t2("Mar–May, Sep–Nov", "3–5 月、9–11 月"),
    cities: [
      {
        city: t2("Wuhan, Wudang & Enshi", "武汉 / 武当山 / 恩施"),
        spots: [
          t2("Yellow Crane Tower & East Lake (黄鹤楼与东湖)", "武汉黄鹤楼 & 东湖樱园"),
          t2("Wudang Mountains Taoist Temples (武当山)", "武当山古建筑群 (世界遗产)"),
          t2("Enshi Grand Canyon (恩施大峡谷)", "恩施大峡谷"),
        ],
      },
    ],
  },

  /* ===================== NORTHWEST & NORTHEAST ===================== */
  {
    id: "shaanxi",
    region: "nwne",
    province: t2("Shaanxi Province", "陕西省"),
    tag: t2("Silk Road Start & Terracotta Army", "丝路起点与兵马俑"),
    transit240: true,
    bestTime: t2("Mar–May, Sep–Nov", "3–5 月、9–11 月"),
    cities: [
      {
        city: t2("Xi'an", "西安"),
        guideId: "xian",
        spots: [
          t2("Terracotta Warriors Museum (兵马俑)", "秦始皇兵马俑博物馆"),
          t2("Xi'an Ancient City Wall Cycling (西安古城墙骑行)", "西安明城墙骑行"),
          t2("Giant Wild Goose Pagoda & Datang Everbright City (大雁塔与大唐不夜城)", "大雁塔 & 大唐不夜城"),
          t2("Muslim Quarter & Mount Huashan (回民街与华山)", "回民街美食 & 华山栈道"),
        ],
      },
    ],
  },
  {
    id: "gansu",
    region: "nwne",
    province: t2("Gansu Province", "甘肃省"),
    tag: t2("Silk Road Desert & Rainbow Mountains", "河西走廊与敦煌莫高窟"),
    bestTime: t2("May–Oct", "5–10 月"),
    cities: [
      {
        city: t2("Dunhuang & Zhangye", "敦煌 / 张掖"),
        spots: [
          t2("Mogao Caves (敦煌莫高窟)", "敦煌莫高窟 (世界遗产)"),
          t2("Mingsha Mountain & Crescent Lake (鸣沙山月牙泉)", "鸣沙山月牙泉"),
          t2("Zhangye Danxia Rainbow Mountains (张掖七彩丹霞)", "张掖七彩丹霞"),
        ],
      },
    ],
  },
  {
    id: "xinjiang",
    region: "nwne",
    province: t2("Xinjiang Uyghur AR", "新疆维吾尔自治区"),
    tag: t2("Silk Road Bazaars & Alpine Lakes", "丝路古城与天山秘境"),
    bestTime: t2("May–Oct", "5–10 月"),
    cities: [
      {
        city: t2("Kashgar, Urumqi & Altay", "喀什 / 乌鲁木齐 / 阿勒泰"),
        spots: [
          t2("Kashgar Old City & Sunday Bazaar (喀什古城)", "喀什古城"),
          t2("Heavenly Lake of Tianshan (天山天池)", "天山天池"),
          t2("Kanas Lake & Sayram Lake (喀纳斯湖与赛里木湖)", "喀纳斯湖 & 赛里木湖"),
        ],
      },
    ],
  },
  {
    id: "heilongjiang",
    region: "nwne",
    province: t2("Heilongjiang Province", "黑龙江省"),
    tag: t2("Winter Ice & Snow Kingdom", "冰雪大世界"),
    transit240: true,
    bestTime: t2("Dec–Feb (Ice Festival)", "12 月–次年 2 月（冰雪季）"),
    cities: [
      {
        city: t2("Harbin", "哈尔滨"),
        spots: [
          t2("Harbin Ice & Snow World (哈尔滨冰雪大世界)", "哈尔滨冰雪大世界"),
          t2("Saint Sophia Cathedral & Central Street (圣索菲亚教堂与中央大街)", "圣索菲亚教堂 & 中央大街"),
        ],
      },
    ],
  },
];

const REGION_TABS: { id: RegionId; label: L }[] = [
  { id: "all", label: t2(`All ${PROVINCES.length} Provinces`, `全部 ${PROVINCES.length} 个省市`) },
  { id: "north", label: t2("North China", "华北") },
  { id: "east", label: t2("East China", "华东") },
  { id: "southwest", label: t2("Southwest", "西南") },
  { id: "south", label: t2("South & Greater Bay", "华南 / 港澳") },
  { id: "central", label: t2("Central China", "华中") },
  { id: "nwne", label: t2("Northwest & Northeast", "西北 / 东北") },
];

export function ProvinceDestinationsHub({ lang }: { lang: Lang }) {
  const [region, setRegion] = useState<RegionId>("all");
  const [query, setQuery] = useState<string>("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROVINCES.filter((p) => {
      const matchRegion = q ? true : region === "all" || p.region === region;
      if (!matchRegion) return false;
      if (!q) return true;
      const hay = [
        p.province.en,
        p.province.zh,
        p.tag.en,
        p.tag.zh,
        ...p.cities.flatMap((c) => [c.city.en, c.city.zh, ...c.spots.flatMap((s) => [s.en, s.zh])]),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [region, query]);

  return (
    <section className="mt-14 border-t border-slate-200 pt-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="inline-block rounded-full bg-slate-900 px-3 py-0.5 text-xs font-bold text-white">
            {tx(t2("Complete China Directory", "全国按省份完整分类"), lang)}
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            {tx(t2("Popular Cities & Top Attractions by Province", "外国游客热门城市与必去景点大全（按省份分类）"), lang)}
          </h2>
          <p className="mt-1.5 max-w-2xl text-sm text-slate-600">
            {tx(
              t2(
                "Explore 27 provinces, municipalities & SARs across China. Every attraction includes its Chinese name so you can copy-paste straight into Apple Maps, AMap or DiDi.",
                "覆盖全国 27 个热门省市与特别行政区，按大区和省份清晰分类；每个景点均带中英文双语名称，方便直接复制到地图、滴滴或 Trip.com 搜索。",
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
            placeholder={tx(t2("Search province, city, or spot (e.g. Panda, 敦煌)...", "搜索省份、城市或景点（如 兵马俑 / Avatar）..."), lang)}
            className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 focus:border-slate-900 focus:outline-none"
          />
        </div>
      </div>

      {/* Region Filter Pills */}
      {!query.trim() && (
        <div className="mt-5 flex flex-wrap gap-2">
          {REGION_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setRegion(tab.id)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                region === tab.id
                  ? "bg-slate-900 text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {tx(tab.label, lang)}
            </button>
          ))}
        </div>
      )}

      {/* Province Cards Grid */}
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <div key={p.id} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition hover:border-slate-300">
            <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">{tx(p.province, lang)}</h3>
                <div className="mt-0.5 text-xs font-medium text-slate-500">{tx(p.tag, lang)}</div>
              </div>
              {p.transit240 && (
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                  <ShieldCheck className="h-3 w-3" />
                  240h
                </span>
              )}
            </div>

            {p.specialNote && (
              <div className="mt-2.5 rounded-lg bg-amber-50 px-2.5 py-1.5 text-[11px] font-semibold text-amber-900">
                ⚠️ {tx(p.specialNote, lang)}
              </div>
            )}

            <div className="mt-3 flex-1 space-y-3">
              {p.cities.map((c, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-sm font-bold text-slate-900">
                      <MapPin className="h-3.5 w-3.5 text-red-600" />
                      <span>{tx(c.city, lang)}</span>
                    </div>
                    {c.guideId && (
                      <Link
                        href={href(lang, `/cities/${c.guideId}`)}
                        className="inline-flex items-center gap-0.5 text-xs font-semibold text-red-600 hover:underline"
                      >
                        {tx(t2("Deep Guide", "深度指南"), lang)}
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                  <ul className="mt-1.5 space-y-1 pl-5 text-xs leading-relaxed text-slate-600">
                    {c.spots.map((s, si) => (
                      <li key={si} className="list-disc">
                        {tx(s, lang)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-1.5 border-t border-slate-100 pt-3 text-[11px] font-medium text-slate-500">
              <Calendar className="h-3.5 w-3.5 text-slate-400" />
              <span>
                {tx(t2("Best time:", "最佳季节："), lang)} {tx(p.bestTime, lang)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500">
          {tx(t2("No matching province or attraction found. Try another keyword.", "未找到匹配的省份、城市或景点，请换个关键词搜索。"), lang)}
        </div>
      )}
    </section>
  );
}
