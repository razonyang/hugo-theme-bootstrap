+++
# type = "docs"
title = "PurgeCSS"
date = 2022-07-25T12:06:00+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["PurgeCSS"]
tags = []
series = ["Docs"]
images = []
+++

The PurgeCSS is an awesome tool that remove unused CSS from your site.
In this section, we will dive into how the PurgeCSS work, and what should we pay attention to.

<!--more-->

## How it Works?

The PurgeCSS requires the following configuration to be set.

{{< code-toggle filename="config" >}}
{{% config/build-write-stat %}}
{{</ code-toggle >}}

It tells Hugo to calculate used tags, classes and ids, and then generates the `hugo_stats.json`.

{{% code/purgecss-hugo-stats %}}

Finally PurgeCSS relies on this file to purge unused CSS.

> The PurgeCSS works only under `production` environment.

> We **DO NOT** recommend overriding `postcss.config.js` and `assets/main/config/rtl/postcss.config.js`, otherwise unexpected problems will occur during version updates.

## Limitations

**The `hugo_stats.json` only works in `*.html` templates**, that is, any CSS classes, tags and ids used on JavaScript files will still be purged.

But don't worry, there are two ways to solve this problem.

### Extra Stats

Just create a file called `extra_stats.json` with the same form of `hugo_stats.json` on your site root, and put the extra CSS into it manually.

> `extra_stats.json` MUST be committed to your repo.

### Put HTML Block into `*.html` Files

A common scenario is rendering HTML blocks using JavaScript, if you're using JavaScript to generate DOM element, any used CSS will be ignored by `hugo_stats.json`. Of course you can add it to `extra_stats.json` manually, but there is a better way to do that via template engine.

1. Firstly, we'll need to define a template block in `*.html` partials.

{{% code/purgecss-template-partial %}}

Hugo will calculate used CSS into `hugo_stats.json`.

{{% code/purgecss-template-stat %}}

As you can see, the CSS(`custom-widget-bar`) used inside `<script>` tag won't be included into `hugo_stats.json`, so we should use other HTML tags with the `d-none` class to wrap your template.

> `d-none` is a Bootstrap CSS utility, equals to `display: none`.

1. And then render the template via any template engines.

{{% code/purgecss-template-js %}}

## Testing

You'll need to specify the `production` environment for local testing via `hugo server -e production -b http://localhost:1313`, since the PurgeCSS only works on `production` environment.

Sometimes PurgeCSS and PostProcess don't work very well, so you may need to restart Hugo Server occasionally.
