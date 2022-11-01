+++
# type = "docs"
title = "SCSS Variables"
date = 2022-07-23T17:23:28+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["SCSS"]
tags = ["SCSS Variables"]
series = ["Docs"]
images = []
+++

Thanks to `assets/main/scss/_variables.scss`, we have the ability to change the default SCSS variables of theme and Bootstrap.

<!--more-->

## Why SCSS Variables?

Although we can override the CSS via `assets/main/scss/_custom.scss`, this will eventually increase the size of CSS bundle, however the SCSS variable does not in most cases.

For example, there is a default animation for logo on hover.

```css
{{% code/scss-variables-logo-animation %}}
```

It's able to disable it via custom SCSS.

```scss {title="assets/main/scss/_custom.scss"}
{{% code/scss-variables-disable-logo-animation %}}
```

But the previous style which we don't need is still present in CSS bundle, since we just overrode it by the custom SCSS.

```css
{{% code/scss-variables-disable-logo-animation-output %}}
```

And the SCSS variables will not generate *unused* style into CSS bundle.

```scss {title="assets/main/scss/_variables.scss"}
$logo-animation: false;
```

Smaller CSS bundle size means better performance, so we recommend using SCSS variables when possible.

## Bootstrap SCSS Variables

You can find the Bootstrap built-in SCSS variables from source code and [official documentations](https://getbootstrap.com/).

## Theme SCSS Variables

### Palettes

{{% code/scss-variables-palettes %}}

### Options

{{% code/scss-options %}}
