+++
title = "參與我們"
date = 2021-11-27T19:54:29+08:00
comment = true
toc = true
reward = true
categories = [
]
tags = [
]
series = [
  "檔案"
]
images = []
[menu.main]
  parent = "support"
  weight = 5
[menu.footer]
  parent = "support"
  weight = 5
+++

我們很樂意傾聽你的意見和反饋，也歡迎你參與進來。

<!--more-->

## 社區

- [特性請求](https://github.com/razonyang/hugo-theme-bootstrap/issues/new?template=feature_request.md)
- [Bug 反饋](https://github.com/razonyang/hugo-theme-bootstrap/issues/new?template=bug_report.md)
- [討論](https://github.com/razonyang/hugo-theme-bootstrap/discussions): 提問題、分享想法等。

## 貢獻

歡迎任何貢獻，如檔案、Bug 修復和新功能。

### 規則

鑒於易於維護的考慮，我們制定了一些規則。

#### Conventional Commits Specification

請遵循 [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/)。

比如：

- Bug 修復：`fix: correct typos`
- 新特性：`feat: add the foobar parameter`
- 檔案：`docs: document the foobar parameter`
- 樣式：`style: change the background color to blue`
- 重建資源：`chore: rebuild assets`

### 開發

本主題依賴 `npm` 和 `webpack`，用於生成資源文件：JS、CSS、字體等。

> 其源碼放在 `src` 目錄。

#### 安裝依賴

```shell
$ npm install
```

#### 重建資源

```shell
$ npm run build
```

> `npm run watch` 會在文件改動時重建資源。

#### 預覽

```shell
$ npm run serve
```
