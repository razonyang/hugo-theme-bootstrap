+++
title = "觀感"
date = 2021-12-03T19:42:57+08:00
featured = true
comment = true
toc = true
reward = true
pinned = true
categories = [
]
tags = [
  "顏色",
  "調色板",
  "字體",
  "語法高亮",
  "圖標"
]
series = [
  "檔案"
]
images = []
weight = 960
aliases = [
  "/zh-tw/posts/look-and-feel"
]
[menu.footer]
  parent = "docs"
  weight = 3
  pre = '<i class="fas fa-fw fa-palette"></i>'
+++

默認情况下，使用此主題的網站具有預設字體、顏色和總體外觀。 但是，默認方案不可能滿足所有人的要求，但是不要擔心，你可以輕鬆地覆蓋主題預設值，例如調色板顏色、字體、語法高亮。

<!--more-->

## 背景圖片

```toml {title="config/_default/params.toml"}
# 在亮色和暗色模式下都使用相同的圖片
backgroundImage = ['/images/bg.png']

# 在亮色和暗色模式下使用對應的圖片
backgroundImage = ['/images/bg-light.png', '/images/bg-dark.png']
```

## 調色板

HBS 提供了大量的配色：`blue`、`blue-gray`、`brown`、`cyan`、`green`、`indigo`、`orange`、`pink`、`purple`、`red`、`teal`、`yellow`。

### 可用的配色

設置面板的調色板選擇器是基於 `palettes` 參數的。

```toml {title="config/_default/params.toml"}
palettes = ["blue", "blue-gray", "indigo"]
```

你也可以將 `palettes` 設置為空數組 `[]` 以禁用調色板。

### 默認配色

```toml {title="config/_default/params.toml"}
palette = "indigo"
```

> 修改默認配色後，需要清理瀏覽器緩存。

### 修改配色

主題的調色板系統基於 CSS 變量，因此，我們可以輕松地為每個調色板自定義顏色。

```scss {title="assets/main/scss/_custom.scss"}
[data-palette=blue] {
    --#{$variable-prefix}primary: darkblue;
    --#{$variable-prefix}on-primary: #fff;
}
```

在 `assets/main/scss/_custom.scss` 追加樣式後，`blue` 調色板的顏色將會變成 `darkblue`。

## 字體

### Font Family

我們不指定任何字體，所以大部分瀏覽器將會使用 `system-ui` 。

你也可以輕易地使用其他 web 字體，比如 [Google Fonts](https://fonts.google.com/)。我們以 Roboto 字體為例。

首先，我們導入字體，然後在 `assets/main/scss/_custom.scss` 覆蓋 `body-font-family` 變量：

```scss {title="assets/main/scss/_custom.scss"}
@import 'https://fonts.googleapis.com/css2?family=Roboto&display=swap';
:root {
    --#{$variable-prefix}body-font-family: 'Roboto', sans-serif;
}
```

## 語法高亮

本主題要求以下參數設置為特定值。

- `lineNos`: `true`
- `lineNumbersInTable`: `false`
- `noClasses`: `false`

另外可參閱 [Configure Highlight](https://gohugo.io/getting-started/configuration-markup#highlight)。

### 样式

```shell
$ hugo gen chromastyles --style=solarized-dark > assets/main/scss/_highlight.scss
```

另外可參閱[所有支持的樣式](https://xyproto.github.io/splash/docs/all.html)。

## 圖標

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
