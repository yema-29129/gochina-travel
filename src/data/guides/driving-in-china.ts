import type { Guide } from "@/data/types";
import { t2 } from "@/lib/i18n";

const guide: Guide = {
  slug: "driving-in-china",
  category: "transport",
  icon: "car",
  title: t2("Driving in China as a Foreigner: Temporary Permit (No Test, 1 Hour)", "外国人在中国自驾攻略：免考 1 小时办临时驾照（不认国际驾照）"),
  seoTitle: t2(
    "Can Foreigners Drive in China? Temporary Driving Permit Guide (No IDP, 2026)",
    "外国人在中国能自驾吗？不认国际驾照 IDP、1 小时免考办临时驾驶许可攻略（2026）"
  ),
  summary: t2(
    "China does NOT accept an International Driving Permit (IDP). Learn how foreigners get a legal ¥10 Temporary Driving Permit in 1 hour at airports with no test.",
    "中国大陆不承认国际驾照（IDP）！详解外国人如何在浦东/北京机场或三亚车管所免考 1 小时、仅花 10 元办合法临时驾照并租车自驾。"
  ),
  updated: "2026-11-24",
  readMin: 6,
  keyPoints: [
    t2(
      "China does NOT recognize the International Driving Permit (IDP). Driving with only a foreign license + IDP is unlicensed driving and can result in up to 15 days of administrative detention.",
      "中国大陆不承认“国际驾照（IDP）”。持本国驾照加 IDP 直接开车属于无证驾驶，最高可处 15 日行政拘留。"
    ),
    t2(
      "Short-term visitors can legally drive by getting a Temporary Driving Permit (临时机动车驾驶许可)—NO written test, NO road test, ~1 hour, and only ¥10.",
      "短期游客只需申领《临时机动车驾驶许可》即可合法自驾——完全免笔试、免路考，约 1 小时拿证，工本费仅 10 元。"
    ),
    t2(
      "Apply right after landing at Shanghai Pudong Airport (PVG T1/T2), Beijing Capital (PEK) / Daxing (PKX) airport service points, or Sanya / Haikou vehicle administration offices.",
      "落地最快可办地点：上海浦东机场 T1/T2 车管窗口、北京首都/大兴机场服务点，或三亚/海口车管所。"
    ),
    t2(
      "Valid for C1/C2 small passenger cars for up to 3 months (matching your stay); rent legally nationwide from eHi Car Rental (一嗨租车) or Zuche (神州租车).",
      "准驾小型客车（C1/C2），有效期与停留期一致（最长 3 个月；超 3 个月需考科目一笔试）；持证可在一嗨或神州租车合法提车。"
    ),
  ],
  sections: [
    {
      id: "idp-warning",
      heading: t2("Warning: China does NOT recognize International Driving Permits (IDP)", "红线警告：中国大陆绝对不承认国际驾照（IDP）"),
      blocks: [
        {
          type: "callout",
          tone: "danger",
          title: t2("Driving with an IDP = unlicensed driving", "持 IDP 开车等同于无证驾驶"),
          text: t2(
            "Mainland China is NOT a contracting party to the UN Convention on Road Traffic. An International Driving Permit (IDP) issued in the US, UK, EU, Australia or anywhere else is completely invalid in Mainland China. Driving on a foreign license + IDP is treated as unlicensed driving, punishable by fines and up to 15 days of administrative detention—and voids all car insurance.",
            "中国大陆不是《联合国道路交通公约》缔约方，因此绝对不承认任何国家签发的“国际驾照（IDP）”。拿着本国驾照加 IDP 在中国大陆开车属于无证驾驶，不仅保险全部失效，还可处罚款及最高 15 日行政拘留。"
          ),
        },
        t2b(
          "That does NOT mean you cannot road-trip Western Sichuan, Xinjiang's Duku Highway or Hainan's coastal loop. You simply need China's official paper Temporary Driving Permit (临时机动车驾驶许可), which is fast, cheap and requires zero tests for stays of 3 months or less.",
          "但这并不意味着外国人不能自驾川西、新疆独库公路或海南环岛。你只需要办理中国交警核发的纸质《临时机动车驾驶许可》，停留 3 个月以内完全免考、费用极低、1 小时即可拿证。"
        ),
      ],
    },
    {
      id: "where-and-documents",
      heading: t2("Where to apply & the 4 required documents", "最快办理地点与必备 4 样材料"),
      blocks: [
        t2b(
          "The easiest places to get your Temporary Driving Permit on arrival—without navigating a downtown DMV—are:",
          "最省事的落地即办地点（免去市区找车管所折腾）包括："
        ),
        {
          type: "list",
          items: [
            t2(
              "Shanghai Pudong International Airport (PVG): T1 and T2 vehicle administration windows next to the International Visitor Service Station.",
              "上海浦东国际机场（PVG）：T1 / T2 境外人员服务站旁的车管窗口。"
            ),
            t2(
              "Beijing Capital (PEK) & Beijing Daxing (PKX) Airports: designated airport traffic/vehicle service desks.",
              "北京首都国际机场（PEK）与北京大兴国际机场（PKX）服务点。"
            ),
            t2(
              "Sanya & Haikou (Hainan): local Vehicle Administration Offices (车管所)—popular for Hainan island road trips.",
              "三亚 / 海口车管所（海南环岛自驾游客最常用）。"
            ),
          ],
        },
        t2b(
          "Bring these exact 4 items:",
          "现场办理须带齐以下 4 样材料："
        ),
        {
          type: "steps",
          items: [
            t2(
              "Original passport with your valid Chinese visa or visa-free entry stamp.",
              "本人护照原件及有效签证或免签入境章。"
            ),
            t2(
              "Original valid full foreign driver's license (learner, provisional or expired licenses are NOT accepted).",
              "本人持有的有效境外正式驾照原件（实习驾照或过期驾照不可）。"
            ),
            t2(
              "Certified Chinese translation of your foreign driver's license: arrange in advance through a Chinese notary office or qualified translation agency—major rental agencies like eHi Car Rental (一嗨租车) and Zuche (神州租车) also offer free or low-cost compliant translation assistance.",
              "境外驾照的合规中文翻译件：可在国内公证处或有资质的翻译公司提前做好，一嗨租车（eHi）或神州租车（Zuche）也提供免费或低价合规翻译协助。"
            ),
            t2(
              "2–3 one-inch color passport photos with a white background (self-service photo booths are available on site).",
              "一寸白底彩色免冠证件照 2–3 张（现场自助照相机可直接拍摄）。"
            ),
          ],
        },
        { type: "ad" },
      ],
    },
    {
      id: "process-validity-rental",
      heading: t2("1-hour process, C1/C2 validity rules & renting a car", "1 小时流程、C1/C2 有效期规则与租车"),
      blocks: [
        {
          type: "table",
          head: [t2("Item", "项目"), t2("Official Rule", "官方标准")],
          rows: [
            [
              t2("Tests required", "考试要求"),
              t2("NONE for stays ≤3 months (no written exam, no road test). Just watch a 30-minute English Chinese traffic rules video on site.", "停留不超过 3 个月完全免笔试、免路考；仅需在现场观看 30 分钟中国交规英文宣传片。"),
            ],
            [
              t2("Issuance fee", "工本费"),
              t2("¥10 RMB (~US$1.40).", "仅 10 元人民币（约 1.4 美元）。"),
            ],
            [
              t2("Processing time", "办理耗时"),
              t2("About 1 hour total, issued on the spot.", "全程约 1 小时，现场拿证。"),
            ],
            [
              t2("Permitted vehicle class", "准驾车型"),
              t2("C1 (manual) or C2 (automatic) small passenger cars (matching your home license).", "小型手动挡（C1）或自动挡（C2）载客汽车（与境外原驾照对应）。"),
            ],
            [
              t2("Validity period", "有效期规则"),
              t2("Matches your authorized stay: 30-day visa-free gets 30 days; visa stays get up to 3 months. If your visa stay exceeds 3 months and you want a longer permit, you must pass the Subject 1 written traffic test.", "与本次入境停留期一致：30 天免签给 30 天，持签证最长可给 3 个月；若签证停留期超过 3 个月则需参加科目一交规笔试。"),
            ],
          ],
        },
        t2b(
          "Once you have the paper Temporary Driving Permit in hand, you can legally pick up a rental car anywhere in China from major nationwide chains such as eHi Car Rental (一嗨租车) or Zuche / CAR Inc. (神州租车). Use AMap Global (高德地图英文版) or Apple Maps for turn-by-turn navigation, and remember China drives on the right side of the road.",
          "拿到这张纸质临时驾照后，即可在一嗨租车（eHi Car Rental）或神州租车（Zuche）等全国连锁品牌合法提车自驾全中国。导航请用高德地图英文版（AMap Global）或 Apple Maps，中国靠右行驶。"
        ),
        {
          type: "callout",
          tone: "tip",
          text: t2(
            "Do you even need a car? For Beijing, Shanghai, Xi'an, Chengdu, Chongqing and Hangzhou, China's high-speed trains and DiDi taxis are faster, cheaper and zero-stress. Renting a car makes the most sense for scenic road-trip regions like Western Sichuan, Xinjiang, Yunnan backroads or Hainan.",
            "真的需要租车吗？在北京、上海、西安、成都、重庆、杭州等大城市，高铁加滴滴更快、更便宜也更省心；租车自驾最适合川西、新疆、云南秘境或海南环岛等公路风景线。"
          ),
        },
      ],
    },
  ],
  faq: [
    {
      q: t2("Can I drive in China with an International Driving Permit (IDP)?", "拿国际驾照（IDP）能在中国开车吗？"),
      a: t2(
        "No. Mainland China does not recognize the IDP. You must obtain a Chinese Temporary Driving Permit first.",
        "不能。中国大陆不承认国际驾照（IDP），必须先办理中国《临时机动车驾驶许可》。"
      ),
    },
    {
      q: t2("Do I have to take a written or driving test for the Temporary Driving Permit?", "办中国临时驾照要考笔试或路考吗？"),
      a: t2(
        "No—if your permit is for 3 months or less, there is no written test and no road test. You only watch a 30-minute English road-safety video.",
        "不用——3 个月以内的临时驾照免笔试、免路考，只需观看 30 分钟英文中国交规宣传片。"
      ),
    },
    {
      q: t2("Can I get the Temporary Driving Permit if I enter on 30-day visa-free or 240-hour transit?", "30 天免签或 240 小时过境免签入境也能办临时驾照吗？"),
      a: t2(
        "Yes, as long as you have a valid entry stamp and a valid full foreign driver's license. Your permit validity will match your permitted stay (e.g. 30 days for 30-day visa-free).",
        "可以，只要有合法入境章和有效境外正式驾照即可办理，有效期与本次准许停留期一致（例如 30 天免签给 30 天）。"
      ),
    },
    {
      q: t2("Which car rental companies in China accept foreign tourists?", "中国哪些租车公司接待外国游客？"),
      a: t2(
        "eHi Car Rental (一嗨租车) and Zuche (神州租车) are the largest nationwide chains that accept foreigners holding a passport and Chinese Temporary Driving Permit.",
        "一嗨租车（eHi）和神州租车（Zuche）是全国最大的两家支持外国人持护照及中国临时驾照提车的正规连锁租车公司。"
      ),
    },
  ],
  related: ["airports", "metro-didi-maps", "high-speed-trains", "shared-bikes", "visa-free-countries"],
};

function t2b(en: string, zh: string) {
  return { type: "p", text: t2(en, zh) } as const;
}

export default guide;
