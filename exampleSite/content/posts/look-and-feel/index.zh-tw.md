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
[menu.footer]
  parent = "docs"
  weight = 3
  pre = '<i class="fas fa-fw fa-palette"></i>'
+++

默認情况下，使用此主題的網站具有預設字體、顏色和總體外觀。 但是，默認方案不可能滿足所有人的要求，但是不要擔心，你可以輕鬆地覆蓋主題預設值，例如調色板顏色、字體、語法高亮。

<!--more-->

## 調色板

主題的調色板系統基於 CSS 變量，因此，我們可以輕松地為每個調色板自定義顏色。

我們以一個例子進行說明。

```CSS
[data-palette=blue] {
  --hbs-primary: darkblue;
  --hbs-on-primary: #fff;
}
```


## 字體

### Font Family

我們不指定任何字體，所以大部分瀏覽器將會使用 `system-ui` 。

你也可以輕易地使用其他 web 字體，比如 [Google Fonts](https://fonts.google.com/)。我們以 Roboto 字體為例。

首先，我們通過 `customCSS` 導入字體：

```
customCSS = [
  "https://fonts.googleapis.com/css2?family=Roboto&display=swap"
]
```

然後在 `assets/css/custom.css` 覆蓋 `--hbs-body-font-family` 變量：


```CSS
:root {
  --hbs-body-font-family: 'Roboto', sans-serif;
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
$ hugo gen chromastyles --style=solarized-dark > assets/css/highlight.css
```

另外可參閱[所有支持的樣式](https://xyproto.github.io/splash/docs/all.html)。

## 圖標

為了減少圖標的文件大小，我們使用自定義的 [Font Awesome](https://fontawesome.com/) 圖標集。
正因如此，你可以自由地選擇其他圖標。

### Font Awesome

#### 自定義構建

> 本章節包含前端技術，比如 `JavaScript` 和 `npm`。

我們提供一個名為 `assets/js/icons.js` 的文件，以便自定義圖標，因此，你可以按需添加圖標。
我們已為你在示例站點設置好了構建環境。

1. 安裝依賴

```shell
$ npm install
```

2. 在 `src/icons/index.js` 添加圖標：

```js
import { faGlobe, faClock } from '@fortawesome/free-solid-svg-icons';

library.add(faGlobe, faClock);
```

3. 重建 `assets/js/icons.js`：

```shell
$ npm run build
```

如果你熟悉前端開發，推薦使用此方法添加圖標。

#### CustomJS

因為本主題使用 JS+SVG 框架以替換圖標為 SVG，所以 `customCSS` 將會無效，你需要使用 `customJS` 替代。

```toml
customJS = [
  "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/js/solid.min.js" # Import solid icons.
  #"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/js/regular.min.js" # Import regular icons.
  #"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/js/brands.min.js" # Import brand icons.
  #"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/js/all.min.js" # Import the full icon set.
]
```

### 其他

其他圖標可以通過 `customCSS`，`customJS` 或 [鉤子]({{< ref "/posts/hooks" >}}) 導入。

- [Iconify](https://iconify.design/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Material Design Icons](https://materialdesignicons.com/)
