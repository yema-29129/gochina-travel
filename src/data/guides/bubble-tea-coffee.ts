import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "bubble-tea-coffee",
  category: "food",
  icon: "food",
  title: t2("Ordering Bubble Tea & Coffee in China: Chains, Ice & Sugar Guide", "中国奶茶与咖啡点单指南：必喝连锁、冰量与甜度词典"),
  seoTitle: t2(
    "How to Order Bubble Tea & Coffee in China: Luckin, CHAGEE, HEYTEA & MIXUE (2026)",
    "中国奶茶咖啡点单攻略：瑞幸、霸王茶姬、喜茶、蜜雪冰城冰量甜度全表（2026）"
  ),
  summary: t2(
    "How to order at Luckin Coffee, CHAGEE, HEYTEA and MIXUE via mini-programs, with the full Chinese ice and sweetness dictionary and a tap-to-show order card.",
    "教你在瑞幸、霸王茶姬、喜茶、蜜雪冰城用小程序点单，附完整中英冰量甜度对照表与一键全屏点单卡。"
  ),
  updated: "2026-11-24",
  readMin: 5,
  keyPoints: [
    t2(
      "Four must-try chains: Luckin Coffee (Coconut Latte), CHAGEE (Jasmine Green Milk Tea), HEYTEA (Juicy Grape), and MIXUE (¥4 Lemonade).",
      "四大必打卡连锁：瑞幸咖啡（生椰拿铁）、霸王茶姬（伯牙绝弦茉莉奶绿）、喜茶（多肉葡萄）、蜜雪冰城（4 元柠檬水）。"
    ),
    t2(
      "Almost all Chinese tea and coffee chains expect you to order ahead on an Alipay or WeChat mini-program and pick up by number.",
      "几乎所有中国茶饮和咖啡连锁都需要用支付宝或微信小程序点单自取，按取餐号领杯。"
    ),
    t2(
      "Go for 少冰 (Less Ice) and 三分糖 (30% Sugar) or 五分糖 (50% Sugar) so you do not end up with a boiling hot, 100% sugar drink.",
      "推荐选“少冰”搭配“三分糖”或“五分糖”，避免看不懂选项误点出一杯滚烫的全糖饮品。"
    ),
    t2(
      "In a hurry? Show our full-screen Chinese order card at the counter and staff will help you place the order.",
      "赶时间时，直接把全屏中文点单卡给店员看，对方通常都会热心帮你点好。"
    ),
  ],
  sections: [
    {
      id: "iconic-chains",
      heading: t2("Four iconic Chinese coffee & tea chains to try", "来中国必打卡的四大国民咖啡与茶饮"),
      blocks: [
        t2b(
          "China's modern tea and coffee scene is fast, creative and surprisingly cheap compared with Europe or North America. You will see these four brands on almost every shopping street and mall floor.",
          "中国的新中式茶饮和连锁咖啡出杯极快、创意十足，价格比欧美便宜得多。几乎每条商业街和商场里都能看到这四个品牌。"
        ),
        {
          type: "table",
          head: [
            t2("Brand", "品牌"),
            t2("Signature Drink", "招牌必点"),
            t2("Typical Price", "参考价格"),
            t2("What to Expect", "风味特点"),
          ],
          rows: [
            [
              t2("Luckin Coffee (瑞幸咖啡)", "瑞幸咖啡（Luckin Coffee）"),
              t2("Coconut Latte (生椰拿铁)", "生椰拿铁（Coconut Latte）"),
              "¥9.9–19",
              t2("Rich espresso poured over chilled sweet coconut milk—China's most famous coffee order.", "浓郁浓缩咖啡搭配冰爽生椰乳，中国知名度最高的爆款咖啡。"),
            ],
            [
              t2("CHAGEE (霸王茶姬)", "霸王茶姬（CHAGEE）"),
              t2("BO·YA Jasmine Green Milk Tea (伯牙绝弦)", "伯牙绝弦（茉莉奶绿）"),
              "¥16–20",
              t2("Fragrant freshly brewed jasmine green tea with light milk; no heavy toppings, clean finish.", "现泡茉莉绿茶配清爽鲜奶，不加厚重小料，茶香清雅顺口。"),
            ],
            [
              t2("HEYTEA (喜茶)", "喜茶（HEYTEA）"),
              t2("Succulent / Juicy Grape (多肉葡萄)", "多肉葡萄（Juicy Grape）"),
              "¥18–22",
              t2("Freshly peeled grape slush with green tea base and optional cheese foam.", "手剥新鲜葡萄果肉冰沙配绿茶底，可选加芝士奶盖。"),
            ],
            [
              t2("MIXUE (蜜雪冰城)", "蜜雪冰城（MIXUE）"),
              t2("Fresh Lemonade (冰鲜柠檬水)", "冰鲜柠檬水（Lemonade）"),
              "¥4",
              t2("Iconic snowman mascot; ¥4 (about US$0.55) fresh-squeezed lemonade and ¥2–3 soft serve.", "标志性雪王吉祥物；4 元（约 0.55 美元）现捣柠檬水和 2–3 元冰淇淋。"),
            ],
          ],
        },
      ],
    },
    {
      id: "mini-program-ordering",
      heading: t2("How mini-program ordering works", "小程序点单怎么操作"),
      blocks: [
        t2b(
          "These chains are virtually 100% mini-program pickup. Walking up to the counter without scanning often results in staff pointing you to the QR code on the counter or wall.",
          "这些茶饮和咖啡连锁几乎 100% 采用小程序点单自取。直接走到吧台点单时，店员往往会指着台面或墙上的二维码让你扫码。"
        ),
        {
          type: "steps",
          items: [
            t2(
              "Scan the store QR code using Alipay or WeChat (or search the brand name inside Alipay/WeChat to order while walking toward the store).",
              "用支付宝或微信扫描店内二维码（也可提前在支付宝/微信里搜品牌名边走边点）。"
            ),
            t2(
              "Turn on built-in translation (Alipay's Translate button or WeChat's '...' → Translate) to read the drink names.",
              "打开内置翻译（支付宝悬浮“翻译”按钮，或微信右上角“...”→“翻译”）查看饮品名。"
            ),
            t2(
              "Pick your temperature and sweetness using the exact Chinese terms in the table below so you don't accidentally order a scalding hot, 100% sugar fruit tea.",
              "对照下表的中文词选好温度和甜度，避免误点出一杯滚烫的全糖果茶。"
            ),
            t2(
              "Pay with your linked card, watch the pickup screen for your order number (取餐号), and grab your drink from the pickup counter.",
              "用绑好的卡付款，盯着叫号屏看你的取餐号，到取餐台拿杯即可。"
            ),
          ],
        },
        { type: "ad" },
      ],
    },
    {
      id: "ice-sugar-dictionary",
      heading: t2("Full Chinese ice & sweetness dictionary", "完整中英冰量与甜度对照表"),
      blocks: [
        t2b(
          "Every tea and coffee mini-program uses the same standard Chinese labels for temperature and sweetness. Save this cheat sheet:",
          "几乎所有茶饮和咖啡小程序都使用同一套标准的温度与甜度中文标签。收藏这张小抄："
        ),
        {
          type: "table",
          head: [
            t2("Temperature (温度选项)", "温度选项（Temperature）"),
            t2("English Meaning", "英文含义"),
            t2("Sweetness (甜度选项)", "甜度选项（Sweetness Level）"),
            t2("English Meaning & Taste Tip", "英文含义与口味建议"),
          ],
          rows: [
            [
              "标准冰 / 正常冰",
              t2("Regular Ice", "Regular Ice（正常冰）"),
              "标准糖 / 全糖",
              t2("100% Sugar (quite sweet; pick only if you love sweet drinks)", "100% 糖（偏甜，喜甜者选）"),
            ],
            [
              "少冰",
              t2("Less Ice (most recommended!)", "Less Ice（最推荐！）"),
              "七分糖 / 少糖",
              t2("70% Sugar", "70% 糖"),
            ],
            [
              "去冰",
              t2("No Ice Cubes (still chilled cold)", "No Ice Cubes（仍为冰镇凉感）"),
              "五分糖 / 半糖",
              t2("50% Sugar (best balance of tea aroma and sweetness!)", "50% 糖（茶香与甜味最平衡！）"),
            ],
            [
              "常温",
              t2("Room Temperature", "Room Temperature（常温）"),
              "三分糖 / 微糖",
              t2("30% Sugar (light and refreshing, strongly recommended!)", "30% 糖（清爽低负担，强推！）"),
            ],
            [
              "热 / 温热",
              t2("Hot / Warm", "Hot / Warm（热/温热）"),
              "不另外加糖",
              t2("0% Added Sugar (note: fruit teas still have natural fruit sweetness)", "不另外加糖（注意水果本身仍有自然果甜）"),
            ],
          ],
        },
        {
          type: "show",
          zh: "您好！我要一杯【茉莉奶绿】，【少冰】、【三分糖】，打包带走，谢谢！",
          pinyin: "Nín hǎo! Wǒ yào yī bēi Mòlì Nǎilǜ, shǎo bīng, sān fēn táng, dǎbāo dàizǒu, xièxie!",
          meaning: t2(
            "Hello! I would like one Jasmine Milk Tea, less ice, 30% sugar, to go please. Thank you!",
            "您好！我要一杯【茉莉奶绿】，【少冰】、【三分糖】，打包带走，谢谢！"
          ),
        },
        { type: "tool", tool: "allergy-card" },
      ],
    },
  ],
  faq: [
    {
      q: t2("Does '去冰' (No Ice) mean the drink is warm?", "选“去冰”饮料是温的吗？"),
      a: t2(
        "No. 去冰 means no ice cubes in the cup, but the drink is still served chilled. If you want unchilled room temperature, choose 常温.",
        "不是。“去冰”只是杯里不放冰块，饮料本身仍是冰镇凉感。想要不冰的常温饮品请选“常温”。"
      ),
    },
    {
      q: t2("Can I order at Luckin Coffee without a +86 Chinese phone number?", "没有 +86 中国手机号能在瑞幸点单吗？"),
      a: t2(
        "Yes, most foreign visitors use the Luckin Coffee mini-program inside Alipay or WeChat. If a phone prompt blocks you, ask the counter staff—many stores can place an order for you at the register.",
        "可以，大多数外国游客直接用支付宝或微信里的瑞幸小程序。如果遇到手机号弹窗拦截，礼貌请吧台店员帮忙即可。"
      ),
    },
    {
      q: t2("Are Chinese milk teas dairy-free?", "中国的奶茶是不含乳制品的吗？"),
      a: t2(
        "No—most milk teas (like CHAGEE and HEYTEA cheese teas) use real cow's milk or cream. For dairy-free options, pick fruit tea without cheese foam or Luckin's Coconut Latte (check plant-milk options).",
        "不是——大多数奶茶（如霸王茶姬和喜茶芝士茶）使用鲜牛奶或奶油。乳制品过敏者建议选不加奶盖的纯果茶，或确认植物奶选项。"
      ),
    },
    {
      q: t2("Why is MIXUE so cheap?", "蜜雪冰城为什么这么便宜？"),
      a: t2(
        "MIXUE runs a massive nationwide supply chain with tens of thousands of stores, letting them sell fresh lemonade for ¥4 and ice cream for ¥2–3 everywhere in China.",
        "蜜雪冰城依托庞大的全国自建供应链和数万家门店规模，所以全国各地都能卖出 4 元柠檬水和 2–3 元冰淇淋。"
      ),
    },
  ],
  related: ["food-ordering-allergies", "food-delivery-luggage", "alipay-wechat-pay", "essential-apps"],
};

function t2b(en: string, zh: string) {
  return { type: "p", text: t2(en, zh) } as const;
}

export default guide;
