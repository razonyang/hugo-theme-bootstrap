# Hugo Bootstrap Theme

This theme is a clean, responsive and feature-rich blog theme for Hugo.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Parameters](#parameters)
  - [Global Parameters](global-parameters)
  - [Page Parameters](page-parameters)
- [Comments](#comments)
- [Hooks](#hooks)
- [Social Links](#social-links).
- [Various Shortcodes](#shortcodes).
- [Contribute](#contribute)

## Features

- Built on top of [Bootstrap 5](https://v5.getbootstrap.com/).
- Configurable.
- Responsive.
- Various Palettes: `blue`, `blue-gray`, `brown`, `cyan`, `gray`, `green`, `indigo`, `orange`, `pink`, `purple`, `red`, `teal`, `yellow`.
- Dark Mode Switcher.
- Multilingual(I18N).
- Search.
- Breadcrumb.
- Archive.
- Table of Contents.
- [Comments](#comments): supports [Disqus](#disqus) and [Utterances](#utterances).
- [Hooks](#hooks): provides ability to add custom code in page, such as `head`, `body`, `sidebar` etc.
- [Social Links](#social-links).
- [Various Shortcodes](#shortcodes).

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
| `social` | Map | - | A set of [social links](#social-links) that mapping from platform to user identifier.

## Parameters

### Global Parameters

| Name | Type | Default | Description
|---|:-:|:-:|---
| **Page** 
| `mainSections` | Array | `["posts"]` | Main sections
| `titleSeparator` | String | `-` | Title separator
| `comment` | Boolean | `true` | Whether to enable comments
| `utterances` | Map | - | Utterances comments
| `dateFormat` | String | `Jan 2, 2006` | Date format. Checkout the [Hugo Date and Time Templating Reference](https://gohugo.io/functions/format/#hugo-date-and-time-templating-reference) for details.
| `poweredBy` | Boolean | `true` | Whether to show powered by.
| `math` | Boolean | `false` | Whether to enable math globally.
| `brand` | String | - | Brand text.
| `description` | String | - | Site description.
| `palette` | String | - | Default palette.
| `featuredPostCount` | Integer | `5` | The number of featured posts shown in sidebar.
| `recentPostCount` | Integer | `5` | The number of recent posts shown in sidebar.
| `relatedPostCount` | Integer | `5` | The number of related posts.
| `categoryCount` | Integer | `10` | The number of categories shown in sidebar.
| `tagCount` | Integer | `10` | The number of tags shown in sidebar.
| **Webmaster Site Verification** 
| `googleSiteVerification` | String | - | Google Webmaster Tool.
| `bingSiteVerification` | String | - | Bing Webmaster Tool.
| `baiduSiteVerification` | String | - | Baidu Webmaster Tool.
| **Analytics** 
| `googleAnalytics` | String | - | Google Analytics.
| `baiduAnalytics` | String | - | Bing Analytics.
| **Others** 
| `googleAdsense` | String | - | Google Adsense.
| `customCSS` | Array | - | Custom CSS.
| `customJS` | Array | - | Custom JS.
| `utterances` | Map | - | [Utterances](#utterances) configuration.

> Except the Google webmaster tool, the other webmaster tools cannot work with `hugo-minify`, because they cannot recognize the minified meta tag.

### Page Parameters

| Name | Type  | Default | Description
|---|:-:|:-:|---
| **Page** 
| `comment` | Boolean | `true` | Whether to enable comments. It won't work if `comment` has been disabled globally.
| `math` | Boolean | `false` | Whether to enable math.

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

## Hooks

Hooks are used for adding code on pages.

| Hook | Description |
|---|---|
| `head-end` | Before the `<head>` end |
| `body-end` | Before the `<body>` end |
| `sidebar-begin` | At very top of the sidebar |
| `sidebar-end` | Before the sidebar end |
| `content-begin` | Above of the post content |
| `content-end` | Follow the post content |
| `comments-begin` | Above of the comments |
| `comments-end` | Follow the comments |

For using a hook, you need to create an HTML file named with the hook name in the directory `layouts/partials/hooks`.

For example:

```shell
$ echo "SIDEBAR BEGIN" > layouts/partials/hooks/sidebar-begin.html
```

## Shortcodes

| Shortcode | Description | Usage
|---|---|---
| `alert` | Alter message | `{{< alert "message" [type] >}}`, `[type]` can be one of `info`, `success`, `warning` and `danger`
| `jsfiddle` | JSFiddle | `{{< jsfiddle "user/id" >}}`
| `codepen` | CodePen | `{{< codepen "id" >}}`
| `jsrun` | JSRUN | `{{< jsrun "id" >}}`
| `bilibili`| Bilibili video player | `{{< bilibili "video ID" >}}`
| `youku`| Youku video player | `{{< youku "video ID" >}}`
| `iqiyi`| iQiyi video player | `{{< iqiyi "vid" "tvid" >}}`
| `tencentvideo`| Tencent video player | `{{< tencentvideo "video ID" >}}`
| `cloudmusic`| Cloud music player | `{{< cloudmusic "song ID" >}}`

## Social Links

The `social` is a set of key value pairs of social links that mapping from platform to user identifier.

> 

Enable social links by creating a file `config/_default/social.toml` with the following content:

```toml
email = "user@domain.tld"
github = "githubusername"
# ...
```

| Platform | User Identifier |
|---|---|
| `email` | Email address |
| `facebook` | Facebook username |
| `github` | GitHub username |
| `gitlab` | GitLab username |
| `instagram` | Instagram username |
| `linkedin` | LinkedIn username |
| `quora` | Quora username |
| `stackoverflow` | Stack Overflow user ID |
| `tumblr` | Tumblr username |
| `twitter` | Twitter username |
| `weibo` | Weibo username |
| `zhihu` | Zhihu username |

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
