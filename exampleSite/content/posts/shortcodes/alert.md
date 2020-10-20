+++
title = "Alert shortcode"
date = 2020-10-20T20:57:16+08:00
draft = false
comment = true
categories = [
  "Shortcode"
]
tags = [
  "alert"
]
+++

We provide four types of alerts: `info`, `success`, `warning` and `danger`.

<!--more-->

## Usage

```markdown
{{</* alert "Message" [type] */>}}
```

> The parameter `type` is optional. Default to `info`.

## Examples

```markdown
{{</* alert "Info" */>}}
```

{{< alert "Info" >}}

```markdown
{{</* alert "Success" success */>}}
```

{{< alert "Success" success >}}

```markdown
{{</* alert "Warning" warning */>}}
```

{{< alert "Warning" warning >}}

```markdown
{{</* alert "Danger" danger */>}}
```

{{< alert "Danger" danger >}}
