+++
# type = "docs"
title = "PurgeCSS"
date = 2022-07-25T12:06:00+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["PurgeCSS"]
tags = []
series = ["文档"]
images = []
+++

PurgeCSS 是一个很棒的工具，可以从你的网站上删除未使用的 CSS。
在本节中，我们将深入探讨 PurgeCSS 是如何工作的，以及我们应该注意什么。

<!--more-->

## 它是如何工作的？

PurgeCSS 需要设置以下配置。

{{< code-toggle filename="config" >}}
{{% config/build-write-stat %}}
{{</ code-toggle >}}

其告诉 Hugo 计算已使用的标签、类和 ID，然后生成`hugo_stats.json`。

{{% code/purgecss-hugo-stats %}}

最后 PurgeCSS 依靠这个文件来清除未使用的 CSS。

> PurgeCSS 只在 `production` 环境下工作。

> 我们**不建议**覆盖这些文件 `postcss.config.js` 和 `assets/main/config/rtl/postcss.config.js`，否则在版本更新中会出现意想不到的问题。

## 局限性

**`hugo_stats.json` 只适用于 `*.html` 模板**，也就是说，任何用于 JavaScript 文件的 CSS 类、标签和 ID 仍然会被清除。
但是不要担心，有两种方法可以解决这个问题。

### 额外的统计

只要在你的网站根目录下创建一个名为 `extra_stats.json` 的文件，其形式与 `hugo_stats.json` 相同，并手动将额外的 CSS 放入其中。

> `extra_stats.json` 必须被提交到你的仓库中。

### 将HTML块放入 `*.html` 文件中

一个常见的情况是使用 JavaScript 渲染 HTML 块，如果你使用 JavaScript 来生成 DOM 元素，任何使用的 CSS 都会被 `hugo_stats.json` 忽略。当然你可以手动添加到 `extra_stats.json` 中，但有一个更好的方法通过模板引擎来实现。

1. 首先，我们需要在 `*.html` 布局定义一个模板块。

{{% code/purgecss-template-partial %}}

Hugo 会将使用过的 CSS 计算到 `hugo_stats.json` 中。

{{% code/purgecss-template-stat %}}

正如你所看到的，在 `<script>` 标签中使用的 CSS（`custom-widget-bar`）不会被包含在 `hugo_stats.json` 中，所以我们应该使用其他带有 `d-none` 类的 HTML 标签来包装你的模板。

> `d-none` 是 Bootstrap 中的一个 CSS 类，等同于 `display: none`。

1. 然后通过任意的模板引擎渲染模板。

{{% code/purgecss-template-js %}}

## 测试

你需要通过 `hugo server -e production -b http://localhost:1313` 指定 `production` 环境进行本地测试，因为 PurgeCSS 只在 `production` 环境下工作。

有时候，PurgeCSS 和 PostProcess 工作不是很正常，这时候你可能需要偶尔重启下 Hugo Server。
