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

## Online Code Editor

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

## Media Player

### Cloud Music Player

```markdown
{{</* cloudmusic "id" [auto [type]] */>}}
```

- The `auto` controls whether to autoplay. Boolean and optional, default to `true`.
- The `type` parameter is optional. Default to `2`.

{{< cloudmusic "24953439" false >}}

### Bilibili Video Player

```toml
{{</* bilibili "video id" */>}}
```

{{< bilibili "BV11s411c7ZU" >}}

### iQiyi Video Player

```markdown
{{</* iqiyi "vid" "tvid" */>}}
```

{{< iqiyi "e2ad67ca24d1e205fb0b87eb243f467d" "567349400" >}}

### Tencent Video Player

```markdown
{{</* tencentvideo "vid" */>}}
```

{{< tencentvideo "p0015bl11hy" >}}

### Youku Video Player

```markdown
{{</* youku "XNTQwMTgxMTE2" */>}}
```

{{< youku "XNTQwMTgxMTE2" >}}
