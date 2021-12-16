+++
title = "配置概覽"
date = 2021-11-27T19:53:24+08:00
featured = true
comment = true
toc = true
reward = true
pinned = true
categories = [
  "配置"
]
tags = [
]
series = [
  "檔案"
]
images = []
[menu.footer]
  parent = "docs"
  weight = 2
+++

如示例站點所示，我們使用 [Configuration Directory](https://gohugo.io/getting-started/configuration/#configuration-目錄) 為了維護更簡單的組織和特定於環境的設置，它在多語言站點上特別有用。

<!--more-->

## 站點配置

> 站點配置文件默認為 `config/_default/config.toml`。

| 名稱 | 類型 | 默認值 | 說明
|---|:-:|:-:|---
| `title` | String | - | 站點標題
| `baseURL` | String | - | 站點 URL
| `copyright` | String | - | 站點版權。`{year}` 占位符會被替換為當前年份。
| `defaultContentLanguage` | String | `en` |
| `defaultContentLanguageInSubdir` | Boolean | `false` |
| `paginate` | Integer | `10` |
| `paginatePath` | String | `page` |
| `enableRobotsTXT` | Boolean | `true` |
| `disqusShortname` | String | - | [Disqus]({{< ref "/posts/widgets/comments#disqus" >}}) shortname。
| `googleAnalytics` | String | - | Google Analytics.
| `social` | Object | - | [社交鏈接]({{< ref "/posts/widgets/social-links" >}})。
| `author` | Object | - | [作者小部件]({{< ref "/posts/widgets/author" >}})。

請參閱 [All Configuration Settings](https://gohugo.io/getting-started/configuration/#all-configuration-settings)。

## 站點參數

> 站點參數文件默認為 `config/_default/params.toml`。

| 名稱 | 類型 | 默認值 | 說明
|---|:-:|:-:|---
| **Page** 
| `mainSections` | Array | `["posts"]` | 主要的 sections
| `titleCase` | Boolean | `false` | 標題首字母是否大寫
| `titleSeparator` | String | `-` | 標題分隔符
| `comment` | Boolean | `true` | 是否開啟評論
| `toc` | Boolean | `true` | 是否開啟目錄
| `tocWordCount` | Integer | `280` | 僅當文章的字數超過此值時，才會顯示目錄。
| `breadcrumb` | Boolean | `true` | 是否開啟面包屑導航
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
| `color` | String | - | 顏色風格， `light`，`dark` 或者 dynamic（默認）。 
| `palette` | String | - | 默認配色，清理 Cookie 後生效。
| `palettes` | Array | **ALL** | 可選配色，如需禁用此選項，可將其設為空值 `[]`。
| `featuredPostCount` | Integer/Boolean | `5` | 精選文章數，`false` 則隱藏。
| `recentPostCount` | Integer/Boolean | `5` | 最近文章數，`false` 則隱藏。
| `relatedPostCount` | Integer/Boolean | `5` | 相關文章數，`false` 則隱藏。
| `categoryCount` | Integer/Boolean | `10` | 分類數，`false` 則隱藏。
| `tagCount` | Integer/Boolean | `10` | 標簽數，`false` 則隱藏。
| `seriesCount` | Integer/Boolean | `10` | 專欄數，`false` 則隱藏。
| `taxonomyPaginate` | Integer | `10` |
| `taxonomyPostCount` | Integer | `3` | 分類的文章數，`false` 則隱藏。
| `fullWidth` | Boolean | `false` | 是否全寬
| `fixedHeader` | Boolean | `true` | 是否固定頭部
| `reward` | Object | - | [打賞小部件]({{< ref "/posts/widgets/reward" >}})，又稱 Buy Me a Coffee 小部件。
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
| `archive` | Object | - | [歸檔]({{< ref "/posts/search" >}})。
| `search` | Object | - | [搜索]({{< ref "/posts/search" >}})。
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
| `googleAdsense` | String | - | Google Adsense。
| `customCSS` | Array | - | 自定義 CSS， 主要用於導入外部。 請查閱[自定義資源](#自定義資源)。
| `customJS` | Array | - | 自定義 JS， 主要用於導入外部 JS。 請查閱[自定義資源](#自定義資源)。
| `utterances` | Object | - | [Utterances]({{< ref "/posts/widgets/comments#utterances" >}}) 配置。
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
| `viewer` | Boolean | true | [圖片查看器]({{< ref "posts/image-viewer" >}})
| `pwa` | Object | - | [漸進式 web 應用]({{< ref "/posts/pwa" >}})
| **Meta Tag**
| `metaRobots` | String | - | 空字符串表示禁用。
| `contact` | Object | - | [聯系表單]({{< ref "posts/contact-form" >}})
| `pinnedPost` | Boolean | `true` | 開啟/禁用文章置頂。
| `pinnedPostCount` | Integer | `1` | 置頂的文章數量。

> 除了 Google 站長工具外，其他搜索引擎站長工具無法與 `hugo --minify` 同時使用，這是因為它們無法識別優化後的元標簽。

## 頁面參數

> 頁面參數位於 [Front Matter](https://gohugo.io/content-management/front-matter/)。


| 名稱 | 類型  | 默認值 | 說明
|---|:-:|:-:|---
| **Page** 
| `description` | String | - | 頁面描述
| `keywords` | Array | - | 頁面關鍵詞
| `comment` | Boolean | `true` | 是否開啟評論，如果評論已被全局關閉，該參數無效
| `toc` | Boolean | `true` | 是否開啟目錄，如果目錄已被全局關閉，該參數無效
| `math` | Boolean | `false` | 是否開啟 `math`
| `diagram` | Boolean | `false` | 是否開啟 `diagram`
| `reward` | Boolean | `true` | 是否開啟打賞
| `breadcrumb` | Boolean | `true` | 是否開啟面包屑導航
| `readingTime` | Boolean | `true` | 是否顯示閱讀時間
| `postDate` | Boolean | `true` | 是否顯示發表日期
| **Creative Commons License**
| `creativeCommons` | Object | - |
| `creativeCommons.by` | Boolean | `true` | 署名
| `creativeCommons.nc` | Boolean | `true` | 非商業
| `creativeCommons.nd` | Boolean | `true` | 禁止演繹
| `creativeCommons.sa` | Boolean | `true` | 相同方式共享
| **Meta Tag**
| `metaRobots` | String | - | 空字符串表示禁用。
| `pinned` | Boolean | `false` | 置頂文章。
