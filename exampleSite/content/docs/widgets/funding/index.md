+++
title = "Funding Widget"
date = 2023-01-29T19:44:19+08:00
featured = false
comment = true
toc = true
categories = [
  "Widget"
]
tags = [
  "Buy Me a Coffee", "Funding"
]
series = [
  "Docs"
]
images = []
authors = ["RazonYang"]
[menu.footer]
  parent = "features"
  weight = 7
  [menu.footer.params]
    icon = '<i class="fas fa-fw fa-coffee"></i>'
+++

The funding widget, AKA buy me a coffee widget, gives the readers a way to support a creator.

<!--more-->

## Site Parameters

The `funding` is a key value pair that mapping from platform to their QR Code image, username or URL.

| Name | Type | Default | Description
|---|:-:|:-:|---
| `funding` | Object | - | 
| `funding.alipay` | String | - | Alipay QR Code Image.
| `funding.wechat` | String | - | Wechat QR Code Image.
| `funding.paypal` | String | - | Paypal username.
| `funding.ko_fi`  | String | - | Ko-fi username.
| `funding.patreon` | String | - | Patreon username.
| `funding.open_collective` | String | - | Open Collective username.

## Page Parameter

| Name | Type | Default | Description
|---|:-:|:-:|---
| `funding` | Object | -  | Override the global funding settings, empty to disable.
