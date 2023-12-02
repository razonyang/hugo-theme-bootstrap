+++
title = "页面参数"
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
navWeight = 970
authors = ["RazonYang"]
+++

页面参数位于 [Front Matter](https://gohugo.io/content-management/front-matter/)。

<!--more-->

| 名称 | 类型  | 默认值 | 说明
|---|:-:|:-:|---
| **Page** 
| `title` | String | - | 页面标题
| `description` | String | - | 页面描述
| `keywords` | Array | - | 页面关键词
| `comment` | Boolean | `true` | 是否开启评论，如果评论已被全局关闭，该参数无效
| `toc` | Boolean | `true` | 是否开启目录，如果目录已被全局关闭，该参数无效
| `math` | Boolean | `false` | 是否开启 `math`
| `diagram` | Boolean | `false` | 是否开启 `diagram`
| `reward` | Boolean | `true` | 是否开启打赏
| `breadcrumb` | Boolean | `true` | 是否开启面包屑导航
| `readingTime` | Boolean | `true` | 是否显示阅读时间
| `postDate` | Boolean | `true` | 是否显示发表日期
| `copyright` | Boolean | `true` | 是否显示版权部分
| `carousel` | Boolean | `false` | 是否在 Carousel 显示
| `nav` | Boolean | `true` | 是否显示上一篇和下一篇
| `sidebar` | Boolean | `true` | Show/Hide the sidebar.
| `index` | Boolean | `true` | 是否在客户端搜索引擎中索引此页面。
| **Creative Commons License**
| `creativeCommons` | Object | - |
| `creativeCommons.by` | Boolean | `true` | 署名
| `creativeCommons.nc` | Boolean | `true` | 非商业
| `creativeCommons.nd` | Boolean | `true` | 禁止演绎
| `creativeCommons.sa` | Boolean | `true` | 相同方式共享
| **Meta Tag**
| `metaRobots` | String | - | 空字符串表示禁用。
| `pinned` | Boolean | `false` | 置顶文章。
| `pinnedWeight` | Number | - | 权重越低，优先级越高。
| `featuredPostCount` | Integer/Boolean | `5` | 精选文章数，`false` 则隐藏。
| `recentPostCount` | Integer/Boolean | `5` | 最近文章数，`false` 则隐藏。
| `relatedPostCount` | Integer/Boolean | `5` | 相关文章数，`false` 则隐藏。
| `featuredImageAlt` | String | - | 封面的可选文本，若未指定则使用页面标题。
| `numberifyHeadings` | Boolean | `true` | 为 `false` 时，不对标题进行编号。
