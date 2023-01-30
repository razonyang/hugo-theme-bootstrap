+++
title = "Image Processing"
linkTitleIcon = '<i class="fas fa-image fa-fw"></i>'
description = "Guide to resize and align images"
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
  "Image",
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
  "Docs"
]
navWeight = 800
aliases = [
  "/en/posts/image-processing"
]
authors = ["RazonYang"]
[menu.footer]
  parent = "features"
  weight = 2
  [menu.footer.params]
    icon = '<i class="fas fa-fw fa-image"></i>'
+++

This article offers some use cases for showing how to resize, crop, fit, fill and align images.
<!--more-->

## Resizing Images

We use the URL query of image for resizing images. For example:

### Specify the width and preserve ratio

```markdown
![Resize](featured-sample.webp?width=300px)
```

![Resize](featured-sample.webp?width=300px)

### Specify the height and preserve ratio

```markdown
![Resize](featured-sample.webp?height=200px)
```

![Resize](featured-sample.webp?height=200px)

### Specify the width and height

```markdown
![Resize](featured-sample.webp?width=300px&height=200px)
```

![Resize](featured-sample.webp?width=300px&height=200px)

> It can be used not only for [page resources](https://gohugo.io/content-management/page-resources/), but also for the **static** images and external images. 
> However, in addition to page resources, others are resized by inline style, that is, their original size will not change.

## Aligning Images

We can easily align images by adding URL fragments. Such as `#center`, `#float-start` and `#float-end` represents align center, float start and float end respectively.

### Center

Adding the `#center` fragment for aligning images to the center.

For example: `![Center](/featured-sample.webp#center)`.

![Center](/featured-sample.webp?height=120px#center)

### Float Start

{{% clearfix %}}
![Float Start](featured-sample.webp?height=120px#float-start) Adding the `#float-start` fragment for floating images to the start, we have to wrap it inside `clearfix` shortcode to avoid breaking the layout.

Please note that use `%%` instead of `<>` to render content as Markdown fully.
{{% /clearfix %}}

For example.

````
{{/% clearfix %/}}
![Float Start](/featured-sample.webp#float-start) TEXTS AROUNDS THE IMAGE.
{{/% /clearfix %/}}
````

### Float End

{{% clearfix %}}
![Float End](/featured-sample.webp?height=120px#float-end) Similarly, we can also float images to the end by adding the `#float-end` fragment.
{{% /clearfix %}}

For example.

````
{{/% clearfix %/}}
![Float End](/featured-sample.webp#float-end) TEXTS AROUNDS THE IMAGE.
{{/% /clearfix %/}}
````

## Caption

HBS allows using image title as caption, this feature is disabled by default, you need to enable the `post.imageTitleAsCaption` parameter:

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
