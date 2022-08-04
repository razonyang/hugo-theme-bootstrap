+++
# type = "docs"
title = "SCSS 變量"
date = 2022-07-23T17:23:28+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["SCSS"]
tags = ["SCSS 變量"]
series = ["文檔"]
images = []
+++

感謝 `assets/main/scss/_variables.scss`，我們可以更改主題和 Bootstrap 的默認 SCSS 變量。

<!--more-->

## 為什麽選擇 SCSS 變量？

雖然我們可以通過 `assets/main/scss/_custom.scss` 覆蓋 CSS，但這最終會增加 CSS 包的大小，但 SCSS 變量不會。

## Bootstrap SCSS 變量

您可以從源代碼和[官方文檔](https://getbootstrap.com/) 中找到 Bootstrap 內置的 SCSS 變量。

## 主題 SCSS 變量

### Palettes

{{% code/scss-variables-palettes %}}

### Options

{{% code/scss-options %}}
