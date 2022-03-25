+++
title = "Gallery Shortcode"
date = "2022-03-25"
description = "A detailed description of Gallery shortcode"
featured = false
categories = [
  "Shortcode"
]
tags = [
  "Gallery"
]
series = [
  "Docs"
]
images = [
]
aliases = [
  "/en/posts/shortcodes/gallery"
]
+++

This article shows how to use the `gallery` shortcode.
<!--more-->

```markdown
{{</* gallery images="images1.jpg,image2.png" */>}}
```

> The parameter `images` is a concatenated of filename present on the `images` **child folder**.

We use [Masonry](https://getbootstrap.com/docs/5.1/examples/masonry/) with the Bootstrap grid system and cards component

{{< gallery images="image.png,image.png,image.png,image.png,image.png,image.png,image.png" >}}
