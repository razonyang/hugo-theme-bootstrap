+++
title = "Page Parameters"
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
navWeight = 970
authors = ["RazonYang"]
+++

Page parameters are located in page's [Front Matter](https://gohugo.io/content-management/front-matter/).

<!--more-->

| Name | Type  | Default | Description
|---|:-:|:-:|---
| **Page** 
| `title` | String | - | Page title.
| `description` | String | - | Page description.
| `keywords` | Array | - | Page keywords.
| `comment` | Boolean | `true` | Whether to enable comments. It won't work if `comment` has been disabled globally.
| `toc` | Boolean | `true` | Whether to enable TOC. It won't work if `toc` has been disabled globally.
| `math` | Boolean | `false` | Whether to enable math.
| `diagram` | Boolean | `false` | Whether to enable diagram.
| `reward` | Boolean | `true` | Whether to enable reward.
| `breadcrumb` | Boolean | `true` | Whether to enable breadcrumb.
| `breadcrumbDivider` | String | `/` | Breadcrumb divider.
| `readingTime` | Boolean | `true` | Whether to display the reading time.
| `postDate` | Boolean | `true` | Whether to display the post date in the post meta section.
| `copyright` | Boolean | `true` | Whether to display copyright section.
| `carousel` | Boolean | `false` | Show on carousel.
| `nav` | Boolean | `true` | Turn on/off the navigations.
| `sidebar` | Boolean | `true` | Show/Hide the sidebar.
| `index` | Boolean | `true` | Index this page in client search engine or not.
| **Creative Commons License**
| `creativeCommons` | Object | - |
| `creativeCommons.by` | Boolean | `true` | Credit must be given to you, the creator.
| `creativeCommons.nc` | Boolean | `true` | Only noncommercial use of your work is permitted.
| `creativeCommons.nd` | Boolean | `true` | No derivatives or adaptations of your work are permitted.
| `creativeCommons.sa` | Boolean | `true` | Adaptations must be shared under the same terms.
| **Meta Tag**
| `metaRobots` | String | - | Empty means that turn it off.
| `pinned` | Boolean | `false` | Pinning posts.
| `pinnedWeight` | Number | - | Lower weight gets higher precedence.
| `featuredPostCount` | Integer/Boolean | `5` | The number of featured posts shown in sidebar. Turn off by setting it to `false`.
| `recentPostCount` | Integer/Boolean | `5` | The number of recent posts shown in sidebar. Turn off by setting it to `false`.
| `relatedPostCount` | Integer/Boolean | `5` | The number of related posts. Turn off by setting it to `false`.
| `featuredImageAlt` | String | - | The alternative text for featured images, fallback to page title if not present.
| `numberifyHeadings` | Boolean | `true` | When `false`, headings won't be numebrified.
