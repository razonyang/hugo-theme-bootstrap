+++
# type = "docs"
title = "PurgeCSS"
date = 2022-07-25T12:06:00+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["PurgeCSS"]
tags = []
series = ["文檔"]
images = []
+++

PurgeCSS 是一個很棒的工具，可以從你的網站上刪除未使用的 CSS。
在本節中，我們將深入探討 PurgeCSS 是如何工作的，以及我們應該註意什麽。

<!--more-->

## 它是如何工作的？

PurgeCSS 需要設置以下配置。

{{< code-toggle filename="config" >}}
{{% config/build-write-stat %}}
{{</ code-toggle >}}

其告訴 Hugo 計算已使用的標簽、類和 ID，然後生成`hugo_stats.json`。

{{% code/purgecss-hugo-stats %}}

最後 PurgeCSS 依靠這個文件來清除未使用的 CSS。

> PurgeCSS 只在 `production` 環境下工作。

> 我們**不建議**覆蓋這些文件 `postcss.config.js` 和 `assets/main/config/rtl/postcss.config.js`，否則在版本更新中會出現意想不到的問題。

## 局限性

**`hugo_stats.json` 只適用於 `*.html` 模板**，也就是說，任何用於 JavaScript 文件的 CSS 類、標簽和 ID 仍然會被清除。
但是不要擔心，有兩種方法可以解決這個問題。

### 額外的統計

只要在你的網站根目錄下創建一個名為 `extra_stats.json` 的文件，其形式與 `hugo_stats.json` 相同，並手動將額外的 CSS 放入其中。

> `extra_stats.json` 必須被提交到你的倉庫中。

### 將HTML塊放入 `*.html` 文件中

一個常見的情況是使用 JavaScript 渲染 HTML 塊，如果你使用 JavaScript 來生成 DOM 元素，任何使用的 CSS 都會被 `hugo_stats.json` 忽略。當然你可以手動添加到 `extra_stats.json` 中，但有一個更好的方法通過模板引擎來實現。

1. 首先，我們需要在 `*.html` 布局定義一個模板塊。

{{% code/purgecss-template-partial %}}

Hugo 會將使用過的 CSS 計算到 `hugo_stats.json` 中。

{{% code/purgecss-template-stat %}}

正如你所看到的，在 `<script>` 標籤中使用的 CSS（`custom-widget-bar`）不會被包含在 `hugo_stats.json` 中，所以我們應該使用其他帶有 `d-none` 類的 HTML 標籤來包裝你的模板。

> `d-none` 是 Bootstrap 中的一個 CSS 類，等同於 `display: none`。

1. 然後通過任意的模板引擎渲染模板。

{{% code/purgecss-template-js %}}

## 測試

你需要通過 `hugo server -e production -b http://localhost:1313` 指定 `production` 環境進行本地測試，因為 PurgeCSS 只在 `production` 環境下工作。

有時候，PurgeCSS 和 PostProcess 工作不是很正常，這時候你可能需要偶爾重啟下 Hugo Server。
