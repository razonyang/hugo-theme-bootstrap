+++
title = "添加內容"
linkTitle = "內容"
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

## 書寫文章

> 假設默認語言為 `en`。

```shell
$ hugo new posts/new-post/index.md
```

上述命令創建了一篇英文文章，同樣的，我們也可以創建一篇簡體中文的文章：

```shell
$ hugo new posts/new-post/index.zh-tw.md
```

> 請注意：創建的文章一般處於草稿狀態，本地預覽時，`hugo server` 需要指定 `-D` 參數才能預覽草稿文章。文章發佈時，需要將 `draft` 改為 `false`，或者直接移除 `draft` 參數。

> 你可以將文章放在任何地方，比如 `blog`，只需要將 `blog` 附加到 `mainSections` 參數：`mainSections = ["posts", "blog"]`。

## 下一步

- [調整配置]({{< ref "/docs/configuration" >}})
- [菜單]({{< ref "/docs/menu" >}})
- [觀感]({{< ref "/docs/look-and-feel" >}})