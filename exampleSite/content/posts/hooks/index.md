+++
title = "Hooks"
date = 2021-11-27T19:54:29+08:00
featured = true
comment = true
toc = true
reward = true
categories = [
  "Hook"
]
tags = [
]
series = [
  "Docs"
]
images = []
[menu.footer]
  parent = "docs"
  weight = 6
+++

As a flexible theme, it should have the ability to customize code and integrate third-party services. Therefore, we brought a feature called hook.

In this article, we will introduce all hooks and provide some use cases.

<!--more-->

## Overview

| Hook | Description |
|---|---|
| `head-end` | Before the `<head>` end |
| `body-end` | Before the `<body>` end |
| `main-begin` | Above of the `<main>` |
| `main-end` | Follow the `<main>` |
| `list-begin` | Above of the posts list |
| `list-end` | Follow the posts list |
| `sidebar-begin` | At very top of the sidebar |
| `sidebar-end` | Before the sidebar end |
| `content-begin` | Above of the post content |
| `content-end` | Follow the post content |
| `comments-begin` | Above of the comments |
| `comments-end` | Follow the comments |
| `footer-begin` | At very top of the footer |
| `footer-end` | Before the footer end |
| `post-panel-begin` | At very top of the post panel |
| `post-panel-end` | Before the post panel end |

## Usages

It's easy to use a hook, what you need to do is that create an HTML file with the same name as hook in the `layouts/partials/hooks` directory.

Let's take `sidebar-begin` as an example:

```shell
echo '<section class="row card component text-center"><div class="card-body">SIDEBAR BEGIN</div></section>' \
  > layouts/partials/hooks/sidebar-begin.html
```
