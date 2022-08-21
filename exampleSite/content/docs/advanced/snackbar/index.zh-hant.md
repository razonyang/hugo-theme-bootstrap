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
series = ["文檔"]
images = []
authors = ["RazonYang"]
+++

相信使用過代碼塊復製按鈕的用戶，對 Snackbar 並不陌生，其告知用戶應用程序執行的結果。本文將舉例說明如何使用 Snackbar，以滿足用戶對自定義交互的需要。

<!--more-->

## API

| Function | Description|
|---|---|
| `show(body: String, duration: number = 2000)` | `body`：消息正文、`duration`：顯示時間，單位毫秒。

## 導出

得益於 `assets/main/js/custom.ts`，我們可以自定義 JavaScript，這裏我們將整個 Snackbar 導出為全局變量：

{{% code/snackbar %}}

## 使用

接著我們就可以在 HTML 或 JavaScript 中進行調用：

{{% code/snackbar-example %}}

> 參閱[鉤子]({{< ref "docs/advanced/hooks" >}})以了解如何注入自定義 HTML。
