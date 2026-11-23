"use client";

import { useEffect, useMemo, useState } from "react";
import { Download, Maximize2, CupSoda, Check } from "lucide-react";
import { Lang, L, t2, tx } from "@/lib/i18n";
import { ShowCard, useShowCard } from "@/components/ShowCard";

type Group = "allergy" | "diet" | "taste";

interface Option {
  id: string;
  group: Group;
  label: L;
  /** Chef-level Chinese instruction shown on the card */
  zh: string;
  pinyin: string;
  /** English meaning of the Chinese instruction (shown to the traveller) */
  meaning: string;
}

const OPTIONS: Option[] = [
  {
    id: "allergy_peanut",
    group: "allergy",
    label: t2("Severe Peanut Allergy (incl. Oil)", "严重花生过敏（含花生油）"),
    zh: "🚨 致命花生过敏：严禁放【花生、花生碎、花生酱】，且绝对不能使用花生油炒菜！请务必用洗干净的炒锅和锅铲单独制作，误食一点点就会休克送医！",
    pinyin: "Wǒ duì huāshēng hé huāshēngyóu yánzhòng guòmǐn!",
    meaning:
      "Deadly peanut allergy: no peanuts, crushed peanuts or peanut butter, and absolutely no peanut oil for frying! Please cook my dish separately in a clean wok with a clean spatula — even a tiny amount will send me into shock and to hospital!",
  },
  {
    id: "allergy_treenut",
    group: "allergy",
    label: t2("Tree Nut Allergy", "坚果过敏"),
    zh: "🚨 严重坚果过敏：严禁放任何【核桃、腰果、杏仁、巴旦木、松子、开心果、夏威夷果】及坚果碎！",
    pinyin: "Bùnéng chī rènhé jiānguǒ (hétao, yāoguǒ)!",
    meaning:
      "Severe tree nut allergy: no walnuts, cashews, apricot kernels, almonds, pine nuts, pistachios, macadamias or any crushed nuts at all!",
  },
  {
    id: "allergy_gluten",
    group: "allergy",
    label: t2("Celiac / Strict Gluten-Free", "乳糜泻 / 严格无麸质"),
    zh: "🚨 麦麸/小麦严重过敏：绝对不能吃【面粉、面条、饺子皮、馒头、面包糠、油条】，且炒菜严禁放普通酱油（生抽/老抽）、豆瓣酱、甜面酱、蚝油和陈醋！请仅用【盐、白糖、大米醋和纯植物油】调味，勾芡仅限纯玉米/土豆淀粉！",
    pinyin: "Wǒ bùnéng chī miànfěn hé pǔtōng jiàngyóu!",
    meaning:
      "Severe wheat/gluten allergy: no flour, noodles, dumpling wrappers, steamed buns, breadcrumbs or fried dough sticks, and no regular soy sauce (light or dark), chili bean paste, sweet bean sauce, oyster sauce or aged vinegar! Season only with salt, white sugar, rice vinegar and pure vegetable oil; thicken only with pure corn or potato starch!",
  },
  {
    id: "allergy_shellfish",
    group: "allergy",
    label: t2("Crustacean / Shellfish Allergy", "甲壳类 / 贝类海鲜过敏"),
    zh: "🚨 海鲜甲壳类严重过敏：严禁放【虾、虾仁、虾皮、虾米、螃蟹、贝类、生蚝】，且绝对不能放蚝油、虾酱、鱼露或海鲜汤底！",
    pinyin: "Wǒ duì hǎixiān, xiā hé háoyóu guòmǐn!",
    meaning:
      "Severe shellfish allergy: no shrimp, peeled shrimp, tiny dried shrimp, dried shrimp, crab, shellfish or oysters, and absolutely no oyster sauce, shrimp paste, fish sauce or seafood broth!",
  },
  {
    id: "allergy_sesame",
    group: "allergy",
    label: t2("Sesame Allergy", "芝麻过敏"),
    zh: "🚨 芝麻严重过敏：菜里和表面严禁撒【白芝麻、黑芝麻】，出锅前绝对不能淋香油（麻油）或芝麻酱！",
    pinyin: "Bùnéng fàng zhīma hé xiāngyóu (máyóu)!",
    meaning:
      "Severe sesame allergy: no white or black sesame seeds in or on the food, and absolutely no sesame oil or sesame paste drizzled on before serving!",
  },
  {
    id: "allergy_dairy",
    group: "allergy",
    label: t2("Dairy / Milk Allergy", "乳制品 / 牛奶过敏"),
    zh: "⚠️ 乳制品过敏：不能吃任何【牛奶、奶油、黄油、芝士/奶酪、炼乳、奶粉】。",
    pinyin: "Bùnéng chī niúnǎi, huángyóu hé zhīshì.",
    meaning: "Dairy allergy: no milk, cream, butter, cheese, condensed milk or milk powder.",
  },
  {
    id: "allergy_egg",
    group: "allergy",
    label: t2("Egg Allergy", "蛋类过敏"),
    zh: "⚠️ 蛋类过敏：不能吃【鸡蛋、鸭蛋、鹌鹑蛋、皮蛋、咸蛋黄】以及含蛋液的挂糊油炸食品和蛋黄酱。",
    pinyin: "Bùnéng chī jīdàn hé yādàn.",
    meaning:
      "Egg allergy: no chicken eggs, duck eggs, quail eggs, century eggs or salted egg yolk, and no battered fried food made with egg or mayonnaise.",
  },
  {
    id: "diet_halal",
    group: "diet",
    label: t2("Halal / No Pork or Lard", "清真 / 不吃猪肉和猪油"),
    zh: "🌙 清真饮食禁忌：我不吃【猪肉、排骨、培根、火腿肠、肉松】，且炒蔬菜和煮汤绝对不能使用猪油或猪骨汤，请用纯植物油！",
    pinyin: "Wǒ bù chī zhūròu hé zhūyóu, qǐng yòng zhíwùyóu.",
    meaning:
      "Halal diet: I don't eat pork, pork ribs, bacon, ham sausage or pork floss, and please never use lard or pork bone broth for vegetables or soup — use pure vegetable oil!",
  },
  {
    id: "diet_vegan",
    group: "diet",
    label: t2("Strict Vegan (Plant-Based)", "严格纯素（植物性饮食）"),
    zh: "🌱 严格纯素食：我不吃任何【猪肉、牛羊肉、鸡鸭肉（哪怕一点点肉末臊子都不行！）、鱼虾海鲜、鸡蛋、奶制品】，且炒菜不能用猪油、蚝油、鸡精或肉骨高汤！",
    pinyin: "Wǒ chī chúnsù, yīdiǎn ròumò, zhūyóu, háoyóu dōu bùnéng fàng!",
    meaning:
      "Strict vegan: I don't eat any pork, beef, lamb, chicken or duck (not even a little minced meat topping!), fish, shrimp or seafood, eggs or dairy, and please don't cook with lard, oyster sauce, chicken bouillon powder or meat-bone stock!",
  },
  {
    id: "taste_nospicy",
    group: "taste",
    label: t2("Zero Spicy (No Chili at All)", "完全不辣（一点辣椒都不要）"),
    zh: "🌶️❌ 完全免辣：我一点辣都不能吃，请不要放任何【干辣椒、鲜辣椒、辣椒油、红油、豆瓣酱和花椒】！",
    pinyin: "Qǐng zuò de wánquán bù là, yīdiǎn làjiāo dōu bùyào!",
    meaning:
      "Not spicy at all: I can't eat any heat — please add no dried chili, fresh chili, chili oil, red oil, chili bean paste or Sichuan pepper!",
  },
  {
    id: "taste_mild",
    group: "taste",
    label: t2("Slightly Spicy (Tourist Mild)", "微辣（游客版微辣）"),
    zh: "🌶️ 广东微辣/少少辣：只能接受一点点微辣提味，请少放辣椒。",
    pinyin: "Zhǐyào yīdiǎndiǎn wēilà, xièxie!",
    meaning: "Cantonese-level mild: I can only take a tiny hint of spice — please use very little chili.",
  },
  {
    id: "taste_nocilantro",
    group: "taste",
    label: t2("No Cilantro / Coriander", "不要香菜"),
    zh: "🌿 不要香菜：出锅请绝对不要撒【香菜（芫荽）】！",
    pinyin: "Qǐng bùyào fàng xiāngcài!",
    meaning: "No cilantro: please never sprinkle cilantro (coriander) on the dish!",
  },
  {
    id: "taste_nomsg",
    group: "taste",
    label: t2("No Added MSG", "不额外加味精"),
    zh: "🧂 请尽量不要额外放【味精】。",
    pinyin: "Qǐng bùyào fàng wèijīng.",
    meaning: "Please try not to add extra MSG.",
  },
];

const GROUPS: { id: Group; title: L; tone: string }[] = [
  { id: "allergy", title: t2("Life-threatening allergies", "危及生命的过敏"), tone: "text-red-700" },
  { id: "diet", title: t2("Religious & lifestyle diets", "宗教与生活方式饮食"), tone: "text-emerald-700" },
  { id: "taste", title: t2("Taste preferences", "口味偏好"), tone: "text-amber-700" },
];

const HEADER = "🔴 请给厨师看 SHOW TO WAITER & CHEF";
const OPENER_ALLERGY = "您好！我是外国游客，我有非常严重的食物过敏，误食会有生命危险！请厨师师傅务必帮我注意：";
const OPENER_OTHER = "您好！我是外国游客，请厨师师傅帮我注意：";
const OPENER_ALLERGY_EN =
  "Hello! I'm a foreign tourist with a very serious food allergy — eating it could kill me! Chef, please make sure to note:";
const OPENER_OTHER_EN = "Hello! I'm a foreign tourist. Chef, please note:";
const THANKS = "谢谢您！";

const STORE_KEY = "gochina-allergy-card";

/* ---------------- Bubble tea builder data ---------------- */
const BASES = [
  { zh: "茉莉奶绿", en: "Jasmine Milk Tea" },
  { zh: "生椰拿铁", en: "Coconut Latte" },
  { zh: "鲜果茶", en: "Fruit Tea" },
];
const ICES = [
  { zh: "少冰", en: "Less Ice" },
  { zh: "去冰", en: "No Ice Cubes" },
  { zh: "正常冰", en: "Regular Ice" },
  { zh: "热饮", en: "Hot" },
];
const SUGARS = [
  { zh: "三分糖", en: "30% Sugar" },
  { zh: "五分糖", en: "50% Sugar" },
  { zh: "不另外加糖", en: "0% Added Sugar" },
];
const SERVES = [
  { zh: "打包带走", en: "To go" , zhLabel: "打包带走" },
  { zh: "在这里喝", en: "Dine in", zhLabel: "堂食" },
];

const U = {
  pick: t2("Tick everything that applies to you:", "勾选所有适用于你的选项："),
  preview: t2("Live preview of your card", "你的卡片实时预览"),
  empty: t2("Tick at least one option above to build your card.", "请在上方至少勾选一项来生成卡片。"),
  full: t2("Show full screen", "全屏展示"),
  save: t2("Save as image", "保存为图片"),
  clear: t2("Clear all", "全部清除"),
  saved: t2("Your selections are saved on this device.", "你的选择已保存在本设备上。"),
  sayIt: t2("Say it yourself:", "自己读出来："),
  teaTitle: t2("Bubble Tea & Coffee Order Builder", "奶茶与咖啡点单拼装器"),
  teaIntro: t2(
    "Tap one option in each row. The staff will understand the big card instantly.",
    "每行点选一个选项。店员看到大字卡立刻就懂。"
  ),
  base: t2("Drink", "饮品"),
  ice: t2("Ice", "冰量"),
  sugar: t2("Sugar", "甜度"),
  serve: t2("To go or dine in", "打包或堂食"),
  howTitle: t2("How it works", "使用说明"),
};

const HOW: L[] = [
  t2(
    "Normal machine translation turns \"I am allergic to gluten\" into a medical word (麸质) that many small-town cooks don't know — and they may then pour wheat-brewed soy sauce into your wok.",
    "普通机器翻译会把 \"I am allergic to gluten\" 翻成一个医学词（麸质），很多小城市的厨师并不认识——然后他们可能会把用小麦酿造的酱油倒进你的锅里。"
  ),
  t2(
    "This card translates medical allergy terms into the concrete ingredients, sauces and cooking oils a Chinese kitchen actually uses, and tells the chef exactly what not to add.",
    "这张卡把医学过敏术语翻译成中国厨房实际使用的具体食材、酱料和食用油，并明确告诉厨师不能放什么。"
  ),
  t2(
    "Show the card before you order. Use \"Show full screen\" for the waiter, or \"Save as image\" to keep it in your photos for offline use.",
    "点菜前出示卡片。用“全屏展示”给服务员看，或用“保存为图片”存进相册以便离线使用。"
  ),
  t2(
    "A card reduces risk but cannot guarantee a kitchen is free of cross-contamination. If your allergy is severe, always carry your own emergency medication.",
    "卡片能降低风险，但不能保证厨房完全没有交叉污染。如果你的过敏很严重，请务必随身携带自己的急救药物。"
  ),
];

function stripEmoji(s: string) {
  return s;
}

/** Wrap text for canvas, char by char (works for Chinese and mixed text). */
function wrap(ctx: CanvasRenderingContext2D, text: string, maxW: number): string[] {
  const lines: string[] = [];
  let line = "";
  for (const ch of Array.from(text)) {
    const test = line + ch;
    if (ctx.measureText(test).width > maxW && line) {
      lines.push(line);
      line = ch.trim() ? ch : "";
    } else line = test;
  }
  if (line) lines.push(line);
  return lines;
}

export default function AllergyCard({ lang }: { lang: Lang }) {
  const T = (l: L) => tx(l, lang);
  const [sel, setSel] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);
  const sc = useShowCard();

  const [base, setBase] = useState(0);
  const [ice, setIce] = useState(0);
  const [sugar, setSugar] = useState(0);
  const [serve, setServe] = useState(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        const v = JSON.parse(raw);
        if (Array.isArray(v)) setSel(v.filter((x) => OPTIONS.some((o) => o.id === x)));
      }
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem(STORE_KEY, JSON.stringify(sel));
  }, [sel, loaded]);

  const chosen = useMemo(() => OPTIONS.filter((o) => sel.includes(o.id)), [sel]);
  const hasAllergy = chosen.some((o) => o.group === "allergy");
  const opener = hasAllergy ? OPENER_ALLERGY : OPENER_OTHER;
  const openerEn = hasAllergy ? OPENER_ALLERGY_EN : OPENER_OTHER_EN;

  const toggle = (id: string) => setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const cardText = [opener, ...chosen.map((o, i) => `${i + 1}. ${o.zh}`), THANKS].join("\n");
  const cardMeaning = [openerEn, ...chosen.map((o, i) => `${i + 1}. ${o.meaning}`)].join(" ");

  const showFull = () =>
    sc.show({ zh: cardText, meaning: lang === "en" ? cardMeaning : undefined });

  const saveImage = () => {
    const W = 1080;
    const pad = 64;
    const maxW = W - pad * 2;
    const fontFamily = "'PingFang SC','Hiragino Sans GB','Microsoft YaHei','Noto Sans SC',sans-serif";
    const measure = document.createElement("canvas").getContext("2d");
    if (!measure) return;
    // Lay out text first so we know the canvas height
    type Row = { text: string; font: string; color: string; lh: number; gap?: number };
    const rows: Row[] = [];
    const add = (text: string, font: string, color: string, lh: number, gap = 0) => {
      measure.font = font;
      wrap(measure, text, maxW).forEach((t, i, arr) =>
        rows.push({ text: t, font, color, lh, gap: i === arr.length - 1 ? gap : 0 })
      );
    };
    add(opener, `bold 44px ${fontFamily}`, "#b91c1c", 62, 28);
    chosen.forEach((o, i) => {
      add(`${i + 1}. ${stripEmoji(o.zh)}`, `bold 40px ${fontFamily}`, "#0f172a", 58, 6);
      add(o.pinyin, `italic 28px ${fontFamily}`, "#64748b", 40, 26);
    });
    add(THANKS, `bold 44px ${fontFamily}`, "#0f172a", 62, 0);
    const headerH = 120;
    const bodyH = rows.reduce((s, r) => s + r.lh + (r.gap || 0), 0);
    const H = headerH + pad + bodyH + pad + 50;

    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = "#dc2626";
    ctx.lineWidth = 12;
    ctx.strokeRect(6, 6, W - 12, H - 12);
    ctx.fillStyle = "#dc2626";
    ctx.fillRect(0, 0, W, headerH);
    ctx.fillStyle = "#ffffff";
    ctx.font = `bold 46px ${fontFamily}`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(HEADER, W / 2, headerH / 2);
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    let y = headerH + pad;
    for (const r of rows) {
      ctx.font = r.font;
      ctx.fillStyle = r.color;
      ctx.fillText(r.text, pad, y);
      y += r.lh + (r.gap || 0);
    }
    ctx.font = `24px ${fontFamily}`;
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("GoChina", pad, H - 60);
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "china-allergy-card.png";
    a.click();
  };

  const teaSentence = `您好！我要一杯【${BASES[base].zh}】，【${ICES[ice].zh}】、【${SUGARS[sugar].zh}】，${SERVES[serve].zh}，谢谢！`;
  const teaMeaning = `Hello! One ${BASES[base].en}, ${ICES[ice].en.toLowerCase()}, ${SUGARS[sugar].en.toLowerCase()}, ${SERVES[serve].en.toLowerCase()}, thank you!`;

  const chip = (active: boolean) =>
    `rounded-lg border px-3 py-2 text-left text-sm transition ${
      active ? "border-red-500 bg-red-50 font-semibold text-red-700" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
    }`;

  return (
    <div className="space-y-8">
      {/* Selection */}
      <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
        <p className="mb-3 text-sm font-medium text-slate-700">{T(U.pick)}</p>
        <div className="space-y-5">
          {GROUPS.map((g) => (
            <div key={g.id}>
              <h3 className={`mb-2 text-sm font-bold ${g.tone}`}>{T(g.title)}</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {OPTIONS.filter((o) => o.group === g.id).map((o) => {
                  const on = sel.includes(o.id);
                  return (
                    <label
                      key={o.id}
                      className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 text-sm ${
                        on ? "border-red-400 bg-red-50" : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={on}
                        onChange={() => toggle(o.id)}
                        className="mt-0.5 h-4 w-4 accent-red-600"
                      />
                      <span className="font-medium text-slate-800">{T(o.label)}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span>{T(U.saved)}</span>
          {sel.length > 0 && (
            <button type="button" onClick={() => setSel([])} className="font-medium text-slate-600 underline">
              {T(U.clear)}
            </button>
          )}
        </div>
      </section>

      {/* Preview */}
      <section>
        <h3 className="mb-2 text-sm font-bold text-slate-700">{T(U.preview)}</h3>
        {chosen.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-slate-200 p-6 text-center text-sm text-slate-500">
            {T(U.empty)}
          </div>
        ) : (
          <>
            <div className="overflow-hidden rounded-xl border-4 border-red-600 bg-white">
              <div className="bg-red-600 px-4 py-3 text-center text-base font-bold text-white sm:text-lg">{HEADER}</div>
              <div className="space-y-3 p-4 sm:p-5">
                <p className="text-lg font-bold leading-snug text-red-700">{opener}</p>
                {lang === "en" && <p className="text-xs text-slate-500">{openerEn}</p>}
                <ol className="space-y-3">
                  {chosen.map((o, i) => (
                    <li key={o.id} className="border-t border-slate-100 pt-3">
                      <div className="text-base font-bold leading-snug text-slate-900">
                        {i + 1}. {o.zh}
                      </div>
                      <div className="mt-1 text-xs italic text-slate-500">
                        {T(U.sayIt)} {o.pinyin}
                      </div>
                      {lang === "en" && <div className="mt-1 text-xs text-slate-600">{o.meaning}</div>}
                    </li>
                  ))}
                </ol>
                <p className="border-t border-slate-100 pt-3 text-lg font-bold text-slate-900">{THANKS}</p>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={showFull}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-700"
              >
                <Maximize2 className="h-4 w-4" /> {T(U.full)}
              </button>
              <button
                type="button"
                onClick={saveImage}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                <Download className="h-4 w-4" /> {T(U.save)}
              </button>
            </div>
          </>
        )}
      </section>

      {/* Bubble tea builder */}
      <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
        <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
          <CupSoda className="h-5 w-5 text-red-600" /> {T(U.teaTitle)}
        </h3>
        <p className="mt-1 text-sm text-slate-600">{T(U.teaIntro)}</p>
        {(
          [
            [U.base, BASES, base, setBase],
            [U.ice, ICES, ice, setIce],
            [U.sugar, SUGARS, sugar, setSugar],
          ] as const
        ).map(([title, list, val, set]) => (
          <div key={title.en} className="mt-4">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{T(title)}</div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {list.map((o, i) => (
                <button key={o.zh} type="button" onClick={() => set(i)} className={chip(val === i)}>
                  <div className="flex items-center gap-1">
                    {val === i && <Check className="h-3.5 w-3.5" />} {o.zh}
                  </div>
                  {lang === "en" && <div className="text-xs font-normal text-slate-500">{o.en}</div>}
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-4">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{T(U.serve)}</div>
          <div className="grid grid-cols-2 gap-2">
            {SERVES.map((o, i) => (
              <button key={o.zh} type="button" onClick={() => setServe(i)} className={chip(serve === i)}>
                {lang === "en" ? o.en : o.zhLabel}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-5 rounded-xl bg-slate-900 p-4 text-white">
          <div className="text-xl font-bold leading-snug">{teaSentence}</div>
          {lang === "en" && <div className="mt-2 text-sm text-slate-300">{teaMeaning}</div>}
        </div>
        <button
          type="button"
          onClick={() => sc.show({ zh: teaSentence, meaning: lang === "en" ? teaMeaning : undefined })}
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-700"
        >
          <Maximize2 className="h-4 w-4" /> {T(U.full)}
        </button>
      </section>

      <section className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700 sm:p-5">
        <h3 className="mb-2 font-bold text-slate-900">{T(U.howTitle)}</h3>
        <ul className="list-disc space-y-1.5 pl-5">
          {HOW.map((h) => (
            <li key={h.en}>{T(h)}</li>
          ))}
        </ul>
      </section>

      <ShowCard content={sc.content} close={sc.close} />
    </div>
  );
}
