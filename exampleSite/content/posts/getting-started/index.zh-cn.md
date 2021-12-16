+++
title = "快速入门"
date = 2021-12-04T10:43:39+08:00
featured = true
comment = true
toc = true
reward = true
pinned = true
categories = [
]
tags = [
  "安装",
  "升级"
]
series = [
  "文档"
]
images = []
[menu.footer]
  parent = "docs"
  weight = 1
+++

本文将介绍如何安装、升级本主题，以及书写新的文章。

<!--more-->

## 安装

### 从头开始创建站点

```shell
$ hugo new site myblog
$ cd myblog
$ git init
$ git submodule add https://github.com/razonyang/hugo-theme-bootstrap themes/hugo-theme-bootstrap
$ cp -a themes/hugo-theme-bootstrap/exampleSite/* .
$ hugo server
```

> 如果你使用的是 Windows，请改用 `xcopy .\themes\hugo-theme-bootstrap\exampleSite /E`。

### 安装到已有站点

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

> 如果你重新克隆仓库，你将需要通过 `git submodule update --init --recursive` 更新 submodule，或者 `git clone --recursive <repo>`。

## 升级

```shell
$ cd themes/hugo-theme-bootstrap
$ git fetch
$ git checkout [version]
$ cd ../../
$ git add themes/hugo-theme-bootstrap
$ git commit -m 'Upgrade the theme'
```

- 将 `[version]` 替换为最新的版本。所有版本可以通过命令 `git tag -l | sort -rV` 列出。
- 你也可以直接使用 `master` 分支以获取最新的修改。

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

- [调整配置]({{< ref "/posts/configuration" >}})
- [菜单]({{< ref "/posts/menu" >}})
- [观感]({{< ref "/posts/look-and-feel" >}})
