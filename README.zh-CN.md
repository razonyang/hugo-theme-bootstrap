# Hugo Bootstrap 主题

[English](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/README.md) · 
[简体中文](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/README.zh-CN.md) · 
[繁體中文](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/README.zh-TW.md)

本主题是一个极快、响应式和功能丰富的 Hugo 博客主题。

## 目录

- [截图](#截图)
- [功能特性](#功能特性)
- [线上预览](#线上预览)
- [安装](#安装)
- [配置](#配置)
- [参数](#参数)
  - [全局参数](#全局参数)
  - [页面参数](#页面参数)
- [评论](#评论)
- [钩子](#钩子)
- [自定义资源](#自定义资源)
- [社交链接](#社交链接)
- [多样的短代码](#短代码)
- [贡献](#贡献)

## 截图

![截图](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/images/screenshot.png)

**Dark Mode**

![深色模式下的截图](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/images/screenshot-dark.png)

## 线上预览

- https://hugo-theme-bootstrap.netlify.app/ - 部署于 Netlify。
- https://hugo-theme-bootstrap.razonyang.com/ - 自托管服务器（亚洲），如果 Netlify 太慢了，可以试试这个。

这还有个[使用这个主题的网站列表](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/USEDBY.md)。

## 功能特性

- 极快：[Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https://hugo-theme-bootstrap.netlify.app/en/) 分数在 `95-100` 之间
- 基于 [Bootstrap 5](https://v5.getbootstrap.com/)
- 响应式
- 多种配色：`blue`, `blue-gray`, `brown`, `cyan`, `green`, `indigo`, `orange`, `pink`, `purple`, `red`, `teal`, `yellow`
- [高度可配置](#配置)
- 深色模式
- 字体大小切换
- 多语言/国际化
- 搜索
- 面包屑导航
- 归档
- 资源延迟加载：支持 `image` 和 `iframe` 等。
- 打赏挂件：支持支付宝和微信。
- 文章目录导航
- 分享按钮：支持 [AddThis](https://www.addthis.com)。
- [评论](#评论)：支持 [Disqus](#disqus) 和 [Utterances](#utterances)。
- [自定义资源](#自定义资源)：自定义 CSS 和 JS。
- [钩子](#钩子)：用于在页面添加自定义代码。
- [社交链接](#社交链接)
- [多样的短代码](#短代码)
- [Twitter Cards](https://gohugo.io/templates/internal/#configure-twitter-cards) 和 [Open Graph](https://gohugo.io/templates/internal/#configure-open-graph)
- [知识许可共享协议](https://creativecommons.org/licenses/)

## 安装

```shell
$ hugo new site myblog
$ cd myblog
$ git init
$ git submodule add https://github.com/razonyang/hugo-theme-bootstrap themes/hugo-theme-bootstrap
$ cp -a themes/hugo-theme-bootstrap/exampleSite/* .
$ hugo server
```

## 配置

如示例站点所展示，配置被分为多个配置文件，这比单配置文件更加清晰，特别是对于多语言网站。

| 名称 | 类型 | 默认值 | 说明
|---|:-:|:-:|---
| `title` | String | - | 站点标题
| `baseURL` | String | - | 站点 URL
| `copyright` | String | - | 站点版权。`{year}` 占位符会被替换为当前年份。
| `defaultContentLanguage` | String | `en` |
| `defaultContentLanguageInSubdir` | Boolean | `false` |
| `paginate` | Integer | `10` |
| `paginatePath` | String | `page` |
| `enableRobotsTXT` | Boolean | `true` |
| `disqusShortname` | String | - | [Disqus](#disqus) shortname.
| `googleAnalytics` | String | - | Google Analytics.
| `social` | Object | - | [社交链接](#社交链接)
| `author` | Object | - | 个人档案
| `author.name` | String | - | 名称
| `author.avatar` | String | `images/profile.webp` | 头像
| `author.bio` | String | - | 简介
| `author.company` | String | - | 公司
| `author.location` | String | - | 地理位置

## 参数

### 全局参数

| 名称 | 类型 | 默认值 | 说明
|---|:-:|:-:|---
| **Page** 
| `mainSections` | Array | `["posts"]` | 主要的 sections
| `titleSeparator` | String | `-` | 标题分隔符
| `comment` | Boolean | `true` | 是否开启评论
| `toc` | Boolean | `true` | 是否开启目录
| `tocWordCount` | Integer | `280` | 仅当文章的字数超过此值时，才会显示目录。
| `tocSticky` | Boolean | `true` | 滚动时是否使目录保持在顶部。
| `breadcrumb` | Boolean | `true` | 是否开启面包屑导航
| `dateFormat` | String | `Jan 2, 2006` | 日期格式。 查阅 [Hugo Date and Time Templating Reference](https://gohugo.io/functions/format/#hugo-date-and-time-templating-reference) 以获取详细信息。
| `poweredBy` | Boolean | `true` | 是否显示技术支持。
| `math` | Boolean | `false` | 是否开启 `math`。
| `logo` | String | `images/logo.webp` | Logo
| `brand` | String | - | Brand
| `menusPosition` | String | `right` | 菜单位置：`right`, `left`, `center`.
| `description` | String | - | 站点描述
| `palette` | String | - | 默认配色
| `palettes` | Array | **ALL** | 可选配色
| `featuredPostCount` | Integer | `5` | 精选文章数
| `recentPostCount` | Integer | `5` | 最近文章数
| `relatedPostCount` | Integer | `5` | 相关文章数
| `categoryCount` | Integer | `10` | 分类数
| `tagCount` | Integer | `10` | 标签数
| `seriesCount` | Integer | `10` | 专栏数
| `fullWidth` | Boolean | `false` | 是否全宽
| `reward` | Object | - | 打赏
| `reward.alipay` | String | - | 支付宝收款二维码图片
| `reward.wechat` | String | - | 微信收款/打赏二维码图片
| `share` | Object | - | 分享按钮
| `share.addThis` | String | - | [AddThis](https://www.addthis.com) `pubid`。
| `fontSize` | Object | 字体大小
| `fontSize.small` | String | `.9rem` | 小字体
| `fontSize.extraSmall` | String | `.8rem` | 更小的字体
| `fontSize.large` | String | `1.1rem` | 大字体
| `fontSize.extraLarge` | String | `1.2rem` | 更大的字体
| **Archive**
| `archive` | Object | - | 归档
| `archive.paginate` | Integer | `100` | 归档分页
| `archive.dateFormat` | Integer | `Jan 2` | 归档日期格式
| **Search**
| `search` | Object | - | 搜索配置
| `search.paginate` | Integer | `10` | 分页
| `search.resultContentWordCount` | Integer | `240` | 搜索结果内容最大字数
| `search.fuse` | Object | - | [Fuse.js 参数](https://fusejs.io/api/options.html)
| `search.fuse.ignoreLocation` | Boolean | `true` |
| `search.fuse.location` | Integer | - |
| `search.fuse.isCaseSensitive` | Boolean | - |
| `search.fuse.minMatchCharLength` | Integer | - |
| `search.fuse.threshold` | Double | - |
| `search.fuse.distance` | Integer | - |
| `search.fuse.useExtendedSearch` | Boolean | - |
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
| **Others** 
| `googleAdsense` | String | - | Google Adsense.
| `customCSS` | Array | - | 自定义 CSS， 主要用于导入外部。 请查阅[自定义资源](#自定义资源)。
| `customJS` | Array | - | 自定义 JS， 主要用于导入外部 JS。 请查阅[自定义资源](#自定义资源)。
| `utterances` | Object | - | [Utterances](#utterances)
| `utterances.repo` | String | - | Github 仓库.
| `utterances.issueTerm` | String | `pathname` | `pathname`, `url`, `title`, `og:title`.
| `utterances.label` | String | - | 
| `utterances.theme` | String | `github-light` | `github-light`, `github-dark`, `preferred-color-scheme`, `github-dark-orange`, `icy-dark`, `dark-blue`, `photon-dark`.
| **Creative Commons License**
| `creativeCommons` | Object | - |
| `creativeCommons.by` | Boolean | `true` | 署名
| `creativeCommons.nc` | Boolean | `true` | 非商业
| `creativeCommons.nd` | Boolean | `true` | 禁止演绎
| `creativeCommons.sa` | Boolean | `true` | 相同方式共享

> 除了 Google 站长工具外，其他搜宿引擎站长工具无法与 `hugo --minify` 同时使用，这是因为它们无法识别优化后的元标签。

### 页面参数

| 名称 | 类型  | 默认值 | 说明
|---|:-:|:-:|---
| **Page** 
| `comment` | Boolean | `true` | 是否开启评论，如果评论已被全局关闭，该参数无效
| `toc` | Boolean | `true` | 是否开启目录，如果目录已被全局关闭，该参数无效
| `math` | Boolean | `false` | 是否开启 `math`
| `reward` | Boolean | `true` | 是否开启打赏
| `breadcrumb` | Boolean | `true` | 是否开启面包屑导航
| **Creative Commons License**
| `creativeCommons` | Object | - |
| `creativeCommons.by` | Boolean | `true` | 署名
| `creativeCommons.nc` | Boolean | `true` | 非商业
| `creativeCommons.nd` | Boolean | `true` | 禁止演绎
| `creativeCommons.sa` | Boolean | `true` | 相同方式共享

## 评论

### Disqus

```toml
disqusShortname = "yourdiscussshortname"
```

> `disqusShortname` 是站点配置，而非参数。请**勿**将其放置在 `params` 下。

查看 [Disqus](https://disqus.com/) 官网以获取详细信息。

### Utterances

[Utterances](https://utteranc.es/) 是一个基于 Github issue 的轻量级的评论挂件。

```toml
[utterances]
  repo = "user/repo"
  #issueTerm = "pathname" # pathname, url, title, og:title.
  #label = "comment" # Optional.
  #theme = "github-light" # github-light, github-dark, preferred-color-scheme, github-dark-orange, icy-dark, dark-blue, photon-dark.
```

> 不同于 Disqus，Utterances 是一个参数。请将其放置在 `params`。

## 自定义资源

有两种方法可以自定义内部和外部的资源。

### 内部资源

通过创建 `assets/css/custom.css` 和 `assets/js/custom.js` 来自定义 CSS 和 JS 是最佳的方法，因为这些文件会被打包成单个 CSS/JS 文件，以减少 HTTP 的请求次数。

### 外部资源

任意的 CSS 和 JS 资源都可以通过 `customCSS` 和 `customJS` 参数进行导入。

> `customCSS` 和 `customJS` 都可以导入内部资源，只需要将文件放到 `static` 文件夹。

## 钩子

钩子用于在页面添加自定义代码。

| 钩子 | 描述 |
|---|---|
| `head-end` | `<head>` 结束之前 |
| `body-end` | `<body>` 结束之前 |
| `main-begin` | `<main>` 上方 |
| `main-end` | `<main>` 下方 |
| `list-begin` | 文章列表上方 |
| `list-end` | 文章列表下方 |
| `sidebar-begin` | 侧边栏上方 |
| `sidebar-end` | 侧边栏下方 |
| `content-begin` | 文章内容上方 |
| `content-end` | 文章内容下方 |
| `comments-begin` | 评论上方 |
| `comments-end` | 评论下方 |
| `footer-begin` | `footer` 上方 |
| `footer-end` | `footer` 下方 |

要使用钩子，以钩子名称创建一个 HTML 文件，并保存到 `layouts/partials/hooks` 目录即可。

比如：

```shell
$ echo "SIDEBAR BEGIN" > layouts/partials/hooks/sidebar-begin.html
```

## 短代码

| 短代码 | 说明 | 使用
|---|---|---
| `alert` | Alter message | `{{< alert "message" [type] >}}`, `[type]` can be one of `info`, `success`, `warning` and `danger`
| `jsfiddle` | JSFiddle | `{{< jsfiddle "user/id" >}}`
| `codepen` | CodePen | `{{< codepen "id" >}}`
| `jsrun` | JSRUN | `{{< jsrun "id" >}}`
| `bilibili`| 哔哩哔哩 | `{{< bilibili "video ID" >}}`
| `youku`| 优酷 | `{{< youku "video ID" >}}`
| `iqiyi`| 爱奇艺 | `{{< iqiyi "vid" "tvid" >}}`
| `tencentvideo`| 腾讯视频 | `{{< tencentvideo "video ID" >}}`
| `neteasemusic`| 网易云音乐 | `{{< neteasemusic "song ID" >}}`

## 社交链接

社交链接 `social` 是一组平台映射到用户标识的键值对。

创建 `config/_default/social.toml` 文件，并填写以下配置：

```toml
email = "user@domain.tld"
github = "githubusername"
# ...
```

| 平台 | 用户标识 |
|---|---|
| `email` | 电子邮箱 |
| `facebook` | Facebook 用户名 |
| `github` | GitHub 用户名 |
| `gitlab` | GitLab 用户名 |
| `instagram` | Instagram 用户名 |
| `linkedin` | LinkedIn 用户名 |
| `quora` | Quora 用户名 |
| `stackoverflow` | Stack Overflow 用户 ID |
| `tumblr` | Tumblr 用户名 |
| `twitter` | Twitter 用户名 |
| `weibo` | 微博用户名 |
| `zhihu` | 知乎用户名 |
| `reddit` | Reddit 用户名 |
| `telegram` | Telegram 用户名 |
| `qq` | QQ 号 |
| `dockerhub` | Docker Hub 用户名 |
| `bitbucket` | Bitbucket Workspace ID |

## 贡献

- 如果感兴趣，可以给颗 :star:。
- [新建 Issue](https://github.com/razonyang/hugo-theme-bootstrap/issues/new)
  - 提问
  - Bugs
  - 新功能
- 提交 PR
  - 修复 Issue 或 Bugs
  - 添加新功能
  - 完善文档

### 开发

本主题依赖于 `npm` 和 `webpack` 进行开发，源码目录为 `src`。

**安装依赖**

```shell
$ npm install
```

**重建资源**

```shell
$ npm run build
```

> `npm run watch` 可以监听文件改动并重建资源。

**预览**

```shell
$ cd exampleSite
$ hugo server --themesDir=../../
```
