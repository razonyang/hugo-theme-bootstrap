+++
# type = "docs"
title = "Building a Docker Image"
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
categories = ["Deployment"]
tags = ["Docker", "Nginx"]
series = ["Docs"]
images = []
+++

This article will detail how to build a Docker image.

<!--more-->

## Principle

1. Use Hugo to build the site and generate static files.
1. Use Nginx as the server to handle requests.

## Dockerfile

Create a `Dockerfile` in the site root.

```docker {title="Dockerfile"}
{{% code/deployment-docker-dockerfile %}}
```

- There are two stages to the build, a build stage and a release stage. The release stage contains only the generated static files, keeping the size of the Docker image as small as possible.
- If you have `defaultContentLanguageInSubdir` enabled, please uncomment and modify it on demand.
- The `HUGO_BASEURL` parameter is used to specify the `baseURL` of the site during the build, and is generally used when the `baseURL` is different from the configuration, so you can remove it yourself if you don't need it.
- `HUGO_MODULE_PROXY` and `NPM_CONFIG_REGISTRY` are optional build parameters that can be removed if not needed.

## Nginx

Create a `deploy/nginx/default.conf` in the site root:

```nginx {title="deploy/nginx/default.conf"}
{{% code/deployment-docker-nginx %}}
```

## Build

```bash
{{% code/deployment-docker-build %}}
```

- `mysite`: the image name.
- `HUGO_BASEURL`：the `baseURL`.

For users located in China mainland, you need to specify `HUGO_MODULE_PROXY` and `NPM_CONFIG_REGISTRY` to build the image successfully and quickly:

```bash
{{% code/deployment-docker-build-china %}}
```

## Deployment

There are many ways to deploy Docker image, such as `docker run`, `k8s`, etc. This article will only explain `docker run`.

### Run

```bash
{{% code/deployment-docker-run %}}
```

> For local testing, you need to change the `baseURL` parameter or the `HUGO_BASEURL` build parameter, e.g. `http://localhost:2333`.

### Stop

```bash
{{% code/deployment-docker-stop %}}
```

### Start

```bash
{{% code/deployment-docker-start %}}
```

### Remove

```bash
{{% code/deployment-docker-remove %}}
```
