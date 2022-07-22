+++
# type = "docs"
title = "部署于 Netlify"
linkTitle = "Netlify"
date = 2022-07-12T14:20:49+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["部署"]
tags = ["Netlify"]
series = ["文档"]
images = []
+++

本文将介绍如何部署站点于 [Netlify](https://www.netlify.com/)。

<!--more-->

## Netlify Configuration

于根目录创建 `netlify.toml` 文件：

```toml
{{% code/deployment-netlify-config %}}
```

> 也可以参考[新手模板 Netlify Configuration](https://github.com/razonyang/hugo-theme-bootstrap-skeleton/blob/main/netlify.toml)。
