+++
title = "Progressive Web App"
linkTitle = "PWA"
linkTitleIcon = '<i class="fas fa-th-large fa-fw text-warning"></i>'
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
aliases = [
  "/en/posts/pwa"
]
authors = ["RazonYang"]
navWeight = 400
videos = [
  "https://www.bilibili.com/video/BV1yg411Z77A"
]
[menu.footer]
  parent = "features"
  weight = 2
  [menu.footer.params]
    icon = '<i class="fas fa-fw fa-th-large"></i>'
+++

PWAs([Progressive web apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)) are web apps developed using a number of specific technologies and standard patterns to allow them to take advantage of both web and native app features.

HBS provides some basic features, such as install site to home screen, precache files and available offline.

<!--more-->

{{< bilibili BV1yg411Z77A >}}

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
| `pwa.manifest.icons` | Array | - |
| `pwa.manifest.icons.sizes` | String | - | Icons' sizes, i.e. "96x96"
| `pwa.manifest.icons.src` | String | - | Icon's URL
| `pwa.precache` | Object | - | Precache assets
| `pwa.precache.fonts` | Array | - | Precache fonts
| `pwa.precache.images` | Array | - | Precache images
| `pwa.precache.pages` | Array | - | Precache pages
| `pwa.precache.scripts` | Array | - | Precache scripts
| `pwa.precache.styles` | Array | - | Precache styles

## Manifest

The `manifest.json` will be generated automatically.

## Offline

### Offline Page

The offline page will be shown in the case of requesting a new page without network.

We need to create an offline page called `offline/_index.md` in the `content` directory with the following front matter.

```toml
+++
title = 'Offline'
+++
```

### Offline Image

Same as offline page, there is an offline image for requesting images without network. HBS provides a built-in offline image with the filename `assets/images/offline.png`.
You can override it by creating your own offline image with the same filename under your site root.

## Precache

{{< code-toggle filename="params">}}
{{% code/pwa-precache %}}
{{< /code-toggle >}}
