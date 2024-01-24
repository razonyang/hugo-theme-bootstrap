+++
title = "观感"
linkTitleIcon = '<i class="fas fa-palette fa-fw text-danger"></i>'
date = 2021-12-03T19:42:57+08:00
featured = false
comment = true
toc = true
reward = true
pinned = true
pinnedWeight = 3
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
navWeight = 960
aliases = [
  "/zh-cn/posts/look-and-feel"
]
authors = ["RazonYang"]
[menu.footer]
  parent = "docs"
  weight = 3
  [menu.footer.params]
    icon = '<i class="fas fa-fw fa-palette text-danger"></i>'
+++

默认情况下，使用此主题的站点具有默认字体、颜色和总体外观。但是，默认方案不可能满足所有人的要求，但是不要担心，你可以轻松地覆盖主题默认值，例如调色板颜色、字体、语法高亮。

<!--more-->

## Favicons

HBS 会根据 `assets/favicon.webp`（更高的优先权）或 `assets/favicon.png` 自动生成不同尺寸的图标文件。
只需将自己的收藏夹图像保存为相同路径即可覆盖默认的图片。

您还需要覆盖 mask 图标 `assets/safari-pinned-tab.svg`。

> 静态图标 `static/images/icons/icon-{size}.png` 拥有更高的优先权，以向后兼容。

### 自定义大小

你也可以通过 `params` 文件修改图标大小。

{{< code-toggle >}}
  {{< code/look-and-feel-favicon-sizes >}}
{{< /code-toggle >}}

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

```scss {title="assets/main/scss/_variables.scss"}
$palette-blue: darkblue;
```

在 `assets/main/scss/_variables.scss` 修改 SCSS 变量后，`blue` 调色板的颜色将会变成 `darkblue`。
更多 SCSS 变量请参阅 [SCSS 变量]({{< ref "docs/advanced/scss-variables" >}})。

## 字体

### Font Family

我们不指定任何字体，所以大部分浏览器将会使用 `system-ui` 。

你也可以轻易地使用其他 web 字体，比如 [Google Fonts](https://fonts.google.com/)。我们以 Roboto 字体为例。

首先，我们导入字体，然后在 `assets/main/scss/_custom.scss` 覆盖 `body-font-family` 变量：

```scss {title="assets/main/scss/_custom.scss"}
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
:root {
    --#{$prefix}body-font-family: 'Roboto', sans-serif;
}
```

## 语法高亮

本主题要求以下参数设置为特定值。

- `lineNos`: `true`
- `lineNumbersInTable`: `false`
- `noClasses`: `false`

另外可参阅 [Configure Highlight](https://gohugo.io/getting-started/configuration-markup#highlight)。

### 样式

```bash
$ hugo gen chromastyles --style=solarized-dark > assets/main/scss/_highlight.scss
```

另外可参阅[所有支持的样式](https://xyproto.github.io/splash/docs/all.html)。

## 图标

HBS 使用自定义的 [FontAwesome v5](https://fontawesome.com/v5/search) 图标集，其只包含主题使用到的图标，以减少图标文件的大小。

### 新增图标

考虑到用户自定义图标的需求，HBS 提供了一个自定义图标的功能，只需要在站点根目录创建 `assets/icons/custom.js` 文件，并导入需要的图标即可。

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

> 要使其生效，你需要取消注释，也就是删除前置的 `//` 注释符。

按字面意思，`@fortawesome/free-solid-svg-icons`、`@fortawesome/free-regular-svg-icons` 和 `@fortawesome/free-brands-svg-icons` 分别表示 Solid、Regular 和 Brand 图标。

### JS 变量

JS 变量使用驼峰式命名，其对应的 class 名称则是小写的，且以中横线将多个单词分割开来。

| Class | JS 变量 |
|---|---|
| `fa-clock` | `faClock` |
| `fa-address-book` | `faAddressBook` |
| `fa-amazon` | `faAmazon` |
| `fa-google` | `faGoogle` |

### 使用方法

根据图标类型不同，其 class 前缀也不相同，对应关系如下：

| Kind | Class 前缀
|---|---|
| Solid | `fas`
| Regular | `far`
| Brand | `fab`

以先前导入的图标为例：

| HTML |
|---|
| `<i class="fas fa-clock"></i>` |
| `<i class="far fa-address-book"></i>` |
| `<i class="fab fa-amazon"></i>` |
| `<i class="fab fa-google"></i>` |

> 如果图标未正常显示，请检查前缀是否正确。

#### 图标颜色

You can either specify the color CSS utilities or the `style` attribute for setting the icon color.

| HTML |
|---|
| `<i class="fas fa-clock text-success"></i>` |
| `<i class="fas fa-clock text-danger"></i>` |
| `<i class="far fa-clock" style="color: blue"></i>` |
| `<i class="far fa-clock" style="color: pink"></i>` |

> When using it in configurations, front matter and so on, you should need to quote/escape the code, otherwise YAML/TOML/JSON parsing may fail. For example,
> 
> ```md
> ---
> menu:
>   main:
>     params:
>       icon: '<i class="far fa-clock" style="color: blue"></i>'
> ---
> ```
