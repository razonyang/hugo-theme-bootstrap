+++
# type = "docs"
title = "Deploy to GitHub Pages"
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
categories = ["Deployment"]
tags = ["GitHub Pages", "GitHub Actions"]
series = ["Docs"]
images = []
+++

This article explains how to deploy sites to [GitHub Pages](https://pages.github.com/) using GitHub Actions.

<!--more-->

## Workflow

Create `.github/workflows/gh-pages.yml` in the site root.

```yaml
{{% code/deployment-github-pages-workflow %}}
```

> See also [Starter Template GitHub Pages Workflow](https://github.com/razonyang/hugo-theme-bootstrap-skeleton/blob/main/.github/workflows/gh-pages.yml)。
