+++
title = "Image Viewer"
date = 2021-12-03T20:46:50+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "Image Viewer"
]
tags = [
]
series = [
  "Docs"
]
images = []
[menu.footer]
  parent = "features"
  weight = 3
+++

Image viewer is an image gallery, it will be shown up when you click a non-linkable image.

It also provides many tools, such as zoom in, zoom out and rotate.

<!--more-->

> The author avatar was filtered by default.

## Site Parameters

Image Viewer was turned on by default, you can turn it off by setting the parameter `viewer` as `false`.

## Options

You can tweak the options by creating `assets/js/viewer.config.js`.

```js
window.viewerOptions = {
    className: "image-viewer",
    // ...
};
```

Avialable options are listed on [Viewer.js Options](https://github.com/fengyuanchen/viewerjs#options).
