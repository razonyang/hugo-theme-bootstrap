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
navWeight = 80
authors = ["RazonYang"]
+++

This article refers to the traditional installation method of cloning the theme locally as Git submodule.
While this installation method is still widely used, we recommend to install the theme as [Hugo module]({{< ref "/docs/getting-started/installation/hugo-module" >}}).

## Create a New Site from Scratch

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

> If you're using Windows, use `xcopy .\themes\hugo-theme-bootstrap\exampleSite /E` instead.

> `sed` replaces the `theme: github.com/razonyang/hugo-theme-bootstrap` with `theme: hugo-theme-bootstrap`.


## Install on an existing site

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

> If you're making a fresh clone, you will be need to update your submodule via `git submodule update --init --recursive` or clone with submodule `git clone --recursive <repo>`.
