+++
title = "图片查看器"
linkTitleIcon = '<i class="fas fa-images fa-fw"></i>'
date = 2021-12-03T20:46:50+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "图片查看器"
]
tags = [
]
series = [
  "文档"
]
images = []
aliases = [
  "/zh-cn/posts/image-viewer"
]
authors = ["RazonYang"]
navWeight = 810
[menu.footer]
  parent = "features"
  weight = 3
  [menu.footer.params]
    icon = '<i class="fas fa-fw fa-images"></i>'
+++

Image viewer is an image gallery, it will be shown up when you click a non-linkable image.

It also provides many tools, such as zoom in, zoom out and rotate.

<!--more-->

> The author avatar was filtered by default.

## Site Parameters

Image Viewer was turned on by default, you can turn it off by setting the parameter `viewer` as `false`.

## Options

You can tweak the options by creating `assets/viewer/js/options.ts`.

```js
const options = {
    className: "image-viewer",
    // ...
};
export default options;
```

Available options are listed on [Viewer.js Options](https://github.com/fengyuanchen/viewerjs#options).
