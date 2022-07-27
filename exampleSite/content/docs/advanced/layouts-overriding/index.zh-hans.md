+++
# type = "docs"
title = "布局覆盖"
date = 2022-07-27T16:05:37+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["布局", "模板"]
tags = []
series = ["文档"]
images = []
+++

根据 [Hugo Layouts Lookup Order](https://gohugo.io/templates/lookup-order/)，可以很容易地覆盖 Hugo 和主题的布局和模板。
这对那些想自定义某些特定布局或参数的用户来说很有用。

<!--more-->

## 使用方法

只要在网站根目录下创建一个与你想覆盖的文件名相同的布局或部分文件。

> 这也是[钩子]({{< ref "docs/advanced/hooks" >}})的工作原理。

例如，我们可以通过在网站根目录下创建我们自己的布局或部分文件来覆盖主页模板 [`layouts/index.html`](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/layouts/index.html)。

```bash
$ echo "MY CUSTOM HOMEPAGE" > layouts/index.html
```
