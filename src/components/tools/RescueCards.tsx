"use client";

import { useEffect, useState } from "react";
import { Maximize2, Phone, Pill, ShieldAlert, Car, Building2, TrainFront, Banknote, Hospital } from "lucide-react";
import { Lang, L, t2, tx } from "@/lib/i18n";
import { ShowCard, useShowCard } from "@/components/ShowCard";
import { AffiliateBox } from "@/components/AffiliateBox";

interface PharmacyRow {
  id: string;
  symptom: L;
  familiar: string;
  zh: string;
  pinyin: string;
  safety: L;
}

const PHARMACY_ROWS: PharmacyRow[] = [
  {
    id: "ibuprofen",
    symptom: t2("Fever / Headache / Pain", "发烧 / 头痛 / 止痛"),
    familiar: "Advil / Motrin",
    zh: "💊 药师您好，我想买非处方退烧止痛药：【布洛芬缓释胶囊（如芬必得）】或【布洛芬片】",
    pinyin: "Yàoshī nínhǎo, wǒ xiǎng mǎi Bùluòfēn (Ibuprofen).",
    safety: t2(
      "Active ingredient: Ibuprofen (0.2 g or 0.3 g). Ask the pharmacist for the exact dosage per tablet.",
      "有效成分：布洛芬（0.2g 或 0.3g）。请向药师确认每粒/每片的具体服用剂量。"
    ),
  },
  {
    id: "acetaminophen",
    symptom: t2("Fever / Cold Pain (Stomach-gentle)", "发烧 / 感冒疼痛（不伤胃）"),
    familiar: "Tylenol / Panadol",
    zh: "💊 药师您好，我想买纯【对乙酰氨基酚片（如泰诺林）】（注：仅需单一成分，不要含伪麻黄碱的复方感冒药）",
    pinyin: "Yàoshī nínhǎo, wǒ xiǎng mǎi chún Duìyǐxiān ānjīfēn piàn (Tàinuòlín).",
    safety: t2(
      "Active ingredient: Acetaminophen / Paracetamol. Note: Compound cold medicines containing pseudoephedrine require passport registration; plain acetaminophen does not.",
      "有效成分：对乙酰氨基酚（扑热息痛）。注意：购买含伪麻黄碱的复方感冒药需要登记护照；纯对乙酰氨基酚不需要。"
    ),
  },
  {
    id: "diarrhea",
    symptom: t2("Traveler's Diarrhea (Upset Stomach)", "水土不服 / 腹泻拉肚子"),
    familiar: "Smecta / Imodium",
    zh: "💊 药师您好，我吃坏肚子腹泻了，想买：【蒙脱石散（思密达）】和【口服补液盐 III（防脱水电解质）】",
    pinyin: "Wǒ fùxiè le, xiǎng mǎi Méngtuōshísǎn hé Kǒufú bǔyèyán sān.",
    safety: t2(
      "Active ingredients: Montmorillonite Powder (mix 1 sachet in 50 ml warm water) + Oral Rehydration Salts III.",
      "有效成分：蒙脱石散（1 袋用 50 毫升微温水冲服）+ 口服补液盐 III（防脱水电解质）。"
    ),
  },
  {
    id: "heartburn",
    symptom: t2("Heartburn / Acid Reflux / Spicy Stomach", "胃酸 / 烧心 / 吃辣胃痛"),
    familiar: "Tums / Prilosec",
    zh: "💊 药师您好，吃辣后胃酸烧心胃痛，想买：【铝碳酸镁咀嚼片（达喜）】或【奥美拉唑肠溶胶囊】",
    pinyin: "Wǒ wèisuān wèitòng, xiǎng mǎi Dáxǐ huò Àoměilāzuò.",
    safety: t2(
      "Active ingredients: Hydrotalcite chewable tablets (fast antacid relief) or Omeprazole enteric capsules.",
      "有效成分：铝碳酸镁咀嚼片（快速抗酸缓解）或奥美拉唑肠溶胶囊。"
    ),
  },
  {
    id: "allergy",
    symptom: t2("Skin Rash / Hay Fever / Hives", "皮肤起疹子 / 过敏 / 花粉症"),
    familiar: "Claritin / Zyrtec",
    zh: "💊 药师您好，我过敏起疹子/打喷嚏，想买抗过敏药：【氯雷他定片（开瑞坦）】或【盐酸西替利嗪片】",
    pinyin: "Wǒ guòmǐn le, xiǎng mǎi Lǜléitādìng piàn huò Xītìlìqín piàn.",
    safety: t2(
      "Active ingredients: Loratadine (10 mg, non-drowsy) or Cetirizine hydrochloride.",
      "有效成分：氯雷他定（10mg，不易嗜睡）或盐酸西替利嗪。"
    ),
  },
  {
    id: "motion",
    symptom: t2("Motion Sickness (Bus / Boat)", "晕车 / 晕船"),
    familiar: "Dramamine",
    zh: "💊 药师您好，我晕车/晕船，想买：【茶苯海明片（乘晕宁）】或晕车贴",
    pinyin: "Wǒ yūnchē, xiǎng mǎi Cháběnhǎimíng piàn huò yūnchētiē.",
    safety: t2(
      "Active ingredient: Dimenhydrinate. Take 30 minutes before winding mountain bus rides (e.g. Zhangjiajie or Sichuan).",
      "有效成分：茶苯海明。在乘坐张家界、四川等山路大巴前 30 分钟服用。"
    ),
  },
  {
    id: "wound",
    symptom: t2("Blisters / Cuts / Sprained Ankle", "水泡 / 割伤 / 扭伤脚踝"),
    familiar: "Band-Aids / Iodine / Patch",
    zh: "🩹 药师您好，我想买：【防水创可贴】、【碘伏消毒棉签】和扭伤消肿贴膏",
    pinyin: "Wǒ xiǎng mǎi fángshuǐ chuāngkětiē, diǎnfú miánqiān hé xiāozhǒng tiēgāo.",
    safety: t2(
      "Waterproof bandages + Povidone-iodine swabs (twist/snap the colored ring tip so iodine flows down to the opposite cotton head) + anti-swelling patch.",
      "防水创可贴 + 碘伏棉签（掰断带色环的一端，让碘伏流向另一端棉头）+ 扭伤消肿贴膏。"
    ),
  },
];

const EMERGENCY_NUMBERS: { num: string; name: L; note: L; cls: string }[] = [
  {
    num: "110",
    name: t2("Police", "报警电话"),
    note: t2("24/7. Say “English” in major cities for translation.", "24 小时。大城市说 “English” 可转英文协助。"),
    cls: "border-blue-200 bg-blue-50 text-blue-900",
  },
  {
    num: "120",
    name: t2("Ambulance", "急救电话"),
    note: t2("Medical emergency. Ask a local or hotel staff to give your exact Chinese address.", "医疗急救。请当地人或酒店员工帮忙报出准确中文地址。"),
    cls: "border-red-200 bg-red-50 text-red-900",
  },
  {
    num: "119",
    name: t2("Fire", "火警电话"),
    note: t2("Fire & rescue services.", "火灾与应急救援。"),
    cls: "border-orange-200 bg-orange-50 text-orange-900",
  },
  {
    num: "12345",
    name: t2("City Service Hotline", "政务便民热线"),
    note: t2("English tourist support, lost items, taxi & hotel complaints.", "提供英语旅游协助、失物求助、出租车与酒店投诉。"),
    cls: "border-emerald-200 bg-emerald-50 text-emerald-900",
  },
  {
    num: "12367",
    name: t2("Immigration (NIA)", "国家移民管理局热线"),
    note: t2("24/7 multilingual. Visa-free, 240h transit & hotel registration help.", "24 小时多语种。免签、240 小时过境及酒店登记政策协助。"),
    cls: "border-violet-200 bg-violet-50 text-violet-900",
  },
];

const TAXI_STORAGE_KEY = "gochina-taxi-address";
const TRAIN_STORAGE_KEY = "gochina-rescue-train";

const U = {
  pharmTitle: t2("Pharmacy Symptom-to-Chinese-Drug Lookup", "药店“症状查中文通用药名”查询器"),
  pharmIntro: t2(
    "Walk into any street pharmacy with a green cross sign (大药房). Tap your symptom to show the pharmacist the standard Chinese OTC generic drug name full screen.",
    "走进街边亮着绿十字灯的大药房。点击你的症状，向药师全屏展示中国标准非处方药（OTC）中文通用名。"
  ),
  tapShow: t2("Tap to show full screen", "点击全屏展示"),
  cardsTitle: t2("5 Street Rescue Full-Screen Cards", "5 张高频街头救场全屏卡"),
  cardsIntro: t2(
    "Screen stays awake while a card is open. Fill in your hotel address or train number below and tap to show.",
    "卡片打开时屏幕会保持常亮。在下方填入你的酒店地址或车次，点击即可全屏展示。"
  ),
  hotelPh: t2("Paste hotel Chinese name & address (e.g. 北京王府井希尔顿酒店，王府井东街8号)", "粘贴酒店中文名和地址（例如：北京王府井希尔顿酒店，王府井东街8号）"),
  trainPh: t2("Train number (e.g. G123)", "车次（例如：G123）"),
  showFull: t2("Show full screen", "全屏展示"),
  emergTitle: t2("Emergency & Official Hotlines (Tap to Call)", "紧急与官方求助电话（点击拨打）"),
};

export default function RescueCards({ lang }: { lang: Lang }) {
  const T = (l: L) => tx(l, lang);
  const sc = useShowCard();
  const [hotelAddr, setHotelAddr] = useState("");
  const [trainNo, setTrainNo] = useState("G123");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedTaxi = localStorage.getItem(TAXI_STORAGE_KEY);
      if (savedTaxi) {
        try {
          const parsed = JSON.parse(savedTaxi);
          if (parsed && (parsed.name || parsed.address)) {
            setHotelAddr([parsed.name, parsed.address].filter(Boolean).join("，"));
          } else if (typeof parsed === "string") {
            setHotelAddr(parsed);
          }
        } catch {
          setHotelAddr(savedTaxi);
        }
      }
      const savedTrain = localStorage.getItem(TRAIN_STORAGE_KEY);
      if (savedTrain) setTrainNo(savedTrain);
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(TRAIN_STORAGE_KEY, trainNo);
    } catch {}
  }, [trainNo, loaded]);

  const addrDisplay = hotelAddr.trim() || "（请在此输入或粘贴酒店中文地址）";
  const trainDisplay = trainNo.trim().toUpperCase() || "G123";

  const rescueCards = [
    {
      id: "taxi",
      Icon: Car,
      accent: "bg-amber-50 border-amber-300 text-amber-900",
      title: t2("1. Taxi Meter & Hotel Address Card", "1. 出租车防宰打表地址卡"),
      desc: t2(
        "Paste your hotel's Chinese name and address from Trip.com. Tells the driver clearly to use the meter.",
        "从 Trip.com 复制酒店中文名和地址粘贴进去，明确请司机按计价器打表收费。"
      ),
      zh: `师傅您好！请打表（按计价器收费）送我去这个地址：\n【${addrDisplay}】\n谢谢！`,
      pinyin: "Shīfu nínhǎo! Qǐng dǎbiǎo sòng wǒ qù zhège dìzhǐ, xièxie!",
      meaning: t2(
        `Hello driver! Please use the meter and take me to this address: ${addrDisplay}. Thank you!`,
        `师傅您好！请打表送我去这个地址：${addrDisplay}。谢谢！`
      ),
      hasInput: "hotel" as const,
    },
    {
      id: "hotel",
      Icon: Building2,
      accent: "bg-indigo-50 border-indigo-200 text-indigo-900",
      title: t2("2. Hotel Visa-Free Check-in & 12367 Card", "2. 酒店前台免签入住与 12367 协助卡"),
      desc: t2(
        "For small-city front desks that look for a paper visa sticker and don't know how to register visa-free entry.",
        "用于小城市酒店前台找不到纸质签证贴纸、不知道如何录入免签入境信息时。"
      ),
      zh: "前台您好！我持外国护照享受中国【免签政策 / 240小时过境免签】合法入境，因此护照上没有纸质签证页，只有【椭圆形入境验讫章】或临时入境许可贴纸。\n如系统录入不清楚类型，请免费拨打国家移民管理局热线【12367】，由官方人员直接指导录入，谢谢配合！",
      pinyin: "Wǒ shì miǎnqiān héfǎ rùjìng, qǐng chá kàn rùjìngzhāng huò bōdǎ 12367.",
      meaning: t2(
        "Hello reception! I entered China legally under visa-free / 240-hour transit policy, so there is no paper visa page — only the oval entry stamp or temporary entry permit sticker. If your system needs help with the visa type, please call the free NIA hotline 12367 for official guidance. Thank you!",
        "前台您好！我是免签/240 小时过境免签合法入境，护照上只有椭圆入境章或临时入境许可。如录入有疑问请拨打 12367 咨询。"
      ),
    },
    {
      id: "hsr",
      Icon: TrainFront,
      accent: "bg-emerald-50 border-emerald-200 text-emerald-900",
      title: t2("3. High-Speed Rail Manual Gate Card", "3. 高铁站人工检票口问路卡"),
      desc: t2(
        "Enter your train number to ask staff which gate to go to and where the manual passport lane is.",
        "输入你的车次，直接向工作人员询问检票口编号和外国护照人工通道位置。"
      ),
      zh: `工作人员您好！我持外国护照已买好电子客票，请问我的车次【${trainDisplay}】在几号检票口？人工通道在哪里？谢谢！`,
      pinyin: `Gōngzuò rényuán nínhǎo! Qǐngwèn ${trainDisplay} zài jǐ hào jiǎnpiàokǒu? Réngōng tōngdào zài nǎlǐ?`,
      meaning: t2(
        `Hello staff! I hold a foreign passport with an e-ticket. Which check-in gate is train ${trainDisplay}, and where is the manual passport lane? Thank you!`,
        `工作人员您好！我持外国护照已买电子票，请问 ${trainDisplay} 在几号检票口？人工通道在哪里？`
      ),
      hasInput: "train" as const,
    },
    {
      id: "cash",
      Icon: Banknote,
      accent: "bg-sky-50 border-sky-200 text-sky-900",
      title: t2("4. Personal QR Code / Cash Help Card", "4. 个人收款码换现金帮忙卡"),
      desc: t2(
        "Foreign cards in Alipay/WeChat cannot pay personal QR codes at small street stalls. Ask to pay cash or trade cash.",
        "外卡绑支付宝/微信无法扫小摊的个人收款码。请摊主收现金，或请旁人收现金帮忙代付。"
      ),
      zh: "您好！外国银行卡绑支付宝无法扫“个人收款码”，但我有人民币现金，或者我把现金给您、请您帮我代付一下可以吗？万分感谢！",
      pinyin: "Nínhǎo! Wàikǎ wúfǎ sǎo gèrén shōukuǎnmǎ, wǒ gěi nín xiànjīn, qǐng bāng wǒ dàifù kěyǐ ma? Xièxie!",
      meaning: t2(
        "Hello! Foreign cards linked to Alipay cannot scan personal QR codes, but I have RMB cash — could I pay in cash, or give you cash if you help me pay by QR? Thank you so much!",
        "您好！外卡绑支付宝扫不了个人码，我有人民币现金，可以付现金或给您现金请您帮忙代付吗？非常感谢！"
      ),
    },
    {
      id: "hospital",
      Icon: Hospital,
      accent: "bg-rose-50 border-rose-300 text-rose-900",
      title: t2("5. Emergency Hospital International Dept Card", "5. 紧急送医三甲医院国际部卡"),
      desc: t2(
        "Show to a passerby, hotel staff or taxi driver if you suddenly feel very unwell and need an English-speaking doctor.",
        "突发身体不适需要英语医生时，出示给路人、酒店员工或出租车司机。"
      ),
      zh: "🚨 紧急求助！我是外国游客身体突发不适，请帮我打车送往最近公立三甲医院的【国际医疗部 / 特需门诊】或拨打 120，谢谢！",
      pinyin: "Jǐnjí qiúzhù! Qǐng sòng wǒ qù sānjiǎ yīyuàn guójì yīliáobù huò bōdǎ 120, xièxie!",
      meaning: t2(
        "EMERGENCY! I am a foreign tourist feeling suddenly unwell. Please help me get a taxi to the International Medical Department of the nearest Grade-A public hospital, or call 120. Thank you!",
        "紧急求助！我是外国游客身体突发不适，请帮我打车送往最近公立三甲医院国际医疗部/特需门诊，或拨打 120，谢谢！"
      ),
    },
  ];

  return (
    <div className="space-y-10">
      {/* Emergency Hotlines */}
      <section>
        <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-slate-900">
          <Phone className="h-5 w-5 text-red-600" /> {T(U.emergTitle)}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {EMERGENCY_NUMBERS.map((e) => (
            <a
              key={e.num}
              href={`tel:${e.num}`}
              className={`flex flex-col rounded-xl border p-4 transition hover:shadow-md ${e.cls}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold tracking-tight">{e.num}</span>
                <Phone className="h-4 w-4 opacity-70" />
              </div>
              <div className="mt-1 text-sm font-bold">{T(e.name)}</div>
              <p className="mt-1 text-xs opacity-85">{T(e.note)}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Pharmacy Symptom Lookup */}
      <section>
        <div className="mb-4">
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <Pill className="h-5 w-5 text-red-600" /> {T(U.pharmTitle)}
          </h2>
          <p className="mt-1 text-sm text-slate-600">{T(U.pharmIntro)}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {PHARMACY_ROWS.map((row) => (
            <button
              key={row.id}
              type="button"
              onClick={() =>
                sc.show({
                  zh: row.zh,
                  pinyin: row.pinyin,
                  meaning: `${T(row.symptom)} (${row.familiar}) — ${T(row.safety)}`,
                })
              }
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-red-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-bold text-slate-900 group-hover:text-red-600">{T(row.symptom)}</div>
                  <div className="text-xs font-medium text-slate-500">{row.familiar}</div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-600">
                  <Maximize2 className="h-3 w-3" /> {T(U.showFull)}
                </span>
              </div>
              <div className="mt-3 rounded-lg bg-slate-50 p-3 text-sm font-semibold leading-snug text-slate-900">
                {row.zh}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{T(row.safety)}</p>
            </button>
          ))}
        </div>
      </section>

      {/* 5 Street Rescue Cards */}
      <section>
        <div className="mb-4">
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <ShieldAlert className="h-5 w-5 text-red-600" /> {T(U.cardsTitle)}
          </h2>
          <p className="mt-1 text-sm text-slate-600">{T(U.cardsIntro)}</p>
        </div>

        <div className="space-y-4">
          {rescueCards.map((c) => {
            const Icon = c.Icon;
            return (
              <div key={c.id} className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${c.accent}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900">{T(c.title)}</h3>
                      <p className="mt-0.5 text-sm text-slate-600">{T(c.desc)}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => sc.show({ zh: c.zh, pinyin: c.pinyin, meaning: T(c.meaning) })}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-red-600 px-3.5 py-2 text-sm font-semibold text-white hover:bg-red-700"
                  >
                    <Maximize2 className="h-4 w-4" /> {T(U.showFull)}
                  </button>
                </div>

                {c.hasInput === "hotel" && (
                  <div className="mt-3">
                    <input
                      type="text"
                      value={hotelAddr}
                      onChange={(e) => setHotelAddr(e.target.value)}
                      placeholder={T(U.hotelPh)}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-red-500 focus:outline-none"
                    />
                  </div>
                )}

                {c.hasInput === "train" && (
                  <div className="mt-3 max-w-xs">
                    <input
                      type="text"
                      value={trainNo}
                      onChange={(e) => setTrainNo(e.target.value)}
                      placeholder={T(U.trainPh)}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold uppercase text-slate-900 focus:border-red-500 focus:outline-none"
                    />
                  </div>
                )}

                <div
                  onClick={() => sc.show({ zh: c.zh, pinyin: c.pinyin, meaning: T(c.meaning) })}
                  className="mt-3 cursor-pointer whitespace-pre-line rounded-lg bg-slate-900 p-4 text-base font-bold leading-snug text-amber-300 transition hover:bg-slate-800"
                >
                  {c.zh}
                </div>
                {lang === "en" && <p className="mt-2 text-xs text-slate-500">{T(c.meaning)}</p>}
              </div>
            );
          })}
        </div>
      </section>

      <AffiliateBox id="insurance" lang={lang} />

      <ShowCard content={sc.content} close={sc.close} />
    </div>
  );
}
