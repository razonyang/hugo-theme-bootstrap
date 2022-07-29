+++
# type = "docs"
title = "Deploy on Cloudflare Pages"
linkTitle = "Cloudflare Pages"
date = 2022-07-12T20:06:24+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["Deployment"]
tags = ["Cloudflare Pages"]
series = ["Docs"]
images = []
+++

This article show you how to deploy your site to [Cloudflare Pages](https://pages.cloudflare.com/).

<!--more-->

## Creating a Project

We'll start by creating a Git project and filling in the appropriate information.

## Build Command

```bash
npm i && hugo --gc --minify --enableGitInfo -b https://hbs-skeleton.pages.dev
```

1. `npm i` is a shortcut to `npm install`, which installs the dependencies used during the site build.
1. `-b https://hbs-skeleton.pages.dev` specifies `baseURL`, please replace it yourself. You can also save it to a configuration file instead of specifying it in the build command.

## Environment Variables

| Name | Value |
|---|---|
| `HUGO_VERSION` | `0.101.0` |
| `NODE_VERSION` | `16` |

## 404 Page

Cloudflare is smart enough to use the best matching 404 pages, even for multilingual sites, and works without additional configurations.
