+++
# type = "docs"
title = "多语言"
date = 2022-07-27T08:06:06+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["多语言"]
tags = ["翻译", "本地化"]
series = ["文档"]
images = []
navWeight = 960
+++

HBS 支持多种语言，如英语、简体中文、繁体中文、法语和俄语等。

<!--more-->

## 支持的语言

{{% code/multilingual-languages %}}

## 配置

{{< code-toggle filename="config/_default/language" >}}
{{% code/multilingual-configuration %}}
{{< /code-toggle >}}

> 你需要把 `languageDirection` 指定为 `rtl`，用于从右到左的书写语言。

请参阅 [Hugo Multilingual](https://gohugo.io/content-management/multilingual/).

## 本地化

`dateFormat` 支持本地化，你可以把它改成 `:date_full`，你可以在[日期/时间格式化布局](https://gohugo.io/functions/dateformat/#datetime-formatting-layouts)中找到更多格式。

> 请注意，不支持 `zh-cn`、`zh-tw` 和 `zh-hk`，因为语言代码无法与 [Hugo Locales](https://github.com/gohugoio/locales) 中定义的locales匹配。

## 延伸阅读

- [Translate Your Content](https://gohugo.io/content-management/multilingual/#translate-your-content)
