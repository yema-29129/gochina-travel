import type { L } from "@/lib/i18n";
import type { AffiliateId } from "@/data/types";

/**
 * Affiliate links.
 * - Airalo & Klook are auto-monetized via Travelpayouts Drive Switch Links (ID 811111).
 * - Wise uses your personal invite link.
 * - Trip.com official partner links will be swapped in once Trip.com review completes.
 */
export const AFFILIATES: Record<AffiliateId, { url: string; title: L; text: L; cta: L }> = {
  tripTrains: {
    url: "https://www.trip.com/trains/china/",
    title: {
      en: "Book China high-speed train tickets in English",
      zh: "用英文预订中国高铁票",
      ja: "中国新幹線チケットを日本語・英語で簡単予約",
      ko: "중국 고속철도(KTX급) 티켓 간편 예매",
    },
    text: {
      en: "Trip.com accepts foreign cards, shows English station names and queues tickets for you when they go on sale.",
      zh: "Trip.com 支持外国银行卡，显示英文站名，并会在开售时为你自动排队抢票。",
      ja: "Trip.comは日本のクレジットカード対応。発売開始時の自動予約リクエストも利用できます。",
      ko: "Trip.com은 한국 신용카드 결제를 지원하며 티켓 오픈 시 자동 예매 대기 기능을 제공합니다.",
    },
    cta: {
      en: "Search trains on Trip.com",
      zh: "在 Trip.com 搜索火车票",
      ja: "Trip.comで新幹線を検索",
      ko: "Trip.com에서 기차표 검색",
    },
  },
  tripHotels: {
    url: "https://www.trip.com/hotels/",
    title: {
      en: "Foreigner-friendly hotels",
      zh: "接待外国人的酒店",
      ja: "外国人宿泊対応の中国ホテルを探す",
      ko: "외국인 투숙 가능 중국 호텔 찾기",
    },
    text: {
      en: "Filter for hotels that accept foreign guests. Booking confirmations include the hotel's Chinese address for taxis.",
      zh: "筛选可接待外国客人的酒店。预订确认单包含酒店中文地址，方便打车。",
      ja: "外国籍でも安心して泊まれるホテルを絞り込み。予約確認書にタクシー用の中国語住所も記載。",
      ko: "외국인 투숙이 보장되는 호텔만 확인하세요. 예약 확인서에 택시용 중국어 주소가 포함됩니다.",
    },
    cta: {
      en: "Find hotels",
      zh: "查找酒店",
      ja: "ホテルを検索",
      ko: "호텔 검색하기",
    },
  },
  tripTours: {
    url: "https://www.trip.com/things-to-do/",
    title: {
      en: "Skip the ticket rush: guided tours with guaranteed entry",
      zh: "不用抢票：含保底门票的导览团",
      ja: "争奪戦を回避：入場チケット確約ツアー",
      ko: "티켓팅 스트레스 없이: 입장권 포함 투어",
    },
    text: {
      en: "Tours for the Forbidden City, Terracotta Army and more include tickets — no 8 PM ticket race.",
      zh: "故宫、兵马俑等景点的导览团已包含门票——无需晚上 8 点抢票。",
      ja: "故宮・兵馬俑などの人気スポットはチケット込みツアーなら20時の発売争奪戦が不要です。",
      ko: "자금성·병마용 등 인기 명소는 티켓 포함 투어로 예약하면 20시 치열한 티켓팅을 피할 수 있습니다.",
    },
    cta: {
      en: "See tours with tickets",
      zh: "查看含门票的导览团",
      ja: "チケット付きツアーを見る",
      ko: "티켓 포함 투어 보기",
    },
  },
  tripFlights: {
    url: "https://www.trip.com/flights/",
    title: {
      en: "Need an onward ticket?",
      zh: "需要一张离境票？",
      ja: "240時間トランジット用の第三国行き航空券",
      ko: "240시간 경유 무비자용 제3국행 항공권",
    },
    text: {
      en: "For 240-hour transit you need a confirmed ticket to a third country or region, e.g. Hong Kong, Seoul or Tokyo.",
      zh: "240 小时过境免签需要一张前往第三国或地区（如香港、首尔、东京）的确认机票或车票。",
      ja: "240時間トランジットビザ免除には、香港・ソウル・第三国行きの確定済み出国チケットが必要です。",
      ko: "240시간 경유 무비자 이용 시 홍콩·도쿄 등 제3국/지역으로 출국하는 확정 티켓이 필요합니다.",
    },
    cta: {
      en: "Search onward flights & trains",
      zh: "搜索离境机票和火车票",
      ja: "出国便を検索",
      ko: "출국 항공권·기차표 검색",
    },
  },
  airportTransfer: {
    url: "https://www.trip.com/airport-transfers/",
    title: {
      en: "Late arrival? Book an airport pickup",
      zh: "深夜抵达？预订接机",
      ja: "深夜到着でも安心：空港プライベート送迎",
      ko: "심야 도착? 공항 픽업 서비스 예약",
    },
    text: {
      en: "English-speaking drivers wait with a name sign — no metro, no taxi queue after midnight.",
      zh: "会说英语的司机举牌等候——午夜后不用坐地铁、不用排队等出租车。",
      ja: "到着ロビーでネームボードを持ってお出迎え。深夜のタクシー行列や言葉の壁も安心です。",
      ko: "도착 출구에서 피켓을 들고 대기해 심야 택시 대기나 언어 걱정 없이 호텔까지 바로 이동합니다.",
    },
    cta: {
      en: "Book airport pickup",
      zh: "预订接机",
      ja: "空港送迎を予約",
      ko: "공항 픽업 예약하기",
    },
  },
  esim: {
    url: "https://www.airalo.com/china-esim",
    title: {
      en: "China International Roaming eSIM — Seamless Access to Google, WhatsApp & Maps",
      zh: "中国国际漫游 eSIM——合规漫游通道无缝使用 Google、WhatsApp 与地图",
      ja: "中国国際ローミングeSIM — Google・LINE・Instagramがそのまま使える",
      ko: "중국 국제 로밍 eSIM — 카카오톡·인스타그램·구글맵 바로 사용",
    },
    text: {
      en: "Seamless access to Google, WhatsApp, Maps & Instagram via International Data Roaming (zero configuration needed). Install at home, switch on when you land.",
      zh: "通过合规国际数据漫游路由，零配置即可无缝使用 Google、WhatsApp、地图与 Instagram。出发前在家装好，落地即开。",
      ja: "国際データローミング経由で設定不要。出発前に自宅でインストールし、到着後にONにするだけで快適に接続できます。",
      ko: "국제 데이터 로밍을 통해 별도 설정 없이 한국 앱을 그대로 사용할 수 있습니다. 출국 전 설치하고 도착 후 켜기만 하세요.",
    },
    cta: {
      en: "Get a China eSIM",
      zh: "获取中国 eSIM",
      ja: "中国eSIMを見る",
      ko: "중국 eSIM 보기",
    },
  },
  wise: {
    url: "https://wise.com/invite/ilpc/fangl288",
    title: {
      en: "Avoid your bank's 3% foreign transaction fee",
      zh: "避免银行 3% 的境外交易手续费",
      ja: "クレカの海外事務手数料（約3%）を節約",
      ko: "해외 결제 수수료 3% 아끼는 Wise 카드",
    },
    text: {
      en: "A zero-FX-fee card such as Wise or Revolut, linked to Alipay, saves 3% on every payment.",
      zh: "将 Wise 或 Revolut 等零货币转换费的卡绑定支付宝，每笔付款可省 3%。",
      ja: "Wiseデビットカードをアリペイに連携すれば、すべての決済で為替手数料を大幅に節約できます。",
      ko: "Wise 카드를 알리페이에 등록하면 중국 현지 결제 시 환전 수수료를 크게 아낄 수 있습니다.",
    },
    cta: {
      en: "Get a Wise card",
      zh: "申请 Wise 卡",
      ja: "Wiseカードを作る",
      ko: "Wise 카드 만들기",
    },
  },
  insurance: {
    url: "https://safetywing.com/",
    title: {
      en: "Travel medical insurance",
      zh: "旅行医疗保险",
      ja: "海外旅行医療保険（SafetyWing）",
      ko: "해외 여행자 의료보험",
    },
    text: {
      en: "International clinics in China can cost hundreds of dollars per visit. Make sure you are covered.",
      zh: "中国的国际诊所每次就诊可能花费数百美元。请确保你有保险。",
      ja: "中国の外資系クリニックは1回の診察で数万円かかることがあります。必ず保険にご加入ください。",
      ko: "중국 내 국제 병원은 1회 진료비가 수백 달러에 달할 수 있으니 여행자 보험을 꼭 준비하세요.",
    },
    cta: {
      en: "Compare travel insurance",
      zh: "比较旅行保险",
      ja: "保険プランを見る",
      ko: "여행자 보험 비교",
    },
  },
  survivalPack: {
    url: "/en/tools/esim-calculator",
    title: {
      en: "Free Offline Cabin Activation Card & Rescue Kit",
      zh: "免费机舱离线激活急救图与随身工具包",
      ja: "無料・中国旅行オフラインお助けカード",
      ko: "무료 중국 여행 오프라인 생존 카드",
    },
    text: {
      en: "Save our offline eSIM cabin activation PNG, 49-city metro maps, and fullscreen Mandarin show-cards before boarding.",
      zh: "登机前一键保存机舱 eSIM 急救图、全国 49 城地铁图与全屏中文求助卡。",
      ja: "搭乗前にeSIM設定カード・全国49都市地下鉄マップ・指さし中国語カードをスマホに保存。",
      ko: "탑승 전 eSIM 오프라인 개통 카드, 전국 49개 도시 지하철 노선도, 중국어 카드를 저장하세요.",
    },
    cta: {
      en: "Get free offline cards",
      zh: "免费获取离线卡",
      ja: "無料カードを入手",
      ko: "무료 카드 받기",
    },
  },
};
