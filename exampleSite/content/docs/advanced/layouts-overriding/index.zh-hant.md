+++
# type = "docs"
title = "布局覆蓋"
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
series = ["文檔"]
images = []
+++

根據 [Hugo Layouts Lookup Order](https://gohugo.io/templates/lookup-order/)，可以很容易地覆蓋 Hugo 和主題的布局和模板。
這對那些想自定義某些特定布局或參數的用戶來說很有用。

<!--more-->

## 使用方法

只要在網站根目錄下創建一個與你想覆蓋的文件名相同的布局或部分文件。

> 這也是[鉤子]({{< ref "docs/advanced/hooks" >}})的工作原理。

例如，我們可以通過在網站根目錄下創建我們自己的布局或部分文件來覆蓋主頁模板 [`layouts/index.html`](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/layouts/index.html)。

```bash
$ echo "MY CUSTOM HOMEPAGE" > layouts/index.html
```
