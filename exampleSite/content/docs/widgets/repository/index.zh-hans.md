+++
# type = "docs"
title = "Repository Widget"
date = 2022-09-09T21:06:19+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["Widget"]
tags = ["Repository", "GitHub"]
series = ["文档"]
images = []
authors = ["RazonYang"]
+++

The repository widget shows the commit information about current page, it's useful for users to view or edit the source code.

<!--more-->

## Requirements

This widget relies on the [.GitInfo](https://gohugo.io/variables/git/), so you'll need to either enable it via the `--enableGitInfo` flag or setting the `enableGitInfo` as `true` in `config.toml`.

```bash
$ hugo --enableGitInfo
```

```toml {title="config.toml"}
enableGitInfo = true
```

## Site Parameters

| Name | Type | Default | Description
|---|:-:|:-:|---
| `repo` | Object | - |
| `repo.url` | String | - | Required. The URL of your public repository. GitHub and GitLab are supported.
| `repo.branch` | String | `master` | The branch name.
| `repo.subPath` | String | - | The sub path of content.
| `repo.dateFormat` | String | `02/01/2006, 15:04:05 PM` | The format of commit date. 

## Usage

The repository widget is disabled by default, you'll need to include widget via [Hooks]({{< ref "docs/advanced/hooks" >}}).

For `posts` layout.

```html {title="layouts/partials/hooks/sidebar-end.html"}
{{- partial "docs/repo" . }}
```

For `docs` layout.

```html {title="layouts/partials/hooks/docs/sidebar-end.html"}
{{- partial "docs/repo" . }}
```
