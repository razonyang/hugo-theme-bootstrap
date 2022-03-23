+++
title = "Look and Feel"
date = 2021-12-03T19:42:57+08:00
featured = true
comment = true
toc = true
reward = true
pinned = true
categories = [
]
tags = [
  "Color",
  "Palette",
  "Fonts",
  "Syntax Highlighting",
  "Icons"
]
series = [
  "Docs"
]
images = []
weight = 960
aliases = [
  "/en/posts/look-and-feel"
]
[menu.footer]
  parent = "docs"
  weight = 3
  pre = '<i class="fas fa-fw fa-palette"></i>'
+++

By default, a site using this theme has the default fonts, colors, and general look and feel.
However, the default scheme cannot satisfy everyone, but don't worry, you can easily override the theme defaults, such as palette colors, fonts, syntax highlighting.

<!--more-->

## Background Image

```toml {title="config/_default/params.toml"}
# Use the same image on light and dark modes.
backgroundImage = ['/images/bg.png']

# Use different images on light and dark modes.
backgroundImage = ['/images/bg-light.png', '/images/bg-dark.png']
```

## Palettes

HBS provides a plenty of palettes: `blue`, `blue-gray`, `brown`, `cyan`, `green`, `indigo`, `orange`, `pink`, `purple`, `red`, `teal`, `yellow`.

### Available Palettes

The palette picker on the setting panel is based on the `palettes` parameter. 

```toml {title="config/_default/params.toml"}
palettes = ["blue", "blue-gray", "indigo"]
```

You can also disable the palette picker by setting the `palettes` parameter to an empty array `[]`.

### Default Palette

```toml {title="config/_default/params.toml"}
palette = "indigo"
```

> You'll need to clear the browser cache after modifying the default palette.

### Override Palette Color

The palettes system is based on CSS variable, therefore, we can easily custom the color per palette.

```scss {title="assets/main/scss/_custom.scss"}
[data-palette=blue] {
    --#{$variable-prefix}primary: darkblue;
    --#{$variable-prefix}on-primary: #fff;
}
```

After appending the style to `assets/main/scss/_custom.scss`, the color of `blue` palette will be changed to `darkblue`.

## Fonts

### Font Family

We don't specify any font, so that `system-ui` will be used in most browsers.

You can use other web fonts easily, such as [Google Fonts](https://fonts.google.com/). Lets take the Roboto font as an example.

First of all, we import the font, and then override the `body-font-family` variable in `assets/main/scss/_custom.scss`:

```scss {title="assets/main/scss/_custom.scss"}
@import 'https://fonts.googleapis.com/css2?family=Roboto&display=swap';
:root {
    --#{$variable-prefix}body-font-family: 'Roboto', sans-serif;
}
```

## Syntax Highlighting

The theme requires the following markup parameters to be set to specific values.

- `lineNos`: `true`
- `lineNumbersInTable`: `false`
- `noClasses`: `false`

See also [Configure Highlight](https://gohugo.io/getting-started/configuration-markup#highlight).

### Style

```shell
$ hugo gen chromastyles --style=solarized-dark > assets/main/scss/_highlight.scss
```

See also [All Supported Styles](https://xyproto.github.io/splash/docs/all.html).

## Icons

```js {title="assets/icons/custom.js"}
// import { faClock } from '@fortawesome/free-solid-svg-icons';
// import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
// import { faAmazon, faGoogle } from '@fortawesome/free-brands-svg-icons';

const icons = [
    // faClock,
    // faAddressBook,
    // faAmazon, faGoogle,
];
export default icons;
```
