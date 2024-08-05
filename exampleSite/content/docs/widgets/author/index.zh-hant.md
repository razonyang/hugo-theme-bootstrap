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
  "文檔"
]
images = []
aliases = [
  "/zh-tw/posts/widgets/author"
]
authors = ["RazonYang"]
+++

作者小部件位於側邊欄，用於簡要地自我介紹。

<!--more-->

## 網站參數

{{% alert warning %}}
`config/_default/author.toml` 已被棄用，請使用 `params.author` 代替。
{{% /alert %}}

```toml
// params.toml
[author]
name = "Foobar"
[author.params]
[author.social]
```

| 名稱 | 類型 | 預設值 | 描述
|---|:-:|:-:|---
| `author` | Object | - | 個人檔案。
| `author.name` | String | - | 名稱。
| `author.avatar` | String | `images/profile.webp` | 頭像。
| `author.bio` | String | - | 簡介。
| `author.company` | String | - | 公司。
| `author.location` | String | - | 地理位置。
| `author.about` | String | - | “關於我”的外部頁面，如果未設定，則使用內部的“關於我”的頁面。
| `author.params` | Object | - |
| `author.params.layout` | String | - | 可選值：`compact`。
| `author.social` | Object | - | [社交連結]({{< ref "/docs/widgets/social-links" >}})。
