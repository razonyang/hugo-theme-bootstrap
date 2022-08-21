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
    "文檔"
]
images = []
+++

本文列出一些主題觸發的一些事件，你可以通過事件監聽器來捕獲這些事件。

<!--more-->

## 顏色模式事件

當顏色模式改變時，HBS 將觸發一個名為 `hbs:mode` 的自定義事件，這對於根據主題顏色模式調整你的小部件的樣式很有用。
內置的 Utterances 和 Giscus 評論引擎就是依靠這個事件來調整它們的主題為淺色或深色。

{{% code/events-mode-catch %}}
