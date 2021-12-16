+++
title = "圖像處理"
date = 2021-08-15T14:19:06+08:00
draft = false
comment = true
toc = true
reward = true
categories = [
  "Markdown"
]
tags = [
  "圖像"
]
series = [
  "檔案"
]
images = [
  "images/center.png"
]
[menu.footer]
  parent = "features"
  weight = 2
+++

本文提供一些調整圖片大小和對齊圖片的用例。

<!--more-->

## 調整圖片大小

我們利用 URL 的查詢字符串來調整圖片大小。

### 指定寬度和保留比率

```markdown
![Resize](images/sample.png?width=300px)
```

![Resize](images/sample.png?width=300px)

### 指定高度和保留比率

```markdown
![Resize](images/sample.png?height=200px)
```

![Resize](images/sample.png?height=200px)

### 指定寬度和高度

```markdown
![Resize](images/sample.png?width=300px&height=200px)
```

![Resize](images/sample.png?width=300px&height=200px)

> 它不僅可以用於[頁面資源](https://gohugo.io/content-management/page-resources/)，而且也適用於 **static** 圖像和外部圖像。
> 但是，除了頁面資源外，其他資源的大小都是按內聯樣式調整的，也就是說，它們的原始大小不會改變。

## 對齊圖像

我們可以利用 URL 片段輕易地對齊圖像，比如：`#center`, `#floatleft` 和 `#floatright` 分別表示居中對齊、向左浮動和向右浮動。

### 居中對齊

添加 `#center` 使圖片居中對齊。

舉個例子：`![Center](/images/center.png#center)`。

![Center](/images/center.png#center)

### 向左浮動

![Float Left](/images/left.png#floatleft)

添加 `#floatleft` 使圖片向左浮動。

舉個例子：`![Float Left](/images/left.png#floatleft)`。

### 向右浮動

![Float Right](/images/right.png#floatright)

同樣的，我們也可以添加 `#floatright` 使圖片向右浮動。

舉個例子：`![Float Right](/images/right.png#floatright)`。
