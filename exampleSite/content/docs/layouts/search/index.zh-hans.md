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
aliases = [
  "/zh-cn/posts/search",
  "/zh-cn/docs/search"
]
authors = ["RazonYang"]
[menu.footer]
  parent = "features"
  weight = 1
  [menu.footer.params]
    icon = '<i class="fas fa-fw fa-search text-info"></i>'
+++

如果您的站点中有许多文章，读者可能很难检索到文章，因此，我们添加了搜索功能。

<!--more-->

## 前置条件

你只需要在 `content` 目录下创建一个名为 `search/_index.md` 的页面。

```toml
+++
title = "Search"
+++
```

## 站点参数

| 名称 | 类型 | 默认值 | 描述
|---|:-:|:-:|---
| `search` | Object | - | 搜索配置。
| `search.paginate` | Integer | `10` | 分页。
| `search.indexPaginate` | Integer | `1000` | Index file pagination.
| `search.indexPreload` | Boolean | `true` | 是否预加载搜索索引。
| `search.maxResults` | Number | `100` | 至多返回的搜索结果数目。
| `search.shortcut` | Array | `["/"]` | 搜索快捷键，比如 `["Control", "/"]`，空数组 `[]` 则禁用。
| `search.resultContentCharactersCount` | Integer | `240` | 搜索结果内容最大字符数。
| `search.fuse` | Object | - | [Fuse.js 参数](https://fusejs.io/api/options.html)
| `search.fuse.ignoreLocation` | Boolean | `true` |
| `search.fuse.location` | Integer | - |
| `search.fuse.isCaseSensitive` | Boolean | - |
| `search.fuse.minMatchCharLength` | Integer | - |
| `search.fuse.threshold` | Double | - |
| `search.fuse.distance` | Integer | - |
| `search.fuse.useExtendedSearch` | Boolean | - |
