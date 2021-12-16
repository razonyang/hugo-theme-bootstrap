+++
title = "打賞小部件"
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
  "檔案"
]
images = []
[menu.footer]
  parent = "features"
  weight = 7
  pre = '<i class="fas fa-fw fa-coffee"></i>'
+++

打賞小部件，又稱buy me a coffee小部件，其通過使用捐贈或小費，為讀者提供了一種支持創作者的筦道。

<!--more-->

## 網站參數

`reward` 參數是從平臺映射到二維碼影像的鍵值對，因此支持任何支持二維碼的平臺。

| 名稱 | 類型 | 預設值 | 描述
|---|:-:|:-:|---
| `reward` | Object | - | 打賞。
| `reward.alipay` | String | - | 支付寶收款二維碼圖片。
| `reward.wechat` | String | - | 微信收款/打賞二維碼圖片。

## 頁面配置

| 名稱 | 類型 | 預設值 | 描述
|---|:-:|:-:|---
| `reward` | Boolean | `true` | 是否開啟打賞小部件
