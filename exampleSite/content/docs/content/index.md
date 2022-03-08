+++
title = "Adding Content"
linkTitle = "Content"
date = 2021-12-04T10:43:39+08:00
featured = true
comment = true
toc = true
reward = true
pinned = false
categories = [
]
tags = [
  "Authoring",
  "Articles"
]
series = [
  "Docs"
]
images = []
weight = 970
[menu.footer]
  parent = "docs"
  weight = 5
+++

## Write New Articles

> Suppose the default language is `en`.

```shell
$ hugo new posts/new-post/index.md
```

The command above create a new post written in English. Similarly, we can create a post written in Simplified Chinese:

```shell
$ hugo new posts/new-post/index.zh-cn.md
```

> Please remind that, the created posts are generally in draft state. You'll need to specify the `-D` parameter of the command `hugo server` for previewing.
> Similarly, you need to change the `draft` to `false` or remove `draft` parameter if you want to publish the article.

> You can place your posts anywhere, such as `blog`, what you need to do is just append the `blog` to the `mainSections` parameter: `mainSections = ["posts", "blog"]`.

## Up Next

- [Tweak Configuration]({{< ref "/docs/configuration" >}})
- [Menu]({{< ref "/docs/menu" >}})
- [Look and Feel]({{< ref "/docs/look-and-feel" >}})