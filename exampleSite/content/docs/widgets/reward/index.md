+++
title = "Reward Widget"
date = 2021-12-03T11:10:19+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "Widget"
]
tags = [
  "Buy Me a Coffee"
]
series = [
  "Docs"
]
images = []
aliases = [
  "/en/posts/widgets/reward"
]
authors = ["RazonYang"]
# [menu.footer]
#   parent = "features"
#   weight = 7
#   [menu.footer.params]
#     icon = '<i class="fas fa-fw fa-coffee"></i>'
+++

The reward widget, AKA buy me a coffee widget, gives the readers a way to support a creator through the use of donations or tips.

However, it limited to the QR code image, please take a look at the [funding widget]({{< ref "docs/widgets/funding" >}}).

<!--more-->

## Site Parameters

The `reward` is a key value pair that mapping from platform to their QR Code image, therefore, any platform that supports QR code is supported.

| Name | Type | Default | Description
|---|:-:|:-:|---
| `reward` | Object | - | 
| `reward.alipay` | String | - | Alipay QR Code Image.
| `reward.wechat` | String | - | Wechat QR Code Image.

## Page Parameter

| Name | Type | Default | Description
|---|:-:|:-:|---
| `reward` | Boolean | `true` | Turn on/off reward widget.
