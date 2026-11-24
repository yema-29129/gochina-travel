import type { Lang } from "./i18n";

/**
 * Targeted long-tail SEO keyword matrix for every route on china.tmhzz.com.
 * Covers all 25 high-intent international search queries + bilingual 1:1 Chinese equivalents.
 */
const DEFAULT_KEYWORDS: Record<Lang, string[]> = {
  en: [
    "China travel guide 2026",
    "travel to China as a foreigner",
    "China visa free countries 2026",
    "China 240 hour visa free transit",
    "Alipay foreign credit card China",
    "best eSIM for China without VPN",
    "China high speed train foreigners",
  ],
  zh: [
    "2026 外国人来华旅游指南",
    "外国人中国自由行攻略",
    "中国免签国家名单 2026",
    "中国 240 小时过境免签",
    "支付宝绑定外国银行卡",
    "中国免翻墙 eSIM 推荐",
    "外国人坐中国高铁攻略",
  ],
};

const ROUTE_KEYWORDS: Record<string, Record<Lang, string[]>> = {
  "/": {
    en: [
      "China travel guide 2026",
      "China travel tips for foreigners",
      "China 240 hour visa free transit checker",
      "Alipay WeChat Pay foreign card guide",
      "best eSIM for China 2026",
      "China bullet train guide",
      "Chinese food allergy card generator",
    ],
    zh: [
      "2026 外国人来中国旅游网站",
      "外国人赴华实用指南",
      "240 小时过境免签查询",
      "支付宝微信绑外卡教程",
      "中国旅游 eSIM 流量计算",
      "中国高铁购票攻略",
      "中文食物过敏卡生成器",
    ],
  },
  "/visa": {
    en: [
      "China visa free countries 2026",
      "do I need a visa for China",
      "China 30 day visa free list",
      "China 240 hour visa free transit rules",
      "China online arrival card",
    ],
    zh: [
      "2026 中国免签国家名单",
      "去中国需要签证吗",
      "中国 30 天单方面免签",
      "240 小时过境免签规则",
      "外国人网上入境卡",
    ],
  },
  "/money": {
    en: [
      "how to pay in China as a foreigner",
      "Alipay 200 RMB 3% fee",
      "WeChat Pay foreign card",
      "best eSIM for China without VPN",
      "China ATM DCC scam",
    ],
    zh: [
      "外国人在中国怎么付款",
      "支付宝 200 元 3% 手续费",
      "微信支付绑定外卡",
      "中国免翻墙 eSIM",
      "中国 ATM 取现 DCC 陷阱",
    ],
  },
  "/transport": {
    en: [
      "China high speed train guide foreigners",
      "China domestic flight power bank CCC rule",
      "AMap English China",
      "DiDi in Alipay without Chinese phone number",
      "temporary Chinese driver license foreigners",
    ],
    zh: [
      "外国人坐中国高铁指南",
      "中国国内航班充电宝 CCC 认证",
      "高德地图英文版",
      "支付宝滴滴打车无中国手机号",
      "外国人换领中国临时驾照",
    ],
  },
  "/tools/visa-checker": {
    en: [
      "China 240 hour visa free transit checker",
      "China 240 hour visa free transit rules for US citizens",
      "Does Hong Kong count as a third country for China transit visa",
      "Can you visit Jiuzhaigou or Pingyao on China 240 hour transit",
      "China 30 day visa free eligibility calculator",
    ],
    zh: [
      "中国 240 小时过境免签检查器",
      "美国公民 240 小时过境免签规则",
      "香港算 240 小时过境第三地吗",
      "过境免签能去九寨沟或平遥吗",
      "中国 30 天免签资格查询",
    ],
  },
  "/tools/payment-fee-calculator": {
    en: [
      "Alipay 200 RMB 3% fee calculator",
      "WeChat Pay foreign card fee calculator",
      "avoid foreign transaction fees in China",
      "China DCC dynamic currency conversion calculator",
      "Wise card in China Alipay",
    ],
    zh: [
      "支付宝 200 元 3% 手续费计算器",
      "微信外卡手续费计算",
      "中国支付避免银行货转费",
      "DCC 动态货币转换计算",
      "Wise 卡绑定支付宝",
    ],
  },
  "/tools/ticket-alarm": {
    en: [
      "Forbidden City 7 day ticket release time",
      "Forbidden City ticket release time EST PST GMT",
      "National Museum of China ticket booking foreigners",
      "Shaanxi History Museum ticket release",
      "China museum closed Monday",
    ],
    zh: [
      "故宫提前 7 天放票时间换算",
      "故宫抢票美国时差闹钟",
      "外国人预约国家博物馆门票",
      "陕西历史博物馆放票时间",
      "中国博物馆周一闭馆日历",
    ],
  },
  "/tools/esim-calculator": {
    en: [
      "best eSIM for China that bypasses Great Firewall without VPN",
      "how much eSIM data do I need for China",
      "US iPhone 14 15 16 eSIM China",
      "do I need a +86 Chinese phone number as a tourist",
    ],
    zh: [
      "中国免翻墙 eSIM 推荐",
      "去中国旅游需要多少 eSIM 流量",
      "美版 iPhone 无卡槽中国上网",
      "外国游客需要中国 +86 手机号吗",
    ],
  },
  "/tools/packing-checklist": {
    en: [
      "China travel checklist 2026",
      "what to do 72 hours before flying to China",
      "Android apps before going to China",
      "China 220V hair straightener voltage",
    ],
    zh: [
      "2026 中国旅行行前清单",
      "飞中国前 72 小时准备事项",
      "安卓手机去中国必装 App",
      "中国 220V 电压美发电器注意",
    ],
  },
  "/tools/allergy-card": {
    en: [
      "free printable Chinese peanut allergy card",
      "Chinese gluten free soy sauce allergy card",
      "Chinese vegan halal translation card",
      "how to order bubble tea in Chinese less ice 30% sugar",
    ],
    zh: [
      "免费中文花生过敏卡生成器",
      "中文麦麸酱油过敏卡",
      "中文纯素清真忌口卡",
      "中文奶茶点单少冰三分糖",
    ],
  },
  "/tools/rescue-cards": {
    en: [
      "buying medicine in China pharmacy foreigners",
      "Ibuprofen Tylenol Smecta in Chinese",
      "China emergency numbers foreigners 110 120 12367",
      "Chinese hotel visa free check in card",
    ],
    zh: [
      "外国人在中国药店买药对照表",
      "布洛芬泰诺思密达中文药名",
      "中国紧急电话 110 120 12367",
      "外国人酒店免签入住沟通卡",
    ],
  },
  "/tools/powerbank-airport": {
    en: [
      "China domestic flight power bank 3C CCC certification rule",
      "will my Anker power bank be confiscated in China",
      "Shanghai PVG to SHA airport transfer minimum time",
      "Chengdu TFU to CTU airport transfer time",
      "Beijing PKX to PEK transfer time",
    ],
    zh: [
      "中国国内航班充电宝 3C CCC 认证新规",
      "海外充电宝在中国机场会被没收吗",
      "上海浦东 PVG 转虹桥 SHA 最短时间",
      "成都天府 TFU 转双流 CTU 时间",
      "北京大兴 PKX 转首都 PEK 时间",
    ],
  },
  "/tools/tax-refund-calculator": {
    en: [
      "China 200 RMB instant tax refund calculator 2026",
      "China tourist VAT tax refund 11% 9% net",
      "buy DJI in China tax refund",
      "China paperless tax refund under 10000 RMB",
    ],
    zh: [
      "2026 中国 200 元离境退税计算器",
      "中国即买即退 11% 退税实拿 9%",
      "中国买大疆离境退税",
      "2026 无纸化离境退税新政",
    ],
  },
  "/guides/240-hour-transit": {
    en: [
      "China 240 hour visa free transit rules for US citizens 2026 port list",
      "65 ports China 240 hour visa free transit",
      "Does Hong Kong count as a third country for China 240 hour transit visa",
      "Can you visit Jiuzhaigou or Pingyao on China 240 hour visa free transit",
    ],
    zh: [
      "2026 中国 240 小时过境免签 65 口岸全表",
      "24 省过境免签活动区域限制",
      "过境免签香港算第三地区吗",
      "过境免签禁止前往九寨沟平遥雪乡",
    ],
  },
  "/guides/online-arrival-card": {
    en: [
      "How to fill out China Online Arrival Card before flight",
      "China NIA 12367 online arrival card",
      "China digital arrival card QR code 2026",
    ],
    zh: [
      "中国外国人网上入境卡填报教程",
      "移民局 12367 在线填报入境卡",
      "入境卡电子回执二维码",
    ],
  },
  "/guides/alipay-wechat-pay": {
    en: [
      "How to set up Alipay and WeChat Pay with US UK credit card",
      "Why Alipay declined my Visa card in China security risk fix",
      "How to pay personal WeChat QR codes in China as a foreigner",
      "Alipay 200 RMB 3% fee rule",
    ],
    zh: [
      "支付宝微信绑定外国信用卡教程",
      "支付宝外卡风控拦截解决办法",
      "外国人无法扫个人收款码怎么办",
      "支付宝 200 元 3% 手续费规则",
    ],
  },
  "/guides/atm-cash-dcc": {
    en: [
      "Best ATMs in China for foreign debit cards",
      "avoiding DCC conversion scam China ATM",
      "4 digit PIN at China Bank of China ATM",
    ],
    zh: [
      "中国支持外卡取现的银行 ATM",
      "避免中国 ATM 和 POS 机 DCC 汇率陷阱",
      "外国 4 位密码在中国 ATM 取现",
    ],
  },
  "/guides/high-speed-trains": {
    en: [
      "China high speed train classes explained Business vs First vs Second Class",
      "Railway 12306 vs Trip.com best way for foreigners to book China bullet trains",
      "China bullet train passport e-gate boarding",
      "China high speed train refund fee rules",
    ],
    zh: [
      "中国高铁商务座一等座二等座区别",
      "外国人用 12306 还是 Trip.com 买高铁票",
      "外国护照刷证坐中国高铁",
      "中国高铁退票改签收费规则",
    ],
  },
  "/guides/domestic-flights": {
    en: [
      "China domestic flight power bank 3C CCC certification rule for foreigners",
      "Spring Airlines 9C baggage limit China",
      "foreign passport check in China domestic flight",
    ],
    zh: [
      "中国国内航班充电宝 3C 禁飞令",
      "春秋航空免费行李额规定",
      "外国护照坐中国国内航班值机",
    ],
  },
  "/guides/driving-in-china": {
    en: [
      "How foreigners can get a temporary Chinese driver license at Shanghai Pudong Airport",
      "Is International Driving Permit IDP valid in China",
      "rent a car in China as a foreigner eHi Zuche",
    ],
    zh: [
      "外国人在上海浦东机场办理临时驾照",
      "国际驾照 IDP 在中国合法吗",
      "外国人在中国租车自驾攻略",
    ],
  },
  "/guides/shopping-tax-refund": {
    en: [
      "China 200 RMB instant tax refund guide for tourists buying DJI electronics",
      "buying prescription glasses in China 30 minutes",
      "bargaining rules in China markets",
    ],
    zh: [
      "2026 中国 200 元即买即退离境退税指南",
      "来中国配眼镜 30 分钟立等可取",
      "中国购物砍价指南",
    ],
  },
  "/guides/attraction-tickets": {
    en: [
      "How to book Forbidden City and Tiananmen Square tickets for foreigners 7 day rule",
      "Mutianyu vs Badaling Great Wall for foreigners",
      "Chengdu Panda Base morning ticket tips",
      "Shaanxi History Museum Qin Han branch",
    ],
    zh: [
      "外国人提前 7 天预约故宫天安门门票",
      "慕田峪长城还是八达岭长城",
      "成都大熊猫基地上午场攻略",
      "陕西历史博物馆秦汉馆替代方案",
    ],
  },
  "/cities/beijing": {
    en: ["Beijing travel guide for foreigners 2026", "Forbidden City tickets foreigners", "PEK vs PKX airport to downtown", "Mutianyu Great Wall guide"],
    zh: ["2026 外国人北京旅游指南", "故宫外国护照预约", "北京首都机场与大兴机场进城", "慕田峪长城攻略"],
  },
  "/cities/shanghai": {
    en: ["Shanghai travel guide for foreigners 2026", "PVG Maglev Airport Link Line", "tap Visa card Shanghai Metro", "The Bund French Concession"],
    zh: ["2026 外国人上海旅游指南", "浦东机场磁悬浮与市域机场线", "上海地铁拍外卡", "外滩与法租界攻略"],
  },
  "/cities/chengdu": {
    en: ["Chengdu travel guide for foreigners 2026", "Chengdu TFU vs CTU airport trap", "Chengdu Giant Panda Base best time", "Chengdu mild hotpot"],
    zh: ["2026 外国人成都旅游指南", "成都天府机场与双流机场区别", "成都大熊猫基地最佳时间", "成都微辣鸳鸯锅攻略"],
  },
  "/cities/xian": {
    en: ["Xi'an travel guide for foreigners 2026", "Terracotta Warriors tickets foreigners", "Xi'an City Wall bike ride", "Shaanxi History Museum Qin Han"],
    zh: ["2026 外国人西安旅游指南", "兵马俑外国游客购票", "西安城墙骑行", "陕西历史博物馆秦汉馆"],
  },
  "/cities/chongqing": {
    en: ["Chongqing travel guide for foreigners 2026", "Chongqing 8D cyberpunk city", "Liziba monorail Hongyadong", "Chongqing CKG airport"],
    zh: ["2026 外国人重庆旅游指南", "重庆 8D 魔幻城市攻略", "李子坝轻轨与洪崖洞", "重庆江北机场进城"],
  },
  "/cities/guilin": {
    en: ["Guilin Yangshuo travel guide for foreigners 2026", "Li River cruise Yulong bamboo raft", "Longji rice terraces", "Guilin 240 hour transit"],
    zh: ["2026 外国人桂林阳朔旅游指南", "漓江游船与遇龙河竹筏", "龙脊梯田攻略", "桂林 240 小时过境免签"],
  },
  "/cities/zhangjiajie": {
    en: ["Zhangjiajie travel guide for foreigners 2026", "Avatar Mountains cable car Line A B", "Tianmen Mountain tickets", "Zhangjiajie 240 hour transit"],
    zh: ["2026 外国人张家界旅游指南", "张家界武陵源与天门山索道 A B 线", "阿凡达悬浮山攻略", "张家界 240 小时过境免签"],
  },
  "/cities/yunnan": {
    en: ["Yunnan Dali Lijiang travel guide for foreigners 2026", "Erhai Lake cycling", "Tiger Leaping Gorge", "Yunnan 240 hour transit Shangri-La restricted"],
    zh: ["2026 外国人云南大理丽江旅游指南", "洱海骑行攻略", "虎跳峡徒步", "云南 240 小时过境免签香格里拉限制"],
  },
};

export function getKeywordsForPath(path: string, lang: Lang): string[] {
  const clean = path === "" ? "/" : path;
  const specific = ROUTE_KEYWORDS[clean]?.[lang] ?? [];
  return Array.from(new Set([...specific, ...DEFAULT_KEYWORDS[lang]]));
}
