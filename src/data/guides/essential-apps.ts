import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "essential-apps",
  category: "money",
  icon: "apps",
  title: t2("Essential Apps for China: What to Install Before You Fly", "中国旅游必备 App 清单：起飞前必须装好的软件"),
  seoTitle: t2(
    "Best Apps for Traveling in China (2026): Alipay, WeChat, AMap, Trip.com & Android Warning",
    "2026 来中国旅游必备 App 全清单：支付宝、微信、高德英文版、Trip.com 与安卓避坑警告"
  ),
  summary: t2(
    "The 8 essential apps for China (Alipay, WeChat, Apple Maps/AMap, Trip.com, DiDi, 12306, Translate/Pleco, Sherpa's), Android Play warning & offline packs.",
    "来中国必装的 8 款核心 App（支付宝、微信、Apple 地图/高德、Trip.com、滴滴、12306、翻译/Pleco、食派士）、安卓商店警告与离线包。"
  ),
  updated: "2026-11-24",
  readMin: 6,
  keyPoints: [
    t2(
      "Alipay and WeChat are non-negotiable: they handle payments, metro QR codes, DiDi taxis, shared bikes, restaurant menus and the NIA 12367 arrival card.",
      "支付宝和微信是绝对刚需：集付款、地铁乘车码、滴滴打车、共享单车、餐厅扫码点单和移民局 12367 小程序于一身。"
    ),
    t2(
      "Do NOT rely on Google Maps in China — it is blocked and has inaccurate GPS offsets. Use Apple Maps on iPhone or AMap Global (English) on Android/iOS.",
      "在中国绝不要依赖 Google Maps——不仅被屏蔽且 GPS 坐标偏移。iPhone 用自带 Apple 地图，安卓和 iOS 都强烈建议装高德地图英文版（AMap Global）。"
    ),
    t2(
      "Android users MUST install and update every app before boarding — Google Play Store is inaccessible inside China unless you are on a roaming eSIM.",
      "安卓用户必须在登机前装好并更新全部 App——进入中国后若未开漫游将连不上 Google Play 商店！"
    ),
    t2(
      "Use DiDi directly inside Alipay in English (no +86 phone number needed) and Sherpa's for English food delivery in Shanghai, Beijing, Suzhou and Hangzhou.",
      "直接在支付宝内用英文版滴滴打车（无需 +86 中国手机号）；在上海、北京、苏州、杭州可用全英文外卖 App 食派士（Sherpa's）。"
    ),
    t2(
      "Download offline Chinese translation packs in Google Translate / Apple Translate and offline dictionary data in Pleco before leaving home.",
      "出发前务必在 Google Translate / Apple 翻译下载中文离线包，并在 Pleco 下载离线词典，以防地下餐厅或山区无信号。"
    ),
  ],
  sections: [
    {
      id: "must-have-apps",
      heading: t2("The 8 must-have apps for China", "来中国必装的 8 款核心 App"),
      blocks: [
        {
          type: "p",
          text: t2(
            "China runs on its own mobile ecosystem. Installing and verifying these 8 apps at home — while you can still receive bank SMS codes and access your app store freely — removes 90% of first-day stress.",
            "中国拥有独立且高度集成的移动应用生态。趁着还在出发国能顺畅收银行短信和访问应用商店，提前装好并认证以下 8 款 App，就能解决落地后 90% 的焦虑："
          ),
        },
        {
          type: "table",
          head: [
            t2("App", "软件名称"),
            t2("Best for", "核心用途"),
            t2("Foreigner tips", "外国游客实操要点"),
          ],
          rows: [
            [
              t2("Alipay (支付宝)", "支付宝（Alipay）"),
              t2("Payments, metro/bus QR, DiDi, bikes, translation", "日常扫码支付、地铁公交码、滴滴打车、共享单车、内置翻译"),
              t2(
                "Bind your Visa/Mastercard and verify with your passport before flying. Unlocks HelloRide (blue) and Qingju (teal) shared bikes and hosts the NIA 12367 mini-program.",
                "起飞前绑好 Visa/Mastercard 并完成护照实名认证。可扫码解锁哈啰蓝车、青桔青绿车，并内置“移民局 12367”小程序。"
              ),
            ],
            [
              t2("WeChat (微信)", "微信（WeChat）"),
              t2("Messaging, restaurant QR menus, payments, museum bookings", "聊天沟通、餐厅扫码点单、支付、景区预约"),
              t2(
                "Essential as a backup payment method, for scanning table QR menus (with built-in translate), unlocking Meituan yellow bikes, and chatting with hotels or guides.",
                "必装第二支付备份，用于扫描餐桌点单码（支持内置翻译）、解锁美团黄车，以及和酒店/导游联系。"
              ),
            ],
            [
              t2("Apple Maps / AMap Global (高德地图英文版)", "Apple 地图 / 高德地图英文版（AMap Global）"),
              t2("Accurate navigation, subway exits, walking routes", "精准 GPS 导航、地铁出入口与步行路线"),
              t2(
                "Google Maps is blocked and map-shifted in China. Apple Maps automatically switches to accurate Chinese map data inside China; AMap Global offers full English UI on both Android and iOS.",
                "Google Maps 在中国被屏蔽且定位偏移。iPhone 自带 Apple 地图入境后自动切换精准国内数据；安卓和 iOS 均可使用全英文界面的高德地图（AMap Global）。"
              ),
            ],
            [
              t2("Trip.com", "Trip.com（携程国际版）"),
              t2("Trains, foreigner-friendly hotels, domestic flights, tours", "高铁票、涉外酒店、国内机票、含票景点团与接机"),
              t2(
                "Full English interface and customer support. Accepts foreign cards directly with NO 3% Alipay surcharge — ideal for hotels, bullet trains and airport pickups.",
                "全英文界面与客服，直接刷外国卡付款且无支付宝 3% 手续费——订酒店、高铁票和举牌接机最省心。"
              ),
            ],
            [
              t2("DiDi (inside Alipay)", "滴滴出行（支付宝内置小程序）"),
              t2("English ride-hailing (Uber equivalent)", "全英文网约车（中国版 Uber）"),
              t2(
                "No separate download or +86 Chinese phone number needed. Open “DiDi Travel” inside Alipay: English pickup pins, upfront pricing, auto-translated driver chat and auto-charge to your linked card.",
                "无需单独下 App 也无需 +86 中国手机号！直接在支付宝内打开“DiDi Travel”小程序：英文定位、透明估价、司机聊天自动翻译并直接扣外卡。"
              ),
            ],
            [
              t2("Railway 12306", "铁路 12306"),
              t2("Official high-speed train booking (zero fee)", "官方高铁购票（零手续费）"),
              t2(
                "Has an English version and charges zero booking fees (Trip.com charges a small fee). Required if you travel with a free child under 6 so you can bind the child's passport to your adult ticket.",
                "自带英文版且免代购费。若带未满 6 周岁免票儿童乘高铁，必须在 12306 订单里点击“添加免费乘车儿童申报”绑定孩子护照。"
              ),
            ],
            [
              t2("Google Translate / Pleco", "Google Translate / Pleco 词典"),
              t2("Instant camera menu translation & offline Chinese dictionary", "拍照实时翻译菜单/路牌 & 离线中英词典"),
              t2(
                "Point Google Translate's camera at printed menus, supermarket labels and train signs. Pleco works 100% offline for looking up individual dishes, ingredients or pharmacy terms.",
                "用 Google 翻译相机对准纸质菜单、超市包装和车站标识即可实时翻译；Pleco 完全离线可用，查菜名和药名极准。"
              ),
            ],
            [
              t2("Sherpa's (食派士)", "食派士（Sherpa's）"),
              t2("English food delivery without a +86 number", "免中国手机号的全英文外卖"),
              t2(
                "Operates in Shanghai, Beijing, Suzhou and Hangzhou with English menus, English customer support, foreign Visa/Mastercard or Alipay checkout, and couriers used to foreign guests.",
                "覆盖上海、北京、苏州、杭州，全英文菜单与客服，直接支持外卡或支付宝付款，骑手熟悉外籍客人配送流程。"
              ),
            ],
          ],
        },
        { type: "ad" },
      ],
    },
    {
      id: "android-warning",
      heading: t2("Critical warning for Android users", "安卓手机用户出发前必看警告"),
      blocks: [
        {
          type: "callout",
          tone: "danger",
          title: t2("Install & update everything BEFORE flying — no Google Play in China", "起飞前装好并更新全部 App——中国境内连不上 Google Play"),
          text: t2(
            "Unlike iPhones (whose Apple App Store still works inside China), Android phones rely on Google Play Services, which are blocked on Chinese Wi-Fi and local SIMs. If you land on an Android phone without AMap Global, Alipay or WeChat installed, you won't be able to download or update them unless you are using an international roaming eSIM.",
            "与 iPhone（苹果应用商店在中国境内仍可访问）不同，安卓手机依赖的 Google Play 服务在中国本地 Wi-Fi 和本地手机卡网络下均无法访问。如果落地前没装好高德地图英文版、支付宝和微信，入境后若未开国际漫游 eSIM 将无法下载或更新任何软件！"
          ),
        },
        {
          type: "list",
          items: [
            t2(
              "Android users do NOT have Apple Maps — installing AMap Global (高德地图英文版) before departure is mandatory.",
              "安卓手机没有自带 Apple 地图，出发前必须装好高德地图英文版（AMap Global）。"
            ),
            t2(
              "Open Alipay, WeChat, Trip.com and Railway 12306 once at home, complete SMS verification and passport linking, and make sure they are updated to the latest version.",
              "在家时就逐一打开支付宝、微信、Trip.com 和 12306 完成短信验证与护照绑定，并确保更新至最新版本。"
            ),
          ],
        },
      ],
    },
    {
      id: "offline-packs",
      heading: t2("Offline maps & translation packs to download before takeoff", "登机前必下的离线地图与翻译包"),
      blocks: [
        {
          type: "steps",
          items: [
            t2(
              "Download the Simplified Chinese (简体中文) offline language pack inside Google Translate (and Apple Translate on iOS) so camera and text translation still work in basement restaurants or mountain tunnels.",
              "在 Google Translate（以及 iPhone 的 Apple 翻译）里提前下载“简体中文（Simplified Chinese）”离线语言包，确保在地下餐厅或山区隧道没信号时也能拍照翻译。"
            ),
            t2(
              "Install Pleco and download its free core offline Chinese-English dictionary pack.",
              "安装 Pleco 并下载其免费核心离线中英词典数据包。"
            ),
            t2(
              "Save offline screenshots of every hotel booking showing the Chinese hotel name and full street address, plus your Online Arrival Card QR receipt and onward flight confirmations.",
              "把每家酒店含中文名与详细地址的预订单、网上入境卡二维码回执以及离境机票确认单全部截图离线保存。"
            ),
            t2(
              "Optional offline map backup: download city offline packages inside AMap Global (or Organic Maps / Maps.me) in case your data drops briefly on arrival.",
              "可选离线地图备份：在高德地图英文版（或 Organic Maps / Maps.me）中提前下载目的地城市离线地图包，以防刚落地时短暂断网。"
            ),
          ],
        },
        { type: "tool", tool: "packing-checklist" },
      ],
    },
  ],
  faq: [
    {
      q: t2("Does Google Maps work in China if I have a roaming eSIM or VPN?", "如果我有漫游 eSIM 或 VPN，Google Maps 在中国好用吗？"),
      a: t2(
        "Even when unblocked via an eSIM, Google Maps data in mainland China is heavily outdated and its satellite/street layers suffer from GPS coordinate offset (GCJ-02). Always use Apple Maps (iOS) or AMap Global (Android/iOS) for accurate walking directions and subway exits.",
        "哪怕通过 eSIM 翻墙打开了，Google Maps 在中国大陆的商户数据也严重过时，且街道与卫星图层存在明显的 GPS 坐标偏移（GCJ-02）。精准步行导航和地铁口查询请务必用 Apple 地图或高德地图英文版。"
      ),
    },
    {
      q: t2("Do I need to download a separate DiDi app?", "打车需要单独下载滴滴 App 吗？"),
      a: t2(
        "No. Using the built-in DiDi mini-program inside Alipay is actually easier for foreigners because it runs in English, requires no +86 phone number, and bills your linked foreign card automatically.",
        "不需要。对外国游客来说直接用支付宝内置的滴滴小程序反而更省心：全英文界面、无需 +86 中国手机号，且自动从已绑定的外卡扣款。"
      ),
    },
    {
      q: t2("Should I book China bullet trains on Railway 12306 or Trip.com?", "买中国高铁票该用 12306 还是 Trip.com？"),
      a: t2(
        "Both work with foreign passports. Railway 12306 charges zero booking fee and is required to register free children under 6; Trip.com charges a small service fee (~$3–5) in exchange for a smoother English UI, easy foreign-card checkout and 24/7 English support.",
        "两者都支持外国护照。12306 官方零手续费，且带 6 岁以下免票儿童必须用它申报；Trip.com 会收少量服务费（约 3–5 美元），但英文界面更顺手、刷外卡方便且有 24 小时英文客服。"
      ),
    },
    {
      q: t2("Can I use Uber, WhatsApp, Instagram or Gmail in China?", "在中国能用 Uber、WhatsApp、Instagram 或 Gmail 吗？"),
      a: t2(
        "Uber does not operate in China (use DiDi inside Alipay instead). WhatsApp, Instagram, Gmail and Google services are blocked on local Chinese Wi-Fi/SIMs, but work seamlessly when you use an international roaming eSIM (routed via Hong Kong or Singapore).",
        "Uber 已退出中国市场（请改用支付宝内的滴滴）。WhatsApp、Instagram、Gmail 和 Google 服务在本地 Wi-Fi 和国内电话卡下被屏蔽，但使用经香港或新加坡路由的国际漫游 eSIM 即可免装 VPN 正常使用。"
      ),
    },
  ],
  related: ["alipay-wechat-pay", "internet-esim", "metro-didi-maps", "food-delivery-luggage"],
};

export default guide;
