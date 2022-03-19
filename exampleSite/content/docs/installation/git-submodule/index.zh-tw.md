+++
title = "通過 Git Submodule 安裝"
linkTitle = "Git Submodule"
date = 2021-12-04T10:43:39+08:00
featured = true
comment = true
toc = true
reward = true
categories = [
  ""
]
tags = [
  "安裝",
  "升級"
]
series = [
  "檔案"
]
images = []
weight = 100
+++

This article refers to the traditional installation method of cloning the theme locally as Git submodule.
It describes how to install, upgrade the theme, and write new articles.
While this installation method is still widely used, we recommend to install the theme as [Hugo module]({{< ref "/docs/installation/hugo-module" >}}).

## 安裝

### 從頭開始創建站點

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

> 如果你使用的是 Windows，請改用 `xcopy .\themes\hugo-theme-bootstrap\exampleSite /E`。

### 安裝到已有站點

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

> 如果你重新尅隆倉庫，你將需要通過 `git submodule update --init --recursive` 更新 submodule，或者 `git clone --recursive <repo>`。

## 升級

```shell
$ cd themes/hugo-theme-bootstrap
$ git fetch
$ git checkout [version]
$ cd ../../
$ hugo mod npm pack
$ git add themes/hugo-theme-bootstrap package.json
$ git commit -m 'Upgrade the theme'
```

- 將 `[version]` 替換為最新的版本。所有版本可以通過 `git tag -l | sort -rV` 列出。
- 你也可以直接使用 `master` 分支以獲取最新的提交。
