+++
title = "额外 Shortcodes"
date = "2020-10-22"
description = "额外 Shortcodes 的详细描述"
featured = true
categories = [
  "Shortcode"
]
tags = [
    "Alert",
    "JSFiddle",
    "CodePen",
    "JSRun",
    "Cloud Music",
    "Bilibili",
    "Youku",
    "Tencent Video",
    "iQIYI"
]
images = [
  "images/shortcode.png"
]
+++

除了 Hugo 内置的 Shortcodes 外，该主题提供了一些额外的有用的 Shortcodes，比如 `alert`、`jsfiddle`、`codepen`、`jsrun`、`cloudmusic`、`bilibili`、`youku`、`tencentvideo`、`iqiyi`。
<!--more-->

## 警告

```markdown
{{</* alert "Message" [type] */>}}
```

> 参数 `type` 可选，默认为 `info`。

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

## 代码在线编辑器

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

## 媒体播放器

### 网易云音乐播放器

```markdown
{{</* cloudmusic "id" [auto [type]] */>}}
```

- 参数 `auto`控制是否自动播放，布尔值，可选， 默认为 `true`。
- 参数 `type` 可选，默认为 `2`.

{{< cloudmusic "24953439" false >}}

### 哔哩哔哩视频播放器

```toml
{{</* bilibili "video id" */>}}
```

{{< bilibili "BV11s411c7ZU" >}}

### 爱奇艺视频播放器

```markdown
{{</* iqiyi "vid" "tvid" */>}}
```

{{< iqiyi "e2ad67ca24d1e205fb0b87eb243f467d" "567349400" >}}

### 腾讯视频播放器

```markdown
{{</* tencentvideo "vid" */>}}
```

{{< tencentvideo "p0015bl11hy" >}}

### 优酷视频播放器

```markdown
{{</* youku "XNTQwMTgxMTE2" */>}}
```

{{< youku "XNTQwMTgxMTE2" >}}
