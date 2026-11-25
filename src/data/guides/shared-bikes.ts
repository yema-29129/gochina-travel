import type { Guide } from "@/data/types";
import { t2, t4 } from "@/lib/i18n";

const guide: Guide = {
  slug: "shared-bikes",
  category: "transport",
  icon: "map",
  title: t4(
    "How to Rent Shared Bikes in China (HelloRide, Meituan & Qingju)",
    "中国共享单车攻略（2026）：哈啰、美团、青桔扫码骑行、免押金与防扣调度费",
    "中国シェアサイクル完全ガイド（2026）：アリペイで借り方・料金・駐輪罰金回避",
    "중국 공유자전거 완벽 가이드 (2026): 알리페이·위챗 대여법, 요금 및 반납 벌금 방지"
  ),
  seoTitle: t4(
    "How Foreigners Use Shared Bikes in China (2026): Alipay, Pricing & Parking Fines",
    "外国人怎么骑中国共享单车（2026）：支付宝微信免押金解锁、价格与防扣调度费申诉",
    "中国シェアサイクルの乗り方（2026）：HelloRide・美団をアリペイで借りる手順と罰金対策",
    "중국 공유자전거 타는 법 (2026): 헬로바이크·메이퇀 알리페이 대여·요금·주차 구역"
  ),
  summary: t4(
    "Unlock blue HelloRide, yellow Meituan and green DiDi Qingju bikes in China for ¥1.5–2 per 30 min using Alipay or WeChat—plus white 'P' parking box rules, fine appeals and best rides.",
    "外国人/港澳台游客用支付宝或微信免押金解锁蓝色哈啰、黄色美团、青绿色滴滴青桔共享单车，半小时仅 1.5–2 元，附白色 P 区还车、误扣调度费申诉退钱与最美骑行路线。",
    "中国の青（HelloRide）・黄（美団）・緑（青桔）シェアサイクルをアリペイ・WeChatでデポジット無し・30分1.5〜2元で借りる方法と、15〜30元の駐輪罰金を防ぐルールを解説。",
    "파란 헬로바이크, 노란 메이퇀, 초록 칭쥐 공유자전거를 보증금 없이 알리페이·위챗으로 30분 1.5~2위안에 이용하는 법과 주차 구역 벌금 방지 팁을 정리했습니다."
  ),
  updated: "2026-11-25",
  readMin: 6,
  keyPoints: [
    t4(
      "Three colors on every street: Blue = HelloRide (哈啰), Yellow = Meituan (美团), Green = DiDi Qingju (滴滴青桔). No separate Chinese bike app is needed.",
      "街头三种颜色：蓝色是哈啰（HelloRide）、黄色是美团单车（Meituan）、青绿色是滴滴青桔（Qingju），无需单独下载中文单车 App。",
      "街の3色：青＝HelloRide（哈啰）、黄＝美団（Meituan）、緑＝DiDi青桔（Qingju）。専用アプリ不要でアリペイ・WeChatだけで乗れます。",
      "거리의 3가지 색상: 파랑=헬로바이크(哈啰), 노랑=메이퇀(美团), 초록=디디 칭쥐(青桔). 별도 앱 없이 알리페이·위챗으로 바로 이용 가능."
    ),
    t4(
      "Scan the handlebar QR code with Alipay (or WeChat for yellow Meituan bikes), authorize your foreign phone number, and ride for ¥1.5–2 per 30 minutes (~US$0.25).",
      "直接用支付宝扫车把二维码（美团黄车用微信扫），授权境外手机号即可免押金开锁，骑半小时仅 1.5–2 元人民币（约 0.25 美元）。",
      "ハンドルのQRをアリペイ（黄色の美団はWeChat）で読み取り、日本の電話番号を認証すればデポジット不要で30分1.5〜2元（約35円）から乗車可能。",
      "핸들 QR을 알리페이(노란 메이퇀은 위챗)로 스캔하고 해외 번호 인증만 하면 보증금 없이 30분 1.5~2위안에 탈 수 있습니다."
    ),
    t4(
      "Always park inside painted white 'P' bike boxes (and face the same direction in Bluetooth-fenced scenic zones), then tap Lock in the app to avoid ¥15–30 relocation fines.",
      "还车必须停进地面白色“P”非机动车停放框内（蓝牙电子围栏区须车头朝向一致），并在小程序点“还车”听到落锁声，否则可能扣 15–30 元调度费。",
      "返却は必ず道路の白い「P」枠内へ（Bluetoothエリアは車体向きも揃える）。アプリで「還車」を押し施錠音を確認しないと15〜30元の移動罰金が発生します。",
      "반납은 반드시 흰색 'P' 주차 구역 안에 세우고(블루투스 구역은 방향 일치) 앱에서 반납 버튼을 눌러 잠금 소리를 확인해야 15~30위안 벌금을 피합니다."
    ),
    t4(
      "Shared e-bikes require a helmet and are not available in central Beijing or central Shanghai.",
      "共享电单车必须佩戴头盔，且北京和上海主城区没有共享电单车。",
      "電動シェアバイクはヘルメット着用が必須で、北京・上海の中心部には設置されていません。",
      "공유 전기자전거는 헬멧 착용이 필수이며 베이징·상하이 도심에는 운영되지 않습니다."
    ),
  ],
  sections: [
    {
      id: "three-bike-brands",
      heading: t2("The three shared bike colors & how to unlock them", "街头三种共享单车与一键解锁步骤"),
      blocks: [
        t2b(
          "Chinese cities have wide, flat, separated bike lanes—cycling is one of the best ways to experience local life for pennies. You do not need to download any standalone Chinese bike app.",
          "中国城市的非机动车道宽敞平坦且与机动车道隔离，骑车是花极少钱体验本地生活的绝佳方式，而且根本不用单独下载中文单车 App。"
        ),
        {
          type: "table",
          head: [
            t2("Bike Color & Brand", "车身颜色与品牌"),
            t2("App to Scan QR Code", "推荐扫码工具"),
            t2("Typical Cost", "常规计费"),
          ],
          rows: [
            [
              t2("Blue — HelloRide (哈啰单车)", "蓝色 —— 哈啰单车（HelloRide）"),
              t2("Alipay (best for foreigners)", "支付宝（最推荐外国人用）"),
              t2("¥1.5–2 per 30 min (~US$0.25)", "1.5–2 元 / 30 分钟（约 0.25 美元）"),
            ],
            [
              t2("Yellow — Meituan Bike (美团单车)", "黄色 —— 美团单车（Meituan）"),
              t2("WeChat (scan directly)", "微信（直接扫一扫）"),
              t2("¥1.5–2 per 30 min", "1.5–2 元 / 30 分钟"),
            ],
            [
              t2("Green — DiDi Qingju (滴滴青桔)", "青绿色 —— 滴滴青桔（Qingju）"),
              t2("Alipay or WeChat", "支付宝或微信"),
              t2("¥1.5–2 per 30 min", "1.5–2 元 / 30 分钟"),
            ],
          ],
        },
        {
          type: "steps",
          items: [
            t2(
              "Open Alipay (for Blue HelloRide / Green Qingju) or WeChat (for Yellow Meituan) and tap Scan.",
              "打开支付宝（扫蓝色哈啰或青绿色青桔）或微信（扫黄色美团），点击“扫一扫”。"
            ),
            t2(
              "Point your camera at the QR code in the center of the handlebars (or on the rear lock).",
              "对准车把正中央（或后轮车锁上）的二维码。"
            ),
            t2(
              "Authorize your phone number when prompted (foreign numbers are supported) and confirm unlock—the rear lock pops open with a click.",
              "按提示授权手机号（支持境外手机号）并确认开锁，“咔哒”一声车锁自动弹开。"
            ),
            t2(
              "Adjust the seat height lever, check the brakes, and ride in the dedicated bike lane on the right.",
              "调好车座高度、捏一下刹车，靠右侧非机动车道骑行。"
            ),
          ],
        },
        { type: "ad" },
      ],
    },
    {
      id: "parking-rules-fines",
      heading: t2("Parking rules: how to avoid ¥15–30 relocation fines", "还车红线：如何避免被扣 15–30 元调度费"),
      blocks: [
        {
          type: "callout",
          tone: "warn",
          title: t2("Never drop your bike on the sidewalk or tactile paving", "严禁随手停在盲道或马路牙子上"),
          text: t2(
            "China enforces strict geofenced parking. If you try to end your ride outside a legal zone, the app will either refuse to lock or charge a ¥15–30 vehicle relocation fine.",
            "中国城市严格执行电子围栏还车。如果在禁停区强行还车，小程序要么锁不上继续计费，要么直接扣 15–30 元车辆调度费。"
          ),
        },
        {
          type: "list",
          items: [
            t2(
              "Look for white painted 'P' non-motorized vehicle parking boxes (非机动车停放区) along the sidewalk—usually every 50–100 meters and outside every metro exit.",
              "把车推进路边地面画着白色方框的“P”非机动车停放区（通常每 50–100 米及地铁口外都有）。"
            ),
            t2(
              "In popular tourist areas and city centers, high-precision Bluetooth beacon electronic fences (蓝牙道钉) require your bike to be inside the white box and facing the same direction as the other bikes.",
              "在热门景区和核心商圈实行高精度蓝牙道钉电子围栏，必须把车停进白框内且车头朝向与旁边车辆保持一致。"
            ),
            t2(
              "Tap 'Lock / 还车' inside the mini-program (or close the manual latch if equipped) and wait until you hear the lock chime and see the trip summary screen before walking away.",
              "在手机小程序里点击“Lock / 还车”（若有手动锁扣则拉下），务必听到落锁提示音并看到订单结算页再离开。"
            ),
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: t2("2026 Pro Tip: Charged a ¥15–30 fine by mistake? Appeal in 30 seconds", "2026 实测省钱与申诉技巧：误扣调度费可 30 秒退回"),
          text: t2(
            "GPS drift near tall buildings sometimes flags a legally parked bike. Take a quick photo of your bike inside the white 'P' box, tap Customer Service (客服) → 'Parking Fee Appeal / 调度费申诉' in the HelloRide/Meituan mini-program, and upload the photo—first-time appeals are usually refunded automatically within minutes. Riding 4+ times in a week? Buy a 7-day ride pass (¥8–12) right inside the mini-program to save 50%.",
            "高楼密集区偶尔会出现 GPS 漂移导致正常停在白框内仍被扣调度费。顺手拍一张单车停在白色“P”框内的照片，在哈啰/美团小程序里点“客服 → 调度费申诉”上传照片，首次申诉通常几分钟内自动全额退还。如果一周内计划骑 4 次以上，可以直接在小程序买 7 天次卡/周卡（约 8–12 元），比单次扣费省一半。"
          ),
        },
      ],
    },
    {
      id: "ebikes-and-best-rides",
      heading: t2("Shared e-bikes & the best places to cycle in China", "共享电单车规则与全中国最美骑行路线"),
      blocks: [
        t2b(
          "In smaller cities and scenic towns you will also see pedal-assisted shared e-bikes (共享电单车) with a helmet stored in the basket. By law you must wear the helmet when riding an e-bike. Note that central Beijing and central Shanghai do NOT allow shared e-bikes—only regular pedal bicycles.",
          "在中小城市和景区城镇还能见到带脚踏板的共享电单车，车筐里配有头盔，骑行必须按规定戴好头盔。注意北京和上海主城区没有共享电单车，只有普通脚踏共享单车。"
        ),
        {
          type: "list",
          items: [
            t2(
              "Beijing Hutongs (北京胡同): glide effortlessly through Shichahai, Gulou and historic alleyways where taxis cannot enter.",
              "北京胡同：轻松穿梭什刹海、鼓楼与出租车开不进的老胡同。"
            ),
            t2(
              "Shanghai Former French Concession / Wukang Road (上海梧桐区/武康路): tree-lined avenues packed with cafés, boutiques and historic villas.",
              "上海梧桐区（武康路周边）：绿树成荫的林荫大道，沿途遍布咖啡馆、买手店和老洋房。"
            ),
            t2(
              "Hangzhou West Lake (杭州西湖): flat lakeside paths around Su Causeway and Bai Causeway (note: some inner causeways restrict bikes on busy weekends).",
              "杭州西湖：沿湖平缓骑行道风景绝美（注意节假日或繁忙时段部分堤岸可能限行）。"
            ),
            t2(
              "Guilin Yangshuo Ten-Mile Gallery (桂林阳朔十里画廊): cruise past karst limestone peaks and rice paddies.",
              "桂林阳朔十里画廊：一路骑行穿越喀斯特峰林与田园风光。"
            ),
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: t2("Do I need a deposit to rent shared bikes in China?", "在中国骑共享单车需要交押金吗？"),
      a: t2(
        "No. HelloRide, Meituan and Qingju are deposit-free when unlocked via Alipay or WeChat.",
        "不需要。通过支付宝或微信扫码解锁哈啰、美团和青桔均为免押金骑行。"
      ),
    },
    {
      q: t2("Why won't the app let me lock my bike at the end of a ride?", "骑完车为什么小程序里点不了还车？"),
      a: t2(
        "You are likely outside a designated white 'P' parking box, or your bike is not aligned inside a Bluetooth electronic fence. Push the bike into the nearest white 'P' zone, line up the handlebars with the other bikes, and tap Lock again.",
        "通常是因为不在白色“P”停放区内，或在蓝牙电子围栏区车头未对齐。把车推进最近的白框内、与旁边单车同向摆正后再点还车即可。"
      ),
    },
    {
      q: t2("Can I ride a shared bike with a child?", "能骑共享单车载小孩吗？"),
      a: t2(
        "No. Shared bikes have no child seats and carrying passengers on the basket or frame is unsafe and prohibited.",
        "不行。共享单车没有儿童座椅，用前车筐或车架载人既危险又违规。"
      ),
    },
    {
      q: t2("Are shared bikes safe in Chinese traffic?", "在中国街头骑共享单车安全吗？"),
      a: t2(
        "Main roads in major cities have dedicated bike lanes, which makes riding pleasant—just watch closely for silent electric delivery scooters sharing the bike lane and always check before turning.",
        "大城市主干道都有独立非机动车道，整体骑行体验很好；只需留意同车道里几乎静音的外卖电动车，转弯前务必回头观察。"
      ),
    },
  ],
  related: ["metro-didi-maps", "alipay-wechat-pay", "driving-in-china", "essential-apps"],
};

function t2b(en: string, zh: string) {
  return { type: "p", text: t2(en, zh) } as const;
}

export default guide;
