# Hugo Bootstrap Theme

[English](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/README.md) · 
[简体中文](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/README.zh-CN.md) · 
[繁體中文](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/README.zh-TW.md)

This theme is an extreme fast, responsive and feature-rich blog theme for Hugo.

## Table of Contents

- [Screenshots](#screenshots)
- [Live Preview](#live-preview)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Parameters](#parameters)
  - [Global Parameters](#global-parameters)
  - [Page Parameters](#page-parameters)
- [Comments](#comments)
- [Hooks](#hooks)
- [Custom Assets](#custom-assets).
- [Social Links](#social-links).
- [Various Shortcodes](#shortcodes).
- [Contribute](#contribute)

## Screenshots

![Screenshot](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/images/screenshot.png)

**Dark Mode**

![Screenshot in Dark Mode](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/images/screenshot-dark.png)

## Live Preview

- https://hugo-theme-bootstrap.netlify.app/ - Deploy on Netlify.
- https://hugo-theme-bootstrap.razonyang.com/ - A self-hosted server located in Asia. Give it a try if Netlify is too slow for you.

There is also a [list of websites that use this theme](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/USEDBY.md).

## Features

- Extreme Fast: [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https://hugo-theme-bootstrap.netlify.app/en/)'s score `95-100`.
- Built on top of [Bootstrap 5](https://v5.getbootstrap.com/).
- Responsive.
- Various Palettes: `blue`, `blue-gray`, `brown`, `cyan`, `green`, `indigo`, `orange`, `pink`, `purple`, `red`, `teal`, `yellow`.
- [Highly Configurable](#configuration).
- Dark Mode Switcher.
- Font Size Switcher.
- Multilingual(I18N).
- Search.
- Breadcrumb.
- Archive.
- Resources Lazy Loading: `image` and `iframe`.
- Reward Widget: supports Alipay and Wechat.
- Table of Contents.
- Share Buttons: supports [AddThis](https://www.addthis.com).
- [Comments](#comments): supports [Disqus](#disqus) and [Utterances](#utterances).
- [Custom Assets](#custom-assets): custom CSS and JS.
- [Hooks](#hooks): provides ability to add custom code in page, such as `head`, `body`, `sidebar` etc.
- [Social Links](#social-links).
- [Various Shortcodes](#shortcodes).
- [Twitter Cards](https://gohugo.io/templates/internal/#configure-twitter-cards) and [Open Graph](https://gohugo.io/templates/internal/#configure-open-graph).
- [Creative Commons License](https://creativecommons.org/licenses/)

## Installation

```shell
$ hugo new site myblog
$ cd myblog
$ git init
$ git submodule add https://github.com/razonyang/hugo-theme-bootstrap themes/hugo-theme-bootstrap
$ cp -a themes/hugo-theme-bootstrap/exampleSite/* .
$ hugo server
```

## Configuration

As the example site shown, the configuration are separated into multiple files, this is much clearer than a single configuration file, especially in a multilingual website.

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
| `disqusShortname` | String | - | [Disqus](#disqus) shortname.
| `googleAnalytics` | String | - | Google Analytics.
| `social` | Object | - | [Social Links](#social-links).
| `author` | Object | - | Profile shown in sidebar.
| `author.name` | String | - | Name
| `author.avatar` | String | `images/profile.webp` | Avatar
| `author.bio` | String | - | Bio
| `author.company` | String | - | Company
| `author.location` | String | - | Location

## Parameters

### Global Parameters

| Name | Type | Default | Description
|---|:-:|:-:|---
| **Page** 
| `mainSections` | Array | `["posts"]` | Main sections
| `titleSeparator` | String | `-` | Title separator
| `comment` | Boolean | `true` | Whether to enable comments
| `toc` | Boolean | `true` | Whether to enable TOC
| `tocWordCount` | Integer | `280` | TOC is displayed only if the post's word count is greater than this value.
| `tocSticky` | Boolean | `true` | Whether to make TOC stick to top when scrolling.
| `breadcrumb` | Boolean | `true` | Whether to enable breadcrumb
| `dateFormat` | String | `Jan 2, 2006` | Date format. Checkout the [Hugo Date and Time Templating Reference](https://gohugo.io/functions/format/#hugo-date-and-time-templating-reference) for details.
| `poweredBy` | Boolean | `true` | Whether to show powered by.
| `math` | Boolean | `false` | Whether to enable math globally.
| `logo` | String | `images/logo.webp` | Logo image.
| `brand` | String | - | Brand text.
| `menusPosition` | String | `right` | Menus position: `right`, `left`, `center`.
| `description` | String | - | Site description.
| `palette` | String | - | Default palette.
| `palettes` | Array | **ALL** | Available palettes.
| `featuredPostCount` | Integer | `5` | The number of featured posts shown in sidebar.
| `recentPostCount` | Integer | `5` | The number of recent posts shown in sidebar.
| `relatedPostCount` | Integer | `5` | The number of related posts.
| `categoryCount` | Integer | `10` | The number of categories shown in sidebar.
| `tagCount` | Integer | `10` | The number of tags shown in sidebar.
| `seriesCount` | Integer | `10` | The number of series shown in sidebar.
| `fullWidth` | Boolean | `false` | Full width.
| `reward` | Object | - | Reward
| `reward.alipay` | String | - | Alipay QR Code Image.
| `reward.wechat` | String | - | Wechat QR Code Image.
| `share` | Object | - | Share buttons
| `share.addThis` | String | - | [AddThis](https://www.addthis.com)'s `pubid`.
| `fontSize` | Object | Font Sizes
| `fontSize.small` | String | `.9rem` | Small font size.
| `fontSize.extraSmall` | String | `.8rem` | Extra small font size.
| `fontSize.large` | String | `1.1rem` | Large font size.
| `fontSize.extraLarge` | String | `1.2rem` | Extra large font size.
| **Archive**
| `archive` | Object | - | Archive configuration.
| `archive.paginate` | Integer | `100` | Archive pagination.
| `archive.dateFormat` | Integer | `Jan 2` | Archive date format.
| **Search**
| `search` | Object | - | Search configuration.
| `search.paginate` | Integer | `10` | Pagination
| `search.resultContentWordCount` | Integer | `240` | The maximum word count of result content for displaying.
| `search.fuse` | Object | - | [Fuse.js options](https://fusejs.io/api/options.html).
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
| `siteVerification.baidu` | String | - | Baidu
| `siteVerification.baiduUnion` | String | - | Baidu Union
| `siteVerification.so` | String | - | Qihoo 360
| `siteVerification.sogou` | String | - | Sogou
| `siteVerification.shenma` | String | - | Shenma
| **Analytics** 
| `analytics` | Object | - | Analytics configuration.
| `analytics.baidu` | String | - | Baidu Analytics.
| **Others** 
| `googleAdsense` | String | - | Google Adsense.
| `customCSS` | Array | - | Custom CSS. It is mainly used to import external CSS. See [Custom Assets](#custom-assets).
| `customJS` | Array | - | Custom JS. It is mainly used to import external JS. See [Custom Assets](#custom-assets).
| `utterances` | Object | - | [Utterances](#utterances) configuration.
| `utterances.repo` | String | - | Github repository.
| `utterances.issueTerm` | String | `pathname` | `pathname`, `url`, `title`, `og:title`.
| `utterances.label` | String | - | 
| `utterances.theme` | String | `github-light` | `github-light`, `github-dark`, `preferred-color-scheme`, `github-dark-orange`, `icy-dark`, `dark-blue`, `photon-dark`.
| **Creative Commons License**
| `creativeCommons` | Object | - |
| `creativeCommons.by` | Boolean | `true` | Credit must be given to you, the creator.
| `creativeCommons.nc` | Boolean | `true` | Only noncommercial use of your work is permitted.
| `creativeCommons.nd` | Boolean | `true` | No derivatives or adaptations of your work are permitted.
| `creativeCommons.sa` | Boolean | `true` | Adaptations must be shared under the same terms.

> Except the Google webmaster tool, the other webmaster tools cannot work with `hugo --minify`, because they cannot recognize the minified meta tag.

### Page Parameters

| Name | Type  | Default | Description
|---|:-:|:-:|---
| **Page** 
| `comment` | Boolean | `true` | Whether to enable comments. It won't work if `comment` has been disabled globally.
| `toc` | Boolean | `true` | Whether to enable TOC. It won't work if `toc` has been disabled globally.
| `math` | Boolean | `false` | Whether to enable math.
| `reward` | Boolean | `true` | Whether to enable reward.
| `breadcrumb` | Boolean | `true` | Whether to enable breadcrumb.
| **Creative Commons License**
| `creativeCommons` | Object | - |
| `creativeCommons.by` | Boolean | `true` | Credit must be given to you, the creator.
| `creativeCommons.nc` | Boolean | `true` | Only noncommercial use of your work is permitted.
| `creativeCommons.nd` | Boolean | `true` | No derivatives or adaptations of your work are permitted.
| `creativeCommons.sa` | Boolean | `true` | Adaptations must be shared under the same terms.

## Comments

### Disqus

```toml
disqusShortname = "yourdiscussshortname"
```

> `disqusShortname` is a site's configuration, **not** a parameter. Place it under the `params` won't work.

Checkout the [Disqus](https://disqus.com/) website for details.

### Utterances

[Utterances](https://utteranc.es/) is a lightweight comments widget built on GitHub issues.

```toml
[utterances]
  repo = "user/repo"
  #issueTerm = "pathname" # pathname, url, title, og:title.
  #label = "comment" # Optional.
  #theme = "github-light" # github-light, github-dark, preferred-color-scheme, github-dark-orange, icy-dark, dark-blue, photon-dark.
```

> Unlike Disqus, Utterances is a parameter. You should put it under the `params`.

## Custom Assets

There are two ways to customize the internal and external assets.

### Internal Assets

This is the best way to customize the theme's CSS and JS. Just create the files `assets/css/custom.css` and `assets/js/custom.js`.
These files will be bundled into one for reducing HTTP requests.

### External Assets

Any external CSS and JS resources can be imported by the parameters `customCSS` and `customJS`.

> Both of `customCSS` and `customJS` can also import the internal assets. Just put the files into the `static` folder.
## Hooks

Hooks are used for adding code on pages.

| Hook | Description |
|---|---|
| `head-end` | Before the `<head>` end |
| `body-end` | Before the `<body>` end |
| `main-begin` | Above of the `<main>` |
| `main-end` | Follow the `<main>` |
| `list-begin` | Above of the posts list |
| `list-end` | Follow the posts list |
| `sidebar-begin` | At very top of the sidebar |
| `sidebar-end` | Before the sidebar end |
| `content-begin` | Above of the post content |
| `content-end` | Follow the post content |
| `comments-begin` | Above of the comments |
| `comments-end` | Follow the comments |
| `footer-begin` | At very top of the footer |
| `footer-end` | Before the footer end |

For using a hook, you need to create an HTML file named with the hook name in the directory `layouts/partials/hooks`.

For example:

```shell
$ echo "SIDEBAR BEGIN" > layouts/partials/hooks/sidebar-begin.html
```

## Shortcodes

| Shortcode | Description | Usage
|---|---|---
| `alert` | Alter | `{{< alert "message" [type] >}}`, `[type]` can be one of `info`, `success`, `warning` and `danger`
| `jsfiddle` | JSFiddle | `{{< jsfiddle "user/id" >}}`
| `codepen` | CodePen | `{{< codepen "id" >}}`
| `jsrun` | JSRUN | `{{< jsrun "id" >}}`
| `bilibili`| Bilibili Video Player | `{{< bilibili "video ID" >}}`
| `youku`| Youku Video Player | `{{< youku "video ID" >}}`
| `iqiyi`| iQiyi Video Player| `{{< iqiyi "vid" "tvid" >}}`
| `tencentvideo`| Tencent Video Player | `{{< tencentvideo "video ID" >}}`
| `neteasemusic`| Netease Music player | `{{< neteasemusic "song ID" >}}`

## Social Links

The `social` is a set of key value pairs of social links that mapping from platform to user identifier.

Enable social links by creating a file `config/_default/social.toml` with the following content:

```toml
email = "user@domain.tld"
github = "githubusername"
# ...
```

| Platform | User Identifier |
|---|---|
| `email` | Email Address |
| `facebook` | Facebook Username |
| `github` | GitHub Username |
| `gitlab` | GitLab Username |
| `instagram` | Instagram Username |
| `linkedin` | LinkedIn Username |
| `quora` | Quora Username |
| `stackoverflow` | Stack Overflow User ID |
| `tumblr` | Tumblr Username |
| `twitter` | Twitter Username |
| `weibo` | Weibo Username |
| `zhihu` | Zhihu Username |
| `reddit` | Reddit Username |
| `telegram` | Telegram Username |
| `qq` | QQ Number |
| `dockerhub` | Docker Hub Username |
| `bitbucket` | Bitbucket Workspace ID |

## Contribute

**Any contributions are welcome.**

- :star: if you are interested in this theme.
- [File an issue](https://github.com/razonyang/hugo-theme-bootstrap/issues/new)
  - Ask questions.
  - Report bugs.
  - Request features.
- Create a PR:
  - Fix issues and bugs.
  - Add new features.
  - Improve documentations.

### Develop

This theme relies on `npm` and `webpack` for development. The source of `js` and `scss` are placed in `src` directory.

**Install dependencies**

```shell
$ npm install
```

**Rebuild assets**

```shell
$ npm run build
```

> `npm run watch` rebuild assets on change.

**Preview**

```shell
$ cd exampleSite
$ hugo server --themesDir=../../
```
