import type { Guide } from "@/data/types";
import { t2, t4 } from "@/lib/i18n";

const guide: Guide = {
  slug: "hotels-in-china",
  category: "practical",
  icon: "shield",
  title: t4(
    "Booking Hotels in China for Foreigners (2026): Foreign-Guest Rules, Deposits & Check-In",
    "外国人中国订酒店与住宿指南（2026）：外宾资质筛选、前台登记与避坑",
    "中国ホテル予約完全ガイド（2026）：外国人宿泊可の見分け方・パスポート登録・注意点",
    "중국 호텔 예약 완벽 가이드 (2026): 외국인 투숙 가능 필터·여권 등록·체크인 팁"
  ),
  seoTitle: t4(
    "Hotels in China for Foreigners (2026): Avoid Check-In Refusal, Trip.com vs Booking & Registration",
    "2026 外国人在中国订酒店指南：如何筛选可接待外宾酒店、Trip.com 对比与 24 小时登记",
    "中国ホテル外国人宿泊ルール（2026）：Trip.com vs Booking比較・24時間警察登録・暖房注意",
    "중국 호텔 외국인 투숙 가이드 (2026): Trip.com vs Booking 비교·24시간 여권 등록·난방 팁"
  ),
  summary: t4(
    "How to book foreign-guest-friendly hotels in China without getting turned away at reception: Trip.com vs Booking/Agoda, 24-hour passport registration, late-night check-in, deposits, heating and robot delivery.",
    "外国游客中国订酒店防拒住指南：如何确认可接待外宾、Trip.com 与 Booking/Agoda 实测对比、前台扫护照 24 小时法定登记、深夜入住、押金、南方暖气与外卖机器人。",
    "中国で外国人が宿泊拒否されないホテルの選び方。Trip.comとBookingの違い、フロントでのパスポート登録（24時間以内）、深夜チェックイン、デポジット、南方冬の暖房事情まで完全解説。",
    "중국에서 외국인 체크인 거부 없이 호텔 예약하는 법: Trip.com vs Booking 비교, 프런트 24시간 여권 등록, 심야 체크인, 보증금, 남부 겨울 난방 및 배달 로봇 이용 팁."
  ),
  updated: "2026-11-26",
  readMin: 7,
  keyPoints: [
    t4(
      "Always verify foreign-guest eligibility before booking budget hotels or guesthouses — Trip.com filters foreign-friendly properties automatically, whereas Booking/Agoda occasionally list small inns that cannot register foreign passports.",
      "订经济型酒店或民宿前务必确认“可接待外宾”——Trip.com 会自动过滤不接待外宾的门店，而 Booking/Agoda 偶有小旅馆未过滤导致到店被拒。",
      "格安ホテルや民宿は外国人受入可否を事前確認。Trip.comは外国人対応ホテルを自動表示しますが、Booking/Agodaではまれに非対応宿が混ざるため要注意。",
      "저가 호텔·민박 예약 전 외국인 투숙 가능 여부를 꼭 확인하세요. Trip.com은 외국인 가능 숙소를 자동 필터링하지만 Booking/Agoda에는 간혹 불가 숙소가 섞여 있습니다."
    ),
    t4(
      "When hotel staff scan or photograph your passport and entry stamp, that is the mandatory 24-hour police registration — 100% normal and legal, and it means you do NOT have to visit a police station yourself.",
      "酒店前台扫描/复印你的护照和入境章是法定的 24 小时住宿登记——100% 正常流程，住正规酒店后你就不用自己跑派出所登记了。",
      "フロントでパスポートと入国スタンプをスキャンされるのは法律で義務付けられた24時間以内の宿泊登録です。正規ホテルに泊まれば自分で派出所へ行く必要はありません。",
      "호텔 프런트에서 여권과 입국 도장을 스캔하는 것은 법적 의무인 24시간 임시숙박등록입니다. 정식 호텔에 묵으면 직접 파출소에 갈 필요가 없습니다."
    ),
    t4(
      "Staying at a friend's apartment or private short-term rental? You or your host MUST register within 24 hours via NIA's nationwide online registration service (rolled out Sept 21, 2026) or at the local police station.",
      "如果住朋友家或私人短租民宿：本人或房东必须在入住后 24 小时内通过国家移民管理局全国官方网上通道（2026 年 9 月 21 日起全国推广）或当地派出所完成登记。",
      "友人宅や民泊に泊まる場合は、入国後24時間以内に国家移民管理局の公式オンライン登録（2026年9月全国展開）または最寄り派出所での手続きが必須です。",
      "친구 집이나 개인 민박에 묵을 경우 입국 후 24시간 내에 국가이민관리국 공식 온라인 등록(2026년 9월 전국 확대) 또는 관할 파출소에서 직접 등록해야 합니다."
    ),
    t4(
      "Major Chinese hotel chains (Atour 亚朵, Ji Hotel 全季, Orange Crystal 桔子水晶, plus international brands) offer 24/7 front desks, free bottled water, free luggage storage, and English-friendly check-in.",
      "中国主流中高端连锁（亚朵、全季、桔子水晶及国际品牌）普遍提供 24 小时前台、免费瓶装水、免费寄存行李，对外籍旅客非常友好。",
      "中国の大手チェーン（亜朶Atour・全季Ji Hotel・桔子水晶など）や外資系ホテルは24時間フロント・無料ミネラルウォーター・荷物預かり対応で安心です。",
      "중국 대형 체인(아투어 Atour·췐지 Ji Hotel·오렌지 크리스탈 등)과 글로벌 브랜드는 24시간 프런트, 무료 생수, 무료 짐 보관으로 외국인 이용이 매우 편리합니다."
    ),
  ],
  sections: [
    {
      id: "foreign-guest-eligibility",
      heading: t2("How to avoid hotel check-in refusal (foreign-guest rules)", "如何避免到店被拒入住？（外宾资质筛选与应对）"),
      blocks: [
        {
          type: "p",
          text: t2(
            "In May 2024, China's Ministry of Commerce, Ministry of Public Security and 5 other ministries issued a joint notice instructing hotels not to refuse foreign guests without valid reason. In practice, however, some small domestic budget inns and unlicensed guesthouses still lack staff training or passport-scanner connections to the police registration system—and turning up at 11 PM to a refusal is exhausting.",
            "虽然商务部、公安部等七部门已明确发文要求住宿业不得无故拒接外籍旅客，但现实中部分小型内宾旅馆和私人公寓前台仍缺乏护照扫描登记系统或操作经验，深夜落地到店被拒会非常崩溃。"
          ),
        },
        {
          type: "table",
          head: [
            t2("Booking Platform", "预订平台"),
            t2("Foreign-Guest Reliability", "外宾接待可靠度"),
            t2("Best Strategy", "实操建议"),
          ],
          rows: [
            [
              t2("Trip.com (Best overall)", "Trip.com（最推荐）"),
              t2("★★★★★ Highest — lists properties verified for international guests", "★★★★★ 最高 —— 默认展示可接待外宾房源"),
              t2("Best prices on Chinese chains (Atour, Ji Hotel, InterContinental, Marriott) + 24/7 English support if check-in fails.", "订亚朵、全季及国际连锁价格最好，且配 24 小时英文客服兜底。"),
            ],
            [
              t2("Booking.com / Agoda", "Booking.com / Agoda"),
              t2("★★★☆☆ Mixed on budget inns", "★★★☆☆ 经济型小店偶有踩雷"),
              t2("Safe for 4–5★ international hotels; for budget guesthouses, message the property after booking to confirm passport check-in.", "订四五星国际连锁很稳；订平价民宿务必发消息二次确认可办护照登记。"),
            ],
            [
              t2("Friends' home / Private Airbnb", "亲友家 / 私人民宿"),
              t2("Self-registration required within 24h", "须 24 小时内自行/房东登记"),
              t2("Register online via NIA's nationwide online registration portal (or visit the local police station) within 24 hours of arrival.", "抵达 24 小时内通过官方网上通道或当地派出所完成临时住宿登记。"),
            ],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: t2("What if a hotel still refuses you at check-in?", "万一到店前台仍表示“办不了护照登记”怎么办？"),
          text: t2(
            "1) Stay polite and show your booking confirmation + ask to speak with the manager. 2) Immediately contact your booking platform's 24/7 support (Trip.com/Booking)—they will either guide the front desk or relocate you and cover the price difference. 3) If needed, call the multilingual Mayor's Hotline 12345.",
            "1）保持礼貌，出示预订单并请值班经理协助。2）立刻联系预订平台 24 小时客服（Trip.com / Booking），由平台指导前台登记或免费协调换酒店并赔付差价。3）必要时可拨打多语种政务热线 12345 协助处理。"
          ),
        },
        { type: "affiliate", id: "tripHotels" },
      ],
    },
    {
      id: "passport-and-registration",
      heading: t2("Front-desk passport scan & 24-hour registration", "前台扫护照与 24 小时法定住宿登记"),
      blocks: [
        {
          type: "list",
          items: [
            t2(
              "Licensed hotels: simply hand over your physical passport at check-in. Reception scans your bio page and entry stamp/sticker into the local police system automatically—taking 2–3 minutes. You do NOT need to go to a police station.",
              "正规酒店：办理入住时直接递交护照原件，前台会扫描护照信息页和入境章自动上传公安系统（约 2–3 分钟），你无需再跑派出所。"
            ),
            t2(
              "Non-hotel stays (friends, relatives, private rentals): since Sept 21, 2026, China's National Immigration Administration rolled out nationwide online temporary residence registration. You or your host must submit it within 24 hours of arrival (or visit the nearest police station).",
              "非旅馆住宿（亲友家/私人短租）：自 2026 年 9 月 21 日起，国家移民管理局已在全国推广外国人临时住宿网上登记，入住后 24 小时内由本人或留宿人在线或到当地派出所完成登记。"
            ),
            t2(
              "Save your hotel's Chinese name & address BEFORE leaving the airport: taxi drivers cannot read English hotel names. Use our Live Taxi Card tool to save a fullscreen Chinese address card.",
              "落地前务必存好酒店中文名与中文地址：中国出租车司机看不懂英文酒店名，直接用本站“实时出租车地址卡”存一份离线卡片。"
            ),
          ],
        },
        {
          type: "show",
          zh: "你好，我是外籍旅客，这是我的护照和预订确认单。请问可以办理入住登记吗？",
          pinyin: "Nǐ hǎo, wǒ shì wài jí lǚ kè, zhè shì wǒ de hù zhào hé yù dìng què rèn dān. Qǐng wèn kě yǐ bàn lǐ rù zhù dēng jì ma?",
          meaning: t2(
            "Hello, I am a foreign guest. Here is my passport and booking confirmation—may I check in?",
            "给酒店前台看的入住沟通卡（点击可全屏展示）"
          ),
        },
      ],
    },
    {
      id: "practical-hotel-tips",
      heading: t2("6 China hotel quirks foreigners never expect", "6 个老外最意想不到的中国酒店细节"),
      blocks: [
        {
          type: "list",
          items: [
            t2(
              "Deposits & payment: many mid-to-upscale Chinese hotels ask for a refundable security deposit (¥200–500) at check-in via Alipay, WeChat Pay, Visa/Mastercard pre-authorization, or RMB cash. Ask for a receipt if paying cash.",
              "押金与支付：部分中高端酒店入住时会收取 200–500 元可退押金，支持支付宝/微信、外卡预授权或人民币现金（付现金请留好收据）。"
            ),
            t2(
              "Firm mattresses: Chinese hotels often have much firmer beds than US/European hotels. If it feels too hard, ask reception for an extra duvet/mattress topper (加床垫/多一床被子)—most 4–5★ hotels bring one free.",
              "床垫偏硬：不少国内酒店床垫比欧美偏硬；觉得太硬可以直接找前台免费加一条褥子或软枕头。"
            ),
            t2(
              "Free bottled water & electric kettle: almost every Chinese hotel gives 2+ free bottles of water daily (don't drink tap water) plus an electric kettle for tea/coffee.",
              "免费瓶装水与烧水壶：几乎所有中国酒店每天都会免费补充 2 瓶以上矿泉水（不要生饮自来水）并配电热水壶。"
            ),
            t2(
              "South China winter heating (Dec–Feb): cities south of the Yangtze (Shanghai, Hangzhou, Chengdu, Guilin) have NO central heating—check that your room has heating air-conditioning (制热空调).",
              "南方冬季制热确认（12–2 月）：上海、杭州、成都、桂林等南方城市无集中供暖，订房时务必确认房间有制热空调。"
            ),
            t2(
              "Free luggage storage & late-night check-in: 24-hour front desks are standard at Chinese chains (confirm in advance for boutique B&Bs), and hotels happily hold bags free before check-in or after check-out.",
              "免费寄存行李与深夜入住：正规连锁酒店均 24 小时有人值班（精品民宿需提前告知晚到时间），且普遍支持入住前/退房后免费寄存行李。"
            ),
            t2(
              "Delivery robots! Order food or pharmacy items via Meituan/Ele.me and a cute robot will ride the elevator straight to your hotel door and call your room phone when it arrives.",
              "外卖机器人送餐：用美团/饿了么点外卖或买药，绝大多数现代酒店会由机器人自动坐电梯送到房门口并拨打房间电话提醒开门。"
            ),
          ],
        },
        { type: "tool", tool: "taxi-card" },
      ],
    },
  ],
  faq: [
    {
      q: t4(
        "Can foreigners stay in any hotel in China in 2026?",
        "2026 年外国人可以在中国住任意酒店吗？",
        "2026年、外国人は中国のどのホテルにも泊まれますか？",
        "2026년 외국인은 중국의 모든 호텔에 투숙할 수 있나요?"
      ),
      a: t4(
        "Officially, hotels are encouraged not to refuse foreign guests, and almost all 3–5 star hotels and major chains welcome foreigners. However, some tiny budget inns still lack passport registration setup—booking on Trip.com or confirming in advance avoids any late-night surprises.",
        "政策层面鼓励酒店接待外宾，绝大多数三星及以上酒店和连锁品牌都完全欢迎外籍旅客。但极少数小型低价旅馆仍缺护照登记设备，通过 Trip.com 预订或提前确认可 100% 避坑。",
        "中〜高級ホテルや大手チェーンはほぼ全て外国人歓迎ですが、一部の小規模格安宿はパスポート登録端末が未整備なことがあります。Trip.comでの予約が最も確実です。",
        "대부분의 중·고급 호텔과 대형 체인은 외국인을 환영하지만, 일부 소규모 저가 숙소는 여권 등록 시스템이 미비할 수 있어 Trip.com 예약이 가장 안전합니다."
      ),
    },
    {
      q: t4(
        "Do I need a Chinese (+86) phone number to book a hotel in China?",
        "在中国订酒店需要中国 +86 手机号吗？",
        "中国のホテル予約に中国の電話番号（+86）は必要ですか？",
        "중국 호텔 예약 시 중국 휴대폰 번호(+86)가 필요한가요?"
      ),
      a: t4(
        "No. You can book with your foreign phone number and email on Trip.com, Booking.com or international chain apps.",
        "不需要。在 Trip.com、Booking.com 或国际酒店集团 App 上直接用你的境外手机号和邮箱即可预订。",
        "不要です。Trip.comやBooking.comなどで日本・海外の電話番号とメールアドレスのまま予約できます。",
        "필요 없습니다. Trip.com, Booking.com 등에서 해외 휴대폰 번호와 이메일로 바로 예약할 수 있습니다."
      ),
    },
    {
      q: t4(
        "What if my international flight lands at 2:00 AM — can I still check in?",
        "如果我的国际航班凌晨 2 点才落地，酒店还能办理入住吗？",
        "深夜2時に到着する便でもホテルにチェックインできますか？",
        "새벽 2시에 도착하는 항공편인데 체크인이 가능한가요?"
      ),
      a: t4(
        "Yes at standard hotels and chains (24/7 front desk), as long as you notify the hotel of your late arrival time in your booking notes so they don't mark you as a no-show. For small boutique guesthouses, always confirm late check-in beforehand.",
        "正规酒店和连锁品牌均 24 小时前台值班，只需在订单备注中注明“深夜抵达保留房间”以免被判未到取消。小型特色民宿则务必提前联系确认晚到接待。",
        "大手チェーンや一般ホテルは24時間フロント対応ですが、ノーショー扱いにならないよう予約時の備考で深夜到着を必ず伝えておきましょう。",
        "일반 호텔과 체인은 24시간 프런트를 운영하지만 노쇼(No-show) 취소를 막기 위해 예약 메모에 심야 도착 예정 시각을 꼭 남겨두세요."
      ),
    },
    {
      q: t4(
        "Can I book a hotel for 2 adults and a child in one room?",
        "一家三口（两大一小）可以住中国酒店的一间房吗？",
        "大人2名＋子供1名で同じ部屋に泊まれますか？",
        "성인 2명과 어린이 1명이 한 객실에 함께 묵을 수 있나요?"
      ),
      a: t4(
        "Usually yes if the child shares existing bedding (check each hotel's child age policy on Trip.com, often free under 12). Remember that every guest—including children—must show their physical passport at check-in for police registration.",
        "通常可以（各酒店对免费同住儿童的年龄规定不同，多为 12 岁以下不加床免费，下单时看房型说明）。注意包括儿童在内的每位入住人都必须出示护照原件登记。",
        "添い寝無料（多くは12歳未満）のホテルが一般的です。ただし子供も含め宿泊者全員のパスポート原本の提示が必要です。",
        "기존 침대 공유 조건으로 무료 투숙(보통 만 12세 미만) 가능한 곳이 많습니다. 단, 어린이를 포함한 모든 투숙객의 여권 원본을 제시해야 합니다."
      ),
    },
  ],
  related: ["safety-health", "arrival-immigration", "alipay-wechat-pay", "when-to-go"],
};

export default guide;
