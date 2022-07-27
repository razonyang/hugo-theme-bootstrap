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
  "文檔"
]
images = []
navWeight = 80
authors = ["RazonYang"]
+++

This article refers to the traditional installation method of cloning the theme locally as Git submodule.
While this installation method is still widely used, we recommend to install the theme as [Hugo module]({{< ref "/docs/getting-started/installation/hugo-module" >}}).

## 從頭開始創建站點

```bash
$ git clone https://github.com/razonyang/hugo-theme-bootstrap-skeleton myblog
$ cd myblog
$ git submodule add https://github.com/razonyang/hugo-theme-bootstrap themes/hugo-theme-bootstrap
$ sed -i "s/theme:.*/theme: hugo-theme-bootstrap/g" config/_default/config.yaml
$ rm go.mod go.sum
$ hugo mod npm pack
$ npm install
$ hugo server
```

> 如果你使用的是 Windows，請改用 `xcopy .\themes\hugo-theme-bootstrap\exampleSite /E`。

> `sed` replaces the `theme: github.com/razonyang/hugo-theme-bootstrap` with `theme: hugo-theme-bootstrap`.

## 安裝到已有站點

```bash
$ cd myblog
$ git submodule add https://github.com/razonyang/hugo-theme-bootstrap themes/hugo-theme-bootstrap
$ git clone https://github.com/razonyang/hugo-theme-bootstrap-skeleton /tmp/hbs-skeleton
$ mkdir config
$ cp -a /tmp/hbs-skeleton/config/* ./config
$ cp -r /tmp/hbs-skeleton/content/* ./content
$ cp -r /tmp/hbs-skeleton/archetypes/* ./archetypes
$ cp -r /tmp/hbs-skeleton/static/* ./static
$ cp -r /tmp/hbs-skeleton/assets/* ./assets
$ sed -i "s/theme:.*/theme: hugo-theme-bootstrap/g" config/_default/config.yaml
$ hugo mod npm pack
$ npm install
$ hugo server
```

> 如果你重新尅隆倉庫，你將需要通過 `git submodule update --init --recursive` 更新 submodule，或者 `git clone --recursive <repo>`。
