+++
# type = "docs"
title = "升級"
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
series = ["文檔"]
images = []
authors = ["RazonYang"]
+++

本文將介紹如何正確地升級主題版本。

<!--more-->

## 版本

在升級之前，需要先了解下什麽是版本。除了 [Releases](https://github.com/razonyang/hugo-theme-bootstrap/releases) 列出的相對穩定的版本外，你還可以使用某個分支，如：`master`、`develop` 等，甚至還可以選擇某個 `commit`。

> 本文將使用 `[version]` 占位符代表版本，請自行替換為要安裝的版本即可。

### 額外的依賴

如果你打算添加額外的依賴，則需要將其定義在 `package.hugo.json`，而非 `package.json`。
這是因為 `hugo mod npm pack` 總是會覆蓋 `package.json`，其合併了主題的 `package.hugo.json` 和你站點的 `package.hugo.json`。

## 升級

請根據安裝方式的不同選擇對應的升級步驟：[Git Submodule](#git-submodule) 和 [Hugo Module](#hugo-module)。

> 請註意，不管使用的是哪種安裝方式，你最後總是需要通過 `hugo mod npm pack` 和 `npm update` 拉取並更新依賴。

### Git Submodule

{{% code/upgradation-git-submodule %}}

- `git fetch` 獲取主題倉庫最新的分支和標簽信息。
- `git checkout [version]` 切換到 `[version]` 版本。
- `hugo mod npm pack` 和 `npm update` 拉取並安裝主題最新的依賴。

### Hugo Module

{{% code/upgradation-hugo-module %}}

- `hugo mod tidy` 清理多余的依賴。
- `hugo mod npm pack` 和 `npm update` 拉取並安裝主題最新的依賴。
