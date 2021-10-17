# Hugo Bootstrap 主題

[English](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/README.md) · 
[简体中文](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/README.zh-CN.md) · 
[繁體中文](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/README.zh-TW.md)

一個極快、響應式和功能豐富的 Hugo 部落格主題。

## 截圖

![截圖](https://raw.githubusercontent.com/razonyang/hugo-theme-bootstrap/master/images/screenshot.png)

**Light Mode**

![淺色模式下的截圖](https://raw.githubusercontent.com/razonyang/hugo-theme-bootstrap/master/images/screenshot-light.png)

## 線上預覽

- https://hbs.razonyang.com/ - 部署於 Netlify。

這還有個[使用這個主題的網站列表](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/USERS.md)

## 功能特性

- 快速：[Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https://hbs.razonyang.com/en/) 分數在 `90-100` 之間
- 基於 [Bootstrap 5](https://getbootstrap.com/)
- 響應式
- 多種配色：`blue`, `blue-gray`, `brown`, `cyan`, `green`, `indigo`, `orange`, `pink`, `purple`, `red`, `teal`, `yellow`
- [高度可配置](#配置)
- 深色模式
- 字體大小切換
- 多語言/國際化
- 搜尋
- 麵包屑導航
- 歸檔
- 圖片查看器
- 可以通過 URL 參數調整圖片大小，比如 `width=300px` 和 `height=200px`
- 可以通過添加 URL 段實現圖片對齊，比如 `#center`，`#floatleft` 和 `#floatright` 分別表示居中、左浮動和右浮動。
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

### 從頭開始創建站點

```shell
$ hugo new site myblog
$ cd myblog
$ git init
$ git submodule add https://github.com/razonyang/hugo-theme-bootstrap themes/hugo-theme-bootstrap
$ cp -a themes/hugo-theme-bootstrap/exampleSite/* .
$ hugo server
```

> 如果你使用的是 Windows，請改用 `xcopy .\themes\hugo-theme-bootstrap\exampleSite /E`。

### 應用於現有站點

```shell
$ cd myblog
$ git submodule add https://github.com/razonyang/hugo-theme-bootstrap themes/hugo-theme-bootstrap
$ mkdir config
$ cp -a themes/hugo-theme-bootstrap/exampleSite/config/* ./config
```

這種情況下，你還需要複製一些文件夾到 **content** 目錄下，比如 **archives** 和 **search**。

### 注意

如果你重新尅隆倉庫，你將需要更新submodule

```shell
$ git clone <your-repo>
$ git submodule update --init --recursive
```

或者合併成一條命令

```shell
$ git clone --recursive <your-repo>
```

## 升級

```shell
$ cd themes/hugo-theme-bootstrap
$ git fetch
$ git checkout [version]
$ cd ../../
$ git add themes/hugo-theme-bootstrap
$ git commit -m 'Upgrade the theme'
```

- 將 `[version]` 替換為最新的版本。所有版本可以通過 `git tag -l | sort -rV` 列出。
- 你也可以直接使用 `master` 分支以獲取最新的提交。

## 快速開始

```shell
$ hugo new -c content/en posts/newpost.md
```

上述命令創建了一篇英文文章，同樣的，我們也可以創建一篇簡體中文的文章：

```shell
$ hugo new -c content/zh-cn posts/newpost.md
```

> 請注意：創建的文章一般處於草稿狀態，本地預覽時，`hugo server` 需要加上 `-D` 參數才能顯示草稿文章。文章發佈時，需要將 `draft` 改為 `false`，或者直接删除 `draft`。

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
| `author.about` | String | - | “關於我”的外部頁面，如果未設定，則使用內部的“關於我”的頁面。
| `author.params` | Object | - |
| `author.params.layout` | String | - | 可選值：`compact`

## 引數

### 全域性引數

| 名稱 | 型別 | 預設值 | 說明
|---|:-:|:-:|---
| **Page** 
| `mainSections` | Array | `["posts"]` | 主要的 sections
| `titleCase` | Boolean | `false` | 標題首字母是否大寫
| `titleSeparator` | String | `-` | 標題分隔符
| `comment` | Boolean | `true` | 是否開啟評論
| `toc` | Boolean | `true` | 是否開啟目錄
| `tocWordCount` | Integer | `280` | 僅當文章的字數超過此值時，才會顯示TOC。
| `breadcrumb` | Boolean | `true` | 是否開啟麵包屑導航
| `dateFormat` | String | `Jan 2, 2006` | 日期格式。 查閱 [Hugo Date and Time Templating Reference](https://gohugo.io/functions/format/#hugo-date-and-time-templating-reference) 以獲取詳細資訊。
| `poweredBy` | Boolean | `true` | 是否顯示技術支援。
| `readingTime` | Boolean | `true` | 是否顯示閱讀時間
| `postDate` | Boolean | `true` | 是否显示发表日期
| `math` | Boolean | `false` | 是否開啟 `math`。
| `diagram` | Boolean | `false` | 是否開啟 `diagram`。
| `mermaid` | Object | - | [Mermaid 配置](https://mermaid-js.github.io/mermaid/#/Setup?id=configuration).
| `logo` | String | `images/logo.webp` | Logo。設置為 `false` 以禁用 Logo。
| `brand` | String | - | Brand
| `description` | String | - | 站點描述
| `keywords` | String | - | 站點關鍵詞
| `color` | String | - | 顏色風格， `light`，`dark` 或者 dynamic（默認）。
| `palette` | String | - | 預設配色，清理 Cookie 後生效。
| `palettes` | Array | **ALL** | 可選配色，如需禁用此選項，可將其設為空值 `[]`。
| `featuredPostCount` | Integer/Boolean | `5` | 精選文章數，`false` 則隱藏。
| `recentPostCount` | Integer/Boolean | `5` | 最近文章數，`false` 則隱藏。
| `relatedPostCount` | Integer/Boolean | `5` | 相關文章數，`false` 則隱藏。
| `categoryCount` | Integer/Boolean | `10` | 分類數，`false` 則隱藏。
| `tagCount` | Integer/Boolean | `10` | 標籤數，`false` 則隱藏。
| `seriesCount` | Integer/Boolean | `10` | 專欄數，`false` 則隱藏。
| `taxonomyPaginate` | Integer | `10` |
| `taxonomyPostCount` | Integer | `3` | 分類的文章數，`false` 則隱藏。
| `fullWidth` | Boolean | `false` | 是否全寬
| `fixedHeader` | Boolean | `true` | 是否固定頭部
| `reward` | Object | - | 打賞
| `reward.alipay` | String | - | 支付寶收款二維碼圖片
| `reward.wechat` | String | - | 微信收款/打賞二維碼圖片
| `share` | Object | - | 分享按鈕
| `share.addThis` | String | - | [AddThis](https://www.addthis.com) `pubid`。
| `fontSize` | Object | 字體大小 | 註釋或刪除此參數可以禁用字體大小切換器。
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
| `utterances.theme` | String | - | 默認地，亮色調和暗色調分別對應 `github-light` 和 `github-dark`。 `github-light`, `github-dark`, `preferred-color-scheme`, `github-dark-orange`, `icy-dark`, `dark-blue`, `photon-dark`.
| **Creative Commons License**
| `creativeCommons` | Object | - |
| `creativeCommons.by` | Boolean | `true` | 署名
| `creativeCommons.nc` | Boolean | `true` | 非商業
| `creativeCommons.nd` | Boolean | `true` | 禁止改作
| `creativeCommons.sa` | Boolean | `true` | 相同方式分享
| **Code Block** 
| `codeBlock` | Object | - | 
| `codeBlock.maxLines` | Integer | `7` | 
| `codeBlock.lineNos` | Boolean | `true` | `true`/`false` 表示默認情况下顯示/隱藏行號。
| **Post** 
| `post` | Object | - | 
| `post.excerpt` | String | `Summary` | 可選項：`description`
| `post.excerptMaxLength` | Integer | `320` | 
| **Katex**
| `katex` | Object | - | Katex 參數，請參閱 https://katex.org/docs/autorender.html 和 https://katex.org/docs/options.html

> 除了 Google 站長工具外，其他搜索引擎站長工具無法與 `hugo --minify` 同時使用，這是因為它們無法識別優化後的元標簽。

### 頁面引數

| 名稱 | 型別  | 預設值 | 說明
|---|:-:|:-:|---
| **Page** 
| `description` | String | - | 頁面描述
| `keywords` | Array | - | 頁面關鍵詞
| `comment` | Boolean | `true` | 是否開啟評論，如果評論已被全域性關閉，該引數無效
| `toc` | Boolean | `true` | 是否開啟目錄，如果目錄已被全域性關閉，該引數無效
| `math` | Boolean | `false` | 是否開啟 `math`
| `diagram` | Boolean | `false` | 是否開啟 `diagram`
| `reward` | Boolean | `true` | 是否開啟打賞
| `breadcrumb` | Boolean | `true` | 是否開啟麵包屑導航
| `poweredBy` | Boolean | `true` | 是否顯示技術支援
| `readingTime` | Boolean | `true` | 是否顯示閱讀時間
| **Creative Commons License**
| `creativeCommons` | Object | - |
| `creativeCommons.by` | Boolean | `true` | 署名
| `creativeCommons.nc` | Boolean | `true` | 非商業
| `creativeCommons.nd` | Boolean | `true` | 禁止改作 
| `creativeCommons.sa` | Boolean | `true` | 相同方式分享

## 語法高亮

本主題要求以下參數設置為特定值。

- `lineNos`: `true`
- `lineNumbersInTable`: `false`
- `noClasses`: `false`

另外可參閱 [Configure Highlight](https://gohugo.io/getting-started/configuration-markup#highlight).

### 样式

```shell
$ hugo gen chromastyles --style=solarized-dark > assets/css/highlight.css
```

另外可參閱[所有支持的樣式](https://xyproto.github.io/splash/docs/all.html).

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
  #theme = ""
```

> 不同於 Disqus，Utterances 是一個引數。請將其放置在 `params`。

### 自定義評論

```shell
$ mkdir -p layouts/partials/post/comments
$ echo "MY COMMENTS WIDGET" > layouts/partials/post/comments/custom.html
```

> 你還需要删除其他評論組件的配置。

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
| `post-panel-begin` | 文章工具欄上方 |
| `post-panel-end` | 文章工具欄下方 |

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
| `facebookgroup` | Facebook 群組名 |
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
| `kaggle` | Kaggle 使用者名稱 |
| `medium` | Medium 使用者名稱或自定義域名（比如：https://custom.domain.tld） |
| `lastfm` | Last.fm 使用者名稱 |
| `bibibili` | BiliBili 使用者 ID |
| `youtube` | Youtube 頻道 ID |
| `discord` | Discord 邀請碼 |
| `discourse` | 論壇 URL |
| `tiktok` | TikTok 使用者名稱 |

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

> 在提交 PR 之前，請遵循[常規提交規範](https://www.conventionalcommits.org/en/v1.0.0/)。

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
$ npm run serve
```

**格式化代碼**

```shell
$ npm run lint
```

## FAQ

### 如何删除不需要的語言？

- 删除 `languages.toml` 中不需要的語言。
- 刪除檔名帶有語言代號的設定檔，比如 `config.zh-cn.toml`、`params.zh-cn.toml`。
- 修改 `config.toml` 中 `defaultContentLanguage` 和 `defaultContentLanguageInSubdir` 的值。
- 删除 `content` 中相關的文章或目錄，比如 `rm -r content/zh-cn`。
