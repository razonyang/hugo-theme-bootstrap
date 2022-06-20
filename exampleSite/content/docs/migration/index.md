+++
title = "Migrating to v1.0"
linkTitle = "Migration"
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
+++

Track and review changes to the theme source files and documentation to help you migrate from `v0.*` to `v1.0`.

<!--more-->

## v1.0

### Layouts

- Removed `layouts/_default/archive.html`, please replace the `layout = archive` with `layout = archives` in front matter.

### SCSS

- Deprecated `$variable-prefix`, please use `$prefix` instead.
- Use Bootstrap built-in CSS variables instead of previous theme-defined CSS variables.
