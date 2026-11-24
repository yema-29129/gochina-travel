"use client";

import { useState } from "react";
import {
  Download,
  CheckCircle2,
  AlertTriangle,
  ScanLine,
  QrCode,
  Banknote,
  ChevronRight,
  ChevronLeft,
  Maximize2,
  ExternalLink,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { Lang, L, tx } from "@/lib/i18n";
import { ShowCard, useShowCard } from "@/components/ShowCard";

type AppId = "alipay" | "wechat" | "tenpaygo" | "nihao";

interface TutorialStep {
  title: L;
  desc: L;
  tip?: L;
  screen: {
    header: string;
    accent: string; // tailwind bg class
    rows: { label: string; sub?: string; highlight?: boolean; badge?: string }[];
    callout: L;
  };
}

interface AppGuide {
  id: AppId;
  name: string;
  zhName: string;
  tagline: L;
  badge: L;
  badgeCls: string;
  color: string;
  iosUrl: string;
  androidUrl: string;
  developer: string;
  pros: L[];
  limits: L;
  steps: TutorialStep[];
}

const APPS: AppGuide[] = [
  {
    id: "alipay",
    name: "Alipay",
    zhName: "支付宝",
    tagline: {
      en: "Best all-in-one app: payments, metro QR codes, DiDi taxis & menu translation in English.",
      zh: "最全能必装 App：扫码支付、城市地铁码、英文滴滴打车与拍照翻译菜单一站搞定。",
    },
    badge: { en: "#1 Must-Have", zh: "首选必装" },
    badgeCls: "bg-blue-100 text-blue-700",
    color: "bg-[#1677FF]",
    iosUrl: "https://apps.apple.com/app/alipay-simplify-your-life/id333206289",
    androidUrl: "https://play.google.com/store/apps/details?id=com.eg.android.AlipayGphone",
    developer: "Alipay (Hangzhou) Information Technology Co., Ltd.",
    pros: [
      { en: "Full English interface built in", zh: "内置完整英文界面" },
      { en: "Links foreign Visa, Mastercard, JCB, Discover & Diners", zh: "支持绑定境外 Visa、Mastercard、JCB、Discover 和 Diners" },
      { en: "0% fee on single payments ≤ ¥200 (3% above ¥200)", zh: "单笔 ≤ 200 元免手续费（超过 200 元收 3%）" },
    ],
    limits: {
      en: "Cannot pay personal P2P QR codes with a foreign card (only registered merchant codes).",
      zh: "绑外卡仅支持扫注册商家码，无法向个人收款码付款或转账。",
    },
    steps: [
      {
        title: { en: "Step 1: Download & Sign Up Before Flying", zh: "第 1 步：出发前下载并用境外手机号注册" },
        desc: {
          en: "Download Alipay at home while you can receive SMS codes. Choose your country code, enter your home mobile number, and verify via SMS. Switch language to English in Settings if needed.",
          zh: "出发前在家下载支付宝（方便接收短信验证码）。选择你的国家区号，输入本国手机号完成短信验证；如需英文可在设置中切换。",
        },
        screen: {
          header: "Alipay · Sign Up",
          accent: "bg-[#1677FF]",
          rows: [
            { label: "Country / Region", sub: "+1 United States / +44 UK / +61 AU", highlight: true },
            { label: "Mobile Number", sub: "Enter your home phone number" },
            { label: "SMS Verification Code", sub: "6-digit code sent to your phone" },
          ],
          callout: { en: "Tap your home country code — no +86 Chinese SIM required", zh: "直接选本国区号，无需中国 +86 手机号" },
        },
      },
      {
        title: { en: "Step 2: Link Your Foreign Credit / Debit Card", zh: "第 2 步：绑定你的境外信用卡 / 借记卡" },
        desc: {
          en: "Tap Account (bottom right) → Bank Cards → Add Card. Enter your Visa or Mastercard number, expiry date, and CVV. We recommend linking 2 cards from different banks as backup.",
          zh: "点击右下角 Account（我的）→ Bank Cards（银行卡）→ Add Card（添加银行卡），输入 Visa/Mastercard 卡号、有效期和 CVV。建议绑定 2 张不同银行的卡备用。",
        },
        screen: {
          header: "Account → Bank Cards",
          accent: "bg-[#1677FF]",
          rows: [
            { label: "Balance", sub: "¥0.00" },
            { label: "Bank Cards", sub: "Add Visa / Mastercard / JCB", highlight: true, badge: "TAP HERE" },
            { label: "+ Add Card", sub: "Card number · MM/YY · CVV", highlight: true },
          ],
          callout: { en: "Link 2 foreign cards before departure so a bank alert won't strand you", zh: "出发前绑 2 张不同银行卡，防止某张卡被银行风控" },
        },
      },
      {
        title: { en: "Step 3: Verify Identity with Passport", zh: "第 3 步：上传护照完成实名认证" },
        desc: {
          en: "Go to Account → Settings → Account and Security → Identity Information. Scan your passport photo page and take a quick selfie. This unlocks higher spending limits and metro/DiDi access.",
          zh: "进入 Account → Settings → Account and Security → Identity Information，拍摄护照资料页并完成人脸核验，即可提升消费限额并解锁地铁码和滴滴。",
        },
        screen: {
          header: "Identity Verification",
          accent: "bg-[#1677FF]",
          rows: [
            { label: "Document Type", sub: "Passport (Foreign Visitors)" },
            { label: "Scan Passport Photo Page", sub: "Hold flat, avoid glare", highlight: true, badge: "2 MIN" },
            { label: "Status", sub: "Verified · Limit up to $50,000/yr" },
          ],
          callout: { en: "Passport verification lifts the low unverified cap & enables Metro QR", zh: "护照实名后可解除低额限制，并开通城市地铁码" },
        },
      },
      {
        title: { en: "Step 4: Know the 2 Main Buttons on Home Screen", zh: "第 4 步：认清首页 2 个核心付款按钮" },
        desc: {
          en: "On the blue top bar of Alipay: tap 'Scan' when you scan a shop's QR stand; tap 'Pay/Receive' when a cashier uses a barcode scanner on your phone.",
          zh: "支付宝首页顶部蓝色栏里：看到桌牌二维码点「Scan（扫一扫）」；看到收银台扫码枪/扫码盒点「Pay/Receive（收付款）」出示你的码。",
        },
        screen: {
          header: "Alipay · Home Top Bar",
          accent: "bg-[#1677FF]",
          rows: [
            { label: "[ 📷 Scan ]  You scan merchant QR", sub: "Restaurants, street stalls, taxis", highlight: true, badge: "MAIN" },
            { label: "[ 💳 Pay/Receive ]  Cashier scans you", sub: "7-Eleven, malls, supermarkets", highlight: true, badge: "MAIN" },
            { label: "[ 🚇 Transport ]  City Metro & Bus QR", sub: "Activate per city in 10 seconds" },
          ],
          callout: { en: "Test with a ¥3 water bottle at the airport convenience store first", zh: "落地先在机场便利店买瓶 3 元矿泉水破冰测试" },
        },
      },
    ],
  },
  {
    id: "wechat",
    name: "WeChat Pay",
    zhName: "微信支付",
    tagline: {
      en: "Essential backup payment + required for restaurant table QR menus & chatting with hotels.",
      zh: "必备第二支付渠道 + 餐厅桌码点餐、酒店/向导沟通刚需。",
    },
    badge: { en: "Essential Backup", zh: "必备 + 点餐" },
    badgeCls: "bg-emerald-100 text-emerald-700",
    color: "bg-[#07C160]",
    iosUrl: "https://apps.apple.com/app/wechat/id414478124",
    androidUrl: "https://play.google.com/store/apps/details?id=com.tencent.mm",
    developer: "WeChat International Pte. Ltd.",
    pros: [
      { en: "Needed to scan restaurant table QR codes to view/order menus", zh: "几乎所有餐厅桌角扫码点餐都依赖微信小程序" },
      { en: "Links Visa, Mastercard, JCB, Discover & Amex", zh: "支持绑定境外 Visa、Mastercard、JCB、Discover 和 Amex" },
      { en: "Built-in Translate button turns Chinese mini-programs into English", zh: "内置翻译功能可将中文点餐小程序一键翻成英文" },
    ],
    limits: {
      en: "New accounts sometimes require an existing WeChat user to scan a security QR during signup.",
      zh: "新注册微信账号有时需要一位老用户帮忙扫码辅助验证，务必在家提前注册。",
    },
    steps: [
      {
        title: { en: "Step 1: Install WeChat & Complete Signup at Home", zh: "第 1 步：在家下载微信并完成注册" },
        desc: {
          en: "Download WeChat and sign up with your mobile number. If prompted for 'Friend Verification', ask any friend who has used WeChat for 6+ months to scan your QR code.",
          zh: "下载微信并用本国手机号注册。若提示“好友辅助验证”，请任意使用微信满 6 个月的朋友扫码确认。",
        },
        screen: {
          header: "WeChat · Sign Up",
          accent: "bg-[#07C160]",
          rows: [
            { label: "Sign Up via Mobile", sub: "Any international phone number", highlight: true },
            { label: "Security Check", sub: "Slide puzzle / friend QR if asked" },
            { label: "Enable Translate", sub: "Me → Settings → General → Language" },
          ],
          callout: { en: "Do NOT wait until you land in China to create a WeChat account", zh: "切勿等落地中国再注册微信，务必在出发前搞定" },
        },
      },
      {
        title: { en: "Step 2: Open Wallet Inside Services", zh: "第 2 步：进入「服务 → 钱包」" },
        desc: {
          en: "Tap Me (bottom right) → Services (or Pay and Services) → Wallet. If 'Services' does not appear yet, go to Me → Settings → General → Tools → Weixin Pay to enable it.",
          zh: "点击右下角 Me（我）→ Services（服务）→ Wallet（钱包）。如果看不到服务入口，先在 Settings → General → Tools 里开启 Weixin Pay。",
        },
        screen: {
          header: "Me → Services",
          accent: "bg-[#07C160]",
          rows: [
            { label: "Money (Show Payment Code)", sub: "Cashier scans your screen" },
            { label: "Wallet", sub: "Manage cards & identity", highlight: true, badge: "TAP HERE" },
            { label: "Balance", sub: "¥0.00" },
          ],
          callout: { en: "Look for the green Services / Pay icon in the Me tab", zh: "在「我」页面找到绿色「服务」入口" },
        },
      },
      {
        title: { en: "Step 3: Add Foreign Card & Passport Info", zh: "第 3 步：绑定外卡并填护照信息" },
        desc: {
          en: "Inside Wallet, tap Bank Cards → Add a Bank Card. Agree to terms, set a 6-digit payment PIN, enter your foreign card details, and complete passport verification.",
          zh: "在钱包中点击 Bank Cards（银行卡）→ Add a Bank Card（添加银行卡），同意协议、设置 6 位支付密码、输入外卡卡号并完成护照认证。",
        },
        screen: {
          header: "Wallet → Bank Cards",
          accent: "bg-[#07C160]",
          rows: [
            { label: "+ Add a Bank Card", sub: "Visa · Mastercard · Amex · JCB", highlight: true, badge: "TAP HERE" },
            { label: "Set 6-Digit Pay PIN", sub: "Used every time you confirm payment" },
            { label: "Passport Verification", sub: "Name must match passport exactly" },
          ],
          callout: { en: "Same fee rule as Alipay: 0% up to ¥200, 3% over ¥200", zh: "手续费同支付宝：单笔 ≤ 200 元免收，超过收 3%" },
        },
      },
      {
        title: { en: "Step 4: Scan or Show Money Code", zh: "第 4 步：扫码付款或出示付款码" },
        desc: {
          en: "Tap the '+' icon (top right of Chats) → choose 'Scan' to scan a merchant/table QR, or choose 'Money' to display your barcode for convenience stores.",
          zh: "点击聊天页右上角「+」号：选「Scan（扫一扫）」扫商家码或桌码点餐；选「Money（收付款）」向便利店收银员亮出你的付款码。",
        },
        screen: {
          header: "WeChat · Top-Right '+' Menu",
          accent: "bg-[#07C160]",
          rows: [
            { label: "📷 Scan", sub: "Scan merchant QR or table menu QR", highlight: true },
            { label: "💳 Money", sub: "Show your barcode to cashier", highlight: true },
            { label: "Tip: Long-press Chinese text", sub: "Tap 'Translate' inside any chat/menu" },
          ],
          callout: { en: "Keep both Alipay & WeChat ready — if one declines, switch instantly", zh: "支付宝和微信同时备好，一个报错立刻换另一个" },
        },
      },
    ],
  },
  {
    id: "tenpaygo",
    name: "TenPayGo",
    zhName: "腾讯国际支付工具 TenPayGo",
    tagline: {
      en: "Tencent's standalone 2026 app for foreign visitors — sign up with email only, no WeChat account needed!",
      zh: "腾讯 2026 专为外国游客推出的独立支付 App——仅用邮箱即可注册，无需下载完整版微信！",
    },
    badge: { en: "Tencent 2026 · Email Only", zh: "腾讯新品 · 仅邮箱" },
    badgeCls: "bg-teal-100 text-teal-800",
    color: "bg-[#0D9488]",
    iosUrl: "https://apps.apple.com/search?term=TenPayGo",
    androidUrl: "https://play.google.com/store/search?q=TenPayGo&c=apps",
    developer: "TenPay Global / Tencent",
    pros: [
      { en: "No WeChat account, no friend verification, no +86 phone number needed", zh: "无需微信账号、无需好友辅助验证、无需中国 +86 手机号" },
      { en: "Supports Visa, Mastercard, Amex, JCB, Discover, Diners & Apple Pay", zh: "支持绑定国际 Visa/Mastercard/Amex/JCB/Discover 及 Apple Pay" },
      { en: "Scans tens of millions of Weixin Pay merchant QR codes + AI menu translation", zh: "可扫全国数千万微信支付商家码，内置 AI 菜单翻译与交通码" },
    ],
    limits: {
      en: "Built strictly for merchant (B2C) payments: does NOT support P2P personal transfers, red packets, or WeChat Mini-Programs.",
      zh: "仅支持向商户消费付款（B2C），不支持个人转账、发红包，也不能打开微信小程序点餐。",
    },
    steps: [
      {
        title: { en: "Step 1: Download TenPayGo from Official Store", zh: "第 1 步：在官方应用商店下载 TenPayGo" },
        desc: {
          en: "Search 'TenPayGo' in the Apple App Store or Google Play (published by Tencent / TenPay Global). Ideal if you couldn't pass WeChat's friend verification.",
          zh: "在 App Store 或 Google Play 搜索「TenPayGo」（腾讯/TenPay Global 出品）。如果你不想装微信或卡在好友验证，这个工具最省心。",
        },
        screen: {
          header: "App Store · TenPayGo",
          accent: "bg-[#0D9488]",
          rows: [
            { label: "TenPayGo", sub: "Tencent · China Travel Payment", highlight: true, badge: "GET" },
            { label: "No WeChat Account Needed", sub: "Lightweight standalone app" },
          ],
          callout: { en: "Great solution if WeChat signup asked for friend verification", zh: "微信注册受阻时的最佳官方平替" },
        },
      },
      {
        title: { en: "Step 2: Register with Email Address Only", zh: "第 2 步：仅用电子邮箱快速注册" },
        desc: {
          en: "Open TenPayGo and sign up using your email address and a verification code. No Chinese SIM card or bank account is required.",
          zh: "打开 TenPayGo，直接用常用电子邮箱收验证码即可注册，无需任何中国手机号或银行卡。",
        },
        screen: {
          header: "TenPayGo · Quick Sign Up",
          accent: "bg-[#0D9488]",
          rows: [
            { label: "Email Address", sub: "you@example.com", highlight: true },
            { label: "Email Code", sub: "Instant 6-digit code" },
            { label: "Passport Check", sub: "Quick photo scan for higher limits" },
          ],
          callout: { en: "Fastest onboarding — takes under 2 minutes with just email", zh: "注册门槛最低，仅邮箱 2 分钟即可开通" },
        },
      },
      {
        title: { en: "Step 3: Add Foreign Card or Apple Pay", zh: "第 3 步：绑定国际银行卡或 Apple Pay" },
        desc: {
          en: "Bind your Visa, Mastercard, American Express, JCB, or Diners Club card — or pay directly via Apple Pay and supported overseas wallets.",
          zh: "添加你的 Visa、Mastercard、Amex、JCB 或 Diners 国际卡，也可直接接入 Apple Pay 或合作海外钱包付款。",
        },
        screen: {
          header: "TenPayGo · Funding",
          accent: "bg-[#0D9488]",
          rows: [
            { label: "Apple Pay", sub: "1-tap card import", highlight: true, badge: "FAST" },
            { label: "International Card", sub: "Visa · Mastercard · Amex · JCB", highlight: true },
            { label: "Partner Wallets", sub: "Selected overseas e-wallets" },
          ],
          callout: { en: "Also supports built-in AI menu translator & transit codes (e.g. Shenzhen)", zh: "还自带 AI 菜单翻译与深圳等城市公交地铁码" },
        },
      },
      {
        title: { en: "Step 4: Scan Weixin Pay Merchant Codes Anywhere", zh: "第 4 步：畅扫全国微信支付商家码" },
        desc: {
          en: "Use Scan to pay any green Weixin Pay merchant QR stand, or tap Pay Code at supermarkets and shops. Remember: personal QR codes still require cash.",
          zh: "遇到绿色微信支付商家码点 Scan 扫描付款，在便利店出示付款码即可。注意：个人收款码仍需使用现金。",
        },
        screen: {
          header: "TenPayGo · Pay",
          accent: "bg-[#0D9488]",
          rows: [
            { label: "📷 Scan Weixin Pay Merchant QR", sub: "Shops, taxis, hotels, attractions", highlight: true },
            { label: "💳 Show Payment Code", sub: "Convenience stores & malls", highlight: true },
            { label: "🍽️ AI Menu Translator", sub: "Point camera at Chinese menus" },
          ],
          callout: { en: "Pair TenPayGo with Alipay for the smoothest backup coverage", zh: "建议与支付宝搭配使用，覆盖率拉满" },
        },
      },
    ],
  },
  {
    id: "nihao",
    name: "Nihao China",
    zhName: "中国银联「你好中国」Nihao China",
    tagline: {
      en: "China UnionPay's official all-in-one foreigner app: scans UnionPay, Alipay & WeChat merchant QRs + 43-city metro.",
      zh: "中国银联国际官方打造的来华全能 App：一码通扫银联/支付宝/微信商家码 + 全国 43 城地铁码。",
    },
    badge: { en: "UnionPay Official · 3-in-1 QR", zh: "银联官方 · 三码通扫" },
    badgeCls: "bg-red-100 text-red-700",
    color: "bg-[#C8102E]",
    iosUrl: "https://apps.apple.com/search?term=Nihao+China+UnionPay",
    androidUrl: "https://play.google.com/store/search?q=Nihao+China+UnionPay&c=apps",
    developer: "China UnionPay Co., Ltd.",
    pros: [
      { en: "Single QR scanner works across UnionPay, Alipay AND WeChat Pay merchant networks", zh: "一个扫码入口同时打通银联、支付宝和微信支付商家收款网络" },
      { en: "Unified transit QR covers metros in 43 major cities + buses in 1,760+ counties", zh: "内置统一交通码，覆盖 43 城地铁与 1,760+ 县市公交" },
      { en: "Built-in voice translator (EN/JA/KO/AR/RU), 12306 rail, tax refund tracking & Tour Balance", zh: "自带英日韩阿俄实时语音翻译、12306/美团入口与离境退税追踪" },
    ],
    limits: {
      en: "If topping up the prepaid 'Tour Balance' (instead of direct card binding), check top-up fee terms; unused balance can be refunded back to your card.",
      zh: "如果选择预充值「旅行通余额（Tour Balance）」而非直接绑卡，注意查看充值手续费；剩余余额可原路退回。",
    },
    steps: [
      {
        title: { en: "Step 1: Download 'Nihao China' by China UnionPay", zh: "第 1 步：下载中国银联官方「Nihao China」" },
        desc: {
          en: "Search 'Nihao China' on the App Store or Google Play and verify the developer is China UnionPay Co., Ltd. Much simpler in English than the domestic Yunshanfu (云闪付) app.",
          zh: "在 App Store 或 Google Play 搜索「Nihao China」，确认开发者为 China UnionPay Co., Ltd.。相比国内版云闪付，它的纯英文界面对老外友好得多。",
        },
        screen: {
          header: "App Store · Nihao China",
          accent: "bg-[#C8102E]",
          rows: [
            { label: "Nihao China (你好中国)", sub: "China UnionPay Co., Ltd.", highlight: true, badge: "OFFICIAL" },
            { label: "Languages", sub: "EN · JA · KO · AR · RU" },
          ],
          callout: { en: "Prefer Nihao China over domestic Yunshanfu for an English-first experience", zh: "外国游客优先下 Nihao China，比国内版云闪付简单得多" },
        },
      },
      {
        title: { en: "Step 2: Register with Email, Phone or Apple ID", zh: "第 2 步：用邮箱、手机号或 Apple ID 注册" },
        desc: {
          en: "Sign in with your email, overseas mobile number, or Apple account. No Chinese bank account is required.",
          zh: "支持电子邮箱、境外手机号或 Apple ID 一键注册，不需要中国银行卡。",
        },
        screen: {
          header: "Nihao China · Sign In",
          accent: "bg-[#C8102E]",
          rows: [
            { label: "Sign in with Apple / Email", sub: "No Chinese phone number needed", highlight: true },
            { label: "Passport Verification", sub: "Unlocks payments & transit QR" },
          ],
          callout: { en: "Also supports travelers who carry international UnionPay cards", zh: "同时完美支持持有境外银联卡、Visa 与 Mastercard 的游客" },
        },
      },
      {
        title: { en: "Step 3: Bind Foreign Card or Top Up Tour Balance", zh: "第 3 步：绑定外卡或开通旅行通余额" },
        desc: {
          en: "Go to Pay / Cards to bind an international Visa, Mastercard, or UnionPay card — OR activate a prepaid digital 'Tour Balance' if your home bank often declines direct Chinese QR charges.",
          zh: "进入卡包绑定你的国际 Visa、Mastercard 或银联卡；如果你的发卡行容易拦截跨境扫码，也可开通预充值的「Tour Balance」作为稳定备用钱包。",
        },
        screen: {
          header: "Nihao China · Wallet",
          accent: "bg-[#C8102E]",
          rows: [
            { label: "Bind Foreign Card", sub: "Visa · Mastercard · UnionPay", highlight: true },
            { label: "Tour Balance (Prepaid)", sub: "Great fallback if bank blocks direct scans", highlight: true, badge: "BACKUP" },
          ],
          callout: { en: "Best backup when your home bank blocks Alipay/WeChat transactions", zh: "当外卡在支付宝/微信被发卡行拦截时，银联是最强兜底" },
        },
      },
      {
        title: { en: "Step 4: One-App QR Pay + 43-City Metro + Translator", zh: "第 4 步：一码通扫 + 43 城地铁 + 实时翻译" },
        desc: {
          en: "Scan UnionPay, Alipay, or WeChat merchant codes directly from Nihao China. Tap 'Transit' to ride subways in 43 cities without setting up separate city cards.",
          zh: "直接用 Nihao China 扫银联、支付宝或微信商家码；点「Transit」即可一码通乘全国 43 城地铁，无需每个城市单独开卡。",
        },
        screen: {
          header: "Nihao China · Home",
          accent: "bg-[#C8102E]",
          rows: [
            { label: "📷 Scan Any Merchant QR", sub: "UnionPay + Alipay + WeChat networks", highlight: true },
            { label: "🚇 43-City Metro & Bus QR", sub: "Beijing, Shanghai, Chengdu, Xi'an…", highlight: true },
            { label: "🗣️ Voice Translator & Tax Refund", sub: "12306 · Meituan · Trip built in" },
          ],
          callout: { en: "One transit code across 43 cities saves huge time on multi-city trips", zh: "多城联游时一个交通码通坐 43 城地铁非常省心" },
        },
      },
    ],
  },
];

export default function PaymentSetupTutorial({ lang }: { lang: Lang }) {
  const [appId, setAppId] = useState<AppId>("alipay");
  const [stepIdx, setStepIdx] = useState<number>(0);
  const sc = useShowCard();

  const app = APPS.find((a) => a.id === appId) ?? APPS[0];
  const step = app.steps[stepIdx] ?? app.steps[0];

  const switchApp = (id: AppId) => {
    setAppId(id);
    setStepIdx(0);
  };

  const personalQrCard = {
    zh: "您好！外国银行卡绑定的支付宝/微信无法扫“个人收款码”，但我带了人民币现金，可以直接付现金吗？或者我给您现金、请您帮我转到余额可以吗？非常感谢！",
    pinyin: "Nínhǎo! Wàiguó yínhángkǎ bǎngdìng de Zhīfùbǎo/Wēixìn wúfǎ sǎo 'gèrén shōukuǎnmǎ', dàn wǒ dài le rénmínbì xiànjīn, kěyǐ zhíjiē fù xiànjīn ma? Fēicháng gǎnxiè!",
    meaning:
      lang === "zh"
        ? "向无法刷外卡的个人收款码摊主/司机说明并改付人民币现金"
        : "Explain that foreign cards cannot pay personal QR codes and offer RMB cash instead",
  };

  return (
    <div className="space-y-10">
      {/* SECTION 1: 4 PAYMENT APPS DOWNLOAD & STEP-BY-STEP VISUAL TUTORIAL */}
      <div>
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
            <Smartphone className="h-3.5 w-3.5" />
            {tx({ en: "PART 1 · DOWNLOAD & BINDING TUTORIAL", zh: "第一部分 · 4 大支付 App 下载与绑卡图解教程" }, lang)}
          </span>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            {tx(
              {
                en: "Step-by-Step Setup: Alipay, WeChat Pay, TenPayGo & UnionPay Nihao China",
                zh: "分步图解教程：支付宝、微信支付、腾讯 TenPayGo 与银联「你好中国」",
              },
              lang
            )}
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            {tx(
              {
                en: "Pick an app below to get official download links and walk through every screen before you fly. We recommend setting up Alipay + one backup (WeChat Pay, TenPayGo, or Nihao China).",
                zh: "点击下方任意 App 查看官方下载入口与逐屏绑卡图解。建议出发前主装「支付宝」+ 至少 1 个备用工具（微信支付、腾讯 TenPayGo 或银联 Nihao China）。",
              },
              lang
            )}
          </p>
        </div>

        {/* App Selector Tabs */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {APPS.map((a) => {
            const active = a.id === appId;
            return (
              <button
                key={a.id}
                type="button"
                onClick={() => switchApp(a.id)}
                className={`flex flex-col items-start rounded-xl border p-3.5 text-left transition-all ${
                  active
                    ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-800 hover:border-slate-400"
                }`}
              >
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${active ? "bg-white/20 text-white" : a.badgeCls}`}>
                  {tx(a.badge, lang)}
                </span>
                <span className="mt-2 text-base font-bold">{a.name}</span>
                <span className={`text-xs ${active ? "text-slate-300" : "text-slate-500"}`}>{a.zhName}</span>
              </button>
            );
          })}
        </div>

        {/* Active App Header & Download Links */}
        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-bold text-slate-900">
                  {app.name} <span className="text-base font-medium text-slate-500">({app.zhName})</span>
                </h3>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${app.badgeCls}`}>{tx(app.badge, lang)}</span>
              </div>
              <p className="mt-1 text-sm text-slate-600">{tx(app.tagline, lang)}</p>
              <p className="mt-1 text-xs text-slate-500">
                {tx({ en: "Official developer:", zh: "核对官方开发者：" }, lang)} <span className="font-medium text-slate-700">{app.developer}</span>
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <a
                href={app.iosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white hover:bg-slate-700"
              >
                <Download className="h-3.5 w-3.5" />
                App Store (iOS)
                <ExternalLink className="h-3 w-3 opacity-70" />
              </a>
              <a
                href={app.androidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-100"
              >
                <Download className="h-3.5 w-3.5" />
                Google Play (Android)
                <ExternalLink className="h-3 w-3 opacity-70" />
              </a>
            </div>
          </div>

          {/* Pros & Limit Strip */}
          <div className="mt-4 grid gap-3 border-t border-slate-200 pt-4 md:grid-cols-2">
            <ul className="space-y-1.5 text-xs text-slate-700">
              {app.pros.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span>{tx(p, lang)}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
              <div>
                <span className="font-semibold">{tx({ en: "Important limit: ", zh: "使用限制提醒：" }, lang)}</span>
                {tx(app.limits, lang)}
              </div>
            </div>
          </div>

          {/* Interactive Stepper + Visual Phone Mockup */}
          <div className="mt-5 grid gap-5 lg:grid-cols-12">
            {/* Left: Step List */}
            <div className="space-y-2 lg:col-span-7">
              {app.steps.map((s, idx) => {
                const isCur = idx === stepIdx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setStepIdx(idx)}
                    className={`w-full rounded-xl border p-4 text-left transition-all ${
                      isCur
                        ? "border-red-500 bg-white shadow-sm ring-1 ring-red-100"
                        : "border-slate-200 bg-white/70 hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          isCur ? "bg-red-600 text-white" : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <span className="font-bold text-slate-900">{tx(s.title, lang)}</span>
                    </div>
                    <p className="mt-2 pl-10 text-sm leading-relaxed text-slate-600">{tx(s.desc, lang)}</p>
                  </button>
                );
              })}
            </div>

            {/* Right: Visual Phone Screen Diagram */}
            <div className="flex flex-col items-center justify-center lg:col-span-5">
              <div className="w-full max-w-[300px] overflow-hidden rounded-[2rem] border-[6px] border-slate-900 bg-white shadow-lg">
                {/* Phone Notch */}
                <div className="flex items-center justify-between bg-slate-900 px-5 py-1.5 text-[10px] font-medium text-white">
                  <span>9:41</span>
                  <span className="h-3 w-16 rounded-full bg-slate-800" />
                  <span>5G · 100%</span>
                </div>
                {/* App Top Bar */}
                <div className={`${step.screen.accent} px-4 py-3 text-white`}>
                  <div className="text-[10px] uppercase tracking-wider opacity-80">
                    {tx({ en: `Screen ${stepIdx + 1} of ${app.steps.length}`, zh: `界面图解 ${stepIdx + 1} / ${app.steps.length}` }, lang)}
                  </div>
                  <div className="mt-0.5 text-sm font-bold">{step.screen.header}</div>
                </div>
                {/* Screen Body */}
                <div className="space-y-2.5 p-3.5">
                  {step.screen.rows.map((r, i) => (
                    <div
                      key={i}
                      className={`rounded-lg border p-2.5 ${
                        r.highlight
                          ? "border-2 border-red-500 bg-red-50/60"
                          : "border-slate-200 bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-slate-900">{r.label}</span>
                        {r.badge && (
                          <span className="rounded bg-red-600 px-1.5 py-0.5 text-[9px] font-bold text-white">
                            {r.badge}
                          </span>
                        )}
                      </div>
                      {r.sub && <div className="mt-0.5 text-[11px] text-slate-500">{r.sub}</div>}
                    </div>
                  ))}

                  {/* Red Callout Box */}
                  <div className="rounded-lg bg-slate-900 p-2.5 text-[11px] leading-snug text-white">
                    <span className="font-bold text-amber-300">TIP: </span>
                    {tx(step.screen.callout, lang)}
                  </div>
                </div>
              </div>

              {/* Prev / Next Step Controls */}
              <div className="mt-3 flex items-center gap-3">
                <button
                  type="button"
                  disabled={stepIdx === 0}
                  onClick={() => setStepIdx((i) => Math.max(0, i - 1))}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  {tx({ en: "Prev", zh: "上一步" }, lang)}
                </button>
                <span className="text-xs font-medium text-slate-500">
                  {stepIdx + 1} / {app.steps.length}
                </span>
                <button
                  type="button"
                  disabled={stepIdx === app.steps.length - 1}
                  onClick={() => setStepIdx((i) => Math.min(app.steps.length - 1, i + 1))}
                  className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-700 disabled:opacity-40"
                >
                  {tx({ en: "Next", zh: "下一步" }, lang)}
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: 3 REAL-WORLD QR PAYMENT SCENARIOS IN CHINA */}
      <div className="border-t border-slate-200 pt-8">
        <div className="mb-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
            <ShieldCheck className="h-3.5 w-3.5" />
            {tx({ en: "PART 2 · HOW TO PAY AT THE COUNTER", zh: "第二部分 · 现场扫码支付的 3 种情况与一眼区分法" }, lang)}
          </span>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            {tx(
              {
                en: "3 QR Payment Scenarios in China (And How to Tell Them Apart Instantly)",
                zh: "中国现场付款的 3 种二维码场景（如何 1 秒区分）",
              },
              lang
            )}
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            {tx(
              {
                en: "Quick rule of thumb: if you see a barcode scanner gun or little white scanner box → show YOUR code. If you see a printed QR stand on the counter → YOU scan it. If it's a personal avatar QR → use cash!",
                zh: "1 秒区分口诀：看到收银台有「扫码枪 / 小白扫码盒」→ 亮你的付款码；看到桌上/柜台立着「收款二维码牌」→ 你扫商家码；看到是「个人头像二维码」→ 外卡大概率扫不了，改付现金！",
              },
              lang
            )}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {/* Scenario 1: You Scan Merchant QR */}
          <div className="flex flex-col rounded-2xl border border-blue-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-700">
                {tx({ en: "Scenario 1 · You Scan", zh: "情况 1 · 主动扫商家码" }, lang)}
              </span>
              <ScanLine className="h-5 w-5 text-blue-600" />
            </div>

            {/* Visual diagram */}
            <div className="my-4 flex items-center justify-center gap-3 rounded-xl bg-blue-50/70 p-4 text-center">
              <div className="rounded-lg border border-blue-300 bg-white px-3 py-2 shadow-xs">
                <div className="text-[10px] font-bold text-blue-700">YOUR PHONE</div>
                <div className="mt-1 text-xs font-semibold text-slate-800">📷 Scan</div>
              </div>
              <span className="text-lg font-bold text-blue-500">→</span>
              <div className="rounded-lg border-2 border-blue-500 bg-white px-3 py-2 shadow-xs">
                <div className="text-[10px] font-bold text-slate-700">COUNTER STAND</div>
                <div className="mt-1 text-xs font-semibold text-blue-700">Merchant QR</div>
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-900">
              {tx({ en: "You Scan the Merchant's QR Code", zh: "游客主动扫商家的收款码" }, lang)}
            </h3>
            <ul className="mt-3 flex-1 space-y-2 text-sm text-slate-600">
              <li>
                <strong className="text-slate-800">{tx({ en: "How to spot it: ", zh: "怎么区分：" }, lang)}</strong>
                {tx(
                  {
                    en: "A printed plastic stand or sticker on the counter/wall (blue Alipay, green WeChat, or multi-app aggregate QR), with NO scanner gun.",
                    zh: "柜台或墙上立着一块印好的静态二维码牌子（蓝色支付宝/绿色微信/聚合码），收银台没有扫码枪。",
                  },
                  lang
                )}
              </li>
              <li>
                <strong className="text-slate-800">{tx({ en: "Common places: ", zh: "常见场景：" }, lang)}</strong>
                {tx({ en: "Small restaurants, noodle shops, cafés, taxis, markets.", zh: "小餐馆、面馆、咖啡店、出租车、街头小吃店。" }, lang)}
              </li>
              <li>
                <strong className="text-slate-800">{tx({ en: "How to pay: ", zh: "操作步骤：" }, lang)}</strong>
                {tx(
                  {
                    en: "Tap 'Scan' → scan the stand → type the RMB amount yourself → show the screen to staff to confirm the number → pay.",
                    zh: "点「扫一扫（Scan）」→ 对准牌子扫 → 自己输入人民币金额 → 给店员看一眼确认数字 → 确认付款。",
                  },
                  lang
                )}
              </li>
            </ul>
          </div>

          {/* Scenario 2: Merchant Scans Your Code */}
          <div className="flex flex-col rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                {tx({ en: "Scenario 2 · They Scan You", zh: "情况 2 · 商家扫你的码" }, lang)}
              </span>
              <QrCode className="h-5 w-5 text-emerald-600" />
            </div>

            {/* Visual diagram */}
            <div className="my-4 flex items-center justify-center gap-3 rounded-xl bg-emerald-50/70 p-4 text-center">
              <div className="rounded-lg border-2 border-emerald-500 bg-white px-3 py-2 shadow-xs">
                <div className="text-[10px] font-bold text-emerald-700">YOUR PHONE</div>
                <div className="mt-1 text-xs font-semibold text-slate-800">💳 Pay Code</div>
              </div>
              <span className="text-lg font-bold text-emerald-500">←</span>
              <div className="rounded-lg border border-emerald-300 bg-white px-3 py-2 shadow-xs">
                <div className="text-[10px] font-bold text-slate-700">CASHIER</div>
                <div className="mt-1 text-xs font-semibold text-emerald-700">Scanner Gun</div>
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-900">
              {tx({ en: "Cashier Scans Your Payment Code", zh: "商家用扫码枪/扫码盒扫你的付款码" }, lang)}
            </h3>
            <ul className="mt-3 flex-1 space-y-2 text-sm text-slate-600">
              <li>
                <strong className="text-slate-800">{tx({ en: "How to spot it: ", zh: "怎么区分：" }, lang)}</strong>
                {tx(
                  {
                    en: "The cashier holds a handheld barcode scanner gun or points at a small white/black counter scanner box.",
                    zh: "收银员拿着手持扫码枪，或指着柜台上的白色/黑色正方形扫码盒子。",
                  },
                  lang
                )}
              </li>
              <li>
                <strong className="text-slate-800">{tx({ en: "Common places: ", zh: "常见场景：" }, lang)}</strong>
                {tx({ en: "7-Eleven, FamilyMart, Lawson, supermarkets, chain stores, malls, pharmacies.", zh: "7-Eleven/全家/罗森便利店、大型超市、连锁品牌、商场专柜、药店。" }, lang)}
              </li>
              <li>
                <strong className="text-slate-800">{tx({ en: "How to pay: ", zh: "操作步骤：" }, lang)}</strong>
                {tx(
                  {
                    en: "Tap 'Pay/Receive' (Alipay) or 'Money' (WeChat) → hold your barcode/QR toward the scanner → hear a beep — done! No need to type any amount.",
                    zh: "点「收付款（Pay/Receive）」或微信「付款码（Money）」→ 把手机亮给扫码枪/扫码盒 → 滴一声自动扣款，无需自己输金额。",
                  },
                  lang
                )}
              </li>
            </ul>
          </div>

          {/* Scenario 3: Personal QR Code Warning -> Carry Cash! */}
          <div className="flex flex-col rounded-2xl border-2 border-red-300 bg-red-50/40 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-red-600 px-2.5 py-0.5 text-xs font-bold text-white">
                {tx({ en: "Scenario 3 · Personal QR Trap", zh: "情况 3 · 个人收款码（需备现金）" }, lang)}
              </span>
              <Banknote className="h-5 w-5 text-red-600" />
            </div>

            {/* Visual diagram */}
            <div className="my-4 flex items-center justify-center gap-3 rounded-xl bg-red-100/70 p-4 text-center">
              <div className="rounded-lg border border-red-300 bg-white px-3 py-2 shadow-xs">
                <div className="text-[10px] font-bold text-red-700">PERSONAL QR</div>
                <div className="mt-1 text-xs font-semibold text-slate-800">👤 Avatar QR</div>
              </div>
              <span className="text-lg font-bold text-red-600">✕</span>
              <div className="rounded-lg border-2 border-emerald-600 bg-white px-3 py-2 shadow-xs">
                <div className="text-[10px] font-bold text-emerald-700">USE CASH</div>
                <div className="mt-1 text-xs font-semibold text-emerald-700">💵 ¥300–500</div>
              </div>
            </div>

            <h3 className="text-lg font-bold text-red-900">
              {tx({ en: "Personal QR Codes Often Reject Foreign Cards!", zh: "个人支付宝/微信收款码无法用外卡扫码！" }, lang)}
            </h3>
            <ul className="mt-3 flex-1 space-y-2 text-sm text-slate-700">
              <li>
                <strong className="text-slate-900">{tx({ en: "How to spot it: ", zh: "怎么区分：" }, lang)}</strong>
                {tx(
                  {
                    en: "The QR has a person's profile photo in the center or shows a personal nickname rather than a registered business name — often shown on a driver's or vendor's own phone.",
                    zh: "二维码正中间是个人微信/支付宝头像，或显示私人昵称而非正规商户名（常见于摊主/包车司机用自己手机亮出的收款码）。",
                  },
                  lang
                )}
              </li>
              <li>
                <strong className="text-slate-900">{tx({ en: "Why it fails: ", zh: "为什么付不了：" }, lang)}</strong>
                {tx(
                  {
                    en: "Regulations block foreign credit/debit cards from personal P2P transfers. Scanning it triggers 'International cards not supported for this transaction'.",
                    zh: "监管规定境外银行卡仅支持商户消费，不能用于个人转账。扫码时会直接弹窗报错“不支持使用国际银行卡”。",
                  },
                  lang
                )}
              </li>
              <li>
                <strong className="text-red-800">{tx({ en: "Always carry ¥300–¥500 cash: ", zh: "务必随身备 ¥300–¥500 现金：" }, lang)}</strong>
                {tx(
                  {
                    en: "Cash solves this immediately (street snacks, bamboo rafts, local markets, private drivers). Or hand cash to your hotel front desk and ask them to transfer the same RMB into your verified Alipay/WeChat Balance.",
                    zh: "街边小吃、菜市场、景区竹筏、个体包车遇个人码直接给现金最省事；或请酒店前台收你现金、转等额人民币到你已实名认证的支付宝/微信“余额”，有了本地余额就能扫一切个人码。",
                  },
                  lang
                )}
              </li>
            </ul>

            <button
              type="button"
              onClick={() => sc.show(personalQrCard)}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-3.5 py-2.5 text-xs font-semibold text-white hover:bg-red-700"
            >
              <Maximize2 className="h-3.5 w-3.5" />
              {tx({ en: "Show Chinese Cash-Payment Card", zh: "全屏展示「个人码改付现金」中文沟通卡" }, lang)}
            </button>
          </div>
        </div>
      </div>

      <ShowCard content={sc.content} close={sc.close} />
    </div>
  );
}
