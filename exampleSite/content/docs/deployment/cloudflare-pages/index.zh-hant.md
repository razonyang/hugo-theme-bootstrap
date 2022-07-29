+++
# type = "docs"
title = "部署於 Cloudflare Pages"
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
series = ["文檔"]
images = []
+++

本文將介紹於 [Cloudflare Pages](https://pages.cloudflare.com/) 上部署站點。

<!--more-->

## 創建項目

我們先創建一個 Git 項目，並填寫相應的信息。

## 構建命令

```bash
npm i && hugo --gc --minify --enableGitInfo -b https://hbs-skeleton.pages.dev
```

1. `npm i` 是 `npm install` 的快捷鍵，其安裝站點構建期間所用到的依賴。
1. `-b https://hbs-skeleton.pages.dev` 指定 `baseURL`，請自行替換。你也可以將其保存到配置文件，而無需於構建命令中指定。

## 環境變量

| Name | Value |
|---|---|
| `HUGO_VERSION` | `0.101.0` |
| `NODE_VERSION` | `16` |

## 404 頁面

Cloudflare 足夠智能地使用最匹配的 404 頁面，即便是多語言站點，也能正常工作，而無需額外的配置。
