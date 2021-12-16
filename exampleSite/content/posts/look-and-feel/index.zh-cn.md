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
[menu.footer]
  parent = "docs"
  weight = 3
  pre = '<i class="fas fa-fw fa-palette"></i>'
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

## 图标

为了减少图标的文件大小，我们使用自定义的 [Font Awesome](https://fontawesome.com/) 图标集。
正因如此，你可以自由地选择其他图标。

### Font Awesome

#### 自定义构建

> 本章节包含前端技术，比如 `JavaScript` 和 `npm`。

我们提供一个名为 `assets/icons/index.js` 的文件，以便自定义图标，因此，你可以按需添加图标。
我们已为你在示例站点设置好了构建环境。

1. 安装依赖

```shell
$ npm install
```

2. 在 `src/icons/index.js` 添加图标：

```js
import { faGlobe, faClock } from '@fortawesome/free-solid-svg-icons';

library.add(faGlobe, faClock);
```

3. 重建 `assets/js/icons.js`：

```shell
$ npm run build
```

如果你熟悉前端开发，推荐使用此方法添加图标。

#### CustomJS

因为本主题使用 JS+SVG 框架以替换图标为 SVG，所以 `customCSS` 将会无效，你需要使用 `customJS` 替代。

```toml
customJS = [
  "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/js/solid.min.js" # Import solid icons.
  #"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/js/regular.min.js" # Import regular icons.
  #"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/js/brands.min.js" # Import brand icons.
  #"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/js/all.min.js" # Import the full icon set.
]
```

### 其他

其他图标可以通过 `customCSS`，`customJS` 或 [钩子]({{< ref "/posts/hooks" >}}) 导入。

- [Iconify](https://iconify.design/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Material Design Icons](https://materialdesignicons.com/)
