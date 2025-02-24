+++
title = "聯繫表單"
date = 2021-11-30T23:56:00+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "聯繫表單"
]
tags = [
  "Netlify",
  "Getform"
]
series = [
  "文檔"
]
images = []
aliases = [
  "/zh-tw/posts/contact-form",
  "/zh-tw/docs/contact-form",
  "/zh-tw/docs/layouts/contact-form"
]
authors = ["RazonYang"]
# [menu.footer]
#   parent = "features"
#   weight = 6
#   [menu.footer.params]
#     icon = '<i class="fas fa-fw fa-question-circle"></i>'
+++

我們可以將郵寄地址放在 [社交連結]({{< ref "/docs/widgets/social-links" >}})上，以便讀者聯繫我們。 但不幸的是，郵件或多或少會被當成垃圾郵件，甚至被過濾。 因此我們帶來了一個聯系表單的功能。

<!--more-->

## 前置條件

我們需要在 `content` 目錄創建一個名為 `contact/index.md` 的頁面，以至於我們可以訪問聯系表單頁面。

```toml
+++
title = "Contact Us"
layout = "contact"
+++
```

一旦創建，連結將出現在簡介小部件中。

## 參數

| 名稱 | 類型 | 默認值 | 說明
|---|:-:|:-:|---
| `contact` | Object | - | 
| `contact.endpoint` | String | - | 請參閱 [後端](#後端)。
| `contact.file` | Boolean | `false` | 開啟/禁用文件上傳。
| `contact.fileField` | String | - | 文件字段名稱。
| `contact.reCaptcha` | Object | - | [Google reCAPTCHA](https://www.google.com/recaptcha/)
| `contact.reCaptcha.siteKey` | String | - |

## 後端

其被設計成可以相容大部分後端，比如：[Netlify form](https://docs.netlify.com/forms/setup)、[Getform](https://getform.io/) 和 [Formspree](https://formspree.io/)，以及 [Formailer](https://github.com/djatwood/formailer)。

### Netlify

[Netlify form](https://docs.netlify.com/forms/setup) 可開箱即用，你不應該指定 `contact.endpoint` 參數。

當啟用 reCAPTCHA 2 時，請配置 `SITE_RECAPTCHA_KEY` 和 `SITE_RECAPTCHA_SECRET` 環境變量，詳情請參閱 [Custom reCAPTCHA 2](https://docs.netlify.com/forms/spam-filters/#custom-recaptcha-2)。

> 演示網站使用 Getform 而不是 Netlify form，因為當你超過當前套餐限定時，Netlify 會自動升級你的套餐，這會導致額外的支出。

> 如果你打算使用 Netlify form，請確保 `contact.endpoint` 參數為空。

### Formailer

[Formailer](https://github.com/djatwood/formailer) is supported with a [contact form hook]({{< ref "/docs/advanced/hooks" >}}) to inject a missing input to the form.

> See also [Google Cloud Functions example](https://github.com/djatwood/formailer/tree/main/examples/gcf) upstream.

### 其他

我們以 [Getform](https://getform.io) 為例：

```toml
[contact]
  endpoint = "YOUR_ENDPOINT"
```

## reCAPTCHA

除了需要設定 `contact.reCaptcha.siteKey` 參數外，你還需要根據後端進行額外的操作：

- [Netlify](https://docs.netlify.com/forms/spam-filters/#custom-recaptcha-2)
- [GetForm](https://docs.getform.io/features/spam-filtering/recaptcha-v2/#step-4-setup-secret-key)
