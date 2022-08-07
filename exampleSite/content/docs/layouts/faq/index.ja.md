+++
title = "FAQレイアウト"
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
aliases = [
  "/ja/posts/faq",
  "/ja/docs/faq"
]
authors = ["RazonYang"]
+++

よくある質問を集めた「[FAQ]({{< ref "/faq" >}})」ページです。

<!--more-->

## 前提条件

`content` ディレクトリに `faq/index.md` というページを作成する必要があります。

```toml
+++
title = "よくある質問"
layout = "faq"
+++
```

## データ

データは `data` ディレクトリに格納され、ディレクトリ構造は以下の通りである。

```text
data
  /ja
    /faq
      foo.json
      bar.json
  /en
    /faq
      foo.json
      bar.json
```

ご覧のように、私たちは質問を言語によって分類しています。そして、各ファイルは以下のような同じ形式の質問のグループを表します。

```json
{
  "title": "グループの件名",
  "weight": 1,
  "questions": [
    {
      "question": "質問",
      "answer": "回答"
    }
  ]
}
```

- `weight` パラメータは、グループを昇順にソートするために使用されます。
