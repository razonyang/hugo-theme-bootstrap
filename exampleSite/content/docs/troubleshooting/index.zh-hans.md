+++
title = "问题排查"
linkTitleIcon = '<i class="fas fa-bug fa-fw text-danger"></i>'
date = 2022-03-19T13:46:41+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["问题排查"]
tags = []
series = []
images = []
authors = ["RazonYang"]
navWeight = 20
+++

本文列出了一些常见问题，以便你可以轻松解决它们。

<!--more-->

## CSS rendering incorrectly

![Purge CSS](https://imgur.com/JsEU5D8.png)

The problem probably due to the `postcss`, HBS need the following configuration to be set up, `postcss` rely on the file `hugo_stats.json` for purging unused CSS.

```toml {title="config/_default/config.toml"}
[build]
  writeStats = true
```

## js.Build: Could not resolve dependencies

```text
Start building sites … 
hugo v0.94.0-63B23660+extended linux/amd64 BuildDate=2022-03-10T09:46:36Z VendorInfo=gohugoio
ERROR 2022/03/19 14:03:50 js.Build failed: Could not resolve "bootstrap/js/src/offcanvas"
ERROR 2022/03/19 14:03:50 js.Build failed: Could not resolve "bootstrap/js/src/modal"
ERROR 2022/03/19 14:03:50 js.Build failed: Could not resolve "bootstrap/js/src/tab"
ERROR 2022/03/19 14:03:50 js.Build failed: "/home/razonyang/Projects/razonyang/hugo-theme-bootstrap/assets/js/collapse/collapse.ts:1:38": Could not resolve "bootstrap/js/src/collapse"
ERROR 2022/03/19 14:03:50 js.Build failed: "/home/razonyang/Projects/razonyang/hugo-theme-bootstrap/assets/js/toc/index.ts:1:27": Could not resolve "bootstrap/js/dist/offcanvas"
ERROR 2022/03/19 14:03:50 js.Build failed: Could not resolve "@fortawesome/free-solid-svg-icons"
ERROR 2022/03/19 14:03:50 js.Build failed: Could not resolve "@fortawesome/free-regular-svg-icons"
ERROR 2022/03/19 14:03:50 js.Build failed: Could not resolve "@fortawesome/free-brands-svg-icons"
ERROR 2022/03/19 14:03:50 js.Build failed: Could not resolve "workbox-routing"
ERROR 2022/03/19 14:03:50 js.Build failed: Could not resolve "workbox-strategies"
ERROR 2022/03/19 14:03:50 js.Build failed: Could not resolve "workbox-cacheable-response"
ERROR 2022/03/19 14:03:50 js.Build failed: Could not resolve "workbox-expiration"
ERROR 2022/03/19 14:03:50 js.Build failed: Could not resolve "workbox-precaching"
ERROR 2022/03/19 14:03:50 js.Build failed: "/home/razonyang/Projects/razonyang/hugo-theme-bootstrap/assets/search/search.ts:1:21": Could not resolve "mustache"
ERROR 2022/03/19 14:03:50 js.Build failed: "/home/razonyang/Projects/razonyang/hugo-theme-bootstrap/assets/search/search.ts:1:17": Could not resolve "mark.js/dist/mark.js"
ERROR 2022/03/19 14:03:50 js.Build failed: Could not resolve "bootstrap/js/src/offcanvas"
ERROR 2022/03/19 14:03:50 js.Build failed: Could not resolve "bootstrap/js/src/modal"
ERROR 2022/03/19 14:03:50 js.Build failed: Could not resolve "bootstrap/js/src/tab"
ERROR 2022/03/19 14:03:50 js.Build failed: "/home/razonyang/Projects/razonyang/hugo-theme-bootstrap/assets/js/collapse/collapse.ts:1:38": Could not resolve "bootstrap/js/src/collapse"
ERROR 2022/03/19 14:03:50 js.Build failed: "/home/razonyang/Projects/razonyang/hugo-theme-bootstrap/assets/js/toc/index.ts:1:27": Could not resolve "bootstrap/js/dist/offcanvas"
ERROR 2022/03/19 14:03:50 js.Build failed: Could not resolve "bootstrap/js/src/offcanvas"
ERROR 2022/03/19 14:03:50 js.Build failed: Could not resolve "bootstrap/js/src/modal"
ERROR 2022/03/19 14:03:50 js.Build failed: Could not resolve "bootstrap/js/src/tab"
ERROR 2022/03/19 14:03:50 js.Build failed: "/home/razonyang/Projects/razonyang/hugo-theme-bootstrap/assets/js/collapse/collapse.ts:1:38": Could not resolve "bootstrap/js/src/collapse"
ERROR 2022/03/19 14:03:50 js.Build failed: "/home/razonyang/Projects/razonyang/hugo-theme-bootstrap/assets/js/toc/index.ts:1:27": Could not resolve "bootstrap/js/dist/offcanvas"
ERROR 2022/03/19 14:03:51 js.Build failed: Could not resolve "bootstrap/js/src/offcanvas"
ERROR 2022/03/19 14:03:51 js.Build failed: Could not resolve "bootstrap/js/src/modal"
ERROR 2022/03/19 14:03:51 js.Build failed: Could not resolve "bootstrap/js/src/tab"
ERROR 2022/03/19 14:03:51 js.Build failed: "/home/razonyang/Projects/razonyang/hugo-theme-bootstrap/assets/js/collapse/collapse.ts:1:38": Could not resolve "bootstrap/js/src/collapse"
ERROR 2022/03/19 14:03:51 js.Build failed: "/home/razonyang/Projects/razonyang/hugo-theme-bootstrap/assets/js/toc/index.ts:1:27": Could not resolve "bootstrap/js/dist/offcanvas"
ERROR 2022/03/19 14:03:51 TOCSS: failed to transform "viewer/scss/index.scss" (text/x-scss): SCSS processing failed: file "stdin", line 1, col 1: File to import not found or unreadable: viewerjs/dist/viewer. 
ERROR 2022/03/19 14:03:51 JSBUILD: failed to transform "main/js/bundle.ts" (application/typescript): Could not resolve "bootstrap/js/src/dropdown"
ERROR 2022/03/19 14:03:51 JSBUILD: failed to transform "icons/index.js" (application/javascript): Could not resolve "@fortawesome/fontawesome-svg-core"
ERROR 2022/03/19 14:03:51 JSBUILD: failed to transform "service-worker/bundle.ts" (application/typescript): Could not resolve "workbox-core"
ERROR 2022/03/19 14:03:51 JSBUILD: failed to transform "viewer/js/index.ts" (application/typescript): Could not resolve "viewerjs"
Error: Error building site: JSBUILD: failed to transform "search/index.ts" (application/typescript): "/home/razonyang/Projects/razonyang/hugo-theme-bootstrap/assets/search/search.ts:1:17": Could not resolve "fuse.js"
```

It is due to the lack of CSS and JS dependencies:

```bash
$ hugo mod npm pack
$ npm install
$ hugo server
```
