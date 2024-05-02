+++
# type = "docs"
title = "部署于 GitHub Pages"
linkTitle = "GitHub Pages"
date = 2022-07-13T10:30:23+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["部署"]
tags = ["GitHub Pages", "GitHub Actions"]
series = ["文档"]
images = []
+++

本文将介绍如何使用 GitHub Actions 部署站点到 [GitHub Pages](https://pages.github.com/)。

<!--more-->

## Workflow

于根目录创建 Workflow `.github/workflows/gh-pages.yml`：

{{< page-resource-content "code/workflow" >}}

> 也可以参考[新手模板的 GitHub Pages Workflow](https://github.com/razonyang/hugo-theme-bootstrap-skeleton/blob/main/.github/workflows/gh-pages.yml)。
