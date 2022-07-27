+++
# type = "docs"
title = "多語言"
date = 2022-07-27T08:06:06+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["多語言"]
tags = ["翻譯", "本地化"]
series = ["文檔"]
images = []
navWeight = 960
+++

HBS 支持多種語言，如英語、簡體中文、繁體中文、法語和俄語等。

<!--more-->

## 支持的語言

{{% code/multilingual-languages %}}

## 配置

{{< code-toggle filename="config/_default/language" >}}
{{% code/multilingual-configuration %}}
{{< /code-toggle >}}

> 你需要把 `languageDirection` 指定為 `rtl`，用於從右到左的書寫語言。

請參閱 [Hugo Multilingual](https://gohugo.io/content-management/multilingual/).

## 本地化

`dateFormat` 支持本地化，你可以把它改成 `:date_full`，你可以在[日期/時間格式化布局](https://gohugo.io/functions/dateformat/#datetime-formatting-layouts)中找到更多格式。

> 請註意，不支持 `zh-cn`、`zh-tw` 和 `zh-hk`，因為語言代碼無法與 [Hugo Locales](https://github.com/gohugoio/locales) 中定義的locales匹配。

## 延伸閱讀

- [Translate Your Content](https://gohugo.io/content-management/multilingual/#translate-your-content)
