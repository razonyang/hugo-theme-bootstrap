+++
title = "Configuration Structure"
linkTitle = "Structure"
date = 2021-11-27T19:53:24+08:00
featured = false
comment = true
toc = true
reward = true
pinned = false
categories = [
  "Configuration"
]
tags = [
]
series = [
  "Docs"
]
images = []
navWeight = 1000
authors = ["RazonYang"]
+++

As the example site shown, we use [Configuration Directory](https://gohugo.io/getting-started/configuration/#configuration-directory) to maintain easier organization and environment specific settings, it is especially useful on multilingual sites.

<!--more-->

{{% code/configuration-structure %}}

> Hugo supports multiple configuration formats: `TOML`, `YAML` and `JSON`, change it at will.

- `_default` contains the default configurations.
- `production` configurations will override the default configurations on production environment.
- You can also define more environment configurations, such as `development`(the default environment of `hugo server`), `testing`, `staging`. And then specify the environment via `-e` flag.
- The configurations filename with language code affected take effect only on that language site, such as `config.zh-hans.toml`, it's useful to separate configurations and parameters from different languages.

> The multilingual configurations doesn't work on `author` configurations, that is, `author.zh-hans.toml` will not take effect.
> The `config`, `params`, `menu` and `menus` are known that supported multilingual configuring.
