"use client";

import { useMemo, useState } from "react";
import {
  CreditCard,
  ExternalLink,
  MapPin,
  Maximize2,
  Search,
  Smartphone,
  TrainFront,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { Lang, L, t2, tx } from "@/lib/i18n";

interface MetroCity {
  id: string;
  code: string; // MetroMan map code
  name: L;
  region: "hot" | "east" | "north" | "south" | "west" | "central" | "northeast";
  lines: number;
  tapCard: boolean;
  fare: L;
  hours: string;
  touristLines?: L[];
}

const METRO_CITIES: MetroCity[] = [
  // Top 15 Tourist Cities
  {
    id: "beijing",
    code: "bj",
    name: t2("Beijing", "北京"),
    region: "hot",
    lines: 27,
    tapCard: true,
    fare: t2("¥3–10 (~$0.40–$1.40)", "¥3–10 (约 $0.40–$1.40)"),
    hours: "05:00 – 23:30",
    touristLines: [
      t2("Line 1: Tiananmen Square, Forbidden City, Wangfujing & Universal Studios", "1 号线：天安门、故宫、王府井、环球影城"),
      t2("Line 2 / 5: Lama Temple, Drum Tower & Temple of Heaven", "2 / 5 号线：雍和宫、鼓楼、天坛"),
      t2("Line 8: Olympic Park (Bird's Nest) & Nanluoguxiang", "8 号线：奥林匹克公园（鸟巢）、南锣鼓巷"),
      t2("Capital & Daxing Airport Express: Direct to PEK (¥25) & PKX (¥35) — tap Visa/MC!", "首都 / 大兴机场线：直达两座机场，闸机直接拍外卡！"),
    ],
  },
  {
    id: "shanghai",
    code: "sh",
    name: t2("Shanghai", "上海"),
    region: "hot",
    lines: 20,
    tapCard: true,
    fare: t2("¥3–10 (~$0.40–$1.40)", "¥3–10 (约 $0.40–$1.40)"),
    hours: "05:30 – 23:30",
    touristLines: [
      t2("Line 2: Pudong Airport (PVG) ↔ Lujiazui ↔ The Bund (East Nanjing Rd) ↔ Hongqiao (SHA)", "2 号线：浦东机场 ↔ 陆家嘴 ↔ 南京东路/外滩 ↔ 虹桥枢纽"),
      t2("Line 10: Yu Garden, Xintiandi & French Concession", "10 号线：豫园、新天地、法租界"),
      t2("Line 11: Shanghai Disneyland Resort", "11 号线：上海迪士尼乐园"),
      t2("Maglev & Airport Link Line: 8-min Maglev (¥40 w/ ticket) & 40-min PVG↔SHA express", "磁悬浮 & 市域机场线：8 分钟磁悬浮 + 40 分钟浦东直达虹桥"),
    ],
  },
  {
    id: "guangzhou",
    code: "gz",
    name: t2("Guangzhou", "广州"),
    region: "hot",
    lines: 16,
    tapCard: true,
    fare: t2("¥2–14 (~$0.30–$1.95)", "¥2–14 (约 $0.30–$1.95)"),
    hours: "06:00 – 23:30",
    touristLines: [
      t2("Line 3: Baiyun Airport (CAN) ↔ Zhujiang New Town ↔ Canton Tower", "3 号线：白云机场 ↔ 珠江新城 ↔ 广州塔"),
      t2("Line 1 / 6: Shamian Island, Chen Clan Ancestral Hall & Beijing Rd", "1 / 6 号线：沙面岛、陈家祠、北京路步行街"),
      t2("Line 2: Guangzhou South High-Speed Railway Station", "2 号线：直达广州南高铁站"),
    ],
  },
  {
    id: "shenzhen",
    code: "sz",
    name: t2("Shenzhen", "深圳"),
    region: "hot",
    lines: 17,
    tapCard: true,
    fare: t2("¥2–14 (~$0.30–$1.95)", "¥2–14 (约 $0.30–$1.95)"),
    hours: "06:20 – 23:30",
    touristLines: [
      t2("Line 11: Bao'an Airport (SZX) ↔ Nanshan ↔ Futian CBD (spacious Business Class cars!)", "11 号线：宝安机场 ↔ 南山 ↔ 福田中心区（含宽敞商务车厢）"),
      t2("Line 1 / 2: Window of the World, Huaqiangbei Electronics & Shekou Sea World", "1 / 2 号线：世界之窗、华强北、蛇口海上世界"),
      t2("Line 4: Direct to Futian Port (Hong Kong border) & Shenzhen North HSR", "4 号线：福田口岸（过关香港）与深圳北高铁站"),
    ],
  },
  {
    id: "hongkong",
    code: "hk",
    name: t2("Hong Kong (MTR)", "香港（港铁 MTR）"),
    region: "hot",
    lines: 10,
    tapCard: true,
    fare: t2("HK$5–60 (~$0.65–$7.70)", "HK$5–60 (约 $0.65–$7.70)"),
    hours: "05:50 – 00:50",
    touristLines: [
      t2("Airport Express: 24 min direct from HKG to Kowloon & Central", "机场快线：24 分钟从香港机场直达九龙与中环"),
      t2("Tsuen Wan Line: Central ↔ Tsim Sha Tsui ↔ Mong Kok", "荃湾线：中环 ↔ 尖沙咀 ↔ 旺角"),
      t2("East Rail Line: Direct to Lo Wu / Lok Ma Chau (Shenzhen border)", "东铁线：直达罗湖 / 落马洲深圳口岸"),
    ],
  },
  {
    id: "chengdu",
    code: "cd",
    name: t2("Chengdu", "成都"),
    region: "hot",
    lines: 16,
    tapCard: false,
    fare: t2("¥2–12 (~$0.30–$1.65)", "¥2–12 (约 $0.30–$1.65)"),
    hours: "06:00 – 23:30",
    touristLines: [
      t2("Line 3: Panda Base (Panda Ave Station) & Chunxi Road / Taikoo Li", "3 号线：大熊猫基地（熊猫大道站）、春熙路 / 太古里"),
      t2("Line 2 / 4: People's Park & Kuanzhai Alley (Wide & Narrow Alleys)", "2 / 4 号线：人民公园、宽窄巷子"),
      t2("Line 18 Express: Fast link to Tianfu Int'l Airport (TFU)", "18 号线直快车：直达天府国际机场 (TFU)"),
    ],
  },
  {
    id: "chongqing",
    code: "cq",
    name: t2("Chongqing (CRT)", "重庆（轨道交通）"),
    region: "hot",
    lines: 13,
    tapCard: false,
    fare: t2("¥2–10 (~$0.30–$1.40)", "¥2–10 (约 $0.30–$1.40)"),
    hours: "06:30 – 23:00",
    touristLines: [
      t2("Line 2 Monorail: Famous Liziba Station (train passes right through a residential building!)", "2 号线单轨：网红李子坝轻轨穿楼！"),
      t2("Line 1 / 6: Jiefangbei, Hongyadong & Raffles City", "1 / 6 号线：解放碑、洪崖洞、来福士"),
      t2("Line 10 Express: Jiangbei Int'l Airport (CKG) ↔ Downtown", "10 号线快车：江北机场直达市区"),
    ],
  },
  {
    id: "xian",
    code: "xa",
    name: t2("Xi'an", "西安"),
    region: "hot",
    lines: 12,
    tapCard: false,
    fare: t2("¥2–10 (~$0.30–$1.40)", "¥2–10 (约 $0.30–$1.40)"),
    hours: "06:00 – 23:30",
    touristLines: [
      t2("Line 2: Bell Tower, Muslim Quarter, South Gate (City Wall) & Xi'an North HSR", "2 号线：钟楼、回民街、南门城墙、西安北高铁站"),
      t2("Line 3 / 4: Giant Wild Goose Pagoda & Datang Everbright City", "3 / 4 号线：大雁塔、大唐不夜城"),
      t2("Line 9: Huaqing Palace & shuttle connection to the Terracotta Army", "9 号线：华清池与兵马俑景区接驳专线"),
      t2("Line 14: Xianyang Int'l Airport (XIY) ↔ Xi'an North HSR", "14 号线：咸阳国际机场直达西安北站"),
    ],
  },
  {
    id: "hangzhou",
    code: "hz",
    name: t2("Hangzhou", "杭州"),
    region: "hot",
    lines: 12,
    tapCard: false,
    fare: t2("¥2–12 (~$0.30–$1.65)", "¥2–12 (约 $0.30–$1.65)"),
    hours: "06:00 – 23:00",
    touristLines: [
      t2("Line 1: West Lake (Longxiangqiao), Hangzhou East HSR & Xiaoshan Airport (HGH)", "1 号线：西湖（龙翔桥）、杭州东站、萧山国际机场"),
      t2("Line 19 Airport Express: Fastest link across West Lake, East HSR & HGH Airport", "19 号线机场快线：极速串联西站、东站与萧山机场"),
    ],
  },
  {
    id: "suzhou",
    code: "su",
    name: t2("Suzhou", "苏州"),
    region: "hot",
    lines: 9,
    tapCard: false,
    fare: t2("¥2–10 (~$0.30–$1.40)", "¥2–10 (约 $0.30–$1.40)"),
    hours: "05:40 – 23:00",
    touristLines: [
      t2("Line 6: Humble Administrator's Garden, Suzhou Museum & Tiger Hill", "6 号线：拙政园、苏州博物馆、虎丘"),
      t2("Line 1 / 4: Pingjiang Road, Jinji Lake & Suzhou Railway Station", "1 / 4 号线：平江路、金鸡湖、苏州站"),
      t2("Line 11: Connects directly to Shanghai Metro Line 11!", "11 号线：直接无缝对接上海地铁 11 号线！"),
    ],
  },
  {
    id: "nanjing",
    code: "nj",
    name: t2("Nanjing", "南京"),
    region: "hot",
    lines: 13,
    tapCard: false,
    fare: t2("¥2–12 (~$0.30–$1.65)", "¥2–12 (约 $0.30–$1.65)"),
    hours: "06:00 – 23:00",
    touristLines: [
      t2("Line 2: Ming Xiaoling Mausoleum, Sun Yat-sen Mausoleum & Nanjing Museum", "2 号线：明孝陵、中山陵、南京博物院"),
      t2("Line 1 / 3: Confucius Temple (Fuzimiao), Xinjiekou & Nanjing South HSR", "1 / 3 号线：夫子庙、新街口、南京南站"),
    ],
  },
  {
    id: "wuhan",
    code: "wh",
    name: t2("Wuhan", "武汉"),
    region: "hot",
    lines: 12,
    tapCard: false,
    fare: t2("¥2–10 (~$0.30–$1.40)", "¥2–10 (约 $0.30–$1.40)"),
    hours: "06:00 – 23:00",
    touristLines: [
      t2("Line 5: Yellow Crane Tower (Huanghelou)", "5 号线：黄鹤楼"),
      t2("Line 2: Tianhe Airport (WUH), Jianghan Rd & Hankou Station", "2 号线：天河机场、江汉路、汉口站"),
    ],
  },
  {
    id: "tianjin",
    code: "tj",
    name: t2("Tianjin", "天津"),
    region: "hot",
    lines: 11,
    tapCard: false,
    fare: t2("¥2–10 (~$0.30–$1.40)", "¥2–10 (约 $0.30–$1.40)"),
    hours: "06:00 – 23:00",
    touristLines: [
      t2("Line 2 / 3: Tianjin Railway Station (30 min from Beijing!), Italian Style Town & Five Avenues", "2 / 3 号线：天津站（京津城际 30 分钟）、意式风情区、五大道"),
    ],
  },
  {
    id: "kunming",
    code: "km",
    name: t2("Kunming", "昆明"),
    region: "hot",
    lines: 6,
    tapCard: false,
    fare: t2("¥2–8 (~$0.30–$1.10)", "¥2–8 (约 $0.30–$1.10)"),
    hours: "06:20 – 22:45",
    touristLines: [
      t2("Line 6: Changshui Int'l Airport (KMG) ↔ Downtown transfer", "6 号线：长水国际机场进城快线"),
      t2("Line 1 / 4: Kunming South HSR (trains to Dali 2h & Lijiang 3.5h)", "1 / 4 号线：昆明南高铁站（去大理 2h / 丽江 3.5h）"),
    ],
  },
  {
    id: "xiamen",
    code: "xm",
    name: t2("Xiamen", "厦门"),
    region: "hot",
    lines: 3,
    tapCard: false,
    fare: t2("¥2–8 (~$0.30–$1.10)", "¥2–8 (约 $0.30–$1.10)"),
    hours: "06:30 – 22:30",
    touristLines: [
      t2("Line 1: Scenic ocean-crossing train (Spirited Away sea track!) & Zhongshan Rd (Gulangyu ferry)", "1 号线：网红海上跨海地铁、中山路（去鼓浪屿码头）"),
    ],
  },

  // Remaining 37+ Chinese Metro / Urban Rail Cities (Complete National Directory)
  { id: "macau", code: "mo", name: t2("Macau (LRT)", "澳门（轻轨）"), region: "south", lines: 3, tapCard: false, fare: t2("MOP 6–12 (~$0.75–$1.50)", "MOP 6–12 (约 $0.75–$1.50)"), hours: "06:30 – 23:15" },
  { id: "qingdao", code: "qd", name: t2("Qingdao", "青岛"), region: "east", lines: 8, tapCard: false, fare: t2("¥2–10 (~$0.30–$1.40)", "¥2–10 (约 $0.30–$1.40)"), hours: "06:00 – 22:45" },
  { id: "changsha", code: "cs", name: t2("Changsha", "长沙"), region: "central", lines: 7, tapCard: false, fare: t2("¥2–8 (~$0.30–$1.10)", "¥2–8 (约 $0.30–$1.10)"), hours: "06:30 – 23:00" },
  { id: "zhengzhou", code: "zz", name: t2("Zhengzhou", "郑州"), region: "central", lines: 12, tapCard: false, fare: t2("¥2–10 (~$0.30–$1.40)", "¥2–10 (约 $0.30–$1.40)"), hours: "06:00 – 23:00" },
  { id: "ningbo", code: "nb", name: t2("Ningbo", "宁波"), region: "east", lines: 6, tapCard: false, fare: t2("¥2–10 (~$0.30–$1.40)", "¥2–10 (约 $0.30–$1.40)"), hours: "06:00 – 22:30" },
  { id: "wuxi", code: "wx", name: t2("Wuxi", "无锡"), region: "east", lines: 5, tapCard: false, fare: t2("¥2–9 (~$0.30–$1.25)", "¥2–9 (约 $0.30–$1.25)"), hours: "06:00 – 22:30" },
  { id: "hefei", code: "hf", name: t2("Hefei", "合肥"), region: "east", lines: 6, tapCard: false, fare: t2("¥2–8 (~$0.30–$1.10)", "¥2–8 (约 $0.30–$1.10)"), hours: "06:00 – 22:30" },
  { id: "fuzhou", code: "fz", name: t2("Fuzhou", "福州"), region: "east", lines: 5, tapCard: false, fare: t2("¥2–10 (~$0.30–$1.40)", "¥2–10 (约 $0.30–$1.40)"), hours: "06:30 – 23:00" },
  { id: "jinan", code: "jn", name: t2("Jinan", "济南"), region: "east", lines: 3, tapCard: false, fare: t2("¥2–9 (~$0.30–$1.25)", "¥2–9 (约 $0.30–$1.25)"), hours: "06:00 – 22:00" },
  { id: "dalian", code: "dl", name: t2("Dalian", "大连"), region: "northeast", lines: 6, tapCard: false, fare: t2("¥2–8 (~$0.30–$1.10)", "¥2–8 (约 $0.30–$1.10)"), hours: "06:00 – 22:30" },
  { id: "shenyang", code: "sy", name: t2("Shenyang", "沈阳"), region: "northeast", lines: 6, tapCard: false, fare: t2("¥2–7 (~$0.30–$1.00)", "¥2–7 (约 $0.30–$1.00)"), hours: "05:30 – 23:00" },
  { id: "harbin", code: "hb", name: t2("Harbin", "哈尔滨"), region: "northeast", lines: 3, tapCard: false, fare: t2("¥2–7 (~$0.30–$1.00)", "¥2–7 (约 $0.30–$1.00)"), hours: "06:00 – 22:30" },
  { id: "changchun", code: "cc", name: t2("Changchun", "长春"), region: "northeast", lines: 6, tapCard: false, fare: t2("¥2–7 (~$0.30–$1.00)", "¥2–7 (约 $0.30–$1.00)"), hours: "05:50 – 21:30" },
  { id: "nanning", code: "nn", name: t2("Nanning", "南宁"), region: "south", lines: 5, tapCard: false, fare: t2("¥2–8 (~$0.30–$1.10)", "¥2–8 (约 $0.30–$1.10)"), hours: "06:30 – 23:00" },
  { id: "nanchang", code: "nc", name: t2("Nanchang", "南昌"), region: "central", lines: 4, tapCard: false, fare: t2("¥2–7 (~$0.30–$1.00)", "¥2–7 (约 $0.30–$1.00)"), hours: "06:00 – 22:30" },
  { id: "guiyang", code: "gy", name: t2("Guiyang", "贵阳"), region: "west", lines: 4, tapCard: false, fare: t2("¥2–9 (~$0.30–$1.25)", "¥2–9 (约 $0.30–$1.25)"), hours: "06:20 – 23:00" },
  { id: "foshan", code: "fs", name: t2("Foshan", "佛山"), region: "south", lines: 4, tapCard: false, fare: t2("¥2–10 (~$0.30–$1.40)", "¥2–10 (约 $0.30–$1.40)"), hours: "06:00 – 23:00" },
  { id: "dongguan", code: "dg", name: t2("Dongguan", "东莞"), region: "south", lines: 1, tapCard: false, fare: t2("¥2–8 (~$0.30–$1.10)", "¥2–8 (约 $0.30–$1.10)"), hours: "06:30 – 22:30" },
  { id: "shijiazhuang", code: "sjz", name: t2("Shijiazhuang", "石家庄"), region: "north", lines: 3, tapCard: false, fare: t2("¥2–6 (~$0.30–$0.85)", "¥2–6 (约 $0.30–$0.85)"), hours: "06:30 – 22:00" },
  { id: "taiyuan", code: "ty", name: t2("Taiyuan", "太原"), region: "north", lines: 2, tapCard: false, fare: t2("¥2–6 (~$0.30–$0.85)", "¥2–6 (约 $0.30–$0.85)"), hours: "06:00 – 22:00" },
  { id: "hohhot", code: "hhht", name: t2("Hohhot", "呼和浩特"), region: "north", lines: 2, tapCard: false, fare: t2("¥2–6 (~$0.30–$0.85)", "¥2–6 (约 $0.30–$0.85)"), hours: "06:00 – 22:00" },
  { id: "lanzhou", code: "lz", name: t2("Lanzhou", "兰州"), region: "west", lines: 2, tapCard: false, fare: t2("¥2–6 (~$0.30–$0.85)", "¥2–6 (约 $0.30–$0.85)"), hours: "06:30 – 22:30" },
  { id: "urumqi", code: "wlmq", name: t2("Urumqi", "乌鲁木齐"), region: "west", lines: 1, tapCard: false, fare: t2("¥2–7 (~$0.30–$1.00)", "¥2–7 (约 $0.30–$1.00)"), hours: "07:40 – 23:30" },
  { id: "luoyang", code: "ly", name: t2("Luoyang", "洛阳"), region: "central", lines: 2, tapCard: false, fare: t2("¥2–6 (~$0.30–$0.85)", "¥2–6 (约 $0.30–$0.85)"), hours: "06:30 – 22:30" },
  { id: "xuzhou", code: "xz", name: t2("Xuzhou", "徐州"), region: "east", lines: 3, tapCard: false, fare: t2("¥2–6 (~$0.30–$0.85)", "¥2–6 (约 $0.30–$0.85)"), hours: "06:00 – 22:30" },
  { id: "changzhou", code: "cz", name: t2("Changzhou", "常州"), region: "east", lines: 2, tapCard: false, fare: t2("¥2–7 (~$0.30–$1.00)", "¥2–7 (约 $0.30–$1.00)"), hours: "06:00 – 22:00" },
  { id: "nantong", code: "nt", name: t2("Nantong", "南通"), region: "east", lines: 2, tapCard: false, fare: t2("¥2–7 (~$0.30–$1.00)", "¥2–7 (约 $0.30–$1.00)"), hours: "06:00 – 22:00" },
  { id: "shaoxing", code: "sx", name: t2("Shaoxing", "绍兴"), region: "east", lines: 2, tapCard: false, fare: t2("¥2–9 (~$0.30–$1.25)", "¥2–9 (约 $0.30–$1.25)"), hours: "06:00 – 22:30" },
  { id: "wenzhou", code: "wz", name: t2("Wenzhou", "温州"), region: "east", lines: 2, tapCard: false, fare: t2("¥2–10 (~$0.30–$1.40)", "¥2–10 (约 $0.30–$1.40)"), hours: "06:20 – 21:30" },
  { id: "jinhua", code: "jh", name: t2("Jinhua / Yiwu", "金华 / 义乌"), region: "east", lines: 2, tapCard: false, fare: t2("¥2–15 (~$0.30–$2.10)", "¥2–15 (约 $0.30–$2.10)"), hours: "06:25 – 21:30" },
  { id: "taizhou", code: "tz", name: t2("Taizhou", "台州"), region: "east", lines: 1, tapCard: false, fare: t2("¥2–12 (~$0.30–$1.65)", "¥2–12 (约 $0.30–$1.65)"), hours: "06:30 – 22:00" },
  { id: "wuhu", code: "whu", name: t2("Wuhu (Monorail)", "芜湖（单轨）"), region: "east", lines: 2, tapCard: false, fare: t2("¥2–6 (~$0.30–$0.85)", "¥2–6 (约 $0.30–$0.85)"), hours: "06:30 – 22:00" },
  { id: "chuzhou", code: "chz", name: t2("Chuzhou (Nanjing Link)", "滁州（宁滁城际）"), region: "east", lines: 1, tapCard: false, fare: t2("¥2–9 (~$0.30–$1.25)", "¥2–9 (约 $0.30–$1.25)"), hours: "06:10 – 22:00" },
  { id: "taipei", code: "tp", name: t2("Taipei (MRT)", "台北（捷运）"), region: "south", lines: 6, tapCard: false, fare: t2("NT$20–65 (~$0.65–$2.10)", "NT$20–65 (约 $0.65–$2.10)"), hours: "06:00 – 00:00" },
];

const REGIONS: { id: "all" | MetroCity["region"]; label: L }[] = [
  { id: "all", label: t2(`All ${METRO_CITIES.length} Cities`, `全部 ${METRO_CITIES.length} 座城市`) },
  { id: "hot", label: t2("★ Top 15 Tourist Cities", "★ Top 15 热门旅游城市") },
  { id: "east", label: t2("East China", "华东") },
  { id: "south", label: t2("South & Greater Bay", "华南 / 港澳台") },
  { id: "north", label: t2("North China", "华北") },
  { id: "west", label: t2("West China", "西南 / 西北") },
  { id: "central", label: t2("Central China", "华中") },
  { id: "northeast", label: t2("Northeast", "东北") },
];

export default function ChinaMetroMaps({ lang }: { lang: Lang }) {
  const [selectedId, setSelectedId] = useState<string>("beijing");
  const [query, setQuery] = useState<string>("");
  const [region, setRegion] = useState<"all" | MetroCity["region"]>("hot");
  const [mapLang, setMapLang] = useState<"en" | "cn">(lang === "zh" ? "cn" : "en");
  const [zoom, setZoom] = useState<number>(1);
  const [imgError, setImgError] = useState<boolean>(false);
  const [fullscreen, setFullscreen] = useState<boolean>(false);

  const city = useMemo(
    () => METRO_CITIES.find((c) => c.id === selectedId) ?? METRO_CITIES[0],
    [selectedId],
  );

  const filteredCities = useMemo(() => {
    const q = query.trim().toLowerCase();
    return METRO_CITIES.filter((c) => {
      const matchQuery =
        !q ||
        c.name.en.toLowerCase().includes(q) ||
        c.name.zh.toLowerCase().includes(q) ||
        c.id.includes(q) ||
        c.code.includes(q);
      const matchRegion = q ? true : region === "all" || c.region === region;
      return matchQuery && matchRegion;
    });
  }, [query, region]);

  const mapUrl = `https://www.metroman.cn/assets/img/metro/mapwebp/routemap_${city.code}_${mapLang}.webp`;

  const selectCity = (id: string) => {
    setSelectedId(id);
    setZoom(1);
    setImgError(false);
  };

  return (
    <div className="space-y-6">
      {/* Search + Region Filter + City Selector */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              {tx(t2("All China Metro Maps Hub (English & Chinese)", "中国全部城市地铁线路图大全（中英双语高清）"), lang)}
            </h2>
            <p className="mt-0.5 text-xs text-slate-500">
              {tx(
                t2(
                  `Browse ${METRO_CITIES.length} Chinese metro & rail cities in one place — zoomable bilingual maps, foreign-card tap status, fares & key tourist lines.`,
                  `一站式查看全国 ${METRO_CITIES.length} 座地铁城市：高清可缩放双语线网图、外卡拍闸支持状态、票价与游客必坐核心线路。`,
                ),
                lang,
              )}
            </p>
          </div>
          <div className="relative sm:w-64">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={tx(t2("Search city (e.g. Xi'an, 成都)...", "搜索城市（如 西安 / Chengdu）..."), lang)}
              className="w-full rounded-lg border border-slate-300 py-2 pl-9 pr-3 text-xs font-medium text-slate-900 focus:border-slate-900 focus:outline-none sm:text-sm"
            />
          </div>
        </div>

        {/* Region Filter Tabs */}
        {!query.trim() && (
          <div className="mt-3.5 flex flex-wrap gap-1.5 border-b border-slate-100 pb-3">
            {REGIONS.map((r) => (
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
        )}

        {/* City Pills Grid */}
        <div className="mt-3.5 flex flex-wrap gap-2">
          {filteredCities.map((c) => {
            const active = c.id === city.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => selectCity(c.id)}
                className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                  active
                    ? "border-red-600 bg-red-600 text-white shadow-xs"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-400 hover:bg-white"
                }`}
              >
                <span>{tx(c.name, lang)}</span>
                <span className={`text-[10px] ${active ? "text-red-100" : "text-slate-400"}`}>
                  {c.lines}L
                </span>
                {c.tapCard && (
                  <span
                    title={tx(t2("Tap foreign Visa/MC directly", "支持直接拍境外外卡"), lang)}
                    className={`rounded px-1 py-0.2 text-[9px] font-bold ${
                      active ? "bg-white/20 text-white" : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    VISA
                  </span>
                )}
              </button>
            );
          })}
          {filteredCities.length === 0 && (
            <div className="py-3 text-xs text-slate-500">
              {tx(t2("No matching city found. Try searching in English or Chinese.", "未找到匹配城市，请换个关键词试试。"), lang)}
            </div>
          )}
        </div>
      </div>

      {/* Selected City Metro Dashboard & Interactive HD Map Viewer */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <TrainFront className="h-5 w-5 text-red-600" />
              <h3 className="text-xl font-extrabold text-slate-900">
                {city.name.en} · {city.name.zh}
              </h3>
              <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-700">
                {city.lines} {tx(t2("Lines", "条线路"), lang)}
              </span>
            </div>
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-semibold ${
                  city.tapCard ? "bg-emerald-50 text-emerald-800" : "bg-blue-50 text-blue-800"
                }`}
              >
                {city.tapCard ? <CreditCard className="h-3.5 w-3.5" /> : <Smartphone className="h-3.5 w-3.5" />}
                {city.tapCard
                  ? tx(t2("Tap Foreign Visa / MC / Amex / JCB + Alipay QR", "支持直接拍境外外卡 + 支付宝乘车码"), lang)
                  : tx(t2("Use Alipay Transport QR Code (10s setup)", "使用支付宝「出行」乘车码（10 秒开通）"), lang)}
              </span>
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-medium text-slate-700">
                💰 {tx(city.fare, lang)}
              </span>
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-medium text-slate-700">
                🕒 {city.hours}
              </span>
            </div>
          </div>

          {/* Map Controls */}
          <div className="flex flex-wrap items-center gap-1.5">
            <div className="inline-flex overflow-hidden rounded-lg border border-slate-200 text-xs font-semibold">
              <button
                type="button"
                onClick={() => {
                  setMapLang("en");
                  setImgError(false);
                }}
                className={`px-2.5 py-1.5 ${mapLang === "en" ? "bg-slate-900 text-white" : "bg-white text-slate-600 hover:bg-slate-50"}`}
              >
                English Map
              </button>
              <button
                type="button"
                onClick={() => {
                  setMapLang("cn");
                  setImgError(false);
                }}
                className={`px-2.5 py-1.5 ${mapLang === "cn" ? "bg-slate-900 text-white" : "bg-white text-slate-600 hover:bg-slate-50"}`}
              >
                中文图
              </button>
            </div>
            {!imgError && (
              <>
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.max(1, Number((z - 0.5).toFixed(1))))}
                  className="rounded-lg border border-slate-200 p-1.5 text-slate-700 hover:bg-slate-50"
                  title="Zoom out"
                >
                  <ZoomOut className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.min(3, Number((z + 0.5).toFixed(1))))}
                  className="rounded-lg border border-slate-200 p-1.5 text-slate-700 hover:bg-slate-50"
                  title="Zoom in"
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setFullscreen(true)}
                  className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-600"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                  {tx(t2("Fullscreen", "全屏看大图"), lang)}
                </button>
              </>
            )}
          </div>
        </div>

        {/* Interactive Map Viewport */}
        <div className="mt-4 overflow-auto rounded-xl border border-slate-200 bg-slate-50" style={{ maxHeight: "560px" }}>
          {!imgError ? (
            <div className="flex min-h-[320px] items-center justify-center p-2">
              <img
                key={`${city.code}-${mapLang}`}
                src={mapUrl}
                alt={`${city.name.en} (${city.name.zh}) Metro Subway Map`}
                onError={() => setImgError(true)}
                style={{ width: `${zoom * 100}%`, maxWidth: "none" }}
                className="rounded-lg transition-all duration-200"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
              <MapPin className="h-8 w-8 text-slate-400" />
              <div className="mt-2 text-sm font-bold text-slate-900">
                {tx(
                  t2(
                    `Open ${city.name.en} Interactive Live Metro Map`,
                    `打开 ${city.name.zh} 高清互动地铁全图`,
                  ),
                  lang,
                )}
              </div>
              <p className="mt-1 max-w-md text-xs text-slate-600">
                {tx(
                  t2(
                    "View the latest zoomable bilingual map, live route planner & exact transfer fares on MetroMan.",
                    "点击下方按钮直达 MetroMan 查看该城市最新高清双语线网图、换乘规划与实时票价。",
                  ),
                  lang,
                )}
              </p>
              <a
                href="https://www.metroman.cn/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-red-600"
              >
                {tx(t2("Open Interactive Map on MetroMan", "前往 MetroMan 查看高清地铁图"), lang)}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          )}
        </div>

        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
          <span>
            {tx(
              t2(
                "Tip: Click Zoom (+) or Fullscreen to read station names clearly, or open the live route planner.",
                "提示：点「+」放大或「全屏看大图」清晰查看每个站点，也可以打开在线换乘规划器。",
              ),
              lang,
            )}
          </span>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-red-600"
          >
            {tx(t2("Open Original HD Image", "新窗口打开原图"), lang)}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Key Tourist Lines Cheat Sheet (for Top 15 cities) */}
        {city.touristLines && city.touristLines.length > 0 && (
          <div className="mt-4 rounded-xl border border-slate-200 border-l-4 border-l-slate-900 bg-slate-50/70 p-4">
            <div className="text-xs font-bold uppercase tracking-wide text-slate-900">
              ⭐ {tx(t2(`Must-Know Tourist Lines in ${city.name.en}`, `${city.name.zh} 游客必坐核心地铁线路`), lang)}
            </div>
            <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-slate-700">
              {city.touristLines.map((line, i) => (
                <li key={i}>• {tx(line, lang)}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Bonus Tip: How to pull up the full subway map in 2 seconds inside AMap */}
      <div className="rounded-xl border border-slate-200 border-l-4 border-l-sky-500 bg-white p-4 text-xs leading-relaxed text-slate-700">
        <strong className="text-slate-900">
          💡 {tx(t2("Pro Tip: How to open the live full-city subway map inside AMap (高德地图) in 2 seconds", "实用彩蛋：如何在高德地图（AMap）里 2 秒调出全城地铁图？"), lang)}
        </strong>
        <p className="mt-1">
          {tx(
            t2(
              'Even locals often miss this! Open AMap Global → tap the search bar → simply type “Subway” (or “地铁图”) and tap the “Subway Map” shortcut card at the top. You can tap any two stations directly on the map to get live transfer times and fares.',
              '连很多中国人都不知道这个隐藏入口！打开高德地图（AMap）→ 点顶部搜索框 → 直接输入“地铁图”（英文版搜“Subway”）→ 点顶部弹出的「地铁图」卡片即可调出全城交互式地铁图，点任意两站直接算时间和票价。',
            ),
            lang,
          )}
        </p>
      </div>

      {/* Fullscreen Lightbox */}
      {fullscreen && !imgError && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-slate-950/95 p-4"
          onClick={() => setFullscreen(false)}
        >
          <div className="mb-3 flex items-center justify-between text-white" onClick={(e) => e.stopPropagation()}>
            <span className="text-sm font-bold">
              {city.name.en} · {city.name.zh} ({mapLang === "en" ? "English" : "中文"})
            </span>
            <button
              type="button"
              onClick={() => setFullscreen(false)}
              className="rounded-full bg-white/15 p-2 text-white hover:bg-white/25"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-auto rounded-xl bg-white p-2" onClick={(e) => e.stopPropagation()}>
            <img
              src={mapUrl}
              alt={`${city.name.en} Metro Map Fullscreen`}
              className="mx-auto min-w-[900px] w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
