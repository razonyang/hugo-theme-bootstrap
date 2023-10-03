# Changelog

## [1.2.4](https://github.com/razonyang/hugo-theme-bootstrap/compare/v1.2.3...v1.2.4) (2023-10-03)


### Continuous Integration

* **deps:** update packages ([#979](https://github.com/razonyang/hugo-theme-bootstrap/issues/979)) ([ab4a98b](https://github.com/razonyang/hugo-theme-bootstrap/commit/ab4a98bc56e04a9dd3d879b3bc0f5b480bd91363))


### Documentation 📝

* added another line encouraging people to add their own translation file to the GitHub repository. ([41ffa9a](https://github.com/razonyang/hugo-theme-bootstrap/commit/41ffa9aa6e39c8bf3877ff8fa085eb241c208bfd))
* added clarification on defaultContentLanguage parameter ([41ffa9a](https://github.com/razonyang/hugo-theme-bootstrap/commit/41ffa9aa6e39c8bf3877ff8fa085eb241c208bfd))
* added small description to defaultContentLanguage ([41ffa9a](https://github.com/razonyang/hugo-theme-bootstrap/commit/41ffa9aa6e39c8bf3877ff8fa085eb241c208bfd))
* added Spanish to the language list ([41ffa9a](https://github.com/razonyang/hugo-theme-bootstrap/commit/41ffa9aa6e39c8bf3877ff8fa085eb241c208bfd))
* reworded one line to avoid possible confusions ([41ffa9a](https://github.com/razonyang/hugo-theme-bootstrap/commit/41ffa9aa6e39c8bf3877ff8fa085eb241c208bfd))
* update documentations ([#977](https://github.com/razonyang/hugo-theme-bootstrap/issues/977)) ([41ffa9a](https://github.com/razonyang/hugo-theme-bootstrap/commit/41ffa9aa6e39c8bf3877ff8fa085eb241c208bfd))

## [1.2.3](https://github.com/razonyang/hugo-theme-bootstrap/compare/v1.2.2...v1.2.3) (2023-09-17)


### Bug Fixes 🐞

* Spanish translations improved ([#975](https://github.com/razonyang/hugo-theme-bootstrap/issues/975)) ([5f64923](https://github.com/razonyang/hugo-theme-bootstrap/commit/5f6492326961fc66558cb0e2307a1dbee51f5d4d))

## [1.2.2](https://github.com/razonyang/hugo-theme-bootstrap/compare/v1.2.1...v1.2.2) (2023-07-28)


### Bug Fixes 🐞

* adjust to Bootstrap v5.3.1 ([#967](https://github.com/razonyang/hugo-theme-bootstrap/issues/967)) ([faaf181](https://github.com/razonyang/hugo-theme-bootstrap/commit/faaf1818782f18dc99d1e8bc60b6ad63ed66a662))


### Styles 🎨

* align the search bar to middle of the header ([#969](https://github.com/razonyang/hugo-theme-bootstrap/issues/969)) ([d58856a](https://github.com/razonyang/hugo-theme-bootstrap/commit/d58856aec314d9769b052f7d65760c3dfa35ec0f))

## [1.2.1](https://github.com/razonyang/hugo-theme-bootstrap/compare/v1.2.0...v1.2.1) (2023-07-28)


### ⚠ BREAKING CHANGES

* remove the post.excerpt parameter

### Miscellaneous Chores

* release 1.2.1 ([6a73df1](https://github.com/razonyang/hugo-theme-bootstrap/commit/6a73df1ad24102a85323d6425f7f24574a60ed54))


### Styles 🎨

* show the description if set ([#964](https://github.com/razonyang/hugo-theme-bootstrap/issues/964)) ([2e5396d](https://github.com/razonyang/hugo-theme-bootstrap/commit/2e5396d9f259c07723b8ee6478041dfc2884fe60))
* smoothly scroll on slide component, such as the related posts ([#962](https://github.com/razonyang/hugo-theme-bootstrap/issues/962)) ([7af2b5e](https://github.com/razonyang/hugo-theme-bootstrap/commit/7af2b5e726f7b15a77b8b6dbb5fda2ee23694ec9))

## [1.2.0](https://github.com/razonyang/hugo-theme-bootstrap/compare/v1.1.0...v1.2.0) (2023-06-27)


### Features

* add Spanish translations ([#959](https://github.com/razonyang/hugo-theme-bootstrap/issues/959)) ([6854256](https://github.com/razonyang/hugo-theme-bootstrap/commit/68542561ad95ad2bc6cb8c535e5bd017fe1a28d6))

## [1.1.0](https://github.com/razonyang/hugo-theme-bootstrap/compare/v1.0.2...v1.1.0) (2023-06-16)


### Features

* **funding:** add support for Buy Me a Coffee ([decf0fe](https://github.com/razonyang/hugo-theme-bootstrap/commit/decf0fe9d3193c31aa6445e1da2296d2a6a3c3fa))

HBS CHANGELOG
=============

**The CHANGELOG are included in [Releases](https://github.com/razonyang/hugo-theme-bootstrap/releases) now.**

v0.68.0
-------

- Use Hugo Pipes for building assets.
- Remove `assets/css/custom.css`, use `assets/main/scss/_custom.scss` instead.
- Remove `assets/js/custom.js`, use `assets/main/js/custom.ts` instead.
- Add `assets/main/scss/_variables.scss` for overriding variables.
- Remove `assets/js/icons.js`, use `assets/icons/custom.js` instead.
- Remove `assets/js/katex.config.js`, use `assets/katex/js/options.ts` instead.
- Remove `assets/js/mermaid.config.js`, use `assets/mermaid/js/options.ts` instead.
- Remove `assets/js/viewer.config.js`, use `assets/viewer/js/options.ts` instead.
- Remove `assets/css/highlight.css`, use `assets/main/scss/_highlight.scss` instead.
