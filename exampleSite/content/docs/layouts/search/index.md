+++
title = "Search Layout"
description = ""
date = 2021-12-03T11:16:51+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "Search"
]
tags = [
]
series = [
  "Docs"
]
images = []
aliases = [
  "/en/posts/search",
  "/en/docs/search"
]
authors = ["RazonYang"]
[menu.footer]
  parent = "features"
  weight = 1
  pre = '<i class="fas fa-fw fa-search me-1"></i>'
+++

It may be difficult for readers to retrieve an article in the case if there are many articles in your site, therefore, we added the search feature.

<!--more-->

## Prerequisites

All you need to do is create a page called `search/_index.md` in the `content` directory.

```toml
+++
title = "Search"
+++
```

## Site Parameters

| Name | Type | Default | Description
|---|:-:|:-:|---
| `search` | Object | - | Search configuration.
| `search.paginate` | Integer | `10` | Pagination.
| `search.indexPaginate` | Integer | `1000` | Index file pagination.
| `search.resultContentCharactersCount` | Integer | `240` | The maximum characters count of result content for displaying.
| `search.fuse` | Object | - | [Fuse.js options](https://fusejs.io/api/options.html).
| `search.fuse.ignoreLocation` | Boolean | `true` |
| `search.fuse.location` | Integer | - |
| `search.fuse.isCaseSensitive` | Boolean | - |
| `search.fuse.minMatchCharLength` | Integer | - |
| `search.fuse.threshold` | Double | - |
| `search.fuse.distance` | Integer | - |
| `search.fuse.useExtendedSearch` | Boolean | - |
