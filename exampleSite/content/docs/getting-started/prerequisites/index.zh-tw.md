+++
# type = "docs"
title = "先決條件"
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
tags = ["先決條件"]
series = ["文檔"]
images = []
weight = 90
authors = ["RazonYang"]
+++

在安裝主題前，請確保你滿足先決條件。

<!--more-->

## Configuration

自 `0.68.0`，HBS 要求設置以下配置。

{{< code-toggle filename="config" >}}
{{% config/build-write-stat %}}
{{</ code-toggle >}}

## 構建工具

- [Git](https://git-scm.com/downloads)。
- [Hugo](https://gohugo.io/getting-started/installing/)：**extended** `0.97.0` 版本或以上。
- [npm](https://nodejs.org/en/download/)：用於安裝 CSS 和 JS  依賴。
- [Go](https://go.dev/dl/): `1.12` 版本或以上，僅當安裝為 [Hugo Module]({{< ref "/docs/getting-started/installation/hugo-module" >}}) 時必須。

> 我們建議使用這些工具的最新版本。
