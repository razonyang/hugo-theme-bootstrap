+++
title = "Getting Started"
date = 2021-12-04T10:43:39+08:00
featured = true
comment = true
toc = true
reward = true
pinned = true
categories = [
]
tags = [
  "Installation",
  "Upgrade"
]
series = [
  "Docs"
]
images = []
[menu.footer]
  parent = "docs"
  weight = 1
+++

This article describes how to install, upgrade the theme, and write new articles.

<!--more-->

## Installation

### Create a New Site from Scratch

```shell
$ hugo new site myblog
$ cd myblog
$ git init
$ git submodule add https://github.com/razonyang/hugo-theme-bootstrap themes/hugo-theme-bootstrap
$ cp -a themes/hugo-theme-bootstrap/exampleSite/* .
$ hugo server
```

> If you're using Windows, use `xcopy .\themes\hugo-theme-bootstrap\exampleSite /E` instead.

### Install on an existing site

```shell
$ cd myblog
$ git submodule add https://github.com/razonyang/hugo-theme-bootstrap themes/hugo-theme-bootstrap
$ mkdir config
$ cp -a themes/hugo-theme-bootstrap/exampleSite/config/* ./config
$ cp -r themes/hugo-theme-bootstrap/exampleSite/content/about/ \
  themes/hugo-theme-bootstrap/exampleSite/content/archives/ \
  themes/hugo-theme-bootstrap/exampleSite/content/categories/ \
  themes/hugo-theme-bootstrap/exampleSite/content/contact/ \
  themes/hugo-theme-bootstrap/exampleSite/content/offline/ \
  themes/hugo-theme-bootstrap/exampleSite/content/search/ \
  themes/hugo-theme-bootstrap/exampleSite/content/series/ \
  themes/hugo-theme-bootstrap/exampleSite/content/tags/ \
  ./content
$ hugo server
```

> If you're making a fresh clone, you will be need to update your submodule via `git submodule update --init --recursive` or clone with submodule `git clone --recursive <repo>`.

## Upgrade

```shell
$ cd themes/hugo-theme-bootstrap
$ git fetch
$ git checkout [version]
$ cd ../../
$ git add themes/hugo-theme-bootstrap
$ git commit -m 'Upgrade the theme'
```

- Replace the `[version]` with the latest version. The version can be listed by `git tag -l | sort -rV`.
- You can also checkout the `master` branch for getting the latest commit.

## Write Articles

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

- [Tweak Configuration]({{< ref "/posts/configuration" >}})
- [Menu]({{< ref "/posts/menu" >}})
- [Look and Feel]({{< ref "/posts/look-and-feel" >}})
