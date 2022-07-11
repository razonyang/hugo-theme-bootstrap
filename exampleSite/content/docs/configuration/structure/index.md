+++
title = "Configuration Structure"
date = 2021-11-27T19:53:24+08:00
featured = true
comment = true
toc = true
reward = true
pinned = false
categories = [
  "Configuration"
]
tags = [
]
series = [
  "Docs"
]
images = []
navWeight = 1000
authors = ["RazonYang"]
+++

As the example site shown, we use [Configuration Directory](https://gohugo.io/getting-started/configuration/#configuration-directory) to maintain easier organization and environment specific settings, it is especially useful on multilingual sites.

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
