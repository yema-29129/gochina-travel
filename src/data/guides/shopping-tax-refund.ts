import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "shopping-tax-refund",
  category: "food",
  icon: "bag",
  title: t2("China Tax Refund (2026), Instant Refunds & What to Buy", "中国购物与 2026 离境退税（即买即退）及砍价指南"),
  seoTitle: t2(
    "China 200 RMB Tax Refund Guide (2026): Instant Refund, DJI, Glasses & Bargaining",
    "中国 200 元离境退税与即买即退攻略（2026）：买大疆、配眼镜与砍价规则"
  ),
  summary: t2(
    "Spend ¥200+ in one Tax Free store on one day to claim ~9% net VAT refund in China. Learn instant mall refunds, July 2026 paperless rules and what to buy.",
    "同一天在同一退税商店满 200 元即可享约 9% 净退税。详解商场即买即退、2026 年 7 月无纸化抽检新政、必买好物与砍价规则。"
  ),
  updated: "2026-11-24",
  readMin: 7,
  keyPoints: [
    t2(
      "Ultra-low threshold: spend ¥200+ (~US$28) at the same Tax Free store on the same day to qualify (if your continuous stay in China is ≤183 days).",
      "超低起退门槛：在华连续居住不超过 183 天的境外旅客，同一日在同一家退税商店买满 200 元人民币（约 28 美元）即可退税。"
    ),
    t2(
      "Refund rates are 11% (most goods) or 8%, minus ~2% agency fee—so you pocket ~9% (or ~6%) net. A ¥4,000 DJI camera returns about ¥360.",
      "退税率分 11%（绝大多数商品）和 8% 两档，扣约 2% 代理手续费后实际到手约 9%（或 6%）。买 4,000 元大疆相机可退约 360 元。"
    ),
    t2(
      "Instant Tax Refund (即买即退) in major malls lets you receive RMB via Alipay or cash on the spot with a credit card pre-authorization.",
      "核心商圈商场全面普及“即买即退”，刷信用卡预授权担保后，当场即可通过支付宝或现金秒收退税款继续花。"
    ),
    t2(
      "From July 1, 2026, refunds are paperless with smart spot checks under ¥10,000—but you MUST still depart within 90 days and complete customs verification BEFORE checking your luggage.",
      "2026 年 7 月 1 日起全面无纸化，1 万元以下实行智能抽检；但仍须在购买后 90 天内离境，且务必在托运行李前完成海关核销。"
    ),
  ],
  sections: [
    {
      id: "tax-refund-policy",
      heading: t2("2026 China tax refund rules at a glance", "2026 中国离境退税新政一览"),
      blocks: [
        t2b(
          "Many travelers still think tax refunds in China require huge luxury purchases. In 2025–2026 China dramatically upgraded its departure tax refund program—even a T-shirt or a tin of tea can qualify.",
          "很多游客还停留在旧印象里，以为在中国退税门槛很高。实际上 2025–2026 年中国对离境退税做了大幅升级，买件 T 恤或一盒茶叶都能退钱。"
        ),
        {
          type: "table",
          head: [t2("Rule", "规则项"), t2("2026 Standard", "2026 现行标准")],
          rows: [
            [
              t2("Who qualifies", "适用人群"),
              t2("Foreign visitors and HK/Macau/Taiwan residents staying continuously in Mainland China for ≤183 days.", "在华连续居住不超过 183 天的外国人及港澳台同胞。"),
            ],
            [
              t2("Minimum spend", "起退门槛"),
              t2("¥200 RMB (~US$28) at the SAME store displaying the 'Tax Free / 退税商店' sign on the SAME day.", "同一日在同一家挂有“Tax Free / 退税商店”标志的门店消费满 200 元人民币（约 28 美元）。"),
            ],
            [
              t2("Standard rate (11% → ~9% net)", "常规商品（11% → 实拿约 9%）"),
              t2("Electronics, DJI drones & action cameras, Huawei/Xiaomi tech, clothing, shoes, bags, silk, ceramics, cosmetics, watches and jewelry (after ~2% agency fee).", "电子数码、大疆无人机与运动相机、华为/小米数码、服饰鞋包、丝绸瓷器、美妆、手表首饰等（扣除约 2% 代理手续费）。"),
            ],
            [
              t2("Reduced rate (8% → ~6% net)", "特定商品（8% → 实拿约 6%）"),
              t2("Items subject to 9% VAT, such as certain processed agricultural foods and books/newspapers (after ~2% agency fee).", "适用 9% 增值税率的部分特定商品，如部分农产品加工食品、书报等（扣除约 2% 代理手续费）。"),
            ],
            [
              t2("Real example", "实际算账示例"),
              t2("Buy a ¥4,000 DJI camera → 11% gross (¥440) minus ~2% agency fee (¥80) = ~¥360 (~US$50) back in your pocket.", "买一台 4,000 元大疆相机 → 毛退税 11%（440 元）扣约 2% 代理费（80 元）= 实拿约 360 元（约 50 美元）。"),
            ],
            [
              t2("Departure deadline", "离境期限"),
              t2("Must depart China within 90 days of the purchase date, with unused/unopened goods.", "离境日须在购买日后 90 天内，且退税商品尚未启用或消费。"),
            ],
          ],
        },
        { type: "tool", tool: "tax-refund-calculator" },
      ],
    },
    {
      id: "instant-and-paperless",
      heading: t2("Instant Tax Refund in malls & July 1, 2026 paperless upgrade", "商场“即买即退”与 2026 年 7 月 1 日无纸化新政"),
      blocks: [
        {
          type: "list",
          items: [
            t2(
              "Instant Tax Refund (即买即退): widely available across major malls in Beijing, Shanghai, Guangzhou, Shenzhen, Chengdu, Hangzhou and Chongqing (such as IFC, Plaza 66, Taikoo Li, SKP, MixC, plus major DJI and silk flagships). After paying and getting your tax refund form, visit the mall customer service desk, place a credit card pre-authorization guarantee, and receive your RMB refund instantly via Alipay or cash to keep shopping.",
              "商场“即买即退”全面普及：在北京、上海、广州、深圳、成都、杭州、重庆等核心商圈（如国金中心 IFC、恒隆广场、太古里、SKP、万象城及众多大疆/丝绸旗舰店），结账开单后去商场客户中心刷信用卡预授权担保，当场就能用支付宝扫码秒收人民币退税款（或领现金）继续在下一家店花。"
            ),
            t2(
              "July 1, 2026 paperless & smart spot check: China rolled out full electronic paperless tax refunds plus smart spot checks for purchases under ¥10,000. If your under-¥10,000 refund is not randomly selected for inspection, you skip the long airport unpacking queue.",
              "2026 年 7 月 1 日起无纸化与 1 万元以下智能抽检：全面推行电子无纸化退税，且对销售额在 10,000 元人民币以下的退税商品实施智能抽检——未被抽中查验的普通小额退税旅客，在机场无需再排长队翻箱倒柜人工拆包验核。"
            ),
          ],
        },
        {
          type: "callout",
          tone: "danger",
          title: t2("Critical airport rule: verify BEFORE checking your luggage", "机场保命铁律：务必在托运行李前核销"),
          text: t2(
            "Whether you used Instant Tax Refund in a mall or are claiming at the airport, ALWAYS go to the airport customs tax-refund counter or electronic terminal BEFORE checking in your suitcase. If you used Instant Tax Refund and skip customs verification, your credit card pre-authorization deposit will be charged back!",
            "无论你是在商场办了“即买即退”还是打算在机场领钱，去值机柜台托运行李前，都必须先到机场海关退税柜台或电子终端完成出境核销确认！否则即买即退的信用卡预授权担保金会被扣回！"
          ),
        },
        { type: "ad" },
      ],
    },
    {
      id: "best-things-to-buy",
      heading: t2("Best things to buy in China (and customs traps)", "中国最值得买的好物清单（及海关禁带提醒）"),
      blocks: [
        {
          type: "list",
          items: [
            t2(
              "DJI Pocket 3, Action cameras & Mini drones: China's domestic retail prices are already the lowest in the world—stack the ~9% tax refund on top for huge savings.",
              "大疆 Pocket 3 / 运动相机 / Mini 无人机：中国本土定价本就全球最低，再叠加约 9% 离境退税，差价极其划算。"
            ),
            t2(
              "30-minute prescription glasses: Chinese designer stores (Mujiushi 木九十, Gentle Monster) and dedicated optical markets (Beijing Panjiayuan, Danyang, Shanghai Sanye Optical Market) do eye exams and cut ultra-thin prescription lenses in 30 minutes at roughly one-fifth of US prices.",
              "30 分钟立等可取配眼镜：设计师品牌店（木九十、Gentle Monster）或专业眼镜城（北京潘家园、丹阳、上海三叶眼镜城），30 分钟验光现场配好超薄近视镜片，价格只有美国约五分之一。"
            ),
            t2(
              "Mechanical keyboards & Hi-Fi earphones: China leads the world in budget-to-flagship custom mechanical keyboards and IEM earphones.",
              "国产机械键盘与 Hi-Fi 耳机：中国在客制化机械键盘和 Hi-Fi 监听耳机领域性价比全球领先。"
            ),
            t2(
              "Jingdezhen ceramics, Song brocade silk & tea: handmade Jingdezhen master tea cups (主人杯), Song brocade silk scarves (宋锦真丝围巾), and Lapsang Souchong (正山小种) or West Lake Longjing (龙井) tea.",
              "景德镇瓷器、真丝与茶叶：景德镇手工主人杯、宋锦真丝围巾、正山小种和西湖龙井茶叶。"
            ),
            t2(
              "Snacks & pantry gifts: White Rabbit creamy candy (大白兔奶糖) and Sichuan peppercorn oil (花椒油).",
              "国民零食与调味礼盒：大白兔奶糖和花椒油。"
            ),
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: t2("Check your home country's meat import bans", "注意回国海关肉制品禁令"),
          text: t2(
            "Countries like the US, Australia, New Zealand, the UK and EU strictly ban meat and animal-fat products. Do NOT pack beef-tallow hotpot base (牛油火锅底料), beef jerky, pork floss or meat mooncakes unless you want heavy fines at home customs. Choose plant-oil (清油) hotpot base instead.",
            "美国、澳大利亚、新西兰、英国及欧盟等海关严禁携带肉类及动物油脂入境。切勿把牛油火锅底料、牛肉干、肉松或肉馅月饼塞进回国行李箱，以免被高额罚款；买火锅底料请改选纯植物油（清油）款。"
          ),
        },
      ],
    },
    {
      id: "bargaining-rules",
      heading: t2("Where to bargain—and where never to bargain", "哪里必须砍价，哪里绝对不能砍价"),
      blocks: [
        {
          type: "list",
          items: [
            t2(
              "Fixed price (NO bargaining): all shopping malls, brand boutiques, supermarkets, convenience stores, pharmacies, restaurants and chain stores. Prices are fixed and bargaining will confuse staff.",
              "明码实价（严禁砍价）：所有商场专柜、品牌旗舰店、超市、便利店、药店、餐厅和连锁店均为明码标价，不要砍价。"
            ),
            t2(
              "Tourist & pearl/silk markets (DO bargain): at tourist-oriented imitation, silk or pearl markets—such as Shanghai's AP Plaza (上海科技馆地下亚太盛汇市场) or Beijing's Hongqiao Pearl Market (红桥珍珠市场)—initial quotes are heavily inflated. Smile, stay polite, and start your counter-offer at 20%–30% of the asking price.",
              "旅游仿品/珍珠丝绸市场（务必砍价）：在专门做游客生意的市场（如上海科技馆地下亚太盛汇市场、北京红桥珍珠市场），商家开价往往虚高。保持微笑、礼貌沟通，直接从开价的 20%–30%（二到三折）开始还价。"
            ),
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: t2("Can I combine receipts from different stores to reach ¥200?", "能把不同商店的小票凑在一起满 200 元退税吗？"),
      a: t2(
        "No. The ¥200 minimum must be spent at the SAME Tax Free store on the SAME day.",
        "不能。200 元起退门槛必须是同一天在同一家退税商店消费。"
      ),
    },
    {
      q: t2("Do I need to carry my physical passport when shopping for tax-free goods?", "去买退税商品时必须随身带护照原件吗？"),
      a: t2(
        "Yes. Stores need your original passport to issue the electronic tax refund record and link it to your name.",
        "是的。商店需要核验你的护照原件才能开具电子退税单并绑定你的姓名。"
      ),
    },
    {
      q: t2("How do I receive my tax refund money?", "退税款通过什么方式拿到手？"),
      a: t2(
        "You can receive it directly into Alipay (fastest), in RMB cash, or back to a bank card—both at instant-refund mall desks and at airport refund counters.",
        "可以直接退到支付宝（最快）、领取人民币现金或退回银行卡，商场即买即退柜台和机场退税点都支持。"
      ),
    },
    {
      q: t2("What happens if I pack my tax-free items in checked luggage before customs verification?", "如果先把退税商品托运了再去海关核销会怎样？"),
      a: t2(
        "If selected for inspection and you cannot show the goods, customs cannot verify your claim—meaning no refund, or a chargeback on your instant-refund credit card pre-authorization. Always verify BEFORE checking bags.",
        "一旦被抽中查验而拿不出实物，海关将无法核销——不仅拿不到退税，已办即买即退的信用卡预授权还会被扣款。务必先核销再托运。"
      ),
    },
  ],
  related: ["alipay-wechat-pay", "atm-cash-dcc", "airports", "food-delivery-luggage", "domestic-flights"],
};

function t2b(en: string, zh: string) {
  return { type: "p", text: t2(en, zh) } as const;
}

export default guide;
