+++
title = "通过 Git Submodule 安装"
linkTitle = "Git Submodule"
date = 2021-12-04T10:43:39+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
]
tags = [
  "安装",
  "升级",
  "Git submodule"
]
series = [
  "文档"
]
images = []
navWeight = 80
authors = ["RazonYang"]
+++

This article refers to the traditional installation method of cloning the theme locally as Git submodule.
While this installation method is still widely used, we recommend to install the theme as [Hugo module]({{< ref "/docs/getting-started/installation/hugo-module" >}}).

## 从头开始创建站点

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

> 如果你使用的是 Windows，请改用 `xcopy .\themes\hugo-theme-bootstrap\exampleSite /E`。

> `sed` replaces the `theme: github.com/razonyang/hugo-theme-bootstrap` with `theme: hugo-theme-bootstrap`.

## 安装到已有站点

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

> 如果你重新克隆仓库，你将需要通过 `git submodule update --init --recursive` 更新 submodule，或者 `git clone --recursive <repo>`。
