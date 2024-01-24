+++
title = "Look and Feel"
linkTitleIcon = '<i class="fas fa-palette fa-fw text-danger"></i>'
date = 2021-12-03T19:42:57+08:00
featured = false
comment = true
toc = true
reward = true
pinned = true
pinnedWeight = 3
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
navWeight = 960
aliases = [
  "/en/posts/look-and-feel"
]
authors = ["RazonYang"]
[menu.footer]
  parent = "docs"
  weight = 3
  [menu.footer.params]
    icon = '<i class="fas fa-fw fa-palette text-danger"></i>'
+++

By default, a site using this theme has the default fonts, colors, and general look and feel.
However, the default scheme cannot satisfy everyone, but don't worry, you can easily override the theme defaults, such as palette colors, fonts, syntax highlighting.

<!--more-->

## Favicons

HBS generates icons in multiple sizes base on the file `assets/favicon.webp` (higher priority) or `assets/favicon.png`.
Just save your own favicon image as the same path to override the defaults.

You'll need to override the mask icon `assets/safari-pinned-tab.svg` as well.

> The static icons `static/images/icons/icon-{size}.png` have higher priority for backwards compatibility.

### Custom Sizes

You're able to change the sizes you want via `params` file.

{{< code-toggle >}}
  {{< code/look-and-feel-favicon-sizes >}}
{{< /code-toggle >}}

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

```scss {title="assets/main/scss/_variables.scss"}
$palette-blue: darkblue;
```

After modifying the SCSS variables on `assets/main/scss/_variables.scss`, the color of `blue` palette will be changed to `darkblue`.
Please checkout the [SCSS Variables]({{< ref "docs/advanced/scss-variables" >}}) for details.

## Fonts

### Font Family

We don't specify any font, so that `system-ui` will be used in most browsers.

You can use other web fonts easily, such as [Google Fonts](https://fonts.google.com/). Lets take the Roboto font as an example.

First of all, we import the font, and then override the `body-font-family` variable in `assets/main/scss/_custom.scss`:

```scss {title="assets/main/scss/_custom.scss"}
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
:root {
    --#{$prefix}body-font-family: 'Roboto', sans-serif;
}
```

## Syntax Highlighting

The theme requires the following markup parameters to be set to specific values.

- `lineNos`: `true`
- `lineNumbersInTable`: `false`
- `noClasses`: `false`

See also [Configure Highlight](https://gohugo.io/getting-started/configuration-markup#highlight).

### Style

```bash
$ hugo gen chromastyles --style=solarized-dark > assets/main/scss/_highlight.scss
```

See also [All Supported Styles](https://xyproto.github.io/splash/docs/all.html).

## Icons

HBS uses a custom [FontAwesome v5](https://fontawesome.com/v5/search) icon set that contains only the icons used by the theme to reduce the icon file size.

### Add Icons

Considering the need for user-defined icons, HBS provides a custom icon feature, just create `assets/icons/custom.js` file in the site root and import the desired icons.

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

> To make this work, you need to uncomment, that is, remove the prefix `//`.

Literally, `@fortawesome/free-solid-svg-icons`, `@fortawesome/free-regular-svg-icons` and `@fortawesome/free-brands-svg-icons` represent Solid, Regular and Brand icons respectively.

### JS Variables

JS variables are named using `camelCase`, and their corresponding class names are lowercase and separated from each other by a horizontal line.

| Class | JS Variable |
|---|---|
| `fa-clock` | `faClock` |
| `fa-address-book` | `faAddressBook` |
| `fa-amazon` | `faAmazon` |
| `fa-google` | `faGoogle` |

### Usage

Depending on the type of icon, their class prefixs are ​​also different, the corresponding relationship is as follows:

| Kind | Class Prefix
|---|---|
| Solid | `fas`
| Regular | `far`
| Brand | `fab`

Takes the previously imported icons as an example:

| HTML |
|---|
| `<i class="fas fa-clock"></i>` |
| `<i class="far fa-address-book"></i>` |
| `<i class="fab fa-amazon"></i>` |
| `<i class="fab fa-google"></i>` |

> If the icon is not displayed properly, please check that the prefix is ​​correct.

#### Icon Color

You can either specify the color CSS utilities or the `style` attribute for setting the icon color.

| HTML |
|---|
| `<i class="fas fa-clock text-success"></i>` |
| `<i class="fas fa-clock text-danger"></i>` |
| `<i class="far fa-clock" style="color: blue"></i>` |
| `<i class="far fa-clock" style="color: pink"></i>` |

> When using it in configurations, front matter and so on, you should need to quote/escape the code, otherwise YAML/TOML/JSON parsing may fail. For example,
> 
> ```md
> ---
> menu:
>   main:
>     params:
>       icon: '<i class="far fa-clock" style="color: blue"></i>'
> ---
> ```
