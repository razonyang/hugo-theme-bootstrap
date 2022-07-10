+++
# type = "docs"
title = "Code Toggle"
date = 2022-06-13T16:54:28+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["Shortcode"]
tags = ["JSON", "YAML", "TOML"]
series = ["文檔"]
images = []
authors = ["RazonYang"]
+++

The `code-toggle` shortcode generates code blocks of various formats according to the configuration code of any supported format.

<!--more-->

## Formats

`JSON`, `TOML` and `YAML` are supported.

## Usage

```markdown
{{</* code-toggle */>}}
CODE IN ANY SUPPORTED FORMAT
{{</*/ code-toggle */>}}
```

With a filename:

```markdown
{{</* filename="config" code-toggle */>}}
CODE IN ANY SUPPORTED FORMAT
{{</*/ code-toggle */>}}
```

## Example

```markdown
{{</* code-toggle filename="params" */>}}
{
    "logo": "/images/logo.png",
    "customCSS": ["foo.css", "bar.css"],
    "codeBlock": {
        "maxLines": 10
    }
}
{{</*/ code-toggle */>}}
```

{{< code-toggle filename="params" >}}
{
    "logo": "/images/logo.png",
    "customCSS": ["foo.css", "bar.css"],
    "codeBlock": {
        "maxLines": 10
    }
}
{{</ code-toggle >}}
