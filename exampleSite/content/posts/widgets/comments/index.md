+++
title = "Comments Widget"
date = 2021-11-27T19:54:29+08:00
featured = true
comment = true
toc = true
reward = true
categories = [
  "Comments"
  "Widget"
]
tags = [
  "Disqus",
  "Utterances"
]
series = [
  "Docs"
]
images = []
[menu.footer]
  parent = "features"
  weight = 7
  pre = '<i class="fas fa-fw fa-comments"></i>'
+++

[Disqus](https://disqus.com/) and [Utterances](https://utteranc.es/) comments widgets are supported out of box.
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

## Custom Comments Widget

We don't intend to support all comments widgets, but don't worry, you can customize your own comments widget.

> You will need to disable the others before creating your own comments widget.

```shell
mkdir -p layouts/partials/post/comments
echo "MY COMMENTS WIDGET" > layouts/partials/post/comments/custom.html
```

In the meantime, you may need to introduce third-party assets, which can be solved by [customizing assets]({{< ref "/posts/custom-assets" >}}) or [Hooks]({{< ref "/posts/hooks" >}}) easily.
