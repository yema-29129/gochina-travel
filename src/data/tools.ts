import type { L } from "@/lib/i18n";
import type { ToolId } from "@/data/types";

export interface ToolMeta {
  id: ToolId;
  icon: "visa" | "pay" | "ticket" | "wifi" | "check" | "food" | "sos" | "battery" | "receipt" | "coins" | "car" | "lang";
  title: L;
  seoTitle: L;
  desc: L;
  /** Guide slugs related to this tool */
  related: string[];
}

/** Registry of all interactive tools. URL: /[lang]/tools/[id] */
export const TOOLS: ToolMeta[] = [
  {
    id: "visa-checker",
    icon: "visa",
    title: { en: "Visa-Free & 240-Hour Transit Route Checker", zh: "免签资格与 240 小时过境路线检查器" },
    seoTitle: { en: "China Visa-Free & 240-Hour Transit Checker (Route, Ports & Deadline)", zh: "中国免签与 240 小时过境免签检查器（路线、口岸与截止时间）" },
    desc: { en: "Check your passport, A → China → C route, entry/exit ports, restricted cities and your exact last legal exit time.", zh: "检查你的护照、A → 中国 → C 路线、出入境口岸、禁止前往的城市，以及精确的最晚合法出境时间。" },
    related: ["visa-free-countries", "240-hour-transit", "online-arrival-card"],
  },
  {
    id: "payment-fee-calculator",
    icon: "pay",
    title: { en: "Alipay / WeChat Pay Fee & DCC Calculator", zh: "支付宝 / 微信支付手续费与 DCC 计算器" },
    seoTitle: { en: "Alipay 200 RMB 3% Fee Calculator — Foreign Card Fees, Split Bills & DCC", zh: "支付宝 200 元 3% 手续费计算器——外卡费用、拆单与 DCC" },
    desc: { en: "See the real cost of a payment with the ¥200 rule, your bank's foreign transaction fee, and the safest way to pay.", zh: "根据 200 元规则和你银行的境外交易费，看清一笔付款的真实成本，以及最安全的付款方式。" },
    related: ["alipay-wechat-pay", "atm-cash-dcc"],
  },
  {
    id: "ticket-alarm",
    icon: "ticket",
    title: { en: "Attraction Ticket Release Alarm & Time Zone Converter", zh: "景点放票闹钟与时区换算器" },
    seoTitle: { en: "Forbidden City Ticket Release Time in Your Time Zone (+ Calendar Alarm)", zh: "故宫放票时间换算成你的当地时间（附日历闹钟）" },
    desc: { en: "Find when tickets go on sale in your local time, check closed days and Golden Week, and add a calendar alarm.", zh: "查出门票在你当地时间何时开售，检查闭馆日和黄金周，并添加日历闹钟。" },
    related: ["attraction-tickets", "when-to-go"],
  },
  {
    id: "esim-calculator",
    icon: "wifi",
    title: { en: "Internet Plan & eSIM Data Calculator", zh: "上网方案与 eSIM 流量计算器" },
    seoTitle: { en: "How Much eSIM Data Do I Need in China? Internet Plan Finder", zh: "在中国需要多少 eSIM 流量？上网方案推荐" },
    desc: { en: "Get the right data amount and the right internet option for your phone and travel style.", zh: "根据你的手机和旅行习惯，得出合适的流量和上网方案。" },
    related: ["internet-esim", "essential-apps"],
  },
  {
    id: "packing-checklist",
    icon: "check",
    title: { en: "72-Hour Pre-Flight Personalized Checklist", zh: "出发前 72 小时个性化清单" },
    seoTitle: { en: "China Travel Checklist Generator — What to Prepare Before You Fly", zh: "中国旅行清单生成器——出发前要准备什么" },
    desc: { en: "A checklist built for your phone, travel month and who you travel with. Progress is saved on your device.", zh: "根据你的手机、出行月份和同行人生成的清单。进度保存在你的设备上。" },
    related: ["alipay-wechat-pay", "internet-esim", "when-to-go"],
  },
  {
    id: "allergy-card",
    icon: "food",
    title: { en: "Chinese Food Allergy & Diet Card + Bubble Tea Order Card", zh: "中文食物过敏与饮食卡 + 奶茶点单卡" },
    seoTitle: { en: "Free Chinese Food Allergy Card Generator (Peanut, Gluten, Shellfish, Vegan, Halal)", zh: "免费中文食物过敏卡生成器（花生、麸质、甲壳类、纯素、清真）" },
    desc: { en: "Build a chef-proof Mandarin card that names the exact ingredients and oils to avoid. Show it full screen.", zh: "生成厨师能看懂的中文卡片，写明需要避免的具体食材和油品。可全屏展示。" },
    related: ["food-ordering-allergies", "bubble-tea-coffee"],
  },
  {
    id: "rescue-cards",
    icon: "sos",
    title: { en: "Pharmacy Lookup & Emergency Show-Cards", zh: "药店查询与紧急求助卡" },
    seoTitle: { en: "Buying Medicine in China: Symptom to Chinese Drug Name + Emergency Cards", zh: "在中国买药：症状对应中文药名 + 紧急求助卡" },
    desc: { en: "Pick a symptom to show the pharmacist the Chinese generic drug name, plus 5 full-screen rescue cards.", zh: "选择症状，向药师展示中文通用药名；另有 5 张全屏求助卡。" },
    related: ["safety-health"],
  },
  {
    id: "powerbank-airport",
    icon: "battery",
    title: { en: "Power Bank CCC Checker & Airport Transfer Time", zh: "充电宝 CCC 自检与机场换乘时间" },
    seoTitle: { en: "Will My Power Bank Be Confiscated in China? CCC Rule Checker + Airport Transfer Times", zh: "我的充电宝在中国会被没收吗？CCC 规则自检 + 机场换乘时间" },
    desc: { en: "Check if your power bank is allowed on Chinese domestic flights, and how much time you need to change airports.", zh: "检查你的充电宝能否带上中国国内航班，以及换机场需要多少时间。" },
    related: ["domestic-flights", "airports"],
  },
  {
    id: "tax-refund-calculator",
    icon: "receipt",
    title: { en: "Tax Refund Calculator (Instant Refund)", zh: "离境退税计算器（即买即退）" },
    seoTitle: { en: "China Tourist Tax Refund Calculator — How Much Do You Get Back?", zh: "中国游客离境退税计算器——能退回多少钱？" },
    desc: { en: "Enter what you spend in one store in one day and see your net refund after the agency fee.", zh: "输入同一天在同一家店的消费金额，查看扣除代理费后的实际退税额。" },
    related: ["shopping-tax-refund"],
  },
  {
    id: "currency-converter",
    icon: "coins",
    title: { en: "Currency Converter (CNY)", zh: "汇率换算（人民币）" },
    seoTitle: { en: "CNY Currency Converter for China Travelers", zh: "面向中国游客的人民币汇率换算器" },
    desc: { en: "Convert between yuan and your home currency. Edit the rate to match your bank.", zh: "在人民币和你的本国货币之间换算。可修改汇率以匹配你的银行。" },
    related: ["alipay-wechat-pay", "atm-cash-dcc"],
  },
  {
    id: "taxi-card",
    icon: "car",
    title: { en: "Taxi Address Card", zh: "打车地址卡" },
    seoTitle: { en: "Chinese Taxi Address Card — Show Your Hotel Address to the Driver", zh: "中文打车地址卡——把酒店地址给司机看" },
    desc: { en: "Paste your hotel's Chinese name and address and show it full screen to the driver.", zh: "粘贴酒店的中文名称和地址，全屏展示给司机。" },
    related: ["metro-didi-maps"],
  },
  {
    id: "phrasebook",
    icon: "lang",
    title: { en: "Phrasebook — Tap to Show", zh: "常用语卡——点击展示" },
    seoTitle: { en: "Essential Chinese Phrases for Travelers (Show-to-Local Cards)", zh: "旅行者必备中文短语（展示给当地人的卡片）" },
    desc: { en: "Useful phrases for food, transport, shopping and emergencies. Tap a card to show it full screen.", zh: "餐饮、交通、购物和紧急情况的常用短语。点击卡片即可全屏展示。" },
    related: ["food-ordering-allergies", "safety-health"],
  },
];

export const getTool = (id: string) => TOOLS.find((t) => t.id === id);
