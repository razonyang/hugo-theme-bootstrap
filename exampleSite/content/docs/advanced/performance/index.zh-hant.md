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

這個主題依靠 `production` 環境來簡化 JavaScript 和 CSS 資源。

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
