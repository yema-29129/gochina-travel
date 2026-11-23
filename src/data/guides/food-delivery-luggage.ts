import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "food-delivery-luggage",
  category: "food",
  icon: "bag",
  title: t2("Food Delivery Without a +86 Number & Luggage Shipping in China", "没 +86 手机号点外卖与行李同城/跨城寄送指南"),
  seoTitle: t2(
    "China Food Delivery Without a Chinese Phone Number & Luggage Delivery Guide (2026)",
    "无中国手机号点外卖与行李寄送黑科技：顺丰同城与跨省寄箱子（2026）"
  ),
  summary: t2(
    "3 ways foreigners can order late-night food delivery without a +86 phone number, plus same-city and ¥50–90 inter-city SF Express luggage delivery.",
    "没有 +86 中国手机号也能点外卖的 3 个妙招，加上同城 2–4 小时行李直送和 50–90 元顺丰跨省寄大箱子攻略。"
  ),
  updated: "2026-11-24",
  readMin: 6,
  keyPoints: [
    t2(
      "For quick late-night food, 24-hour 7-Eleven, FamilyMart (全家) and Lawson (罗森) sell hot oden, heated bento boxes and snacks on almost every block.",
      "半夜想快速吃口热乎的，街边 24 小时营业的 7-Eleven、全家（FamilyMart）和罗森（Lawson）随时有关东煮和加热便当。"
    ),
    t2(
      "No +86 number? Use Sherpa's (English app in Shanghai/Beijing/Suzhou/Hangzhou), ask your hotel front desk to order on Meituan, or use Ele.me inside Alipay with a Chinese no-call note.",
      "没有 +86 号码？用全英文的食派士（Sherpa's，覆盖沪京苏杭）、请酒店前台代点美团，或在支付宝用饿了么并粘贴免电话中文备注。"
    ),
    t2(
      "China's luggage delivery is faster and cheaper than Japan's Takkyubin: same-city hotel-to-hotel takes 2–4 hours via SF Intra-city or Shansong.",
      "中国的行李寄送比日本黑猫宅急便更快更便宜：同城酒店转酒店或机场直送用顺丰同城/闪送只需 2–4 小时。"
    ),
    t2(
      "Ship a 20 kg suitcase between cities via SF Express (顺丰速运) for just ¥50–90 (under US$12) before hiking Huangshan, Zhangjiajie or Huashan.",
      "去爬黄山、张家界或华山不想扛大箱子？让酒店礼宾部叫顺丰速运跨省寄往下一站酒店，20 kg 大箱子陆运只要 50–90 元（不到 12 美元）。"
    ),
  ],
  sections: [
    {
      id: "convenience-stores",
      heading: t2("Fastest backup: 24-hour convenience stores", "最省心保底：24 小时便利店"),
      blocks: [
        t2b(
          "Before wrestling with delivery apps at midnight, look downstairs. Major Chinese cities have 24-hour 7-Eleven, FamilyMart (全家) and Lawson (罗森) on almost every corner.",
          "半夜折腾外卖软件之前，先看看楼下。中国大城市几乎每个街角都有 24 小时营业的 7-Eleven、全家（FamilyMart）和罗森（Lawson）。"
        ),
        t2b(
          "You can grab hot oden (关东煮), microwave bento meals, onigiri, fresh pastries, bottled water and cold drinks—and pay in two seconds with Alipay or WeChat.",
          "店里随时有热腾腾的关东煮、现加热便当、饭团、面包、矿泉水和冷饮，用支付宝或微信两秒结账。"
        ),
      ],
    },
    {
      id: "food-delivery-no-phone",
      heading: t2("3 ways to order food delivery without a +86 phone number", "没有 +86 中国手机号点外卖的 3 个妙招"),
      blocks: [
        t2b(
          "China's biggest delivery app, Meituan (美团), usually expects a +86 Chinese phone number because riders call when they arrive. Here are three reliable workarounds for short-term visitors:",
          "中国最大的外卖平台美团通常需要 +86 中国手机号，因为骑手送达时会打电话。短期外国游客可以用下面 3 个靠谱方法："
        ),
        {
          type: "steps",
          items: [
            t2(
              "Use Sherpa's (食派士) in Shanghai, Beijing, Suzhou or Hangzhou: an all-English food delivery app built for expats and visitors, with English menus, English customer support, foreign Visa/Mastercard or Alipay payment, and riders accustomed to foreign guests.",
              "在上海、北京、苏州、杭州用全英文外卖 App“食派士（Sherpa's）”：全英文菜单、全英文客服，直接支持境外 Visa/Mastercard 或支付宝付款，骑手熟悉英文沟通。"
            ),
            t2(
              "Ask your hotel front desk for help (works everywhere in China): pick photos of the McDonald's, BBQ or crayfish you want, go down to reception, and politely ask the staff to place the Meituan order for you. Pay them back immediately via Alipay or cash—when the rider arrives, the hotel delivery robot will bring the food straight to your room door.",
              "万能“酒店前台代点法”（全中国通用）：选好想吃的麦当劳、烧烤或小龙虾图片，下楼请酒店前台礼貌帮忙用美团下单，你当场用支付宝转给对方（或给现金）。外卖送到后，酒店送物机器人会自动送到你房门口。"
            ),
            t2(
              "Use the Ele.me (饿了么) mini-program inside Alipay: some foreign Alipay accounts can log in directly with Alipay authorization. Set the delivery address to your hotel lobby delivery shelf/locker (外卖架/外卖柜) and paste the Chinese note below into the order remarks.",
              "使用支付宝内置“饿了么（Ele.me）”小程序：部分账号支持直接用支付宝授权登录，收货地址填酒店大堂外卖架/外卖柜，并在订单备注里粘贴下方中文。"
            ),
          ],
        },
        {
          type: "show",
          zh: "我是外国游客没有中国电话，餐到请直接放酒店前台/外卖架，不要打电话，谢谢！",
          pinyin: "Wǒ shì wàiguó yóukè méiyǒu Zhōngguó diànhuà, cān dào qǐng zhíjiē fàng jiǔdiàn qiántái / wàimàijià, bùyào dǎ diànhuà, xièxie!",
          meaning: t2(
            "Paste into Ele.me delivery notes: 'I am a foreign tourist without a Chinese phone number. Please leave the food at the hotel front desk / delivery shelf when it arrives. Do not call. Thank you!'",
            "粘贴到饿了么订单备注：“我是外国游客没有中国电话，餐到请直接放酒店前台/外卖架，不要打电话，谢谢！”"
          ),
        },
        { type: "ad" },
      ],
    },
    {
      id: "same-city-luggage",
      heading: t2("Same-city luggage delivery (2–4 hours)", "同城行李寄送（2–4 小时直达）"),
      blocks: [
        t2b(
          "Checking out of Hotel A in downtown Shanghai in the morning, spending the whole day hands-free at Shanghai Disneyland, and checking into Hotel B near the park at night? You never need to haul 28-inch suitcases onto the metro.",
          "早上从上海市区 A 酒店退房，想空手去迪士尼玩一整天，晚上入住迪士尼旁边的 B 酒店？完全不用拖着 28 寸大箱子挤地铁。"
        ),
        {
          type: "list",
          items: [
            t2(
              "Search inside WeChat or Alipay for 顺丰同城 (SF Intra-city), 闪送 (Shansong), or dedicated two-way luggage services such as 空手到 or 存知己.",
              "在微信或支付宝里搜索“顺丰同城（SF Intra-city）”、“闪送”，或双向行李寄送服务小程序（如“空手到”、“存知己”）。"
            ),
            t2(
              "A dedicated courier picks up your bags from your hotel concierge or airport and delivers them directly to your next hotel's concierge within 2–4 hours.",
              "专人从当前酒店礼宾部或机场取件，2–4 小时内直接把箱子送到新酒店礼宾部。"
            ),
          ],
        },
      ],
    },
    {
      id: "inter-city-luggage",
      heading: t2("Inter-city luggage shipping with SF Express (¥50–90)", "跨省跨城寄大箱子：顺丰速运（50–90 元）"),
      blocks: [
        t2b(
          "Travelers who love Japan's Takkyubin luggage forwarding are amazed to learn China's SF Express (顺丰速运) is even faster and cheaper.",
          "熟悉日本黑猫宅急便（Takkyubin）的游客往往很惊喜：中国的顺丰速运（SF Express）寄行李比日本更快、更便宜。"
        ),
        t2b(
          "If you have a two-day mountain side trip—such as Huangshan, Zhangjiajie or Huashan—pack a small backpack for the hike and ship your large suitcases ahead to the hotel in your next city. Ground shipping for a 20 kg suitcase across provinces costs only ¥50–90 (under US$12).",
          "如果你要去爬黄山、张家界或华山，不想扛大箱子，只需背个轻便双肩包，把大箱子提前寄到两天后入住的下一座城市酒店前台。一个 20 kg 大箱子跨省陆运只要 50–90 元人民币（不到 12 美元）。"
        ),
        {
          type: "callout",
          tone: "tip",
          title: t2("Easiest way to book", "最省心寄件法"),
          text: t2(
            "Do not try to fill out Chinese courier forms yourself. Show the card below to your hotel concierge—they will call the SF Express courier to pack your suitcase at the lobby and confirm the destination hotel address for you.",
            "不用自己研究中文寄件小程序。把下方卡片给酒店礼宾部看，工作人员会帮你叫顺丰小哥上门打包，并核对好下一家酒店的地址。"
          ),
        },
        {
          type: "show",
          zh: "您好！请问可以帮我叫【顺丰速运（陆运）】上门寄行李箱吗？我想把箱子寄到我两天后入住的下一家酒店前台，这是酒店名称、地址和我的预订姓名，运费我直接扫码付，非常感谢！",
          pinyin: "Nín hǎo! Qǐngwèn kěyǐ bāng wǒ jiào Shùnfēng Sùyùn shàngmén jì xínglixiāng ma? Yùnfèi wǒ zhíjiē sǎomǎ fù, fēicháng gǎnxiè!",
          meaning: t2(
            "Show to hotel concierge: 'Hello! Could you please help me call SF Express (ground shipping) to pick up my suitcase? I'd like to ship it to the front desk of the hotel I'm checking into in two days. Here is the hotel name, address and my booking name. I will pay the shipping fee by QR code. Thank you!'",
            "出示给酒店礼宾部：“您好！请问可以帮我叫顺丰速运（陆运）上门寄行李箱吗？我想寄到两天后入住的下一家酒店前台，运费我直接扫码付，非常感谢！”"
          ),
        },
      ],
    },
  ],
  faq: [
    {
      q: t2("Do Chinese hotels accept parcels and suitcases before I check in?", "中国酒店愿意提前帮客人代收行李箱吗？"),
      a: t2(
        "Yes, almost all mid-range and international hotels happily store arriving suitcases for guests with a confirmed booking. Just write your check-in date and booking name clearly on the waybill.",
        "是的，几乎所有中高端和涉外酒店都很乐意为已预订客人代收并寄存行李箱，只要在运单上写清入住日期和预订姓名即可。"
      ),
    },
    {
      q: t2("How long does inter-city SF Express ground shipping take?", "顺丰跨省陆运寄行李大概要几天？"),
      a: t2(
        "Usually 2–3 days between major Chinese cities (and 1–2 days for neighboring provinces). Always ship 2 days before you need the bag, and keep passports, cash and power banks with you.",
        "主要城市之间通常 2–3 天（邻近省份 1–2 天）。建议提前 2 天寄出，且护照、现金和充电宝务必随身携带。"
      ),
    },
    {
      q: t2("Does Sherpa's work in every Chinese city?", "食派士（Sherpa's）全中国都能用吗？"),
      a: t2(
        "No, Sherpa's operates mainly in Shanghai, Beijing, Suzhou and Hangzhou. In other cities, ask your hotel front desk to order on Meituan or use Ele.me in Alipay.",
        "不是，食派士主要覆盖上海、北京、苏州和杭州。在其他城市请酒店前台代点美团，或在支付宝用饿了么。"
      ),
    },
    {
      q: t2("Can I ship lithium batteries or power banks inside a suitcase?", "寄行李箱时里面能放充电宝或锂电池吗？"),
      a: t2(
        "No—couriers inspect luggage and strictly ban loose power banks, aerosols and flammables from air shipping (and restrict them on ground shipping). Always keep electronics and power banks in your daypack.",
        "不能——快递员会开箱验视，空运严禁充电宝、喷雾和易燃物（陆运也有严格限制）。电子设备和充电宝请一律随身背走。"
      ),
    },
  ],
  related: ["food-ordering-allergies", "bubble-tea-coffee", "high-speed-trains", "alipay-wechat-pay", "essential-apps"],
};

function t2b(en: string, zh: string) {
  return { type: "p", text: t2(en, zh) } as const;
}

export default guide;
