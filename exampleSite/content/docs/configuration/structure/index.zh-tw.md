+++
title = "配置結構"
date = 2021-11-27T19:53:24+08:00
featured = true
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

```bash
$ tree exampleSite/config
exampleSite/config
├── _default
│   ├── author.toml
│   ├── config.toml
│   ├── config.zh-cn.toml
│   ├── config.zh-tw.toml
│   ├── languages.toml
│   ├── markup.toml
│   ├── menu.toml
│   ├── params.toml
│   ├── server.toml
│   └── social.toml
└── production
    ├── config.toml
    └── params.toml
```
