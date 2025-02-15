+++
title = "Site Parameters"
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
navWeight = 980
authors = ["RazonYang"]
+++

The site parameters are located in `config/_default/params.toml` by default.

<!--more-->

| Name | Type | Default | Description
|---|:-:|:-:|---
| `sass_transpiler` | string | `libsass` | `dartsass` is recommended, since `libsass` is deprecated.
| **Page** 
| `mainSections` | Array | `["posts"]` | Main sections
| `titleCase` | Boolean | `false` | Capitalized title or not
| `titleSeparator` | String | `-` | Title separator
| `backgroundImage` | Array | `[]` | Background image, such as `['/images/bg.png']`, `['/images/bg-light.png', '/images/bg-dark.png']`.
| `comment` | Boolean | `true` | Whether to enable comments
| `toc` | Boolean | `true` | Whether to enable TOC
| `tocWordCount` | Integer | `280` | TOC is displayed only if the post's word count is greater than this value.
| `tocPosition` | String | `sidebar` | Available values: `sidebar` and `content`, only the `posts` layout is affected.
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
| `color` | String | - | Color mode, `light`, `dark` or `auto`. Default to `auto`.
| `palette` | String | - | Default palette. This will take effect after clearing the Cookie.
| `palettes` | Array | **ALL** | Available palettes. You can disable it by setting it to empty `[]`.
| `carouselPostCount` | Integer | `5` | The number of posts shown on the homepage carousel.
| `featuredPostCount` | Integer/Boolean | `5` | The number of featured posts shown in sidebar. Turn off by setting it to `false`.
| `recentPostCount` | Integer/Boolean | `5` | The number of recent posts shown in sidebar. Turn off by setting it to `false`.
| `relatedPostCount` | Integer/Boolean | `5` | The number of related posts. Turn off by setting it to `false`.
| `categoryCount` | Integer/Boolean | `10` | The number of categories shown in sidebar. Turn off by setting it to `false`.
| `tagCount` | Integer/Boolean | `10` | The number of tags shown in sidebar. Turn off by setting it to `false`.
| `seriesCount` | Integer | `10` | The number of series shown in sidebar.
| `taxonomyPaginate` | Integer | `10` |
| `taxonomyPostCount` | Integer | `3` | The number of taxonomy's posts. Turn off by setting it to false.
| `taxonomySortingMethod` | String | - | Sorting taxonomies by `popularity`, sort alphabetically by default.
| `countTaxonomyPosts` | Boolean | `false` | Count posts of taxonomy.
| `sidebarTaxonomies` | Array | `["series", "categories", "tags"]` | The taxonomies on the sidebar.
| `fullWidth` | Boolean | `false` | Full width.
| `fullWidthInSections` | Object | - | Specify the full width for particular sections, such as `posts`, `docs`.
| `fixedHeader` | Boolean | `true` | Turn on/off fixed header.
| `reward` | Object | - | [Reward Widget]({{< ref "/docs/widgets/reward" >}}), AKA Buy Me a Coffee Widget.
| `externalLinkIcon` | Boolean | `true` | Whether to show the icons after the external links.
| `share` | Object | - | Share buttons
| `share.addThis` | String | - | [AddThis](https://www.addthis.com)'s `pubid`.
| `fontSize` | Object | Font Sizes | Comment or remove this parameter to disable font size switcher.
| `fontSize.small` | String | `.9rem` | Small font size.
| `fontSize.extraSmall` | String | `.8rem` | Extra small font size.
| `fontSize.large` | String | `1.1rem` | Large font size.
| `fontSize.extraLarge` | String | `1.2rem` | Extra large font size.
| `social` | Object | - | [Social Links]({{< ref "/docs/widgets/social-links" >}}).
| `socialAnimation` | Boolean | `true` | Remove animation from social links if `false`. |
| `socialColor` | Boolean | `true` | Remove color from social links if `false`. |
| `socialShare` | Boolean | `true` | Turn on/off built-on social share button.
| `searchBar` | Boolean | `true` | Turn on/off built-on search bar.
| `archive` | Object | - | [Archive]({{< ref "/docs/layouts/archives" >}}).
| `search` | Object | - | [Search]({{< ref "/docs/layouts/search" >}}).
| `docsearch` | Object | - | [DocSearch](https://docsearch.algolia.com/) 
| `docsearch.container` | String | `.search-button` |
| `docsearch.appId` | String | - |
| `docsearch.indexName` | String | - |
| `docsearch.apiKey` | String | - |
| `docsearch.debug` | Boolean | `false` |
| `docsearch.*` | Boolean/String/Number | - | https://docsearch.algolia.com/docs/api/
| `algolia` | Object | - | See [Algolia]({{< ref "docs/topics/algolia" >}})
| **Top App Bar**
| `topAppBar` | Object | - |
| `topAppBar.social` | Object | - | [Social Links]({{< ref "/docs/widgets/social-links" >}}).
| `topAppBar.colorToggle` | Boolean | `true` | Turn on/off the color/mode toggle.
| `topAppBar.coloredInDark` | Boolean | `false` | Colored in dark mode.
| `topAppBar.dropdownMenuToggle` | Boolean | `true` | Hide the dropdown menu toggle.
| `topAppBar.expandBreakpoint` | string | `xxl` | Expand content above this breakpoint, e.g. `lg`, `xl`, `xxl`.
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
| `analytics.plausible` | String | - | Plausible Analytics Domains. Multiple domains separate by comma.
| `analytics.plausibleScript` | String | `https://plausible.io/js/script.js` | Specify the self-hosted Plausible Analytics script or [extended script](https://plausible.io/docs/script-extensions).
| `googleAdsense` | String | - | Google Adsense.
| `customCSS` | Array | - | See also [custom assets]({{< ref "/docs/advanced/custom-assets#external-assets" >}}).
| `customJS` | Array | - | See also [custom assets]({{< ref "/docs/advanced/custom-assets#external-assets" >}}).
| `utterances` | Object | - | [Utterances]({{< ref "/docs/widgets/comments#utterances" >}}) configuration.
| `giscus` | Object | - | [Giscus]({{< ref "/docs/widgets/comments#giscus" >}}) configuration.
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
| `post.excerpt` | String | `Description` | The description will be used as the excerpt if not empty, to use summaries as excerpt, you'll need to set it as _empty string_ explicitly.
| `post.excerptMaxLength` | Integer | `320` |
| `post.copyright` | Boolean | `true` | Whether to display copyright section on each post.
| `post.plainifyExcerpt` | Boolean | `true` | Format excerpt in HTML if `false`.
| `post.featuredImage` | Boolean | `false` | Show the featured image above the content.
| `post.numberifyHeadings` | Boolean | `false` | Count headings automatically.
| `post.numberifyHeadingsEndLevel` | Number | `6` | The depth of headings to count.
| `post.numberifyHeadingsSeparator` | String | - | The separator between of number and headings.
| `post.tocStyleType` | String | `none` | The TOC's CSS `list-style-type` property.
| `post.imageTitleAsCaption` | Boolean | `false` | Use image title as caption.
| `post.panel` | Boolean | `true` | Turn on/off the post panel.
| `post.nav` | Boolean | `true` | Turn on/off the navigations.
| `post.readMoreFromContent` | Boolean | `false` | The page position after clicking the read more button, read more from content if true. Default to the beginning of page. It supports only of the manual summaries splitting via `<!--more-->`.
| `viewer` | Boolean | true | [Image Viewer]({{< ref "docs/image-viewer" >}})
| `pwa` | Object | - | [Progressive Web Apps]({{< ref "/docs/pwa" >}})
| **Sidebar**
| `sidebar` | Object | - |
| `sidebar.fixed` | Boolean | `false` | Fix default sidebar.
| `sidebar.taxonomiesToggle` | Boolean | `true` | Show the taxonomies toggle widget on the sidebar.
| `sidebar.taxonomiesToggleArchives` | Boolean | `true` | Show/Hide the archives from the taxonomies toggle.
| `sidebar.series` | Boolean | `false` | Show the series widget on the sidebar.
| `sidebar.categories` | Boolean | `false` | Show the categories widget on the sidebar.
| `sidebar.tags` | Boolean | `false` | Show the tags widget on the sidebar.
| `sidebar.archives` | Boolean | `false` | Show the archive widget on the sidebar.
| `sidebar.authors` | Boolean | `false` | Show the authors widget on the sidebar.
| `sidebar.postsToggle` | Boolean | `true` | Show the posts toggle on the sidebar.
| `sidebar.featuredPosts` | Boolean | `false` | Show the featured posts widget on the sidebar.
| `sidebar.recentPosts` | Boolean | `false` | Show the recent posts widget on the sidebar.
| `sidebar.collapsed` | Boolean | `flase` | Collapse sidebar widgets by default on small screens.
| **Meta Tag**
| `metaRobots` | String | - | Empty means that turn it off.
| `contact` | Object | - | [Contact Form]({{< ref "docs/layouts/contact" >}})
| `pinnedPost` | Boolean | `true` | Turn on/off pinned posts.
| `pinnedPostCount` | Integer | `1` | The number of pinned posts.
| `rss` | String/Boolean | `true` | Display the RSS button on the social links. Turn it off by `false`, link it to homepage all the times by setting it to `home`.
| `feeds` | Object | - | RSS feeds
| `feeds.content` | Boolean | `false` | Display the full content if ebabled.
| `actionsPanel` | Object | - |
| `actionsPanel.disabled` | Boolean | `false` | Disable actions panel.
| `repo` | Object | - | See [Repository widget]({{< ref "docs/widgets/repository" >}}).
| `docs.nav` | Object | - | Docs layout navigation.
| `docs.nav.reduceFontSize` | Boolean | `true` | When `false`, don't reduce the font size of children navigation.
| `beian` | Object | - | 备案 in pinyin, for websites hosted in China.
| `beian.icpNumber` | string | - | ICP filing number.
| `beian.psbNumber` | string | - | PSB filing number.
| `beian.moeNumber` | string | - | Moe filing number.

> Except the Google webmaster tool, the other webmaster tools cannot work with `hugo --minify`, because they cannot recognize the minified meta tag.
