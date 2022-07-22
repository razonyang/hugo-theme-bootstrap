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
series = ["文档"]
images = []
authors = ["RazonYang"]
+++

`code-toggle` shortcode 根據任意支持的配寘程式碼，生成多種格式等效的程式碼塊。

<!--more-->

## 格式

支持 `JSON`、`TOML` 和 `YAML` 格式。

## 用法

```markdown
{{</* code-toggle */>}}
CODE IN ANY SUPPORTED FORMAT
{{</*/ code-toggle */>}}
```

帶有文件名：

```markdown
{{</* filename="config" code-toggle */>}}
CODE IN ANY SUPPORTED FORMAT
{{</*/ code-toggle */>}}
```

## 例子

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
