+++
title = "钩子"
date = 2021-11-27T21:04:32+08:00
featured = true
comment = true
toc = true
reward = true
categories = [
  "钩子"
]
tags = [
]
series = [
  "文档"
]
images = []
[menu.footer]
  parent = "docs"
  weight = 6
+++

作为一个灵活的主题，它应该能够自定义代码和集成第三方服务。因此，我们带来了一个叫做钩子的特性。

在本文中，我们将介绍所有钩子并提供一些用例。

<!--more-->

## 总览

| 钩子 | 描述 |
|---|---|
| `head-end` | `<head>` 结束之前 |
| `body-end` | `<body>` 结束之前 |
| `main-begin` | `<main>` 上方 |
| `main-end` | `<main>` 下方 |
| `list-begin` | 文章列表上方 |
| `list-end` | 文章列表下方 |
| `sidebar-begin` | 侧边栏上方 |
| `sidebar-end` | 侧边栏下方 |
| `content-begin` | 文章内容上方 |
| `content-end` | 文章内容下方 |
| `comments-begin` | 评论上方 |
| `comments-end` | 评论下方 |
| `footer-begin` | `footer` 上方 |
| `footer-end` | `footer` 下方 |
| `post-panel-begin` | 文章工具栏上方 |
| `post-panel-end` | 文章工具栏下方 |

## 用法

使用钩子很容易，你需要做的是在 `layouts/partials/hooks` 目录中创建一个与钩子同名的 HTML 文件。

以 `sidebar-begin` 为例：

```shell
echo '<section class="row card component text-center"><div class="card-body">SIDEBAR BEGIN</div></section>' \
  > layouts/partials/hooks/sidebar-begin.html
```
