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
series = ["Documentation"]
images = []
authors = ["RazonYang"]
+++

Users who have used the block copy button are no stranger to the Snackbar, which informs the user of the results of the application's execution. This article will give an example of how to use Snackbar to meet the user's need for custom interaction.

<!--more-->

## API

| Function | Description|
|--|--|
| `show(body: String, duration: number = 2000)` | `body`: the body of the message, `duration`: the duration of the message, in milliseconds.

## Export

Thanks to `assets/main/js/custom.ts`, we can customize the JavaScript, here we export the whole Snackbar as a global variable:

{{% code/snackbar %}}

## Usage

Then we can call it up in HTML or JavaScript:

{{% code/snackbar-example %}}

> See [Hooks]({{< ref "docs/advanced/hooks" >}}) for how to inject custom HTML.
