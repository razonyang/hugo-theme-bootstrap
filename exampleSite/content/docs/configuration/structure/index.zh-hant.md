+++
title = "配置結構"
linkTitle = "結構"
date = 2021-11-27T19:53:24+08:00
featured = false
comment = true
toc = true
reward = true
pinned = false
categories = [
  "配置"
]
tags = [
]
series = [
  "文檔"
]
images = []
navWeight = 1000
authors = ["RazonYang"]
+++

如示例站點所示，我們使用 [Configuration Directory](https://gohugo.io/getting-started/configuration/#configuration-目錄) 為了維護更簡單的組織和特定於環境的設置，它在多語言站點上特別有用。

<!--more-->

{{% code/configuration-structure %}}

> Hugo 支持多種配置格式：`TOML`、`YAML` 和 `JSON`，可以隨意更改。

- `_default` 包含默認配置。
- `production` 配置將覆蓋生產環境中的默認配置。
- 你也可以定義更多的環境配置，如 `development`（`hugo server` 的默認環境）、`testing`、`staging`。然後通過 `-e` 標誌指定環境。
- 帶有語言代碼的配置文件名只在該語言站點上生效，如 `config.zh-hans.toml`，這對分離不同語言的配置和參數很有用。

> 多語言配置不適用於 `author` 配置，即 `author.zh-hans.toml` 不會生效。
> 已知 `config`、`params`、`menu` 和 `menus` 支持多語言配置。
