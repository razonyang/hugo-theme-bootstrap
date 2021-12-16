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

After appending the style to `assets/css/custom.css`, the color of `blue` palette will be changed to `darkblue`.

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

And then override the `--hbs-body-font-family` variable in `assets/css/custom.css`:

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
$ hugo gen chromastyles --style=solarized-dark > assets/css/highlight.css
```

See also [All Supported Styles](https://xyproto.github.io/splash/docs/all.html).

## Icons

We're using a custom [Font Awesome](https://fontawesome.com/) icon set, in order to reduce the file size of icons.
Because of this, you are free to choose other icons.

### Font Awesome

#### Custom Build

> This section contains front-end technologies, such as `JavaScript` and `npm`.

We provided a file called `assets/js/icons.js` for customizing icons, therefore, you can add icons as needed.
We already set up e build environment in the example site for you.

1. Install Dependencies

```shell
$ npm install
```

2. Add icons into `src/icons/index.js`:

```js
import { faGlobe, faClock } from '@fortawesome/free-solid-svg-icons';

library.add(faGlobe, faClock);
```

3. Rebuild `assets/js/icons.js`:

```shell
$ npm run build
```

It's a recommended way to add icons if you're familiar to front-end development.

#### CustomJS

Since the theme using JS+SVG framework to replace icons to SVG, so the `customCSS` won't work, you need to use `customJS` instead. 

```toml
customJS = [
  "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/js/solid.min.js" # Import solid icons.
  #"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/js/regular.min.js" # Import regular icons.
  #"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/js/brands.min.js" # Import brand icons.
  #"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/js/all.min.js" # Import the full icon set.
]
```

### Others

The other icons can be imported by `customCSS`, `customJS` or [Hooks]({{< ref "/posts/hooks" >}}).

- [Iconify](https://iconify.design/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Material Design Icons](https://materialdesignicons.com/)
