+++
title = "搜索頁面"
description = ""
date = 2021-12-03T11:16:51+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "搜索"
]
tags = [
]
series = [
  "檔案"
]
images = []
[menu.footer]
  parent = "features"
  weight = 1
  pre = '<i class="fas fa-fw fa-search"></i>'
+++

如果您的網站中有許多文章，讀者可能很難檢索到文章，因此，我們添加了搜索功能。

<!--more-->

## 前置條件

首先，我們需要在設定檔的 `home` 輸出格式中追加 `JSON`。

```toml
[outputs]
  home = ["HTML", "RSS", "JSON"]
```

> 此步驟生成一個索引檔案 `index.json`，以便 JavaScript 可以檢索內容。

然後，在 `content` 目錄下創建一個名為 `search/_ index.md` 的頁面。

## 網站參數

| 名稱 | 類型 | 預設值 | 描述
|---|:-:|:-:|---
| `search` | Object | - | 搜尋配置。
| `search.paginate` | Integer | `10` | 分頁。
| `search.resultContentWordCount` | Integer | `240` | 搜尋結果內容最大字數。
| `search.fuse` | Object | - | [Fuse.js 引數](https://fusejs.io/api/options.html)
| `search.fuse.ignoreLocation` | Boolean | `true` |
| `search.fuse.location` | Integer | - |
| `search.fuse.isCaseSensitive` | Boolean | - |
| `search.fuse.minMatchCharLength` | Integer | - |
| `search.fuse.threshold` | Double | - |
| `search.fuse.distance` | Integer | - |
| `search.fuse.useExtendedSearch` | Boolean | - |
