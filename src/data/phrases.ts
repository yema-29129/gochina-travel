import { L, t2 } from "@/lib/i18n";

export type PhraseCategory = "food" | "transport" | "shopping" | "hotel" | "emergency";

export interface Phrase {
  id: string;
  category: PhraseCategory;
  meaning: L;
  zh: string;
  pinyin: string;
}

export const PHRASE_CATEGORIES: { id: "all" | PhraseCategory; label: L }[] = [
  { id: "all", label: t2("All", "全部") },
  { id: "food", label: t2("Food & Dining", "餐饮点菜") },
  { id: "transport", label: t2("Transport", "交通出行") },
  { id: "shopping", label: t2("Shopping & Pay", "购物与支付") },
  { id: "hotel", label: t2("Hotel", "酒店住宿") },
  { id: "emergency", label: t2("Emergencies", "紧急求助") },
];

export const PHRASES: Phrase[] = [
  /* ---------------- FOOD & DINING (8) ---------------- */
  {
    id: "food-menu",
    category: "food",
    meaning: t2("Do you have a menu with pictures or English?", "请问有带图片或英文的菜单吗？"),
    zh: "请问有带图片或英文的菜单吗？",
    pinyin: "Qǐngwèn yǒu dài túpiàn huò Yīngwén de càidān ma?",
  },
  {
    id: "food-not-spicy",
    category: "food",
    meaning: t2("Not spicy at all, please.", "请做完全不辣的，谢谢。"),
    zh: "请做完全不辣的，一点辣椒都不要，谢谢！",
    pinyin: "Qǐng zuò wánquán bù là de, yīdiǎn làjiāo dōu bùyào, xièxie!",
  },
  {
    id: "food-mild",
    category: "food",
    meaning: t2("Just a little spicy, please.", "请做微辣就可以了。"),
    zh: "请做微辣就可以了，少放辣椒。",
    pinyin: "Qǐng zuò wēilà jiù kěyǐ le, shǎo fàng làjiāo.",
  },
  {
    id: "food-no-cilantro",
    category: "food",
    meaning: t2("No cilantro / coriander, please.", "不要香菜，谢谢。"),
    zh: "不要放香菜，谢谢！",
    pinyin: "Bùyào fàng xiāngcài, xièxie!",
  },
  {
    id: "food-vegetarian",
    category: "food",
    meaning: t2("I am vegetarian (no meat, no fish, no lard).", "我是素食者（不吃肉、鱼和猪油）。"),
    zh: "我吃素，不吃任何肉和鱼虾，也不要用猪油炒菜。",
    pinyin: "Wǒ chīsù, bù chī rènhé ròu hé yúxiā, yě bùyào yòng zhūyóu.",
  },
  {
    id: "food-cold-water",
    category: "food",
    meaning: t2("Could I have cold water / ice water, please?", "请给我一杯冰水或冷水。"),
    zh: "请问可以给我一杯冷水（或加冰的水）吗？",
    pinyin: "Qǐngwèn kěyǐ gěi wǒ yībēi lěngshuǐ ma?",
  },
  {
    id: "food-bill",
    category: "food",
    meaning: t2("Check / bill, please!", "服务员，买单！"),
    zh: "服务员，买单！谢谢。",
    pinyin: "Fúwùyuán, mǎidān! Xièxie.",
  },
  {
    id: "food-restroom",
    category: "food",
    meaning: t2("Where is the restroom / toilet?", "请问洗手间在哪里？"),
    zh: "请问洗手间在哪里？",
    pinyin: "Qǐngwèn xǐshǒujiān zài nǎlǐ?",
  },

  /* ---------------- TRANSPORT (7) ---------------- */
  {
    id: "tr-meter",
    category: "transport",
    meaning: t2("Please use the taxi meter.", "师傅请打表（按计价器收费）。"),
    zh: "师傅您好，请打表，谢谢！",
    pinyin: "Shīfu nínhǎo, qǐng dǎbiǎo, xièxie!",
  },
  {
    id: "tr-stop-here",
    category: "transport",
    meaning: t2("Please stop right here.", "前面方便的地方停一下就可以。"),
    zh: "师傅，前面方便的地方停一下就可以了，谢谢！",
    pinyin: "Shīfu, qiánmiàn fāngbiàn de dìfang tíng yīxià jiù kěyǐ le, xièxie!",
  },
  {
    id: "tr-airport",
    category: "transport",
    meaning: t2("Please take me to the airport (International Departures).", "请送我去机场（国际出发）。"),
    zh: "请送我去机场的【国际出发】航站楼，谢谢！",
    pinyin: "Qǐng sòng wǒ qù jīchǎng de Guójì Chūfā, xièxie!",
  },
  {
    id: "tr-manual-gate",
    category: "transport",
    meaning: t2("Where is the manual passport gate for the train?", "请问外国护照人工检票口在哪里？"),
    zh: "请问持外国护照的人工检票通道在哪里？",
    pinyin: "Qǐngwèn chí wàiguó hùzhào de réngōng jiǎnpiào tōngdào zài nǎlǐ?",
  },
  {
    id: "tr-metro",
    category: "transport",
    meaning: t2("Where is the nearest subway / metro station?", "请问最近的地铁站在哪里？"),
    zh: "请问最近的地铁站在哪里？",
    pinyin: "Qǐngwèn zuìjìn de dìtiězhàn zài nǎlǐ?",
  },
  {
    id: "tr-right-train",
    category: "transport",
    meaning: t2("Does this train / bus go to this place?", "请问这趟车去这个地方吗？"),
    zh: "请问这趟车到这个地方吗？",
    pinyin: "Qǐngwèn zhè tàng chē dào zhège dìfang ma?",
  },
  {
    id: "tr-luggage-storage",
    category: "transport",
    meaning: t2("Where can I store my luggage?", "请问哪里可以寄存行李？"),
    zh: "请问这里哪里可以寄存行李？",
    pinyin: "Qǐngwèn zhèlǐ nǎlǐ kěyǐ jìcún xíngli?",
  },

  /* ---------------- SHOPPING & PAYMENTS (7) ---------------- */
  {
    id: "sh-how-much",
    category: "shopping",
    meaning: t2("How much is this?", "请问这个多少钱？"),
    zh: "请问这个多少钱？",
    pinyin: "Qǐngwèn zhège duōshǎo qián?",
  },
  {
    id: "sh-alipay",
    category: "shopping",
    meaning: t2("Can I pay with Alipay or WeChat Pay?", "可以用支付宝或微信支付吗？"),
    zh: "请问可以用支付宝或微信扫码付款吗？",
    pinyin: "Qǐngwèn kěyǐ yòng Zhīfùbǎo huò Wēixìn fùkuǎn ma?",
  },
  {
    id: "sh-split-bill",
    category: "shopping",
    meaning: t2("Can I pay in two separate transactions under ¥200?", "可以拆成两笔 200 元以内付款吗？"),
    zh: "您好，外卡单笔超过 200 元有手续费，请问可以拆成两笔分开扫码吗？谢谢！",
    pinyin: "Qǐngwèn kěyǐ chāichéng liǎng bǐ fēnkāi sǎomǎ ma? Xièxie!",
  },
  {
    id: "sh-cash",
    category: "shopping",
    meaning: t2("Can I pay in RMB cash?", "请问可以付人民币现金吗？"),
    zh: "请问可以付人民币现金吗？",
    pinyin: "Qǐngwèn kěyǐ fù Rénmínbì xiànjīn ma?",
  },
  {
    id: "sh-tax-refund",
    category: "shopping",
    meaning: t2("Do you offer tourist tax refund (Tax-Free)?", "请问这里可以办离境退税吗？"),
    zh: "您好，我是外国游客，请问这家店可以办理【离境退税 / 即买即退】吗？",
    pinyin: "Qǐngwèn zhè jiā diàn kěyǐ bànlǐ líjìng tuìshuì ma?",
  },
  {
    id: "sh-cheaper",
    category: "shopping",
    meaning: t2("Too expensive — can you give a better price?", "太贵了，能便宜一点吗？"),
    zh: "太贵了，可以便宜一点吗？",
    pinyin: "Tài guì le, kěyǐ piányi yīdiǎn ma?",
  },
  {
    id: "sh-no-thanks",
    category: "shopping",
    meaning: t2("Just looking, thank you.", "我先随便看看，谢谢。"),
    zh: "我先随便看看，谢谢！",
    pinyin: "Wǒ xiān suíbiàn kànkan, xièxie!",
  },

  /* ---------------- HOTEL (6) ---------------- */
  {
    id: "ht-checkin",
    category: "hotel",
    meaning: t2("I have a reservation. Here is my passport.", "我有预订，这是我的护照。"),
    zh: "您好，我预订了房间，来办理入住，这是我的护照。",
    pinyin: "Nínhǎo, wǒ yùdìng le fángjiān, lái bànlǐ rùzhù, zhè shì wǒ de hùzhào.",
  },
  {
    id: "ht-store-bags",
    category: "hotel",
    meaning: t2("Can I leave my luggage here after check-out / before check-in?", "请问可以免费寄存行李吗？"),
    zh: "请问可以先把行李寄存在前台吗？我晚点回来取。",
    pinyin: "Qǐngwèn kěyǐ xiān bǎ xíngli jìcún zài qiántái ma?",
  },
  {
    id: "ht-wifi",
    category: "hotel",
    meaning: t2("What is the Wi-Fi name and password?", "请问房间 Wi-Fi 名称和密码是什么？"),
    zh: "请问 Wi-Fi 名称和密码是什么？",
    pinyin: "Qǐngwèn Wi-Fi míngchēng hé mìmǎ shì shénme?",
  },
  {
    id: "ht-address-card",
    category: "hotel",
    meaning: t2("Could you write down the hotel's Chinese address for taxis?", "请问能给我一张写有酒店中文地址的名片吗？"),
    zh: "请问能给我一张写有酒店中文地址的卡片吗？打车用，谢谢！",
    pinyin: "Qǐngwèn néng gěi wǒ yī zhāng jiǔdiàn Zhōngwén dìzhǐ kǎpiàn ma?",
  },
  {
    id: "ht-delivery",
    category: "hotel",
    meaning: t2("I ordered food delivery / a package. Can I pick it up here?", "我点了外卖/快递，请问放在哪里取？"),
    zh: "您好，我点了外卖/快递，请问会送到房间还是放在大堂外卖柜？",
    pinyin: "Nínhǎo, wǒ diǎn le wàimài, qǐngwèn zài nǎlǐ qǔ?",
  },
  {
    id: "ht-checkout",
    category: "hotel",
    meaning: t2("I'd like to check out, please.", "您好，我要办理退房。"),
    zh: "您好，我要办理退房，这是房卡，谢谢！",
    pinyin: "Nínhǎo, wǒ yào bànlǐ tuìfáng, zhè shì fángkǎ, xièxie!",
  },

  /* ---------------- EMERGENCIES (6) ---------------- */
  {
    id: "em-help",
    category: "emergency",
    meaning: t2("Please help me! I don't speak Chinese.", "请帮帮我！我不会说中文。"),
    zh: "您好，请帮帮我！我是外国游客，不会说中文。",
    pinyin: "Nínhǎo, qǐng bāngbang wǒ! Wǒ bù huì shuō Zhōngwén.",
  },
  {
    id: "em-police",
    category: "emergency",
    meaning: t2("Please call the police (110).", "请帮我报警（110）。"),
    zh: "紧急情况！请帮我拨打 110 报警，谢谢！",
    pinyin: "Jǐnjí qíngkuàng! Qǐng bāng wǒ bōdǎ yāo-yāo-líng bàojǐng!",
  },
  {
    id: "em-ambulance",
    category: "emergency",
    meaning: t2("Please call an ambulance (120)!", "请帮我叫救护车（120）！"),
    zh: "紧急求助！请帮我拨打 120 叫救护车！",
    pinyin: "Jǐnjí qiúzhù! Qǐng bāng wǒ bōdǎ yāo-èr-líng jiào jiùhùchē!",
  },
  {
    id: "em-lost-passport",
    category: "emergency",
    meaning: t2("I lost my passport. Where is the nearest police station?", "我的护照丢了，最近的派出所在哪里？"),
    zh: "我的护照丢了！请问最近的派出所在哪里？我需要开具《护照报失证明》。",
    pinyin: "Wǒ de hùzhào diū le! Qǐngwèn zuìjìn de pàichūsuǒ zài nǎlǐ?",
  },
  {
    id: "em-lost-phone",
    category: "emergency",
    meaning: t2("I left my phone / bag in the taxi.", "我把手机/包落在出租车上了。"),
    zh: "我把手机/包落在刚才的出租车上了，请问能帮我联系出租车公司或打 12345 吗？",
    pinyin: "Wǒ bǎ shǒujī là zài chūzūchē shàng le, qǐng bāngbang wǒ!",
  },
  {
    id: "em-pharmacy",
    category: "emergency",
    meaning: t2("Where is the nearest pharmacy?", "请问最近的药店在哪里？"),
    zh: "请问最近的药店（大药房）在哪里？",
    pinyin: "Qǐngwèn zuìjìn de yàodiàn zài nǎlǐ?",
  },
];
