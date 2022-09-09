+++
# type = "docs"
title = "性能"
date = 2022-07-23T18:30:48+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["性能"]
tags = ["minify", "gzip"]
series = ["文档"]
images = []
+++

本文我们来探讨下如何提高站点的性能。

<!--more-->

提高性能的最简单方法是减少文件大小以实现快速传输。

## 环境

这个主题依靠 `production` 环境来简化 JavaScript 和 CSS 资源，并删除未使用的 CSS。

| Default environment | Value |
|---|---|
| `hugo` | `production` |
| `hugo server` | `development` |

一般来说，你不需要做任何改变，除非你打算在`生产`环境中使用`hugo服务器`。
你可以用 `-e` 标志来改变默认环境。

## HTML 最小化

在生产环境中，你应该使用 `hugo --minify` 来对最终的 HTML 进行最小化。

## Compression

压缩与最小化不是一回事，它用某种算法（如`gzip`）压缩文件，然后传输给客户，客户在解析之前将其解压。
这是网络服务器的配置，请根据自己的情况参考相关文档。

## 图片资源

尽可能地将特色图片、封面图片或缩略图放在页面文件夹下，这样图片就会被当作页面资源，可以被主题处理。HBS 会将图片裁剪成多个小尺寸，以适应不同的设备，从而节省用户带宽，提高性能和用户体验。

```
├── featured-sample.webp
├── index.md
├── index.zh-hans.md
└── index.zh-hant.md
```

## SCSS 变量

尽可能使用 SCSS 变量，参阅 [SCSS 变量]({{< ref "docs/advanced/scss-variables" >}})。
