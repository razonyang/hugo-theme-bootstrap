+++
# type = "docs"
title = "SCSS 变量"
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
tags = ["SCSS 变量"]
series = ["文档"]
images = []
+++

感谢 `assets/main/scss/_variables.scss`，我们可以更改主题和 Bootstrap 的默认 SCSS 变量。

<!--more-->

## 为什么选择 SCSS 变量？

虽然我们可以通过 `assets/main/scss/_custom.scss` 覆盖 CSS，但这最终会增加 CSS 包的大小，而大多情况下 SCSS 变量不会。

举个例子， 鼠标悬停在 Logo 时有一个默认的动画。

```css
{{% code/scss-variables-logo-animation %}}
```

我们可以通过自定义 SCSS 以禁用它。

```scss {title="assets/main/scss/_custom.scss"}
{{% code/scss-variables-disable-logo-animation %}}
```

但因为我们只是覆盖了样式，之前我们不需要的样式仍会出现在 CSS bundle 中。

```css
{{% code/scss-variables-disable-logo-animation-output %}}
```

而 SCSS 则不会生成*未使用*的样式。

```scss {title="assets/main/scss/_variables.scss"}
$logo-animation: false;
```

较小的 CSS bundle 意味着更好的性能，所以我们建议尽可能使用 SCSS 变量。

## Bootstrap SCSS 变量

您可以从源代码和[官方文档](https://getbootstrap.com/) 中找到 Bootstrap 内置的 SCSS 变量。

## 主题 SCSS 变量

### Palettes

{{% code/scss-variables-palettes %}}

### Options

{{% code/scss-options %}}
