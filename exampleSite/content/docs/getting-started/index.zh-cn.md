+++
title = "快速入门"
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
  "/zh-cn/posts/getting-started"
]
[menu.footer]
  parent = "docs"
  weight = 1
+++

HBS(Hugo Bootstrap) 是一个快速、响应式和功能齐全的 Hugo 主题，可用于个人博客和文档。
在安装主题前，请确保你[满足先决条件](#先决条件)。

## 先决条件

- [Git](https://git-scm.com/downloads)。
- [Hugo](https://gohugo.io/getting-started/installing/)：**extended** `0.84.0` 版本或以上。
- [npm](https://nodejs.org/en/download/)：用于安装 CSS 和 JS  依赖。
- [Go](https://go.dev/dl/): `1.12` 版本或以上，仅当安装为 [Hugo Module]({{< ref "/docs/installation/hugo-module" >}}) 时必须。

> 我们建议使用这些工具的最新版本。

### Configuration

自 `0.68.0`，HBS 要求设置以下配置。

{{< code-toggle filename="config" >}}
[build]
  writeStats = true
{{</ code-toggle >}}

## 安装方法

- [Git Submodule]({{< ref "/docs/installation/git-submodule" >}}).
- [Hugo Module]({{< ref "/docs/installation/hugo-module" >}}).

## 下一步

- [调整配置]({{< ref "/docs/configuration" >}})
- [菜单]({{< ref "/docs/menu" >}})
- [观感]({{< ref "/docs/look-and-feel" >}})
- [添加内容]({{< ref "/docs/content" >}})