import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "food-ordering-allergies",
  category: "food",
  icon: "food",
  title: t2("Ordering Food & Food Allergies in China: Chef-Proof Chinese Cards", "在中国点餐与食物过敏指南：主厨级中文忌口卡"),
  seoTitle: t2(
    "China Food Allergy Cards & Ordering Guide: Peanut, Gluten, Vegan & Spice (2026)",
    "中国食物过敏卡与点餐指南：花生、麸质酱油、纯素与免辣（2026）"
  ),
  summary: t2(
    "Why generic translation apps fail for peanut oil and gluten in soy sauce, plus 13 chef-proof Chinese allergy and diet cards and QR table ordering tips.",
    "为什么普通翻译软件对花生油和酱油麸质不管用，附 13 条主厨级中文过敏与忌口对照表、全屏闪卡及扫码点餐技巧。"
  ),
  updated: "2026-11-24",
  readMin: 8,
  keyPoints: [
    t2(
      "Machine translation fails in Chinese kitchens: chefs rarely know the medical word 'gluten' (麸质) and still pour wheat-brewed soy sauce into the wok.",
      "机翻在中国后厨经常失灵：厨师很少知道“麸质”这个医学词，转头仍会把含小麦酿造的生抽酱油倒进锅里。"
    ),
    t2(
      "Hidden allergens are everywhere: peanut oil in stir-fries, oyster sauce in 'vegetable' dishes, pork lard in noodles and greens, and wheat in soy sauce, doubanjiang and dark vinegar.",
      "隐形过敏原无处不在：炒菜里的花生油、素菜里的蚝油、面条和青菜里的猪油，以及生抽、老抽、豆瓣酱和陈醋里的小麦。"
    ),
    t2(
      "Show a chef-proof Chinese card that names the exact banned sauces and oils, not just Western medical labels.",
      "出示主厨级中文卡片，直接写明禁用的具体调料和油品，而不仅是西方医学术语。"
    ),
    t2(
      "Most restaurants use QR codes stuck to the table—scan with Alipay or WeChat, use the built-in translator, and show your allergy card before the kitchen starts cooking.",
      "大多数餐厅采用桌面二维码点单——用支付宝或微信扫码并开启内置翻译，但在后厨下锅前务必把忌口卡给服务员看。"
    ),
  ],
  sections: [
    {
      id: "why-machine-translation-fails",
      heading: t2("Why generic translation apps can put you in the hospital", "为什么普通翻译软件可能害你进医院"),
      blocks: [
        t2b(
          "If you type 'I am allergic to gluten' into a generic translation app, it outputs '我对麸质过敏'. In a small noodle shop or neighborhood stir-fry restaurant, the wok chef has never heard the medical word 麸质 (gluten)—and promptly ladles regular light soy sauce (生抽), which is brewed with wheat, straight into your dish.",
          "如果你在普通翻译软件里输入“I am allergic to gluten”，它会翻成“我对麸质过敏”。在普通小面馆或街边炒菜馆里，掌勺师傅根本不知道“麸质”两个字是什么意思，转头就舀了一大勺含小麦酿造的生抽酱油倒进锅里。"
        ),
        t2b(
          "The same trap hits peanut, shellfish, vegan and halal diners. Peanut oil (花生油) is a default cooking oil in southern China; oyster sauce (蚝油) and chicken bouillon (鸡精) are routinely added to plain stir-fried greens; pork lard (猪油) is used to make vegetables glossy and soup bases rich.",
          "花生过敏、海鲜过敏、纯素和清真游客也会踩进同样的坑。花生油在中国南方是常见炒菜油；蚝油和鸡精经常被加进看似纯素的清炒时蔬里；猪油常被用来让青菜更亮、汤底更香。"
        ),
        {
          type: "callout",
          tone: "danger",
          title: t2("The golden rule for safe dining", "安全就餐铁律"),
          text: t2(
            "Translate Western medical or dietary labels into the exact bottles and oils sitting next to the chef's stove—and always ask for a freshly washed wok and spatula if your allergy is life-threatening.",
            "把西方医学或饮食术语，直接翻译成厨师灶台边天天摸得到的具体调料和油品禁用清单；如果过敏危及生命，务必同时要求用洗干净的炒锅和锅铲单独制作。"
          ),
        },
      ],
    },
    {
      id: "chef-proof-table",
      heading: t2("Complete 13-row chef-proof allergy, diet & taste dictionary", "完整 13 项主厨级过敏、忌口与口味对照表"),
      blocks: [
        t2b(
          "Use the table below to build your exact kitchen instructions. You can also generate a combined full-screen card in our interactive allergy card builder.",
          "使用下表找到对应你的精准后厨指令，也可以直接用我们的交互式过敏闪卡工具一键拼成全屏大字卡。"
        ),
        {
          type: "table",
          head: [
            t2("Need / Restriction", "过敏 / 忌口 / 口味需求"),
            t2("Chef-Proof Chinese Instruction", "主厨级精准中文指令"),
            t2("Polite Pinyin to Say", "礼貌拼音提示"),
          ],
          rows: [
            [
              t2("Severe Peanut Allergy (incl. Oil)", "致命花生过敏（含花生油）"),
              "致命花生过敏：严禁放【花生、花生碎、花生酱】，且绝对不能使用花生油炒菜！请务必用洗干净的炒锅和锅铲单独制作，误食一点点就会休克送医！",
              "Wǒ duì huāshēng hé huāshēngyóu yánzhòng guòmǐn!",
            ],
            [
              t2("Tree Nut Allergy", "严重坚果过敏"),
              "严重坚果过敏：严禁放任何【核桃、腰果、杏仁、巴旦木、松子、开心果、夏威夷果】及坚果碎！",
              "Bùnéng chī rènhé jiānguǒ (hétao, yāoguǒ)!",
            ],
            [
              t2("Celiac / Strict Gluten-Free", "麦麸 / 小麦严重过敏（无麸质）"),
              "麦麸/小麦严重过敏：绝对不能吃【面粉、面条、饺子皮、馒头、面包糠、油条】，且炒菜严禁放普通酱油（生抽/老抽）、豆瓣酱、甜面酱、蚝油和陈醋！请仅用【盐、白糖、大米醋和纯植物油】调味，勾芡仅限纯玉米/土豆淀粉！",
              "Wǒ bùnéng chī miànfěn hé pǔtōng jiàngyóu!",
            ],
            [
              t2("Crustacean / Shellfish Allergy", "海鲜甲壳类严重过敏"),
              "海鲜甲壳类严重过敏：严禁放【虾、虾仁、虾皮、虾米、螃蟹、贝类、生蚝】，且绝对不能放蚝油、虾酱、鱼露或海鲜汤底！",
              "Wǒ duì hǎixiān, xiā hé háoyóu guòmǐn!",
            ],
            [
              t2("Sesame Allergy", "芝麻严重过敏"),
              "芝麻严重过敏：菜里和表面严禁撒【白芝麻、黑芝麻】，出锅前绝对不能淋香油（麻油）或芝麻酱！",
              "Bùnéng fàng zhīma hé xiāngyóu (máyóu)!",
            ],
            [
              t2("Dairy / Milk Allergy", "乳制品过敏"),
              "乳制品过敏：不能吃任何【牛奶、奶油、黄油、芝士/奶酪、炼乳、奶粉】。",
              "Bùnéng chī niúnǎi, huángyóu hé zhīshì.",
            ],
            [
              t2("Egg Allergy", "蛋类过敏"),
              "蛋类过敏：不能吃【鸡蛋、鸭蛋、鹌鹑蛋、皮蛋、咸蛋黄】以及含蛋液的挂糊油炸食品和蛋黄酱。",
              "Bùnéng chī jīdàn hé yādàn.",
            ],
            [
              t2("Halal / No Pork or Lard", "清真饮食禁忌（无猪肉猪油）"),
              "清真饮食禁忌：我不吃【猪肉、排骨、培根、火腿肠、肉松】，且炒蔬菜和煮汤绝对不能使用猪油或猪骨汤，请用纯植物油！",
              "Wǒ bù chī zhūròu hé zhūyóu, qǐng yòng zhíwùyóu.",
            ],
            [
              t2("Strict Vegan (Plant-Based)", "严格纯素食"),
              "严格纯素食：我不吃任何【猪肉、牛羊肉、鸡鸭肉（哪怕一点点肉末臊子都不行！）、鱼虾海鲜、鸡蛋、奶制品】，且炒菜不能用猪油、蚝油、鸡精或肉骨高汤！",
              "Wǒ chī chúnsù, yīdiǎn ròumò, zhūyóu, háoyóu dōu bùnéng fàng!",
            ],
            [
              t2("Zero Spicy (No Chili at All)", "完全免辣"),
              "完全免辣：我一点辣都不能吃，请不要放任何【干辣椒、鲜辣椒、辣椒油、红油、豆瓣酱和花椒】！",
              "Qǐng zuò de wánquán bù là, yīdiǎn làjiāo dōu bùyào!",
            ],
            [
              t2("Slightly Spicy (Tourist Mild)", "广东微辣 / 少少辣"),
              "广东微辣/少少辣：只能接受一点点微辣提味，请少放辣椒。",
              "Zhǐyào yīdiǎndiǎn wēilà, xièxie!",
            ],
            [
              t2("No Cilantro / Coriander", "不要香菜"),
              "不要香菜：出锅请绝对不要撒【香菜（芫荽）】！",
              "Qǐng bùyào fàng xiāngcài!",
            ],
            [
              t2("No Added MSG", "不要味精"),
              "请尽量不要额外放【味精】。",
              "Qǐng bùyào fàng wèijīng.",
            ],
          ],
        },
        { type: "tool", tool: "allergy-card" },
        { type: "ad" },
      ],
    },
    {
      id: "ready-to-show-cards",
      heading: t2("Tap-to-enlarge cards for the 4 most urgent restrictions", "4 大最高频忌口一键全屏出示卡"),
      blocks: [
        t2b(
          "Tap any card below to open it full-screen and hand your phone directly to the waiter or chef.",
          "点击下方任意卡片即可全屏放大，直接递给服务员或厨师看。"
        ),
        {
          type: "show",
          zh: "您好！我有致命花生过敏：严禁放【花生、花生碎、花生酱】，且绝对不能使用花生油炒菜！请务必用洗干净的炒锅和锅铲单独制作，误食一点点就会休克送医！谢谢！",
          pinyin: "Nín hǎo! Wǒ duì huāshēng hé huāshēngyóu yánzhòng guòmǐn!",
          meaning: t2(
            "Severe peanut allergy: strictly no peanuts, crushed peanuts, peanut butter, or peanut oil. Please use a freshly washed wok and spatula—even a trace can cause anaphylaxis.",
            "致命花生过敏：严禁花生、花生碎、花生酱及花生油，请务必洗净锅铲单独制作，误食一点点就会休克送医。"
          ),
        },
        {
          type: "show",
          zh: "您好！我对麦麸/小麦严重过敏：绝对不能吃【面粉、面条、饺子皮、馒头、面包糠、油条】，且炒菜严禁放普通酱油（生抽/老抽）、豆瓣酱、甜面酱、蚝油和陈醋！请仅用【盐、白糖、大米醋和纯植物油】调味，勾芡仅限纯玉米/土豆淀粉！谢谢！",
          pinyin: "Nín hǎo! Wǒ bùnéng chī miànfěn hé pǔtōng jiàngyóu!",
          meaning: t2(
            "Strict celiac / gluten-free: no flour, noodles, dumpling wrappers, buns, breadcrumbs, or fried dough; strictly no regular soy sauce, doubanjiang, sweet bean sauce, oyster sauce, or aged vinegar. Season only with salt, sugar, rice vinegar, pure vegetable oil, and pure corn/potato starch.",
            "麦麸/小麦严重过敏：禁面粉面食，严禁普通生抽/老抽、豆瓣酱、甜面酱、蚝油和陈醋，仅用盐、糖、米醋、纯植物油及纯玉米/土豆淀粉。"
          ),
        },
        {
          type: "show",
          zh: "您好！我是严格纯素食：我不吃任何【猪肉、牛羊肉、鸡鸭肉（哪怕一点点肉末臊子都不行！）、鱼虾海鲜、鸡蛋、奶制品】，且炒菜不能用猪油、蚝油、鸡精或肉骨高汤！谢谢！",
          pinyin: "Nín hǎo! Wǒ chī chúnsù, yīdiǎn ròumò, zhūyóu, háoyóu dōu bùnéng fàng!",
          meaning: t2(
            "Strict vegan: no pork, beef, lamb, poultry (not even tiny minced meat toppings), seafood, eggs, or dairy, and no pork lard, oyster sauce, chicken bouillon, or meat/bone broth.",
            "严格纯素食：不吃任何肉类（含肉末臊子）、海鲜、蛋奶，且不用猪油、蚝油、鸡精或肉骨高汤。"
          ),
        },
        {
          type: "show",
          zh: "您好！请帮我做【完全免辣】：我一点辣都不能吃，请不要放任何【干辣椒、鲜辣椒、辣椒油、红油、豆瓣酱和花椒】！谢谢！",
          pinyin: "Nín hǎo! Qǐng zuò de wánquán bù là, yīdiǎn làjiāo dōu bùyào!",
          meaning: t2(
            "Zero spicy: I cannot eat any spice at all. Please do not add dried chili, fresh chili, chili oil, red oil, spicy bean paste (doubanjiang), or Sichuan peppercorn.",
            "完全免辣：一点辣都不能吃，不要放干辣椒、鲜辣椒、辣椒油、红油、豆瓣酱和花椒。"
          ),
        },
      ],
    },
    {
      id: "qr-table-ordering",
      heading: t2("How QR table ordering works in Chinese restaurants", "中国餐厅桌面扫码点单怎么用"),
      blocks: [
        t2b(
          "Even tiny neighborhood restaurants stick a QR code on the corner of every table. Many no longer hand out paper menus.",
          "就连街边小馆也在每张桌子角落贴了二维码，很多店已经不再提供纸质菜单。"
        ),
        {
          type: "steps",
          items: [
            t2(
              "Scan the table QR code using Alipay or WeChat (WeChat works at virtually 100% of restaurants; Alipay works at most chains and malls).",
              "用支付宝或微信扫桌面二维码（微信几乎覆盖 100% 餐厅，支付宝在绝大多数连锁店和商场也通用）。"
            ),
            t2(
              "Turn on built-in translation: in Alipay tap the floating Translate button; in WeChat tap the '...' menu at the top right and choose Translate.",
              "开启内置翻译：支付宝点击悬浮“翻译”按钮；微信点击右上角“...”菜单选择“翻译”。"
            ),
            t2(
              "If you have a serious allergy, do NOT just submit a QR order silently—wave a server over and show your full-screen Chinese allergy card BEFORE paying or sending the order to the kitchen.",
              "如果你有严重过敏，切勿只顾着在手机上默默下单——务必在付款或提交到后厨之前，叫住服务员并出示你的全屏中文过敏卡。"
            ),
            t2(
              "Pay inside the mini-program or at the front counter when finished. Remember that bills over ¥200 on a foreign card incur Alipay/WeChat's 3% fee unless split or paid by card.",
              "在小程序里直接付款，或吃完去前台结账。注意绑定外卡单笔超过 200 元会收 3% 平台费。"
            ),
          ],
        },
        {
          type: "callout",
          tone: "tip",
          text: t2(
            "In Sichuan and Chongqing, 'mild spicy' (微辣) to locals can still feel fiery to visitors. Ask for 'zero spicy' (完全免辣) or order a split hotpot (鸳鸯锅) with one clear broth side.",
            "在四川和重庆，本地人的“微辣”对外国游客来说可能依然很辣。建议直接要“完全免辣”，或吃火锅时点一半清汤的“鸳鸯锅”。"
          ),
        },
      ],
    },
  ],
  faq: [
    {
      q: t2("Is peanut oil widely used in China?", "中国炒菜普遍用花生油吗？"),
      a: t2(
        "Yes, especially in Guangdong, southern China and many stir-fry kitchens. Always show a peanut card that specifically bans peanut oil (花生油) and asks for a clean wok.",
        "是的，尤其在广东、南方地区和很多炒菜馆非常常见。务必出示明确禁用“花生油”且要求洗净锅铲的卡片。"
      ),
    },
    {
      q: t2("Does regular Chinese soy sauce contain gluten?", "中国普通酱油含麸质吗？"),
      a: t2(
        "Yes. Standard light soy sauce (生抽), dark soy sauce (老抽), doubanjiang and many oyster sauces contain wheat. Ask the chef to season only with salt, sugar, rice vinegar and pure vegetable oil.",
        "含。常见生抽、老抽、豆瓣酱以及不少蚝油都含小麦。请厨师仅用盐、白糖、大米醋和纯植物油调味。"
      ),
    },
    {
      q: t2("Are 'vegetarian' dishes in regular Chinese restaurants vegan?", "普通中餐馆的“素菜”是纯素吗？"),
      a: t2(
        "Often not. Stir-fried greens frequently use pork lard, oyster sauce, chicken bouillon, or a sprinkle of minced pork. Use the strict vegan card or look for Buddhist vegetarian restaurants (素食馆).",
        "往往不是。清炒时蔬常放猪油、蚝油、鸡精甚至一点肉末。请出示严格纯素卡，或寻找佛教素食馆。"
      ),
    },
    {
      q: t2("How do I find certified halal food in China?", "在中国怎么找正宗清真餐厅？"),
      a: t2(
        "Look for green signs reading 清真 (Halal). Lanzhou beef noodle shops (兰州拉面) and Xinjiang restaurants are everywhere in Chinese cities and are strictly pork-free.",
        "认准绿色“清真”招牌。兰州拉面馆和新疆菜馆遍布中国各大城市，严格不含猪肉。"
      ),
    },
  ],
  related: ["bubble-tea-coffee", "food-delivery-luggage", "alipay-wechat-pay", "safety-health", "essential-apps"],
};

function t2b(en: string, zh: string) {
  return { type: "p", text: t2(en, zh) } as const;
}

export default guide;
