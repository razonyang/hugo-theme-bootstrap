+++
title = "Docs 佈局"
description = ""
date = 2022-01-12T10:56:34-08:00
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = [
  "Layouts"
]
tags = [
]
series = [
  "文檔"
]
images = []
authors = ["Andreas Deininger", "RazonYang"]
+++

在本文中，我們將探討 `docs` 佈局，其可用來編寫項目文檔，個人筆記等。

<!--more-->

> If you're going to use `docs` layout on other sections(`notes`), please take a look at [Content]({{< ref "/docs/content" >}}) page.

## 佈局

`docs` 佈局由三部分組成，由左到右依次為：文檔導航欄、文檔內容和側邊欄。

## 內容結構

```bash
{{% code/layout-docs-structure %}}
```

![Structure](structure.png#center)

如圖所示，本例展示瞭如何組織一個多層次的文檔導航。

- 包含 `_index.md` 將作為一個 Section。
- 包含 `index.md` 將作為一個頁面。

## 文檔導航欄

### 標題

一般地，`title` 將作為默認標題顯示，但有時候過長的標題而顯得畫蛇添足，此時我們可以通過設置 `linkTitle` 以修改導航所顯示的鏈接文本。

{{< code-toggle >}}
title = "Install on Windows"
linkTitle = "Windows"
{{< /code-toggle >}}

### 圖標

除此之外，我們提供一個名為 `linkTitleIcon` 的參數以設置標題左側的圖標。

{{< code-toggle >}}
linkTitleIcon = '<i class="fas fa-columns fa-fw"></i>'
{{< /code-toggle >}}

### 權重與排序

我們根據 `navWeight` 參數對文檔進行排序，值越高則優先度越高。而對於沒有指定 `navWeight` 的文檔，則按照 `title` 進行字母升序排序。

{{< code-toggle >}}
navWeight = 1000
{{< /code-toggle >}}

### 外部鏈接

有時候我們將文章需要鏈接到外部站點，此時 `redirect` 可以派上用場，其將自動跳轉到指定的外部鏈接。

{{< code-toggle >}}
redirect = "https://github.com/razonyang/hugo-theme-bootstrap-skeleton"
{{< /code-toggle >}}

## 側邊欄

### 小部件

側邊欄默認只包含內容目錄，但你可以通過[鉤子]({{< ref "docs/advanced/hooks" >}})添加小部件。

```html {title="layouts/partials/hooks/docs/sidebar-end.html"}
{{- partial "docs/repo" . }}
{{- partial "sidebar/recent-posts" . }}
```
