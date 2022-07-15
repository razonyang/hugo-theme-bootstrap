+++
# type = "docs"
title = "文本 Shortcodes"
linkTitle = "文本"
date = 2022-07-15T01:00:43+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["Shortcode"]
tags = ["文本", "文本对齐", "文本转换", "文本选择"]
series = ["文档"]
images = []
+++

在本文中，我们将探讨文本的一些短代码，例如文本的对齐、转换和选择。

<!--more-->

## 文本转换

{{< text/lowercase >}}Lowercased text.{{< /text/lowercase >}}
{{< text/uppercase >}}Uppercased text.{{< /text/uppercase >}}
{{< text/capitalize >}}CapiTaliZed text.{{< /text/capitalize >}}

## 文本对齐

{{< text/align-start >}}
Align text to the start.
{{< /text/align-start >}}

{{< text/align-center >}}
Align text to the center.
{{< /text/align-center >}}

{{< text/align-end >}}
Align text to the end.
{{< /text/align-end >}}

## 文本选择

{{< text/user-select-all >}}
This paragraph will be entirely selected when clicked by the user.
{{< /text/user-select-all >}}

{{< text/user-select-none >}}
This paragraph will not be selectable when clicked by the user.
{{< /text/user-select-none >}}
