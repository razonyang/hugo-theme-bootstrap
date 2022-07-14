+++
# type = "docs"
title = "構建 Docker 鏡像"
linkTitle = "Docker"
date = 2022-07-13T10:30:29+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["部署"]
tags = ["Docker", "Nginx"]
series = ["文檔"]
images = []
+++

本文將詳細介紹如何構建 Docker 鏡像。

<!--more-->

## 原理

1. 使用 Hugo 構建站點，生成靜態文件。
1. 使用 Nginx 作為服務器，處理請求。

## Dockerfile

於根目錄創建 `Dockerfile`：

```docker {title="Dockerfile"}
{{% code/deployment-docker-dockerfile %}}
```

- 構建一共有兩個階段，一個構建階段，一個發布階段。發布階段僅包含生成的靜態文件，盡可能地降低 Docker 鏡像大小。
- 如果你開啟了 `defaultContentLanguageInSubdir`，請取消對應的註釋和按需修改。
- `HUGO_BASEURL` 參數用於構建期間指定站點的 `baseURL`，一般用於 `baseURL` 不同於配置的情況，如果不需要可以自行刪除。
- `HUGO_MODULE_PROXY` 和 `NPM_CONFIG_REGISTRY` 都是可選的構建參數，不需要可以自行刪除。

## Nginx

於根目錄創建 `deploy/nginx/default.conf`：

```nginx {title="deploy/nginx/default.conf"}
{{% code/deployment-docker-nginx %}}
```

## 構建

```bash
{{% code/deployment-docker-build %}}
```

- `mysite`：鏡像名稱。
- `HUGO_BASEURL`：`baseURL`。

對於位於中國大陸的用戶，需要指定 `HUGO_MODULE_PROXY` 和 `NPM_CONFIG_REGISTRY`，以便成功和快速地構建鏡像:

```bash
{{% code/deployment-docker-build-china %}}
```

## 部署

Docker 部署方式很多，如 `docker run`，`k8s` 等等，本文僅對 `docker run` 進行說明。

### 創建並啟動

```bash
{{% code/deployment-docker-run %}}
```

> 本地測試時，需要修改 `baseURL` 參數或者 `HUGO_BASEURL` 構建參數，如：`http://localhost:2333`。

### 停止

```bash
{{% code/deployment-docker-stop %}}
```

### 啟動

```bash
{{% code/deployment-docker-start %}}
```

### 刪除

```bash
{{% code/deployment-docker-remove %}}
```
