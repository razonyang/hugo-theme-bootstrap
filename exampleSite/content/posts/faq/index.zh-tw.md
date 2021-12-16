+++
title = "FAQ 頁面"
date = 2021-12-07T21:46:43+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "FAQ"
]
tags = [
]
series = [
  "檔案"
]
images = []
+++

[FAQ]({{< ref "/faq" >}}) 頁面是一個常見問題的集合。

<!--more-->

## 前置條件

我們需要在 `content` 目錄下創建一個名為 `faq/index.md` 的頁面。

```toml
+++
title = "Frequently Asked Questions"
layout = "faq"
+++
```

## 數據

數據存放在 `data` 目錄，其目錄結構如下：

```text
data
  /en
    /faq
      foo.json
      bar.json
  /zh-cn
    /faq
      foo.json
      bar.json
```

如你所看到的，我們按照語言對問題進行歸類。每個文件代表一組問題，它們有著以下相同的格式：

```json
{
  "title": "The group title",
  "weight": 1,
  "questions": [
    {
      "question": "The question",
      "answer": "The answer"
    }
  ]
}
```

- `weight` 參數用於將組按升序排序。
