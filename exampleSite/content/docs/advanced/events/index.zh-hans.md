+++
# type = "docs"
title = "事件"
date = 2022-07-23T17:33:59+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = [
    "事件"
]
tags = [
]
series = [
    "文档"
]
images = []
+++

本文列出一些主题触发的一些事件，你可以通过事件监听器来捕获这些事件。

<!--more-->

## 颜色模式事件

当颜色模式改变时，HBS 将触发一个名为 `hbs:mode` 的自定义事件，这对于根据主题颜色模式调整你的小部件的样式很有用。
内置的 Utterances 和 Giscus 评论引擎就是依靠这个事件来调整它们的主题为浅色或深色。

{{% code/events-mode-catch %}}
