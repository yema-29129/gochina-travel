import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "online-arrival-card",
  category: "visa",
  icon: "visa",
  title: t2("China Online Arrival Card: Step-by-Step Guide", "中国外国人入境卡网上填报全攻略"),
  seoTitle: t2(
    "How to Fill Out China Online Arrival Card Before Flight (Step-by-Step 2026)",
    "出发前如何在线填写中国外国人入境卡（2026 逐屏实操指南）"
  ),
  summary: t2(
    "Fill out China's Online Arrival Card 24–72 hours before flying via the NIA website or 12367 mini-program, save the QR code, and see who is exempt.",
    "登机前 24–72 小时通过国家移民管理局官网或 12367 小程序在线填报中国入境卡、保存二维码回执，并查看 7 类免填人群名单。"
  ),
  updated: "2026-11-24",
  readMin: 5,
  keyPoints: [
    t2(
      "Launched November 20, 2025 by China's National Immigration Administration (NIA), online submission lets you skip the paper-card queue at the airport.",
      "中国国家移民管理局于 2025 年 11 月 20 日正式上线外国人入境卡网上填报系统，提前填好可省去落地排队填纸质表的时间。"
    ),
    t2(
      "Submit 24–72 hours before your flight on the NIA web portal (https://s.nia.gov.cn/ArrivalCardFillingPC/) or the “NIA 12367” mini-program in WeChat/Alipay.",
      "登机前 24–72 小时在国家移民管理局网页（https://s.nia.gov.cn/ArrivalCardFillingPC/）或微信/支付宝“移民局 12367”小程序内填报。"
    ),
    t2(
      "Screenshot the generated electronic QR receipt and walk straight to the staffed immigration counter upon landing — saving around 20 minutes.",
      "务必截图保存生成的电子申报回执二维码，落地后直接走边检人工柜台扫护照过关，可省下约 20 分钟排队时间。"
    ),
    t2(
      "Forgot to fill it out online? Airport smart self-service kiosks and traditional blue-and-white paper cards are still available on arrival.",
      "忘了提前网填也没关系：机场现场仍配有智能自助填报机和传统蓝白纸质入境卡兜底。"
    ),
    t2(
      "Seven groups are completely exempt from filling out an Arrival Card, including 24-hour airside transit passengers and Five-Star Card holders.",
      "有 7 类人群免填外国人入境卡，包括 24 小时不出国际中转区直接过境旅客及中国五星卡持有人等。"
    ),
  ],
  sections: [
    {
      id: "what-is-it",
      heading: t2("What changed on November 20, 2025", "2025 年 11 月 20 日起的新变化"),
      blocks: [
        {
          type: "p",
          text: t2(
            "Since November 20, 2025, China's National Immigration Administration (NIA) has rolled out the Online Arrival Card system nationwide. Most first-time visitors still scramble for a pen and queue at the writing desks after landing, unaware they can finish the entire form on their phone before boarding.",
            "自 2025 年 11 月 20 日起，中国国家移民管理局正式上线了外国人入境卡网上提前填报系统。绝大多数外国游客还不知道这个省时大招，落地后仍在填表台前排长队抢圆珠笔填纸质蓝白卡片。"
          ),
        },
        {
          type: "callout",
          tone: "tip",
          title: t2("Official portal URL", "官方填报网址"),
          text: t2(
            "Use the official NIA web portal at https://s.nia.gov.cn/ArrivalCardFillingPC/ or search “移民局 12367” (NIA 12367) inside WeChat or Alipay. The service is 100% free — never pay a third-party website.",
            "请直接使用国家移民管理局政务服务平台官方网页 https://s.nia.gov.cn/ArrivalCardFillingPC/，或在微信/支付宝搜索“移民局 12367”（NIA 12367）小程序。官方填报完全免费，切勿向任何第三方代填网站付费。"
          ),
        },
      ],
    },
    {
      id: "step-by-step",
      heading: t2("How to fill it out 24–72 hours before departure", "登机前 24–72 小时填报步骤"),
      blocks: [
        {
          type: "steps",
          items: [
            t2(
              "Open https://s.nia.gov.cn/ArrivalCardFillingPC/ in your browser, or open the “移民局 12367” (NIA 12367) mini-program inside WeChat or Alipay 24–72 hours before your flight.",
              "在登机前 24–72 小时，打开浏览器访问 https://s.nia.gov.cn/ArrivalCardFillingPC/，或在微信/支付宝中打开“移民局 12367”（NIA 12367）小程序。"
            ),
            t2(
              "Photograph or scan your passport bio-data page so the system automatically reads your name, passport number, date of birth and nationality.",
              "拍摄或扫描护照资料页，系统会自动识别并填入你的姓名、护照号、出生日期与国籍。"
            ),
            t2(
              "Enter your inbound flight number, arrival port, purpose of visit (e.g., tourism), and the full address of your first night's hotel in China.",
              "填入你的入境航班号、入境口岸、来华事由（如旅游观光）以及第一晚入住的中国酒店完整地址。"
            ),
            t2(
              "Submit the form and immediately take a screenshot of the generated electronic submission QR code receipt so you can access it offline after landing.",
              "提交表单后，立刻截图保存生成的电子申报回执二维码，确保飞机落地断网时也能随时调出。"
            ),
            t2(
              "At the Chinese airport, walk straight past the paper-card desks to the staffed immigration counter, hand over your passport and show the QR screenshot if requested — saving roughly 20 minutes.",
              "落地中国机场后，直接跳过纸质填表台，前往边检人工柜台递交护照（如需查验则出示二维码截图）即可过关，省下约 20 分钟排队填表时间。"
            ),
          ],
        },
        { type: "ad" },
      ],
    },
    {
      id: "airport-fallback",
      heading: t2("Didn't submit online? Airport kiosks & paper fallback", "没来得及网填？机场自助机与纸质卡兜底"),
      blocks: [
        {
          type: "p",
          text: t2(
            "Online submission is strongly recommended for speed, not a strict boarding requirement. If you forget or have connectivity issues before flying, two fallbacks are waiting right before the immigration hall:",
            "网上提前填报是为了帮你省时间，并非强制登机前置条件。如果出发前忘记填写或网络不便，在机场边检大厅前仍有两种兜底方式："
          ),
        },
        {
          type: "list",
          items: [
            t2(
              "Smart self-service kiosks: Major international airports provide touch-screen kiosks where you scan your passport and print a slip in 1–2 minutes.",
              "智能自助填报机：主要国际机场现场均配有触屏自助填报机，扫描护照 1–2 分钟即可打印回执。"
            ),
            t2(
              "Traditional paper Arrival Card: Blue-and-white paper cards and pens remain available at the writing desks (or are handed out on the plane). Keep your hotel address saved offline so you can copy it quickly.",
              "传统纸质入境卡：填表台（或机舱内）仍提供传统的蓝白纸质卡片。请提前离线保存第一晚酒店地址，方便现场快速抄写。"
            ),
          ],
        },
      ],
    },
    {
      id: "seven-exempt-groups",
      heading: t2("The 7 groups exempt from filling out an Arrival Card", "免填外国人入境卡的 7 类人群"),
      blocks: [
        {
          type: "p",
          text: t2(
            "You do NOT need to submit an Online Arrival Card or fill out a paper card if you belong to any of these seven categories:",
            "如果你属于以下 7 类人群中的任意一类，则完全无需在网上或现场填写外国人入境卡："
          ),
        },
        {
          type: "table",
          head: [t2("#", "序号"), t2("Exempt category", "免填人群类别"), t2("Notes", "说明")],
          rows: [
            [
              "1",
              t2("China Foreign Permanent Resident ID Card holders", "持中国“五星卡”（外国人永久居留身份证）者"),
              t2("Permanent residents of China", "中国永久居留人员"),
            ],
            [
              "2",
              t2("Non-Chinese holders of Mainland Travel Permit for HK/Macau Residents", "非中国籍港澳居民来往内地通行证持有者"),
              t2("Permanent residents of Hong Kong or Macau holding the card", "持该通行证的港澳永久性居民"),
            ],
            [
              "3",
              t2("24-hour direct airside transit passengers", "24 小时直接过境不离开机场国际中转区者"),
              t2("Must remain inside the international transit area", "须全程留在国际中转区内不入境"),
            ],
            [
              "4",
              t2("Same-ship international cruise passengers", "原船进出的国际邮轮旅客"),
              t2("Arriving and departing on the same cruise vessel", "乘同一艘国际邮轮入出境"),
            ],
            [
              "5",
              t2("Registered E-channel users", "已备案走边检快捷通道（E-channel）人员"),
              t2("Pre-registered for automated border gates", "已完成生物信息备案使用自助通道"),
            ],
            [
              "6",
              t2("Group visa holders", "团体签证成员"),
              t2("Traveling on an official Chinese group visa sheet", "持统一团体签证入境"),
            ],
            [
              "7",
              t2("International flight crew members", "国际航班机组人员"),
              t2("Operating crew on international flights", "执飞国际航班的机组成员"),
            ],
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: t2("Do 240-hour visa-free transit passengers still need to fill out the Online Arrival Card?", "走 240 小时过境免签的旅客需要填网上入境卡吗？"),
      a: t2(
        "Yes, if you are leaving the airport to enter China. Only 24-hour direct transit passengers who stay inside the international transit zone without passing immigration are exempt. At the airport, 240-hour transit travelers also go to the dedicated Temporary Entry Permit counter.",
        "需要，只要你离开机场进入中国境内就需要填报。只有 24 小时直接过境且不离开国际中转区的旅客才免填。落地后，240 小时过境免签旅客仍需前往专设的临时入境许可柜台办理手续。"
      ),
    },
    {
      q: t2("How early can I submit the China Online Arrival Card?", "最早可以提前多久提交中国网上入境卡？"),
      a: t2(
        "Submit it 24 to 72 hours before your flight departure so your flight number and first-night hotel details are confirmed and fresh in the system.",
        "建议在航班起飞前 24 至 72 小时提交，确保航班号和第一晚酒店信息已确定且在系统有效期内。"
      ),
    },
    {
      q: t2("What if I don't have internet at the Chinese airport to show the QR code?", "落地中国机场时手机没网怎么出示二维码？"),
      a: t2(
        "Take a screenshot of the QR code receipt right after submitting before you board your flight. Your submission is also linked to your passport number in the immigration system.",
        "提交成功后请在登机前立刻截图保存二维码回执。同时，你的申报信息在边检系统里也已与护照号绑定。"
      ),
    },
    {
      q: t2("Do I need a WeChat or Alipay account to fill out the Online Arrival Card?", "填写网上入境卡必须有微信或支付宝吗？"),
      a: t2(
        "No. You can fill it out directly in any mobile or desktop browser at https://s.nia.gov.cn/ArrivalCardFillingPC/ without needing WeChat or Alipay.",
        "不需要。你可以直接用任何手机或电脑浏览器打开 https://s.nia.gov.cn/ArrivalCardFillingPC/ 完成填报，无需微信或支付宝。"
      ),
    },
  ],
  related: ["arrival-immigration", "visa-free-countries", "240-hour-transit", "special-visa-free"],
};

export default guide;
