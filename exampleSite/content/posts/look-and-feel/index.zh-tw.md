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
  "語法高亮"
]
series = [
  "檔案"
]
images = []
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
