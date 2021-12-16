+++
title = "社交链接"
date = 2021-12-02T16:27:45+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "社交链接"
]
tags = [
]
series = [
  "文档"
]
images = []
+++

社交链接 `social` 参数是一组平台映射到用户标识的键值对。
其支持很多热门的社交平台，比如 Twitter、Facebook、Reddit、GitHub。
本文列出了所有受支持的平台，及其使用方法。

<!--more-->

## 使用方法

一共有两处地方可以放置社交链接，一个是[作者小部件]({{< ref "/posts/widgets/author" >}})，另一个是页脚。

### 作者小部件

编辑 `config/_default/author.toml` 文件，并填写以下配置：

```toml
[social]
  email = "user@domain.tld"
  github = "githubusername"
```

### 页脚

创建 `config/_default/social.toml` 文件，并填写以下配置：

```toml
email = "user@domain.tld"
github = "githubusername"
```

## 平台

| 平台 | 用户标识 |
|---|---|
| `email` | 电子邮箱 |
| `facebook` | Facebook 用户名 |
| `facebookgroup` | Facebook 群组名 |
| `github` | GitHub 用户名 |
| `gitlab` | GitLab 用户名 |
| `instagram` | Instagram 用户名 |
| `linkedin` | LinkedIn 用户名 |
| `quora` | Quora 用户名 |
| `stackoverflow` | Stack Overflow 用户 ID |
| `tumblr` | Tumblr 用户名 |
| `twitter` | Twitter 用户名 |
| `weibo` | 微博用户名 |
| `zhihu` | 知乎用户名 |
| `reddit` | Reddit 用户名 |
| `telegram` | Telegram 用户名 |
| `qq` | QQ 号 |
| `dockerhub` | Docker Hub 用户名 |
| `bitbucket` | Bitbucket Workspace ID |
| `kaggle` | Kaggle 用户名 |
| `medium` | Medium 用户名或自定义域名（比如：https://custom.domain.tld） |
| `lastfm` | Last.fm 用户名 |
| `bibibili` | BiliBili 用户 ID |
| `youtube` | Youtube 频道 ID |
| `discord` | Discord 邀请码 |
| `discourse` | 论坛 URL |
| `tiktok` | TikTok 用户名 |
| `pinterest` | Pinterest 用户名 |
