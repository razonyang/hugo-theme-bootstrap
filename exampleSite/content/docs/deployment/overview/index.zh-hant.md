+++
# type = "docs"
title = "部署概覽"
linkTitle = "概覽"
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
series = ["文檔"]
images = []
navWeight = 10
+++

在本節中，我們將談論部署的關鍵點，以避免部署期間的大多數問題。

<!--more-->

## 構建工具

如[先決條件]({{< ref "docs/getting-started/prerequisites" >}})所提到的，你需要於部署環境設置這些工具。

## 安裝依賴

我們使用 NPM 來管理主題的依賴，有必要在部署環境中安裝依賴，因為我們**不應該**提交 `node_modules` 文件夾。

```bash
$ npm i
```

> `npm i` 等同於 `npm install`。

> `package.json` 和 `package-lock.json` 必須被提交，npm依賴於前者，後者將節省安裝時間。

## 構建站點

安裝完依賴後，是時候構建站點了。

```bash
$ hugo --gc --minify
```

- `--minify` 最小化最終的 HTML 文件。

> 你可以提供 `-b` 標誌修改 `baseURL`。

該命令生成站點並默認存放到 `public` 目錄。

## 部署站點

此步驟依賴於你使用的部署方式。

### 部署方式

1. [Docker]({{< ref "docs/deployment/docker" >}})
1. [GitHub Pages]({{< ref "docs/deployment/github-pages" >}})
1. [Netlify]({{< ref "docs/deployment/netlify" >}})
1. [Cloudflare Pages]({{< ref "docs/deployment/cloudflare-pages" >}})
1. 更多部署方式可參閱 [Hosting & Deployment](https://gohugo.io/hosting-and-deployment/)

## 延伸閱讀

- [性能]({{< ref "docs/advanced/performance" >}})
