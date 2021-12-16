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
  "檔案"
]
images = []
+++

作者小部件位於側邊欄，用於簡要地自我介紹。

<!--more-->

## 網站配置

默認地，設定檔位於 `config/_ default/author.toml`。

你可以通過移除 `author` 配置禁用小部件。

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
| `author.social` | Object | - | [社交連結]({{< ref "/posts/widgets/social-links" >}})。
