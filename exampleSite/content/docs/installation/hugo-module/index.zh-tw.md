+++
title = "通過 via Hugo Module 安裝"
linkTitle = "Hugo Module"
date = 2022-02-26T17:10:39+02:00
featured = true
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
  "Docs"
]
images = []
weight = 90
+++

This article refers to the modern, up-to-date installation method of installing the theme locally as Hugo module.
It describes how to install, upgrade the theme, and write new articles.

## Installation

### Install a new site from scratch

#### Step 1: Create skeleton site

- Create and enter new site:

```shell
$ hugo new site my-new-blog
$ cd my-new-blog
```

#### Step 2: Turn your new site into a Hugo module:

```shell
$ hugo mod init github.com/me/my-new-blog
```

#### Step 3: Declare `hugo-theme-bootstrap` module as a site dependency:

```shell
$ hugo mod get github.com/razonyang/hugo-theme-bootstrap
```

#### Step 4 (optional): Copy example site content into your site

- Clone the `hugo-theme-bootstrap` repo into a temporary directory:

```shell
$ git clone https://github.com/razonyang/hugo-theme-bootstrap /tmp/hugo-theme-bootstrap
```

> If you're using Windows, use `git clone https://github.com/razonyang/hugo-theme-bootstrap %temp%\hugo-theme-bootstrap` instead.

- Copy example site content:

```shell
$ cp -a /tmp/hugo-theme-bootstrap/exampleSite/* .
```

> If you're using Windows, use `xcopy %TEMP%\hugo-theme-bootstrap\exampleSite /E` instead.

- Remove your file `config.toml`

```shell
rm config.toml
```

- Delete the repo from your temporary directory again:

```shell
$ rm -rf /tmp/hugo-theme-bootstrap
```

At the top of your `config/_default/config.toml`, switch the uncommented theme:

```toml
# theme = "hugo-theme-bootstrap" # install via git submodule
theme = "github.com/razonyang/hugo-theme-bootstrap" # install via hugo module
```

#### Step 5: Pull in dependencies via npm

- Use **n**ode **p**ackage **m**anager [`npm`](https://nodejs.org/en/download/) to pull in dependencies for this theme:

```shell
$ hugo mod npm pack
$ npm install
```

#### Step 6: Preview your site

- Start hugo's built-in webserver to [preview](http://localhost:1313/) your website:

```shell
$ hugo server
```

### Install on an existing site

#### Step 1: Turn your existing site into a Hugo module:

```shell
$ cd my-blog
$ hugo mod init github.com/me/my-blog
```

#### Step 2: Declare `hugo-theme-bootstrap` module as a site dependency:

```shell
$ hugo mod get github.com/razonyang/hugo-theme-bootstrap
```

#### Step 3 (optional): Copy example site content into your site

- Clone the `hugo-theme-bootstrap` repo into a temporary directory:

```shell
$ git clone https://github.com/razonyang/hugo-theme-bootstrap /tmp/
```

- Copy example site configuration and content into your site:

```shell
$ mkdir config
$ cp -a /tmp/hugo-theme-bootstrap/exampleSite/config/* ./config
$ cp -r /tmp/hugo-theme-bootstrap/exampleSite/content/about/ \
  /tmp/hugo-theme-bootstrap/exampleSite/content/archives/ \
  /tmp/hugo-theme-bootstrap/exampleSite/content/categories/ \
  /tmp/hugo-theme-bootstrap/exampleSite/content/contact/ \
  /tmp/hugo-theme-bootstrap/exampleSite/content/offline/ \
  /tmp/hugo-theme-bootstrap/exampleSite/content/search/ \
  /tmp/hugo-theme-bootstrap/exampleSite/content/series/ \
  /tmp/hugo-theme-bootstrap/exampleSite/content/tags/ \
  ./content
```

- Delete the repo from your temporary directory again:

```shell
$ rm -rf /tmp/hugo-theme-bootstrap/
```

At the top of your `config/_default/config.toml`, switch the uncommented theme:

```toml
# theme = "hugo-theme-bootstrap" # install via git submodule
theme = "github.com/razonyang/hugo-theme-bootstrap" # install via hugo module
```

#### Step 4: Pull in dependencies via npm

- Use **n**ode **p**ackage **m**anager [`npm`](https://nodejs.org/en/download/) to pull in dependencies for this theme:

```shell
$ hugo mod npm pack
$ npm install
```

#### Step 5: Preview your site

- Start hugo's built-in webserver to [preview](http://localhost:1313/) your website:

```shell
$ hugo server
```

## Theme Upgrade

- Invoke hugo’s module `get` subcommand with the update flag:

```shell
$ cd my-blog
$ hugo mod get -u github.com/razonyang/hugo-theme-bootstrap
```

Hugo will automatically pull in the latest theme version.

> If you want to set your module to a certain version inside the `hugo-theme-bootstrap` theme repo, simply specific the name of the tag representing this version (here: `v0.67.1`) when updating your theme:

```shell
$ hugo mod get -u github.com/razonyang/hugo-theme-bootstrap@v0.67.1
```

> Instead of a version tag, you can also specify a commit hash inside the repo (here: `de4a40f`) when updating your theme:

```shell
$ hugo mod get -u github.com/razonyang/hugo-theme-bootstrap@de4a40f
```
