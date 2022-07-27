+++
# type = "docs"
title = "粘性小部件"
date = 2022-07-27T08:54:43+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["小部件"]
tags = ["Sticky", "SCSS"]
series = ["文档"]
images = []
+++

当页面太长时，侧边栏会随着滚动而消失，页面看起来就不那么整洁美观了。
所以本文将介绍如何使用粘性部件来避免这个问题。

<!--more-->

{{< bilibili BV1jW4y1y7kL >}}

## 创建一个新的粘性小部件

首先，在 `layouts/parials` 文件夹下创建一个模板，我们以 `layouts/partials/custom/sticky-info.html` 为例。

{{% code/sticky-widgets-partial %}}

> 文件名 `custom/sticky-info` 可以随意改变，但我们建议使用一些更具体的名字，以避免以后覆盖主题的模板。
> 比如 `custom`、`mywidgets`。

然后使用 `layouts/partials/hooks/sidebar-end.html` 钩子来包含粘性模板。

```html { title="layouts/partials/hooks/sidebar-end.html" }
{{- partial "custom/sticky-info" . }}
```

> 粘性小部件应该是侧边栏的最后一个小部件，否则会出现奇怪的问题。

## 使现有的小部件变得粘稠

每个小部件都会有一个独特的类名，这样我们就可以在所需的小部件上应用 CSS，这里我们以个人资料小部件为例。

{{% code/sticky-widgets-scss %}}

我们需要指定`order`属性，使个人资料部件成为侧边栏的最后一个部件。
