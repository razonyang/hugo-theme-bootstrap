+++
title = "鉤子"
date = 2021-11-27T21:04:35+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "鉤子"
]
tags = [
]
series = [
  "文檔"
]
images = []
aliases = [
  "/zh-tw/posts/hooks",
  "/zh-tw/docs/hooks"
]
authors = ["RazonYang"]
[menu.footer]
  parent = "docs"
  weight = 6
+++

作為一個靈活的主題，它應該能够自定義程式碼和集成協力廠商服務。因此，我們帶來了一個叫做鉤子的特性。

在本文中，我們將介紹所有鉤子並提供一些用例。

<!--more-->

## 總覽

| 鉤子                       | 描述                                |
| -------------------------- | ----------------------------------- |
| `head-end`                 | `<head>` 結束之前                   |
| `body-begin`               | `<body>` 開始處                     |
| `body-end`                 | `<body>` 結束之前                   |
| `main-begin`               | `<main>` 上方                       |
| `main-end`                 | `<main>` 下方                       |
| `list-begin`               | 文章列表上方                        |
| `list-end`                 | 文章列表上方                        |
| `sidebar-begin`            | 側邊欄上方                          |
| `sidebar-end`              | 側邊欄下方                          |
| `content-begin`            | 文章內容上方                        |
| `content-end`              | 文章內容下方                        |
| `comments-begin`           | 評論上方                            |
| `comments-end`             | 評論下方                            |
| `footer-begin`             | `footer` 上方                       |
| `footer-end`               | `footer` 下方                       |
| `post-panel-begin`         | 文章工具欄上方                      |
| `post-panel-end`           | 文章工具欄下方                      |
| `docs/sidebar-begin`       | 文檔側邊欄上方                      |
| `docs/sidebar-end`         | 文檔側邊欄上方                      |
| `docs/nav-begin`           | 文檔導航上方                        |
| `docs/nav-end`             | 文檔導航下方                        |
| `contact/form-field-begin` | 表單字段上方                        |
| `contact/form-field-end`   | 表單字段下方                        |
| `search/sidebar-begin`     | At very top of the `search` sidebar |
| `search/sidebar-end`       | Before the `search` sidebar end     |

## 用法

使用鉤子很容易，你需要做的是在 `layouts/partials/hooks` 目錄中創建一個與鉤子同名的 HTML 檔案。

以 `sidebar-begin` 為例：

```bash
echo '<section class="row card component text-center"><div class="card-body">SIDEBAR BEGIN</div></section>' \
  > layouts/partials/hooks/sidebar-begin.html
```
