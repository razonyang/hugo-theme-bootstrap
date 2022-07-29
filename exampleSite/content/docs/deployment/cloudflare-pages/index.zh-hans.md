+++
# type = "docs"
title = "部署于 Cloudflare Pages"
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
categories = ["部署"]
tags = ["Cloudflare Pages"]
series = ["文档"]
images = []
+++

本文将介绍于 [Cloudflare Pages](https://pages.cloudflare.com/) 上部署站点。

<!--more-->

## 创建项目

我们先创建一个 Git 项目，并填写相应的信息。

## 构建命令

```bash
npm i && hugo --gc --minify --enableGitInfo -b https://hbs-skeleton.pages.dev
```

1. `npm i` 是 `npm install` 的快捷键，其安装站点构建期间所用到的依赖。
1. `-b https://hbs-skeleton.pages.dev` 指定 `baseURL`，请自行替换。你也可以将其保存到配置文件，而无需于构建命令中指定。

## 环境变量

| Name | Value |
|---|---|
| `HUGO_VERSION` | `0.101.0` |
| `NODE_VERSION` | `16` |

## 404 页面

Cloudflare 足够智能地使用最匹配的 404 页面，即便是多语言站点，也能正常工作，而无需额外的配置。
