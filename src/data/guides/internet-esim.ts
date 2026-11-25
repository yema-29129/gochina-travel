import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "internet-esim",
  category: "money",
  icon: "wifi",
  title: t2("China Internet Guide: Roaming eSIMs, Local SIMs & App Access", "中国上网指南：国际漫游 eSIM、本地电话卡与海外 App 访问"),
  seoTitle: t2(
    "Best China Roaming eSIM (2026) – Seamless Google & WhatsApp Access + Do You Need +86?",
    "2026 中国国际漫游 eSIM 指南——无缝使用 Google 与 WhatsApp + 游客需要 +86 号码吗？"
  ),
  summary: t2(
    "Compare international roaming eSIMs, local SIM cards and home carrier roaming for China, check your phone for eSIM support, and estimate how much data you need.",
    "对比中国国际漫游 eSIM、本地电话卡和本国漫游，检查手机是否支持 eSIM，并算出你需要多少流量。"
  ),
  updated: "2026-11-24",
  readMin: 9,
  keyPoints: [
    t2(
      "Many international apps (Google, Gmail, WhatsApp, Instagram, YouTube) require international data roaming to work seamlessly in China.",
      "许多国际常用 App（Google、Gmail、WhatsApp、Instagram、YouTube）在中国需通过国际数据漫游才能无缝访问。"
    ),
    t2(
      "An international roaming eSIM (especially Singapore-routed for TikTok & ChatGPT) gives seamless app access with zero configuration — the best choice for most tourists.",
      "国际漫游 eSIM（如需使用 TikTok 与 ChatGPT 建议选新加坡路由）零配置即可无缝访问海外 App——是大多数游客的最佳选择。"
    ),
    t2(
      "US iPhone 14 and later have no SIM tray: you cannot use a Chinese physical SIM, so buy a roaming eSIM before you fly.",
      "美版 iPhone 14 及以后没有实体卡槽：无法使用中国实体电话卡，请在出发前购买漫游 eSIM。"
    ),
    t2(
      "Check eSIM support: dial *#06# and look for an EID, and check that Carrier Lock says “No SIM restrictions”.",
      "检查是否支持 eSIM：拨 *#06# 查看是否有 EID，并检查运营商锁是否显示“无 SIM 卡限制”。"
    ),
    t2(
      "Data needed = days × daily use × 1.2. Light use is about 0.6 GB per day.",
      "所需流量 = 天数 × 每日用量 × 1.2。轻度使用约每天 0.6 GB。"
    ),
  ],
  sections: [
    {
      id: "blocked",
      heading: t2("What is blocked in China", "在中国哪些服务被屏蔽"),
      blocks: [
        {
          type: "p",
          text: t2(
            "On a Chinese SIM card or Chinese Wi-Fi, these services do not work without a workaround:",
            "使用中国电话卡或中国 Wi-Fi 时，以下服务在没有解决方案的情况下无法使用："
          ),
        },
        {
          type: "list",
          items: [
            t2("Google Search, Gmail, Google Maps, Google Drive and Google Play", "Google 搜索、Gmail、Google 地图、Google 云端硬盘和 Google Play"),
            t2("WhatsApp, Facebook, Instagram, Messenger and Threads", "WhatsApp、Facebook、Instagram、Messenger 和 Threads"),
            t2("YouTube, X (Twitter) and many Western news sites", "YouTube、X（Twitter）和许多西方新闻网站"),
            t2("ChatGPT and many other AI tools", "ChatGPT 和许多其他 AI 工具"),
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: t2("When to use eSIM vs Hotel Wi-Fi — AND keep your home SIM for bank SMS!", "什么时候用 eSIM、什么时候切 Wi-Fi？务必保留原卡收银行验证码！"),
          text: t2(
            "1) Using Google, WhatsApp, Instagram or Gmail? Turn OFF hotel Wi-Fi and use your international roaming eSIM data—hotel Wi-Fi uses local routing so overseas apps won't load. 2) Keep your home physical SIM card turned ON (with Data Roaming OFF on the home SIM) so you still receive free 2FA bank SMS codes when linking Visa/Mastercard to Alipay or booking flights.",
            "1）要刷 Google、WhatsApp、Instagram 或 Gmail 时：请关掉酒店 Wi-Fi，使用国际漫游 eSIM 移动数据（酒店 Wi-Fi 走本地网络，海外 App 打不开）。2）千万别把本国实体 SIM 卡拔掉或关机——只需关掉本国卡的“数据漫游”，保留开机即可免费接收银行 3D Secure 短信验证码（绑支付宝外卡或买机票验证时救命用）。"
          ),
        },
      ],
    },
    {
      id: "compare",
      heading: t2("Roaming eSIM vs local SIM vs home roaming", "漫游 eSIM vs 本地电话卡 vs 本国漫游"),
      blocks: [
        {
          type: "table",
          head: [
            t2("Option", "方案"),
            t2("Google / WhatsApp", "Google / WhatsApp"),
            t2("+86 number", "+86 号码"),
            t2("Cost", "费用"),
            t2("Best for", "适合谁"),
          ],
          rows: [
            [
              t2("Roaming eSIM (HK/Singapore route)", "漫游 eSIM（香港/新加坡路由）"),
              t2("Works seamlessly (roaming data)", "漫游数据无缝直连"),
              t2("No", "没有"),
              t2("Low; buy online before you fly", "低；出发前线上购买"),
              t2("About 85% of tourists", "约 85% 的游客"),
            ],
            [
              t2("Chinese SIM (China Unicom / China Mobile, bought at the airport)", "中国电话卡（在机场购买的中国联通/中国移动）"),
              t2("Blocked", "被屏蔽"),
              t2("Yes", "有"),
              t2("About ¥100 at the airport; lots of domestic data", "机场约 ¥100；国内流量充足"),
              t2("Long stays that need a +86 number (phones with a SIM tray only)", "需要 +86 号码的长住游客（仅限有实体卡槽的手机）"),
            ],
            [
              t2("Home carrier roaming day pass", "本国运营商国际漫游日包"),
              t2("Works", "能用"),
              t2("No", "没有"),
              t2("Usually the most expensive", "通常最贵"),
              t2("Carrier-locked phones, short trips", "锁卡手机、短途旅行"),
            ],
            [
              t2("Pocket Wi-Fi rental", "随身漫游 Wi-Fi 蛋租赁"),
              t2("Works if roaming-based", "漫游型可用"),
              t2("No", "没有"),
              t2("Daily rental fee", "按天租金"),
              t2("Carrier-locked phones, groups", "锁卡手机、团体"),
            ],
          ],
        },
        { type: "affiliate", id: "esim" },
      ],
    },
    {
      id: "check-esim",
      heading: t2("Does my phone support eSIM? Check in 5 seconds", "我的手机支持 eSIM 吗？5 秒自查"),
      blocks: [
        {
          type: "steps",
          items: [
            t2(
              "Open the phone dialer and type *#06#. If an EID barcode appears, your phone supports eSIM.",
              "打开拨号盘输入 *#06#。如果屏幕出现 EID 条码，你的手机支持 eSIM。"
            ),
            t2(
              "On iPhone go to Settings → General → About → Carrier Lock. It must say “No SIM restrictions”. If not, your phone is carrier-locked.",
              "在 iPhone 上进入 设置 → 通用 → 关于本机 → 运营商锁。必须显示“无 SIM 卡限制”。否则你的手机有运营商锁。"
            ),
          ],
        },
        {
          type: "callout",
          tone: "danger",
          title: t2("US iPhone 14 and later: no SIM tray", "美版 iPhone 14 及以后：没有实体卡槽"),
          text: t2(
            "US iPhone 14, 15, 16 and 17 have no physical SIM slot. You absolutely cannot buy and use a China Unicom or China Mobile physical SIM at the airport, and Chinese carriers do not currently sell local tourist eSIMs to short-term foreign visitors. Your only option is an international roaming eSIM bought in advance.",
            "美版 iPhone 14、15、16、17 没有物理卡槽。你绝对无法在机场购买并使用中国联通/中国移动实体电话卡，而且中国运营商目前不对短期外国游客开放本地旅游 eSIM。你唯一的选择是提前购买国际漫游 eSIM。"
          ),
        },
        {
          type: "callout",
          tone: "warn",
          title: t2("Carrier-locked phones", "有运营商锁的手机"),
          text: t2(
            "Some contract iPhones bought in the US are carrier-locked. A locked phone can't install a third-party eSIM or use a Chinese SIM. Ask your carrier to unlock it before you leave, or rent a pocket Wi-Fi at the airport, or turn on your home carrier's international roaming day pass. Note: iPhones sold in mainland China have no eSIM.",
            "部分在美国购买的合约版 iPhone 有运营商锁。锁卡手机既装不了第三方 eSIM，也用不了中国电话卡。请出发前联系运营商解锁，或在机场租一台随身 Wi-Fi 蛋，或开通本国运营商的国际漫游日包。注意：中国大陆国行版 iPhone 没有 eSIM。"
          ),
        },
      ],
    },
    {
      id: "dual-sim",
      heading: t2("Long stay and need a +86 number? Use the dual-SIM combo", "长住且需要 +86 号码？用双卡组合"),
      blocks: [
        {
          type: "p",
          text: t2(
            "If you stay longer, your phone has a physical SIM slot, and you want a +86 number (for example to order food delivery on Meituan yourself), use two lines:",
            "如果你停留较久、手机有实体卡槽，并且想要 +86 号码（例如自己在美团点外卖），可以用两条线路："
          ),
        },
        {
          type: "list",
          items: [
            t2(
              "A ¥100 China Unicom physical SIM from the airport: +86 number and plenty of domestic data.",
              "在机场办一张 ¥100 的中国联通实体卡：拿到 +86 号码和大量国内流量。"
            ),
            t2(
              "Plus a small 5 GB roaming eSIM just for Google, WhatsApp and other blocked apps — no VPN dropouts.",
              "再加一张小容量 5 GB 漫游 eSIM，专门用于 Google、WhatsApp 等被屏蔽的 App——告别 VPN 断连。"
            ),
          ],
        },
        {
          type: "p",
          text: t2(
            "Most tourists don't need a +86 number: restaurants and hotel front desks can help with delivery orders, and DiDi works inside Alipay.",
            "大多数游客不需要 +86 号码：餐厅和酒店前台可以帮你点外卖，滴滴也可以在支付宝里使用。"
          ),
        },
      ],
    },
    {
      id: "ad-data",
      heading: t2("How much data do I need?", "我需要多少流量？"),
      blocks: [
        { type: "ad" },
        {
          type: "table",
          head: [t2("Usage level", "使用档位"), t2("What it includes", "包含内容"), t2("Data per day", "每日流量")],
          rows: [
            [
              t2("Light (base)", "轻度（基准）"),
              t2("Maps, Alipay, WhatsApp text, reading guides", "地图、支付宝、WhatsApp 文字、查攻略"),
              "0.6 GB",
            ],
            [
              t2("Social", "社交"),
              t2("Daily Instagram Stories, TikTok, 20 minutes of video calls", "每天发 Instagram Story、刷 TikTok、视频通话 20 分钟"),
              t2("+1.2 GB", "+1.2 GB"),
            ],
            [
              t2("Remote work (heavy)", "远程办公（重度）"),
              t2("Hotspot for a laptop, Zoom meetings, large files", "给笔记本开热点、Zoom 会议、传大文件"),
              t2("+2.5 GB", "+2.5 GB"),
            ],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: t2("Formula (with 20% buffer)", "公式（含 20% 冗余）"),
          text: t2(
            "Total GB = days × (0.6 + extras) × 1.2, rounded up. The 20% buffer keeps you online if you get lost. Example: 10 days of social use = 10 × 1.8 × 1.2 = 21.6 → 22 GB. Up to 20 GB, a fixed data plan is cheaper; above 20 GB, choose an unlimited daily eSIM.",
            "总流量 GB = 天数 × (0.6 + 额外用量) × 1.2，向上取整。20% 的冗余能保证你迷路时不断网。例子：10 天社交档 = 10 × 1.8 × 1.2 = 21.6 → 22 GB。20 GB 以内选定量套餐更便宜；超过 20 GB 选不限流量日包 eSIM。"
          ),
        },
        { type: "tool", tool: "esim-calculator" },
      ],
    },
    {
      id: "maps",
      heading: t2("Maps without Google", "没有 Google 怎么用地图"),
      blocks: [
        {
          type: "p",
          text: t2(
            "Google Maps is blocked and its China data is inaccurate. On iPhone, Apple Maps works well because it uses Amap (高德地图) data in China. On Android, install AMap Global (高德地图英文版) before you arrive.",
            "Google 地图被屏蔽，而且其中国数据不准确。在 iPhone 上，Apple Maps 很好用，因为它在中国使用高德地图的数据。在安卓手机上，请在抵达前安装 AMap Global（高德地图英文版）。"
          ),
        },
      ],
    },
  ],
  faq: [
    {
      q: t2("Do I need a VPN in China?", "在中国需要 VPN 吗？"),
      a: t2(
        "Not if you use a roaming eSIM routed through Hong Kong or Singapore — Google, WhatsApp and Instagram work without a VPN on its mobile data. On hotel Wi-Fi they are blocked.",
        "如果你用经香港或新加坡路由的漫游 eSIM 就不需要——在它的移动数据下，Google、WhatsApp 和 Instagram 不用 VPN 就能用。在酒店 Wi-Fi 上它们会被屏蔽。"
      ),
    },
    {
      q: t2("Do I need a +86 Chinese phone number as a tourist?", "游客需要 +86 中国手机号吗？"),
      a: t2(
        "Usually no. Alipay, WeChat and DiDi in Alipay work with your home number. Only long stays or ordering delivery yourself really need +86.",
        "通常不需要。支付宝、微信和支付宝里的滴滴都能用你的本国号码。只有长住或想自己点外卖才真正需要 +86。"
      ),
    },
    {
      q: t2("Can I buy a Chinese eSIM at the airport?", "能在机场买中国本地 eSIM 吗？"),
      a: t2(
        "No. Chinese carriers currently don't sell local tourist eSIMs to short-term foreign visitors. Buy an international roaming eSIM before you fly.",
        "不能。中国运营商目前不向短期外国游客出售本地旅游 eSIM。请在出发前购买国际漫游 eSIM。"
      ),
    },
    {
      q: t2("How much eSIM data do I need for 10 days?", "10 天需要多少 eSIM 流量？"),
      a: t2(
        "Light use: 10 × 0.6 × 1.2 ≈ 8 GB. With daily social media: about 22 GB. With remote work, choose unlimited.",
        "轻度使用：10 × 0.6 × 1.2 ≈ 8 GB。每天刷社交媒体：约 22 GB。远程办公请选不限流量。"
      ),
    },
    {
      q: t2("Does Apple Maps work in China?", "Apple Maps 在中国能用吗？"),
      a: t2(
        "Yes. In China, Apple Maps uses Amap data, so it is accurate. Android users should install AMap Global.",
        "能。在中国，Apple Maps 使用高德地图的数据，所以很准确。安卓用户请安装 AMap Global。"
      ),
    },
  ],
  related: ["essential-apps", "alipay-wechat-pay", "metro-didi-maps", "food-delivery-luggage", "arrival-immigration"],
};

export default guide;
