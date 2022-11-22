+++
# type = "docs"
title = "升级"
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
series = ["文档"]
images = []
authors = ["RazonYang"]
+++

本文将介绍如何正确地升级主题版本。

<!--more-->

## Version

在升级之前，需要先了解下什么是版本。除了 [Releases](https://github.com/razonyang/hugo-theme-bootstrap/releases) 列出的相对稳定的版本外，你还可以使用某个分支，如：`master`、`develop` 等，甚至还可以选择某个 `commit`。

> 本文将使用 `[version]` 占位符代表版本，请自行替换为要安装的版本即可。

## 升级

请根据安装方式的不同选择对应的升级步骤：[Git Submodule](#git-submodule) 和 [Hugo Module](#hugo-module)。

> 请注意，不管使用的是哪种安装方式，你最后总是需要通过 `hugo mod npm pack` 和 `npm update` 拉取并更新依赖。

### 额外的依赖

如果你打算添加额外的依赖，则需要将其定义在 `package.hugo.json`，而非 `package.json`。
这是因为 `hugo mod npm pack` 总是会覆盖 `package.json`，其合并了主题的 `package.hugo.json` 和你站点的 `package.hugo.json`。

### Git Submodule

{{% code/upgradation-git-submodule %}}

- `git fetch` 获取主题仓库最新的分支和标签信息。
- `git checkout [version]` 切换到 `[version]` 版本。
- `hugo mod npm pack` 和 `npm update` 拉取并安装主题最新的依赖。

### Hugo Module

{{% code/upgradation-hugo-module %}}

- `hugo mod tidy` 清理多余的依赖。
- `hugo mod npm pack` 和 `npm update` 拉取并安装主题最新的依赖。
