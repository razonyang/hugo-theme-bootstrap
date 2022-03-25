+++
title = "Getting Started"
date = 2021-12-04T10:43:39+08:00
featured = true
comment = true
toc = true
reward = true
pinned = true
categories = [
]
tags = [
  "Installation",
  "Prerequisites"
]
series = [
  "Docs"
]
images = []
weight = 1000
aliases = [
  "/en/posts/getting-started"
]
[menu.footer]
  parent = "docs"
  weight = 1
+++

HBS(Hugo Bootstrap) is a fast, responsive and feature-rich Hugo theme for personal blog and documentations.
Please make sure you [meet the prerequisites](#prerequisites) prior to installing the theme.

<!--more-->

## Prerequisites

- [Git](https://git-scm.com/downloads).
- [Hugo](https://gohugo.io/getting-started/installing/): **extended** version `0.84.0` or above.
- [npm](https://nodejs.org/en/download/): used for installing CSS and JS dependencies.
- [Go](https://go.dev/dl/): version `1.12` or above, required only when installed as a [Hugo Module]({{< ref "/docs/installation/hugo-module" >}}).

> We recommend using the latest version of those tools.

### Configuration

Since `0.68.0`, HBS requires the following configurations are be set.

{{< code-toggle filename="config" >}}
[build]
  writeStats = true
{{</ code-toggle >}}

## Installation Methods

- [Git Submodule]({{< ref "/docs/installation/git-submodule" >}}).
- [Hugo Module]({{< ref "/docs/installation/hugo-module" >}}).

## Up Next

- [Tweak Configuration]({{< ref "/docs/configuration" >}})
- [Menu]({{< ref "/docs/menu" >}})
- [Look and Feel]({{< ref "/docs/look-and-feel" >}})
- [Adding content]({{< ref "/docs/content" >}})
