+++
title = "漸進式 web 應用程序"
linkTitle = "PWA"
linkTitleIcon = '<i class="fas fa-th-large fa-fw text-warning"></i>'
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
navWeight = 400
videos = [
  "https://www.bilibili.com/video/BV1yg411Z77A"
]
[menu.footer]
  parent = "features"
  weight = 2
  [menu.footer.params]
    icon = '<i class="fas fa-fw fa-th-large"></i>'
+++

PWAs([漸進式 web 應用程序](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)) 是使用一些特定的科技和標準模式開發的，允許它們同時利用 web 和本機應用程序功能。

HBS 提供了一些基本的特性，如將網站安裝到主荧幕、預緩存檔案和離線可用。

<!--more-->

{{< bilibili BV1yg411Z77A >}}

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
| `pwa.precache` | Object | - | Precache assets
| `pwa.precache.fonts` | Array | - | Precache fonts
| `pwa.precache.images` | Array | - | Precache images
| `pwa.precache.pages` | Array | - | Precache pages
| `pwa.precache.scripts` | Array | - | Precache scripts
| `pwa.precache.styles` | Array | - | Precache styles

## Manifest

主題會自動生成 `manifest.json`。

## 離線

### 離線頁面

如果在沒有網絡的情况下請求新頁面，將顯示離線頁面。

我們需要在 `content` 目錄中創建一個名為 `offline/_index.md` 的離線頁面，其首要內容如下。

```toml
+++
title = 'Offline'
+++
```

### 離線圖片

與離線頁面壹樣，有壹個脫機圖片用於在沒有網絡的情況下請求圖片。HBS 提供了壹個內置的離線圖片，文件名是 `assets/images/offline.png`。
妳可以通過在妳的網站根目錄下創建妳自己的具有相同文件名的離線圖片來覆蓋它。

## 預載

{{< code-toggle filename="params">}}
{{% code/pwa-precache %}}
{{< /code-toggle >}}
