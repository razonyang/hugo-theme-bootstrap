+++
title = "FAQ Page"
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
  "Docs"
]
images = []
+++

The [FAQ]({{< ref "/faq" >}}) page is a collection of frequently asked questions.

<!--more-->

## Prerequisites

We need to create a page called `faq/index.md` in the `content` directory.

```toml
+++
title = "Frequently Asked Questions"
layout = "faq"
+++
```

## Data

The data are stored in `data` directory, the directory structure is as follows:

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

As you can see, we classify the questions according to their language. And each file represents a group of questions, that has the same format as follows:

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

- The `weight` parameter is used for sorting group in ascending order.
