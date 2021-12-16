+++
title = "归档页面"
description = ""
date = 2021-12-03T11:16:51+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "归档"
]
tags = [
]
series = [
  "文档"
]
images = []
[menu.footer]
  parent = "docs"
  weight = 7
  pre = '<i class="fas fa-fw fa-file-archive"></i>'
+++

归档页面按照年份对文章进行归档。

<!--more-->

## 前置条件

我們需要在 `content` 目錄下創建一個名為 `archives/_ index.md` 的檔案。

```toml
+++
title = "归档"
layout = "archive"
+++
```

## Site Parameters

| 名称 | 类型 | 默认值 | 描述
|---|:-:|:-:|---
| `archive` | Object | - | Archive.
| `archive.paginate` | Integer | `100` | Archive pagination.
| `archive.dateFormat` | Integer | `Jan 2` | Archive date format.
