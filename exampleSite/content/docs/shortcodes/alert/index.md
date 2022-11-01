+++
title = "Alert Shortcode"
linkTitle = "Alert"
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
aliases = [
  "/en/posts/shortcodes/alert"
]
authors = ["RazonYang"]
+++

This article shows how to use the `alert` shortcode.

<!--more-->

## Syntax

### Inline

```markdown
{{</* alert [type] */>}}INLINE ALERT{{</* /alert */>}}
```

### Block

```markdown
{{</* alert [type] */>}}
BLOCK ALERT
{{</* /alert */>}}
```

> The parameter `type` is optional. Default to `info`, available values: `info`, `success`, `warning` and `danger`.

### With Heading

```markdown
{{</* alert [type] */>}}
{{</* alert-heading */>}}Well Done!{{</* /alert-heading */>}}
ALERT MESSAGE
{{</* /alert */>}}
```

### With Markdown Syntax

````markdown
{{%/* alert warning */%}}
Alert Shortcode with Markdown Syntax:
```bash
$ echo 'An example of alert shortcode with the Markdown syntax'
```
{{%/* /alert */%}}
````

{{% alert warning %}}
{{% code/alert-with-markdown-example %}}
{{% /alert %}}

Please note that you'll need to enable the `markup.goldmark.renderer.unsafe` configuration.

{{< code-toggle filename="config" >}}
{{% config/markup-goldmark-renderer-unsafe %}}
{{< /code-toggle >}}

## Examples

{{< alert >}}Info{{< /alert >}}

{{< alert success >}}
  Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
{{< /alert >}}

{{< alert warning >}}Warning{{< /alert >}}

{{< alert danger >}}Danger{{< /alert >}}

{{< alert "success" >}}
  {{< alert-heading >}}Well Done!{{< /alert-heading >}}
  Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
{{< /alert >}}
