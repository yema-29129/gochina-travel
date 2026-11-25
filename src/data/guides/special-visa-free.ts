import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "special-visa-free",
  category: "visa",
  icon: "map",
  title: t2(
    "Special Regional Visa-Free Schemes, Tibet Permits & Xinjiang Rules",
    "特殊区域免签政策、西藏入藏函与新疆出行规则"
  ),
  seoTitle: t2(
    "Hainan 30-Day Visa-Free, Cruise 15-Day, HK 144-Hour & Tibet Travel Permit Rules (2026)",
    "海南30天免签、邮轮15天免签、港澳144小时与西藏入藏函全规则（2026）"
  ),
  summary: t2(
    "How Hainan 30-day, cruise 15-day, and HK/Macau 144-hour visa-free schemes work, plus mandatory Tibet Travel Permit rules and Xinjiang border access.",
    "海南30天免签、邮轮15天免签与港澳外国旅游团144小时免签细则，以及西藏入藏函强制规定与新疆开放城市和边境区域说明。"
  ),
  updated: "2026-11-24",
  readMin: 6,
  keyPoints: [
    t2(
      "Hainan 30-day visa-free covers 61 countries (including the US, UK, France, Russia, Indonesia and Vietnam), but is strictly limited to Hainan Province.",
      "海南 30 天免签覆盖 61 个国家（含美、英、法、俄、印尼、越南等），但活动范围严格限定在海南省内。"
    ),
    t2(
      "Foreign tour groups of 2+ arriving by cruise ship get 15 days visa-free via 13 cruise ports and can travel to coastal provinces and as far as Beijing.",
      "2 人及以上外国邮轮旅游团可从 13 个邮轮口岸享受 15 天免签，可随团前往沿海省市并远至北京市。"
    ),
    t2(
      "Foreign tour groups from Hong Kong or Macau (2+ via a licensed agency) get 144 hours visa-free into 9 Guangdong Greater Bay Area cities plus Shantou, or into Guilin.",
      "港澳地区合法旅行社组织的 2 人及以上外国旅游团，可享受 144 小时免签入境广东大湾区内地 9 市及汕头，或入境桂林。"
    ),
    t2(
      "Tibet is off-limits to independent foreign travelers: even 30-day visa-free citizens MUST obtain a Tibet Travel Permit 15–20 days ahead through a licensed Tibetan agency.",
      "西藏禁止外籍游客独自自由行：哪怕是 30 天免签国公民，也必须提前 15–20 天通过有资质的西藏本地旅行社办理入藏函。"
    ),
    t2(
      "Main Xinjiang tourist cities like Urumqi, Kashgar city and Ili/Nalati are open to foreigners, but border zones like Tashkurgan and Baihaba require extra border permits.",
      "新疆乌鲁木齐、喀什市区、伊犁那拉提等常规景区对外国人开放，但塔什库尔干、白哈巴村等边境区需另办边境通行证。"
    ),
  ],
  sections: [
    {
      id: "overview-table",
      heading: t2("Regional visa-free schemes at a glance", "区域性特殊免签政策一览"),
      blocks: [
        {
          type: "p",
          text: t2(
            "Beyond the 30-day unilateral/mutual visa-free lists and 240-hour transit visa-free policy, China offers three targeted regional schemes for beach travelers, cruise passengers and Hong Kong/Macau side-trippers.",
            "除了 30 天单方面/双边互免签证和 240 小时过境免签之外，中国还面向海岛度假游客、邮轮旅客以及港澳延伸客提供三项专门的区域免签福利。"
          ),
        },
        {
          type: "table",
          head: [
            t2("Scheme", "政策名称"),
            t2("Stay limit", "停留期限"),
            t2("Who qualifies", "适用对象"),
            t2("Allowed area", "允许活动范围"),
          ],
          rows: [
            [
              t2("Hainan Visa-Free", "海南入境免签"),
              t2("30 days", "30 天"),
              t2("Ordinary passport holders from 61 countries", "61 国普通护照持有人"),
              t2("Hainan Province only (no other mainland provinces)", "仅限海南省全域（不可前往中国大陆其他省份）"),
            ],
            [
              t2("Cruise Ship Tour Group", "外国旅游团乘坐邮轮入境免签"),
              t2("15 days", "15 天"),
              t2("2+ foreign tourists organized by a Chinese travel agency", "境内旅行社组织接待的 2 人及以上外国旅游团"),
              t2("Coastal provinces & municipalities + Beijing", "沿海省（区、市）及北京市"),
            ],
            [
              t2("HK/Macau Tour Group to Guangdong / Guilin", "港澳外国旅游团入境广东/桂林免签"),
              t2("144 hours (6 days)", "144 小时（6 天）"),
              t2("2+ citizens of countries with diplomatic ties to China via a licensed HK/Macau agency", "与中国建交国家公民，在港澳参加合法注册旅行社组团（2 人起）"),
              t2("9 Guangdong Greater Bay Area cities + Shantou, or Guilin", "大湾区内地 9 市及汕头市，或桂林市"),
            ],
          ],
        },
      ],
    },
    {
      id: "hainan-30-day",
      heading: t2("Hainan 30-day visa-free (61 countries)", "海南 30 天入境免签（61 国）"),
      blocks: [
        {
          type: "p",
          text: t2(
            "Ordinary passport holders from 61 countries — including the United States, United Kingdom, France, Russia, Indonesia and Vietnam — can fly directly or connect via Hong Kong into Haikou Meilan (HAK) or Sanya Phoenix (SYX) and stay in Hainan Province for up to 30 days without a visa (for tourism, business, visiting family, medical care, exhibitions or sports — no tour group required).",
            "包括美国、英国、法国、俄罗斯、印度尼西亚、越南等在内的 61 国普通护照持有人，可直飞或经香港/澳门/第三国转机飞抵海口美兰（HAK）或三亚凤凰（SYX）机场，免签在海南省内停留最长 30 天（涵盖旅游、商贸、访问、探亲、医疗、会展、体育竞技，个人即可免签，无需跟团）。"
          ),
        },
        {
          type: "table",
          head: [t2("Region", "地区"), t2("All 61 Eligible Countries for Hainan 30-Day Visa-Free", "海南 30 天免签全部 61 国完整名单")],
          rows: [
            [
              t2("Europe (40)", "欧洲（40 国）"),
              t2(
                "Albania, Austria, Belarus, Belgium, Bosnia and Herzegovina, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Monaco, Montenegro, Netherlands, North Macedonia, Norway, Poland, Portugal, Romania, Russia, Serbia, Slovakia, Slovenia, Spain, Sweden, Switzerland, Ukraine, United Kingdom",
                "阿尔巴尼亚、奥地利、白俄罗斯、比利时、波黑、保加利亚、克罗地亚、塞浦路斯、捷克、丹麦、爱沙尼亚、芬兰、法国、德国、希腊、匈牙利、冰岛、爱尔兰、意大利、拉脱维亚、立陶宛、卢森堡、马耳他、摩纳哥、黑山、荷兰、北马其顿、挪威、波兰、葡萄牙、罗马尼亚、俄罗斯、塞尔维亚、斯洛伐克、斯洛文尼亚、西班牙、瑞典、瑞士、乌克兰、英国"
              ),
            ],
            [
              t2("Asia (13)", "亚洲（13 国）"),
              t2(
                "Brunei, Indonesia, Japan, Kazakhstan, Kyrgyzstan, Malaysia, Philippines, Qatar, Singapore, South Korea, Thailand, United Arab Emirates, Vietnam",
                "文莱、印度尼西亚、日本、哈萨克斯坦、吉尔吉斯斯坦、马来西亚、菲律宾、卡塔尔、新加坡、韩国、泰国、阿联酋、越南"
              ),
            ],
            [
              t2("Americas (6)", "美洲（6 国）"),
              t2(
                "Argentina, Brazil, Canada, Chile, Mexico, United States",
                "阿根廷、巴西、加拿大、智利、墨西哥、美国"
              ),
            ],
            [
              t2("Oceania (2)", "大洋洲（2 国）"),
              t2("Australia, New Zealand", "澳大利亚、新西兰"),
            ],
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: t2("Cannot leave Hainan for other mainland provinces", "不可离开海南前往大陆其他省份"),
          text: t2(
            "If you enter under the Hainan 30-day scheme (rather than the nationwide 30-day visa-free list or a regular Chinese visa), you cannot board a domestic flight or ferry to Shanghai, Beijing or other mainland provinces.",
            "如果你是以海南 30 天免签身份入境（而非享受全国 30 天免签或持常规中国签证），则不能乘坐国内航班或轮渡前往上海、北京等中国大陆其他省份。"
          ),
        },
      ],
    },
    {
      id: "cruise-and-hk-macau",
      heading: t2("Cruise 15-day & HK/Macau 144-hour tour groups", "邮轮 15 天免签与港澳 144 小时免签团"),
      blocks: [
        {
          type: "list",
          items: [
            t2(
              "Cruise ship 15-day visa-free: Foreign tour groups of 2 or more organized and received by a licensed Chinese travel agency can enter visa-free for up to 15 days through 13 designated cruise ports — including Shanghai, Tianjin, Qingdao, Dalian, Xiamen, Shenzhen, Sanya and Guangzhou. Groups must enter and exit with the same cruise ship and may visit coastal provinces and even travel inland to Beijing.",
              "邮轮 15 天免签：由境内合法旅行社组织接待的 2 人及以上外国旅游团，可乘邮轮经上海、天津、青岛、大连、厦门、深圳、三亚、广州等 13 个指定邮轮口岸整团免签入境，停留不超过 15 天。全团须随同一邮轮出入境，可游览沿海省市并远至北京市。"
            ),
            t2(
              "Hong Kong & Macau 144-hour visa-free tour groups: Citizens of countries with diplomatic relations with China who join a legally registered Hong Kong or Macau travel agency group (minimum 2 people) can enter visa-free for 144 hours (6 days) to visit the 9 mainland cities of the Greater Bay Area plus Shantou in Guangdong, or fly into Guilin.",
              "港澳外国旅游团 144 小时免签：与中国建交国家的公民在香港或澳门参加合法注册旅行社组团（2 人起），可免签停留 144 小时（6 天），前往广东大湾区内地 9 市及汕头市，或飞往桂林游览。"
            ),
          ],
        },
        { type: "ad" },
      ],
    },
    {
      id: "tibet-permit",
      heading: t2("Tibet Travel Permit: mandatory for all foreigners", "西藏入藏函：所有外籍人士强制办理"),
      blocks: [
        {
          type: "callout",
          tone: "danger",
          title: t2("No independent travel to Tibet — even with 30-day visa-free", "严禁外籍人士自行入藏——30 天免签也不行"),
          text: t2(
            "Even if you hold a French, German or Singaporean passport with 30-day visa-free entry, you CANNOT simply buy a plane or train ticket to Lhasa and go on your own. Travelers on 240-hour transit visa-free cannot visit Tibet at all.",
            "哪怕你是拥有 30 天免签资格的法国、德国或新加坡公民，也绝对不能自己买张机票或火车票就去拉萨！持 240 小时过境免签的旅客更完全无法前往西藏。"
          ),
        },
        {
          type: "steps",
          items: [
            t2(
              "Book 15–20 days in advance through a licensed Tibet-based travel agency. Individual travelers cannot apply directly to the Tibet Tourism Bureau.",
              "提前 15–20 天委托有资质的西藏本地旅行社申办《外国人入藏旅游批准函（Tibet Travel Permit）》，外籍个人无法自行向旅游局申请。"
            ),
            t2(
              "Provide your passport scan (and Chinese visa if you are not from a 30-day visa-free country) plus your fixed day-by-day itinerary.",
              "向旅行社提交护照扫描件（非 30 天免签国还需提交中国签证）及确定的逐日行程单。"
            ),
            t2(
              "Receive the original paper Tibet Travel Permit before boarding. Airlines and railway staff strictly check the physical paper permit before letting you board a flight or train into Tibet.",
              "出发前拿到纸质入藏函原件。登机和上火车进藏时，航空公司和铁路工作人员会严格查验该纸质原件。"
            ),
            t2(
              "Travel with an assigned licensed guide along your approved route for the entire stay in Tibet.",
              "在藏期间必须全程由正规导游陪同，并按批准的既定路线游览。"
            ),
          ],
        },
      ],
    },
    {
      id: "xinjiang-rules",
      heading: t2("Xinjiang: open cities vs. border areas", "新疆：开放城市与边境管理区区别"),
      blocks: [
        {
          type: "p",
          text: t2(
            "Unlike Tibet, Xinjiang does NOT require a special region-wide permit for standard tourist cities. However, rules differ depending on your entry type and exact destination:",
            "与西藏不同，前往新疆常规旅游城市并不需要全区统一的入藏类批准函，但具体规定取决于你的入境方式和目的地："
          ),
        },
        {
          type: "list",
          items: [
            t2(
              "Open tourist areas: Urumqi, Kashgar city, and the Ili / Nalati region are open to foreign visitors holding a standard Chinese visa or 30-day visa-free entry.",
              "常规开放区域：乌鲁木齐、喀什市区、伊犁那拉提等主流景区对持常规签证或 30 天免签入境的外国人开放。"
            ),
            t2(
              "Not included in 240-hour transit: Xinjiang is NOT among the 24 provinces covered by the 240-hour visa-free transit policy. US or other transit-only travelers need a regular L tourist visa to visit Xinjiang.",
              "不支持 240 小时过境免签：新疆不在 240 小时过境免签的 24 个省区市名单内。美国等仅走过境免签的游客需提前办理 L 字旅游签证才能前往新疆。"
            ),
            t2(
              "Border management zones: Visiting border areas such as Tashkurgan (on the Pamir Plateau toward Khunjerab Pass) or Baihaba Village requires obtaining a Border Pass in advance and confirming current seasonal foreign-visitor reception policies.",
              "边境管理区限制：前往塔什库尔干（帕米尔高原红其拉甫方向）、白哈巴村等边境管理区，须提前办理边境通行证，并确认当季的外宾接待政策。"
            ),
          ],
        },
        { type: "tool", tool: "visa-checker" },
      ],
    },
  ],
  faq: [
    {
      q: t2("Can I fly from Sanya (Hainan) to Shanghai on the Hainan 30-day visa-free scheme?", "用海南 30 天免签入境后，能从三亚飞上海吗？"),
      a: t2(
        "No. The Hainan 61-country visa-free policy restricts you to Hainan Province only. To visit Shanghai as well, you must enter under the nationwide 30-day visa-free policy (if eligible), a regular Chinese visa, or a qualifying 240-hour transit itinerary.",
        "不能。海南 61 国免签政策仅限在海南省内停留。如果你想顺道去上海，必须符合全国 30 天免签资格、持常规中国签证，或按合规的 240 小时过境免签路线入境。"
      ),
    },
    {
      q: t2("Can I visit Tibet on a 30-day visa-free passport without a tour?", "持 30 天免签护照能自由行去西藏吗？"),
      a: t2(
        "No. Every foreign passport holder — including 30-day visa-free nationals — must book a guided itinerary through a licensed Tibetan travel agency and obtain the paper Tibet Travel Permit 15–20 days before departure.",
        "不可以。所有外籍护照持有人（包括 30 天免签国公民）都必须提前 15–20 天通过有资质的西藏本地旅行社办理纸质入藏函，并在藏期间由导游陪同按既定路线游览。"
      ),
    },
    {
      q: t2("Does the 15-day cruise visa-free scheme allow a day trip to Beijing?", "邮轮 15 天免签可以去北京游览吗？"),
      a: t2(
        "Yes. Foreign tour groups of 2+ organized by a Chinese travel agency entering via the 13 cruise ports (such as Tianjin International Cruise Home Port) can visit coastal provinces and Beijing during their 15-day stay.",
        "可以。由境内旅行社组织接待的 2 人及以上外国邮轮旅游团，经天津国际邮轮母港等 13 个邮轮口岸免签入境后，在 15 天停留期内可游览沿海省市并远至北京市。"
      ),
    },
    {
      q: t2("Do I need a special permit to visit Urumqi or Kashgar in Xinjiang?", "去新疆乌鲁木齐或喀什需要办特殊通行证吗？"),
      a: t2(
        "No special permit is required for Urumqi, Kashgar city, or Ili/Nalati if you hold a regular Chinese visa or 30-day visa-free entry. You only need a border pass if you continue into restricted border zones such as Tashkurgan or Baihaba Village.",
        "如果你持常规中国签证或符合 30 天免签，去乌鲁木齐、喀什市区和伊犁那拉提不需要特殊通行证。只有继续深入塔什库尔干或白哈巴村等边境管理区时，才需办理边境通行证并确认当季接待政策。"
      ),
    },
  ],
  related: ["visa-free-countries", "240-hour-transit", "online-arrival-card", "arrival-immigration"],
};

export default guide;
