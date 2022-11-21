+++
title = "Docs Layout"
description = ""
date = 2022-01-12T10:56:34-08:00
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = [
  "Layouts"
]
tags = [
]
series = [
  "Docs"
]
images = []
authors = ["Andreas Deininger", "RazonYang"]
+++

In this article, we'll explore the `docs` layout, which can be used to write project documentation, personal notes, and more.

<!--more-->

> If you're going to use `docs` layout on other sections(`notes`), please take a look at [Content]({{< ref "/docs/content" >}}) page.

## Layout

The `docs` layout consists of three sections, from start to end: document navigation bar, document content and sidebar.

## Content Structure

```bash
{{% code/layout-docs-structure %}}
```

![Structure](structure.png#center)

As shown in the figure, this example shows how to organize a multi-level document navigation.

- Containing `_index.md` will become a Section.
- Containing `index.md` will become a page.

## Navigation

### Title

Generally, `title` will be used to display on the navigation bar, but sometimes the title is too long to make things worse. At this time, we can modify the link text displayed in the navigation via `linkTitle`.

{{< code-toggle >}}
title = "Install on Windows"
linkTitle = "Windows"
{{< /code-toggle >}}

### Icon

In addition, we provide a parameter called `linkTitleIcon` to set the icon on the left side of the title.

{{< code-toggle >}}
linkTitleIcon = '<i class="fas fa-columns fa-fw"></i>'
{{< /code-toggle >}}

### Weight

We sort documents according to the `navWeight` parameter, upper weight gets higher precedence. For documents without 'navWeight' specified, they are sorted alphabetically by `title`.

{{< code-toggle >}}
navWeight = 1000
{{< /code-toggle >}}

### External Links

Sometimes we need to link the article to an external site. At this time, `redirect` can be used, and then it will redirect to the specified external link automatically.

{{< code-toggle >}}
redirect = "https://github.com/razonyang/hugo-theme-bootstrap-skeleton"
{{< /code-toggle >}}

## Sidebar

### Widgets

By default, the sidebar only contains the table of content, but you can add widgets via [hook]({{< ref "docs/advanced/hooks" >}}).

```html {title="layouts/partials/hooks/docs/sidebar-end.html"}
{{- partial "docs/repo" . }}
{{- partial "sidebar/recent-posts" . }}
```
