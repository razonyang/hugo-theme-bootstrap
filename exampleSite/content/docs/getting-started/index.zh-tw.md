+++
title = "快速入門"
date = 2021-12-04T10:43:39+08:00
featured = true
comment = true
toc = true
reward = true
pinned = true
categories = [
]
tags = [
  "Installation",
  "Prerequisites"
]
series = [
  "Docs"
]
images = []
weight = 1000
aliases = [
  "/zh-tw/posts/getting-started"
]
[menu.footer]
  parent = "docs"
  weight = 1
+++

HBS(Hugo Bootstrap) 是一個快速、響應式和功能齊全的 Hugo 主題，可用於個人博客和文檔。
在安裝主題前，請確保你[滿足先決條件](#先決條件)。

## 先決條件

- [Git](https://git-scm.com/downloads)。
- [Hugo](https://gohugo.io/getting-started/installing/)：**extended** `0.84.0` 版本或以上。
- [npm](https://nodejs.org/en/download/)：用於安裝 CSS 和 JS  依賴。
- [Go](https://go.dev/dl/): `1.12` 版本或以上，僅當安裝為 [Hugo Module]({{< ref "/docs/installation/hugo-module" >}}) 時必須。

> 我們建議使用這些工具的最新版本。

### Configuration

自 `0.68.0`，HBS 要求設置以下配置。

{{< code-toggle filename="config" >}}
[build]
  writeStats = true
{{</ code-toggle >}}

## 安裝方法

- [Git Submodule]({{< ref "/docs/installation/git-submodule" >}}).
- [Hugo Module]({{< ref "/docs/installation/hugo-module" >}}).

## 下一步

- [調整配置]({{< ref "/docs/configuration" >}})
- [菜單]({{< ref "/docs/menu" >}})
- [觀感]({{< ref "/docs/look-and-feel" >}})
- [添加內容]({{< ref "/docs/content" >}})
