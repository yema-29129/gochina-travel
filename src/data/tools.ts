import type { L } from "@/lib/i18n";
import type { ToolId } from "@/data/types";

export interface ToolMeta {
  id: ToolId;
  icon: "visa" | "pay" | "ticket" | "wifi" | "check" | "food" | "sos" | "battery" | "receipt" | "coins" | "car" | "lang";
  title: L;
  seoTitle: L;
  desc: L;
  /** Guide slugs related to this tool */
  related: string[];
}

/** Registry of all interactive tools. URL: /[lang]/tools/[id] */
export const TOOLS: ToolMeta[] = [
  {
    id: "visa-checker",
    icon: "visa",
    title: {
      en: "Visa-Free & 240-Hour Transit Route Checker",
      zh: "免签资格与 240 小时过境路线检查器",
      ja: "30日ビザ免除＆240時間トランジット判定ツール",
      ko: "30일 무비자 & 240시간 경유 노선 확인기",
    },
    seoTitle: {
      en: "China Visa-Free & 240-Hour Transit Checker (Route, Ports & Deadline)",
      zh: "中国免签与 240 小时过境免签检查器（路线、口岸与截止时间）",
      ja: "中国ビザ免除・240時間トランジット免除チェッカー（2026年最新）",
      ko: "중국 30일 무비자 및 240시간 경유 무비자 확인기 (2026)",
    },
    desc: {
      en: "Check your passport, A → China → C route, entry/exit ports, restricted cities and your exact last legal exit time.",
      zh: "检查你的护照、A → 中国 → C 路线、出入境口岸、禁止前往的城市，以及精确的最晚合法出境时间。",
      ja: "パスポート国籍、A→中国→Cルート、対象空港・港、滞在可能エリアと最終出国期限を即判定。",
      ko: "여권 국적, A→중국→C 노선, 입출국 항구, 제한 도시 및 정확한 최종 출국 기한을 확인하세요.",
    },
    related: ["visa-free-countries", "240-hour-transit", "online-arrival-card"],
  },
  {
    id: "payment-fee-calculator",
    icon: "pay",
    title: {
      en: "China Payments Setup & ¥200 Fee Calculator",
      zh: "支付绑卡图解与 200 元手续费计算器",
      ja: "アリペイ・WeChatPay登録図解＆200元手数料計算",
      ko: "알리페이·위챗페이 카드 등록 & 200위안 수수료 계산기",
    },
    seoTitle: {
      en: "How to Pay in China (2026): Alipay, WeChat Pay, TenPayGo, UnionPay Nihao China Setup + ¥200 Fee Calculator",
      zh: "2026 外国人在中国支付教程：支付宝、微信支付、腾讯 TenPayGo、银联你好中国绑卡图解与 200 元手续费计算器",
      ja: "2026年中国決済完全ガイド：アリペイ・WeChatPay・銀聯カード登録と200元3%手数料計算機",
      ko: "2026 중국 결제 완벽 가이드: 알리페이·위챗페이·은련 카드 등록 및 200위안 3% 수수료 계산기",
    },
    desc: {
      en: "Visual step-by-step binding tutorials for 4 official payment apps, how to tell the 3 QR scan scenarios apart, plus the ¥200 3% fee & DCC calculator.",
      zh: "4 大官方支付 App 下载与逐屏绑卡图解、现场 3 种扫码场景一眼区分法（含个人码备现金提醒），外加 200 元 3% 手续费与 DCC 计算器。",
      ja: "公式4大決済アプリの画面付き登録手順、QR決済3パターンの見分け方、200元超3%手数料計算機。",
      ko: "4대 공식 결제 앱 화면별 등록 튜토리얼, QR 스캔 3가지 상황 구분법 및 200위안 3% 수수료 계산기.",
    },
    related: ["alipay-wechat-pay", "atm-cash-dcc"],
  },
  {
    id: "ticket-alarm",
    icon: "ticket",
    title: {
      en: "Attraction Ticket Release Alarm & Time Zone Converter",
      zh: "景点放票闹钟与时区换算器",
      ja: "故宮・人気観光地チケット発売時刻変換アラーム",
      ko: "자금성·인기 관광지 티켓 오픈 시간 변환 알람",
    },
    seoTitle: {
      en: "Forbidden City Ticket Release Time in Your Time Zone (+ Calendar Alarm)",
      zh: "故宫放票时间换算成你的当地时间（附日历闹钟）",
      ja: "故宮博物院チケット発売時刻（日本時間変換＆カレンダー登録）",
      ko: "자금성 티켓 오픈 시간 한국 시간 변환 및 캘린더 알람",
    },
    desc: {
      en: "Find when tickets go on sale in your local time, check closed days and Golden Week, and add a calendar alarm.",
      zh: "查出门票在你当地时间何时开售，检查闭馆日和黄金周，并添加日历闹钟。",
      ja: "北京時間20時の発売時刻を現地時間に自動変換。休館日・大型連休の確認とアラーム登録に対応。",
      ko: "베이징 시간 20시 오픈 일정을 한국 시간으로 자동 변환하고 휴관일·연휴 확인 및 알람을 추가하세요.",
    },
    related: ["attraction-tickets", "when-to-go"],
  },
  {
    id: "esim-calculator",
    icon: "wifi",
    title: {
      en: "Internet Plan & eSIM Data Calculator",
      zh: "上网方案与 eSIM 流量计算器",
      ja: "中国eSIMデータ容量計算＆最適通信プラン診断",
      ko: "중국 로밍 eSIM 데이터 용량 계산기 & 맞춤 추천",
    },
    seoTitle: {
      en: "How Much eSIM Data Do I Need in China? Internet Plan Finder",
      zh: "在中国需要多少 eSIM 流量？上网方案推荐",
      ja: "中国旅行eSIMは何GB必要？機種別おすすめ通信プラン＆オフライン起動カード",
      ko: "중국 여행 eSIM 몇 GB 필요할까? 기종별 맞춤 추천 및 오프라인 개통 카드",
    },
    desc: {
      en: "Get the right data pack (3GB–100GB) for your phone & trip, Singapore routing tips, plus a 1-click offline cabin activation PNG card.",
      zh: "按机型与天数精准匹配 3GB–100GB 真实套餐档位，附新加坡路由提示与一键保存机舱离线急救图。",
      ja: "機種と滞在日数から最適な容量（3GB〜100GB）を診断。機内用オフライン設定PNGカード保存機能付き。",
      ko: "휴대폰 기종과 일정에 맞는 정확한 용량(3GB~100GB) 추천 및 기내용 오프라인 개통 PNG 카드 저장.",
    },
    related: ["internet-esim", "essential-apps"],
  },
  {
    id: "china-metro-maps",
    icon: "car",
    title: {
      en: "All China Metro Maps (49 Cities HD)",
      zh: "中国全部城市地铁线路图大全（中英高清）",
      ja: "中国全49都市 地下鉄路線図まとめ（英語・中国語HD）",
      ko: "중국 전국 49개 도시 지하철 노선도 모음 (영문·중문 HD)",
    },
    seoTitle: {
      en: "China Metro & Subway Maps (2026 English HD): Beijing, Shanghai, Chengdu, Xi'an & 49 Cities",
      zh: "2026 中国全部城市地铁线路图大全（中英高清）：北京、上海、广州、深圳、成都、西安等",
      ja: "2026年 中国全土49都市の地下鉄路線図HD（北京・上海・広州・深圳・成都・西安）",
      ko: "2026 중국 49개 도시 지하철 노선도 고화질 (베이징·상하이·광저우·선전·청두·시안)",
    },
    desc: {
      en: "Browse zoomable English & Chinese subway maps for 49 Chinese cities, foreign Visa/MC tap status, fares and key tourist lines in one place.",
      zh: "一站式查看中国全部地铁城市的高清中英文线路图、外卡拍闸支持状态、票价与游客必坐核心线路。",
      ja: "北京・上海・成都・西安など49都市の拡大可能な路線図、クレカタッチ対応状況、観光主要路線を一覧表示。",
      ko: "베이징·상하이·청두·시안 등 49개 도시 확대 가능한 지하철 노선도, 해외카드 태그 지원 여부 및 핵심 노선.",
    },
    related: ["metro-didi-maps", "airports", "high-speed-trains"],
  },
  {
    id: "packing-checklist",
    icon: "check",
    title: {
      en: "72-Hour Pre-Flight Personalized Checklist",
      zh: "出发前 72 小时个性化清单",
      ja: "出発72時間前 パーソナル中国旅行チェックリスト",
      ko: "출국 72시간 전 맞춤형 중국 여행 체크리스트",
    },
    seoTitle: {
      en: "China Travel Checklist Generator — What to Prepare Before You Fly",
      zh: "中国旅行清单生成器——出发前要准备什么",
      ja: "中国旅行 持ち物・アプリ準備チェックリスト自動生成",
      ko: "중국 여행 준비물 및 필수 앱 체크리스트 생성기",
    },
    desc: {
      en: "A checklist built for your phone, travel month and who you travel with. Progress is saved on your device.",
      zh: "根据你的手机、出行月份和同行人生成的清单。进度保存在你的设备上。",
      ja: "スマホ機種・渡航月・同行者に合わせた準備リストを作成。進捗は端末に自動保存。",
      ko: "휴대폰, 여행 시기, 동행자에 맞춘 맞춤 준비 리스트를 생성하며 진행 상황이 기기에 저장됩니다.",
    },
    related: ["alipay-wechat-pay", "internet-esim", "when-to-go"],
  },
  {
    id: "allergy-card",
    icon: "food",
    title: {
      en: "Chinese Food Allergy & Diet Card + Bubble Tea Card",
      zh: "中文食物过敏与饮食卡 + 奶茶点单卡",
      ja: "中国語 食物アレルギー・食事制限カード＆タピオカ注文カード",
      ko: "중국어 음식 알레르기·채식 카드 & 밀크티 주문 카드",
    },
    seoTitle: {
      en: "Free Chinese Food Allergy Card Generator (Peanut, Gluten, Shellfish, Vegan, Halal)",
      zh: "免费中文食物过敏卡生成器（花生、麸质、甲壳类、纯素、清真）",
      ja: "無料・中国語アレルギーカード作成（ピーナッツ・グルテン・甲殻類・ヴィーガン）",
      ko: "무료 중국어 음식 알레르기 카드 생성기 (땅콩·글루텐·갑각류·비건·할랄)",
    },
    desc: {
      en: "Build a chef-proof Mandarin card that names the exact ingredients and oils to avoid. Show it full screen.",
      zh: "生成厨师能看懂的中文卡片，写明需要避免的具体食材和油品。可全屏展示。",
      ja: "料理人にそのまま見せられる全画面中国語アレルギーカードを作成。使用NG食材や油を明記。",
      ko: "주방장에게 바로 보여줄 수 있는 전체화면 중국어 알레르기 카드를 만들어 보세요.",
    },
    related: ["food-ordering-allergies", "bubble-tea-coffee"],
  },
  {
    id: "rescue-cards",
    icon: "sos",
    title: {
      en: "Pharmacy Lookup & Emergency Show-Cards",
      zh: "药店查询与紧急求助卡",
      ja: "中国薬局の市販薬検索＆緊急時レスキューカード",
      ko: "중국 약국 상비약 검색 & 긴급 구조 중국어 카드",
    },
    seoTitle: {
      en: "Buying Medicine in China: Symptom to Chinese Drug Name + Emergency Cards",
      zh: "在中国买药：症状对应中文药名 + 紧急求助卡",
      ja: "中国の薬局で薬を買う：症状別中国語薬名＆緊急時提示カード",
      ko: "중국 약국에서 약 사기: 증상별 중국어 약품명 & 긴급 카드",
    },
    desc: {
      en: "Pick a symptom to show the pharmacist the Chinese generic drug name, plus 5 full-screen rescue cards.",
      zh: "选择症状，向药师展示中文通用药名；另有 5 张全屏求助卡。",
      ja: "症状を選ぶだけで薬剤師に見せる中国語薬名を表示。さらに5種類の緊急全画面カード付き。",
      ko: "증상을 선택해 약사에게 보여줄 중국어 약품명과 5가지 전체화면 긴급 카드를 제공합니다.",
    },
    related: ["safety-health"],
  },
  {
    id: "powerbank-airport",
    icon: "battery",
    title: {
      en: "Power Bank CCC Checker & Airport Transfer Time",
      zh: "充电宝 CCC 自检与机场换乘时间",
      ja: "モバイルバッテリーCCC判定＆同都市2空港乗継計算",
      ko: "보조배터리 CCC 검사기 & 공항 간 환승 시간 계산",
    },
    seoTitle: {
      en: "Will My Power Bank Be Confiscated in China? CCC Rule Checker + Airport Transfer Times",
      zh: "我的充电宝在中国会被没收吗？CCC 规则自检 + 机场换乘时间",
      ja: "中国国内線モバイルバッテリーCCC認証チェッカー＆空港乗継時間",
      ko: "중국 국내선 보조배터리 CCC 인증 확인기 및 공항 환승 시간",
    },
    desc: {
      en: "Check if your power bank is allowed on Chinese domestic flights, and how much time you need to change airports.",
      zh: "检查你的充电宝能否带上中国国内航班，以及换机场需要多少时间。",
      ja: "中国国内線でモバイルバッテリーが没収されないか即判定。浦東⇔虹橋など異空港乗継も計算。",
      ko: "중국 국내선 보조배터리 반입 가능 여부와 푸둥↔홍차오 등 공항 간 최소 환승 시간을 확인하세요.",
    },
    related: ["domestic-flights", "airports"],
  },
  {
    id: "tax-refund-calculator",
    icon: "receipt",
    title: {
      en: "Tax Refund Calculator (Instant Refund)",
      zh: "离境退税计算器（即买即退）",
      ja: "中国 免税（即時還付）シミュレーター",
      ko: "중국 택스리펀 즉시 환급 계산기",
    },
    seoTitle: {
      en: "China Tourist Tax Refund Calculator — How Much Do You Get Back?",
      zh: "中国游客离境退税计算器——能退回多少钱？",
      ja: "中国旅行の免税（タックスリファンド）還付額計算ツール",
      ko: "중국 여행 택스리펀 환급액 계산기 (즉시 환급)",
    },
    desc: {
      en: "Enter what you spend in one store in one day and see your net refund after the agency fee.",
      zh: "输入同一天在同一家店的消费金额，查看扣除代理费后的实际退税额。",
      ja: "1店舗での購入金額を入力するだけで、手数料控除後の実質還付額（約9%）を計算。",
      ko: "매장 구매 금액을 입력하면 대행 수수료를 제외한 실제 환급액(약 9%)을 바로 계산합니다.",
    },
    related: ["shopping-tax-refund"],
  },
  {
    id: "currency-converter",
    icon: "coins",
    title: {
      en: "Currency Converter (CNY)",
      zh: "汇率换算（人民币）",
      ja: "人民元（CNY）為替レート換算ツール",
      ko: "중국 위안화(CNY) 환율 계산기",
    },
    seoTitle: {
      en: "CNY Currency Converter for China Travelers",
      zh: "面向中国游客的人民币汇率换算器",
      ja: "中国旅行向け 人民元⇔日本円・ドル換算ツール",
      ko: "중국 여행용 위안화(CNY) 원화·달러 환율 계산기",
    },
    desc: {
      en: "Convert between yuan and your home currency. Edit the rate to match your bank.",
      zh: "在人民币和你的本国货币之间换算。可修改汇率以匹配你的银行。",
      ja: "人民元と日本円・米ドル等を瞬時に換算。ご利用カード会社のレートに調整可能。",
      ko: "위안화와 원화·달러를 간편하게 환산하며 카드사 환율에 맞게 직접 수정할 수 있습니다.",
    },
    related: ["alipay-wechat-pay", "atm-cash-dcc"],
  },
  {
    id: "taxi-card",
    icon: "car",
    title: {
      en: "Taxi Address Card",
      zh: "打车地址卡",
      ja: "タクシー運転手提示用 中国語住所カード",
      ko: "택시 기사님께 보여주는 중국어 주소 카드",
    },
    seoTitle: {
      en: "Chinese Taxi Address Card — Show Your Hotel Address to the Driver",
      zh: "中文打车地址卡——把酒店地址给司机看",
      ja: "中国タクシー用 拡大中国語ホテル住所カード",
      ko: "중국 택시용 전체화면 호텔 중국어 주소 카드",
    },
    desc: {
      en: "Paste your hotel's Chinese name and address and show it full screen to the driver.",
      zh: "粘贴酒店的中文名称和地址，全屏展示给司机。",
      ja: "ホテルの中国語住所を貼るだけで、運転手に見せやすい特大サイズで全画面表示。",
      ko: "호텔의 중국어 이름과 주소를 입력해 기사님께 큰 글씨로 바로 보여주세요.",
    },
    related: ["metro-didi-maps"],
  },
  {
    id: "phrasebook",
    icon: "lang",
    title: {
      en: "Phrasebook — Tap to Show",
      zh: "常用语卡——点击展示",
      ja: "指さし中国語フレーズ帳（タップで拡大）",
      ko: "탭해서 보여주는 여행 중국어 회화 카드",
    },
    seoTitle: {
      en: "Essential Chinese Phrases for Travelers (Show-to-Local Cards)",
      zh: "旅行者必备中文短语（展示给当地人的卡片）",
      ja: "中国旅行で使える指さし中国語フレーズカード",
      ko: "중국 여행 필수 중국어 회화 (현지인 제시용 카드)",
    },
    desc: {
      en: "Useful phrases for food, transport, shopping and emergencies. Tap a card to show it full screen.",
      zh: "餐饮、交通、购物和紧急情况的常用短语。点击卡片即可全屏展示。",
      ja: "食事・移動・買い物・緊急時の必須フレーズ。タップで大きく全画面表示できます。",
      ko: "식당, 교통, 쇼핑, 긴급 상황 필수 표현을 탭 한 번으로 전체화면으로 보여주세요.",
    },
    related: ["food-ordering-allergies", "safety-health"],
  },
];

export const getTool = (id: string) => TOOLS.find((t) => t.id === id);
