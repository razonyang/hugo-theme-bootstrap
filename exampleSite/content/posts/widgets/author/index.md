+++
title = "Author Widget"
date = 2021-12-03T11:10:19+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "Widget"
]
tags = [
]
series = [
  "Docs"
]
images = []
+++

The author widget is located in the sidebar, in order to introduce yourself briefly.

<!--more-->

## Site Configuration

The configuration file is located in `config/_default/author.toml` by default.
You can turn it off by removing the `author` configuration.

| Name | Type | Default | Description
|---|:-:|:-:|---
| `author` | Object | - | Author profile shown in sidebar.
| `author.name` | String | - | Name.
| `author.avatar` | String | `images/profile.webp` | Avatar.
| `author.bio` | String | - | Bio.
| `author.company` | String | - | Company.
| `author.location` | String | - | Location.
| `author.about` | String | - | The external about page. The internal about page will be used if not set.
| `author.params` | Object | - |
| `author.params.layout` | String | - | Optional values: `compact`.
| `author.social` | Object | - | [Social Links]({{< ref "/posts/widgets/social-links" >}}).
