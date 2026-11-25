import type { Guide } from "@/data/types";
import { t2, t4 } from "@/lib/i18n";

const guide: Guide = {
  slug: "240-hour-transit",
  category: "visa",
  icon: "visa",
  title: t4(
    "China 240-Hour Visa-Free Transit (2026): Rules, 65 Ports, HK Rail Trap & TIMATIC Card",
    "中国 240 小时过境免签（2026）：65 口岸、香港西九龙大坑与航司 TIMATIC 救命卡",
    "中国240時間トランジットビザ免除（2026）：全65口岸・香港高速鉄道の罠・空港TIMATIC提示カード",
    "중국 240시간 경유 무비자 완벽 가이드 (2026): 65개 입국항·홍콩 고속철 주의·TIMATIC 카드"
  ),
  seoTitle: t4(
    "China 240-Hour Visa-Free Transit Rules (2026): US Citizens, 65 Ports, HK Rail & TIMATIC Card",
    "2026 中国 240 小时过境免签规则：65 口岸全表、香港西九龙能出不能进与值机救命卡",
    "中国240時間ビザ免除トランジット完全解説（2026）：A→中国→Cルール・全65口岸・空港提示カード",
    "중국 240시간 무비자 경유 규정 (2026): A→중국→C 조건·65개 입국항·공항 체크인 카드"
  ),
  summary: t4(
    "China's 240-hour visa-free transit explained: A→China→C rule, all 65 ports, interactive Airline Check-In TIMATIC Rescue Card, Hong Kong West Kowloon entry vs exit trap, and Urumqi technical-stop ban.",
    "中国 240 小时过境免签终极实操：A→中国→C 规则、65 个口岸全表、一键全屏航司值机 TIMATIC 救命卡、香港西九龙能出不能进暗雷与国内经停禁区。",
    "中国240時間（10日間）トランジットビザ免除の完全ガイド。A→中国→Cルール、全65口岸、空港チェックイン拒否を防ぐTIMATIC提示カード、香港西九龍駅の入出国ルールまで網羅。",
    "중국 240시간(10일) 경유 무비자 실전 가이드: A→중국→C 규정, 65개 입국항, 공항 체크인 거부 방지 TIMATIC 카드, 홍콩 서구룡역 출입국 함정까지 완벽 정리."
  ),
  updated: "2026-11-25",
  readMin: 13,
  keyPoints: [
    t4(
      "Only the leg immediately before and after Mainland China counts: A → Mainland China → C, and A must not equal C.",
      "只看紧邻中国内地的前后航段：A → 中国内地 → C，且 A 不能等于 C。",
      "中国本土の直前（A）と直後（C）の区間のみ判定され、A≠Cである必要があります。",
      "중국 본토 직전(A)과 직후(C) 구간만 따지며 반드시 A ≠ C여야 합니다."
    ),
    t4(
      "Hong Kong, Macau & Taiwan count as separate regions — BUT you can EXIT via Hong Kong West Kowloon High-Speed Rail / Shenzhen land borders, NOT ENTER Mainland China via land/rail on 240h transit!",
      "香港/澳门/台湾算第三地——但注意：你可以坐高铁去香港西九龙或步行罗湖/福田“出境”，但绝不能从香港坐西九龙高铁或陆路口岸“入境”走 240h 过境免签！",
      "香港・マカオ・台湾は第三地域扱い。ただし香港西九龍高速鉄道や深セン陸路は「出国OK・入国NG」の落とし穴に要注意！",
      "홍콩·마카오·대만은 제3국 인정! 단, 홍콩 서구룡 고속철 및 선전 육로 국경은 '출국 가능·입국 불가' 함정에 주의하세요."
    ),
    t4(
      "The 240 hours start at 00:00 the day after you land, so you get the rest of your arrival day free.",
      "240 小时从落地次日 00:00 开始计算，所以落地当天剩余时间是白送的。",
      "240時間は入国翌日の00:00からカウント開始（到着当日は実質無料）。",
      "240시간은 입국 다음 날 00:00부터 계산되어 도착 당일 남은 시간은 보너스입니다."
    ),
    t4(
      "Beware domestic technical stops (e.g. Europe → Urumqi → Chengdu): if the first stop in China is NOT one of the 65 ports, airlines will deny boarding.",
      "警惕国内经停暗雷（如欧洲→乌鲁木齐→成都）：只要第一落地经停点不在 65 个口岸内，始发地直接拒登机！",
      "中国国内の経由便（例：欧州→ウルムチ→成都）に注意。最初の到着地が65口岸外だと搭乗拒否されます。",
      "중국 내 경유 항공편 주의(예: 유럽→우루무치→청두): 첫 경유지가 65개 입국항에 없으면 탑승 거부됩니다."
    ),
    t4(
      "Carry our fullscreen Airline Check-In TIMATIC Rescue Card below + printed onward ticket & hotel confirmations in case departure airport staff don't know the 2026 rule.",
      "出发前存好下方的“航司值机 TIMATIC 救命卡”并打印英文联程票与酒店单，防止海外小机场地勤因不熟新政误拒登机。",
      "海外空港の係員が最新ルールを知らない場合に備え、下の「TIMATIC提示カード」と印刷済みの第三国行き航空券・ホテル予約票を必ず持参。",
      "해외 공항 체크인 직원이 최신 규정을 모를 때를 대비해 아래 'TIMATIC 안내 카드'와 영문 출국 항공권·호텔 예약서를 출력해 지참하세요."
    ),
  ],
  sections: [
    {
      id: "check-your-route",
      heading: t2("Check your route first", "先检查你的路线"),
      blocks: [
        {
          type: "p",
          text: t2(
            "240-hour visa-free transit lets citizens of 57 countries (including the USA, Mexico, Indonesia and Vietnam) stay in China for up to 10 days without a visa — if the route and the areas you visit follow the rules. One mistake and you can be refused boarding at the airport. Use our checker to validate your itinerary and calculate your exact exit deadline.",
            "240 小时过境免签让 57 国公民（含美国、墨西哥、印度尼西亚和越南）可以免签在中国停留最长 10 天——前提是路线和游览区域符合规定。错一条就可能在机场被拒登机。使用我们的检测器验证你的行程并算出精确的最晚离境时间。"
          ),
        },
        { type: "tool", tool: "visa-checker" },
      ],
    },
    {
      id: "a-china-c-rule",
      heading: t2("The A → Mainland China → C rule (A ≠ C)", "“A → 中国内地 → C”规则（A ≠ C）"),
      blocks: [
        {
          type: "p",
          text: t2(
            "Border officers and airline systems do not look at where your whole trip starts. They only look at where the flight INTO Mainland China departs from (A) and where the flight, train or ship LEAVING Mainland China arrives (C). A and C must be different countries or regions.",
            "边检官和航司系统不看你整个行程的起点，只看飞进中国内地那趟航班的起飞地（A），以及离开中国内地那趟航班、列车或轮船的落脚地（C）。A 和 C 必须是不同的国家或地区。"
          ),
        },
        {
          type: "callout",
          tone: "danger",
          title: t2("The trap: Los Angeles → Tokyo → Shanghai → Tokyo → Los Angeles", "陷阱：洛杉矶 → 东京 → 上海 → 东京 → 洛杉矶"),
          text: t2(
            "A US traveller books Los Angeles → connect at Tokyo Narita → Shanghai (6 days) → connect at Tokyo Haneda → Los Angeles. He thinks it is a US round trip, but to the border officers his immediate legs are Japan → Mainland China → Japan (A = C = Japan). That is a prohibited round trip and he will be refused a boarding pass at Tokyo — 100% of the time.",
            "一名美国游客买了联程票：洛杉矶 → 东京成田转机 → 上海（玩 6 天）→ 东京羽田转机 → 洛杉矶。他以为自己是美国往返，但在边检眼里，他的紧邻航段是“日本 → 中国内地 → 日本”（A = C = 日本）。这属于违规折返，100% 会在东京机场被拒发登机牌。"
          ),
        },
        {
          type: "callout",
          tone: "tip",
          title: t2("The fix", "正确改法"),
          text: t2(
            "Keep the outbound Los Angeles → Tokyo → Shanghai, but change the return to Shanghai (or fly to Guangzhou and take the high-speed train) → Hong Kong / Seoul / Taipei → Los Angeles. For immigration purposes, Hong Kong, Macau and Taiwan all count as separate regions outside Mainland China.",
            "去程保持“洛杉矶 → 东京 → 上海”，回程改为“上海（或飞到广州坐高铁）→ 中国香港 / 首尔 / 台北 → 洛杉矶”。在出入境管理中，中国香港、中国澳门、中国台湾都算作中国内地以外的独立地区。"
          ),
        },
        { type: "affiliate", id: "tripFlights" },
      ],
    },
    {
      id: "documents",
      heading: t2("Document requirements", "证件要求"),
      blocks: [
        {
          type: "list",
          items: [
            t2("Passport valid for at least 3 months.", "护照有效期不少于 3 个月。"),
            t2(
              "Before boarding, you must hold a ticket (flight, ship or train) to a third country or region departing within 240 hours, with a confirmed date and seat number.",
              "登机前必须持有 240 小时内前往第三国或地区、已确定日期及座位号的机票、船票或列车票。"
            ),
            t2("Standby tickets are not valid.", "候补票（Standby）无效。"),
            t2(
              "Print an English itinerary of your onward ticket and carry it with you.",
              "打印英文版联程行程单并随身携带。"
            ),
          ],
        },
      ],
    },
    {
      id: "how-240-hours-are-counted",
      heading: t2("How the 240 hours are counted", "240 小时怎么计算"),
      blocks: [
        {
          type: "p",
          text: t2(
            "The 240 hours (10 days) do NOT start when your wheels touch down. They start at 00:00 on the day after you enter. Your deadline to pass exit immigration is 23:59:59 on the 10th day after your arrival day.",
            "240 小时（10 天）并不是从飞机落地那一刻开始算，而是从入境次日 00:00 开始算。最晚过边检出境的截止时间是落地日之后第 10 天的 23:59:59。"
          ),
        },
        {
          type: "table",
          head: [t2("Step", "步骤"), t2("Example", "示例")],
          rows: [
            [t2("You land", "落地"), t2("06:00 on 1 October at Shanghai Pudong", "10 月 1 日 06:00 降落上海浦东")],
            [t2("Free hours on arrival day", "落地当天白送的时间"), t2("18 hours (06:00–24:00 on 1 October)", "18 小时（10 月 1 日 06:00–24:00）")],
            [t2("Hour 1 starts", "第 1 小时开始"), t2("00:00 on 2 October", "10 月 2 日 00:00")],
            [t2("Exit deadline", "最晚出境时间"), t2("23:59 on 11 October", "10 月 11 日 23:59")],
            [t2("Total time in China", "实际在华总时长"), t2("258 hours (18 + 240)", "258 小时（18 + 240）")],
          ],
        },
      ],
    },
    {
      id: "ports-and-areas",
      heading: t2("All 24 provinces and 65 ports, with allowed areas", "全部 24 个省份、65 个口岸及允许活动区域"),
      blocks: [
        {
          type: "callout",
          tone: "warn",
          text: t2(
            "Many bloggers say you can travel freely in all 24 provinces. That is wrong. 19 provinces allow travel province-wide, but Sichuan, Yunnan, Guangxi, Shanxi, Jiangxi and Heilongjiang only allow specific cities. Going into one wrong city counts as illegal stay.",
            "很多博主说 240 小时过境免签可以在 24 个省随便玩——这是错的。19 个省份允许全省活动，但四川、云南、广西、山西、江西和黑龙江只允许去指定城市。去错一个城市就构成非法居留。"
          ),
        },
        {
          type: "table",
          head: [t2("#", "序号"), t2("Province", "省份"), t2("Entry/exit ports", "入境/出境口岸"), t2("Where you may stay and travel", "允许停留和活动的范围")],
          rows: [
            ["1", t2("Beijing", "北京市"), t2("1. Beijing Capital International Airport (PEK); 2. Beijing Daxing International Airport (PKX)", "1. 北京首都国际机场（PEK）；2. 北京大兴国际机场（PKX）"), t2("All of Beijing", "北京市全域")],
            ["2", t2("Tianjin", "天津市"), t2("3. Tianjin Binhai International Airport (TSN); 4. Tianjin International Cruise Home Port (seaport, passenger)", "3. 天津滨海国际机场（TSN）；4. 天津国际邮轮母港（海港口岸客运）"), t2("All of Tianjin", "天津市全域")],
            ["3", t2("Hebei", "河北省"), t2("5. Shijiazhuang Zhengding International Airport (SJW); 6. Qinhuangdao Seaport (passenger)", "5. 石家庄正定国际机场（SJW）；6. 秦皇岛海港口岸（客运）"), t2("All of Hebei", "河北省全域")],
            ["4", t2("Liaoning", "辽宁省"), t2("7. Shenyang Taoxian International Airport (SHE); 8. Dalian Zhoushuizi International Airport (DLC); 9. Dalian Seaport (passenger)", "7. 沈阳桃仙国际机场（SHE）；8. 大连周水子国际机场（DLC）；9. 大连海港口岸（客运）"), t2("All of Liaoning", "辽宁省全域")],
            ["5", t2("Shanghai", "上海市"), t2("10. Shanghai Pudong International Airport (PVG); 11. Shanghai Hongqiao International Airport (SHA); 12. Shanghai Seaport (Wusongkou International Cruise Terminal / International Passenger Center)", "10. 上海浦东国际机场（PVG）；11. 上海虹桥国际机场（SHA）；12. 上海海港口岸（吴淞口国际邮轮港/国客中心客运）"), t2("All of Shanghai", "上海市全域")],
            ["6", t2("Jiangsu", "江苏省"), t2("13. Nanjing Lukou International Airport (NKG); 14. Sunan Shuofang International Airport (Wuxi/Suzhou, WUX); 15. Yangzhou Taizhou International Airport (YTY); 16. Lianyungang Seaport (passenger)", "13. 南京禄口国际机场（NKG）；14. 苏南硕放国际机场（无锡/苏州，WUX）；15. 扬州泰州国际机场（YTY）；16. 连云港海港口岸（客运）"), t2("All of Jiangsu (incl. Suzhou, Nanjing, Wuxi, Yangzhou)", "江苏省全域（含苏州、南京、无锡、扬州等）")],
            ["7", t2("Zhejiang", "浙江省"), t2("17. Hangzhou Xiaoshan International Airport (HGH); 18. Ningbo Lishe International Airport (NGB); 19. Wenzhou Longwan International Airport (WNZ); 20. Yiwu Airport (YIW); 21. Wenzhou Port (passenger); 22. Zhoushan Port (passenger)", "17. 杭州萧山国际机场（HGH）；18. 宁波栎社国际机场（NGB）；19. 温州龙湾国际机场（WNZ）；20. 义乌机场（YIW）；21. 温州港口岸（客运）；22. 舟山港口岸（客运）"), t2("All of Zhejiang (incl. Hangzhou, Wuzhen/Jiaxing, Ningbo, Yiwu)", "浙江省全域（含杭州、乌镇嘉兴、宁波、义乌等）")],
            ["8", t2("Anhui", "安徽省"), t2("23. Hefei Xinqiao International Airport (HFE); 24. Huangshan Tunxi International Airport (TXN)", "23. 合肥新桥国际机场（HFE）；24. 黄山屯溪国际机场（TXN）"), t2("All of Anhui (Huangshan and Hongcun are allowed)", "安徽省全域（可前往黄山、宏村）")],
            ["9", t2("Fujian", "福建省"), t2("25. Xiamen Gaoqi International Airport (XMN); 26. Fuzhou Changle International Airport (FOC); 27. Quanzhou Jinjiang International Airport (JJN); 28. Wuyishan Airport (WUS); 29. Xiamen Seaport (Wutong Passenger Terminal / International Cruise Center)", "25. 厦门高崎国际机场（XMN）；26. 福州长乐国际机场（FOC）；27. 泉州晋江国际机场（JJN）；28. 武夷山机场（WUS）；29. 厦门海港口岸（五通客运码头/国际邮轮中心）"), t2("All of Fujian", "福建省全域")],
            ["10", t2("Shandong", "山东省"), t2("30. Qingdao Jiaodong International Airport (TAO); 31. Jinan Yaoqiang International Airport (TNA); 32. Yantai Penglai International Airport (YNT); 33. Weihai Dashuibo International Airport (WEH); 34. Qingdao Seaport (passenger)", "30. 青岛胶东国际机场（TAO）；31. 济南遥墙国际机场（TNA）；32. 烟台蓬莱国际机场（YNT）；33. 威海大水泊国际机场（WEH）；34. 青岛海港口岸（客运）"), t2("All of Shandong", "山东省全域")],
            ["11", t2("Henan", "河南省"), t2("35. Zhengzhou Xinzheng International Airport (CGO)", "35. 郑州新郑国际机场（CGO）"), t2("All of Henan (incl. Luoyang Longmen Grottoes, Kaifeng, Shaolin Temple in Dengfeng)", "河南省全域（含洛阳龙门石窟、开封、登封少林寺）")],
            ["12", t2("Hubei", "湖北省"), t2("36. Wuhan Tianhe International Airport (WUH)", "36. 武汉天河国际机场（WUH）"), t2("All of Hubei (incl. Wuhan, Yichang Three Gorges, Enshi, Wudang Mountains)", "湖北省全域（含武汉、宜昌三峡、恩施、武当山）")],
            ["13", t2("Hunan", "湖南省"), t2("37. Changsha Huanghua International Airport (CSX); 38. Zhangjiajie Hehua International Airport (DYG)", "37. 长沙黄花国际机场（CSX）；38. 张家界荷花国际机场（DYG）"), t2("All of Hunan (incl. Changsha, Zhangjiajie 'Avatar' peaks, Fenghuang Ancient Town)", "湖南省全域（含长沙、张家界阿凡达峰林、凤凰古城）")],
            ["14", t2("Guangdong", "广东省"), t2("39. Guangzhou Baiyun International Airport (CAN); 40. Shenzhen Bao'an International Airport (SZX); 41. Jieyang Chaoshan International Airport (SWA); 42. Guangzhou Nansha Port (passenger); 43. Shenzhen Shekou Cruise Home Port (passenger); 44. Guangzhou Pazhou Hong Kong–Macau Passenger Port; 45. Zhuhai Hengqin Port (to Macau); 46. Hong Kong–Zhuhai–Macau Bridge Zhuhai Port (to Hong Kong/Macau); 47. Zhongshan Port (passenger); 48. Guangzhou–Shenzhen–Hong Kong Express Rail Link, Hong Kong West Kowloon Station Port", "39. 广州白云国际机场（CAN）；40. 深圳宝安国际机场（SZX）；41. 揭阳潮汕国际机场（SWA）；42. 广州南沙港口岸（客运）；43. 深圳蛇口邮轮母港口岸（客运）；44. 广州琶洲港澳客运口岸；45. 珠海横琴口岸（通澳门）；46. 港珠澳大桥珠海公路口岸（通港澳）；47. 中山港口岸（客运）；48. 广深港高铁香港西九龙站口岸"), t2("All of Guangdong. Special rule: after entering the Mainland, you may exit not only through these 10 ports but also through ANY open passenger port in Guangdong (e.g. Shenzhen Luohu, Futian, Shenzhen Bay, Huanggang, Zhuhai Gongbei) and walk across to Hong Kong or Macau. (Entry must still be through the 10 ports listed.)", "广东省全域。特别政策：入境内地后，离境时不仅可走左列 10 个口岸，还可从广东省内任何对外开放客运口岸（如深圳罗湖、福田、深圳湾、皇岗、珠海拱北）步行出境前往港澳。（入境仍须走左列 10 个指定口岸。）")],
            ["15", t2("Hainan", "海南省"), t2("49. Haikou Meilan International Airport (HAK); 50. Sanya Phoenix International Airport (SYX)", "49. 海口美兰国际机场（HAK）；50. 三亚凤凰国际机场（SYX）"), t2("All of Hainan", "海南省全域")],
            ["16", t2("Chongqing", "重庆市"), t2("51. Chongqing Jiangbei International Airport (CKG)", "51. 重庆江北国际机场（CKG）"), t2("All of Chongqing", "重庆市全域")],
            ["17", t2("Guizhou", "贵州省"), t2("52. Guiyang Longdongbao International Airport (KWE)", "52. 贵阳龙洞堡国际机场（KWE）"), t2("All of Guizhou (incl. Huangguoshu Waterfall, Xijiang Miao Village, Libo Xiaoqikong)", "贵州省全域（含黄果树瀑布、千户苗寨、荔波小七孔）")],
            ["18", t2("Shaanxi", "陕西省"), t2("53. Xi'an Xianyang International Airport (XIY)", "53. 西安咸阳国际机场（XIY）"), t2("All of Shaanxi (incl. Xi'an Terracotta Army, Mount Hua, Yan'an)", "陕西省全域（含西安兵马俑、华山、延安）")],
            ["19", t2("Sichuan", "四川省"), t2("54. Chengdu Tianfu International Airport (TFU); 55. Chengdu Shuangliu International Airport (CTU)", "54. 成都天府国际机场（TFU）；55. 成都双流国际机场（CTU）"), t2("⚠️ ONLY 11 cities: Chengdu, Leshan (Leshan Giant Buddha / Mount Emei), Ya'an, Meishan, Deyang (Sanxingdui), Zigong, Luzhou, Suining, Neijiang, Yibin, Ziyang. ❌ Forbidden: Jiuzhaigou / Huanglong (Aba Prefecture), Daocheng Yading / Kangding (Garzê Prefecture), Xichang (Liangshan Prefecture), Mianyang.", "⚠️ 仅限 11 个市：成都、乐山（乐山大佛/峨眉山）、雅安、眉山、德阳（三星堆）、自贡、泸州、遂宁、内江、宜宾、资阳。❌ 严禁前往：九寨沟/黄龙（属阿坝州）、稻城亚丁/康定（属甘孜州）、西昌（属凉山州）、绵阳。")],
            ["20", t2("Yunnan", "云南省"), t2("56. Kunming Changshui International Airport (KMG); 57. Lijiang Sanyi International Airport (LJG); 58. Mohan Railway Port (China–Laos Railway trains)", "56. 昆明长水国际机场（KMG）；57. 丽江三义国际机场（LJG）；58. 磨憨铁路口岸（中老铁路列车入出境）"), t2("⚠️ ONLY 9 cities/prefectures: Kunming, Dali, Lijiang, Xishuangbanna, Yuxi, Chuxiong, Honghe, Wenshan, Pu'er. ❌ Forbidden: Shangri-La / Meili Snow Mountain (Dêqên Tibetan Prefecture), Tengchong (Baoshan), Ruili (Dehong Prefecture).", "⚠️ 仅限 9 个市州：昆明、大理、丽江、西双版纳、玉溪、楚雄、红河、文山、普洱。❌ 严禁前往：香格里拉/梅里雪山（属迪庆藏族自治州）、腾冲（属保山市）、瑞丽（属德宏州）。")],
            ["21", t2("Guangxi", "广西壮族自治区"), t2("59. Nanning Wuxu International Airport (NNG); 60. Guilin Liangjiang International Airport (KWL); 61. Beihai Fucheng Airport (BHY); 62. Beihai Seaport (passenger)", "59. 南宁吴圩国际机场（NNG）；60. 桂林两江国际机场（KWL）；61. 北海福成机场（BHY）；62. 北海海港口岸（客运）"), t2("⚠️ ONLY 12 cities: Guilin (incl. Yangshuo), Nanning, Beihai, Liuzhou, Wuzhou, Fangchenggang, Qinzhou, Guigang, Yulin, Hezhou, Hechi, Laibin. ❌ Forbidden: Chongzuo (the famous Detian cross-border waterfall is in Daxin County, Chongzuo — not reachable on transit), Baise.", "⚠️ 仅限 12 个市：桂林（含阳朔）、南宁、北海、柳州、梧州、防城港、钦州、贵港、玉林、贺州、河池、来宾。❌ 严禁前往：崇左市（著名的德天跨国瀑布在崇左大新县，过境免签去不了）、百色市。")],
            ["22", t2("Shanxi", "山西省"), t2("63. Taiyuan Wusu International Airport (TYN)", "63. 太原武宿国际机场（TYN）"), t2("⚠️ ONLY 2 cities: Taiyuan and Datong (Yungang Grottoes, Hanging Temple). ❌ Forbidden: Pingyao Ancient City (Jinzhong — very easy to stray into by mistake), Mount Wutai (Xinzhou), Hukou Waterfall (Linfen).", "⚠️ 仅限 2 个市：太原市、大同市（可看云冈石窟、悬空寺）。❌ 严禁前往：平遥古城（属晋中市，极易误闯越界）、五台山（属忻州市）、壶口瀑布（属临汾市）。")],
            ["23", t2("Jiangxi", "江西省"), t2("64. Nanchang Changbei International Airport (KHN)", "64. 南昌昌北国际机场（KHN）"), t2("⚠️ ONLY 2 cities: Nanchang and Jingdezhen (the porcelain capital). ❌ Forbidden: Wuyuan / Mount Sanqing (Shangrao), Mount Lu (Jiujiang).", "⚠️ 仅限 2 个市：南昌市、景德镇市（瓷都）。❌ 严禁前往：婺源/三清山（属上饶市）、庐山（属九江市）。")],
            ["24", t2("Heilongjiang", "黑龙江省"), t2("65. Harbin Taiping International Airport (HRB)", "65. 哈尔滨太平国际机场（HRB）"), t2("⚠️ ONLY 1 city: within Harbin's administrative area (Ice and Snow World, Central Street and Yabuli Ski Resort are all in Harbin). ❌ Forbidden: China Snow Town / Xuexiang (Hailin, Mudanjiang — if you take a car there from Harbin, your passport is scanned at check-in and an out-of-area alert is triggered immediately), Mohe.", "⚠️ 仅限 1 个市：哈尔滨市行政区划内（冰雪大世界、中央大街、亚布力滑雪场均属哈尔滨市）。❌ 严禁前往：中国雪乡（属牡丹江海林市，从哈尔滨包车去雪乡一旦住店刷护照立刻触发越界报警）、漠河。")],
          ],
        },
      ],
    },
    { id: "ad-break", heading: t2("Advertisement", "广告"), blocks: [{ type: "ad" }] },
    {
      id: "cross-province",
      heading: t2("Crossing provinces is allowed", "允许跨省联游"),
      blocks: [
        {
          type: "p",
          text: t2(
            "As long as you stay inside the allowed areas above, you can combine provinces freely within your 240 hours.",
            "只要在上述允许停留的区域内，你可以在 240 小时内任意跨省组合。"
          ),
        },
        {
          type: "steps",
          items: [
            t2("Enter at Beijing Daxing Airport (PKX).", "从北京大兴机场（PKX）入境。"),
            t2("High-speed train to Datong, Shanxi, for the Yungang Grottoes.", "坐高铁去山西大同看云冈石窟。"),
            t2("Fly to Xi'an, Shaanxi, for the Terracotta Army.", "飞去陕西西安看兵马俑。"),
            t2("High-speed train to Chengdu, Sichuan, for the pandas.", "坐高铁去四川成都看熊猫。"),
            t2("High-speed train to Chongqing for hotpot.", "坐高铁去重庆吃火锅。"),
            t2("Fly to Shenzhen and exit to Hong Kong through the Hong Kong West Kowloon high-speed rail port.", "飞到深圳，从香港西九龙站高铁口岸出境去香港。"),
          ],
        },
        {
          type: "callout",
          tone: "tip",
          text: t2(
            "That route crosses 6 provinces and cities and is 100% legal.",
            "这条路线跨越 6 个省市，100% 合法。"
          ),
        },
      ],
    },
    {
      id: "forbidden-spots",
      heading: t2("High-risk spots you cannot visit on 240-hour transit", "240 小时过境免签不能去的高危景点"),
      blocks: [
        {
          type: "table",
          head: [t2("Spot", "景点/城市"), t2("Actual administrative area", "所属真实行政区"), t2("Verdict", "判定结果")],
          rows: [
            [t2("Jiuzhaigou / Huanglong", "九寨沟/黄龙"), t2("Aba Prefecture, Sichuan", "四川省阿坝州"), t2("❌ Out of area. Sichuan only allows 11 cities such as Chengdu and Leshan, not Aba. Alternative: Zhangjiajie (all of Hunan is open).", "❌ 越界。四川仅开放成都、乐山等 11 市，不含阿坝州。替代推荐：张家界（湖南全省开放）。")],
            [t2("Daocheng Yading / Kangding", "稻城亚丁/康定"), t2("Garzê Prefecture, Sichuan", "四川省甘孜州"), t2("❌ Out of area. Garzê is not one of Sichuan's 11 allowed cities.", "❌ 越界。甘孜州不在四川 11 市允许名单内。")],
            [t2("Shangri-La / Meili Snow Mountain", "香格里拉/梅里雪山"), t2("Dêqên Prefecture, Yunnan", "云南省迪庆州"), t2("❌ Out of area. Yunnan only allows 9 cities/prefectures such as Kunming, Dali, Lijiang and Xishuangbanna, not Dêqên.", "❌ 越界。云南仅开放昆明、大理、丽江、版纳等 9 市州，不含迪庆州。")],
            [t2("Tengchong", "腾冲"), t2("Baoshan, Yunnan", "云南省保山市"), t2("❌ Out of area. Baoshan is not on Yunnan's allowed list.", "❌ 越界。保山市不在云南开放名单内。")],
            [t2("Pingyao Ancient City", "平遥古城"), t2("Jinzhong, Shanxi", "山西省晋中市"), t2("❌ Very common mistake. Shanxi only allows Taiyuan and Datong; checking into a hotel in Pingyao with your passport triggers an out-of-area alert immediately.", "❌ 高频误闯。山西仅开放太原市、大同市，在晋中市平遥古城住店刷护照会立刻触发越界报警。")],
            [t2("Mount Wutai", "五台山"), t2("Xinzhou, Shanxi", "山西省忻州市"), t2("❌ Out of area. Shanxi only allows Taiyuan and Datong.", "❌ 越界。山西仅限太原与大同两市。")],
            [t2("China Snow Town / Xuexiang", "中国雪乡"), t2("Mudanjiang, Heilongjiang", "黑龙江牡丹江市"), t2("❌ Very common mistake. Heilongjiang only allows Harbin; Snow Town is in Hailin, Mudanjiang, and is strictly off-limits on transit.", "❌ 高频误闯。黑龙江仅限哈尔滨市行政区，雪乡属牡丹江海林市，严禁过境免签前往。")],
            [t2("Wuyuan / Mount Sanqing", "婺源/三清山"), t2("Shangrao, Jiangxi", "江西省上饶市"), t2("❌ Out of area. Jiangxi only allows Nanchang and Jingdezhen.", "❌ 越界。江西仅限南昌市与景德镇市。")],
            [t2("Detian Waterfall", "德天跨国瀑布"), t2("Chongzuo, Guangxi", "广西崇左市"), t2("❌ Out of area. Guangxi allows 12 cities such as Guilin, Nanning and Beihai, not Chongzuo.", "❌ 越界。广西开放桂林、南宁、北海等 12 市，不含崇左市。")],
            [t2("Lhasa / all of Tibet", "拉萨/西藏全境"), t2("Tibet Autonomous Region", "西藏自治区"), t2("❌ Absolutely off-limits. Neither 30-day visa-free entry nor 240-hour transit lets you go to Tibet on your own (you need an L visa + Tibet Travel Permit + a tour group).", "❌ 绝对禁区。无论 30 天免签还是 240 小时过境免签，均不可自行入藏（须办 L 签 + 入藏函跟团）。")],
            [t2("Urumqi / Kashgar (all of Xinjiang)", "乌鲁木齐/喀什（新疆全境）"), t2("Xinjiang Uyghur Autonomous Region", "新疆维吾尔自治区"), t2("❌ Not covered by transit. Xinjiang is not one of the 24 provinces for 240-hour transit (but travellers with 30-day visa-free entry can visit its open cities).", "❌ 过境免签不支持。新疆不在 240 小时过境免签的 24 省份名单内（但 30 天免签国游客可去开放城市）。")],
          ],
        },
        { type: "affiliate", id: "tripFlights" },
      ],
    },
    {
      id: "hidden-traps-nobody-mentions",
      heading: t2("5 hidden 240-hour traps most travel blogs never mention", "99% 攻略没提过的 5 个 240 小时隐形大坑"),
      blocks: [
        {
          type: "callout",
          tone: "danger",
          title: t2("Trap 1: Hong Kong West Kowloon Rail & Shenzhen land borders — EXIT OK, ENTRY DENIED!", "大坑 1：香港西九龙高铁与深圳陆路口岸——“能出不能进”！"),
          text: t2(
            "One of the #1 real-world rejections: flying into Beijing/Shanghai and EXITTING to Hong Kong by high-speed train (West Kowloon) or walking across Luohu/Futian is 100% ALLOWED. However, you CANNOT ENTER Mainland China from Hong Kong via West Kowloon High-Speed Rail, Luohu, Futian, Huanggang, or Shenzhen Bay on 240-hour transit! To enter Guangdong on 240h transit from Hong Kong, you must fly into Guangzhou/Shenzhen/Jieyang airports or take the ferry into Shekou Port (蛇口港) or Nansha Port (南沙港).",
            "现实中拒签率最高的坑：飞进北京/上海后，坐高铁从深圳/广州去香港西九龙，或从罗湖/福田步行“出境”去香港完全合法；但反过来，绝不能从香港坐西九龙高铁或走罗湖、福田、皇岗、深圳湾陆路口岸“入境”深圳来申请 240 小时过境免签！从香港走 240h 入境广东，必须坐飞机进白云/宝安/揭阳机场，或坐渡轮到蛇口港/南沙港。"
          ),
        },
        {
          type: "callout",
          tone: "warn",
          title: t2("Trap 2: Airline check-in agents are often stricter than Chinese immigration", "大坑 2：海外航司值机地勤往往比中国边检更严（误拒登机）"),
          text: t2(
            "Check-in agents at smaller US or European airports frequently don't know China expanded transit to 240 hours with cross-province travel, and may demand a visa on the spot. Always arrive 30 minutes earlier, bring printed English onward flight + hotel bookings, and show our TIMATIC Rescue Card below so the agent checks the live TIMATIC database (or calls +86-12367).",
            "欧美二三线机场的航司地勤经常不了解中国已升级为 240 小时跨省过境免签，会直接要求看签证。务必提前 30 分钟到机场，打印英文联程机票和酒店单，直接把下面这张 TIMATIC 救命卡全屏递给地勤核对系统（或致电 +86-12367）。"
          ),
        },
        { type: "widget", widget: "timaticRescueCard" },
        {
          type: "list",
          items: [
            t2(
              "Trap 3 — Domestic technical-stop trap: never book a flight whose first landing inside China is outside the 65 listed ports (for example, Europe → Urumqi technical stop → Chengdu). Even if you stay on the plane, Urumqi is not a 240h port and check-in will deny boarding.",
              "大坑 3 —— 境内经停暗雷：千万别买第一落地经停点不在 65 个口岸内的航班（例如欧洲 → 乌鲁木齐经停 → 成都）。哪怕不下飞机，只要乌鲁木齐不在过境口岸名单内，始发地就会直接拒登机。"
            ),
            t2(
              "Trap 4 — 24-hour local police registration if NOT staying in a hotel: licensed hotels register your passport automatically, but if you stay at a friend's apartment or private Airbnb, you MUST register with the local police station (or city WeChat mini-program) within 24 hours of arrival, or risk a fine up to ¥2,000.",
              "大坑 4 —— 住朋友家/私人 Airbnb 的 24 小时派出所登记：住正规酒店前台会自动上传，但住朋友家或非涉外民宿，必须在抵达后 24 小时内去当地派出所（或微信“公安微警务”小程序线上）办临时住宿登记，否则最高罚 2,000 元。"
            ),
            t2(
              "Trap 5 — Passport condition & extra questions: ensure your passport has at least 2 blank pages and no torn cover/loose bio-page. Travelers with multiple past stays in countries like Turkey may receive a few extra itinerary questions at immigration—handing over printed hotel confirmations and your onward ticket clears it in 30 seconds.",
              "大坑 5 —— 护照品相与边检附加问询：确保护照至少留 2 页空白页且无封面撕裂/芯片损坏。如果护照上有多次土耳其等国长期停留章，边检可能会多问几句行程，直接递上打印好的全程酒店单和离境机票确认单即可 30 秒顺利放行。"
            ),
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: t2("Can I take the Hong Kong West Kowloon high-speed train into Shenzhen on 240-hour transit?", "可以坐香港西九龙高铁入境深圳使用 240 小时过境免签吗？"),
      a: t2(
        "No for ENTRY, Yes for EXIT. West Kowloon High-Speed Rail and Shenzhen land crossings (Luohu, Futian, Shenzhen Bay) are NOT eligible entry ports for 240-hour transit. To enter from Hong Kong on 240h transit, take the ferry to Shekou Port or Nansha Port, or fly into Guangzhou/Shenzhen airport.",
        "入境不行，出境可以。香港西九龙高铁站及罗湖、福田、深圳湾陆路口岸均不支持作为 240 小时过境免签的“入境口岸”。若从香港走 240h 入境广东，请乘船至蛇口港或南沙港，或乘飞机入境广州/深圳机场。"
      ),
    },
    {
      q: t2("What if my airline check-in agent refuses boarding without a Chinese visa?", "如果出发地航司地勤不认 240 小时过境免签、不给打登机牌怎么办？"),
      a: t2(
        "Stay calm, ask for a supervisor, and show our Airline Check-In TIMATIC Rescue Card above. Ask them to run a live TIMATIC query for China 240-Hour Transit Without Visa (TWOV) with your exact passport and A → China → C route, or call China's 24/7 NIA English hotline at +86-12367.",
        "保持冷静，请主管到场，并全屏展示上方的航司 TIMATIC 救命卡。请对方按你的护照国籍与 A→中国→C 航段实时查询 TIMATIC 中的 China 240-Hour TWOV 规则，或直接拨打中国移民局 24 小时英文官方热线 +86-12367 核实。"
      ),
    },
    {
      q: t2("Does Hong Kong count as a third country for China's 240-hour transit visa?", "香港算 240 小时过境免签的第三地吗？"),
      a: t2(
        "Yes. For immigration purposes Hong Kong, Macau and Taiwan are separate regions. Japan → Shanghai → Hong Kong is a valid A ≠ C route.",
        "算。在出入境管理中，中国香港、澳门、台湾均为独立地区。“日本 → 上海 → 香港”是符合 A ≠ C 的合法路线。"
      ),
    },
    {
      q: t2("Can I visit Jiuzhaigou or Pingyao on 240-hour visa-free transit?", "240 小时过境免签可以去九寨沟或平遥吗？"),
      a: t2(
        "No. Jiuzhaigou is in Aba Prefecture (Sichuan only allows 11 cities) and Pingyao is in Jinzhong (Shanxi only allows Taiyuan and Datong). Both are off-limits.",
        "不可以。九寨沟属阿坝州（四川仅开放 11 个市），平遥属晋中市（山西仅开放太原和大同），两地均不允许前往。"
      ),
    },
    {
      q: t2("Can I fly a round trip, e.g. Tokyo → Shanghai → Tokyo?", "可以买往返票吗，比如东京 → 上海 → 东京？"),
      a: t2(
        "Not on 240-hour transit. A = C counts as a round trip and you will be refused boarding. Change the return leg to Hong Kong, Macau, Seoul or Taipei.",
        "240 小时过境免签不行。A = C 属于折返，会被拒登机。请把回程改为经香港、澳门、首尔或台北。"
      ),
    },
    {
      q: t2("When exactly do my 240 hours end?", "我的 240 小时到底什么时候结束？"),
      a: t2(
        "At 23:59 on the 10th day after your arrival day. Land at 06:00 on 1 October and you must exit by 23:59 on 11 October — 258 hours in total.",
        "在落地日之后第 10 天的 23:59 结束。10 月 1 日 06:00 落地，最晚须在 10 月 11 日 23:59 前出境——共计 258 小时。"
      ),
    },
    {
      q: t2("Can I leave Guangdong by walking into Hong Kong at Luohu?", "可以从罗湖步行出境去香港吗？"),
      a: t2(
        "Yes. If you entered through one of the 10 listed Guangdong ports, you may exit through any open passenger port in Guangdong, including Luohu, Futian, Shenzhen Bay, Huanggang and Gongbei.",
        "可以。只要你是从广东 10 个指定口岸之一入境的，离境时可走广东省内任何对外开放客运口岸，包括罗湖、福田、深圳湾、皇岗和拱北。"
      ),
    },
    {
      q: t2("Can I use a standby ticket as my onward ticket?", "可以用候补票作为联程票吗？"),
      a: t2(
        "No. You need a ticket with a confirmed date and seat departing within 240 hours. Carry a printed English itinerary.",
        "不可以。你需要一张 240 小时内出发、已确定日期和座位的客票，并随身携带打印的英文行程单。"
      ),
    },
  ],
  related: ["visa-free-countries", "special-visa-free", "online-arrival-card", "arrival-immigration", "airports"],
};

export default guide;
