+++
title = "联系表单"
date = 2021-11-30T23:56:00+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "联系表单"
]
tags = [
  "Netlify",
  "Getform"
]
series = [
  "文档"
]
images = []
[menu.footer]
  parent = "features"
  weight = 6
  pre = '<i class="fas fa-fw fa-question-circle"></i>'
+++

我们可以将邮件地址放在 [社交链接]({{< ref "/posts/widgets/social-links" >}})上，以便读者联系我们。但不幸的是，邮件或多或少会被当成垃圾邮件，甚至被过滤。因此我们带来了一个联系表单的功能。

<!--more-->

## 前置条件

我们需要在 `content` 目录创建一个名为 `contact/index.md` 的页面，以至于我们可以访问联系表单页面。

```toml
+++
title = "Contact Us"
layout = "contact"
+++
```

一旦创建，链接将出现在简介小部件中。

## 参数

| 名称 | 类型 | 默认值 | 说明
|---|:-:|:-:|---
| `contact` | Object | - | 
| `contact.endpoint` | String | - | 请参阅 [后端](#后端)。
| `contact.file` | Boolean | `false` | 开启/禁用文件上传。
| `contact.fileField` | String | - | 文件字段名称。

## 后端

其被设计成可以兼容大部分后端，比如：[Netlify form](https://docs.netlify.com/forms/setup)、[Getform](https://getform.io/) 和 [Formspree](https://formspree.io/)。

### Netlify

[Netlify form](https://docs.netlify.com/forms/setup) 可开箱即用，因此，你无需指定 `contact.endpoint` 参数。

> 演示站点使用 Getform 而不是 Netlify form，因为当你超过当前套餐限定时， Netlify 会自动升级你的套餐，这会导致额外的支出。

> 如果你打算使用 Netlify form，请确保 `contact.endpoint` 参数为空。

### 其他

我们以 [Getform](https://getform.io) 为例：

```toml
[contact]
  endpoint = "YOUR_ENDPOINT"
```
