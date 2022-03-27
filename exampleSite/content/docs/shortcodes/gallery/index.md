+++
title = "Gallery Shortcode"
date = "2022-03-25"
description = "A detailed description of Gallery shortcode"
featured = false
masonry = true
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
+++

This article shows how to use the `gallery` shortcode.

<!--more-->

## Configuration

You'll need to enable `masonry` on `params.toml`(global) or front matter.

{{< code-toggle >}}
masonry = true
{{< /code-toggle >}}

## Usage

```markdown
{{</* gallery images="images/foo.png,images/bar.png" */>}}
```

{{< gallery images="images/logo.webp,images/logo.webp,images/shortcode.png,images/logo.webp,images/logo.webp" >}}
