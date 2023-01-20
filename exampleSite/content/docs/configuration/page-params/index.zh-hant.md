+++
title = "頁面參數"
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
navWeight = 970
authors = ["RazonYang"]
+++

頁面參數位於 [Front Matter](https://gohugo.io/content-management/front-matter/)。

<!--more-->

| 名稱 | 類型  | 默認值 | 說明
|---|:-:|:-:|---
| **Page** 
| `title` | String | - | 頁面標題
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
| `copyright` | Boolean | `true` | 是否顯示版權部分
| `carousel` | Boolean | `false` | 是否在 Carousel 顯示
| `nav` | Boolean | `true` | 是否顯示上一篇和下一篇
| `sidebar` | Boolean | `true` | Show/Hide the sidebar.
| `index` | Boolean | `true` | 是否在用戶端搜尋引擎中索引此頁面。
| **Creative Commons License**
| `creativeCommons` | Object | - |
| `creativeCommons.by` | Boolean | `true` | 署名
| `creativeCommons.nc` | Boolean | `true` | 非商業
| `creativeCommons.nd` | Boolean | `true` | 禁止演繹
| `creativeCommons.sa` | Boolean | `true` | 相同方式共享
| **Meta Tag**
| `metaRobots` | String | - | 空字符串表示禁用。
| `pinned` | Boolean | `false` | 置頂文章。
| `pinnedWeight` | Number | - | 權重越低，優先順序越高。
| `featuredPostCount` | Integer/Boolean | `5` | 精選文章數，`false` 則隱藏。
| `recentPostCount` | Integer/Boolean | `5` | 最近文章數，`false` 則隱藏。
| `relatedPostCount` | Integer/Boolean | `5` | 相關文章數，`false` 則隱藏。
| `featuredImageAlt` | String | - | 封面的可選文字，若未指定則使用頁面標題。
