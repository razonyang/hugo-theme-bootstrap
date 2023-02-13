+++
title = "Comments Widget"
date = 2021-11-27T19:54:29+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "Comments",
  "Widget"
]
tags = [
  "Disqus",
  "Utterances",
  "Giscus",
  "Staticman"
]
series = [
  "Docs"
]
images = []
aliases = [
  "/en/posts/widgets/comments"
]
authors = ["RazonYang"]
[menu.footer]
  parent = "features"
  weight = 7
  [menu.footer.params]
    icon = '<i class="fas fa-fw fa-comments text-success"></i>'
+++

[Disqus](https://disqus.com/), [Utterances](https://utteranc.es/) and [Giscus](https://giscus.app/) comments widgets are supported out of box.
This article shows how to configure them and even customize your own comment widgets.

<!--more-->

## Disqus

[Disqus](https://disqus.com/) comments widget is supported by Hugo.

```toml
disqusShortname = "yourdiscussshortname"
```

> Please keep in mind that `disqusShortname` is a site's configuration, **not** a parameter. Put it in the `params` won't work.

## Utterances

[Utterances](https://utteranc.es/) is a lightweight comments widget built on GitHub issues.

```toml
[utterances]
  repo = "user/repo"
  #issueTerm = "pathname" # pathname, url, title, og:title.
  #label = "comment" # Optional.
  #theme = ""
```

> Unlike Disqus, Utterances **is** a parameter. You should put it in the `params`.

### Parameters

| Name | Type | Default | Description |
|:---|:---|:---|:---
| `utterances.repo` | String | - | GitHub repository.
| `utterances.issueTerm` | String | `pathname` | The mapping between blog posts and GitHub issues: `pathname` | `pathname`, `url`, `title` and `og:title`.
| `utterances.label` | String | - | The label that will be assigned to issues created by Utterances.
| `utterances.theme` | String | - | `github-light` and `github-dark` will be used in light and dark mode respectively if not set. Optional values: `github-light`, `github-dark`, `preferred-color-scheme`, `github-dark-orange`, `icy-dark`, `dark-blue` and `photon-dark`.

### Troubleshooting

- Make sure the repo is public, otherwise your readers will not be able to view the issues/comments.
- Make sure the [utterances app](https://github.com/apps/utterances) is installed on the repo, otherwise users will not be able to post comments.
- If your repo is a fork, navigate to its settings tab and confirm the issues feature is turned on.

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

## Custom Comments Widget

We don't intend to support all comments widgets, but don't worry, you can customize your own comments widget.

> You will need to disable the others before creating your own comments widget.

```bash
mkdir -p layouts/partials/post/comments
echo "MY COMMENTS WIDGET" > layouts/partials/post/comments/custom.html
```

In the meantime, you may need to introduce third-party assets, which can be solved by [customizing assets]({{< ref "/docs/advanced/custom-assets" >}}) or [Hooks]({{< ref "/docs/advanced/hooks" >}}) easily.
