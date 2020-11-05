+++
title = "額外 Shortcodes"
date = "2020-10-22"
description = "額外 Shortcodes 的詳細描述"
featured = true
categories = [
  "Shortcode"
]
tags = [
    "Alert",
    "JSFiddle",
    "CodePen",
    "JSRun",
    "Netease Music",
    "Bilibili",
    "Youku",
    "Tencent Video",
    "iQIYI"
]
images = [
]
+++

除了 Hugo 內建的 Shortcodes 外，該主題提供了一些額外的有用的 Shortcodes，比如 `alert`、`jsfiddle`、`codepen`、`jsrun`、`neteasemusic`、`bilibili`、`youku`、`tencentvideo`、`iqiyi`。
<!--more-->

## 警告

```markdown
{{</* alert "Message" [type] */>}}
```

> 引數 `type` 可選，預設為 `info`。

**Info**

```markdown
{{</* alert "Info" */>}}
```

{{< alert "Info" >}}

**Success**

```markdown
{{</* alert "Success" success */>}}
```

{{< alert "Success" success >}}

**Warning**

```markdown
{{</* alert "Warning" warning */>}}
```

{{< alert "Warning" warning >}}

**Danger**

```markdown
{{</* alert "Danger" danger */>}}
```

{{< alert "Danger" danger >}}

## 程式碼線上編輯器

### JSFiddle

```markdown
{{</* jsfiddle "user/id" */>}}
```

{{< jsfiddle "razonyang/bya1vuxn" >}}

### CodePen

```markdown
{{</* codepen "id" */>}}
```

{{< codepen "YzWGJNQ" >}}

### JSRUN

```markdown
{{</* jsrun "id" */>}}
```

{{< jsrun "QG6Kp" >}}

## 媒體播放器

### 網易雲音樂播放器

```markdown
{{</* neteasemusic "id" [auto [type]] */>}}
```

- 引數 `auto`控制是否自動播放，布林值，可選， 預設為 `true`。
- 引數 `type` 可選，預設為 `2`.

{{< neteasemusic "24953439" false >}}

### 嗶哩嗶哩視訊播放器

```toml
{{</* bilibili "video id" */>}}
```

{{< bilibili "BV11s411c7ZU" >}}

### 愛奇藝視訊播放器

```markdown
{{</* iqiyi "vid" "tvid" */>}}
```

{{< iqiyi "e2ad67ca24d1e205fb0b87eb243f467d" "567349400" >}}

### 騰訊視訊播放器

```markdown
{{</* tencentvideo "vid" */>}}
```

{{< tencentvideo "p0015bl11hy" >}}

### 優酷視訊播放器

```markdown
{{</* youku "XNTQwMTgxMTE2" */>}}
```

{{< youku "XNTQwMTgxMTE2" >}}
