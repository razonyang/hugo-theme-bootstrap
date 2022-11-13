+++
title = "配置"
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
navWeight = 990
authors = ["RazonYang"]
+++

站點配置文件默認為 `config/_default/config.toml`。

<!--more-->

| 名稱 | 類型 | 默認值 | 說明
|---|:-:|:-:|---
| `title` | String | - | 站點標題
| `baseURL` | String | - | 站點 URL
| `copyright` | String | - | 站點版權。`{year}` 占位符會被替換為當前年份。
| `defaultContentLanguage` | String | `en` |
| `defaultContentLanguageInSubdir` | Boolean | `false` |
| `paginate` | Integer | `10` |
| `paginatePath` | String | `page` |
| `enableRobotsTXT` | Boolean | `true` |
| `disqusShortname` | String | - | [Disqus]({{< ref "/docs/widgets/comments#disqus" >}}) shortname。
| `googleAnalytics` | String | - | Google Analytics, both of universal analytics and GA4 are supported.
| `social` | Object | - | [社交鏈接]({{< ref "/docs/widgets/social-links" >}})。
| `author` | Object | - | [作者小部件]({{< ref "/docs/widgets/author" >}})。

請參閱 [All Configuration Settings](https://gohugo.io/getting-started/configuration/#all-configuration-settings)。
