+++
title = "Install via Git Submodule"
linkTitle = "Git Submodule"
date = 2021-12-04T10:43:39+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
]
tags = [
  "Installation",
  "Upgrade",
  "Git submodule"
]
series = [
  "Docs"
]
images = []
weight = 100
+++

This article refers to the traditional installation method of cloning the theme locally as Git submodule.
It describes how to install, upgrade the theme, and write new articles.
While this installation method is still widely used, we recommend to install the theme as [Hugo module]({{< ref "/docs/installation/hugo-module" >}}).

## Installation

### Create a New Site from Scratch

```shell
$ hugo new site myblog
$ cd myblog
$ git init
$ git submodule add https://github.com/razonyang/hugo-theme-bootstrap themes/hugo-theme-bootstrap
$ cp -a themes/hugo-theme-bootstrap/exampleSite/* .
$ hugo mod npm pack
$ npm install
$ hugo server
```

> If you're using Windows, use `xcopy .\themes\hugo-theme-bootstrap\exampleSite /E` instead.

Now, at the top of your `config/_default/config.toml, remove the hash sign at the beginning of the `theme =` line in order to activate your theme:

```toml
theme = "hugo-theme-bootstrap"   # when adding theme as git submodule
```

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
$ hugo mod npm pack
$ npm install
$ hugo server
```

> If you're making a fresh clone, you will be need to update your submodule via `git submodule update --init --recursive` or clone with submodule `git clone --recursive <repo>`.

## Upgrade

```shell
$ cd themes/hugo-theme-bootstrap
$ git fetch
$ git checkout [version]
$ cd ../../
$ hugo mod npm pack
$ git add themes/hugo-theme-bootstrap package.json
$ git commit -m 'Upgrade the theme'
```

- Replace the `[version]` with the latest version. The version can be listed by `git tag -l | sort -rV`.
- You can also checkout the `master` branch for getting the latest commit.
