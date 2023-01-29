+++
title = "打赏小部件"
date = 2023-01-29T19:44:19+08:00
featured = false
comment = true
toc = true
categories = [
  "小部件"
]
tags = [
]
series = [
  "文档"
]
images = []
authors = ["RazonYang"]
[menu.footer]
  parent = "features"
  weight = 7
  [menu.footer.params]
    icon = '<i class="fas fa-fw fa-coffee"></i>'
+++

打赏小部件，又称 buy me a coffee 小部件，其通过使用捐赠或小费，为读者提供了一种支持创作者的管道。

<!--more-->

## 站点配置

`funding` 参数是从平台映射到二维码图像、用户名或 URL 的键值对。

| 名称 | 类型 | 默认值 | 描述
|---|:-:|:-:|---
| `funding` | Object | - | 打赏。
| `funding.alipay` | String | - | 支付宝收款二维码图片。
| `funding.wechat` | String | - | 微信收款/打赏二维码图片。
| `funding.paypal` | String | - | Paypal 用户名。
| `funding.ko_fi`  | String | - | Ko-fi 用户名。
| `funding.patreon` | String | - | Patreon 用户名。
| `funding.open_collective` | String | - | Open Collective 用户名。

## 页面配置

| 名称 | 类型 | 默认值 | 描述
|---|:-:|:-:|---
| `funding` | Object | - | 覆盖全局的 `funding` 设置，留空则禁用。
