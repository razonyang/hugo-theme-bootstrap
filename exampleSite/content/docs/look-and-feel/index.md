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
weight = 980
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

## Palettes

The theme palettes system is based on CSS variable, therefore, we can easily custom the color per palette.

Let's illustrate with an example.

```CSS
[data-palette=blue] {
  --hbs-primary: darkblue;
  --hbs-on-primary: #fff;
}
```

After appending the style to `assets/main/scss/_custom.scss`, the color of `blue` palette will be changed to `darkblue`.

## Fonts

### Font Family

We don't specify any font, so that `system-ui` will be used in most browsers.

You can use other web fonts easilly, such as [Google Fonts](https://fonts.google.com/). Lets take the Roboto font as an exmaple.

First of all, we import the font by `customCSS`:

```
customCSS = [
  "https://fonts.googleapis.com/css2?family=Roboto&display=swap"
]
```

And then override the `--hbs-body-font-family` variable in `assets/main/scss/_custom.scss`:

```CSS
:root {
  --hbs-body-font-family: 'Roboto', sans-serif;
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

Edit the file `assets/icons/custom.js`:

```js
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
