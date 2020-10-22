+++
title = "Extra Shortcodes"
date = "2020-10-22"
description = "A detailed description of extra Shortcodes"
featured = true
categories = [
  "Shortcode"
]
tags = [
    "alert",
    "jsfiddle",
    "codepen",
    "jsrun",
    "cloudmusic",
    "bilibili",
    "youku",
    "tencent video",
    "iqiyi"
]
images = [
  "images/shortcode.png"
]
+++

In addition to Hugo's built-in shortcodes, this theme provides some extra useful shortcodes. Such as `alert`, `jsfiddle`, `codepen`, `jsrun`, `cloudmusic`, `bilibili`, `youku`, `tencentvideo`, `iqiyi`.
<!--more-->

## Alert

```markdown
{{</* alert "Message" [type] */>}}
```

> The parameter `type` is optional. Default to `info`.

### Info

```markdown
{{</* alert "Info" */>}}
```

{{< alert "Info" >}}

### Success

```markdown
{{</* alert "Success" success */>}}
```

{{< alert "Success" success >}}

### Warning

```markdown
{{</* alert "Warning" warning */>}}
```

{{< alert "Warning" warning >}}

### Danger

```markdown
{{</* alert "Danger" danger */>}}
```

{{< alert "Danger" danger >}}

## JSFiddle

```markdown
{{</* jsfiddle "user/id" */>}}
```

{{< jsfiddle "razonyang/bya1vuxn" >}}

## CodePen

```markdown
{{</* codepen "id" */>}}
```

{{< codepen "YzWGJNQ" >}}

## JSRUN

```markdown
{{</* jsrun "id" */>}}
```

{{< jsrun "QG6Kp" >}}


## Cloud Music

```markdown
{{</* cloudmusic "24953439" */>}}
```

{{< cloudmusic "24953439" >}}

## Bilibili Video

```toml
{{</* bilibili "video id" */>}}
```

{{< bilibili "BV11s411c7ZU" >}}

## iQiyi Video

```markdown
{{</* iqiyi "vid" "tvid" */>}}
```

{{< iqiyi "e2ad67ca24d1e205fb0b87eb243f467d" "567349400" >}}

## Tencent Video

```markdown
{{</* tencentvideo "vid" */>}}
```

{{< tencentvideo "p0015bl11hy" >}}

## Youku Video

```markdown
{{</* youku "XNTQwMTgxMTE2" */>}}
```

{{< youku "XNTQwMTgxMTE2" >}}
