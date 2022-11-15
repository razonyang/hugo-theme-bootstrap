+++
title = "Get Involved"
linkTitleIcon = '<i class="fas fa-handshake fa-fw"></i>'
date = 2021-11-27T19:54:29+08:00
comment = true
toc = true
reward = true
categories = [
]
tags = [
]
series = [
  "Docs"
]
images = []
aliases = [
  "/en/posts/get-involved"
]
authors = ["RazonYang"]
navWeight = 10
[menu.main]
  parent = "support"
  weight = 5
  [menu.main.params]
    icon = '<i class="fas fa-handshake fa-fw"></i>'
[menu.footer]
  parent = "support"
  weight = 5
  pre = '<i class="fas fa-handshake fa-fw me-1"></i>'
+++

We are happy to listen to your opinions and feedback, and welcome you to get involved.

<!--more-->

## Community

- [Feature Request](https://github.com/razonyang/hugo-theme-bootstrap/issues/new?template=feature_request.yml)
- [Bug Report](https://github.com/razonyang/hugo-theme-bootstrap/issues/new?template=bug_report.yml)
- [Discussions](https://github.com/razonyang/hugo-theme-bootstrap/discussions): ask questions, share ideas etc.

## Contribute

Any contributions are welcome, such as docs, bug fix and new feature.

### Rules

In view of ease of maintenance, we draw up some rules.

#### Conventional Commits Specification

Please follow the [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/).

For example:

- bug fix: `fix: correct typos`
- new feature: `feat: add the foobar parameter`
- docs: `docs: document the foobar parameter`
- style: `style: change the background color to blue`
- rebuild assets: `chore: rebuild assets`

### Develop

The theme relies on `npm` and Hugo Pipes for building assets: JS, CSS, fonts etc.

> The source code were placed in `assets` directory.

#### Install dependencies

```bash
$ cd exampleSite
$ npm install
```

#### Preview

```bash
$ npm run serve
```
