+++
title = "评论小部件"
date = 2021-11-27T19:54:29+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "评论",
  "小部件"
]
tags = [
  "Disqus",
  "Utterances",
  "Giscus",
  "Staticman"
]
series = [
  "文档"
]
images = []
aliases = [
  "/zh-cn/posts/widgets/comments"
]
authors = ["RazonYang"]
[menu.footer]
  parent = "features"
  weight = 7
  [menu.footer.params]
    icon = '<i class="fas fa-fw fa-comments text-success"></i>'
+++

[Disqus](https://disqus.com/)、[Utterances](https://utteranc.es/) 和 [Giscus](https://giscus.app/) 评论小部件都是开箱即用的。本文将展示如何配置它们，甚至自定义你自己的评论小部件。

<!--more-->

## Disqus

[Disqus](https://disqus.com/) 评论小部件由 Hugo 提供支持。

```toml
disqusShortname = "yourdiscussshortname"
```

> 请注意：`disqusShortname` 是站点配置，而非参数。将其放在 `params` 是行不通的。

## Utterances

[Utterances](https://utteranc.es/) 是一个基于 GitHub issue 的轻量级的评论挂件。

```toml
[utterances]
  repo = "user/repo"
  #issueTerm = "pathname" # pathname, url, title, og:title.
  #label = "comment" # Optional.
  #theme = ""
```

> 不同于 Disqus，Utterances 是一个参数。请将其放置在 `params`。

### 参数

| 名称 | 类型 | 默认值 | 描述 |
|:---|:---|:---|:---
| `utterances.repo` | String | - | GitHub 仓库。
| `utterances.issueTerm` | String | `pathname` | 文章和 issue 之间的映射： `pathname` | `pathname`, `url`, `title` 和 `og:title`。
| `utterances.label` | String | - | 此标签将会分配给 Utterances 创建的 issue。
| `utterances.theme` | String | - | 如果未设置任何主题，亮色和暗色模式会分别使用 `github-light` 和 `github-dark`。 可选值： `github-light`, `github-dark`, `preferred-color-scheme`, `github-dark-orange`, `icy-dark`, `dark-blue` 和 `photon-dark`。

### 故障排查

- 确保仓库是公开的，否则读者无法查看评论。
- 确保仓库已经安装了 [utterances app](https://github.com/apps/utterances)，否则用户无法发表评论。
- 如果你的仓库是克隆的，请在设置中确保已经启用了 issues 功能。

## Giscus

[Giscus](https://giscus.app/) is a lightweight comments widget built on GitHub discussions.

```toml
[giscus]
  repo = "user/repo"
  repoId = ""
  category = ""
  categoryId = ""
```

### Parameters

| Name | Type | Default | Description |
|:---|:---|:---|:---
| `giscus.repo` | String | - | GitHub repository. Required.
| `giscus.repoId` | String | - | GitHub repository ID. Required.
| `giscus.category` | String | - | Discussions category. Required.
| `giscus.categoryId` | String | - | Discussions category ID. Required.
| `giscus.theme` | String | - | Left it empty if you want to follow the theme mode.
| `giscus.mapping` | String | `pathname` | The mapping between blog posts and GitHub discussions: `pathname`, `url`, `title` and `og:title`.
| `giscus.inputPosition` | String | `top` | The input position: `top` or `bottom`.
| `giscus.reactions` | Boolean | `true` | Turn on/off the reactions.
| `giscus.metadata` | Boolean | `false` | Emit discussion metadata.
| `giscus.lang` | String | - | Specify language, default to site language.
| `giscus.lazyLoading` | Boolean | `true` | Enable lazy loading.

## Staticman

[Staticman](https://staticman.net/) is also supported out of box, but it may be too complex to set it up.

### Advantages

- The comments files are stored inside your repository, that is, the comments are rendered during the site build. It maybe useful for SEO, since it doesn't rely JS to load data dynamically, it's truly static.
- Handling spam: approve or reject comment via Git provider pull request, Google reCaptcha.
- Native theme style.

### Disadvantages

- The user information are untrusted, such as email.
- User unable to delete their comments directly, it's able to do that via Pull Request.

### Preparations

#### Staticman instance

Firstly, we should set up a Staticman instance for handling comments requests.

##### Self-Hosted Staticman instance

Please see https://staticman.net/docs/getting-started.html#step-2-deploy-staticman for details.

##### Public Staticman instance

I set up a public staticman instance for testing, it should works with GitHub repositories only.

> You'll need to install the [GitHub App](https://github.com/apps/hbs-staticman) for your repo, so that the instance has access to write comments files to your repo.

- Endpoint: `https://hbs-staticman.herokuapp.com`

#### Staticman Configuration

Secondary, we need to create the `staticman.yml` under your site/repository root, so that Staticman instance can read the configuration and process comments requests.

{{% alert "warning" %}}
The `filename`, `path` are fixed, please **DO NOT** modify those parameters.
{{% /alert %}}

{{% alert "warning" %}}
The `allowedFields` MUST include `name`, `email`, `message`, `reply_to`, `root_id` fields.
{{% /alert %}}

```yaml
# Name of the property. You can have multiple properties with completely
# different config blocks for different sections of your site.
# For example, you can have one property to handle comment submission and
# another one to handle posts.
comments:
  # (*) REQUIRED
  #
  # Names of the fields the form is allowed to submit. If a field that is
  # not here is part of the request, an error will be thrown.
  allowedFields: ["name", "email", "url", "message", "reply_to", "root_id"]

  # (*) REQUIRED
  #
  # Name of the branch being used. Must match the one sent in the URL of the
  # request.
  branch: "main"

  # Text to use as the commit message or pull request title. Accepts placeholders.
  commitMessage: "Add Staticman comment"

  # (*) REQUIRED
  #
  # Destination path (filename) for the data files. Accepts placeholders.
  filename: "{@id}" # DO NOT MODIFY

  # The format of the generated data files. Accepted values are "json", "yaml"
  # or "frontmatter"
  format: "yaml"

  # List of fields to be populated automatically by Staticman and included in
  # the data file. Keys are the name of the field. The value can be an object
  # with a `type` property, which configures the generated field, or any value
  # to be used directly (e.g. a string, number or array)
  generatedFields:
    date:
      type: date
      options:
        format: "timestamp-seconds"

  # Whether entries need to be appproved before they are published to the main
  # branch. If set to `true`, a pull request will be created for your approval.
  # Otherwise, entries will be published to the main branch automatically.
  moderation: false

  # Name of the site. Used in notification emails.
  name: "hbs.razonyang.com"

  # Notification settings. When enabled, users can choose to receive notifications
  # via email when someone adds a reply or a new comment. This requires an account
  # with Mailgun, which you can get for free at http://mailgun.com.
  #notifications:
    # Enable notifications
    #enabled: true

    # (!) ENCRYPTED
    #
    # Mailgun API key
    #apiKey: "1q2w3e4r"

    # (!) ENCRYPTED
    #
    # Mailgun domain (encrypted)
    #domain: "4r3e2w1q"

  # (*) REQUIRED
  #
  # Destination path (directory) for the data files. Accepts placeholders.
  path: "data/{options.slug}" # DO NOT MODIFY

  # Names of required fields. If any of these isn't in the request or is empty,
  # an error will be thrown.
  requiredFields: ["name", "message"]

  # List of transformations to apply to any of the fields supplied. Keys are
  # the name of the field and values are possible transformation types.
  transforms:
    email: md5 # DO NOT MODIFY, REQUIRED BY AVATAR.

  reCaptcha:
    enabled: false
    siteKey: ""
    secret: 
```

#### Site Parameters

Finally, tweak the following `staticman` parameters in `params.toml`.

| Name | Type | Default | Description |
|:---|:---|:--:|:---
| `staticman` | Object | |
| `staticman.endpoint` | String | - | THe Staticman instance endpoint. Required.
| `staticman.repo` | String | - | Repository that with form `user/repo`. Required.
| `staticman.service` | String | `github` | 
| `staticman.branch` | String | `master` | Repository branch.
| `staticman.property` | String | `comments` |
| `staticman.sorting` | String | `asc` | Sorting comments, available options: `desc`.
| `staticman.reCaptchaKey` | String | `-` | The reCaptcha site key.
| `staticman.reCaptchaSecret` | String | `-` | The reCaptcha encrypted secret. You'll need to encrypt plain secret via https://yourstaticmaninstance/v3/encrypt/plainsecret.
| `staticman.extraFields` | Array | `-` | Extra fields. Available fields: `url`.
| `staticman.requiredFields` | Array | `-` | Extra required fields. Available fields: `email` and the extra fields. `name` and `message` are always required.
| `staticman.paginate` | Integer | `10` | The number of comments per page.
| `staticman.moderation` | Boolean | `true` | Same as Staticman's moderation.

#### reCaptcha

The reCaptcha secret is not the plain text version, you'll need to encrypt it via your Staticman instance `https://yourstaticmaninstance/v3/encrypt/PLAINSECRET`.

## 自定义评论小部件

我们不打算支持所有的评论小部件，但别担心，你完全可以自定义评论小部件。

> 在创建自己的评论小部件之前，需要禁用其他评论小部件。

```bash
mkdir -p layouts/partials/post/comments
echo "MY COMMENTS WIDGET" > layouts/partials/post/comments/custom.html
```

期间，你很可能需要引入第三方资源，不过这可以通过 [自定义资源]({{< ref "/docs/advanced/custom-assets" >}}) 或 [钩子]({{< ref "/docs/advanced/hooks" >}}) 轻松解决。
