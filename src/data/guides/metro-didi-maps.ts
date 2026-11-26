import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "metro-didi-maps",
  category: "transport",
  icon: "map",
  title: t2("Getting Around Chinese Cities: Maps, Subways & DiDi Without Speaking Mandarin", "中国城市出行：地图、地铁、滴滴与出租车"),
  seoTitle: t2(
    "Getting Around China (2026): Apple Maps, AMap Global, Metro Cards & DiDi Foreign Card Setup",
    "2026 中国城市出行攻略：苹果地图、高德英文版、地铁拍外卡与滴滴绑外卡教程"
  ),
  summary: t2(
    "Skip Google Maps and street-hailing headaches. Navigate accurately in English, tap Visa/Mastercard on subways, and pay DiDi with a foreign credit card inside Alipay (no +86 number needed).",
    "告别谷歌地图偏移与路边拦车烦恼：用苹果地图或高德英文版精准导航、拍外卡或支付宝坐地铁，并在支付宝内绑外卡叫滴滴（无需 +86 号码）。"
  ),
  updated: "2026-11-26",
  readMin: 6,
  keyPoints: [
    t2(
      "Forget Google Maps: Due to China's coordinate offset (GCJ-02), Google pins shift by 100–500 m (0.1–0.3 miles) and miss new subway lines. Use Apple Maps on iPhone or AMap Global on Android.",
      "别用谷歌地图：受坐标系偏移影响，谷歌地图定位偏差可达 100–500 米且缺少新地铁线。iPhone 直接用苹果地图，安卓提前装高德地图国际版（AMap Global）。"
    ),
    t2(
      "Skip Uber — Use DiDi inside Alipay: Open DiDi Travel right inside Alipay for 100% English search, upfront pricing (~$2.50–$8.00 / ¥18–58), and auto-translated driver chat — no +86 number required.",
      "在支付宝里用英文叫滴滴：无需独立 App 或 +86 手机号，全英文搜目的地、明码标价（市区约 ¥18–58 / $2.50–$8），司机消息自动翻译。"
    ),
    t2(
      "Subways Cost Under $1 (¥2–10): Tap contactless Visa/Mastercard directly on Beijing & Shanghai airport/metro turnstiles, or activate an Alipay Transport QR pass in 10 seconds anywhere else.",
      "地铁单程不到 1 美元（¥2–10）：北京全线及上海磁悬浮等可直接拍境外 Visa/Mastercard 进站，其余城市 10 秒开通支付宝乘车码。"
    ),
    t2(
      "Street Taxis Use the Meter & Take Cash: Keep small bills as backup, insist on the meter, and show your destination in Chinese using the live address card below.",
      "正规出租车打表且仍收现金：坚持打表、拒坐机场拉客一口价，并用下方实时中文地址卡全屏展示给司机。"
    ),
  ],
  sections: [
    {
      id: "at-a-glance",
      heading: t2("City transport at a glance", "城市出行方式 5 秒速览"),
      blocks: [
        { type: "widget", widget: "cityTransportHub" },
      ],
    },
    {
      id: "maps",
      heading: t2("Maps: why Google Maps fails & what to use", "地图：为什么谷歌地图不好用、该用什么"),
      blocks: [
        {
          type: "p",
          text: t2(
            "Even on international roaming data, Google Maps in Mainland China uses outdated data shifted by 100–500 m (0.1–0.3 miles) and misses half of China's modern metro exits. Pick your phone type below:",
            "即使使用国际漫游网络，谷歌地图在中国大陆的数据依然陈旧且存在 100–500 米偏移，缺少大量新建地铁出口。请选择您的手机系统查看方案："
          ),
        },
        { type: "widget", widget: "mapDeviceSwitcher" },
      ],
    },
    {
      id: "metro",
      heading: t2("Metro: two easy ways to ride", "地铁：两种最省心的乘车方式"),
      blocks: [
        { type: "widget", widget: "metroSplitCard" },
        { type: "tool", tool: "china-metro-maps" },
      ],
    },
    {
      id: "didi",
      heading: t2("Hailing DiDi in English inside Alipay (no +86 number)", "在支付宝里用英文叫滴滴（无需 +86 号码）"),
      blocks: [
        { type: "widget", widget: "didiTimelineMockup" },
      ],
    },
    {
      id: "taxis",
      heading: t2("Taxis: meter, cash & live driver address card", "出租车：打表、现金与实时地址卡"),
      blocks: [
        {
          type: "list",
          items: [
            t2("Official taxis always use the meter (starts around ¥11–16 / ~$1.50–$2.20). Never accept fixed quotes from drivers soliciting rides inside airport arrival halls.", "正规出租车一律打表计价（起步价约 ¥11–16 / $1.50–$2.20），绝不坐到达厅内主动拉客的一口价黑车。"),
            t2("Taxis accept Alipay, WeChat Pay, and cash (keep a few ¥10 and ¥20 notes as backup).", "出租车同时支持支付宝、微信支付和现金（备几张 10 元、20 元零钱作备用）。"),
          ],
        },
        { type: "widget", widget: "liveTaxiCard" },
      ],
    },
  ],
  faq: [
    {
      q: t2("Does Google Maps work in China?", "谷歌地图在中国能用吗？"),
      a: t2(
        "Not reliably. Even on international roaming data, Google's China map is outdated and shifted by up to 500 m (0.3 miles). Use Apple Maps on iPhone or AMap Global (English UI) on Android.",
        "不好用。即使使用国际漫游网络，谷歌的中国地图也存在数据陈旧和最高 500 米的偏移。iPhone 请直接用苹果地图，安卓请提前安装高德地图国际版（英文界面）。"
      ),
    },
    {
      q: t2("Can I use DiDi without a Chinese (+86) phone number?", "没有中国手机号能用滴滴吗？"),
      a: t2(
        "Yes. Open the DiDi mini-program inside Alipay — it works 100% in English with your foreign phone number and charges your linked card automatically.",
        "能。直接在支付宝里打开滴滴出行小程序即可，支持境外手机号与全英文界面，下车自动从绑定的外卡扣款。"
      ),
    },
    {
      q: t2("Can I tap my foreign Visa or Mastercard on Chinese subways?", "在中国坐地铁能直接拍境外 Visa/Mastercard 吗？"),
      a: t2(
        "Yes in major gateways: Beijing (all metro lines + Capital/Daxing Airport Express), Shanghai Maglev, and Chengdu Airport Express accept contactless Visa/Mastercard directly at the gate. Everywhere else, use the Alipay Transport QR code.",
        "在主要枢纽城市可以：北京全线及两大机场线、上海磁悬浮、成都机场快线支持直接拍境外 Visa/Mastercard 实体卡进站；其他城市使用支付宝乘车码即可。"
      ),
    },
    {
      q: t2("Do taxis in China still take cash?", "中国的出租车还收现金吗？"),
      a: t2(
        "Yes, official metered taxis accept cash as well as Alipay and WeChat Pay.",
        "收。正规打表出租车均收现金，同时也支持支付宝和微信支付。"
      ),
    },
  ],
  related: ["essential-apps", "alipay-wechat-pay", "internet-esim", "shared-bikes", "airports", "high-speed-trains"],
};

export default guide;
