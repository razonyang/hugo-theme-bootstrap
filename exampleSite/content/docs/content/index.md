+++
title = "Adding Content"
linkTitle = "Content"
date = 2021-12-04T10:43:39+08:00
featured = true
comment = true
toc = true
reward = true
pinned = false
categories = [
]
tags = [
  "Authoring",
  "Articles"
]
series = [
  "Docs"
]
images = []
weight = 970
[menu.footer]
  parent = "docs"
  weight = 5
+++

## Main Sections

The `mainSections` parameter is used to filter pages, default to `["posts", "docs"]`.

```toml {title="config/_default/params.toml"}
mainSections = ["blog", "posts", "docs", "notes"]
```

## Content Types

You may want to use `docs` layout in other sections instead of `/docs`, such as `/notes`.
It's easy to do that by setting `type = "docs"` on the front matter. 

## Archetypes

We can also create a archetype for `notes`, let's Hugo take care of the `type`.

```shell
$ cp themes/hugo-theme-bootstrap/archetypes/default.md archetypes/notes.md
```

And the append `type = "docs"` on the front matter of `archetypes/notes.md`. Now, `hugo new notes/blah-blah-blah` will copy the content of `archetypes/notes.md` to your new notes.

Similarly, you can also custom the archetypes for `posts`, `docs` and so on.

## Sections Template

You may also want to use the same list layout of `docs` on `notes`.

```html {title="layouts/notes/list.html"}
{{ define "content" }}
{{- partial "docs/catalog" . -}}
<div class="col-lg-7 ms-auto">
  {{ partial "docs/list" . }}
</div>
{{- partial "docs/sidebar" . -}}
{{ end }}
```

## Write New Articles

> Suppose the default language is `en`.

```shell
$ hugo new posts/new-post/index.md
```

The command above create a new post written in English. Similarly, we can create a post written in Simplified Chinese:

```shell
$ hugo new posts/new-post/index.zh-cn.md
```

> Please remind that, the created posts are generally in draft state. You'll need to specify the `-D` parameter of the command `hugo server` for previewing.
> Similarly, you need to change the `draft` to `false` or remove `draft` parameter if you want to publish the article.

## Pinning Posts

You can pin posts on the home page by setting `pinned` to `true` on the front matter.

```markdown
+++
title = "Pinned Post"
pinned = true
weight = 100
+++
```

> If there is multiple pinned posts, they are sorted by `weight` in descending order.

### Site Parameters

```toml {title="config/_default/params.toml"}
pinnedPost = false # Disable pinned posts globally.
pinnedPostCount = 2 # The number of pinned posts shown on home page.
```

## Up Next

- [Tweak Configuration]({{< ref "/docs/configuration" >}})
- [Menu]({{< ref "/docs/menu" >}})
- [Look and Feel]({{< ref "/docs/look-and-feel" >}})
