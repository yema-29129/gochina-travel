import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "arrival-immigration",
  category: "visa",
  icon: "plane",
  title: t2("Landing in China: Immigration, Customs & First-Hour Guide", "落地中国第一小时：边检通关、海关与住宿登记指南"),
  seoTitle: t2(
    "China Airport Arrival Guide: Immigration, Customs, 24-Hour Police Registration & 12367",
    "中国机场入境通关全流程：边检按指纹、海关红绿通道、24小时住宿登记与12367热线"
  ),
  summary: t2(
    "Step-by-step China airport arrival guide: documents to prepare, immigration lanes, customs channels, official taxis, 24-hour police registration & 12367.",
    "落地中国机场全流程指南：必备证件、边检通道、海关红绿通道、正规出租车、住朋友家 24 小时住宿登记与 12367 热线。"
  ),
  updated: "2026-11-24",
  readMin: 7,
  keyPoints: [
    t2(
      "Keep your passport, Online Arrival Card QR screenshot, first-night hotel booking (with Chinese address) and printed onward ticket ready before reaching the counter.",
      "抵达边检柜台前，请提前备好护照、网上入境卡二维码截图、第一晚酒店预订单（含中文地址）及打印好的离境联程客票。"
    ),
    t2(
      "240-hour transit travelers go to the dedicated 24/240-hour Temporary Entry Permit counter FIRST before regular immigration.",
      "走 240 小时过境免签的旅客须先前往专设的“24/240 小时临时入境许可”柜台办理，再去常规边检通道。"
    ),
    t2(
      "Ignore anyone approaching you inside the arrivals hall offering a taxi — only use the official airport taxi rank, metro/rail, or DiDi inside Alipay.",
      "无视在到达大厅内主动搭讪拉客的黑车司机——只坐机场官方出租车排队区、地铁/市域快铁，或用支付宝叫滴滴。"
    ),
    t2(
      "Hotels register you with police automatically; if you stay in a private home or with friends, you MUST register within 24 hours of arrival.",
      "住正规酒店由前台自动上报住宿登记；若住在朋友家或私人公寓，必须在抵达后 24 小时内自行办理临时住宿登记。"
    ),
    t2(
      "If a small-city hotel front desk asks for a paper visa sticker when you entered visa-free, point to your oval entry stamp or dial 12367 (NIA 24/7 multilingual hotline).",
      "若小城市酒店前台因找不到纸质签证贴纸而卡住入住，请指引其查看护照上的椭圆入境章，或直接拨打 12367 国家移民管理局热线协助。"
    ),
  ],
  sections: [
    {
      id: "documents-ready",
      heading: t2("Documents to have ready before you land", "下飞机前随手备好的 4 样材料"),
      blocks: [
        {
          type: "p",
          text: t2(
            "Airport Wi-Fi often requires an SMS code or takes time to connect, so keep these four items offline on your phone or printed in your carry-on before disembarking:",
            "机场免费 Wi-Fi 有时需要短信验证或连接缓慢，下飞机前请务必把以下 4 样材料离线保存在手机或打印随身携带："
          ),
        },
        {
          type: "list",
          items: [
            t2(
              "Passport: Original ordinary passport with sufficient validity (at least 3 months for 240-hour transit; 6+ months and 2 blank pages strongly recommended).",
              "护照原件：有效普通护照（240 小时过境免签须剩至少 3 个月有效期；强烈建议留足 6 个月以上有效期和 2 页空白页）。"
            ),
            t2(
              "Online Arrival Card QR screenshot: Saved after submitting on the NIA portal or 12367 mini-program 24–72 hours before departure.",
              "网上入境卡二维码截图：登机前 24–72 小时在国家移民管理局网站或 12367 小程序填报后生成的回执截图。"
            ),
            t2(
              "Confirmed onward ticket (printed in English): Mandatory for 240-hour visa-free transit (must show confirmed date and seat to a third country/region — standby tickets are invalid) and helpful for 30-day visa-free entry.",
              "已确定日期与座位的英文纸质离境行程单：240 小时过境免签强制要求查验（候补票无效），30 天免签备着也能加快通关。"
            ),
            t2(
              "First-night hotel confirmation with Chinese address: Officers may check where you are staying, and you will need the Chinese address for taxis.",
              "第一晚酒店预订单（附中文地址）：边检官可能核对入住地址，出关打车时也能直接给司机看。"
            ),
          ],
        },
      ],
    },
    {
      id: "immigration-steps",
      heading: t2("Step-by-step through immigration", "边检通关分步流程"),
      blocks: [
        {
          type: "steps",
          items: [
            t2(
              "Follow signs for “Foreigners” (外国人). If you are using 24-hour or 240-hour visa-free transit, stop at the dedicated “24/240-Hour Visa-Free Transit / Temporary Entry Permit” counter first to get your temporary entry sticker.",
              "沿“外国人（Foreigners）”标识前行。如果你走 24 小时或 240 小时过境免签，请先前往专设的“24/240 小时过境免签 / 临时入境许可”柜台申领临时入境许可。"
            ),
            t2(
              "Scan your fingerprints at the self-service fingerprint kiosk (if prompted before the queue) or directly at the officer's desk, and look at the camera for your arrival photo. Most foreign visitors aged 14–70 provide fingerprints on entry.",
              "按指引在自助指纹采集机或边检柜台采集指纹，并直视摄像头拍摄入境照片（绝大多数 14–70 岁外籍入境旅客需留存指纹）。"
            ),
            t2(
              "Hand over your passport (and show your Online Arrival Card QR screenshot or completed paper card). Answer brief routine questions about your trip length and cities.",
              "递交护照（并出示网上入境卡二维码截图或填好的纸质卡），如实简短回答停留天数和行程城市等常规询问。"
            ),
            t2(
              "Before walking away from the desk, check that your passport has the oval China entry stamp (or temporary entry permit sticker) with the correct date.",
              "离开柜台前，确认护照上已盖好清晰的椭圆中国入境章（或贴好临时入境许可），并核对日期无误。"
            ),
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: t2("Airport international service counters", "机场外籍人员一站式服务台"),
          text: t2(
            "Major hubs like Shanghai Pudong (PVG T1/T2), Beijing Capital (PEK T2/T3) and Guangzhou Baiyun (CAN T2) have one-stop international visitor centers right outside arrivals. Staff help free of charge with Alipay setup, local SIM cards, small cash exchange and transit cards.",
            "上海浦东（PVG T1/T2）、北京首都（PEK T2/T3）、广州白云（CAN T2）等大型枢纽在国际到达出口处均设有“外籍人员一站式综合服务中心”，免费协助绑定支付宝、办理电话卡、换零钱和领取交通卡。"
          ),
        },
        { type: "ad" },
      ],
    },
    {
      id: "customs-and-taxis",
      heading: t2("Customs channels & avoiding airport taxi touts", "海关红绿通道与机场防黑车"),
      blocks: [
        {
          type: "list",
          items: [
            t2(
              "Green Channel (Nothing to Declare): Walk through if you carry personal luggage only, cash within the duty-free limit (up to USD 5,000 equivalent in foreign currency or ¥20,000 in RMB), and no fresh meat, fruit, seeds or restricted items. Expect an X-ray scan of your suitcases.",
              "绿色通道（无申报通道）：仅携带自用行李、外币现金不超过等值 5,000 美元（或人民币不超过 20,000 元），且无新鲜肉类、水果、种子或违禁品时走绿通道。所有大箱子通常需过一次 X 光机查验。"
            ),
            t2(
              "Red Channel (Goods to Declare): Use this if you exceed cash limits, bring commercial samples, high-value items requiring declaration, or prescription medications in large quantities.",
              "红色通道（申报通道）：携带超额现金、商业样品、需申报的高价值物品或大剂量处方药时请主动走红通道。"
            ),
            t2(
              "Official taxi queues only: Ignore anyone whispering “taxi, DiDi?” inside the arrivals hall — they are unlicensed touts charging 3–5× normal fares. Follow overhead “Taxi” signs to the official outdoor queue, take the airport express rail/metro, or call DiDi inside Alipay from the designated ride-hailing pickup zone.",
              "只坐正规出租车队列：绝不理会在到达大厅里凑上来问“Taxi / DiDi?”的拉客黑车（宰客高达 3–5 倍）。请认准头顶“出租车（Taxi）”标识去室外官方排队区打表上车，或坐机场快轨/地铁，或在指定网约车上车点用支付宝叫滴滴。"
            ),
          ],
        },
        { type: "tool", tool: "powerbank-airport" },
      ],
    },
    {
      id: "police-registration",
      heading: t2("24-hour police registration (private homes vs. hotels)", "24 小时临时住宿登记（住民宿/朋友家必看）"),
      blocks: [
        {
          type: "p",
          text: t2(
            "Under Chinese law, every foreign visitor must complete Temporary Residence Registration (临时住宿登记) within 24 hours of arriving at each place of stay.",
            "根据中国出入境管理法规定，所有外籍旅客在每处住地抵达后 24 小时内都必须完成“临时住宿登记”。"
          ),
        },
        {
          type: "list",
          items: [
            t2(
              "Staying in a hotel: You don't need to do anything extra. When the front desk scans your passport at check-in, the system automatically submits your registration to the police.",
              "入住酒店：你无需自行跑腿。酒店前台办理入住扫描你护照的那一刻，系统会自动将住宿登记上传至公安机关。"
            ),
            t2(
              "Staying with friends, family, or in a private apartment: You MUST register within 24 hours of arrival. Go to the local neighborhood police station (派出所) with your passport, your host's ID card and property/lease document — or use the city's online registration mini-program (available in Shanghai, Beijing, Guangzhou, Shenzhen, Hangzhou and other major cities).",
              "住在朋友家、亲属家或私人公寓：必须在抵达后 24 小时内办理登记。携带本人护照、房东身份证及房产证/租房合同前往辖区派出所办理，或在支持线上申报的城市（上海、北京、广州、深圳、杭州等）通过官方小程序在线完成登记。"
            ),
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: t2("Don't skip private-home registration", "切勿漏办住朋友家的住宿登记"),
          text: t2(
            "Failure to register within 24 hours can result in a warning or a fine of up to ¥2,000, and can cause delays if you later need to extend a stay or report a lost passport.",
            "逾期未办理临时住宿登记可能面临警告或最高 2,000 元罚款，也会影响后续办理签证延期或护照挂失补办。"
          ),
        },
      ],
    },
    {
      id: "hotel-checkin-12367",
      heading: t2("Hotel check-in on visa-free entry & the 12367 hotline", "免签入住酒店受阻怎么办与 12367 热线"),
      blocks: [
        {
          type: "p",
          text: t2(
            "Hotels in Tier-1 cities handle visa-free passports every day, but a junior receptionist in a smaller city may look for a full-page paper visa sticker and get confused when you entered visa-free. Show them the card below — it explains how to read the oval entry stamp and gives them China's official 24/7 NIA hotline (12367) for instant guidance.",
            "一线城市酒店每天都在接待免签外宾，但部分中小城市的新手前台可能习惯翻找整页的纸质签证贴纸，看到免签护照一时不知怎么录入。直接向他们出示下方卡片——里面写明了如何核验椭圆入境章，并附有国家移民管理局 24 小时官方热线 12367 供前台免费致电指导录入。"
          ),
        },
        {
          type: "show",
          zh: "您好！我是合法免签入境中国的外国游客，因此护照上没有纸质签证贴纸，请查看我护照上的椭圆形中国边检入境章（或240小时临时入境许可）。如系统录入需要协助，可免费拨打国家移民管理局24小时官方热线 12367，工作人员会指导您完成外宾入住登记，非常感谢！",
          pinyin: "Nínhǎo! Wǒ shì héfǎ miǎnqiān rùjìng Zhōngguó de wàiguó yóukè, qǐng chákàn hùzhào shàng de tuǒyuánxíng rùjìngzhāng. Rú xū xiézhù kě bōdǎ 12367.",
          meaning: t2(
            "Hello! I entered China legally visa-free, so there is no paper visa sticker in my passport. Please check the oval China Immigration entry stamp (or 240-hour Temporary Entry Permit). If you need help entering my details into the system, please call the free 24/7 National Immigration Administration hotline 12367 for official guidance. Thank you!",
            "您好！我是合法免签入境的外国游客，无纸质签证贴纸，请查看椭圆入境章（或 240 小时临时入境许可）。如需系统录入协助，可免费拨打 12367 国家移民管理局官方热线。"
          ),
        },
      ],
    },
  ],
  faq: [
    {
      q: t2("How long does China airport immigration take?", "中国机场入境边检大概要排多久？"),
      a: t2(
        "Typically 30–60 minutes at major hubs like PVG, PEK or CAN, or up to 90 minutes during evening arrival peaks. Completing the Online Arrival Card beforehand usually saves about 20 minutes.",
        "在浦东、首都、白云等大枢纽通常需要 30–60 分钟，晚间航班高峰期可能达 90 分钟。提前填好网上入境卡通常能省下约 20 分钟。"
      ),
    },
    {
      q: t2("How much transfer time do I need if my domestic flight leaves from a different airport in the same city?", "同城双机场转机（如浦东转虹桥）至少要留多久？"),
      a: t2(
        "Allow at least 4.5–5 hours for Shanghai PVG ↔ SHA, 5–5.5 hours for Chengdu TFU ↔ CTU, and 6+ hours for Beijing PKX ↔ PEK to cover immigration, baggage, cross-city transit and check-in cutoffs.",
        "上海浦东 PVG ↔ 虹桥 SHA 至少预留 4.5–5 小时，成都天府 TFU ↔ 双流 CTU 至少 5–5.5 小时，北京大兴 PKX ↔ 首都 PEK 至少 6 小时以上，以覆盖边检、取行李、跨城交通和值机截载时间。"
      ),
    },
    {
      q: t2("Do I have to carry my physical passport every day after entering China?", "入境中国后每天出门都要随身带护照原件吗？"),
      a: t2(
        "Yes. You need your physical passport for high-speed trains, domestic flights, major attractions like the Forbidden City and Tiananmen Square, and occasional police checks.",
        "是的。乘坐高铁、国内航班、进入故宫和天安门广场等核心景点以及偶尔的街头核验，都需要出示护照原件。"
      ),
    },
    {
      q: t2("What is the 12367 hotline and does it speak English?", "12367 是什么电话？有英文服务吗？"),
      a: t2(
        "12367 is the official 24/7 service hotline of China's National Immigration Administration. It offers Chinese, English and other language support for visa, transit, entry stamp and hotel registration questions.",
        "12367 是中国国家移民管理局 24 小时官方服务热线，提供中、英等多语种服务，专门解答签证、过境免签、入境章及外宾住宿登记等问题。"
      ),
    },
  ],
  related: ["online-arrival-card", "airports", "240-hour-transit", "safety-health"],
};

export default guide;
