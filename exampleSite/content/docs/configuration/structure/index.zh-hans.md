+++
title = "配置结构"
linkTitle = "结构"
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
  "文档"
]
images = []
navWeight = 1000
authors = ["RazonYang"]
+++

如示例站点所示，我们使用 [Configuration Directory](https://gohugo.io/getting-started/configuration/#configuration-目录) 为了维护更简单的组织和特定于环境的设置，它在多语言站点上特别有用。

<!--more-->

{{% code/configuration-structure %}}

> Hugo 支持多种配置格式：`TOML`、`YAML` 和 `JSON`，可以随意更改。

- `_default` 包含默认配置。
- `production` 配置将覆盖生产环境中的默认配置。
- 你也可以定义更多的环境配置，如 `development`（`hugo server` 的默认环境）、`testing`、`staging`。然后通过 `-e` 标志指定环境。
- 带有语言代码的配置文件名只在该语言站点上生效，如 `config.zh-hans.toml`，这对分离不同语言的配置和参数很有用。

> 多语言配置不适用于 `author` 配置，即 `author.zh-hans.toml` 不会生效。
> 已知 `config`、`params`、`menu` 和 `menus` 支持多語言配置。
