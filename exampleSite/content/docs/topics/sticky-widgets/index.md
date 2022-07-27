+++
# type = "docs"
title = "Sticky Widgets"
date = 2022-07-27T08:54:43+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["Widgets"]
tags = ["Sticky", "SCSS"]
series = ["Docs"]
images = []
+++

When the page is too long, the sidebar will disappear with scrolling and the page will not look as neat and beautiful.
So this article will introduce how to use sticky widgets to avoid this problem.

<!--more-->

{{< bilibili BV1jW4y1y7kL >}}

## Create a New Sticky Widget

First of all, create a partial under the `layouts/parials` folder, let's take `layouts/partials/custom/sticky-info.html` as example.

{{% code/sticky-widgets-partial %}}

> The filename `custom/sticky-info` can be changed at will, but we recommend using some more specific names to avoid overriding the theme's partials later.
> Such as `custom`, `mywidgets`.

Then use the `layouts/partials/hooks/sidebar-end.html` hook to include the sticky partial.

```html { title="layouts/partials/hooks/sidebar-end.html" }
{{- partial "custom/sticky-info" . }}
```

> The sticky widget should be the last widget of the sidebar, otherwise, strange problems can occur.

## Make an Existing Widget Sticky

Each widget will have a unique class name, so that we can apply CSS on a desired widget, here we take the profile widget as an example.

{{% code/sticky-widgets-scss %}}

We need to specify the `order` property to make the profile widget become the last widget of sidebar.
