"use client";

import { useEffect, useState } from "react";
import { Maximize2, Trash2 } from "lucide-react";
import { Lang, L, t2, tx } from "@/lib/i18n";
import { ShowCard, useShowCard } from "@/components/ShowCard";

const STORE_KEY = "gochina-taxi-address";

const U = {
  hotelName: t2("Hotel Chinese Name", "酒店中文名称"),
  hotelNamePh: t2("e.g. 北京王府井希尔顿酒店", "例如：北京王府井希尔顿酒店"),
  hotelAddr: t2("Hotel Chinese Address", "酒店中文地址"),
  hotelAddrPh: t2("e.g. 北京市东城区王府井东街8号", "例如：北京市东城区王府井东街8号"),
  savedHint: t2("Saved automatically on this device for offline use.", "自动保存在本设备上，离线也能打开。"),
  clear: t2("Clear", "清空"),
  preview: t2("Card preview (tap to open full screen)", "卡片预览（点击全屏展示）"),
  showFull: t2("Show full screen to driver", "全屏展示给司机"),
  tipsTitle: t2("Taxi & Airport Pickup Tips", "打车与防宰贴士"),
};

const TIPS: L[] = [
  t2(
    "Always copy the Chinese hotel name and address from your booking confirmation (Trip.com / Booking.com) before you land — most drivers cannot read English street names.",
    "落地前务必从预订确认单（Trip.com / Booking.com）复制好酒店的中文名和中文地址——绝大多数司机看不懂英文路名。"
  ),
  t2(
    "At airports and train stations, ignore anyone who walks up offering a ride. Follow the official “Taxi” (出租车) signs or order Didi inside Alipay.",
    "在机场和火车站，不要理会主动搭讪拉客的人。请沿官方“出租车（Taxi）”指示牌排队，或直接在支付宝内用滴滴叫车。"
  ),
  t2(
    "The card explicitly says “请打表” (please use the meter) so there is no confusion about fixed-price overcharging.",
    "卡片中明确写有“请打表（按计价器收费）”，避免口头议价被宰。"
  ),
];

export default function TaxiCard({ lang }: { lang: Lang }) {
  const T = (l: L) => tx(l, lang);
  const sc = useShowCard();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          if (typeof parsed.name === "string") setName(parsed.name);
          if (typeof parsed.address === "string") setAddress(parsed.address);
        }
      }
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({ name, address }));
    } catch {}
  }, [name, address, loaded]);

  const lines = [name.trim(), address.trim()].filter(Boolean);
  const bodyText = lines.length > 0 ? lines.join("\n") : "（请填写酒店中文名和地址）";
  const cardZh = `师傅您好！请打表（按计价器收费）送我去这个地址：\n${bodyText}\n谢谢！`;
  const cardMeaning =
    lang === "en"
      ? `Hello driver! Please use the meter and take me to this address: ${lines.join(", ") || "(enter address above)"}. Thank you!`
      : undefined;

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="grid gap-4">
          <div>
            <label className="mb-1.5 block text-sm font-bold text-slate-800">{T(U.hotelName)}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={T(U.hotelNamePh)}
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-base text-slate-900 focus:border-red-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-bold text-slate-800">{T(U.hotelAddr)}</label>
            <textarea
              rows={2}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder={T(U.hotelAddrPh)}
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-base text-slate-900 focus:border-red-500 focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
          <span>{T(U.savedHint)}</span>
          {(name || address) && (
            <button
              type="button"
              onClick={() => {
                setName("");
                setAddress("");
              }}
              className="inline-flex items-center gap-1 font-semibold text-slate-600 hover:text-red-600"
            >
              <Trash2 className="h-3.5 w-3.5" /> {T(U.clear)}
            </button>
          )}
        </div>
      </section>

      {/* Live Preview */}
      <section>
        <div className="mb-2 text-sm font-bold text-slate-700">{T(U.preview)}</div>
        <div
          onClick={() => sc.show({ zh: cardZh, meaning: cardMeaning })}
          className="cursor-pointer whitespace-pre-line rounded-xl border-4 border-amber-400 bg-slate-900 p-6 text-2xl font-bold leading-snug text-amber-300 transition hover:bg-slate-800 sm:text-3xl"
        >
          {cardZh}
        </div>
        <button
          type="button"
          onClick={() => sc.show({ zh: cardZh, meaning: cardMeaning })}
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3.5 text-base font-semibold text-white hover:bg-red-700"
        >
          <Maximize2 className="h-5 w-5" /> {T(U.showFull)}
        </button>
      </section>

      <section className="rounded-xl bg-slate-50 p-5 text-sm text-slate-700">
        <h3 className="mb-2 font-bold text-slate-900">{T(U.tipsTitle)}</h3>
        <ul className="list-disc space-y-1.5 pl-5">
          {TIPS.map((tip) => (
            <li key={tip.en}>{T(tip)}</li>
          ))}
        </ul>
      </section>

      <ShowCard content={sc.content} close={sc.close} />
    </div>
  );
}
