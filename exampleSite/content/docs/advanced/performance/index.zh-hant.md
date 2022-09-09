+++
# type = "docs"
title = "性能"
date = 2022-07-23T18:30:48+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["性能"]
tags = ["minify", "gzip"]
series = ["文檔"]
images = []
+++

本文我們來探討下如何提高站點的性能。

<!--more-->

提高性能的最簡單方法是減少文件大小以實現快速傳輸。

## 環境

這個主題依靠 `production` 環境來簡化 JavaScript 和 CSS 資源，並刪除未使用的 CSS。

| Default environment | Value |
|---|---|
| `hugo` | `production` |
| `hugo server` | `development` |

一般來說，你不需要做任何改變，除非你打算在`生產`環境中使用`hugo服務器`。
你可以用 `-e` 標誌來改變默認環境。

## HTML 最小化

在生產環境中，你應該使用 `hugo --minify` 來對最終的 HTML 進行最小化。

## Compression

壓縮與最小化不是一回事，它用某種算法（如`gzip`）壓縮文件，然後傳輸給客戶，客戶在解析之前將其解壓。
這是網絡服務器的配置，請根據自己的情況參考相關文檔。

## 圖片資源

盡可能地將特色圖片、封面圖片或縮略圖放在頁面資料夾下，這樣圖片就會被當作頁面資源，可以被主題處理。 HBS 會將圖片裁剪成多個小尺寸，以適應不同的設備，從而節省用戶頻寬，提高效能和用戶體驗。

```
├── featured-sample.webp
├── index.md
├── index.zh-hans.md
└── index.zh-hant.md
```

## SCSS 變量

盡可能使用 SCSS 變量，參閱 [SCSS 變量]({{< ref "docs/advanced/scss-variables" >}})。
