import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "metro-didi-maps",
  category: "transport",
  icon: "map",
  title: t2("Getting Around Chinese Cities: Maps, Metro, DiDi & Taxis", "中国城市出行：地图、地铁、滴滴与出租车"),
  seoTitle: t2(
    "Why Google Maps Doesn't Work in China, AMap in English & DiDi in Alipay (2026)",
    "为什么谷歌地图在中国不好用？高德英文版设置与支付宝内用滴滴（2026）"
  ),
  summary: t2(
    "Google Maps fails in China. Use Apple Maps or AMap in English, ride the metro with Alipay QR codes or a tapped Visa card, and call DiDi in Alipay with no Chinese number.",
    "谷歌地图在中国不好用。改用苹果地图或高德英文版，用支付宝乘车码或直接刷 Visa 卡坐地铁，并在支付宝里免中国手机号叫滴滴。"
  ),
  updated: "2026-11-24",
  readMin: 8,
  keyPoints: [
    t2("Google Maps is blocked and its China map data is outdated and offset. Use Apple Maps (iPhone) or AMap Global (Android).", "谷歌地图被屏蔽，且其中国地图数据陈旧、有偏移。iPhone 用苹果地图，安卓用高德地图国际版（AMap Global）。"),
    t2("Ride the metro with the Alipay Transport QR code, which works in most Chinese cities.", "用支付宝乘车码坐地铁，大部分中国城市都能用。"),
    t2("Some airport lines let you tap a foreign Visa/Mastercard directly at the gate: Shanghai Maglev, Beijing Capital Airport Express, Daxing Airport Express.", "部分机场线闸机支持直接拍境外 Visa/Mastercard：上海磁悬浮、北京首都机场线、大兴机场线。"),
    t2("Call DiDi in English inside Alipay. No Chinese phone number is needed.", "在支付宝里用英文叫滴滴，无需中国手机号。"),
    t2("Taxis use the meter and still accept cash. Show the driver your address in Chinese.", "出租车打表计价，仍收现金。把中文地址给司机看。"),
  ],
  sections: [
    {
      id: "maps",
      heading: t2("Maps: why Google Maps fails and what to use", "地图：为什么谷歌地图不好用、该用什么"),
      blocks: [
        {
          type: "list",
          items: [
            t2("Google services are blocked in mainland China. Even with a roaming eSIM or VPN, Google's China map is outdated, missing many shops and metro exits, and its satellite layer is shifted by a few hundred meters.", "谷歌服务在中国大陆被屏蔽。即使用漫游 eSIM 或 VPN，谷歌的中国地图数据也很陈旧，缺少大量店铺和地铁出口，卫星图还会偏移几百米。"),
            t2("iPhone: Apple Maps works well in China because it uses AMap (高德) data, with English labels and transit directions.", "iPhone：苹果地图在中国很好用，因为它使用高德地图的数据，有英文标注和公交地铁导航。"),
            t2("Android: install AMap Global (高德地图国际版) before you leave home. Once in China you may not be able to reach Google Play to download apps.", "安卓：出发前在家装好高德地图国际版（AMap Global）。进入中国后可能连不上 Google Play 下载 App。"),
          ],
        },
        {
          type: "steps",
          items: [
            t2("Download AMap Global (or AMap/高德地图) before your trip.", "出发前下载高德地图国际版（或高德地图）。"),
            t2("Open Settings and switch the language to English.", "打开设置，把语言切换为英文。"),
            t2("Allow location access and download offline maps for the cities you will visit.", "允许定位权限，并下载你要去的城市的离线地图。"),
            t2("Search places by their Chinese name when possible (copy it from Trip.com or your hotel booking): results are far more accurate.", "尽量用中文名搜索地点（从 Trip.com 或酒店订单复制）：结果准确得多。"),
          ],
        },
      ],
    },
    {
      id: "metro",
      heading: t2("Metro: Alipay QR codes and tapping foreign cards", "地铁：支付宝乘车码与直接刷外卡"),
      blocks: [
        {
          type: "steps",
          items: [
            t2("Set up Alipay with your foreign card before arrival.", "抵达前用外卡设置好支付宝。"),
            t2("In Alipay, search \"Transport\" (or tap Transport on the home screen) and choose the city you are in.", "在支付宝里搜索“Transport/出行”（或点首页的出行），选择你所在的城市。"),
            t2("Activate that city's metro QR code (first time only), then hold the QR code under the scanner at the gate.", "开通该城市的地铁乘车码（仅首次需要），然后把二维码对准闸机扫码口。"),
            t2("Scan again when you exit. The fare is charged automatically.", "出站时再扫一次。车费自动扣除。"),
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: t2("Tap your Visa/Mastercard on airport lines", "在机场线直接拍 Visa/Mastercard"),
          text: t2(
            "These gates accept foreign Visa/Mastercard physical cards by tapping: Shanghai Maglev (¥40 discounted with a same-day air ticket), Beijing Capital Airport Express (¥25) and Beijing Daxing Airport Express (¥35). More metro lines are adding card tapping, so look for the card logo on the gate.",
            "以下闸机支持直接拍境外 Visa/Mastercard 实体卡：上海磁悬浮（凭当天机票打折仅 40 元）、北京首都机场线（25 元）和北京大兴机场线（35 元）。越来越多地铁线路正在增加刷卡功能，留意闸机上的银行卡标志。"
          ),
        },
        {
          type: "list",
          items: [
            t2("Metro fares are usually ¥2–10 per trip.", "地铁票价一般每次 2–10 元。"),
            t2("Bags go through an X-ray machine at metro entrances. Sunscreen spray over 150 ml is not allowed on metros and trains.", "地铁入口行李要过 X 光安检。超过 150 ml 的防晒喷雾不能带上地铁和高铁。"),
            t2("You can also buy single-journey tickets at machines with cash or by QR payment.", "也可以在售票机用现金或扫码购买单程票。"),
          ],
        },
      ],
    },
    {
      id: "didi",
      heading: t2("DiDi in English inside Alipay (no Chinese number)", "在支付宝里用英文叫滴滴（无需中国手机号）"),
      blocks: [
        {
          type: "steps",
          items: [
            t2("Open Alipay and search \"DiDi\" to open the DiDi mini-program (no separate app needed).", "打开支付宝，搜索“DiDi/滴滴”打开滴滴小程序（无需另装 App）。"),
            t2("Authorize your Alipay account. Your foreign phone number works; no Chinese number is needed.", "授权支付宝账户。可以用境外手机号，不需要中国手机号。"),
            t2("Type your destination. Pasting the Chinese name or address gives the best results.", "输入目的地。粘贴中文名称或地址最准确。"),
            t2("Choose a car type and confirm. Use a larger car (six-seater) if you have two big suitcases each.", "选择车型并确认。如果每人有两个大行李箱，选大车（六座车）。"),
            t2("Check the plate number before getting in. The fare is paid automatically through Alipay at the end.", "上车前核对车牌号。到达后车费通过支付宝自动支付。"),
          ],
        },
        {
          type: "callout",
          tone: "info",
          text: t2("The driver may call you in Chinese. DiDi has built-in translated messages you can use instead of talking.", "司机可能用中文给你打电话。滴滴内置翻译消息功能，可以用文字代替通话。"),
        },
      ],
    },
    {
      id: "taxis",
      heading: t2("Taxis: meter, cash and the address card", "出租车：打表、现金与地址卡"),
      blocks: [
        {
          type: "list",
          items: [
            t2("Official taxis use the meter. Insist on it and never agree to a fixed price from drivers who approach you at airports and stations.", "正规出租车打表计价。坚持打表，绝不要接受在机场、车站主动搭讪的司机报的一口价。"),
            t2("Taxis still accept cash (keep some small notes) as well as Alipay and WeChat Pay.", "出租车仍收现金（备些小面额纸币），也收支付宝和微信支付。"),
            t2("Most drivers do not speak English. Show the address in Chinese.", "大部分司机不会说英语。出示中文地址。"),
          ],
        },
        {
          type: "show",
          zh: "师傅您好！请打表（按计价器收费）送我去这个地址：……，谢谢！",
          meaning: t2(
            "Hello driver! Please use the meter and take me to this address: …… Thank you!",
            "师傅您好！请打表（按计价器收费）送我去这个地址：……，谢谢！"
          ),
        },
        { type: "tool", tool: "taxi-card" },
      ],
    },
  ],
  faq: [
    {
      q: t2("Does Google Maps work in China?", "谷歌地图在中国能用吗？"),
      a: t2("Not well. It is blocked without a roaming eSIM or VPN, and even then the data is outdated and offset. Use Apple Maps (which uses AMap data) or AMap Global in English.", "不好用。没有漫游 eSIM 或 VPN 就无法访问，即使能访问数据也陈旧且有偏移。请用苹果地图（使用高德数据）或高德地图国际版英文界面。"),
    },
    {
      q: t2("Can I use DiDi without a Chinese phone number?", "没有中国手机号能用滴滴吗？"),
      a: t2("Yes. Open DiDi inside Alipay; it works in English with your foreign number and charges your linked card.", "能。在支付宝里打开滴滴；可以用境外手机号使用英文界面，从绑定的卡扣款。"),
    },
    {
      q: t2("Can I tap my Visa card on the metro in China?", "在中国坐地铁能直接刷 Visa 卡吗？"),
      a: t2("On some lines, yes: Shanghai Maglev, Beijing Capital Airport Express and Daxing Airport Express accept tapped Visa/Mastercard. Elsewhere, use the Alipay Transport QR code.", "部分线路可以：上海磁悬浮、北京首都机场线和大兴机场线支持拍 Visa/Mastercard。其他线路请用支付宝乘车码。"),
    },
    {
      q: t2("Do taxis in China take cash?", "中国的出租车收现金吗？"),
      a: t2("Yes, official metered taxis accept cash, as well as Alipay and WeChat Pay.", "收。正规打表出租车收现金，也收支付宝和微信支付。"),
    },
    {
      q: t2("What is the best map app for China?", "在中国用什么地图 App 最好？"),
      a: t2("Apple Maps on iPhone, or AMap Global (高德地图) on Android. Install AMap before you leave home.", "iPhone 用苹果地图，安卓用高德地图国际版。出发前在家装好高德。"),
    },
  ],
  related: ["essential-apps", "alipay-wechat-pay", "internet-esim", "shared-bikes", "airports", "high-speed-trains"],
};

export default guide;
