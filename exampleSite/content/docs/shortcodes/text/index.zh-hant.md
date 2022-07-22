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
tags = ["文本", "文本對齊", "文本轉換", "文本選擇"]
series = ["文檔"]
images = []
+++

在本文中，我們將探討文本的一些短代碼，例如文本的對齊、轉換和選擇。

<!--more-->

## 文本轉換

{{< text/lowercase >}}Lowercased text.{{< /text/lowercase >}}
{{< text/uppercase >}}Uppercased text.{{< /text/uppercase >}}
{{< text/capitalize >}}CapiTaliZed text.{{< /text/capitalize >}}

## 文本對齊

{{< text/align-start >}}
Align text to the start.
{{< /text/align-start >}}

{{< text/align-center >}}
Align text to the center.
{{< /text/align-center >}}

{{< text/align-end >}}
Align text to the end.
{{< /text/align-end >}}

## 文本選擇

{{< text/user-select-all >}}
This paragraph will be entirely selected when clicked by the user.
{{< /text/user-select-all >}}

{{< text/user-select-none >}}
This paragraph will not be selectable when clicked by the user.
{{< /text/user-select-none >}}
