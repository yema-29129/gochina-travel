import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "alipay-wechat-pay",
  category: "money",
  icon: "pay",
  title: t2(
    "Alipay & WeChat Pay for Foreigners: Setup, Fees & Fixes",
    "外国人使用支付宝和微信支付：绑卡设置、手续费与报错解决"
  ),
  seoTitle: t2(
    "How to Set Up Alipay and WeChat Pay with a Foreign Credit Card (2026) – 200 RMB 3% Fee Explained",
    "如何用外国信用卡开通支付宝和微信支付（2026）——200 元 3% 手续费详解"
  ),
  summary: t2(
    "Set up Alipay and WeChat Pay with a foreign card, understand the ¥200 / 3% fee rule, avoid card blocks and fix the 6 most common payment errors in China.",
    "用外国银行卡开通支付宝和微信支付，看懂 ¥200 / 3% 手续费规则，避免锁卡，并解决在中国最常见的 6 个支付报错。"
  ),
  updated: "2026-11-24",
  readMin: 12,
  keyPoints: [
    t2(
      "China runs on QR-code payments. Set up Alipay and WeChat Pay at home, link a Visa/Mastercard and verify your passport before you fly.",
      "中国靠扫码支付运转。请在出发前在家开通支付宝和微信支付，绑定 Visa/Mastercard 并完成护照实名认证。"
    ),
    t2(
      "Payments of ¥200 or less have no platform fee. Above ¥200, a 3% fee applies to the WHOLE amount, not just the part over ¥200.",
      "单笔 ¥200 及以下免平台手续费。超过 ¥200 时，按整笔金额收取 3%，而不是只对超出部分收费。"
    ),
    t2(
      "Your own bank may add a ~3% foreign transaction fee on top. A zero-FX card (Wise, Revolut) removes that second fee.",
      "你自己的银行可能还会再收约 3% 的货币转换费。免货转费的卡（Wise、Revolut）可以去掉这第二笔费用。"
    ),
    t2(
      "Foreign-card accounts can only pay registered merchant codes — not personal QR codes, transfers or red packets. Carry ¥300–500 in cash.",
      "绑外卡的账户只能向注册商户收款码付款——不能扫个人收款码、转账或发红包。请随身带 ¥300–500 现金。"
    ),
    t2(
      "Never split a big bill into 4 or more back-to-back payments: it can trigger fraud locks. Pay big amounts on Trip.com or by card at the POS in CNY.",
      "千万不要把大额账单连续拆成 4 笔或更多扫码：可能触发风控锁卡。大额请在 Trip.com 线上付，或在 POS 机刷卡并选人民币结算。"
    ),
  ],
  sections: [
    {
      id: "setup",
      heading: t2("How to set up Alipay and WeChat Pay with a foreign card", "如何用外国银行卡开通支付宝和微信支付"),
      blocks: [
        t2p(
          "Almost every shop, taxi, metro gate, street stall and restaurant in China accepts Alipay and WeChat Pay. Both apps let foreigners link a Visa, Mastercard, JCB, Diners Club or Discover card. Do the setup at home with good internet, because you may need to receive SMS codes from your bank.",
          "在中国，几乎所有商店、出租车、地铁闸机、街边摊和餐厅都接受支付宝和微信支付。两个 App 都允许外国人绑定 Visa、Mastercard、JCB、Diners Club 或 Discover 卡。请在家里网络良好时完成设置，因为你可能需要接收银行发来的短信验证码。"
        ),
        {
          type: "steps",
          items: [
            t2(
              "Download Alipay (international version) and WeChat from the App Store or Google Play before you leave home.",
              "出发前从 App Store 或 Google Play 下载支付宝（国际版）和微信。"
            ),
            t2(
              "Register with your own phone number (your home number works — no +86 number needed).",
              "用你自己的手机号注册（本国号码即可——不需要 +86 号码）。"
            ),
            t2(
              "Alipay: tap “Add a bank card” on the home screen. WeChat: go to Me → Pay and Services → Wallet → Cards → Add a card.",
              "支付宝：在首页点击“添加银行卡”。微信：进入 我 → 服务 → 钱包 → 银行卡 → 添加银行卡。"
            ),
            t2(
              "Enter your card number, expiry date, CVV and billing details. Complete the 3D Secure code sent by your bank.",
              "输入卡号、有效期、CVV 和账单信息。完成银行发送的 3D Secure 验证码校验。"
            ),
            t2(
              "Complete identity verification: upload a photo of your passport information page and enter your name exactly as on the passport.",
              "完成身份认证：上传护照信息页照片，并按护照上的拼写填写姓名。"
            ),
            t2(
              "Wait for approval (usually minutes, sometimes up to a day). Once verified, you can also receive balance transfers from friends.",
              "等待审核（通常几分钟，有时最长一天）。认证通过后，你还可以接收朋友转入的余额。"
            ),
            t2(
              "Tell your bank you are travelling to China and make sure your bank's phone number can receive international SMS.",
              "告诉你的银行你要去中国旅行，并确保银行预留手机号可以接收国际短信。"
            ),
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: t2("Set up both apps", "两个 App 都要开通"),
          text: t2(
            "Some small merchants only show one of the two QR codes. Having both Alipay and WeChat Pay ready means you are never stuck.",
            "有些小商户只提供其中一种收款码。支付宝和微信支付都准备好，你就不会被卡住。"
          ),
        },
      ],
    },
    {
      id: "fees-limits",
      heading: t2("Fees and limits: the ¥200 / 3% rule", "手续费与限额：¥200 / 3% 规则"),
      blocks: [
        {
          type: "table",
          head: [t2("Item", "项目"), t2("Rule", "规则")],
          rows: [
            [t2("Single payment ≤ ¥200", "单笔 ≤ ¥200"), t2("0% platform fee", "0% 平台手续费")],
            [
              t2("Single payment > ¥200", "单笔 > ¥200"),
              t2("3% on the whole amount (e.g. ¥205 → fee on all ¥205)", "按整笔收 3%（例如 ¥205 → 对全部 ¥205 收费）"),
            ],
            [t2("Per-transaction limit", "单笔限额"), t2("About US$5,000", "约 5,000 美元")],
            [t2("Annual limit", "年度限额"), t2("About US$50,000", "约 50,000 美元")],
            [
              t2("Your bank's foreign transaction fee (FTF)", "你的发卡行货币转换费（FTF）"),
              t2("Often 3% on standard US/UK/EU cards; 0% on Wise / Revolut / zero-FX travel cards", "美英欧普通银行卡通常 3%；Wise / Revolut / 免货转旅行卡为 0%"),
            ],
          ],
        },
        t2p(
          "The two fees stack. First the app adds its 3%, then your bank adds its fee on the new total.",
          "两笔费用会叠加。先由 App 加收 3%，然后你的银行再在新的总额上收取它的费用。"
        ),
        {
          type: "callout",
          tone: "warn",
          title: t2("Example: why ¥201 is a trap", "例子：为什么 ¥201 是个坑"),
          text: t2(
            "You pay a ¥201 hotpot bill with a standard US card (3% bank fee). Alipay adds 3%: 201 × 1.03 = ¥207.03. Your bank adds 3% on that: 207.03 × 1.03 = ¥213.24. You lose ¥12.24, or 6.09%. Keep the bill at ¥200 and use a zero-FX card (Wise), and you lose ¥0.",
            "你用一张普通美国银行卡（3% 银行费）支付一笔 ¥201 的火锅账单。支付宝先加收 3%：201 × 1.03 = ¥207.03。你的银行再在此基础上收 3%：207.03 × 1.03 = ¥213.24。你白白损失 ¥12.24，即 6.09%。如果账单控制在 ¥200 并使用免货转卡（Wise），损失为 ¥0。"
          ),
        },
        { type: "tool", tool: "payment-fee-calculator" },
        { type: "affiliate", id: "wise" },
      ],
    },
    {
      id: "split-bill",
      heading: t2("Split-bill strategy (and when NOT to split)", "拆单策略（以及什么时候不要拆）"),
      blocks: [
        {
          type: "table",
          head: [t2("Bill amount", "账单金额"), t2("What to do", "怎么做")],
          rows: [
            [
              t2("¥200 or less", "¥200 及以下"),
              t2(
                "Platform fee is 0%. Just scan and pay. If your bank charges 3% FTF, a zero-FX card like Wise saves you that 3% too.",
                "平台手续费为 0%。直接扫码付款。如果你的银行收 3% 货转费，换用 Wise 等免货转卡还能再省这 3%。"
              ),
            ],
            [
              t2("¥200–600 (group meals, souvenirs)", "¥200–600（聚餐、买伴手礼）"),
              t2(
                "Politely ask the cashier to split it into 2 or 3 payments of ¥200 or less (number of payments = bill ÷ 200, rounded up). Avoid round ¥200 amounts — e.g. split ¥360 into ¥190 + ¥170. You save 3% of the bill.",
                "礼貌地请收银员拆成 2 或 3 笔 ¥200 及以下的付款（笔数 = 账单 ÷ 200，向上取整）。避免每笔都是整数 ¥200——例如把 ¥360 拆成 ¥190 + ¥170。可省下账单金额的 3%。"
              ),
            ],
            [
              t2("Over ¥600 (hotels, long train trips, electronics)", "超过 ¥600（酒店、长途高铁、电子产品）"),
              t2(
                "Do not split. Book hotels and trains online on Trip.com with your foreign card (no 3% scan fee), or insert your physical Visa/Mastercard at the POS in malls and hotels and choose to pay in CNY.",
                "不要拆单。酒店和火车票直接在 Trip.com 线上用外卡支付（没有 3% 扫码费），或者在商场、酒店的 POS 机插实体 Visa/Mastercard 卡，并选择人民币结算。"
              ),
            ],
          ],
        },
        {
          type: "callout",
          tone: "danger",
          title: t2("Anti-fraud warning", "防风控警告"),
          text: t2(
            "Never split a bill into 4 or more back-to-back payments at the counter. Many payments close to ¥200 at the same merchant in a short time very often (about 90% of the time) trigger Alipay's and your bank's fraud protection, and your card gets locked. For big amounts use Trip.com online, or pay by card at the POS and always choose CNY (refuse DCC).",
            "千万不要站在收银台连续拆成 4 笔或更多小额付款。短时间内在同一商户连续多笔接近 ¥200 的交易，极大概率（约 90%）会触发支付宝和你银行的盗刷风控，导致锁卡。大额请在 Trip.com 线上支付，或在 POS 机刷卡并始终选择人民币结算（拒绝 DCC）。"
          ),
        },
        {
          type: "show",
          zh: "您好！我用的是外国银行卡，单笔超过200元会多收3%手续费。麻烦您帮我把这笔账分成两笔付款，每笔不超过200元，可以吗？谢谢！",
          pinyin: "Nín hǎo! Qǐng bāng wǒ fēn chéng liǎng bǐ fùkuǎn, měi bǐ bù chāoguò liǎngbǎi yuán, xièxie!",
          meaning: t2(
            "Hello! I use a foreign bank card, and payments over ¥200 get an extra 3% fee. Could you please split this bill into two payments of no more than ¥200 each? Thank you!",
            "您好！我用的是外国银行卡，单笔超过 200 元会多收 3% 手续费。麻烦您帮我把这笔账分成两笔付款，每笔不超过 200 元，可以吗？谢谢！"
          ),
        },
      ],
    },
    {
      id: "bug-security-decline",
      heading: t2("Bug 1: “Transaction declined due to security risk”", "Bug 1：“交易存在安全风险被拦截”"),
      blocks: [
        { type: "ad" },
        t2p(
          "Why it happens: either your card issuer (e.g. Chase or Bank of America in the US) blocks it as possible cross-border fraud, or your brand-new Alipay account makes a large first payment (say ¥800) right after landing and Alipay's risk system stops it.",
          "原因：要么是你的发卡行（例如美国的 Chase 或 Bank of America）把它当作可能的跨境盗刷拦截了，要么是你刚注册的支付宝账号一落地就第一次付一笔大额账单（比如 ¥800），触发了支付宝风控。"
        ),
        {
          type: "steps",
          items: [
            t2(
              "Before you leave, tell your bank in its app that you are travelling to China, and enable international SMS on your bank's registered phone number so you can complete 3D Secure codes.",
              "出发前在银行 App 里报备中国行程，并为银行预留手机号开通接收国际短信功能，以便完成 3D Secure 验证码校验。"
            ),
            t2(
              "After landing, make a small first purchase — a ¥3 bottle of water at a convenience store — so the system sees normal in-China spending by you.",
              "落地后先做一笔小额消费——在便利店买一瓶 ¥3 的矿泉水——让系统确认是你本人在中国正常消费。"
            ),
            t2(
              "If Alipay shows an appeal page, follow it: upload a photo of you holding your credit card (cover the middle digits) plus your passport page. It is usually unlocked in about 10 minutes.",
              "如果支付宝弹出申诉页面，按提示操作：上传一张你手持信用卡（遮住中间数字）的照片和护照页。通常约 10 分钟即可解封。"
            ),
          ],
        },
      ],
    },
    {
      id: "bug-personal-qr",
      heading: t2("Bug 2: You can't pay personal QR codes, transfer money or send red packets", "Bug 2：无法扫个人收款码、转账或发红包"),
      blocks: [
        t2p(
          "Because of anti-money-laundering rules, Alipay and WeChat accounts paid with a foreign credit or debit card can only pay registered merchant codes. Person-to-person (P2P) transfers, WeChat red packets and personal static QR codes are not allowed.",
          "出于反洗钱监管规定，用境外信用卡/借记卡付款的支付宝和微信账户，只能向注册商户收款码付款。个人对个人转账（P2P）、微信红包和个人静态收款码都不支持。"
        ),
        t2p(
          "Real situations: renting a bamboo raft in Yangshuo (Guilin), buying candied haws in a hutong, or asking your private driver to buy tickets for you. They show a QR code with their own profile photo — a personal code — and when you scan it you get the error “International bank cards are not supported”.",
          "真实场景：在桂林阳朔租竹筏、在胡同买糖葫芦，或请包车司机代买门票。对方亮出的是带他私人头像的个人收款码，你一扫就弹出报错“不支持使用国际银行卡支付”。"
        ),
        {
          type: "list",
          items: [
            t2(
              "Fix 1: always carry an envelope of ¥300–500 in small cash.",
              "解法 1：随身必须带一个装有 ¥300–500 零钱的信封。"
            ),
            t2(
              "Fix 2 (the clever one): politely give ¥500 in cash to a hotel front desk you trust or to a Chinese friend and ask them to transfer ¥500 to your Alipay Balance or WeChat Change. Once your passport is verified, you can receive this money. With local balance you can pay any personal code and even send red packets.",
              "解法 2（更高级的一招）：礼貌地把 ¥500 现金交给正规酒店前台或你的中国朋友，请他们用支付宝/微信直接转 ¥500 到你的支付宝余额或微信零钱。只要完成了护照实名认证，你就能收到这笔钱。有了本地余额，任何个人码都能付，甚至还能发红包。"
            ),
          ],
        },
        {
          type: "show",
          zh: "您好！外国银行卡绑支付宝无法扫“个人收款码”，但我有人民币现金，或者我把现金给您、请您帮我代付一下可以吗？万分感谢！",
          pinyin: "Nín hǎo! Wǒ yǒu rénmínbì xiànjīn, kěyǐ fù xiànjīn ma? Huòzhě qǐng nín bāng wǒ dàifù yíxià, xièxie!",
          meaning: t2(
            "Hello! Alipay linked to a foreign bank card can't scan personal payment codes, but I have cash in RMB. Or can I give you cash and you pay for me? Thank you so much!",
            "您好！外国银行卡绑支付宝无法扫“个人收款码”，但我有人民币现金，或者我把现金给您、请您帮我代付一下可以吗？万分感谢！"
          ),
        },
      ],
    },
    {
      id: "bug-teenagers",
      heading: t2("Bug 3: Teenagers under 18", "Bug 3：未满 18 岁的青少年"),
      blocks: [
        t2p(
          "Teenagers aged 14–17 from Europe and North America often use their own teen debit cards, but Alipay and WeChat have strict age limits for passport verification of minors with international cards, and approval often fails.",
          "欧美 14–17 岁的高中生习惯用自己的青少年借记卡，但支付宝和微信对未成年人护照实名认证绑定国际卡有严格的年龄限制，经常审核不通过。"
        ),
        {
          type: "list",
          items: [
            t2(
              "Install Alipay on your child's phone for shared bikes and translation.",
              "在孩子手机上安装支付宝，用于扫共享单车和翻译。"
            ),
            t2(
              "For purchases, a parent can pay, or open a Family Card in Alipay (if your account supports it).",
              "买东西可以由家长支付，或在支付宝开通“亲情卡”（如果账户支持）。"
            ),
            t2(
              "Or give the child a physical transport card (a Beijing/Shanghai T-Union card, top up and pay at convenience stores) plus a small cash pouch.",
              "或者给孩子准备一张实体交通卡（北京/上海交通联合卡，可在便利店充值和消费）外加一个零钱袋。"
            ),
          ],
        },
      ],
    },
    {
      id: "bug-unsupported",
      heading: t2("Bug 4: Where even a foreign-card Alipay doesn't work", "Bug 4：哪些场景连外卡版支付宝也刷不了"),
      blocks: [
        {
          type: "list",
          items: [
            t2(
              "Vending machines: “face pay” and “pay later without password” don't work with foreign cards — just choose normal QR-code payment.",
              "自动售货机：“刷脸支付/免密先享后付”功能外卡不可用——直接选普通扫码付即可。"
            ),
            t2(
              "Auto-renewals: with an Apple ID outside mainland China, you can't use foreign-card Alipay to auto-renew some Chinese memberships.",
              "自动续费：使用中国区以外的 Apple ID 时，无法用外卡支付宝自动续费部分国内会员。"
            ),
            t2(
              "Hospitals: self-service registration machines sometimes only accept Chinese medical insurance cards or UnionPay chip cards. Go to the staffed cashier window and pay with Alipay there.",
              "医院：挂号自助机有时只认国内医保卡或银联芯片卡。去人工收费窗口即可用支付宝付款。"
            ),
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: t2("Do I need a Chinese phone number to use Alipay or WeChat Pay?", "使用支付宝或微信支付需要中国手机号吗？"),
      a: t2(
        "No. You can register with your home phone number and link a foreign Visa or Mastercard. Make sure your number can receive international SMS.",
        "不需要。你可以用本国手机号注册并绑定外国 Visa 或 Mastercard。请确保你的号码能接收国际短信。"
      ),
    },
    {
      q: t2("Is the 3% fee charged only on the amount over ¥200?", "3% 手续费只对超过 ¥200 的部分收取吗？"),
      a: t2(
        "No. If a single payment is over ¥200, the 3% fee is charged on the whole amount. A ¥205 bill costs ¥211.15 before any bank fee.",
        "不是。单笔超过 ¥200 时，按整笔金额收取 3%。一笔 ¥205 的账单在银行收费之前就要付 ¥211.15。"
      ),
    },
    {
      q: t2("Why did Alipay decline my Visa card?", "为什么支付宝拒绝了我的 Visa 卡？"),
      a: t2(
        "Usually a security-risk block by your bank or by Alipay. Notify your bank of travel, enable international SMS for 3D Secure, make a small first purchase like a ¥3 water, and use the appeal page (card photo with middle digits covered + passport).",
        "通常是你的银行或支付宝的安全风控拦截。向银行报备行程，开通国际短信以完成 3D Secure，先做一笔小额消费比如 ¥3 的矿泉水，并使用申诉页面（遮住中间数字的手持卡照片 + 护照）。"
      ),
    },
    {
      q: t2("How can I pay a personal WeChat QR code as a foreigner?", "外国人怎样扫个人微信收款码付款？"),
      a: t2(
        "A foreign card can't pay personal codes. Pay in cash, or ask a hotel front desk or Chinese friend to transfer money to your WeChat Change in exchange for cash; then you can pay any code from that balance.",
        "外卡无法扫个人码。用现金支付，或者把现金交给酒店前台或中国朋友，请他们转钱到你的微信零钱；之后你就能用这笔余额付任何收款码。"
      ),
    },
    {
      q: t2("What is the best way to pay a large bill like a hotel?", "酒店这类大额账单最好怎么付？"),
      a: t2(
        "Book online on Trip.com with your foreign card (no 3% scan fee), or insert your physical card at the hotel POS and choose to be charged in CNY.",
        "在 Trip.com 线上用外卡预订（没有 3% 扫码费），或在酒店 POS 机插实体卡并选择人民币结算。"
      ),
    },
  ],
  related: ["atm-cash-dcc", "internet-esim", "essential-apps", "shopping-tax-refund", "metro-didi-maps"],
};

function t2p(en: string, zh: string) {
  return { type: "p" as const, text: t2(en, zh) };
}

export default guide;
