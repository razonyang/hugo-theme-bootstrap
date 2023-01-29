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
aliases = [
  "/zh-cn/posts/archives",
  "/zh-cn/docs/archives"
]
authors = ["RazonYang"]
# [menu.footer]
#   parent = "docs"
#   weight = 7
#   [menu.footer.params]
#     icon = '<i class="fas fa-fw fa-file-archive"></i>'
+++

归档页面按照年份对文章进行归档。

<!--more-->

## 前置条件

归档页面不会自动创建，因此我们需要先创建一些 Sections：

```bash
$ tree content/archives
├── 2021
│   ├── _index.md
├── 2022
│   ├── _index.md
├── _index.md
```

这些文件的内容只需包含 `title` 参数即可。

## Site Parameters

| 名称 | 类型 | 默认值 | 描述
|---|:-:|:-:|---
| `archive` | Object | - | Archive.
| `archive.dateFormat` | Integer | `Jan 2` | Archive date format.
| `archive.basePath` | String | `/archives` |
