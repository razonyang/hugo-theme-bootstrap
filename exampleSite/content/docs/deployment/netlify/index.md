+++
# type = "docs"
title = "Deploy to Netlify"
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
categories = ["Deployment"]
tags = ["Netlify"]
series = ["Docs"]
images = []
+++

This article shows how to deploy your site to [Netlify](https://www.netlify.com/).

<!--more-->

## Netlify Configuration

Create a `netlify.toml` in the site root：

```toml
{{% code/deployment-netlify-config %}}
```

> See also [Starter Template Netlify Configuration](https://github.com/razonyang/hugo-theme-bootstrap-skeleton/blob/main/netlify.toml).
