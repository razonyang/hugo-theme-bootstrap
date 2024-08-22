+++
title = "Adding Content"
linkTitle = "Content"
linkTitleIcon = '<i class="fas fa-newspaper fa-fw"></i>'
date = 2021-12-04T10:43:39+08:00
featured = false
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
navWeight = 970
authors = ["RazonYang"]
[menu.footer]
  parent = "docs"
  weight = 5
  [menu.footer.params]
    icon = '<i class="fas fa-newspaper fa-fw"></i>'
+++

## Main Sections

The `mainSections` parameter is used to filter pages, default to `["posts", "docs"]`.

```toml {title="config/_default/params.toml"}
mainSections = ["blog", "posts", "docs", "notes"]
```

## Front Matter

Front Matter is the place where we put page metadata and parameters, such as title, date and so on.

### Formats

Hugo supports three formats of front matter: `YAML`, `TOML` and `JSON`.

- `TOML`: identified by opening and closing `+++`.
- `YAML`: identified by opening and closing `---`.
- `JSON`: a single JSON object surrounded by `{` and `}`, followed by a new line.

Let's take `TOML` as an example:

```toml
+++
title = 'Hello world!'
+++
```

See also [Page Parameters]({{< ref "docs/configuration/page-params" >}}) and [Hugo Front Matter](https://gohugo.io/content-management/front-matter).

## Content Types

You may want to use `docs` layout in other sections instead of `/docs`, such as `/notes`.
It's easy to do that by setting `type = "docs"` on the front matter. 

## Archetypes

We can also create a archetype for `notes`, let's Hugo take care of the `type`.

```bash
$ cp themes/hugo-theme-bootstrap/archetypes/default.md archetypes/notes.md
```

And the append `type = "docs"` on the front matter of `archetypes/notes.md`. Now, `hugo new notes/blah-blah-blah` will copy the content of `archetypes/notes.md` to your new notes.

Similarly, you can also custom the archetypes for `posts`, `docs` and so on.

## Write New Articles

> Suppose the default language is `en`.

```bash
$ hugo new posts/new-post/index.md
```

The command above create a new post written in English. Similarly, we can create a post written in Simplified Chinese:

```bash
$ hugo new posts/new-post/index.zh-cn.md
```

> Please remind that, the created posts are generally in draft state. You'll need to specify the `-D` parameter of the command `hugo server` for previewing.
> Similarly, you need to change the `draft` to `false` or remove `draft` parameter if you want to publish the article.

## Summaries Selection Order

1. If the `description` is not empty, then it'll be used, to use summaries all the time, you should set the `post.excerpt` as _empty string_ explicitly.
1. Manual splitting via <code>&lt;!--more--&gt;</code>.
1. If `summary` on front matter isn't empty, then `summary` will be selected.
1. The text of content will be cut off by `post.excerptMaxLength` and formatted in plain text or HTML when `post.plainifyExcerpt = true`.

```toml {title="config/_default/params.toml"}
[post]
  # excerptMaxLength = 120
  # copyright = false # Whether to display copyright section on each post.
  # plainifyExcerpt = false # Format excerpt in HTML if false.
```

## Featured Images Selection Order

1. The `images` on front matter are preferred.
1. Page images resources that match the `*feature*` pattern. Such as `posts/my-page/feature.png`, `posts/my-page/featured-sample.jpg`.

The featured image doesn't show up above content by default, you'll need to turn on this feature by following parameter.

{{< code-toggle filename="config/_default/params" >}}
[post]
  featuredImage = true
{{< /code-toggle >}}

## Thumbnail Selection Order

1. The `images` on front matter are preferred.
1. Page images resources that match the filename's patterns: `*feature*`, `*cover*` and `*thumbnail*`. Such as `posts/my-page/feature.png`, `posts/my-page/thumnail.jpg`.

> The page images resources will be resized to several smaller versions to suit the users devices for saving the bandwidth.

## Pinning Posts

You can pin posts on the home page by setting `pinned` to `true` on the front matter.

```markdown
+++
title = "Pinned Post"
pinned = true
pinnedWeight = 100
+++
```

> If there is multiple pinned posts, they are sorted by `pinnedWeight` in descending order.

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

## Authors

HBS supports the authors taxonomy. Firstly, you'll need to enable it by setting the following configuration.

{{< code-toggle filename="config" >}}
[taxonomies]
  author = "authors"
{{</ code-toggle >}}

And then define the `authors` on your posts.

```toml
+++
authors = [
  "Foo",
  "Bar"
]
+++
```

Now, the authors will be present on the post meta and sidebar taxonomies.

Finally, we may need to introduce the author in more detail. Take the `Foo` as an example, just create a page with the following content and save it as `/content/authors/foo/index.md`.

```yaml
---
title: Razon Yang
description: Gopher, PHPer, Full Stack Engineer.
social:
  github: razonyang
  twitter: razonyang
---
```

- `title`: The author display name.
- `description`: The introduction.
- `social`: [Social links]({{< ref "/docs/widgets/social-links" >}}).

The author image should be placed at the same folder with pattern `avatar*`, such as `/content/authors/foo/avatar.png`. If there is no avatar, the `social.email` will be used to generate Gravatar avatar.

## Up Next

- [Tweak Configuration]({{< ref "/docs/configuration" >}})
- [Menu]({{< ref "/docs/configuration/menu" >}})
- [Look and Feel]({{< ref "/docs/look-and-feel" >}})
