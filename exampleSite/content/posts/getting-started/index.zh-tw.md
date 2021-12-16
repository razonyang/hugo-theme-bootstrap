+++
title = "快速入門"
date = 2021-12-04T10:43:39+08:00
featured = true
comment = true
toc = true
reward = true
pinned = true
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
[menu.footer]
  parent = "docs"
  weight = 1
+++

本文將介紹如何安裝、升級本主題，以及書寫新的文章。

<!--more-->

## 安裝

### 從頭開始創建站點

```shell
$ hugo new site myblog
$ cd myblog
$ git init
$ git submodule add https://github.com/razonyang/hugo-theme-bootstrap themes/hugo-theme-bootstrap
$ cp -a themes/hugo-theme-bootstrap/exampleSite/* .
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
$ hugo server
```

> 如果你重新尅隆倉庫，你將需要通過 `git submodule update --init --recursive` 更新 submodule，或者 `git clone --recursive <repo>`。

## 升級

```shell
$ cd themes/hugo-theme-bootstrap
$ git fetch
$ git checkout [version]
$ cd ../../
$ git add themes/hugo-theme-bootstrap
$ git commit -m 'Upgrade the theme'
```

- 將 `[version]` 替換為最新的版本。所有版本可以通過 `git tag -l | sort -rV` 列出。
- 你也可以直接使用 `master` 分支以獲取最新的提交。

## 書寫文章

> 假設默認語言為 `en`。

```shell
$ hugo new posts/new-post/index.md
```

上述命令創建了一篇英文文章，同樣的，我們也可以創建一篇簡體中文的文章：

```shell
$ hugo new posts/new-post/index.zh-cn.md
```

> 請注意：創建的文章一般處於草稿狀態，本地預覽時，`hugo server` 需要指定 `-D` 參數才能預覽草稿文章。文章發佈時，需要將 `draft` 改為 `false`，或者直接移除 `draft` 參數。

> 你可以將文章放在任何地方，比如 `blog`，只需要將 `blog` 附加到 `mainSections` 參數：`mainSections = ["posts", "blog"]`。

## 下一步

- [調整配置]({{< ref "/posts/configuration" >}})
- [菜單]({{< ref "/posts/menu" >}})
- [觀感]({{< ref "/posts/look-and-feel" >}})
