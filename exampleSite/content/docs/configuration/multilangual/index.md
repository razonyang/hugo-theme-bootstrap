+++
# type = "docs"
title = "Multilingual Mode"
date = 2022-07-27T08:06:06+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["Multilingual"]
tags = ["Translation", "Localization"]
series = ["Docs"]
images = []
navWeight = 960
+++

HBS supports multiple languages out of box, such as English, Simplified Chinese, Traditional Chinese, French, Russian etc.

<!--more-->

## Supported Languages

{{% code/multilingual-languages %}}

## Configuration

{{< code-toggle filename="config/_default/language" >}}
{{% code/multilingual-configuration %}}
{{< /code-toggle >}}

> You'll need to specify the `languageDirection` as `rtl` for Right-to-left writing languages.

See also [Hugo Multilingual](https://gohugo.io/content-management/multilingual/).

## Localization

The `dateFormat` supports localization, you can change it as `:date_full`, you can find more layouts in [Date/time formatting layouts](https://gohugo.io/functions/dateformat/#datetime-formatting-layouts).

> Please note that the `zh-cn`, `zh-tw` and `zh-hk` are not supported, since the language code could not match the locales defined in [Hugo Locales](https://github.com/gohugoio/locales).

## Further Reading

- [Translate Your Content](https://gohugo.io/content-management/multilingual/#translate-your-content)
