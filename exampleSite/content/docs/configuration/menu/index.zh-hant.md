+++
title = "菜單"
date = 2021-12-16T17:25:20+08:00
featured = true
comment = true
toc = true
reward = true
pinned = false
categories = [
  "菜單"
]
tags = [
  "主菜單",
  "頁腳菜單"
]
series = [
  "文檔"
]
images = []
aliases = [
  "/zh-tw/posts/menu",
  "/zh-hant/docs/menu"
]
navWeight = 900
authors = ["RazonYang"]
+++

我們預定義了兩種類型的菜單：`main` 和 `footer`，分別表示頂部的應用程序欄菜單和頁腳菜單。
本文將簡要介紹如何使用菜單。

<!--more-->

## 菜單項屬性

| 屬性 | 類型 | 描述
|:---|:---|:---
| `name` | String | 菜單名稱。
| `identifier` | String | 菜單 ID。
| `weight` | Number | 菜單的權重，用於升序排序。
| `parent` | String | 上級菜單的 `identifier`。
| `url` | String | 菜單的 URL。
| `pre` | String | 菜單名稱的前置字符串。
| `post` | String | 菜單名稱的拖尾字符串。
| `params` | Object | 菜單參數。
| `params.divider` | Boolean | `true` 表示分隔符。

請參閱 [Menu Entry Properties](https://gohugo.io/variables/menus/)。

## 用法

### 配置

> 菜單配置文件默認放在 `config/_default/menu.toml`。

讓我們以 `main` 菜單為例：

```toml
{{% code/menu-main-configuration %}}
```

> See [Icons]({{< ref "docs/look-and-feel#icons" >}}) for importing icons and setting the icon's color.

### Front Matter

我們也可以通過頁面的 Front Matter 配置菜單。

```toml
{{% code/menu-footer-configuration %}}
```

代碼片段將頁面追加到 `main` 和 `footer` 菜單。

> 不需要指定 `url` 和 `name` 參數。
