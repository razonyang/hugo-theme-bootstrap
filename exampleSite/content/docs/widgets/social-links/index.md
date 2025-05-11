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

Set up social links by editing a file `config/_default/params.toml` with the following content:

```toml
[author.social]
  email = "user@domain.tld"
  github = "githubusername"
```

### Footer

Set up social links by putting the following content in `config/_default/params.toml`.

```toml
[social]
email = "user@domain.tld"
github = "githubusername"
```

## Platforms

> The value can be changed to a full URL if necessary.

| Platform        | User Identifier                                              |
| --------------- | ------------------------------------------------------------ |
| `bibibili`      | BiliBili User ID                                             |
| `bitbucket`     | Bitbucket Workspace ID                                       |
| `codeberg`      | Codeberg Username                                            |
| `discord`       | Discord Invite Code                                          |
| `discourse`     | Forum URL                                                    |
| `dockerhub`     | Docker Hub Username                                          |
| `email`         | Email Address                                                |
| `facebook`      | Facebook Username                                            |
| `facebookgroup` | Facebook Group Name                                          |
| `github`        | GitHub Username                                              |
| `gitlab`        | GitLab Username                                              |
| `instagram`     | Instagram Username                                           |
| `itchio`        | itch.io Username                                             |
| `kaggle`        | Kaggle Username                                              |
| `lastfm`        | Last.fm Username                                             |
| `liberapay`     | Liberapay Username                                           |
| `linkedin`      | LinkedIn Username                                            |
| `mastodon`      | Mastodon Username                                            |
| `medium`        | Medium Username or custom domain(e.g. https://razonyang.com) |
| `patreon`       | Patreon Username                                             |
| `paypal`        | Paypal Username                                              |
| `pinterest`     | Pinterest Username                                           |
| `qq`            | QQ Number                                                    |
| `quora`         | Quora Username                                               |
| `reddit`        | Reddit Username                                              |
| `rss`           | Empty string for disabling the RSS link                      |
| `stackoverflow` | Stack Overflow User ID                                       |
| `telegram`      | Telegram Username                                            |
| `tiktok`        | TikTok Username                                              |
| `tipeee`        | Tipeee Username                                              |
| `tumblr`        | Tumblr Username                                              |
| `twitter`       | Twitter Username                                             |
| `website`       | Website URL                                                  |
| `weibo`         | Weibo Username                                               |
| `x`             | X username                                                   |
| `youtube`       | Youtube Channel ID                                           |
| `zhihu`         | Zhihu Username                                               |
