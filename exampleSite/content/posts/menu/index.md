+++
title = "Menu"
date = 2021-12-16T17:25:20+08:00
featured = false
comment = true
toc = true
reward = true
pinned = false
categories = [
  "Menu"
]
tags = [
  "Main Menu"
  "Footer Menu"
]
series = [
  "Docs"
]
images = []
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

See also [Menu Entry Properties](https://gohugo.io/variables/menus/).

## Usage

### Configuration

> The menu configuration file is located in `config/_default/menu.toml` by default.

Let's take `main` menu as an example:

```toml
[[main]]
  name = "FooBar"
  identifier = "foobar"
  weight = 1
  pre = '<i class="fas fa-fw fa-chevron-circle-down"></i>'
[[main]]
  name = "Foo"
  identifier = "foo"
  parent = "foobar"
  url = "https://github.com/razonyang/hugo-theme-bootstrap"
  weight = 1
[[main]]
  parent = "foobar"
  identifier = "foobar-divider"
  weight = 2
  [main.params]
    divider = true
[[main]]
  name = "Bar"
  identifier = "bar"
  parent = "foobar"
  url = "https://github.com/razonyang/hugo-theme-bootstrap/discussions/new"
  weight = 3
```

![Main Menus](images/main.png#center)

As the image shown, we created a top level menu called `foobar`, that contains sub menus and divider.

### Front Matter

We can also configure menu via page front matter.

```toml
[menu.main]
  parent = "support"
  weight = 6
[menu.footer]
  parent = "support"
  weight = 6
  pre = '<i class="fas fa-fw fa-quetion-circle"></i>'
```

The code snippet appends the page to the `main` and `footer` menu.

> It's no need to specify the `url` and `name` parameters.
