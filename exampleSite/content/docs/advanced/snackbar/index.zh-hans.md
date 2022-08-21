+++
# type = "docs"
title = "Snackbar"
date = 2022-07-02T21:14:37+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = []
tags = ["Snackbar", "HTML", "JavaScript"]
series = ["文档"]
images = []
authors = ["RazonYang"]
+++

相信使用过代码块复制按钮的用户，对 Snackbar 并不陌生，其告知用户应用程序执行的结果。本文将举例说明如何使用 Snackbar，以满足用户对自定义交互的需要。

<!--more-->

## API

| Function | Description|
|---|---|
| `show(body: String, duration: number = 2000)` | `body`：消息正文、`duration`：显示时间，单位毫秒。

## 导出

得益于 `assets/main/js/custom.ts`，我们可以自定义 JavaScript，这里我们将整个 Snackbar 导出为全局变量：

{{% code/snackbar %}}

## 使用

接着我们就可以在 HTML 或 JavaScript 中进行调用：

{{% code/snackbar-example %}}

> 参阅[钩子]({{< ref "docs/advanced/hooks" >}})以了解如何注入自定义 HTML。
