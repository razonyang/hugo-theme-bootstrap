+++
title = "社交連結"
date = 2021-12-02T16:27:45+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "社交連結"
]
tags = [
]
series = [
  "文檔"
]
images = []
aliases = [
  "/zh-tw/posts/widgets/social-links"
]
authors = ["RazonYang"]
+++

社交連結`social`參數是一組平臺映射到用戶標識的鍵值對。 
其支持很多熱門的社交平臺，比如Twitter、Facebook、Reddit、GitHub。
本文列出了所有受支持的平臺，及其使用方法。

<!--more-->

## 使用方法

一共有三處地方可以放置社交鏈接：頂部應用欄、[作者小部件]({{< ref "/docs/widgets/author" >}}) 和頁腳。

### 頂部應用欄

{{< code-toggle filename="params" >}}
[topAppBar]
  [topAppBar.social]
    github = "foobar"
{{</ code-toggle >}}

### 作者小部件

編輯 `config/_default/params.toml` 文件，並填寫以下配置：

```toml
[author.social]
  email = "user@domain.tld"
  github = "githubusername"
```

### 頁腳

將以下內容放到 `config/_default/params.toml` 文件，以於頁腳設置社交鏈接：

```toml
[social]
email = "user@domain.tld"
github = "githubusername"
```

## 平臺

> 如有必要，值可以改為一個完整的 URL。

| 平臺 | 使用者標識 |
|---|---|
| `email` | 電子郵箱 |
| `facebook` | Facebook 使用者名稱 |
| `facebookgroup` | Facebook 群組名 |
| `github` | GitHub 使用者名稱 |
| `gitlab` | GitLab 使用者名稱 |
| `instagram` | Instagram 使用者名稱 |
| `itchio` | itch.io 使用者名稱 |
| `linkedin` | LinkedIn 使用者名稱 |
| `quora` | Quora 使用者名稱 |
| `stackoverflow` | Stack Overflow 使用者 ID |
| `tumblr` | Tumblr 使用者名稱 |
| `twitter` | Twitter 使用者名稱 |
| `x` | X 使用者名稱 |
| `weibo` | 微博使用者名稱 |
| `zhihu` | 知乎使用者名稱 |
| `reddit` | Reddit 使用者名稱 |
| `telegram` | Telegram 使用者名稱 |
| `qq` | QQ 號 |
| `dockerhub` | Docker Hub 使用者名稱 |
| `bitbucket` | Bitbucket Workspace ID |
| `kaggle` | Kaggle 使用者名稱 |
| `medium` | Medium 使用者名稱或自定義域名（比如：https://razonyang.com） |
| `lastfm` | Last.fm 使用者名稱 |
| `bibibili` | BiliBili 使用者 ID |
| `youtube` | Youtube 頻道 ID |
| `discord` | Discord 邀請碼 |
| `discourse` | 論壇 URL |
| `tiktok` | TikTok 使用者名稱 |
| `pinterest` | Pinterest 使用者名稱 |
| `mastodon` | Mastodon 使用者名稱 |
| `liberapay` | Liberapay 使用者名稱 |
| `paypal` | Paypal 使用者名稱 |
| `patreon` | Patreon 使用者名稱 |
| `tipeee` | Tipeee 使用者名稱 |
| `rss` | 空字符串以禁用 RSS 鏈接 |
| `website` | 網站 URL |
