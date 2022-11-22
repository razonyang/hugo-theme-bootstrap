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

> This article will use the `[version]` placeholder to represent the version, just replace it with the version you want to upgrade to.

## Upgrade

Please choose the upgrade step depending on the installation method: [Git Submodule](#git-submodule) and [Hugo Module](#hugo-module).

> Note that no matter which install method you use, you will always end up needing to pull and update dependencies via `hugo mod npm pack` and `npm update`.

### Additional Dependencies

If you intend to add additional dependencies, you need to define it in `package.hugo.json` instead of `package.json`.
That's because the `hugo mod npm pack` will always override the `package.json`, which merges theme's `package.hugo.json` and your site's `package.hugo.json`.

### Git Submodule

{{% code/upgradation-git-submodule %}}

- `git fetch` pull the latest branch and tag information form the theme repository.
- `git checkout [version]` switch to the `[version]` version.
- `hugo mod npm pack` and `npm update` to pull and update the latest dependencies form the theme.

### Hugo Module

{{% code/upgradation-hugo-module %}}

- `hugo mod tidy` clean up any redundant dependencies.
- `hugo mod npm pack` and `npm update` pull and update the latest dependencies form the theme.
