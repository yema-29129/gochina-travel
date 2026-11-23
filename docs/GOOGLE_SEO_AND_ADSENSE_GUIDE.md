# GoChina 谷歌收录（SEO）、Google Analytics 与 Google AdSense 接入实操手册

这份手册面向零基础站长，手把手教你把网站上线、让 Google 快速收录、并顺利通过 Google AdSense 广告审核。

---

## 一、网站代码里已经为你内置好的谷歌基础设施

你不需要自己写任何 SEO 或广告代码，以下所有谷歌官方要求的配置都已经内置完成：

| 模块 | 对应文件 | 作用 |
| :--- | :--- | :--- |
| **动态站点地图** | `src/app/sitemap.ts` | 自动生成 `/sitemap.xml`，包含全站英文 `/en/*` 与中文 `/zh/*` 所有页面及 `hreflang` 互指标签 |
| **爬虫规则** | `src/app/robots.ts` | 自动生成 `/robots.txt`，允许 Googlebot 抓取并指向 `sitemap.xml` |
| **Canonical 与多语言 `hreflang`** | `src/lib/seo.ts` | 每个页面自动输出 `<link rel="canonical">`、`<link rel="alternate" hreflang="en/zh-CN/x-default">`、Open Graph 和 Twitter 卡片 |
| **结构化数据（JSON-LD）** | `src/components/JsonLd.tsx` | 指南页输出 `Article + FAQPage + BreadcrumbList`；工具页输出 `WebApplication`；城市页输出 `TouristDestination`，助力 Google 富媒体结果 |
| **Google Search Console 验证** | `src/app/[lang]/layout.tsx` | 只需填环境变量 `NEXT_PUBLIC_GSC_VERIFICATION`，自动输出 `<meta name="google-site-verification">` |
| **Google Analytics 4 (GA4)** | `src/components/GoogleAnalytics.tsx` | 只需填环境变量 `NEXT_PUBLIC_GA_ID`，自动统计所有路由跳转与访客来源 |
| **Google AdSense 脚本 + Meta** | `src/app/[lang]/layout.tsx` | 只需填环境变量 `NEXT_PUBLIC_ADSENSE_CLIENT`，自动注入 `google-adsense-account` 验证标签与 `adsbygoogle.js` |
| **AdSense 广告位组件** | `src/components/AdSlot.tsx` | 指南正文中部、侧边栏、工具页底部已预留响应式广告位（配置 Slot ID 即展示，不填也支持 Google 自动广告） |
| **GDPR / 欧洲同意模式 v2** | `src/app/[lang]/layout.tsx` | 内置 Google Consent Mode v2 默认规则（欧洲经济区/英国/瑞士访客默认 `denied`，配合 AdSense CMP 弹窗使用） |
| **`ads.txt` 授权文件** | `public/ads.txt` | 根目录 `/ads.txt` 已创建，审核前把里面的 `pub-0000000000000000` 替换成你的发布商 ID |
| **AdSense 审核必备合规页面** | `/en/about`, `/contact`, `/privacy`, `/terms`, `/disclaimer`（及对应 `/zh/*`） | 完整的中英 1:1 隐私政策（含 AdSense Cookie 与退出链接）、关于我们、联系我们、使用条款、免责声明与联盟披露 |
| **联盟链接合规标注** | `src/components/AffiliateBox.tsx` | 所有推广链接自动带 `rel="sponsored nofollow noopener noreferrer"`，符合 Google 垃圾链接政策 |
| **PWA 离线缓存** | `public/manifest.webmanifest` + `public/sw.js` | 游客打开过一次过敏卡/打车卡/救急卡后，断网也能继续展示 |

---

## 二、第一步：部署上线并绑定独立域名（免费方案）

> **注意**：Google Search Console 和 Google AdSense **必须使用你自己的独立域名**（如 `https://www.gochinaguide.com`），不要用 `vercel.app` 或 `localhost` 提交申请。

1. **购买简短英文域名**：推荐在 Cloudflare Registrar、Namecheap 或 Porkbun 购买 `.com` 域名（约 $10/年）。
2. **推送代码到 GitHub**：在 GitHub 新建仓库并推送本项目代码。
3. **部署到 Vercel（或 Cloudflare Pages）**：
   - 登录 [vercel.com](https://vercel.com) → **Add New Project** → 导入你的 GitHub 仓库。
   - 在 **Settings → Domains** 中添加你的域名，按提示在域名 DNS 里添加 A 记录 / CNAME 记录。
   - 在 **Settings → Environment Variables** 中填入 `.env.example` 里的环境变量（见下文）。
4. **先填最基础的两个环境变量**：
   ```bash
   NEXT_PUBLIC_SITE_URL=https://www.你的域名.com
   NEXT_PUBLIC_CONTACT_EMAIL=hello@你的域名.com
   ```
   部署完成后，访问 `https://www.你的域名.com/sitemap.xml` 和 `https://www.你的域名.com/robots.txt`，确认两者都能正常打开且里面的网址都是你的正式域名。

---

## 三、第二步：接入 Google Search Console（让谷歌收录你的网站）

1. 打开 [Google Search Console](https://search.google.com/search-console) 并登录 Google 账号。
2. 点击左上角 **添加资源（Add property）**，选择右侧 **网址前缀（URL prefix）**，输入 `https://www.你的域名.com`。
3. 在验证方式中选择 **HTML 标记（HTML tag）**，Google 会给你一段代码：
   ```html
   <meta name="google-site-verification" content="ABCDEFG1234567890" />
   ```
4. **只需复制 `content="..."` 引号里面的那一串字符**（例如 `ABCDEFG1234567890`），填到 Vercel 环境变量：
   ```bash
   NEXT_PUBLIC_GSC_VERIFICATION=ABCDEFG1234567890
   ```
   重新部署一次（Redeploy），然后回到 Search Console 点击 **验证（Verify）**。
5. **提交站点地图（最关键一步）**：
   - 左侧菜单点击 **站点地图（Sitemaps）**。
   - 在“添加新的站点地图”里输入 `sitemap.xml`，点击 **提交（Submit）**。
   - 正常情况下 24～72 小时内 Google 会开始抓取全部英文和中文页面。
6. **加速核心页面收录**：
   - 在顶部搜索框粘贴重点页面（如 `/en/tools/visa-checker`、`/en/tools/payment-fee-calculator`、`/en/tools/allergy-card`、`/en/guides/240-hour-transit`），点击 **请求编入索引（Request Indexing）**。

---

## 四、第三步：接入 Google Analytics 4（查看流量与用户来源）

1. 打开 [Google Analytics](https://analytics.google.com) → 创建账号 → 创建媒体资源（Property）→ 选择 **网站（Web）** 数据流，填入你的域名。
2. 复制生成的 **衡量 ID（Measurement ID）**，格式如 `G-XXXXXXXXXX`。
3. 在 Vercel 环境变量中添加：
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. 重新部署后，用手机打开你的网站，在 GA4 的 **实时（Realtime）** 报告里就能看到在线访客。

---

## 五、第四步：申请并接入 Google AdSense（广告变现全流程）

### 1. 申请前自检清单（提高一次过审率）
- [x] 拥有独立顶级域名（`.com` / `.io` 等），开启 HTTPS。
- [x] 网站底部已完整展示 **About / Contact / Privacy Policy / Terms / Disclaimer** 五个页面（本站已全部内置并有中英 1:1 版本）。
- [x] 隐私政策中已明确披露 Google AdSense Cookie 及退出个性化广告链接（已内置）。
- [x] 已有大量原创、高价值内容（本站已内置 22 篇深度指南 + 12 个交互工具 + 8 个城市攻略，中英双语共 90+ 静态页面）。
- [ ] **建议**：先把 `NEXT_PUBLIC_CONTACT_EMAIL` 改成真实可收信的邮箱，并等网站被 Google Search Console 收录 1～2 周、有一点自然访问量后再提交 AdSense 审核，通过率最高。

### 2. 提交 AdSense 审核与配置代码
1. 访问 [Google AdSense](https://www.google.com/adsense) 注册账号并添加你的网站域名。
2. 获取你的 **发布商 ID（Publisher ID）**，格式为 `ca-pub-1234567890123456`。
3. **完成 2 处配置**：
   - **配置 A（环境变量）**：在 Vercel 中添加：
     ```bash
     NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-1234567890123456
     ```
   - **配置 B（`public/ads.txt`）**：打开 `public/ads.txt`，把 `pub-0000000000000000` 替换成你去掉 `ca-` 后的 `pub-1234567890123456`，保存并重新部署。验证 `https://www.你的域名.com/ads.txt` 可正常访问。
4. 回到 AdSense 后台点击 **我已放置代码 → 请求审核**（审核通常需 3 天至 2 周）。

### 3. 开启欧洲 GDPR 隐私弹窗（CMP）与广告位
- **GDPR 弹窗（必需）**：审核通过后，在 AdSense 后台进入 **隐私权和消息（Privacy & messaging）→ 欧洲法规（European regulations）**，点击开启 Google 自带的免费 CMP 同意弹窗。本站代码已内置 Google Consent Mode v2，会自动与该弹窗协同工作。
- **方式一：自动广告（最省心）**：在 AdSense → 广告 → 按网站 → 开启 **自动广告（Auto ads）**，无需配置任何 Slot ID 即可自动出广告。
- **方式二：手动精准广告位**：在 AdSense → 广告 → 按广告单元创建展示广告（Display Ads），把生成的数字 `data-ad-slot` 填入以下环境变量，本站预留的正文中、侧边栏和底部广告位就会自动启用：
  ```bash
  NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE=你的广告单元ID1
  NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR=你的广告单元ID2
  NEXT_PUBLIC_ADSENSE_SLOT_FOOTER=你的广告单元ID3
  ```

---

## 六、如何用中文版（`/zh`）核查和扩充内容？

- 本站所有页面均支持在右上角一键切换 **English / 中文**，网址一一对应（例如 `/en/guides/240-hour-transit` ↔ `/zh/guides/240-hour-transit`）。
- 中文版是对英文版的 **1:1 逐条翻译**。你在中文页看到任何觉得需要补充、修改价格、更新政策或新增城市的地方，直接找到对应的文件修改 `en` 和 `zh` 两个字段即可：
  - 指南内容：`src/data/guides/*.ts`
  - 城市攻略：`src/data/cities.ts`
  - 免签国家与口岸数据：`src/data/visa.ts`
  - 联盟推广链接：`src/lib/affiliates.ts`（把里面的默认 URL 替换成你在 Trip.com / Airalo / Wise / SafetyWing 申请到的专属带参推广链接即可开始赚佣金）
