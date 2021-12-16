+++
title = "聯繫表單"
date = 2021-11-30T23:56:00+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "聯繫表單"
]
tags = [
  "Netlify",
  "Getform"
]
series = [
  "檔案"
]
images = []
[menu.footer]
  parent = "features"
  weight = 6
  pre = '<i class="fas fa-fw fa-question-circle"></i>'
+++

我們可以將郵寄地址放在 [社交連結]({{< ref "/posts/widgets/social-links" >}})上，以便讀者聯繫我們。 但不幸的是，郵件或多或少會被當成垃圾郵件，甚至被過濾。 因此我們帶來了一個聯系表單的功能。

<!--more-->

## 前置條件

我們需要在 `content` 目錄創建一個名為 `contact/index.md` 的頁面，以至於我們可以訪問聯系表單頁面。

```toml
+++
title = "Contact Us"
layout = "contact"
+++
```

一旦創建，連結將出現在簡介小部件中。

## 參數

| 名稱 | 類型 | 默認值 | 說明
|---|:-:|:-:|---
| `contact` | Object | - | 
| `contact.endpoint` | String | - | 請參閱 [後端](#後端)。
| `contact.file` | Boolean | `false` | 開啟/禁用文件上傳。
| `contact.fileField` | String | - | 文件字段名稱。

## 後端

其被設計成可以相容大部分後端，比如：[Netlify form](https://docs.netlify.com/forms/setup)、[Getform](https://getform.io/) 和 [Formspree](https://formspree.io/)。

### Netlify

[Netlify form](https://docs.netlify.com/forms/setup) 可開箱即用，囙此，你無需指定 `contact.endpoint` 參數。

> 演示網站使用 Getform 而不是 Netlify form，因為當你超過當前套餐限定時，Netlify 會自動升級你的套餐，這會導致額外的支出。

> 如果你打算使用 Netlify form，請確保 `contact.endpoint` 參數為空。

### 其他

我們以 [Getform](https://getform.io) 為例：

```toml
[contact]
  endpoint = "YOUR_ENDPOINT"
```
