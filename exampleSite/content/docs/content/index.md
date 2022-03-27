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

## Summary Selection Order

1. If `post.excerpt = "description"` and `description` is not empty, then it'll be used.
1. Manual splitting via <code>&lt;!--more--&gt;</code>.
1. If `summary` on front matter isn't empty, then `summary` will be selected.
1. The text of content will be cut off by `post.excerptMaxLength` and formatted in plain text or HTML when `post.plainifyExcerpt = true`.

```toml {title="config/_default/params.toml"}
[post]
  # excerpt = "description"
  # excerptMaxLength = 120
  # copyright = false # Whether to display copyright section on each post.
  # plainifyExcerpt = false # Format excerpt in HTML if false.
```

## Thumbnail Selection Order

1. The `images` on front matter are preferred.
1. Page images resources that match the filename's patterns: `*feature*`, `*cover*` and `*thumbnail*`. Such as `posts/my-page/feature.png`.

> The page images resources will be resized to several smaller versions to suit the users devices for saving the bandwidth.

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

```toml {title="config/_default/params.toml"}
pinnedPost = false # Disable pinned posts globally.
pinnedPostCount = 2 # The number of pinned posts shown on home page.
```

## Carousel

Showing posts on carousel.

```markdown
+++
carousel = true
+++
```

## Up Next

- [Tweak Configuration]({{< ref "/docs/configuration" >}})
- [Menu]({{< ref "/docs/menu" >}})
- [Look and Feel]({{< ref "/docs/look-and-feel" >}})
