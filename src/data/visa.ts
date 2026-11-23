/**
 * Data for Tool 1 — China Visa-Free & 240-Hour Transit Route Validator.
 * Source: "全链路痛点拆解与网站规划全书" chapter 1 + "九大核心工具产品手册" tool 1.
 * All visible text is bilingual (zh = 1:1 translation of en).
 */
import type { L } from "@/lib/i18n";

/** Flag emoji from an ISO 3166-1 alpha-2 code. */
export function flagOf(code: string): string {
  if (code === "TW") return "🌏";
  if (!/^[A-Z]{2}$/.test(code)) return "🌐";
  return String.fromCodePoint(...[...code].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));
}

export interface Country {
  code: string;
  en: string;
  zh: string;
  flag: string;
}

/** [ISO code, English name, Chinese name] — global country list (passport selector + regions A/C). */
const RAW: [string, string, string][] = [
  ["AF", "Afghanistan", "阿富汗"], ["AL", "Albania", "阿尔巴尼亚"], ["DZ", "Algeria", "阿尔及利亚"],
  ["AD", "Andorra", "安道尔"], ["AO", "Angola", "安哥拉"], ["AG", "Antigua and Barbuda", "安提瓜和巴布达"],
  ["AR", "Argentina", "阿根廷"], ["AM", "Armenia", "亚美尼亚"], ["AU", "Australia", "澳大利亚"],
  ["AT", "Austria", "奥地利"], ["AZ", "Azerbaijan", "阿塞拜疆"], ["BS", "Bahamas", "巴哈马"],
  ["BH", "Bahrain", "巴林"], ["BD", "Bangladesh", "孟加拉国"], ["BB", "Barbados", "巴巴多斯"],
  ["BY", "Belarus", "白俄罗斯"], ["BE", "Belgium", "比利时"], ["BZ", "Belize", "伯利兹"],
  ["BJ", "Benin", "贝宁"], ["BT", "Bhutan", "不丹"], ["BO", "Bolivia", "玻利维亚"],
  ["BA", "Bosnia and Herzegovina", "波黑"], ["BW", "Botswana", "博茨瓦纳"], ["BR", "Brazil", "巴西"],
  ["BN", "Brunei", "文莱"], ["BG", "Bulgaria", "保加利亚"], ["BF", "Burkina Faso", "布基纳法索"],
  ["BI", "Burundi", "布隆迪"], ["CV", "Cabo Verde", "佛得角"], ["KH", "Cambodia", "柬埔寨"],
  ["CM", "Cameroon", "喀麦隆"], ["CA", "Canada", "加拿大"], ["CF", "Central African Republic", "中非"],
  ["TD", "Chad", "乍得"], ["CL", "Chile", "智利"], ["CO", "Colombia", "哥伦比亚"],
  ["KM", "Comoros", "科摩罗"], ["CG", "Congo", "刚果（布）"], ["CD", "Congo (DR)", "刚果（金）"],
  ["CR", "Costa Rica", "哥斯达黎加"], ["CI", "Côte d'Ivoire", "科特迪瓦"], ["HR", "Croatia", "克罗地亚"],
  ["CU", "Cuba", "古巴"], ["CY", "Cyprus", "塞浦路斯"], ["CZ", "Czech Republic", "捷克"],
  ["DK", "Denmark", "丹麦"], ["DJ", "Djibouti", "吉布提"], ["DM", "Dominica", "多米尼克"],
  ["DO", "Dominican Republic", "多米尼加"], ["EC", "Ecuador", "厄瓜多尔"], ["EG", "Egypt", "埃及"],
  ["SV", "El Salvador", "萨尔瓦多"], ["GQ", "Equatorial Guinea", "赤道几内亚"], ["ER", "Eritrea", "厄立特里亚"],
  ["EE", "Estonia", "爱沙尼亚"], ["SZ", "Eswatini", "斯威士兰"], ["ET", "Ethiopia", "埃塞俄比亚"],
  ["FJ", "Fiji", "斐济"], ["FI", "Finland", "芬兰"], ["FR", "France", "法国"],
  ["GA", "Gabon", "加蓬"], ["GM", "Gambia", "冈比亚"], ["GE", "Georgia", "格鲁吉亚"],
  ["DE", "Germany", "德国"], ["GH", "Ghana", "加纳"], ["GR", "Greece", "希腊"],
  ["GD", "Grenada", "格林纳达"], ["GT", "Guatemala", "危地马拉"], ["GN", "Guinea", "几内亚"],
  ["GW", "Guinea-Bissau", "几内亚比绍"], ["GY", "Guyana", "圭亚那"], ["HT", "Haiti", "海地"],
  ["HN", "Honduras", "洪都拉斯"], ["HU", "Hungary", "匈牙利"], ["IS", "Iceland", "冰岛"],
  ["IN", "India", "印度"], ["ID", "Indonesia", "印度尼西亚"], ["IR", "Iran", "伊朗"],
  ["IQ", "Iraq", "伊拉克"], ["IE", "Ireland", "爱尔兰"], ["IL", "Israel", "以色列"],
  ["IT", "Italy", "意大利"], ["JM", "Jamaica", "牙买加"], ["JP", "Japan", "日本"],
  ["JO", "Jordan", "约旦"], ["KZ", "Kazakhstan", "哈萨克斯坦"], ["KE", "Kenya", "肯尼亚"],
  ["KI", "Kiribati", "基里巴斯"], ["KW", "Kuwait", "科威特"], ["KG", "Kyrgyzstan", "吉尔吉斯斯坦"],
  ["LA", "Laos", "老挝"], ["LV", "Latvia", "拉脱维亚"], ["LB", "Lebanon", "黎巴嫩"],
  ["LS", "Lesotho", "莱索托"], ["LR", "Liberia", "利比里亚"], ["LY", "Libya", "利比亚"],
  ["LI", "Liechtenstein", "列支敦士登"], ["LT", "Lithuania", "立陶宛"], ["LU", "Luxembourg", "卢森堡"],
  ["MG", "Madagascar", "马达加斯加"], ["MW", "Malawi", "马拉维"], ["MY", "Malaysia", "马来西亚"],
  ["MV", "Maldives", "马尔代夫"], ["ML", "Mali", "马里"], ["MT", "Malta", "马耳他"],
  ["MH", "Marshall Islands", "马绍尔群岛"], ["MR", "Mauritania", "毛里塔尼亚"], ["MU", "Mauritius", "毛里求斯"],
  ["MX", "Mexico", "墨西哥"], ["FM", "Micronesia", "密克罗尼西亚"], ["MD", "Moldova", "摩尔多瓦"],
  ["MC", "Monaco", "摩纳哥"], ["MN", "Mongolia", "蒙古"], ["ME", "Montenegro", "黑山"],
  ["MA", "Morocco", "摩洛哥"], ["MZ", "Mozambique", "莫桑比克"], ["MM", "Myanmar", "缅甸"],
  ["NA", "Namibia", "纳米比亚"], ["NR", "Nauru", "瑙鲁"], ["NP", "Nepal", "尼泊尔"],
  ["NL", "Netherlands", "荷兰"], ["NZ", "New Zealand", "新西兰"], ["NI", "Nicaragua", "尼加拉瓜"],
  ["NE", "Niger", "尼日尔"], ["NG", "Nigeria", "尼日利亚"], ["KP", "North Korea", "朝鲜"],
  ["MK", "North Macedonia", "北马其顿"], ["NO", "Norway", "挪威"], ["OM", "Oman", "阿曼"],
  ["PK", "Pakistan", "巴基斯坦"], ["PW", "Palau", "帕劳"], ["PS", "Palestine", "巴勒斯坦"],
  ["PA", "Panama", "巴拿马"], ["PG", "Papua New Guinea", "巴布亚新几内亚"], ["PY", "Paraguay", "巴拉圭"],
  ["PE", "Peru", "秘鲁"], ["PH", "Philippines", "菲律宾"], ["PL", "Poland", "波兰"],
  ["PT", "Portugal", "葡萄牙"], ["QA", "Qatar", "卡塔尔"], ["RO", "Romania", "罗马尼亚"],
  ["RU", "Russia", "俄罗斯"], ["RW", "Rwanda", "卢旺达"], ["KN", "Saint Kitts and Nevis", "圣基茨和尼维斯"],
  ["LC", "Saint Lucia", "圣卢西亚"], ["VC", "Saint Vincent and the Grenadines", "圣文森特和格林纳丁斯"],
  ["WS", "Samoa", "萨摩亚"], ["SM", "San Marino", "圣马力诺"], ["ST", "São Tomé and Príncipe", "圣多美和普林西比"],
  ["SA", "Saudi Arabia", "沙特阿拉伯"], ["SN", "Senegal", "塞内加尔"], ["RS", "Serbia", "塞尔维亚"],
  ["SC", "Seychelles", "塞舌尔"], ["SL", "Sierra Leone", "塞拉利昂"], ["SG", "Singapore", "新加坡"],
  ["SK", "Slovakia", "斯洛伐克"], ["SI", "Slovenia", "斯洛文尼亚"], ["SB", "Solomon Islands", "所罗门群岛"],
  ["SO", "Somalia", "索马里"], ["ZA", "South Africa", "南非"], ["KR", "South Korea", "韩国"],
  ["SS", "South Sudan", "南苏丹"], ["ES", "Spain", "西班牙"], ["LK", "Sri Lanka", "斯里兰卡"],
  ["SD", "Sudan", "苏丹"], ["SR", "Suriname", "苏里南"], ["SE", "Sweden", "瑞典"],
  ["CH", "Switzerland", "瑞士"], ["SY", "Syria", "叙利亚"], ["TJ", "Tajikistan", "塔吉克斯坦"],
  ["TZ", "Tanzania", "坦桑尼亚"], ["TH", "Thailand", "泰国"], ["TL", "Timor-Leste", "东帝汶"],
  ["TG", "Togo", "多哥"], ["TO", "Tonga", "汤加"], ["TT", "Trinidad and Tobago", "特立尼达和多巴哥"],
  ["TN", "Tunisia", "突尼斯"], ["TR", "Türkiye", "土耳其"], ["TM", "Turkmenistan", "土库曼斯坦"],
  ["TV", "Tuvalu", "图瓦卢"], ["UG", "Uganda", "乌干达"], ["UA", "Ukraine", "乌克兰"],
  ["AE", "United Arab Emirates", "阿联酋"], ["GB", "United Kingdom", "英国"], ["US", "United States", "美国"],
  ["UY", "Uruguay", "乌拉圭"], ["UZ", "Uzbekistan", "乌兹别克斯坦"], ["VU", "Vanuatu", "瓦努阿图"],
  ["VA", "Vatican City", "梵蒂冈"], ["VE", "Venezuela", "委内瑞拉"], ["VN", "Vietnam", "越南"],
  ["YE", "Yemen", "也门"], ["ZM", "Zambia", "赞比亚"], ["ZW", "Zimbabwe", "津巴布韦"],
];

/** All passport countries (sorted by English name). */
export const COUNTRIES: Country[] = RAW.map(([code, en, zh]) => ({ code, en, zh, flag: flagOf(code) }));

/** Hong Kong, Macau and Taiwan count as separate regions outside mainland China for transit rules. */
export const SPECIAL_REGIONS: Country[] = [
  { code: "HK", en: "Hong Kong SAR", zh: "中国香港特别行政区", flag: flagOf("HK") },
  { code: "MO", en: "Macau SAR", zh: "中国澳门特别行政区", flag: flagOf("MO") },
  { code: "TW", en: "Taiwan", zh: "中国台湾", flag: flagOf("TW") },
];

/** Options for Region A (last place before mainland China) and Region C (first place after). */
export const REGIONS: Country[] = [...SPECIAL_REGIONS, ...COUNTRIES];

export function findRegion(code: string): Country | undefined {
  return REGIONS.find((c) => c.code === code);
}

/* ------------------------------------------------------------------ */
/* Tier 1 — 30-day unilateral visa-free (50 countries)                 */
/* ------------------------------------------------------------------ */
export const UNILATERAL_30: { group: L; codes: string[] }[] = [
  {
    group: { en: "Europe (35)", zh: "欧洲（35 国）" },
    codes: ["FR", "DE", "IT", "NL", "ES", "CH", "IE", "HU", "AT", "BE", "LU", "PL", "SI", "PT", "GR", "CY", "SK", "NO", "FI", "DK", "IS", "AD", "MC", "LI", "BG", "RO", "HR", "ME", "MK", "MT", "EE", "LV", "RU", "SE", "GB"],
  },
  { group: { en: "Asia (7)", zh: "亚洲（7 国）" }, codes: ["JP", "KR", "BN", "SA", "OM", "KW", "BH"] },
  { group: { en: "Americas (6)", zh: "美洲（6 国）" }, codes: ["CA", "BR", "AR", "CL", "PE", "UY"] },
  { group: { en: "Oceania (2)", zh: "大洋洲（2 国）" }, codes: ["AU", "NZ"] },
];

/** Notes on recent additions to tier 1. */
export const UNILATERAL_NOTES: Record<string, L> = {
  GB: { en: "Included from 17 February 2026.", zh: "自 2026 年 2 月 17 日起纳入。" },
  CA: { en: "Included from 17 February 2026.", zh: "自 2026 年 2 月 17 日起纳入。" },
};

/* ------------------------------------------------------------------ */
/* Tier 2 — mutual visa exemption, ordinary passports (29 countries)   */
/* ------------------------------------------------------------------ */
export const MUTUAL: { group: L; codes: string[] }[] = [
  { group: { en: "Asia (11)", zh: "亚洲（11 国）" }, codes: ["SG", "MY", "TH", "KZ", "AE", "QA", "MV", "AM", "GE", "AZ", "UZ"] },
  { group: { en: "Europe (5)", zh: "欧洲（5 国）" }, codes: ["RS", "BY", "BA", "AL", "SM"] },
  { group: { en: "Americas (7)", zh: "美洲（7 国）" }, codes: ["BS", "BB", "GD", "DM", "AG", "SR", "EC"] },
  { group: { en: "Oceania & Africa (6)", zh: "大洋洲与非洲（6 国）" }, codes: ["FJ", "TO", "WS", "SB", "MU", "SC"] },
];

/** Mutual-exemption countries whose agreement caps stays at 90 days in any 180 days (max 30 days per entry). */
export const RULE_180_90 = ["SG", "MY", "TH", "KZ", "GE", "AZ", "UZ"];

/* ------------------------------------------------------------------ */
/* Tier 3 — 240-hour (10-day) visa-free transit (57 countries)         */
/* ------------------------------------------------------------------ */
export const TRANSIT_240: { group: L; codes: string[] }[] = [
  { group: { en: "Americas (6)", zh: "美洲（6 国）" }, codes: ["US", "CA", "BR", "MX", "AR", "CL"] },
  {
    group: { en: "Europe (40)", zh: "欧洲（40 国）" },
    codes: ["AT", "BE", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IS", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "SK", "SI", "ES", "SE", "CH", "MC", "RU", "GB", "IE", "CY", "BG", "RO", "UA", "RS", "HR", "BA", "ME", "MK", "AL", "BY", "NO"],
  },
  { group: { en: "Asia (9)", zh: "亚洲（9 国）" }, codes: ["KR", "JP", "SG", "BN", "AE", "QA", "ID", "VN", "KG"] },
  { group: { en: "Oceania (2)", zh: "大洋洲（2 国）" }, codes: ["AU", "NZ"] },
];

export const TRANSIT_NOTES: Record<string, L> = {
  VN: { en: "Added in August 2026.", zh: "2026 年 8 月新增。" },
  KG: { en: "Added in August 2026.", zh: "2026 年 8 月新增。" },
};

/** Countries that rely only on the 240-hour policy (they have no 30-day visa-free entry). */
export const TRANSIT_ONLY_CORE = ["US", "MX", "CZ", "LT", "UA", "ID", "VN", "KG"];

const flat = (g: { codes: string[] }[]) => g.flatMap((x) => x.codes);
export const UNILATERAL_CODES = flat(UNILATERAL_30);
export const MUTUAL_CODES = flat(MUTUAL);
export const TRANSIT_CODES = flat(TRANSIT_240);

export type Tier = "unilateral" | "mutual" | "transit" | "none";
export function tiersOf(code: string): Tier[] {
  const t: Tier[] = [];
  if (UNILATERAL_CODES.includes(code)) t.push("unilateral");
  if (MUTUAL_CODES.includes(code)) t.push("mutual");
  if (TRANSIT_CODES.includes(code)) t.push("transit");
  return t.length ? t : ["none"];
}

/* ------------------------------------------------------------------ */
/* 24 provinces + 65 ports for 240-hour transit                         */
/* ------------------------------------------------------------------ */
export interface Province {
  id: string;
  name: L;
  /** Area where 240-hour transit visitors may stay. */
  allowed: L;
  /** Places that are off-limits (only for restricted provinces). */
  forbidden?: L;
  restricted: boolean;
}

export const PROVINCES: Province[] = [
  { id: "beijing", name: { en: "Beijing", zh: "北京市" }, allowed: { en: "All of Beijing", zh: "北京市全域" }, restricted: false },
  { id: "tianjin", name: { en: "Tianjin", zh: "天津市" }, allowed: { en: "All of Tianjin", zh: "天津市全域" }, restricted: false },
  { id: "hebei", name: { en: "Hebei", zh: "河北省" }, allowed: { en: "All of Hebei", zh: "河北省全域" }, restricted: false },
  { id: "liaoning", name: { en: "Liaoning", zh: "辽宁省" }, allowed: { en: "All of Liaoning", zh: "辽宁省全域" }, restricted: false },
  { id: "shanghai", name: { en: "Shanghai", zh: "上海市" }, allowed: { en: "All of Shanghai", zh: "上海市全域" }, restricted: false },
  { id: "jiangsu", name: { en: "Jiangsu", zh: "江苏省" }, allowed: { en: "All of Jiangsu (incl. Suzhou, Nanjing, Wuxi, Yangzhou)", zh: "江苏省全域（含苏州、南京、无锡、扬州等全省）" }, restricted: false },
  { id: "zhejiang", name: { en: "Zhejiang", zh: "浙江省" }, allowed: { en: "All of Zhejiang (incl. Hangzhou, Wuzhen/Jiaxing, Ningbo, Yiwu)", zh: "浙江省全域（含杭州、乌镇嘉兴、宁波、义乌等全省）" }, restricted: false },
  { id: "anhui", name: { en: "Anhui", zh: "安徽省" }, allowed: { en: "All of Anhui (Huangshan and Hongcun are allowed!)", zh: "安徽省全域（可合法前往黄山、宏村！）" }, restricted: false },
  { id: "fujian", name: { en: "Fujian", zh: "福建省" }, allowed: { en: "All of Fujian", zh: "福建省全域" }, restricted: false },
  { id: "shandong", name: { en: "Shandong", zh: "山东省" }, allowed: { en: "All of Shandong", zh: "山东省全域" }, restricted: false },
  { id: "henan", name: { en: "Henan", zh: "河南省" }, allowed: { en: "All of Henan (incl. Luoyang Longmen Grottoes, Kaifeng, Dengfeng Shaolin Temple)", zh: "河南省全域（含洛阳龙门石窟、开封、登封少林寺！）" }, restricted: false },
  { id: "hubei", name: { en: "Hubei", zh: "湖北省" }, allowed: { en: "All of Hubei (incl. Wuhan, Yichang Three Gorges, Enshi, Wudang Mountains)", zh: "湖北省全域（含武汉、宜昌三峡、恩施、武当山！）" }, restricted: false },
  { id: "hunan", name: { en: "Hunan", zh: "湖南省" }, allowed: { en: "All of Hunan (incl. Changsha, Zhangjiajie 'Avatar' peaks, Fenghuang Ancient Town)", zh: "湖南省全域（含长沙、张家界阿凡达峰林、凤凰古城！）" }, restricted: false },
  {
    id: "guangdong", name: { en: "Guangdong", zh: "广东省" },
    allowed: {
      en: "All of Guangdong. Bonus rule: you must enter through one of the 10 listed ports, but you may leave through those 10 ports OR walk out to Hong Kong / Macau through any open passenger port in Guangdong (e.g. Shenzhen Luohu, Futian, Shenzhen Bay, Huanggang, Zhuhai Gongbei).",
      zh: "广东省全域。超级政策福利：入境须走所列 10 个口岸，但离境时不仅可走这 10 个口岸，还可从广东省内所有对外开放客运口岸（如深圳罗湖、福田、深圳湾、皇岗、珠海拱北等口岸）步行出境去港澳。",
    },
    restricted: false,
  },
  { id: "hainan", name: { en: "Hainan", zh: "海南省" }, allowed: { en: "All of Hainan", zh: "海南省全域" }, restricted: false },
  { id: "chongqing", name: { en: "Chongqing", zh: "重庆市" }, allowed: { en: "All of Chongqing", zh: "重庆市全域" }, restricted: false },
  { id: "guizhou", name: { en: "Guizhou", zh: "贵州省" }, allowed: { en: "All of Guizhou (incl. Huangguoshu Waterfall, Xijiang Miao Village, Libo Xiaoqikong)", zh: "贵州省全域（含黄果树瀑布、千户苗寨、荔波小七孔！）" }, restricted: false },
  { id: "shaanxi", name: { en: "Shaanxi", zh: "陕西省" }, allowed: { en: "All of Shaanxi (incl. Xi'an Terracotta Army, Mount Hua, Yan'an)", zh: "陕西省全域（含西安兵马俑、华山、延安！）" }, restricted: false },
  {
    id: "sichuan", name: { en: "Sichuan", zh: "四川省" },
    allowed: { en: "Only 11 cities: Chengdu, Leshan (Leshan Giant Buddha / Mount Emei), Ya'an, Meishan, Deyang (Sanxingdui), Zigong, Luzhou, Suining, Neijiang, Yibin, Ziyang.", zh: "仅限 11 个市：成都、乐山（乐山大佛/峨眉山）、雅安、眉山、德阳（三星堆）、自贡、泸州、遂宁、内江、宜宾、资阳。" },
    forbidden: { en: "Jiuzhaigou / Huanglong (Aba Prefecture), Daocheng Yading / Kangding (Garzê Prefecture), Xichang (Liangshan Prefecture), Mianyang.", zh: "九寨沟/黄龙（属阿坝州）、稻城亚丁/康定（属甘孜州）、西昌（属凉山州）、绵阳。" },
    restricted: true,
  },
  {
    id: "yunnan", name: { en: "Yunnan", zh: "云南省" },
    allowed: { en: "Only 9 cities/prefectures: Kunming, Dali, Lijiang, Xishuangbanna, Yuxi, Chuxiong, Honghe, Wenshan, Pu'er.", zh: "仅限 9 个市州：昆明、大理、丽江、西双版纳、玉溪、楚雄、红河、文山、普洱。" },
    forbidden: { en: "Shangri-La / Meili Snow Mountain (Diqing Tibetan Autonomous Prefecture), Tengchong (Baoshan), Ruili (Dehong Prefecture).", zh: "香格里拉/梅里雪山（属迪庆藏族自治州）、腾冲（属保山市）、瑞丽（属德宏州）。" },
    restricted: true,
  },
  {
    id: "guangxi", name: { en: "Guangxi", zh: "广西壮族自治区" },
    allowed: { en: "Only 12 cities: Guilin (incl. Yangshuo), Nanning, Beihai, Liuzhou, Wuzhou, Fangchenggang, Qinzhou, Guigang, Yulin, Hezhou, Hechi, Laibin.", zh: "仅限 12 个市：桂林（含阳朔）、南宁、北海、柳州、梧州、防城港、钦州、贵港、玉林、贺州、河池、来宾。" },
    forbidden: { en: "Chongzuo (the famous Detian Transnational Waterfall is in Daxin County, Chongzuo), Baise.", zh: "崇左市（著名的德天跨国瀑布在崇左大新县）、百色市。" },
    restricted: true,
  },
  {
    id: "shanxi", name: { en: "Shanxi", zh: "山西省" },
    allowed: { en: "Only 2 cities: Taiyuan and Datong (Yungang Grottoes, Hanging Temple).", zh: "仅限 2 个市：太原市、大同市（可看云冈石窟、悬空寺）。" },
    forbidden: { en: "Pingyao Ancient City (Jinzhong — very easy to stray into!), Mount Wutai (Xinzhou), Hukou Waterfall (Linfen).", zh: "平遥古城（属晋中市，极易误闯越界！）、五台山（属忻州市）、壶口瀑布（属临汾市）。" },
    restricted: true,
  },
  {
    id: "jiangxi", name: { en: "Jiangxi", zh: "江西省" },
    allowed: { en: "Only 2 cities: Nanchang and Jingdezhen (the porcelain capital).", zh: "仅限 2 个市：南昌市、景德镇市（瓷都）。" },
    forbidden: { en: "Wuyuan / Mount Sanqing (Shangrao), Mount Lu (Jiujiang).", zh: "婺源/三清山（属上饶市）、庐山（属九江市）。" },
    restricted: true,
  },
  {
    id: "heilongjiang", name: { en: "Heilongjiang", zh: "黑龙江省" },
    allowed: { en: "Only 1 city: within Harbin's administrative area (Ice and Snow World, Central Street and Yabuli Ski Resort all belong to Harbin).", zh: "仅限 1 个市：哈尔滨市行政区划内（冰雪大世界、中央大街、亚布力滑雪场均属哈尔滨市）。" },
    forbidden: { en: "China Snow Town / Xuexiang (Hailin, Mudanjiang — checking into a hotel there with your passport triggers an alert immediately), Mohe.", zh: "中国雪乡（属牡丹江海林市，一旦住店刷护照立刻触发越界报警！）、漠河。" },
    restricted: true,
  },
];

export interface Port {
  id: string;
  en: string;
  zh: string;
  province: string;
}

/** The 65 ports open for 240-hour visa-free transit (entry and exit). */
export const PORTS: Port[] = [
  { id: "PEK", en: "Beijing Capital International Airport (PEK)", zh: "北京首都国际机场（PEK）", province: "beijing" },
  { id: "PKX", en: "Beijing Daxing International Airport (PKX)", zh: "北京大兴国际机场（PKX）", province: "beijing" },
  { id: "TSN", en: "Tianjin Binhai International Airport (TSN)", zh: "天津滨海国际机场（TSN）", province: "tianjin" },
  { id: "tj-cruise", en: "Tianjin International Cruise Home Port (seaport)", zh: "天津国际邮轮母港（海港口岸客运）", province: "tianjin" },
  { id: "SJW", en: "Shijiazhuang Zhengding International Airport (SJW)", zh: "石家庄正定国际机场（SJW）", province: "hebei" },
  { id: "qhd-sea", en: "Qinhuangdao Seaport (passenger)", zh: "秦皇岛海港口岸（客运）", province: "hebei" },
  { id: "SHE", en: "Shenyang Taoxian International Airport (SHE)", zh: "沈阳桃仙国际机场（SHE）", province: "liaoning" },
  { id: "DLC", en: "Dalian Zhoushuizi International Airport (DLC)", zh: "大连周水子国际机场（DLC）", province: "liaoning" },
  { id: "dl-sea", en: "Dalian Seaport (passenger)", zh: "大连海港口岸（客运）", province: "liaoning" },
  { id: "PVG", en: "Shanghai Pudong International Airport (PVG)", zh: "上海浦东国际机场（PVG）", province: "shanghai" },
  { id: "SHA", en: "Shanghai Hongqiao International Airport (SHA)", zh: "上海虹桥国际机场（SHA）", province: "shanghai" },
  { id: "sh-sea", en: "Shanghai Seaport (Wusongkou International Cruise Port / International Passenger Center)", zh: "上海海港口岸（吴淞口国际邮轮港/国客中心客运）", province: "shanghai" },
  { id: "NKG", en: "Nanjing Lukou International Airport (NKG)", zh: "南京禄口国际机场（NKG）", province: "jiangsu" },
  { id: "WUX", en: "Sunan Shuofang International Airport, Wuxi/Suzhou (WUX)", zh: "苏南硕放国际机场（无锡/苏州 WUX）", province: "jiangsu" },
  { id: "YTY", en: "Yangzhou Taizhou International Airport (YTY)", zh: "扬州泰州国际机场（YTY）", province: "jiangsu" },
  { id: "lyg-sea", en: "Lianyungang Seaport (passenger)", zh: "连云港海港口岸（客运）", province: "jiangsu" },
  { id: "HGH", en: "Hangzhou Xiaoshan International Airport (HGH)", zh: "杭州萧山国际机场（HGH）", province: "zhejiang" },
  { id: "NGB", en: "Ningbo Lishe International Airport (NGB)", zh: "宁波栎社国际机场（NGB）", province: "zhejiang" },
  { id: "WNZ", en: "Wenzhou Longwan International Airport (WNZ)", zh: "温州龙湾国际机场（WNZ）", province: "zhejiang" },
  { id: "YIW", en: "Yiwu Airport (YIW)", zh: "义乌机场（YIW）", province: "zhejiang" },
  { id: "wz-sea", en: "Wenzhou Port (passenger)", zh: "温州港口岸（客运）", province: "zhejiang" },
  { id: "zs-sea", en: "Zhoushan Port (passenger)", zh: "舟山港口岸（客运）", province: "zhejiang" },
  { id: "HFE", en: "Hefei Xinqiao International Airport (HFE)", zh: "合肥新桥国际机场（HFE）", province: "anhui" },
  { id: "TXN", en: "Huangshan Tunxi International Airport (TXN)", zh: "黄山屯溪国际机场（TXN）", province: "anhui" },
  { id: "XMN", en: "Xiamen Gaoqi International Airport (XMN)", zh: "厦门高崎国际机场（XMN）", province: "fujian" },
  { id: "FOC", en: "Fuzhou Changle International Airport (FOC)", zh: "福州长乐国际机场（FOC）", province: "fujian" },
  { id: "JJN", en: "Quanzhou Jinjiang International Airport (JJN)", zh: "泉州晋江国际机场（JJN）", province: "fujian" },
  { id: "WUS", en: "Wuyishan Airport (WUS)", zh: "武夷山机场（WUS）", province: "fujian" },
  { id: "xm-sea", en: "Xiamen Seaport (Wutong Passenger Terminal / International Cruise Center)", zh: "厦门海港口岸（五通客运码头/国际邮轮中心）", province: "fujian" },
  { id: "TAO", en: "Qingdao Jiaodong International Airport (TAO)", zh: "青岛胶东国际机场（TAO）", province: "shandong" },
  { id: "TNA", en: "Jinan Yaoqiang International Airport (TNA)", zh: "济南遥墙国际机场（TNA）", province: "shandong" },
  { id: "YNT", en: "Yantai Penglai International Airport (YNT)", zh: "烟台蓬莱国际机场（YNT）", province: "shandong" },
  { id: "WEH", en: "Weihai Dashuibo International Airport (WEH)", zh: "威海大水泊国际机场（WEH）", province: "shandong" },
  { id: "qd-sea", en: "Qingdao Seaport (passenger)", zh: "青岛海港口岸（客运）", province: "shandong" },
  { id: "CGO", en: "Zhengzhou Xinzheng International Airport (CGO)", zh: "郑州新郑国际机场（CGO）", province: "henan" },
  { id: "WUH", en: "Wuhan Tianhe International Airport (WUH)", zh: "武汉天河国际机场（WUH）", province: "hubei" },
  { id: "CSX", en: "Changsha Huanghua International Airport (CSX)", zh: "长沙黄花国际机场（CSX）", province: "hunan" },
  { id: "DYG", en: "Zhangjiajie Hehua International Airport (DYG)", zh: "张家界荷花国际机场（DYG）", province: "hunan" },
  { id: "CAN", en: "Guangzhou Baiyun International Airport (CAN)", zh: "广州白云国际机场（CAN）", province: "guangdong" },
  { id: "SZX", en: "Shenzhen Bao'an International Airport (SZX)", zh: "深圳宝安国际机场（SZX）", province: "guangdong" },
  { id: "SWA", en: "Jieyang Chaoshan International Airport (SWA)", zh: "揭阳潮汕国际机场（SWA）", province: "guangdong" },
  { id: "gz-nansha", en: "Guangzhou Nansha Port (passenger)", zh: "广州南沙港口岸（客运）", province: "guangdong" },
  { id: "sz-shekou", en: "Shenzhen Shekou Cruise Home Port (passenger)", zh: "深圳蛇口邮轮母港口岸（客运）", province: "guangdong" },
  { id: "gz-pazhou", en: "Guangzhou Pazhou Hong Kong–Macau Ferry Port", zh: "广州琶洲港澳客运口岸", province: "guangdong" },
  { id: "zh-hengqin", en: "Zhuhai Hengqin Port (to Macau)", zh: "珠海横琴口岸（通澳门）", province: "guangdong" },
  { id: "zh-hzmb", en: "Hong Kong–Zhuhai–Macao Bridge Zhuhai Road Port (to HK & Macau)", zh: "港珠澳大桥珠海公路口岸（通港澳）", province: "guangdong" },
  { id: "zs-port", en: "Zhongshan Port (passenger)", zh: "中山港口岸（客运）", province: "guangdong" },
  { id: "west-kowloon", en: "Hong Kong West Kowloon Station port (Guangzhou–Shenzhen–HK high-speed rail)", zh: "广深港高铁香港西九龙站口岸", province: "guangdong" },
  { id: "HAK", en: "Haikou Meilan International Airport (HAK)", zh: "海口美兰国际机场（HAK）", province: "hainan" },
  { id: "SYX", en: "Sanya Phoenix International Airport (SYX)", zh: "三亚凤凰国际机场（SYX）", province: "hainan" },
  { id: "CKG", en: "Chongqing Jiangbei International Airport (CKG)", zh: "重庆江北国际机场（CKG）", province: "chongqing" },
  { id: "KWE", en: "Guiyang Longdongbao International Airport (KWE)", zh: "贵阳龙洞堡国际机场（KWE）", province: "guizhou" },
  { id: "XIY", en: "Xi'an Xianyang International Airport (XIY)", zh: "西安咸阳国际机场（XIY）", province: "shaanxi" },
  { id: "TFU", en: "Chengdu Tianfu International Airport (TFU)", zh: "成都天府国际机场（TFU）", province: "sichuan" },
  { id: "CTU", en: "Chengdu Shuangliu International Airport (CTU)", zh: "成都双流国际机场（CTU）", province: "sichuan" },
  { id: "KMG", en: "Kunming Changshui International Airport (KMG)", zh: "昆明长水国际机场（KMG）", province: "yunnan" },
  { id: "LJG", en: "Lijiang Sanyi International Airport (LJG)", zh: "丽江三义国际机场（LJG）", province: "yunnan" },
  { id: "mohan-rail", en: "Mohan Railway Port (China–Laos Railway trains)", zh: "磨憨铁路口岸（中老铁路列车入出境）", province: "yunnan" },
  { id: "NNG", en: "Nanning Wuxu International Airport (NNG)", zh: "南宁吴圩国际机场（NNG）", province: "guangxi" },
  { id: "KWL", en: "Guilin Liangjiang International Airport (KWL)", zh: "桂林两江国际机场（KWL）", province: "guangxi" },
  { id: "BHY", en: "Beihai Fucheng Airport (BHY)", zh: "北海福成机场（BHY）", province: "guangxi" },
  { id: "bh-sea", en: "Beihai Seaport (passenger)", zh: "北海海港口岸（客运）", province: "guangxi" },
  { id: "TYN", en: "Taiyuan Wusu International Airport (TYN)", zh: "太原武宿国际机场（TYN）", province: "shanxi" },
  { id: "KHN", en: "Nanchang Changbei International Airport (KHN)", zh: "南昌昌北国际机场（KHN）", province: "jiangxi" },
  { id: "HRB", en: "Harbin Taiping International Airport (HRB)", zh: "哈尔滨太平国际机场（HRB）", province: "heilongjiang" },
];

/** Not one of the 65 transit ports (fine for 30-day visa-free, not for 240-hour transit). */
export const OTHER_PORT: Port = {
  id: "other",
  en: "Other international port (not in the 65-port list)",
  zh: "其他国际口岸（不在 65 个口岸名单内）",
  province: "",
};

/** Guangdong land/sea exits to Hong Kong / Macau — allowed as EXIT ports only under 240-hour transit. */
export const GD_SPECIAL_EXITS: Port[] = [
  { id: "gd-luohu", en: "Shenzhen Luohu Port (walk to Hong Kong)", zh: "深圳罗湖口岸（步行去香港）", province: "guangdong" },
  { id: "gd-futian", en: "Shenzhen Futian Port (walk to Hong Kong)", zh: "深圳福田口岸（步行去香港）", province: "guangdong" },
  { id: "gd-szbay", en: "Shenzhen Bay Port (to Hong Kong)", zh: "深圳湾口岸（去香港）", province: "guangdong" },
  { id: "gd-huanggang", en: "Shenzhen Huanggang Port (to Hong Kong)", zh: "深圳皇岗口岸（去香港）", province: "guangdong" },
  { id: "gd-gongbei", en: "Zhuhai Gongbei Port (walk to Macau)", zh: "珠海拱北口岸（步行去澳门）", province: "guangdong" },
  { id: "gd-other", en: "Any other open passenger port in Guangdong (to Hong Kong / Macau)", zh: "广东省内其他对外开放客运口岸（去港澳）", province: "guangdong" },
];

export function findPort(id: string): Port | undefined {
  return [...PORTS, ...GD_SPECIAL_EXITS, OTHER_PORT].find((p) => p.id === id);
}

export function findProvince(id: string): Province | undefined {
  return PROVINCES.find((p) => p.id === id);
}

/* ------------------------------------------------------------------ */
/* Cities / spots for the "places you plan to visit" multi-select      */
/* ------------------------------------------------------------------ */
export interface Spot {
  id: string;
  name: L;
  /** Real administrative area. */
  area: L;
  /** Province id from PROVINCES ("tibet" / "xinjiang" are outside the 24). */
  province: string;
  /** Warning when this spot breaks 240-hour transit rules. */
  warning?: L;
  /** Suggested alternative, if any. */
  alt?: L;
  /** Off-limits for every visa-free policy (Tibet). */
  alwaysForbidden?: boolean;
}

/** High-risk blacklist for 240-hour transit. */
export const BLACKLIST_SPOTS: Spot[] = [
  {
    id: "jiuzhaigou", name: { en: "Jiuzhaigou / Huanglong", zh: "九寨沟/黄龙" }, area: { en: "Aba Prefecture, Sichuan", zh: "四川省阿坝州" }, province: "sichuan",
    warning: { en: "Out of bounds! Sichuan only allows 11 cities such as Chengdu and Leshan — Aba Prefecture is not one of them.", zh: "越界警告！四川仅开放成都、乐山等 11 市，不含阿坝州！" },
    alt: { en: "Alternative: Zhangjiajie (all of Hunan is open).", zh: "替代推荐：张家界（湖南全省开放）。" },
  },
  {
    id: "daocheng", name: { en: "Daocheng Yading / Kangding", zh: "稻城亚丁/康定" }, area: { en: "Garzê Prefecture, Sichuan", zh: "四川省甘孜州" }, province: "sichuan",
    warning: { en: "Out of bounds! Garzê Prefecture is not on Sichuan's list of 11 allowed cities.", zh: "越界警告！甘孜州不在四川 11 市允许名单内！" },
  },
  {
    id: "shangrila", name: { en: "Shangri-La / Meili Snow Mountain", zh: "香格里拉/梅里雪山" }, area: { en: "Diqing Prefecture, Yunnan", zh: "云南省迪庆州" }, province: "yunnan",
    warning: { en: "Out of bounds! Yunnan only allows 9 cities/prefectures such as Kunming, Dali, Lijiang and Xishuangbanna — Diqing is not one of them.", zh: "越界警告！云南仅开放昆明、大理、丽江、版纳等 9 市州，不含迪庆州！" },
  },
  {
    id: "tengchong", name: { en: "Tengchong", zh: "腾冲" }, area: { en: "Baoshan, Yunnan", zh: "云南省保山市" }, province: "yunnan",
    warning: { en: "Out of bounds! Baoshan is not on Yunnan's allowed list.", zh: "越界警告！保山市不在云南开放名单内！" },
  },
  {
    id: "pingyao", name: { en: "Pingyao Ancient City", zh: "平遥古城" }, area: { en: "Jinzhong, Shanxi", zh: "山西省晋中市" }, province: "shanxi",
    warning: { en: "Very common mistake! Shanxi only allows Taiyuan and Datong. Checking into a hotel in Pingyao (Jinzhong) with your passport triggers an out-of-bounds alert immediately.", zh: "高频误闯警告！山西仅开放太原市、大同市，去晋中市平遥古城住店刷护照会立刻触发越界报警！" },
  },
  {
    id: "wutai", name: { en: "Mount Wutai", zh: "五台山" }, area: { en: "Xinzhou, Shanxi", zh: "山西省忻州市" }, province: "shanxi",
    warning: { en: "Out of bounds! Shanxi is limited to Taiyuan and Datong.", zh: "越界警告！山西仅限太原与大同两市。" },
  },
  {
    id: "xuexiang", name: { en: "China Snow Town / Xuexiang", zh: "中国雪乡" }, area: { en: "Mudanjiang, Heilongjiang", zh: "黑龙江牡丹江市" }, province: "heilongjiang",
    warning: { en: "Very common mistake! Heilongjiang only allows Harbin's administrative area. Snow Town belongs to Hailin, Mudanjiang — you may not go there on 240-hour transit.", zh: "高频误闯警告！黑龙江仅限哈尔滨市行政区，雪乡属牡丹江海林市，严禁过境免签前往！" },
  },
  {
    id: "wuyuan", name: { en: "Wuyuan / Mount Sanqing", zh: "婺源/三清山" }, area: { en: "Shangrao, Jiangxi", zh: "江西省上饶市" }, province: "jiangxi",
    warning: { en: "Out of bounds! Jiangxi is limited to Nanchang and Jingdezhen.", zh: "越界警告！江西仅限南昌市与景德镇市！" },
  },
  {
    id: "detian", name: { en: "Detian Waterfall", zh: "德天跨国瀑布" }, area: { en: "Chongzuo, Guangxi", zh: "广西崇左市" }, province: "guangxi",
    warning: { en: "Out of bounds! Guangxi allows 12 cities such as Guilin, Nanning and Beihai — Chongzuo is not one of them.", zh: "越界警告！广西开放桂林、南宁、北海等 12 市，不含崇左市！" },
  },
  {
    id: "tibet", name: { en: "Lhasa / Tibet", zh: "拉萨/西藏全境" }, area: { en: "Tibet Autonomous Region", zh: "西藏自治区" }, province: "tibet", alwaysForbidden: true,
    warning: { en: "Absolutely off-limits! Neither 30-day visa-free nor 240-hour transit lets you enter Tibet on your own. You need an L visa plus a Tibet Travel Permit and must join a tour.", zh: "绝对禁区！无论 30 天免签还是 240 小时过境免签，均不可自行入藏（须办 L 签 + 入藏函跟团）！" },
    alt: {
      en: "All foreigners need a Tibet Travel Permit, applied for 15–20 days in advance through a licensed Tibetan travel agency. The paper original is checked when boarding planes and trains, and a guide must accompany you on a fixed route.",
      zh: "所有外籍人士须提前 15~20 天委托有资质的西藏本地旅行社申办《外国人入藏旅游批准函》，登机和上火车时查验纸质原件，且在藏期间须有导游陪同按既定路线游览。",
    },
  },
  {
    id: "xinjiang", name: { en: "Urumqi / Kashgar (Xinjiang)", zh: "乌鲁木齐/喀什（新疆全境）" }, area: { en: "Xinjiang Uygur Autonomous Region", zh: "新疆维吾尔自治区" }, province: "xinjiang",
    warning: { en: "Not covered by transit visa-free! Xinjiang is not one of the 24 provinces for 240-hour transit (but visitors from 30-day visa-free countries may visit its open cities).", zh: "过境免签不支持！新疆不在 240 小时过境免签的 24 省份名单内（但 30 天免签国游客可去开放城市）。" },
    alt: { en: "Note: border areas such as Tashkurgan (toward Khunjerab Pass) and Baihaba Village need a border-area permit, or check the current season's rules for foreign visitors.", zh: "注意：前往塔什库尔干（帕米尔高原红其拉甫方向）、白哈巴村等边境管理区需办理边境通行证或确认当季外宾接待政策。" },
  },
];

/** Popular places that ARE inside the 240-hour allowed areas. */
export const ALLOWED_SPOTS: Spot[] = [
  { id: "beijing", name: { en: "Beijing", zh: "北京" }, area: { en: "Beijing", zh: "北京市" }, province: "beijing" },
  { id: "tianjin", name: { en: "Tianjin", zh: "天津" }, area: { en: "Tianjin", zh: "天津市" }, province: "tianjin" },
  { id: "shanghai", name: { en: "Shanghai", zh: "上海" }, area: { en: "Shanghai", zh: "上海市" }, province: "shanghai" },
  { id: "suzhou", name: { en: "Suzhou", zh: "苏州" }, area: { en: "Jiangsu", zh: "江苏省" }, province: "jiangsu" },
  { id: "nanjing", name: { en: "Nanjing", zh: "南京" }, area: { en: "Jiangsu", zh: "江苏省" }, province: "jiangsu" },
  { id: "hangzhou", name: { en: "Hangzhou", zh: "杭州" }, area: { en: "Zhejiang", zh: "浙江省" }, province: "zhejiang" },
  { id: "wuzhen", name: { en: "Wuzhen", zh: "乌镇" }, area: { en: "Jiaxing, Zhejiang", zh: "浙江省嘉兴市" }, province: "zhejiang" },
  { id: "huangshan", name: { en: "Huangshan / Hongcun", zh: "黄山/宏村" }, area: { en: "Anhui", zh: "安徽省" }, province: "anhui" },
  { id: "xiamen", name: { en: "Xiamen", zh: "厦门" }, area: { en: "Fujian", zh: "福建省" }, province: "fujian" },
  { id: "qingdao", name: { en: "Qingdao", zh: "青岛" }, area: { en: "Shandong", zh: "山东省" }, province: "shandong" },
  { id: "luoyang", name: { en: "Luoyang / Shaolin Temple", zh: "洛阳/少林寺" }, area: { en: "Henan", zh: "河南省" }, province: "henan" },
  { id: "wuhan", name: { en: "Wuhan / Three Gorges", zh: "武汉/三峡" }, area: { en: "Hubei", zh: "湖北省" }, province: "hubei" },
  { id: "zhangjiajie", name: { en: "Zhangjiajie", zh: "张家界" }, area: { en: "Hunan", zh: "湖南省" }, province: "hunan" },
  { id: "fenghuang", name: { en: "Fenghuang Ancient Town", zh: "凤凰古城" }, area: { en: "Hunan", zh: "湖南省" }, province: "hunan" },
  { id: "guangzhou", name: { en: "Guangzhou", zh: "广州" }, area: { en: "Guangdong", zh: "广东省" }, province: "guangdong" },
  { id: "shenzhen", name: { en: "Shenzhen", zh: "深圳" }, area: { en: "Guangdong", zh: "广东省" }, province: "guangdong" },
  { id: "sanya", name: { en: "Sanya", zh: "三亚" }, area: { en: "Hainan", zh: "海南省" }, province: "hainan" },
  { id: "chongqing", name: { en: "Chongqing", zh: "重庆" }, area: { en: "Chongqing", zh: "重庆市" }, province: "chongqing" },
  { id: "guiyang", name: { en: "Guiyang / Huangguoshu", zh: "贵阳/黄果树" }, area: { en: "Guizhou", zh: "贵州省" }, province: "guizhou" },
  { id: "xian", name: { en: "Xi'an", zh: "西安" }, area: { en: "Shaanxi", zh: "陕西省" }, province: "shaanxi" },
  { id: "chengdu", name: { en: "Chengdu", zh: "成都" }, area: { en: "Sichuan (allowed city)", zh: "四川省（允许城市）" }, province: "sichuan" },
  { id: "leshan", name: { en: "Leshan / Mount Emei", zh: "乐山/峨眉山" }, area: { en: "Sichuan (allowed city)", zh: "四川省（允许城市）" }, province: "sichuan" },
  { id: "kunming", name: { en: "Kunming", zh: "昆明" }, area: { en: "Yunnan (allowed)", zh: "云南省（允许）" }, province: "yunnan" },
  { id: "dali", name: { en: "Dali", zh: "大理" }, area: { en: "Yunnan (allowed)", zh: "云南省（允许）" }, province: "yunnan" },
  { id: "lijiang", name: { en: "Lijiang", zh: "丽江" }, area: { en: "Yunnan (allowed)", zh: "云南省（允许）" }, province: "yunnan" },
  { id: "xishuangbanna", name: { en: "Xishuangbanna", zh: "西双版纳" }, area: { en: "Yunnan (allowed)", zh: "云南省（允许）" }, province: "yunnan" },
  { id: "guilin", name: { en: "Guilin / Yangshuo", zh: "桂林/阳朔" }, area: { en: "Guangxi (allowed city)", zh: "广西（允许城市）" }, province: "guangxi" },
  { id: "datong", name: { en: "Datong / Yungang Grottoes", zh: "大同/云冈石窟" }, area: { en: "Shanxi (allowed city)", zh: "山西省（允许城市）" }, province: "shanxi" },
  { id: "taiyuan", name: { en: "Taiyuan", zh: "太原" }, area: { en: "Shanxi (allowed city)", zh: "山西省（允许城市）" }, province: "shanxi" },
  { id: "jingdezhen", name: { en: "Jingdezhen", zh: "景德镇" }, area: { en: "Jiangxi (allowed city)", zh: "江西省（允许城市）" }, province: "jiangxi" },
  { id: "harbin", name: { en: "Harbin", zh: "哈尔滨" }, area: { en: "Heilongjiang (allowed city)", zh: "黑龙江省（允许城市）" }, province: "heilongjiang" },
];

export const ALL_SPOTS: Spot[] = [...ALLOWED_SPOTS, ...BLACKLIST_SPOTS];

/** Example shown to visitors: how the 240-hour clock works. */
export const TRANSIT_EXAMPLE: L = {
  en: "Example: you land at Shanghai Pudong at 06:00 on 1 October. The remaining 18 hours of 1 October are free. Hour 1 starts at 00:00 on 2 October, and you must clear exit immigration before 23:59 on 11 October — 258 hours in China in total.",
  zh: "举例：你在 10 月 1 日早上 06:00 降落在上海浦东。10 月 1 日当天剩下的 18 个小时白送。10 月 2 日 00:00 才开始算第 1 小时，你最晚须在 10 月 11 日晚上 23:59 前过边检出境——在华总共 258 个小时。",
};
