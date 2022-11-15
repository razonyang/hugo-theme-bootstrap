+++
title = "图像处理"
linkTitleIcon = '<i class="fas fa-image fa-fw"></i>'
date = 2021-08-15T14:19:06+08:00
draft = false
comment = true
toc = true
reward = true
carousel = true
featured = true
categories = [
  "Markdown"
]
tags = [
  "图像",
  "Caption",
  "Resize",
  "Crop",
  "Fill",
  "Fit",
  "Brightness",
  "ColorBalance",
  "Colorize",
  "Contrast",
  "Gamma",
  "GaussianBlur",
  "Grayscale",
  "Hue",
  "Invert",
  "Pixelate",
  "Saturation",
  "Sepia",
  "Sigmoid",
  "UnsharpMask",
]
series = [
  "文档"
]
aliases = [
  "/zh-cn/posts/image-processing"
]
authors = ["RazonYang"]
navWeight = 800
[menu.footer]
  parent = "features"
  weight = 2
  [menu.footer.params]
    icon = '<i class="fas fa-fw fa-image"></i>'
+++

本文提供一些调整图片大小、裁剪和对齐图片的用例。

<!--more-->

## 调整图片大小

我们利用 URL 的查询字符串来调整图片大小。

### 指定宽度和保留比率

```markdown
![Resize](featured-sample.webp?width=300px)
```

![Resize](featured-sample.webp?width=300px)

### 指定高度和保留比率

```markdown
![Resize](featured-sample.webp?height=200px)
```

![Resize](featured-sample.webp?height=200px)

### 指定宽度和高度

```markdown
![Resize](featured-sample.webp?width=300px&height=200px)
```

![Resize](featured-sample.webp?width=300px&height=200px)

> 它不仅可以用于[页面资源](https://gohugo.io/content-management/page-resources/)，而且也适用于 **static** 图像和外部图像。
> 但是，除了页面资源外，其他资源的大小都是按内联样式调整的，也就是说，它们的原始大小不会改变。

## 对齐图像

我们可以利用 URL 片段轻易地对齐图像，比如：`#center`, `#float-start` 和 `#float-end` 分别表示居中对齐、向左浮动和向右浮动。

### 居中对齐

添加 `#center` 使图片居中对齐。

举个例子：`![Center](/center.png#center)`。

![Center](/featured-sample.webp?height=120px#center)

### 向左浮动

![Float Start](/featured-sample.webp?height=120px#float-start)

添加 `#float-start` 使图片向左浮动。

举个例子：`![Float Start](/featured-sample.webp#float-start)`。

### 向右浮动

![Float End](/featured-sample.webp?height=120px#float-end)

同样的，我们也可以添加 `#float-end` 使图片向右浮动。

举个例子：`![Float End](/featured-sample.webp#float-end)`。

## Caption

HBS 允许使用图片标题作为 caption，但这个功能默认是关闭的，你需要启用 `post.imageTitleAsCaption` 参数：

{{< code-toggle filename="params" >}}
post:
  imageTitleAsCaption: true
{{</ code-toggle >}}

```markdown
![Image Caption](/featured-sample.webp "Use Image Title as Caption")
```

![Image Caption](/featured-sample.webp?fit=300x200 "Use Image Title as Caption")

## Crop Images

Crop an image to match the given dimensions without resizing. You must provide both width and height. Use the anchor[^1] option to change the crop box anchor point.

```markdown
![Crop Image](/featured-sample.webp?crop=[width]x[height],[anchor])
```

- The size `[width]x[height]` is required.
- `[anchor]` is optional, the `,` is used to separate the size and anchor.

[^1]: When using the `Crop` or `Fill` method, the anchor determines the placement of the crop box. You may specify `TopLeft`, `Top`, `TopRight`, `Left`, `Center`, `Right`, `BottomLeft`, `Bottom`, `BottomRight`, or `Smart`. The default value is `Smart`.

| Examples | | |
|:-:|:-:|:-:|
| ![Crop Image](/featured-sample.webp?crop=200x200,TopLeft "crop=200x200,TopLeft") | ![Crop Image](/featured-sample.webp?crop=200x200,Top "crop=200x200,Top") | ![Crop Image](/featured-sample.webp?crop=200x200,TopRight "crop=200x200,TopRight") |
| ![Crop Image](/featured-sample.webp?crop=200x200,Left "crop=200x200,Left") | ![Crop Image](/featured-sample.webp?crop=200x200,Center "crop=200x200,Center") | ![Crop Image](/featured-sample.webp?crop=200x200,Right "crop=200x200,Right") |
| ![Crop Image](/featured-sample.webp?crop=200x200,BottomLeft "crop=200x200,BottomLeft") | ![Crop Image](/featured-sample.webp?crop=200x200,Bottom "crop=200x200,Bottom") | ![Crop Image](/featured-sample.webp?crop=200x200,BottomRight "crop=200x200,BottomRight") |

## Fill Images

Crop and resize an image to match the given dimensions. You must provide both width and height. Use the anchor[^1] option to change the crop box anchor point.

```markdown
![Fill Image](/featured-sample.webp?fill=[width]x[height],[anchor])
```

- The size `[width]x[height]` is required.
- `[anchor]` is optional, the `,` is used to separate the size and anchor.

| Examples | | |
|:-:|:-:|:-:|
| ![Fill Image](/featured-sample.webp?fill=150x200,TopLeft "fill=150x200,TopLeft") | ![Fill Image](/featured-sample.webp?fill=150x200,Top "fill=150x200,Top") | ![Fill Image](/featured-sample.webp?fill=150x200,TopRight "fill=150x200,TopRight") |
| ![Fill Image](/featured-sample.webp?fill=150x200,Left "fill=150x200,Left") | ![Fill Image](/featured-sample.webp?fill=150x200,Center "fill=150x200,Center") | ![Fill Image](/featured-sample.webp?fill=150x200,Right "fill=150x200,Right") |
| ![Fill Image](/featured-sample.webp?fill=150x200,BottomLeft "fill=150x200,BottomLeft") | ![Fill Image](/featured-sample.webp?fill=150x200,Bottom "fill=150x200,Bottom") | ![Fill Image](/featured-sample.webp?fill=150x200,BottomRight "fill=150x200,BottomRight") |

## Fit Images

Downscale an image to fit the given dimensions while maintaining aspect ratio. You must provide both width and height.

```markdown
![Fit Image](/featured-sample.webp?fit=[width]x[height])
```

![Fit Image](/featured-sample.webp?fit=200x100)

## Filters

### Brightness

The `brightness` must be in range `(-100, 100)`.

```markdown
![Image Brightness](/featured-sample.webp?brightness=-30)
```

![Image Brightness](/featured-sample.webp?fit=200x200&brightness=-30)

### ColorBalance

ColorBalance creates a filter that changes the color balance of an image. The percentage parameters for each color channel (red, green, blue) must be in range `(-100, 500)`.

```markdown
![Image ColorBalance](/featured-sample.webp?colorBalance=-50,50,150)
```

![Image ColorBalance](/featured-sample.webp?fit=200x200&colorBalance=-50,50,150)

### Colorize

Colorize creates a filter that produces a colorized version of an image. The hue parameter is the angle on the color wheel, typically in range `(0, 360)`. The saturation parameter must be in range `(0, 100)`. The percentage parameter specifies the strength of the effect, it must be in range `(0, 100)`.

```markdown
![Image Colorize](/featured-sample.webp?colorize=-100,50,150)
```

![Image Colorize](/featured-sample.webp?fit=200x200&colorize=100,50,150)

### Contrast

The `contrast` must be in range `(-100, 100)`.

```markdown
![Image Contrast](/featured-sample.webp?contrast=50)
```

![Image Contrast](/featured-sample.webp?fit=200x200&contrast=50)

### Gamma

Gamma creates a filter that performs a gamma correction on an image. The gamma parameter must be positive. Gamma = 1 gives the original image. Gamma less than 1 darkens the image and gamma greater than 1 lightens it.

```markdown
![Image Gamma](/featured-sample.webp?gamma=2)
```

![Image Gamma](/featured-sample.webp?fit=200x200&gamma=2)

### GaussianBlur

Applies a gaussian blur to an image.

```markdown
![Image GaussianBlur](/featured-sample.webp?gaussianBlur=2)
```

![Image GaussianBlur](/featured-sample.webp?fit=200x200&gaussianBlur=2)

### Grayscale

Grayscale creates a filter that produces a grayscale version of an image.

```markdown
![Image Grayscale](/featured-sample.webp?grayscale)
```

![Image Grayscale](/featured-sample.webp?fit=200x200&grayscale)

### Hue

Hue creates a filter that rotates the hue of an image. The hue angle shift is typically in range `-180` to `180`.

```markdown
![Image Hue](/featured-sample.webp?hue=90)
```

![Image Hue](/featured-sample.webp?fit=200x200&hue=90)

### Invert

Invert creates a filter that negates the colors of an image.

```markdown
![Image Invert](/featured-sample.webp?invert)
```

![Image Invert](/featured-sample.webp?fit=200x200&invert)

### Pixelate

Pixelate creates a filter that applies a pixelation effect to an image.

```markdown
![Image Pixelate](/featured-sample.webp?pixelate=8)
```

![Image Pixelate](/featured-sample.webp?fit=200x200&pixelate=8)

### Saturation

Saturation creates a filter that changes the saturation of an image.

```markdown
![Image Saturation](/featured-sample.webp?saturation=100)
```

![Image Saturation](/featured-sample.webp?fit=200x200&saturation=100)

### Sepia

Sepia creates a filter that produces a sepia-toned version of an image.

```markdown
![Image Sepia](/featured-sample.webp?sepia=200)
```

![Image Sepia](/featured-sample.webp?fit=200x200&sepia=200)

### Sigmoid

Sigmoid creates a filter that changes the contrast of an image using a sigmoidal function and returns the adjusted image. It’s a non-linear contrast change useful for photo adjustments as it preserves highlight and shadow detail.

```markdown
![Image Sigmoid](/featured-sample.webp?sigmoid=2,5)
```

![Image Sigmoid](/featured-sample.webp?fit=200x200&sigmoid=2,5)

### UnsharpMask

UnsharpMask creates a filter that sharpens an image. The sigma parameter is used in a gaussian function and affects the radius of effect. Sigma must be positive. Sharpen radius roughly equals 3 * sigma. The amount parameter controls how much darker and how much lighter the edge borders become. Typically between `0.5` and `1.5`. The threshold parameter controls the minimum brightness change that will be sharpened. Typically between `0` and `0.05`.

```markdown
![Image UnsharpMask](/featured-sample.webp?unsharpMask=10,1,0.05)
```

![Image UnsharpMask](/featured-sample.webp?fit=400x300&unsharpMask=10,1,0.05)
