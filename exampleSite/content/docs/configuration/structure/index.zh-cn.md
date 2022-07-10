+++
title = "配置结构"
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
  "文档"
]
images = []
weight = 1000
authors = ["RazonYang"]
+++

如示例站点所示，我们使用 [Configuration Directory](https://gohugo.io/getting-started/configuration/#configuration-目录) 为了维护更简单的组织和特定于环境的设置，它在多语言站点上特别有用。

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
