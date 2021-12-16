+++
title = "作者小部件"
date = 2021-12-03T11:10:19+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "小部件"
]
tags = [
]
series = [
  "文档"
]
images = []
+++

作者小部件位于侧边栏，用于简要地自我介绍。

<!--more-->

## 站点配置

默认地，配置文件位于 `config/_default/author.toml`。
你可以通过移除 `author` 配置禁用小部件。

| 名称 | 类型 | 默认值 | 描述
|---|:-:|:-:|---
| `author` | Object | - | 个人档案。
| `author.name` | String | - | 名称。
| `author.avatar` | String | `images/profile.webp` | 头像。
| `author.bio` | String | - | 简介。
| `author.company` | String | - | 公司。
| `author.location` | String | - | 地理位置。
| `author.about` | String | - | “关于我”的外部页面，如果未设置，则使用内部的“关于我”的页面。
| `author.params` | Object | - |
| `author.params.layout` | String | - | 可选值：`compact`。
| `author.social` | Object | - | [社交链接]({{< ref "/posts/widgets/social-links" >}})。
