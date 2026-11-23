import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "safety-health",
  category: "practical",
  icon: "shield",
  title: t2("Safety, Health, Pharmacies & Practical Survival in China", "中国安全防骗、药店买药、应急电话与日常生存指南"),
  seoTitle: t2(
    "China Travel Safety, Pharmacy OTC Meds, Plugs (220V), Scams & Emergency Numbers",
    "中国旅游安全防骗、药店非处方药中英对照、220V电压插头与紧急电话全指南"
  ),
  summary: t2(
    "Practical China survival guide: 220V plugs, tap water, toilets, scams, clinics, 7-row OTC pharmacy drug table, emergency numbers and lost passport steps.",
    "中国日常生存指南：220V 电压插头、饮水与公厕、常见骗局、涉外诊所、7 大症状药店通用名对照表、应急电话与护照遗失补办步骤。"
  ),
  updated: "2026-11-24",
  readMin: 9,
  keyPoints: [
    t2(
      "China uses 220V / 50Hz electricity (Type A & Type I plugs) — NEVER plug US or Japanese 110V single-voltage hair dryers, curling irons or straighteners into a wall outlet.",
      "中国电压为 220V / 50Hz（A 型两脚扁插与 I 型三脚斜插）——绝对不要把美国或日本买的 110V 单电压吹风机、卷发棒或直发夹直接插上墙，会瞬间冒烟烧毁。"
    ),
    t2(
      "China has very low violent crime, but watch out for four classic tourist scams: tea ceremony invites, art student exhibitions, fake airport taxis and overpriced rickshaws.",
      "中国治安极好、暴力犯罪极低，但仍需提防四大经典旅游骗局：茶托品茶、假美院学生画展、机场黑车和高价观光三轮车。"
    ),
    t2(
      "Walk into any green-cross pharmacy (大药房) and show the Chinese generic drug name from our 7-row OTC table below — note that compound cold meds with pseudoephedrine require passport registration.",
      "走进街边任意亮绿十字灯的大药房，出示下方 7 大症状的中文药品通用名即可买到非处方药（注意：含伪麻黄碱的复方感冒药需登记护照，纯对乙酰氨基酚则无需登记）。"
    ),
    t2(
      "Save China's key numbers: 110 (Police), 120 (Ambulance), 119 (Fire), 122 (Traffic), 12345 (Mayor's multilingual hotline) and 12367 (NIA Immigration hotline).",
      "牢记中国核心号码：110（报警）、120（急救）、119（火警）、122（交通事故）、12345（政务/旅游多语种热线）、12367（国家移民管理局热线）。"
    ),
    t2(
      "Public squat toilets are common in older areas — look for the wheelchair-accessible / third restroom (无障碍/第三卫生间) for a Western sit-down toilet, and always carry pocket tissues.",
      "老城区公厕多为蹲便——寻找带轮椅标志的“无障碍/第三卫生间”即可确保有西式坐便马桶和扶手，且务必随身带一包抽纸。"
    ),
  ],
  sections: [
    {
      id: "practical-basics",
      heading: t2("Daily practical basics: power, water, toilets & tipping", "日常基础常识：电压、饮水、公厕与小费"),
      blocks: [
        {
          type: "table",
          head: [t2("Topic", "项目"), t2("What to know in China", "中国实操规则与避坑细节")],
          rows: [
            [
              t2("Electricity & plugs", "电压与插头"),
              t2(
                "220V, 50Hz. Wall sockets accept Type A (two flat parallel pins) and Type I (three angled flat pins). Phone/laptop chargers are dual-voltage (100–240V) and work fine, but US/Japan 110V single-voltage hair tools (curling irons, straighteners, hair dryers) will smoke and burn out instantly!",
                "220V、50Hz，插座兼容 A 型（两脚扁插）和 I 型（三脚斜插）。手机和电脑充电器通常支持 100–240V 宽电压可直插，但美国/日本购买的 110V 单电压卷发棒、直发夹或吹风机插上会瞬间冒烟烧毁！"
              ),
            ],
            [
              t2("Tap water", "自来水与饮水"),
              t2(
                "Do not drink tap water straight from the faucet. Drink bottled water (¥2–3 everywhere) or use the free 100°C boiling-water dispensers at hotels, airports and high-speed trains.",
                "不要直接生饮自来水。请喝瓶装水（随处 2–3 元），或使用酒店、机场和高铁车厢内免费提供的 100°C 开水机。"
              ),
            ],
            [
              t2("Tipping", "小费习惯"),
              t2(
                "No tipping culture. Restaurants, taxis, bars and hotel staff do not expect tips — leaving cash on the table may cause staff to chase you down to return it.",
                "中国没有小费文化。餐厅、出租车、酒吧和酒店员工均不收小费——把现金留在桌上，服务员可能会追出来还给你。"
              ),
            ],
            [
              t2("Time zone", "时区"),
              t2(
                "All of China runs on one single time zone: Beijing Standard Time (UTC+8), with no Daylight Saving Time.",
                "全中国统一使用一个时区：北京时间（UTC+8），不实行夏令时。"
              ),
            ],
            [
              t2("Toilets & tissues", "公共厕所与抽纸"),
              t2(
                "Squat toilets are common in older neighborhoods, parks and train stations. Look for the wheelchair-accessible / “Third Restroom” (无障碍/第三卫生间) for a guaranteed Western sit-down toilet and grab bars. Many public restrooms lack toilet paper — always carry pocket tissues.",
                "老城区、公园和车站常见蹲便。认准带轮椅标志的“无障碍/第三卫生间”可确保有西式坐便马桶和扶手。很多公厕不提供厕纸，请务必随身带抽纸。"
              ),
            ],
            [
              t2("Smoking", "吸烟规定"),
              t2(
                "Indoor smoking is officially banned in Tier-1 cities (Beijing, Shanghai, Shenzhen), though enforcement can be looser in small local restaurants, bars and smaller towns.",
                "一线城市（北京、上海、深圳等）官方禁止室内吸烟，但在部分小型餐馆、酒吧及中小城市执行相对宽松。"
              ),
            ],
            [
              t2("Toiletries to pack", "建议自带的个护用品"),
              t2(
                "Applicator tampons and Western-style solid stick deodorant are very hard to find in Chinese convenience stores and supermarkets — pack enough for your entire trip.",
                "中国便利店和超市几乎买不到导管式卫生棉条（Tampons）以及欧美固体止汗香体膏（Stick Deodorant），请在行李中带足全程用量。"
              ),
            ],
          ],
        },
      ],
    },
    {
      id: "common-scams",
      heading: t2("Common tourist scams to recognize instantly", "四大经典涉外旅游骗局识别"),
      blocks: [
        {
          type: "p",
          text: t2(
            "China is one of the safest countries in the world for walking around even late at night, with virtually no mugging or violent street crime. The main things to guard against are non-violent tourist overcharging scams:",
            "中国是全球治安最好的国家之一，即便深夜街头散步也非常安全，几乎没有暴力抢劫。主要只需防范以下几种非暴力宰客套路："
          ),
        },
        {
          type: "list",
          items: [
            t2(
              "Tea ceremony scam: Friendly English-speaking strangers near Tiananmen, Wangfujing, Nanjing Road or the Bund invite you to practice English at a “traditional tea tasting.” The bill arrives at ¥2,000–5,000. Politely decline and walk away.",
              "“茶托”品茶骗局：在天安门、王府井、南京路或外滩附近，热情的英语搭讪者邀请你去体验“传统茶道顺便练英语”，结账时账单高达 2,000–5,000 元。礼貌拒绝并离开即可。"
            ),
            t2(
              "Art student scam: Young people claiming to be art students invite you to see their “final exhibition” nearby, then pressure you to buy mass-produced scrolls at inflated prices.",
              "假“美院学生”画展骗局：自称艺术系学生的年轻人邀你去附近看“毕业画展”，随后软磨硬泡让你高价买下批量印刷的字画。"
            ),
            t2(
              "Fake / unmetered black taxis: Drivers approaching you inside airport or train station arrivals halls quote flat rates 3–5× higher than the meter. Always use the official taxi queue or DiDi inside Alipay.",
              "机场/火车站黑车：在到达大厅内主动拉客的司机往往一口价宰客 3–5 倍。请永远走官方出租车排队区打表，或用支付宝叫滴滴。"
            ),
            t2(
              "Overpriced tourist rickshaws / tuk-tuks: Near hutongs or scenic gates, drivers may agree on “30” and then demand “300” (or claim it was per person / per minute). Confirm the total price in writing on your phone or stick to metro, bikes and DiDi.",
              "高价观光三轮车：胡同口或景区门口的三轮车有时口头谈好“30”，下车却改口要“300”（或称按人头/按分钟算）。上车前务必在手机上写明总价，或直接选地铁、共享单车和滴滴。"
            ),
          ],
        },
        { type: "ad" },
      ],
    },
    {
      id: "clinics-and-pharmacy",
      heading: t2("International clinics & 7-row OTC pharmacy lookup table", "涉外医院与药店 7 大常见症状非处方药对照表"),
      blocks: [
        {
          type: "p",
          text: t2(
            "For serious illness or injury, go to an international clinic (such as United Family Healthcare / Raffles / Parkway in major cities) or the International Medical Department / VIP Clinic (国际医疗部 / 特需门诊) of a public Tier-3A hospital (公立三甲医院), where English-speaking doctors and international insurance billing are available.",
            "若遇较严重的疾病或外伤，建议前往大城市的国际诊所（如和睦家等），或直接前往公立三甲医院的“国际医疗部 / 特需门诊”，通常配有英语医生并支持国际商保直付或开具英文理赔单据。"
          ),
        },
        {
          type: "p",
          text: t2(
            "For everyday fever, upset stomach, allergies or blisters, walk into any street-corner pharmacy with a green cross sign (大药房) and show the Chinese generic name below:",
            "日常发烧、拉肚子、过敏或磨出水泡，直接走进街边任意亮绿十字灯的大药房，向药师出示下表对应的国家标准中文非处方药通用名即可："
          ),
        },
        {
          type: "table",
          head: [
            t2("Symptom / Western reference", "症状 / 熟悉的欧美药名"),
            t2("Chinese OTC drug to show pharmacist", "给药师看的中文标准药名"),
            t2("Active ingredient & safety notes", "有效成分与用药提醒"),
          ],
          rows: [
            [
              t2("Fever / Headache / Pain (Advil / Motrin)", "发烧 / 头痛 / 止痛（类似 Advil / Motrin）"),
              "布洛芬缓释胶囊（如芬必得） / 布洛芬片",
              t2(
                "Ibuprofen (0.2 g or 0.3 g). Ask the pharmacist to confirm exact dosage per tablet.",
                "布洛芬（0.2 g 或 0.3 g），请向药师确认每粒剂量与服用间隔。"
              ),
            ],
            [
              t2("Fever / Cold Pain, stomach-gentle (Tylenol / Panadol)", "发烧 / 感冒痛、不伤胃（类似 Tylenol / Panadol）"),
              "纯对乙酰氨基酚片（如泰诺林）",
              t2(
                "Acetaminophen / Paracetamol (single-ingredient only). Note: compound cold meds containing pseudoephedrine require passport registration; plain acetaminophen does not!",
                "单一成分对乙酰氨基酚。注意：含伪麻黄碱的复方感冒药需实名登记护照，买纯对乙酰氨基酚片则无需登记。"
              ),
            ],
            [
              t2("Traveler's Diarrhea / Upset Stomach (Smecta / Imodium)", "水土不服 / 腹泻（类似 Smecta / Imodium）"),
              "蒙脱石散（思密达） + 口服补液盐 III",
              t2(
                "Montmorillonite Powder (mix 1 sachet in 50 ml warm water) + Oral Rehydration Salts III (electrolytes to prevent dehydration).",
                "蒙脱石散（1 袋兑 50 ml 温水冲服）+ 口服补液盐 III（补充防脱水电解质）。"
              ),
            ],
            [
              t2("Heartburn / Acid Reflux / Spicy Stomach (Tums / Prilosec)", "吃辣烧心 / 胃酸胃痛（类似 Tums / Prilosec）"),
              "铝碳酸镁咀嚼片（达喜） / 奥美拉唑肠溶胶囊",
              t2(
                "Hydrotalcite chewable tablets (fast antacid relief) or Omeprazole.",
                "铝碳酸镁咀嚼片（快速中和胃酸）或奥美拉唑肠溶胶囊。"
              ),
            ],
            [
              t2("Skin Rash / Hay Fever / Hives (Claritin / Zyrtec)", "过敏起疹 / 鼻炎打喷嚏（类似 Claritin / Zyrtec）"),
              "氯雷他定片（开瑞坦） / 盐酸西替利嗪片",
              t2(
                "Loratadine (10 mg, non-drowsy) or Cetirizine.",
                "氯雷他定（10 mg，不嗜睡）或盐酸西替利嗪。"
              ),
            ],
            [
              t2("Motion Sickness — Bus / Boat (Dramamine)", "晕车 / 晕船（类似 Dramamine）"),
              "茶苯海明片（乘晕宁） / 晕车贴",
              t2(
                "Dimenhydrinate — take 30 minutes before winding mountain bus rides in Zhangjiajie or Sichuan.",
                "茶苯海明——在张家界或川西坐盘山大巴前 30 分钟服用。"
              ),
            ],
            [
              t2("Blisters / Cuts / Sprained Ankle", "磨脚水泡 / 擦伤 / 扭伤"),
              "防水创可贴 + 碘伏消毒棉签 + 扭伤消肿贴膏",
              t2(
                "Waterproof Band-Aids + Povidone-iodine swabs (twist/snap the colored ring tip to let iodine flow down to the opposite cotton head!).",
                "防水创可贴 + 碘伏消毒棉签（注意：掰断带彩环的一端，碘伏才会流到另一头棉球上！）。"
              ),
            ],
          ],
        },
        { type: "tool", tool: "rescue-cards" },
        { type: "affiliate", id: "insurance" },
      ],
    },
    {
      id: "emergency-and-passport",
      heading: t2("Emergency numbers & what to do if you lose your passport", "紧急电话与护照遗失补办步骤"),
      blocks: [
        {
          type: "table",
          head: [t2("Number", "号码"), t2("Service", "用途"), t2("Notes", "说明")],
          rows: [
            ["110", t2("Police", "报警电话"), t2("24/7; major cities offer English transfer", "24 小时；大城市支持英语转接")],
            ["120", t2("Ambulance / Medical Emergency", "医疗急救车"), t2("Ask a local or hotel staff to give the exact Chinese address", "建议请路人或酒店员工报中文精准地址")],
            ["119", t2("Fire", "火警电话"), t2("24/7 fire and rescue", "24 小时消防救援")],
            ["122", t2("Traffic Accident", "交通事故报警"), t2("Road accidents and highway emergencies", "道路交通事故与高速求助")],
            ["12345", t2("Mayor's Citizen & Tourist Hotline", "政务服务便民热线"), t2("24/7 multilingual help for tourist complaints & local info", "24 小时多语种服务，处理旅游纠纷与本地咨询")],
            ["12367", t2("National Immigration Administration (NIA)", "国家移民管理局热线"), t2("24/7 multilingual support for visa, transit & hotel registration", "24 小时多语种服务，解答签证、过境与住宿登记问题")],
          ],
        },
        {
          type: "p",
          text: t2(
            "If your passport is lost or stolen in China, follow these four steps in exact order (keep a photo of your passport bio page and entry stamp on your phone before you travel):",
            "如果不幸在中国遗失或被盗护照，请严格按以下 4 步处理（出发前务必在手机里存好护照资料页和入境章照片）："
          ),
        },
        {
          type: "steps",
          items: [
            t2(
              "Report the loss immediately at the nearest local police station (派出所) where it went missing to obtain a Police Receipt of Report (报案回执).",
              "立刻前往遗失地最近的辖区派出所报案，领取《报案回执》。"
            ),
            t2(
              "Take the Police Receipt, passport photos and your Temporary Residence Registration slip (from your hotel) to the city's Exit-Entry Administration Bureau (出入境管理局) to get a Confirmation of Reporting Loss of Passport (护照报失证明).",
              "携带《报案回执》、证件照及酒店出具的《临时住宿登记表》，前往当地市级出入境管理局开具《护照报失证明》。"
            ),
            t2(
              "Visit your country's embassy or consulate in China to apply for an emergency travel document or replacement passport.",
              "持报失证明前往本国驻华大使馆或领事馆申办紧急旅行证或补发新护照。"
            ),
            t2(
              "Return to the local Exit-Entry Administration Bureau with your new passport/travel document to get a replacement stay/exit visa before heading to the airport — you cannot clear exit immigration without it.",
              "拿到新护照或旅行证后，必须再次返回当地出入境管理局补办停留/出境签证，之后才能合法出境登机。"
            ),
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: t2("Is China safe for solo female travelers?", "女性独自去中国旅游安全吗？"),
      a: t2(
        "Yes — China is widely regarded as one of the safest destinations in the world for solo travelers, including at night in major cities. Normal common sense still applies for tourist overcharging scams and keeping valuables zipped in crowded subways.",
        "非常安全。中国被公认为全球最适合独行旅客（包括女性夜行）的目的地之一。只需保持常规警惕，防范景区搭讪宰客并在拥挤地铁里拉好包拉链即可。"
      ),
    },
    {
      q: t2("Can I bring my US Dyson Airwrap or hair straightener to China?", "能把美国买的戴森卷发棒或直发夹带到中国用吗？"),
      a: t2(
        "No. US and Japanese hair styling tools are single-voltage 110–120V. Plugging them into China's 220V outlets — even with a plug adapter — will instantly damage or burn them out. Use the hotel hair dryer or buy a dual-voltage travel tool.",
        "不可以。美国和日本版的美发电器多为 110–120V 单电压，哪怕套了插头转换器，插进中国 220V 插座也会瞬间烧毁。请使用酒店吹风机或购买 100–240V 宽电压旅行款。"
      ),
    },
    {
      q: t2("Why did a Chinese pharmacy ask for my passport when I bought cold medicine?", "为什么在中国药店买感冒药时要登记我的护照？"),
      a: t2(
        "Under Chinese drug regulations, compound cold medications containing pseudoephedrine (伪麻黄碱) require ID/passport registration at purchase. If you only need fever or pain relief, ask for plain single-ingredient acetaminophen (纯对乙酰氨基酚片) or ibuprofen (布洛芬), which do not require registration.",
        "根据中国药品监管规定，购买含伪麻黄碱的复方感冒药需实名登记证件。如果只需要退烧止痛，直接买单一成分的纯对乙酰氨基酚片或布洛芬，无需登记护照。"
      ),
    },
    {
      q: t2("Do I need travel medical insurance for China?", "去中国旅游需要买旅行医疗保险吗？"),
      a: t2(
        "Strongly recommended. While public Chinese hospitals are affordable, international clinics and Tier-3A hospital International Medical Departments charge Western-level fees and usually require upfront payment or direct-billing travel insurance.",
        "强烈建议购买。虽然中国公立医院普通门诊价格低廉，但涉外诊所和三甲医院国际医疗部收费接近欧美水平，通常需要垫付或使用支持直付的国际旅行医疗险。"
      ),
    },
  ],
  related: ["arrival-immigration", "when-to-go", "food-ordering-allergies", "essential-apps"],
};

export default guide;
