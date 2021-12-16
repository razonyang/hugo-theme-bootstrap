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
  "檔案"
]
images = []
+++

社交連結`social`參數是一組平臺映射到用戶標識的鍵值對。 
其支持很多熱門的社交平臺，比如Twitter、Facebook、Reddit、GitHub。
本文列出了所有受支持的平臺，及其使用方法。

<!--more-->

## 使用方法

一共有兩處地方可以放置社交鏈接，一個是[作者小部件]({{< ref "/posts/widgets/author" >}})，另一個是頁腳。

### 作者小部件

編輯 `config/_default/author.toml` 文件，並填寫以下配置：

```toml
[social]
  email = "user@domain.tld"
  github = "githubusername"
```

### 頁腳

建立 `config/_default/social.toml` 檔案，並填寫以下配置：

```toml
email = "user@domain.tld"
github = "githubusername"
```

## 平臺

| 平臺 | 使用者標識 |
|---|---|
| `email` | 電子郵箱 |
| `facebook` | Facebook 使用者名稱 |
| `facebookgroup` | Facebook 群組名 |
| `github` | GitHub 使用者名稱 |
| `gitlab` | GitLab 使用者名稱 |
| `instagram` | Instagram 使用者名稱 |
| `linkedin` | LinkedIn 使用者名稱 |
| `quora` | Quora 使用者名稱 |
| `stackoverflow` | Stack Overflow 使用者 ID |
| `tumblr` | Tumblr 使用者名稱 |
| `twitter` | Twitter 使用者名稱 |
| `weibo` | 微博使用者名稱 |
| `zhihu` | 知乎使用者名稱 |
| `reddit` | Reddit 使用者名稱 |
| `telegram` | Telegram 使用者名稱 |
| `qq` | QQ 號 |
| `dockerhub` | Docker Hub 使用者名稱 |
| `bitbucket` | Bitbucket Workspace ID |
| `kaggle` | Kaggle 使用者名稱 |
| `medium` | Medium 使用者名稱或自定義域名（比如：https://custom.domain.tld） |
| `lastfm` | Last.fm 使用者名稱 |
| `bibibili` | BiliBili 使用者 ID |
| `youtube` | Youtube 頻道 ID |
| `discord` | Discord 邀請碼 |
| `discourse` | 論壇 URL |
| `tiktok` | TikTok 使用者名稱 |
| `pinterest` | Pinterest 使用者名稱 |
