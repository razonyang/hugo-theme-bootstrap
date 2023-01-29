+++
title = "自定义资源"
date = 2021-11-28T16:00:53+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "资源"
]
tags = [
  "CSS",
  "JS"
]
series = [
  "文档"
]
images = []
aliases = [
  "/zh-cn/posts/custom-assets",
  "/zh-cn/docs/custom-assets"
]
authors = ["RazonYang"]
# [menu.footer]
#   parent = "docs"
#   weight = 6
+++

作为一个可定制的主题，其提供了定制资源的能力，无论是定制 CSS 和 JS，还是引入第三方 CSS 和 JS。

<!--more-->

## 内部资源

你只需要创建和編輯 `assets/main/scss/_variables.scss`，`assets/main/scss/_custom.scss` 和 `assets/main/js/custom.ts` 即可。

> 这些文件会被打包成单个 CSS/JS 文件，以减少 HTTP 的请求次数。

## 外部资源

任意的 CSS 和 JS 资源都可以通过 `customCSS` 和 `customJS` 参数进行引入。

```toml
customCSS = [
  "external-foo.css",
  "external-bar.css"
]

customJS = [
  "external-foo.js",
  "external-bar.js"
]
```
