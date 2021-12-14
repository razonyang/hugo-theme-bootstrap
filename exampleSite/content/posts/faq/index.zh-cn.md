+++
title = "FAQ 页面"
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
  "文档"
]
images = []
+++

[FAQ]({{< ref "/faq" >}}) 页面是一个常见问题的集合。

<!--more-->

## 前置条件

我们需要在 `content` 目录下创建一个名为 `faq/index.md` 的页面。

```toml
+++
title = "Frequently Asked Questions"
layout = "faq"
+++
```

## 数据

数据存放在 `data` 目录，其目录结构如下：

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

如你所看到的，我们按照语言对问题进行归类。每个文件代表一组问题，它们有着以下相同的格式：

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

- `weight` 参数用于将组按升序排序。
