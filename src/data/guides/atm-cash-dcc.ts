import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "atm-cash-dcc",
  category: "money",
  icon: "pay",
  title: t2("ATMs, Cash & the DCC Trap in China", "中国 ATM 取现、现金与 DCC 汇率陷阱"),
  seoTitle: t2(
    "Best ATMs in China for Foreign Debit Cards (and Avoiding the DCC Conversion Scam)",
    "中国哪些 ATM 能用外国借记卡取现（以及如何避开 DCC 动态货币转换陷阱）"
  ),
  summary: t2(
    "Which Chinese bank ATMs accept foreign cards, what to do with a 4-digit PIN, why you must always choose CNY to avoid a 5–8% DCC loss, and how much cash to carry.",
    "哪些中国银行 ATM 接受外国卡、4 位 PIN 码怎么输、为什么必须始终选人民币结算以避免 5–8% 的 DCC 损失，以及该带多少现金。"
  ),
  updated: "2026-11-24",
  readMin: 6,
  keyPoints: [
    t2(
      "Use ATMs of Bank of China, ICBC, CCB, ABC or China Merchants Bank. Look for Visa/PLUS, Mastercard/Cirrus or UnionPay logos.",
      "使用中国银行、工商银行、建设银行、农业银行或招商银行的 ATM。认准 Visa/PLUS、Mastercard/Cirrus 或 UnionPay 标志。"
    ),
    t2(
      "Your PIN has 4 digits but Chinese PINs have 6? Don't add zeros — just enter your 4 digits and press Enter.",
      "你的 PIN 码是 4 位而中国密码是 6 位？不要补零——直接输入 4 位然后按确认键。"
    ),
    t2(
      "Always choose to be charged in CNY / local currency. Choosing your home currency (DCC) costs you 5–8%.",
      "永远选择以人民币/当地货币结算。选择本国货币（DCC）会让你损失 5–8%。"
    ),
    t2(
      "Carry ¥300–500 in cash as a backup for personal QR codes, small stalls and taxis.",
      "随身带 ¥300–500 现金备用，应对个人收款码、小摊和出租车。"
    ),
    t2("Taxis must accept cash by law, so cash always works for a cab.", "出租车依法必须收现金，所以打车时现金总能用。"),
  ],
  sections: [
    {
      id: "which-atms",
      heading: t2("Which ATMs accept foreign cards", "哪些 ATM 接受外国卡"),
      blocks: [
        {
          type: "p",
          text: t2(
            "Not every small bank's ATM accepts foreign cards. Search the map for these big banks:",
            "并不是每家小银行的 ATM 都认外国卡。在地图上直接搜索以下这些大银行："
          ),
        },
        {
          type: "table",
          head: [t2("Bank", "银行"), t2("Chinese name", "中文名"), t2("Note", "说明")],
          rows: [
            [t2("Bank of China", "中国银行"), "中国银行", t2("Best foreign-card compatibility in China", "外币兼容性全中国第一")],
            [t2("ICBC", "工商银行"), "工商银行", t2("State-owned, widely available", "国有银行，网点众多")],
            [t2("CCB", "建设银行"), "建设银行", t2("State-owned, widely available", "国有银行，网点众多")],
            [t2("ABC", "农业银行"), "农业银行", t2("State-owned, widely available", "国有银行，网点众多")],
            [t2("China Merchants Bank", "招商银行"), "招商银行", t2("Good foreign-card support", "外卡支持良好")],
          ],
        },
        {
          type: "list",
          items: [
            t2(
              "Check the machine for Visa / PLUS, Mastercard / Cirrus or UnionPay logos — if you see your card's logo, you can insert it.",
              "查看机器外壳上的 Visa / PLUS、Mastercard / Cirrus 或 UnionPay 标志——看到你卡上的标志就可以插卡。"
            ),
            t2(
              "All these machines have an English button for the screen and voice.",
              "这些机器全部配有屏幕和语音的 English 切换按钮。"
            ),
          ],
        },
        {
          type: "show",
          zh: "请问附近哪里有中国银行或者工商银行的ATM取款机？",
          pinyin: "Qǐngwèn fùjìn nǎlǐ yǒu Zhōngguó Yínháng huòzhě Gōngshāng Yínháng de ATM qǔkuǎnjī?",
          meaning: t2(
            "Excuse me, where is the nearest Bank of China or ICBC ATM?",
            "请问附近哪里有中国银行或者工商银行的 ATM 取款机？"
          ),
        },
      ],
    },
    {
      id: "pin",
      heading: t2("4-digit PIN? Just press Enter", "4 位 PIN 码？直接按确认"),
      blocks: [
        {
          type: "p",
          text: t2(
            "Many Western bank cards have a 4-digit PIN, while Chinese bank cards use 6 digits. At a Chinese bank ATM, type your 4-digit PIN and do NOT add two zeros. Just press the green Enter / 确认 key and it will go through.",
            "欧美很多银行卡的 PIN 码只有 4 位数字，而中国本地银行卡密码是 6 位。在中国银行 ATM 输完你的 4 位 PIN 码后，不要补按两个零。直接按键盘上的绿色 Enter / 确认 键即可通过。"
          ),
        },
      ],
    },
    {
      id: "dcc",
      heading: t2("The DCC trap: always charge in CNY", "DCC 陷阱：永远选人民币结算"),
      blocks: [
        {
          type: "p",
          text: t2(
            "At some ATMs and at card terminals (POS) in tourist-facing malls, the screen may suddenly ask: “Would you like to be charged in your home currency (USD/EUR/GBP) with a guaranteed exchange rate, OR be charged in local currency (CNY/RMB)?” This is Dynamic Currency Conversion (DCC).",
            "在部分 ATM 或涉外商场的刷卡机（POS）上，屏幕可能会突然问：“您希望以本国货币（USD/EUR/GBP）按保证汇率结算，还是以当地货币（CNY/RMB）结算？”这就是动态货币转换（DCC）。"
          ),
        },
        {
          type: "callout",
          tone: "danger",
          title: t2("Always choose CNY", "永远选人民币"),
          text: t2(
            "Always tap “Continue WITHOUT Conversion” or “Charge in Local Currency (CNY / RMB)”. If you choose USD or EUR, the operator uses its own bad exchange rate and you lose a hidden 5–8%. Choosing CNY gives you the official Visa/Mastercard rate, close to the central bank rate.",
            "永远点击“Continue WITHOUT Conversion（不转换继续）”或“Charge in Local Currency (CNY / RMB)（以人民币结算）”。如果选了美元或欧元，收单机构会用它自己的差劲汇率，让你隐形损失 5–8%。选人民币结算才能拿到 Visa/Mastercard 接近央行中间价的官方汇率。"
          ),
        },
        {
          type: "p",
          text: t2(
            "Example: one tourist withdrew cash, tapped “Yes” to being charged in US dollars, and lost 7% to the DCC exchange rate for nothing.",
            "例子：一位游客在 ATM 取现时，顺手点了“Yes”按美元结算，结果白白被 DCC 汇率吃掉了 7%。"
          ),
        },
        { type: "tool", tool: "payment-fee-calculator" },
      ],
    },
    {
      id: "cash-backup",
      heading: t2("How much cash to carry", "该带多少现金"),
      blocks: [
        {
          type: "list",
          items: [
            t2(
              "Keep ¥300–500 in small notes in an envelope as a backup.",
              "在信封里放 ¥300–500 零钱作为备用。"
            ),
            t2(
              "Cash saves you when a seller only has a personal QR code (foreign cards can't pay those), at small stalls, bamboo rafts and markets.",
              "当卖家只有个人收款码（外卡无法支付）时，或者在小摊、竹筏、市场，现金都能救场。"
            ),
            t2(
              "Taxis must accept cash, so you can always pay a cab with cash.",
              "出租车必须收现金，所以你总能用现金付车费。"
            ),
            t2(
              "Tip: give cash to your hotel front desk and ask them to transfer it to your Alipay/WeChat balance — then you can pay personal QR codes too.",
              "小技巧：把现金交给酒店前台，请他们转到你的支付宝/微信余额——这样你也能付个人收款码了。"
            ),
          ],
        },
        { type: "affiliate", id: "wise" },
      ],
    },
  ],
  faq: [
    {
      q: t2("Which ATM in China is best for foreign cards?", "中国哪家 ATM 最适合外国卡？"),
      a: t2(
        "Bank of China has the best foreign-card compatibility. ICBC, CCB, ABC and China Merchants Bank also work if the machine shows Visa/PLUS, Mastercard/Cirrus or UnionPay.",
        "中国银行的外卡兼容性最好。只要机器上有 Visa/PLUS、Mastercard/Cirrus 或 UnionPay 标志，工商银行、建设银行、农业银行和招商银行也能用。"
      ),
    },
    {
      q: t2("My PIN has 4 digits. Will it work in China?", "我的 PIN 码是 4 位，在中国能用吗？"),
      a: t2(
        "Yes. Enter your 4 digits and press Enter / 确认. Don't add zeros.",
        "能。输入 4 位数字后按 Enter / 确认 即可。不要补零。"
      ),
    },
    {
      q: t2("Should I be charged in my home currency or CNY?", "应该以本国货币还是人民币结算？"),
      a: t2(
        "Always CNY. Home-currency conversion (DCC) adds a hidden 5–8% markup.",
        "永远选人民币。本国货币转换（DCC）会加收隐形的 5–8% 差价。"
      ),
    },
    {
      q: t2("Do I still need cash in China?", "在中国还需要现金吗？"),
      a: t2(
        "Yes, a little: ¥300–500 for personal QR codes, small stalls and taxis, which must accept cash.",
        "需要一点：¥300–500，用于个人收款码、小摊和出租车（出租车必须收现金）。"
      ),
    },
  ],
  related: ["alipay-wechat-pay", "shopping-tax-refund", "essential-apps", "safety-health"],
};

export default guide;
