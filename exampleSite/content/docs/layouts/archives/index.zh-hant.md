+++
title = "歸檔頁面"
description = ""
date = 2021-12-03T11:16:51+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "歸檔"
]
tags = [
]
series = [
  "文檔"
]
images = []
aliases = [
  "/zh-tw/posts/archives",
  "/zh-tw/docs/archives"
]
authors = ["RazonYang"]
# [menu.footer]
#   parent = "docs"
#   weight = 7
#   [menu.footer.params]
#     icon = '<i class="fas fa-fw fa-file-archive"></i>'
+++

歸檔頁面按照年份對文章進行歸檔。

<!--more-->

## 前置條件

歸檔頁面不會自動創建，因此我們需要先創建一些 Sections：

```bash
$ tree content/archives
├── 2021
│   ├── _index.md
├── 2022
│   ├── _index.md
├── _index.md
```

這些文件只需包含一個 `title` 屬性即可。

## 網站參數

| 名稱 | 類型 | 預設值 | 描述
|---|:-:|:-:|---
| `archive` | Object | - | Archive.
| `archive.dateFormat` | Integer | `Jan 2` | Archive date format.
| `archive.basePath` | String | `/archives` |
