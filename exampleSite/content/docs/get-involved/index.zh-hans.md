+++
title = "参与我们"
linkTitleIcon = '<i class="fas fa-handshake fa-fw"></i>'
date = 2021-11-27T19:54:29+08:00
comment = true
toc = true
reward = true
categories = [
]
tags = [
]
series = [
  "文档"
]
images = []
aliases = [
  "/zh-cn/posts/get-involved"
]
navWeight = 1
authors = ["RazonYang"]
[menu.main]
  parent = "support"
  weight = 5
  [menu.main.params]
    icon = '<i class="fas fa-handshake fa-fw"></i>'
[menu.footer]
  parent = "support"
  weight = 5
  pre = '<i class="fas fa-handshake fa-fw me-1"></i>'
+++

我们很乐意倾听你的意见和反馈，也欢迎你参与进来。

<!--more-->

## 社区

- [特性请求](https://github.com/razonyang/hugo-theme-bootstrap/issues/new?template=feature_request.yml)
- [Bug 反馈](https://github.com/razonyang/hugo-theme-bootstrap/issues/new?template=bug_report.yml)
- [讨论](https://github.com/razonyang/hugo-theme-bootstrap/discussions): 提问题、分享想法等。

## 贡献

欢迎任何贡献，如文档、Bug 修复和新功能。

### 规则

鉴于易于维护的考虑，我们制定了一些规则。

#### Conventional Commits Specification

请遵循 [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/)。

比如：

- Bug 修复：`fix: correct typos`
- 新特性：`feat: add the foobar parameter`
- 文档：`docs: document the foobar parameter`
- 样式：`style: change the background color to blue`
- 重建资源：`chore: rebuild assets`

### 开发

本主题依赖 `npm` 和 Hugo Pipes，用于生成资源文件：JS、CSS、字体等。

> 其源码放在 `assets` 目录。

#### 安装依赖

```bash
$ cd exampleSite
$ npm install
```

#### 预览

```bash
$ npm run serve
```
