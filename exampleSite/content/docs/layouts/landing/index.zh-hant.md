+++
# type = "docs"
title = "落地頁佈局"
linkTitle = "落地頁"
date = 2022-09-15T10:46:23+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["佈局"]
tags = ["落地頁"]
series = ["文檔"]
images = []
authors = ["RazonYang"]
+++

In this article, we'll talk about the landing page layout, you may be interested in it if you're going to customizing the pages in Markdown way.

<!--more-->

## What is it?

The landing page layout is just a skeleton container, the body is consists by three parts: top app bar, page content and footer.

### Advantages

- Writing content in Markdown.
- Reusable shortcodes.

## How to use it?

It's quite simple to use it, just specify the `type` as `landing` in the page front matter, the rest is all about your content.

```
+++
type = "landing"
+++
```

Let's take home page as an example, create the `content/_index.md` with the following content.

{{% alert "warning" %}}
The home page MUST be `content/_index.md`, not `content/index.md`.
{{% /alert %}}

```
---
title: Home
type: landing
---

{{</* text/align-center */>}}
<h1>Hello world.</h1>
{{</* /text/align-center */>}}

<br>

{{</* text/align-center >}}
<h2>The subtitle landing page example.</h2>
{{</* /text/align-center */>}}
```
