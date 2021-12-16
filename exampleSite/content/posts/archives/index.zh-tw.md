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
  "檔案"
]
images = []
[menu.footer]
  parent = "docs"
  weight = 7
  pre = '<i class="fas fa-fw fa-file-archive"></i>'
+++

歸檔頁面按照年份對文章進行歸檔。

<!--more-->

## 前置條件

We need to create a page called `archives/_index.md` in the `content` directory.

```toml
+++
title = "歸檔"
layout = "archive"
+++
```

## 網站參數

| 名稱 | 類型 | 預設值 | 描述
|---|:-:|:-:|---
| `archive` | Object | - | Archive.
| `archive.paginate` | Integer | `100` | Archive pagination.
| `archive.dateFormat` | Integer | `Jan 2` | Archive date format.
