import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "visa-free-countries",
  category: "visa",
  icon: "visa",
  title: t2("China Visa-Free Countries: The Complete 2026 List", "中国免签国家：2026 年完整名单"),
  seoTitle: t2(
    "China Visa-Free Countries List 2026: 30-Day, Mutual & 240-Hour Transit",
    "2026 中国免签国家名单：30 天免签、互免签证与 240 小时过境免签"
  ),
  summary: t2(
    "Every country that can enter China without a visa in 2026: 50 with 30-day visa-free entry, 29 with mutual exemption, 57 with 240-hour transit, plus the rules.",
    "2026 年所有可免签入境中国的国家：50 国 30 天免签、29 国互免签证、57 国 240 小时过境免签，以及相关规则。"
  ),
  updated: "2026-11-24",
  readMin: 9,
  keyPoints: [
    t2(
      "50 countries get 30-day unilateral visa-free entry, including the UK and Canada since 17 February 2026.",
      "50 国享受 30 天单方面免签，其中英国和加拿大自 2026 年 2 月 17 日起纳入。"
    ),
    t2(
      "29 countries have mutual visa exemption — but many cap you at 90 days in any 180 days.",
      "29 国与中国互免签证——但很多国家规定每 180 天内累计停留不得超过 90 天。"
    ),
    t2(
      "57 countries can use 240-hour (10-day) visa-free transit; for 8 of them (incl. the USA and Mexico) it is the main visa-free option.",
      "57 国可使用 240 小时（10 天）过境免签；其中 8 国（含美国、墨西哥）主要依靠这一政策免签入境。"
    ),
    t2(
      "Your stay is counted from 00:00 on the day after you arrive, not from the moment you land.",
      "停留时间从入境次日 00:00 起算，而不是从飞机落地那一刻起算。"
    ),
    t2(
      "Visa-free entry never covers work, study or journalism — and never Tibet without a special permit.",
      "免签入境绝不包括工作、留学或常驻采访——没有特别许可也绝不能去西藏。"
    ),
  ],
  sections: [
    {
      id: "check-your-passport",
      heading: t2("Check your passport in 10 seconds", "10 秒查询你的护照"),
      blocks: [
        {
          type: "p",
          text: t2(
            "Before you plan anything, find the tier your passport belongs to. There are four options: 30-day unilateral visa-free entry, mutual visa exemption, 240-hour visa-free transit, or a standard tourist (L) visa.",
            "在做任何计划之前，先找到你的护照属于哪一档。共有四种情况：30 天单方面免签、双边互免签证、240 小时过境免签，或者普通旅游（L 字）签证。"
          ),
        },
        { type: "tool", tool: "visa-checker" },
      ],
    },
    {
      id: "30-day-visa-free",
      heading: t2("Tier 1: 30-day unilateral visa-free entry (50 countries)", "第一档：30 天单方面免签（50 国）"),
      blocks: [
        {
          type: "p",
          text: t2(
            "If your passport is on this list, you can simply buy a return ticket and go. Here is the complete list, by continent:",
            "如果你的护照在这个名单上，直接买往返机票就能出发。以下是按大洲排列的完整名单："
          ),
        },
        {
          type: "table",
          head: [t2("Region", "地区"), t2("Countries", "国家")],
          rows: [
            [
              t2("Europe (35)", "欧洲（35 国）"),
              t2(
                "France, Germany, Italy, Netherlands, Spain, Switzerland, Ireland, Hungary, Austria, Belgium, Luxembourg, Poland, Slovenia, Portugal, Greece, Cyprus, Slovakia, Norway, Finland, Denmark, Iceland, Andorra, Monaco, Liechtenstein, Bulgaria, Romania, Croatia, Montenegro, North Macedonia, Malta, Estonia, Latvia, Russia, Sweden, United Kingdom (from 17 February 2026)",
                "法国、德国、意大利、荷兰、西班牙、瑞士、爱尔兰、匈牙利、奥地利、比利时、卢森堡、波兰、斯洛文尼亚、葡萄牙、希腊、塞浦路斯、斯洛伐克、挪威、芬兰、丹麦、冰岛、安道尔、摩纳哥、列支敦士登、保加利亚、罗马尼亚、克罗地亚、黑山、北马其顿、马耳他、爱沙尼亚、拉脱维亚、俄罗斯、瑞典、英国（自 2026 年 2 月 17 日起）"
              ),
            ],
            [
              t2("Asia (7)", "亚洲（7 国）"),
              t2(
                "Japan, South Korea, Brunei, Saudi Arabia, Oman, Kuwait, Bahrain",
                "日本、韩国、文莱、沙特阿拉伯、阿曼、科威特、巴林"
              ),
            ],
            [
              t2("Americas (6)", "美洲（6 国）"),
              t2(
                "Canada (from 17 February 2026), Brazil, Argentina, Chile, Peru, Uruguay",
                "加拿大（自 2026 年 2 月 17 日起）、巴西、阿根廷、智利、秘鲁、乌拉圭"
              ),
            ],
            [t2("Oceania (2)", "大洋洲（2 国）"), t2("Australia, New Zealand", "澳大利亚、新西兰")],
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: t2("Not on the list?", "不在名单上？"),
          text: t2(
            "The USA is NOT on the 30-day list. US citizens enter visa-free only with 240-hour transit (see Tier 3) or need an L visa.",
            "美国不在 30 天免签名单上。美国公民只能通过 240 小时过境免签（见第三档）免签入境，否则需要办理 L 签证。"
          ),
        },
      ],
    },
    {
      id: "30-day-rules",
      heading: t2("The practical rules for 30-day visa-free entry", "30 天免签的实操规则"),
      blocks: [
        {
          type: "steps",
          items: [
            t2(
              "Passport: you must hold an ordinary passport, valid beyond your planned exit date. We strongly recommend at least 6 months of validity and at least 2 blank visa pages. Special travel documents such as the UK emergency travel document do not qualify.",
              "证件：必须持普通护照，有效期须超过计划离境日期。强烈建议留足 6 个月以上有效期及至少 2 页空白签证页。英国紧急临时旅行证件等特殊证件不适用。"
            ),
            t2(
              "Permitted purposes: tourism, business, visiting family and friends, exchange visits and transit. Working, studying or resident journalism are strictly NOT allowed on visa-free entry.",
              "准许事由：旅游观光、经商、探亲访友、交流访问、过境。严禁免签入境来华工作、留学或常驻采访。"
            ),
            t2(
              "Ports and travel area: you can enter through any port (air, land or sea) open to foreigners and travel freely between provinces in all open areas of China, except places like Tibet that need a special permit. Direct flights and connections are both fine — even a simple London → Shanghai → London return ticket is fully compliant.",
              "口岸与活动范围：可从任何一个对外国人开放的海陆空口岸入境，在中国全境开放区域自由跨省旅行（西藏等需特殊通行证的地区除外）。直飞或转机均可——哪怕是“伦敦 → 上海 → 伦敦”的简单往返票也完全合规。"
            ),
            t2(
              "How the 30 days are counted: from 00:00 on the day after you enter, you can stay up to 30 full calendar days. Example: you land at 08:00 on 1 May → day 1 starts at 00:00 on 2 May → you must leave by 24:00 on 31 May.",
              "停留时长算法：自入境次日 00:00 起算，最长可停留满 30 个自然日。例如：5 月 1 日 08:00 落地 → 5 月 2 日 00:00 开始算第 1 天 → 最晚须在 5 月 31 日 24:00 前出境。"
            ),
          ],
        },
        {
          type: "callout",
          tone: "tip",
          text: t2(
            "The visa-free period for many countries is a trial policy that China's Ministry of Foreign Affairs usually extends at the end of each year. Check for the latest extension notice before you book.",
            "很多国家的免签政策属于试行政策，中国外交部通常会在每年年底发布顺延公告。订票前请关注最新的顺延公告。"
          ),
        },
      ],
    },
    {
      id: "mutual-visa-exemption",
      heading: t2("Tier 2: mutual visa exemption (29 countries)", "第二档：双边互免签证（29 国）"),
      blocks: [
        {
          type: "p",
          text: t2(
            "These countries have a long-term agreement with China for ordinary passports. The full list:",
            "这些国家与中国签有普通护照长期互免签证协定。完整名单："
          ),
        },
        {
          type: "table",
          head: [t2("Region", "地区"), t2("Countries", "国家")],
          rows: [
            [
              t2("Asia (11)", "亚洲（11 国）"),
              t2(
                "Singapore, Malaysia, Thailand, Kazakhstan, UAE, Qatar, Maldives, Armenia, Georgia, Azerbaijan, Uzbekistan",
                "新加坡、马来西亚、泰国、哈萨克斯坦、阿联酋、卡塔尔、马尔代夫、亚美尼亚、格鲁吉亚、阿塞拜疆、乌兹别克斯坦"
              ),
            ],
            [
              t2("Europe (5)", "欧洲（5 国）"),
              t2("Serbia, Belarus, Bosnia and Herzegovina, Albania, San Marino", "塞尔维亚、白俄罗斯、波黑、阿尔巴尼亚、圣马力诺"),
            ],
            [
              t2("Americas (7)", "美洲（7 国）"),
              t2(
                "Bahamas, Barbados, Grenada, Dominica, Antigua and Barbuda, Suriname, Ecuador",
                "巴哈马、巴巴多斯、格林纳达、多米尼克、安提瓜和巴布达、苏里南、厄瓜多尔"
              ),
            ],
            [
              t2("Oceania & Africa (6)", "大洋洲与非洲（6 国）"),
              t2("Fiji, Tonga, Samoa, Solomon Islands, Mauritius, Seychelles", "斐济、汤加、萨摩亚、所罗门群岛、毛里求斯、塞舌尔"),
            ],
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: t2("The 180-day / 90-day rule", "“180 天累计 90 天”规则"),
          text: t2(
            "Agreements with Singapore, Malaysia, Thailand, Kazakhstan, Georgia, Azerbaijan, Uzbekistan and others say: each visit can be up to 30 days, but your total stay must not exceed 90 days in any 180 days. Frequent business travellers and people visiting family in China often overstay without noticing.",
            "新加坡、马来西亚、泰国、哈萨克斯坦、格鲁吉亚、阿塞拜疆、乌兹别克斯坦等国的协定规定：单次入境可停留不超过 30 日，但每 180 日内累计停留不得超过 90 日。经常往返中国的商务旅客和探亲人员很容易不知不觉超期。"
          ),
        },
      ],
    },
    { id: "ad-break", heading: t2("Advertisement", "广告"), blocks: [{ type: "ad" }] },
    {
      id: "240-hour-transit",
      heading: t2("Tier 3: 240-hour (10-day) visa-free transit (57 countries)", "第三档：240 小时（10 天）过境免签（57 国）"),
      blocks: [
        {
          type: "p",
          text: t2(
            "Citizens of these 57 countries can stay up to 240 hours in specific areas if they arrive from one country and leave to a different third country or region. The full list:",
            "这 57 国公民如果从一个国家飞来、再前往另一个第三国或地区，可在指定区域停留最长 240 小时。完整名单："
          ),
        },
        {
          type: "table",
          head: [t2("Region", "地区"), t2("Countries", "国家")],
          rows: [
            [
              t2("Americas (6)", "美洲（6 国）"),
              t2("USA, Canada, Brazil, Mexico, Argentina, Chile", "美国、加拿大、巴西、墨西哥、阿根廷、智利"),
            ],
            [
              t2("Europe (40)", "欧洲（40 国）"),
              t2(
                "Austria, Belgium, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden, Switzerland, Monaco, Russia, United Kingdom, Ireland, Cyprus, Bulgaria, Romania, Ukraine, Serbia, Croatia, Bosnia and Herzegovina, Montenegro, North Macedonia, Albania, Belarus, Norway",
                "奥地利、比利时、捷克、丹麦、爱沙尼亚、芬兰、法国、德国、希腊、匈牙利、冰岛、意大利、拉脱维亚、立陶宛、卢森堡、马耳他、荷兰、波兰、葡萄牙、斯洛伐克、斯洛文尼亚、西班牙、瑞典、瑞士、摩纳哥、俄罗斯、英国、爱尔兰、塞浦路斯、保加利亚、罗马尼亚、乌克兰、塞尔维亚、克罗地亚、波黑、黑山、北马其顿、阿尔巴尼亚、白俄罗斯、挪威"
              ),
            ],
            [
              t2("Asia (9)", "亚洲（9 国）"),
              t2(
                "South Korea, Japan, Singapore, Brunei, UAE, Qatar, Indonesia, Vietnam (added August 2026), Kyrgyzstan (added August 2026)",
                "韩国、日本、新加坡、文莱、阿联酋、卡塔尔、印度尼西亚、越南（2026 年 8 月新增）、吉尔吉斯斯坦（2026 年 8 月新增）"
              ),
            ],
            [t2("Oceania (2)", "大洋洲（2 国）"), t2("Australia, New Zealand", "澳大利亚、新西兰")],
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: t2("Who really depends on 240-hour transit?", "谁真正依赖 240 小时过境免签？"),
          text: t2(
            "Countries on this list that are also in Tier 1 or Tier 2 (such as the UK, France, Australia and Canada) can simply use the easier 30-day visa-free entry. The travellers who really depend on the 240-hour policy are citizens of these 8 countries: USA, Mexico, Czech Republic, Lithuania, Ukraine, Indonesia, Vietnam and Kyrgyzstan.",
            "名单中与前两档重合的国家（如英国、法国、澳大利亚、加拿大）直接使用更宽松的 30 天免签即可。真正必须依赖 240 小时政策的是这 8 国公民：美国、墨西哥、捷克、立陶宛、乌克兰、印度尼西亚、越南和吉尔吉斯斯坦。"
          ),
        },
        {
          type: "callout",
          tone: "danger",
          title: t2("The A → Mainland China → C rule", "“A → 中国内地 → C”铁律"),
          text: t2(
            "Only the flight immediately before and immediately after Mainland China counts, and A must not equal C. Hong Kong, Macau and Taiwan count as separate regions. You also need a passport valid for at least 3 months and a confirmed onward ticket (date and seat) within 240 hours. Read our full 240-hour transit guide before booking.",
            "只看紧邻中国内地的前一站和后一站，且 A 不能等于 C。中国香港、中国澳门、中国台湾均算作独立地区。此外护照有效期须不少于 3 个月，并持有 240 小时内已确定日期和座位的联程客票。订票前请阅读我们完整的 240 小时过境免签攻略。"
          ),
        },
      ],
    },
    {
      id: "l-visa",
      heading: t2("Tier 4: the standard tourist (L) visa", "第四档：普通旅游（L 字）签证"),
      blocks: [
        {
          type: "p",
          text: t2(
            "If your passport is on none of the lists above, or you want to stay longer than the visa-free limit allows, you must apply in advance for an L (tourist) visa at a Chinese Visa Application Service Center (CVASC).",
            "如果你的护照不在以上任何名单中，或者你的停留时间超过免签上限，就必须提前到中国签证申请服务中心（CVASC）申请 L 字旅游签证。"
          ),
        },
        {
          type: "list",
          items: [
            t2(
              "Any passport with less than 3 months of validity will be refused entry under every visa-free policy — renew it first.",
              "无论何种免签政策，护照有效期不足 3 个月都会被拒绝入境——请先换发新护照。"
            ),
            t2(
              "Tibet always needs a Tibet Travel Permit arranged by a Tibetan travel agency, even with visa-free entry or a visa.",
              "进入西藏始终需要由西藏旅行社代办《外国人入藏旅游批准函》，无论是免签还是持签证。"
            ),
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: t2("Do US citizens need a visa for China in 2026?", "2026 年美国公民去中国需要签证吗？"),
      a: t2(
        "The USA is not on the 30-day visa-free list. US citizens can visit visa-free for up to 240 hours if they fly in from one country and out to a different third country or region (A ≠ C). Otherwise they need an L visa.",
        "美国不在 30 天免签名单上。美国公民如果从一个国家飞入、再飞往另一个不同的第三国或地区（A ≠ C），可免签停留最长 240 小时，否则需要办理 L 签证。"
      ),
    },
    {
      q: t2("Can UK and Canadian citizens visit China visa-free?", "英国和加拿大公民可以免签去中国吗？"),
      a: t2(
        "Yes. Both countries were added to the 30-day unilateral visa-free list from 17 February 2026. A return ticket to the same country is fine.",
        "可以。两国均自 2026 年 2 月 17 日起纳入 30 天单方面免签名单，买同一国家的往返票也没问题。"
      ),
    },
    {
      q: t2("How are the 30 visa-free days counted?", "30 天免签是怎么计算的？"),
      a: t2(
        "From 00:00 on the day after you enter. If you land at 08:00 on 1 May, day 1 is 2 May and you must leave by 24:00 on 31 May.",
        "从入境次日 00:00 起算。如果你 5 月 1 日 08:00 落地，第 1 天是 5 月 2 日，最晚须在 5 月 31 日 24:00 前出境。"
      ),
    },
    {
      q: t2("Can I work or study in China on visa-free entry?", "免签入境可以在中国工作或留学吗？"),
      a: t2(
        "No. Visa-free entry only covers tourism, business, visiting family and friends, exchange visits and transit. Work, study and resident journalism need the proper visa.",
        "不可以。免签入境仅限旅游观光、经商、探亲访友、交流访问和过境。工作、留学和常驻采访必须办理相应签证。"
      ),
    },
    {
      q: t2("I'm from Singapore or Thailand — is there a limit on repeat visits?", "我来自新加坡或泰国——多次往返有限制吗？"),
      a: t2(
        "Yes. Each visit can be up to 30 days, but your total stay must not exceed 90 days in any 180-day period.",
        "有。单次可停留不超过 30 天，但每 180 天内累计停留不得超过 90 天。"
      ),
    },
  ],
  related: ["240-hour-transit", "special-visa-free", "online-arrival-card", "arrival-immigration"],
};

export default guide;
