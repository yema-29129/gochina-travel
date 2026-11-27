import type { Lang } from "./i18n";

/**
 * Targeted long-tail SEO keyword matrix for every route on gochinadesk.com.
 * Covers all 25 high-intent international search queries + bilingual 1:1 Chinese equivalents.
 */
const DEFAULT_KEYWORDS: Record<Lang, string[]> = {
  en: [
    "China travel guide 2026",
    "travel to China as a foreigner",
    "China visa free countries 2026",
    "China 240 hour visa free transit",
    "Alipay foreign credit card China",
    "China international roaming eSIM",
    "China high speed train foreigners",
  ],
  zh: [
    "2026 外国人来华旅游指南",
    "外国人中国自由行攻略",
    "中国免签国家名单 2026",
    "中国 240 小时过境免签",
    "支付宝绑定外国银行卡",
    "中国国际漫游 eSIM 推荐",
    "外国人坐中国高铁攻略",
  ],
  ja: [
    "中国旅行 ガイド 2026",
    "中国 ビザ免除 30日 日本人",
    "アリペイ クレジットカード 登録",
    "中国 eSIM おすすめ",
    "中国 新幹線 12306 予約",
    "上海 北京 地下鉄 路線図",
    "中国 国内線 モバイルバッテリー CCC",
  ],
  ko: [
    "중국 여행 가이드 2026",
    "중국 무비자 30일 한국인",
    "알리페이 위챗페이 해외카드 등록",
    "중국 eSIM 추천",
    "중국 고속철도 12306 예매",
    "상하이 베이징 장가계 지하철 노선도",
    "중국 국내선 보조배터리 CCC 규정",
  ],
};

const ROUTE_KEYWORDS: Record<string, Partial<Record<Lang, string[]>>> = {
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
      "China 30 day visa free list UK Canada",
      "China 240 hour visa free transit rules TIMATIC",
      "China online arrival card",
    ],
    zh: [
      "2026 中国免签国家名单",
      "去中国需要签证吗",
      "中国 30 天单方面免签",
      "240 小时过境免签规则 TIMATIC",
      "外国人网上入境卡",
    ],
    ja: [
      "中国 ビザ免除 30日 日本人 2026",
      "中国 240時間 トランジット ビザ免除",
      "中国 入国 ビザ 不要 条件",
      "中国 オンライン入国カード",
    ],
    ko: [
      "중국 무비자 30일 한국인 2026",
      "중국 240시간 경유 무비자 조건",
      "중국 입국 비자 면제 규정",
      "중국 온라인 입국카드 작성법",
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
      "WeChat Pay foreign card setup tutorial",
      "Tencent TenPayGo foreigners China",
      "UnionPay Nihao China app tourist",
      "China personal QR code cash warning",
      "Wise card in China Alipay",
    ],
    zh: [
      "支付宝 200 元 3% 手续费计算器",
      "微信支付绑外卡教程",
      "腾讯 TenPayGo 外国人支付",
      "中国银联你好中国 Nihao China",
      "中国个人收款码备现金提醒",
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
      "best China roaming eSIM 2026",
      "Singapore routing China eSIM TikTok ChatGPT",
      "how much eSIM data do I need for China 50GB",
      "US iPhone 14 15 16 17 eSIM only China",
      "do I need a +86 Chinese phone number as a tourist",
    ],
    zh: [
      "2026 中国国际漫游 eSIM 推荐",
      "新加坡路由中国 eSIM 支持 TikTok ChatGPT",
      "去中国旅游需要多少 eSIM 流量 50GB",
      "美版 iPhone 无卡槽中国上网",
      "外国游客需要中国 +86 手机号吗",
    ],
  },
  "/tools/china-metro-maps": {
    en: [
      "China metro maps English HD 2026",
      "Beijing subway map English PDF",
      "Shanghai metro map English",
      "Chengdu Xi'an Chongqing Guangzhou Shenzhen metro map",
      "China subway tap foreign Visa Mastercard cities list",
    ],
    zh: [
      "地铁线路图",
      "中国地铁线路图高清全图 2026",
      "2026 中国全部城市地铁线路图高清",
      "北京上海广州深圳地铁英文图",
      "成都西安重庆杭州地铁全图",
      "中国支持地铁拍境外外卡城市全表",
    ],
  },
  "/tools/currency-converter": {
    en: ["USD to Yuan converter", "CNY to USD converter China travel", "Chinese Yuan exchange rate calculator", "RMB to EUR GBP AUD JPY KRW"],
    zh: ["人民币美元汇率换算器", "中国旅游人民币换算", "外币兑换点汇率参考"],
    ja: ["中国元 日本円 換算", "人民元 両替 レート"],
    ko: ["중국 화폐 환율", "위안화 원화 환율 계산기"],
  },
  "/tools/taxi-card": {
    en: ["Chinese taxi address card generator", "show hotel address to taxi driver in China", "Beijing Shanghai taxi Mandarin card"],
    zh: ["中文出租车地址卡生成器", "给中国出租车司机看的中文地址卡"],
  },
  "/tools/phrasebook": {
    en: ["essential Chinese travel phrases show cards", "Mandarin survival phrases for tourists China", "point and show Chinese cards"],
    zh: ["中国旅游必备中文短语闪卡", "外国人来华常用中文沟通卡"],
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
      "China tax refund calculator 2026",
      "how much is the tax refund in China",
      "China tax refund minimum spend 200 RMB",
      "China 200 RMB instant tax refund calculator 2026",
      "China tourist VAT tax refund 11% 9% net",
      "buy DJI in China tax refund",
      "China paperless tax refund under 10000 RMB",
    ],
    zh: [
      "2026 中国 200 元离境退税计算器",
      "中国离境退税最低消费 200 元",
      "中国即买即退 11% 退税实拿 9%",
      "中国买大疆离境退税",
      "2026 无纸化离境退税新政",
    ],
  },
  "/guides/240-hour-transit": {
    en: [
      "transit through Mainland China 240 hour visa free",
      "China 240 hour visa free transit rules for US citizens 2026 port list",
      "65 ports China 240 hour visa free transit Mohan Yunnan",
      "Hong Kong West Kowloon train 240 hour transit entry exit",
      "China 240 hour transit airline check in TIMATIC denied boarding",
    ],
    zh: [
      "2026 中国 240 小时过境免签 65 口岸全表",
      "香港西九龙高铁 240 小时过境免签能出不能进",
      "航司值机 TIMATIC 240 小时过境免签拒登机",
      "过境免签禁止前往九寨沟平遥雪乡",
    ],
    ja: [
      "中国 240時間 トランジット ビザ免除 65口岸 2026",
      "香港 西九龍 高速鉄道 240時間 トランジット",
      "中国 240時間 乗継 ビザなし チェックイン TIMATIC",
    ],
    ko: [
      "중국 240시간 경유 무비자 65개 입국항 2026",
      "홍콩 서구룡 고속철 240시간 경유 입국 불가",
      "중국 240시간 무비자 항공사 체크인 TIMATIC",
    ],
  },
  "/guides/online-arrival-card": {
    en: [
      "China arrival card 2026",
      "Chinese arrival card online form",
      "How to fill out China Online Arrival Card before flight",
      "China NIA 12367 online arrival card",
      "China digital arrival card QR code 2026",
    ],
    zh: [
      "中国外国人网上入境卡填报教程",
      "入境前几天填中国入境卡",
      "移民局 12367 在线填报入境卡",
      "入境卡电子回执二维码",
    ],
  },
  "/guides/alipay-wechat-pay": {
    en: [
      "Alipay with US credit card 2026",
      "WeChat credit card foreign Visa Mastercard",
      "Alipay for foreigners 2026",
      "China payment app for tourists",
      "WeChat Pay international foreign credit card",
      "can I set up Alipay outside China before travel",
      "how to set up Alipay and WeChat Pay with US UK credit card",
      "Alipay declined my Visa card in China fix",
      "Alipay 200 RMB 3% fee rule explained",
      "Alipay TourCard vs direct foreign credit card",
    ],
    zh: [
      "2026 支付宝微信绑定外国信用卡教程",
      "旅行中国 支付宝 微信支付",
      "支付宝 Alipay 外国人实名认证",
      "支付宝外卡风控拒付解决办法",
      "支付宝 200 元 3% 手续费规则",
    ],
    ja: [
      "アリペイ クレジットカード 登録 中国 2026",
      "Alipay 使い方 日本人 旅行",
      "アリペイ 200元 手数料 3%",
      "アリペイ 決済できない 対処法",
    ],
    ko: [
      "알리페이 해외카드 등록 중국 2026",
      "Alipay 사용법 한국인 중국여행",
      "알리페이 200위안 수수료 3%",
      "알리페이 결제 실패 해결",
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
      "driving license of the People's Republic of China foreigners",
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
      "how much is the tax refund in China",
      "China tax refund minimum spend 200 RMB",
      "China 200 RMB instant tax refund guide 2026",
      "China departure tax refund calculator 11% 9%",
      "buy DJI in China tax refund airport customs",
      "buying prescription glasses in China 30 minutes",
      "bargaining rules in China markets Shanghai Beijing",
    ],
    zh: [
      "2026 中国 200 元即买即退离境退税指南",
      "中国离境退税率 11% 实拿 9%",
      "来中国买大疆离境退税",
      "来中国配眼镜 30 分钟立等可取",
      "中国购物砍价指南",
    ],
    ja: [
      "中国 免税 200元 2026",
      "中国 即時免税 やり方 アリペイ",
      "上海 北京 免税 ショッピング 手続き",
      "DJI 中国 免税 価格 安い",
      "中国 空港 税関 免税 預け荷物前",
      "中国 メガネ 30分 値段",
    ],
    ko: [
      "중국 택스리펀 200위안 2026",
      "중국 즉시 환급 알리페이 방법",
      "상하이 베이징 쇼핑 면세 환급률 9%",
      "중국 DJI 구매 택스리펀",
      "중국 공항 세관 택스리펀 수하물",
    ],
  },
  "/guides/attraction-tickets": {
    en: [
      "Forbidden City opening hours and 7 day ticket booking",
      "How to book Forbidden City and Tiananmen Square tickets for foreigners 7 day rule",
      "Mutianyu vs Badaling Great Wall for foreigners",
      "Chengdu Panda Base morning ticket tips",
      "Shaanxi History Museum Qin Han branch",
    ],
    zh: [
      "天安门广场预约入口外国人",
      "故宫官网提前几天放票 7 天",
      "外国人提前 7 天预约故宫天安门门票",
      "慕田峪长城还是八达岭长城",
      "成都大熊猫基地上午场攻略",
      "陕西历史博物馆秦汉馆替代方案",
    ],
  },
  "/cities": {
    en: [
      "best places to visit in China 2026",
      "China destinations by province",
      "China 10 day 14 day itinerary bullet train",
      "China attraction tickets Forbidden City Zhangjiajie Terracotta Warriors",
      "Canton Fair Guangzhou Yiwu market business travel China",
    ],
    zh: [
      "2026 中国必去旅游目的地与经典路线",
      "中国各省份热门城市与景点大全",
      "中国 10 天 14 天高铁经典行程",
      "故宫张家界兵马俑英文购票",
      "广交会义乌商务考察攻略",
    ],
  },
  "/guides": {
    en: ["China travel guides 2026", "China visa payment train airport guides for foreigners"],
    zh: ["2026 中国旅游实用指南大全", "外国人赴华签证支付高铁机场攻略"],
  },
  "/tools": {
    en: ["China travel tools calculators for foreigners", "240h visa checker eSIM calculator metro maps"],
    zh: ["外国人来华实用工具箱", "240小时免签检查 eSIM计算器 全国地铁图"],
  },
  "/planner": {
    en: ["China trip itinerary planner 2026", "7 day 10 day 14 day China bullet train itinerary generator"],
    zh: ["2026 中国自由行行程规划器", "7天10天14天中国高铁路线生成器"],
  },
  "/guides/visa-free-countries": {
    en: [
      "visa free China 2026",
      "China 30 day visa free countries list 2026",
      "China visa free extension 2026",
      "China visa Australia 30 day visa free",
      "China entry documents required tourists",
      "valid 10 year China visa in expired passport",
      "China 30 day visa free Hong Kong visa run",
      "China 24 hour police registration Airbnb friends home",
    ],
    zh: [
      "2026 中国 30 天单方面免签国家名单",
      "旧护照过期 10 年中国签证还能用吗",
      "中国 30 天免签去香港刷天数 Visa Run",
      "外国人住朋友家 24 小时派出所住宿登记",
    ],
    ja: [
      "中国 ビザ免除 30日 対象国 一覧 2026",
      "中国 ビザ免除 日本人 ビザラン 香港 注意",
      "中国 24時間 派出所 臨時宿泊登録",
    ],
    ko: [
      "중국 30일 무비자 국가 목록 2026",
      "중국 무비자 홍콩 비자런 주의사항",
      "중국 24시간 파출소 임시숙박등록",
    ],
  },
  "/guides/special-visa-free": {
    en: ["Hainan 30 day visa free 59 countries", "China cruise 15 day visa free", "Guangdong 144 hour Hong Kong tour visa free"],
    zh: ["海南 59 国 30 天免签", "中国邮轮 15 天免签", "港澳团广东 144 小时免签"],
  },
  "/guides/arrival-immigration": {
    en: ["China airport immigration fingerprint customs foreigners", "24 hour hotel police registration China"],
    zh: ["外国人入境中国边检指纹海关流程", "外国人来华 24 小时住宿登记"],
  },
  "/guides/internet-esim": {
    en: ["China internet guide roaming eSIM 2026", "how to use Google WhatsApp Instagram in China roaming eSIM", "China local SIM vs roaming eSIM"],
    zh: ["2026 中国国际漫游 eSIM 上网指南", "外国人在中国怎么用 Google WhatsApp"],
  },
  "/guides/metro-didi-maps": {
    en: [
      "Gaode in English AMap Global China",
      "does Alipay have maps DiDi maps China",
      "China metro map English",
      "Shanghai Pass tourist transit card",
      "getting around Chinese cities foreigners 2026",
      "DiDi foreign credit card Alipay China",
      "Apple Maps AMap Global English China",
      "DiDi in Alipay without +86 number",
      "China subway tap foreign Visa Mastercard",
    ],
    zh: ["2026 中国城市出行攻略", "高德地图英文版设置", "上海交通卡 Shanghai Pass", "支付宝内免+86叫滴滴", "中国地铁拍境外外卡城市"],
  },
  "/guides/airports": {
    en: [
      "best airport in China to fly into",
      "best airport China international arrival",
      "where to land in China first time",
      "China top 12 international airports transfer guide 2026",
      "Shanghai PVG to SHA transfer time",
      "Beijing PEK PKX Chengdu TFU airport express tap Visa",
    ],
    zh: ["去中国飞哪个机场", "2026 中国 12 大国际机场进城交通", "浦东转虹桥最短时间", "首都大兴天府机场快轨拍外卡"],
  },
  "/guides/shared-bikes": {
    en: [
      "how foreigners ride shared bikes in China 2026",
      "HelloRide Meituan Qingju bike Alipay WeChat foreigner",
      "China shared bike parking fine 15 30 RMB",
      "shared e-bikes Beijing Shanghai rules",
    ],
    zh: [
      "外国人在中国扫共享单车支付宝哈啰教程 2026",
      "中国共享单车哈啰美团青桔免押金",
      "共享单车白色P区还车防扣调度费申诉",
      "港澳台及境外手机号骑共享单车",
    ],
    ja: [
      "中国 シェアサイクル 乗り方 アリペイ 2026",
      "中国 自転車 レンタル HelloRide 美団",
      "上海 北京 シェアサイクル 駐輪 罰金",
    ],
    ko: [
      "중국 공유자전거 타는법 알리페이 위챗 2026",
      "중국 헬로바이크 메이퇀 자전거 반납 구역",
    ],
  },
  "/guides/food-ordering-allergies": {
    en: ["ordering food in China QR code menu foreigners", "Chinese food allergy dining guide"],
    zh: ["外国人在中国扫码点餐与食物过敏指南"],
  },
  "/guides/bubble-tea-coffee": {
    en: ["how to order bubble tea in China English HEYTEA Chagee Luckin Coffee"],
    zh: ["中国奶茶咖啡点单英文攻略喜茶霸王茶姬瑞幸"],
  },
  "/guides/food-delivery-luggage": {
    en: ["Meituan Ele.me food delivery China foreigners", "luggage storage China train stations"],
    zh: ["外国人在中国点外卖与高铁站行李寄存"],
  },
  "/guides/essential-apps": {
    en: ["messaging app in China WeChat foreigners", "essential apps for China travel 2026 foreigners", "best apps to download before going to China"],
    zh: ["2026 来中国旅游必装 App 清单", "中国常用聊天软件微信"],
  },
  "/guides/when-to-go": {
    en: [
      "best time to visit China 2026 2027",
      "China public holidays Golden Week Labor Day dates 2026",
      "China weather month by month travel guide",
      "avoid crowds in China National Day Chinese New Year",
      "South China winter no central heating packing",
    ],
    zh: [
      "2026 2027 中国最佳旅游季节与避雷节假日日历",
      "什么时候去中国旅游最好 避开国庆五一暑假",
      "中国全年 1-12 月天气与最佳城市推荐",
    ],
    ja: [
      "中国旅行 ベストシーズン 2026 2027",
      "中国 祝日 国慶節 労働節 春節 混雑回避",
      "上海 北京 季節 天気 服装 おすすめ時期",
    ],
    ko: [
      "중국 여행 추천 시기 2026 2027",
      "중국 국경절 노동절 춘절 연휴 피하기",
      "상하이 베이징 월별 날씨 옷차림",
    ],
  },
  "/guides/hotels-in-china": {
    en: [
      "China hotels for foreigners 2026",
      "hotel refused foreign guest China foreign guest license",
      "Trip.com vs Booking.com China hotels",
      "China hotel 24 hour police passport registration",
      "Atour Ji Hotel China foreigners check in",
    ],
    zh: [
      "2026 外国人在中国订酒店指南",
      "中国酒店外宾资质筛选可接待外宾",
      "外国人住酒店 24 小时护照住宿登记",
      "Trip.com 和 Booking 订中国酒店对比",
    ],
    ja: [
      "中国 ホテル 外国人 宿泊 2026",
      "中国 ホテル 予約 Trip.com Booking 違い",
      "中国 ホテル パスポート 登録 24時間",
    ],
    ko: [
      "중국 호텔 외국인 투숙 가능 2026",
      "중국 호텔 예약 트립닷컴 부킹닷컴 비교",
      "중국 호텔 여권 임시숙박등록 24시간",
    ],
  },
  "/guides/china-tourist-visa-l": {
    en: [
      "China tourist visa L application 2026 US citizens",
      "China 10 year multiple entry L visa requirements",
      "COVA China visa online form guide CVASC",
      "do US citizens need hotel flight bookings China L visa 2026",
    ],
    zh: [
      "2026 中国 L 字旅游签证申请攻略",
      "美国公民中国 10 年多次旅游签证",
      "COVA 中国签证网申填表指南",
    ],
    ja: [
      "中国 観光ビザ Lビザ 申請 2026",
      "中国ビザ COVA 入力 方法",
    ],
    ko: [
      "중국 관광비자 L비자 신청 2026",
      "중국 비자 COVA 작성법",
    ],
  },
  "/guides/medications-customs-lost-phone": {
    en: [
      "can I bring Adderall Ritalin ADHD medication to China 2026",
      "China CBD gummies THC vape drug laws tourists",
      "lost or stolen phone in China without Alipay playbook",
      "China drone CAAC registration no fly zones Beijing",
    ],
    zh: [
      "2026 带处方药 ADHD 管制药入境中国规定",
      "中国海关大麻 CBD 电子烟法律红线",
      "外国人在中国丢手机怎么办",
      "中国无人机 CAAC 实名登记禁飞区",
    ],
    ja: [
      "中国 処方薬 持ち込み ADHD薬 規制 2026",
      "中国 CBD 大麻 禁止 罰則",
      "中国 スマホ 紛失 対処",
    ],
    ko: [
      "중국 처방약 반입 ADHD 약 규정 2026",
      "중국 CBD 대마 금지 처벌",
      "중국 휴대폰 분실 대처법",
    ],
  },
  "/guides/safety-health": {
    en: ["is China safe for tourists 2026", "China emergency numbers 110 120 12367 pharmacy guide"],
    zh: ["2026 中国旅游安全与紧急电话药店就医指南"],
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
