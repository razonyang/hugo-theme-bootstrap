+++
title = "站点配置"
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
navWeight = 990
authors = ["RazonYang"]
+++

站点配置文件默认为 `config/_default/config.toml`。

<!--more-->

| 名称 | 类型 | 默认值 | 说明
|---|:-:|:-:|---
| `title` | String | - | 站点标题
| `baseURL` | String | - | 站点 URL
| `copyright` | String | - | 站点版权。`{year}` 占位符会被替换为当前年份。
| `defaultContentLanguage` | String | `en` |
| `defaultContentLanguageInSubdir` | Boolean | `false` |
| `paginate` | Integer | `10` |
| `paginatePath` | String | `page` |
| `enableRobotsTXT` | Boolean | `true` |
| `disqusShortname` | String | - | [Disqus]({{< ref "/docs/widgets/comments#disqus" >}}) shortname。
| `googleAnalytics` | String | - | Google Analytics, both of universal analytics and GA4 are supported.
| `social` | Object | - | [社交链接]({{< ref "/docs/widgets/social-links" >}})。
| `author` | Object | - | [作者小部件]({{< ref "/docs/widgets/author" >}})。

请参阅 [All Configuration Settings](https://gohugo.io/getting-started/configuration/#all-configuration-settings)。
