+++
title = "Migrating to v1"
linkTitle = "Migration"
linkTitleIcon = '<i class="fas fa-sync fa-fw text-success"></i>'
date = 2022-06-20T17:46:31+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["Migration"]
tags = []
series = ["Docs"]
images = []
authors = ["RazonYang"]
navWeight = 30
+++

Track and review changes to the theme source files and documentation to help you migrate from `v0.*` to `v1`.

<!--more-->

> If you're not sure how to upgrade, see the [Upgradation]({{< ref "/docs/getting-started/upgradation" >}}) guide.

## v1.0

> The older UI design are freezen on `v0` branch that only accepts bug fixes. You can keep using the older UI design with that branch.

### Dependencies

- Bumped Bootstrap from `v5.1` to `v5.2`.

### UI

- Removed the setting panel from top app bar.
- Added the social links on top app bar.
- Placed Docs navigation toggle on top app bar on small screen.

### Layouts

- Removed `layouts/_default/archive.html`, please replace the `layout = archive` with `layout = archives` in front matter.
- Renamed `layouts/partials/docs/catalog.html` to `layouts/partials/docs/nav.html`.

### SCSS

- Deprecated `$variable-prefix`, please use `$prefix` instead.
- Use Bootstrap built-in CSS variables instead of theme-defined CSS variables.

### Docs

- {{< badge-breaking-change >}} use the `navWeight` instead of `weight` for sorting pages on docs nav.

### Shortcodes

#### Alert Shortcode

- {{< badge-breaking-change >}} change `alert` syntax, see also [Alert Shortcode Syntax]({{< ref "docs/shortcodes/alert#syntax" >}}).
