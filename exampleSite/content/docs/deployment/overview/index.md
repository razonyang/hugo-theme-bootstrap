+++
# type = "docs"
title = "Deployment Overview"
linkTitle = "Overview"
date = 2022-07-27T18:00:25+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["Deployment"]
tags = []
series = ["Docs"]
images = []
navWeight = 10
+++

In this section, we are going to talk about the key points of deployments to avoid most problems during deployment.

<!--more-->

## Build Tools

As [Prerequisites]({{< ref "docs/getting-started/prerequisites" >}}) mentioned, you'll need to set up those tools on your deployment environment.

## Installing Dependencies

We use NPM for managing the theme's dependencies, it's necessary to install the dependencies on deployment environment, since we **SHOULD NOT** commit the `node_modules` folder.

```bash
$ npm i
```

> `npm i` is the shortcut of `npm install`.

> The `package.json` and `package-lock.json` MUST be committed, npm relies on the former, the later will save the installation time.

## Building Site

It's time to build the site after installing the dependencies.

```bash
$ hugo --gc --minify
```

- `--minify` minify the final HTML.

> You can change the `baseURL` via the `-b` flag.

The command generated the site and save it under the `public` directory by default.

## Deploying Site

This step depends on the which deployment methods you use.

### Deployment Methods

1. [Docker]({{< ref "docs/deployment/docker" >}})
1. [GitHub Pages]({{< ref "docs/deployment/github-pages" >}})
1. [Netlify]({{< ref "docs/deployment/netlify" >}})
1. [Cloudflare Pages]({{< ref "docs/deployment/cloudflare-pages" >}})
1. [GitLab Pages]({{< ref "docs/deployment/gitlab-pages" >}})
1. Find more on [Hosting & Deployment](https://gohugo.io/hosting-and-deployment/)

## Further Reading

- [Performance]({{< ref "docs/advanced/performance" >}})
