+++
title = "漸進式 web 應用程序"
date = 2021-12-03T19:39:01+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "PWA"
]
tags = [
  "Manifest",
  "Offline"
]
series = [
  "文檔"
]
images = []
aliases = [
  "/zh-tw/posts/pwa"
]
authors = ["RazonYang"]
[menu.footer]
  parent = "features"
  weight = 2
+++

PWAs([漸進式 web 應用程序](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)) 是使用一些特定的科技和標準模式開發的，允許它們同時利用 web 和本機應用程序功能。

我們正處於 PWA 的實驗階段，但添加了一些主要功能，如將網站安裝到主荧幕、預緩存檔案和離線可用。

<!--more-->

## 站点配置

首先，我們需要指定 `pwa` 參數，即使為空。

| 名稱 | 類型 | 預設值 | 描述
|---|:-:|:-:|---
| `pwa` | Object | - |
| `pwa.manifest` | Object | - | [Web app manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
| `pwa.manifest.name` | String | - | 默認為站點標題
| `pwa.manifest.short_name` | String | - | 站點短名稱
| `pwa.manifest.display` | String | `standalone` |
| `pwa.manifest.description` | String | - | 默認為站點描述
| `pwa.manifest.theme_color` | String | - |
| `pwa.manifest.background_color` | String | - |
| `pwa.manifest.icons` | Array | - |
| `pwa.manifest.icons.sizes` | String | - | 圖標尺寸，如："96x96"
| `pwa.manifest.icons.src` | String | - | 圖標 URL

## Manifest

主題會自動生成 `manifest.json`。

## 離線

如果在沒有網絡的情况下請求新頁面，將顯示離線頁面。

我們需要在 `content` 目錄中創建一個名為 `offline/index.md` 的離線頁面，其首要內容如下。

```toml
+++
title = 'Offline'
layout = 'offline'
+++
```

## 預載

現時，我們還沒有提供任何預緩存自定義檔案的方法。
如果您需要此功能，請隨時通知我們。
