+++
title = "自定義資源"
date = 2021-11-28T16:00:56+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "資源"
]
tags = [
  "CSS",
  "JS"
]
series = [
  "文檔"
]
images = []
aliases = [
  "/zh-tw/posts/custom-assets",
  "/zh-tw/docs/custom-assets"
]
authors = ["RazonYang"]
# [menu.footer]
#   parent = "docs"
#   weight = 6
+++

作為一個可定制的主題，其提供了定制資源的能力，無論是定制 CSS 和 JS，還是引入第三方 CSS 和 JS。

<!--more-->

## 內部資源

你只需要創建和編輯 `assets/main/scss/_variables.scss`，`assets/main/scss/_custom.scss` 和 `assets/main/js/custom.ts` 即可。

> 這些檔案會被打包成單個 CSS/JS 檔案，以減少 HTTP 的請求次數。

## 外部資源

任意的 CSS 和 JS 資源都可以通過 `customCSS` 和 `customJS` 引數進行引入。

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
