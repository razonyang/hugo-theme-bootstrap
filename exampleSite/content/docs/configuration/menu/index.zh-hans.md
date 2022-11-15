+++
title = "菜单"
date = 2021-12-16T17:25:20+08:00
featured = true
comment = true
toc = true
reward = true
pinned = false
categories = [
  "菜单"
]
tags = [
  "主菜单",
  "页脚菜单"
]
series = [
  "文档"
]
images = []
aliases = [
  "/zh-cn/posts/menu",
  "/zh-hans/docs/menu"
]
navWeight = 900
authors = ["RazonYang"]
+++

我们预定义了两种类型的菜单：`main` 和 `footer`，分别表示顶部的应用程序栏菜单和页脚菜单。
本文将简要介绍如何使用菜单。

<!--more-->

## 菜单项属性

| 属性 | 类型 | 描述
|:---|:---|:---
| `name` | String | 菜单名称。
| `identifier` | String | 菜单 ID。
| `weight` | Number | 菜单的权重，用于升序排序。
| `parent` | String | 上级菜单的 `identifier`。
| `url` | String | 菜单的 URL。
| `pre` | String | 菜单名称的前置字符串。
| `post` | String | 菜单名称的拖尾字符串。
| `params` | Object | 菜单参数。
| `params.divider` | Boolean | `true` 表示分隔符。

请参阅 [Menu Entry Properties](https://gohugo.io/variables/menus/)。

## 用法

### 配置

> 菜单配置文件默认放在 `config/_default/menu.toml`。

让我们以 `main` 菜单为例：

```toml
{{% code/menu-main-configuration %}}
```

> See [Icons]({{< ref "docs/look-and-feel#icons" >}}) for importing icons and setting the icon's color.

### Front Matter

我们也可以通过页面的 Front Matter 配置菜单。

```toml
{{% code/menu-footer-configuration %}}
```

代码片段将页面追加到 `main` 和 `footer` 菜单。

> 不需要指定 `url` 和 `name` 参数。
