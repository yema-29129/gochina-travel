# Agent brief — GoChina bilingual rebuild (read fully before coding)

Project: Next.js 15 App Router + Tailwind v4 + TypeScript, at the workspace root.
Site: practical China travel guide for foreigners. Brand "GoChina". Style: clean product UI
(white cards, `border-slate-200`, `rounded-xl`, red-600 accent, slate text). Look at existing
components in `src/components/` and copy their style.

## Source material (MUST read the parts relevant to your task)
- `/Users/guanwaiyema/Downloads/code_artifact.md` — "全链路痛点拆解与网站规划全书" (chapters 1–8: visa lists,
  24 provinces / 65 ports table, special visa-free, online arrival card, 12 airports, payment bugs,
  ATM & DCC, train classes/refunds/kids, domestic flights power bank CCC & budget airlines,
  shared bikes, temporary driving license, bubble tea dictionary, food delivery, luggage delivery,
  ticket release table, blackout dates, tax refund, shopping & bargaining, sitemap, wireframes, SEO keywords).
- `/Users/guanwaiyema/Downloads/code_artifact (1).md` — "九大核心计算器与查询工具产品手册" (9 tools with exact
  inputs, formulas, data tables, warnings, monetization hooks).
Use `read_file` on those paths (they may be long: read with StartLine/EndLine/ByteOffset until done).
**Include every fact, table row, rule, number and warning from the source that belongs to your task. Nothing may be dropped.**
Write the English as clear, plain English for tourists (not a translation of the Chinese marketing tone;
no "站长/变现" notes — those are for the owner, not the visitor). Keep tables as tables.

## Bilingual rule (critical — the owner reviews the Chinese version)
- All visible text is stored as `L = { en: string; zh: string }` (`src/lib/i18n.ts`, helper `t2(en, zh)` and `tx(l, lang)`).
- `zh` must be a **faithful 1:1 translation of `en`**: same facts, same order, same numbers, same list items,
  nothing added, nothing removed. Chinese names/places stay in Chinese (e.g. 故宫). Codes/numbers can be plain strings.
- Language comes from the URL: pages are under `src/app/[lang]/...`, `lang` is "en" | "zh".
  Components receive `lang: Lang` as a prop. Build internal links with `href(lang, "/path")`.
- Shared UI strings: `src/data/ui.ts` (`UI[lang]`). Do not edit it except to ADD keys you need (add to both en and zh).

## Shared building blocks (already exist — use them, do not rewrite)
- `src/data/types.ts` — `Block`, `Section`, `Guide`, `City`, `FaqItem`, `ToolId`, `AffiliateId`.
- `src/components/Blocks.tsx` — renders `Block[]` (p, list, steps, table, callout, show (Chinese show-card), tool link, affiliate, ad).
- `src/components/ShowCard.tsx` — `useShowCard()` + `<ShowCard content close />` full-screen Chinese card.
- `src/components/Faq.tsx`, `PageHeader.tsx`, `IconBox.tsx`, `AffiliateBox.tsx`, `AdSlot.tsx`, `JsonLd.tsx`.
- `src/lib/affiliates.ts` (affiliate ids), `src/lib/seo.ts` (`buildMetadata`, JSON-LD helpers), `src/data/tools.ts` (tool list).
- lucide-react icons are installed. No other packages may be added.

## Rules
- Only create/edit the files you own (listed in your task). Do not touch other files.
- Do NOT run `npm run build`, `next build`, `next dev` or `npm install` (other agents work in parallel).
  To check your work run: `npx tsc --noEmit -p . 2>&1 | grep -E "<your file paths>"` and fix errors in your files
  (errors in files owned by others are expected while they are still working — ignore them).
- Client components need `"use client"`. Persist user input with localStorage where it helps.
- When done, reply with: the list of files you created, and any facts from the source you could not fit.
