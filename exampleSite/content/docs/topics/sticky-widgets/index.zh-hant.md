+++
# type = "docs"
title = "粘性小部件"
date = 2022-07-27T08:54:43+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["小部件"]
tags = ["Sticky", "SCSS"]
series = ["文檔"]
images = []
+++

當頁面太長時，側邊欄會隨著滾動而消失，頁面看起來就不那麽整潔美觀了。
所以本文將介紹如何使用粘性部件來避免這個問題。

<!--more-->

{{< bilibili BV1jW4y1y7kL >}}

## 創建一個新的粘性小部件

首先，在 `layouts/parials` 文件夾下創建一個模板，我們以 `layouts/partials/custom/sticky-info.html` 為例。

{{% code/sticky-widgets-partial %}}

> 文件名 `custom/sticky-info` 可以隨意改變，但我們建議使用一些更具體的名字，以避免以後覆蓋主題的模板。
> 比如 `custom`、`mywidgets`。

然後使用 `layouts/partials/hooks/sidebar-end.html` 鉤子來包含粘性模板。

```html { title="layouts/partials/hooks/sidebar-end.html" }
{{- partial "custom/sticky-info" . }}
```

> 粘性小部件應該是側邊欄的最後一個小部件，否則會出現奇怪的問題。

## 使現有的小部件變得粘稠

每個小部件都會有一個獨特的類名，這樣我們就可以在所需的小部件上應用 CSS，這裏我們以個人資料小部件為例。

{{% code/sticky-widgets-scss %}}

我們需要指定`order`屬性，使個人資料部件成為側邊欄的最後一個部件。
