+++
# type = "docs"
title = "部署於 GitHub Pages"
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
series = ["文檔"]
images = []
+++

本文將介紹如何使用 GitHub Actions 部署站點到 [GitHub Pages](https://pages.github.com/)。

<!--more-->

## Workflow

於根目錄創建 Workflow `.github/workflows/gh-pages.yml`：

```yaml
{{% code/deployment-github-pages-workflow %}}
```

> 也可以參考[新手模板的 GitHub Pages Workflow](https://github.com/razonyang/hugo-theme-bootstrap-skeleton/blob/main/.github/workflows/gh-pages.yml)。
