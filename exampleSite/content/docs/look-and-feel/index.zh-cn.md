+++
title = "观感"
date = 2021-12-03T19:42:57+08:00
featured = true
comment = true
toc = true
reward = true
pinned = true
categories = [
]
tags = [
  "颜色",
  "调色板",
  "字体",
  "语法高亮",
  "图标"
]
series = [
  "文档"
]
images = []
weight = 960
aliases = [
  "/zh-cn/posts/look-and-feel"
]
[menu.footer]
  parent = "docs"
  weight = 3
  pre = '<i class="fas fa-fw fa-palette"></i>'
+++

默认情况下，使用此主题的站点具有默认字体、颜色和总体外观。但是，默认方案不可能满足所有人的要求，但是不要担心，你可以轻松地覆盖主题默认值，例如调色板颜色、字体、语法高亮。

<!--more-->

## 背景图片

```toml {title="config/_default/params.toml"}
# 在亮色和暗色模式下都使用相同的图片
backgroundImage = ['/images/bg.png']

# 在亮色和暗色模式下使用对应的图片
backgroundImage = ['/images/bg-light.png', '/images/bg-dark.png']
```

## 调色板

HBS 提供了大量的配色：`blue`、`blue-gray`、`brown`、`cyan`、`green`、`indigo`、`orange`、`pink`、`purple`、`red`、`teal`、`yellow`。

### 可用的配色

设置面板的调色板选择器是基于 `palettes` 参数的。

```toml {title="config/_default/params.toml"}
palettes = ["blue", "blue-gray", "indigo"]
```

你也可以将 `palettes` 设置为空数组 `[]` 以禁用调色板。

### 默认配色

```toml {title="config/_default/params.toml"}
palette = "indigo"
```

> 修改默认配色后，需要清理浏览器缓存。

### 修改配色

主题的调色板系统基于 CSS 变量，因此，我们可以轻松地为每个调色板自定义颜色。

```scss {title="assets/main/scss/_custom.scss"}
[data-palette=blue] {
    --#{$variable-prefix}primary: darkblue;
    --#{$variable-prefix}on-primary: #fff;
}
```

在 `assets/main/scss/_custom.scss` 追加样式后，`blue` 调色板的颜色将会变成 `darkblue`。

## 字体

### Font Family

我们不指定任何字体，所以大部分浏览器将会使用 `system-ui` 。

你也可以轻易地使用其他 web 字体，比如 [Google Fonts](https://fonts.google.com/)。我们以 Roboto 字体为例。

首先，我们导入字体，然后在 `assets/main/scss/_custom.scss` 覆盖 `body-font-family` 变量：

```scss {title="assets/main/scss/_custom.scss"}
@import 'https://fonts.googleapis.com/css2?family=Roboto&display=swap';
:root {
    --#{$variable-prefix}body-font-family: 'Roboto', sans-serif;
}
```

## 语法高亮

本主题要求以下参数设置为特定值。

- `lineNos`: `true`
- `lineNumbersInTable`: `false`
- `noClasses`: `false`

另外可参阅 [Configure Highlight](https://gohugo.io/getting-started/configuration-markup#highlight)。

### 样式

```shell
$ hugo gen chromastyles --style=solarized-dark > assets/main/scss/_highlight.scss
```

另外可参阅[所有支持的样式](https://xyproto.github.io/splash/docs/all.html)。

## 图标

```js {title="assets/icons/custom.js"}
// import { faClock } from '@fortawesome/free-solid-svg-icons';
// import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
// import { faAmazon, faGoogle } from '@fortawesome/free-brands-svg-icons';

const icons = [
    // faClock,
    // faAddressBook,
    // faAmazon, faGoogle,
];
export default icons;
```
