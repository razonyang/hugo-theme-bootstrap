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
  "语法高亮"
]
series = [
  "文档"
]
images = []
+++

默认情况下，使用此主题的站点具有默认字体、颜色和总体外观。但是，默认方案不可能满足所有人的要求，但是不要担心，你可以轻松地覆盖主题默认值，例如调色板颜色、字体、语法高亮。

<!--more-->

## 调色板

主题的调色板系统基于 CSS 变量，因此，我们可以轻松地为每个调色板自定义颜色。

我们以一个例子进行说明。

```CSS
[data-palette=blue] {
  --hbs-primary: darkblue;
  --hbs-on-primary: #fff;
}
```

在 `assets/css/custom.css` 追加样式后，`blue` 调色板的颜色将会变成 `darkblue`。

## 字体

### Font Family

我们不指定任何字体，所以大部分浏览器将会使用 `system-ui` 。

你也可以轻易地使用其他 web 字体，比如 [Google Fonts](https://fonts.google.com/)。我们以 Roboto 字体为例。

首先，我们通过 `customCSS` 导入字体：

```
customCSS = [
  "https://fonts.googleapis.com/css2?family=Roboto&display=swap"
]
```

然后在 `assets/css/custom.css` 覆盖 `--hbs-body-font-family` 变量：

```CSS
:root {
  --hbs-body-font-family: 'Roboto', sans-serif;
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
$ hugo gen chromastyles --style=solarized-dark > assets/css/highlight.css
```

另外可参阅[所有支持的样式](https://xyproto.github.io/splash/docs/all.html)。
