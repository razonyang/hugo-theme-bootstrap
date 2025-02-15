+++
title = "站点参数"
date = 2021-11-27T19:53:24+08:00
featured = false
comment = true
toc = true
reward = true
pinned = false
categories = [
  "配置"
]
tags = [
]
series = [
  "文档"
]
images = []
navWeight = 980
authors = ["RazonYang"]
+++

站点参数文件默认为 `config/_default/params.toml`。

<!--more-->

| 名称 | 类型 | 默认值 | 说明
|---|:-:|:-:|---
| `sass_transpiler` | string | `libsass` | 推荐使用 `dartsass`，因为 `libsass` 已被弃用。
| **Page** 
| `mainSections` | Array | `["posts"]` | 主要的 sections
| `titleCase` | Boolean | `false` | 标题首字母是否大写
| `titleSeparator` | String | `-` | 标题分隔符
| `backgroundImage` | Array | `[]` | 背景图，如：`['/images/bg.png']`, `['/images/bg-light.png', '/images/bg-dark.png']`。
| `comment` | Boolean | `true` | 是否开启评论
| `toc` | Boolean | `true` | 是否开启目录
| `tocPosition` | String | `sidebar` | 可选值：`sidebar` 和 `content`，仅作用于 `post` 布局。
| `tocWordCount` | Integer | `280` | 仅当文章的字数超过此值时，才会显示目录。
| `breadcrumb` | Boolean | `true` | 是否开启面包屑导航
| `breadcrumbDivider` | String | `/` | 面包屑导航分隔符
| `dateFormat` | String | `Jan 2, 2006` | 日期格式。 查阅 [Hugo Date and Time Templating Reference](https://gohugo.io/functions/format/#hugo-date-and-time-templating-reference) 以获取详细信息。
| `poweredBy` | Boolean | `true` | 是否显示技术支持。
| `readingTime` | Boolean | `true` | 是否显示阅读时间
| `postDate` | Boolean | `true` | 是否显示发表日期
| `math` | Boolean | `false` | 是否开启 `math`。
| `diagram` | Boolean | `false` | 是否开启 `diagram`。
| `logo` | String/Boolean | `images/logo.webp` | Logo。设置为 `false` 以禁用 Logo。
| `brand` | String | - | Brand
| `description` | String | - | 站点描述
| `keywords` | String | - | 站点关键词
| `color` | String | - | 颜色风格， `light`，`dark` 或者 `auto`（默认）。
| `palette` | String | - | 默认配色，清理 Cookie 后生效。
| `palettes` | Array | **ALL** | 可选配色，如需禁用此选项，可将其设为空值 `[]`。
| `carouselPostCount` | Integer | `5` | 首页幻灯片的文章数量。
| `featuredPostCount` | Integer/Boolean | `5` | 精选文章数，`false` 则隐藏。
| `recentPostCount` | Integer/Boolean | `5` | 最近文章数，`false` 则隐藏。
| `relatedPostCount` | Integer/Boolean | `5` | 相关文章数，`false` 则隐藏。
| `categoryCount` | Integer/Boolean | `10` | 分类数，`false` 则隐藏。
| `tagCount` | Integer/Boolean | `10` | 标签数，`false` 则隐藏。
| `seriesCount` | Integer/Boolean | `10` | 专栏数，`false` 则隐藏。
| `taxonomyPaginate` | Integer | `10` |
| `taxonomyPostCount` | Integer | `3` | 分类的列表文章数，`false` 则隐藏。
| `taxonomySortingMethod` | String | - | 分类排序方式，默认以字母排序。可选值：`popularity`。
| `countTaxonomyPosts` | Boolean | `false` | 显示分类的文章总数。
| `sidebarTaxonomies` | Array | `["series", "categories", "tags"]` | 侧边栏的分类。
| `fullWidth` | Boolean | `false` | 是否全宽
| `fullWidthInSections` | Object | - | 为特定的 section 定义全宽，如：`posts`, `docs`。
| `fixedHeader` | Boolean | `true` | 是否固定头部
| `reward` | Object | - | [打赏小部件]({{< ref "/docs/widgets/reward" >}})，又称 Buy Me a Coffee 小部件。
| `externalLinkIcon` | Boolean | `true` | 是否显示外部链接后的图标。
| `share` | Object | - | 分享按钮
| `share.addThis` | String | - | [AddThis](https://www.addthis.com) `pubid`。
| `fontSize` | Object | 字体大小 | 注释或删除此参数可以禁用字体大小切换器。
| `fontSize.small` | String | `.9rem` | 小字体
| `fontSize.extraSmall` | String | `.8rem` | 更小的字体
| `fontSize.large` | String | `1.1rem` | 大字体
| `fontSize.extraLarge` | String | `1.2rem` | 更大的字体
| `social` | Object | - | [社交链接]({{< ref "/docs/widgets/social-links" >}})。
| `socialAnimation` | Boolean | `true` | 为 `false` 时，移除社交链接的动画。 |
| `socialColor` | Boolean | `true` | 为 `false` 时，移除社交链接的颜色。 |
| `socialShare` | Boolean | `true` | 启用/禁用内置的分享按钮
| `searchBar` | Boolean | `true` | 启用/禁用搜索栏
| **Archive**
| `archive` | Object | - | [归档]({{< ref "/docs/layouts/archives" >}})。
| `search` | Object | - | [搜索]({{< ref "/docs/layouts/search" >}})。
| `docsearch` | Object | - | [DocSearch](https://docsearch.algolia.com/)
| `docsearch.container` | String | `.search-button` |
| `docsearch.appId` | String | - |
| `docsearch.indexName` | String | - |
| `docsearch.apiKey` | String | - |
| `docsearch.debug` | Boolean | `false` |
| `docsearch.*` | Boolean/String/Number | - | https://docsearch.algolia.com/docs/api/
| `algolia` | Object | - | See [Algolia]({{< ref "docs/topics/algolia" >}})
| **顶部应用栏**
| `topAppBar` | Object | - |
| `topAppBar.social` | Object | - | [社交链接]({{< ref "/docs/widgets/social-links" >}})。
| `topAppBar.colorToggle` | Boolean | `true` | 开启或禁用颜色/模式开关。
| `topAppBar.coloredInDark` | Boolean | `false` | 在深色模式下着色。
| `topAppBar.dropdownMenuToggle` | Boolean | `true` | 隐藏下拉菜单的按钮。
| `topAppBar.expandBreakpoint` | string | `xxl` | 在此断点以上展开内容，如：`lg`、`xl`、`xxl`。
| **Webmaster Site Verification** 
| `siteVerification` | Object | - |
| `siteVerification.google` | String | - | Google
| `siteVerification.bing` | String | - | Bing
| `siteVerification.baidu` | String | - | 百度
| `siteVerification.baiduUnion` | String | - | 百度联盟
| `siteVerification.so` | String | - | 360
| `siteVerification.sogou` | String | - | 搜狗
| `siteVerification.shenma` | String | - | 神马
| **Analytics** 
| `analytics` | Object | - | Analytics.
| `analytics.baidu` | String | - | 百度统计
| `analytics.plausible` | String | - | Plausible Analytics Domains. Multiple domains separate by comma.
| `analytics.plausibleScript` | String | `https://plausible.io/js/script.js` | Specify the self-hosted Plausible Analytics script or [extended script](https://plausible.io/docs/script-extensions).
| **Others** 
| `googleAdsense` | String | - | Google Adsense。
| `customCSS` | Array | - | 自定义 CSS， 主要用于导入外部。 请查阅[自定义资源](#自定义资源)。
| `customJS` | Array | - | 自定义 JS， 主要用于导入外部 JS。 请查阅[自定义资源](#自定义资源)。
| `utterances` | Object | - | [Utterances]({{< ref "/docs/widgets/comments#utterances" >}}) 配置。
| `giscus` | Object | - | [Giscus]({{< ref "/docs/widgets/comments#giscus" >}}) 配置。
| **Creative Commons License**
| `creativeCommons` | Object | - |
| `creativeCommons.by` | Boolean | `true` | 署名
| `creativeCommons.nc` | Boolean | `true` | 非商业
| `creativeCommons.nd` | Boolean | `true` | 禁止演绎
| `creativeCommons.sa` | Boolean | `true` | 相同方式共享
| **Code Block** 
| `codeBlock` | Object | - | 
| `codeBlock.maxLines` | Integer | `7` | 
| `codeBlock.lineNos` | Boolean | `true` | `true`/`false` 表示默认情况下显示/隐藏行号。
| **Post** 
| `post` | Object | - | 
| `post.excerpt` | String | `Description` | 若 Description 不为空则作为摘要，若需要使用 Summaries 作为摘要，你需要显式地将其设为**空字符串**。
| `post.excerptMaxLength` | Integer | `320` | 
| `post.copyright` | Boolean | `true` | 是否在每个帖子上显示版权部分
| `post.plainifyExcerpt` | Boolean | `true` | `false` 则格式化摘要为 HTML。
| `post.featuredImage` | Boolean | `false` | 于内容上方显示 Featured 图片。
| `post.numberifyHeadings` | Boolean | `false` | 是否自动对标题进行编号。
| `post.numberifyHeadingsEndLevel` | Number | `6` | 自动编号的深度。
| `post.numberifyHeadingsSeparator` | String | - | 编号和标题之间的分隔符。
| `post.tocStyleType` | String | `none` | 目录的 `list-style-type` CSS 属性。
| `post.imageTitleAsCaption` | Boolean | `false` | 将图片标题作为 caption。
| `post.panel` | Boolean | `true` | 是否显示 post panel。
| `post.nav` | Boolean | `true` | 是否顯示上一篇和下一篇。
| `post.readMoreFromContent` | Boolean | `false` | The page position after clicking the read more button, read more from content if true. Default to the beginning of page. It supports only of the manual summaries splitting via `<!--more-->`.
| `viewer` | Boolean | true | [图片查看器]({{< ref "docs/image-viewer" >}})
| `pwa` | Object | - | [渐进式 web 应用]({{< ref "/docs/pwa" >}})
| **Sidebar**
| `sidebar` | Object | - |
| `sidebar.fixed` | Boolean | `false` | 固定默认侧边栏。
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
| `metaRobots` | String | - | 空字符串表示禁用。
| `contact` | Object | - | [联系表单]({{< ref "docs/layouts/contact" >}})
| `pinnedPost` | Boolean | `true` | 开启/禁用文章置顶。
| `pinnedPostCount` | Integer | `1` | 置顶的文章数量。
| `rss` | String/Boolean | `true` | 在社交链接中显示 RSS 链接。`false` 为不显示，`home` 则总是链接到主页。
| `feeds` | Object | - | RSS feeds
| `feeds.content` | Boolean | `false` | Display the full content if ebabled.
| `actionsPanel` | Object | - |
| `actionsPanel.disabled` | Boolean | `false` | 禁用 actions panel。
| `repo` | Object | - | See [Repository widget]({{< ref "docs/widgets/repository" >}}).
| `docs.nav` | Object | - | 文档布局导航。
| `docs.nav.reduceFontSize` | Boolean | `true` | 为 `false` 时，不缩小子导航菜单的字体大小。
| `beian` | Object | - | 中国国内网站备案信息。
| `beian.icpNumber` | string | - | ICP 备案号。
| `beian.psbNumber` | string | - | 公安备案号。
| `beian.moeNumber` | string | - | 萌 ICP 备案号。

> 除了 Google 站长工具外，其他搜索引擎站长工具无法与 `hugo --minify` 同时使用，这是因为它们无法识别优化后的元标签。
