+++
title = "站點參數"
date = 2021-11-27T19:53:24+08:00
featured = false
comment = true
toc = true
reward = true
pinned = false
categories = [
  "配置"
]
tags = [
]
series = [
  "文檔"
]
images = []
navWeight = 980
authors = ["RazonYang"]
+++

站點參數文件默認為 `config/_default/params.toml`。

<!--more-->

| 名稱 | 類型 | 默認值 | 說明
|---|:-:|:-:|---
| **Page** 
| `mainSections` | Array | `["posts"]` | 主要的 sections
| `titleCase` | Boolean | `false` | 標題首字母是否大寫
| `titleSeparator` | String | `-` | 標題分隔符
| `backgroundImage` | Array | `[]` | 背景圖，如：`['/images/bg.png']`, `['/images/bg-light.png', '/images/bg-dark.png']`。
| `comment` | Boolean | `true` | 是否開啟評論
| `toc` | Boolean | `true` | 是否開啟目錄
| `tocPosition` | String | `sidebar` | 可選值：`sidebar` 和 `content`，僅作用於 `post` 佈局。
| `tocWordCount` | Integer | `280` | 僅當文章的字數超過此值時，才會顯示目錄。
| `breadcrumb` | Boolean | `true` | 是否開啟面包屑導航
| `breadcrumbDivider` | String | `/` | 面包屑導航分隔符
| `dateFormat` | String | `Jan 2, 2006` | 日期格式。 查閱 [Hugo Date and Time Templating Reference](https://gohugo.io/functions/format/#hugo-date-and-time-templating-reference) 以獲取詳細信息。
| `poweredBy` | Boolean | `true` | 是否顯示技術支持。
| `readingTime` | Boolean | `true` | 是否顯示閱讀時間
| `postDate` | Boolean | `true` | 是否顯示發表日期
| `math` | Boolean | `false` | 是否開啟 `math`。
| `diagram` | Boolean | `false` | 是否開啟 `diagram`。
| `logo` | String/Boolean | `images/logo.webp` | Logo。設置為 `false` 以禁用 Logo。
| `brand` | String | - | Brand
| `description` | String | - | 站點描述
| `keywords` | String | - | 站點關鍵詞
| `color` | String | - | 顏色風格， `light`，`dark` 或者 `auto`（默認）。
| `palette` | String | - | 默認配色，清理 Cookie 後生效。
| `palettes` | Array | **ALL** | 可選配色，如需禁用此選項，可將其設為空值 `[]`。
| `featuredPostCount` | Integer/Boolean | `5` | 精選文章數，`false` 則隱藏。
| `recentPostCount` | Integer/Boolean | `5` | 最近文章數，`false` 則隱藏。
| `relatedPostCount` | Integer/Boolean | `5` | 相關文章數，`false` 則隱藏。
| `categoryCount` | Integer/Boolean | `10` | 分類數，`false` 則隱藏。
| `tagCount` | Integer/Boolean | `10` | 標簽數，`false` 則隱藏。
| `seriesCount` | Integer/Boolean | `10` | 專欄數，`false` 則隱藏。
| `taxonomyPaginate` | Integer | `10` |
| `taxonomySortingMethod` | String | - | 分類排序方式，默認以字母排序。可選值：`popularity`.
| `taxonomyPostCount` | Integer | `3` | 分類的列表文章數，`false` 則隱藏。
| `countTaxonomyPosts` | Boolean | `false` | 是否顯示分類的文章總數。
| `sidebarTaxonomies` | Array | `["series", "categories", "tags"]` | 側邊欄的分類。
| `fullWidth` | Boolean | `false` | 是否全寬
| `fullWidthInSections` | Object | - | 爲特定的 section 定義全寬，如：`posts`, `docs`。
| `fixedHeader` | Boolean | `true` | 是否固定頭部
| `reward` | Object | - | [打賞小部件]({{< ref "/docs/widgets/reward" >}})，又稱 Buy Me a Coffee 小部件。
| `externalLinkIcon` | Boolean | `true` | 是否顯示外部鏈接後的圖標。
| `share` | Object | - | 分享按鈕
| `share.addThis` | String | - | [AddThis](https://www.addthis.com) `pubid`。
| `fontSize` | Object | 字體大小 | 註釋或刪除此參數可以禁用字體大小切換器。
| `fontSize.small` | String | `.9rem` | 小字體
| `fontSize.extraSmall` | String | `.8rem` | 更小的字體
| `fontSize.large` | String | `1.1rem` | 大字體
| `fontSize.extraLarge` | String | `1.2rem` | 更大的字體
| `socialShare` | Boolean | `true` | 啟用/禁用內置的分享按鈕
| `searchBar` | Boolean | `true` | 啟用/禁用搜索欄
| **Archive**
| `archive` | Object | - | [歸檔]({{< ref "/docs/layouts/archives" >}})。
| `search` | Object | - | [搜索]({{< ref "/docs/layouts/search" >}})。
| `docsearch` | Object | - | [DocSearch](https://docsearch.algolia.com/)
| `docsearch.container` | String | `.search-button` |
| `docsearch.appId` | String | - |
| `docsearch.indexName` | String | - |
| `docsearch.apiKey` | String | - |
| `docsearch.debug` | Boolean | `false` |
| `docsearch.*` | Boolean/String/Number | - | https://docsearch.algolia.com/docs/api/
| `algolia` | Object | - | See [Algolia]({{< ref "docs/topics/algolia" >}})
| **頂部應用欄**
| `topAppBar` | Object | - |
| `topAppBar.social` | Object | - | [社交鏈接]({{< ref "/docs/widgets/social-links" >}})。
| `topAppBar.colorToggle` | Boolean | `true` | 開啟或禁用顏色/模式開關。
| `topAppBar.coloredInDark` | Boolean | `false` | 在深色模式下著色。
| `topAppBar.dropdownMenuToggle` | Boolean | `true` | 隱藏下拉菜單的按鈕。
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
| `analytics.plausible` | String | - | Plausible Analytics Domains. Multiple domains separate by comma.
| `analytics.plausibleScript` | String | `https://plausible.io/js/script.js` | Specify the self-hosted Plausible Analytics script or [extended script](https://plausible.io/docs/script-extensions).
| **Others** 
| `googleAdsense` | String | - | Google Adsense。
| `customCSS` | Array | - | 自定義 CSS， 主要用於導入外部。 請查閱[自定義資源](#自定義資源)。
| `customJS` | Array | - | 自定義 JS， 主要用於導入外部 JS。 請查閱[自定義資源](#自定義資源)。
| `utterances` | Object | - | [Utterances]({{< ref "/docs/widgets/comments#utterances" >}}) 配置。
| `giscus` | Object | - | [Giscus]({{< ref "/docs/widgets/comments#giscus" >}}) 配置。
| **Creative Commons License**
| `creativeCommons` | Object | - |
| `creativeCommons.by` | Boolean | `true` | 署名
| `creativeCommons.nc` | Boolean | `true` | 非商業
| `creativeCommons.nd` | Boolean | `true` | 禁止演繹
| `creativeCommons.sa` | Boolean | `true` | 相同方式共享
| **Code Block** 
| `codeBlock` | Object | - | 
| `codeBlock.maxLines` | Integer | `7` | 
| `codeBlock.lineNos` | Boolean | `true` | `true`/`false` 表示默認情況下顯示/隱藏行號。
| **Post** 
| `post` | Object | - | 
| `post.excerpt` | String | `Summary` | 可選項：`description`
| `post.excerptMaxLength` | Integer | `320` | 
| `post.copyright` | Boolean | `true` | 是否在每個帖子上顯示版權部分
| `post.plainifyExcerpt` | Boolean | `true` | `false` 則格式化摘要為 HTML。
| `post.featuredImage` | Boolean | `false` | 於內容上方顯示 Featured 圖片。
| `post.numberifyHeadings` | Boolean | `false` | 是否自動對標題進行編號。
| `post.numberifyHeadingsEndLevel` | Number | `6` | 自動編號的深度。
| `post.numberifyHeadingsSeparator` | String | - | 編號和標題之間的分隔符。
| `post.tocStyleType` | String | `none` | 目錄的 `list-style-type` CSS 屬性。
| `post.imageTitleAsCaption` | Boolean | `false` | 将图片标题作为 caption。
| `post.panel` | Boolean | `true` | 是否顯示 post panel。
| `post.nav` | Boolean | `true` | 是否顯示上一篇和下一篇。
| `post.readMoreFromContent` | Boolean | `false` | The page position after clicking the read more button, read more from content if true. Default to the beginning of page. It supports only of the manual summaries splitting via `<!--more-->`.
| `viewer` | Boolean | true | [圖片查看器]({{< ref "docs/image-viewer" >}})
| `pwa` | Object | - | [漸進式 web 應用]({{< ref "/docs/pwa" >}})
| **Sidebar**
| `sidebar` | Object | - |
| `sidebar.fixed` | Boolean | `false` | 固定默認側邊欄。
| `sidebar.taxonomiesToggle` | Boolean | `true` | Show the taxonomies toggle widget on the sidebar.
| `sidebar.taxonomiesToggleArchives` | Boolean | `true` | Show/Hide the archives from the taxonomies toggle.
| `sidebar.series` | Boolean | `false` | Show the series widget on the sidebar.
| `sidebar.categories` | Boolean | `false` | Show the categories widget on the sidebar.
| `sidebar.tags` | Boolean | `false` | Show the tags widget on the sidebar.
| `sidebar.archives` | Boolean | `false` | Show the archive widget on the sidebar.
| `sidebar.authors` | Boolean | `false` | Show the authors widget on the sidebar.
| `sidebar.postsToggle` | Boolean | `true` | Show the posts toggle on the sidebar.
| `sidebar.featuredPosts` | Boolean | `false` | Show the featured posts widget on the sidebar.
| `sidebar.recentPosts` | Boolean | `false` | Show the recent posts widget on the sidebar.
| `sidebar.collapsed` | Boolean | `flase` | Collapse sidebar widgets by default on small screens.
| **Meta Tag**
| `metaRobots` | String | - | 空字符串表示禁用。
| `contact` | Object | - | [聯系表單]({{< ref "docs/layouts/contact" >}})
| `pinnedPost` | Boolean | `true` | 開啟/禁用文章置頂。
| `pinnedPostCount` | Integer | `1` | 置頂的文章數量。
| `rss` | String/Boolean | `true` | 在社交鏈接中顯示 RSS 鏈接。`false` 為不顯示，`home` 則總是鏈接到主頁。
| `feeds` | Object | - | RSS feeds
| `feeds.content` | Boolean | `false` | Display the full content if ebabled.
| `actionsPanel` | Object | - |
| `actionsPanel.disabled` | Boolean | `false` | 禁用 actions panel。
| `repo` | Object | - | See [Repository widget]({{< ref "docs/widgets/repository" >}}).

> 除了 Google 站長工具外，其他搜索引擎站長工具無法與 `hugo --minify` 同時使用，這是因為它們無法識別優化後的元標簽。
