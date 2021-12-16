+++
title = "参与我们"
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
[menu.main]
  parent = "support"
  weight = 5
[menu.footer]
  parent = "support"
  weight = 5
+++

我们很乐意倾听你的意见和反馈，也欢迎你参与进来。

<!--more-->

## 社区

- [特性请求](https://github.com/razonyang/hugo-theme-bootstrap/issues/new?template=feature_request.md)
- [Bug 反馈](https://github.com/razonyang/hugo-theme-bootstrap/issues/new?template=bug_report.md)
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

本主题依赖 `npm` 和 `webpack`，用于生成资源文件：JS、CSS、字体等。

> 其源码放在 `src` 目录。

#### 安装依赖

```shell
$ npm install
```

#### 重建资源

```shell
$ npm run build
```

> `npm run watch` 会在文件改动时重建资源。

#### 预览

```shell
$ npm run serve
```
