import type { Guide } from "@/data/types";
import { t2, t4 } from "@/lib/i18n";

const guide: Guide = {
  slug: "china-tourist-visa-l",
  category: "visa",
  icon: "visa",
  title: t4(
    "China Tourist Visa (L) Guide 2026: COVA Form, US 10-Year Visa & Documents",
    "2026 中国旅游签证（L 签）申请完全指南：COVA 填表、美国 10 年签与材料清单",
    "中国観光ビザ（Lビザ）申請完全ガイド（2026）：30日超滞在・COVA入力・必要書類",
    "중국 관광비자(L비자) 신청 완벽 가이드 (2026): 30일 초과 체류·COVA 작성·서류"
  ),
  seoTitle: t4(
    "How to Apply for a China Tourist Visa (L) in 2026: US Citizens, 10-Year Visa & COVA Steps",
    "2026 中国 L 字旅游签证申请攻略：美国公民 10 年多次签、COVA 表单与加急费用",
    "中国Lビザ（観光ビザ）申請方法（2026）：COVAフォーム・指紋免除・必要書類と費用",
    "중국 관광비자(L비자) 발급 방법 (2026): COVA 신청서·지문 면제·서류 및 수수료"
  ),
  summary: t4(
    "Step-by-step 2026 China Tourist (L) Visa guide for US, Indian, Mexican, Filipino and long-stay travelers: COVA online form, document checklist, 10-year multiple-entry visa rules, fees, and L Visa vs 240-hour transit.",
    "专为美国、印度、墨西哥、菲律宾公民及计划停留超 30 天游客整理的 2026 中国 L 字旅游签证实操指南：COVA 网申填表、材料清单、美国 10 年多次签规则、费用与 240h 过境对比。",
    "30日を超えて中国に滞在する方やビザ免除対象外の方のための2026年中国L（観光）ビザ申請手順。COVA入力、必要書類、ビザセンター予約、費用と所要日数を徹底解説。",
    "30일 이상 장기 체류자 및 무비자 제외 국가 여권 소지자를 위한 2026 중국 관광(L) 비자 신청 가이드. COVA 작성, 준비 서류, 비자센터 예약 및 소요 기간 정리."
  ),
  updated: "2026-11-26",
  readMin: 10,
  keyPoints: [
    t4(
      "Who needs an L Visa: US citizens staying >10 days (or flying round-trip A → China → A), citizens of non-visa-free countries (e.g. India, Philippines, South Africa), or 30-day visa-free citizens staying >30 days.",
      "谁需要办 L 签：停留超 10 天或买往返票（A→中国→A）的美国公民、非免签国公民（如印度、菲律宾等），或计划连续停留超过 30 天的免签国游客。",
      "Lビザが必要な人：30日を超えて滞在する日本人・韓国人、または米国など30日免除対象外で10日超・往復便で渡航する方。",
      "L비자가 필요한 경우: 30일을 초과해 체류하는 한국인·일본인, 또는 미국 등 30일 무비자 미대상국 국민 중 10일 초과·왕복 항공권 이용자."
    ),
    t4(
      "US citizens remain eligible for 10-year multiple-entry L visas (60 days per stay), and since 2024 US L-visa applicants no longer need to submit flight tickets or hotel bookings at the embassy!",
      "美国公民可申请 10 年多次往返 L 签（每次停留 60 天），且目前美国使领馆受理美籍 L 签已免交机票酒店预订单！",
      "米国籍は10年マルチLビザ（1回60日滞在）が申請可能で、米国大使館・領事館では航空券・ホテル予約票の提出が免除されています。",
      "미국 시민권자는 10년 복수 L비자(회당 60일 체류) 신청이 가능하며, 주미 중국 대사관·영사관 신청 시 항공권·호텔 예약서 제출이 면제됩니다."
    ),
    t4(
      "Apply 1–2 months before departure: fill out the COVA form online (cova.cs.mfa.gov.cn), submit at your consular district's Embassy/Consulate (US) or CVASC (visaforchina.cn), and pick up in ~4 working days.",
      "建议提前 1–2 个月办理：在 COVA 官网（cova.cs.mfa.gov.cn）填表 → 前往所属领区使领馆（美国）或签证中心（visaforchina.cn）递交 → 常规约 4 个工作日取证。",
      "出発1〜2カ月前の申請を推奨：COVAオンライン入力 → 管轄の中国ビザ申請センター（visaforchina.cn）へ提出 → 通常約4営業日で発給。",
      "출발 1~2개월 전 신청 권장: COVA 온라인 작성 → 관할 비자신청센터(visaforchina.cn) 접수 → 일반 약 4영업일 소요."
    ),
    t4(
      "Valid 10-year China visa inside an expired passport? Still valid if you carry BOTH passports together and your personal details match—no need to reapply!",
      "旧护照过期但上面的 10 年中国签证仍在有效期？只要新旧护照个人信息一致，两本同时带着就能直接入境，无需重办！",
      "期限切れ旧パスポート内の有効な10年ビザは、氏名が一致していれば新旧2冊持参でそのまま入国可能。",
      "만료된 구여권의 유효한 10년 비자는 인적사항이 동일하면 신·구 여권 2권을 함께 지참해 그대로 입국 가능합니다."
    ),
  ],
  sections: [
    {
      id: "l-visa-vs-240h",
      heading: t2("Should you get an L Visa or use 240-Hour Transit?", "我到底该办 L 签证，还是走 240 小时过境免签？"),
      blocks: [
        {
          type: "table",
          head: [
            t2("Factor", "对比项"),
            t2("Tourist (L) Visa", "L 字旅游签证"),
            t2("240-Hour Visa-Free Transit", "240 小时过境免签"),
          ],
          rows: [
            [
              t2("Max stay", "最长停留"),
              t2("30–60 days per entry (US: 10-year multiple-entry)", "单次 30–60 天（美国可办 10 年多次）"),
              t2("Up to 10 days (240h from 00:00 next day)", "最长 10 天（次日 00:00 起算）"),
            ],
            [
              t2("Round-trip flights (e.g. LAX ↔ PVG)", "往返直飞（如洛杉矶 ↔ 上海）"),
              t2("✅ Allowed — fly in & out of anywhere", "✅ 完全允许 —— 任意往返"),
              t2("❌ Prohibited — must fly A → China → C (third country/HK/Macau/Taiwan)", "❌ 不允许 —— 必须 A → 中国 → C 第三地"),
            ],
            [
              t2("Where you can visit", "可去地区"),
              t2("All open cities in China (incl. Jiuzhaigou, Pingyao, Snow Town, Xinjiang; Tibet still needs Permit)", "全国所有开放城市（可去九寨沟、平遥、雪乡、新疆；西藏仍需入藏函）"),
              t2("Restricted to 24 provinces & specific cities (no Jiuzhaigou, Pingyao, Snow Town, Xinjiang)", "仅限 24 省允许区域（不可去九寨沟、平遥、雪乡、新疆）"),
            ],
            [
              t2("Cost & effort", "费用与时间"),
              t2("~$140–$185 (US citizens) + 4 working days", "约 $140–$185（美籍）+ 约 4 个工作日"),
              t2("Free ($0), no embassy visit", "免费（$0），无需跑使馆"),
            ],
          ],
        },
        { type: "tool", tool: "visa-checker" },
      ],
    },
    {
      id: "cova-steps",
      heading: t2("Step-by-step L Visa application (COVA → Submit → Pickup)", "L 字旅游签证申请 4 步实操流程"),
      blocks: [
        {
          type: "steps",
          items: [
            t2(
              "Complete the COVA online application form at cova.cs.mfa.gov.cn. Select the exact Embassy/Consulate or CVASC that serves your state/region. Print the full confirmation page + signed application form. Watch out for common rejection triggers: blank employment/education gaps over 5 years, mismatched middle names, or a non-white photo background.",
              "在官方 COVA 网站（cova.cs.mfa.gov.cn）在线填表，务必选对居住地所属领区的使领馆或签证中心（CVASC），打印确认页与完整申请表并签名。高频退件雷区：过去 5 年工作/教育经历留空、中间名与护照机读区不一致、证件照底色非纯白。"
            ),
            t2(
              "Prepare your document packet: original passport (6+ months validity & 2+ blank visa pages), photocopy of bio page, printed COVA form, 1 color passport photo (48mm × 33mm, white background, no glasses/headwear), proof of legal residence if applying outside your home country, and (for non-US applicants where required) round-trip flight + hotel bookings or an invitation letter.",
              "准备纸质材料：护照原件（建议余 6 个月以上有效期、2 页以上空白页）、资料页复印件、COVA 打印表、1 张 48mm×33mm 白底彩照（不戴眼镜）、非本国申请时的合法居留证明；非美籍按领馆要求附往返机酒单或邀请函。"
            ),
            t2(
              "Submit in person (or via an authorized visa agency / courier where permitted). Fingerprints are generally exempted for applicants under 14, over 70, or those who already had fingerprints collected on the same passport within 5 years (plus temporary fingerprint waivers for single/double-entry short-stay visas at many consulates—check your local CVASC notice).",
              "本人递交（或在允许的领区委托签证代理递交）。14 岁以下、70 岁以上、5 年内持同一本护照留过指纹者免采指纹（目前多国使领馆对单/两次短期签证亦有阶段性免采指纹政策，递交前核对当地通知）。"
            ),
            t2(
              "Processing & pickup: regular service takes 4 working days; express service (2–3 working days) costs extra. Double-check your name spelling, passport number, entries, and validity dates immediately at the pickup window.",
              "出签与取件：常规 4 个工作日出签，加急 2–3 个工作日（另收加急费）。窗口取证时立刻核对姓名拼写、护照号、入境次数与有效期。"
            ),
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: t2("Official Sources & Verification Links", "官方来源与核验入口"),
          text: t2(
            "Always verify fees, consular jurisdiction, and current document waivers on official portals before booking flights: COVA Online Form (cova.cs.mfa.gov.cn) · China Visa Application Service Center (visaforchina.cn) · National Immigration Administration (en.nia.gov.cn) · Ministry of Foreign Affairs Consular FAQ (cs.mfa.gov.cn).",
            "订票前请务必在以下官方渠道核对最新领区、费用与免交材料政策：COVA 网申系统（cova.cs.mfa.gov.cn）· 中国签证申请服务中心（visaforchina.cn）· 国家移民管理局（en.nia.gov.cn）· 外交部领事司（cs.mfa.gov.cn）。"
          ),
        },
      ],
    },
  ],
  faq: [
    {
      q: t2("Do US citizens need flight and hotel bookings to apply for a China L visa in 2026?", "2026 年美国公民申请中国 L 签还需要提交机票和酒店订单吗？"),
      a: t2(
        "No. The Chinese Embassy and Consulates in the United States waived the requirement for round-trip flight tickets, hotel reservations, itineraries, and invitation letters for US tourist (L) visa applicants. Always double-check your specific consular district's latest checklist before submitting.",
        "不需要。中国驻美使领馆已简化美籍 L 字旅游签证材料，免交往返机票、酒店预订单、行程单及邀请函。递交前仍建议核对所属领馆官网最新清单。"
      ),
    },
    {
      q: t2("Can I apply for a China visa by mail in the United States?", "在美国可以邮寄办理中国签证吗？"),
      a: t2(
        "The Chinese Embassy and Consulates in the US do not accept direct mail-in applications from individuals. You must either submit in person at the consulate for your state or use a licensed courier/visa agency authorized to submit on your behalf.",
        "中国驻美使领馆不接受个人直接邮寄申请。您须本人前往所属领区使领馆递交，或委托正规代办机构/签证快递代理递交。"
      ),
    },
    {
      q: t2("How long does a US 10-year China L visa allow me to stay per visit?", "美国 10 年中国 L 签每次入境可以停留多久？"),
      a: t2(
        "Typically 60 days per entry (check the exact 'Duration of Each Stay' printed on your visa sticker). You can exit to Hong Kong/Macau or abroad and re-enter, subject to immigration inspection.",
        "通常为每次停留 60 天（具体以签证贴纸上标注的“每次停留天数”为准）。"
      ),
    },
  ],
  related: ["visa-free-countries", "240-hour-transit", "hotels-in-china", "arrival-immigration"],
};

export default guide;
