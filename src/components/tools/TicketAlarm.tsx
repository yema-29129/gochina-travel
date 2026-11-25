"use client";

import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, Bell, CalendarPlus, Clock, ShieldAlert, Star } from "lucide-react";
import { Lang, L, t2, tx } from "@/lib/i18n";
import { AffiliateBox } from "@/components/AffiliateBox";

interface Attraction {
  id: string;
  name: L;
  advanceDays: number;
  bjtHour: number;
  bjtMinute: number;
  releaseNote: L;
  /** 0 = Sun, 1 = Mon, 2 = Tue, ...; null = no regular closed day */
  closedWeekday: number | null;
  closedNote: L;
  difficulty: number; // 1..5
  tip: L;
}

const ATTRACTIONS: Attraction[] = [
  {
    id: "forbidden_city",
    name: t2("Forbidden City (Beijing)", "北京故宫博物院"),
    advanceDays: 7,
    bjtHour: 20,
    bjtMinute: 0,
    releaseNote: t2("20:00 Beijing Time, 7 days ahead", "提前 7 天北京时间 20:00"),
    closedWeekday: 1,
    closedNote: t2("Closed Mondays (except public holidays)", "周一闭馆（法定假日除外）"),
    difficulty: 5,
    tip: t2(
      "Extremely hard! Book with passport on the official multilingual website, or book an English guided tour with guaranteed tickets.",
      "极难！在官方多语种网站用护照抢票，或提前预订含保底门票的英文导览团。",
    ),
  },
  {
    id: "nat_museum",
    name: t2("National Museum of China (Beijing)", "中国国家博物馆"),
    advanceDays: 7,
    bjtHour: 17,
    bjtMinute: 0,
    releaseNote: t2("17:00 Beijing Time, 7 days ahead", "提前 7 天北京时间 17:00"),
    closedWeekday: 1,
    closedNote: t2("Closed Mondays (except public holidays)", "周一闭馆（法定假日除外）"),
    difficulty: 5,
    tip: t2("Extremely hard! Sells out within seconds of release.", "极难！准点秒空。"),
  },
  {
    id: "tiananmen_sq",
    name: t2("Tiananmen Square / Flag Raising", "天安门广场 / 升旗仪式"),
    advanceDays: 7,
    bjtHour: 0,
    bjtMinute: 0,
    releaseNote: t2("00:00 / rolling, up to 7 days ahead", "提前 7 天 00:00 / 全天滚动放号"),
    closedWeekday: null,
    closedNote: t2("Open daily", "无常规闭馆日"),
    difficulty: 3,
    tip: t2(
      "Must be reserved at least 1 day in advance — no same-day walk-in entry.",
      "必须至少提前 1 天预约，不接受现场临时进场。",
    ),
  },
  {
    id: "chair_mao",
    name: t2("Chairman Mao Memorial Hall", "毛主席纪念堂"),
    advanceDays: 6,
    bjtHour: 12,
    bjtMinute: 30,
    releaseNote: t2("12:30 Beijing Time, 6 days ahead", "提前 6 天北京时间 12:30"),
    closedWeekday: 1,
    closedNote: t2("Closed Mondays (open mornings only)", "周一闭馆（仅上午开放）"),
    difficulty: 4,
    tip: t2(
      "No bags, cameras, or water bottles allowed inside — store them on the east side of the square first.",
      "严禁携带任何背包、相机、水杯入内（须先去广场东侧存包）。",
    ),
  },
  {
    id: "shaanxi_hist",
    name: t2("Shaanxi History Museum (Main Hall, Xi'an)", "陕西历史博物馆（本馆）"),
    advanceDays: 5,
    bjtHour: 17,
    bjtMinute: 0,
    releaseNote: t2("17:00 Beijing Time, 5 days ahead", "提前 5 天北京时间 17:00"),
    closedWeekday: 1,
    closedNote: t2("Closed Mondays (except public holidays)", "周一闭馆（法定假日除外）"),
    difficulty: 5,
    tip: t2(
      "Notoriously hard to book! Strongly consider the Qin–Han Branch instead (closed Tuesdays).",
      "地狱级难抢！强烈建议改约秦汉馆（秦汉馆为周二闭馆）。",
    ),
  },
  {
    id: "terracotta",
    name: t2("Terracotta Army (Xi'an)", "秦始皇兵马俑"),
    advanceDays: 7,
    bjtHour: 0,
    bjtMinute: 0,
    releaseNote: t2("All day (lock tickets 3+ days ahead in peak season)", "提前 7 天全天有票（旺季建议至少提前 3 天锁票）"),
    closedWeekday: null,
    closedNote: t2("Open daily", "无常规闭馆日"),
    difficulty: 2,
    tip: t2("Ticket includes Lishan Garden; enter with your physical passport.", "门票含丽山园，持护照原件实名入场。"),
  },
  {
    id: "panda_base",
    name: t2("Chengdu Giant Panda Base", "成都大熊猫繁育研究基地"),
    advanceDays: 7,
    bjtHour: 0,
    bjtMinute: 0,
    releaseNote: t2("All day, 7 days ahead (book the 07:30 morning slot)", "提前 7 天全天放票（抢 07:30 早场）"),
    closedWeekday: null,
    closedNote: t2("Open daily", "无常规闭馆日"),
    difficulty: 3,
    tip: t2("Always choose a morning slot — pandas mostly sleep in the afternoon.", "务必选上午场，下午大熊猫大多在睡觉。"),
  },
  {
    id: "suzhou_mus",
    name: t2("Suzhou Museum (Main Hall)", "苏州博物馆（本馆）"),
    advanceDays: 7,
    bjtHour: 8,
    bjtMinute: 0,
    releaseNote: t2("08:00 Beijing Time, 7 days ahead", "提前 7 天北京时间 08:00"),
    closedWeekday: 1,
    closedNote: t2("Closed Mondays (except public holidays)", "周一闭馆（法定假日除外）"),
    difficulty: 5,
    tip: t2("Extremely hard! Backup option: Suzhou Museum West.", "极难！备选：苏州博物馆西馆。"),
  },
  {
    id: "humble_garden",
    name: t2("Humble Administrator's Garden (Suzhou)", "苏州拙政园"),
    advanceDays: 7,
    bjtHour: 0,
    bjtMinute: 0,
    releaseNote: t2("00:00 / timed slots, 7 days ahead", "提前 7 天 00:00 / 全天分时段"),
    closedWeekday: null,
    closedNote: t2("Open daily", "无常规闭馆日"),
    difficulty: 3,
    tip: t2("Pick the earliest 07:30 entry slot for the smallest crowds.", "选最早 07:30 第一波入园人最少。"),
  },
  {
    id: "shanghai_mus_e",
    name: t2("Shanghai Museum East (Pudong)", "上海博物馆东馆（浦东）"),
    advanceDays: 7,
    bjtHour: 12,
    bjtMinute: 0,
    releaseNote: t2("Walk-in with passport (special exhibitions: 12:00, 7 days ahead)", "常规免预约持护照现场入（特展提前 7 天 12:00）"),
    closedWeekday: 2,
    closedNote: t2("Closed TUESDAYS (People's Square Hall is closed Mondays!)", "周二闭馆（注意：人民广场馆是周一闭馆！）"),
    difficulty: 1,
    tip: t2(
      "Watch out: Pudong East Hall is closed on Tuesdays, while the People's Square Hall is closed on Mondays.",
      "注意区分：浦东东馆是周二闭馆，人民广场馆是周一闭馆！",
    ),
  },
];

const PRESET_TIMEZONES = [
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "America/Toronto",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "Asia/Singapore",
  "Asia/Tokyo",
  "Asia/Shanghai",
  "Australia/Sydney",
  "Pacific/Auckland",
];

function formatInTz(date: Date, timeZone: string, lang: Lang): string {
  try {
    return new Intl.DateTimeFormat(lang === "zh" ? "zh-CN" : "en-US", {
      timeZone,
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    }).format(date);
  } catch {
    return date.toISOString();
  }
}

function toIcsUtc(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    date.getUTCFullYear() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    "T" +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    "Z"
  );
}

const WEEKDAY_NAMES: L[] = [
  t2("Sunday", "星期日"),
  t2("Monday", "星期一"),
  t2("Tuesday", "星期二"),
  t2("Wednesday", "星期三"),
  t2("Thursday", "星期四"),
  t2("Friday", "星期五"),
  t2("Saturday", "星期六"),
];

function defaultFutureVisitDate(daysAhead = 14): string {
  const dt = new Date(Date.now() + daysAhead * 86_400_000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}`;
}

export default function TicketAlarm({ lang }: { lang: Lang }) {
  const [attractionId, setAttractionId] = useState<string>("forbidden_city");
  const [visitDate, setVisitDate] = useState<string>("");
  const [userTz, setUserTz] = useState<string>("America/New_York");
  const [detectedTz, setDetectedTz] = useState<string | null>(null);
  const [nowMs, setNowMs] = useState<number>(0);

  useEffect(() => {
    setVisitDate((prev) => prev || defaultFutureVisitDate(14));
    setNowMs(Date.now());
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz) {
        setDetectedTz(tz);
        setUserTz(tz);
      }
    } catch {
      // Fallback stays America/New_York
    }
  }, []);

  const tzOptions = useMemo(() => {
    if (detectedTz && !PRESET_TIMEZONES.includes(detectedTz)) {
      return [detectedTz, ...PRESET_TIMEZONES];
    }
    return PRESET_TIMEZONES;
  }, [detectedTz]);

  const attraction = ATTRACTIONS.find((a) => a.id === attractionId) ?? ATTRACTIONS[0];

  const calc = useMemo(() => {
    const parts = visitDate.split("-").map(Number);
    if (parts.length !== 3 || parts.some((n) => !n)) return null;
    const [y, m, d] = parts;

    // Visit weekday in Beijing calendar (UTC noon avoids any date-line shift)
    const visitNoonUtc = new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
    const weekday = visitNoonUtc.getUTCDay();

    const isClosedDay = attraction.closedWeekday !== null && weekday === attraction.closedWeekday;
    const isGoldenWeek = (m === 10 && d >= 1 && d <= 7) || (m === 5 && d >= 1 && d <= 5);

    // Exact release moment: (visitDate - advanceDays) at bjtHour:bjtMinute in UTC+8
    // UTC timestamp = Date.UTC(y, m-1, d - advanceDays, bjtHour - 8, bjtMinute, 0)
    const releaseUtc = new Date(Date.UTC(y, m - 1, d - attraction.advanceDays, attraction.bjtHour - 8, attraction.bjtMinute, 0));
    const alarmUtc = new Date(releaseUtc.getTime() - 5 * 60 * 1000);

    return {
      weekday,
      isClosedDay,
      isGoldenWeek,
      releaseUtc,
      alarmUtc,
      releaseBjtStr: formatInTz(releaseUtc, "Asia/Shanghai", lang),
      releaseLocalStr: formatInTz(releaseUtc, userTz, lang),
      alarmLocalStr: formatInTz(alarmUtc, userTz, lang),
    };
  }, [visitDate, attraction, userTz, lang]);

  const downloadIcs = () => {
    if (!calc) return;
    const endUtc = new Date(calc.releaseUtc.getTime() + 15 * 60 * 1000);
    const title =
      lang === "zh"
        ? `抢票提醒：${attraction.name.zh}（游览日 ${visitDate}）`
        : `Ticket Release Alarm: ${attraction.name.en} (Visit ${visitDate})`;
    const desc =
      lang === "zh"
        ? `提前 5 分钟登录并填好同行人护照号！北京时间放票：${calc.releaseBjtStr}。保底含票导览团：https://www.trip.com/things-to-do/`
        : `Log in 5 minutes early and pre-fill passport numbers! Beijing release: ${calc.releaseBjtStr}. Backup guided tours with tickets: https://www.trip.com/things-to-do/`;

    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//GoChina//TicketAlarm//EN",
      "BEGIN:VEVENT",
      `UID:${attraction.id}-${visitDate}@gochina.tools`,
      `DTSTAMP:${toIcsUtc(new Date())}`,
      `DTSTART:${toIcsUtc(calc.alarmUtc)}`,
      `DTEND:${toIcsUtc(endUtc)}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${desc}`,
      "BEGIN:VALARM",
      "TRIGGER:-PT0M",
      "ACTION:DISPLAY",
      `DESCRIPTION:${title}`,
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `gochina-${attraction.id}-${visitDate}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-lg font-bold text-slate-900">
          {tx(t2("Choose Attraction, Visit Date & Your Timezone", "选择景点、游览日期与您当前所在时区"), lang)}
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div>
            <label className="block text-sm font-semibold text-slate-800">
              {tx(t2("Attraction (10 Top Sights)", "热门景点（10 大必抢景点）"), lang)}
            </label>
            <select
              value={attractionId}
              onChange={(e) => setAttractionId(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-red-500 focus:outline-none"
            >
              {ATTRACTIONS.map((a) => (
                <option key={a.id} value={a.id}>
                  {tx(a.name, lang)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800">
              {tx(t2("Planned Visit Date (China Date)", "计划游览日期（中国日期）"), lang)}
            </label>
            <input
              type="date"
              value={visitDate}
              onChange={(e) => setVisitDate(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800">
              {tx(t2("Your Local Timezone", "您当前所在时区"), lang)}
            </label>
            <select
              value={userTz}
              onChange={(e) => setUserTz(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-red-500 focus:outline-none"
            >
              {tzOptions.map((tz) => (
                <option key={tz} value={tz}>
                  {tz} {tz === detectedTz ? tx(t2("(Auto-detected)", "（自动识别）"), lang) : ""}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Attraction quick meta */}
        <div className="mt-4 flex flex-wrap items-center gap-3 rounded-lg bg-slate-50 p-3 text-xs text-slate-700">
          <span className="inline-flex items-center gap-1 font-semibold text-slate-900">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            {tx(t2("Booking Difficulty:", "抢票难度："), lang)} {"★".repeat(attraction.difficulty)}
            {"☆".repeat(5 - attraction.difficulty)}
          </span>
          <span>·</span>
          <span>{tx(attraction.releaseNote, lang)}</span>
          <span>·</span>
          <span>{tx(attraction.closedNote, lang)}</span>
        </div>
      </div>

      {/* Closed Weekday Red Alert */}
      {calc?.isClosedDay && (
        <div className="rounded-xl border border-red-300 bg-red-50 p-5 text-red-950">
          <div className="flex items-start gap-3">
            <ShieldAlert className="mt-0.5 h-6 w-6 shrink-0 text-red-600" />
            <div className="text-sm">
              <div className="text-base font-bold text-red-800">
                {tx(
                  t2(
                    `🚨 Closed Day Alert: ${visitDate} is a ${WEEKDAY_NAMES[calc.weekday].en}!`,
                    `🚨 闭馆拦截警报：${visitDate} 是${WEEKDAY_NAMES[calc.weekday].zh}！`,
                  ),
                  lang,
                )}
              </div>
              <p className="mt-1">
                {tx(
                  t2(
                    `${attraction.name.en} is closed on ${WEEKDAY_NAMES[calc.weekday].en}s (except certain public holidays). Please pick another day of the week!`,
                    `${attraction.name.zh}${WEEKDAY_NAMES[calc.weekday].zh}全天闭馆（部分法定节假日除外）。请将游览日期改选为其他日期！`,
                  ),
                  lang,
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Golden Week Orange Warning */}
      {calc?.isGoldenWeek && (
        <div className="rounded-xl border border-orange-300 bg-orange-50 p-5 text-orange-950">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-orange-600" />
            <div className="text-sm">
              <div className="text-base font-bold text-orange-900">
                {tx(
                  t2(
                    "⚠️ China Golden Week Warning (Oct 1–7 / May 1–5)",
                    "⚠️ 中国黄金周长假高亮预警（10 月 1–7 日 / 5 月 1–5 日）",
                  ),
                  lang,
                )}
              </div>
              <p className="mt-1">
                {tx(
                  t2(
                    "Your selected date falls inside China's Golden Week national holiday. DIY ticket success rate is under 5% — strongly consider booking a guided tour with guaranteed tickets in advance.",
                    "您选中的日期正处于中国黄金周长假，散客自抢成功率低于 5%，强烈建议提前预订含保底门票的导览团！",
                  ),
                  lang,
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Calculated Release & Local Alarm */}
      {calc && (
        <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <Clock className="h-4 w-4" />
                {tx(t2("Official Beijing Release Time (UTC+8)", "官方北京时间放票时刻（UTC+8）"), lang)}
              </div>
              <div className="mt-2 text-lg font-bold text-slate-900">{calc.releaseBjtStr}</div>
              <p className="mt-1 text-xs text-slate-600">{tx(attraction.tip, lang)}</p>
            </div>

            <div className="rounded-xl border border-red-200 bg-red-50 p-4">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-red-700">
                <Bell className="h-4 w-4" />
                {tx(
                  t2("Your Local Alarm Time (Set 5 Minutes Earlier!)", "您的当地抢票闹钟时刻（已自动提前 5 分钟！）"),
                  lang,
                )}
              </div>
              <div className="mt-2 text-lg font-bold text-red-700">{calc.alarmLocalStr}</div>
              <p className="mt-1 text-xs text-red-900">
                {tx(
                  t2(
                    `Exact release in ${userTz} (DST adjusted): ${calc.releaseLocalStr}. Log in 5 minutes early and pre-fill all travelers' passport numbers!`,
                    `${userTz} 精确开抢时间（已自动含夏令时/冬令时换算）：${calc.releaseLocalStr}。请提前 5 分钟登录并填好同行人护照号！`,
                  ),
                  lang,
                )}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            {nowMs > 0 && Date.UTC(...(visitDate.split("-").map((v, i) => (i === 1 ? Number(v) - 1 : Number(v))) as [number, number, number])) + 86_400_000 < nowMs ? (
              <div className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-2.5 text-sm font-medium text-amber-950">
                {tx(
                  t2(
                    "Selected visit date has already passed. Choose a future date above to create a calendar alarm.",
                    "所选游览日期已过去，请在上方选择未来日期以生成抢票日历提醒。",
                  ),
                  lang,
                )}
              </div>
            ) : nowMs > 0 && calc.releaseUtc.getTime() <= nowMs ? (
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-medium text-emerald-950">
                {tx(
                  t2(
                    "Release window already open (tickets are currently on sale). Check official availability directly—inventory is live and not guaranteed.",
                    "该日期的放票时间已过（当前已开售），无需再设提前闹钟。请直接前往官方预约通道查询实时余票（余票以官网实时显示为准）。",
                  ),
                  lang,
                )}
              </div>
            ) : (
              <button
                type="button"
                onClick={downloadIcs}
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
              >
                <CalendarPlus className="h-4 w-4" />
                {tx(t2("Add 5-Min Early Alarm to Apple / Google Calendar (.ics)", "导出 5 分钟提前抢票提醒到手机日历 (.ics)"), lang)}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Full 10-Attraction Quick Reference Table */}
      <details className="rounded-xl border border-slate-200 bg-white p-4">
        <summary className="cursor-pointer text-sm font-bold text-slate-900">
          {tx(t2("Full 10-Attraction Ticket Release Schedule", "附表：10 大热门景点放票规则与闭馆日总览"), lang)}
        </summary>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-3">{tx(t2("Attraction", "景点"), lang)}</th>
                <th className="py-2 pr-3">{tx(t2("Release Rule (Beijing Time)", "放票规则（北京时间）"), lang)}</th>
                <th className="py-2 pr-3">{tx(t2("Closed Day", "常规闭馆日"), lang)}</th>
                <th className="py-2">{tx(t2("Difficulty", "难度"), lang)}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ATTRACTIONS.map((a) => (
                <tr key={a.id} className={a.id === attractionId ? "bg-red-50/60" : ""}>
                  <td className="py-2 pr-3 font-semibold text-slate-900">{tx(a.name, lang)}</td>
                  <td className="py-2 pr-3 text-slate-700">{tx(a.releaseNote, lang)}</td>
                  <td className="py-2 pr-3 text-slate-700">{tx(a.closedNote, lang)}</td>
                  <td className="py-2 text-amber-500">
                    {"★".repeat(a.difficulty)}
                    {"☆".repeat(5 - a.difficulty)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>

      <AffiliateBox id="tripTours" lang={lang} />
    </div>
  );
}
