+++
title = "Docs 布局"
description = ""
date = 2022-01-12T10:56:34-08:00
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = [
  "Layouts"
]
tags = [
]
series = [
  "文档"
]
images = []
authors = ["Andreas Deininger", "RazonYang"]
+++

在本文中，我们将探讨 `docs` 布局，其可用来编写项目文档，个人笔记等。

<!--more-->

> If you're going to use `docs` layout on other sections(`notes`), please take a look at [Content]({{< ref "/docs/content" >}}) page.

## 布局

`docs` 布局由三部分组成，由左到右依次为：文档导航栏、文档内容和侧边栏。

## 内容结构

```bash
{{% code/layout-docs-structure %}}
```

![Structure](structure.png#center)

如图所示，本例展示了如何组织一个多层次的文档导航。

- 包含 `_index.md` 将作为一个 Section。
- 包含 `index.md` 将作为一个页面。

## 文档导航栏

### 标题

一般地，`title` 将作为默认标题显示，但有时候过长的标题而显得画蛇添足，此时我们可以通过设置 `linkTitle` 以修改导航所显示的链接文本。

{{< code-toggle >}}
title = "Install on Windows"
linkTitle = "Windows"
{{< /code-toggle >}}

### 图标

除此之外，我们提供一个名为 `linkTitleIcon` 的参数以设置标题左侧的图标。

{{< code-toggle >}}
linkTitleIcon = '<i class="fas fa-columns fa-fw"></i>'
{{< /code-toggle >}}

### 权重与排序

我们根据 `navWeight` 参数对文档进行排序，值越高则优先度越高。而对于没有指定 `navWeight` 的文档，则按照 `title` 进行字母升序排序。

{{< code-toggle >}}
navWeight = 1000
{{< /code-toggle >}}

### 外部链接

有时候我们将文章需要链接到外部站点，此时 `redirect` 可以派上用场，其将自动跳转到指定的外部链接。

{{< code-toggle >}}
redirect = "https://github.com/razonyang/hugo-theme-bootstrap-skeleton"
{{< /code-toggle >}}

## 侧边栏

### 小部件

侧边栏默认只包含内容目录，但你可以通过[钩子]({{< ref "docs/advanced/hooks" >}})添加小部件。

```html {title="layouts/partials/hooks/docs/sidebar-end.html"}
{{- partial "docs/repo" . }}
{{- partial "sidebar/recent-posts" . }}
```
