+++
# type = "docs"
title = "构建 Docker 镜像"
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
series = ["文档"]
images = []
+++

本文将详细介绍如何构建 Docker 镜像。

<!--more-->

## 原理

1. 使用 Hugo 构建站点，生成静态文件。
1. 使用 Nginx 作为服务器，处理请求。

## Dockerfile

于根目录创建 `Dockerfile`：

```docker {title="Dockerfile"}
{{% code/deployment-docker-dockerfile %}}
```

- 构建一共有两个阶段，一个构建阶段，一个发布阶段。发布阶段仅包含生成的静态文件，尽可能地降低 Docker 镜像大小。
- 如果你开启了 `defaultContentLanguageInSubdir`，请取消对应的注释和按需修改。
- `HUGO_BASEURL` 参数用于构建期间指定站点的 `baseURL`，一般用于 `baseURL` 不同于配置的情况，如果不需要可以自行删除。
- `HUGO_MODULE_PROXY` 和 `NPM_CONFIG_REGISTRY` 都是可选的构建参数，不需要可以自行删除。

## Nginx

于根目录创建 `deploy/nginx/default.conf`：

```nginx {title="deploy/nginx/default.conf"}
{{% code/deployment-docker-nginx %}}
```

## 构建

```bash
{{% code/deployment-docker-build %}}
```

- `mysite`：镜像名称。
- `HUGO_BASEURL`：`baseURL`。

对于位于中国大陆的用户，需要指定 `HUGO_MODULE_PROXY` 和 `NPM_CONFIG_REGISTRY`，以便成功和快速地构建镜像:

```bash
{{% code/deployment-docker-build-china %}}
```

## 部署

Docker 部署方式很多，如 `docker run`，`k8s` 等等，本文仅对 `docker run` 进行说明。

### 创建并启动

```bash
{{% code/deployment-docker-run %}}
```

> 本地测试时，需要修改 `baseURL` 参数或者 `HUGO_BASEURL` 构建参数，如：`http://localhost:2333`。

### 停止

```bash
{{% code/deployment-docker-stop %}}
```

### 启动

```bash
{{% code/deployment-docker-start %}}
```

### 删除

```bash
{{% code/deployment-docker-remove %}}
```
