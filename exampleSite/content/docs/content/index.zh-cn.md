+++
title = "添加内容"
linkTitle = "内容"
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

## 书写文章

> 假设默认语言为 `en`。

```shell
$ hugo new posts/new-post/index.md
```

上述命令创建了一篇英文文章，同样的，我们也可以创建一篇简体中文的文章：

```shell
$ hugo new posts/new-post/index.zh-cn.md
```

> 请注意：创建的文章一般处于草稿状态，本地预览时，`hugo server` 需要指定 `-D` 参数才能预览草稿文章。文章发布时，需要将 `draft` 改为 `false`，或者直接移除 `draft` 参数。

> 你可以将文章放在任何地方，比如 `blog`，只需要将 `blog` 附加到 `mainSections` 参数：`mainSections = ["posts", "blog"]`。

## 下一步

- [调整配置]({{< ref "/docs/configuration" >}})
- [菜单]({{< ref "/docs/menu" >}})
- [观感]({{< ref "/docs/look-and-feel" >}})