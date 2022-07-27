+++
# type = "docs"
title = "部署概览"
linkTitle = "概览"
date = 2022-07-27T18:00:25+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["部署"]
tags = []
series = ["文档"]
images = []
navWeight = 10
+++

在本节中，我们将谈论部署的关键点，以避免部署期间的大多数问题。

<!--more-->

## 构建工具

如[先决条件]({{< ref "docs/getting-started/prerequisites" >}})所提到的，你需要于部署环境设置这些工具。

## 安装依赖

我们使用 NPM 来管理主题的依赖，有必要在部署环境中安装依赖，因为我们**不应该**提交 `node_modules` 文件夹。

```bash
$ npm i
```

> `npm i` 等同于 `npm install`。

> `package.json` 和 `package-lock.json` 必须被提交，npm依赖于前者，后者将节省安装时间。

## 构建站点

安装完依赖后，是时候构建站点了。

```bash
$ hugo --gc --minify
```

- `--minify` 最小化最终的 HTML 文件。

> 你可以提供 `-b` 标志修改 `baseURL`。

该命令生成站点并默认存放到 `public` 目录。

## 部署站点

此步骤依赖于你使用的部署方式。

### 部署方式

1. [Docker]({{< ref "docs/deployment/docker" >}})
1. [GitHub Pages]({{< ref "docs/deployment/github-pages" >}})
1. [Netlify]({{< ref "docs/deployment/netlify" >}})
1. [Cloudflare Pages]({{< ref "docs/deployment/cloudflare-pages" >}})
1. 更多部署方式可参阅 [Hosting & Deployment](https://gohugo.io/hosting-and-deployment/)

## 延伸阅读

- [性能]({{< ref "docs/advanced/performance" >}})
