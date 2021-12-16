+++
title = "Progressive Web App"
date = 2021-12-03T19:39:01+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "PWA"
]
tags = [
  "Manifest",
  "Offline",
  "Precache"
]
series = [
  "Docs"
]
images = []
[menu.footer]
  parent = "features"
  weight = 2
+++

PWAs([Progressive web apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)) are web apps developed using a number of specific technologies and standard patterns to allow them to take advantage of both web and native app features.

We are in the experimental stage of PWA, but some major features have been added, such as install site to home screen, precache files and available offline.

<!--more-->

## Site Parameters

Firstly, we need to specify the `pwa` parameter, even it is empty.

| Name | Type | Default | Description
|---|:-:|:-:|---
| `pwa` | Object | - | 
| `pwa.manifest` | Object | - | [Web app manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
| `pwa.manifest.name` | String | - | Default to site title
| `pwa.manifest.short_name` | String | - | Short name of your site.
| `pwa.manifest.display` | String | `standalone` |
| `pwa.manifest.description` | String | - | Default to site description.
| `pwa.manifest.theme_color` | String | - |
| `pwa.manifest.background_color` | String | - |
| `pwa.manifest.icons` | Arrary | - |
| `pwa.manifest.icons.sizes` | String | - | Icons' sizes, i.e. "96x96"
| `pwa.manifest.icons.src` | String | - | Icon's URL

## Manifest

Secondary, we add a custom output format called `MANIFEST` in the configuration file, in order to make our site installable.

```toml
[mediaTypes]
  [mediaTypes."application/manifest+json"]
    suffixes = ["json"]
  
[outputFormats]
  [outputFormats.MANIFEST]
    name = "manifest"
    baseName = "manifest"
    mediaType = "application/manifest+json"
```

And then append the `MANIFEST` to your `home`'s output.

```toml
[outputs]
  home = ["HTML", "RSS", "JSON", "MANIFEST"]
```

> Hugo will generate the `manifest.json` in the site root.

## Offline

The offline page will be shown in the case of requesting a new page without network.

We need to create an offline page called `offline/index.md` in the `content` directory with the following front matter.

```toml
+++
title = 'Offline'
layout = 'offline'
+++
```

## Precache

Currently, we haven't provide any way to precache custom files yet.
If you need this feature, please feel free to let us know.
