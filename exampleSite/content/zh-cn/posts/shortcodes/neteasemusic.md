+++
title = "网易云音乐 Shortcode"
date = "2020-10-22"
description = "网易云音乐 Shortcode 的详细说明"
featured = false
categories = [
  "Shortcode"
]
tags = [
  "网易云音乐"
]
images = [
]
+++

关于网易云音乐 Shortcode 的详细使用说明。
<!--more-->

## 使用

```markdown
{{</* neteasemusic "id" [auto [type]] */>}}
```

| Parameter | Description |
|---|---|
| `auto` | The `auto` controls whether to autoplay. Boolean and optional, default to `false`.
| `type` | The `type` parameter is optional. Default to `2`.

## 例子

{{< neteasemusic "24953439" false >}}
