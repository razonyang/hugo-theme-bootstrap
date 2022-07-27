+++
# type = "docs"
title = "Layouts Overriding"
date = 2022-07-27T16:05:37+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["Layouts", "Partials"]
tags = []
series = ["Docs"]
images = []
+++

According to the [Hugo Layouts Lookup Order](https://gohugo.io/templates/lookup-order/), it's easy to override Hugo and theme's layouts and partials.
It's useful for users who want to custom some stuff of particular layouts or partials.

<!--more-->

## Usage

Just create a layout or partial file with the same filename that you want to override under site root.

> This is how our [Hooks]({{< ref "docs/advanced/hooks" >}}) work.

For example, we can override the homepage parital [`layouts/index.html`](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/layouts/index.html) via creating our own under site root.

```bash
$ echo "MY CUSTOM HOMEPAGE" > layouts/index.html
```
