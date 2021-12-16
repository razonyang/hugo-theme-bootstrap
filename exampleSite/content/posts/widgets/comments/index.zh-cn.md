+++
title = "评论小部件"
date = 2021-11-27T19:54:29+08:00
featured = true
comment = true
toc = true
reward = true
categories = [
  "评论",
  "小部件"
]
tags = [
  "Disqus",
  "Utterances"
]
series = [
  "文档"
]
images = []
[menu.footer]
  parent = "features"
  weight = 7
  pre = '<i class="fas fa-fw fa-comments"></i>'
+++

[Disqus](https://disqus.com/) 和 [Utterances](https://utteranc.es/) 评论小部件都是开箱即用的。本文将展示如何配置它们，甚至自定义你自己的评论小部件。

<!--more-->

## Disqus

[Disqus](https://disqus.com/) 评论小部件由 Hugo 提供支持。

```toml
disqusShortname = "yourdiscussshortname"
```

> 请注意：`disqusShortname` 是站点配置，而非参数。将其放在 `params` 是行不通的。

## Utterances

[Utterances](https://utteranc.es/) 是一个基于 GitHub issue 的轻量级的评论挂件。

```toml
[utterances]
  repo = "user/repo"
  #issueTerm = "pathname" # pathname, url, title, og:title.
  #label = "comment" # Optional.
  #theme = ""
```

> 不同于 Disqus，Utterances 是一个参数。请将其放置在 `params`。

### 参数

| 名称 | 类型 | 默认值 | 描述 |
|:---|:---|:---|:---
| `utterances.repo` | String | - | GitHub 仓库。
| `utterances.issueTerm` | String | `pathname` | 文章和 issue 之间的映射： `pathname` | `pathname`, `url`, `title` 和 `og:title`。
| `utterances.label` | String | - | 此标签将会分配给 Utterances 创建的 issue。
| `utterances.theme` | String | - | 如果未设置任何主题，亮色和暗色模式会分别使用 `github-light` 和 `github-dark`。 可选值： `github-light`, `github-dark`, `preferred-color-scheme`, `github-dark-orange`, `icy-dark`, `dark-blue` 和 `photon-dark`。

### 故障排查

- 确保仓库是公开的，否则读者无法查看评论。
- 确保仓库已经安装了 [utterances app](https://github.com/apps/utterances)，否则用户无法发表评论。
- 如果你的仓库是克隆的，请在设置中确保已经启用了 issues 功能。

## 自定义评论小部件

我们不打算支持所有的评论小部件，但别担心，你完全可以自定义评论小部件。

> 在创建自己的评论小部件之前，需要禁用其他评论小部件。

```shell
mkdir -p layouts/partials/post/comments
echo "MY COMMENTS WIDGET" > layouts/partials/post/comments/custom.html
```

期间，你很可能需要引入第三方资源，不过这可以通过 [自定义资源]({{< ref "/posts/custom-assets" >}}) 或 [钩子]({{< ref "/posts/hooks" >}}) 轻松解决。
