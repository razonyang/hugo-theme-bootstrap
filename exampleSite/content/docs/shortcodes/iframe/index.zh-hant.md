+++
# type = "docs"
title = "IFrame Shortcode"
linkTitle = "IFrame"
date = 2022-11-19T13:00:48+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["Shortcode"]
tags = ["IFrame"]
series = ["文檔"]
images = []
+++

A detailed description of iframe shortcode.

<!--more-->

## Usage

```markdown
{{</* iframe "URL" */>}}
```

or via named parameters

```markdown
{{</* iframe 
    src="URL"
    trigger=manual
    loadButtonText="load_video"
*/>}}
```

| Parameter | Default | Description
|:-:|:-:|---
| `src` | - | The iframe URL. Required.
| `trigger` | `auto` | Set it as `manual` if you want to load the iframe manually.
| `lazyLoading` | `true` | 
| `loadButtonText` | `load` | The text of load button, i18n is supported.
| `loadInfo` | - | The information shown below the load button. Markdown is supported.
| `fullscreen` | `true` | Show/Hide the fullscreen button.

## Examples

### OpenStreetMap

{{< iframe src="https://www.openstreetmap.org/export/embed.html?bbox=111.34643554687501%2C22.09072990148906%2C114.97192382812501%2C24.397133017391052&amp;layer=mapnik" fullscreen=true >}}

### Game

{{< iframe
    src="https://v6p9d9t4.ssl.hwcdn.net/html/6581665/FeatherParkWeb/index.html"
    trigger=manual
    loadButtonText=button_run_game
    loadInfo="**Please note** that the iframe will load the game from other sites."
    lazyLoading=false
>}}
