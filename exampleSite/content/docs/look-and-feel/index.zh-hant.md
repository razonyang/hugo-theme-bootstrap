+++
title = "觀感"
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
  "顏色",
  "調色板",
  "字體",
  "語法高亮",
  "圖標"
]
series = [
  "文檔"
]
images = []
navWeight = 960
aliases = [
  "/zh-tw/posts/look-and-feel"
]
authors = ["RazonYang"]
[menu.footer]
  parent = "docs"
  weight = 3
  [menu.footer.params]
    icon = '<i class="fas fa-fw fa-palette text-danger"></i>'
+++

默認情况下，使用此主題的網站具有預設字體、顏色和總體外觀。 但是，默認方案不可能滿足所有人的要求，但是不要擔心，你可以輕鬆地覆蓋主題預設值，例如調色板顏色、字體、語法高亮。

<!--more-->

## Favicons

HBS 會根據 `assets/favicon.webp`（更高的優先權）或 `assets/favicon.png` 自動生成不同尺寸的圖標文件。
只需將自己的我的最愛影像保存為相同路徑即可覆蓋默認的圖片。

您還需要覆蓋 mask 圖標 `assets/safari-pinned-tab.svg`。

> 靜態圖標 `static/images/icons/icon-{size}.png` 擁有更高的優先權，以向後兼容。

### 自定義大小

你也可以通過 `params` 文件修改圖標大小。

{{< code-toggle >}}
  {{< code/look-and-feel-favicon-sizes >}}
{{< /code-toggle >}}

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

```scss {title="assets/main/scss/_variables.scss"}
$palette-blue: darkblue;
```

在 `assets/main/scss/_custom.scss` 修改 SCSS 變量後，`blue` 調色板的顏色將會變成 `darkblue`。
更多 SCSS 變量請參閱 [SCSS 變量]({{< ref "docs/advanced/scss-variables" >}})。

## 字體

### Font Family

我們不指定任何字體，所以大部分瀏覽器將會使用 `system-ui` 。

你也可以輕易地使用其他 web 字體，比如 [Google Fonts](https://fonts.google.com/)。我們以 Roboto 字體為例。

首先，我們導入字體，然後在 `assets/main/scss/_custom.scss` 覆蓋 `body-font-family` 變量：

```scss {title="assets/main/scss/_custom.scss"}
@import 'https://fonts.googleapis.com/css2?family=Roboto&display=swap';
:root {
    --#{$prefix}body-font-family: 'Roboto', sans-serif;
}
```

## 語法高亮

本主題要求以下參數設置為特定值。

- `lineNos`: `true`
- `lineNumbersInTable`: `false`
- `noClasses`: `false`

另外可參閱 [Configure Highlight](https://gohugo.io/getting-started/configuration-markup#highlight)。

### 样式

```bash
$ hugo gen chromastyles --style=solarized-dark > assets/main/scss/_highlight.scss
```

另外可參閱[所有支持的樣式](https://xyproto.github.io/splash/docs/all.html)。

## 圖標

HBS 使用自定義的 [FontAwesome v5](https://fontawesome.com/v5/search) 圖標集，其只包含主題使用到的圖標，以減少圖標文件的大小。

### 新增圖標

考慮到用戶自定義圖標的需求，HBS 提供了一個自定義圖標的功能，只需要在站點根目錄創建 `assets/icons/custom.js` 文件，並導入需要的圖標即可。

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

> 要使其生效，你需要取消註釋，也就是刪除前置的 `//` 註釋符。

按字面意思，`@fortawesome/free-solid-svg-icons`、`@fortawesome/free-regular-svg-icons` 和 `@fortawesome/free-brands-svg-icons` 分別表示 Solid、Regular 和 Brand 圖標。

### JS 變量

JS 變量使用駝峰式命名，其對應的 class 名稱則是小寫的，且以中橫線將多個單詞分割開來。

| Class | JS 變量 |
|---|---|
| `fa-clock` | `faClock` |
| `fa-address-book` | `faAddressBook` |
| `fa-amazon` | `faAmazon` |
| `fa-google` | `faGoogle` |

### 使用方法

根據圖標類型不同，其 class 前綴也不相同，對應關系如下：

| Kind | Class 前綴
|---|---|
| Solid | `fas`
| Regular | `far`
| Brand | `fab`

以先前導入的圖標為例：

| HTML |
|---|
| `<i class="fas fa-clock"></i>` |
| `<i class="far fa-address-book"></i>` |
| `<i class="fab fa-amazon"></i>` |
| `<i class="fab fa-google"></i>` |

> 如果圖標未正常顯示，請檢查前綴是否正確。

#### 圖標顏色

You can either specify the color CSS utilities or the `style` attribute for setting the icon color.

| HTML |
|---|
| `<i class="fas fa-clock text-success"></i>` |
| `<i class="fas fa-clock text-danger"></i>` |
| `<i class="far fa-clock" style="color: blue"></i>` |
| `<i class="far fa-clock" style="color: pink"></i>` |
