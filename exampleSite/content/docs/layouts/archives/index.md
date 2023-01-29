+++
title = "Archive Layout"
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
aliases = [
  "/en/posts/archives",
  "/en/docs/archives"
]
authors = ["RazonYang"]
# [menu.footer]
#   parent = "docs"
#   weight = 7
#   [menu.footer.params]
#     icon = '<i class="fas fa-fw fa-file-archive"></i>'
+++

The archive page is a collection of posts grouped by year.

<!--more-->

## Prerequisites

The pages aren't not created automatically, we need to create archives sections first:

```bash
$ tree content/archives
├── 2021
│   ├── _index.md
├── 2022
│   ├── _index.md
├── _index.md
```

The content of those files just contain a `title` parameter.

## Site Parameters

| Name | Type | Default | Description
|---|:-:|:-:|---
| `archive` | Object | - | Archive.
| `archive.dateFormat` | Integer | `Jan 2` | Archive date format.
| `archive.basePath` | String | `/archives` |
