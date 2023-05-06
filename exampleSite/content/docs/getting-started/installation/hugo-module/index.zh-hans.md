+++
title = "通过 Hugo Module 安装"
linkTitle = "Hugo Module"
date = 2022-02-26T17:10:39+02:00
featured = false
comment = true
toc = true
reward = true
categories = [
]
tags = [
  "Installation",
  "Upgrade",
  "Hugo module"
]
series = [
  "文档"
]
images = []
navWeight = 90
authors = ["RazonYang"]
+++

This article refers to the modern, up-to-date installation method of installing the theme locally as Hugo module.

## Proxy (Optional)

If you're located at China mainland without VPN, the Hugo module download may fail.

There are two proxies for this: [GOPROXY.CN](https://goproxy.cn) and [GOPROXY.IO](https://goproxy.io).

```bash
$ export HUGO_MODULE_PROXY=https://goproxy.cn
```

> Please note that, Hugo doesn't respect the `GOPROXY` env var, please use `HUGO_MODULE_PROXY` instead.

You can also set the `module.proxy` instead of using env var.

{{< code-toggle filename="config" >}}
module:
  proxy: https://goproxy.cn
{{</ code-toggle >}}

## Install a new site from scratch

Please use the [starter template](https://github.com/razonyang/hugo-theme-bootstrap-skeleton) for your new site.

## Install on an existing site

### Turn your existing site into a Hugo module

```bash
$ cd my-blog
$ hugo mod init github.com/me/my-blog
```

### Declare `hugo-theme-bootstrap` module as a site dependency

```bash
$ hugo mod get github.com/razonyang/hugo-theme-bootstrap@[version]
```

The `[version]` can be one of [Releases](https://github.com/razonyang/hugo-theme-bootstrap/releases), branches or even commits.

> Replace `[version]` with `master` for getting latest changes.

### Copy example site content into your site

- Clone the `hugo-theme-bootstrap-skeleton` repo into a temporary directory:

```bash
$ git clone https://github.com/razonyang/hugo-theme-bootstrap-skeleton /tmp/hbs-skeleton
```

- Copy example site configuration and content into your site:

```bash
$ mkdir config
$ cp -a /tmp/hbs-skeleton/config/* ./config
$ cp -r /tmp/hbs-skeleton/content/* ./content
$ cp -r /tmp/hbs-skeleton/archetypes/* ./archetypes
$ cp -r /tmp/hbs-skeleton/static/* ./static
$ cp -r /tmp/hbs-skeleton/assets/* ./assets
```

- Delete the repo from your temporary directory again:

```bash
$ rm -rf /tmp/hbs-skeleton/
```

### Pull in dependencies via npm

- Use **n**ode **p**ackage **m**anager [`npm`](https://nodejs.org/en/download/) to pull in dependencies for this theme:

```bash
$ hugo mod npm pack
$ npm install
```

### Preview your site

Start hugo's built-in webserver, and then navigate to `http://localhost:1313/`.

```bash
$ hugo server
```
