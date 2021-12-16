+++
title = "Custom Assets"
date = 2021-11-28T16:00:49+08:00
featured = true
comment = true
toc = true
reward = true
categories = [
  "Assets"
]
tags = [
  "CSS",
  "JS"
]
series = [
  "Docs"
]
images = []
[menu.footer]
  parent = "docs"
  weight = 6
+++

As a customizable theme, it provides the ability to customize assets, whether it is customizing CSS and JS or introducing third-party CSS and JS.

<!--more-->

## Internal Assets

Just create and edit the files `assets/css/custom.css` and `assets/js/custom.js`.

> These files will be bundled into one for reducing HTTP requests.

## External Assets

Any external CSS and JS resources can be imported by the `customCSS` and `customJS` parameters.

```toml
customCSS = [
  "external-foo.css",
  "external-bar.css"
]

customJS = [
  "external-foo.js",
  "external-bar.js"
]
```
