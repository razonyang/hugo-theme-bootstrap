+++
title = "Alert Shortcode"
date = "2020-10-22"
description = "A detailed description of Alert shortcode"
featured = false
categories = [
  "Shortcode"
]
tags = [
  "Alert"
]
series = [
  "Docs"
]
images = [
]
+++

This article shows how to use the `alert` shortcode.
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
