+++
# type = "docs"
title = "先决条件"
date = 2022-06-13T16:32:09+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = []
tags = []
series = []
images = []
weight = 90
+++

<!--more-->

## Configuration

自 `0.68.0`，HBS 要求设置以下配置。

{{< code-toggle filename="config" >}}
[build]
  writeStats = true
{{</ code-toggle >}}

## 构建工具

- [Git](https://git-scm.com/downloads)。
- [Hugo](https://gohugo.io/getting-started/installing/)：**extended** `0.97.0` 版本或以上。
- [npm](https://nodejs.org/en/download/)：用于安装 CSS 和 JS  依赖。
- [Go](https://go.dev/dl/): `1.12` 版本或以上，仅当安装为 [Hugo Module]({{< ref "/docs/getting-started/installation/hugo-module" >}}) 时必须。

> 我们建议使用这些工具的最新版本。
