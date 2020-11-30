+++
title = "Alert Shortcode"
date = "2020-10-22"
description = "关于 Alert Shortcode 的详细描述"
featured = false
categories = [
  "Shortcode"
]
tags = [
  "Alert"
]
series = [
  "用户手册"
]
images = [
]
+++

本文展示了如果使用 `alert` shortcode。
<!--more-->

```markdown
{{</* alert "Message" [type] */>}}
```

> The parameter `type` is optional. Default to `info`.

## Info

```markdown
{{</* alert "Info" */>}}
```

{{< alert "Info" >}}

## Success

```markdown
{{</* alert "Success" success */>}}
```

{{< alert "Success" success >}}

## Warning

```markdown
{{</* alert "Warning" warning */>}}
```

{{< alert "Warning" warning >}}

## Danger

```markdown
{{</* alert "Danger" danger */>}}
```

{{< alert "Danger" danger >}}
