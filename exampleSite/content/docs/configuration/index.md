+++
title = "Configuration"
date = 2021-11-27T19:53:24+08:00
featured = true
comment = true
toc = true
reward = true
pinned = true
categories = [
  "Configuration"
]
tags = [
]
series = [
  "Docs"
]
images = []
weight = 990
aliases = [
  "/en/posts/configuration"
]
[menu.footer]
  parent = "docs"
  weight = 2
+++

As the example site shown, we use [Configuration Directory](https://gohugo.io/getting-started/configuration/#configuration-directory) to maintain easier organization and environment specific settings, it is especially useful on multilingual sites.

<!--more-->

## Site Configuration

> The site configuration is located in `config/_default/config.toml` by default.

| Name | Type | Default | Description
|---|:-:|:-:|---
| `title` | String | - | Site title.
| `baseURL` | String | - | Site base URL.
| `copyright` | String | - | Site copyright. The `{year}` placeholder will be replaced with this year.
| `defaultContentLanguage` | String | `en` |
| `defaultContentLanguageInSubdir` | Boolean | `false` |
| `paginate` | Integer | `10` |
| `paginatePath` | String | `page` |
| `enableRobotsTXT` | Boolean | `true` |
| `disqusShortname` | String | - | [Disqus]({{< ref "/docs/widgets/comments#disqus" >}}) shortname.
| `googleAnalytics` | String | - | Google Analytics.
| `social` | Object | - | [Social Links]({{< ref "/docs/widgets/social-links" >}}).
| `author` | Object | - | [Author Widget]({{< ref "/docs/widgets/author" >}}).

See also [All Configuration Settings](https://gohugo.io/getting-started/configuration/#all-configuration-settings).

## Site Parameters

> The site parameters are located in `config/_default/params.toml` by default.

| Name | Type | Default | Description
|---|:-:|:-:|---
| **Page** 
| `mainSections` | Array | `["posts"]` | Main sections
| `titleCase` | Boolean | `false` | Capitalized title or not
| `titleSeparator` | String | `-` | Title separator
| `comment` | Boolean | `true` | Whether to enable comments
| `toc` | Boolean | `true` | Whether to enable TOC
| `tocWordCount` | Integer | `280` | TOC is displayed only if the post's word count is greater than this value.
| `breadcrumb` | Boolean | `true` | Whether to enable breadcrumb
| `dateFormat` | String | `Jan 2, 2006` | Date format. Checkout the [Hugo Date and Time Templating Reference](https://gohugo.io/functions/format/#hugo-date-and-time-templating-reference) for details.
| `poweredBy` | Boolean | `true` | Whether to show powered by.
| `readingTime` | Boolean | `true` | Whether to display the reading time.
| `postDate` | Boolean | `true` | Whether to display the post date in the post meta section.
| `math` | Boolean | `false` | Whether to enable math globally.
| `diagram` | Boolean | `false` | Whether to enable diagram globally.
| `logo` | String/Boolean | `images/logo.webp` | Logo image. Disable logo by setting it to `false`.
| `brand` | String | - | Brand text.
| `description` | String | - | Site description.
| `keywords` | String | - | Site keywords.
| `color` | String | - | Color mode, `light`, `dark` or dynamic. Default to dynamic.
| `palette` | String | - | Default palette. This will take effect after clearing the Cookie.
| `palettes` | Array | **ALL** | Available palettes. You can disable it by setting it to empty `[]`.
| `featuredPostCount` | Integer/Boolean | `5` | The number of featured posts shown in sidebar. Turn off by setting it to `false`.
| `recentPostCount` | Integer/Boolean | `5` | The number of recent posts shown in sidebar. Turn off by setting it to `false`.
| `relatedPostCount` | Integer/Boolean | `5` | The number of related posts. Turn off by setting it to `false`.
| `categoryCount` | Integer/Boolean | `10` | The number of categories shown in sidebar. Turn off by setting it to `false`.
| `tagCount` | Integer/Boolean | `10` | The number of tags shown in sidebar. Turn off by setting it to `false`.
| `seriesCount` | Integer | `10` | The number of series shown in sidebar.
| `taxonomyPaginate` | Integer | `10` |
| `taxonomyPostCount` | Integer | `3` | The number of taxonomy's posts. Turn off by setting it to false.
| `countTaxonomyPosts` | Boolean | `false` | Count posts of taxonomy.
| `sidebarTaxonomies` | Array | `["series", "categories", "tags"]` | The taxonomies on the sidebar.
| `fullWidth` | Boolean | `false` | Full width.
| `fixedHeader` | Boolean | `true` | Turn on/off fixed header.
| `reward` | Object | - | [Reward Widget]({{< ref "/docs/widgets/reward" >}}), AKA Buy Me a Coffee Widget.
| `share` | Object | - | Share buttons
| `share.addThis` | String | - | [AddThis](https://www.addthis.com)'s `pubid`.
| `fontSize` | Object | Font Sizes | Comment or remove this parameter to disable font size switcher.
| `fontSize.small` | String | `.9rem` | Small font size.
| `fontSize.extraSmall` | String | `.8rem` | Extra small font size.
| `fontSize.large` | String | `1.1rem` | Large font size.
| `fontSize.extraLarge` | String | `1.2rem` | Extra large font size.
| `socialShare` | Boolean | `true` | Turn on/off built-on social share button.
| `searchBar` | Boolean | `true` | Turn on/off built-on search bar.
| `archive` | Object | - | [Archive]({{< ref "/docs/layouts/archives" >}}).
| `search` | Object | - | [Search]({{< ref "/docs/layouts/search" >}}).
| **Webmaster Site Verification** 
| `siteVerification` | Object | - |
| `siteVerification.google` | String | - | Google
| `siteVerification.bing` | String | - | Bing
| `siteVerification.baidu` | String | - | Baidu
| `siteVerification.baiduUnion` | String | - | Baidu Union
| `siteVerification.so` | String | - | Qihoo 360
| `siteVerification.sogou` | String | - | Sogou
| `siteVerification.shenma` | String | - | Shenma
| **Analytics** 
| `analytics` | Object | - | Analytics configuration.
| `analytics.baidu` | String | - | Baidu Analytics.
| `googleAdsense` | String | - | Google Adsense.
| `customCSS` | Array | - | See also [custom assets]({{< ref "/docs/custom-assets#external-assets" >}}).
| `customJS` | Array | - | See also [custom assets]({{< ref "/docs/custom-assets#external-assets" >}}).
| `utterances` | Object | - | [Utterances]({{< ref "/docs/widgets/comments#utterances" >}}) configuration.
| **Creative Commons License**
| `creativeCommons` | Object | - |
| `creativeCommons.by` | Boolean | `true` | Credit must be given to you, the creator.
| `creativeCommons.nc` | Boolean | `true` | Only noncommercial use of your work is permitted.
| `creativeCommons.nd` | Boolean | `true` | No derivatives or adaptations of your work are permitted.
| `creativeCommons.sa` | Boolean | `true` | Adaptations must be shared under the same terms.
| **Code Block** 
| `codeBlock` | Object | - | 
| `codeBlock.maxLines` | Integer | `7` | 
| `codeBlock.lineNos` | Boolean | `true` | `true`/`false` represents that show/hide the line numbers by default.
| **Post** 
| `post` | Object | - | 
| `post.excerpt` | String | `Summary` | Options: `description`
| `post.excerptMaxLength` | Integer | `320` |
| `post.copyright` | Boolean | `true` | Whether to display copyright section on each post.
| `post.plainifyExcerpt` | Boolean | `true` | Format excerpt in HTML if `false`.
| `viewer` | Boolean | true | [Image Viewer]({{< ref "docs/image-viewer" >}})
| `pwa` | Object | - | [Progressive Web Apps]({{< ref "/docs/pwa" >}})
| **Meta Tag**
| `metaRobots` | String | - | Empty means that turn it off.
| `contact` | Object | - | [Contact Form]({{< ref "docs/layouts/contact-form" >}})
| `pinnedPost` | Boolean | `true` | Turn on/off pinned posts.
| `pinnedPostCount` | Integer | `1` | The number of pinned posts.

> Except the Google webmaster tool, the other webmaster tools cannot work with `hugo --minify`, because they cannot recognize the minified meta tag.

## Page Parameters

> Page parameters are located in page's [Front Matter](https://gohugo.io/content-management/front-matter/).

| Name | Type  | Default | Description
|---|:-:|:-:|---
| **Page** 
| `description` | String | - | Page description.
| `keywords` | Array | - | Page keywords.
| `comment` | Boolean | `true` | Whether to enable comments. It won't work if `comment` has been disabled globally.
| `toc` | Boolean | `true` | Whether to enable TOC. It won't work if `toc` has been disabled globally.
| `math` | Boolean | `false` | Whether to enable math.
| `diagram` | Boolean | `false` | Whether to enable diagram.
| `reward` | Boolean | `true` | Whether to enable reward.
| `breadcrumb` | Boolean | `true` | Whether to enable breadcrumb.
| `readingTime` | Boolean | `true` | Whether to display the reading time.
| `postDate` | Boolean | `true` | Whether to display the post date in the post meta section.
| `copyright` | Boolean | `true` | Whether to display copyright section.
| **Creative Commons License**
| `creativeCommons` | Object | - |
| `creativeCommons.by` | Boolean | `true` | Credit must be given to you, the creator.
| `creativeCommons.nc` | Boolean | `true` | Only noncommercial use of your work is permitted.
| `creativeCommons.nd` | Boolean | `true` | No derivatives or adaptations of your work are permitted.
| `creativeCommons.sa` | Boolean | `true` | Adaptations must be shared under the same terms.
| **Meta Tag**
| `metaRobots` | String | - | Empty means that turn it off.
| `pinned` | Boolean | `false` | Pinning posts.
| `featuredPostCount` | Integer/Boolean | `5` | The number of featured posts shown in sidebar. Turn off by setting it to `false`.
| `recentPostCount` | Integer/Boolean | `5` | The number of recent posts shown in sidebar. Turn off by setting it to `false`.
| `relatedPostCount` | Integer/Boolean | `5` | The number of related posts. Turn off by setting it to `false`.
