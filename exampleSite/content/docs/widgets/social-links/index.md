+++
title = "Social Links"
date = 2021-12-02T16:27:45+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "Social Links"
]
tags = [
]
series = [
  "Docs"
]
images = []
aliases = [
  "/en/posts/widgets/social-links"
]
authors = ["RazonYang"]
+++

The `social` parameter is a set of key value pairs of social links that mapping from platform to their user identifier.
It supports many popular social platforms, such as Twitter, Facebook, Reddit, GitHub.
This article lists all supported platforms and how to use them.

<!--more-->

## Usage

There are three places you can put social links to: top app bar, [Author Widget]({{< ref "/docs/widgets/author" >}}) and footer.

### Top App Bar

{{< code-toggle filename="params" >}}
[topAppBar]
  [topAppBar.social]
    github = "foobar"
{{</ code-toggle >}}

### Author Widget

Set up social links by editing a file `config/_default/author.toml` with the following content:

```toml
[social]
  email = "user@domain.tld"
  github = "githubusername"
```

### Footer

Set up social links by creating a file `config/_default/social.toml` with the following content:

```toml
email = "user@domain.tld"
github = "githubusername"
```

## Platforms

> The value can be changed to a full URL if necessary.

| Platform | User Identifier |
|---|---|
| `email` | Email Address |
| `facebook` | Facebook Username |
| `facebookgroup` | Facebook Group Name |
| `github` | GitHub Username |
| `gitlab` | GitLab Username |
| `instagram` | Instagram Username |
| `itchio` | itch.io Username |
| `linkedin` | LinkedIn Username |
| `quora` | Quora Username |
| `stackoverflow` | Stack Overflow User ID |
| `tumblr` | Tumblr Username |
| `twitter` | Twitter Username |
| `weibo` | Weibo Username |
| `zhihu` | Zhihu Username |
| `reddit` | Reddit Username |
| `telegram` | Telegram Username |
| `qq` | QQ Number |
| `dockerhub` | Docker Hub Username |
| `bitbucket` | Bitbucket Workspace ID |
| `kaggle` | Kaggle Username |
| `medium` | Medium Username or custom domain(e.g. https://razonyang.com) |
| `lastfm` | Last.fm Username |
| `bibibili` | BiliBili User ID |
| `youtube` | Youtube Channel ID |
| `discord` | Discord Invite Code |
| `discourse` | Forum URL |
| `tiktok` | TikTok Username |
| `pinterest` | Pinterest Username |
| `mastodon` | Mastodon Username |
| `liberapay` | Liberapay Username |
| `paypal` | Paypal Username |
| `patreon` | Patreon Username |
| `tipeee` | Tipeee Username |
| `rss` | Empty string for disabling the RSS link |
| `website` | Website URL |
