+++
title = "Comments Widget"
date = 2021-11-27T19:54:29+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "Comments",
  "Widget"
]
tags = [
  "Disqus",
  "Utterances",
  "Giscus"
]
series = [
  "Docs"
]
images = []
aliases = [
  "/en/posts/widgets/comments"
]
authors = ["RazonYang"]
[menu.footer]
  parent = "features"
  weight = 7
  pre = '<i class="fas fa-fw fa-comments me-1"></i>'
+++

[Disqus](https://disqus.com/), [Utterances](https://utteranc.es/) and [Giscus](https://giscus.app/) comments widgets are supported out of box.
This article shows how to configure them and even customize your own comment widgets.

<!--more-->

## Disqus

[Disqus](https://disqus.com/) comments widget is supported by Hugo.

```toml
disqusShortname = "yourdiscussshortname"
```

> Please keep in mind that `disqusShortname` is a site's configuration, **not** a parameter. Put it in the `params` won't work.

## Utterances

[Utterances](https://utteranc.es/) is a lightweight comments widget built on GitHub issues.

```toml
[utterances]
  repo = "user/repo"
  #issueTerm = "pathname" # pathname, url, title, og:title.
  #label = "comment" # Optional.
  #theme = ""
```

> Unlike Disqus, Utterances **is** a parameter. You should put it in the `params`.

### Parameters

| Name | Type | Default | Description |
|:---|:---|:---|:---
| `utterances.repo` | String | - | GitHub repository.
| `utterances.issueTerm` | String | `pathname` | The mapping between blog posts and GitHub issues: `pathname` | `pathname`, `url`, `title` and `og:title`.
| `utterances.label` | String | - | The label that will be assigned to issues created by Utterances.
| `utterances.theme` | String | - | `github-light` and `github-dark` will be used in light and dark mode respectively if not set. Optional values: `github-light`, `github-dark`, `preferred-color-scheme`, `github-dark-orange`, `icy-dark`, `dark-blue` and `photon-dark`.

### Troubleshooting

- Make sure the repo is public, otherwise your readers will not be able to view the issues/comments.
- Make sure the [utterances app](https://github.com/apps/utterances) is installed on the repo, otherwise users will not be able to post comments.
- If your repo is a fork, navigate to its settings tab and confirm the issues feature is turned on.

## Giscus

[Giscus](https://giscus.app/) is a lightweight comments widget built on GitHub discussions.

```toml
[giscus]
  repo = "user/repo"
  repoId = ""
  category = ""
  categoryId = ""
```

### Parameters

| Name | Type | Default | Description |
|:---|:---|:---|:---
| `giscus.repo` | String | - | GitHub repository. Required.
| `giscus.repoId` | String | - | GitHub repository ID. Required.
| `giscus.category` | String | - | Discussions category. Required.
| `giscus.categoryId` | String | - | Discussions category ID. Required.
| `giscus.theme` | String | - | Left it empty if you want to follow the theme mode.
| `giscus.mapping` | String | `pathname` | The mapping between blog posts and GitHub discussions: `pathname`, `url`, `title` and `og:title`.
| `giscus.inputPosition` | String | `top` | The input position: `top` or `bottom`.
| `giscus.reactions` | Boolean | `true` | Turn on/off the reactions.
| `giscus.metadata` | Boolean | `false` | Emit discussion metadata.
| `giscus.lang` | String | - | Specify language, default to site language.
| `giscus.lazyLoading` | Boolean | `true` | Enable lazy loading.

## Custom Comments Widget

We don't intend to support all comments widgets, but don't worry, you can customize your own comments widget.

> You will need to disable the others before creating your own comments widget.

```bash
mkdir -p layouts/partials/post/comments
echo "MY COMMENTS WIDGET" > layouts/partials/post/comments/custom.html
```

In the meantime, you may need to introduce third-party assets, which can be solved by [customizing assets]({{< ref "/docs/advanced/custom-assets" >}}) or [Hooks]({{< ref "/docs/advanced/hooks" >}}) easily.
