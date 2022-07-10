+++
# type = "docs"
title = "Upgradation"
date = 2022-06-25T22:15:02+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = []
tags = []
series = ["Docs"]
images = []
authors = ["RazonYang"]
+++

This article explains how to upgrade the theme correctly.

<!--more-->

## Versions

Before upgrading, it is necessary to introduce what a version is. In addition to the relative stable versions listed in [Releases](https://github.com/razonyang/hugo-theme-bootstrap/releases), you can use a branch such as `master`, `develop`, or even choose a certain `commit`.

> This article will use the `[version]` placeholder to represent the version, just replace it with the version you want to install.

## Upgrade

Please choose the upgrade step depending on the installation method: [Git Submodule](#git-submodule) and [Hugo Module](#hugo-module).

> Note that no matter which install method you use, you will always end up needing to pull and install dependencies via `hugo mod npm pack` and `npm install`.

### Git Submodule

{{% code/upgradation-git-submodule %}}

- `git fetch` pull the latest branch and tag information form the theme repository.
- `git checkout [version]` switch to the `[version]` version.
- `hugo mod npm pack` and `npm install` to pull and install the latest dependencies form the theme.

### Hugo Module

{{% code/upgradation-hugo-module %}}

- `hugo mod tidy` clean up any redundant dependencies.
- `hugo mod npm pack` and `npm install` pull and install the latest dependencies form the theme.
