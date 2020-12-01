# Hugo Bootstrap 主題

[English](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/README.md) · 
[简体中文](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/README.zh-CN.md) · 
[繁體中文](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/README.zh-TW.md)

本主題是一個極快、響應式和功能豐富的 Hugo 部落格主題。

## 目錄

- [截圖](#截圖)
- [線上預覽](#線上預覽)
- [功能特性](#功能特性)
- [安裝](#安裝)
- [配置](#配置)
- [引數](#引數)
  - [全域性引數](#全域性引數)
  - [頁面引數](#頁面引數)
- [評論](#評論)
- [鉤子](#鉤子)
- [自定義資源](#自定義資源)
- [社交連結](#社交連結)
- [多樣的短程式碼](#短程式碼)
- [貢獻](#貢獻)

## 截圖

![截圖](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/images/screenshot.png)

**Dark Mode**

![深色模式下的截圖](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/images/screenshot-dark.png)

## 線上預覽

- https://hugo-theme-bootstrap.netlify.app/ - 部署於 Netlify。
- https://hugo-theme-bootstrap.razonyang.com/ - 自託管伺服器（亞洲），如果 Netlify 太慢了，可以試試這個。

這還有個[使用這個主題的網站列表](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/USEDBY.md)

## 功能特性

- 極快：[Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https://hugo-theme-bootstrap.netlify.app/en/) 分數在 `95-100` 之間
- 基於 [Bootstrap 5](https://v5.getbootstrap.com/)
- 響應式
- 多種配色：`blue`, `blue-gray`, `brown`, `cyan`, `green`, `indigo`, `orange`, `pink`, `purple`, `red`, `teal`, `yellow`
- [高度可配置](#配置)
- 深色模式
- 字體大小切換
- 多語言/國際化
- 搜尋
- 麵包屑導航
- 歸檔
- 資源延遲載入：支援 `image` 和 `iframe` 等。
- 打賞掛件：支持支付寶和微信。
- 文章目錄導航
- 分享按鈕：支持 [AddThis](https://www.addthis.com)。
- [評論](#評論)：支援 [Disqus](#disqus) 和 [Utterances](#utterances)。
- [自定義資源](#自定義資源)：自定義 CSS 和 JS。
- [鉤子](#鉤子)：用於在頁面新增自定義程式碼。
- [社交連結](#社交連結)
- [多樣的短程式碼](#短程式碼)
- [Twitter Cards](https://gohugo.io/templates/internal/#configure-twitter-cards) 和 [Open Graph](https://gohugo.io/templates/internal/#configure-open-graph)
- [知識共享許可協議](https://creativecommons.org/licenses/)

## 安裝

```shell
$ hugo new site myblog
$ cd myblog
$ git init
$ git submodule add https://github.com/razonyang/hugo-theme-bootstrap themes/hugo-theme-bootstrap
$ cp -a themes/hugo-theme-bootstrap/exampleSite/* .
$ hugo server
```

## 配置

如示例站點所展示，配置被分為多個配置檔案，這比單配置檔案更加清晰，特別是對於多語言網站。

| 名稱 | 型別 | 預設值 | 說明
|---|:-:|:-:|---
| `title` | String | - | 站點標題
| `baseURL` | String | - | 站點 URL
| `copyright` | String | - | 站點版權。`{year}` 佔位符會被替換為當前年份。
| `defaultContentLanguage` | String | `en` |
| `defaultContentLanguageInSubdir` | Boolean | `false` |
| `paginate` | Integer | `10` |
| `paginatePath` | String | `page` |
| `enableRobotsTXT` | Boolean | `true` |
| `disqusShortname` | String | - | [Disqus](#disqus) shortname.
| `googleAnalytics` | String | - | Google Analytics.
| `social` | Object | - | [社交連結](#社交連結)
| `author` | Object | - | 個人檔案
| `author.name` | String | - | 名稱
| `author.avatar` | String | `images/profile.webp` | 頭像
| `author.bio` | String | - | 簡介
| `author.company` | String | - | 公司
| `author.location` | String | - | 地理位置

## 引數

### 全域性引數

| 名稱 | 型別 | 預設值 | 說明
|---|:-:|:-:|---
| **Page** 
| `mainSections` | Array | `["posts"]` | 主要的 sections
| `titleSeparator` | String | `-` | 標題分隔符
| `comment` | Boolean | `true` | 是否開啟評論
| `toc` | Boolean | `true` | 是否開啟目錄
| `tocWordCount` | Integer | `280` | 僅當文章的字數超過此值時，才會顯示TOC。
| `tocSticky` | Boolean | `true` | 滾動時是否使目錄保持在頂部。
| `breadcrumb` | Boolean | `true` | 是否開啟麵包屑導航
| `dateFormat` | String | `Jan 2, 2006` | 日期格式。 查閱 [Hugo Date and Time Templating Reference](https://gohugo.io/functions/format/#hugo-date-and-time-templating-reference) 以獲取詳細資訊。
| `poweredBy` | Boolean | `true` | 是否顯示技術支援。
| `math` | Boolean | `false` | 是否開啟 `math`。
| `logo` | String | `images/logo.webp` | Logo
| `brand` | String | - | Brand
| `menusPosition` | String | `right` | 選單位置：`right`, `left`, `center`.
| `description` | String | - | 站點描述
| `palette` | String | - | 預設配色
| `palettes` | Array | **ALL** | 可選配色
| `featuredPostCount` | Integer | `5` | 精選文章數
| `recentPostCount` | Integer | `5` | 最近文章數
| `relatedPostCount` | Integer | `5` | 相關文章數
| `categoryCount` | Integer | `10` | 分類數
| `tagCount` | Integer | `10` | 標籤數
| `seriesCount` | Integer | `10` | 專欄數
| `fullWidth` | Boolean | `false` | 是否全寬
| `reward` | Object | - | 打賞
| `reward.alipay` | String | - | 支付寶收款二維碼圖片
| `reward.wechat` | String | - | 微信收款/打賞二維碼圖片
| `share` | Object | - | 分享按鈕
| `share.addThis` | String | - | [AddThis](https://www.addthis.com) `pubid`。
| `fontSize` | Object | 字體大小
| `fontSize.small` | String | `.9rem` | 小字體
| `fontSize.extraSmall` | String | `.8rem` | 更小的字體
| `fontSize.large` | String | `1.1rem` | 大字體
| `fontSize.extraLarge` | String | `1.2rem` | 更大的字體
| **Archive**
| `archive` | Object | - | 歸檔
| `archive.paginate` | Integer | `100` | 歸檔分頁
| `archive.dateFormat` | Integer | `Jan 2` | 歸檔日期格式
| **Search**
| `search` | Object | - | 搜尋配置
| `search.paginate` | Integer | `10` | 分頁
| `search.resultContentWordCount` | Integer | `240` | 搜尋結果內容最大字數
| `search.fuse` | Object | - | [Fuse.js 引數](https://fusejs.io/api/options.html)
| `search.fuse.ignoreLocation` | Boolean | `true` |
| `search.fuse.location` | Integer | - |
| `search.fuse.isCaseSensitive` | Boolean | - |
| `search.fuse.minMatchCharLength` | Integer | - |
| `search.fuse.threshold` | Double | - |
| `search.fuse.distance` | Integer | - |
| `search.fuse.useExtendedSearch` | Boolean | - |
| **Webmaster Site Verification** 
| `siteVerification` | Object | - |
| `siteVerification.google` | String | - | Google
| `siteVerification.bing` | String | - | Bing
| `siteVerification.baidu` | String | - | 百度
| `siteVerification.baiduUnion` | String | - | 百度聯盟
| `siteVerification.so` | String | - | 360
| `siteVerification.sogou` | String | - | 搜狗
| `siteVerification.shenma` | String | - | 神馬
| **Analytics** 
| `analytics` | Object | - | Analytics.
| `analytics.baidu` | String | - | 百度統計
| **Others** 
| `googleAdsense` | String | - | Google Adsense.
| `customCSS` | Array | - | 自定義 CSS， 主要用於匯入外部。 請查閱[自定義資源](#自定義資源)。
| `customJS` | Array | - | 自定義 JS， 主要用於匯入外部 JS。 請查閱[自定義資源](#自定義資源)。
| `utterances` | Object | - | [Utterances](#utterances)
| `utterances.repo` | String | - | Github 倉庫.
| `utterances.issueTerm` | String | `pathname` | `pathname`, `url`, `title`, `og:title`.
| `utterances.label` | String | - | 
| `utterances.theme` | String | `github-light` | `github-light`, `github-dark`, `preferred-color-scheme`, `github-dark-orange`, `icy-dark`, `dark-blue`, `photon-dark`.
| **Creative Commons License**
| `creativeCommons` | Object | - |
| `creativeCommons.by` | Boolean | `true` | 署名
| `creativeCommons.nc` | Boolean | `true` | 非商業
| `creativeCommons.nd` | Boolean | `true` | 禁止改作
| `creativeCommons.sa` | Boolean | `true` | 相同方式分享

> 除了 Google 站長工具外，其他搜宿引擎站長工具無法與 `hugo --minify` 同時使用，這是因為它們無法識別優化後的元標簽。

### 頁面引數

| 名稱 | 型別  | 預設值 | 說明
|---|:-:|:-:|---
| **Page** 
| `comment` | Boolean | `true` | 是否開啟評論，如果評論已被全域性關閉，該引數無效
| `toc` | Boolean | `true` | 是否開啟目錄，如果目錄已被全域性關閉，該引數無效
| `math` | Boolean | `false` | 是否開啟 `math`
| `reward` | Boolean | `true` | 是否開啟打賞
| `breadcrumb` | Boolean | `true` | 是否開啟麵包屑導航
| **Creative Commons License**
| `creativeCommons` | Object | - |
| `creativeCommons.by` | Boolean | `true` | 署名
| `creativeCommons.nc` | Boolean | `true` | 非商業
| `creativeCommons.nd` | Boolean | `true` | 禁止改作 
| `creativeCommons.sa` | Boolean | `true` | 相同方式分享

## 評論

### Disqus

```toml
disqusShortname = "yourdiscussshortname"
```

> `disqusShortname` 是站點配置，而非引數。請**勿**將其放置在 `params` 下。

檢視 [Disqus](https://disqus.com/) 官網以獲取詳細資訊。

### Utterances

[Utterances](https://utteranc.es/) 是一個基於 Github issue 的輕量級的評論掛件。

```toml
[utterances]
  repo = "user/repo"
  #issueTerm = "pathname" # pathname, url, title, og:title.
  #label = "comment" # Optional.
  #theme = "github-light" # github-light, github-dark, preferred-color-scheme, github-dark-orange, icy-dark, dark-blue, photon-dark.
```

> 不同於 Disqus，Utterances 是一個引數。請將其放置在 `params`。

## 自定義資源

有兩種方法可以自定義內部和外部的資源。

### 內部資源

通過建立 `assets/css/custom.css` 和 `assets/js/custom.js` 來自定義 CSS 和 JS 是最佳的方法，因为這些檔案會被打包成單個 CSS/JS 檔案，以減少 HTTP 的請求次數。

### 外部資源

任意的 CSS 和 JS 資源都可以通過 `customCSS` 和 `customJS` 引數進行匯入。

> `customCSS` 和 `customJS` 都可以匯入內部資源，只需要將檔案放到 `static` 資料夾。

## 鉤子

鉤子用於在頁面新增自定義程式碼。

| 鉤子 | 描述 |
|---|---|
| `head-end` | `<head>` 結束之前 |
| `body-end` | `<body>` 結束之前 |
| `main-begin` | `<main>` 上方 |
| `main-end` | `<main>` 下方 |
| `list-begin` | 文章列表上方 |
| `list-end` | 文章列表上方 |
| `sidebar-begin` | 側邊欄上方 |
| `sidebar-end` | 側邊欄下方 |
| `content-begin` | 文章內容上方 |
| `content-end` | 文章內容下方 |
| `comments-begin` | 評論上方 |
| `comments-end` | 評論下方 |
| `footer-begin` | `footer` 上方 |
| `footer-end` | `footer` 下方 |

要使用鉤子，以鉤子名稱建立一個 HTML 檔案，並儲存到 `layouts/partials/hooks` 目錄即可。

比如：

```shell
$ echo "SIDEBAR BEGIN" > layouts/partials/hooks/sidebar-begin.html
```

## 短程式碼

| 短程式碼 | 說明 | 使用
|---|---|---
| `alert` | Alter message | `{{< alert "message" [type] >}}`, `[type]` can be one of `info`, `success`, `warning` and `danger`
| `jsfiddle` | JSFiddle | `{{< jsfiddle "user/id" >}}`
| `codepen` | CodePen | `{{< codepen "id" >}}`
| `jsrun` | JSRUN | `{{< jsrun "id" >}}`
| `bilibili`| 嗶哩嗶哩 | `{{< bilibili "video ID" >}}`
| `youku`| 優酷 | `{{< youku "video ID" >}}`
| `iqiyi`| 愛奇藝 | `{{< iqiyi "vid" "tvid" >}}`
| `tencentvideo`| 騰訊視訊 | `{{< tencentvideo "video ID" >}}`
| `neteasemusic`| 網易雲音樂 | `{{< neteasemusic "song ID" >}}`

## 社交連結

社交連結 `social` 是一組平臺對映到使用者標識的鍵值對。

建立 `config/_default/social.toml` 檔案，並填寫以下配置：

```toml
email = "user@domain.tld"
github = "githubusername"
# ...
```

| 平臺 | 使用者標識 |
|---|---|
| `email` | 電子郵箱 |
| `facebook` | Facebook 使用者名稱 |
| `github` | GitHub 使用者名稱 |
| `gitlab` | GitLab 使用者名稱 |
| `instagram` | Instagram 使用者名稱 |
| `linkedin` | LinkedIn 使用者名稱 |
| `quora` | Quora 使用者名稱 |
| `stackoverflow` | Stack Overflow 使用者 ID |
| `tumblr` | Tumblr 使用者名稱 |
| `twitter` | Twitter 使用者名稱 |
| `weibo` | 微博使用者名稱 |
| `zhihu` | 知乎使用者名稱 |
| `reddit` | Reddit 使用者名稱 |
| `telegram` | Telegram 使用者名稱 |
| `qq` | QQ 號 |
| `dockerhub` | Docker Hub 使用者名稱 |
| `bitbucket` | Bitbucket Workspace ID |

## 貢獻

- 如果感興趣，可以給顆 :star:。
- [新建 Issue](https://github.com/razonyang/hugo-theme-bootstrap/issues/new)
  - 提問
  - Bugs
  - 新功能
- 提交 PR
  - 修復 Issue 或 Bugs
  - 新增新功能
  - 完善文件

### 開發

本主題依賴於 `npm` 和 `webpack` 進行開發，原始碼目錄為 `src`。

**安裝依賴**

```shell
$ npm install
```

**重建資源**

```shell
$ npm run build
```

> `npm run watch` 可以監聽檔案改動並重建資源。

**預覽**

```shell
$ cd exampleSite
$ hugo server --themesDir=../../
```
