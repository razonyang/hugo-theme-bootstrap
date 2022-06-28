```bash
$ cd themes/hugo-theme-bootstrap
$ git fetch
$ git checkout [version]
$ cd ../../
$ hugo mod npm pack
$ npm install
$ git add themes/hugo-theme-bootstrap package.json package-lock.json
$ git commit -m 'Bump theme to [version]'
```
