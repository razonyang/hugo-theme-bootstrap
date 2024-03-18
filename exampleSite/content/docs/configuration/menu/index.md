+++
title = "Menu"
date = 2021-12-16T17:25:20+08:00
featured = true
comment = true
toc = true
reward = true
pinned = false
categories = [
  "Menu"
]
tags = [
  "Main Menu",
  "Footer Menu"
]
series = [
  "Docs"
]
images = []
aliases = [
  "/en/posts/menu",
  "/en/docs/menu"
]
navWeight = 900
authors = ["RazonYang"]
featuredImageAlt = "Menu example"
+++

We predefined two types of menus: `main` and `footer`, represents the top app bar menus and the footer menus, respectively.
This article will briefly introduce how to use the menus.

<!--more-->

## Menu Entry Properties

| Property | Type | Description
|:---|:---|:---
| `name` | String | The name of menu.
| `identifier` | String | The ID of menu.
| `weight` | Number | The weight of menu that used for sorting in ascending order.
| `parent` | String | The `identifier` of parent menu entry.
| `url` | String | The URL of menu.
| `pre` | String | The leading string before menu name.
| `post` | String | The trailing string after menu name.
| `params` | Object | Menu parameters.
| `params.divider` | Boolean | `true` means divider.
| `params.icon` | String | The icon HTML.
| `params.description` | String | The description for top app bar's dropdown menus only.

See also [Menu Entry Properties](https://gohugo.io/content-management/menus/#properties-front-matter).

## Usage

### Configuration

> The menu configuration file is located in `config/_default/menu.toml` by default.

Let's take `main` menu as an example:

```toml
{{% code/menu-main-configuration %}}
```

> See [Icons]({{< ref "docs/look-and-feel#icons" >}}) for importing icons and setting the icon's color.

### Front Matter

We can also configure menu via page front matter.

```toml
{{% code/menu-footer-configuration %}}
```

The code snippet appends the page to the `main` and `footer` menu.

> It's no need to specify the `url` and `name` parameters.
