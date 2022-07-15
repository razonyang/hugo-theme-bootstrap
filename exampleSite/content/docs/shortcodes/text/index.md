+++
# type = "docs"
title = "Text Shortcodes"
linkTitle = "Text"
date = 2022-07-15T01:00:43+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["Shortcode"]
tags = ["Text", "Text Alignment", "Text Transform", "Text Selection"]
series = ["Docs"]
images = []
+++

In this article, we will explore some shortcodes for text, such as alignment, transform and selection.

<!--more-->

## Text Transform

{{< text/lowercase >}}Lowercased text.{{< /text/lowercase >}}
{{< text/uppercase >}}Uppercased text.{{< /text/uppercase >}}
{{< text/capitalize >}}CapiTaliZed text.{{< /text/capitalize >}}

## Text Alignment

{{< text/align-start >}}
Align text to the start.
{{< /text/align-start >}}

{{< text/align-center >}}
Align text to the center.
{{< /text/align-center >}}

{{< text/align-end >}}
Align text to the end.
{{< /text/align-end >}}

## Text Selection

{{< text/user-select-all >}}
This paragraph will be entirely selected when clicked by the user.
{{< /text/user-select-all >}}

{{< text/user-select-none >}}
This paragraph will not be selectable when clicked by the user.
{{< /text/user-select-none >}}
