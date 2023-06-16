+++
title = "打賞小部件"
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
  "文檔"
]
images = []
authors = ["RazonYang"]
[menu.footer]
  parent = "features"
  weight = 7
  [menu.footer.params]
    icon = '<i class="fas fa-fw fa-coffee"></i>'
+++

打賞小部件，又稱 buy me a coffee 小部件，其通過使用捐贈或小費，為讀者提供了一種支持創作者的筦道。

<!--more-->

## 網站參數

`reward` 參數是從平臺映射到二維碼圖像、用戶名或 URL 的鍵值對，因此支持任何支持二維碼的平臺。

| 名稱 | 類型 | 預設值 | 描述
|---|:-:|:-:|---
| `funding` | Object | - | 打賞。
| `funding.alipay` | String | - | 支付寶收款二維碼圖片。
| `funding.wechat` | String | - | 微信收款/打賞二維碼圖片。
| `funding.paypal` | String | - | Paypal 用戶名。
| `funding.ko_fi`  | String | - | Ko-fi 用戶名。
| `funding.patreon` | String | - | Patreon 用戶名。
| `funding.open_collective` | String | - | Open Collective 用戶名。
| `funding.buymeacoffee` | String | - | Buy Me a Coffee 用戶名。

## 頁面配置

| 名稱 | 類型 | 預設值 | 描述
|---|:-:|:-:|---
| `funding` | Object | - | 覆蓋全局的 `funding` 設置，留空則禁用。
