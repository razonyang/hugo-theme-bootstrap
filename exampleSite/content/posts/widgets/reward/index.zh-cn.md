+++
title = "打赏小部件"
date = 2021-12-03T11:10:19+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "小部件"
]
tags = [
]
series = [
  "文档"
]
images = []
[menu.footer]
  parent = "features"
  weight = 7
  pre = '<i class="fas fa-fw fa-coffee"></i>'
+++

打赏小部件，又称 buy me a coffee 小部件，其通过使用捐赠或小费，为读者提供了一种支持创作者的管道。

<!--more-->

## 站点配置

`reward` 参数是从平台映射到二维码图像的键值对，因此支持任何支持二维码的平台。

| 名称 | 类型 | 默认值 | 描述
|---|:-:|:-:|---
| `reward` | Object | - | 打赏。
| `reward.alipay` | String | - | 支付宝收款二维码图片。
| `reward.wechat` | String | - | 微信收款/打赏二维码图片。

## 页面配置

| 名称 | 类型 | 默认值 | 描述
|---|:-:|:-:|---
| `reward` | Boolean | `true` | 是否开启打赏
