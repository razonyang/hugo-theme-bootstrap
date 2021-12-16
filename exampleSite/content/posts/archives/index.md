+++
title = "Archive Page"
description = ""
date = 2021-12-03T11:16:51+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "Archive"
]
tags = [
]
series = [
  "Docs"
]
images = []
[menu.footer]
  parent = "docs"
  weight = 7
  pre = '<i class="fas fa-fw fa-file-archive"></i>'
+++

The archive page is a collection of posts grouped by year.

<!--more-->

## Prerequisites

We need to create a page called `archives/_index.md` in the `content` directory.

```toml
+++
title = "Archives"
layout = "archive"
+++
```

## Site Parameters

| Name | Type | Default | Description
|---|:-:|:-:|---
| `archive` | Object | - | Archive.
| `archive.paginate` | Integer | `100` | Archive pagination.
| `archive.dateFormat` | Integer | `Jan 2` | Archive date format.
