import type { Guide } from "@/data/types";
import { t4 } from "@/lib/i18n";

const guide: Guide = {
  slug: "shopping-tax-refund",
  category: "food",
  icon: "bag",
  title: t4(
    "China Tax Refund (2026): ¥200 Instant Refund, DJI & What to Buy",
    "中国购物与 2026 离境退税（即买即退）及砍价指南",
    "中国 免税・即時還付ガイド（2026年最新）：200元から9%返金＆DJI・おすすめ土産",
    "중국 택스리펀 완벽 가이드 (2026): 200위안 즉시 환급·DJI·쇼핑 팁"
  ),
  seoTitle: t4(
    "China 200 RMB Tax Refund Guide (2026): Instant Mall Refund, 9% Net Back & DJI",
    "中国 200 元离境退税与即买即退攻略（2026）：实拿 9%、买大疆、配眼镜与砍价",
    "中国200元免税＆即時還付ガイド（2026）：アリペイで即9%返金・空港税関の注意点",
    "중국 200위안 택스리펀·즉시 환급 가이드 (2026): 알리페이 9% 환급·공항 세관 필수 절차"
  ),
  summary: t4(
    "Spend ¥200+ (~$28) at one Tax Free store in China to claim ~9% net VAT refund. Covers instant mall refunds via Alipay, July 2026 paperless rules, DJI savings, 30-min glasses and bargaining.",
    "同一天在同一退税商店满 200 元即可享约 9% 净退税。详解商场即买即退、2026 年 7 月无纸化抽检新政、买大疆/配眼镜省钱攻略与砍价规则。",
    "中国では同一店舗・同日200元（約4,200円）以上の買い物で実質約9%の免税還付が可能。モールでのアリペイ即時還付、2026年7月ペーパーレス化、DJI・30分メガネ購入、空港税関の注意点を日本語で徹底解説。",
    "중국 동일 매장 당일 200위안 이상 구매 시 실수령 약 9% 부가세 환급! 쇼핑몰 알리페이 즉시 환급, 2026년 7월 무종이 간소화, DJI·안경 쇼핑 팁과 공항 세관 확인 절차를 정리했습니다."
  ),
  updated: "2026-11-25",
  readMin: 7,
  keyPoints: [
    t4(
      "Ultra-low threshold: spend ¥200+ (~US$28) at the same Tax Free store on the same day to qualify (if your continuous stay in China is ≤183 days).",
      "超低起退门槛：在华连续居住不超过 183 天的境外旅客，同一日在同一家退税商店买满 200 元人民币（约 28 美元）即可退税。",
      "超低ハードル：中国連続滞在183日以内の外国人旅行者は、同一日の同一「Tax Free / 退税商店」で200元（約4,200円）以上購入すれば免税対象。",
      "초저 문턱: 중국 연속 체류 183일 이내 외국인 여행객은 같은 날 동일 Tax Free 매장에서 200위안 이상 구매하면 환급 대상입니다."
    ),
    t4(
      "Refund rates are 11% (most goods) or 8%, minus ~2% agency fee—so you pocket ~9% (or ~6%) net. A ¥4,000 DJI camera returns about ¥360 (~$50).",
      "退税率分 11%（绝大多数商品）和 8% 两档，扣约 2% 代理手续费后实际到手约 9%（或 6%）。买 4,000 元大疆相机可退约 360 元。",
      "還付率は11%（一般商品）または8%で、代理手数料約2%を差し引いた手取りは実質約9%（または6%）。4,000元のDJIカメラなら約360元（約7,500円）戻ります。",
      "환급률은 11%(대부분 상품) 또는 8%이며 대행 수수료 약 2%를 제외하면 실수령 약 9%(또는 6%)입니다. 4,000위안 DJI 카메라 구매 시 약 360위안 환급."
    ),
    t4(
      "Instant Tax Refund (即买即退) in major malls lets you receive RMB via Alipay or cash on the spot with a credit card pre-authorization.",
      "核心商圈商场全面普及“即买即退”，刷信用卡预授权担保后，当场即可通过支付宝或现金秒收退税款继续花。",
      "主要モールの「即買即退（即時免税）」なら、クレジットカードの仮押さえだけでその場でアリペイまたは現金で人民元を即受け取り可能。",
      "주요 쇼핑몰의 즉시 환급(即买即退)을 이용하면 신용카드 사전 승인 후 현장에서 알리페이 또는 현금으로 바로 환급받을 수 있습니다."
    ),
    t4(
      "From July 1, 2026, refunds are paperless with smart spot checks under ¥10,000—but you MUST still depart within 90 days and complete customs verification BEFORE checking your luggage.",
      "2026 年 7 月 1 日起全面无纸化，1 万元以下实行智能抽检；但仍须在购买后 90 天内离境，且务必在托运行李前完成海关核销。",
      "2026年7月1日より完全ペーパーレス化＆1万元未満はスマート抜取検査へ移行。ただし購入後90日以内の出国と、空港で荷物を預ける前の税関確認は必須です。",
      "2026년 7월 1일부터 전자 무종이 환급 및 1만 위안 이하 스마트 선별 검사가 도입되었으나, 90일 이내 출국 및 위탁 수하물 부치기 전 공항 세관 확인은 필수입니다."
    ),
  ],
  sections: [
    {
      id: "tax-refund-policy",
      heading: t4(
        "2026 China tax refund rules at a glance",
        "2026 中国离境退税新政一览",
        "2026年 中国の免税・離境還付ルール一覧",
        "2026 중국 출국 택스리펀 규정 한눈에 보기"
      ),
      blocks: [
        t4b(
          "Many travelers still think tax refunds in China require huge luxury purchases. In 2025–2026 China dramatically upgraded its departure tax refund program—even a T-shirt, sneakers, or a tin of tea can qualify.",
          "很多游客还停留在旧印象里，以为在中国退税门槛很高。实际上 2025–2026 年中国对离境退税做了大幅升级，买件 T 恤、一双鞋或一盒茶叶都能退钱。",
          "中国の免税は高額ブランド品だけと思われがちですが、2025〜2026年の制度大幅刷新により最低購入額が200元まで引き下げられました。Tシャツ1枚や中国茶・お菓子でも対象店舗なら免税になります。",
          "중국 택스리펀은 명품만 가능하다고 생각하기 쉽지만 2025~2026년 대폭 개편되어 최소 구매액이 200위안으로 낮아졌습니다. 티셔츠나 차(茶) 선물 세트도 환급 가능합니다."
        ),
        {
          type: "table",
          head: [
            t4("Rule", "规则项", "項目", "항목"),
            t4("2026 Standard", "2026 现行标准", "2026年 現行ルール", "2026 현행 기준"),
          ],
          rows: [
            [
              t4("Who qualifies", "适用人群", "対象者", "대상"),
              t4(
                "Foreign visitors and HK/Macau/Taiwan residents staying continuously in Mainland China for ≤183 days.",
                "在华连续居住不超过 183 天的外国人及港澳台同胞。",
                "中国本土での連続滞在日数が183日以内の外国人旅行者（日本人含む）および香港・マカオ・台湾居住者。",
                "중국 본토 연속 체류 183일 이내 외국인 여행객 및 홍콩·마카오·대만 거주자."
              ),
            ],
            [
              t4("Minimum spend", "起退门槛", "最低購入金額", "최소 구매액"),
              t4(
                "¥200 RMB (~US$28) at the SAME store displaying the 'Tax Free / 退税商店' sign on the SAME day.",
                "同一日在同一家挂有“Tax Free / 退税商店”标志的门店消费满 200 元人民币（约 28 美元）。",
                "同一日に同一の「Tax Free / 退税商店」マーク掲示店で200元（約4,200円）以上購入。",
                "같은 날 'Tax Free / 退税商店' 표시가 있는 동일 매장에서 200위안 이상 구매."
              ),
            ],
            [
              t4("Standard rate (11% → ~9% net)", "常规商品（11% → 实拿约 9%）", "一般商品（11% → 手取り約9%）", "일반 상품 (11% → 실수령 약 9%)"),
              t4(
                "Electronics, DJI drones & action cameras, Huawei/Xiaomi tech, clothing, shoes, bags, silk, ceramics, cosmetics, watches and jewelry (after ~2% agency fee).",
                "电子数码、大疆无人机与运动相机、华为/小米数码、服饰鞋包、丝绸瓷器、美妆、手表首饰等（扣除约 2% 代理手续费）。",
                "家電・DJIドローン/カメラ・Huawei/Xiaomi端末・衣料品・靴・バッグ・シルク・陶磁器・化粧品・時計など（代理手数料約2%控除後）。",
                "전자제품, DJI 드론/카메라, 화웨이/샤오미 기기, 의류, 신발, 가방, 실크, 도자기, 화장품, 시계 등 (대행 수수료 약 2% 제외)."
              ),
            ],
            [
              t4("Reduced rate (8% → ~6% net)", "特定商品（8% → 实拿约 6%）", "軽減対象（8% → 手取り約6%）", "특정 상품 (8% → 실수령 약 6%)"),
              t4(
                "Items subject to 9% VAT, such as certain processed agricultural foods and books/newspapers (after ~2% agency fee).",
                "适用 9% 增值税率的部分特定商品，如部分农产品加工食品、书报等（扣除约 2% 代理手续费）。",
                "9%増値税対象の一部農産物加工食品・書籍など（代理手数料約2%控除後）。",
                "9% 부가세 적용 일부 농산물 가공식품 및 도서 등 (대행 수수료 약 2% 제외)."
              ),
            ],
            [
              t4("Real example", "实际算账示例", "還付シミュレーション例", "실제 환급 예시"),
              t4(
                "Buy a ¥4,000 DJI camera → 11% gross (¥440) minus ~2% agency fee (¥80) = ~¥360 (~US$50) back in your pocket.",
                "买一台 4,000 元大疆相机 → 毛退税 11%（440 元）扣约 2% 代理费（80 元）= 实拿约 360 元（约 50 美元）。",
                "4,000元のDJIカメラを購入 → 11%（440元）から手数料約2%（80元）を引いて実質約360元（約7,500円）が戻ります。",
                "4,000위안 DJI 카메라 구매 → 11%(440위안) - 수수료 2%(80위안) = 실수령 약 360위안."
              ),
            ],
            [
              t4("Departure deadline", "离境期限", "出国期限", "출국 기한"),
              t4(
                "Must depart China within 90 days of the purchase date, with unused/unopened goods.",
                "离境日须在购买日后 90 天内，且退税商品尚未启用或消费。",
                "購入日から90日以内に未開封・未使用の状態で中国を出国すること。",
                "구매일로부터 90일 이내 미개봉·미사용 상태로 출국해야 합니다."
              ),
            ],
          ],
        },
        { type: "tool", tool: "tax-refund-calculator" },
      ],
    },
    {
      id: "instant-and-paperless",
      heading: t4(
        "Instant Tax Refund in malls & July 1, 2026 paperless upgrade",
        "商场“即买即退”与 2026 年 7 月 1 日无纸化新政",
        "モールでの「即時免税（即買即退）」＆2026年7月ペーパーレス化",
        "쇼핑몰 즉시 환급(即买即退) 및 2026년 7월 무종이 개편"
      ),
      blocks: [
        {
          type: "list",
          items: [
            t4(
              "Instant Tax Refund (即买即退): widely available across major malls in Beijing, Shanghai, Guangzhou, Shenzhen, Chengdu, Hangzhou and Chongqing (such as IFC, Plaza 66, Taikoo Li, SKP, MixC, plus major DJI and silk flagships). After paying and getting your tax refund form, visit the mall customer service desk, place a credit card pre-authorization guarantee, and receive your RMB refund instantly via Alipay or cash to keep shopping.",
              "商场“即买即退”全面普及：在北京、上海、广州、深圳、成都、杭州、重庆等核心商圈（如国金中心 IFC、恒隆广场、太古里、SKP、万象城及众多大疆/丝绸旗舰店），结账开单后去商场客户中心刷信用卡预授权担保，当场就能用支付宝扫码秒收人民币退税款（或领现金）继续在下一家店花。",
              "モール「即買即退（即時免税）」：上海（IFC・恒隆広場）、北京（SKP）、広州、深圳、成都（太古里）、杭州、重慶の大型モールやDJI旗艦店で普及。会計後にパスポートで免税手続きを済ませ、館内カウンターでクレジットカード仮押さえを行えば、その場でアリペイまたは現金で人民元還付金を受け取り、すぐ次の買い物に使えます。",
              "쇼핑몰 즉시 환급(即买即退): 상하이(IFC·플라자66), 베이징(SKP), 광저우, 선전, 청두(타이구리), 항저우, 충칭 주요 백화점과 DJI 플래그십에서 가능. 결제 후 고객센터에서 신용카드 사전 승인만 거치면 알리페이 또는 현금으로 즉시 환급받습니다."
            ),
            t4(
              "July 1, 2026 paperless & smart spot check: China rolled out full electronic paperless tax refunds plus smart spot checks for purchases under ¥10,000. If your under-¥10,000 refund is not randomly selected for inspection, you skip the long airport unpacking queue.",
              "2026 年 7 月 1 日起无纸化与 1 万元以下智能抽检：全面推行电子无纸化退税，且对销售额在 10,000 元人民币以下的退税商品实施智能抽检——未被抽中查验的普通小额退税旅客，在机场无需再排长队翻箱倒柜人工拆包验核。",
              "2026年7月1日からのペーパーレス＆1万元未満スマート抜取検査：電子免税手続きが全面導入され、購入額1万元以下の場合は自動抜取検査対象にならなければ、空港でスーツケースを開けて長蛇の列に並ぶ手間が大幅に減りました。",
              "2026년 7월 1일 전자 무종이화 & 1만 위안 이하 스마트 선별 검사: 전면 전자화되어 1만 위안 미만 소액 환급은 무작위 검사에 걸리지 않으면 공항에서 짐을 열어 검사받는 대기 시간이 크게 줄었습니다."
            ),
          ],
        },
        {
          type: "callout",
          tone: "danger",
          title: t4(
            "Critical airport rule: verify BEFORE checking your luggage",
            "机场保命铁律：务必在托运行李前核销",
            "【超重要】空港ではスーツケースを預ける前に必ず税関確認を！",
            "공항 필수 주의: 위탁 수하물 부치기 전에 반드시 세관 확인!"
          ),
          text: t4(
            "Whether you used Instant Tax Refund in a mall or are claiming at the airport, ALWAYS go to the airport customs tax-refund counter or electronic terminal BEFORE checking in your suitcase. If you used Instant Tax Refund and skip customs verification, your credit card pre-authorization deposit will be charged back!",
            "无论你是在商场办了“即买即退”还是打算在机场领钱，去值机柜台托运行李前，都必须先到机场海关退税柜台或电子终端完成出境核销确认！否则即买即退的信用卡预授权担保金会被扣回！",
            "モールで即時還付を受けた場合も空港で受け取る場合も、航空会社のチェックインカウンターで荷物を預ける前に、必ず空港の「海関退税（Customs Tax Refund）」カウンターまたは電子端末で出国確認を行ってください。忘れると即時還付のクレジットカード仮押さえ金額が引き落とされます。",
            "쇼핑몰에서 즉시 환급을 받았든 공항에서 수령하든, 항공사 카운터에서 캐리어를 부치기 전에 반드시 공항 세관 택스리펀 카운터(또는 전자 단말기)에서 출국 확인을 마쳐야 합니다. 누락 시 즉시 환급 보증금이 카드에서 청구됩니다."
          ),
        },
        { type: "ad" },
      ],
    },
    {
      id: "best-things-to-buy",
      heading: t4(
        "Best things to buy in China (and customs traps)",
        "中国最值得买的好物清单（及海关禁带提醒）",
        "中国で買うとお得なおすすめ商品＆帰国時の税関NG品",
        "중국에서 사면 이득인 쇼핑 리스트 & 귀국 세관 주의품목"
      ),
      blocks: [
        {
          type: "list",
          items: [
            t4(
              "DJI Pocket 3, Action cameras & Mini drones: China's domestic retail prices are already the lowest in the world—stack the ~9% tax refund on top for huge savings.",
              "大疆 Pocket 3 / 运动相机 / Mini 无人机：中国本土定价本就全球最低，再叠加约 9% 离境退税，差价极其划算。",
              "DJI Osmo Pocket 3・アクションカメラ・Miniドローン：中国国内定価が世界最安水準なうえ、さらに約9%の免税還付を重ねられるため日本より圧倒的にお得です。",
              "DJI Pocket 3·액션캠·Mini 드론: 중국 현지 정가가 전 세계 최저 수준인데 약 9% 택스리펀까지 더하면 한국 대비 큰 폭으로 저렴합니다."
            ),
            t4(
              "30-minute prescription glasses: Chinese designer stores (Mujiushi 木九十, Gentle Monster) and dedicated optical markets (Beijing Panjiayuan, Danyang, Shanghai Sanye Optical Market) do eye exams and cut ultra-thin prescription lenses in 30 minutes at roughly one-fifth of Western prices.",
              "30 分钟立等可取配眼镜：设计师品牌店（木九十、Gentle Monster）或专业眼镜城（北京潘家园、丹阳、上海三叶眼镜城），30 分钟验光现场配好超薄近视镜片，价格只有欧美约五分之一。",
              "30分で仕上がる度付きメガネ：中国デザイナーズ店（木九十など）や大型メガネ市場（上海三葉眼鏡城・北京潘家園）では、検眼から超薄型レンズ加工まで約30分・激安価格で完成します。",
              "30분 완성 도수 안경: 상하이 산예 안경시장, 베이징 판자위안, 디자인 브랜드 매장(무지우스 등)에서 시력 검사 후 초박형 렌즈까지 30분 만에 매우 합리적인 가격으로 맞출 수 있습니다."
            ),
            t4(
              "Mechanical keyboards & Hi-Fi earphones: China leads the world in budget-to-flagship custom mechanical keyboards and IEM earphones.",
              "国产机械键盘与 Hi-Fi 耳机：中国在客制化机械键盘和 Hi-Fi 监听耳机领域性价比全球领先。",
              "メカニカルキーボード＆中華Hi-Fiイヤホン：カスタムキーボードや高音質IEMイヤホンは中国ブランドのコスパが世界トップクラス。",
              "기계식 키보드 & Hi-Fi 이어폰: 커스텀 기계식 키보드와 고음질 인이어 이어폰은 중국 브랜드 가성비가 세계 최고 수준입니다."
            ),
            t4(
              "Jingdezhen ceramics, Song brocade silk & tea: handmade Jingdezhen master tea cups (主人杯), Song brocade silk scarves (宋锦真丝围巾), and Lapsang Souchong (正山小种) or West Lake Longjing (龙井) tea.",
              "景德镇瓷器、真丝与茶叶：景德镇手工主人杯、宋锦真丝围巾、正山小种和西湖龙井茶叶。",
              "景徳鎮の茶器・シルク製品・中国茶：景徳鎮の茶杯、宋錦シルクスカーフ、西湖龍井茶や正山小種（ラプサンスーチョン）などのお土産に最適。",
              "징더전 도자기·실크·중국차: 징더전 수공예 찻잔, 실크 스카프, 서호 용정차·정산소종 등 고급 선물용으로 인기입니다."
            ),
            t4(
              "Snacks & pantry gifts: White Rabbit creamy candy (大白兔奶糖) and Sichuan peppercorn oil (花椒油).",
              "国民零食与调味礼盒：大白兔奶糖和花椒油。",
              "定番お菓子＆調味料：大白兎ミルクキャンディ（大白兔奶糖）や本格的な四川花椒油。",
              "인기 간식 & 소스: 따바이투(大白兔) 밀크캔디, 사천 화자오유(산초기름)."
            ),
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: t4(
            "Check your home country's meat import bans",
            "注意回国海关肉制品禁令",
            "日本・欧米への肉製品持ち込み厳禁に注意",
            "귀국 시 육가공품 반입 금지 주의"
          ),
          text: t4(
            "Countries like Japan, South Korea, the US, Australia, the UK and EU strictly ban meat and animal-fat products. Do NOT pack beef-tallow hotpot base (牛油火锅底料), beef jerky, pork floss or meat mooncakes unless you want heavy fines at home customs. Choose plant-oil (清油) hotpot base instead.",
            "日本、韩国、美国、澳大利亚、英国及欧盟等海关严禁携带肉类及动物油脂入境。切勿把牛油火锅底料、牛肉干、肉松或肉馅月饼塞进回国行李箱，以免被高额罚款；买火锅底料请改选纯植物油（清油）款。",
            "日本をはじめ各国は肉類・動物性油脂の持ち込みを厳しく禁止しています。牛脂入りの火鍋の素（牛油火锅底料）、ビーフジャーキー、肉鬆、肉入り月餅は検疫で没収・高額罰金の対象になります。火鍋の素は必ず植物油（清油）タイプを選びましょう。",
            "한국·일본·미국 등은 육류 및 동물성 유지 반입을 엄격히 금지합니다. 우지(소기름) 훠궈 소스(牛油火锅底料), 육포, 육송, 고기 월병은 검역에서 압수·과태료 대상이니 식물성(清油) 훠궈 소스를 선택하세요."
          ),
        },
      ],
    },
    {
      id: "bargaining-rules",
      heading: t4(
        "Where to bargain—and where never to bargain",
        "哪里必须砍价，哪里绝对不能砍价",
        "値切り交渉OKの場所・絶対NGの場所",
        "흥정이 필요한 곳 vs 절대 흥정하면 안 되는 곳"
      ),
      blocks: [
        {
          type: "list",
          items: [
            t4(
              "Fixed price (NO bargaining): all shopping malls, brand boutiques, supermarkets, convenience stores, pharmacies, restaurants and chain stores. Prices are fixed and bargaining will confuse staff.",
              "明码实价（严禁砍价）：所有商场专柜、品牌旗舰店、超市、便利店、药店、餐厅和连锁店均为明码标价，不要砍价。",
              "定価販売（値切りNG）：ショッピングモール、ブランド直営店、スーパー、コンビニ、薬局、レストラン、チェーン店はすべて定価です。",
              "정찰제(흥정 금지): 백화점, 쇼핑몰, 브랜드 매장, 마트, 편의점, 약국, 식당, 프랜차이즈는 모두 정찰제입니다."
            ),
            t4(
              "Tourist & pearl/silk markets (DO bargain): at tourist-oriented imitation, silk or pearl markets—such as Shanghai's AP Plaza (上海科技馆地下亚太盛汇市场) or Beijing's Hongqiao Pearl Market (红桥珍珠市场)—initial quotes are heavily inflated. Smile, stay polite, and start your counter-offer at 20%–30% of the asking price.",
              "旅游仿品/珍珠丝绸市场（务必砍价）：在专门做游客生意的市场（如上海科技馆地下亚太盛汇市场、北京红桥珍珠市场），商家开价往往虚高。保持微笑、礼貌沟通，直接从开价的 20%–30%（二到三折）开始还价。",
              "観光向け市場（値切り必須）：上海科技館駅地下のAPプラザ（亜太盛匯市場）や北京の紅橋真珠市場などでは初期提示価格がかなり高めです。笑顔で丁寧に、提示額の20〜30%程度から交渉を始めましょう。",
              "관광객용 시장(흥정 필수): 상하이 과기관역 지하 AP플라자, 베이징 훙차오 진주시장 등에서는 처음 부르는 가격이 매우 높습니다. 미소 지으며 정중하게 제시가의 20~30% 선부터 흥정을 시작하세요."
            ),
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: t4(
        "Can I combine receipts from different stores to reach ¥200?",
        "能把不同商店的小票凑在一起满 200 元退税吗？",
        "別々のお店のレシートを合算して200元にできますか？",
        "다른 매장의 영수증을 합산해서 200위안을 채울 수 있나요?"
      ),
      a: t4(
        "No. The ¥200 minimum must be spent at the SAME Tax Free store on the SAME day.",
        "不能。200 元起退门槛必须是同一天在同一家退税商店消费。",
        "いいえ、できません。同一日の「同一の免税対象店舗」での合計が200元以上である必要があります。",
        "아니요. 반드시 같은 날 '동일한 택스리펀 매장'에서 200위안 이상 구매해야 합니다."
      ),
    },
    {
      q: t4(
        "Do I need to carry my physical passport when shopping for tax-free goods?",
        "去买退税商品时必须随身带护照原件吗？",
        "免税で買い物するときはパスポート原本が必要ですか？",
        "면세 쇼핑 시 여권 원본을 꼭 챙겨야 하나요?"
      ),
      a: t4(
        "Yes. Stores need your original passport to issue the electronic tax refund record and link it to your name.",
        "是的。商店需要核验你的护照原件才能开具电子退税单并绑定你的姓名。",
        "はい、必須です。店舗で電子免税データを作成しパスポート情報と紐づけるため、必ず原本を持参してください。",
        "네, 필수입니다. 매장에서 전자 택스리펀 내역을 여권 정보와 연동해야 하므로 반드시 여권 원본을 지참하세요."
      ),
    },
    {
      q: t4(
        "How do I receive my tax refund money?",
        "退税款通过什么方式拿到手？",
        "免税の還付金はどうやって受け取れますか？",
        "택스리펀 환급금은 어떤 방식으로 받나요?"
      ),
      a: t4(
        "You can receive it directly into Alipay (fastest), in RMB cash, or back to a bank card—both at instant-refund mall desks and at airport refund counters.",
        "可以直接退到支付宝（最快）、领取人民币现金或退回银行卡，商场即买即退柜台和机场退税点都支持。",
        "アリペイへの即時入金（最速）、人民元現金、またはクレジットカード/銀行口座への返金から選べます。モールの即時還付カウンターでも空港でも対応しています。",
        "알리페이 즉시 입금(가장 빠름), 위안화 현금, 또는 해외 카드 환급 중 선택할 수 있으며 쇼핑몰 즉시 환급 카운터와 공항 모두 지원합니다."
      ),
    },
    {
      q: t4(
        "What happens if I pack my tax-free items in checked luggage before customs verification?",
        "如果先把退税商品托运了再去海关核销会怎样？",
        "税関確認の前に免税品をスーツケースに預けてしまったら？",
        "세관 확인 전에 면세 물품을 먼저 위탁 수하물로 부치면 어떻게 되나요?"
      ),
      a: t4(
        "If selected for inspection and you cannot show the goods, customs cannot verify your claim—meaning no refund, or a chargeback on your instant-refund credit card pre-authorization. Always verify BEFORE checking bags.",
        "一旦被抽中查验而拿不出实物，海关将无法核销——不仅拿不到退税，已办即买即退的信用卡预授权还会被扣款。务必先核销再托运。",
        "検査対象に選ばれて実物を提示できない場合、税関承認が下りず還付不可（即時還付済みの場合はカード仮押さえ額が引き落とし）になります。必ずチェックイン前に税関確認を済ませてください。",
        "선별 검사 대상이 되었을 때 실물을 제시하지 못하면 세관 승인이 거절되어 환급 불가(즉시 환급은 카드 보증금 청구) 처리됩니다. 반드시 수하물 위탁 전에 확인받으세요."
      ),
    },
  ],
  related: ["alipay-wechat-pay", "atm-cash-dcc", "airports", "food-delivery-luggage", "domestic-flights"],
};

function t4b(en: string, zh: string, ja: string, ko: string) {
  return { type: "p", text: t4(en, zh, ja, ko) } as const;
}

export default guide;
