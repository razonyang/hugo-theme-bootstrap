+++
title = "菜單"
date = 2021-12-16T17:25:20+08:00
featured = false
comment = true
toc = true
reward = true
pinned = false
categories = [
  "菜單"
]
tags = [
  "主菜單"
  "頁腳菜單"
]
series = [
  "檔案"
]
images = []
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
[[main]]
  name = "FooBar"
  identifier = "foobar"
  weight = 1
  pre = '<i class="fas fa-fw fa-chevron-circle-down"></i>'
[[main]]
  name = "Foo"
  identifier = "foo"
  parent = "foobar"
  url = "https://github.com/razonyang/hugo-theme-bootstrap"
  weight = 1
[[main]]
  parent = "foobar"
  identifier = "foobar-divider"
  weight = 2
  [main.params]
    divider = true
[[main]]
  name = "Bar"
  identifier = "bar"
  parent = "foobar"
  url = "https://github.com/razonyang/hugo-theme-bootstrap/discussions/new"
  weight = 3
```

![Main Menus](images/main.png#center)

如圖所示，我們創建一個名為 `foobar`  的頂級菜單，其包含了子菜單和分隔符。

### Front Matter

我們也可以通過頁面的 Front Matter 配置菜單。

```toml
[menu.main]
  parent = "support"
  weight = 6
[menu.footer]
  parent = "support"
  weight = 6
  pre = '<i class="fas fa-fw fa-quetion-circle"></i>'
```

代碼片段將頁面追加到 `main` 和 `footer` 菜單。

> 不需要指定 `url` 和 `name` 參數。
