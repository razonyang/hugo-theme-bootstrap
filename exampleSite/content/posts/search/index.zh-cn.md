+++
title = "搜索页面"
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
  "文档"
]
images = []
[menu.footer]
  parent = "features"
  weight = 1
  pre = '<i class="fas fa-fw fa-search"></i>'
+++

如果您的站点中有许多文章，读者可能很难检索到文章，因此，我们添加了搜索功能。

<!--more-->

## 前置条件

首先，我们需要在配置文件的 `home` 输出格式中追加 `JSON`。

```toml
[outputs]
  home = ["HTML", "RSS", "JSON"]
```

> 此步骤生成一个索引文件 `index.json`，以便 JavaScript 可以检索内容。

然后，在 `content` 目录下创建一个名为 `search/_index.md` 的页面。

```toml
+++
title = "Search"
layout = "search"
+++
```

## 站点参数

| 名称 | 类型 | 默认值 | 描述
|---|:-:|:-:|---
| `search` | Object | - | 搜索配置。
| `search.paginate` | Integer | `10` | 分页。
| `search.resultContentWordCount` | Integer | `240` | 搜索结果内容最大字数。
| `search.fuse` | Object | - | [Fuse.js 参数](https://fusejs.io/api/options.html)
| `search.fuse.ignoreLocation` | Boolean | `true` |
| `search.fuse.location` | Integer | - |
| `search.fuse.isCaseSensitive` | Boolean | - |
| `search.fuse.minMatchCharLength` | Integer | - |
| `search.fuse.threshold` | Double | - |
| `search.fuse.distance` | Integer | - |
| `search.fuse.useExtendedSearch` | Boolean | - |
